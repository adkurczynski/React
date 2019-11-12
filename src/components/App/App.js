import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import MainLayout from '../MainLayout/MainLayout';
import {BrowserRouter, Switch, Route } from 'react-router-dom';
import Faq from '../FAQ/FAQ';
import List from '../List/ListContainer';
import SearchResult from '../SearchResult/SearchResultContainer';

const App = () => (
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/faq' component={Faq} />
        <Route exact path='/list/:id' component={List} />
        <Route exact path='/search/:id' component={SearchResult} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
);

export default App;
