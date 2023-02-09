const Form = () => (
  <form
    // className="inputs-group"
    // action="https://formspree.io/f/mrgjwpka"
    // method="POST"
    // encType="multipart/form-data"
    name="contact"
    method="POST"
    data-netlify="true"
  >
    <label htmlFor="name">
      Your name
      <input type="text" id="name" name="name" />
    </label>
    <label htmlFor="email">
      Your email
      <input type="text" id="email" name="email" />
    </label>
    <label htmlFor="message" className="message-label">
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message here..."
      />
    </label>
    <button type="submit" className="body-btn">Start Collaboration</button>
  </form>
);

export default Form;
