import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/logo.png';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Link href="/login">
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white rounded-xl flex items-center justify-center">
                  <Image
                    src={logo}
                    alt="CodeBlaze Connect Logo"
                    width={44}
                    height={44}
                    className="w-7 h-7 sm:w-9 sm:h-9 lg:w-11 lg:h-11"
                    unoptimized
                  />
                </div>
                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight">
                  CodeBlaze <span className="text-orange-500">Connect</span>
                </h1>
              </div>
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Terms of Service</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Welcome to CodeBlaze Connect! These terms and conditions outline the rules and regulations for the use of
              our website and services.
            </p>
            <h2 className="text-2xl font-semibold mt-6">1. Introduction</h2>
            <p>
              By accessing this website, we assume you accept these terms and conditions. Do not continue to use
              CodeBlaze Connect if you do not agree to all of the terms and conditions stated on this page.
            </p>
            <h2 className="text-2xl font-semibold mt-6">2. Intellectual Property Rights</h2>
            <p>
              Other than the content you own, under these Terms, CodeBlaze and/or its licensors own all the
              intellectual property rights and materials contained in this Website. You are granted a limited license
              only for purposes of viewing the material contained on this Website.
            </p>
            <h2 className="text-2xl font-semibold mt-6">3. Restrictions</h2>
            <p>You are specifically restricted from all of the following:</p>
            <ul>
              <li>Publishing any Website material in any other media.</li>
              <li>Selling, sublicensing and/or otherwise commercializing any Website material.</li>
              <li>Publicly performing and/or showing any Website material.</li>
              <li>Using this Website in any way that is or may be damaging to this Website.</li>
              <li>Using this Website in any way that impacts user access to this Website.</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6">4. Your Content</h2>
            <p>
              In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images
              or other material you choose to display on this Website. By displaying Your Content, you grant CodeBlaze
              a non-exclusive, worldwide irrevocable, sub-licensable license to use, reproduce, adapt, publish,
              translate and distribute it in any and all media.
            </p>
            <h2 className="text-2xl font-semibold mt-6">5. No warranties</h2>
            <p>
              This Website is provided “as is,” with all faults, and CodeBlaze express no representations or
              warranties, of any kind related to this Website or the materials contained on this Website.
            </p>
            <h2 className="text-2xl font-semibold mt-6">6. Limitation of liability</h2>
            <p>
              In no event shall CodeBlaze, nor any of its officers, directors and employees, shall be held liable for
              anything arising out of or in any way connected with your use of this Website whether such liability is
              under contract.
            </p>
            <h2 className="text-2xl font-semibold mt-6">7. Governing Law & Jurisdiction</h2>
            <p>
              These Terms will be governed by and interpreted in accordance with the laws of the State, and you submit
              to the non-exclusive jurisdiction of the state and federal courts located in for the resolution of any
              disputes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfServicePage;
