import React, { Component } from 'react';
import Aux from 'C:\Users\Welcome\Desktop\work\git\burger_react_app-master\src\components\Burger\OrderSummary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate () {
        console.log("Componenet will update...");
    }

    render() {

        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return <li key= {igKey} ><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}</li>
        });

        return(
            <Aux>
                <h3> Your Order </h3>
                <p> A delicious burger with the following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p>Total Price : {this.props.totalPrice.toFixed()}</p>
                <p> continue to checkout... </p>
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Aux>
        );
    }

}
export default OrderSummary;