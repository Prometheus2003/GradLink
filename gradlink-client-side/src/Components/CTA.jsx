import React from 'react';

const CTA = () => {
    const [email, setEmail] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!email.trim()) return;
        // TODO: replace with your API call
        alert(`Subscribed: ${email}`);
        setEmail("");
    };

    return (
        <div className="py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Primary CTA Card */}
                <div className="rounded-lg border p-8 bg-white flex flex-col md:flex-row items-center gap-4">
                    <div className="flex-1">
                        <h3 className="text-xl font-bold">Get product updates</h3>
                        <p className="text-gray-600">Not ready to sign up? Join our newsletter.</p>
                    </div>

                    <form onSubmit={submit} className="flex gap-2 w-full md:w-auto">
                        <input
                            type="email"
                            placeholder="you@university.edu"
                            className="border rounded px-3 py-2 w-full md:w-80"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button className="px-4 py-2 rounded bg-black text-white">Subscribe</button>
                    </form>
                </div>

                {/* Slim banner */}
                <div className="bg-black text-white mt-6 rounded">
                    <div className="px-4 py-6 md:py-8 flex items-center justify-between gap-4">
                        <div>
                            <h4 className="text-lg font-semibold">Ready to connect with mentors?</h4>
                            <p className="text-gray-300">Join GradLink and start a mentorship in minutes.</p>
                        </div>
                        <a href="/signup" className="bg-white text-black px-4 py-2 rounded">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CTA;
