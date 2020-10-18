import React, { Component } from 'react';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component {

    state ={
        orders: []
    }

    componentDidMount () {

        axios.get('https://react-my-burger-8a65f.firebaseio.com/orders.json')
            .then(res => {

                const fetchedOrders = [];

                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    })
                }

                this.setState({orders: fetchedOrders});
            })
            .catch(err => {
                console.log(err);
            })

    }
    render() {

        // let ordersComponents;
        let ordersComponents = this.state.orders.map(order => (
            <Order
                key={order.id} 
                ingredients={order.ingredients} 
                price={order.price.toFixed(2)} />
        ));

        if(this.state.orders.length === 0) {
            ordersComponents = <Spinner />
        }

        return (
            <div>
                {ordersComponents}
            </div>
        )
    }
}

export default withErrorHandler(Orders, axios);