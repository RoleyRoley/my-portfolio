import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black/90 text-white py-8 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4"></div>
                
                {/* Copyright - Left side */}
                <p className="text-sm text-gray-400 text-center md:text-right w-full md:w-auto">
                    &copy; {new Date().getFullYear()} Sonny | All rights reserved</p>
                
                {/*Social links - Right side */}
                <div className="flex justify-center md:justify-end gap-6 w-full md:w-auto">
                    <a 
                        href="https://github.com/RoleyRoley"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Github size={20} />
                    </a>
                    <a 
                        href="www.linkedin.com/in/sonny-jeffreys"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a 
                        href="sonnyjohnjeffreys@gmail.com" 
                        className="text-gray-400 hover:text-white transition"
                    >
                        <Mail size={20} />
                    </a>


                </div>
        </footer>
    );
};

export default Footer;