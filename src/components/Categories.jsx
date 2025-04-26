import React from "react";

function Categories() {
    const categories = [
        { img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092", name: "Pizza" },
        { img: "https://images.unsplash.com/photo-1550547660-d9450f859349", name: "Burger" },
        { img: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458", name: "Salad" },
        { img: "https://media.istockphoto.com/id/1292637257/photo/veg-hakka-noodles-a-popular-oriental-dish-made-with-noodles-and-vegetables-served-over-a.jpg?s=2048x2048&w=is&k=20&c=s_f2-3MVEm_0VVWkASMCFYI9OKDkrE899Mmk7j2ysLE=", name: "Noodles" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-10 text-gray-900">Popular Categories</h2>
                <div className="flex flex-wrap justify-center gap-10">
                    {categories.map((cat, index) => (
                        <div key={index} className="w-40">
                            <img src={cat.img} alt={cat.name} className="rounded-full mb-3 w-full h-40 object-cover" />
                            <h4 className="text-lg font-semibold text-gray-700">{cat.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;
