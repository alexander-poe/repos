require('babel-polyfill');

import React from 'react'
import ReactDOM from 'react-dom'
import List from './components/list'
import SearchBar from './components/search-bar'

const URL = 'https://api.github.com/users/';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {list: [], searchTerm: ''}
    this.findUser = this.findUser.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
  }

  updateSearch(event) {
    let term = event.target.value;
    // console.log(term);
    this.setState({searchTerm: term});
  }

  findUser() {
    let searchTerm = this.state.searchTerm
    // let url = URL + searchTerm + '/repos';
    let url = `https://api.github.com/users/${searchTerm}/repos`
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((items) => {
      console.log(items);
      this.setState({list: items});
    })
    .catch(function(err) {
      console.log('error', err);
    });
  }

  render() {
    return (
      <div>
        <SearchBar findUser={this.findUser} updateSearch={this.updateSearch}/>
        <List gitList={this.state.list}/>
      </div>
    )
  }

}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( <App />, document.getElementById('app'));
});
