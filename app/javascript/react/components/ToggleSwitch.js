import React, { Component } from "react";
import Switch from "react-switch";

class ToggleSwitch extends Component {
  constructor() {
    super();
    this.state = {
      checked: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setState({checked: this.props.toggleStatus})
  }

  handleChange(checked) {
    this.setState({ checked });
    this.props.onChange()
  }

  render() {
    return (
      <Switch
        onChange={this.handleChange}
        checked={this.state.checked}
        id="normal-switch"
      />
    );
  }
}

export default ToggleSwitch;
