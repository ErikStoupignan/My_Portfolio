import propTypes from 'prop-types';
import { IoCloseSharp } from 'react-icons/io5';
import NavDecorations from './NavDecoration';
import NavLinkList from './NavLinksList';

const Navbar = (props) => {
  const { visibility, toggleMenu } = props;

  return (
    <nav className={`navbar ${visibility ? 'dropdown' : ''}`}>
      <IoCloseSharp onClick={toggleMenu} className="cross" />
      <NavLinkList toggleMenu={toggleMenu} />
      <NavDecorations />
    </nav>
  );
};

Navbar.propTypes = {
  visibility: propTypes.bool.isRequired,
  toggleMenu: propTypes.func.isRequired,
};

export default Navbar;
