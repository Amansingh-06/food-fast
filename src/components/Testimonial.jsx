import React from "react";

function Testimonial() {
    return (
        <section className="py-12 bg-white">
            <div className="max-w-3xl mx-auto text-center">
                <img
                    src="https://randomuser.me/api/portraits/women/44.jpg"
                    alt="Customer"
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-lg italic text-gray-700">
                    "The best food delivery service I've ever used! The meals are always fresh and delicious."
                </p>
                <h5 className="mt-3 font-semibold text-gray-900">Sarah M.</h5>
            </div>
        </section>
    );
}

export default Testimonial;
