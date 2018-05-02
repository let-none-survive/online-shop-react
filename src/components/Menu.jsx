import React from 'react'
import { Menu } from 'semantic-ui-react'

const MenuComponent = () => (
  <Menu>
    <Menu.Item name='browse' onClick={this.handleItemClick}>
      Книжный магазин
    </Menu.Item>

    <Menu.Menu position='right'>
      <Menu.Item name='signup' onClick={this.handleItemClick}>
       Итого: <b>0</b>USD
      </Menu.Item>

      <Menu.Item name='help' onClick={this.handleItemClick}>
       Корзина (<b>0</b>)
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)
export default MenuComponent
