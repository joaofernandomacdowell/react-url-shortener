import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, IndexLink} from 'react-router';


export default class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="dropdown menu">
            <li className="menu-text">URL Shortener</li>
            <li>
              <IndexLink to="/" className="nav-link" activeClassName="active-link">Shortener</IndexLink>
            </li>
            <li>
              <Link to="/about" className="nav-link" activeClassName="active-link">About</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
