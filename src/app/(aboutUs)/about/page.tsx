"use client";

import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="container mx-auto p-6 space-y-8">

            <section className="hero bg-gradient-to-r from-indigo-800 to-purple-600 text-white p-12 rounded-lg shadow-xl mb-8 relative">
                <h1 className="text-7xl font-extrabold mb-4 leading-tight">Welcome to BookEase!</h1>
                <p className="text-xl mb-6">We are dedicated to simplifying your booking experience, providing intuitive solutions for both individuals and businesses.</p>
                <a href="/bookings" className="btn btn-primary mt-4 px-8 py-4 rounded-lg shadow-lg transition duration-300 hover:bg-indigo-700 transform hover:scale-105">Get Started</a>
            </section>



            {/* Our Mission */}
            <section className="mission bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg">At BookEase, our mission is to empower users with seamless scheduling tools that enhance productivity and save time. We strive to create an effortless booking experience that meets the needs of our diverse clientele.</p>
            </section>

            {/* Our Story */}
            <section className="story bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-4">Our Story</h2>
                <p className="text-lg">Founded in 2024 by Parv Garg, BookEase emerged from the frustration of complicated booking systems. Our founders recognized the need for a user-friendly platform that could simplify scheduling for everyone. Since then, we have grown rapidly, continuously innovating our services to meet the evolving demands of our users.</p>
            </section>

            {/* Core Values */}
            <section className="values bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-6">Our Core Values</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>🌟 <strong>Integrity</strong> - We uphold the highest standards of honesty and transparency in all our interactions.</li>
                    <li>🤝 <strong>Customer Commitment</strong> - We prioritize our customers' needs and strive to exceed their expectations.</li>
                    <li>💡 <strong>Innovation</strong> - We embrace creativity and continuously seek new ways to improve our services.</li>
                    <li>🌍 <strong>Sustainability</strong> - We are committed to environmentally friendly practices in our operations.</li>
                </ul>
            </section>

            {/* Customer Testimonials */}
            <section className="testimonials bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-4">What Our Users Are Saying</h2>
                <div className="space-y-6">
                    {[
                        { name: "Jane Doe", feedback: "This app has made scheduling so easy and fast!" },
                        { name: "John Smith", feedback: "I love the intuitive interface and quick setup!" }
                    ].map((testimonial, index) => (
                        <blockquote key={index} className="border-l-4 pl-6 text-gray-700 italic">
                            <div className="flex items-center space-x-3">
                                <div className="h-10 w-10 bg-blue-500 text-white rounded-full flex items-center justify-center">{testimonial.name.charAt(0)}</div>
                                <p>"{testimonial.feedback}"</p>
                            </div>
                            <p className="mt-2 font-semibold">-{testimonial.name}</p>
                        </blockquote>
                    ))}
                </div>
            </section>

            <section className="faq bg-gray-100 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold mb-6">Frequently Asked Questions</h2>
                {[
                    { question: "How do I book?", answer: "You can book by filling out the form on the bookings page." },
                    { question: "What if I need to cancel?", answer: "You can cancel your booking via your user dashboard." },
                    { question: "Is there a fee for cancellations?", answer: "Cancellations are free if made at least 24 hours before." },
                    { question: "Can I change my booking details?", answer: "Yes, you can modify your booking details through your dashboard." },
                    { question: "Can I book for someone else?", answer: "Yes, just enter their details in the form." },
                    { question: "How do I contact support?", answer: "Email support@bookingapp.com or visit our contact page." },
                ].map((faq, index) => (
                    <details key={index} className="faq-item border-b py-3">
                        <summary className="text-lg font-semibold cursor-pointer">{faq.question}</summary>
                        <p className="mt-2 text-gray-600">{faq.answer}</p>
                    </details>
                ))}
            </section>

        </div>
    );
};

export default AboutUsPage;
