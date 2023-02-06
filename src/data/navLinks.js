const hello = 'hello';
const projects = 'projects';
const about = 'about';
const contact = 'contact';

const navLinks = [
  {
    id: hello,
    path: `#${hello}`,
    text: hello[0].toUpperCase() + hello.slice(1),
  },
  {
    id: projects,
    path: `#${projects}`,
    text: projects[0].toUpperCase() + projects.slice(1),
  },
  {
    id: about,
    path: `#${about}`,
    text: about[0].toUpperCase() + about.slice(1),
  },
  {
    id: contact,
    path: `#${contact}`,
    text: contact[0].toUpperCase() + contact.slice(1),
  },
];

export {
  hello,
  projects,
  about,
  contact,
};

export default navLinks;
