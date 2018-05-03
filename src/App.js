import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react'
import {setBooks} from './actions/books';
import axios from 'axios'
import MenuComponent from './components/Menu'
import BookCard from './components/BookCard'
import { Card } from 'semantic-ui-react'

class App extends Component {

  componentWillMount() {
    const { setBooks } = this.props;
    axios.get('/books.json').then(({data}) => {
      setBooks(data);
    })
  }

  render() {
    const { books, isReady } = this.props;
    return (
      <Container>
      <MenuComponent />
        <Card.Group itemsPerRow={4}>
          {!isReady ? 'Loading...' : books.map(book => (<BookCard key={book.id} title={book.title} author={book.author} price={book.price} image={book.image  } />))}
        </Card.Group>
      </Container>
  )}
}

const mapStateToProps = ({books}) => ({
  books: books.items,
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  setBooks: books => dispatch(setBooks(books))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
