import React, {Component, PropTypes} from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onUserInput(event.target.value);
  }
  render(){
    return <input type="search" placeholder="search"
                  value={this.props.filterText}
                  onChange={this.handleChange} />
  }
}

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
}
