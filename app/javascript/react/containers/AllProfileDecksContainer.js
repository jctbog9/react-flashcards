import React, { Component } from 'react';

import ProfileDeck from '../components/ProfileDeck'

class AllProfileDecksContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.params.id}/profile_decks`)
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
        this.setState({ decks: body });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let decks;

    if (this.state.decks){
      decks = this.state.decks.map(deck =>{
        return(
          <ProfileDeck
            key={deck.id}
            id={deck.id}
            name={deck.name}
            flashcards={deck.flashcards}
          />
        )
      })
    }

    return(
      <div className="content-wrapper">
        <div className="all-decks-container">
          {decks}
        </div>
      </div>
    );
  }
};

export default AllProfileDecksContainer;
