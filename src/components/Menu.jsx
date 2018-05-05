import React from 'react';
import { connect } from 'react-redux';
import { Menu, Label, Popup } from 'semantic-ui-react';

import { removeFromCart } from '../actions/cart';

import { Cart } from './';

const MenuComponent = ({ totalUsd, count, items, removeFromCart }) => (
  <Menu >
    <Menu.Item header>Книжный магазин</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        Итого: &nbsp;<b>{totalUsd} usd</b>
      </Menu.Item>
      <Menu.Item onClick={() => {}}>
        <Popup
          wide="very"
          className="cart-popup"
          trigger={
            <div>
              Корзина <Label color={count ? 'teal' : 'grey'}>{count}</Label>
            </div>
          }
          on="click">
          {items && <Cart items={items} remove={removeFromCart} />}
        </Popup>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

const getValue = (items, prop) =>
  items.reduce((prev, obj) => prev + obj[prop], 0);

const mapStateToProps = (_, { items = [] }) => {
  const totalUsd = getValue(items, 'total');
  const count = getValue(items, 'count');
  return {
    totalUsd,
    count,
    items
  };
};

const mapDispatchToProps = {
  removeFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);
