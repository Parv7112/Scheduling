"use client";

import React from 'react';

const HomePage = () => {
    return (
        <div className="container mx-auto p-6 space-y-8">

            {/* Hero Section */}
            <section className="hero bg-gradient-to-r from-indigo-800 to-purple-600 text-white p-12 rounded-lg shadow-xl mb-8 relative">
                <h1 className="text-7xl font-extrabold mb-4 leading-tight">Streamline Your Booking Experience!</h1>
                <p className="text-xl mb-6">Join countless satisfied users who have simplified their scheduling with our platform.</p>
                <a href="/bookings" className="btn btn-primary mt-4 px-8 py-4 rounded-lg shadow-lg transition duration-300 hover:bg-indigo-700 transform hover:scale-105">Get Started</a>
            </section>

            {/* Overview Section */}
            <section className="overview bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-6">Why Choose Our Booking App?</h2>
                <p className="text-lg mb-4">Our platform offers a seamless experience for both businesses and customers. Here’s why our app stands out:</p>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    <li>📅 <strong>Simple and Intuitive Interface</strong> - Scheduling has never been easier.</li>
                    <li>🔒 <strong>Secure and Reliable</strong> - Your information is encrypted and safe with us.</li>
                    <li>⚡ <strong>Fast and Efficient</strong> - Book and manage bookings in minutes.</li>
                    <li>🌍 <strong>Access Anywhere</strong> - Schedule bookings from any device, anywhere.</li>
                    <li>📧 <strong>Instant Notifications</strong> - Get real-time updates and reminders for your bookings.</li>
                </ul>
                <p className="mt-4 text-lg">Whether you're an individual or a business, our platform ensures a hassle-free booking experience.</p>
            </section>

            {/* How to Book Section */}
            <section className="booking-info bg-gray-100 p-8 rounded-lg shadow-lg mb-8">
                <h2 className="text-4xl font-semibold mb-4">How to Book an Booking</h2>
                <p className="mb-6 text-lg">Follow these simple steps to make a booking:</p>
                <ol className="list-decimal list-inside space-y-3 text-lg">
                    {['Fill out the booking form with your personal details.', 
                      'Choose your preferred date and time for the booking.', 
                      'Review your booking information and submit the form.', 
                      'Receive an instant confirmation email with your booking details.'].map((step, index) => (
                        <li key={index} className="flex items-center">
                            <span className="text-blue-600 mr-3">{index + 1}.</span>{step}
                        </li>
                    ))}
                </ol>
                <p className="mt-4 text-lg">Need help with your booking? Reach out to our support team for quick assistance.</p>
            </section>

            {/* Testimonials Section */}
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

            {/* FAQ Section */}
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

            {/* Additional Benefits Section */}
            <section className="additional-benefits bg-gray-100 p-8 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold mb-6">Additional Features & Benefits</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                    {[
                        "Mobile App Support - Access your bookings from anywhere.",
                        "Advanced Scheduling Options - Offer flexible hours.",
                        "Payment Integration - Securely pay online.",
                        "Instant Messaging - Communicate through our app.",
                        "Booking Reminders - Automated reminders via text/email."
                    ].map((feature, index) => (
                        <li key={index}>📱 {feature}</li>
                    ))}
                </ul>
            </section>

        </div>
    );
};

export default HomePage;
