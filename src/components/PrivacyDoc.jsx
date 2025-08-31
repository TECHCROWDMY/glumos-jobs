import React from 'react';

const PrivacyDoc = () => {
  return (
    <div className="font-circularStdBook container mx-auto p-4 md:p-8 bg-white rounded-lg my-8 md:pt-[96px]">
      <h1 className="pt-[64px] text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Privacy Policy for Glumos</h1>

      <p className="text-sm text-gray-500 mb-6"><strong>Effective Date:</strong> 26 August 2025</p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This Privacy Policy describes how Glumos (the "Site," "we," "us," or "our") handles user information. We do not collect, store, or process any personal information from visitors to our Site.
      </p>
      <p className="text-gray-700 leading-relaxed mb-8">
        By using our Site, you agree to this no-data-collection policy.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-6">1. Information We Do Not Collect</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        We do not collect any personal information from our users. This includes, but is not limited to:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-8 pl-4 space-y-2">
        <li>Contact information (e.g., name, email address, phone number)</li>
        <li>Professional information (e.g., resume, work history, skills)</li>
        <li>Account information (e.g., usernames, passwords)</li>
        <li>Log data (e.g., IP addresses, browser information)</li>
        <li>Usage details or device information</li>
        <li>Cookies for tracking or advertising purposes</li>
      </ul>
      <p className="text-gray-700 leading-relaxed mb-8">
        We do not use cookies or any other tracking technologies to collect information about your visit or behavior on our Site.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-6">2. Links to Other Websites</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Our Site may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-6">3. Children's Privacy</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        Since we do not collect any personal information, we do not knowingly collect personal data from children under the age of 16. Our Site is not intended for individuals under 16.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-6">4. Changes to This Privacy Policy</h2>
      <p className="text-gray-700 leading-relaxed mb-8">
        We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
      </p>

      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 mt-6">5. Contact Us</h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you have any questions about this Privacy Policy, please contact us:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-8 pl-4 space-y-2">
        <li>By email: <strong className="text-blue-600">hustlecrowdtechnology@gmail.com</strong></li>
        <li>By visiting this page on our website: <strong className="text-blue-600">hustlecrowd.netlify.app</strong></li>
      </ul>
    </div>
  );
}

export default PrivacyDoc;