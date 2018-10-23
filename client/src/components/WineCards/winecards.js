import React from 'react';
import Auth from '../../Auth';
import './winecards.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const auth = new Auth();


const WineCards = (props) => {
  return (
    <React.Fragment>
      {
        props.wines.map(wine => (
          <Card key={wine.wine_id}>
            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
            <CardBody>
              <CardTitle>{wine.wine}</CardTitle>
              <CardSubtitle>Vintage: {wine.vintage}</CardSubtitle>
              <CardText>Country: {wine.country}</CardText>
              <CardText>Region: {wine.regions}</CardText>
              { auth.isAuthenticated() && <Button>Button</Button>}
            </CardBody>
          </Card>
        ))
      }
      
    </React.Fragment>
  );
};

export default WineCards;