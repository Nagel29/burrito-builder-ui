import React, { Component } from 'react';
import { sendOrder } from '../../apiCalls';

class OrderForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.fetchOrders = props.fetchOrders;
    this.state = {
      name: '',
      ingredients: []
    };
  }

  handleSubmit = async e => {
    e.preventDefault();
    if (this.state.name && this.state.ingredients.length) {
      await sendOrder(this.state.name, this.state.ingredients)
        this.fetchOrders()
        this.clearInputs()
    }
  }

  clearInputs = () => {
    this.setState({name: '', ingredients: []});
  }

  handleNameChange = (event) => {
    this.setState({name: event.target.value})
  }

  handleIngredientChange = (event) => {
    event.preventDefault()
    this.setState({ingredients: [...this.state.ingredients, event.target.name]})
  }

  render() {
    const possibleIngredients = ['beans', 'steak', 'carnitas', 'sofritas', 'lettuce', 'queso fresco', 'pico de gallo', 'hot sauce', 'guacamole', 'jalapenos', 'cilantro', 'sour cream'];
    const ingredientButtons = possibleIngredients.map(ingredient => {
      return (
        <button key={ingredient} name={ingredient} onClick={e => this.handleIngredientChange(e)}>
          {ingredient}
        </button>
      )
    });

    return (
      <form>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={this.state.name}
          onChange={e => this.handleNameChange(e)}
        />

        { ingredientButtons }

        <p>Order: { this.state.ingredients.join(', ') || 'Nothing selected' }</p>

        <button onClick={e => this.handleSubmit(e)}>
          Submit Order
        </button>
      </form>
    )
  }
}

export default OrderForm;
