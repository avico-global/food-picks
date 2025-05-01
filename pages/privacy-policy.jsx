"use client";
import React from "react";
import Navbar from "@/components/Navbar";

import Footer from "@/components/Footer";



const PrivacyPolicy = () => {
    return (
        <div className={`$ min-h-screen text-gray-800`}>
            <Navbar />
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl font-extrabold text-black mb-4 ml-8">
                    Privacy Policy
                </h1>

                <p className="text-sm text-gray-500 mb-4 mt-8 ml-8">
                    <strong>Last updated:</strong> April 23, 2025
                </p>

                <div className="rounded-lg p-8">
                    <section className="space-y-6 mb-2">
                        <p>
                            At <strong>Food.</strong>, we value your privacy and are
                            committed to protecting your personal information. This Privacy
                            Policy outlines how we collect, use, disclose, and safeguard your
                            data when you use our website and services.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-6">
                            Information We Collect
                        </h2>
                        <h3 className="text-2xl font-medium mt-4 text-black">
                            Personal Information
                        </h3>
                        <p>
                            We may collect the following types of personal information that
                            you voluntarily provide:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Profile details (e.g., profile picture, bio)</li>
                            <li>Login credentials</li>
                            <li>Payment information (for premium services)</li>
                        </ul>

                        <h3 className="text-2xl font-medium mt-4 text-black">
                            Usage Information
                        </h3>
                        <p>
                            We may automatically collect certain technical and usage data,
                            such as:
                        </p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Device type and browser information</li>
                            <li>IP address</li>
                            <li>Pages viewed and time spent on the site</li>
                            <li>Clicked links</li>
                            <li>Search terms</li>
                            <li>Cookies and tracking technologies</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-4 mb-4">
                            How We Use Your Information
                        </h2>
                        <p>We may use your information to:</p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Provide and operate our website and services</li>
                            <li>Improve and personalize your experience</li>
                            <li>Understand user behavior and site performance</li>
                            <li>Develop new features and offerings</li>
                            <li>Communicate updates, security alerts, and support</li>
                            <li>Send marketing content (with your consent)</li>
                            <li>Process payments and transactions</li>
                            <li>Prevent fraud and maintain security</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-4 mb-4">
                            Sharing Your Information
                        </h2>
                        <p>We may share your information under the following circumstances:</p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>With trusted service providers acting on our behalf</li>
                            <li>With partners for joint marketing efforts (with your consent)</li>
                            <li>In the event of a business transfer, such as a merger or acquisition</li>
                            <li>To comply with legal obligations or governmental requests</li>
                            <li>To protect the rights and safety of our users and the public</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-4 mb-4">Data Security</h2>
                        <p>
                            We use industry-standard safeguards to protect your information.
                            While we strive to keep your data secure, no internet transmission
                            or storage system is 100% secure.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-6 mb-4">Your Rights</h2>
                        <p>Depending on your location, you may have the right to:</p>
                        <ul className="list-disc pl-6 text-gray-600">
                            <li>Access your personal data</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your data</li>
                            <li>Restrict or object to data processing</li>
                            <li>Receive your data in a portable format</li>
                            <li>Withdraw previously given consent</li>
                        </ul>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-4 mb-4">
                            Children’s Privacy
                        </h2>
                        <p>
                            Our services are not intended for children under 13. We do not
                            knowingly collect personal data from anyone under 13. If you
                            believe a child has provided us with personal information, please
                            contact us immediately.
                        </p>
                    </section>

                    <section className="space-y-6">
                        <h2 className="text-2xl font-semibold text-black mt-4 mb-2">
                            Changes to This Policy
                        </h2>
                        <p>
                            We may revise this Privacy Policy periodically. The latest version
                            will always be available on this page with the updated date.
                            Please review it regularly.
                        </p>
                    </section>

                    <section className="space-y-6 mt-6 mb-2">
                        <h2 className="text-2xl font-semibold text-black">Contact Us</h2>
                        <p>
                            If you have any questions or concerns about this Privacy Policy,
                            reach out to us:
                        </p>
                        <p>
                            <strong>Email:</strong>{" "}
                            <a href="mailto:privacy@yourcompany.com" className="text-black">
                                privacy@yourcompany.com
                            </a>
                        </p>
                        <p>
                            <strong>Address:</strong> 123 Your Company St, New York, NY 10001
                        </p>
                    </section>
                </div>
           
      
           
            </div>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
