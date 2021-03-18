import classes from "./Logo.module.css";
import logo from "../../images/logo.jpg";

const Logo = () => {
    return (
        <div className={classes.Logo}>
            <img src={logo} alt={Lily}/>
            <span>Lily</span>
        </div>
    );
}

export default Logo;