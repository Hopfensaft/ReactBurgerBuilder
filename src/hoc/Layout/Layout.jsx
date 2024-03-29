import React, { Component } from 'react';
import Auxilliary from "../Auxilliary/Auxialliary";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import classes from "./Layout.css";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer"

class Layout extends Component {
    state = {
        showSideDrawer: true
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false})
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render () {
        return (
            <Auxilliary>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <SideDrawer closed={this.sideDrawerClosedHandler} open={this.state.showSideDrawer}/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxilliary>
        )
    }
}

export default Layout;
