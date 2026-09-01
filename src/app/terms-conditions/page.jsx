import GradientText from '@/components/GradientText';
import LegalDocument from '@/components/legal/LegalDocument';
import { termsConditions } from '@/lib/data';

export const metadata = {
  title: 'Terms & Conditions',
  description:
    "Review the terms and conditions for using Health Sync's website and services. Understand our policies on privacy, refunds, and more. Ensure compliance with our terms for a seamless experience.",
};

export default function TermsConditions() {
  return (
    <LegalDocument
      title='Terms & Conditions'
      effectiveDate='6/21/2023'
      items={termsConditions}
      intro={
        <p>
          Thank you for choosing to use Health Sync's App. These Terms and
          Conditions ("Terms") govern your access to and use of the App. By
          accessing or using the App, you agree to be bound by these Terms. If
          you do not agree to these Terms, please refrain from using the App.
        </p>
      }
    >
      <p>
        If you have any questions or concerns about these Terms, please contact
        us at{' '}
        <a
          href='mailto:admin@health-sync.org'
          className='font-semibold hover:underline'
        >
          <GradientText>admin@health-sync.org</GradientText>
        </a>
      </p>
      <p>
        By using the App, you acknowledge that you have read, understood, and
        agreed to these Terms and Conditions.
      </p>
    </LegalDocument>
  );
}
