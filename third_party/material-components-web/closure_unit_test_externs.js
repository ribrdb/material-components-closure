/**
 * @fileoverview
 * @externs for unit tests.
 */

/**
 * @param {Array<string>} strings
 * @param {*=} keys
 * @return {HTMLElement}
 */
function bel(strings, keys) {};

const td = {
  reset() {},
  /**
   * @template T
   * @param {T} f
   * @return {T}
   */
  constructor(f) {},
  /**
   * @template T
   * @param {T} o
   * @return {T}
   */
  object(o) {},
  /**
   * @param {string=} name
   * @return {!Function}
   */
  func(name) {},
  /**
   * @param {string=} name
   * @return {!Function}
   */
  function(name) {},
  /** @param {...*} args */
  callback(args) {},
  /**
   * @param {*|undefined} a 
   * @param {{times:(number|undefined),ignoreExtraArgs:(boolean|undefined)}=} opts
   */
  verify(a, opts) {},
  /**
   * @param {...*} args
   * @return {!td.Stubber}
   */
  when(args) {},
};
/** @interface */
td.Stubber = class {
  /**
   * @param {...*} args
   */
  thenReturn(args) {}
  thenDo(/** Function */ f) {}
  thenThrow(/** Error */ e) {}
  /** @param {...*} args */
  thenResolve(args) {}
  thenReject(/** Error */ e) {}
  /**
   * @param {...*} args
   */
  thenCallback(args) {}
};
td.matchers = {
  /** @return {*} */
  anything() {},
  /** @return {*} */
  isA(/** Function */ type) {},
  /**
   * @param {string|Array<*>|Object} a
   * @return {*}
   */
  contains(a) {},
  /** @return {*} */
  argThat(/** Function */ matcher) {},
  /**
   * @param {*} v
   * @return {*}
   */
  not(v) {},
};

const chai = {
  /**
   * @param {*} expr
   * @param {string=} message
   */
  assert(expr, message) {},
};
/**
 * @template T
 * @param {T} actual
 * @param {T} expected
 * @param {string=} message
 */
chai.assert.equal = function(actual, expected, message) {};
/**
 * @template T
 * @param {T} actual
 * @param {T} expected
 * @param {string=} message
 */
chai.assert.deepEqual = function(actual, expected, message) {};
/**
 * @param {*} expr
 * @param {string=} message
 */
chai.assert.isOk = function(expr, message) {};
/**
 * @param {*} expr
 * @param {string=} message
 */
chai.assert.isNotOk = function(expr, message) {};
/**
 * @param {*} expr
 * @param {string=} message
 */
chai.assert.isTrue = function(expr, message) {};
/**
 * @param {*} expr
 * @param {string=} message
 */
chai.assert.isFalse = function(expr, message) {};
/**
 * @param {*} expr
 * @param {string=} message
 */
chai.assert.isArray = function(expr, message) {};
/**
 * @param {*} expr
 * @param {string=} message
 */
chai.assert.isNull = function(expr, message) {};
/**
 * @param {*} value
 * @param {Function} constructor
 * @param {string=} message
 */
chai.assert.instanceOf = function(value, constructor, message) {};
/**
 * @param {string|Array} haystack
 * @param {*} needle
 * @param {string=} message
 */
chai.assert.include = function(haystack, needle, message) {};
/**
 * @param {string|Array} haystack
 * @param {*} needle
 * @param {string=} message
 */
chai.assert.notInclude = function(haystack, needle, message) {};
/**
 * @param {Object} object
 * @param {string} property
 * @param {string=} message
 */
chai.assert.property = function(object, property, message) {};
/**
 * @param {Function} fn
 * @param {...*} args
 */
chai.assert.throws = function(fn, args) {};
/**
 * @param {Function} fn
 * @param {...*} args
 */
chai.assert.doesNotThrow = function(fn, args) {};

const lolex = {};
/** @interface */
lolex.Clock = class {
  /** @param {number|string} time */
  tick(time) {}
  uninstall() {}
};
/** @return {lolex.Clock} */
lolex.install = function() {};


// Mocha
function suite(/** string */ n) {};
function before(/** Function */ fn) {};
function beforeEach(/** Function */ fn) {};
function after(/** Function */ fn) {};
function afterEach(/** Function */ fn) {};
function test(/** string */ n, /** Function */ fn) {}
