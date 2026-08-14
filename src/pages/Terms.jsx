import LegalPage from '@/components/LegalPage';

const LAST_UPDATED = '14 August 2026';
const CONTACT_EMAIL = 'hello@blindspot.co.uk';

const emailLink = (text) => (
  <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-gold underline-offset-4 hover:underline">
    {text}
  </a>
);

export default function Terms() {
  return (
    <LegalPage
      title="Terms and Conditions"
      lastUpdated={LAST_UPDATED}
      intro="These terms govern your use of the Blindspot website and any services you purchase from us."
      sections={[
        {
          heading: 'Our services',
          body: 'Blindspot provides marketing services including SEO, content creation, social media management, and related services as outlined on our Services page. Exact deliverables are agreed with each client individually before work begins.',
        },
        {
          heading: 'Payment terms',
          body: 'Services are billed monthly unless otherwise agreed in writing. Payment is due as specified in your individual agreement with us.',
        },
        {
          heading: 'Cancellation',
          body: 'Our services run month to month. You may cancel at any time with written notice, in line with the terms agreed at the start of your engagement.',
        },
        {
          heading: 'Our guarantee',
          body: 'Our Transform package includes a 90 day guarantee. If you are not seeing measurable progress within 90 days of starting, we will work with you to make it right, which may include additional work, adjusted scope, or a refund at our discretion.',
        },
        {
          heading: 'Limitation of liability',
          body: 'While we work hard to deliver strong results, marketing outcomes depend on many factors outside our direct control, including market conditions and platform algorithm changes. We do not guarantee specific results outside of what is explicitly stated in your service package.',
        },
        {
          heading: 'Intellectual property',
          body: 'Content we create for you becomes your property once paid for in full. Our own internal processes, tools, and strategies remain our intellectual property.',
        },
        {
          heading: 'Governing law',
          body: 'These terms are governed by the laws of England and Wales.',
        },
        {
          heading: 'Contact us',
          body: (
            <>
              If you have any questions about these terms, contact us at {emailLink(CONTACT_EMAIL)}.
            </>
          ),
        },
      ]}
    />
  );
}