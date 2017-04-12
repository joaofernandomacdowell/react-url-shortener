import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Link, IndexLink} from 'react-router';


export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.handleOnSubmit = ::this.handleOnSubmit;
    this.state = {
      name: 'João'
    };
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  handleOnSubmit(e) {
    console.log(this);
    console.log(e.target);
    window.alert(e.target.nodeType);
    this.setState({
      name: 'Malalala'
    });
  }

  render() {
    return (
      <div>
        <div>
          <ul>
            <li>React URL Shortener</li>
            <li>
              <IndexLink to="/" activeClassName="active-link">Shortener</IndexLink>
            </li>
            <li>
              <Link to="/about" activeClassName="active-link">About</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              Created by João Fernando
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
