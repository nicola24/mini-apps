import React from 'react';
import {render} from 'react-dom';

class App extends React.Component {
  render () {
    return <h2>app.jsx</h2>;
  }
}

render(<App/>, document.getElementById('app'));

//*** COMPONENT BOARD ***
// class Board extends React.Component {
//   render() {
//     return (
//       <div>
//           <h1>Connect Four React</h1>
//       </div>
//     );
//   }
// }

// *** COMPONENT SQUARE ***
// const Square = (props) => (
//   <div>
//       {this.props.x}{this.props.y}
//   </div>
// );
