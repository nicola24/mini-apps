import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pinArr: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      currFrame: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      result: [[0], [0]],
      frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }

  render() {
    return (
      <div>

        <div>
          <h4>Bowling Game</h4>
        </div>

        <div>
          <p>PINS</p>
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

        <div>
          <p>SCORE</p>
        </div>

        <div>
          <Score currFrame={this.state.currFrame} result={this.state.result} frame={this.state.frame} score={this.state.score} />
        </div>

      </div>
    );
  }
 }

 // *** PINS COMPONENT ***
const Pins = (props) => (
  <div>
    <button onClick={() => alert('Clicked')} >{props.pin}</button>
  </div>
);

 // *** SCORE COMPONENT ***
 const Score = (props) => (
   <div>
     <table>
       <thead>
         <tr>
           <th>FRAME</th>
           <th>RESULT</th>
           <th>Frame Score</th>
           <th>Running Total</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>{props.currFrame[0]}</td>
           <td>{props.result}</td>
           <td>{props.frame[0]}</td>
           <td>{props.score[0]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[1]}</td>
           <td>{props.result}</td>
           <td>{props.frame[1]}</td>
           <td>{props.score[1]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[2]}</td>
           <td>{props.result}</td>
           <td>{props.frame[2]}</td>
           <td>{props.score[2]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[3]}</td>
           <td>{props.result}</td>
           <td>{props.frame[3]}</td>
           <td>{props.score[3]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[4]}</td>
           <td>{props.result}</td>
           <td>{props.frame[4]}</td>
           <td>{props.score[4]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[5]}</td>
           <td>{props.result}</td>
           <td>{props.frame[5]}</td>
           <td>{props.score[5]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[6]}</td>
           <td>{props.result}</td>
           <td>{props.frame[6]}</td>
           <td>{props.score[6]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[7]}</td>
           <td>{props.result}</td>
           <td>{props.frame[7]}</td>
           <td>{props.score[7]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[8]}</td>
           <td>{props.result}</td>
           <td>{props.frame[8]}</td>
           <td>{props.score[8]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[9]}</td>
           <td>{props.result}</td>
           <td>{props.frame[9]}</td>
           <td>{props.score[9]}</td>
         </tr>
       </tbody>
      </table>
   </div>
 );

ReactDOM.render(<App />, document.getElementById('app'));
