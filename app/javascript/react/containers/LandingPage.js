import React, { Component } from 'react';
import DailyWordContainer from './DailyWordContainer'
import DeckTile from '../components/DeckTile'

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      decks: []
    };
  }

  componentDidMount() {
    fetch(`/api/v1/decks`)
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        this.setState({ decks: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let decks;
    let deckMessage;
    let welcomeMessage;

    let dailyWord;

    if (this.state.decks) {
      decks = this.state.decks.map(deck => {

        let author;

        if (deck.user.username) {
          author = deck.user.username
        } else {
          author = deck.user.email
        }

        return(
          <div className="front-page-deck" key={deck.id}>
            <div className="centering-deck-tiles" key={deck.id}>
              <DeckTile
                key={deck.id}
                id={deck.id}
                name={deck.name}
                flashcards={deck.flashcards}
                author={author}
                stars={deck.stars}
              />
            </div>
          </div>
        )
      })

    }

    if (window.currentUser && window.currentUser.username) {
      welcomeMessage =
      <div className="welcome-message">
        <h2>Welcome {window.currentUser.username}</h2>
      </div>

      deckMessage = <h2>My Decks:</h2>
    } else if (window.currentUser) {
      welcomeMessage =
      <div className="welcome-message">
        <h2>Welcome {window.currentUser.email}</h2>
      </div>

      deckMessage = <h2>My Decks:</h2>
    } else {
      deckMessage = <h2>Recently Created:</h2>
    }

    if (window.currentUser) {
      dailyWord =
      <div>
        <DailyWordContainer />
      </div>
    }

    return(
      <div>
        {welcomeMessage}
        {dailyWord}
        <div className="welcome-message">
          {deckMessage}
        </div>
        {decks}
      </div>
    );
  }
};

export default LandingPage;
