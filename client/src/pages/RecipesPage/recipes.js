import React, { Component } from 'react';
import './recipes.css';
import Nav from '../../components/NavBar';
import Footer from '../../components/Footer';
import RecipeCards from '../../components/RecipeCards';

class Recipes extends Component {
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
        "count": 30,
        "recipes": [
        {
            "publisher": "Closet Cooking",
            "f2f_url": "http://food2fork.com/view/35382",
            "title": "Jalapeno Popper Grilled Cheese Sandwich",
            "source_url": "http://www.closetcooking.com/2011/04/jalapeno-popper-grilled-cheese-sandwich.html",
            "recipe_id": "35382",
            "image_url": "http://static.food2fork.com/Jalapeno2BPopper2BGrilled2BCheese2BSandwich2B12B500fd186186.jpg",
            "social_rank": 100,
            "publisher_url": "http://closetcooking.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47024",
            "title": "Perfect Iced Coffee",
            "source_url": "http://thepioneerwoman.com/cooking/2011/06/perfect-iced-coffee/",
            "recipe_id": "47024",
            "image_url": "http://static.food2fork.com/icedcoffee5766.jpg",
            "social_rank": 100,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "The Pioneer Woman",
            "f2f_url": "http://food2fork.com/view/47319",
            "title": "Crash Hot Potatoes",
            "source_url": "http://thepioneerwoman.com/cooking/2008/06/crash-hot-potatoes/",
            "recipe_id": "47319",
            "image_url": "http://static.food2fork.com/CrashHotPotatoes5736.jpg",
            "social_rank": 100,
            "publisher_url": "http://thepioneerwoman.com"
        },
        {
            "publisher": "Two Peas and Their Pod",
            "f2f_url": "http://food2fork.com/view/54384",
            "title": "Stovetop Avocado Mac and Cheese",
            "source_url": "http://www.twopeasandtheirpod.com/stovetop-avocado-mac-and-cheese/",
            "recipe_id": "54384",
            "image_url": "http://static.food2fork.com/avocadomacandcheesedc99.jpg",
            "social_rank": 100,
            "publisher_url": "http://www.twopeasandtheirpod.com"
        }
      ]
    };

    const filteredRecipes = responseAPI.recipes.filter(recipe => recipe.title.toLocaleLowerCase().includes(filterCriteria));
    console.log('filterCriteria', filterCriteria);
    
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
          <div className="wine-banner">Banner</div>  
          <div className="wine-cards">
            <RecipeCards recipes={filteredRecipes} />
          </div>  
          </div> 
        </div>
        <Footer />  
      </div>
    );
  }
}

export default Recipes;