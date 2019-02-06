import React, { Component } from 'react';

import { Link, history, Redirect } from 'react-router';

import TextField from '../components/TextField'

class NewDeckContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deckName: "",
      newDeckParam: 0
    };
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.createNewDeck = this.createNewDeck.bind(this)
  }

  handleNameChange(event){
    this.setState({ deckName: event.target.value })
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
        this.setState({ newDeckParam: body.length + 1 });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFormSubmit(event){
    event.preventDefault()
    this.createNewDeck()
  }

  createNewDeck(){
    let deckPayload = {name: this.state.deckName}

    fetch(`/api/v1/decks`, {
      method: 'POST',
      body: JSON.stringify(deckPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => {
        if (response.ok) {
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
              window.location.replace(`my-decks/${body[body.length -1].id}/edit`)
            })
            .catch(error => console.error(`Error in fetch: ${error.message}`));
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {

    return(
      <div>
        <div className="content-wrapper">
          <h2>What would you like to call this new deck?</h2>
          <form onSubmit={this.handleFormSubmit}>
            <TextField
              label="Deck Name"
              value={this.state.deckName}
              onChange={this.handleNameChange}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
};

export default NewDeckContainer;
