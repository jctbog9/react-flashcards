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
      this.handleFrontClick()
    } else {
      this.setState({ flashcardNumber: flashcardNumber - 1 })
      this.handleFrontClick()
    }
  }

  render() {
    let card;
    let answerButton;

    if (this.state.side === 'front' && this.state.flashcards){
      card =
      <div className="flashcard-app">
        <h2>Question</h2>
        <div className="flashcard">
          <div className="my-deck-tile-content">
            <h2>{this.state.flashcards[this.state.flashcardNumber].front}</h2>
          </div>
        </div>
        <h3>{this.state.flashcardNumber + 1}/{this.state.flashcards.length}</h3>
      </div>

      answerButton =
      <button onClick={this.handleBackClick}>Show Answer</button>

    } else if (this.state.side === 'back' && this.state.flashcards){
      card =
      <div className="flashcard-app">
        <h2>Answer</h2>
        <div className="flashcard">
          <div className="my-deck-tile-content">
            <h5>{this.state.flashcards[this.state.flashcardNumber].back}</h5>
          </div>
        </div>
        <h3>{this.state.flashcardNumber + 1}/{this.state.flashcards.length}</h3>
      </div>

      answerButton =
      <button onClick={this.handleFrontClick}>Show Question</button>
    }

    return(
      <div>
        <div className="flashcard-app">
          {card}
          <div className="flashcard-navigation">
            <div className="flashcard-navigation-centerize">
              <div className="arrows">
                <i onClick={this.previousFlashcard} id="arrow" className="fas fa-caret-square-left fa-3x"/>
              </div>
                {answerButton}
              <div className="arrows">
                <i onClick={this.nextFlashcard} id="arrow" className="fas fa-caret-square-right fa-3x"/>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-spacer">
        </div>
      </div>
    );
  }
};

export default FlashcardApp;
