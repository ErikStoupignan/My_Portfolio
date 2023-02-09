/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/label-has-associated-control */
const Form = () => (
  // <form
  //   className="inputs-group"
  //   action="https://formspree.io/f/mrgjwpka"
  //   method="POST"
  //   encType="multipart/form-data"
  // >
  //   <label htmlFor="name">
  //     Your name
  //     <input type="text" id="name" name="name" />
  //   </label>
  //   <label htmlFor="email">
  //     Your email
  //     <input type="text" id="email" name="email" />
  //   </label>
  //   <label htmlFor="message" className="message-label">
  //     <textarea
  //       id="message"
  //       name="message"
  //       placeholder="Enter your message here..."
  //     />
  //   </label>
  //   <button type="submit" className="body-btn">Start Collaboration</button>
  // </form>

  <form name="contact" netlify>
    <p>
      <label>
        Name
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Email
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
);

export default Form;
