import iconSet from '../../../public/assets/landing/selection.json';
import IcomoonReact from 'icomoon-react';
import styles from '@/styles/Contact.module.css';

export default function Contact() {
  return (
    <section
      className={styles.contactWrapper}
      id="contact"
    >
      <p>
        Check my{' '}
        <a
          className={styles.styledHeaderLink}
          href="https://github.com/Raagh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>{' '}
        for more projects
      </p>
      <p>If you have a project or initiative you think I can help, find me at </p>
      <IcomoonReact
        iconSet={iconSet}
        size={'1em'}
        icon="email"
      />{' '}
      <a
        className={styles.styledHeaderLink}
        href="mailto: pattferraggi@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        patferraggi@gmail.com
      </a>{' '}
      <p className="whitespace"></p>
    </section>
  );
}
