import './dev.scss';
import ReactDigitalClock from './main';

/*===example start===*/

// install: npm install afeiship/react-digital-clock --save
// import : import ReactDigitalClock from 'react-digital-clock'

class App extends React.Component{
  state = {

  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  render(){
    return (
      <div className="hello-react-digital-clock">
        <ReactDigitalClock ref='rc' />
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
