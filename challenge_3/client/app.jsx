import React from 'react';
import ReactDOM from 'react-dom';


//*** COMPONENT BOARD ***
class Board extends React.Component {
  render() {
    return (
      <h1>Connect Four React</h1>
    );
  }
}

// *** COMPONENT SQUARE ***
const Square = (x, y) => (
  <div>
    {this.x}
  </div>
);

ReactDOM.render(<Board />, document.getElementByID('app'));
