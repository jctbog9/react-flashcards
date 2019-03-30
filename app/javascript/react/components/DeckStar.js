import React, { Component } from 'react';

class DeckStar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starred: false
    };
    this.handleStar = this.handleStar.bind(this)
    this.handleUnstar = this.handleUnstar.bind(this)
  }

  componentDidMount(){
    console.log(this.props.stars)
    if (this.props.stars.length > 0) {
      if (this.props.stars.includes(window.currentUser.username)) {
        this.setState({ starred: true })
      }
    }
  }

  handleStar(){
    let starPayload = { deck_id: this.props.deckId }

    fetch(`/api/v1/stars`, {
      method: 'POST',
      body: JSON.stringify(starPayload),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => this.setState({ starred: true }))
  }

  handleUnstar(){
    fetch(`/api/v1/stars/${this.props.id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(response => this.setState({ starred: false }))
  }

  render() {
    let star;

    if (this.state.starred === false) {
      star =
      <i onClick={this.handleStar} id="empty-star" className="fas fa-star fa-2x"/>
    } else if (this.state.starred === true) {
      star =
      <i onClick={this.handleUnstar} id="starred" className="fas fa-star fa-2x"/>
    } else {
      star =
      <i id="loading-animation" className="fas fa-spinner fa-2x" />
    }

    return(
      <div>
        {star}
      </div>
    );
  }
};

export default DeckStar;
