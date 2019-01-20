import React, { Component } from 'react';

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

    if (this.state.decks) {
      decks = this.state.decks.map(deck => {
        return(
          <DeckTile
            key={deck.id}
            id={deck.id}
            name={deck.name}
            flashcards={deck.flashcards}
          />
        )
      })
    }

    return(
      <div>
        {decks}
      </div>
    );
  }
};

export default LandingPage;
