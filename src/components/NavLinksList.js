import propTypes from 'prop-types';
import navLinks from '../data/navLinks';

const NavLinkList = (props) => {
  const { toggleMenu } = props;

  return (
    <ul>
      {navLinks.map((link) => (
        <li key={link.id}>
          <a
            href={link.path}
            rel="noopener noreferrer"
            onClick={toggleMenu}
            className="nav-link"
          >
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

NavLinkList.propTypes = {
  toggleMenu: propTypes.func.isRequired,
};

export default NavLinkList;
