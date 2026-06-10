import React from 'react';


const Hero = () => {
    const cvUrl = `${process.env.PUBLIC_URL}/Sonny_Jeffreys_CV_2026.pdf`;

    return (
        <section className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 via-black to-gray-800 relative">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="z-10 text-center text-white px-4">
                
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm Sonny</h1>

                <p className="text-lg md:text-xl">A software engineer looking for purpose.</p>

                <div className="flex justify-center gap-2 mt-4 flex-wrap">

                    <a 
                        href="#projects" 

                        className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition text-white">
                        
                        View My Work
                    </a>
                    <a href={cvUrl}
                        download="Sonny_Jeffreys_CV_2026.pdf"
                        
                        className="px-6 py-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition text-white">
                        Download CV
                    </a>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;