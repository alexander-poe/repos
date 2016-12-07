import React from 'react';
// <button onClick={this.props.onClick}>Search</button>
export default function SearchBar(props) {

    return (
      <div>
        <input type='text' onChange={props.updateSearch}/>
        <button onClick={props.findUser}>Search </button>
      </div>
    );
};
