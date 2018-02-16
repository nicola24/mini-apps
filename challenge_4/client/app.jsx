import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currFrame: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      roundOne: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      roundTwo: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      frame: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      score: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    };
    this.handleClick = this.handleClick.bind(this);
    this.roll = 0;
    this.frame = 0;
    this.pinArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  handleClick(e) {
    if (this.roll === 0) {
      this.state.roundOne[this.frame] = e;
      this.state.frame[this.frame] = this.state.roundOne[this.frame] + this.state.roundTwo[this.frame];
      this.setState(this.state.roundOne);
      this.roll++
    } else {
      this.state.roundTwo[this.frame] = e;
      this.state.frame[this.frame] = this.state.roundOne[this.frame] + this.state.roundTwo[this.frame];
      this.setState(this.state.roundTwo);
      this.frame++;
      this.roll = 0;
    }

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
            <Pins pin={this.pinArr[7]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[4]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[1]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[0]} handleClick={this.handleClick} />
          </div>
          <div className='pin'>
            <Pins pin={this.pinArr[8]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[5]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[2]} handleClick={this.handleClick} />
          </div>
          <div className='pin'>
            <Pins pin={this.pinArr[9]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[6]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[3]} handleClick={this.handleClick} />
            <Pins pin={this.pinArr[10]} handleClick={this.handleClick} />
          </div>
        </div>
        <div>
          <p>SCORE</p>
        </div>
        <div>
          <Score currFrame={this.state.currFrame}
                 roundOne={this.state.roundOne}
                 roundTwo={this.state.roundTwo}
                 frame={this.state.frame}
                 score={this.state.score} />
        </div>
      </div>
    );
  }
 }

 // *** PINS COMPONENT ***
const Pins = (props) => (
  <div>
    <button onClick={() => props.handleClick(props.pin)} >{props.pin}</button>
  </div>
);

 // *** SCORE COMPONENT ***
 const Score = (props) => (
   <div>
     <table>
       <thead>
         <tr>
           <th>FRAME</th>
           <th>Round One</th>
           <th>Round Two</th>
           <th>Frame Score</th>
           <th>Running Total</th>
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>{props.currFrame[0]}</td>
           <td>{props.roundOne[0]}</td>
           <td>{props.roundTwo[0]}</td>
           <td>{props.frame[0]}</td>
           <td>{props.score[0]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[1]}</td>
           <td>{props.roundOne[1]}</td>
           <td>{props.roundTwo[1]}</td>
           <td>{props.frame[1]}</td>
           <td>{props.score[1]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[2]}</td>
           <td>{props.roundOne[2]}</td>
           <td>{props.roundTwo[2]}</td>
           <td>{props.frame[2]}</td>
           <td>{props.score[2]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[3]}</td>
           <td>{props.roundOne[3]}</td>
           <td>{props.roundTwo[3]}</td>
           <td>{props.frame[3]}</td>
           <td>{props.score[3]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[4]}</td>
           <td>{props.roundOne[4]}</td>
           <td>{props.roundTwo[4]}</td>
           <td>{props.frame[4]}</td>
           <td>{props.score[4]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[5]}</td>
           <td>{props.roundOne[5]}</td>
           <td>{props.roundTwo[5]}</td>
           <td>{props.frame[5]}</td>
           <td>{props.score[5]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[6]}</td>
           <td>{props.roundOne[6]}</td>
           <td>{props.roundTwo[6]}</td>
           <td>{props.frame[6]}</td>
           <td>{props.score[6]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[7]}</td>
           <td>{props.roundOne[7]}</td>
           <td>{props.roundTwo[7]}</td>
           <td>{props.frame[7]}</td>
           <td>{props.score[7]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[8]}</td>
           <td>{props.roundOne[8]}</td>
           <td>{props.roundTwo[8]}</td>
           <td>{props.frame[8]}</td>
           <td>{props.score[8]}</td>
         </tr>
         <tr>
           <td>{props.currFrame[9]}</td>
           <td>{props.roundOne[9]}</td>
           <td>{props.roundTwo[9]}</td>
           <td>{props.frame[9]}</td>
           <td>{props.score[9]}</td>
         </tr>
       </tbody>
      </table>
   </div>
 );

ReactDOM.render(<App />, document.getElementById('app'));
