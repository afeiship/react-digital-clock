import ReactDigitalClock from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  componentDidMount() {}
  render() {
    return (
      <div className="app-container">
        <ReactDigitalClock value="2018-06-23 11:03:11" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
