import React from 'react';
import './moviecards.css';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

const WineCards = (props) => {
  return (
    <React.Fragment>
      {
        props.movies.map(movie => (
          <Card key={movie.id}>
            <CardImg top width="100%" src={movie.poster_120x171} alt="Card image cap" />
            <CardBody>
              <CardTitle>{movie.title}</CardTitle>
              <a href={movie.common_sense_media} target="_blank">More Info</a>
            </CardBody>
          </Card>
        ))
      }
      
    </React.Fragment>
  );
};

export default WineCards;