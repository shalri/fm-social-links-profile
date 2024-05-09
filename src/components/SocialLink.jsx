import PropTypes from "prop-types";
const SocialLink = ({ name, url }) => {
  return (
    <li className="social-links">
      <a href={url} target="_blank">
        {name}
      </a>
    </li>
  );
};

SocialLink.propTypes = {
name: PropTypes.string.isRequired,
url: PropTypes.string.isRequired,
}

export default SocialLink;
