// Google Analytics loader, gated by cookie consent.
// Set your Measurement ID here to enable tracking (e.g. 'G-XXXXXXXXXX').
const GA_MEASUREMENT_ID = 'G-J122GSMWC4';
const CONSENT_KEY = 'blindspot-cookie-consent';

export function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY);
  } catch {
    return null;
  }
}

export function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* ignore */
  }
}

export function initAnalytics() {
  if (!GA_MEASUREMENT_ID) return;
  if (getConsent() !== 'accepted') return;
  if (window.gtag) return;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}