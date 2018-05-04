import React from 'react'
import {
  Card,
  Grid,
  Icon,
  Image,
  Button,
  Label,
  Rating
} from 'semantic-ui-react';

const BookCard = ({title, author, price, image, addToCart, cartItem, id}) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
        {title}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {author}
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Grid divided>
        <Grid.Row stretched>
          <Grid.Column width={cartItem && 12}>
            <Button
              onClick={addToCart.bind(this, id)}
              content="В корзину"
              color={cartItem ? 'green' : 'green'}
              basic={!!cartItem}
              fluid
            />
          </Grid.Column>
          {cartItem && (
            <Grid.Column width={4}>
              <Label color="green">{cartItem.count}</Label>
            </Grid.Column>
          )}
        </Grid.Row>
      </Grid>
      <a>
        <Icon name='usd' />
        {price}
      </a>
    </Card.Content>
  </Card>
)
export default BookCard
