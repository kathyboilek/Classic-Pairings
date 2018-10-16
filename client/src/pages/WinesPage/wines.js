import React, { Component } from 'react';
import Nav from '../../components/NavBar';
import './wines.css';
import Footer from '../../components/Footer';
import WineCards from '../../components/WineCards';

class Wines extends Component {
  constructor() {
    super();

    this.handleFilter = this.handleFilter.bind(this);
    this.state = {
      wineName: '',
      wineColor: '',
      wineCountry: '',
    }
  }

  handleFilter = (event) => {
    // console.log('value', event.target.value);
    // console.log('name', event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  filterWines = (allWines, wineName, wineColor, wineCountry) => {
    let filteredWines = allWines;
    
    if (wineName)
      filteredWines = filteredWines.filter(wine => wine.wine === wineName);

    if (wineColor)
      filteredWines = filteredWines.filter(wine => wine.color === wineColor);
    
    if (wineCountry)
      filteredWines = filteredWines.filter(wine => wine.country === wineCountry);

    return filteredWines;
  }

  render() {
    const { wineName, wineColor, wineCountry } = this.state;
    // Mock API (Fake API for tests purpose)
    const wineList = ['Petrus, Pomerol', 'Pinot Noir'];
    const colorList = ['Red', 'White', 'Rosé', 'Sparkling', 'Cider'];
    const countryList = ['France', 'Germany'];

    const responseAPI = {
      "count": 1,
      "next": null,
      "previous": null,
      "results": [
        {
          "wine": "Petrus, Pomerol",
          "wine_id": 114959,
          "wine_slug": "petrus-pomerol",
          "appellation": "Pomerol",
          "appellation_slug": "pomerol",
          "color": "Red",
          "wine_type": "",
          "regions": [
            "Bordeaux"
          ],
          "country": "France",
          "classification": null,
          "vintage": "2000",
          "date": "2016-05-12",
          "is_primeurs": false,
          "score": 99.02,
          "confidence_index": "A+",
          "journalist_count": 6,
          "lwin": 1014033,
          "lwin_11": 10140332000
        },
        {
          "wine": "Dark Horse",
          "wine_id": 114960,
          "wine_slug": "dark-horse",
          "appellation": "darkhorse",
          "appellation_slug": "darkhorse",
          "color": "White",
          "wine_type": "",
          "regions": [
            "Bordeaux"
          ],
          "country": "Germany",
          "classification": null,
          "vintage": "2000",
          "date": "2016-05-12",
          "is_primeurs": false,
          "score": 99.02,
          "confidence_index": "A+",
          "journalist_count": 6,
          "lwin": 1014033,
          "lwin_11": 10140332000
        }
      ]
    };

    const filteredWines = this.filterWines(responseAPI.results, wineName, wineColor, wineCountry);

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

export default Wines;