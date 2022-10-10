export const TRACKING_ID = '336633162';

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
