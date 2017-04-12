import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Form extends Component {
  constructor(props) {
    super(props);

    this._handleOnClick =:: this._handleOnClick;

    this.state {
      url: undefined
    }
  }

  _handleOnClick() {
    alert(test);
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" name="url" placeholder="Paste a url to shorten it" refs=""/>
          <button type="button" onClick={this._handleOnClick}>Short URL!</button>
        </form>
      </div>
    )
  }
}
