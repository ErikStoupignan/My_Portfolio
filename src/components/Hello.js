const Hello = () => (
  <section className="hello">
    <div className="hello-title-container">
      <header className="hello-title">
        <h1 id="hello">Rubén D. Pire</h1>
        <p>
          Hello! My name is Rubén, a Full-Stack Software Developer who graduated from Microverse;
          an online training school that uses pair programming and real-world projects to teach
          development, where I have built several websites and applications, both collaboratively
          and independently, while learning HTML/CSS, JavaScript, React/Redux, Ruby, and Ruby on
          Rails. Do not hesitate to contact me if you are willing to collaborate or need your
          application coded.
        </p>
        <a href="#contact" className="body-btn" rel="noopener noreferrer">
          Start Collaboration
        </a>
      </header>
    </div>
    <img src="./media/image_geometry_2.svg" alt="" className="half-mosaic" />
    <img src="./media/full-mosaic.svg" alt="" className="full-mosaic" />
  </section>
);

export default Hello;
