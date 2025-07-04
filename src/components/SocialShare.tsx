import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Linkedin, Twitter, Facebook, Share2, Check } from 'lucide-react';
import { useAnalytics } from '@/hooks/useAnalytics';

interface SocialShareProps {
  url?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'compact';
}

export const SocialShare = ({ 
  url = window.location.href,
  title = "Meet Fido - Your AI Co-Pilot for Business Funding",
  description = "Get SBA loans, build credit, and grow your business with AI guidance. No credit card required.",
  variant = 'default'
}: SocialShareProps) => {
  const { trackEvent } = useAnalytics();
  const [copied, setCopied] = useState(false);

  const shareData = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${title} - ${description}`)}&url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`
  };

  const handleShare = (platform: string, shareUrl: string) => {
    trackEvent({
      event_type: 'social_share',
      event_data: { platform, url, title }
    });
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      trackEvent({
        event_type: 'link_copied',
        event_data: { url }
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy link:', error);
    }
  };

  if (variant === 'compact') {
    return (
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('linkedin', shareData.linkedin)}
          className="p-2"
          aria-label="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => handleShare('twitter', shareData.twitter)}
          className="p-2"
          aria-label="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={handleCopyLink}
          className="p-2"
          aria-label="Copy link"
        >
          {copied ? <Check className="w-4 h-4 text-green-600" /> : <Share2 className="w-4 h-4" />}
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-blue-100/50">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
        <Share2 className="w-5 h-5" />
        Share Fido with Other Business Owners
      </h3>
      <p className="text-gray-600 mb-6 text-sm">
        Help other entrepreneurs discover AI-powered business funding solutions
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <Button
          onClick={() => handleShare('linkedin', shareData.linkedin)}
          className="bg-[#0077B5] hover:bg-[#005885] text-white flex items-center gap-2"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </Button>
        
        <Button
          onClick={() => handleShare('twitter', shareData.twitter)}
          className="bg-[#1DA1F2] hover:bg-[#0d8bd9] text-white flex items-center gap-2"
        >
          <Twitter className="w-4 h-4" />
          Twitter
        </Button>
        
        <Button
          onClick={() => handleShare('facebook', shareData.facebook)}
          className="bg-[#1877F2] hover:bg-[#166fe5] text-white flex items-center gap-2"
        >
          <Facebook className="w-4 h-4" />
          Facebook
        </Button>
        
        <Button
          onClick={handleCopyLink}
          variant="outline"
          className="flex items-center gap-2"
        >
          {copied ? (
            <>
              <Check className="w-4 h-4 text-green-600" />
              Copied!
            </>
          ) : (
            <>
              <Share2 className="w-4 h-4" />
              Copy Link
            </>
          )}
        </Button>
      </div>
    </div>
  );
};