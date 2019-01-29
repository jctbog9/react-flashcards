import React, { Component } from 'react';

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
        <p>{this.props.deckName}</p>
        {amount}
        <button>Edit</button>
      </div>
    );
  }
};

export default MyDeckTile;
