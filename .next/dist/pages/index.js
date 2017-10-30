'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactI18next = require('react-i18next');

var _startI18n = require('../tools/startI18n');

var _startI18n2 = _interopRequireDefault(_startI18n);

var _translationHelpers = require('../tools/translationHelpers');

var _Title = require('../components/Title');

var _Title2 = _interopRequireDefault(_Title);

var _Post = require('../components/Post');

var _Post2 = _interopRequireDefault(_Post);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/pichaichin/Sites/with-i18next/pages/index.js?entry';


// get language from query parameter or url path
var lang = 'en';

var Homepage = function (_Component) {
  (0, _inherits3.default)(Homepage, _Component);

  (0, _createClass3.default)(Homepage, null, [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var translations;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _translationHelpers.getTranslation)(lang, ['common', 'namespace1']);

              case 2:
                translations = _context.sent;
                return _context.abrupt('return', { translations: translations });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  function Homepage(props) {
    (0, _classCallCheck3.default)(this, Homepage);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Homepage.__proto__ || (0, _getPrototypeOf2.default)(Homepage)).call(this, props));

    _this.i18n = (0, _startI18n2.default)(props.translations, lang);
    return _this;
  }

  (0, _createClass3.default)(Homepage, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var newlang = (0, _translationHelpers.getTranslation)('th', ['common', 'namespace1']);

      console.log(newlang);
    }
  }, {
    key: 'render',
    value: function render(props) {
      return _react2.default.createElement(_reactI18next.I18nextProvider, { i18n: this.i18n, __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, this.i18n.t('hello')), _react2.default.createElement(_Title2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_Post2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      })));
    }
  }]);

  return Homepage;
}(_react.Component);

exports.default = Homepage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiSTE4bmV4dFByb3ZpZGVyIiwic3RhcnRJMThuIiwiZ2V0VHJhbnNsYXRpb24iLCJUaXRsZSIsIlBvc3QiLCJsYW5nIiwiSG9tZXBhZ2UiLCJ0cmFuc2xhdGlvbnMiLCJwcm9wcyIsImkxOG4iLCJuZXdsYW5nIiwiY29uc29sZSIsImxvZyIsInQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUzs7QUFDVCxBQUFPLEFBQWU7Ozs7QUFDdEIsQUFBUyxBQUFzQjs7QUFDL0IsQUFBTyxBQUFXOzs7O0FBQ2xCLEFBQU8sQUFBVTs7Ozs7Ozs7O0FBRWpCO0FBQ0EsSUFBTSxPQUFOLEFBQWE7O0lBRVEsQTs7Ozs7Ozs7Ozs7Ozt1QkFFVSx3Q0FBQSxBQUN6QixNQUNBLENBQUEsQUFBQyxVLEFBRndCLEFBRXpCLEFBQVc7O21CQUZQO0E7aURBS0MsRUFBRSxjQUFGLEE7Ozs7Ozs7Ozs7Ozs7OztBQUdUOzs7b0JBQUEsQUFBYSxPQUFPO3dDQUFBOzswSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSyxPQUFPLHlCQUFVLE1BQVYsQUFBZ0IsY0FIVixBQUdsQixBQUFZLEFBQThCO1dBQzNDOzs7Ozt3Q0FFa0IsQUFDakI7VUFBTSxVQUFVLHdDQUFBLEFBQ2QsTUFDQSxDQUFBLEFBQUMsVUFGSCxBQUFnQixBQUVkLEFBQVcsQUFHYjs7Y0FBQSxBQUFRLElBQVIsQUFBWSxBQUNiOzs7OzJCQUVPLEEsT0FBTyxBQUNiOzZCQUNFLEFBQUMsK0NBQWdCLE1BQU0sS0FBdkIsQUFBNEI7b0JBQTVCO3NCQUFBLEFBQ0U7QUFERjtPQUFBLGtCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQUk7QUFBSjtBQUFBLGNBQUksQUFBSyxLQUFMLEFBQVUsRUFEaEIsQUFDRSxBQUFJLEFBQVksQUFDaEIsMkJBQUEsQUFBQzs7b0JBQUQ7c0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSwwQkFDQSxBQUFDOztvQkFBRDtzQkFMTixBQUNFLEFBQ0UsQUFHRSxBQUlQO0FBSk87QUFBQTs7Ozs7QUEvQjRCLEE7O2tCQUFqQixBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waWNoYWljaGluL1NpdGVzL3dpdGgtaTE4bmV4dCJ9