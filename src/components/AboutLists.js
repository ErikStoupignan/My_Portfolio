import AboutList from './AboutList';
import experiences from '../data/experiences';

const AboutLists = () => (
  <div className="about-lists">
    {experiences.map((experience) => (
      <AboutList key={experience.id} experience={experience} />
    ))}
    <div className="about-deco" />
  </div>
);

export default AboutLists;
