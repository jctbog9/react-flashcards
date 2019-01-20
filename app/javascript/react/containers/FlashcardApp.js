import React, { Component } from 'react';

class FlashcardApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      side: 'front',
      flashcardNumber: 0
    };
    this.handleBackClick = this.handleBackClick.bind(this)
    this.handleFrontClick = this.handleFrontClick.bind(this)
    this.nextFlashcard = this.nextFlashcard.bind(this)
    this.previousFlashcard = this.previousFlashcard.bind(this)
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

  nextFlashcard(){
    let flashcardNumber = this.state.flashcardNumber
    if (this.state.flashcards.length - 1 <= flashcardNumber){
      this.setState({ flashcardNumber: 0 })
      this.handleFrontClick()
    } else {
      this.setState({ flashcardNumber: flashcardNumber + 1 })
      this.handleFrontClick()
    }
  }

  previousFlashcard(){
    let flashcardNumber = this.state.flashcardNumber
    if (flashcardNumber === 0){
      this.setState({ flashcardNumber: this.state.flashcards.length - 1 })
    } else {
      this.setState({ flashcardNumber: flashcardNumber - 1 })
    }
  }

  render() {
    let card;
    let answerButton;

    if (this.state.side === 'front' && this.state.flashcards){
      card =
      <div className="flashcard">
        <h2>{this.state.flashcards[this.state.flashcardNumber].front}</h2>
      </div>

      answerButton =
      <button onClick={this.handleBackClick}>Show Back</button>

    } else if (this.state.side === 'back' && this.state.flashcards){
      card =
      <div className="flashcard">
        <h2>{this.state.flashcards[this.state.flashcardNumber].back}</h2>
      </div>

      answerButton =
      <button onClick={this.handleFrontClick}>Show Front</button>
    }

    return(
      <div>
        {card}
        <div className="flashcard-navigation">
          <div className="flashcard-navigation-centerize">
            <i onClick={this.previousFlashcard} id="arrow" className="fas fa-caret-square-left fa-3x"/>
            {answerButton}
            <i onClick={this.nextFlashcard} id="arrow" className="fas fa-caret-square-right fa-3x"/>
          </div>
        </div>
      </div>
    );
  }
};

export default FlashcardApp;
