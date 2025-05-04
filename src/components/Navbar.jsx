import React from "react";

const Navbar  = () => {
    return (
        <nav className="backdrop-blur-md bg-black/70 text-white fixed w-full top-0 z-50 p-4 shadow-md">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold">My Portfolio</h1>
                <div className="space-x-6">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#contact" className="hover:underline">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar