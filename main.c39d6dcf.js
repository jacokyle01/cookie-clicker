// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"interfaces.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resourceNames = void 0;
//TODO: refactor inventory: add Resource type? 
var resourceNames = exports.resourceNames = ["Cursor", "Baker", "Factory", "Lab", "Mine", "Shipment"];
},{}],"ctrl.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _interfaces = require("./interfaces");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
var CookieCtrl = exports.default = /*#__PURE__*/_createClass(function CookieCtrl(redraw) {
  var _this = this;
  _classCallCheck(this, CookieCtrl);
  this.redraw = redraw;
  this.cookieCount = 0;
  this.tps = 10;
  this.elapsedTicks = 0;
  this.resources = {};
  this.clickCookie = function () {
    _this.cookieCount++;
    _this.redraw();
  };
  this.canAfford = function (resource) {
    return _this.resources[resource].price < _this.cookieCount;
  };
  this.canAffordPowerup = function (resource) {
    return _this.resources[resource].powerup.price < _this.cookieCount;
  };
  this.raisePrice = function (resource) {
    var price = _this.resources[resource].price;
    price *= 1.15;
    _this.resources[resource].price = Math.floor(price);
  };
  this.buyResource = function (resource) {
    if (!_this.canAfford(resource)) return;
    _this.cookieCount -= _this.resources[resource].price;
    _this.resources[resource].count++;
    _this.raisePrice(resource);
    _this.redraw();
  };
  this.buyPowerup = function (resource) {
    var powerup = _this.resources[resource].powerup;
    if (!_this.canAffordPowerup(resource) || powerup.status != "Idle") return;
    _this.cookieCount -= _this.resources[resource].powerup.price;
    _this.activatePowerup(resource);
    _this.redraw();
  };
  this.activatePowerup = function (resource) {
    var powerup = _this.resources[resource].powerup;
    powerup.status = "Active";
    powerup.duration = 15;
  };
  this.cooldownPowerup = function (resource) {
    var powerup = _this.resources[resource].powerup;
    powerup.status = "Cooldown";
    powerup.duration = 45;
  };
  this.cookiesPerSecond = function () {
    var total = 0;
    for (var key in _this.resources) {
      var entry = _this.resources[key];
      var powerup = entry.powerup;
      var multiplier = powerup.status == "Active" ? 2 : 1;
      total += entry.count * entry.cps * multiplier;
    }
    return total;
  };
  this.seconds = function () {
    return Math.round(_this.elapsedTicks / _this.tps);
  };
  this.getFormattedTime = function () {
    var hours = Math.floor(_this.seconds() / 3600);
    var minutes = Math.floor(_this.seconds() % 3600 / 60);
    var remainingSeconds = _this.seconds() % 60;
    var formattedTime = "".concat(String(hours).padStart(2, "0"), ":").concat(String(minutes).padStart(2, "0"), ":").concat(String(remainingSeconds).padStart(2, "0"));
    return formattedTime;
  };
  //TODO refactor powerup state change, less condition / move into separate function
  this.tick = function () {
    _this.elapsedTicks++;
    //a second has passed
    if (_this.elapsedTicks % _this.tps == 0) {
      for (var key in _this.resources) {
        var entry = _this.resources[key];
        var powerup = entry.powerup;
        if (powerup.status != "Idle") {
          powerup.duration--;
          if (powerup.duration == 0) {
            powerup.status == "Active" ? _this.cooldownPowerup(key) : powerup.status = "Idle";
          }
        }
      }
    }
    _this.cookieCount += _this.cookiesPerSecond() / _this.tps;
    _this.redraw();
    setTimeout(_this.tick, 1000 / _this.tps);
  };
  //TODO: move this to initialization / config class?
  _interfaces.resourceNames.forEach(function (resourceName, index) {
    var pwrup = {
      price: Math.pow(index + 1, 4) * 100,
      status: "Idle",
      duration: 0
    };
    var inventory = {
      count: 0,
      price: Math.pow(index + 1, 5) * 15 + 10,
      cps: index * index * index * 10 + 10,
      powerup: pwrup
    };
    _this.resources[resourceName] = inventory;
  });
});
},{"./interfaces":"interfaces.ts"}],"../node_modules/snabbdom/build/htmldomapi.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.htmlDomApi = void 0;
function createElement(tagName, options) {
  return document.createElement(tagName, options);
}
function createElementNS(namespaceURI, qualifiedName, options) {
  return document.createElementNS(namespaceURI, qualifiedName, options);
}
function createDocumentFragment() {
  return parseFragment(document.createDocumentFragment());
}
function createTextNode(text) {
  return document.createTextNode(text);
}
function createComment(text) {
  return document.createComment(text);
}
function insertBefore(parentNode, newNode, referenceNode) {
  if (isDocumentFragment(parentNode)) {
    var node = parentNode;
    while (node && isDocumentFragment(node)) {
      var fragment = parseFragment(node);
      node = fragment.parent;
    }
    parentNode = node !== null && node !== void 0 ? node : parentNode;
  }
  if (isDocumentFragment(newNode)) {
    newNode = parseFragment(newNode, parentNode);
  }
  if (referenceNode && isDocumentFragment(referenceNode)) {
    referenceNode = parseFragment(referenceNode).firstChildNode;
  }
  parentNode.insertBefore(newNode, referenceNode);
}
function removeChild(node, child) {
  node.removeChild(child);
}
function appendChild(node, child) {
  if (isDocumentFragment(child)) {
    child = parseFragment(child, node);
  }
  node.appendChild(child);
}
function parentNode(node) {
  if (isDocumentFragment(node)) {
    while (node && isDocumentFragment(node)) {
      var fragment = parseFragment(node);
      node = fragment.parent;
    }
    return node !== null && node !== void 0 ? node : null;
  }
  return node.parentNode;
}
function nextSibling(node) {
  var _a;
  if (isDocumentFragment(node)) {
    var fragment = parseFragment(node);
    var parent = parentNode(fragment);
    if (parent && fragment.lastChildNode) {
      var children = Array.from(parent.childNodes);
      var index = children.indexOf(fragment.lastChildNode);
      return (_a = children[index + 1]) !== null && _a !== void 0 ? _a : null;
    }
    return null;
  }
  return node.nextSibling;
}
function tagName(elm) {
  return elm.tagName;
}
function setTextContent(node, text) {
  node.textContent = text;
}
function getTextContent(node) {
  return node.textContent;
}
function isElement(node) {
  return node.nodeType === 1;
}
function isText(node) {
  return node.nodeType === 3;
}
function isComment(node) {
  return node.nodeType === 8;
}
function isDocumentFragment(node) {
  return node.nodeType === 11;
}
function parseFragment(fragmentNode, parentNode) {
  var _a, _b, _c;
  var fragment = fragmentNode;
  (_a = fragment.parent) !== null && _a !== void 0 ? _a : fragment.parent = parentNode !== null && parentNode !== void 0 ? parentNode : null;
  (_b = fragment.firstChildNode) !== null && _b !== void 0 ? _b : fragment.firstChildNode = fragmentNode.firstChild;
  (_c = fragment.lastChildNode) !== null && _c !== void 0 ? _c : fragment.lastChildNode = fragmentNode.lastChild;
  return fragment;
}
var htmlDomApi = exports.htmlDomApi = {
  createElement: createElement,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createDocumentFragment: createDocumentFragment,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  getTextContent: getTextContent,
  isElement: isElement,
  isText: isText,
  isComment: isComment,
  isDocumentFragment: isDocumentFragment
};
},{}],"../node_modules/snabbdom/build/vnode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.vnode = vnode;
function vnode(sel, data, children, text, elm) {
  var key = data === undefined ? undefined : data.key;
  return {
    sel: sel,
    data: data,
    children: children,
    text: text,
    elm: elm,
    key: key
  };
}
},{}],"../node_modules/snabbdom/build/is.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.array = void 0;
exports.primitive = primitive;
var array = exports.array = Array.isArray;
function primitive(s) {
  return typeof s === "string" || typeof s === "number" || s instanceof String || s instanceof Number;
}
},{}],"../node_modules/snabbdom/build/init.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
var _vnode = require("./vnode");
var is = _interopRequireWildcard(require("./is"));
var _htmldomapi = require("./htmldomapi");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function isUndef(s) {
  return s === undefined;
}
function isDef(s) {
  return s !== undefined;
}
var emptyNode = (0, _vnode.vnode)("", {}, [], undefined, undefined);
function sameVnode(vnode1, vnode2) {
  var _a, _b;
  var isSameKey = vnode1.key === vnode2.key;
  var isSameIs = ((_a = vnode1.data) === null || _a === void 0 ? void 0 : _a.is) === ((_b = vnode2.data) === null || _b === void 0 ? void 0 : _b.is);
  var isSameSel = vnode1.sel === vnode2.sel;
  var isSameTextOrFragment = !vnode1.sel && vnode1.sel === vnode2.sel ? _typeof(vnode1.text) === _typeof(vnode2.text) : true;
  return isSameSel && isSameKey && isSameIs && isSameTextOrFragment;
}
/**
 * @todo Remove this function when the document fragment is considered stable.
 */
