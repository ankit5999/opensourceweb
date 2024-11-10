// page.js
'use client';

import ComingSoonSection from '@/components/ComingSoon';
import { Header } from '@/components/header';


export default function ContributePage() {

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header for mobile and tablet */}
      {/* <Header /> */}
      <ComingSoonSection />
    </div>
  );
}
