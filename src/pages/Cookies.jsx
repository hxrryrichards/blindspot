import LegalPage from '@/components/LegalPage';

const LAST_UPDATED = '14 August 2026';
const CONTACT_EMAIL = 'hello@blindspot.co.uk';

const emailLink = (text) => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold underline-offset-4 hover:underline">
    {text}
  </a>
);

export default function Cookies() {
  return (
    <LegalPage
      title="Cookies Policy"
      lastUpdated={LAST_UPDATED}
      intro="This page explains how Blindspot uses cookies on our website."
      sections={[
        {
          heading: 'What are cookies',
          body: 'Cookies are small text files stored on your device when you visit a website. They help websites function properly and, in some cases, help us understand how visitors use our site.',
        },
        {
          heading: 'Cookies we use',
          body: 'We use Google Analytics cookies to understand how visitors use our site, such as which pages are viewed and how long visitors stay. This data is anonymised and does not identify you personally.',
        },
        {
          heading: 'Managing cookies',
          body: 'You can accept or decline non-essential cookies through the consent banner shown when you first visit our site. You can also manage or delete cookies through your browser settings at any time.',
        },
        {
          heading: 'Contact us',
          body: (
            <>
              If you have any questions about our use of cookies, contact us at {emailLink(CONTACT_EMAIL)}.
            </>
          ),
        },
      ]}
    />
  );
}