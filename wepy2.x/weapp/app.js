"use strict";

var _core = _interopRequireDefault(require('vendor.js')(1));

var _eventHub = _interopRequireDefault(require('common/eventHub.js'));

var _x = _interopRequireDefault(require('vendor.js')(0));

require('utils/perf.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].use(_x["default"]);

_core["default"].app({
  hooks: {// App 级别 hook，对整个 App 生效
  },
  globalData: {
    userInfo: null
  },
  onLaunch: function onLaunch() {}
}, {a: 1});