import React from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../../public/assets/landing/selection.json';
import styles from '@/styles/Sidebar.module.css';
import Link from 'next/link';

const disableScrollingIfSidebarOpen = (props: any) => {
  const body = typeof document !== `undefined` ? document.getElementsByTagName('body')[0] : { style: { overflow: '' } };

  body.style.overflow = props.isOpen ? 'hidden' : 'visible';
};

export default function Sidebar(props: any) {
  disableScrollingIfSidebarOpen(props);

  return (
    <section className={`${props.isOpen ? styles.sidebarWrapperOpen : styles.sidebarWrapperClose}`}>
      <section className={styles.linksWrapper}>
        <ol className={styles.linksList}>
          <Link
            href="/blog/"
            key="blog"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.styledLink}
          >
            blog en <span className={styles.styledLinkText}>*español*</span>
          </Link>
          <a
            href="https://dev.to/patferraggi"
            key="dev.to"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.styledLink}
          >
            <span className={styles.styledLinkText}>dev.to</span> english blog
          </a>
          <Link
            href="#about"
            key="about"
            onClick={e => props.setIsOpen(false)}
            className={styles.styledLink}
          >
            {
              <IcomoonReact
                iconSet={iconSet}
                size={'1em'}
                icon="avatar"
              />
            }{' '}
            about
          </Link>
          <Link
            href="#projects"
            key="projects"
            onClick={e => props.setIsOpen(false)}
            className={styles.styledLink}
          >
            projects
          </Link>
          <a
            href="mailto:patferraggi@gmail.com"
            key="mail"
            className={styles.styledLink}
          >
            contact me{' '}
            {
              <IcomoonReact
                iconSet={iconSet}
                size={'1em'}
                icon="email"
              />
            }{' '}
            at
            <p>
              <span className={styles.styledLinkText}>patferraggi@gmail.com</span>
            </p>
          </a>
        </ol>
        <ol className={styles.specialLinksList}>
          <a
            href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
            key="linkedin"
            target="_blank"
            rel="noopener noreferrer"
            style={{ justifySelf: 'flex-end' }}
            className={styles.styledLink}
          >
            linkedin
          </a>
          <a
            href="https://github.com/Raagh"
            key="github"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.styledLink}
          >
            github
          </a>
        </ol>
      </section>
      <button
        onClick={() => props.setIsOpen(false)}
        id="exit"
      >
        <img
          className={styles.closeButton}
          alt="close-button"
          id="close-button"
          src="/assets/landing/close.svg"
        ></img>
      </button>
    </section>
  );
}
