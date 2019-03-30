import React, { Component } from 'react';

import { Link } from 'react-router';

class DeckTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    let stars;

    if (this.props.stars.length > 0) {
      stars =
      <div className="flashcard-total">
        <i className="fas fa-star 3x"/>{this.props.stars.length}
      </div>
    }

    return(
      <div>
        <Link to={`/decks/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
        {stars}
        <div className="flashcard-total">
          Flashcards: {this.props.flashcards.length} |
        </div>
        <div className="flashcard-total">
          Author: {this.props.author}    |
        </div>
      </div>
    );
  }
};

export default DeckTile;
