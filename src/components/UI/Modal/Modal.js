import React, { Component } from 'react';
import classes from './Modal.css';
import Aux from 'C:\Users\Welcome\Desktop\work\git\burger_react_app-master\src\components\UI\Modal';
import Backdrop from '../Backdrop/Bakcdrop';


class modal extends Component {

    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.children;
    }

    componentWillUpdate () {
        console.log('MOdal will update');
    }


    render() {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    { this.props.children }
                </div>
             </Aux>
        );
    }

}

export default modal;