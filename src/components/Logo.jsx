import "../styleSheet/Logo.css";
const Logo = ({ name, source }) => (
  <div className="logoContainer">
    <img className={`logo`} src={source} alt={`logo de ${name}`} />
  </div>
);

export default Logo;
