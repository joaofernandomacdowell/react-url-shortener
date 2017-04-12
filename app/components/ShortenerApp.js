import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav";


export default class ShortenerApp extends Component {

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    return (
      <div>
        <Nav />
      </div>
    );
  }
}
