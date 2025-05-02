import React from 'react';
import bg from '../assets/hero-bg.jpg'

const Hero = () => {
    return (
        <section className="h-screen flex items-center justify-center bg-cover bg-center relative" style={{ backgroundImage: `url(${bg})` }}>
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
            <div className="z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Sonny</h1>
                <p className="text-lg md:text-xl">A software engineer looking for purpose.</p>
                <a href="#projects" className="inline-block mt-6 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition">
                    View My Work
                </a>
                <a href="/cv.pdf"
                    download
                    className="inline-block mt-4 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition text-white"
                >
                    Download CV
                </a>
                
            </div>
        </section>
    )
}

export default Hero;