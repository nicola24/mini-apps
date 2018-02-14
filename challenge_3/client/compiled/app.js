'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//*** COMPONENT BOARD ***
var Board = function (_React$Component) {
  _inherits(Board, _React$Component);

  function Board() {
    _classCallCheck(this, Board);

    return _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).apply(this, arguments));
  }

  _createClass(Board, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h1',
        null,
        'Connect Four React'
      );
    }
  }]);

  return Board;
}(_react2.default.Component);

// *** COMPONENT SQUARE ***


var Square = function Square(x, y) {
  return _react2.default.createElement(
    'div',
    null,
    undefined.x
  );
};

_reactDom2.default.render(_react2.default.createElement(Board, null), document.getElementByID('app'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2FwcC5qc3giXSwibmFtZXMiOlsiQm9hcmQiLCJDb21wb25lbnQiLCJTcXVhcmUiLCJ4IiwieSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SUQiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFHQTtJQUNNQSxLOzs7Ozs7Ozs7Ozs2QkFDSztBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURGO0FBR0Q7Ozs7RUFMaUIsZ0JBQU1DLFM7O0FBUTFCOzs7QUFDQSxJQUFNQyxTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKO0FBQUEsU0FDYjtBQUFBO0FBQUE7QUFDRyxjQUFLRDtBQURSLEdBRGE7QUFBQSxDQUFmOztBQU1BLG1CQUFTRSxNQUFULENBQWdCLDhCQUFDLEtBQUQsT0FBaEIsRUFBMkJDLFNBQVNDLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBM0IiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5cbi8vKioqIENPTVBPTkVOVCBCT0FSRCAqKipcbmNsYXNzIEJvYXJkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aDE+Q29ubmVjdCBGb3VyIFJlYWN0PC9oMT5cbiAgICApO1xuICB9XG59XG5cbi8vICoqKiBDT01QT05FTlQgU1FVQVJFICoqKlxuY29uc3QgU3F1YXJlID0gKHgsIHkpID0+IChcbiAgPGRpdj5cbiAgICB7dGhpcy54fVxuICA8L2Rpdj5cbik7XG5cblJlYWN0RE9NLnJlbmRlcig8Qm9hcmQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlEKCdhcHAnKSk7XG4iXX0=