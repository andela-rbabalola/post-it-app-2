'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _trim = require('trim');

var _trim2 = _interopRequireDefault(_trim);

var _Card = require('material-ui/Card');

var _TextField = require('material-ui/TextField');

var _TextField2 = _interopRequireDefault(_TextField);

var _CircularProgress = require('material-ui/CircularProgress');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _RaisedButton = require('material-ui/RaisedButton');

var _RaisedButton2 = _interopRequireDefault(_RaisedButton);

var _MuiThemeProvider = require('material-ui/styles/MuiThemeProvider');

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _Paper = require('material-ui/Paper');

var _Paper2 = _interopRequireDefault(_Paper);

var _PostItActions = require('../actions/PostItActions');

var _PostItActions2 = _interopRequireDefault(_PostItActions);

var _PostItStore = require('../stores/PostItStore');

var _PostItStore2 = _interopRequireDefault(_PostItStore);

var _Group = require('./Group');

var _Group2 = _interopRequireDefault(_Group);

var _List = require('material-ui/List');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GroupList = function (_React$Component) {
  _inherits(GroupList, _React$Component);

  function GroupList(props) {
    _classCallCheck(this, GroupList);

    return _possibleConstructorReturn(this, (GroupList.__proto__ || Object.getPrototypeOf(GroupList)).call(this, props));
  }

  _createClass(GroupList, [{
    key: 'render',
    value: function render() {
      console.log(this.props.groups);
      if (!this.props.groups) {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _MuiThemeProvider2.default,
            null,
            _react2.default.createElement(
              _Card.Card,
              { style: {
                  flexGrow: 1
                } },
              _react2.default.createElement(_CircularProgress.CircularProgress, {
                mode: 'indeterminate',
                style: {
                  paddingTop: '20px',
                  paddingBottom: '20px',
                  margin: '0 auto',
                  display: 'block',
                  width: '60px'
                }
              })
            )
          )
        );
      }

      var groupNodes = this.props.groups.map(function (group, i) {
        return _react2.default.createElement(_Group2.default, { group: group, key: i });
      });
      console.log('GroupList------', this.props.groups);

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _MuiThemeProvider2.default,
          null,
          _react2.default.createElement(
            _List.List,
            null,
            _react2.default.createElement(_Card.CardTitle, { title: 'Group List' }),
            groupNodes
          )
        )
      );
    }
  }]);

  return GroupList;
}(_react2.default.Component);

exports.default = GroupList;