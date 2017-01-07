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
    let contacts = [
      { name: "Cassio Zen", email: "cassiozen@gmail.com" },
      { name: "Dan Abramov", email: "gaearon@somewhere.com" },
      { name: "Pete Hunt", email: "floydophone@somewhere.com" },
      { name: "Paul O’Shannessy", email: "zpao@somewhere.com" },
      { name: "Ryan Florence", email: "rpflorence@somewhere.com" },
      { name: "Sebastian Markbage", email: "sebmarkbage@here.com" },
    ];

    return(
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput} />
        <ContactList contacts={contacts}
                     filterText={this.state.filterText} />
      </div>
    )
  }
}

ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
}
