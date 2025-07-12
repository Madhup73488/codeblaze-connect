import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/../public/logo.png';

const PrivacyPolicyPage = () => {
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
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p>
              Your privacy is important to us. It is CodeBlaze Connect's policy to respect your privacy regarding any
              information we may collect from you across our website.
            </p>
            <h2 className="text-2xl font-semibold mt-6">1. Information we collect</h2>
            <p>
              We only ask for personal information when we truly need it to provide a service to you. We collect it by
              fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and
              how it will be used.
            </p>
            <h2 className="text-2xl font-semibold mt-6">2. How we use your information</h2>
            <p>
              We use the information we collect in various ways, including to:
            </p>
            <ul>
              <li>Provide, operate, and maintain our website</li>
              <li>Improve, personalize, and expand our website</li>
              <li>Understand and analyze how you use our website</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you, either directly or through one of our partners</li>
            </ul>
            <h2 className="text-2xl font-semibold mt-6">3. Log Files</h2>
            <p>
              CodeBlaze Connect follows a standard procedure of using log files. These files log visitors when they
              visit websites. All hosting companies do this and a part of hosting services' analytics.
            </p>
            <h2 className="text-2xl font-semibold mt-6">4. Cookies and Web Beacons</h2>
            <p>
              Like any other website, CodeBlaze Connect uses 'cookies'. These cookies are used to store information
              including visitors' preferences, and the pages on the website that the visitor accessed or visited.
            </p>
            <h2 className="text-2xl font-semibold mt-6">5. Third Party Privacy Policies</h2>
            <p>
              CodeBlaze Connect's Privacy Policy does not apply to other advertisers or websites. Thus, we are
              advising you to consult the respective Privacy Policies of these third-party ad servers for more
              detailed information.
            </p>
            <h2 className="text-2xl font-semibold mt-6">6. Children's Information</h2>
            <p>
              Another part of our priority is adding protection for children while using the internet. We encourage
              parents and guardians to observe, participate in, and/or monitor and guide their online activity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
