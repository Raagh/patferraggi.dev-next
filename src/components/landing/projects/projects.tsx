import React from 'react';
import Project from './project';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../../../public/assets/landing/selection.json';
import styles from '@/styles/project.module.css';

const projects = [
  {
    name: 'Rydoo',
    skills: [
      'C#',
      'ASP.net core',
      'Typescript',
      'Angular',
      'Test Driven Development',
      'Azure Blob Storage',
      'MongoDB',
      'SQL Server',
      'SASS',
    ],
  },
];

export default function Projects() {
  return (
    <section
      className={styles.projectsWrapper}
      id="projects"
    >
      <p className={styles.projectsWrapperText}>
        Some examples of my work{' '}
        {
          <IcomoonReact
            iconSet={iconSet}
            size={'1em'}
            icon="heart"
          />
        }{' '}
      </p>
      {projects.map(project => {
        const projectIndex = projects.indexOf(project);

        return (
          <Project
            key={projectIndex}
            name={project.name}
            skills={project.skills}
          />
        );
      })}
    </section>
  );
}
