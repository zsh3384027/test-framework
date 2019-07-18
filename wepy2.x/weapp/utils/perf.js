"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PerfComponent = exports.PerfPage = void 0;

var _performancePolyfill = _interopRequireDefault(require('performance.polyfill.js'));

var _config = require('config.js');

var _interface = require('interface.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function isFn(fn) {
  return typeof fn === 'function';
}

function avg(arr) {
  return (arr.reduce(function (acc, val) {
    return acc + val;
  }, 0) / arr.length).toFixed(2);
}

var Perf =
/*#__PURE__*/
function () {
  function Perf(name) {
    var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    var auto = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, Perf);

    this.max = max;
    this.auto = auto;
    this.name = name;
    this.count = 0;
  }

  _createClass(Perf, [{
    key: "mark",
    value: function mark(name, vm, autoArgs) {
      if (vm) {
        this.$vm = vm;
        this.autoArgs = autoArgs;
      }

      if (this.ended) {
        return;
      }

      if (this.auto) {
        (0, _interface.showToast)({
          title: '自动测试中,请稍候...',
          duration: 999999,
          icon: 'none',
          mask: true
        });
      }

      this.count++;

      _performancePolyfill["default"].mark(this.name);
    }
  }, {
    key: "measure",
    value: function measure(endName) {
      if (this.ended) {
        return;
      }

      var endMarkName = this.name + '.' + endName;

      _performancePolyfill["default"].mark(endMarkName);

      _performancePolyfill["default"].measure(endMarkName, this.name, endMarkName);
    }
  }, {
    key: "getEntriesByName",
    value: function getEntriesByName(name, type) {
      return _performancePolyfill["default"].getEntriesByName(name, type);
    }
  }, {
    key: "clearMarks",
    value: function clearMarks() {
      return _performancePolyfill["default"].clearMarks();
    }
  }, {
    key: "clearMeasures",
    value: function clearMeasures() {
      return _performancePolyfill["default"].clearMeasures();
    }
  }, {
    key: "isEnd",
    value: function isEnd() {
      return this.count >= this.max;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.count = 0;
      this.ended = false;
      this.$vm = null;
      this.autoArgs = null;
      this.clearMarks();
      this.clearMeasures();
    }
  }]);

  return Perf;
}();

function getStat(perf, type) {
  var before = perf.getEntriesByName(type + '.setData.before', 'measure').map(function (entry) {
    return entry.duration;
  });
  var end = perf.getEntriesByName(type + '.setData.end', 'measure').map(function (entry) {
    return entry.duration;
  });
  var len = before.length;
  console.group('测试详情:');

  for (var i = 0; i < len; i++) {
    console.log("\u7B2C".concat(i + 1, "\u6B21,\u8D4B\u503C\u8017\u65F6:").concat(before[i], ",\u6E32\u67D3\u8017\u65F6:").concat(end[i]));
  }

  console.groupEnd();
  perf.clearMarks();
  perf.clearMeasures();
  return {
    before: avg(before),
    end: avg(end)
  };
}

function wrapperSetData(namespace, shouldMeasureFn, contentFn, getAutoFn, oldSetData) {
  oldSetData = oldSetData || this.setData;

  this.setData = function setData(data, callback) {
    // console.log('....before', data)
    if (Object.keys(data).length === 0) return; // 忽略空数据

    if (!shouldMeasureFn.call(this, data, this.$perf.autoArgs) || this.$perf.ended) {
      return oldSetData.call(this, data, callback);
    } // console.log('....after', data)


    this.$perf.measure('setData.before');
    oldSetData.call(this, data, function () {
      var _this = this;

      this.$perf.measure('setData.end');

      if (this.$perf.isEnd()) {
        this.$perf.ended = true;
        var stat = getStat(this.$perf, namespace);
        var content = contentFn(stat);
        (0, _interface.hideToast)();
        (0, _interface.showModal)({
          title: '提示',
          content: content,
          showCancel: false,
          success: function success(res) {}
        });
        console.log(content);

        if (_config.PERF_USING_COMPONENTS === false && namespace === 'page') {
          initComponentPerf.call(this, oldSetData);
        }

        return;
      }

      if (this.$perf.auto) {
        var autoFn = getAutoFn.call(this);
        clearTimeout(this.$perf.timer);
        this.$perf.timer = setTimeout(function () {
          autoFn.call(_this, _this.$perf.autoArgs);
        }, 1000);
      }

      callback && callback();
    });
  };
}

function initPagePerf() {
  var $perf = this.$perf = new Perf('page', _config.PERF_MAX, _config.PERF_AUTO);
  wrapperSetData.call(this, 'page', _interface.shouldMeasurePage, function (stat) {
    if ($perf.autoArgs) {
      return "\u5171\u70B9\u51FB".concat(_config.PERF_LIKE_MAX, "\u6B21,\u8D4B\u503C\u5E73\u5747\u8017\u65F6:").concat(stat.before, ",\u6E32\u67D3\u5E73\u5747\u8017\u65F6:").concat(stat.end);
    }

    return "\u5171".concat(_config.PERF_MAX, "\u9875,").concat(20 * _config.PERF_MAX, "\u6761\u6570\u636E,\u8D4B\u503C\u5E73\u5747\u8017\u65F6:").concat(stat.before, ",\u6E32\u67D3\u5E73\u5747\u8017\u65F6:").concat(stat.end, ",\u70B9\u51FB\u4EFB\u610F\u70B9\u8D5E\u6309\u94AE,\u5F00\u59CB\u6309\u94AE\u70B9\u51FB\u6D4B\u8BD5!");
  }, function () {
    return function (args) {
      console.log('当前第' + (this.$perf.count + 1) + '页,共' + this.$perf.max + '页');
      return this.onReachBottom();
    };
  });
}

function initComponentPerf(oldSetData) {
  this.$perf = new Perf('component', _config.PERF_LIKE_MAX, _config.PERF_AUTO);
  wrapperSetData.call(this, 'component', _interface.shouldMeasureComponent, function (stat) {
    return "\u5171\u70B9\u51FB".concat(_config.PERF_LIKE_MAX, "\u6B21,\u8D4B\u503C\u5E73\u5747\u8017\u65F6:").concat(stat.before, ",\u6E32\u67D3\u5E73\u5747\u8017\u65F6:").concat(stat.end);
  }, _interface.getComponentTriggerFn, oldSetData);
}

if (typeof Page === 'undefined') {
  Page = function Page() {};

  Component = function Component() {};
}

var oldPage = Page;

Page = function Page(options) {
  console.log(options);
  var oldOnLoad = options.onLoad;

  options.onLoad = function (args) {
    initPagePerf.call(this);
    isFn(oldOnLoad) && oldOnLoad.call(this, args);
  };

  return oldPage(options);
};

var oldComponent = Component;

Component = function Component(options) {
  var oldCreated = options.created;

  options.created = function (args) {
    if (this.is === 'pages/index') {
      initPagePerf.call(this);
    } else {
      initComponentPerf.call(this);
    }

    isFn(oldCreated) && oldCreated.call(this, args);
  };

  return oldComponent(options);
};

var PerfPage = Page;
exports.PerfPage = PerfPage;
var PerfComponent = Component;
exports.PerfComponent = PerfComponent;