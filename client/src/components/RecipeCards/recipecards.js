import React from 'react';
import './recipecards.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const WineCards = (props) => {
  return (
    <React.Fragment>
      {
        props.recipes.map(recipe => (
          <Card key={recipe.recipe_id}>
            <CardImg top width="100%" src={recipe.image_url} alt="Card image cap" />
            <CardBody>
              <CardTitle>{recipe.title}</CardTitle>
              <a href={recipe.source_url} target="_blank">More Info</a>
            </CardBody>
          </Card>
        ))
      }
      
    </React.Fragment>
  );
};

export default WineCards;