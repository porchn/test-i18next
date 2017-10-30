'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTranslation = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _defineProperty2 = require('babel-runtime/helpers/defineProperty');

var _defineProperty3 = _interopRequireDefault(_defineProperty2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

require('isomorphic-fetch');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Fetch translation file(s).
 * @function getTranslation
 * @param {string} lang - Language to fetch.
 * @param {array} files - Translation files to fetch.
 * @param {string} baseUrl - Locale location.
 * @return {object} Fetched translation files.
 */
var getTranslation = exports.getTranslation = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
    var lang = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
    var files = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['common'];
    var baseUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'http://localhost:3000/static/locales/';

    var translation, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, file, response;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            translation = {};
            _iteratorNormalCompletion = true;
            _didIteratorError = false;
            _iteratorError = undefined;
            _context.prev = 4;
            _iterator = (0, _getIterator3.default)(files);

          case 6:
            if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
              _context.next = 17;
              break;
            }

            file = _step.value;
            _context.next = 10;
            return fetch('' + baseUrl + lang + '/' + file + '.json');

          case 10:
            response = _context.sent;
            _context.next = 13;
            return response.json();

          case 13:
            translation[file] = _context.sent;

          case 14:
            _iteratorNormalCompletion = true;
            _context.next = 6;
            break;

          case 17:
            _context.next = 23;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context['catch'](4);
            _didIteratorError = true;
            _iteratorError = _context.t0;

          case 23:
            _context.prev = 23;
            _context.prev = 24;

            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }

          case 26:
            _context.prev = 26;

            if (!_didIteratorError) {
              _context.next = 29;
              break;
            }

            throw _iteratorError;

          case 29:
            return _context.finish(26);

          case 30:
            return _context.finish(23);

          case 31:
            return _context.abrupt('return', (0, _defineProperty3.default)({}, lang, translation));

          case 32:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[4, 19, 23, 31], [24,, 26, 30]]);
  }));

  return function getTranslation() {
    return _ref.apply(this, arguments);
  };
}();
/* global fetch */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzL3RyYW5zbGF0aW9uSGVscGVycy5qcyJdLCJuYW1lcyI6WyJsYW5nIiwiZmlsZXMiLCJiYXNlVXJsIiwidHJhbnNsYXRpb24iLCJmaWxlIiwiZmV0Y2giLCJyZXNwb25zZSIsImpzb24iLCJnZXRUcmFuc2xhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUVBLEFBUUE7Ozs7Ozs7OzBEQUFBO3NGQUFPLG1CQUFBO1FBQUEsQUFBK0IsMkVBQS9CLEFBQW9DO1FBQXBDLEFBQTBDLDRFQUFNLENBQWhELEFBQWdELEFBQUM7UUFBakQsQUFBNEQsOEVBQTVELEFBQW9FOzsyR0FBcEU7O2tFQUFBO2dCQUFBO3lDQUFBO2VBQ0Q7QUFEQywwQkFBQSxBQUNhO3dDQURiO2dDQUFBOzZCQUFBOzRCQUFBO21EQUFBLEFBR1k7O2VBSFo7NkVBQUE7OEJBQUE7QUFBQTtBQUdJOztBQUhKLHlCQUFBOzRCQUFBO21CQUlvQixXQUFBLEFBQVMsVUFBVCxBQUFtQixhQUFuQixBQUEyQixPQUovQzs7ZUFJRztBQUpILGdDQUFBOzRCQUFBO21CQUt1QixTQUx2QixBQUt1QixBQUFTOztlQUFuQzt3QkFMRyxBQUtILEFBQVksaUJBTFQ7O2VBQUE7d0NBQUE7NEJBQUE7QUFBQTs7ZUFBQTs0QkFBQTtBQUFBOztlQUFBOzRCQUFBOzRDQUFBO2dDQUFBO3NDQUFBOztlQUFBOzRCQUFBOzRCQUFBOztnRUFBQTt3QkFBQTtBQUFBOztlQUFBOzRCQUFBOztvQ0FBQTs4QkFBQTtBQUFBO0FBQUE7O2tCQUFBOztlQUFBO21DQUFBOztlQUFBO21DQUFBOztlQUFBOytFQUFBLEFBUUssTUFSTCxBQVFZOztlQVJaO2VBQUE7NEJBQUE7O0FBQUE7a0RBQUE7QUFBUDs7a0JBQUEsQUFBc0IsaUJBQXRCOzRCQUFBO0FBQUE7O0FBWEEiLCJmaWxlIjoidHJhbnNsYXRpb25IZWxwZXJzLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waWNoYWljaGluL1NpdGVzL3dpdGgtaTE4bmV4dCJ9