import React from 'react';
import './moviecards.css';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

const MovieCard = (props) => {
  return (
    <React.Fragment>
      {
        props.movies.map(movie => (
          <Card key={movie.id} className="movie-card">
            <div className="movie-img">
              { movie.poster_path && 
                <img src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${movie.poster_path}`} alt={movie.title} />
              }
            </div>
            <CardBody>
              <h5>{movie.title}</h5>
            </CardBody>
          </Card>
        ))
      }
      
    </React.Fragment>
  );
};

export default MovieCard;