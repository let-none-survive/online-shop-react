import { connect } from 'react-redux';
import {bindActionCreators} from 'redux'
import * as booksAction from '../actions/books';
import * as filterActions from '../actions/filter';
import App from '../components/App.jsx'
import orderBy from 'lodash/orderBy'

const sortBy = (books, filterBy) => {
  switch (filterBy) {
    case 'all':
      return books
    case 'priceHigh':
        return orderBy(books, 'price', 'desc')
    case 'priceLow':
        return orderBy(books, 'price', 'asc')
    case 'author':
        return orderBy(books, 'author', 'asc')
    default:
    return books
  }
}

const mapStateToProps = ({books}) => ({
  books: sortBy(books.items, books.filterBy),
  isReady: books.isReady
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(booksAction, dispatch),
  ...bindActionCreators(filterActions, dispatch),
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
