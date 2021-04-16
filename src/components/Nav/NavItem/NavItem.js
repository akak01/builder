import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

const NavItem= ({ children, url, active }) => {
    return (
        <li className={classes.NavItem}>
            <NavLink to={url} activeClassName={classes.active} exact={exact}>{children}</NavLink>
        </li>
    );
}

export default NavItem;