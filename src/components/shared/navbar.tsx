import React, { useState } from 'react';
import dynamic from 'next/dynamic';
const ReactStickyHeadroom = dynamic(() => import('@integreat-app/react-sticky-headroom'), { ssr: false });
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/navbar.module.css';
import Sidebar from './sidebar';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ReactStickyHeadroom scrollHeight={134}>
      <nav
        className={styles.navbarContainer}
        id="navbar-container"
      >
        <Link href="/">
          {' '}
          <img
            id="logo"
            alt="logo"
            className={`${styles.logoWrapper}`}
            src="./assets/landing/logo.svg"
          ></img>
        </Link>

        <div className={`${styles.navbarIconsContainer}`}>
          <a
            href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '0 2rem 0 0' }}
          >
            <Image
              alt="linkedin link"
              src="/assets/landing/linkedin.png"
              width="18"
              height="18"
            ></Image>
          </a>
          <a
            href="https://github.com/Raagh/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '3px 2rem 0 0' }}
          >
            <Image
              alt="github link"
              src="/assets/landing/github.svg"
              width="18"
              height="18"
            ></Image>
          </a>
          <button
            onClick={() => setIsOpen(true)}
            style={{ height: '100%', padding: '0 2rem 0 0' }}
          >
            <Image
              alt="burger-menu"
              id="burger-menu"
              src="/assets/landing/hamburger-menu.svg"
              width="23"
              height="10"
            ></Image>
          </button>
        </div>
        <Sidebar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        ></Sidebar>
      </nav>
    </ReactStickyHeadroom>
  );
}
