import React, { Component } from 'react';

import { Link } from 'react-router';

class MyDeckTile extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    let amount;

    if (this.props.flashcards.length > 1) {
      amount =
      <div>
        <p>{this.props.flashcards.length} Flashcards</p>
      </div>
    } else {
      amount =
      <div>
        <p>1 Flashcard</p>
      </div>
    }

    return(
      <div className="my-deck-tile">
        <div className="my-deck-tile-content">
          <p>{this.props.deckName}</p>
          {amount}
          <Link to={`my-decks/${this.props.id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
      </div>
    );
  }
};

export default MyDeckTile;
