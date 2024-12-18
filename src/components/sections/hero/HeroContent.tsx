import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import Button from '@/components/ui/Button';
import TypewriterText from './TypewriterText';

export default function HeroContent() {
  return (
    <div className="flex-1 text-center lg:text-left">
      <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 animate-fade-in">
        Hi, I'm <TypewriterText />
      </h1>
      <p className="text-xl lg:text-2xl text-purple-200 mb-8 animate-fade-in-delay">
        Building Founder-Focused Digital Experiences
      </p>
      <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
        <Button variant="primary" size="lg">
          Explore My Work
        </Button>
        <Button variant="secondary" size="lg">
          Let's Connect
        </Button>
      </div>
      <SocialLinks />
    </div>
  );
}

function SocialLinks() {
  const socialLinks = [
    { href: "https://github.com", icon: Github },
    { href: "https://linkedin.com", icon: Linkedin },
    { href: "mailto:contact@example.com", icon: Mail },
  ];

  return (
    <div className="flex gap-6 mt-8 justify-center lg:justify-start">
      {socialLinks.map(({ href, icon: Icon }) => (
        <a
          key={href}
          href={href}
          className="group relative p-3 rounded-lg transition-all duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-purple-600/0 to-blue-600/0 group-hover:from-purple-600/20 group-hover:to-blue-600/20 transition-all duration-300" />
          <Icon className="w-6 h-6 text-purple-200 group-hover:text-white transition-colors" />
        </a>
      ))}
    </div>
  );
}