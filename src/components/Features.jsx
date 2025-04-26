import React from "react";

function Features() {
    const features = [
        { icon: "🚚", title: "Fast Delivery", desc: "Get your food delivered quickly" },
        { icon: "🥗", title: "Fresh Food", desc: "Our meals are made fresh" },
        { icon: "💰", title: "Best Offer", desc: "Enjoy best quality at best price" },
    ];

    return (
        <section className="py-12 bg-gray-100">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-around items-center gap-10">
                {features.map((item, index) => (
                    <div key={index} className="text-center">
                        <div className="text-green-600 text-4xl mb-3">{item.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-gray-600">{item.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Features;