function documentFragmentIsNotSupported() {
  throw new Error("The document fragment is not supported on this platform.");
}
function isElement(api, vnode) {
  return api.isElement(vnode);
}
function isDocumentFragment(api, vnode) {
  return api.isDocumentFragment(vnode);
}
function createKeyToOldIdx(children, beginIdx, endIdx) {
  var _a;
  var map = {};
  for (var i = beginIdx; i <= endIdx; ++i) {
    var key = (_a = children[i]) === null || _a === void 0 ? void 0 : _a.key;
    if (key !== undefined) {
      map[key] = i;
    }
  }
  return map;
}
var hooks = ["create", "update", "remove", "destroy", "pre", "post"];
function init(modules, domApi, options) {
  var cbs = {
    create: [],
    update: [],
    remove: [],
    destroy: [],
    pre: [],
    post: []
  };
  var api = domApi !== undefined ? domApi : _htmldomapi.htmlDomApi;
  var _iterator = _createForOfIteratorHelper(hooks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var hook = _step.value;
      var _iterator2 = _createForOfIteratorHelper(modules),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var module = _step2.value;
          var currentHook = module[hook];
          if (currentHook !== undefined) {
            cbs[hook].push(currentHook);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  function emptyNodeAt(elm) {
    var id = elm.id ? "#" + elm.id : "";
    // elm.className doesn't return a string when elm is an SVG element inside a shadowRoot.
    // https://stackoverflow.com/questions/29454340/detecting-classname-of-svganimatedstring
    var classes = elm.getAttribute("class");
    var c = classes ? "." + classes.split(" ").join(".") : "";
    return (0, _vnode.vnode)(api.tagName(elm).toLowerCase() + id + c, {}, [], undefined, elm);
  }
  function emptyDocumentFragmentAt(frag) {
    return (0, _vnode.vnode)(undefined, {}, [], undefined, frag);
  }
  function createRmCb(childElm, listeners) {
    return function rmCb() {
      if (--listeners === 0) {
        var parent = api.parentNode(childElm);
        api.removeChild(parent, childElm);
      }
    };
  }
  function createElm(vnode, insertedVnodeQueue) {
    var _a, _b, _c, _d;
    var i;
    var data = vnode.data;
    if (data !== undefined) {
      var _init = (_a = data.hook) === null || _a === void 0 ? void 0 : _a.init;
      if (isDef(_init)) {
        _init(vnode);
        data = vnode.data;
      }
    }
    var children = vnode.children;
    var sel = vnode.sel;
    if (sel === "!") {
      if (isUndef(vnode.text)) {
        vnode.text = "";
      }
      vnode.elm = api.createComment(vnode.text);
    } else if (sel !== undefined) {
      // Parse selector
      var hashIdx = sel.indexOf("#");
      var dotIdx = sel.indexOf(".", hashIdx);
      var hash = hashIdx > 0 ? hashIdx : sel.length;
      var dot = dotIdx > 0 ? dotIdx : sel.length;
      var tag = hashIdx !== -1 || dotIdx !== -1 ? sel.slice(0, Math.min(hash, dot)) : sel;
      var elm = vnode.elm = isDef(data) && isDef(i = data.ns) ? api.createElementNS(i, tag, data) : api.createElement(tag, data);
      if (hash < dot) elm.setAttribute("id", sel.slice(hash + 1, dot));
      if (dotIdx > 0) elm.setAttribute("class", sel.slice(dot + 1).replace(/\./g, " "));
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      if (is.array(children)) {
        for (i = 0; i < children.length; ++i) {
          var ch = children[i];
          if (ch != null) {
            api.appendChild(elm, createElm(ch, insertedVnodeQueue));
          }
        }
      } else if (is.primitive(vnode.text)) {
        api.appendChild(elm, api.createTextNode(vnode.text));
      }
      var hook = vnode.data.hook;
      if (isDef(hook)) {
        (_b = hook.create) === null || _b === void 0 ? void 0 : _b.call(hook, emptyNode, vnode);
        if (hook.insert) {
          insertedVnodeQueue.push(vnode);
        }
      }
    } else if (((_c = options === null || options === void 0 ? void 0 : options.experimental) === null || _c === void 0 ? void 0 : _c.fragments) && vnode.children) {
      vnode.elm = ((_d = api.createDocumentFragment) !== null && _d !== void 0 ? _d : documentFragmentIsNotSupported)();
      for (i = 0; i < cbs.create.length; ++i) cbs.create[i](emptyNode, vnode);
      for (i = 0; i < vnode.children.length; ++i) {
        var _ch = vnode.children[i];
        if (_ch != null) {
          api.appendChild(vnode.elm, createElm(_ch, insertedVnodeQueue));
        }
      }
    } else {
      vnode.elm = api.createTextNode(vnode.text);
    }
    return vnode.elm;
  }
  function addVnodes(parentElm, before, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (ch != null) {
        api.insertBefore(parentElm, createElm(ch, insertedVnodeQueue), before);
      }
    }
  }
  function invokeDestroyHook(vnode) {
    var _a, _b;
    var data = vnode.data;
    if (data !== undefined) {
      (_b = (_a = data === null || data === void 0 ? void 0 : data.hook) === null || _a === void 0 ? void 0 : _a.destroy) === null || _b === void 0 ? void 0 : _b.call(_a, vnode);
      for (var i = 0; i < cbs.destroy.length; ++i) cbs.destroy[i](vnode);
      if (vnode.children !== undefined) {
        for (var j = 0; j < vnode.children.length; ++j) {
          var child = vnode.children[j];
          if (child != null && typeof child !== "string") {
            invokeDestroyHook(child);
          }
        }
      }
    }
  }
  function removeVnodes(parentElm, vnodes, startIdx, endIdx) {
    var _a, _b;
    for (; startIdx <= endIdx; ++startIdx) {
      var listeners = void 0;
      var rm = void 0;
      var ch = vnodes[startIdx];
      if (ch != null) {
        if (isDef(ch.sel)) {
          invokeDestroyHook(ch);
          listeners = cbs.remove.length + 1;
          rm = createRmCb(ch.elm, listeners);
          for (var i = 0; i < cbs.remove.length; ++i) cbs.remove[i](ch, rm);
          var removeHook = (_b = (_a = ch === null || ch === void 0 ? void 0 : ch.data) === null || _a === void 0 ? void 0 : _a.hook) === null || _b === void 0 ? void 0 : _b.remove;
          if (isDef(removeHook)) {
            removeHook(ch, rm);
          } else {
            rm();
          }
        } else if (ch.children) {
          // Fragment node
          invokeDestroyHook(ch);
          removeVnodes(parentElm, ch.children, 0, ch.children.length - 1);
        } else {
          // Text node
          api.removeChild(parentElm, ch.elm);
        }
      }
    }
  }
  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx;
    var idxInOld;
    var elmToMove;
    var before;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (oldStartVnode == null) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode might have been moved left
      } else if (oldEndVnode == null) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (newStartVnode == null) {
        newStartVnode = newCh[++newStartIdx];
      } else if (newEndVnode == null) {
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldStartVnode.elm, api.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        api.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (oldKeyToIdx === undefined) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }
        idxInOld = oldKeyToIdx[newStartVnode.key];
        if (isUndef(idxInOld)) {
          // New element
          api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
        } else {
          elmToMove = oldCh[idxInOld];
          if (elmToMove.sel !== newStartVnode.sel) {
            api.insertBefore(parentElm, createElm(newStartVnode, insertedVnodeQueue), oldStartVnode.elm);
          } else {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            api.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (newStartIdx <= newEndIdx) {
      before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, before, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    }
    if (oldStartIdx <= oldEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }
  function patchVnode(oldVnode, vnode, insertedVnodeQueue) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var hook = (_a = vnode.data) === null || _a === void 0 ? void 0 : _a.hook;
    (_b = hook === null || hook === void 0 ? void 0 : hook.prepatch) === null || _b === void 0 ? void 0 : _b.call(hook, oldVnode, vnode);
    var elm = vnode.elm = oldVnode.elm;
    if (oldVnode === vnode) return;
    if (vnode.data !== undefined || isDef(vnode.text) && vnode.text !== oldVnode.text) {
      (_c = vnode.data) !== null && _c !== void 0 ? _c : vnode.data = {};
      (_d = oldVnode.data) !== null && _d !== void 0 ? _d : oldVnode.data = {};
      for (var i = 0; i < cbs.update.length; ++i) cbs.update[i](oldVnode, vnode);
      (_g = (_f = (_e = vnode.data) === null || _e === void 0 ? void 0 : _e.hook) === null || _f === void 0 ? void 0 : _f.update) === null || _g === void 0 ? void 0 : _g.call(_f, oldVnode, vnode);
    }
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) updateChildren(elm, oldCh, ch, insertedVnodeQueue);
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) api.setTextContent(elm, "");
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        api.setTextContent(elm, "");
      }
    } else if (oldVnode.text !== vnode.text) {
      if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      }
      api.setTextContent(elm, vnode.text);
    }
    (_h = hook === null || hook === void 0 ? void 0 : hook.postpatch) === null || _h === void 0 ? void 0 : _h.call(hook, oldVnode, vnode);
  }
  return function patch(oldVnode, vnode) {
    var i, elm, parent;
    var insertedVnodeQueue = [];
    for (i = 0; i < cbs.pre.length; ++i) cbs.pre[i]();
    if (isElement(api, oldVnode)) {
      oldVnode = emptyNodeAt(oldVnode);
    } else if (isDocumentFragment(api, oldVnode)) {
      oldVnode = emptyDocumentFragmentAt(oldVnode);
    }
    if (sameVnode(oldVnode, vnode)) {
      patchVnode(oldVnode, vnode, insertedVnodeQueue);
    } else {
      elm = oldVnode.elm;
      parent = api.parentNode(elm);
      createElm(vnode, insertedVnodeQueue);
      if (parent !== null) {
        api.insertBefore(parent, vnode.elm, api.nextSibling(elm));
        removeVnodes(parent, [oldVnode], 0, 0);
      }
    }
    for (i = 0; i < insertedVnodeQueue.length; ++i) {
      insertedVnodeQueue[i].data.hook.insert(insertedVnodeQueue[i]);
    }
    for (i = 0; i < cbs.post.length; ++i) cbs.post[i]();
    return vnode;
  };
}
},{"./vnode":"../node_modules/snabbdom/build/vnode.js","./is":"../node_modules/snabbdom/build/is.js","./htmldomapi":"../node_modules/snabbdom/build/htmldomapi.js"}],"../node_modules/snabbdom/build/h.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNS = addNS;
exports.fragment = fragment;
exports.h = h;
var _vnode = require("./vnode");
var is = _interopRequireWildcard(require("./is"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function addNS(data, children, sel) {
  data.ns = "http://www.w3.org/2000/svg";
  if (sel !== "foreignObject" && children !== undefined) {
    for (var i = 0; i < children.length; ++i) {
      var child = children[i];
      if (typeof child === "string") continue;
      var childData = child.data;
      if (childData !== undefined) {
        addNS(childData, child.children, child.sel);
      }
    }
  }
}
function h(sel, b, c) {
  var data = {};
  var children;
  var text;
  var i;
  if (c !== undefined) {
    if (b !== null) {
      data = b;
    }
    if (is.array(c)) {
      children = c;
    } else if (is.primitive(c)) {
      text = c.toString();
    } else if (c && c.sel) {
      children = [c];
    }
  } else if (b !== undefined && b !== null) {
    if (is.array(b)) {
      children = b;
    } else if (is.primitive(b)) {
      text = b.toString();
    } else if (b && b.sel) {
      children = [b];
    } else {
      data = b;
    }
  }
  if (children !== undefined) {
    for (i = 0; i < children.length; ++i) {
      if (is.primitive(children[i])) children[i] = (0, _vnode.vnode)(undefined, undefined, undefined, children[i], undefined);
    }
  }
  if (sel[0] === "s" && sel[1] === "v" && sel[2] === "g" && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
    addNS(data, children, sel);
  }
  return (0, _vnode.vnode)(sel, data, children, text, undefined);
}
/**
 * @experimental
 */
function fragment(children) {
  var c;
  var text;
  if (is.array(children)) {
    c = children;
  } else if (is.primitive(c)) {
    text = children;
  } else if (c && c.sel) {
    c = [children];
  }
  if (c !== undefined) {
    for (var i = 0; i < c.length; ++i) {
      if (is.primitive(c[i])) c[i] = (0, _vnode.vnode)(undefined, undefined, undefined, c[i], undefined);
    }
  }
  return (0, _vnode.vnode)(undefined, {}, c, text, undefined);
}
},{"./vnode":"../node_modules/snabbdom/build/vnode.js","./is":"../node_modules/snabbdom/build/is.js"}],"../node_modules/snabbdom/build/thunk.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.thunk = void 0;
var _h = require("./h");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function copyToThunk(vnode, thunk) {
  var _a;
  var ns = (_a = thunk.data) === null || _a === void 0 ? void 0 : _a.ns;
  vnode.data.fn = thunk.data.fn;
  vnode.data.args = thunk.data.args;
  thunk.data = vnode.data;
  thunk.children = vnode.children;
  thunk.text = vnode.text;
  thunk.elm = vnode.elm;
  if (ns) (0, _h.addNS)(thunk.data, thunk.children, thunk.sel);
}
function init(thunk) {
  var cur = thunk.data;
  var vnode = cur.fn.apply(cur, _toConsumableArray(cur.args));
  copyToThunk(vnode, thunk);
}
function prepatch(oldVnode, thunk) {
  var i;
  var old = oldVnode.data;
  var cur = thunk.data;
  var oldArgs = old.args;
  var args = cur.args;
  if (old.fn !== cur.fn || oldArgs.length !== args.length) {
    copyToThunk(cur.fn.apply(cur, _toConsumableArray(args)), thunk);
    return;
  }
  for (i = 0; i < args.length; ++i) {
    if (oldArgs[i] !== args[i]) {
      copyToThunk(cur.fn.apply(cur, _toConsumableArray(args)), thunk);
      return;
    }
  }
  copyToThunk(oldVnode, thunk);
}
var thunk = exports.thunk = function thunk(sel, key, fn, args) {
  if (args === undefined) {
    args = fn;
    fn = key;
    key = undefined;
  }
  return (0, _h.h)(sel, {
    key: key,
    hook: {
      init: init,
      prepatch: prepatch
    },
    fn: fn,
    args: args
  });
};
},{"./h":"../node_modules/snabbdom/build/h.js"}],"../node_modules/snabbdom/build/helpers/attachto.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attachTo = attachTo;
function pre(vnode, newVnode) {
  var attachData = vnode.data.attachData;
  // Copy created placeholder and real element from old vnode
  newVnode.data.attachData.placeholder = attachData.placeholder;
  newVnode.data.attachData.real = attachData.real;
  // Mount real element in vnode so the patch process operates on it
  vnode.elm = vnode.data.attachData.real;
}
function post(_, vnode) {
  // Mount dummy placeholder in vnode so potential reorders use it
  vnode.elm = vnode.data.attachData.placeholder;
}
function destroy(vnode) {
  // Remove placeholder
  if (vnode.elm !== undefined) {
    vnode.elm.parentNode.removeChild(vnode.elm);
  }
  // Remove real element from where it was inserted
  vnode.elm = vnode.data.attachData.real;
}
function create(_, vnode) {
  var real = vnode.elm;
  var attachData = vnode.data.attachData;
  var placeholder = document.createElement("span");
  // Replace actual element with dummy placeholder
  // Snabbdom will then insert placeholder instead
  vnode.elm = placeholder;
  attachData.target.appendChild(real);
  attachData.real = real;
  attachData.placeholder = placeholder;
}
function attachTo(target, vnode) {
  if (vnode.data === undefined) vnode.data = {};
  if (vnode.data.hook === undefined) vnode.data.hook = {};
  var data = vnode.data;
  var hook = vnode.data.hook;
  data.attachData = {
    target: target,
    placeholder: undefined,
    real: undefined
  };
  hook.create = create;
  hook.prepatch = pre;
  hook.postpatch = post;
  hook.destroy = destroy;
  return vnode;
}
},{}],"../node_modules/snabbdom/build/tovnode.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toVNode = toVNode;
var _h = require("./h");
var _vnode = require("./vnode");
var _htmldomapi = require("./htmldomapi");
function toVNode(node, domApi) {
  var api = domApi !== undefined ? domApi : _htmldomapi.htmlDomApi;
  var text;
  if (api.isElement(node)) {
    var id = node.id ? "#" + node.id : "";
    var cn = node.getAttribute("class");
    var c = cn ? "." + cn.split(" ").join(".") : "";
    var sel = api.tagName(node).toLowerCase() + id + c;
    var attrs = {};
    var dataset = {};
    var data = {};
    var children = [];
    var name;
    var i, n;
    var elmAttrs = node.attributes;
    var elmChildren = node.childNodes;
    for (i = 0, n = elmAttrs.length; i < n; i++) {
      name = elmAttrs[i].nodeName;
      if (name[0] === "d" && name[1] === "a" && name[2] === "t" && name[3] === "a" && name[4] === "-") {
        dataset[name.slice(5)] = elmAttrs[i].nodeValue || "";
      } else if (name !== "id" && name !== "class") {
        attrs[name] = elmAttrs[i].nodeValue;
      }
    }
    for (i = 0, n = elmChildren.length; i < n; i++) {
      children.push(toVNode(elmChildren[i], domApi));
    }
    if (Object.keys(attrs).length > 0) data.attrs = attrs;
    if (Object.keys(dataset).length > 0) data.dataset = dataset;
    if (sel[0] === "s" && sel[1] === "v" && sel[2] === "g" && (sel.length === 3 || sel[3] === "." || sel[3] === "#")) {
      (0, _h.addNS)(data, children, sel);
    }
    return (0, _vnode.vnode)(sel, data, children, undefined, node);
  } else if (api.isText(node)) {
    text = api.getTextContent(node);
    return (0, _vnode.vnode)(undefined, undefined, undefined, text, node);
  } else if (api.isComment(node)) {
    text = api.getTextContent(node);
    return (0, _vnode.vnode)("!", {}, [], text, node);
  } else {
    return (0, _vnode.vnode)("", {}, [], undefined, node);
  }
}
},{"./h":"../node_modules/snabbdom/build/h.js","./vnode":"../node_modules/snabbdom/build/vnode.js","./htmldomapi":"../node_modules/snabbdom/build/htmldomapi.js"}],"../node_modules/snabbdom/build/hooks.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
},{}],"../node_modules/snabbdom/build/modules/attributes.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.attributesModule = void 0;
var xlinkNS = "http://www.w3.org/1999/xlink";
var xmlNS = "http://www.w3.org/XML/1998/namespace";
var colonChar = 58;
var xChar = 120;
function updateAttrs(oldVnode, vnode) {
  var key;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs;
  var attrs = vnode.data.attrs;
  if (!oldAttrs && !attrs) return;
  if (oldAttrs === attrs) return;
  oldAttrs = oldAttrs || {};
  attrs = attrs || {};
  // update modified attributes, add new attributes
  for (key in attrs) {
    var cur = attrs[key];
    var old = oldAttrs[key];
    if (old !== cur) {
      if (cur === true) {
        elm.setAttribute(key, "");
      } else if (cur === false) {
        elm.removeAttribute(key);
      } else {
        if (key.charCodeAt(0) !== xChar) {
          elm.setAttribute(key, cur);
        } else if (key.charCodeAt(3) === colonChar) {
          // Assume xml namespace
          elm.setAttributeNS(xmlNS, key, cur);
        } else if (key.charCodeAt(5) === colonChar) {
          // Assume xlink namespace
          elm.setAttributeNS(xlinkNS, key, cur);
        } else {
          elm.setAttribute(key, cur);
        }
      }
    }
  }
  // remove removed attributes
  // use `in` operator since the previous `for` iteration uses it (.i.e. add even attributes with undefined value)
  // the other option is to remove all attributes with value == undefined
  for (key in oldAttrs) {
    if (!(key in attrs)) {
      elm.removeAttribute(key);
    }
  }
}
var attributesModule = exports.attributesModule = {
  create: updateAttrs,
  update: updateAttrs
};
},{}],"../node_modules/snabbdom/build/modules/class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.classModule = void 0;
function updateClass(oldVnode, vnode) {
  var cur;
  var name;
  var elm = vnode.elm;
  var oldClass = oldVnode.data.class;
  var klass = vnode.data.class;
  if (!oldClass && !klass) return;
  if (oldClass === klass) return;
  oldClass = oldClass || {};
  klass = klass || {};
  for (name in oldClass) {
    if (oldClass[name] && !Object.prototype.hasOwnProperty.call(klass, name)) {
      // was `true` and now not provided
      elm.classList.remove(name);
    }
  }
  for (name in klass) {
    cur = klass[name];
    if (cur !== oldClass[name]) {
      elm.classList[cur ? "add" : "remove"](name);
    }
  }
}
var classModule = exports.classModule = {
  create: updateClass,
  update: updateClass
};
},{}],"../node_modules/snabbdom/build/modules/dataset.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.datasetModule = void 0;
var CAPS_REGEX = /[A-Z]/g;
function updateDataset(oldVnode, vnode) {
  var elm = vnode.elm;
  var oldDataset = oldVnode.data.dataset;
  var dataset = vnode.data.dataset;
  var key;
  if (!oldDataset && !dataset) return;
  if (oldDataset === dataset) return;
  oldDataset = oldDataset || {};
  dataset = dataset || {};
  var d = elm.dataset;
  for (key in oldDataset) {
    if (!dataset[key]) {
      if (d) {
        if (key in d) {
          delete d[key];
        }
      } else {
        elm.removeAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase());
      }
    }
  }
  for (key in dataset) {
    if (oldDataset[key] !== dataset[key]) {
      if (d) {
        d[key] = dataset[key];
      } else {
        elm.setAttribute("data-" + key.replace(CAPS_REGEX, "-$&").toLowerCase(), dataset[key]);
      }
    }
  }
}
var datasetModule = exports.datasetModule = {
  create: updateDataset,
  update: updateDataset
};
},{}],"../node_modules/snabbdom/build/modules/eventlisteners.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.eventListenersModule = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function invokeHandler(handler, vnode, event) {
  if (typeof handler === "function") {
    // call function handler
    handler.call(vnode, event, vnode);
  } else if (_typeof(handler) === "object") {
    // call multiple handlers
    for (var i = 0; i < handler.length; i++) {
      invokeHandler(handler[i], vnode, event);
    }
  }
}
function handleEvent(event, vnode) {
  var name = event.type;
  var on = vnode.data.on;
  // call event handler(s) if exists
  if (on && on[name]) {
    invokeHandler(on[name], vnode, event);
  }
}
function createListener() {
  return function handler(event) {
    handleEvent(event, handler.vnode);
  };
}
function updateEventListeners(oldVnode, vnode) {
  var oldOn = oldVnode.data.on;
  var oldListener = oldVnode.listener;
  var oldElm = oldVnode.elm;
  var on = vnode && vnode.data.on;
  var elm = vnode && vnode.elm;
  var name;
  // optimization for reused immutable handlers
  if (oldOn === on) {
    return;
  }
  // remove existing listeners which no longer used
  if (oldOn && oldListener) {
    // if element changed or deleted we remove all existing listeners unconditionally
    if (!on) {
      for (name in oldOn) {
        // remove listener if element was changed or existing listeners removed
        oldElm.removeEventListener(name, oldListener, false);
      }
    } else {
      for (name in oldOn) {
        // remove listener if existing listener removed
        if (!on[name]) {
          oldElm.removeEventListener(name, oldListener, false);
        }
      }
    }
  }
  // add new listeners which has not already attached
  if (on) {
    // reuse existing listener or create new
    var listener = vnode.listener = oldVnode.listener || createListener();
    // update vnode for listener
    listener.vnode = vnode;
    // if element changed or added we add all needed listeners unconditionally
    if (!oldOn) {
      for (name in on) {
        // add listener if element was changed or new listeners added
        elm.addEventListener(name, listener, false);
      }
    } else {
      for (name in on) {
        // add listener if new listener added
        if (!oldOn[name]) {
          elm.addEventListener(name, listener, false);
        }
      }
    }
  }
}
var eventListenersModule = exports.eventListenersModule = {
  create: updateEventListeners,
  update: updateEventListeners,
  destroy: updateEventListeners
};
},{}],"../node_modules/snabbdom/build/modules/props.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsModule = void 0;
function updateProps(oldVnode, vnode) {
  var key;
  var cur;
  var old;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.props;
  var props = vnode.data.props;
  if (!oldProps && !props) return;
  if (oldProps === props) return;
  oldProps = oldProps || {};
  props = props || {};
  for (key in props) {
    cur = props[key];
    old = oldProps[key];
    if (old !== cur && (key !== "value" || elm[key] !== cur)) {
      elm[key] = cur;
    }
  }
}
var propsModule = exports.propsModule = {
  create: updateProps,
  update: updateProps
};
},{}],"../node_modules/snabbdom/build/modules/style.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styleModule = void 0;
// Bindig `requestAnimationFrame` like this fixes a bug in IE/Edge. See #360 and #409.
var raf = typeof window !== "undefined" && window.requestAnimationFrame.bind(window) || setTimeout;
var nextFrame = function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
};
var reflowForced = false;
function setNextFrame(obj, prop, val) {
  nextFrame(function () {
    obj[prop] = val;
  });
}
function updateStyle(oldVnode, vnode) {
  var cur;
  var name;
  var elm = vnode.elm;
  var oldStyle = oldVnode.data.style;
  var style = vnode.data.style;
  if (!oldStyle && !style) return;
  if (oldStyle === style) return;
  oldStyle = oldStyle || {};
  style = style || {};
  var oldHasDel = ("delayed" in oldStyle);
  for (name in oldStyle) {
    if (!style[name]) {
      if (name[0] === "-" && name[1] === "-") {
        elm.style.removeProperty(name);
      } else {
        elm.style[name] = "";
      }
    }
  }
  for (name in style) {
    cur = style[name];
    if (name === "delayed" && style.delayed) {
      for (var name2 in style.delayed) {
        cur = style.delayed[name2];
        if (!oldHasDel || cur !== oldStyle.delayed[name2]) {
          setNextFrame(elm.style, name2, cur);
        }
      }
    } else if (name !== "remove" && cur !== oldStyle[name]) {
      if (name[0] === "-" && name[1] === "-") {
        elm.style.setProperty(name, cur);
      } else {
        elm.style[name] = cur;
      }
    }
  }
}
function applyDestroyStyle(vnode) {
  var style;
  var name;
  var elm = vnode.elm;
  var s = vnode.data.style;
  if (!s || !(style = s.destroy)) return;
  for (name in style) {
    elm.style[name] = style[name];
  }
}
function applyRemoveStyle(vnode, rm) {
  var s = vnode.data.style;
  if (!s || !s.remove) {
    rm();
    return;
  }
  if (!reflowForced) {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    vnode.elm.offsetLeft;
    reflowForced = true;
  }
  var name;
  var elm = vnode.elm;
  var i = 0;
  var style = s.remove;
  var amount = 0;
  var applied = [];
  for (name in style) {
    applied.push(name);
    elm.style[name] = style[name];
  }
  var compStyle = getComputedStyle(elm);
  var props = compStyle["transition-property"].split(", ");
  for (; i < props.length; ++i) {
    if (applied.indexOf(props[i]) !== -1) amount++;
  }
  elm.addEventListener("transitionend", function (ev) {
    if (ev.target === elm) --amount;
    if (amount === 0) rm();
  });
}
function forceReflow() {
  reflowForced = false;
}
var styleModule = exports.styleModule = {
  pre: forceReflow,
  create: updateStyle,
  update: updateStyle,
  destroy: applyDestroyStyle,
  remove: applyRemoveStyle
};
},{}],"../node_modules/snabbdom/build/jsx.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Fragment = Fragment;
exports.jsx = jsx;
var _vnode = require("./vnode");
var _h = require("./h");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; } /* eslint-disable @typescript-eslint/no-namespace, import/export */
function Fragment(data) {
  for (var _len = arguments.length, children = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    children[_key - 1] = arguments[_key];
  }
  var flatChildren = flattenAndFilter(children, []);
  if (flatChildren.length === 1 && !flatChildren[0].sel && flatChildren[0].text) {
    // only child is a simple text node, pass as text for a simpler vtree
    return (0, _vnode.vnode)(undefined, undefined, undefined, flatChildren[0].text, undefined);
  } else {
    return (0, _vnode.vnode)(undefined, data !== null && data !== void 0 ? data : {}, flatChildren, undefined, undefined);
  }
}
function flattenAndFilter(children, flattened) {
  var _iterator = _createForOfIteratorHelper(children),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var child = _step.value;
      // filter out falsey children, except 0 since zero can be a valid value e.g inside a chart
      if (child !== undefined && child !== null && child !== false && child !== "") {
        if (Array.isArray(child)) {
          flattenAndFilter(child, flattened);
        } else if (typeof child === "string" || typeof child === "number" || typeof child === "boolean") {
          flattened.push((0, _vnode.vnode)(undefined, undefined, undefined, String(child), undefined));
        } else {
          flattened.push(child);
        }
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return flattened;
}
/**
 * jsx/tsx compatible factory function
 * see: https://www.typescriptlang.org/docs/handbook/jsx.html#factory-functions
 */
function jsx(tag, data) {
  for (var _len2 = arguments.length, children = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    children[_key2 - 2] = arguments[_key2];
  }
  var flatChildren = flattenAndFilter(children, []);
  if (typeof tag === "function") {
    // tag is a function component
    return tag(data, flatChildren);
  } else {
    if (flatChildren.length === 1 && !flatChildren[0].sel && flatChildren[0].text) {
      // only child is a simple text node, pass as text for a simpler vtree
      return (0, _h.h)(tag, data, flatChildren[0].text);
    } else {
      return (0, _h.h)(tag, data, flatChildren);
    }
  }
}
(function (jsx) {})(jsx || (exports.jsx = jsx = {}));
},{"./vnode":"../node_modules/snabbdom/build/vnode.js","./h":"../node_modules/snabbdom/build/h.js"}],"../node_modules/snabbdom/build/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  htmlDomApi: true,
  init: true,
  thunk: true,
  vnode: true,
  attachTo: true,
  array: true,
  primitive: true,
  toVNode: true,
  h: true,
  fragment: true,
  attributesModule: true,
  classModule: true,
  datasetModule: true,
  eventListenersModule: true,
  propsModule: true,
  styleModule: true,
  jsx: true,
  Fragment: true
};
Object.defineProperty(exports, "Fragment", {
  enumerable: true,
  get: function () {
    return _jsx.Fragment;
  }
});
Object.defineProperty(exports, "array", {
  enumerable: true,
  get: function () {
    return _is.array;
  }
});
Object.defineProperty(exports, "attachTo", {
  enumerable: true,
  get: function () {
    return _attachto.attachTo;
  }
});
Object.defineProperty(exports, "attributesModule", {
  enumerable: true,
  get: function () {
    return _attributes.attributesModule;
  }
});
Object.defineProperty(exports, "classModule", {
  enumerable: true,
  get: function () {
    return _class.classModule;
  }
});
Object.defineProperty(exports, "datasetModule", {
  enumerable: true,
  get: function () {
    return _dataset.datasetModule;
  }
});
Object.defineProperty(exports, "eventListenersModule", {
  enumerable: true,
  get: function () {
    return _eventlisteners.eventListenersModule;
  }
});
Object.defineProperty(exports, "fragment", {
  enumerable: true,
  get: function () {
    return _h.fragment;
  }
});
Object.defineProperty(exports, "h", {
  enumerable: true,
  get: function () {
    return _h.h;
  }
});
Object.defineProperty(exports, "htmlDomApi", {
  enumerable: true,
  get: function () {
    return _htmldomapi.htmlDomApi;
  }
});
Object.defineProperty(exports, "init", {
  enumerable: true,
  get: function () {
    return _init.init;
  }
});
Object.defineProperty(exports, "jsx", {
  enumerable: true,
  get: function () {
    return _jsx.jsx;
  }
});
Object.defineProperty(exports, "primitive", {
  enumerable: true,
  get: function () {
    return _is.primitive;
  }
});
Object.defineProperty(exports, "propsModule", {
  enumerable: true,
  get: function () {
    return _props.propsModule;
  }
});
Object.defineProperty(exports, "styleModule", {
  enumerable: true,
  get: function () {
    return _style.styleModule;
  }
});
Object.defineProperty(exports, "thunk", {
  enumerable: true,
  get: function () {
    return _thunk.thunk;
  }
});
Object.defineProperty(exports, "toVNode", {
  enumerable: true,
  get: function () {
    return _tovnode.toVNode;
  }
});
Object.defineProperty(exports, "vnode", {
  enumerable: true,
  get: function () {
    return _vnode.vnode;
  }
});
var _htmldomapi = require("./htmldomapi");
var _init = require("./init");
var _thunk = require("./thunk");
var _vnode = require("./vnode");
var _attachto = require("./helpers/attachto");
var _is = require("./is");
var _tovnode = require("./tovnode");
var _h = require("./h");
var _hooks = require("./hooks");
Object.keys(_hooks).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  if (key in exports && exports[key] === _hooks[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _hooks[key];
    }
  });
});
var _attributes = require("./modules/attributes");
var _class = require("./modules/class");
var _dataset = require("./modules/dataset");
var _eventlisteners = require("./modules/eventlisteners");
var _props = require("./modules/props");
var _style = require("./modules/style");
var _jsx = require("./jsx");
},{"./htmldomapi":"../node_modules/snabbdom/build/htmldomapi.js","./init":"../node_modules/snabbdom/build/init.js","./thunk":"../node_modules/snabbdom/build/thunk.js","./vnode":"../node_modules/snabbdom/build/vnode.js","./helpers/attachto":"../node_modules/snabbdom/build/helpers/attachto.js","./is":"../node_modules/snabbdom/build/is.js","./tovnode":"../node_modules/snabbdom/build/tovnode.js","./h":"../node_modules/snabbdom/build/h.js","./hooks":"../node_modules/snabbdom/build/hooks.js","./modules/attributes":"../node_modules/snabbdom/build/modules/attributes.js","./modules/class":"../node_modules/snabbdom/build/modules/class.js","./modules/dataset":"../node_modules/snabbdom/build/modules/dataset.js","./modules/eventlisteners":"../node_modules/snabbdom/build/modules/eventlisteners.js","./modules/props":"../node_modules/snabbdom/build/modules/props.js","./modules/style":"../node_modules/snabbdom/build/modules/style.js","./jsx":"../node_modules/snabbdom/build/jsx.js"}],"svg.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.svgs = exports.shipment = exports.mine = exports.lightning = exports.lab = exports.factory = exports.cursor = exports.cookie = exports.baker = void 0;
var _snabbdom = require("snabbdom");
var factory = exports.factory = function factory() {
  return (0, _snabbdom.h)("svg.shop-svg", {
    attrs: {
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }
  }, [(0, _snabbdom.h)("path", {
    attrs: {
      d: "M 352.586 45.736 C 352.245 49.456, 349.031 96.805, 345.444 150.955 C 341.857 205.106, 338.827 249.488, 338.711 249.582 C 337.719 250.387, 327.186 256, 326.669 256 C 326.301 256, 326 241.150, 326 223 C 326 204.850, 325.828 190, 325.618 190 C 325.408 190, 298.076 204.680, 264.880 222.623 C 231.684 240.565, 203.956 255.463, 203.262 255.730 C 202.262 256.114, 202 249.331, 202 223.024 C 202 204.365, 201.615 189.979, 201.121 190.167 C 200.638 190.350, 169.138 207.316, 131.121 227.869 L 62 265.239 62 361.119 L 62 457 46 457 L 30 457 30 465 L 30 473 256 473 L 482 473 482 465 L 482 457 466 457 L 450 457 450 323.500 C 450 250.075, 449.762 190, 449.471 190 C 449.180 190, 444.383 192.478, 438.811 195.506 C 433.239 198.535, 428.570 200.897, 428.436 200.756 C 428.303 200.615, 425.787 164.275, 422.847 120 L 417.500 39.500 385.353 39.236 L 353.206 38.973 352.586 45.736 M 368.553 56.250 C 368.341 56.938, 367.917 61.888, 367.611 67.250 L 367.054 77 385.027 77 L 403 77 402.993 72.750 C 402.989 70.412, 402.699 65.463, 402.348 61.750 L 401.711 55 385.324 55 C 373.086 55, 368.840 55.317, 368.553 56.250 M 365.987 94.750 C 365.980 95.162, 363.755 127.888, 361.043 167.472 C 358.330 207.057, 356.216 239.550, 356.345 239.678 C 356.632 239.966, 410.186 211.091, 411.301 210.047 C 411.742 209.635, 410.392 183.356, 408.301 151.649 L 404.500 94 385.250 94 C 374.663 94, 365.994 94.338, 365.987 94.750 M 132.500 246.075 L 79.500 274.707 79.245 365.853 L 78.989 457 255.995 457 L 433 457 433 337.500 C 433 271.775, 432.807 218, 432.571 218 C 432.335 218, 405.147 232.625, 372.153 250.500 C 339.159 268.375, 311.683 283, 311.095 283 C 310.365 283, 309.944 272.638, 309.763 250.215 L 309.500 217.429 249 250.171 C 215.725 268.179, 187.944 282.933, 187.263 282.957 C 186.311 282.990, 185.966 275.474, 185.763 250.221 L 185.500 217.442 132.500 246.075 M 114.460 314.243 C 114.193 314.940, 114.092 331.483, 114.237 351.005 L 114.500 386.500 151.262 386.762 L 188.025 387.025 187.762 350.262 L 187.500 313.500 151.223 313.237 C 122.661 313.031, 114.843 313.245, 114.460 314.243 M 219.679 313.654 C 219.306 314.028, 219 330.683, 219 350.667 L 219 387 256.012 387 L 293.025 387 292.762 350.250 L 292.500 313.500 256.429 313.238 C 236.590 313.093, 220.052 313.281, 219.679 313.654 M 324.679 313.654 C 324.306 314.028, 324 330.689, 324 350.679 L 324 387.025 360.750 386.762 L 397.500 386.500 397.500 350 L 397.500 313.500 361.429 313.238 C 341.590 313.093, 325.052 313.281, 324.679 313.654 M 131 350.500 L 131 371 151.500 371 L 172 371 172 350.500 L 172 330 151.500 330 L 131 330 131 350.500 M 236 350.500 L 236 371 256 371 L 276 371 276 350.500 L 276 330 256 330 L 236 330 236 350.500 M 340 350.500 L 340 371 360.500 371 L 381 371 381 350.500 L 381 330 360.500 330 L 340 330 340 350.500",
      stroke: "none",
      fill: "#BEBEBD",
      "fill-rule": "evenodd"
    }
  })
  // h('path', {
  // 	attrs: {
  // 		'd': '',
  // 		'stroke': 'none',
  // 		'fill': '#080404',
  // 		'fill-rule': 'evenodd'
  // 	}
  // }),
  ]);
};

