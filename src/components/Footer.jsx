import React from "react";

function Footer() {
    return (
        <footer className="py-6 bg-gray-800 text-center text-gray-300">
            <p>© 2025 FoodFast. All rights reserved.</p>
            <div className="flex justify-center gap-4 mt-2">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
            </div>
        </footer>
    );
}

export default Footer;
