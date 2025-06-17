
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Laptop, LineChart, BadgeDollarSign, ExternalLink } from "lucide-react";

const Index = () => {
  const handleTryFido = () => {
    window.open('https://chatgpt.com/g/g-6849ed2b9ea48191a53c4f016cf0b29c-sba-loan-guidance-agent', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Tabs defaultValue="home" className="w-full">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto mb-8 bg-white/80 backdrop-blur-sm border border-blue-100">
            <TabsTrigger value="home" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 text-base font-bold rounded-none">Home</TabsTrigger>
            <TabsTrigger value="vision" className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 font-bold">Fido's Purpose</TabsTrigger>
          </TabsList>
          
          <TabsContent value="home">
            {/* Hero Section */}
            <div className="relative">
              <div className="pt-12 pb-16">
                <div className="text-center">
                  <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 text-sm font-medium mb-8 border border-blue-200">
                    <span className="mr-2">🤖</span>
                    Powered by Agentic Intelligence
                  </div>
                  
                  <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
                    Empower Your Business 
                    <br />
                    <span className="bg-gradient-to-r from-blue-600 to-sky-600 bg-clip-text text-transparent">with Fido</span>
                  </h1>
                  
                  <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
                    Unlock SBA Loans • Build Strong Credit • Plan Smarter
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-10 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" onClick={handleTryFido}>
                      Get Started Free
                    </Button>
                    <p className="text-gray-500 text-sm font-light">
                      No credit card required
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <div className="py-24 bg-white/60 backdrop-blur-sm rounded-2xl mb-8 border border-blue-100/50">
              <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Everything You Need to Grow
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                  Fido combines AI intelligence with financial expertise to accelerate your business success
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6">
                      <Laptop className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      SBA Loan Applications, Simplified
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido automates paperwork, checks your eligibility, and increases approval odds — without the stress.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-xl flex items-center justify-center mb-6">
                      <BadgeDollarSign className="w-7 h-7 text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Business Credit Intelligence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Track, build, and optimize your business credit with personalized coaching and step-by-step guidance.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6">
                      <LineChart className="w-7 h-7 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Auto-Generated Business Plans
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Tell Fido your goals. It builds dynamic, fundable plans perfectly aligned with lender criteria.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-sm hover:shadow-lg transition-all duration-300 rounded-xl">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mb-6">
                      <Calendar className="w-7 h-7 text-sky-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Built with Agentic Intelligence
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-light">
                      Fido isn't just a chatbot — it's a thinking agent working on your behalf 24/7.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* CTA Section */}
            <div className="py-24 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                  Start building smarter with AI-powered business tools designed for growth
                </p>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-12 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200" onClick={handleTryFido}>
                  Get Started Free
                </Button>
                <p className="mt-6 text-sm text-gray-500 font-light">
                  Your ambition + our agentic intelligence = unstoppable growth
                </p>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vision">
            <div className="max-w-5xl mx-auto py-16">
              <div className="text-center mb-20">
                <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">Our Vision</h1>
                <p className="text-2xl text-gray-600 font-light max-w-3xl mx-auto">A Trusted Partner for the Next Generation of Entrepreneurs</p>
              </div>

              <div className="space-y-16">
                {/* Opening Section */}
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-12 border border-blue-100/50">
                  <div className="text-center space-y-6">
                    <p className="text-2xl text-gray-700 font-light italic leading-relaxed">
                      "Every business starts with a goal."
                    </p>
                    <div className="space-y-4 text-lg text-gray-600 font-light max-w-3xl mx-auto">
                      <p>Sometimes it's to earn more for your family.</p>
                      <p>Sometimes it's to create freedom, stability, or something entirely new.</p>
                      <p className="text-blue-600 font-medium">No matter the reason, starting and growing a business takes courage.</p>
                    </div>
                    <div className="pt-6 border-t border-gray-200">
                      <p className="text-xl text-gray-800 font-semibold">At Fido, we understand the realities of that journey.</p>
                      <p className="text-lg text-gray-600 font-light mt-2">You wear every hat. You face every decision. You often go it alone.</p>
                      <p className="text-xl text-blue-600 font-bold mt-4">We built Fido to change that.</p>
                    </div>
                  </div>
                </div>

                {/* Built on Trust Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">Built on Trust, Designed to Help</h2>
                    <p className="text-xl text-gray-600 font-light mb-6 leading-relaxed">
                      Fido is your business co-pilot, a reliable, intelligent system that helps you get more done with less effort.
                    </p>
                    <p className="text-lg text-gray-700 font-medium mb-4">From day one, it works alongside you to:</p>
                  </div>
                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl p-8 border border-blue-100">
                    <ul className="space-y-4 text-lg text-gray-700">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="font-light">Create your website or landing page</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="font-light">Write content and ads that attract customers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="font-light">Help you apply for funding and build business credit</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1">•</span>
                        <span className="font-light">Track performance and suggest improvements automatically</span>
                      </li>
                    </ul>
                    <p className="text-lg text-gray-800 font-medium mt-6 pt-6 border-t border-blue-200">
                      It is consistent. It is proactive. And it always keeps your goals in focus.
                    </p>
                  </div>
                </div>

                {/* Agentic Intelligence Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 border border-blue-100/50">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Agentic Intelligence, Applied to Your Business</h2>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🤖</span>
                      </div>
                      <p className="text-lg text-gray-700 font-light">Not just another chatbot or template tool</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-100 to-sky-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <p className="text-lg text-gray-700 font-light">Built to act on your behalf automatically</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-cyan-100 to-cyan-200 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">🎯</span>
                      </div>
                      <p className="text-lg text-gray-700 font-light">Adapts to where you are and moves you forward</p>
                    </div>
                  </div>
                  <div className="mt-12 max-w-3xl mx-auto">
                    <p className="text-xl text-blue-600 font-medium text-center mb-6">This means:</p>
                    <div className="grid md:grid-cols-3 gap-6 text-center">
                      <p className="text-lg text-gray-600 font-light">Less time figuring out what to do next</p>
                      <p className="text-lg text-gray-600 font-light">Reduced trial-and-error of growth</p>
                      <p className="text-lg text-gray-600 font-light">Focus on your strengths while Fido handles the rest</p>
                    </div>
                  </div>
                </div>

                {/* Target Audience Section */}
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">For Business Owners Who Do It All</h2>
                  <p className="text-xl text-gray-600 font-light mb-8 max-w-3xl mx-auto">
                    We didn't build Fido for tech companies or corporate teams. We built it for people doing everything themselves:
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl p-6 border border-blue-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">The Freelancer</h3>
                      <p className="text-gray-600 font-light">Ready to grow beyond solo work</p>
                    </div>
                    <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-xl p-6 border border-emerald-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">The Local Business Owner</h3>
                      <p className="text-gray-600 font-light">Bringing in new clients</p>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl p-6 border border-purple-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">The First-Time Founder</h3>
                      <p className="text-gray-600 font-light">Applying for a loan for the first time</p>
                    </div>
                    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">The Side Hustler</h3>
                      <p className="text-gray-600 font-light">Turning income into a real operation</p>
                    </div>
                  </div>
                </div>

                {/* Values Section */}
                <div className="bg-gradient-to-r from-blue-600 to-sky-600 rounded-2xl p-12 text-white text-center">
                  <h2 className="text-4xl font-bold mb-8">What We Stand For</h2>
                  <p className="text-2xl font-light mb-8 max-w-4xl mx-auto leading-relaxed">
                    Helping small business owners succeed, faster, easier, and more confidently, through intelligent, trustworthy technology.
                  </p>
                  <div className="grid md:grid-cols-3 gap-8 text-lg font-light">
                    <p>Technology should work like a partner, not a puzzle</p>
                    <p>Automation should feel human, not robotic</p>
                    <p>Financial tools should empower you, not slow you down</p>
                  </div>
                  <p className="text-2xl font-bold mt-8">That is what Fido delivers.</p>
                </div>

                {/* Moving Forward Section */}
                <div className="text-center">
                  <h2 className="text-4xl font-bold text-gray-800 mb-8">Moving Forward, Together</h2>
                  <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-600 font-light">
                    <p>We are building Fido for the long haul because we know your journey doesn't end at launch.</p>
                    <div className="flex justify-center space-x-8 text-blue-600 font-medium py-6">
                      <span>It evolves.</span>
                      <span>•</span>
                      <span>It hits friction.</span>
                      <span>•</span>
                      <span>It requires new ideas.</span>
                    </div>
                    <p className="text-xl text-gray-800 font-semibold">Fido is here for all of it.</p>
                    <div className="pt-6">
                      <p className="text-xl text-blue-600 font-medium">Clear tools. Simple guidance. Real results.</p>
                      <p className="text-lg text-gray-700 mt-2">That is what we believe the future of business should feel like.</p>
                    </div>
                  </div>
                </div>

                {/* Final CTA */}
                <div className="text-center py-16 bg-gradient-to-t from-blue-50/50 to-transparent rounded-2xl">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">Try Fido Copilot For Free</h3>
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white px-12 py-5 text-xl font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 inline-flex items-center gap-3" onClick={handleTryFido}>
                    Try Fido For Free
                    <ExternalLink className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
