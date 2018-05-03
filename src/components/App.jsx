import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import axios from 'axios'
import MenuComponent from './Menu'
import BookCard from './BookCard'
import Filter from '../containers/Filter'
import { Card } from 'semantic-ui-react'

class App extends Component {

  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    })
  }

  render() {
    const { books, isReady, setFilter } = this.props;
    return (
      <Container>
        <MenuComponent />
        <Filter/>
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Loading...' : books.map((book, i) => (<BookCard key={i} title={book.title} author={book.author} price={book.price} image={book.image  } />))}
        </Card.Group>
      </Container>
  )}
}
export default App;
