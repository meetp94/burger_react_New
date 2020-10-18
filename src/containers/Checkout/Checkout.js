import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

class Checkout extends Component {
    
    state = {
        totalPrice: 0,
        ingredients: null
    }

    componentWillMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price = 0;

        for ( let param of query.entries()) {
            // ['salad', '1']
            if (param[0] === 'price') {
                price = Number(param[1])
            }
            else {
                ingredients[param[0]] = Number(param[1])
            }
        }

        this.setState({ingredients: ingredients, totalPrice: price});
    }

    checkoutCancel = () => {
        this.props.history.goBack();
    }

    checkoutContinue = () => {
        this.props.history.replace('/checkout/contact-data');
    }

    render() {
        return (
            <div>
                <CheckoutSummary
                    ingredients={this.state.ingredients}
                    checkoutCancel={this.checkoutCancel}
                    checkoutContinue={this.checkoutContinue}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    render={() => (<ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>)}/>
            </div>
        )
    }
}

export default Checkout;