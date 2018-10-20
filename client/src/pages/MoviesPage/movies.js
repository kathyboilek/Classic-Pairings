import React, { Component } from 'react';
import './movies.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import MovieCards from '../../components/MovieCards';

class Movies extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      filterCriteria:''
    }
  }

  handleFilter = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  render() {
    const { filterCriteria } = this.state;

    const responseAPI = {
      "total_results": 81047,
      "total_returned": 25,
      "results": [
          {
              "id": 157872,
              "title": "Ready Player One",
              "release_year": 2018,
              "themoviedb": 333339,
              "original_title": "Ready Player One",
              "alternate_titles": [],
              "imdb": "tt1677720",
              "pre_order": false,
              "in_theaters": false,
              "release_date": "2018-03-28",
              "rating": "NR",
              "rottentomatoes": 771416185,
              "freebase": "",
              "wikipedia_id": 46270306,
              "metacritic": "http://www.metacritic.com/movie/ready-player-one",
              "common_sense_media": "https://www.commonsensemedia.org/movie-reviews/ready-player-one",
              "poster_120x171": "http://static-api.guidebox.com/100117/thumbnails_movies_small/157872-9013263946-4637224753-7091846596-small-120x171-alt-.jpg",
              "poster_240x342": "http://static-api.guidebox.com/100117/thumbnails_movies_medium/157872-7588576590-9450057405-5720443237-medium-240x342-alt-.jpg",
              "poster_400x570": "http://static-api.guidebox.com/100117/thumbnails_movies/-alt--157872-3130895058-2806170848-4668295598-large-400x570-alt-.jpg"
          },
          {
              "id": 159962,
              "title": "A Quiet Place",
              "release_year": 2018,
              "themoviedb": 447332,
              "original_title": "A Quiet Place",
              "alternate_titles": [
                  "Un lugar en silencio"
              ],
              "imdb": "tt6644200",
              "pre_order": false,
              "in_theaters": false,
              "release_date": "2018-04-03",
              "rating": "PG-13",
              "rottentomatoes": 771473584,
              "freebase": "",
              "wikipedia_id": 54470227,
              "metacritic": "http://www.metacritic.com/movie/a-quiet-place",
              "common_sense_media": "https://www.commonsensemedia.org/movie-reviews/a-quiet-place",
              "poster_120x171": "http://static-api.guidebox.com/100117/thumbnails_movies_small/159962-4148231470-2033376959-9914002381-small-120x171.jpg",
              "poster_240x342": "http://static-api.guidebox.com/100117/thumbnails_movies_medium/159962-7972227093-3590170113-9434815342-medium-240x342.jpg",
              "poster_400x570": "http://static-api.guidebox.com/100117/thumbnails_movies/159962-3714217316-1469129692-5023775622-large-400x570.jpg"
          },
          {
              "id": 158269,
              "title": "Avengers: Infinity War",
              "release_year": 2018,
              "themoviedb": 299536,
              "original_title": "Avengers: Infinity War",
              "alternate_titles": [
                  "Avengers 3",
                  "The Avengers 3: Part 1",
                  "Avengers: Infinity War - Part I",
                  "Avengers: Infinity War Opening Night Fan Event",
                  "Marvel's The  Avengers 3: Infinity War",
                  "Avengers: Infinity War with Bonus",
                  "Avengers: Infinity War (2018)",
                  "Avengers: Infinity War. Part I",
                  "Marvel's The Avengers 3: Infinity War",
                  "The Avengers 3: Infinity War"
              ],
              "imdb": "tt4154756",
              "pre_order": false,
              "in_theaters": false,
              "release_date": "2018-04-25",
              "rating": "PG-13",
              "rottentomatoes": 771401853,
              "freebase": "",
              "wikipedia_id": 44240443,
              "metacritic": "http://www.metacritic.com/movie/avengers-infinity-war",
              "common_sense_media": "https://api.commonsensemedia.org/movie-reviews/avengers-infinity-war",
              "poster_120x171": "http://static-api.guidebox.com/100117/thumbnails_movies_small/158269-3827995961-2214148585-3661807836-small-120x171.jpg",
              "poster_240x342": "http://static-api.guidebox.com/100117/thumbnails_movies_medium/158269-1289124387-7392260125-2034828211-medium-240x342.jpg",
              "poster_400x570": "http://static-api.guidebox.com/100117/thumbnails_movies/-158269-8960080165-1942795487-7645747997-large-400x570.jpg"
          }
        ]
    };

    const filteredMovies = responseAPI.results.filter(movie => movie.title.toLocaleLowerCase().includes(filterCriteria));
    
    return (
      <div className="">
        <Nav />
        <div className="Container">
          <div className="box1">
          <div className="filter-search">
            <div className="wine-list">
              <h3>Filter your search:</h3>
              <input type="text" value={filterCriteria} name="filterCriteria" onChange={this.handleFilter} />
            </div>  
          </div>
          </div>
          <div className="box2">
          {/* <div className="wine-banner">Banner</div>   */}
          <div className="wine-cards">
            <MovieCards movies={filteredMovies} />
          </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Movies;