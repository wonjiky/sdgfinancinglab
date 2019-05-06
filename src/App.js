import React from 'react';
import {Switch, Route, Redirect, BrowserRouter as Router} from 'react-router-dom';
import Layout from './component/Layout/Layout';
import ExploreContainer from './container/ExploreContainer/ExploreContainer';
import AidGlobeContainer from './container/AidGlobeContainer/AidGlobeContainer';
import SDGRankingContainer from './container/SDGRankingContainer/SDGRankingContainer';
import './App.css';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' render={(props) => <AidGlobeContainer {...props} /> } /> 
          <Route path='/explore' render={(props) => <ExploreContainer {...props} /> } /> 
          <Route path='/sdgranking' render={(props) => <SDGRankingContainer {...props} /> } />
          <Redirect to='/' /> 
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
