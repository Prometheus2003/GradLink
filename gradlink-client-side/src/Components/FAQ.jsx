import React from 'react';

const FAQ = () => {
    const items = [
        { q: "Is GradLink free for students?", a: "Yes. Alumni and partners may get extra tools later." },
        { q: "How does verification work?", a: "Sign up with your university email; admins approve against the roster." },
        { q: "Can I hide my profile?", a: "Yes—toggle visibility anytime from your profile settings." },
        { q: "How do mentorship bookings work?", a: "Alumni add time slots; students request; both parties get confirmations." },
    ];

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">FAQ</h2>
                <div className="space-y-4">
                    {items.map(({ q, a }) => (
                        <details key={q} className="rounded border bg-white p-4">
                            <summary className="cursor-pointer font-medium">{q}</summary>
                            <p className="mt-2 text-gray-700">{a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;
