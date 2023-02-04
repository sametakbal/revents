import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Container,
  Header,
  Segment,
  Button,
  Image,
  Icon,
} from 'semantic-ui-react';

export default function HomePage() {
  return (
    <Segment inverted textAlign='center' vertical className='masthead'>
      <Container>
        <Header as='h1' inverted>
          <Image
            size='massive'
            src='/assets/logo.png'
            style={{ marginBottom: 12 }}
          />
          Re-vents
        </Header>
        <Button size='huge' inverted as={NavLink} to='/events' >
          Get started
          <Icon name='right arrow' inverted />
        </Button>
      </Container>
    </Segment>
  );
}
