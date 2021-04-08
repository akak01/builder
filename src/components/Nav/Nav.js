import classes from "./Nav.module.css";
import NavItem from "./NavItem/NavItem";

const Nav = () => {
    return (
        <div className={classes.Nav}>
            <NavItem url="/" active>Builder</NavItem>
            <NavItem url="/">Checkout</NavItem>
        </div>
    );
}

export default Nav;