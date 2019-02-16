import React, { Component } from 'react';

class ProfileInteractionsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followAmount: 0
    };
    this.handleFollow = this.handleFollow.bind(this)
    this.handleUnfollow = this.handleUnfollow.bind(this)
  }

  handleFollow(){
    let follow = {
      follower_id: this.props.id,
      followee_id: currentUser.id
    }
    fetch(`/api/v1/users/${this.props.id}/follows`, {
      method: 'POST',
      body: JSON.stringify(follow),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
    .then(body => {
      this.setState({ followingStatus: true, followAmount: this.state.followAmount + 1 })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  handleUnfollow(){
    fetch(`/api/v1/users/${this.props.id}/follows/1`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(body => {
        this.setState({ followingStatus: false, followAmount: this.state.followAmount - 1 })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  componentDidMount(){
    fetch(`/api/v1/users/${this.props.id}/follows`)
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
        this.setState({ follows: body.follows, followingStatus: body.following_status, followAmount: body.follows.length });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let follows;

    if (this.state.followingStatus !== null && this.state.followingStatus === false){
      follows =
      <div>
        <p>{this.state.followAmount} followers</p>
        <div onClick={this.handleFollow} className="button" id="follow-button">
          Follow
          <i className="fas fa-user-plus"/>
        </div>
      </div>
    } else if (this.state.followingStatus){
      follows =
      <div>
        <p>{this.state.followAmount} followers</p>
        <div onClick={this.handleUnfollow} className="button" id="follow-button">
          Following
          <i className="fas fa-user-check"/>
        </div>
      </div>
    } else if (this.state.follows) {
      follows =
      <div>
        {this.state.followAmount} followers
      </div>
    }

    return(
      <div>
        {follows}
      </div>
    );
  }
};

export default ProfileInteractionsContainer;