var baker = exports.baker = function baker() {
  return (0, _snabbdom.h)("svg.shop-svg", {
    attrs: {
      width: "512",
      height: "512",
      viewBox: "0 0 512 512"
    }
  }, [(0, _snabbdom.h)("path", {
    attrs: {
      d: "M 240.669 75.594 C 219.071 79.497, 197.894 94.001, 186.358 112.791 C 183.755 117.031, 181.488 120.685, 181.319 120.911 C 181.150 121.136, 180.222 120.613, 179.256 119.748 C 175.997 116.828, 163.051 110.932, 155.249 108.815 C 144.921 106.013, 124.503 105.748, 115.121 108.294 C 99.644 112.494, 89.015 118.308, 78.186 128.496 C 60.964 144.698, 52.364 163.088, 51.291 186 C 50.082 211.832, 59.257 234.769, 77.681 251.975 C 93.533 266.780, 114.380 275, 136.072 275 L 141 275 141 353.865 C 141 432.137, 141.016 432.750, 143.073 435.365 L 145.145 438 256.073 438 C 365.667 438, 367.024 437.976, 369 436 C 370.967 434.033, 371 432.667, 371 354 L 371 274 380.340 274 C 414.912 274, 447.511 248.980, 457.910 214.465 C 470.395 173.031, 448.122 127.533, 407.731 111.957 C 383.888 102.762, 359.761 104.613, 336.434 117.427 L 330.369 120.759 327.934 116.156 C 323.977 108.673, 315.343 98.558, 307.747 92.506 C 288.555 77.215, 264.819 71.231, 240.669 75.594 M 239.175 89.964 C 218.841 95.470, 200.836 110.980, 192.994 129.746 C 188.417 140.699, 184.938 141.412, 174.500 133.537 C 158.676 121.599, 134.571 117.117, 115.831 122.627 C 98.392 127.756, 81.113 142.100, 73.222 158 C 65.734 173.090, 63.586 187.214, 66.460 202.478 C 72.472 234.413, 98.013 257.577, 129.525 259.672 C 144.465 260.665, 160.207 256.531, 172.460 248.395 C 178.311 244.510, 181.831 244.493, 184.523 248.337 C 186.814 251.607, 186.302 254.916, 183.031 257.971 C 179.519 261.251, 166.282 268.276, 160.250 270.060 L 156 271.317 156 320.158 L 156 369 186.500 369 L 217 369 217 348.955 C 217 329.005, 217.012 328.897, 219.455 326.455 C 222.453 323.456, 224.905 323.351, 228.365 326.073 L 231 328.145 231 348.573 L 231 369 240 369 L 249 369 249 349.111 C 249 331.272, 249.190 328.987, 250.844 326.944 C 253.120 324.133, 258.136 323.908, 260.987 326.488 C 262.879 328.200, 263 329.536, 263 348.655 L 263 369 272 369 L 281 369 281.015 348.750 C 281.024 337.613, 281.361 328.005, 281.765 327.400 C 282.768 325.898, 286.516 324, 288.480 324 C 289.366 324, 291.195 325.105, 292.545 326.455 C 294.988 328.897, 295 329.005, 295 348.955 L 295 369 325.500 369 L 356 369 356 320.158 L 356 271.317 351.750 270.067 C 345.411 268.203, 330.043 259.870, 327.886 257.128 C 325.500 254.094, 325.485 250.858, 327.844 247.944 C 330.569 244.579, 334.565 245.068, 342.259 249.709 C 345.945 251.932, 352.907 255.045, 357.731 256.626 C 365.375 259.131, 367.976 259.495, 378 259.464 C 397.917 259.402, 412.600 253.372, 426.334 239.613 C 452.717 213.183, 453.470 169.627, 428.011 142.630 C 415.896 129.785, 402.656 122.962, 385.682 120.818 C 377.616 119.799, 374.770 119.855, 367.308 121.178 C 355.917 123.197, 345.159 127.735, 337 133.965 C 327.040 141.569, 323.687 140.778, 319.024 129.726 C 311.480 111.845, 297.192 98.573, 277.817 91.452 C 267.648 87.714, 249.995 87.035, 239.175 89.964 M 156 403.500 L 156 424 256.500 424 L 357 424 357 403.500 L 357 383 256.500 383 L 156 383 156 403.500",
      stroke: "none",
      fill: "#BEBEBD",
      "fill-rule": "evenodd"
    }
  })]);
};
var cursor = exports.cursor = function cursor() {
  return (0, _snabbdom.h)('svg.shop-svg', {
    attrs: {
      'width': '800',
      'height': '800',
      'viewBox': '0 0 800 800'
    }
  }, [(0, _snabbdom.h)('path', {
    attrs: {
      'd': 'M 199.500 59.343 C 185.714 63.895, 178.065 73.876, 178.022 87.371 C 178.010 91.150, 180.692 145.375, 183.982 207.871 C 187.272 270.367, 193.111 382.025, 196.957 456 C 205.692 624.007, 204.889 610.584, 206.566 616.636 C 208.451 623.437, 215.191 630.948, 222.221 634.082 C 229.418 637.291, 239.543 637.283, 246.246 634.063 C 249.666 632.421, 263.835 619.376, 296.944 587.392 C 322.218 562.976, 343.058 543, 343.256 543 C 343.454 543, 363.165 584.910, 387.058 636.134 C 420.931 708.752, 431.290 730.081, 434.085 732.964 C 439.700 738.756, 446.196 741.440, 454.500 741.400 C 461.473 741.366, 461.663 741.291, 504.366 721.433 C 551.410 699.557, 554.838 697.453, 558.927 687.949 C 560.426 684.464, 561.125 680.814, 561.125 676.473 C 561.125 668.737, 565.187 678.055, 514.093 568.587 C 492.038 521.334, 474.187 482.479, 474.424 482.242 C 474.661 482.006, 497.725 479.398, 525.677 476.448 C 601.770 468.418, 601.060 468.512, 606.629 465.672 C 620.428 458.632, 626.094 441.603, 619.377 427.359 C 616.919 422.146, 617.712 422.898, 540.499 352.515 C 465.744 284.373, 377.868 204.175, 285.233 119.553 C 245.207 82.990, 223.209 63.579, 219.733 61.758 C 213.440 58.460, 205.166 57.473, 199.500 59.343 M 204 82.288 C 202.062 83.264, 201.436 84.441, 201.214 87.523 C 201.057 89.711, 205.003 169.125, 209.983 264 C 214.963 358.875, 221.054 474.889, 223.519 521.808 C 225.983 568.728, 228 607.765, 228 608.558 C 228 610.694, 231.694 614, 234.080 614 C 236.167 614, 239.604 610.770, 316.324 536.699 C 335.010 518.659, 350.612 504.259, 350.995 504.699 C 351.378 505.140, 371.171 547.350, 394.979 598.500 C 452.149 721.328, 450.388 717.671, 452.737 718.416 C 454.106 718.851, 467.537 713.069, 496.110 699.744 C 536.292 681.005, 537.508 680.355, 537.779 677.471 C 537.984 675.285, 524.994 646.508, 488.591 568.500 C 459.739 506.673, 439.620 462.403, 440.313 462.268 C 440.966 462.140, 476.147 458.398, 518.494 453.952 C 601.132 445.277, 599 445.648, 599 439.905 C 599 437.493, 589.214 428.193, 525.750 370.292 C 485.462 333.536, 398.763 254.422, 333.084 194.482 C 267.406 134.542, 212.306 84.487, 210.640 83.250 C 207.116 80.632, 207.251 80.652, 204 82.288',
      'stroke': 'none',
      'fill': '#BEBEBD',
      'fill-rule': 'evenodd'
    }
  })]);
};
var cookie = exports.cookie = function cookie() {
  return (0, _snabbdom.h)("svg#cookie-svg", {
    attrs: {
      width: "920",
      height: "122",
      viewBox: "0 0 920 512"
    }
  }, [(0, _snabbdom.h)("path", {
    attrs: {
      d: "M 437.075 1.037 C 349.589 9.502, 273.062 61.012, 232.868 138.487 C 194.548 212.352, 194.573 299.188, 232.936 373.567 C 283.929 472.434, 394.427 527.260, 504 508.061 C 572.826 496.001, 633.963 455.948, 673.293 397.150 C 682.044 384.067, 695.118 358.396, 700.419 343.885 C 712.447 310.962, 717.893 271.236, 715.055 237.116 C 712.236 203.211, 709.034 196.500, 695.677 196.500 C 688.113 196.500, 685.271 198.293, 680.864 205.844 C 676.810 212.792, 672.174 217.349, 665.717 220.736 C 661.222 223.094, 659.324 223.472, 652 223.472 C 644.727 223.472, 642.778 223.089, 638.500 220.820 C 631.398 217.053, 625.759 210.709, 621.548 201.746 C 618.442 195.136, 617.292 193.680, 613.748 191.872 C 610.063 189.991, 608.792 189.850, 602.546 190.625 C 598.671 191.106, 591 191.457, 585.500 191.405 C 569.066 191.248, 555.393 185.307, 543.043 172.957 C 535.446 165.361, 530.900 158.120, 527.269 147.835 C 525.146 141.818, 524.667 138.613, 524.606 130 C 524.564 124.225, 524.918 116.555, 525.391 112.956 C 526.142 107.239, 525.986 105.893, 524.157 102.307 C 522.377 98.819, 520.806 97.586, 513.690 94.093 C 504.215 89.443, 498.997 84.769, 495.164 77.500 C 492.915 73.234, 492.528 71.253, 492.528 64 C 492.528 56.687, 492.908 54.776, 495.249 50.313 C 498.508 44.100, 503.575 38.984, 510.439 34.974 C 517.702 30.731, 519.500 27.824, 519.500 20.323 C 519.500 9.193, 514.823 5.621, 496.666 2.885 C 482.280 0.718, 450.545 -0.267, 437.075 1.037 M 437.500 33.130 C 396.335 37.062, 354.315 54.182, 320.579 80.766 C 311.423 87.981, 291.929 107.489, 284.662 116.710 C 243.574 168.839, 227.527 235.860, 240.608 300.699 C 256.785 380.884, 317.810 447.570, 396 470.506 C 419.780 477.482, 433.799 479.439, 460 479.439 C 486.201 479.439, 500.220 477.482, 524 470.506 C 610.820 445.039, 674.636 367.165, 682.985 276.500 C 684.232 262.961, 684.303 248, 683.121 248 C 682.637 248, 679.748 249.142, 676.699 250.537 C 659.757 258.294, 637.910 257.175, 621.104 247.690 C 614.475 243.948, 603.085 233.422, 599.436 227.664 L 596.797 223.500 585.648 223.412 C 560.512 223.215, 535.222 211.973, 517.960 193.325 C 501.761 175.825, 492.689 153.329, 492.562 130.350 L 492.500 119.200 488.336 116.562 C 482.774 113.040, 472.035 101.540, 468.599 95.426 C 459.096 78.521, 457.587 58.341, 464.579 41.644 C 469.013 31.052, 469.718 31.982, 457.367 32.135 C 451.390 32.209, 442.450 32.657, 437.500 33.130 M 386.300 97.801 C 372.262 102.817, 364.719 113.302, 364.575 128 C 364.487 136.944, 367.455 144.388, 373.533 150.467 C 385.692 162.625, 406.308 162.625, 418.467 150.467 C 430.585 138.348, 430.585 117.652, 418.467 105.533 C 410.333 97.400, 396.637 94.107, 386.300 97.801 M 322.300 225.801 C 311.437 229.682, 304.515 236.982, 301.339 247.905 C 298.371 258.114, 301.738 270.672, 309.533 278.467 C 321.692 290.625, 342.308 290.625, 354.467 278.467 C 366.585 266.348, 366.585 245.652, 354.467 233.533 C 346.333 225.400, 332.637 222.107, 322.300 225.801 M 469.223 257.661 C 459.030 262.685, 456.981 274.981, 465 283 C 471.716 289.716, 480.759 289.682, 487.194 282.916 C 499.410 270.076, 485.031 249.869, 469.223 257.661 M 597.180 321.682 C 586.474 326.958, 585.074 341.378, 594.566 348.618 C 597.718 351.022, 599.298 351.500, 604.099 351.500 C 613.686 351.500, 619.500 345.686, 619.500 336.099 C 619.500 331.298, 619.022 329.718, 616.618 326.566 C 611.827 320.284, 604.004 318.319, 597.180 321.682 M 373.450 353.351 C 363.821 357.720, 361.100 370.488, 368.099 378.460 C 379.904 391.905, 401.523 378.153, 394.606 361.600 C 391.512 354.195, 380.798 350.018, 373.450 353.351 M 482.300 353.801 C 471.437 357.682, 464.515 364.982, 461.339 375.905 C 458.371 386.114, 461.738 398.672, 469.533 406.467 C 481.692 418.625, 502.308 418.625, 514.467 406.467 C 526.625 394.308, 526.625 373.692, 514.467 361.533 C 506.333 353.400, 492.637 350.107, 482.300 353.801",
      stroke: "none",
      fill: "#BEBEBD",
      "fill-rule": "evenodd"
    }
  })]);
};
var lightning = exports.lightning = function lightning() {
  return (0, _snabbdom.h)("svg.shop-svg.lightning", {
    attrs: {
      width: "799",
      height: "800",
      viewBox: "0 0 799 800"
    }
  }, [(0, _snabbdom.h)("path", {
    attrs: {
      d: "M 303.619 82.750 C 303.335 83.713, 300.134 102.275, 296.506 124 C 292.878 145.725, 285.893 187.350, 280.984 216.500 C 263.848 318.256, 242 448.515, 241.751 450.413 C 241.507 452.274, 242.890 452.329, 292.500 452.447 C 320.550 452.513, 343.662 452.897, 343.861 453.300 C 344.330 454.252, 344.498 453.139, 332.886 526 C 307.401 685.902, 302.948 713.583, 302.521 714.750 C 300.923 719.111, 305.828 712.307, 323.852 685.157 C 335.046 668.296, 392.083 582.850, 450.602 495.278 C 509.121 407.706, 557 335.819, 557 335.528 C 557 335.238, 528.650 335, 494 335 C 459.350 335, 431 334.725, 431 334.389 C 431 333.929, 512.142 156.502, 542.879 89.750 L 546.908 81 425.522 81 C 310.778 81, 304.107 81.096, 303.619 82.750",
      stroke: "none",
      fill: "#FFFFFF",
      "fill-rule": "evenodd"
    }
  })]);
};
var lab = exports.lab = function lab() {
  return (0, _snabbdom.h)("svg.shop-svg", {
    attrs: {
      width: "200",
      height: "252",
      viewBox: "0 0 200 252"
    }
  }, [(0, _snabbdom.h)("path", {
    attrs: {
      d: "M 113.340 11.556 C 113.012 12.411, 113.018 15.111, 113.353 17.556 C 113.935 21.807, 113.851 22, 111.426 22 C 109.325 22, 108.459 22.939, 106.388 27.464 C 104.055 32.560, 103.694 32.889, 101.025 32.355 C 97.420 31.634, 98.883 28.732, 79.628 74.779 C 71.054 95.282, 63.479 113.057, 62.795 114.279 C 62.060 115.590, 61.526 120.390, 61.490 126 C 61.444 133.305, 60.927 136.771, 59.251 141 L 57.073 146.500 59.589 148.580 L 62.105 150.659 60.053 155.867 C 58.924 158.731, 58 161.301, 58 161.579 C 58 162.446, 70.400 167.998, 72.336 167.999 C 73.596 168, 74.847 166.401, 76.323 162.908 C 78.393 158.009, 78.600 157.836, 81.778 158.351 C 85.027 158.879, 85.137 158.771, 88.551 151.694 C 90.460 147.737, 93.030 143.672, 94.261 142.659 C 101.402 136.788, 102.900 134.716, 106.953 125.111 C 109.305 119.537, 111.595 114.750, 112.042 114.474 C 112.489 114.198, 115.100 114.857, 117.844 115.939 C 123.445 118.146, 123.760 117.988, 126.381 111.662 C 127.288 109.475, 128.515 107.997, 129.236 108.227 C 129.931 108.448, 132.620 111.416, 135.212 114.822 C 146.209 129.274, 146.924 149.535, 136.985 165.023 C 132.720 171.670, 127.070 176.389, 118.334 180.602 L 111.169 184.058 71.834 184.667 C 50.200 185.002, 32.282 185.469, 32.017 185.705 C 31.360 186.287, 31.399 197.733, 32.060 198.393 C 32.349 198.683, 43.491 199.050, 56.820 199.210 L 81.053 199.500 80.777 212 L 80.500 224.500 47.821 225 C 16.794 225.475, 15.003 225.604, 12.383 227.562 C 8.168 230.711, 5.843 234.358, 5.663 238.105 L 5.500 241.500 100 241.500 L 194.500 241.500 194.281 237.763 C 194.007 233.069, 191.818 229.680, 187.361 227.050 C 184.050 225.097, 182.355 225, 151.443 225 L 119 225 119 219.134 L 119 213.268 124.992 211.083 C 128.288 209.881, 134.346 206.650, 138.454 203.902 C 166.459 185.172, 176.593 149.837, 162.482 120.124 C 157.535 109.708, 150.940 100.846, 143.690 94.874 C 140.285 92.070, 137.147 89.450, 136.715 89.053 C 136.283 88.655, 136.854 86.174, 137.983 83.539 C 140.407 77.884, 139.838 76.717, 133.283 73.907 L 129.038 72.088 132.366 64.294 C 134.197 60.007, 136.275 54.730, 136.986 52.566 C 138.225 48.790, 138.169 48.546, 135.586 46.487 L 132.895 44.341 134.998 39.006 C 136.896 34.189, 136.950 33.521, 135.551 32.123 C 134.152 30.724, 134.401 30.167, 138.118 26.380 C 140.381 24.074, 141.956 21.737, 141.616 21.188 C 140.871 19.982, 117.484 10, 115.405 10 C 114.598 10, 113.669 10.700, 113.340 11.556 M 118.426 17.120 C 118.083 17.675, 118.092 19.678, 118.447 21.571 C 118.961 24.307, 119.826 25.318, 122.669 26.506 C 124.635 27.328, 127.011 28, 127.948 28 C 129.621 28, 134.744 23.383, 133.921 22.616 C 132.171 20.988, 118.937 16.294, 118.426 17.120 M 110.161 30.547 C 109.522 31.948, 109 33.460, 109 33.908 C 109 34.688, 122.199 41.050, 126.634 42.408 C 128.329 42.927, 128.894 42.559, 129.380 40.623 C 129.716 39.283, 130.239 37.542, 130.541 36.754 C 130.939 35.716, 128.661 34.315, 122.258 31.661 C 117.399 29.648, 112.951 28, 112.373 28 C 111.794 28, 110.799 29.146, 110.161 30.547 M 98.267 42.750 C 95.164 50.123, 67.848 115.364, 67.350 116.593 C 67.106 117.193, 69.515 118.848, 72.703 120.268 C 81.138 124.027, 99.212 131.132, 99.474 130.792 C 100.892 128.944, 109.827 104.442, 109.163 104.221 C 104.791 102.764, 99.110 98.890, 97.258 96.102 C 93.936 91.103, 94.103 83.220, 97.619 79.041 C 101.236 74.743, 105.043 73, 110.815 73 C 114.246 73, 116.512 73.615, 118.320 75.037 L 120.910 77.074 122.456 74.085 C 125.260 68.662, 132 52.678, 132 51.451 C 132 50.350, 103.860 38, 101.351 38 C 100.755 38, 99.367 40.138, 98.267 42.750 M 106.388 77.959 C 99.789 80.692, 97.867 90.021, 102.872 95.026 C 106.859 99.013, 110.149 99.635, 114.737 97.270 C 119.689 94.718, 122.043 88.915, 119.900 84.540 C 117.352 79.335, 110.786 76.137, 106.388 77.959 M 125.923 79.144 C 125.292 80.323, 125.010 83.039, 125.297 85.180 C 126.062 90.883, 124.396 95.536, 120.077 99.761 C 117.974 101.817, 115.690 104.589, 115 105.921 C 113.923 108.001, 114.003 108.529, 115.565 109.671 C 118.127 111.545, 121.666 111.324, 122.313 109.250 C 122.614 108.287, 125.366 101.477, 128.430 94.116 C 131.493 86.754, 134 80.578, 134 80.391 C 134 79.992, 128.340 77, 127.585 77 C 127.302 77, 126.554 77.965, 125.923 79.144 M 132.685 97.534 C 131.758 99.478, 131 101.572, 131 102.187 C 131 102.803, 133.272 105.709, 136.049 108.645 C 145.787 118.942, 150.520 134.382, 148.188 148.250 C 145.501 164.233, 135.766 177.122, 120.889 184.395 L 112.073 188.705 115.089 192.807 C 116.935 195.316, 118.417 198.876, 118.907 201.975 C 119.347 204.761, 119.931 207.265, 120.204 207.538 C 120.477 207.811, 124.480 206.153, 129.100 203.855 C 140.656 198.106, 152.466 186.460, 157.446 175.901 C 164.334 161.298, 165.807 147.383, 162.028 132.609 C 158.933 120.509, 153.804 111.736, 144.276 102.250 C 139.719 97.713, 135.626 94, 135.180 94 C 134.735 94, 133.612 95.590, 132.685 97.534 M 66.414 125.363 C 66.083 126.227, 66.225 128.175, 66.730 129.691 C 67.506 132.019, 69.275 133.099, 78.075 136.624 C 88.842 140.937, 89.900 140.978, 93.302 137.218 C 95.048 135.289, 94.844 135.154, 82.511 130.083 C 75.597 127.240, 69.282 124.662, 68.478 124.353 C 67.667 124.042, 66.749 124.491, 66.414 125.363 M 64.192 140.725 C 63.564 142.773, 63.376 144.754, 63.775 145.126 C 64.174 145.498, 68.507 147.449, 73.404 149.461 C 82.857 153.343, 83.274 153.296, 84.636 148.177 C 84.975 146.899, 84.859 145.475, 84.377 145.013 C 83.725 144.387, 66.297 137, 65.473 137 C 65.398 137, 64.821 138.676, 64.192 140.725 M 65.371 155.654 C 63.762 159.506, 63.981 159.975, 68.238 161.783 C 70.777 162.862, 71.091 162.725, 72.549 159.905 C 74.543 156.050, 74.201 155.124, 70.156 153.424 C 66.889 152.050, 66.874 152.057, 65.371 155.654 M 36.362 190.500 C 36.045 191.325, 36.045 192.675, 36.362 193.500 C 36.850 194.773, 40.412 195, 59.912 195 C 82.520 195, 82.911 194.965, 84.443 192.777 C 85.299 191.555, 86 190.205, 86 189.777 C 86 189.350, 74.961 189, 61.469 189 C 40.585 189, 36.852 189.223, 36.362 190.500 M 92.299 191.900 C 86.315 195.659, 85.653 198.377, 85.848 218.363 C 85.943 228.188, 86.268 236.625, 86.570 237.113 C 86.871 237.601, 93.166 238, 100.559 238 L 114 238 113.994 220.250 C 113.988 199.959, 113.242 196.021, 108.807 192.862 C 104.381 189.711, 96.513 189.253, 92.299 191.900 M 98 196.709 C 92.671 198.669, 91.264 205.020, 95.314 208.826 C 100.994 214.162, 109.237 207.993, 106.379 200.545 C 105.866 199.210, 100.848 195.803, 99.800 196.079 C 99.635 196.122, 98.825 196.406, 98 196.709 M 97.408 202.378 C 96.599 204.487, 97.735 206, 100.129 206 C 101.639 206, 102.060 205.443, 101.820 203.760 C 101.447 201.146, 98.264 200.149, 97.408 202.378 M 16.014 230.744 C 14.097 231.710, 11.974 233.625, 11.297 235 L 10.066 237.500 44.277 237.763 C 63.093 237.908, 79.080 237.799, 79.805 237.521 C 80.655 237.195, 81.011 235.683, 80.811 233.258 L 80.500 229.500 50 229.244 C 22.583 229.013, 19.148 229.165, 16.014 230.744 M 119 233.592 L 119 238.286 154.029 237.781 C 173.294 237.504, 189.359 236.975, 189.727 236.606 C 190.096 236.237, 188.950 234.488, 187.181 232.718 L 183.964 229.500 151.482 229.199 L 119 228.897 119 233.592",
      stroke: "none",
      fill: "#BEBEBD",
      "fill-rule": "evenodd"
    }
  })]);
};
var mine = exports.mine = function mine() {
  return (0, _snabbdom.h)('svg.shop-svg', {
    attrs: {
      'width': '360',
      'height': '360',
      'viewBox': '0 0 360 360'
    }
  }, [(0, _snabbdom.h)('path', {
    attrs: {
      'd': 'M 204 28.668 C 173.110 33.552, 146.398 45.532, 119.265 66.670 C 112.333 72.070, 110.720 72.921, 109.080 72.043 C 108.008 71.469, 105.432 71, 103.354 71 C 99.827 71, 98.629 71.947, 85.288 85.288 C 71.947 98.629, 71 99.827, 71 103.354 C 71 105.432, 71.469 108.008, 72.043 109.080 C 72.921 110.720, 72.070 112.333, 66.670 119.265 C 52.599 137.327, 41.948 156.482, 35.680 175 C 30.388 190.633, 28.918 198.841, 28.298 216.212 L 27.738 231.924 30.305 233.093 C 31.717 233.737, 33.604 233.982, 34.498 233.639 C 35.392 233.296, 38.316 228.332, 40.995 222.608 C 54.122 194.569, 74.513 164.103, 93.412 144.295 L 99.500 137.915 103.662 139.575 C 107.531 141.117, 108.057 141.118, 111.129 139.586 L 114.433 137.937 211.469 234.969 C 276.031 299.529, 309.179 332, 310.521 332 C 313.188 332, 332 313.156, 332 310.484 C 332 309.191, 298.291 274.793, 234.821 211.321 C 160.380 136.877, 137.883 113.829, 138.676 112.819 C 140.613 110.351, 140.898 106.693, 139.429 103.176 C 137.652 98.923, 137.686 98.879, 152.550 86.050 C 171.767 69.464, 193.564 55.262, 218.808 42.879 C 226.678 39.018, 233.374 35.188, 233.690 34.366 C 234.005 33.545, 233.763 31.776, 233.153 30.436 C 232.056 28.029, 231.893 28.002, 219.271 28.136 C 212.247 28.211, 205.375 28.450, 204 28.668 M 193.500 40.478 C 169.871 46.002, 145.005 58.376, 124.651 74.740 L 117.802 80.246 124.028 86.528 L 130.253 92.809 141.288 82.963 C 155.366 70.401, 172.183 58.118, 189.135 48.016 C 205.545 38.237, 205.734 38.115, 204.500 38.129 C 203.950 38.135, 199 39.192, 193.500 40.478 M 91.999 92.501 L 80.530 104.002 94.001 117.501 L 107.471 130.999 119.237 119.264 L 131.002 107.529 117.765 94.265 C 110.485 86.969, 104.289 81, 103.998 81 C 103.706 81, 98.307 86.176, 91.999 92.501 M 75.552 123.634 C 63.224 139.155, 51.433 159.725, 45.538 176 C 42.846 183.432, 37.733 204.067, 38.416 204.749 C 38.611 204.944, 40.468 202.043, 42.542 198.302 C 53.767 178.063, 68.396 157.508, 83.797 140.335 L 92.825 130.268 86.518 124.018 L 80.212 117.768 75.552 123.634 M 125.482 126.018 L 120.540 131.036 215.018 225.518 C 266.981 277.483, 309.966 320, 310.540 320 C 311.842 320, 320 311.774, 320 310.460 C 320 309.479, 131.940 121, 130.960 121 C 130.666 121, 128.201 123.258, 125.482 126.018',
      'stroke': 'none',
      'fill': '#BEBEBD',
      'fill-rule': 'evenodd'
    }
  })]);
};
var shipment = exports.shipment = function shipment() {
  return (0, _snabbdom.h)("svg.shop-svg", {
    attrs: {
      width: "250",
      height: "201",
      viewBox: "0 0 250 201"
    }
  }, [(0, _snabbdom.h)("path", {
    attrs: {
      d: "M 123.454 0.765 C 121.468 2.160, 73.898 88.233, 74.212 89.864 C 74.491 91.315, 77.215 91.530, 98.263 91.768 L 122 92.036 122 101.018 L 122 110 107.065 110 C 98.851 110, 91.019 110.422, 89.661 110.939 C 85.710 112.441, 83.653 115.288, 73.996 132.614 L 64.879 148.972 32.690 149.236 C 2.928 149.480, 0.500 149.631, 0.500 151.232 C 0.500 152.185, 8.521 163.775, 18.325 176.987 L 36.150 201.011 123.304 200.755 L 210.458 200.500 230.651 176 C 241.757 162.525, 250.879 150.961, 250.922 150.302 C 250.981 149.394, 243.042 149.087, 218.250 149.038 C 188.710 148.979, 185.377 148.807, 184.241 147.282 C 183.548 146.353, 179.322 138.958, 174.851 130.849 C 170.379 122.741, 165.405 114.845, 163.797 113.303 L 160.874 110.500 144.437 110.183 L 128 109.865 128 107.453 L 128 105.041 148.206 104.771 L 168.412 104.500 169.289 100.500 C 170.559 94.703, 168.385 72.708, 165.404 61.197 C 160.128 40.825, 149.693 22.556, 135.160 8.250 C 126.945 0.163, 125.566 -0.718, 123.454 0.765 M 128.081 54 L 128.081 96.500 131.017 93.066 C 137.310 85.706, 140 76.276, 140 61.582 C 140 50.106, 137.843 37.310, 133.948 25.686 C 127.913 7.672, 128.080 6.866, 128.081 54 M 101.779 50.259 L 82.058 85.500 101.674 85.772 C 112.463 85.921, 121.456 85.878, 121.658 85.675 C 121.860 85.473, 121.908 69.492, 121.763 50.163 L 121.500 15.018 101.779 50.259 M 139.428 23 C 139.785 24.375, 140.929 28.715, 141.971 32.645 C 148.894 58.764, 146.842 81.736, 136.335 95.750 L 133.898 99 148.949 99 L 164 99 163.994 92.250 C 163.980 75.956, 159.367 56.475, 151.977 41.500 C 146.819 31.048, 138.231 18.387, 139.428 23 M 89.340 118.250 C 87.484 120.328, 72 147.330, 72 148.487 C 72 149.168, 176.515 149.152, 177.196 148.471 C 177.826 147.841, 162.896 120.648, 160.414 117.905 C 158.784 116.103, 156.861 116, 125.019 116 C 91.363 116, 91.348 116.001, 89.340 118.250 M 92 130.500 C 89.746 133.216, 92.526 135, 99.015 135 C 105.108 135, 107.302 133.274, 104.895 130.373 C 103.293 128.443, 93.628 128.538, 92 130.500 M 119.152 129.885 C 118.410 130.355, 117.966 131.586, 118.165 132.620 C 118.475 134.229, 119.460 134.500, 125 134.500 C 130.540 134.500, 131.525 134.229, 131.835 132.620 C 132.326 130.066, 130.354 129.031, 125 129.031 C 122.525 129.031, 119.893 129.415, 119.152 129.885 M 145.011 130.487 C 144.332 131.305, 144.046 132.677, 144.375 133.535 C 144.848 134.767, 146.294 135.033, 151.227 134.798 C 156.419 134.551, 157.541 134.181, 157.838 132.620 C 158.035 131.586, 157.590 130.355, 156.848 129.885 C 154.565 128.438, 146.365 128.855, 145.011 130.487 M 0.079 151.583 C 0.127 152.748, 0.364 152.985, 0.683 152.188 C 0.972 151.466, 0.936 150.603, 0.604 150.271 C 0.272 149.939, 0.036 150.529, 0.079 151.583 M 9.700 155.405 C 10.140 156.178, 16.800 165.374, 24.500 175.841 L 38.500 194.872 123.064 194.936 L 207.628 195 223.564 175.425 C 232.329 164.658, 239.650 155.433, 239.833 154.925 C 240.036 154.362, 194.908 154, 124.534 154 C 25.513 154, 9.016 154.202, 9.700 155.405 M 54.020 161.752 C 44.161 166.705, 43.268 181.294, 52.474 186.984 C 59.525 191.342, 70.053 188.624, 73.394 181.583 C 78.095 171.675, 71.121 160.003, 60.500 160.003 C 58.850 160.003, 55.934 160.790, 54.020 161.752 M 97.020 161.752 C 89.637 165.461, 86.568 175.791, 90.898 182.359 C 97.039 191.674, 111.819 191.224, 116.394 181.583 C 121.095 171.675, 114.121 160.003, 103.500 160.003 C 101.850 160.003, 98.934 160.790, 97.020 161.752 M 140.500 161.412 C 135.266 163.738, 132.713 167.413, 132.223 173.329 C 131.412 183.108, 136.836 188.989, 146.673 188.996 C 150.799 188.999, 152.477 188.469, 154.959 186.381 C 159.538 182.528, 161.313 178.473, 160.721 173.220 C 159.589 163.170, 149.629 157.354, 140.500 161.412 M 183.450 161.407 C 181.773 162.137, 179.186 164.179, 177.700 165.944 C 175.526 168.528, 175.001 170.162, 175.004 174.327 C 175.011 183.724, 180.357 189, 189.874 189 C 198.366 189, 204.688 181.796, 203.721 173.220 C 202.587 163.156, 192.684 157.385, 183.450 161.407 M 54.455 168.455 C 50.575 172.335, 50.813 177.300, 55.069 181.250 C 58.625 184.551, 61.790 184.740, 65.440 181.869 C 69.319 178.817, 70.288 175.626, 68.578 171.533 C 66.081 165.555, 58.916 163.994, 54.455 168.455 M 98.750 167.080 C 96.079 168.636, 93.870 173.633, 94.588 176.494 C 95.399 179.725, 100.475 184, 103.500 184 C 104.791 184, 107.231 182.835, 108.923 181.411 C 115.086 176.225, 111.663 165.958, 103.795 166.030 C 101.983 166.047, 99.712 166.519, 98.750 167.080 M 141.159 167.601 C 135.953 171.247, 136.444 179.627, 142.034 182.517 C 146.110 184.625, 148.409 184.368, 151.923 181.411 C 160.485 174.207, 150.329 161.178, 141.159 167.601 M 183.747 167.984 C 178.719 171.939, 179.492 179.652, 185.214 182.611 C 191.168 185.690, 198 181.259, 198 174.320 C 198 167.206, 189.525 163.439, 183.747 167.984",
      stroke: "none",
      fill: "#BEBEBD",
      "fill-rule": "evenodd"
    }
  })
  // h('path', {
  // 	attrs: {
  // 		'd': 'M -0 74.750 L -0.001 149.500 32.446 149.223 L 64.894 148.947 74.004 132.601 C 83.653 115.288, 85.711 112.441, 89.661 110.939 C 91.019 110.422, 98.851 110, 107.065 110 L 122 110 122 101.018 L 122 92.036 98.263 91.768 C 77.215 91.530, 74.491 91.315, 74.212 89.864 C 73.898 88.233, 121.468 2.160, 123.454 0.765 C 124.029 0.361, 96.487 0.024, 62.250 0.015 L 0 0 -0 74.750 M 135.160 8.250 C 149.693 22.556, 160.128 40.825, 165.404 61.197 C 168.385 72.708, 170.559 94.703, 169.289 100.500 L 168.412 104.500 148.206 104.771 L 128 105.041 128 107.453 L 128 109.865 144.483 110.183 L 160.967 110.500 163.934 113.500 C 165.566 115.150, 170.906 123.700, 175.801 132.500 L 184.701 148.500 217.351 149 L 250.001 149.500 250.001 74.750 L 250 0 188.389 -0 L 126.779 -0 135.160 8.250 M 128.081 54 L 128.081 96.500 131.017 93.066 C 137.310 85.706, 140 76.276, 140 61.582 C 140 50.106, 137.843 37.310, 133.948 25.686 C 127.913 7.672, 128.080 6.866, 128.081 54 M 101.779 50.259 L 82.058 85.500 101.674 85.772 C 112.463 85.921, 121.456 85.878, 121.658 85.675 C 121.860 85.473, 121.908 69.492, 121.763 50.163 L 121.500 15.018 101.779 50.259 M 139.428 23 C 139.785 24.375, 140.929 28.715, 141.971 32.645 C 148.894 58.764, 146.842 81.736, 136.335 95.750 L 133.898 99 148.949 99 L 164 99 163.994 92.250 C 163.980 75.956, 159.367 56.475, 151.977 41.500 C 146.819 31.048, 138.231 18.387, 139.428 23 M 89.340 118.250 C 87.484 120.328, 72 147.330, 72 148.487 C 72 149.168, 176.515 149.152, 177.196 148.471 C 177.826 147.841, 162.896 120.648, 160.414 117.905 C 158.784 116.103, 156.861 116, 125.019 116 C 91.363 116, 91.348 116.001, 89.340 118.250 M 92 130.500 C 89.746 133.216, 92.526 135, 99.015 135 C 105.108 135, 107.302 133.274, 104.895 130.373 C 103.293 128.443, 93.628 128.538, 92 130.500 M 119.152 129.885 C 118.410 130.355, 117.966 131.586, 118.165 132.620 C 118.475 134.229, 119.460 134.500, 125 134.500 C 130.540 134.500, 131.525 134.229, 131.835 132.620 C 132.326 130.066, 130.354 129.031, 125 129.031 C 122.525 129.031, 119.893 129.415, 119.152 129.885 M 145.011 130.487 C 144.332 131.305, 144.046 132.677, 144.375 133.535 C 144.848 134.767, 146.294 135.033, 151.227 134.798 C 156.419 134.551, 157.541 134.181, 157.838 132.620 C 158.035 131.586, 157.590 130.355, 156.848 129.885 C 154.565 128.438, 146.365 128.855, 145.011 130.487 M 0 176.800 L 0 201 18.122 201 C 32.485 201, 36.038 200.741, 35.248 199.750 C 34.700 199.063, 26.932 188.600, 17.986 176.500 C 9.040 164.400, 1.334 154.072, 0.861 153.550 C 0.377 153.017, 0 163.211, 0 176.800 M 229.686 177 L 210.077 201 230.039 201 L 250 201 250 177 C 250 163.800, 249.841 153, 249.647 153 C 249.453 153, 240.471 163.800, 229.686 177 M 9.700 155.405 C 10.140 156.178, 16.800 165.374, 24.500 175.841 L 38.500 194.872 123.064 194.936 L 207.628 195 223.564 175.425 C 232.329 164.658, 239.650 155.433, 239.833 154.925 C 240.036 154.362, 194.908 154, 124.534 154 C 25.513 154, 9.016 154.202, 9.700 155.405 M 54.020 161.752 C 44.161 166.705, 43.268 181.294, 52.474 186.984 C 59.525 191.342, 70.053 188.624, 73.394 181.583 C 78.095 171.675, 71.121 160.003, 60.500 160.003 C 58.850 160.003, 55.934 160.790, 54.020 161.752 M 97.020 161.752 C 89.637 165.461, 86.568 175.791, 90.898 182.359 C 97.039 191.674, 111.819 191.224, 116.394 181.583 C 121.095 171.675, 114.121 160.003, 103.500 160.003 C 101.850 160.003, 98.934 160.790, 97.020 161.752 M 140.500 161.412 C 135.266 163.738, 132.713 167.413, 132.223 173.329 C 131.412 183.108, 136.836 188.989, 146.673 188.996 C 150.799 188.999, 152.477 188.469, 154.959 186.381 C 159.538 182.528, 161.313 178.473, 160.721 173.220 C 159.589 163.170, 149.629 157.354, 140.500 161.412 M 183.450 161.407 C 181.773 162.137, 179.186 164.179, 177.700 165.944 C 175.526 168.528, 175.001 170.162, 175.004 174.327 C 175.011 183.724, 180.357 189, 189.874 189 C 198.366 189, 204.688 181.796, 203.721 173.220 C 202.587 163.156, 192.684 157.385, 183.450 161.407 M 54.455 168.455 C 50.575 172.335, 50.813 177.300, 55.069 181.250 C 58.625 184.551, 61.790 184.740, 65.440 181.869 C 69.319 178.817, 70.288 175.626, 68.578 171.533 C 66.081 165.555, 58.916 163.994, 54.455 168.455 M 98.750 167.080 C 96.079 168.636, 93.870 173.633, 94.588 176.494 C 95.399 179.725, 100.475 184, 103.500 184 C 104.791 184, 107.231 182.835, 108.923 181.411 C 115.086 176.225, 111.663 165.958, 103.795 166.030 C 101.983 166.047, 99.712 166.519, 98.750 167.080 M 141.159 167.601 C 135.953 171.247, 136.444 179.627, 142.034 182.517 C 146.110 184.625, 148.409 184.368, 151.923 181.411 C 160.485 174.207, 150.329 161.178, 141.159 167.601 M 183.747 167.984 C 178.719 171.939, 179.492 179.652, 185.214 182.611 C 191.168 185.690, 198 181.259, 198 174.320 C 198 167.206, 189.525 163.439, 183.747 167.984',
  // 		'stroke': 'none',
  // 		'fill': '#fafafa',
  // 		'fill-rule': 'evenodd'
  // 	}
  // })
  ]);
};

