import styles from '@/styles/about.module.css';

export default function About() {
  return (
    <section
      className={styles.aboutWrapper}
      id="about"
    >
      <div className={styles.backgroundTitle}>
        <p>So about me...</p>
        <p className={styles.backgroundTitleBig}>What's my background?</p>
      </div>
      <article className={styles.backgroundText}>
        <p>
          Over the past 7+ years, I ‘ve created a great variety of high quality web business applications using
          technologies like C#, asp.net core, Node.js, Express.js, Angular, React.js using both JavaScript and
          TypeScript. I focus on software that is testable, maintainable, reusable and adaptive, requirements for
          success in Agile environments.
        </p>
        <br />
        <p>
          I've experience in startup, medium and large enterprises and I'm used to working in teams... but also managing
          my own projects. Some of the companies I've worked for include: Proxyclick, Rydoo, Telefonica Argentina,
          Cencosud and YPF.
        </p>
        <br />
        <p>As an employee I'm proactive, detail oriented and I enjoy playing an active role in improving business.</p>
        <br />
        <p>
          Check my
          <a
            href="https://www.linkedin.com/in/patricio-ferraggi-ares/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            <span className={styles.textOnSecondaryColor}>LinkedIn</span>
          </a>{' '}
          for more details.
        </p>
      </article>
    </section>
  );
}
