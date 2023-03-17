import propTypes from 'prop-types';

const FooterLinkList = (props) => {
  const { children } = props;

  return (
    <ul className="social-media-list">
      {children.map((child) => (
        <li
          key={child.key}
          className="social-media-list-item"
        >
          <a
            href={child.props.link}
            rel="noopener noreferrer"
            target="_blank"
            className="social-media-link"
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  );
};

FooterLinkList.propTypes = {
  children: propTypes.instanceOf(Array).isRequired,
};

export default FooterLinkList;