var svgs = exports.svgs = {
  Factory: factory(),
  Cursor: cursor(),
  Baker: baker(),
  Cookie: cookie(),
  Lightning: lightning(),
  Lab: lab(),
  Mine: mine(),
  Shipment: shipment()
};
},{"snabbdom":"../node_modules/snabbdom/build/index.js"}],"view.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _snabbdom = require("snabbdom");
var _svg = require("./svg");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
var cookieCount = function cookieCount(ctrl) {
  return (0, _snabbdom.h)("div#cookie_tally", [(0, _snabbdom.h)("div#cookie_count", Math.round(ctrl.cookieCount).toLocaleString())]);
};
var cps = function cps(ctrl) {
  return (0, _snabbdom.h)("h4#cps", ctrl.cookiesPerSecond() + " per second");
};
var clicker = function clicker(ctrl) {
  return (0, _snabbdom.h)("div#clicker", {
    on: {
      click: function click() {
        return ctrl.clickCookie();
      }
    }
  }, [_svg.svgs["Cookie"]]);
};
//TODO refactor mapping resources? remove duplicate code
var buyResources = function buyResources(ctrl) {
  return (0, _snabbdom.h)("div#shop", [(0, _snabbdom.h)("h2#shop_title.section_title", "SHOP"), (0, _snabbdom.h)("div#shop-items.panel", _toConsumableArray(Object.entries(ctrl.resources).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
      rsc = _ref2[0],
      inv = _ref2[1];
    var pwrup = inv.powerup;
    return (0, _snabbdom.h)("div.shop_item", {
      class: {
        idle: pwrup.status == "Idle",
        active: pwrup.status == "Active",
        cooldown: pwrup.status == "Cooldown"
      }
    }, [(0, _snabbdom.h)("div.buy-resource", {
      on: {
        click: function click() {
          return ctrl.buyResource(rsc);
        }
      },
      class: {
        unaffordable: !ctrl.canAfford(rsc),
        affordable: ctrl.canAfford(rsc)
      }
    }, [(0, _snabbdom.h)("div.shop_item_label", [(0, _snabbdom.h)("h2.item-name", rsc), (0, _snabbdom.h)("h3.item-cost", inv.price.toLocaleString())])]), (0, _snabbdom.h)("div.buy-powerup", {
      class: {
        unaffordable: !ctrl.canAffordPowerup(rsc),
        affordable: ctrl.canAffordPowerup(rsc),
        idle: pwrup.status == "Idle",
        active: pwrup.status == "Active",
        cooldown: pwrup.status == "Cooldown"
      },
      on: {
        click: function click() {
          return ctrl.buyPowerup(rsc);
        }
      }
    }, [(0, _svg.lightning)(), (0, _snabbdom.h)("h3.powerup-price", pwrup.price.toLocaleString())])]);
  })))]);
};
var countUp = function countUp(ctrl) {
  return (0, _snabbdom.h)("div#clock", "Playtime " + ctrl.getFormattedTime());
};
var inventory = function inventory(ctrl) {
  return (0, _snabbdom.h)("inventory", [(0, _snabbdom.h)("h2.inventory_label.section_title", "INVENTORY"), (0, _snabbdom.h)("div#entries.panel", Object.entries(ctrl.resources).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
      rsc = _ref4[0],
      inv = _ref4[1];
    return (0, _snabbdom.h)("div.entry", [_svg.svgs[rsc], (0, _snabbdom.h)("h2.item-name", rsc), (0, _snabbdom.h)("h2.item-count", inv.count ? "x" + inv.count : inv.count)]);
  }))]);
};
var view = function view(ctrl) {
  return (0, _snabbdom.h)("div#game", [(0, _snabbdom.h)("div#top", [(0, _snabbdom.h)("div#cookie-wrap", [(0, _snabbdom.h)("h2.section_title", "COOKIES"), (0, _snabbdom.h)("div.cookie-info.panel", [clicker(ctrl), cookieCount(ctrl), cps(ctrl), countUp(ctrl)])]), buyResources(ctrl)]), inventory(ctrl)]);
};
var _default = exports.default = view;
},{"snabbdom":"../node_modules/snabbdom/build/index.js","./svg":"svg.ts"}],"main.ts":[function(require,module,exports) {
"use strict";

var _ctrl = _interopRequireDefault(require("./ctrl"));
var _view = _interopRequireDefault(require("./view"));
var _snabbdom = require("snabbdom");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var patch = (0, _snabbdom.init)([_snabbdom.eventListenersModule, _snabbdom.propsModule, _snabbdom.attributesModule, _snabbdom.classModule]);
var ctrl = new _ctrl.default(redraw);
var element = document.getElementById("main");
element.innerHTML = "";
var inner = document.createElement("div");
element.appendChild(inner);
var vnode = patch(inner, (0, _view.default)(ctrl));
function redraw() {
  vnode = patch(vnode, (0, _view.default)(ctrl));
}
ctrl.tick();
},{"./ctrl":"ctrl.ts","./view":"view.ts","snabbdom":"../node_modules/snabbdom/build/index.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39085" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map