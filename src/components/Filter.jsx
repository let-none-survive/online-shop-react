import React, {Component} from 'react'
import { Input, Menu } from 'semantic-ui-react'

const Filter = (props) => {
  const {setFilter, filterBy} = props;

  return (
    <Menu secondary>
      <Menu.Item active={filterBy === 'all'} onClick={setFilter.bind(this, 'all')} >Все</Menu.Item>
      <Menu.Item  active={filterBy === 'priceHigh'} onClick={setFilter.bind(this, 'priceHigh')} >Цена (дорогие)</Menu.Item>
      <Menu.Item  active={filterBy === 'priceLow'} onClick={setFilter.bind(this, 'priceLow')} >Цена (дешевые)</Menu.Item>
      <Menu.Item  active={filterBy === 'author'} onClick={setFilter.bind(this, 'author')} >По автору</Menu.Item>
    </Menu>

  )
}

export default Filter;
