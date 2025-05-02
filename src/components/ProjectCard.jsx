import React from 'react';

const ProjectCard = ({ title, description, tech, github, demo }) => {
    return (
        <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-md hover:shadow-xl transition text-white">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="mb-4 text-gray-300">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((t, index) => (
                <span key={index} className="bg-white/20 px-2 py-1 text-sm rounded">
                    {t}
                </span>
                ))}
            </div>
            <div className="space-x-4">
                {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                    GitHub
                </a>
                )}
                {demo && (
                <a href={demo} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:underline">
                    Live Demo
                </a>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;