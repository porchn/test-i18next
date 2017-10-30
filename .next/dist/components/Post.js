'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactI18next = require('react-i18next');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pichaichin/Sites/with-i18next/components/Post.js';


var Post = function (_React$Component) {
  (0, _inherits3.default)(Post, _React$Component);

  function Post(props) {
    (0, _classCallCheck3.default)(this, Post);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Post.__proto__ || (0, _getPrototypeOf2.default)(Post)).call(this, props));

    _this.t = props.t;
    return _this;
  }

  (0, _createClass3.default)(Post, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        }
      }, this.t('namespace1:greatMorning'));
    }
  }]);

  return Post;
}(_react2.default.Component);

exports.default = (0, _reactI18next.translate)(['namespace1'])(Post);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvUG9zdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsInRyYW5zbGF0ZSIsIlBvc3QiLCJwcm9wcyIsInQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVM7Ozs7Ozs7SUFFSCxBO2dDQUNKOztnQkFBQSxBQUFhLE9BQU87d0NBQUE7O2tJQUFBLEFBQ1osQUFDTjs7VUFBQSxBQUFLLElBQUksTUFGUyxBQUVsQixBQUFlO1dBQ2hCOzs7Ozs2QkFFUyxBQUNSOzZCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0c7QUFESDtBQUFBLE9BQUEsT0FDRyxBQUFLLEVBRlYsQUFDRSxBQUNHLEFBQU8sQUFHYjs7Ozs7RUFaZ0IsZ0JBQU0sQSxBQWV6Qjs7a0JBQWUsNkJBQVUsQ0FBVixBQUFVLEFBQUMsZUFBMUIsQUFBZSxBQUEwQiIsImZpbGUiOiJQb3N0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waWNoYWljaGluL1NpdGVzL3dpdGgtaTE4bmV4dCJ9