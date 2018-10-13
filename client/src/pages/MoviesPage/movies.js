import React, { Component } from 'react';
import './movies.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import movie from '../../routes/api/movie';

class Movies extends Component {
  render() {
    return (
      <div className="Movies">
        <Nav />
        <div className="Container">
          <div className="item">17</div>
          <div className="item">18</div>
          <div className="item">19</div>
          <div className="item">20</div>
        </div>  
        <Footer />
      </div>
    );
  }
}

export default Movies;