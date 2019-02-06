import React, { Component } from 'react';

import TextField from '../components/TextField'

class NewCardFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      front: "",
      back: ""
    };
    this.handleFrontChange = this.handleFrontChange.bind(this)
    this.handleBackChange = this.handleBackChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleFormClear = this.handleFormClear.bind(this)
  }

  handleFrontChange(event){
    this.setState({ front: event.target.value })
  }

  handleBackChange(event){
    this.setState({ back: event.target.value })
  }

  handleSubmit(event){
    event.preventDefault()

    let flashcardPayload = {
      front: this.state.front,
      back: this.state.back,
      deck_id: this.props.id
    }

    this.props.handleFormSubmit(flashcardPayload)
    this.handleFormClear()
  }

  handleFormClear(){
    this.setState({
      front: "",
      back: ""
    })
  }

  render() {
    return(
      <div className="form-wrapper">
        <div className="new-card-form">
          <div className="form-field">
            <h2>New Card</h2>
            <TextField
              label="Front"
              onChange={this.handleFrontChange}
              value={this.state.front}
            />
            <TextField
              label="Back"
              onChange={this.handleBackChange}
              value={this.state.back}
            />
            <i onClick={this.handleSubmit} id="plus-icon" className="far fa-plus-square fa-3x"/>
          </div>
        </div>
      </div>
    );
  }
};

export default NewCardFormContainer;
