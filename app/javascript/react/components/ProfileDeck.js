import React, { Component } from 'react';

import { Link } from 'react-router';

class ProfileDeck extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return(
      <div>
        <Link to={`/decks/${this.props.id}`}>
          <div className="profile-deck-box">
            <p>{this.props.name}</p>
            <p>Flashcards: {this.props.flashcards.length}</p>
          </div>
        </Link>
      </div>
    );
  }
};

export default ProfileDeck;
