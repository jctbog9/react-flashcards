import React, { Component } from 'react';

class DailyWordContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API_KEY: "a25aae4642545599ed00403460204133dcae526a9faa56032",
      word: '',
      definitions: [],
      showDefinition: '',
      definitionIndex: 0
    };
    this.nextDefinition = this.nextDefinition.bind(this)
    this.previousDefinition = this.previousDefinition.bind(this)
  }

  componentDidMount(){
    fetch(`https://api.wordnik.com/v4/words.json/wordOfTheDay?api_key=${this.state.API_KEY}`)
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
        this.setState({ word: body.word, definitions: body.definitions });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  nextDefinition(){
    if (this.state.definitionIndex + 1 < this.state.definitions.length) {
      this.setState({ definitionIndex: this.state.definitionIndex + 1 })
    } else {
      this.setState({ definitionIndex: 0 })
    }
  }

  previousDefinition(){
    if (this.state.definitionIndex === 0) {
      this.setState({ definitionIndex: this.state.definitions.length - 1})
    } else {
      this.setState({ definitionIndex: this.state.definitionIndex - 1 })
    }
  }

  render() {
    let word;
    let definition;
    let source;

    if (this.state.word) {
      word = this.state.word
      let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1)
      word = `"${capitalizedWord}"`
    }

    if (this.state.definitions.length > 0) {
      definition = this.state.definitions[this.state.definitionIndex].text
      source = this.state.definitions[this.state.definitionIndex].source
    }

    return(
      <div className="daily-word-container">
        <h2>Daily Word <i className="fas fa-glasses" id="glasses"/>: {word}</h2>
        <p>Source - {source}</p>
        <p>Definition - {definition}</p>
        <div className="buttons">
          <i onClick={this.previousDefinition} className="fas fa-caret-square-left fa-3x" id="arrow"/>
          <i onClick={this.nextDefinition} className="fas fa-caret-square-right fa-3x" id="arrow"/>
        </div>
      </div>
    );
  }
};

export default DailyWordContainer;
