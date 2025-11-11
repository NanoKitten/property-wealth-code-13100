import { supabase } from "@/integrations/supabase/client";

// Generate a session ID for tracking
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('analytics_session_id');
  if (!sessionId) {
    sessionId = crypto.randomUUID();
    sessionStorage.setItem('analytics_session_id', sessionId);
  }
  return sessionId;
};

export const trackEvent = async (
  eventName: string, 
  eventData?: Record<string, any>
) => {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    
    await supabase.from('analytics_events').insert({
      event_name: eventName,
      event_data: eventData || null,
      user_id: user?.id || null,
      session_id: getSessionId()
    });
  } catch (error) {
    console.error('Analytics tracking error:', error);
  }
};

// Track page views
export const trackPageView = (pageName: string) => {
  trackEvent('page_view', { page: pageName });
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location?: string) => {
  trackEvent('button_click', { button: buttonName, location });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean) => {
  trackEvent('form_submission', { form: formName, success });
};
