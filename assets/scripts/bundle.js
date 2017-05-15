(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (process,global){
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});



var _global$2 = Object.freeze({
	default: _global,
	__moduleExports: _global
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};



var _has$2 = Object.freeze({
	default: _has,
	__moduleExports: _has
});

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};



var _fails$2 = Object.freeze({
	default: _fails,
	__moduleExports: _fails
});

var require$$1 = ( _fails$2 && _fails ) || _fails$2;

var _descriptors = !require$$1(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});



var _descriptors$2 = Object.freeze({
	default: _descriptors,
	__moduleExports: _descriptors
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;


var _core$2 = Object.freeze({
	default: _core,
	__moduleExports: _core,
	version: _core_1
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};



var _isObject$2 = Object.freeze({
	default: _isObject,
	__moduleExports: _isObject
});

var require$$7 = ( _isObject$2 && _isObject ) || _isObject$2;

var isObject = require$$7;
var _anObject = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};



var _anObject$2 = Object.freeze({
	default: _anObject,
	__moduleExports: _anObject
});

var require$$2 = ( _global$2 && _global ) || _global$2;

var isObject$1 = require$$7;
var document$1 = require$$2.document;
var is = isObject$1(document$1) && isObject$1(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};



var _domCreate$2 = Object.freeze({
	default: _domCreate,
	__moduleExports: _domCreate
});

var require$$5 = ( _descriptors$2 && _descriptors ) || _descriptors$2;

var require$$3 = ( _domCreate$2 && _domCreate ) || _domCreate$2;

var _ie8DomDefine = !require$$5 && !require$$1(function(){
  return Object.defineProperty(require$$3('div'), 'a', {get: function(){ return 7; }}).a != 7;
});



var _ie8DomDefine$2 = Object.freeze({
	default: _ie8DomDefine,
	__moduleExports: _ie8DomDefine
});

var isObject$2 = require$$7;
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!isObject$2(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject$2(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject$2(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};



var _toPrimitive$2 = Object.freeze({
	default: _toPrimitive,
	__moduleExports: _toPrimitive
});

var require$$6 = ( _anObject$2 && _anObject ) || _anObject$2;

var require$$5$1 = ( _ie8DomDefine$2 && _ie8DomDefine ) || _ie8DomDefine$2;

var require$$2$1 = ( _toPrimitive$2 && _toPrimitive ) || _toPrimitive$2;

var anObject$1       = require$$6;
var IE8_DOM_DEFINE = require$$5$1;
var toPrimitive$1    = require$$2$1;
var dP$2             = Object.defineProperty;

var f$1 = require$$5 ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject$1(O);
  P = toPrimitive$1(P, true);
  anObject$1(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP$2(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f$1
};



var _objectDp$2 = Object.freeze({
	default: _objectDp,
	__moduleExports: _objectDp,
	f: f$1
});

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};



var _propertyDesc$2 = Object.freeze({
	default: _propertyDesc,
	__moduleExports: _propertyDesc
});

var require$$3$1 = ( _objectDp$2 && _objectDp ) || _objectDp$2;

var require$$5$2 = ( _propertyDesc$2 && _propertyDesc ) || _propertyDesc$2;

var dP$1         = require$$3$1;
var createDesc$1 = require$$5$2;
var _hide = require$$5 ? function(object, key, value){
  return dP$1.f(object, key, createDesc$1(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};



var _hide$2 = Object.freeze({
	default: _hide,
	__moduleExports: _hide
});

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};



var _uid$2 = Object.freeze({
	default: _uid,
	__moduleExports: _uid
});

var require$$3$2 = ( _hide$2 && _hide ) || _hide$2;

var require$$3$3 = ( _has$2 && _has ) || _has$2;

var require$$26 = ( _uid$2 && _uid ) || _uid$2;

var require$$1$1 = ( _core$2 && _core ) || _core$2;

var _redefine = createCommonjsModule(function (module) {
var global    = require$$2
  , hide      = require$$3$2
  , has       = require$$3$3
  , SRC       = require$$26('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require$$1$1.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});



var _redefine$2 = Object.freeze({
	default: _redefine,
	__moduleExports: _redefine
});

var _aFunction = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};



var _aFunction$2 = Object.freeze({
	default: _aFunction,
	__moduleExports: _aFunction
});

var require$$2$2 = ( _aFunction$2 && _aFunction ) || _aFunction$2;

var aFunction = require$$2$2;
var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};



var _ctx$2 = Object.freeze({
	default: _ctx,
	__moduleExports: _ctx
});

var require$$1$2 = ( _redefine$2 && _redefine ) || _redefine$2;

var require$$7$1 = ( _ctx$2 && _ctx ) || _ctx$2;

var global$2    = require$$2;
var core      = require$$1$1;
var hide      = require$$3$2;
var redefine$1  = require$$1$2;
var ctx       = require$$7$1;
var PROTOTYPE$1 = 'prototype';

var $export$1 = function(type, name, source){
  var IS_FORCED = type & $export$1.F
    , IS_GLOBAL = type & $export$1.G
    , IS_STATIC = type & $export$1.S
    , IS_PROTO  = type & $export$1.P
    , IS_BIND   = type & $export$1.B
    , target    = IS_GLOBAL ? global$2 : IS_STATIC ? global$2[name] || (global$2[name] = {}) : (global$2[name] || {})[PROTOTYPE$1]
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global$2) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if(target)redefine$1(target, key, out, type & $export$1.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global$2.core = core;
// type bitmap
$export$1.F = 1;   // forced
$export$1.G = 2;   // global
$export$1.S = 4;   // static
$export$1.P = 8;   // proto
$export$1.B = 16;  // bind
$export$1.W = 32;  // wrap
$export$1.U = 64;  // safe
$export$1.R = 128; // real proto method for `library` 
var _export = $export$1;



var _export$2 = Object.freeze({
	default: _export,
	__moduleExports: _export
});

var _meta = createCommonjsModule(function (module) {
var META     = require$$26('meta')
  , isObject = require$$7
  , has      = require$$3$3
  , setDesc  = require$$3$1.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require$$1(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;


var _meta$2 = Object.freeze({
	default: _meta,
	__moduleExports: _meta,
	KEY: _meta_1,
	NEED: _meta_2,
	fastKey: _meta_3,
	getWeak: _meta_4,
	onFreeze: _meta_5
});

var global$3 = require$$2;
var SHARED = '__core-js_shared__';
var store  = global$3[SHARED] || (global$3[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};



var _shared$2 = Object.freeze({
	default: _shared,
	__moduleExports: _shared
});

var require$$2$3 = ( _shared$2 && _shared ) || _shared$2;

var _wks = createCommonjsModule(function (module) {
var store      = require$$2$3('wks')
  , uid        = require$$26
  , Symbol     = require$$2.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;
});



var _wks$2 = Object.freeze({
	default: _wks,
	__moduleExports: _wks
});

var require$$5$3 = ( _wks$2 && _wks ) || _wks$2;

var def = require$$3$1.f;
var has$1 = require$$3$3;
var TAG = require$$5$3('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has$1(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};



var _setToStringTag$2 = Object.freeze({
	default: _setToStringTag,
	__moduleExports: _setToStringTag
});

var f$2 = require$$5$3;

var _wksExt = {
	f: f$2
};



var _wksExt$2 = Object.freeze({
	default: _wksExt,
	__moduleExports: _wksExt,
	f: f$2
});

var _library = false;



var _library$2 = Object.freeze({
	default: _library,
	__moduleExports: _library
});

var require$$0 = ( _library$2 && _library ) || _library$2;

var require$$3$4 = ( _wksExt$2 && _wksExt ) || _wksExt$2;

var global$4         = require$$2;
var core$1           = require$$1$1;
var LIBRARY        = require$$0;
var wksExt$1         = require$$3$4;
var defineProperty = require$$3$1.f;
var _wksDefine = function(name){
  var $Symbol = core$1.Symbol || (core$1.Symbol = LIBRARY ? {} : global$4.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt$1.f(name)});
};



var _wksDefine$2 = Object.freeze({
	default: _wksDefine,
	__moduleExports: _wksDefine
});

var toString = {}.toString;

var _cof = function(it){
  return toString.call(it).slice(8, -1);
};



var _cof$2 = Object.freeze({
	default: _cof,
	__moduleExports: _cof
});

var require$$3$5 = ( _cof$2 && _cof ) || _cof$2;

var cof = require$$3$5;
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};



var _iobject$2 = Object.freeze({
	default: _iobject,
	__moduleExports: _iobject
});

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};



var _defined$2 = Object.freeze({
	default: _defined,
	__moduleExports: _defined
});

var require$$2$4 = ( _iobject$2 && _iobject ) || _iobject$2;

var require$$1$3 = ( _defined$2 && _defined ) || _defined$2;

var IObject = require$$2$4;
var defined = require$$1$3;
var _toIobject = function(it){
  return IObject(defined(it));
};



var _toIobject$2 = Object.freeze({
	default: _toIobject,
	__moduleExports: _toIobject
});

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};



var _toInteger$2 = Object.freeze({
	default: _toInteger,
	__moduleExports: _toInteger
});

var require$$12 = ( _toInteger$2 && _toInteger ) || _toInteger$2;

var toInteger = require$$12;
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};



var _toLength$2 = Object.freeze({
	default: _toLength,
	__moduleExports: _toLength
});

var toInteger$1 = require$$12;
var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = toInteger$1(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};



var _toIndex$2 = Object.freeze({
	default: _toIndex,
	__moduleExports: _toIndex
});

var require$$1$4 = ( _toIobject$2 && _toIobject ) || _toIobject$2;

var require$$2$5 = ( _toLength$2 && _toLength ) || _toLength$2;

var require$$14 = ( _toIndex$2 && _toIndex ) || _toIndex$2;

var toIObject$3 = require$$1$4;
var toLength  = require$$2$5;
var toIndex   = require$$14;
var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject$3($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};



var _arrayIncludes$2 = Object.freeze({
	default: _arrayIncludes,
	__moduleExports: _arrayIncludes
});

var shared$1 = require$$2$3('keys');
var uid$1    = require$$26;
var _sharedKey = function(key){
  return shared$1[key] || (shared$1[key] = uid$1(key));
};



var _sharedKey$2 = Object.freeze({
	default: _sharedKey,
	__moduleExports: _sharedKey
});

var require$$1$5 = ( _arrayIncludes$2 && _arrayIncludes ) || _arrayIncludes$2;

var require$$2$6 = ( _sharedKey$2 && _sharedKey ) || _sharedKey$2;

var has$2          = require$$3$3;
var toIObject$2    = require$$1$4;
var arrayIndexOf = require$$1$5(false);
var IE_PROTO     = require$$2$6('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject$2(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has$2(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has$2(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};



var _objectKeysInternal$2 = Object.freeze({
	default: _objectKeysInternal,
	__moduleExports: _objectKeysInternal
});

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');



var _enumBugKeys$2 = Object.freeze({
	default: _enumBugKeys,
	__moduleExports: _enumBugKeys
});

var require$$0$1 = ( _objectKeysInternal$2 && _objectKeysInternal ) || _objectKeysInternal$2;

var require$$1$6 = ( _enumBugKeys$2 && _enumBugKeys ) || _enumBugKeys$2;

var $keys$1       = require$$0$1;
var enumBugKeys = require$$1$6;

var _objectKeys = Object.keys || function keys(O){
  return $keys$1(O, enumBugKeys);
};



var _objectKeys$2 = Object.freeze({
	default: _objectKeys,
	__moduleExports: _objectKeys
});

var require$$0$2 = ( _objectKeys$2 && _objectKeys ) || _objectKeys$2;

var getKeys   = require$$0$2;
var toIObject$1 = require$$1$4;
var _keyof = function(object, el){
  var O      = toIObject$1(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};



var _keyof$2 = Object.freeze({
	default: _keyof,
	__moduleExports: _keyof
});

var f$3 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$3
};



var _objectGops$2 = Object.freeze({
	default: _objectGops,
	__moduleExports: _objectGops,
	f: f$3
});

var f$4 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$4
};



var _objectPie$2 = Object.freeze({
	default: _objectPie,
	__moduleExports: _objectPie,
	f: f$4
});

var require$$1$7 = ( _objectGops$2 && _objectGops ) || _objectGops$2;

var require$$2$7 = ( _objectPie$2 && _objectPie ) || _objectPie$2;

var getKeys$1 = require$$0$2;
var gOPS    = require$$1$7;
var pIE     = require$$2$7;
var _enumKeys = function(it){
  var result     = getKeys$1(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};



var _enumKeys$2 = Object.freeze({
	default: _enumKeys,
	__moduleExports: _enumKeys
});

var cof$1 = require$$3$5;
var _isArray = Array.isArray || function isArray(arg){
  return cof$1(arg) == 'Array';
};



var _isArray$2 = Object.freeze({
	default: _isArray,
	__moduleExports: _isArray
});

var dP$3       = require$$3$1;
var anObject$3 = require$$6;
var getKeys$2  = require$$0$2;

var _objectDps = require$$5 ? Object.defineProperties : function defineProperties(O, Properties){
  anObject$3(O);
  var keys   = getKeys$2(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP$3.f(O, P = keys[i++], Properties[P]);
  return O;
};



var _objectDps$2 = Object.freeze({
	default: _objectDps,
	__moduleExports: _objectDps
});

var _html = require$$2.document && document.documentElement;



var _html$2 = Object.freeze({
	default: _html,
	__moduleExports: _html
});

var require$$2$8 = ( _objectDps$2 && _objectDps ) || _objectDps$2;

var require$$2$9 = ( _html$2 && _html ) || _html$2;

var anObject$2    = require$$6;
var dPs         = require$$2$8;
var enumBugKeys$1 = require$$1$6;
var IE_PROTO$1    = require$$2$6('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$2   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = require$$3('iframe')
    , i      = enumBugKeys$1.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  require$$2$9.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE$2][enumBugKeys$1[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$2] = anObject$2(O);
    result = new Empty;
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};



var _objectCreate$2 = Object.freeze({
	default: _objectCreate,
	__moduleExports: _objectCreate
});

var $keys$2      = require$$0$1;
var hiddenKeys = require$$1$6.concat('length', 'prototype');

var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys$2(O, hiddenKeys);
};

var _objectGopn = {
	f: f$6
};



var _objectGopn$2 = Object.freeze({
	default: _objectGopn,
	__moduleExports: _objectGopn,
	f: f$6
});

var require$$0$3 = ( _objectGopn$2 && _objectGopn ) || _objectGopn$2;

var toIObject$4 = require$$1$4;
var gOPN$1      = require$$0$3.f;
var toString$1  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN$1(it);
  } catch(e){
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it){
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject$4(it));
};

var _objectGopnExt = {
	f: f$5
};



var _objectGopnExt$2 = Object.freeze({
	default: _objectGopnExt,
	__moduleExports: _objectGopnExt,
	f: f$5
});

var pIE$1            = require$$2$7;
var createDesc$2     = require$$5$2;
var toIObject$5      = require$$1$4;
var toPrimitive$2    = require$$2$1;
var has$3            = require$$3$3;
var IE8_DOM_DEFINE$1 = require$$5$1;
var gOPD$1           = Object.getOwnPropertyDescriptor;

var f$7 = require$$5 ? gOPD$1 : function getOwnPropertyDescriptor(O, P){
  O = toIObject$5(O);
  P = toPrimitive$2(P, true);
  if(IE8_DOM_DEFINE$1)try {
    return gOPD$1(O, P);
  } catch(e){ /* empty */ }
  if(has$3(O, P))return createDesc$2(!pIE$1.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$7
};



var _objectGopd$2 = Object.freeze({
	default: _objectGopd,
	__moduleExports: _objectGopd,
	f: f$7
});

var require$$0$4 = ( _export$2 && _export ) || _export$2;

var require$$1$8 = ( _meta$2 && _meta ) || _meta$2;

var require$$13 = ( _setToStringTag$2 && _setToStringTag ) || _setToStringTag$2;

var require$$0$5 = ( _wksDefine$2 && _wksDefine ) || _wksDefine$2;

var require$$13$1 = ( _keyof$2 && _keyof ) || _keyof$2;

var require$$14$1 = ( _enumKeys$2 && _enumKeys ) || _enumKeys$2;

var require$$1$9 = ( _isArray$2 && _isArray ) || _isArray$2;

var require$$1$10 = ( _objectCreate$2 && _objectCreate ) || _objectCreate$2;

var require$$1$11 = ( _objectGopnExt$2 && _objectGopnExt ) || _objectGopnExt$2;

var require$$4 = ( _objectGopd$2 && _objectGopd ) || _objectGopd$2;

var global$1         = require$$2;
var has            = require$$3$3;
var DESCRIPTORS    = require$$5;
var $export        = require$$0$4;
var redefine       = require$$1$2;
var META           = require$$1$8.KEY;
var $fails         = require$$1;
var shared         = require$$2$3;
var setToStringTag = require$$13;
var uid            = require$$26;
var wks            = require$$5$3;
var wksExt         = require$$3$4;
var wksDefine      = require$$0$5;
var keyOf          = require$$13$1;
var enumKeys       = require$$14$1;
var isArray        = require$$1$9;
var anObject       = require$$6;
var toIObject      = require$$1$4;
var toPrimitive    = require$$2$1;
var createDesc     = require$$5$2;
var _create        = require$$1$10;
var gOPNExt        = require$$1$11;
var $GOPD          = require$$4;
var $DP            = require$$3$1;
var $keys          = require$$0$2;
var gOPD           = $GOPD.f;
var dP             = $DP.f;
var gOPN           = gOPNExt.f;
var $Symbol        = global$1.Symbol;
var $JSON          = global$1.JSON;
var _stringify     = $JSON && $JSON.stringify;
var PROTOTYPE      = 'prototype';
var HIDDEN         = wks('_hidden');
var TO_PRIMITIVE   = wks('toPrimitive');
var isEnum         = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols     = shared('symbols');
var OPSymbols      = shared('op-symbols');
var ObjectProto    = Object[PROTOTYPE];
var USE_NATIVE     = typeof $Symbol == 'function';
var QObject        = global$1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  require$$0$3.f = gOPNExt.f = $getOwnPropertyNames;
  require$$2$7.f  = $propertyIsEnumerable;
  require$$1$7.f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !require$$0){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || require$$3$2($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global$1.JSON, 'JSON', true);

var $export$2 = require$$0$4;
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export$2($export$2.S, 'Object', {create: require$$1$10});

var $export$3 = require$$0$4;
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export$3($export$3.S + $export$3.F * !require$$5, 'Object', {defineProperty: require$$3$1.f});

var $export$4 = require$$0$4;
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export$4($export$4.S + $export$4.F * !require$$5, 'Object', {defineProperties: require$$2$8});

var $export$5 = require$$0$4;
var core$2    = require$$1$1;
var fails   = require$$1;
var _objectSap = function(KEY, exec){
  var fn  = (core$2.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export$5($export$5.S + $export$5.F * fails(function(){ fn(1); }), 'Object', exp);
};



var _objectSap$2 = Object.freeze({
	default: _objectSap,
	__moduleExports: _objectSap
});

var require$$1$12 = ( _objectSap$2 && _objectSap ) || _objectSap$2;

var toIObject$6                 = require$$1$4;
var $getOwnPropertyDescriptor$1 = require$$4.f;

require$$1$12('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor$1(toIObject$6(it), key);
  };
});

var defined$1 = require$$1$3;
var _toObject = function(it){
  return Object(defined$1(it));
};



var _toObject$2 = Object.freeze({
	default: _toObject,
	__moduleExports: _toObject
});

var require$$1$13 = ( _toObject$2 && _toObject ) || _toObject$2;

var has$4         = require$$3$3;
var toObject$1    = require$$1$13;
var IE_PROTO$2    = require$$2$6('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject$1(O);
  if(has$4(O, IE_PROTO$2))return O[IE_PROTO$2];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1 : null;
};



var _objectGpo$2 = Object.freeze({
	default: _objectGpo,
	__moduleExports: _objectGpo
});

var require$$2$10 = ( _objectGpo$2 && _objectGpo ) || _objectGpo$2;

var toObject        = require$$1$13;
var $getPrototypeOf = require$$2$10;

require$$1$12('getPrototypeOf', function(){
  return function getPrototypeOf(it){
    return $getPrototypeOf(toObject(it));
  };
});

var toObject$2 = require$$1$13;
var $keys$3    = require$$0$2;

require$$1$12('keys', function(){
  return function keys(it){
    return $keys$3(toObject$2(it));
  };
});

require$$1$12('getOwnPropertyNames', function(){
  return require$$1$11.f;
});

var isObject$3 = require$$7;
var meta     = require$$1$8.onFreeze;

require$$1$12('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject$3(it) ? $freeze(meta(it)) : it;
  };
});

var isObject$4 = require$$7;
var meta$1     = require$$1$8.onFreeze;

require$$1$12('seal', function($seal){
  return function seal(it){
    return $seal && isObject$4(it) ? $seal(meta$1(it)) : it;
  };
});

var isObject$5 = require$$7;
var meta$2     = require$$1$8.onFreeze;

require$$1$12('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject$5(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

var isObject$6 = require$$7;

require$$1$12('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject$6(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

var isObject$7 = require$$7;

require$$1$12('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject$7(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

var isObject$8 = require$$7;

require$$1$12('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject$8(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

var getKeys$3  = require$$0$2;
var gOPS$1     = require$$1$7;
var pIE$2      = require$$2$7;
var toObject$3 = require$$1$13;
var IObject$1  = require$$2$4;
var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || require$$1(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject$3(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS$1.f
    , isEnum     = pIE$2.f;
  while(aLen > index){
    var S      = IObject$1(arguments[index++])
      , keys   = getSymbols ? getKeys$3(S).concat(getSymbols(S)) : getKeys$3(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;



var _objectAssign$2 = Object.freeze({
	default: _objectAssign,
	__moduleExports: _objectAssign
});

var require$$3$6 = ( _objectAssign$2 && _objectAssign ) || _objectAssign$2;

var $export$6 = require$$0$4;

$export$6($export$6.S + $export$6.F, 'Object', {assign: require$$3$6});

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};



var _sameValue$2 = Object.freeze({
	default: _sameValue,
	__moduleExports: _sameValue
});

var require$$17 = ( _sameValue$2 && _sameValue ) || _sameValue$2;

var $export$7 = require$$0$4;
$export$7($export$7.S, 'Object', {is: require$$17});

var isObject$9 = require$$7;
var anObject$4 = require$$6;
var check = function(O, proto){
  anObject$4(O);
  if(!isObject$9(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require$$7$1(Function.call, require$$4.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};



var _setProto$2 = Object.freeze({
	default: _setProto,
	__moduleExports: _setProto
});

var require$$1$14 = ( _setProto$2 && _setProto ) || _setProto$2;

var $export$8 = require$$0$4;
$export$8($export$8.S, 'Object', {setPrototypeOf: require$$1$14.set});

var cof$2 = require$$3$5;
var TAG$1 = require$$5$3('toStringTag');
var ARG = cof$2(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? cof$2(O)
    // ES3 arguments fallback
    : (B = cof$2(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};



var _classof$2 = Object.freeze({
	default: _classof,
	__moduleExports: _classof
});

var require$$0$6 = ( _classof$2 && _classof ) || _classof$2;

var classof = require$$0$6;
var test    = {};
test[require$$5$3('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  require$$1$2(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};



var _invoke$2 = Object.freeze({
	default: _invoke,
	__moduleExports: _invoke
});

var require$$1$15 = ( _invoke$2 && _invoke ) || _invoke$2;

var aFunction$1  = require$$2$2;
var isObject$10   = require$$7;
var invoke     = require$$1$15;
var arraySlice = [].slice;
var factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction$1(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject$10(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};



var _bind$2 = Object.freeze({
	default: _bind,
	__moduleExports: _bind
});

var require$$6$1 = ( _bind$2 && _bind ) || _bind$2;

var $export$9 = require$$0$4;

$export$9($export$9.P, 'Function', {bind: require$$6$1});

var dP$4         = require$$3$1.f;
var createDesc$3 = require$$5$2;
var has$5        = require$$3$3;
var FProto     = Function.prototype;
var nameRE     = /^\s*function ([^ (]*)/;
var NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || require$$5 && dP$4(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has$5(that, NAME) || !isExtensible(that) || dP$4(that, NAME, createDesc$3(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

var isObject$11       = require$$7;
var getPrototypeOf = require$$2$10;
var HAS_INSTANCE   = require$$5$3('hasInstance');
var FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))require$$3$1.f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject$11(O))return false;
  if(!isObject$11(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';



var _stringWs$2 = Object.freeze({
	default: _stringWs,
	__moduleExports: _stringWs
});

var require$$2$11 = ( _stringWs$2 && _stringWs ) || _stringWs$2;

var $export$11 = require$$0$4;
var defined$2 = require$$1$3;
var fails$1   = require$$1;
var spaces  = require$$2$11;
var space   = '[' + spaces + ']';
var non     = '\u200b\u0085';
var ltrim   = RegExp('^' + space + space + '*');
var rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = fails$1(function(){
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export$11($export$11.P + $export$11.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined$2(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;



var _stringTrim$2 = Object.freeze({
	default: _stringTrim,
	__moduleExports: _stringTrim
});

var require$$0$7 = ( _stringTrim$2 && _stringTrim ) || _stringTrim$2;

var $parseInt$1 = require$$2.parseInt;
var $trim     = require$$0$7.trim;
var ws        = require$$2$11;
var hex       = /^[\-+]?0[xX]/;

var _parseInt = $parseInt$1(ws + '08') !== 8 || $parseInt$1(ws + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt$1(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt$1;



var _parseInt$2 = Object.freeze({
	default: _parseInt,
	__moduleExports: _parseInt
});

var require$$1$16 = ( _parseInt$2 && _parseInt ) || _parseInt$2;

var $export$10   = require$$0$4;
var $parseInt = require$$1$16;
// 18.2.5 parseInt(string, radix)
$export$10($export$10.G + $export$10.F * (parseInt != $parseInt), {parseInt: $parseInt});

var $parseFloat$1 = require$$2.parseFloat;
var $trim$1       = require$$0$7.trim;

var _parseFloat = 1 / $parseFloat$1(require$$2$11 + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim$1(String(str), 3)
    , result = $parseFloat$1(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat$1;



var _parseFloat$2 = Object.freeze({
	default: _parseFloat,
	__moduleExports: _parseFloat
});

var require$$1$17 = ( _parseFloat$2 && _parseFloat ) || _parseFloat$2;

var $export$12     = require$$0$4;
var $parseFloat = require$$1$17;
// 18.2.4 parseFloat(string)
$export$12($export$12.G + $export$12.F * (parseFloat != $parseFloat), {parseFloat: $parseFloat});

var isObject$12       = require$$7;
var setPrototypeOf = require$$1$14.set;
var _inheritIfRequired = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject$12(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};



var _inheritIfRequired$2 = Object.freeze({
	default: _inheritIfRequired,
	__moduleExports: _inheritIfRequired
});

var require$$11 = ( _inheritIfRequired$2 && _inheritIfRequired ) || _inheritIfRequired$2;

var global$5            = require$$2;
var has$6               = require$$3$3;
var cof$3               = require$$3$5;
var inheritIfRequired = require$$11;
var toPrimitive$3       = require$$2$1;
var fails$2             = require$$1;
var gOPN$2              = require$$0$3.f;
var gOPD$2              = require$$4.f;
var dP$5                = require$$3$1.f;
var $trim$2             = require$$0$7.trim;
var NUMBER            = 'Number';
var $Number           = global$5[NUMBER];
var Base              = $Number;
var proto             = $Number.prototype;
var BROKEN_COF        = cof$3(require$$1$10(proto)) == NUMBER;
var TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive$3(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails$2(function(){ proto.valueOf.call(that); }) : cof$3(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = require$$5 ? gOPN$2(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has$6(Base, key = keys[j]) && !has$6($Number, key)){
      dP$5($Number, key, gOPD$2(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  require$$1$2(global$5, NUMBER, $Number);
}

var cof$4 = require$$3$5;
var _aNumberValue = function(it, msg){
  if(typeof it != 'number' && cof$4(it) != 'Number')throw TypeError(msg);
  return +it;
};



var _aNumberValue$2 = Object.freeze({
	default: _aNumberValue,
	__moduleExports: _aNumberValue
});

var toInteger$3 = require$$12;
var defined$3   = require$$1$3;

var _stringRepeat = function repeat(count){
  var str = String(defined$3(this))
    , res = ''
    , n   = toInteger$3(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};



var _stringRepeat$2 = Object.freeze({
	default: _stringRepeat,
	__moduleExports: _stringRepeat
});

var require$$2$12 = ( _aNumberValue$2 && _aNumberValue ) || _aNumberValue$2;

var require$$1$18 = ( _stringRepeat$2 && _stringRepeat ) || _stringRepeat$2;

var $export$13      = require$$0$4;
var toInteger$2    = require$$12;
var aNumberValue = require$$2$12;
var repeat       = require$$1$18;
var $toFixed     = 1..toFixed;
var floor$1        = Math.floor;
var data         = [0, 0, 0, 0, 0, 0];
var ERROR        = 'Number.toFixed: incorrect invocation!';
var ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor$1(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export$13($export$13.P + $export$13.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !require$$1(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = toInteger$2(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

var $export$14      = require$$0$4;
var $fails$1       = require$$1;
var aNumberValue$1 = require$$2$12;
var $toPrecision = 1..toPrecision;

$export$14($export$14.P + $export$14.F * ($fails$1(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails$1(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue$1(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});

var $export$15 = require$$0$4;

$export$15($export$15.S, 'Number', {EPSILON: Math.pow(2, -52)});

var $export$16   = require$$0$4;
var _isFinite = require$$2.isFinite;

$export$16($export$16.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

var isObject$13 = require$$7;
var floor$2    = Math.floor;
var _isInteger = function isInteger(it){
  return !isObject$13(it) && isFinite(it) && floor$2(it) === it;
};



var _isInteger$2 = Object.freeze({
	default: _isInteger,
	__moduleExports: _isInteger
});

var require$$1$19 = ( _isInteger$2 && _isInteger ) || _isInteger$2;

var $export$17 = require$$0$4;

$export$17($export$17.S, 'Number', {isInteger: require$$1$19});

var $export$18 = require$$0$4;

$export$18($export$18.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

var $export$19   = require$$0$4;
var isInteger = require$$1$19;
var abs       = Math.abs;

$export$19($export$19.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

var $export$20 = require$$0$4;

$export$20($export$20.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

var $export$21 = require$$0$4;

$export$21($export$21.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

var $export$22     = require$$0$4;
var $parseFloat$2 = require$$1$17;
// 20.1.2.12 Number.parseFloat(string)
$export$22($export$22.S + $export$22.F * (Number.parseFloat != $parseFloat$2), 'Number', {parseFloat: $parseFloat$2});

var $export$23   = require$$0$4;
var $parseInt$2 = require$$1$16;
// 20.1.2.13 Number.parseInt(string, radix)
$export$23($export$23.S + $export$23.F * (Number.parseInt != $parseInt$2), 'Number', {parseInt: $parseInt$2});

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};



var _mathLog1p$2 = Object.freeze({
	default: _mathLog1p,
	__moduleExports: _mathLog1p
});

var require$$1$20 = ( _mathLog1p$2 && _mathLog1p ) || _mathLog1p$2;

var $export$24 = require$$0$4;
var log1p   = require$$1$20;
var sqrt    = Math.sqrt;
var $acosh  = Math.acosh;

$export$24($export$24.S + $export$24.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

var $export$25 = require$$0$4;
var $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export$25($export$25.S + $export$25.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

var $export$26 = require$$0$4;
var $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export$26($export$26.S + $export$26.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};



var _mathSign$2 = Object.freeze({
	default: _mathSign,
	__moduleExports: _mathSign
});

var require$$1$21 = ( _mathSign$2 && _mathSign ) || _mathSign$2;

var $export$27 = require$$0$4;
var sign    = require$$1$21;

$export$27($export$27.S, 'Math', {
  cbrt: function cbrt(x){
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

var $export$28 = require$$0$4;

$export$28($export$28.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

var $export$29 = require$$0$4;
var exp     = Math.exp;

$export$29($export$29.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1$1 = Math.expm1;
var _mathExpm1 = (!$expm1$1
  // Old FF bug
  || $expm1$1(10) > 22025.465794806719 || $expm1$1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1$1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1$1;



var _mathExpm1$2 = Object.freeze({
	default: _mathExpm1,
	__moduleExports: _mathExpm1
});

var require$$1$22 = ( _mathExpm1$2 && _mathExpm1 ) || _mathExpm1$2;

var $export$30 = require$$0$4;
var $expm1  = require$$1$22;

$export$30($export$30.S + $export$30.F * ($expm1 != Math.expm1), 'Math', {expm1: $expm1});

var $export$31   = require$$0$4;
var sign$1      = require$$1$21;
var pow$1       = Math.pow;
var EPSILON   = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32     = pow$1(2, 127) * (2 - EPSILON32);
var MIN32     = pow$1(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export$31($export$31.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = sign$1(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

var $export$32 = require$$0$4;
var abs$1     = Math.abs;

$export$32($export$32.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs$1(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

var $export$33 = require$$0$4;
var $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export$33($export$33.S + $export$33.F * require$$1(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

var $export$34 = require$$0$4;

$export$34($export$34.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

var $export$35 = require$$0$4;

$export$35($export$35.S, 'Math', {log1p: require$$1$20});

var $export$36 = require$$0$4;

$export$36($export$36.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

var $export$37 = require$$0$4;

$export$37($export$37.S, 'Math', {sign: require$$1$21});

var $export$38 = require$$0$4;
var expm1   = require$$1$22;
var exp$1     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export$38($export$38.S + $export$38.F * require$$1(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

var $export$39 = require$$0$4;
var expm1$1   = require$$1$22;
var exp$2     = Math.exp;

$export$39($export$39.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1$1(x = +x)
      , b = expm1$1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

var $export$40 = require$$0$4;

$export$40($export$40.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var $export$41        = require$$0$4;
var toIndex$1        = require$$14;
var fromCharCode   = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export$41($export$41.S + $export$41.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(toIndex$1(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

var $export$42   = require$$0$4;
var toIObject$7 = require$$1$4;
var toLength$1  = require$$2$5;

$export$42($export$42.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject$7(callSite.raw)
      , len  = toLength$1(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

require$$0$7('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

var toInteger$4 = require$$12;
var defined$4   = require$$1$3;
// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined$4(that))
      , i = toInteger$4(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};



var _stringAt$2 = Object.freeze({
	default: _stringAt,
	__moduleExports: _stringAt
});

var _iterators = {};



var _iterators$2 = Object.freeze({
	default: _iterators,
	__moduleExports: _iterators
});

var create         = require$$1$10;
var descriptor     = require$$5$2;
var setToStringTag$2 = require$$13;
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
require$$3$2(IteratorPrototype, require$$5$3('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag$2(Constructor, NAME + ' Iterator');
};



var _iterCreate$2 = Object.freeze({
	default: _iterCreate,
	__moduleExports: _iterCreate
});

var require$$4$1 = ( _iterators$2 && _iterators ) || _iterators$2;

var require$$5$4 = ( _iterCreate$2 && _iterCreate ) || _iterCreate$2;

var LIBRARY$1        = require$$0;
var $export$43        = require$$0$4;
var redefine$2       = require$$1$2;
var hide$1           = require$$3$2;
var has$7            = require$$3$3;
var Iterators      = require$$4$1;
var $iterCreate    = require$$5$4;
var setToStringTag$1 = require$$13;
var getPrototypeOf$1 = require$$2$10;
var ITERATOR       = require$$5$3('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf$1($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag$1(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY$1 && !has$7(IteratorPrototype, ITERATOR))hide$1(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY$1 || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide$1(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine$2(proto, key, methods[key]);
    } else $export$43($export$43.P + $export$43.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};



var _iterDefine$2 = Object.freeze({
	default: _iterDefine,
	__moduleExports: _iterDefine
});

var require$$1$23 = ( _stringAt$2 && _stringAt ) || _stringAt$2;

var require$$7$2 = ( _iterDefine$2 && _iterDefine ) || _iterDefine$2;

var $at  = require$$1$23(true);

// 21.1.3.27 String.prototype[@@iterator]()
require$$7$2(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

var $export$44 = require$$0$4;
var $at$1     = require$$1$23(false);
$export$44($export$44.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at$1(this, pos);
  }
});

var isObject$14 = require$$7;
var cof$5      = require$$3$5;
var MATCH    = require$$5$3('match');
var _isRegexp = function(it){
  var isRegExp;
  return isObject$14(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof$5(it) == 'RegExp');
};



var _isRegexp$2 = Object.freeze({
	default: _isRegexp,
	__moduleExports: _isRegexp
});

var require$$3$7 = ( _isRegexp$2 && _isRegexp ) || _isRegexp$2;

var isRegExp = require$$3$7;
var defined$5  = require$$1$3;

var _stringContext = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined$5(that));
};



var _stringContext$2 = Object.freeze({
	default: _stringContext,
	__moduleExports: _stringContext
});

var MATCH$1 = require$$5$3('match');
var _failsIsRegexp = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};



var _failsIsRegexp$2 = Object.freeze({
	default: _failsIsRegexp,
	__moduleExports: _failsIsRegexp
});

var require$$2$13 = ( _stringContext$2 && _stringContext ) || _stringContext$2;

var require$$3$8 = ( _failsIsRegexp$2 && _failsIsRegexp ) || _failsIsRegexp$2;

var $export$45   = require$$0$4;
var toLength$2  = require$$2$5;
var context   = require$$2$13;
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export$45($export$45.P + $export$45.F * require$$3$8(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength$2(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength$2(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

var $export$46  = require$$0$4;
var context$1  = require$$2$13;
var INCLUDES = 'includes';

$export$46($export$46.P + $export$46.F * require$$3$8(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context$1(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var $export$47 = require$$0$4;

$export$47($export$47.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: require$$1$18
});

var $export$48     = require$$0$4;
var toLength$3    = require$$2$5;
var context$2     = require$$2$13;
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export$48($export$48.P + $export$48.F * require$$3$8(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context$2(this, searchString, STARTS_WITH)
      , index  = toLength$3(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

var $export$49 = require$$0$4;
var fails$3   = require$$1;
var defined$6 = require$$1$3;
var quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined$6(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export$49($export$49.P + $export$49.F * fails$3(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};



var _stringHtml$2 = Object.freeze({
	default: _stringHtml,
	__moduleExports: _stringHtml
});

var require$$0$8 = ( _stringHtml$2 && _stringHtml ) || _stringHtml$2;

require$$0$8('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});

require$$0$8('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});

require$$0$8('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});

require$$0$8('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});

require$$0$8('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});

require$$0$8('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});

require$$0$8('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});

require$$0$8('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});

require$$0$8('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});

require$$0$8('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});

require$$0$8('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});

require$$0$8('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});

require$$0$8('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});

var $export$50 = require$$0$4;

$export$50($export$50.S, 'Date', {now: function(){ return new Date().getTime(); }});

var $export$51     = require$$0$4;
var toObject$4    = require$$1$13;
var toPrimitive$4 = require$$2$1;

$export$51($export$51.P + $export$51.F * require$$1(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject$4(this)
      , pv = toPrimitive$4(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

var $export$52 = require$$0$4;
var fails$4   = require$$1;
var getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export$52($export$52.P + $export$52.F * (fails$4(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !fails$4(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

var DateProto    = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING    = 'toString';
var $toString    = DateProto[TO_STRING];
var getTime$1      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  require$$1$2(DateProto, TO_STRING, function toString(){
    var value = getTime$1.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

var anObject$5    = require$$6;
var toPrimitive$5 = require$$2$1;
var NUMBER$1      = 'number';

var _dateToPrimitive = function(hint){
  if(hint !== 'string' && hint !== NUMBER$1 && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive$5(anObject$5(this), hint != NUMBER$1);
};



var _dateToPrimitive$2 = Object.freeze({
	default: _dateToPrimitive,
	__moduleExports: _dateToPrimitive
});

var require$$2$14 = ( _dateToPrimitive$2 && _dateToPrimitive ) || _dateToPrimitive$2;

var TO_PRIMITIVE$1 = require$$5$3('toPrimitive');
var proto$1        = Date.prototype;

if(!(TO_PRIMITIVE$1 in proto$1))require$$3$2(proto$1, TO_PRIMITIVE$1, require$$2$14);

var $export$53 = require$$0$4;

$export$53($export$53.S, 'Array', {isArray: require$$1$9});

var anObject$6 = require$$6;
var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject$6(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject$6(ret.call(iterator));
    throw e;
  }
};



var _iterCall$2 = Object.freeze({
	default: _iterCall,
	__moduleExports: _iterCall
});

var Iterators$1  = require$$4$1;
var ITERATOR$1   = require$$5$3('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators$1.Array === it || ArrayProto[ITERATOR$1] === it);
};



var _isArrayIter$2 = Object.freeze({
	default: _isArrayIter,
	__moduleExports: _isArrayIter
});

var $defineProperty$1 = require$$3$1;
var createDesc$4      = require$$5$2;

var _createProperty = function(object, index, value){
  if(index in object)$defineProperty$1.f(object, index, createDesc$4(0, value));
  else object[index] = value;
};



var _createProperty$2 = Object.freeze({
	default: _createProperty,
	__moduleExports: _createProperty
});

var classof$1   = require$$0$6;
var ITERATOR$2  = require$$5$3('iterator');
var Iterators$2 = require$$4$1;
var core_getIteratorMethod = require$$1$1.getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR$2]
    || it['@@iterator']
    || Iterators$2[classof$1(it)];
};



var core_getIteratorMethod$2 = Object.freeze({
	default: core_getIteratorMethod,
	__moduleExports: core_getIteratorMethod
});

var ITERATOR$3     = require$$5$3('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$3]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$3] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};



var _iterDetect$2 = Object.freeze({
	default: _iterDetect,
	__moduleExports: _iterDetect
});

var require$$1$24 = ( _iterCall$2 && _iterCall ) || _iterCall$2;

var require$$21 = ( _isArrayIter$2 && _isArrayIter ) || _isArrayIter$2;

var require$$4$2 = ( _createProperty$2 && _createProperty ) || _createProperty$2;

var require$$25 = ( core_getIteratorMethod$2 && core_getIteratorMethod ) || core_getIteratorMethod$2;

var require$$33 = ( _iterDetect$2 && _iterDetect ) || _iterDetect$2;

var ctx$1            = require$$7$1;
var $export$54        = require$$0$4;
var toObject$5       = require$$1$13;
var call           = require$$1$24;
var isArrayIter    = require$$21;
var toLength$4       = require$$2$5;
var createProperty = require$$4$2;
var getIterFn      = require$$25;

$export$54($export$54.S + $export$54.F * !require$$33(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject$5(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx$1(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength$4(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var $export$55        = require$$0$4;
var createProperty$1 = require$$4$2;

// WebKit Array.of isn't generic
$export$55($export$55.S + $export$55.F * require$$1(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty$1(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

var fails$5 = require$$1;

var _strictMethod = function(method, arg){
  return !!method && fails$5(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};



var _strictMethod$2 = Object.freeze({
	default: _strictMethod,
	__moduleExports: _strictMethod
});

var require$$4$3 = ( _strictMethod$2 && _strictMethod ) || _strictMethod$2;

var $export$56   = require$$0$4;
var toIObject$8 = require$$1$4;
var arrayJoin = [].join;

// fallback for not array-like strings
$export$56($export$56.P + $export$56.F * (require$$2$4 != Object || !require$$4$3(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject$8(this), separator === undefined ? ',' : separator);
  }
});

var $export$57    = require$$0$4;
var html       = require$$2$9;
var cof$6        = require$$3$5;
var toIndex$2    = require$$14;
var toLength$5   = require$$2$5;
var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export$57($export$57.P + $export$57.F * require$$1(function(){
  if(html)arraySlice$1.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength$5(this.length)
      , klass = cof$6(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice$1.call(this, begin, end);
    var start  = toIndex$2(begin, len)
      , upTo   = toIndex$2(end, len)
      , size   = toLength$5(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

var $export$58   = require$$0$4;
var aFunction$2 = require$$2$2;
var toObject$6  = require$$1$13;
var fails$6     = require$$1;
var $sort     = [].sort;
var test$1      = [1, 2, 3];

$export$58($export$58.P + $export$58.F * (fails$6(function(){
  // IE8-
  test$1.sort(undefined);
}) || !fails$6(function(){
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !require$$4$3($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject$6(this))
      : $sort.call(toObject$6(this), aFunction$2(comparefn));
  }
});

var isObject$15 = require$$7;
var isArray$1  = require$$1$9;
var SPECIES  = require$$5$3('species');

var _arraySpeciesConstructor = function(original){
  var C;
  if(isArray$1(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray$1(C.prototype)))C = undefined;
    if(isObject$15(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};



var _arraySpeciesConstructor$2 = Object.freeze({
	default: _arraySpeciesConstructor,
	__moduleExports: _arraySpeciesConstructor
});

var require$$0$9 = ( _arraySpeciesConstructor$2 && _arraySpeciesConstructor ) || _arraySpeciesConstructor$2;

var speciesConstructor = require$$0$9;

var _arraySpeciesCreate = function(original, length){
  return new (speciesConstructor(original))(length);
};



var _arraySpeciesCreate$2 = Object.freeze({
	default: _arraySpeciesCreate,
	__moduleExports: _arraySpeciesCreate
});

var require$$4$4 = ( _arraySpeciesCreate$2 && _arraySpeciesCreate ) || _arraySpeciesCreate$2;

var ctx$2      = require$$7$1;
var IObject$2  = require$$2$4;
var toObject$7 = require$$1$13;
var toLength$6 = require$$2$5;
var asc      = require$$4$4;
var _arrayMethods = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject$7($this)
      , self   = IObject$2(O)
      , f      = ctx$2(callbackfn, that, 3)
      , length = toLength$6(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};



var _arrayMethods$2 = Object.freeze({
	default: _arrayMethods,
	__moduleExports: _arrayMethods
});

var require$$28 = ( _arrayMethods$2 && _arrayMethods ) || _arrayMethods$2;

var $export$59  = require$$0$4;
var $forEach = require$$28(0);
var STRICT   = require$$4$3([].forEach, true);

$export$59($export$59.P + $export$59.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var $export$60 = require$$0$4;
var $map    = require$$28(1);

$export$60($export$60.P + $export$60.F * !require$$4$3([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});

var $export$61 = require$$0$4;
var $filter = require$$28(2);

$export$61($export$61.P + $export$61.F * !require$$4$3([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $export$62 = require$$0$4;
var $some   = require$$28(3);

$export$62($export$62.P + $export$62.F * !require$$4$3([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});

var $export$63 = require$$0$4;
var $every  = require$$28(4);

$export$63($export$63.P + $export$63.F * !require$$4$3([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});

var aFunction$3 = require$$2$2;
var toObject$8  = require$$1$13;
var IObject$3   = require$$2$4;
var toLength$7  = require$$2$5;

var _arrayReduce = function(that, callbackfn, aLen, memo, isRight){
  aFunction$3(callbackfn);
  var O      = toObject$8(that)
    , self   = IObject$3(O)
    , length = toLength$7(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};



var _arrayReduce$2 = Object.freeze({
	default: _arrayReduce,
	__moduleExports: _arrayReduce
});

var require$$1$25 = ( _arrayReduce$2 && _arrayReduce ) || _arrayReduce$2;

var $export$64 = require$$0$4;
var $reduce = require$$1$25;

$export$64($export$64.P + $export$64.F * !require$$4$3([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

var $export$65 = require$$0$4;
var $reduce$1 = require$$1$25;

$export$65($export$65.P + $export$65.F * !require$$4$3([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce$1(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $export$66       = require$$0$4;
var $indexOf      = require$$1$5(false);
var $native       = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export$66($export$66.P + $export$66.F * (NEGATIVE_ZERO || !require$$4$3($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

var $export$67       = require$$0$4;
var toIObject$9     = require$$1$4;
var toInteger$5     = require$$12;
var toLength$8      = require$$2$5;
var $native$1       = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

$export$67($export$67.P + $export$67.F * (NEGATIVE_ZERO$1 || !require$$4$3($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO$1)return $native$1.apply(this, arguments) || 0;
    var O      = toIObject$9(this)
      , length = toLength$8(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, toInteger$5(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});

var toObject$9 = require$$1$13;
var toIndex$3  = require$$14;
var toLength$9 = require$$2$5;

var _arrayCopyWithin = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject$9(this)
    , len   = toLength$9(O.length)
    , to    = toIndex$3(target, len)
    , from  = toIndex$3(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : toIndex$3(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};



var _arrayCopyWithin$2 = Object.freeze({
	default: _arrayCopyWithin,
	__moduleExports: _arrayCopyWithin
});

var UNSCOPABLES = require$$5$3('unscopables');
var ArrayProto$1  = Array.prototype;
if(ArrayProto$1[UNSCOPABLES] == undefined)require$$3$2(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function(key){
  ArrayProto$1[UNSCOPABLES][key] = true;
};



var _addToUnscopables$2 = Object.freeze({
	default: _addToUnscopables,
	__moduleExports: _addToUnscopables
});

var require$$36 = ( _arrayCopyWithin$2 && _arrayCopyWithin ) || _arrayCopyWithin$2;

var require$$2$15 = ( _addToUnscopables$2 && _addToUnscopables ) || _addToUnscopables$2;

var $export$68 = require$$0$4;

$export$68($export$68.P, 'Array', {copyWithin: require$$36});

require$$2$15('copyWithin');

var toObject$10 = require$$1$13;
var toIndex$4  = require$$14;
var toLength$10 = require$$2$5;
var _arrayFill = function fill(value /*, start = 0, end = @length */){
  var O      = toObject$10(this)
    , length = toLength$10(O.length)
    , aLen   = arguments.length
    , index  = toIndex$4(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : toIndex$4(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};



var _arrayFill$2 = Object.freeze({
	default: _arrayFill,
	__moduleExports: _arrayFill
});

var require$$35 = ( _arrayFill$2 && _arrayFill ) || _arrayFill$2;

var $export$69 = require$$0$4;

$export$69($export$69.P, 'Array', {fill: require$$35});

require$$2$15('fill');

var $export$70 = require$$0$4;
var $find   = require$$28(5);
var KEY     = 'find';
var forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export$70($export$70.P + $export$70.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require$$2$15(KEY);

var $export$71 = require$$0$4;
var $find$1   = require$$28(6);
var KEY$1     = 'findIndex';
var forced$1  = true;
// Shouldn't skip holes
if(KEY$1 in [])Array(1)[KEY$1](function(){ forced$1 = false; });
$export$71($export$71.P + $export$71.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require$$2$15(KEY$1);

var global$6      = require$$2;
var dP$6          = require$$3$1;
var DESCRIPTORS$1 = require$$5;
var SPECIES$1     = require$$5$3('species');

var _setSpecies = function(KEY){
  var C = global$6[KEY];
  if(DESCRIPTORS$1 && C && !C[SPECIES$1])dP$6.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  });
};



var _setSpecies$2 = Object.freeze({
	default: _setSpecies,
	__moduleExports: _setSpecies
});

var require$$11$1 = ( _setSpecies$2 && _setSpecies ) || _setSpecies$2;

require$$11$1('Array');

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};



var _iterStep$2 = Object.freeze({
	default: _iterStep,
	__moduleExports: _iterStep
});

var require$$8 = ( _iterStep$2 && _iterStep ) || _iterStep$2;

var addToUnscopables = require$$2$15;
var step             = require$$8;
var Iterators$3        = require$$4$1;
var toIObject$10        = require$$1$4;

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = require$$7$2(Array, 'Array', function(iterated, kind){
  this._t = toIObject$10(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators$3.Arguments = Iterators$3.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');



var es6_array_iterator$2 = Object.freeze({
	default: es6_array_iterator,
	__moduleExports: es6_array_iterator
});

var anObject$7 = require$$6;
var _flags = function(){
  var that   = anObject$7(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};



var _flags$2 = Object.freeze({
	default: _flags,
	__moduleExports: _flags
});

var require$$4$5 = ( _flags$2 && _flags ) || _flags$2;

var global$7            = require$$2;
var inheritIfRequired$1 = require$$11;
var dP$7                = require$$3$1.f;
var gOPN$3              = require$$0$3.f;
var isRegExp$1          = require$$3$7;
var $flags            = require$$4$5;
var $RegExp           = global$7.RegExp;
var Base$1              = $RegExp;
var proto$2             = $RegExp.prototype;
var re1               = /a/g;
var re2               = /a/g;
var CORRECT_NEW       = new $RegExp(re1) !== re1;

if(require$$5 && (!CORRECT_NEW || require$$1(function(){
  re2[require$$5$3('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp$1(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired$1(CORRECT_NEW
        ? new Base$1(piRE && !fiU ? p.source : p, f)
        : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto$2, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP$7($RegExp, key, {
      configurable: true,
      get: function(){ return Base$1[key]; },
      set: function(it){ Base$1[key] = it; }
    });
  };
  for(var keys$1 = gOPN$3(Base$1), i$1 = 0; keys$1.length > i$1; )proxy(keys$1[i$1++]);
  proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  require$$1$2(global$7, 'RegExp', $RegExp);
}

require$$11$1('RegExp');

if(require$$5 && /./g.flags != 'g')require$$3$1.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: require$$4$5
});

var anObject$8    = require$$6;
var $flags$1      = require$$4$5;
var DESCRIPTORS$2 = require$$5;
var TO_STRING$1   = 'toString';
var $toString$1   = /./[TO_STRING$1];

var define$1 = function(fn){
  require$$1$2(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(require$$1(function(){ return $toString$1.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define$1(function toString(){
    var R = anObject$8(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS$2 && R instanceof RegExp ? $flags$1.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString$1.name != TO_STRING$1){
  define$1(function toString(){
    return $toString$1.call(this);
  });
}

var hide$2     = require$$3$2;
var redefine$3 = require$$1$2;
var fails$7    = require$$1;
var defined$7  = require$$1$3;
var wks$1      = require$$5$3;

var _fixReWks = function(KEY, length, exec){
  var SYMBOL   = wks$1(KEY)
    , fns      = exec(defined$7, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(fails$7(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine$3(String.prototype, KEY, strfn);
    hide$2(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};



var _fixReWks$2 = Object.freeze({
	default: _fixReWks,
	__moduleExports: _fixReWks
});

var require$$0$10 = ( _fixReWks$2 && _fixReWks ) || _fixReWks$2;

require$$0$10('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

require$$0$10('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

require$$0$10('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

require$$0$10('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp   = require$$3$7
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};



var _anInstance$2 = Object.freeze({
	default: _anInstance,
	__moduleExports: _anInstance
});

var _forOf = createCommonjsModule(function (module) {
var ctx         = require$$7$1
  , call        = require$$1$24
  , isArrayIter = require$$21
  , anObject    = require$$6
  , toLength    = require$$2$5
  , getIterFn   = require$$25
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});



var _forOf$2 = Object.freeze({
	default: _forOf,
	__moduleExports: _forOf
});

var anObject$9  = require$$6;
var aFunction$5 = require$$2$2;
var SPECIES$2   = require$$5$3('species');
var _speciesConstructor = function(O, D){
  var C = anObject$9(O).constructor, S;
  return C === undefined || (S = anObject$9(C)[SPECIES$2]) == undefined ? D : aFunction$5(S);
};



var _speciesConstructor$2 = Object.freeze({
	default: _speciesConstructor,
	__moduleExports: _speciesConstructor
});

var ctx$4                = require$$7$1;
var invoke$1             = require$$1$15;
var html$1               = require$$2$9;
var cel                = require$$3;
var global$9             = require$$2;
var process$2            = global$9.process;
var setTask            = global$9.setImmediate;
var clearTask          = global$9.clearImmediate;
var MessageChannel     = global$9.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke$1(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require$$3$5(process$2) == 'process'){
    defer = function(id){
      process$2.nextTick(ctx$4(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx$4(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$9.addEventListener && typeof postMessage == 'function' && !global$9.importScripts){
    defer = function(id){
      global$9.postMessage(id + '', '*');
    };
    global$9.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html$1.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html$1.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx$4(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};



var _task$2 = Object.freeze({
	default: _task,
	__moduleExports: _task
});

var require$$1$26 = ( _task$2 && _task ) || _task$2;

var global$10    = require$$2;
var macrotask = require$$1$26.set;
var Observer  = global$10.MutationObserver || global$10.WebKitMutationObserver;
var process$3   = global$10.process;
var Promise$1   = global$10.Promise;
var isNode$1    = require$$3$5(process$3) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$3.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$3.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$10, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};



var _microtask$2 = Object.freeze({
	default: _microtask,
	__moduleExports: _microtask
});

var redefine$4 = require$$1$2;
var _redefineAll = function(target, src, safe){
  for(var key in src)redefine$4(target, key, src[key], safe);
  return target;
};



var _redefineAll$2 = Object.freeze({
	default: _redefineAll,
	__moduleExports: _redefineAll
});

var require$$7$3 = ( _anInstance$2 && _anInstance ) || _anInstance$2;

var require$$10 = ( _forOf$2 && _forOf ) || _forOf$2;

var require$$30 = ( _speciesConstructor$2 && _speciesConstructor ) || _speciesConstructor$2;

var require$$3$9 = ( _microtask$2 && _microtask ) || _microtask$2;

var require$$8$1 = ( _redefineAll$2 && _redefineAll ) || _redefineAll$2;

var LIBRARY$2            = require$$0;
var global$8             = require$$2;
var ctx$3                = require$$7$1;
var classof$2            = require$$0$6;
var $export$72            = require$$0$4;
var isObject$16           = require$$7;
var aFunction$4          = require$$2$2;
var anInstance         = require$$7$3;
var forOf              = require$$10;
var speciesConstructor$1 = require$$30;
var task               = require$$1$26.set;
var microtask          = require$$3$9();
var PROMISE            = 'Promise';
var TypeError$1          = global$8.TypeError;
var process$1            = global$8.process;
var $Promise           = global$8[PROMISE];
var process$1            = global$8.process;
var isNode             = classof$2(process$1) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE$1 = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[require$$5$3('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject$16(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError$1('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction$4(resolve);
  this.reject  = aFunction$4(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global$8, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process$1.emit('unhandledRejection', value, promise);
        } else if(handler = global$8.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$8.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$8, function(){
    var handler;
    if(isNode){
      process$1.emit('rejectionHandled', promise);
    } else if(handler = global$8.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError$1("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx$3($resolve, wrapper, 1), ctx$3($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE$1){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction$4(executor);
    Internal.call(this);
    try {
      executor(ctx$3($resolve, this, 1), ctx$3($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = require$$8$1($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor$1(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process$1.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx$3($resolve, promise, 1);
    this.reject  = ctx$3($reject, promise, 1);
  };
}

$export$72($export$72.G + $export$72.W + $export$72.F * !USE_NATIVE$1, {Promise: $Promise});
require$$13($Promise, PROMISE);
require$$11$1(PROMISE);
Wrapper = require$$1$1[PROMISE];

// statics
$export$72($export$72.S + $export$72.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$72($export$72.S + $export$72.F * (LIBRARY$2 || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$72($export$72.S + $export$72.F * !(USE_NATIVE$1 && require$$33(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

var dP$8          = require$$3$1.f;
var create$1      = require$$1$10;
var redefineAll = require$$8$1;
var ctx$5         = require$$7$1;
var anInstance$1  = require$$7$3;
var defined$8     = require$$1$3;
var forOf$1       = require$$10;
var $iterDefine = require$$7$2;
var step$1        = require$$8;
var setSpecies  = require$$11$1;
var DESCRIPTORS$3 = require$$5;
var fastKey     = require$$1$8.fastKey;
var SIZE        = DESCRIPTORS$3 ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

var _collectionStrong = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance$1(that, C, NAME, '_i');
      that._i = create$1(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf$1(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance$1(this, C, 'forEach');
        var f = ctx$5(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(DESCRIPTORS$3)dP$8(C.prototype, 'size', {
      get: function(){
        return defined$8(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step$1(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step$1(0, entry.k);
      if(kind == 'values')return step$1(0, entry.v);
      return step$1(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};



var _collectionStrong$2 = Object.freeze({
	default: _collectionStrong,
	__moduleExports: _collectionStrong
});

var global$11            = require$$2;
var $export$73           = require$$0$4;
var redefine$5          = require$$1$2;
var redefineAll$1       = require$$8$1;
var meta$3              = require$$1$8;
var forOf$2             = require$$10;
var anInstance$2        = require$$7$3;
var isObject$17          = require$$7;
var fails$8             = require$$1;
var $iterDetect       = require$$33;
var setToStringTag$3    = require$$13;
var inheritIfRequired$2 = require$$11;

var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global$11[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine$5(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject$17(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject$17(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject$17(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails$8(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll$1(C.prototype, methods);
    meta$3.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = fails$8(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && fails$8(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance$2(target, C, NAME);
        var that = inheritIfRequired$2(new Base, target, C);
        if(iterable != undefined)forOf$2(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag$3(C, NAME);

  O[NAME] = C;
  $export$73($export$73.G + $export$73.W + $export$73.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};



var _collection$2 = Object.freeze({
	default: _collection,
	__moduleExports: _collection
});

var require$$0$11 = ( _collectionStrong$2 && _collectionStrong ) || _collectionStrong$2;

var require$$1$27 = ( _collection$2 && _collection ) || _collection$2;

var strong = require$$0$11;

// 23.1 Map Objects
var es6_map = require$$1$27('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);



var es6_map$2 = Object.freeze({
	default: es6_map,
	__moduleExports: es6_map
});

var strong$1 = require$$0$11;

// 23.2 Set Objects
var es6_set = require$$1$27('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong$1.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong$1);



var es6_set$2 = Object.freeze({
	default: es6_set,
	__moduleExports: es6_set
});

var redefineAll$2       = require$$8$1;
var getWeak           = require$$1$8.getWeak;
var anObject$10          = require$$6;
var isObject$18          = require$$7;
var anInstance$3        = require$$7$3;
var forOf$3             = require$$10;
var createArrayMethod = require$$28;
var $has              = require$$3$3;
var arrayFind         = createArrayMethod(5);
var arrayFindIndex    = createArrayMethod(6);
var id$1                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance$3(that, C, NAME, '_i');
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf$3(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll$2(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject$18(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key){
        if(!isObject$18(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject$10(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};



var _collectionWeak$2 = Object.freeze({
	default: _collectionWeak,
	__moduleExports: _collectionWeak
});

var require$$0$12 = ( _collectionWeak$2 && _collectionWeak ) || _collectionWeak$2;

var es6_weakMap = createCommonjsModule(function (module) {
'use strict';
var each         = require$$28(0)
  , redefine     = require$$1$2
  , meta         = require$$1$8
  , assign       = require$$3$6
  , weak         = require$$0$12
  , isObject     = require$$7
  , getWeak      = meta.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require$$1$27('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});



var es6_weakMap$2 = Object.freeze({
	default: es6_weakMap,
	__moduleExports: es6_weakMap
});

var weak = require$$0$12;

// 23.4 WeakSet Objects
require$$1$27('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

var global$12 = require$$2;
var hide$3   = require$$3$2;
var uid$2    = require$$26;
var TYPED  = uid$2('typed_array');
var VIEW$1   = uid$2('view');
var ABV    = !!(global$12.ArrayBuffer && global$12.DataView);
var CONSTR = ABV;
var i$2 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i$2 < l){
  if(Typed = global$12[TypedArrayConstructors[i$2++]]){
    hide$3(Typed.prototype, TYPED, true);
    hide$3(Typed.prototype, VIEW$1, true);
  } else CONSTR = false;
}

var _typed = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW$1
};



var _typed$2 = Object.freeze({
	default: _typed,
	__moduleExports: _typed
});

var require$$5$5 = ( _typed$2 && _typed ) || _typed$2;

var _typedBuffer = createCommonjsModule(function (module, exports) {
'use strict';
var global         = require$$2
  , DESCRIPTORS    = require$$5
  , LIBRARY        = require$$0
  , $typed         = require$$5$5
  , hide           = require$$3$2
  , redefineAll    = require$$8$1
  , fails          = require$$1
  , anInstance     = require$$7$3
  , toInteger      = require$$12
  , toLength       = require$$2$5
  , gOPN           = require$$0$3.f
  , dP             = require$$3$1.f
  , arrayFill      = require$$35
  , setToStringTag = require$$13
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global[ARRAY_BUFFER]
  , $DataView      = global[DATA_VIEW]
  , Math           = global.Math
  , RangeError     = global.RangeError
  , Infinity       = global.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = DESCRIPTORS ? '_b' : BUFFER
  , $LENGTH        = DESCRIPTORS ? '_l' : BYTE_LENGTH
  , $OFFSET        = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value);
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = toInteger(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!$typed.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = arrayFill.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = toInteger(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(DESCRIPTORS){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!fails(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !fails(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if(!LIBRARY)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
});



var _typedBuffer$2 = Object.freeze({
	default: _typedBuffer,
	__moduleExports: _typedBuffer
});

var require$$6$2 = ( _typedBuffer$2 && _typedBuffer ) || _typedBuffer$2;

var $export$74      = require$$0$4;
var $typed       = require$$5$5;
var buffer       = require$$6$2;
var anObject$11     = require$$6;
var toIndex$5      = require$$14;
var toLength$11     = require$$2$5;
var isObject$19     = require$$7;
var ArrayBuffer  = require$$2.ArrayBuffer;
var speciesConstructor$2 = require$$30;
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView    = buffer.DataView;
var $isView      = $typed.ABV && ArrayBuffer.isView;
var $slice       = $ArrayBuffer.prototype.slice;
var VIEW         = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export$74($export$74.G + $export$74.W + $export$74.F * (ArrayBuffer !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export$74($export$74.S + $export$74.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject$19(it) && VIEW in it;
  }
});

$export$74($export$74.P + $export$74.U + $export$74.F * require$$1(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject$11(this), start); // FF fix
    var len    = anObject$11(this).byteLength
      , first  = toIndex$5(start, len)
      , final  = toIndex$5(end === undefined ? len : end, len)
      , result = new (speciesConstructor$2(this, $ArrayBuffer))(toLength$11(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require$$11$1(ARRAY_BUFFER);

var $export$75 = require$$0$4;
$export$75($export$75.G + $export$75.W + $export$75.F * !require$$5$5.ABV, {
  DataView: require$$6$2.DataView
});

var require$$0$13 = ( es6_array_iterator$2 && es6_array_iterator ) || es6_array_iterator$2;

var _typedArray = createCommonjsModule(function (module) {
'use strict';
if(require$$5){
  var LIBRARY             = require$$0
    , global              = require$$2
    , fails               = require$$1
    , $export             = require$$0$4
    , $typed              = require$$5$5
    , $buffer             = require$$6$2
    , ctx                 = require$$7$1
    , anInstance          = require$$7$3
    , propertyDesc        = require$$5$2
    , hide                = require$$3$2
    , redefineAll         = require$$8$1
    , toInteger           = require$$12
    , toLength            = require$$2$5
    , toIndex             = require$$14
    , toPrimitive         = require$$2$1
    , has                 = require$$3$3
    , same                = require$$17
    , classof             = require$$0$6
    , isObject            = require$$7
    , toObject            = require$$1$13
    , isArrayIter         = require$$21
    , create              = require$$1$10
    , getPrototypeOf      = require$$2$10
    , gOPN                = require$$0$3.f
    , getIterFn           = require$$25
    , uid                 = require$$26
    , wks                 = require$$5$3
    , createArrayMethod   = require$$28
    , createArrayIncludes = require$$1$5
    , speciesConstructor  = require$$30
    , ArrayIterators      = require$$0$13
    , Iterators           = require$$4$1
    , $iterDetect         = require$$33
    , setSpecies          = require$$11$1
    , arrayFill           = require$$35
    , arrayCopyWithin     = require$$36
    , $DP                 = require$$3$1
    , $GOPD               = require$$4
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks('iterator')
    , TAG                 = wks('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject(arrayLike)
      , len    = toLength(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject(data)){
          length     = strictToLength(data, true);
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };
});



var _typedArray$2 = Object.freeze({
	default: _typedArray,
	__moduleExports: _typedArray
});

var require$$0$14 = ( _typedArray$2 && _typedArray ) || _typedArray$2;

require$$0$14('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

require$$0$14('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$14('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

var $export$76   = require$$0$4;
var aFunction$6 = require$$2$2;
var anObject$12  = require$$6;
var rApply    = (require$$2.Reflect || {}).apply;
var fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export$76($export$76.S + $export$76.F * !require$$1(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction$6(target)
      , L = anObject$12(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

var $export$77    = require$$0$4;
var create$2     = require$$1$10;
var aFunction$7  = require$$2$2;
var anObject$13   = require$$6;
var isObject$20   = require$$7;
var fails$9      = require$$1;
var bind       = require$$6$1;
var rConstruct = (require$$2.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails$9(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !fails$9(function(){
  rConstruct(function(){});
});

$export$77($export$77.S + $export$77.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction$7(Target);
    anObject$13(args);
    var newTarget = arguments.length < 3 ? Target : aFunction$7(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create$2(isObject$20(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject$20(result) ? result : instance;
  }
});

var dP$9          = require$$3$1;
var $export$78     = require$$0$4;
var anObject$14    = require$$6;
var toPrimitive$6 = require$$2$1;

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export$78($export$78.S + $export$78.F * require$$1(function(){
  Reflect.defineProperty(dP$9.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject$14(target);
    propertyKey = toPrimitive$6(propertyKey, true);
    anObject$14(attributes);
    try {
      dP$9.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

var $export$79  = require$$0$4;
var gOPD$3     = require$$4.f;
var anObject$15 = require$$6;

$export$79($export$79.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD$3(anObject$15(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

var $export$80  = require$$0$4;
var anObject$16 = require$$6;
var Enumerate = function(iterated){
  this._t = anObject$16(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
require$$5$4(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export$80($export$80.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

var gOPD$4           = require$$4;
var getPrototypeOf$2 = require$$2$10;
var has$8            = require$$3$3;
var $export$81        = require$$0$4;
var isObject$21       = require$$7;
var anObject$17       = require$$6;

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject$17(target) === receiver)return target[propertyKey];
  if(desc = gOPD$4.f(target, propertyKey))return has$8(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject$21(proto = getPrototypeOf$2(target)))return get(proto, propertyKey, receiver);
}

$export$81($export$81.S, 'Reflect', {get: get});

var gOPD$5     = require$$4;
var $export$82  = require$$0$4;
var anObject$18 = require$$6;

$export$82($export$82.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return gOPD$5.f(anObject$18(target), propertyKey);
  }
});

var $export$83  = require$$0$4;
var getProto = require$$2$10;
var anObject$19 = require$$6;

$export$83($export$83.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target){
    return getProto(anObject$19(target));
  }
});

var $export$84 = require$$0$4;

$export$84($export$84.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

var $export$85       = require$$0$4;
var anObject$20      = require$$6;
var $isExtensible = Object.isExtensible;

$export$85($export$85.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject$20(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

var gOPN$4     = require$$0$3;
var gOPS$2     = require$$1$7;
var anObject$21 = require$$6;
var Reflect$1  = require$$2.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it){
  var keys       = gOPN$4.f(anObject$21(it))
    , getSymbols = gOPS$2.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};



var _ownKeys$2 = Object.freeze({
	default: _ownKeys,
	__moduleExports: _ownKeys
});

var require$$1$28 = ( _ownKeys$2 && _ownKeys ) || _ownKeys$2;

var $export$86 = require$$0$4;

$export$86($export$86.S, 'Reflect', {ownKeys: require$$1$28});

var $export$87            = require$$0$4;
var anObject$22           = require$$6;
var $preventExtensions = Object.preventExtensions;

$export$87($export$87.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject$22(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

var dP$10             = require$$3$1;
var gOPD$6           = require$$4;
var getPrototypeOf$3 = require$$2$10;
var has$9            = require$$3$3;
var $export$88        = require$$0$4;
var createDesc$5     = require$$5$2;
var anObject$23       = require$$6;
var isObject$22       = require$$7;

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = gOPD$6.f(anObject$23(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject$22(proto = getPrototypeOf$3(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc$5(0);
  }
  if(has$9(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject$22(receiver))return false;
    existingDescriptor = gOPD$6.f(receiver, propertyKey) || createDesc$5(0);
    existingDescriptor.value = V;
    dP$10.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export$88($export$88.S, 'Reflect', {set: set});

var $export$89  = require$$0$4;
var setProto = require$$1$14;

if(setProto)$export$89($export$89.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

var $export$90   = require$$0$4;
var $includes = require$$1$5(true);

$export$90($export$90.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require$$2$15('includes');

var $export$91 = require$$0$4;
var $at$2     = require$$1$23(true);

$export$91($export$91.P, 'String', {
  at: function at(pos){
    return $at$2(this, pos);
  }
});

var toLength$12 = require$$2$5;
var repeat$1   = require$$1$18;
var defined$9  = require$$1$3;

var _stringPad = function(that, maxLength, fillString, left){
  var S            = String(defined$9(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength$12(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat$1.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};



var _stringPad$2 = Object.freeze({
	default: _stringPad,
	__moduleExports: _stringPad
});

var require$$1$29 = ( _stringPad$2 && _stringPad ) || _stringPad$2;

var $export$92 = require$$0$4;
var $pad    = require$$1$29;

$export$92($export$92.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

var $export$93 = require$$0$4;
var $pad$1    = require$$1$29;

$export$93($export$93.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad$1(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

require$$0$7('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');

require$$0$7('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');

var $export$94     = require$$0$4;
var defined$10     = require$$1$3;
var toLength$13    = require$$2$5;
var isRegExp$2    = require$$3$7;
var getFlags    = require$$4$5;
var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

require$$5$4($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export$94($export$94.P, 'String', {
  matchAll: function matchAll(regexp){
    defined$10(this);
    if(!isRegExp$2(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength$13(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

require$$0$5('asyncIterator');

require$$0$5('observable');

var $export$95        = require$$0$4;
var ownKeys        = require$$1$28;
var toIObject$11      = require$$1$4;
var gOPD$7           = require$$4;
var createProperty$2 = require$$4$2;

$export$95($export$95.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject$11(object)
      , getDesc = gOPD$7.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty$2(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

var getKeys$4   = require$$0$2;
var toIObject$12 = require$$1$4;
var isEnum$1    = require$$2$7.f;
var _objectToArray = function(isEntries){
  return function(it){
    var O      = toIObject$12(it)
      , keys   = getKeys$4(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum$1.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};



var _objectToArray$2 = Object.freeze({
	default: _objectToArray,
	__moduleExports: _objectToArray
});

var require$$1$30 = ( _objectToArray$2 && _objectToArray ) || _objectToArray$2;

var $export$96 = require$$0$4;
var $values = require$$1$30(false);

$export$96($export$96.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

var $export$97  = require$$0$4;
var $entries = require$$1$30(true);

$export$97($export$97.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

var _objectForcedPam = require$$0|| !require$$1(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete require$$2[K];
});



var _objectForcedPam$2 = Object.freeze({
	default: _objectForcedPam,
	__moduleExports: _objectForcedPam
});

var require$$6$3 = ( _objectForcedPam$2 && _objectForcedPam ) || _objectForcedPam$2;

var $export$98         = require$$0$4;
var toObject$11        = require$$1$13;
var aFunction$8       = require$$2$2;
var $defineProperty$2 = require$$3$1;

// B.2.2.2 Object.prototype.__defineGetter__(P, getter)
require$$5 && $export$98($export$98.P + require$$6$3, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty$2.f(toObject$11(this), P, {get: aFunction$8(getter), enumerable: true, configurable: true});
  }
});

var $export$99         = require$$0$4;
var toObject$12        = require$$1$13;
var aFunction$9       = require$$2$2;
var $defineProperty$3 = require$$3$1;

// B.2.2.3 Object.prototype.__defineSetter__(P, setter)
require$$5 && $export$99($export$99.P + require$$6$3, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty$3.f(toObject$12(this), P, {set: aFunction$9(setter), enumerable: true, configurable: true});
  }
});

var $export$100                  = require$$0$4;
var toObject$13                 = require$$1$13;
var toPrimitive$7              = require$$2$1;
var getPrototypeOf$4           = require$$2$10;
var getOwnPropertyDescriptor = require$$4.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require$$5 && $export$100($export$100.P + require$$6$3, 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject$13(this)
      , K = toPrimitive$7(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf$4(O));
  }
});

var $export$101                  = require$$0$4;
var toObject$14                 = require$$1$13;
var toPrimitive$8              = require$$2$1;
var getPrototypeOf$5           = require$$2$10;
var getOwnPropertyDescriptor$1 = require$$4.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require$$5 && $export$101($export$101.P + require$$6$3, 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject$14(this)
      , K = toPrimitive$8(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor$1(O, K))return D.set;
    } while(O = getPrototypeOf$5(O));
  }
});

var forOf$4 = require$$10;

var _arrayFromIterable = function(iter, ITERATOR){
  var result = [];
  forOf$4(iter, false, result.push, result, ITERATOR);
  return result;
};



var _arrayFromIterable$2 = Object.freeze({
	default: _arrayFromIterable,
	__moduleExports: _arrayFromIterable
});

var require$$1$31 = ( _arrayFromIterable$2 && _arrayFromIterable ) || _arrayFromIterable$2;

var classof$3 = require$$0$6;
var from    = require$$1$31;
var _collectionToJson = function(NAME){
  return function toJSON(){
    if(classof$3(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};



var _collectionToJson$2 = Object.freeze({
	default: _collectionToJson,
	__moduleExports: _collectionToJson
});

var require$$1$32 = ( _collectionToJson$2 && _collectionToJson ) || _collectionToJson$2;

var $export$102  = require$$0$4;

$export$102($export$102.P + $export$102.R, 'Map', {toJSON: require$$1$32('Map')});

var $export$103  = require$$0$4;

$export$103($export$103.P + $export$103.R, 'Set', {toJSON: require$$1$32('Set')});

var $export$104 = require$$0$4;

$export$104($export$104.S, 'System', {global: require$$2});

var $export$105 = require$$0$4;
var cof$7     = require$$3$5;

$export$105($export$105.S, 'Error', {
  isError: function isError(it){
    return cof$7(it) === 'Error';
  }
});

var $export$106 = require$$0$4;

$export$106($export$106.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

var $export$107 = require$$0$4;

$export$107($export$107.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

var $export$108 = require$$0$4;

$export$108($export$108.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

var $export$109 = require$$0$4;

$export$109($export$109.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

var require$$0$15 = ( es6_map$2 && es6_map ) || es6_map$2;

var require$$3$10 = ( es6_weakMap$2 && es6_weakMap ) || es6_weakMap$2;

var Map     = require$$0$15;
var $export$110 = require$$0$4;
var shared$2  = require$$2$3('metadata');
var store$1   = shared$2.store || (shared$2.store = new (require$$3$10));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store$1.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store$1.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata$1 = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey$1 = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp$3 = function(O){
  $export$110($export$110.S, 'Reflect', O);
};

var _metadata = {
  store: store$1,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata$1,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey$1,
  exp: exp$3
};



var _metadata$2 = Object.freeze({
	default: _metadata,
	__moduleExports: _metadata
});

var require$$0$16 = ( _metadata$2 && _metadata ) || _metadata$2;

var metadata                  = require$$0$16;
var anObject$24                  = require$$6;
var toMetaKey                 = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject$24(target), toMetaKey(targetKey));
}});

var metadata$1               = require$$0$16;
var anObject$25               = require$$6;
var toMetaKey$2              = metadata$1.key;
var getOrCreateMetadataMap$1 = metadata$1.map;
var store$2                  = metadata$1.store;

metadata$1.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2])
    , metadataMap = getOrCreateMetadataMap$1(anObject$25(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store$2.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store$2['delete'](target);
}});

var metadata$2               = require$$0$16;
var anObject$26               = require$$6;
var getPrototypeOf$6         = require$$2$10;
var ordinaryHasOwnMetadata$1 = metadata$2.has;
var ordinaryGetOwnMetadata$1 = metadata$2.get;
var toMetaKey$3              = metadata$2.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
  var parent = getPrototypeOf$6(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata$2.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject$26(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
}});

var require$$0$17 = ( es6_set$2 && es6_set ) || es6_set$2;

var Set                     = require$$0$17;
var from$1                    = require$$1$31;
var metadata$3                = require$$0$16;
var anObject$27                = require$$6;
var getPrototypeOf$7          = require$$2$10;
var ordinaryOwnMetadataKeys$1 = metadata$3.keys;
var toMetaKey$4               = metadata$3.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys$1(O, P)
    , parent = getPrototypeOf$7(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from$1(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata$3.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject$27(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
}});

var metadata$4               = require$$0$16;
var anObject$28               = require$$6;
var ordinaryGetOwnMetadata$2 = metadata$4.get;
var toMetaKey$5              = metadata$4.key;

metadata$4.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata$2(metadataKey, anObject$28(target)
    , arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
}});

var metadata$5                = require$$0$16;
var anObject$29                = require$$6;
var ordinaryOwnMetadataKeys$2 = metadata$5.keys;
var toMetaKey$6               = metadata$5.key;

metadata$5.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys$2(anObject$29(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
}});

var metadata$6               = require$$0$16;
var anObject$30               = require$$6;
var getPrototypeOf$8         = require$$2$10;
var ordinaryHasOwnMetadata$2 = metadata$6.has;
var toMetaKey$7              = metadata$6.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf$8(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata$6.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject$30(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
}});

var metadata$7               = require$$0$16;
var anObject$31               = require$$6;
var ordinaryHasOwnMetadata$3 = metadata$7.has;
var toMetaKey$8              = metadata$7.key;

metadata$7.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata$3(metadataKey, anObject$31(target)
    , arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
}});

var metadata$8                  = require$$0$16;
var anObject$32                  = require$$6;
var aFunction$10                 = require$$2$2;
var toMetaKey$9                 = metadata$8.key;
var ordinaryDefineOwnMetadata$2 = metadata$8.set;

metadata$8.exp({metadata: function metadata(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata$2(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject$32 : aFunction$10)(target),
      toMetaKey$9(targetKey)
    );
  };
}});

var $export$111   = require$$0$4;
var microtask$1 = require$$3$9();
var process$4   = require$$2.process;
var isNode$2    = require$$3$5(process$4) == 'process';

$export$111($export$111.G, {
  asap: function asap(fn){
    var domain = isNode$2 && process$4.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});

var $export$112     = require$$0$4;
var global$13      = require$$2;
var core$3        = require$$1$1;
var microtask$2   = require$$3$9();
var OBSERVABLE  = require$$5$3('observable');
var aFunction$11   = require$$2$2;
var anObject$33    = require$$6;
var anInstance$4  = require$$7$3;
var redefineAll$3 = require$$8$1;
var hide$4        = require$$3$2;
var forOf$5       = require$$10;
var RETURN      = forOf$5.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction$11(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject$33(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction$11(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll$3({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll$3({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance$4(this, $Observable, 'Observable', '_f')._f = aFunction$11(subscriber);
};

redefineAll$3($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (core$3.Promise || global$13.Promise)(function(resolve, reject){
      aFunction$11(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll$3($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject$33(x)[OBSERVABLE]);
    if(method){
      var observable = anObject$33(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask$2(function(){
        if(!done){
          try {
            if(forOf$5(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask$2(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide$4($Observable.prototype, OBSERVABLE, function(){ return this; });

$export$112($export$112.G, {Observable: $Observable});

require$$11$1('Observable');

var _path = require$$2;



var _path$2 = Object.freeze({
	default: _path,
	__moduleExports: _path
});

var require$$0$18 = ( _path$2 && _path ) || _path$2;

var path      = require$$0$18;
var invoke$3    = require$$1$15;
var aFunction$12 = require$$2$2;
var _partial = function(/* ...pargs */){
  var fn     = aFunction$12(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke$3(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke$3(fn, args, that);
  };
};



var _partial$2 = Object.freeze({
	default: _partial,
	__moduleExports: _partial
});

var require$$3$11 = ( _partial$2 && _partial ) || _partial$2;

var global$14     = require$$2;
var $export$113    = require$$0$4;
var invoke$2     = require$$1$15;
var partial    = require$$3$11;
var navigator  = global$14.navigator;
var MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap$1 = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke$2(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export$113($export$113.G + $export$113.B + $export$113.F * MSIE, {
  setTimeout:  wrap$1(global$14.setTimeout),
  setInterval: wrap$1(global$14.setInterval)
});

var $export$114 = require$$0$4;
var $task   = require$$1$26;
$export$114($export$114.G + $export$114.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

var $iterators    = require$$0$13;
var redefine$6      = require$$1$2;
var global$15        = require$$2;
var hide$5          = require$$3$2;
var Iterators$4     = require$$4$1;
var wks$2           = require$$5$3;
var ITERATOR$4      = wks$2('iterator');
var TO_STRING_TAG = wks$2('toStringTag');
var ArrayValues   = Iterators$4.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i$3 = 0; i$3 < 5; i$3++){
  var NAME$1       = collections[i$3]
    , Collection = global$15[NAME$1]
    , proto$3      = Collection && Collection.prototype
    , key$1;
  if(proto$3){
    if(!proto$3[ITERATOR$4])hide$5(proto$3, ITERATOR$4, ArrayValues);
    if(!proto$3[TO_STRING_TAG])hide$5(proto$3, TO_STRING_TAG, NAME$1);
    Iterators$4[NAME$1] = ArrayValues;
    for(key$1 in $iterators)if(!proto$3[key$1])redefine$6(proto$3, key$1, $iterators[key$1], true);
  }
}

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal
);
});

var _replacer = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};



var _replacer$2 = Object.freeze({
	default: _replacer,
	__moduleExports: _replacer
});

var require$$1$33 = ( _replacer$2 && _replacer ) || _replacer$2;

var $export$115 = require$$0$4;
var $re     = require$$1$33(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export$115($export$115.S, 'RegExp', {escape: function escape(it){ return $re(it); }});

if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach$1(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

var _arrayEach = arrayEach$1;



var _arrayEach$2 = Object.freeze({
	default: _arrayEach,
	__moduleExports: _arrayEach
});

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor$1(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

var _createBaseFor = createBaseFor$1;



var _createBaseFor$2 = Object.freeze({
	default: _createBaseFor,
	__moduleExports: _createBaseFor
});

var require$$0$19 = ( _createBaseFor$2 && _createBaseFor ) || _createBaseFor$2;

var createBaseFor = require$$0$19;

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor$1 = createBaseFor();

var _baseFor = baseFor$1;



var _baseFor$2 = Object.freeze({
	default: _baseFor,
	__moduleExports: _baseFor
});

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes$1(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

var _baseTimes = baseTimes$1;



var _baseTimes$2 = Object.freeze({
	default: _baseTimes,
	__moduleExports: _baseTimes
});

var freeGlobal$1 = typeof commonjsGlobal == 'object' && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;

var _freeGlobal = freeGlobal$1;



var _freeGlobal$2 = Object.freeze({
	default: _freeGlobal,
	__moduleExports: _freeGlobal
});

var require$$0$20 = ( _freeGlobal$2 && _freeGlobal ) || _freeGlobal$2;

var freeGlobal = require$$0$20;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root$1 = freeGlobal || freeSelf || Function('return this')();

var _root = root$1;



var _root$2 = Object.freeze({
	default: _root,
	__moduleExports: _root
});

var require$$0$21 = ( _root$2 && _root ) || _root$2;

var root = require$$0$21;

/** Built-in value references. */
var Symbol$2 = root.Symbol;

var _Symbol = Symbol$2;



var _Symbol$2 = Object.freeze({
	default: _Symbol,
	__moduleExports: _Symbol
});

var require$$0$22 = ( _Symbol$2 && _Symbol ) || _Symbol$2;

var Symbol$3 = require$$0$22;

/** Used for built-in method references. */
var objectProto$2 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$3 = objectProto$2.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto$2.toString;

/** Built-in value references. */
var symToStringTag$1 = Symbol$3 ? Symbol$3.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag$1(value) {
  var isOwn = hasOwnProperty$3.call(value, symToStringTag$1),
      tag = value[symToStringTag$1];

  try {
    value[symToStringTag$1] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag$1] = tag;
    } else {
      delete value[symToStringTag$1];
    }
  }
  return result;
}

var _getRawTag = getRawTag$1;



var _getRawTag$2 = Object.freeze({
	default: _getRawTag,
	__moduleExports: _getRawTag
});

/** Used for built-in method references. */
var objectProto$3 = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString$1 = objectProto$3.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString$1(value) {
  return nativeObjectToString$1.call(value);
}

var _objectToString = objectToString$1;



var _objectToString$2 = Object.freeze({
	default: _objectToString,
	__moduleExports: _objectToString
});

var require$$1$34 = ( _getRawTag$2 && _getRawTag ) || _getRawTag$2;

var require$$2$16 = ( _objectToString$2 && _objectToString ) || _objectToString$2;

var Symbol$1 = require$$0$22;
var getRawTag = require$$1$34;
var objectToString = require$$2$16;

/** `Object#toString` result references. */
var nullTag = '[object Null]';
var undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol$1 ? Symbol$1.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag$1(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

var _baseGetTag = baseGetTag$1;



var _baseGetTag$2 = Object.freeze({
	default: _baseGetTag,
	__moduleExports: _baseGetTag
});

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike$2(value) {
  return value != null && typeof value == 'object';
}

var isObjectLike_1 = isObjectLike$2;



var isObjectLike$3 = Object.freeze({
	default: isObjectLike_1,
	__moduleExports: isObjectLike_1
});

var require$$0$23 = ( _baseGetTag$2 && _baseGetTag ) || _baseGetTag$2;

var require$$2$17 = ( isObjectLike$3 && isObjectLike_1 ) || isObjectLike$3;

var baseGetTag = require$$0$23;
var isObjectLike$1 = require$$2$17;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments$1(value) {
  return isObjectLike$1(value) && baseGetTag(value) == argsTag;
}

var _baseIsArguments = baseIsArguments$1;



var _baseIsArguments$2 = Object.freeze({
	default: _baseIsArguments,
	__moduleExports: _baseIsArguments
});

var require$$0$24 = ( _baseIsArguments$2 && _baseIsArguments ) || _baseIsArguments$2;

var baseIsArguments = require$$0$24;
var isObjectLike = require$$2$17;

/** Used for built-in method references. */
var objectProto$1 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$2 = objectProto$1.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto$1.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments$1 = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty$2.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

var isArguments_1 = isArguments$1;



var isArguments$2 = Object.freeze({
	default: isArguments_1,
	__moduleExports: isArguments_1
});

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray$4 = Array.isArray;

var isArray_1 = isArray$4;



var isArray$5 = Object.freeze({
	default: isArray_1,
	__moduleExports: isArray_1
});

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

var stubFalse_1 = stubFalse;



var stubFalse$1 = Object.freeze({
	default: stubFalse_1,
	__moduleExports: stubFalse_1
});

var require$$1$35 = ( stubFalse$1 && stubFalse_1 ) || stubFalse$1;

var isBuffer_1 = createCommonjsModule(function (module, exports) {
var root = require$$0$21,
    stubFalse = require$$1$35;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
});



var isBuffer$1 = Object.freeze({
	default: isBuffer_1,
	__moduleExports: isBuffer_1
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex$1(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

var _isIndex = isIndex$1;



var _isIndex$2 = Object.freeze({
	default: _isIndex,
	__moduleExports: _isIndex
});

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER$1 = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength$1(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER$1;
}

var isLength_1 = isLength$1;



var isLength$2 = Object.freeze({
	default: isLength_1,
	__moduleExports: isLength_1
});

var require$$1$36 = ( isLength$2 && isLength_1 ) || isLength$2;

var baseGetTag$2 = require$$0$23;
var isLength = require$$1$36;
var isObjectLike$4 = require$$2$17;

/** `Object#toString` result references. */
var argsTag$1 = '[object Arguments]';
var arrayTag = '[object Array]';
var boolTag = '[object Boolean]';
var dateTag = '[object Date]';
var errorTag = '[object Error]';
var funcTag = '[object Function]';
var mapTag = '[object Map]';
var numberTag = '[object Number]';
var objectTag = '[object Object]';
var regexpTag = '[object RegExp]';
var setTag = '[object Set]';
var stringTag = '[object String]';
var weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]';
var dataViewTag = '[object DataView]';
var float32Tag = '[object Float32Array]';
var float64Tag = '[object Float64Array]';
var int8Tag = '[object Int8Array]';
var int16Tag = '[object Int16Array]';
var int32Tag = '[object Int32Array]';
var uint8Tag = '[object Uint8Array]';
var uint8ClampedTag = '[object Uint8ClampedArray]';
var uint16Tag = '[object Uint16Array]';
var uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag$1] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray$1(value) {
  return isObjectLike$4(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag$2(value)];
}

var _baseIsTypedArray = baseIsTypedArray$1;



var _baseIsTypedArray$2 = Object.freeze({
	default: _baseIsTypedArray,
	__moduleExports: _baseIsTypedArray
});

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary$1(func) {
  return function(value) {
    return func(value);
  };
}

var _baseUnary = baseUnary$1;



var _baseUnary$2 = Object.freeze({
	default: _baseUnary,
	__moduleExports: _baseUnary
});

var _nodeUtil = createCommonjsModule(function (module, exports) {
var freeGlobal = require$$0$20;

/** Detect free variable `exports`. */
var freeExports = 'object' == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && 'object' == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;
});



var _nodeUtil$2 = Object.freeze({
	default: _nodeUtil,
	__moduleExports: _nodeUtil
});

var require$$0$25 = ( _baseIsTypedArray$2 && _baseIsTypedArray ) || _baseIsTypedArray$2;

var require$$1$37 = ( _baseUnary$2 && _baseUnary ) || _baseUnary$2;

var require$$2$18 = ( _nodeUtil$2 && _nodeUtil ) || _nodeUtil$2;

var baseIsTypedArray = require$$0$25;
var baseUnary = require$$1$37;
var nodeUtil = require$$2$18;

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray$1 = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

var isTypedArray_1 = isTypedArray$1;



var isTypedArray$2 = Object.freeze({
	default: isTypedArray_1,
	__moduleExports: isTypedArray_1
});

var require$$0$26 = ( _baseTimes$2 && _baseTimes ) || _baseTimes$2;

var require$$1$38 = ( isArguments$2 && isArguments_1 ) || isArguments$2;

var require$$2$19 = ( isArray$5 && isArray_1 ) || isArray$5;

var require$$3$12 = ( isBuffer$1 && isBuffer_1 ) || isBuffer$1;

var require$$4$6 = ( _isIndex$2 && _isIndex ) || _isIndex$2;

var require$$5$6 = ( isTypedArray$2 && isTypedArray_1 ) || isTypedArray$2;

var baseTimes = require$$0$26;
var isArguments = require$$1$38;
var isArray$3 = require$$2$19;
var isBuffer = require$$3$12;
var isIndex = require$$4$6;
var isTypedArray = require$$5$6;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$1 = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys$1(value, inherited) {
  var isArr = isArray$3(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty$1.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

var _arrayLikeKeys = arrayLikeKeys$1;



var _arrayLikeKeys$2 = Object.freeze({
	default: _arrayLikeKeys,
	__moduleExports: _arrayLikeKeys
});

/** Used for built-in method references. */
var objectProto$5 = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype$1(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto$5;

  return value === proto;
}

var _isPrototype = isPrototype$1;



var _isPrototype$2 = Object.freeze({
	default: _isPrototype,
	__moduleExports: _isPrototype
});

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg$1(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

var _overArg = overArg$1;



var _overArg$2 = Object.freeze({
	default: _overArg,
	__moduleExports: _overArg
});

var require$$0$27 = ( _overArg$2 && _overArg ) || _overArg$2;

var overArg = require$$0$27;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys$1 = overArg(Object.keys, Object);

var _nativeKeys = nativeKeys$1;



var _nativeKeys$2 = Object.freeze({
	default: _nativeKeys,
	__moduleExports: _nativeKeys
});

var require$$0$28 = ( _isPrototype$2 && _isPrototype ) || _isPrototype$2;

var require$$1$39 = ( _nativeKeys$2 && _nativeKeys ) || _nativeKeys$2;

var isPrototype = require$$0$28;
var nativeKeys = require$$1$39;

/** Used for built-in method references. */
var objectProto$4 = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty$4 = objectProto$4.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys$1(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty$4.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

var _baseKeys = baseKeys$1;



var _baseKeys$2 = Object.freeze({
	default: _baseKeys,
	__moduleExports: _baseKeys
});

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject$24(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

var isObject_1 = isObject$24;



var isObject$25 = Object.freeze({
	default: isObject_1,
	__moduleExports: isObject_1
});

var require$$1$40 = ( isObject$25 && isObject_1 ) || isObject$25;

var baseGetTag$3 = require$$0$23;
var isObject$23 = require$$1$40;

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]';
var funcTag$1 = '[object Function]';
var genTag = '[object GeneratorFunction]';
var proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction$1(value) {
  if (!isObject$23(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag$3(value);
  return tag == funcTag$1 || tag == genTag || tag == asyncTag || tag == proxyTag;
}

var isFunction_1 = isFunction$1;



var isFunction$2 = Object.freeze({
	default: isFunction_1,
	__moduleExports: isFunction_1
});

var require$$0$29 = ( isFunction$2 && isFunction_1 ) || isFunction$2;

var isFunction = require$$0$29;
var isLength$3 = require$$1$36;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike$1(value) {
  return value != null && isLength$3(value.length) && !isFunction(value);
}

var isArrayLike_1 = isArrayLike$1;



var isArrayLike$2 = Object.freeze({
	default: isArrayLike_1,
	__moduleExports: isArrayLike_1
});

var require$$0$30 = ( _arrayLikeKeys$2 && _arrayLikeKeys ) || _arrayLikeKeys$2;

var require$$1$41 = ( _baseKeys$2 && _baseKeys ) || _baseKeys$2;

var require$$0$31 = ( isArrayLike$2 && isArrayLike_1 ) || isArrayLike$2;

var arrayLikeKeys = require$$0$30;
var baseKeys = require$$1$41;
var isArrayLike = require$$0$31;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys$3(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

var keys_1 = keys$3;



var keys$4 = Object.freeze({
	default: keys_1,
	__moduleExports: keys_1
});

var require$$0$32 = ( _baseFor$2 && _baseFor ) || _baseFor$2;

var require$$1$42 = ( keys$4 && keys_1 ) || keys$4;

var baseFor = require$$0$32;
var keys$2 = require$$1$42;

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn$1(object, iteratee) {
  return object && baseFor(object, iteratee, keys$2);
}

var _baseForOwn = baseForOwn$1;



var _baseForOwn$2 = Object.freeze({
	default: _baseForOwn,
	__moduleExports: _baseForOwn
});

var isArrayLike$3 = require$$0$31;

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach$1(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike$3(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

var _createBaseEach = createBaseEach$1;



var _createBaseEach$2 = Object.freeze({
	default: _createBaseEach,
	__moduleExports: _createBaseEach
});

var require$$0$33 = ( _baseForOwn$2 && _baseForOwn ) || _baseForOwn$2;

var require$$1$43 = ( _createBaseEach$2 && _createBaseEach ) || _createBaseEach$2;

var baseForOwn = require$$0$33;
var createBaseEach = require$$1$43;

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach$1 = createBaseEach(baseForOwn);

var _baseEach = baseEach$1;



var _baseEach$2 = Object.freeze({
	default: _baseEach,
	__moduleExports: _baseEach
});

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity$1(value) {
  return value;
}

var identity_1 = identity$1;



var identity$2 = Object.freeze({
	default: identity_1,
	__moduleExports: identity_1
});

var require$$0$34 = ( identity$2 && identity_1 ) || identity$2;

var identity = require$$0$34;

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction$1(value) {
  return typeof value == 'function' ? value : identity;
}

var _castFunction = castFunction$1;



var _castFunction$2 = Object.freeze({
	default: _castFunction,
	__moduleExports: _castFunction
});

var require$$0$35 = ( _arrayEach$2 && _arrayEach ) || _arrayEach$2;

var require$$1$44 = ( _baseEach$2 && _baseEach ) || _baseEach$2;

var require$$2$20 = ( _castFunction$2 && _castFunction ) || _castFunction$2;

var arrayEach = require$$0$35;
var baseEach = require$$1$44;
var castFunction = require$$2$20;
var isArray$2 = require$$2$19;

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray$2(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

var forEach_1 = forEach;

var eventReady = 'DOMContentLoaded';

var callbacks = [];
var isReady = false;

var onReady = function onReady() {
  isReady = true;
  callbacks.forEach(function (fn) {
    return fn.call();
  });
  document.removeEventListener(eventReady, onReady);
};

function ready(fn) {
  if (isReady) {
    fn.call();
  } else {
    callbacks.push(fn);
  }
}

if (document.readyState === 'interactive') {
  onReady.call();
} else {
  document.addEventListener(eventReady, onReady);
}

var hasJs = 'has-js';
var classAccordion = 'js-accordion';
var classAccordionItem = 'js-accordion-item';
var classAccordionTrigger = 'js-accordion-trigger';
var classAccordionBody = 'js-accordion-body';
var classClosed = 'is-closed';

var attrHidden = 'aria-hidden';

var accordionItems = [];

function accordion() {
  return forEach_1(document.getElementsByClassName(classAccordion), applyAccordion);
}

function applyAccordion(elAccordion) {
  return forEach_1(elAccordion.getElementsByClassName(classAccordionItem), applyAccordionItem);
}

function applyAccordionItem(elAccordionItem) {
  elAccordionItem.classList.add(hasJs);
  closeAccordion(elAccordionItem);

  accordionItems.push(elAccordionItem);

  forEach_1(elAccordionItem.getElementsByClassName(classAccordionTrigger), function (elAccordionTrigger) {
    elAccordionTrigger.removeAttribute('tabindex');
    elAccordionTrigger.addEventListener('click', function (e) {
      e.preventDefault();
      toggleAccordion(elAccordionItem);
    });
  });
}

function closeAllExcept(elAccordion) {
  accordionItems.filter(function (item) {
    return item !== elAccordion;
  }).map(function (item) {
    return closeAccordion(item);
  });
}

function closeAccordion(elAccordion) {
  elAccordion.getElementsByClassName(classAccordionBody)[0].setAttribute(attrHidden, true);
  elAccordion.classList.add(classClosed);
}

function openAccordion(elAccordion) {
  elAccordion.getElementsByClassName(classAccordionBody)[0].setAttribute(attrHidden, false);
  elAccordion.classList.remove(classClosed);
}

function toggleAccordion(elAccordion) {
  closeAllExcept(elAccordion);
  if (elAccordion.classList.contains(classClosed)) {
    openAccordion(elAccordion);
  } else {
    closeAccordion(elAccordion);
  }
}

ready(accordion);

var classDetails = 'js-details';
var classTrigger = 'js-details-trigger';
var classBody = 'js-details-body';
var classLabel = 'js-details-label';
var classExpandedState = 'is-expanded';

var attrShowLbl = 'data-show-label';
var attrHideLbl = 'data-hide-label';
var attrAriaExpanaded = 'aria-expanded';
var attrAriaHidden = 'aria-hidden';


function detailsToggle$1() {
  var nodeList = document.getElementsByClassName(classDetails);
  forEach_1(nodeList, applyDetailsToggle);
  return nodeList;
}

function applyDetailsToggle(elDetails) {
  var elTrigger = elDetails.getElementsByClassName(classTrigger)[0];
  var elBody = elDetails.getElementsByClassName(classBody)[0];
  var elLabel = elDetails.getElementsByClassName(classLabel)[0];
  var toggled = false;

  elTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    toggled = toggle(toggled, elDetails, elTrigger, elBody, elLabel);
    return false;
  });

  return { elDetails: elDetails, elTrigger: elTrigger, elBody: elBody };
}

function open(elDetails, elBody, elLabel, elTrigger) {
  elDetails.classList.add(classExpandedState);
  elLabel.innerHTML = elDetails.getAttribute(attrHideLbl);
  elTrigger.setAttribute(attrAriaExpanaded, true);
  elBody.setAttribute(attrAriaHidden, false);
}

function close(elDetails, elBody, elLabel, elTrigger) {
  elDetails.classList.remove(classExpandedState);
  elLabel.innerHTML = elDetails.getAttribute(attrShowLbl);
  elTrigger.setAttribute(attrAriaExpanaded, false);
  elBody.setAttribute(attrAriaHidden, true);
}

function toggle(toggled, elDetails, elTrigger, elBody, elLabel) {
  !toggled ? open(elDetails, elBody, elLabel, elTrigger) : close(elDetails, elBody, elLabel, elTrigger);
  return !toggled;
}

ready(detailsToggle$1);

var focusableClass = 'js-focusable';
var focusableBoxClass = 'js-focusable-box';
var focusClass = 'has-focus';
var checkedClass = 'is-checked';

var getNextSiblings = function getNextSiblings(e, filter) {
  var siblings = [];
  while (e = e.nextSibling) {
    if (!filter || filter(e)) siblings.push(e);
  }
  return siblings;
};

var getPreviousSiblings = function getPreviousSiblings(e, filter) {
  var siblings = [];
  while (e = e.previousSibling) {
    if (!filter || filter(e)) siblings.push(e);
  }
  return siblings;
};

ready(function () {
  // apply classes to existing elements on page load
  var checkedElements = Array.from(document.getElementsByClassName(focusableClass));
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = checkedElements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var checkedElement = _step.value;

      if (checkedElement.checked === true) {
        checkedElement.closest('.' + focusableBoxClass).classList.add(checkedClass);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  function setFocused(e) {
    e.target.closest('.' + focusableBoxClass).classList.add(focusClass);
  }
  function unsetFocused(e) {
    e.target.closest('.' + focusableBoxClass).classList.remove(focusClass);
  }
  function setChanged(e) {
    e.target.closest('.' + focusableBoxClass).classList.toggle(checkedClass);
    if (e.target.getAttribute('type') === 'radio') {
      // uncheck siblings
      var nextSibs = getNextSiblings(e.target.closest('.js-focusable-box'));
      var prevSibs = getPreviousSiblings(e.target.closest('.js-focusable-box'));
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = nextSibs[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var nextSib = _step2.value;

          if (nextSib.className && nextSib.className.indexOf(focusableBoxClass) >= 0) {
            nextSib.classList.remove(checkedClass);
          }
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = prevSibs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var prevSib = _step3.value;

          if (prevSib.className && prevSib.className.indexOf(focusableBoxClass) >= 0) {
            prevSib.classList.remove(checkedClass);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }
  var _iteratorNormalCompletion4 = true;
  var _didIteratorError4 = false;
  var _iteratorError4 = undefined;

  try {
    for (var _iterator4 = checkedElements[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
      var _checkedElement = _step4.value;

      _checkedElement.addEventListener('focus', setFocused);
      _checkedElement.addEventListener('blur', unsetFocused);
      _checkedElement.addEventListener('change', setChanged);
    }
  } catch (err) {
    _didIteratorError4 = true;
    _iteratorError4 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion4 && _iterator4.return) {
        _iterator4.return();
      }
    } finally {
      if (_didIteratorError4) {
        throw _iteratorError4;
      }
    }
  }
});

}).call(this,require('_process'),typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"_process":2}],2:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}]},{},[1])

