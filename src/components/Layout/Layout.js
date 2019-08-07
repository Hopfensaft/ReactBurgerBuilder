import React from 'react';
import Auxilliary from "../../hoc/Auxialliary";

const Layout = ( props ) => (
    <Auxilliary>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Auxilliary>
);

export default Layout;
