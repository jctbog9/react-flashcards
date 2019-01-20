import React from 'react'
import { Router, browserHistory, Route, IndexRoute } from 'react-router';

import LandingPage from '../containers/LandingPage';
import FlashcardApp from '../containers/FlashcardApp';

const App = (props) => {
  return (
    <Router history={browserHistory}>
      <Route path='/' component={LandingPage} />
      <Route path='/decks/:id' component={FlashcardApp}/>
    </Router>
  )
}

export default App;
