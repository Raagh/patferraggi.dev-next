import Image from 'next/image';
import styles from '@/styles/landing/project.module.css';

export default function Project(props: any) {
  return (
    <section className={styles.projectWrapper}>
      <article className={styles.projectWrapperProject}>
        <div className={styles.projectName}>{props.name}</div>
        <ul className={styles.projectSkills}>
          {props.skills.map((skill: any) => {
            const skillIndex = props.skills.indexOf(skill);

            return <li key={skillIndex}>{skill}</li>;
          })}
        </ul>
        <a
          className={styles.styledLink}
          href="https://rydoo.com"
          target="_blank"
          rel="noopener noreferrer nofollow"
          style={{ marginTop: 'auto', paddingTop: '2rem' }}
        >
         → See project
        </a>
      </article>
      <Image
        className={styles.projectWrapperImage}
        src={props.image}
        width={800}
        height={800}
        alt="project-example"
        placeholder="blur"
      ></Image>
    </section>
  );
}
