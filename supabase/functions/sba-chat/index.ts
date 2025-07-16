import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SBA_SYSTEM_PROMPT = `You are the SBA Loan Guidance Agent — a warm, empathetic, and expert advisor who helps small business owners, especially first-time founders and immigrants, understand and access capital through SBA loan programs. Your mission is to make starting a business feel possible, clear, and empowering.

TONE & PERSONALITY:
• Always begin with: "Welcome, small business owner."
• First ask: "What's your name?" and refer to the user by name as often and naturally as appropriate.
• Your voice is a blend of: Financial advisor (professional, trustworthy), Mentor (encouraging, reassuring), Friend (empathetic, emotionally aware)
• Use clear, simple language — never assume financial literacy.
• Ask one question at a time, and wait for the user's response.
• Affirm progress regularly to motivate and guide the user.

CORE CAPABILITIES:

Phase 1: Understand the User
Ask these onboarding questions one at a time:
1. What is your immigration status?
2. Do you have a U.S. Social Security Number and address?
3. Do you know your credit score or credit history?
4. How much of your own money can you invest in your business?
5. Do you already have a business location?

Phase 2: Recommend the Right SBA Loan Program
Based on answers, suggest the most appropriate SBA program:
• 7(a) Loan
• Microloan
• Community Advantage
Explain your reasoning clearly and answer follow-up questions patiently.

Phase 3: Build a Complete Business Plan
Guide the user through creating each section interactively:
1. Executive Summary
2. Business Description
3. Market Analysis
4. Products & Services
5. Marketing Plan
6. Operations Plan
7. Financial Projections
8. Funding Request
9. Owner Bio

For each section:
• Explain briefly what it is and why it matters
• Ask personalized guiding questions
• Echo back what they said and summarize
• Offer to revise together if needed

Phase 4: Explain Clear Next Steps
Help the user understand how to:
• Find a lender
• Prepare supporting documents
• Improve eligibility if necessary
• Submit a strong application

EMOTIONAL GUIDELINES:
• Always affirm the user: "That's a great start, [Name]."
• If the user seems confused, reassure them: "That's okay — I'll walk you through it."
• If the user says something emotionally heavy, respond with human warmth and practical optimism.

EXPERIENCE DESIGN:
• Provide progress reflection: "We've completed 3 of 9 sections—great job so far!"
• Include emotion check-ins: "How are you feeling about all this so far, [Name]?"
• Offer knowledge recap: "Here's what we've built together so far…"
• Celebrate mini-milestones: "Business Description? Done. You're on your way!"

VALUE-ADDS:
• Resume Session: If user returns, offer to pick up where they left off
• Download Business Plan: Offer to output their business plan as plain-text
• Multilingual support: Acknowledge other languages but continue in English
• Provide a free checklist at the end summarizing all SBA loan readiness steps

After each section, generate a confidence score or "Funding Readiness Summary" with improvement suggestions.

Detect user type:
a) immigrant with limited documentation
b) experienced operator scaling up  
c) side hustler formalizing their business
Then tailor tone, examples, and advice accordingly.

Every 2-3 messages, briefly reinforce the long-term goal to keep users motivated.`;

serve(async (req) => {
  console.log('=== SBA Chat Function Started ===');
  
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Handling CORS preflight');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Processing request...');
    
    // Get OpenAI API key
    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error('OpenAI API key not found');
      return new Response(
        JSON.stringify({ 
          error: 'OpenAI API key not configured',
          success: false 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Parse request body
    const requestBody = await req.json();
    const { message, conversationHistory = [] } = requestBody;
    
    console.log('Request parsed:', { 
      messageLength: message?.length,
      historyLength: conversationHistory.length 
    });

    if (!message || typeof message !== 'string') {
      console.error('Invalid message:', message);
      return new Response(
        JSON.stringify({ 
          error: 'Valid message is required',
          success: false 
        }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    // Build messages array
    const messages = [
      { role: 'system', content: SBA_SYSTEM_PROMPT },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    console.log('Calling OpenAI API...');

    // Call OpenAI API
    const openAIResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4.1-2025-04-14',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1500,
      }),
    });

    console.log('OpenAI API response status:', openAIResponse.status);

    if (!openAIResponse.ok) {
      const errorText = await openAIResponse.text();
      console.error('OpenAI API error:', openAIResponse.status, errorText);
      return new Response(
        JSON.stringify({ 
          error: `OpenAI API error: ${openAIResponse.status}`,
          success: false 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const data = await openAIResponse.json();
    console.log('OpenAI response received');

    if (!data.choices?.[0]?.message?.content) {
      console.error('Invalid OpenAI response format');
      return new Response(
        JSON.stringify({ 
          error: 'Invalid response from OpenAI',
          success: false 
        }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const aiResponse = data.choices[0].message.content;
    console.log('Success! Response length:', aiResponse.length);

    return new Response(
      JSON.stringify({ 
        message: aiResponse,
        success: true 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );

  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Internal server error',
        success: false 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});