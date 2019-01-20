import React, { Component } from 'react';

class FlashcardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'front'
    };
    this.handleBackClick = this.handleBackClick.bind(this)
    this.handleFrontClick = this.handleFrontClick.bind(this)
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
        this.setState({ flashcards: body.flashcards });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleBackClick(){
    this.setState({ side: 'back' })
  }

  handleFrontClick(){
    this.setState({ side: 'front' })
  }

  render() {
    let card;
    let answerButton;

    if (this.state.side === 'front' && this.state.flashcards){
      card =
      <div>
        <h2>{this.state.flashcards[0].front}</h2>
      </div>

      answerButton =
      <button onClick={this.handleBackClick}>Show Back</button>

    } else if (this.state.side === 'back' && this.state.flashcards){
      card =
      <div>
        <h2>{this.state.flashcards[0].back}</h2>
      </div>

      answerButton =
      <button onClick={this.handleFrontClick}>Show Front</button>
    }

    return(
      <div>
        {card}
        {answerButton}
      </div>
    );
  }
};

export default FlashcardApp;
