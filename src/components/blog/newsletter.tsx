import React, { useState } from 'react';
import IcomoonReact from 'icomoon-react';
import iconSet from '../../../public/assets/landing/selection.json';
import styles from '@/styles/blog/newsletter.module.css';

export default function NewsLetter(props: any) {
  const [email, setEmail] = useState('');
  const [buttonText, setButtonText] = useState('Enviar');

  const addToMailchimp = async (_: any) => {
    await fetch('/api/subscribe', {
      body: JSON.stringify({
        email,
      }),

      headers: {
        'Content-Type': 'application/json',
      },

      method: 'POST',
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    addToMailchimp(email).then(_ => {
      setEmail('');
      setButtonText('Enviado!');
    });
  };

  const handleEmailChange = (event: any) => {
    setEmail(event.currentTarget.value);
    setButtonText('Enviar');
  };

  return (
    <section className={styles.styledSuperContainer}>
      {props.showCloseButton && (
        <button
          onClick={() => props.closeModal()}
          style={{
            height: '24px',
            float: 'right',
            margin: '1rem',
            border: 'none',
          }}
          id="exit"
        >
          <svg
            id="close-button"
            style={{
              backgroundColor: "#20202c",
            }}
            width="24"
            height="24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              style={{
                fill: "#eaeae4",
              }}
              d="M24 2.41611L14.4161 12L24 21.5839L21.5839 24L12 14.4161L2.41611 24L0 21.5839L9.58389 12L0 2.41611L2.41611 0L12 9.58389L21.5839 0L24 2.41611Z"
              fill="#20202C"
            />
          </svg>
        </button>
      )}
      {props.enableMargin && (
        <section
          className={styles.container}
          onSubmit={handleSubmit}
        >
          <article className={styles.title}>
            Suscribite al newsletter{'  '}
            {
              <IcomoonReact
                iconSet={iconSet}
                size={'1em'}
                icon="email"
              />
            }
          </article>
          <article className={styles.text}>Nada de spam, solo los últimos artículos una vez al mes.</article>
          <form className={styles.inputContainer}>
            <input
              className={styles.input}
              type="email"
              placeholder="Tu e-mail acá"
              name="email"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <button className={styles.button}>{buttonText}</button>
          </form>
        </section>
      )}
      {!props.enableMargin && (
        <section
          className={styles.noMarginContainer}
          onSubmit={handleSubmit}
        >
          <article className={styles.title}>
            Suscribite al newsletter{'  '}
            {
              <IcomoonReact
                iconSet={iconSet}
                size={'1em'}
                icon="email"
              />
            }
          </article>
          <article className={styles.text}>Nada de spam, solo los últimos artículos una vez al mes.</article>
          <form className={styles.inputContainer}>
            <input
              className={styles.maxWidthInput}
              type="email"
              placeholder="Tu e-mail acá"
              name="email"
              value={email}
              onChange={handleEmailChange}
            ></input>
            <button className={styles.button}>{buttonText}</button>
          </form>
        </section>
      )}
    </section>
  );
};
