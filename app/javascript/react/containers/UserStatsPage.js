import React, { Component } from 'react';
import { Link } from 'react-router'

import Graph from '../components/Graph'

class UserStatsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    fetch(`/api/v1/users/${this.props.params.id}`)
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
        this.setState({ decksLength: body.decks.length, followeeCount: body.followees.length });
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    let graph;

    console.log(this.state)

    if (this.state.decksLength >= 0 || this.state.followeeCount >= 0) {
      graph =
      <Graph
        user={window.currentUser.username}
        decksLength={this.state.decksLength}
        followeeCount={this.state.followeeCount}
      />
    }

    return(
      <div className="content-wrapper">
        <div className="graph-container">
          {graph}
        </div>
      </div>
    );
  }
};

export default UserStatsPage;
