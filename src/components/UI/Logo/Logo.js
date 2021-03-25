import classes from "./Logo.module.css";
import logo from "../../../images/logo.jpg";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={logo} alt="Logo of the Lily project" />
      <div>Lily</div>
    </div>
  );
}

export default Logo;