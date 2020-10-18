import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';
import Aux from 'C:\Users\Welcome\Desktop\work\git\burger_react_app-master\src\hoc\withErrorHandler';

const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {

        state = {
            error: null
        }

        componentWillMount () {
            console.log('withErrorHandler');
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })
            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            })
        }

        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);            
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render() {
            console.log('renderasdf');
            return <Aux>
                <Modal 
                    show={this.state.error}
                    modalClosed={this.errorConfirmedHandler}>
                    {this.state.error ? this.state.error.message : null}
                </Modal>
                <WrappedComponent {...this.props} />
            </Aux>
        } 
    }
};

export default withErrorHandler;