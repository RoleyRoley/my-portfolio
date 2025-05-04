import React from "react";
import FadeInWhenVisible from "./FadeInWhenVisible";

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-black/90 backdrop-blur-md text-white">
            <FadeInWhenVisible>
            <div className="max-w-xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
                <p className="text-lg text-gray-300 mb-6">
                    Feel free to reach out via email or LinkedIn.
                </p>
                <div className="space-y-2">
                    <p>
                        📧 Email: <a href="sonnyjohnjeffreys@gmail.com" className="text-blue-400 hover:underline">sonnyjohnjeffreys@gmail.com</a>
                    </p>
                    <p>
                        💼 LinkedIn: <a href="linkedin.com/in/sonny-jeffreys-b96a05227" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">linkedin.com/in/sonny-jeffreys-b96a05227</a>
                    </p>
                    <p>
                        💻 GitHub: <a href="https://github.com/RoleyRoley" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">https://github.com/RoleyRoley</a>
                    </p>
                </div>
            </div>
            </FadeInWhenVisible>
        </section>
    );
};

export default Contact;