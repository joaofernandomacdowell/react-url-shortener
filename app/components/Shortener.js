import React, {Component, PropTypes} from 'react';
import ReactDOM from 'react-dom';

export default class Shortener extends Component {

  constructor(props) {
    super(props);

    this._handleOnSubmit =:: this._handleOnSubmit;

    this.state = {
      url: "",
      date: new Date()
    };
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUnmount() {
    clearInterval(this.timerID);
  }

  _handleOnSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.props.handleOnSubmit(this.state);
    }
  }

  isValid() {
    let shortedUrl = this.refs.url.value;
    if (shortedUrl === "") {
      alert("Please, enter with a valid url");
      return false;
    }
    this.setState({url: shortedUrl});
    return shortedUrl.length !== 0;
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div className="column small-centered medium-10">
        <p className="date-time">{this.state.date.toLocaleTimeString()}</p>
        <form onClick={this._handleOnSubmit}>
          <input className="url-input" type="text" ref="url" placeholder="Paste a url to shorten it"/>
          <button className="button expanded">Shorten URL!</button>
        </form>
      </div>
    );
  }
}
