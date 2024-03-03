import React from 'react';
import Project from './project';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../../../public/assets/landing/selection.json';
import styles from '@/styles/landing/project.module.css';
import { StaticImageData } from 'next/image';
import projectRydoo from '../../../../public/assets/landing/images/project-rydoo.png';

type Project = {name: string, skills: string[], image: StaticImageData}

const projects: Project[] = [
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
    image : projectRydoo,
  },
];


export default function Projects() {
  return (
    <section
      className={styles.projectsWrapper}
      id="projects"
    >
      {projects.length > 0 && (
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
      )}
      {projects.map((project: Project) => {
        const projectIndex = projects.indexOf(project);

        return (
          <Project
            key={projectIndex}
            name={project?.name}
            skills={project?.skills}
            image={project.image}
          />
        );
      })}
    </section>
  );
}
