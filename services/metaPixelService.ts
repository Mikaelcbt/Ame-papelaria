
export const trackMetaEvent = async (eventName: string, eventId?: string) => {
  const id = eventId || `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  // 1. Track via Browser Pixel (if available)
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, {}, { eventID: id });
  }

  // 2. Track via Conversions API (Backend)
  try {
    await fetch('/api/meta-event', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event_name: eventName,
        event_id: id,
      }),
    });
  } catch (error) {
    console.error('Error tracking Meta event via CAPI:', error);
  }
};
