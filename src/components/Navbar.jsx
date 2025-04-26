import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Supabase";


function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = sessionStorage.getItem("isLoggedIn") === "true";

    const handleLogout = async () => {
        const { error } = await supabase.auth.signOut();

        if (!error) {
            // sessionStorage se login info hatao
            sessionStorage.removeItem("isLoggedIn");

            // Redirect ya state reset karna
            navigate("/login");  // ya home page
        } else {
            console.error("Logout Error:", error.message);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <header className="flex items-center justify-between p-6 bg-white shadow-md relative">
            <div className="text-2xl font-bold text-green-600">FoodFast</div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6 items-center">
                <Link to="/" className="text-gray-700 hover:text-green-600">Home</Link>
                <Link to="/" className="text-gray-700 hover:text-green-600">About</Link>
                <Link to="/" className="text-gray-700 hover:text-green-600">Menu</Link>
                <Link to="/" className="text-gray-700 hover:text-green-600">Contact</Link>
                {isLoggedIn ? (
                    <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Logout</button>
                ) : (
                    <button onClick={() => navigate("/login")} className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
                )}            </nav>

            {/* Hamburger Icon */}
            <div className="md:hidden">
                <button onClick={toggleMenu}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-20 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-6 py-6 md:hidden z-50">
                    <Link to="/" className="text-gray-700 hover:text-green-600" onClick={toggleMenu}>Home</Link>
                    <Link to="/" className="text-gray-700 hover:text-green-600" onClick={toggleMenu}>About</Link>
                    <Link to="/" className="text-gray-700 hover:text-green-600" onClick={toggleMenu}>Menu</Link>
                    <Link to="/" className="text-gray-700 hover:text-green-600" onClick={toggleMenu}>Contact</Link>
                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Logout</button>
                    ) : (
                            <button onClick={() => navigate("/login")} className="ml-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Login</button>
                    )}

                </div>
            )}
        </header>
    );
}

export default Navbar;
