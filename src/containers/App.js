import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App.jsx';

import orderBy from 'lodash/orderBy';
import groupBy from 'lodash/groupBy';
import find from 'lodash/find';

import * as books from '../actions/books';
import * as cart from '../actions/cart';

const filterBooks = (type,  books) => {
  if (!books) {
    return null;
  }
  switch (type) {
    case 'popular':
      return orderBy(books, 'rating', 'desc');
    case 'priceHigh':
      return orderBy(books, 'price', 'desc');
    case 'priceLow':
      return orderBy(books, 'price', 'asc');
    case 'author':
      return orderBy(books, 'author');
    default:
      return books;
  }
};

const getCartItems = (ids, books) => {
  const keys = Object.keys(ids);
  console.log(ids);
  return keys.map(id => ({
    id: parseInt(id),
    image: books[id].image,
    title: books[id].title,
    count: ids[id].length,
    total: ids[id].length * books[id].price
  }));
};

const mapStateToProps = ({
  cart,
  books,
  filter: { filterBy }
}) => {
  const items = filterBooks(filterBy, books.items);
  const groupIds = groupBy(cart.items);
  const cartItems = getCartItems(groupIds, books.items);
  return {
    items,
    isReady: books.isReady,
    filterBy,
    cartItems,
  };
};

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(books, dispatch),
  ...bindActionCreators(cart, dispatch),
  getCartItem: (cartItems, id) => find(cartItems, { id })
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
