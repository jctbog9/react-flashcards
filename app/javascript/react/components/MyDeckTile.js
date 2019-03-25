import React, { Component } from 'react';

import { Link } from 'react-router';

import ToggleSwitch from './ToggleSwitch'

class MyDeckTile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      privacySetting: false,
      deleteDeck: false
    };
    this.handleChange = this.handleChange.bind(this)
    this.changeToggle = this.changeToggle.bind(this)
    this.handleDeleteDeck = this.handleDeleteDeck.bind(this)
    this.deleteDeck = this.deleteDeck.bind(this)
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

  handleDeleteDeck(){
    this.setState( {deleteDeck: !this.state.deleteDeck} )
  }

  deleteDeck(){
    fetch(`/api/v1/decks/${this.props.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        this.props.handleDelete(this.props.id)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    let amount;
    let content;

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

    if (this.state.deleteDeck === false){
      content =
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
          <button onClick={this.handleDeleteDeck}>Delete</button>
        </div>
      </div>
    } else {
      content =
      <div className="my-deck-tile">
        <div className="my-deck-tile-content">
          <p>Are you sure?</p>
          <button id="delete-button" onClick={this.deleteDeck}>Yes</button>
          <button id="undo-button" onClick={this.handleDeleteDeck}>Undo</button>
        </div>
      </div>
    }

    return(
      <div>
        {content}
      </div>
    );
  }
};

export default MyDeckTile;
