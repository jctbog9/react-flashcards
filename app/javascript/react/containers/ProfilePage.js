import React, { Component } from 'react';

import ProfileInteractionsContainer from '../containers/ProfileInteractionsContainer'

import ProfileDeck from '../components/ProfileDeck'

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount(){
    fetch(`/api/v1/profiles/${this.props.params.id}`)
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
        this.setState({ user: body.user, decks: body.decks });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let user;
    let decks;
    let request;

    if (this.state.user){
      user = <h2>{this.state.user.username}</h2>
    }

    if (this.state.decks){
      decks = this.state.decks.map(deck => {
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
        <div className="cover-photo">
          Cover Photo will eventually go here
          <div className="profile-photo">
          The profile photo will eventually go here
          </div>
        </div>
        <div className="header">
          {user}
        </div>
        <div className="profile-deck-box-wrapper">
          <div className="form-field">
            <div id="decks">
              <h3>Decks:</h3>
            </div>
            {decks}
          </div>
        </div>
        <div className="interaction-box">
          <div className="interaction-centerize">
            <ProfileInteractionsContainer
              id={this.props.params.id}
            />
          </div>
        </div>
      </div>
    );
  }
};

export default ProfilePage;
