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

  <form name="contact" method="POST" data-netlify="true">
    <p>
      <label>
        Your Name:
        {' '}
        <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email:
        {' '}
        <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Your Role:
        {' '}
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>

      </label>
    </p>
    <p>
      <label>
        Message:
        {' '}
        <textarea name="message" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>

);

export default Form;
