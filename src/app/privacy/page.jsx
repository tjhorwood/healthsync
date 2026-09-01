import LegalDocument from '@/components/legal/LegalDocument';
import { privacyPolicies } from '@/lib/data';

export const metadata = {
  title: 'Privacy Policy',
  description:
    'Learn how Health Sync collects, uses, and protects your personal information. Our Privacy Policy outlines our commitment to safeguarding your data and respecting your privacy.',
};

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      title='Privacy Policy'
      effectiveDate='6/21/2023'
      items={privacyPolicies}
      intro={
        <p>
          Thank you for using Health Sync’s app. This Privacy Policy describes
          how Health Sync ("we," "us," or "our") collects, uses, and discloses
          information when you use the App. Your privacy is important to us, and
          we are committed to protecting your personal information. By accessing
          or using the App, you agree to the terms of this Privacy Policy.
        </p>
      }
    >
      <p>
        Please note that this Privacy Policy only applies to the App and does
        not govern the practices of third-party websites or services linked to
        or from the App. We encourage you to review the privacy policies of
        those third parties before providing them with any personal information.
      </p>
      <p>
        By using the App, you acknowledge that you have read and understood this
        Privacy Policy and agree to be bound by its terms.
      </p>
    </LegalDocument>
  );
}
