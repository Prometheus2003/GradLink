import React from 'react';

const Impacts = () => {
    const stats = [
        { label: "Verified Alumni", value: "480+" },
        { label: "Mentorship Sessions", value: "1,200+" },
        { label: "Jobs Shared", value: "340+" },
        { label: "Projects Reviewed", value: "800+" },
    ];
    return (
        <div className="py-16 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-2xl font-bold mb-6">Impact in numbers</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {stats.map((s) => (
                        <div key={s.label} className="rounded-lg border p-6 text-center bg-white">
                            <div className="text-3xl font-extrabold">{s.value}</div>
                            <div className="text-gray-600 mt-1">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Impacts;
