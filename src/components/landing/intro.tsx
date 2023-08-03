import React from 'react';
import iconSet from '../../../public/assets/landing/selection.json';
import IcomoonReact from 'icomoon-react';
import styles from '@/styles/Intro.module.css';

export default function Intro() {
  return (
    <section id="intro" className={styles.introWrapper}>
      <p>
        I'm an Argentinian software developer, currently based in Spain.{' '}
        {
          <IcomoonReact
            iconSet={iconSet}
            size={'1em'}
            icon="hand"
          />
        }{' '}
        I am passionate about software craftsmanship and creating high quality{' '}
        {
          <IcomoonReact
            iconSet={iconSet}
            size={'1em'}
            icon="cup"
          />
        }
        , user centric solutions, but also muay thai, travelling and my cat.
      </p>
    </section>
  );
}
