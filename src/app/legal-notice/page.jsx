import LegalDocument from '@/components/legal/LegalDocument';
import { legalNotices } from '@/lib/data';

export const metadata = {
  title: 'Legal Notice',
  description:
    "Read the legal notices related to Health Sync's website, including disclaimers, copyright information, and other legal statements. Stay informed about your rights and responsibilities.",
};

export default function LegalNoticePage() {
  return (
    <LegalDocument
      title='Legal Notice'
      items={legalNotices}
      intro={
        <p>
          This Legal Notice ("Notice") governs your use of Health Sync App. By
          accessing or using the App, you agree to be bound by this Notice. If
          you do not agree to this Notice, please refrain from using the App.
        </p>
      }
    >
      <p>
        By using the App, you acknowledge that you have read, understood, and
        agreed to this Legal Notice.
      </p>
    </LegalDocument>
  );
}
