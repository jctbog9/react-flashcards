import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import LandingPage from '../containers/LandingPage';

import FlashcardApp from '../containers/FlashcardApp';

import MyDecksContainer from '../containers/MyDecksContainer';
import EditDeckContainer from '../containers/EditDeckContainer';

import NewDeckContainer from '../containers/NewDeckContainer';

import ProfilePage from '../containers/ProfilePage';
import AllProfileDecksContainer from '../containers/AllProfileDecksContainer';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={LandingPage} />

      <Route path='/decks/:id' component={FlashcardApp}/>

      <Route path='/my-decks' component={MyDecksContainer}/>
      <Route path='/my-decks/:id/edit' component={EditDeckContainer}/>

      <Route path='/new-deck' component={NewDeckContainer}/>

      <Route path='/users/:id' component={ProfilePage}/>
      <Route path='/users/:id/profile_decks' component={AllProfileDecksContainer}/>
    </Router>
  )
}

export default App;
