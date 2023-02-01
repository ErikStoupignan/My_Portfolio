import { IoIosArrowDropright } from 'react-icons/io';
import {
  BsGithub, BsTwitter, BsLinkedin,
} from 'react-icons/bs';
import { FaMedium, FaAngellist } from 'react-icons/fa';
import FooterLinkList from './FooterLinkList';

const Footer = () => (
  <footer>
    <a
      href="./resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="resume-link"
    >
      Get my Resume
      <IoIosArrowDropright className="arrow-right" />
    </a>
    <FooterLinkList>
      <BsGithub key="github" link="https://github.com/rpire" />
      <BsTwitter key="twitter" link="https://twitter.com/RubenPire7/" />
      <BsLinkedin key="linkedin" link="https://www.linkedin.com/in/ruben-d-pire/" />
      <FaMedium key="Medium" link="https://medium.com/@rubenpire7" />
      <FaAngellist key="Angellist" link="https://angel.co/u/ruben-pire/" />
    </FooterLinkList>
  </footer>
);

export default Footer;
