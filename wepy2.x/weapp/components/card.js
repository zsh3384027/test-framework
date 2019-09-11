"use strict";

var _core = _interopRequireDefault(require('../vendor.js')(0));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_core["default"].component({
  props: {
    item: {
      type: Object,
      "default": {}
    },
    key: {
      type: Number,
      "default": 0
    }
  },
  methods: {
    trigger: function trigger(key) {
      this.$emit('trigger', key);
    }
  }
}, {info: {"components":{},"on":{}}, handlers: {'11-0': {"tap": function proxy () {
    
    var _vm=this;
      return (function () {
        _vm.trigger(_vm.key)
      })();
    
  }}}, models: {} });