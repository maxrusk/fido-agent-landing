import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Laptop, LineChart, BadgeDollarSign, ExternalLink, Mail, Linkedin, MessageCircle, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import fidoLogo from "@/assets/fido-logo.png";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAnalytics } from "@/hooks/useAnalytics";
import { SocialShare } from "@/components/SocialShare";
import { SBAChat } from "@/components/SBAChat";

const Index = () => {
  const { trackEvent } = useAnalytics();
  const [showWaitlist, setShowWaitlist] = useState(false);
  const [waitlist, setWaitlist] = useState({ name: "", email: "" });
  const [joined, setJoined] = useState(false);

  const handleTryFido = () => {
    trackEvent({ 
      event_type: 'button_click', 
      event_data: { button: 'try_fido', url: 'https://chatgpt.com/g/g-6849ed2b9ea48191a53c4f016cf0b29c-sba-loan-guidance-agent' }
    });
    window.open('https://chatgpt.com/g/g-6849ed2b9ea48191a53c4f016cf0b29c-sba-loan-guidance-agent', '_blank');
  };

  const handleWaitlistToggle = () => {
    const newState = !showWaitlist;
    setShowWaitlist(newState);
    trackEvent({ 
      event_type: 'waitlist_toggle', 
      event_data: { action: newState ? 'open' : 'close' }
    });
  };

  const handleLogoClick = () => {
    trackEvent({ 
      event_type: 'logo_click', 
      event_data: { destination: 'home' }
    });
  };

  const handleWaitlistSubmit = async (e) => {
    e.preventDefault();
    
    trackEvent({ 
      event_type: 'waitlist_form_submitted', 
      event_data: { email: waitlist.email }
    });
    
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([{ name: waitlist.name, email: waitlist.email }]);
      
      if (error) throw error;
      
      setJoined(true);
      setWaitlist({ name: "", email: "" });
      
      trackEvent({ 
        event_type: 'waitlist_joined_success', 
        event_data: { email: waitlist.email }
      });
    } catch (error) {
      console.error('Error joining waitlist:', error);
      trackEvent({ 
        event_type: 'waitlist_joined_error', 
        event_data: { error: error.message }
      });
    }
  };

  return (
    <>
      {/* SEO Schema Markup */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Fido - AI Co-Pilot for Business Funding",
          "description": "Get SBA loans, build business credit, and grow your company with Fido's AI-powered guidance.",
          "url": "https://fidofinancial.ai",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Fido AI Co-Pilot",
            "applicationCategory": "Business Finance Software",
            "operatingSystem": "Web Browser",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            }
          }
        })}
      </script>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-rose-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex justify-between items-center mb-8">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick} className="group relative hover:scale-105 transition-all duration-300 ease-out">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-rose-600/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img src={fidoLogo} alt="Fido Logo" className="relative h-12 w-auto drop-shadow-sm group-hover:drop-shadow-md transition-all duration-300" />
          </Link>
          <div>
            <button
              onClick={handleWaitlistToggle}
              className="text-sm font-medium px-4 py-2 rounded-full bg-gradient-to-r from-rose-500 to-indigo-500 text-white shadow hover:opacity-90 transition"
            >
              {showWaitlist ? "Close" : "Join the Waitlist"}
            </button>
          </div>
        </div>

        {showWaitlist && (
          <div className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Join the Waitlist</h2>
            {joined ? (
              <p className="text-green-600">Thanks for joining! We'll be in touch soon.</p>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    value={waitlist.name}
                    onChange={(e) => setWaitlist({ ...waitlist, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={waitlist.email}
                    onChange={(e) => setWaitlist({ ...waitlist, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-900"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white">
                  Join Now
                </Button>
              </form>
            )}
          </div>
        )}
        
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto mb-8 bg-transparent border-none p-0 gap-4">
            <TabsTrigger value="home" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black text-gray-500 bg-transparent border-2 border-transparent text-base font-bold rounded-xl px-8 py-3 hover:bg-gray-50">Home</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black text-gray-500 bg-transparent border-2 border-transparent font-bold rounded-xl px-8 py-3 hover:bg-gray-50">Our Vision</TabsTrigger>
            <TabsTrigger value="contact" className="data-[state=active]:bg-white data-[state=active]:text-black data-[state=active]:border-2 data-[state=active]:border-black text-gray-500 bg-transparent border-2 border-transparent font-bold rounded-xl px-8 py-3 hover:bg-gray-50">Contact</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            {/* Hero Section */}
            <div className="relative">
              <div className="pt-12 pb-16">
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-indigo-100 to-rose-100 text-indigo-800 text-sm font-medium mb-8 border border-indigo-200">
                    <span className="mr-2">🤖</span>
                    Powered by Agentic Intelligence
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                    For Business Owners Who Do It All
                    <br />
                    <span className="bg-gradient-to-r from-indigo-600 to-rose-600 bg-clip-text text-transparent">Meet Your New Co-Pilot</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Get funding. Build credit. Plan smarter. And grow with AI that works alongside you.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <SBAChat />
                    <p className="text-gray-500 text-sm font-light">
                      No credit card. Just momentum.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* How It Works Section */}
            <div className="py-16 mb-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                  How Fido Helps, Step by Step
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
                  Your journey from idea to funding, simplified
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-700">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Answer a few questions</h3>
                  <p className="text-gray-600 font-light">Tell Fido about your business goals and current situation</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-700">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Fido checks eligibility & builds your plan</h3>
                  <p className="text-gray-600 font-light">Get a personalized roadmap with loan options and requirements</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-indigo-700">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">Apply with confidence</h3>
                  <p className="text-gray-600 font-light">Fido supports you along the way with smart guidance</p>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white/60 backdrop-blur-sm rounded-2xl mb-8 border border-blue-100/50">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  You Don't Have to Build Alone
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Fido combines AI intelligence with financial expertise to accelerate your business success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Laptop className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Get Funded Without the Frustration
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido automates SBA loan paperwork, checks eligibility, and boosts your chances—stop guessing and start growing.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <BadgeDollarSign className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Build Credit That Opens Doors
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Track and optimize your business credit with step-by-step guidance to qualify for your needs.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <LineChart className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Turn Your Goals Into a Fundable Plan
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido turns your vision into a lender-ready business plan designed for results.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl group">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-7 h-7 text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Not Just AI. Agentic Intelligence.
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido is more than a chatbot—it acts on your behalf, making smart decisions for you 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  You Don't Have to Build Alone.
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Start your business journey with a smarter, stronger co-pilot. No credit card. Just momentum.
                </p>
                <SBAChat trigger={
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white px-12 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                    Get Started Free
                  </Button>
                } />
                <p className="mt-6 text-sm text-gray-500 font-light">
                  Your ambition + our agentic intelligence = unstoppable growth
                </p>
              </div>
            </div>

            {/* Social Share Section */}
            <div className="py-16">
              <div className="max-w-4xl mx-auto">
                <SocialShare />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vision">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 p-8 md:p-12">
              <div className="max-w-4xl mx-auto py-12">
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Our Vision</h1>
                  <p className="text-xl text-gray-600 font-light">A Trusted Partner for the Next Generation of Entrepreneurs</p>
                </div>

                <div className="prose prose-lg max-w-none text-gray-700 space-y-8">
                  <div className="text-xl leading-relaxed font-light">
                    <p className="mb-6">Every business starts with a goal.</p>
                    <p className="mb-2">Sometimes it's to earn more for your family.</p>
                    <p className="mb-2">Sometimes it's to create freedom, stability, or something entirely new.</p>
                    <p className="mb-6">No matter the reason, starting and growing a business takes courage.</p>
                    <p className="mb-6 font-medium">At Fido, we understand the realities of that journey.</p>
                    <p className="mb-2">You wear every hat. You face every decision. You often go at it alone.</p>
                    <p className="font-semibold">We built Fido to change that.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Built on Trust, Designed to Help</h2>
                    <p className="text-xl mb-6 font-light">Fido is your business co-pilot.  A reliable, trustworthy companion and intelligent system that helps you get more while focusing on what matters.</p>
                    <p className="text-lg mb-4 font-light">From day one, it works alongside you to:</p>
                    <ul className="text-lg space-y-2 mb-6 pl-6 font-light">
                      <li>• Create your website or landing page</li>
                      <li>• Write content and ads that attract customers</li>
                      <li>• Help you apply for funding and build business credit</li>
                      <li>• Track performance and suggest improvements automatically</li>
                    </ul>
                    <p className="text-lg font-light">It is consistent. It is proactive. And it always keeps your goals in focus.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Agentic Intelligence, Applied to Your Business</h2>
                    <p className="text-xl mb-4 font-light">Fido is powered by a new class of AI, what we call agentic intelligence.</p>
                    <p className="text-lg mb-6 font-light">It is not just another chatbot or template tool. It is built to act on your behalf.</p>
                    <p className="text-lg mb-4 font-light">This means:</p>
                    <ul className="text-lg space-y-2 mb-6 pl-6 font-light">
                      <li>• You spend less time figuring out what to do next</li>
                      <li>• You reduce the trial-and-error of growth</li>
                      <li>• You stay focused on your strengths while Fido handles the rest</li>
                    </ul>
                    <p className="text-lg font-light">Whether you are launching, growing, or refining your business, Fido adapts to where you are and helps move you forward.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">For Business Owners Who Do It All</h2>
                    <p className="text-lg mb-4 font-light">We didn't build Fido for tech companies or corporate teams.</p>
                    <p className="text-lg mb-4 font-light">We built it for people doing everything themselves:</p>
                    <ul className="text-lg space-y-2 mb-6 pl-6 font-light">
                      <li>• The freelancer ready to grow</li>
                      <li>• The local business owner bringing in new clients</li>
                      <li>• The founder applying for a loan for the first time</li>
                      <li>• The seller turning side income into a real operation</li>
                    </ul>
                    <p className="text-lg font-light">Fido simplifies what used to be complex so you can spend less time managing systems and more time growing your business.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">What We Stand For</h2>
                    <p className="text-xl mb-6 font-medium">Helping small business owners succeed, faster, easier, and more confidently, through intelligent, trustworthy technology.</p>
                    <p className="text-lg mb-2 font-light">We believe technology should work like a partner, not a puzzle.</p>
                    <p className="text-lg mb-2 font-light">That automation should feel human, not robotic.</p>
                    <p className="text-lg mb-6 font-light">And that financial tools should empower you, not slow you down.</p>
                    <p className="text-lg font-semibold">That is what Fido delivers.</p>
                  </div>

                  <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Moving Forward, Together</h2>
                    <p className="text-lg mb-6 font-light">We are building Fido for the long haul because we know your journey doesn't end at launch.</p>
                    <p className="text-lg mb-2 font-light">It evolves.</p>
                    <p className="text-lg mb-2 font-light">It hits friction.</p>
                    <p className="text-lg mb-6 font-light">It requires new ideas and smart tools.</p>
                    <p className="text-lg mb-6 font-medium">Fido is here for all of it.</p>
                    <p className="text-lg mb-2 font-light">Clear tools. Simple guidance. Real results.</p>
                    <p className="text-lg font-light">That is what we believe the future of business should feel like.</p>
                  </div>

                  <div className="text-center py-12 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl">
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Try Fido Copilot For Free</h3>
                    <SBAChat trigger={
                      <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2">
                        Try Fido For Free
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    } />
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="contact">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100/50 p-8 md:p-12">
              <div className="max-w-4xl mx-auto py-12">
                <div className="text-center mb-16">
                  <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Contact Us</h1>
                  <p className="text-xl text-gray-600 font-light">Get in touch with our team</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {/* Contact Information */}
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                    
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4 group hover:bg-blue-50/50 rounded-lg p-3 transition-colors duration-200">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                          <p className="text-gray-600">founders@fidofinancial.ai</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 group hover:bg-emerald-50/50 rounded-lg p-3 transition-colors duration-200">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Linkedin className="w-6 h-6 text-emerald-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">LinkedIn</h3>
                          <p className="text-gray-600">Fido Financial</p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4 group hover:bg-purple-50/50 rounded-lg p-3 transition-colors duration-200">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <MessageCircle className="w-6 h-6 text-purple-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-800">Reddit</h3>
                          <p className="text-gray-600">u/fidofinancial</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Contact Form */}
                  <div className="bg-white/60 backdrop-blur-sm rounded-xl p-8 border border-blue-100/50">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
                    <form className="space-y-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                        <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Your name" />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                        <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="your@email.com" />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                        <textarea id="message" rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200" placeholder="Tell us how we can help you..." />
                      </div>

                      <Button type="submit" className="w-full bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white py-3 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
                        Send Message
                      </Button>
                    </form>
                  </div>
                </div>

                <div className="text-center py-12 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl mt-12">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
                  <SBAChat trigger={
                    <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-rose-600 hover:from-indigo-700 hover:to-rose-700 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-2">
                      Try Fido For Free
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  } />
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>

    {/* Floating Chat Button */}
    <div className="fixed bottom-8 right-8 z-50">
      <SBAChat trigger={
        <Button 
          size="lg" 
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-primary-glow hover:from-primary-glow hover:to-primary shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      } />
    </div>
    </>
  );
};
export default Index;