import React, { Component } from 'react';
import './movies.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';


class Wines extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      movie_id:: '',
      wineName: '',
      wineColor: '',
      wineCountry: '',
      wineRegions: '',
      Vintage: '',
    }
  }

  handleFilter = (event) => {
    // console.log('value', event.target.value);
    // console.log('name', event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  filterWines = (allWines, wineName, wineColor, wineCountry, wineRegions, wineVintage) => {
    let filteredWines = allWines;
    
    if (wineName)
      filteredWines = filteredWines.filter(wine => wine.wine === wineName);

    if (wineColor)
      filteredWines = filteredWines.filter(wine => wine.color === wineColor);
    
    if (wineCountry)
      filteredWines = filteredWines.filter(wine => wine.country === wineCountry);

    if (wineRegions)
      filteredWines = filteredWines.filter(wine => wine.regions.includes(wineRegions));

    if (wineVintage)
      filteredWines = filteredWines.filter(wine => wine.vintage === wineVintage);


    return filteredWines;
  }

  render() {
    const { wineName, wineColor, wineCountry, wineRegions, wineVintage } = this.state;
    // Mock API (Fake API for tests purpose)
    const wineList = ['Petrus, Pomerol', 'Pinot Noir'];
    const colorList = ['Red', 'White', 'Rosé', 'Sparkling', 'Cider'];
    const countryList = ['France', 'Germany'];
    const regionsList = ['Bordeaux', 'Alpine']
    const vintageList = ['2000', '2001']

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

    const filteredMovies = this.filterMovies(responseAPI.results, wineName, wineColor, wineCountry, wineRegions, wineVintage);

    return (
      <div className="Wines">
        <Nav />

        
        <div className="Container">
          <div className="box1">
          <div className="filter-search">
            <div className="wine-list">
              <h3>Filter your search:</h3>
              <ul className="list">
                <li className="category-name">Wine</li>
                {
                  wineList.map(wine => <li key={wine}><input value={wine} type="checkbox" name="wineName" onChange={this.handleFilter} /> {wine}</li>)
                }
                <li className="category-name">Color</li>
                {
                  colorList.map(wine => <li key={wine}><input value={wine} type="checkbox" name="wineColor" onChange={this.handleFilter} /> {wine}</li>)
                }
                <li className="category-name">Country</li>
                {
                  countryList.map(wine => <li key={wine}><input value={wine} type="checkbox" name="wineCountry" onChange={this.handleFilter} /> {wine}</li>)
                }
                <li className="category-name">Regions</li>
                {
                  regionsList.map(wine => <li key={wine}><input value={wine} type="checkbox" name="wineRegions" onChange={this.handleFilter} /> {wine}</li>)
                }
                <li className="category-name">Vintage</li>
                {
                  vintageList.map(wine => <li key={wine}><input value={wine} type="checkbox" name="wineVintage" onChange={this.handleFilter} /> {wine}</li>)
                }
              </ul>
            </div>  
          </div>
          </div>
          <div className="box2">
          <div className="wine-banner">Banner</div>  
          <div className="wine-cards">
            <WineCards wines={filteredWines} />
          </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}


export default Movies;