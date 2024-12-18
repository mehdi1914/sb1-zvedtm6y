import React from 'react';

interface Skill {
  id: number;
  name: string;
  level: string; // e.g., "Beginner", "Intermediate", "Expert"
}

const skills: Skill[] = [
  { id: 1, name: 'JavaScript', level: 'Expert' },
  { id: 2, name: 'TypeScript', level: 'Intermediate' },
  { id: 3, name: 'React', level: 'Expert' },
  { id: 4, name: 'Node.js', level: 'Intermediate' },
  { id: 5, name: 'CSS', level: 'Expert' },
];

const Skills: React.FC = () => {
  return (
    <div>
      <h2>My Skills</h2>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>
            <strong>{skill.name}</strong>: {skill.level}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
