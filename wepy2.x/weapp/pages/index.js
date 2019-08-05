"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(1));

var _api = _interopRequireDefault(require('../utils/api.js'));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

_core["default"].page({
  config: {
    navigationBarTitleText: 'test'
  },
  hooks: {},
  mixins: [],
  data: {
    listData: []
  },
  computed: {},
  methods: {
    trigger: function trigger(key) {
      this.$wx.$perf && this.$wx.$perf.mark('setData', this, [key]);
      this.listData[key].active = !this.listData[key].active;
    }
  },
  onPullDownRefresh: function onPullDownRefresh() {
    this.listData = _api["default"].getNews();
    setTimeout(function () {
      wx.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom: function onReachBottom() {
    var _this$listData;

    this.$wx.$perf && this.$wx.$perf.mark('setData');

    (_this$listData = this.listData).push.apply(_this$listData, _toConsumableArray(_api["default"].getNews()));
  },
  created: function created() {
    this.$wx.$perf && this.$wx.$perf.mark('setData');
    this.listData = _api["default"].getNews();
  }
}, {info: {"components":{"card":{"path":"../components/card"}},"on":{"9-0":["trigger"]}}, handlers: {'9-0': {"trigger": function proxy () {
    var $event = arguments[arguments.length - 1];
    var _vm=this;
      return (function () {
        _vm.trigger($event)
      })();
    
  }}}, models: {} });