import React from 'react';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import { setFilter } from '../actions/filter';

const Sidebar = ({ filterBy, setFilter}) => {
  const filters = [
    { type: 'all', label: 'Все' },
    { type: 'priceHigh', label: 'Цена (дорогие)' },
    { type: 'priceLow', label: 'Цена (дешевые)' },
    { type: 'author', label: 'Автор' }
  ];

  return (
    <Menu secondary>
      {filters.map((o, i) => (
        <Menu.Item
          key={i}
          name="inbox"
          active={filterBy === o.type}
          onClick={setFilter.bind(this, o.type)}>
          {o.label}
        </Menu.Item>
      ))}
    </Menu>
  );
};

const mapStateToProps = ({ filter: { filterBy, searchQuery } }) => ({
  filterBy,
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
