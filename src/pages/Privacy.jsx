import LegalPage from '@/components/LegalPage';

const LAST_UPDATED = '14 August 2026';
const CONTACT_EMAIL = 'hello@blindspot.co.uk';

const emailLink = (text) => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold underline-offset-4 hover:underline">
    {text}
  </a>
);

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated={LAST_UPDATED}
      intro={
        <>
          Blindspot (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) respects your privacy.
          This policy explains what information we collect, why we collect it, and how we use it.
        </>
      }
      sections={[
        {
          heading: 'What we collect',
          body: 'When you use our Get Started form or Book a Call form, we collect your name, email address, business name, and any other details you choose to share with us, such as your industry or specific goals.',
        },
        {
          heading: 'How we use it',
          body: 'We use this information to respond to your enquiry, send you relevant information about our services, and improve how we work with businesses like yours. We do not sell or rent your information to third parties.',
        },
        {
          heading: 'Analytics',
          body: 'We use Google Analytics to understand how visitors use our site. This collects anonymised data about your visit, such as which pages you view and how long you stay. You can opt out of this through our cookie consent banner.',
        },
        {
          heading: 'How long we keep your data',
          body: 'We keep your information for as long as necessary to respond to your enquiry or provide our services, or as required by law.',
        },
        {
          heading: 'Your rights',
          body: (
            <>
              Under UK GDPR, you have the right to access, correct, or request deletion of your
              personal data at any time. To do so, contact us at {emailLink(CONTACT_EMAIL)}.
            </>
          ),
        },
        {
          heading: 'Changes to this policy',
          body: 'We may update this policy from time to time. Changes will be posted on this page.',
        },
        {
          heading: 'Contact us',
          body: (
            <>
              If you have any questions about this policy, contact us at {emailLink(CONTACT_EMAIL)}.
            </>
          ),
        },
      ]}
    />
  );
}