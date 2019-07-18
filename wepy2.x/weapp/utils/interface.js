"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shouldMeasurePage = shouldMeasurePage;
exports.shouldMeasureComponent = shouldMeasureComponent;
exports.getComponentTriggerFn = getComponentTriggerFn;
exports.showToast = showToast;
exports.hideToast = hideToast;
exports.showModal = showModal;

/**
 * 是否开始测算页面性能
 */
function shouldMeasurePage(data, autoArgs) {
  return data.listData && data.listData.length >= 20;
}
/**
 * 是否开始测试组件性能
 */


function shouldMeasureComponent(data) {
  return this.$perf.count > 0;
}
/**
 * 获取组件 trigger 方法
 */


function getComponentTriggerFn() {
  return function componentTrigger(args) {
    return this.$perf.$vm.methods.trigger.call(this.$perf.$vm, args);
  };
}
/**
 * 显示 toast
 */


function showToast(args) {
  return wx.showToast(args);
}
/**
 * 隐藏 toast
 */


function hideToast() {
  return wx.hideToast();
}
/**
 * 显示 modal
 */


function showModal(args) {
  return wx.showModal(args);
}