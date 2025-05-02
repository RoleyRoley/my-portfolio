import React from "react";

const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-black/80 backdrop-blur-md text-white">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <p className="text-lg leading-relaxed text-gray-300">
                    I'm a passionate software engineer with a focus on building clean, responsive, and impactful web applications.
                    I enjoy working across the full stack and constantly seek to improve my skills through creative projects.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-gray-400">
                    When I'm not coding, I enjoy learning about new technologies, playing games, and contributing to open-source.
                </p>
            </div>
        </section>
    );
};
export default About;