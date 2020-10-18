import React, {Component } from 'react';
import Aux from 'C:\Users\Welcome\Desktop\work\git\burger_react_app-master\src\components\Layout';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state ={
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerOpenHandler = () => {
        this.setState({showSideDrawer: true})
    }

    render() {
        return (
        <Aux>
            <Toolbar drawerToggleClicked={this.sideDrawerOpenHandler}/>
            <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classes.content}>
                {this.props.children}
            </main>
        </Aux>
        );
    }
};

export default Layout;
