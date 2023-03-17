import { useState } from 'react';
import { IoMenuSharp } from 'react-icons/io5';
import Navbar from './Navbar';
import isMedScrn from '../../logic/isMedScrn';

const Navigation = () => {
  const [visibility, setVisibility] = useState(false);

  const handleToggle = () => {
    if (!isMedScrn() || visibility) {
      setVisibility(!visibility);
    }
  };

  return (
    <section className="Navbar_main_container">
      <Navbar
        visibility={visibility}
        toggleMenu={handleToggle}
      />
      <IoMenuSharp className={`burger ${visibility ? 'invisible' : ''}`} onClick={handleToggle} />
    </section>
  );
};

export default Navigation;
