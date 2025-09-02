import React from 'react';

const Partners = () => {
  const logos = ["Engineering Dept", "Alumni Assoc", "Career Services", "AI Club"];
  return (
        <div className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <p className="text-center text-gray-600 mb-6">
                    Trusted by university groups & communities
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
                    {logos.map((l) => (
                        <div key={l} className="rounded border bg-white py-6">{l}</div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partners;
