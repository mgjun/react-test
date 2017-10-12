import React from 'react';
import {browserHistory, Router, Route,IndexRoute} from 'react-router';

import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';


const Routes = React.createClass({
   render() {
       return (
           <Router history={browserHistory}>
               <IndexRoute component={Home}/>
               <Route path="/" component={Home}>
                   <Route path="about" component={About} />
                   <Route path="login" component={Login} />
               </Route>
           </Router>
       )
   }
});

export default Routes;