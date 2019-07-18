"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * User Timing polyfill (http://www.w3.org/TR/user-timing/)
 * @author RubaXa <trash@rubaxa.org>
 */
var startOffset = Date.now ? Date.now() : +new Date();
var performance = {};
var _entries = [];
var _marksIndex = {};

function _filterEntries(key, value, filterEntries) {
  filterEntries = filterEntries || _entries;
  var i = 0;
  var n = filterEntries.length;
  var result = [];

  for (; i < n; i++) {
    if (filterEntries[i][key] === value) {
      result.push(filterEntries[i]);
    }
  }

  return result;
}

function _clearEntries(type, name) {
  var i = _entries.length;
  var entry;

  while (i--) {
    entry = _entries[i];

    if (entry.entryType === type && (name === void 0 || entry.name === name)) {
      _entries.splice(i, 1);
    }
  }
}

performance.now = function () {
  return (Date.now ? Date.now() : +new Date()) - startOffset;
};

performance.mark = function (name) {
  var mark = {
    name: name,
    entryType: 'mark',
    startTime: performance.now(),
    duration: 0
  };

  _entries.push(mark);

  _marksIndex[name] = mark;
};

performance.measure = function (name, startMark, endMark) {
  var startTime;
  var endTime;

  if (endMark !== undefined && _marksIndex[endMark] === undefined) {
    throw new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + endMark + "' does not exist.");
  }

  if (startMark !== undefined && _marksIndex[startMark] === undefined) {
    throw new SyntaxError("Failed to execute 'measure' on 'Performance': The mark '" + startMark + "' does not exist.");
  }

  if (_marksIndex[startMark]) {
    startTime = _marksIndex[startMark].startTime;
  } else {
    startTime = 0;
  }

  if (_marksIndex[endMark]) {
    endTime = _marksIndex[endMark].startTime;
  } else {
    endTime = performance.now();
  }

  _entries.push({
    name: name,
    entryType: 'measure',
    startTime: startTime,
    duration: endTime - startTime
  });
};

performance.getEntriesByType = function (type) {
  return _filterEntries('entryType', type);
};

performance.getEntriesByName = function (name, type) {
  if (type) {
    return _filterEntries('entryType', type, _filterEntries('name', name));
  }

  return _filterEntries('name', name);
};

performance.clearMarks = function (name) {
  _clearEntries('mark', name);
};

performance.clearMeasures = function (name) {
  _clearEntries('measure', name);
};

var _default = performance;
exports["default"] = _default;