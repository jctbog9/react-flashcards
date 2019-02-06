import React, { Component } from 'react';

import TextField from '../components/TextField'

import NewCardFormContainer from '../containers/NewCardFormContainer'

class EditDeckContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleFlashcardStateChange = this.handleFlashcardStateChange.bind(this)
  }

  componentDidMount(){
    fetch(`/api/v1/decks/${this.props.params.id}`)
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
        this.setState({ deck: body, flashcards: body.flashcards });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFormSubmit(flashcardPayload){
    fetch(`/api/v1/flashcards`, {
      method: 'POST',
      body: JSON.stringify(flashcardPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(body => {
      this.handleFlashcardStateChange(flashcardPayload)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleFlashcardStateChange(flashcardPayload){
    this.setState({ flashcards: this.state.flashcards.concat(flashcardPayload) })
  }

  render() {
    let deck;
    let flashcards;

    if (this.state.flashcards) {
      flashcards = this.state.flashcards.map(flashcard => {
        return(
          <div key={flashcard.front} className="my-deck-tile">
            <div className="my-deck-tile-content">
              <p>Front: {flashcard.front}</p>
              <p>Back: {flashcard.back}</p>
            </div>
          </div>
        )
      })
    }

    if (this.state.deck) {
      deck =
      <div>
        <h2>{this.state.deck.name}</h2>
        <div className="flashcards-container">
          {flashcards}
        </div>
        <NewCardFormContainer
          handleFormSubmit={this.handleFormSubmit}
          id={this.props.params.id}
        />
      </div>
    }

    return(
      <div className="content-wrapper">
        {deck}
      </div>
    );
  }
};

export default EditDeckContainer;
