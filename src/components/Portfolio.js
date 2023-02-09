import Project from './Project';
import PortfolioHeader from './PortfolioHeader';
import projects from '../data/projects';

const Portfolio = () => (
  <section className="portfolio">
    <ul className="work-list">
      <PortfolioHeader />
      <li className="project-1">
        <Project project={projects[0]} />
      </li>
      <li className="project-2">
        <Project project={projects[1]} />
        <img src="./media/image-geometry_2-1.svg" alt="" className="work-deco-2" />
      </li>
      <li className="project-3">
        <Project project={projects[2]} />
        <img src="./media/rhombus.svg" alt="" className="work-deco-3" />
      </li>
      <li className="project-4">
        <div className="work-deco-4">
          <img src="./media/image-geometry_5.svg" alt="" />
        </div>
        <Project project={projects[3]} />
      </li>
      <li className="project-5">
        <Project project={projects[4]} />
        <img src="./media/group-deco-2.svg" alt="" className="work-deco-5" />
      </li>
      <li className="project-6">
        <Project project={projects[5]} />
      </li>
      <div className="work-deco">
        <img src="./media/image_dots.svg" alt="" className="work-dots work-img" />
      </div>
    </ul>
  </section>
);

export default Portfolio;
