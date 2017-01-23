import React, { Component, PropTypes } from 'react';
import SearchBar from './SearchBar';
import ContactList from './ContactList';


// Main component. Renders a SearchBar and a ContactList
export default class ContactsApp extends Component {
  constructor(props) {
    super(props);
    this.state={
      filterText: '',
    };
    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm})
  }

  render(){

    return(
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput} />
                 <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}
