import React, { Component } from 'react';

import { Link } from 'react-router';

class DeckTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return(
      <div>
        <Link to={`/decks/${this.props.id}`}>
          <h2>{this.props.name}</h2>
        </Link>
      </div>
    );
  }
};

export default DeckTile;
