import React from 'react';
import { Code } from 'lucide-react';

export default function Logo() {
  return (
    <a 
      href="#" 
      className="flex items-center gap-2 group"
    >
      <div className="p-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 transform transition-transform group-hover:scale-110">
        <Code className="w-6 h-6 text-white" />
      </div>
      <span className="font-bold text-xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
        Mehdi
      </span>
    </a>
  );
}