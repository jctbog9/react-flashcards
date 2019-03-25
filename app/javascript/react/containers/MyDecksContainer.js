import React, { Component } from 'react';
import { Link } from 'react-router';

import MyDeckTile from '../components/MyDeckTile'

class MyDecksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleDelete = this.handleDelete.bind(this)
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

  handleDelete(deckId){
    this.setState({ decks: this.state.decks.filter(deck => deck.id !== deckId) })
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
            private={deck.private}
            handleDelete={this.handleDelete}
          />
        )
      })
    }
    return(
      <div className="content-wrapper">
        <h2>My Decks</h2>
        <Link to={'/new-deck'} className="button">Create New Deck</Link>
        <div className="decks-container">
          {decks}
        </div>
      </div>
    );
  }
};

export default MyDecksContainer;
