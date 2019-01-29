import React, { Component } from 'react';

import MyDeckTile from '../components/MyDeckTile'

class MyDecksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
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
          <MyDeckTile
            key={deck.id}
            id={deck.id}
            deckName={deck.name}
            flashcards={deck.flashcards}
          />
        )
      })
    }
    return(
      <div>
        My Decks Container Page
        <div className="decks-container">
          {decks}
        </div>
      </div>
    );
  }
};

export default MyDecksContainer;
