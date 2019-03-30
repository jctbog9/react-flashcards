import React from 'react'
import { Router, browserHistory, Route, IndexRoute, Redirect } from 'react-router';

import LandingPage from '../containers/LandingPage';

import FlashcardApp from '../containers/FlashcardApp';

import MyDecksContainer from '../containers/MyDecksContainer';
import EditDeckContainer from '../containers/EditDeckContainer';

import NewDeckContainer from '../containers/NewDeckContainer';

import ProfilePage from '../containers/ProfilePage';
import UserStatsPage from '../containers/UserStatsPage';

const App = (props) => {

  let myDecks;
  let stats;

  if (window.currentUser) {
    myDecks =
    <div>
      <Route path='/my-decks' component={MyDecksContainer}/>
      <Route path='/my-decks/:id/edit' component={EditDeckContainer}/>
      <Route path='/new-deck' component={NewDeckContainer}/>
    </div>

    stats =
    <div>
      <Route path='/profiles/:id/stats' component={UserStatsPage}/>
    </div>

  } else {
    myDecks =
    <div>
      <Redirect from='/my-decks' to='/'/>
      <Redirect from='/my-decks/:id/edit' to='/'/>
      <Redirect from='/new-deck' to='/'/>
    </div>

    stats =
    <div>
      <Redirect from='/profiles/:id/stats' to='/'/>
    </div>

  }

  return (
    <Router history={browserHistory}>
      <Route path='/' component={LandingPage} />

      <Route path='/decks/:id' component={FlashcardApp}/>

      {myDecks}

      <Route path='/profiles/:id' component={ProfilePage}/>

      {stats}
    </Router>
  )
}

export default App;
