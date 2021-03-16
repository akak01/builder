import classes from "./Drawer.module.css";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

const Drawer = () => {
    return (
        <div className={classes.Drawer}>
            <Logo/>
            <Nav/>
        </div>
    );
}

export default Drawer;