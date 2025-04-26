import React from "react";

function HowItWorks() {
    const steps = [
        { icon: "🖥️", title: "Choose Your Food", desc: "Browse our diverse menu" },
        { icon: "🛒", title: "Place an Order", desc: "Add items to your cart" },
        { icon: "🍽️", title: "Get it Delivered", desc: "Food is on the way to you" },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-900">How It Works</h2>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-green-600 text-4xl">{step.icon}</div>
                            <h4 className="font-bold text-xl">{step.title}</h4>
                            <p className="text-gray-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
