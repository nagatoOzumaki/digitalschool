export const TRACKING_ID = 'G-NRF00L70Z6';

export const pageview = (url) => {
  window.gtag('config', TRACKING_ID, {
    page_path: url,
  });
};
export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
