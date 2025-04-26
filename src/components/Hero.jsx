import React from "react";

function Hero() {
    return (
        <section className="flex flex-col md:flex-row items-center justify-between p-8 md:p-20 lg:px-40 bg-white">
            <div className="max-w-2xl space-y-5 flex justify-center items-center flex-col md:inline">
                <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight text-center md:text-start ">
                    Your Favorite Food,<br /> Delivered Fast
                </h1>
                <p className="text-gray-600 text-center md:text-start">Order food from the best restaurants near you.</p>
                <button className="mt-4 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition  ">
                    Order Now
                </button>
            </div>
            <img
                src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Pizza"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mt-10 md:mt-0"
            />
        </section>
    );
}

export default Hero;
