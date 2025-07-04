import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface AnalyticsEvent {
  event_type: string;
  event_data?: any;
  page_path?: string;
}

export const useAnalytics = () => {
  const sessionId = useRef<string>();

  useEffect(() => {
    // Generate unique session ID
    sessionId.current = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    // Track session start
    trackSession();
    
    // Track page view
    trackPageView();

    // Track page visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        updateSessionActivity();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const trackSession = async () => {
    try {
      await supabase.from('analytics_sessions').insert({
        session_id: sessionId.current,
        ip_address: await getClientIP(),
        user_agent: navigator.userAgent,
        referrer: document.referrer || null,
      });
    } catch (error) {
      console.error('Error tracking session:', error);
    }
  };

  const trackPageView = async (path?: string) => {
    try {
      await supabase.from('analytics_page_views').insert({
        session_id: sessionId.current,
        page_path: path || window.location.pathname,
        page_title: document.title,
        referrer: document.referrer || null,
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  const trackEvent = async ({ event_type, event_data, page_path }: AnalyticsEvent) => {
    try {
      await supabase.from('analytics_events').insert({
        session_id: sessionId.current,
        event_type,
        event_data: event_data || {},
        page_path: page_path || window.location.pathname,
      });
    } catch (error) {
      console.error('Error tracking event:', error);
    }
  };

  const updateSessionActivity = async () => {
    try {
      await supabase
        .from('analytics_sessions')
        .update({ last_activity: new Date().toISOString() })
        .eq('session_id', sessionId.current);
    } catch (error) {
      console.error('Error updating session activity:', error);
    }
  };

  const getClientIP = async (): Promise<string | null> => {
    try {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      return data.ip;
    } catch {
      return null;
    }
  };

  return { trackEvent, trackPageView };
};