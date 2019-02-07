import React, { Component } from 'react';

import { Link } from 'react-router';

import ToggleSwitch from './ToggleSwitch'

class MyDeckTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacySetting: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.changeToggle = this.changeToggle.bind(this)
  }

  componentDidMount(){
    this.setState({ privacySetting: this.props.private })
  }

  handleChange(){
    let newSetting = !this.state.privacySetting

    let privacyParams = {
      id: this.props.id,
      private: newSetting
    }

    fetch(`/api/v1/decks/${this.props.id}`, {
      method: 'PUT',
      body: JSON.stringify(privacyParams),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => {
      this.changeToggle()
    })
  }

  changeToggle(){
    this.setState({ privacySetting: !this.state.privacySetting })
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
          <div>
            Private?
            <ToggleSwitch
              onChange={this.handleChange}
              toggleStatus={this.props.private}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default MyDeckTile;
