import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import { Menu, Book, Filter } from './';

import { Card } from 'semantic-ui-react'

class App extends Component {

  componentDidMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    })
    }

  render() {
    const { items, isReady, cartItems, getCartItem, addToCart, removeFromCart } = this.props;
    return (
      <Container>
      <Menu items={cartItems} />
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Loading...' : items.map((book, i) => (<Book
            {...book}
            key={i}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItem={getCartItem(cartItems, book.id)}
          />))}
        </Card.Group>
      </Container>
  )}
}
export default App;
