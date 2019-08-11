import React from 'react';
import Auxilliary from "../../hoc/Auxialliary";
import classes from "./Layout.css";

const Layout = ( props ) => (
    <Auxilliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxilliary>
);

export default Layout;
