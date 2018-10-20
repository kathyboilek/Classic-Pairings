import React, { Component } from 'react';
import './movies.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';


class Movies extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      movie_id: '',
      purchase_web_sources: '',
      purchase_android_sources: '',
      purchase_ios_sources: '',
      genres: '',
    }
  }

  handleFilter = (event) => {
    // console.log('value', event.target.value);
    // console.log('name', event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  filterMovies = (allMovies, movie_id, purchase_web_sources, purchase_android_sources, purchase_ios_sources, genres) => {
    let filteredMovies = allMovies;

    if (movie_id)
      filteredMovies = filteredMovies.filter(movie => movie.movie_id === movie_id);

    if (purchase_web_sources)
      filteredMovies = filteredMovies.filter(movie => movie.purchase_web_sources.includes(purchase_web_sources));
    
    if (purchase_android_sources)
      filteredMovies = filteredMovies.filter(movie => movie.purchase_android_sources.includes(purchase_android_sources));

    if (purchase_ios_sources)
      filteredMovies = filteredMovies.filter(movie => movie.purchase_ios_sources.includes(purchase_ios_sources));

    if (genres)
      filteredMovies = filteredMovies.filter(movie => movie.genres === genres);


    return filteredMovies;
  }

  render() {
    const { movie_id, purchase_web_sources, purchase_android_sources, purchase_ios_sources, genres } = this.state;
    // Mock API (Fake API for tests purpose)
    const movie_idList = ['7951570'];
    const purchase_web_sourcesList = ['itunes'];
    const purchase_android_sourcesList = ['vudu'];
    const purchase_ios_sourcesList = ['itunes'];
    const genresList = ['Drama']

    const responseAPI = {
      "purchase_web_sources": [
        {
            "source": "itunes",
            "display_name": "iTunes",
            "id": 7951570,
            "link": "https://itunes.apple.com/us/tv-season/the-winds-of-winter/id1091363548?i=1127951326&at=10laHb",
            "formats": [
                {
                    "price": "2.99",
                    "format": "SD",
                    "type": "purchase"
                },
                {
                    "price": "3.99",
                    "format": "HD",
                    "type": "purchase"
                }
            ]
        }
    ],
    "purchase_ios_sources": [
        {
            "source": "itunes",
            "display_name": "iTunes",
            "id": 7951570,
            "link": "itms://itunes.apple.com/us/tv-season/the-winds-of-winter/id1091363548?i=1127951326&at=10laHb",
            "app_name": "iTunes",
            "app_link": 1,
            "app_required": 1,
            "app_download_link": "itms-apps://",
            "formats": [
                {
                    "price": "2.99",
                    "format": "SD",
                    "type": "purchase"
                },
                {
                    "price": "3.99",
                    "format": "HD",
                    "type": "purchase"
                }
            ]
        }
    ],
    "purchase_android_sources": [
        {
            "source": "vudu",
            "display_name": "VUDU",
            "id": 7951714,
            "link": "vuduapp://780646",
            "app_name": "VUDU",
            "app_link": 1,
            "app_required": 1,
            "app_download_link": "https://play.google.com/store/apps/details?id=air.com.vudu.air.DownloaderTablet",
            "formats": [
                {
                    "price": "2.99",
                    "format": "SD",
                    "type": "purchase"
                },
                {
                    "price": "3.99",
                    "format": "HD",
                    "type": "purchase"
                }
            ]
        }
    ]
   };

    const filteredMovies = this.filterMovies(responseAPI.results, movie_id, purchase_web_sources, purchase_android_sources, purchase_ios_sources, genres);

    return (
      <div className="Movies">
        <Nav />

        
        <div className="Container">
          <div className="box1">
          <div className="filter-search">
            <div className="movie-list">
              <h3>Filter your search:</h3>
              <ul className="list">
              <li className="category-name">Movie ID</li>
                {
                  movie_idList.map(movie => <li key={movie}><input value={movie} type="checkbox" name="purchase_web_sources" onChange={this.handleFilter} /> {movie}</li>)
                }
                <li className="category-name">purchase_web_sources</li>
                {
                  purchase_web_sourcesList.map(movie => <li key={movie}><input value={movie} type="checkbox" name="purchase_web_sources" onChange={this.handleFilter} /> {movie}</li>)
                }
                <li className="category-name">purchase_android_sources</li>
                {
                  purchase_android_sourcesList.map(movie => <li key={movie}><input value={movie} type="checkbox" name="purchase_android_sources" onChange={this.handleFilter} /> {movie}</li>)
                }
                <li className="category-name">purchase_ios_sources</li>
                {
                  purchase_ios_sourcesList.map(movie => <li key={movie}><input value={movie} type="checkbox" name="purchase_ios_sources" onChange={this.handleFilter} /> {movie}</li>)
                }
                <li className="category-name">Genres</li>
                {
                  genresList.map(movie => <li key={movie}><input value={movie} type="checkbox" name="genres" onChange={this.handleFilter} /> {movie}</li>)
                }
              </ul>
            </div>  
          </div>
          </div>
          <div className="box2">
          {/* <div className="movie-banner">Banner</div>   */}
          <div className="movie-cards">
            <movieCards movies={filteredMovies} />
          </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}


export default Movies;