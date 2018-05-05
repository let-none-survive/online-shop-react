import React from 'react'
import { Button, Header, Image, Modal, Label } from 'semantic-ui-react'

const ModalButton = ({price, title, image, description, book, addToCart, cartItem, id}) => (
  <Modal size='large' trigger={
    <Button
    content="О книге"
    fluid
    />
  } closeIcon>
  <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image>
      <Image
        size='big'
        src={image}
        wrapped
      />
      <Modal.Description>
        <Header>{title}</Header>
        <p>{description}</p>
        <p>Цена: ${price}</p>
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
          <Button
            onClick={addToCart.bind(this, id)}
            content="В корзину"
            color={cartItem ? 'green' : 'green'}
            basic={!!cartItem}
            />
            {cartItem && (
                <Label circular content={cartItem.count} size="large" color="green"/>
              )}
    </Modal.Actions>
  </Modal>
)

export default ModalButton
