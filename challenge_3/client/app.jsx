import React from 'react';
import {render} from 'react-dom';

//*** COMPONENT BOARD ***
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
              [ [],[],[],[],[],[],[] ],
              [ [],[],[],[],[],[],[] ],
              [ [],[],[],[],[],[],[] ],
              [ [],[],[],[],[],[],[] ],
              [ [],[],[],[],[],[],[] ],
              [ [],[],[],[],[],[],[] ]
            ]
    };
  }

  onClickCol1() {

  }

  render() {
    return (
      <div>
        <div>
          <h1>Connect Four React</h1>
        </div>
        <div>
          <div className="column">
            <button onClick={this.onClickCol1}>COL 0</button>
            <Square value={'05'} piece={this.state.board[0][0]}/>
            <Square value={'04'} piece={this.state.board[1][0]}/>
            <Square value={'03'} piece={this.state.board[2][0]}/>
            <Square value={'02'} piece={this.state.board[3][0]}/>
            <Square value={'01'} piece={this.state.board[4][0]}/>
            <Square value={'00'} piece={this.state.board[5][0]}/>
          </div>
          <div className="column">
            <button>COL 1</button>
            <Square value={'15'} piece={this.state.board[0][1]}/>
            <Square value={'14'} piece={this.state.board[1][1]}/>
            <Square value={'13'} piece={this.state.board[2][1]}/>
            <Square value={'12'} piece={this.state.board[3][1]}/>
            <Square value={'11'} piece={this.state.board[4][1]}/>
            <Square value={'10'} piece={this.state.board[4][1]}/>
          </div>
          <div className="column">
            <button>COL 2</button>
            <Square value={'25'} piece={this.state.board[0][2]}/>
            <Square value={'24'} piece={this.state.board[1][2]}/>
            <Square value={'23'} piece={this.state.board[2][2]}/>
            <Square value={'22'} piece={this.state.board[3][2]}/>
            <Square value={'21'} piece={this.state.board[4][2]}/>
            <Square value={'20'} piece={this.state.board[5][2]}/>
          </div>
          <div className="column">
            <button>COL 3</button>
            <Square value={'35'} piece={this.state.board[0][3]}/>
            <Square value={'34'} piece={this.state.board[1][3]}/>
            <Square value={'33'} piece={this.state.board[2][3]}/>
            <Square value={'32'} piece={this.state.board[3][3]}/>
            <Square value={'31'} piece={this.state.board[4][3]}/>
            <Square value={'30'} piece={this.state.board[5][3]}/>
          </div>
          <div className="column">
            <button>COL 4</button>
            <Square value={'45'} piece={this.state.board[0][4]}/>
            <Square value={'44'} piece={this.state.board[1][4]}/>
            <Square value={'43'} piece={this.state.board[2][4]}/>
            <Square value={'42'} piece={this.state.board[3][4]}/>
            <Square value={'41'} piece={this.state.board[4][4]}/>
            <Square value={'40'} piece={this.state.board[5][4]}/>
          </div>
          <div className="column">
            <button>COL 5</button>
            <Square value={'55'} piece={this.state.board[0][5]}/>
            <Square value={'54'} piece={this.state.board[1][5]}/>
            <Square value={'53'} piece={this.state.board[2][5]}/>
            <Square value={'52'} piece={this.state.board[3][5]}/>
            <Square value={'51'} piece={this.state.board[4][5]}/>
            <Square value={'50'} piece={this.state.board[5][5]}/>
          </div>
          <div className="column">
            <button>COL 6</button>
            <Square value={'65'} piece={this.state.board[0][6]}/>
            <Square value={'64'} piece={this.state.board[1][6]}/>
            <Square value={'63'} piece={this.state.board[2][6]}/>
            <Square value={'62'} piece={this.state.board[3][6]}/>
            <Square value={'61'} piece={this.state.board[4][6]}/>
            <Square value={'60'} piece={this.state.board[5][6]}/>
          </div>
        </div>
      </div>
    );
  }
}

//*** COMPONENT SQUARE ***
const Square = (props) => (
  <div>
    <div>
    <div id="oneColumn">{props.value} {props.piece}</div>
    </div>
  </div>
);

render(<Board />, document.getElementById('app'));
