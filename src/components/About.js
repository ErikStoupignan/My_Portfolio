import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import AboutLists from './AboutLists';

const About = () => (
  <section className="about">
    <header className="about-title">
      <h2 id="about">About Me</h2>
      <p>
        I am a full-stack web developer and React enthusiast with a passion for clean and
        easy-to-follow code. Experienced in pair programming and remote working. Fluent in several
        languages, frameworks, and technologies, and a team player with an optimistic personality
        that can boost the morale of any team.
      </p>
      <p>
        Previous to Microverse I obtained my Electrical Engineering degree and performed as so for
        two years in my home city, during this time, I learned the algorithmic thinking I needed
        for coding and ventured into this amazing world of code.
      </p>
      <a
        href="./resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="body-btn"
      >
        Get my CV
        <BsFillArrowRightCircleFill className="arrow-right" />
      </a>
    </header>
    <AboutLists />
  </section>
);

export default About;
