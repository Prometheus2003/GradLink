import React from 'react';

const Testimonials = () => {
  return (
    <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-8">What our community says</h2>

                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { name: "Ayesha (Student)", text: "Found a mentor and a summer internship in 3 weeks." },
                        { name: "Rahim (Alumni)", text: "Mentoring here is effortless and rewarding." },
                        { name: "Nabila (Student)", text: "The project review + recommendation flow is gold." },
                    ].map((t) => (
                        <blockquote key={t.name} className="rounded-lg border p-6 bg-white">
                            <p className="mb-3">“{t.text}”</p>
                            <span className="text-sm text-gray-600">— {t.name}</span>
                        </blockquote>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
