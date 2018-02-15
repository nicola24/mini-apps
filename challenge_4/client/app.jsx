import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  }
  render() {
    return (
      <div>
        <div>
          <p>Hello React!</p>
        </div>
        <div>
          <div className='pin'>
            <Pins pin={this.state.pinArr[7]} />
            <Pins pin={this.state.pinArr[4]} />
            <Pins pin={this.state.pinArr[1]} />
            <Pins pin={this.state.pinArr[0]} />
          </div>
          <div className='pin'>
            <Pins pin={this.state.pinArr[8]} />
            <Pins pin={this.state.pinArr[5]} />
            <Pins pin={this.state.pinArr[2]} />
          </div>
          <div className='pin'>
            <Pins pin={this.state.pinArr[9]} />
            <Pins pin={this.state.pinArr[6]} />
            <Pins pin={this.state.pinArr[3]} />
            <Pins pin={this.state.pinArr[10]} />
          </div>
        </div>
      </div>
    );
  }
 }

 // *** PINS COMPONENT ***
const Pins = (props) => (
  <div>
    <button onClick={(() => alert('hello'))} >{props.pin}</button>
  </div>
);

 // *** SCORING COMPONENT ***
 const Scoring = () => (
   <div>
     
   </div>
 );

ReactDOM.render(<App />, document.getElementById('app'));
