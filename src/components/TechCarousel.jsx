import React from 'react';
import { Icon } from '@iconify/react';
import FadeInWhenVisible from "./FadeInWhenVisible";

const techStack = [
  { name: 'HTML', icon: 'logos:html-5', color: '#e44d26' },
  { name: 'CSS', icon: 'logos:css-3', color: '#264de4' },
  { name: 'JavaScript', icon: 'logos:javascript', color: '#f0db4f' },
  { name: 'React', icon: 'logos:react', color: '#61dafb' },
  { name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon', color: '#38bdf8' },
  { name: 'Git', icon: 'logos:git-icon', color: '#f1502f' },
  { name: 'Node.js', icon: 'logos:nodejs-icon', color: '#3c873a' },
  { name: 'Java', icon: 'logos:java', color: '#f89820' },
];

const duplicatedStack = [...techStack, ...techStack, ...techStack];

const TechCarousel = () => {
  return (
    <section className="py-4 bg-black/100 backdrop-blur-md overflow-hidden">
      
      <FadeInWhenVisible delay={0.2}>
      <div className="relative w-full">
        <div className="flex animate-scroll gap-12 whitespace-nowrap w-max">
          {duplicatedStack.map((tech, index) => (
            <div key={index} className="flex flex-col items-center min-w-[80px]">

              <div
                className="p-3 transition-transform duration-300 hover:scale-110"
              >
                <Icon icon={tech.icon} width="60" height="60" />
              </div>

              <p className="text-sm text-gray-300 mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
      </FadeInWhenVisible>
      
    </section>
  );
};

export default TechCarousel;