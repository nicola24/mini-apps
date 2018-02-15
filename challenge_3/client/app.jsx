import React from 'react';
import {render} from 'react-dom';

//*** COMPONENT BOARD ***
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }
  
  render() {
    return (
      <div>
        <div>
          <h1>Connect Four React</h1>
        </div>
        <div>
          <div class="column">
            <Square x={0} y={5}/>
            <Square x={0} y={4}/>
            <Square x={0} y={3}/>
            <Square x={0} y={2}/>
            <Square x={0} y={1}/>
            <Square x={0} y={0}/>
          </div>
          <div class="column">
            <Square x={1} y={5}/>
            <Square x={1} y={4}/>
            <Square x={1} y={3}/>
            <Square x={1} y={2}/>
            <Square x={1} y={1}/>
            <Square x={1} y={0}/>
          </div>
          <div class="column">
            <Square x={2} y={5}/>
            <Square x={2} y={4}/>
            <Square x={2} y={3}/>
            <Square x={2} y={2}/>
            <Square x={2} y={1}/>
            <Square x={2} y={0}/>
          </div>
          <div class="column">
            <Square x={3} y={5}/>
            <Square x={3} y={4}/>
            <Square x={3} y={3}/>
            <Square x={3} y={2}/>
            <Square x={3} y={1}/>
            <Square x={3} y={0}/>
          </div>
          <div class="column">
            <Square x={4} y={5}/>
            <Square x={4} y={4}/>
            <Square x={4} y={3}/>
            <Square x={4} y={2}/>
            <Square x={4} y={1}/>
            <Square x={4} y={0}/>
          </div>
          <div class="column">
            <Square x={5} y={5}/>
            <Square x={5} y={4}/>
            <Square x={5} y={3}/>
            <Square x={5} y={2}/>
            <Square x={5} y={1}/>
            <Square x={5} y={0}/>
          </div>
          <div class="column">
            <Square x={6} y={5}/>
            <Square x={6} y={4}/>
            <Square x={6} y={3}/>
            <Square x={6} y={2}/>
            <Square x={6} y={1}/>
            <Square x={6} y={0}/>
          </div>
        </div>
      </div>
    );
  }
}

// *** COMPONENT SQUARE ***
const Square = (props) => (
  <div>
    <div id="oneColumn">{props.x}{props.y}</div>
  </div>
);

render(<Board />, document.getElementById('app'));
