import { supabase } from "@/integrations/supabase/client";

interface AnalyticsEvent {
  event_name: string;
  event_data?: Record<string, any>;
  user_id?: string;
}

export const trackEvent = async ({ event_name, event_data, user_id }: AnalyticsEvent) => {
  try {
    const sessionId = sessionStorage.getItem('analytics_session_id') || 
      `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    if (!sessionStorage.getItem('analytics_session_id')) {
      sessionStorage.setItem('analytics_session_id', sessionId);
    }

    const { error } = await supabase
      .from('analytics_events')
      .insert({
        event_name,
        event_data,
        user_id,
        session_id: sessionId
      });

    if (error) {
      console.error('Analytics tracking error:', error);
    }
  } catch (error) {
    console.error('Failed to track event:', error);
  }
};

// Common event tracking functions
export const analytics = {
  pageView: (page: string) => trackEvent({ 
    event_name: 'page_view', 
    event_data: { page } 
  }),
  
  buttonClick: (button_name: string, location?: string) => trackEvent({ 
    event_name: 'button_click', 
    event_data: { button_name, location } 
  }),
  
  formSubmit: (form_name: string, success: boolean) => trackEvent({ 
    event_name: 'form_submit', 
    event_data: { form_name, success } 
  }),
  
  linkClick: (link_url: string, link_text?: string) => trackEvent({ 
    event_name: 'link_click', 
    event_data: { link_url, link_text } 
  }),
};
