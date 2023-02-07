const isMedScrn = () => {
  if (window.innerWidth < 769) {
    return false;
  }
  return true;
};

export default isMedScrn;
