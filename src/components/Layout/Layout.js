import classes from "./Layout.module.css";
import Drawer from "./Drawer/Drawer";
import Toolbar from "./Toolbar/Toolbar";


const Layout = ({ children }) => {
    return (
        <div className={classes.Layout}>
            <Toolbar/>
            <Drawer/>
            {children}
        </div>
    );
}

export default Layout;
