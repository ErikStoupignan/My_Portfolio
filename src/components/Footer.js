import { IoIosArrowDropright } from 'react-icons/io';
import {
  BsGithub, BsTwitter, BsLinkedin,
} from 'react-icons/bs';
import { FaMedium, FaAngellist } from 'react-icons/fa';
import FooterLinkList from './FooterLinkList';
import ResumePath from '../data/resume';
import * as footerLinks from '../data/footerLinks';

const Footer = () => (
  <footer>
    <a
      href={ResumePath}
      target="_blank"
      rel="noopener noreferrer"
      className="resume-link"
    >
      Get my Resume
      <IoIosArrowDropright className="arrow-right" />
    </a>
    <FooterLinkList>
      <BsGithub key="github" link={footerLinks.githubPath} />
      <BsTwitter key="twitter" link={footerLinks.twitterPath} />
      <BsLinkedin key="linkedin" link={footerLinks.linkedinPath} />
      <FaMedium key="Medium" link={footerLinks.mediumPath} />
      <FaAngellist key="Angellist" link={footerLinks.wellfoundPath} />
    </FooterLinkList>
  </footer>
);

export default Footer;
