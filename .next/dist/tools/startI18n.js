'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _i18next = require('i18next');

var _i18next2 = _interopRequireDefault(_i18next);

var _i18nextBrowserLanguagedetector = require('i18next-browser-languagedetector');

var _i18nextBrowserLanguagedetector2 = _interopRequireDefault(_i18nextBrowserLanguagedetector);

var _i18nextLocalstorageCache = require('i18next-localstorage-cache');

var _i18nextLocalstorageCache2 = _interopRequireDefault(_i18nextLocalstorageCache);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Initialize a i18next instance.
 * @function startI18n
 * @param {object} files - Translation files.
 * @param {string} lang - Active language.
 */
var startI18n = function startI18n(files, lang) {
  _i18next2.default.use(_i18nextBrowserLanguagedetector2.default).use(_i18nextLocalstorageCache2.default).init({
    lng: lang, // active language http://i18next.com/translate/
    fallbackLng: 'en',
    resources: files,
    ns: ['common'],
    defaultNS: 'common',
    debug: true
  });

  return _i18next2.default;
};
exports.default = startI18n;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvb2xzL3N0YXJ0STE4bi5qcyJdLCJuYW1lcyI6WyJpMThuIiwiTGFuZ3VhZ2VEZXRlY3RvciIsIkNhY2hlIiwic3RhcnRJMThuIiwiZmlsZXMiLCJsYW5nIiwidXNlIiwiaW5pdCIsImxuZyIsImZhbGxiYWNrTG5nIiwicmVzb3VyY2VzIiwibnMiLCJkZWZhdWx0TlMiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7Ozs7QUFDUDs7Ozs7O0FBTUEsSUFBTSxZQUFZLFNBQVosQUFBWSxVQUFBLEFBQUMsT0FBRCxBQUFRLE1BQVMsQUFDakM7b0JBQUEsQUFDRyxBQUFJLDhDQURQLEFBRUcsQUFBSSx3Q0FGUCxBQUdHO1NBQUssQUFDRCxNQUFNLEFBQ1g7aUJBRk0sQUFFTyxBQUNiO2VBSE0sQUFHSyxBQUNYO1FBQUksQ0FKRSxBQUlGLEFBQUMsQUFDTDtlQUxNLEFBS0ssQUFDWDtXQVRGLEFBR1EsQUFNQyxBQUdUO0FBVFEsQUFDTjs7QUFRRixBQUFPLEFBQ1I7QUFkRCxBQWVBO2tCQUFBLEFBQWUiLCJmaWxlIjoic3RhcnRJMThuLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9waWNoYWljaGluL1NpdGVzL3dpdGgtaTE4bmV4dCJ9