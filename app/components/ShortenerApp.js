import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Nav from "./Nav";
import Shortener from "./Shortener";


export default class ShortenerApp extends Component {

  render() {
    return (
      <div>
        <Nav/>
        <Shortener/>
      </div>
    );
  }
}
