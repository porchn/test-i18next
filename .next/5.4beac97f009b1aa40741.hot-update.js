webpackHotUpdate(5,{

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(44);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _regenerator = __webpack_require__(87);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(88);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(45);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inherits2 = __webpack_require__(49);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _reactI18next = __webpack_require__(396);

var _startI18n = __webpack_require__(412);

var _startI18n2 = _interopRequireDefault(_startI18n);

var _translationHelpers = __webpack_require__(434);

var _Title = __webpack_require__(438);

var _Title2 = _interopRequireDefault(_Title);

var _Post = __webpack_require__(439);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/pichaichin/Sites/with-i18next/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/pichaichin/Sites/with-i18next/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS40YmVhYzk3ZjAwOWIxYWE0MDc0MS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/MjZjMTAyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBJMThuZXh0UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1pMThuZXh0J1xuaW1wb3J0IHN0YXJ0STE4biBmcm9tICcuLi90b29scy9zdGFydEkxOG4nXG5pbXBvcnQgeyBnZXRUcmFuc2xhdGlvbiB9IGZyb20gJy4uL3Rvb2xzL3RyYW5zbGF0aW9uSGVscGVycydcbmltcG9ydCBUaXRsZSBmcm9tICcuLi9jb21wb25lbnRzL1RpdGxlJ1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3N0J1xuXG4vLyBnZXQgbGFuZ3VhZ2UgZnJvbSBxdWVyeSBwYXJhbWV0ZXIgb3IgdXJsIHBhdGhcbmNvbnN0IGxhbmcgPSAnZW4nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVwYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyAoKSB7XG4gICAgY29uc3QgdHJhbnNsYXRpb25zID0gYXdhaXQgZ2V0VHJhbnNsYXRpb24oXG4gICAgICBsYW5nLFxuICAgICAgWydjb21tb24nLCAnbmFtZXNwYWNlMSddXG4gICAgKVxuXG4gICAgcmV0dXJuIHsgdHJhbnNsYXRpb25zIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yIChwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5pMThuID0gc3RhcnRJMThuKHByb3BzLnRyYW5zbGF0aW9ucywgbGFuZylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCl7XG4gICAgY29uc3QgbmV3bGFuZyA9IGdldFRyYW5zbGF0aW9uKFxuICAgICAgJ3RoJyxcbiAgICAgIFsnY29tbW9uJywgJ25hbWVzcGFjZTEnXVxuICAgIClcblxuICAgIGNvbnNvbGUubG9nKG5ld2xhbmcpXG4gIH1cblxuICByZW5kZXIgKHByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxJMThuZXh0UHJvdmlkZXIgaTE4bj17dGhpcy5pMThufT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD57dGhpcy5pMThuLnQoJ2hlbGxvJyl9PC9wPlxuICAgICAgICAgIDxUaXRsZSAvPlxuICAgICAgICAgIDxQb3N0IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9JMThuZXh0UHJvdmlkZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBR0E7QUFDQTtBQURBOztBQUtBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBRUE7OztBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBSUE7QUFKQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9