-- Create analytics tables
CREATE TABLE public.analytics_sessions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_id UUID,
  ip_address TEXT,
  user_agent TEXT,
  referrer TEXT,
  started_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  last_activity TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.analytics_page_views (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_id UUID,
  page_path TEXT NOT NULL,
  page_title TEXT,
  referrer TEXT,
  viewed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

CREATE TABLE public.analytics_events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  user_id UUID,
  event_type TEXT NOT NULL,
  event_data JSONB,
  page_path TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX idx_analytics_sessions_session_id ON public.analytics_sessions(session_id);
CREATE INDEX idx_analytics_sessions_user_id ON public.analytics_sessions(user_id);
CREATE INDEX idx_analytics_sessions_started_at ON public.analytics_sessions(started_at);

CREATE INDEX idx_analytics_page_views_session_id ON public.analytics_page_views(session_id);
CREATE INDEX idx_analytics_page_views_user_id ON public.analytics_page_views(user_id);
CREATE INDEX idx_analytics_page_views_viewed_at ON public.analytics_page_views(viewed_at);

CREATE INDEX idx_analytics_events_session_id ON public.analytics_events(session_id);
CREATE INDEX idx_analytics_events_user_id ON public.analytics_events(user_id);
CREATE INDEX idx_analytics_events_event_type ON public.analytics_events(event_type);
CREATE INDEX idx_analytics_events_created_at ON public.analytics_events(created_at);

-- Enable Row Level Security
ALTER TABLE public.analytics_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_page_views ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics_events ENABLE ROW LEVEL SECURITY;

-- Create policies to allow anyone to insert analytics data
CREATE POLICY "Anyone can insert sessions" ON public.analytics_sessions FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert page views" ON public.analytics_page_views FOR INSERT WITH CHECK (true);
CREATE POLICY "Anyone can insert events" ON public.analytics_events FOR INSERT WITH CHECK (true);

-- Only admins can read analytics data (you can adjust this later)
CREATE POLICY "No public access to sessions" ON public.analytics_sessions FOR SELECT USING (false);
CREATE POLICY "No public access to page views" ON public.analytics_page_views FOR SELECT USING (false);
CREATE POLICY "No public access to events" ON public.analytics_events FOR SELECT USING (false);