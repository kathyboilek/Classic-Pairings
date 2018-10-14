import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../pages/HomePage';
import Join from '../pages/JoinPage';
import Wines from '../pages/WinesPage';
import Food from '../pages/FoodPage';
import Movies from '../pages/MoviesPage';
import Events from '../pages/EventsPage';
import Contact from '../pages/ContactPage';
import GetStarted from '../pages/GetStartedPage';

const Routes = () => (
  <Router>
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/join" component={Join} />
       <Route exact path="/wines" component={Wines} />
       <Route exact path="/food" component={Food} />
       <Route exact path="/movies" component={Movies} />
       <Route exact path="/events" component={Events} />
       <Route exact path="/contactus" component={Contact} />
       <Route exact path="/getstarted" component={GetStarted} />
     </Switch>
  </Router> 
 );
 


export default Routes;