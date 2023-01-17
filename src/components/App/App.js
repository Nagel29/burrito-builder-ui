import React, { Component } from 'react';
import './App.css';
import {getOrders, deleteOrdersApi} from '../../apiCalls';
import Orders from '../../components/Orders/Orders';
import OrderForm from '../../components/OrderForm/OrderForm';

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      orders: [],
    }
  }

  componentDidMount() {
    this.fetchOrders()
  }

  fetchOrders = async () => {
    await getOrders()
      .then(data => this.setState({orders: data.orders}))
      .catch(err => console.error('Error fetching:', err));
  }

  deleteOrder = async (id) => {
    await deleteOrdersApi(id)
    this.fetchOrders()
  }

  render() {
    return (
      <main className="App">
        <header>
          <h1>Burrito Builder</h1>
          <OrderForm fetchOrders={this.fetchOrders}/>
        </header>
        <Orders orders={this.state.orders} deleteOrder={this.deleteOrder}/>
      </main>
    );
  }
}


export default App;
