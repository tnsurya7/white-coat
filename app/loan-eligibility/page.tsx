import { Metadata } from 'next';
import LoanHero from '@/components/loan/LoanHero';
import WhoCanApply from '@/components/loan/WhoCanApply';
import LoanDetails from '@/components/loan/LoanDetails';
import DocumentsRequired from '@/components/loan/DocumentsRequired';
import SpecialBenefits from '@/components/loan/SpecialBenefits';
import LoanFAQ from '@/components/loan/LoanFAQ';

export const metadata: Metadata = {
  title: 'NRI Doctor Loan Eligibility | WhiteCoat',
  description: 'Complete guide to home loan eligibility for NRI doctors. Get up to 80% financing with special benefits and faster approval.',
  openGraph: {
    title: 'NRI Doctor Loan Eligibility',
    description: 'Home loan guide for NRI doctors investing in Indian real estate',
  },
};

export default function LoanEligibilityPage() {
  return (
    <>
      <LoanHero />
      <WhoCanApply />
      <LoanDetails />
      <DocumentsRequired />
      <SpecialBenefits />
      <LoanFAQ />
    </>
  );
}
