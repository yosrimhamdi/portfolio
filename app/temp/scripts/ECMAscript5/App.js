"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function s(i) {
    if (t[i]) return t[i].exports;
    var a = t[i] = {
      i: i,
      l: !1,
      exports: {}
    };
    return e[i].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
  }

  s.m = e, s.c = t, s.d = function (e, t, i) {
    s.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: i
    });
  }, s.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, s.t = function (e, t) {
    if (1 & t && (e = s(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var i = Object.create(null);
    if (s.r(i), Object.defineProperty(i, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var a in e) {
      s.d(i, a, function (t) {
        return e[t];
      }.bind(null, a));
    }
    return i;
  }, s.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return s.d(t, "a", t), t;
  }, s.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, s.p = "", s(s.s = 0);
}([function (e, t, s) {
  "use strict";

  s.r(t);
  var i = "undefined" == typeof document ? {
    body: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: ""
    },
    querySelector: function querySelector() {
      return null;
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    getElementById: function getElementById() {
      return null;
    },
    createEvent: function createEvent() {
      return {
        initEvent: function initEvent() {}
      };
    },
    createElement: function createElement() {
      return {
        children: [],
        childNodes: [],
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        }
      };
    },
    location: {
      hash: ""
    }
  } : document,
      a = "undefined" == typeof window ? {
    document: i,
    navigator: {
      userAgent: ""
    },
    location: {},
    history: {},
    CustomEvent: function CustomEvent() {
      return this;
    },
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {
        getPropertyValue: function getPropertyValue() {
          return "";
        }
      };
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
    setTimeout: function setTimeout() {},
    clearTimeout: function clearTimeout() {}
  } : window;

  var n = function n(e) {
    _classCallCheck(this, n);

    var t = this;

    for (var _s = 0; _s < e.length; _s += 1) {
      t[_s] = e[_s];
    }

    return t.length = e.length, this;
  };

  function r(e, t) {
    var s = [];
    var r = 0;
    if (e && !t && e instanceof n) return e;
    if (e) if ("string" == typeof e) {
      var _a, _n;

      var _l = e.trim();

      if (_l.indexOf("<") >= 0 && _l.indexOf(">") >= 0) {
        var _e = "div";

        for (0 === _l.indexOf("<li") && (_e = "ul"), 0 === _l.indexOf("<tr") && (_e = "tbody"), 0 !== _l.indexOf("<td") && 0 !== _l.indexOf("<th") || (_e = "tr"), 0 === _l.indexOf("<tbody") && (_e = "table"), 0 === _l.indexOf("<option") && (_e = "select"), (_n = i.createElement(_e)).innerHTML = _l, r = 0; r < _n.childNodes.length; r += 1) {
          s.push(_n.childNodes[r]);
        }
      } else for (_a = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || i).querySelectorAll(e.trim()) : [i.getElementById(e.trim().split("#")[1])], r = 0; r < _a.length; r += 1) {
        _a[r] && s.push(_a[r]);
      }
    } else if (e.nodeType || e === a || e === i) s.push(e);else if (e.length > 0 && e[0].nodeType) for (r = 0; r < e.length; r += 1) {
      s.push(e[r]);
    }
    return new n(s);
  }

  function l(e) {
    var t = [];

    for (var _s2 = 0; _s2 < e.length; _s2 += 1) {
      -1 === t.indexOf(e[_s2]) && t.push(e[_s2]);
    }

    return t;
  }

  r.fn = n.prototype, r.Class = n, r.Dom7 = n;
  "resize scroll".split(" ");
  var o = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;
      var t = e.split(" ");

      for (var _e2 = 0; _e2 < t.length; _e2 += 1) {
        for (var _s3 = 0; _s3 < this.length; _s3 += 1) {
          void 0 !== this[_s3] && void 0 !== this[_s3].classList && this[_s3].classList.add(t[_e2]);
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      var t = e.split(" ");

      for (var _e3 = 0; _e3 < t.length; _e3 += 1) {
        for (var _s4 = 0; _s4 < this.length; _s4 += 1) {
          void 0 !== this[_s4] && void 0 !== this[_s4].classList && this[_s4].classList.remove(t[_e3]);
        }
      }

      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      var t = e.split(" ");

      for (var _e4 = 0; _e4 < t.length; _e4 += 1) {
        for (var _s5 = 0; _s5 < this.length; _s5 += 1) {
          void 0 !== this[_s5] && void 0 !== this[_s5].classList && this[_s5].classList.toggle(t[_e4]);
        }
      }

      return this;
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _s6 = 0; _s6 < this.length; _s6 += 1) {
        if (2 === arguments.length) this[_s6].setAttribute(e, t);else for (var _t in e) {
          this[_s6][_t] = e[_t], this[_s6].setAttribute(_t, e[_t]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t2 = 0; _t2 < this.length; _t2 += 1) {
        this[_t2].removeAttribute(e);
      }

      return this;
    },
    data: function data(e, t) {
      var s;

      if (void 0 !== t) {
        for (var _i = 0; _i < this.length; _i += 1) {
          (s = this[_i]).dom7ElementDataStorage || (s.dom7ElementDataStorage = {}), s.dom7ElementDataStorage[e] = t;
        }

        return this;
      }

      if (s = this[0]) {
        if (s.dom7ElementDataStorage && e in s.dom7ElementDataStorage) return s.dom7ElementDataStorage[e];

        var _t3 = s.getAttribute("data-".concat(e));

        return _t3 || void 0;
      }
    },
    transform: function transform(e) {
      for (var _t4 = 0; _t4 < this.length; _t4 += 1) {
        var _s7 = this[_t4].style;
        _s7.webkitTransform = e, _s7.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e = "".concat(e, "ms"));

      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        var _s8 = this[_t5].style;
        _s8.webkitTransitionDuration = e, _s8.transitionDuration = e;
      }

      return this;
    },
    on: function on() {
      var _e6, _e7;

      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      var t = e[0],
          s = e[1],
          i = e[2],
          a = e[3];

      function n(e) {
        var t = e.target;
        if (!t) return;
        var a = e.target.dom7EventData || [];
        if (a.indexOf(e) < 0 && a.unshift(e), r(t).is(s)) i.apply(t, a);else {
          var _e5 = r(t).parents();

          for (var _t6 = 0; _t6 < _e5.length; _t6 += 1) {
            r(_e5[_t6]).is(s) && i.apply(_e5[_t6], a);
          }
        }
      }

      function l(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
      }

      "function" == typeof e[1] && ((_e6 = e, _e7 = _slicedToArray(_e6, 3), t = _e7[0], i = _e7[1], a = _e7[2], _e6), s = void 0), a || (a = !1);
      var o = t.split(" ");
      var d;

      for (var _e8 = 0; _e8 < this.length; _e8 += 1) {
        var _t7 = this[_e8];
        if (s) for (d = 0; d < o.length; d += 1) {
          var _e9 = o[d];
          _t7.dom7LiveListeners || (_t7.dom7LiveListeners = {}), _t7.dom7LiveListeners[_e9] || (_t7.dom7LiveListeners[_e9] = []), _t7.dom7LiveListeners[_e9].push({
            listener: i,
            proxyListener: n
          }), _t7.addEventListener(_e9, n, a);
        } else for (d = 0; d < o.length; d += 1) {
          var _e10 = o[d];
          _t7.dom7Listeners || (_t7.dom7Listeners = {}), _t7.dom7Listeners[_e10] || (_t7.dom7Listeners[_e10] = []), _t7.dom7Listeners[_e10].push({
            listener: i,
            proxyListener: l
          }), _t7.addEventListener(_e10, l, a);
        }
      }

      return this;
    },
    off: function off() {
      var _e11, _e12;

      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = e[0],
          s = e[1],
          i = e[2],
          a = e[3];
      "function" == typeof e[1] && ((_e11 = e, _e12 = _slicedToArray(_e11, 3), t = _e12[0], i = _e12[1], a = _e12[2], _e11), s = void 0), a || (a = !1);
      var n = t.split(" ");

      for (var _e13 = 0; _e13 < n.length; _e13 += 1) {
        var _t8 = n[_e13];

        for (var _e14 = 0; _e14 < this.length; _e14 += 1) {
          var _n2 = this[_e14];

          var _r = void 0;

          if (!s && _n2.dom7Listeners ? _r = _n2.dom7Listeners[_t8] : s && _n2.dom7LiveListeners && (_r = _n2.dom7LiveListeners[_t8]), _r && _r.length) for (var _e15 = _r.length - 1; _e15 >= 0; _e15 -= 1) {
            var _s9 = _r[_e15];
            i && _s9.listener === i ? (_n2.removeEventListener(_t8, _s9.proxyListener, a), _r.splice(_e15, 1)) : i && _s9.listener && _s9.listener.dom7proxy && _s9.listener.dom7proxy === i ? (_n2.removeEventListener(_t8, _s9.proxyListener, a), _r.splice(_e15, 1)) : i || (_n2.removeEventListener(_t8, _s9.proxyListener, a), _r.splice(_e15, 1));
          }
        }
      }

      return this;
    },
    trigger: function trigger() {
      for (var _len3 = arguments.length, e = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        e[_key3] = arguments[_key3];
      }

      var t = e[0].split(" "),
          s = e[1];

      for (var _n3 = 0; _n3 < t.length; _n3 += 1) {
        var _r2 = t[_n3];

        for (var _t9 = 0; _t9 < this.length; _t9 += 1) {
          var _n4 = this[_t9];

          var _l2 = void 0;

          try {
            _l2 = new a.CustomEvent(_r2, {
              detail: s,
              bubbles: !0,
              cancelable: !0
            });
          } catch (e) {
            (_l2 = i.createEvent("Event")).initEvent(_r2, !0, !0), _l2.detail = s;
          }

          _n4.dom7EventData = e.filter(function (e, t) {
            return t > 0;
          }), _n4.dispatchEvent(_l2), _n4.dom7EventData = [], delete _n4.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = ["webkitTransitionEnd", "transitionend"],
          s = this;
      var i;

      function a(n) {
        if (n.target === this) for (e.call(this, n), i = 0; i < t.length; i += 1) {
          s.off(t[i], a);
        }
      }

      if (e) for (i = 0; i < t.length; i += 1) {
        s.on(t[i], a);
      }
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e16 = this.styles();

          return this[0].offsetWidth + parseFloat(_e16.getPropertyValue("margin-right")) + parseFloat(_e16.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e17 = this.styles();

          return this[0].offsetHeight + parseFloat(_e17.getPropertyValue("margin-top")) + parseFloat(_e17.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e18 = this[0],
            _t10 = _e18.getBoundingClientRect(),
            _s10 = i.body,
            _n5 = _e18.clientTop || _s10.clientTop || 0,
            _r3 = _e18.clientLeft || _s10.clientLeft || 0,
            _l3 = _e18 === a ? a.scrollY : _e18.scrollTop,
            _o = _e18 === a ? a.scrollX : _e18.scrollLeft;

        return {
          top: _t10.top + _l3 - _n5,
          left: _t10.left + _o - _r3
        };
      }

      return null;
    },
    css: function css(e, t) {
      var s;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (s = 0; s < this.length; s += 1) {
            for (var _t11 in e) {
              this[s].style[_t11] = e[_t11];
            }
          }

          return this;
        }

        if (this[0]) return a.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (s = 0; s < this.length; s += 1) {
          this[s].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      if (!e) return this;

      for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
        if (!1 === e.call(this[_t12], _t12, this[_t12])) return this;
      }

      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

      for (var _t13 = 0; _t13 < this.length; _t13 += 1) {
        this[_t13].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t14 = 0; _t14 < this.length; _t14 += 1) {
        this[_t14].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = this[0];
      var s, l;
      if (!t || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (t.matches) return t.matches(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);

        for (s = r(e), l = 0; l < s.length; l += 1) {
          if (s[l] === t) return !0;
        }

        return !1;
      }

      if (e === i) return t === i;
      if (e === a) return t === a;

      if (e.nodeType || e instanceof n) {
        for (s = e.nodeType ? [e] : e, l = 0; l < s.length; l += 1) {
          if (s[l] === t) return !0;
        }

        return !1;
      }

      return !1;
    },
    index: function index() {
      var e,
          t = this[0];

      if (t) {
        for (e = 0; null !== (t = t.previousSibling);) {
          1 === t.nodeType && (e += 1);
        }

        return e;
      }
    },
    eq: function eq(e) {
      if (void 0 === e) return this;
      var t = this.length;
      var s;
      return new n(e > t - 1 ? [] : e < 0 ? (s = t + e) < 0 ? [] : [this[s]] : [this[e]]);
    },
    append: function append() {
      var t;

      for (var _s11 = 0; _s11 < arguments.length; _s11 += 1) {
        t = _s11 < 0 || arguments.length <= _s11 ? undefined : arguments[_s11];

        for (var _e19 = 0; _e19 < this.length; _e19 += 1) {
          if ("string" == typeof t) {
            var _s12 = i.createElement("div");

            for (_s12.innerHTML = t; _s12.firstChild;) {
              this[_e19].appendChild(_s12.firstChild);
            }
          } else if (t instanceof n) for (var _s13 = 0; _s13 < t.length; _s13 += 1) {
            this[_e19].appendChild(t[_s13]);
          } else this[_e19].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t, s;

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var _a2 = i.createElement("div");

          for (_a2.innerHTML = e, s = _a2.childNodes.length - 1; s >= 0; s -= 1) {
            this[t].insertBefore(_a2.childNodes[s], this[t].childNodes[0]);
          }
        } else if (e instanceof n) for (s = 0; s < e.length; s += 1) {
          this[t].insertBefore(e[s], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new n([this[0].nextElementSibling]) : new n([]) : this[0].nextElementSibling ? new n([this[0].nextElementSibling]) : new n([]) : new n([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return new n([]);

      for (; s.nextElementSibling;) {
        var _i2 = s.nextElementSibling;
        e ? r(_i2).is(e) && t.push(_i2) : t.push(_i2), s = _i2;
      }

      return new n(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t15 = this[0];
        return e ? _t15.previousElementSibling && r(_t15.previousElementSibling).is(e) ? new n([_t15.previousElementSibling]) : new n([]) : _t15.previousElementSibling ? new n([_t15.previousElementSibling]) : new n([]);
      }

      return new n([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var s = this[0];
      if (!s) return new n([]);

      for (; s.previousElementSibling;) {
        var _i3 = s.previousElementSibling;
        e ? r(_i3).is(e) && t.push(_i3) : t.push(_i3), s = _i3;
      }

      return new n(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _s14 = 0; _s14 < this.length; _s14 += 1) {
        null !== this[_s14].parentNode && (e ? r(this[_s14].parentNode).is(e) && t.push(this[_s14].parentNode) : t.push(this[_s14].parentNode));
      }

      return r(l(t));
    },
    parents: function parents(e) {
      var t = [];

      for (var _s15 = 0; _s15 < this.length; _s15 += 1) {
        var _i4 = this[_s15].parentNode;

        for (; _i4;) {
          e ? r(_i4).is(e) && t.push(_i4) : t.push(_i4), _i4 = _i4.parentNode;
        }
      }

      return r(l(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new n([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _s16 = 0; _s16 < this.length; _s16 += 1) {
        var _i5 = this[_s16].querySelectorAll(e);

        for (var _e20 = 0; _e20 < _i5.length; _e20 += 1) {
          t.push(_i5[_e20]);
        }
      }

      return new n(t);
    },
    children: function children(e) {
      var t = [];

      for (var _s17 = 0; _s17 < this.length; _s17 += 1) {
        var _i6 = this[_s17].childNodes;

        for (var _s18 = 0; _s18 < _i6.length; _s18 += 1) {
          e ? 1 === _i6[_s18].nodeType && r(_i6[_s18]).is(e) && t.push(_i6[_s18]) : 1 === _i6[_s18].nodeType && t.push(_i6[_s18]);
        }
      }

      return new n(l(t));
    },
    remove: function remove() {
      for (var _e21 = 0; _e21 < this.length; _e21 += 1) {
        this[_e21].parentNode && this[_e21].parentNode.removeChild(this[_e21]);
      }

      return this;
    },
    add: function add() {
      var t = this;
      var s, i;

      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }

      for (s = 0; s < e.length; s += 1) {
        var _a3 = r(e[s]);

        for (i = 0; i < _a3.length; i += 1) {
          t[t.length] = _a3[i], t.length += 1;
        }
      }

      return t;
    },
    styles: function styles() {
      return this[0] ? a.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(o).forEach(function (e) {
    r.fn[e] = o[e];
  });

  var d = {
    deleteProps: function deleteProps(e) {
      var t = e;
      Object.keys(t).forEach(function (e) {
        try {
          t[e] = null;
        } catch (e) {}

        try {
          delete t[e];
        } catch (e) {}
      });
    },
    nextTick: function nextTick(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return setTimeout(e, t);
    },
    now: function now() {
      return Date.now();
    },
    getTranslate: function getTranslate(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "x";
      var s, i, n;
      var r = a.getComputedStyle(e, null);
      return a.WebKitCSSMatrix ? ((i = r.transform || r.webkitTransform).split(",").length > 6 && (i = i.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), n = new a.WebKitCSSMatrix("none" === i ? "" : i)) : s = (n = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = a.WebKitCSSMatrix ? n.m41 : 16 === s.length ? parseFloat(s[12]) : parseFloat(s[4])), "y" === t && (i = a.WebKitCSSMatrix ? n.m42 : 16 === s.length ? parseFloat(s[13]) : parseFloat(s[5])), i || 0;
    },
    parseUrlQuery: function parseUrlQuery(e) {
      var t = {};
      var s,
          i,
          n,
          r,
          l = e || a.location.href;
      if ("string" == typeof l && l.length) for (r = (i = (l = l.indexOf("?") > -1 ? l.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, s = 0; s < r; s += 1) {
        n = i[s].replace(/#\S+/g, "").split("="), t[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
      }
      return t;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function extend() {
      var t = Object(arguments.length <= 0 ? undefined : arguments[0]);

      for (var _s19 = 1; _s19 < arguments.length; _s19 += 1) {
        var _i7 = _s19 < 0 || arguments.length <= _s19 ? undefined : arguments[_s19];

        if (null != _i7) {
          var _e22 = Object.keys(Object(_i7));

          for (var _s20 = 0, _a4 = _e22.length; _s20 < _a4; _s20 += 1) {
            var _a5 = _e22[_s20],
                _n6 = Object.getOwnPropertyDescriptor(_i7, _a5);

            void 0 !== _n6 && _n6.enumerable && (d.isObject(t[_a5]) && d.isObject(_i7[_a5]) ? d.extend(t[_a5], _i7[_a5]) : !d.isObject(t[_a5]) && d.isObject(_i7[_a5]) ? (t[_a5] = {}, d.extend(t[_a5], _i7[_a5])) : t[_a5] = _i7[_a5]);
          }
        }
      }

      return t;
    }
  },
      p = function () {
    var e = i.createElement("div");
    return {
      touch: a.Modernizr && !0 === a.Modernizr.touch || !!(a.navigator.maxTouchPoints > 0 || "ontouchstart" in a || a.DocumentTouch && i instanceof a.DocumentTouch),
      pointerEvents: !!(a.navigator.pointerEnabled || a.PointerEvent || "maxTouchPoints" in a.navigator && a.navigator.maxTouchPoints > 0),
      prefixedPointerEvents: !!a.navigator.msPointerEnabled,
      transition: function () {
        var t = e.style;
        return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
      }(),
      transforms3d: a.Modernizr && !0 === a.Modernizr.csstransforms3d || function () {
        var t = e.style;
        return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
      }(),
      flexbox: function () {
        var t = e.style,
            s = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");

        for (var _e23 = 0; _e23 < s.length; _e23 += 1) {
          if (s[_e23] in t) return !0;
        }

        return !1;
      }(),
      observer: "MutationObserver" in a || "WebkitMutationObserver" in a,
      passiveListener: function () {
        var e = !1;

        try {
          var _t16 = Object.defineProperty({}, "passive", {
            get: function get() {
              e = !0;
            }
          });

          a.addEventListener("testPassiveListener", null, _t16);
        } catch (e) {}

        return e;
      }(),
      gestures: "ongesturestart" in a
    };
  }(),
      c = {
    isIE: !!a.navigator.userAgent.match(/Trident/g) || !!a.navigator.userAgent.match(/MSIE/g),
    isEdge: !!a.navigator.userAgent.match(/Edge/g),
    isSafari: function () {
      var e = a.navigator.userAgent.toLowerCase();
      return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(a.navigator.userAgent)
  };

  var h =
  /*#__PURE__*/
  function () {
    function h() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, h);

      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    }

    _createClass(h, [{
      key: "on",
      value: function on(e, t, s) {
        var i = this;
        if ("function" != typeof t) return i;
        var a = s ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][a](t);
        }), i;
      }
    }, {
      key: "once",
      value: function once(e, t, s) {
        var i = this;
        if ("function" != typeof t) return i;

        function a() {
          for (var _len5 = arguments.length, s = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            s[_key5] = arguments[_key5];
          }

          t.apply(i, s), i.off(e, a), a.f7proxy && delete a.f7proxy;
        }

        return a.f7proxy = t, i.on(e, a, s);
      }
    }, {
      key: "off",
      value: function off(e, t) {
        var s = this;
        return s.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].length && s.eventsListeners[e].forEach(function (i, a) {
            (i === t || i.f7proxy && i.f7proxy === t) && s.eventsListeners[e].splice(a, 1);
          });
        }), s) : s;
      }
    }, {
      key: "emit",
      value: function emit() {
        var t = this;
        if (!t.eventsListeners) return t;
        var s, i, a;

        for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          e[_key6] = arguments[_key6];
        }

        return "string" == typeof e[0] || Array.isArray(e[0]) ? (s = e[0], i = e.slice(1, e.length), a = t) : (s = e[0].events, i = e[0].data, a = e[0].context || t), (Array.isArray(s) ? s : s.split(" ")).forEach(function (e) {
          if (t.eventsListeners && t.eventsListeners[e]) {
            var _s21 = [];
            t.eventsListeners[e].forEach(function (e) {
              _s21.push(e);
            }), _s21.forEach(function (e) {
              e.apply(a, i);
            });
          }
        }), t;
      }
    }, {
      key: "useModulesParams",
      value: function useModulesParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (s) {
          var i = t.modules[s];
          i.params && d.extend(e, i.params);
        });
      }
    }, {
      key: "useModules",
      value: function useModules() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (s) {
          var i = t.modules[s],
              a = e[s] || {};
          i.instance && Object.keys(i.instance).forEach(function (e) {
            var s = i.instance[e];
            t[e] = "function" == typeof s ? s.bind(t) : s;
          }), i.on && t.on && Object.keys(i.on).forEach(function (e) {
            t.on(e, i.on[e]);
          }), i.create && i.create.bind(t)(a);
        });
      }
    }], [{
      key: "installModule",
      value: function installModule(e) {
        var s = this;
        s.prototype.modules || (s.prototype.modules = {});
        var i = e.name || "".concat(Object.keys(s.prototype.modules).length, "_").concat(d.now());

        for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          t[_key7 - 1] = arguments[_key7];
        }

        return s.prototype.modules[i] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
          s.prototype[t] = e.proto[t];
        }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
          s[t] = e["static"][t];
        }), e.install && e.install.apply(s, t), s;
      }
    }, {
      key: "use",
      value: function use(e) {
        var s = this;

        for (var _len8 = arguments.length, t = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
          t[_key8 - 1] = arguments[_key8];
        }

        return Array.isArray(e) ? (e.forEach(function (e) {
          return s.installModule(e);
        }), s) : s.installModule.apply(s, [e].concat(t));
      }
    }, {
      key: "components",
      set: function set(e) {
        this.use && this.use(e);
      }
    }]);

    return h;
  }();

  var u = {
    updateSize: function updateSize() {
      var e = this;
      var t, s;
      var i = e.$el;
      t = void 0 !== e.params.width ? e.params.width : i[0].clientWidth, s = void 0 !== e.params.height ? e.params.height : i[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), s = s - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), d.extend(e, {
        width: t,
        height: s,
        size: e.isHorizontal() ? t : s
      }));
    },
    updateSlides: function updateSlides() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl,
          i = e.size,
          n = e.rtlTranslate,
          r = e.wrongRTL,
          l = e.virtual && t.virtual.enabled,
          o = l ? e.virtual.slides.length : e.slides.length,
          c = s.children(".".concat(e.params.slideClass)),
          h = l ? e.virtual.slides.length : c.length;
      var u = [];
      var m = [],
          f = [];
      var g = t.slidesOffsetBefore;
      "function" == typeof g && (g = t.slidesOffsetBefore.call(e));
      var v = t.slidesOffsetAfter;
      "function" == typeof v && (v = t.slidesOffsetAfter.call(e));
      var b = e.snapGrid.length,
          w = e.snapGrid.length;
      var y,
          x,
          T = t.spaceBetween,
          E = -g,
          S = 0,
          C = 0;
      if (void 0 === i) return;
      "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * i), e.virtualSize = -T, n ? c.css({
        marginLeft: "",
        marginTop: ""
      }) : c.css({
        marginRight: "",
        marginBottom: ""
      }), t.slidesPerColumn > 1 && (y = Math.floor(h / t.slidesPerColumn) === h / e.params.slidesPerColumn ? h : Math.ceil(h / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (y = Math.max(y, t.slidesPerView * t.slidesPerColumn)));
      var $ = t.slidesPerColumn,
          M = y / $,
          P = Math.floor(h / t.slidesPerColumn);

      for (var _s22 = 0; _s22 < h; _s22 += 1) {
        x = 0;

        var _n7 = c.eq(_s22);

        if (t.slidesPerColumn > 1) {
          var _i8 = void 0,
              _a6 = void 0,
              _r4 = void 0;

          "column" === t.slidesPerColumnFill ? (_r4 = _s22 - (_a6 = Math.floor(_s22 / $)) * $, (_a6 > P || _a6 === P && _r4 === $ - 1) && (_r4 += 1) >= $ && (_r4 = 0, _a6 += 1), _i8 = _a6 + _r4 * y / $, _n7.css({
            "-webkit-box-ordinal-group": _i8,
            "-moz-box-ordinal-group": _i8,
            "-ms-flex-order": _i8,
            "-webkit-order": _i8,
            order: _i8
          })) : _a6 = _s22 - (_r4 = Math.floor(_s22 / M)) * M, _n7.css("margin-".concat(e.isHorizontal() ? "top" : "left"), 0 !== _r4 && t.spaceBetween && "".concat(t.spaceBetween, "px")).attr("data-swiper-column", _a6).attr("data-swiper-row", _r4);
        }

        if ("none" !== _n7.css("display")) {
          if ("auto" === t.slidesPerView) {
            var _s23 = a.getComputedStyle(_n7[0], null),
                _i9 = _n7[0].style.transform,
                _r5 = _n7[0].style.webkitTransform;

            if (_i9 && (_n7[0].style.transform = "none"), _r5 && (_n7[0].style.webkitTransform = "none"), t.roundLengths) x = e.isHorizontal() ? _n7.outerWidth(!0) : _n7.outerHeight(!0);else if (e.isHorizontal()) {
              var _e24 = parseFloat(_s23.getPropertyValue("width")),
                  _t17 = parseFloat(_s23.getPropertyValue("padding-left")),
                  _i10 = parseFloat(_s23.getPropertyValue("padding-right")),
                  _a7 = parseFloat(_s23.getPropertyValue("margin-left")),
                  _n8 = parseFloat(_s23.getPropertyValue("margin-right")),
                  _r6 = _s23.getPropertyValue("box-sizing");

              x = _r6 && "border-box" === _r6 ? _e24 + _a7 + _n8 : _e24 + _t17 + _i10 + _a7 + _n8;
            } else {
              var _e25 = parseFloat(_s23.getPropertyValue("height")),
                  _t18 = parseFloat(_s23.getPropertyValue("padding-top")),
                  _i11 = parseFloat(_s23.getPropertyValue("padding-bottom")),
                  _a8 = parseFloat(_s23.getPropertyValue("margin-top")),
                  _n9 = parseFloat(_s23.getPropertyValue("margin-bottom")),
                  _r7 = _s23.getPropertyValue("box-sizing");

              x = _r7 && "border-box" === _r7 ? _e25 + _a8 + _n9 : _e25 + _t18 + _i11 + _a8 + _n9;
            }
            _i9 && (_n7[0].style.transform = _i9), _r5 && (_n7[0].style.webkitTransform = _r5), t.roundLengths && (x = Math.floor(x));
          } else x = (i - (t.slidesPerView - 1) * T) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), c[_s22] && (e.isHorizontal() ? c[_s22].style.width = "".concat(x, "px") : c[_s22].style.height = "".concat(x, "px"));

          c[_s22] && (c[_s22].swiperSlideSize = x), f.push(x), t.centeredSlides ? (E = E + x / 2 + S / 2 + T, 0 === S && 0 !== _s22 && (E = E - i / 2 - T), 0 === _s22 && (E = E - i / 2 - T), Math.abs(E) < .001 && (E = 0), t.roundLengths && (E = Math.floor(E)), C % t.slidesPerGroup == 0 && u.push(E), m.push(E)) : (t.roundLengths && (E = Math.floor(E)), C % t.slidesPerGroup == 0 && u.push(E), m.push(E), E = E + x + T), e.virtualSize += x + T, S = x, C += 1;
        }
      }

      var z;

      if (e.virtualSize = Math.max(e.virtualSize, i) + v, n && r && ("slide" === t.effect || "coverflow" === t.effect) && s.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }), p.flexbox && !t.setWrapperSize || (e.isHorizontal() ? s.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }) : s.css({
        height: "".concat(e.virtualSize + t.spaceBetween, "px")
      })), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * y, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? s.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }) : s.css({
        height: "".concat(e.virtualSize + t.spaceBetween, "px")
      }), t.centeredSlides)) {
        z = [];

        for (var _s24 = 0; _s24 < u.length; _s24 += 1) {
          var _i12 = u[_s24];
          t.roundLengths && (_i12 = Math.floor(_i12)), u[_s24] < e.virtualSize + u[0] && z.push(_i12);
        }

        u = z;
      }

      if (!t.centeredSlides) {
        z = [];

        for (var _s25 = 0; _s25 < u.length; _s25 += 1) {
          var _a9 = u[_s25];
          t.roundLengths && (_a9 = Math.floor(_a9)), u[_s25] <= e.virtualSize - i && z.push(_a9);
        }

        u = z, Math.floor(e.virtualSize - i) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - i);
      }

      if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? n ? c.css({
        marginLeft: "".concat(T, "px")
      }) : c.css({
        marginRight: "".concat(T, "px")
      }) : c.css({
        marginBottom: "".concat(T, "px")
      })), t.centerInsufficientSlides) {
        var _e26 = 0;

        if (f.forEach(function (s) {
          _e26 += s + (t.spaceBetween ? t.spaceBetween : 0);
        }), (_e26 -= t.spaceBetween) < i) {
          var _t19 = (i - _e26) / 2;

          u.forEach(function (e, s) {
            u[s] = e - _t19;
          }), m.forEach(function (e, s) {
            m[s] = e + _t19;
          });
        }
      }

      d.extend(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: m,
        slidesSizesGrid: f
      }), h !== o && e.emit("slidesLengthChange"), u.length !== b && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), m.length !== w && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          s = [];
      var i,
          a = 0;
      if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
        var _e27 = t.activeIndex + i;

        if (_e27 > t.slides.length) break;
        s.push(t.slides.eq(_e27)[0]);
      } else s.push(t.slides.eq(t.activeIndex)[0]);

      for (i = 0; i < s.length; i += 1) {
        if (void 0 !== s[i]) {
          var _e28 = s[i].offsetHeight;
          a = _e28 > a ? _e28 : a;
        }
      }

      a && t.$wrapperEl.css("height", "".concat(a, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides;

      for (var _s26 = 0; _s26 < t.length; _s26 += 1) {
        t[_s26].swiperSlideOffset = e.isHorizontal() ? t[_s26].offsetLeft : t[_s26].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var t = this,
          s = t.params,
          i = t.slides,
          a = t.rtlTranslate;
      if (0 === i.length) return;
      void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
      var n = -e;
      a && (n = e), i.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e29 = 0; _e29 < i.length; _e29 += 1) {
        var _r8 = i[_e29],
            _l4 = (n + (s.centeredSlides ? t.minTranslate() : 0) - _r8.swiperSlideOffset) / (_r8.swiperSlideSize + s.spaceBetween);

        if (s.watchSlidesVisibility) {
          var _a10 = -(n - _r8.swiperSlideOffset),
              _l5 = _a10 + t.slidesSizesGrid[_e29];

          (_a10 >= 0 && _a10 < t.size || _l5 > 0 && _l5 <= t.size || _a10 <= 0 && _l5 >= t.size) && (t.visibleSlides.push(_r8), t.visibleSlidesIndexes.push(_e29), i.eq(_e29).addClass(s.slideVisibleClass));
        }

        _r8.progress = a ? -_l4 : _l4;
      }

      t.visibleSlides = r(t.visibleSlides);
    },
    updateProgress: function updateProgress() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var t = this,
          s = t.params,
          i = t.maxTranslate() - t.minTranslate();
      var a = t.progress,
          n = t.isBeginning,
          r = t.isEnd;
      var l = n,
          o = r;
      0 === i ? (a = 0, n = !0, r = !0) : (n = (a = (e - t.minTranslate()) / i) <= 0, r = a >= 1), d.extend(t, {
        progress: a,
        isBeginning: n,
        isEnd: r
      }), (s.watchSlidesProgress || s.watchSlidesVisibility) && t.updateSlidesProgress(e), n && !l && t.emit("reachBeginning toEdge"), r && !o && t.emit("reachEnd toEdge"), (l && !n || o && !r) && t.emit("fromEdge"), t.emit("progress", a);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          s = e.params,
          i = e.$wrapperEl,
          a = e.activeIndex,
          n = e.realIndex,
          r = e.virtual && s.virtual.enabled;
      var l;
      t.removeClass("".concat(s.slideActiveClass, " ").concat(s.slideNextClass, " ").concat(s.slidePrevClass, " ").concat(s.slideDuplicateActiveClass, " ").concat(s.slideDuplicateNextClass, " ").concat(s.slideDuplicatePrevClass)), (l = r ? e.$wrapperEl.find(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(a, "\"]")) : t.eq(a)).addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(n, "\"]")).addClass(s.slideDuplicateActiveClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(n, "\"]")).addClass(s.slideDuplicateActiveClass));
      var o = l.nextAll(".".concat(s.slideClass)).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && (o = t.eq(0)).addClass(s.slideNextClass);
      var d = l.prevAll(".".concat(s.slideClass)).eq(0).addClass(s.slidePrevClass);
      s.loop && 0 === d.length && (d = t.eq(-1)).addClass(s.slidePrevClass), s.loop && (o.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(o.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? i.children(".".concat(s.slideClass, ":not(.").concat(s.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass) : i.children(".".concat(s.slideClass, ".").concat(s.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(d.attr("data-swiper-slide-index"), "\"]")).addClass(s.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          i = t.slidesGrid,
          a = t.snapGrid,
          n = t.params,
          r = t.activeIndex,
          l = t.realIndex,
          o = t.snapIndex;
      var p,
          c = e;

      if (void 0 === c) {
        for (var _e30 = 0; _e30 < i.length; _e30 += 1) {
          void 0 !== i[_e30 + 1] ? s >= i[_e30] && s < i[_e30 + 1] - (i[_e30 + 1] - i[_e30]) / 2 ? c = _e30 : s >= i[_e30] && s < i[_e30 + 1] && (c = _e30 + 1) : s >= i[_e30] && (c = _e30);
        }

        n.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }

      if ((p = a.indexOf(s) >= 0 ? a.indexOf(s) : Math.floor(c / n.slidesPerGroup)) >= a.length && (p = a.length - 1), c === r) return void (p !== o && (t.snapIndex = p, t.emit("snapIndexChange")));
      var h = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
      d.extend(t, {
        snapIndex: p,
        realIndex: h,
        previousIndex: r,
        activeIndex: c
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== h && t.emit("realIndexChange"), t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          s = t.params,
          i = r(e.target).closest(".".concat(s.slideClass))[0];
      var a = !1;
      if (i) for (var _e31 = 0; _e31 < t.slides.length; _e31 += 1) {
        t.slides[_e31] === i && (a = !0);
      }
      if (!i || !a) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = i, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r(i).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r(i).index(), s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var m = {
    getTranslate: function getTranslate() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
      var t = this.params,
          s = this.rtlTranslate,
          i = this.translate,
          a = this.$wrapperEl;
      if (t.virtualTranslate) return s ? -i : i;
      var n = d.getTranslate(a[0], e);
      return s && (n = -n), n || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
          i = s.rtlTranslate,
          a = s.params,
          n = s.$wrapperEl,
          r = s.progress;
      var l,
          o = 0,
          d = 0;
      s.isHorizontal() ? o = i ? -e : e : d = e, a.roundLengths && (o = Math.floor(o), d = Math.floor(d)), a.virtualTranslate || (p.transforms3d ? n.transform("translate3d(".concat(o, "px, ").concat(d, "px, 0px)")) : n.transform("translate(".concat(o, "px, ").concat(d, "px)"))), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : d;
      var c = s.maxTranslate() - s.minTranslate();
      (l = 0 === c ? 0 : (e - s.minTranslate()) / c) !== r && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var f = {
    setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var s = this,
          i = s.activeIndex,
          a = s.params,
          n = s.previousIndex;
      a.autoHeight && s.updateAutoHeight();
      var r = t;

      if (r || (r = i > n ? "next" : i < n ? "prev" : "reset"), s.emit("transitionStart"), e && i !== n) {
        if ("reset" === r) return void s.emit("slideResetTransitionStart");
        s.emit("slideChangeTransitionStart"), "next" === r ? s.emit("slideNextTransitionStart") : s.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function transitionEnd() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var s = this,
          i = s.activeIndex,
          a = s.previousIndex;
      s.animating = !1, s.setTransition(0);
      var n = t;

      if (n || (n = i > a ? "next" : i < a ? "prev" : "reset"), s.emit("transitionEnd"), e && i !== a) {
        if ("reset" === n) return void s.emit("slideResetTransitionEnd");
        s.emit("slideChangeTransitionEnd"), "next" === n ? s.emit("slideNextTransitionEnd") : s.emit("slidePrevTransitionEnd");
      }
    }
  };
  var g = {
    slideTo: function slideTo() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var i = arguments.length > 3 ? arguments[3] : undefined;
      var a = this;
      var n = e;
      n < 0 && (n = 0);
      var r = a.params,
          l = a.snapGrid,
          o = a.slidesGrid,
          d = a.previousIndex,
          c = a.activeIndex,
          h = a.rtlTranslate;
      if (a.animating && r.preventInteractionOnTransition) return !1;
      var u = Math.floor(n / r.slidesPerGroup);
      u >= l.length && (u = l.length - 1), (c || r.initialSlide || 0) === (d || 0) && s && a.emit("beforeSlideChangeStart");
      var m = -l[u];
      if (a.updateProgress(m), r.normalizeSlideIndex) for (var _e32 = 0; _e32 < o.length; _e32 += 1) {
        -Math.floor(100 * m) >= Math.floor(100 * o[_e32]) && (n = _e32);
      }

      if (a.initialized && n !== c) {
        if (!a.allowSlideNext && m < a.translate && m < a.minTranslate()) return !1;
        if (!a.allowSlidePrev && m > a.translate && m > a.maxTranslate() && (c || 0) !== n) return !1;
      }

      var f;
      return f = n > c ? "next" : n < c ? "prev" : "reset", h && -m === a.translate || !h && m === a.translate ? (a.updateActiveIndex(n), r.autoHeight && a.updateAutoHeight(), a.updateSlidesClasses(), "slide" !== r.effect && a.setTranslate(m), "reset" !== f && (a.transitionStart(s, f), a.transitionEnd(s, f)), !1) : (0 !== t && p.transition ? (a.setTransition(t), a.setTranslate(m), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), a.animating || (a.animating = !0, a.onSlideToWrapperTransitionEnd || (a.onSlideToWrapperTransitionEnd = function (e) {
        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd), a.onSlideToWrapperTransitionEnd = null, delete a.onSlideToWrapperTransitionEnd, a.transitionEnd(s, f));
      }), a.$wrapperEl[0].addEventListener("transitionend", a.onSlideToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onSlideToWrapperTransitionEnd))) : (a.setTransition(0), a.setTranslate(m), a.updateActiveIndex(n), a.updateSlidesClasses(), a.emit("beforeTransitionStart", t, i), a.transitionStart(s, f), a.transitionEnd(s, f)), !0);
    },
    slideToLoop: function slideToLoop() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var i = arguments.length > 3 ? arguments[3] : undefined;
      var a = this;
      var n = e;
      return a.params.loop && (n += a.loopedSlides), a.slideTo(n, t, s, i);
    },
    slideNext: function slideNext() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var i = this,
          a = i.params,
          n = i.animating;
      return a.loop ? !n && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s)) : i.slideTo(i.activeIndex + a.slidesPerGroup, e, t, s);
    },
    slidePrev: function slidePrev() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var i = this,
          a = i.params,
          n = i.animating,
          r = i.snapGrid,
          l = i.slidesGrid,
          o = i.rtlTranslate;

      if (a.loop) {
        if (n) return !1;
        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft;
      }

      function d(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var p = d(o ? i.translate : -i.translate),
          c = r.map(function (e) {
        return d(e);
      }),
          h = (l.map(function (e) {
        return d(e);
      }), r[c.indexOf(p)], r[c.indexOf(p) - 1]);
      var u;
      return void 0 !== h && (u = l.indexOf(h)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, s);
    },
    slideReset: function slideReset() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function slideToClosest() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = arguments.length > 2 ? arguments[2] : undefined;
      var i = this;
      var a = i.activeIndex;
      var n = Math.floor(a / i.params.slidesPerGroup);

      if (n < i.snapGrid.length - 1) {
        var _e33 = i.rtlTranslate ? i.translate : -i.translate,
            _t20 = i.snapGrid[n];

        _e33 - _t20 > (i.snapGrid[n + 1] - _t20) / 2 && (a = i.params.slidesPerGroup);
      }

      return i.slideTo(a, e, t, s);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl,
          i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var a,
          n = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        a = parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? n < e.loopedSlides - i / 2 || n > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), n = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(a, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), d.nextTick(function () {
          e.slideTo(n);
        })) : e.slideTo(n) : n > e.slides.length - i ? (e.loopFix(), n = s.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(a, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), d.nextTick(function () {
          e.slideTo(n);
        })) : e.slideTo(n);
      } else e.slideTo(n);
    }
  };
  var v = {
    loopCreate: function loopCreate() {
      var e = this,
          t = e.params,
          s = e.$wrapperEl;
      s.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
      var a = s.children(".".concat(t.slideClass));

      if (t.loopFillGroupWithBlank) {
        var _e34 = t.slidesPerGroup - a.length % t.slidesPerGroup;

        if (_e34 !== t.slidesPerGroup) {
          for (var _a11 = 0; _a11 < _e34; _a11 += 1) {
            var _e35 = r(i.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));

            s.append(_e35);
          }

          a = s.children(".".concat(t.slideClass));
        }
      }

      "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = a.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > a.length && (e.loopedSlides = a.length);
      var n = [],
          l = [];
      a.each(function (t, s) {
        var i = r(s);
        t < e.loopedSlides && l.push(s), t < a.length && t >= a.length - e.loopedSlides && n.push(s), i.attr("data-swiper-slide-index", t);
      });

      for (var _e36 = 0; _e36 < l.length; _e36 += 1) {
        s.append(r(l[_e36].cloneNode(!0)).addClass(t.slideDuplicateClass));
      }

      for (var _e37 = n.length - 1; _e37 >= 0; _e37 -= 1) {
        s.prepend(r(n[_e37].cloneNode(!0)).addClass(t.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this,
          t = e.params,
          s = e.activeIndex,
          i = e.slides,
          a = e.loopedSlides,
          n = e.allowSlidePrev,
          r = e.allowSlideNext,
          l = e.snapGrid,
          o = e.rtlTranslate;
      var d;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var p = -l[s] - e.getTranslate();

      if (s < a) {
        d = i.length - 3 * a + s, d += a, e.slideTo(d, 0, !1, !0) && 0 !== p && e.setTranslate((o ? -e.translate : e.translate) - p);
      } else if ("auto" === t.slidesPerView && s >= 2 * a || s >= i.length - a) {
        d = -i.length + s + a, d += a, e.slideTo(d, 0, !1, !0) && 0 !== p && e.setTranslate((o ? -e.translate : e.translate) - p);
      }

      e.allowSlidePrev = n, e.allowSlideNext = r;
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          s = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), s.removeAttr("data-swiper-slide-index");
    }
  };
  var b = {
    setGrabCursor: function setGrabCursor(e) {
      if (p.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
      var t = this.el;
      t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
    },
    unsetGrabCursor: function unsetGrabCursor() {
      p.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };
  var w = {
    appendSlide: function appendSlide(e) {
      var t = this,
          s = t.$wrapperEl,
          i = t.params;
      if (i.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t21 = 0; _t21 < e.length; _t21 += 1) {
        e[_t21] && s.append(e[_t21]);
      } else s.append(e);
      i.loop && t.loopCreate(), i.observer && p.observer || t.update();
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          s = t.params,
          i = t.$wrapperEl,
          a = t.activeIndex;
      s.loop && t.loopDestroy();
      var n = a + 1;

      if ("object" == _typeof(e) && "length" in e) {
        for (var _t22 = 0; _t22 < e.length; _t22 += 1) {
          e[_t22] && i.prepend(e[_t22]);
        }

        n = a + e.length;
      } else i.prepend(e);

      s.loop && t.loopCreate(), s.observer && p.observer || t.update(), t.slideTo(n, 0, !1);
    },
    addSlide: function addSlide(e, t) {
      var s = this,
          i = s.$wrapperEl,
          a = s.params,
          n = s.activeIndex;
      var r = n;
      a.loop && (r -= s.loopedSlides, s.loopDestroy(), s.slides = i.children(".".concat(a.slideClass)));
      var l = s.slides.length;
      if (e <= 0) return void s.prependSlide(t);
      if (e >= l) return void s.appendSlide(t);
      var o = r > e ? r + 1 : r;
      var d = [];

      for (var _t23 = l - 1; _t23 >= e; _t23 -= 1) {
        var _e38 = s.slides.eq(_t23);

        _e38.remove(), d.unshift(_e38);
      }

      if ("object" == _typeof(t) && "length" in t) {
        for (var _e39 = 0; _e39 < t.length; _e39 += 1) {
          t[_e39] && i.append(t[_e39]);
        }

        o = r > e ? r + t.length : r;
      } else i.append(t);

      for (var _e40 = 0; _e40 < d.length; _e40 += 1) {
        i.append(d[_e40]);
      }

      a.loop && s.loopCreate(), a.observer && p.observer || s.update(), a.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    },
    removeSlide: function removeSlide(e) {
      var t = this,
          s = t.params,
          i = t.$wrapperEl,
          a = t.activeIndex;
      var n = a;
      s.loop && (n -= t.loopedSlides, t.loopDestroy(), t.slides = i.children(".".concat(s.slideClass)));
      var r,
          l = n;

      if ("object" == _typeof(e) && "length" in e) {
        for (var _s27 = 0; _s27 < e.length; _s27 += 1) {
          r = e[_s27], t.slides[r] && t.slides.eq(r).remove(), r < l && (l -= 1);
        }

        l = Math.max(l, 0);
      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < l && (l -= 1), l = Math.max(l, 0);

      s.loop && t.loopCreate(), s.observer && p.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    },
    removeAllSlides: function removeAllSlides() {
      var e = this,
          t = [];

      for (var _s28 = 0; _s28 < e.slides.length; _s28 += 1) {
        t.push(_s28);
      }

      e.removeSlide(t);
    }
  };

  var y = function () {
    var e = a.navigator.userAgent,
        t = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: a.cordova || a.phonegap,
      phonegap: a.cordova || a.phonegap
    },
        s = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = e.match(/(iPad).*OS\s([\d_]+)/),
        l = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        o = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    if (s && (t.os = "windows", t.osVersion = s[2], t.windows = !0), n && !s && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || o || l) && (t.os = "ios", t.ios = !0), o && !l && (t.osVersion = o[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), l && (t.osVersion = l[3] ? l[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (o || r || l) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var _e41 = t.osVersion.split("."),
          _s29 = i.querySelector('meta[name="viewport"]');

      t.minimalUi = !t.webView && (l || o) && (1 * _e41[0] == 7 ? 1 * _e41[1] >= 1 : 1 * _e41[0] > 7) && _s29 && _s29.getAttribute("content").indexOf("minimal-ui") >= 0;
    }

    return t.pixelRatio = a.devicePixelRatio || 1, t;
  }();

  function x(e) {
    var t = this,
        s = t.touchEventsData,
        n = t.params,
        l = t.touches;
    if (t.animating && n.preventInteractionOnTransition) return;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), s.isTouchEvent = "touchstart" === o.type, !s.isTouchEvent && "which" in o && 3 === o.which) return;
    if (!s.isTouchEvent && "button" in o && o.button > 0) return;
    if (s.isTouched && s.isMoved) return;
    if (n.noSwiping && r(o.target).closest(n.noSwipingSelector ? n.noSwipingSelector : ".".concat(n.noSwipingClass))[0]) return void (t.allowClick = !0);
    if (n.swipeHandler && !r(o).closest(n.swipeHandler)[0]) return;
    l.currentX = "touchstart" === o.type ? o.targetTouches[0].pageX : o.pageX, l.currentY = "touchstart" === o.type ? o.targetTouches[0].pageY : o.pageY;
    var p = l.currentX,
        c = l.currentY,
        h = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
        u = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;

    if (!h || !(p <= u || p >= a.screen.width - u)) {
      if (d.extend(s, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), l.startX = p, l.startY = c, s.touchStartTime = d.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (s.allowThresholdMove = !1), "touchstart" !== o.type) {
        var _e42 = !0;

        r(o.target).is(s.formElements) && (_e42 = !1), i.activeElement && r(i.activeElement).is(s.formElements) && i.activeElement !== o.target && i.activeElement.blur();

        var _a12 = _e42 && t.allowTouchMove && n.touchStartPreventDefault;

        (n.touchStartForcePreventDefault || _a12) && o.preventDefault();
      }

      t.emit("touchStart", o);
    }
  }

  function T(e) {
    var t = this,
        s = t.touchEventsData,
        a = t.params,
        n = t.touches,
        l = t.rtlTranslate;
    var o = e;
    if (o.originalEvent && (o = o.originalEvent), !s.isTouched) return void (s.startMoving && s.isScrolling && t.emit("touchMoveOpposite", o));
    if (s.isTouchEvent && "mousemove" === o.type) return;
    var p = "touchmove" === o.type ? o.targetTouches[0].pageX : o.pageX,
        c = "touchmove" === o.type ? o.targetTouches[0].pageY : o.pageY;
    if (o.preventedByNestedSwiper) return n.startX = p, void (n.startY = c);
    if (!t.allowTouchMove) return t.allowClick = !1, void (s.isTouched && (d.extend(n, {
      startX: p,
      startY: c,
      currentX: p,
      currentY: c
    }), s.touchStartTime = d.now()));
    if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop) if (t.isVertical()) {
      if (c < n.startY && t.translate <= t.maxTranslate() || c > n.startY && t.translate >= t.minTranslate()) return s.isTouched = !1, void (s.isMoved = !1);
    } else if (p < n.startX && t.translate <= t.maxTranslate() || p > n.startX && t.translate >= t.minTranslate()) return;
    if (s.isTouchEvent && i.activeElement && o.target === i.activeElement && r(o.target).is(s.formElements)) return s.isMoved = !0, void (t.allowClick = !1);
    if (s.allowTouchCallbacks && t.emit("touchMove", o), o.targetTouches && o.targetTouches.length > 1) return;
    n.currentX = p, n.currentY = c;
    var h = n.currentX - n.startX,
        u = n.currentY - n.startY;
    if (t.params.threshold && Math.sqrt(Math.pow(h, 2) + Math.pow(u, 2)) < t.params.threshold) return;

    if (void 0 === s.isScrolling) {
      var _e43;

      t.isHorizontal() && n.currentY === n.startY || t.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : h * h + u * u >= 25 && (_e43 = 180 * Math.atan2(Math.abs(u), Math.abs(h)) / Math.PI, s.isScrolling = t.isHorizontal() ? _e43 > a.touchAngle : 90 - _e43 > a.touchAngle);
    }

    if (s.isScrolling && t.emit("touchMoveOpposite", o), void 0 === s.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (s.startMoving = !0)), s.isScrolling) return void (s.isTouched = !1);
    if (!s.startMoving) return;
    t.allowClick = !1, o.preventDefault(), a.touchMoveStopPropagation && !a.nested && o.stopPropagation(), s.isMoved || (a.loop && t.loopFix(), s.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, !a.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", o)), t.emit("sliderMove", o), s.isMoved = !0;
    var m = t.isHorizontal() ? h : u;
    n.diff = m, m *= a.touchRatio, l && (m = -m), t.swipeDirection = m > 0 ? "prev" : "next", s.currentTranslate = m + s.startTranslate;
    var f = !0,
        g = a.resistanceRatio;

    if (a.touchReleaseOnEdges && (g = 0), m > 0 && s.currentTranslate > t.minTranslate() ? (f = !1, a.resistance && (s.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + s.startTranslate + m, g))) : m < 0 && s.currentTranslate < t.maxTranslate() && (f = !1, a.resistance && (s.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - s.startTranslate - m, g))), f && (o.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), a.threshold > 0) {
      if (!(Math.abs(m) > a.threshold || s.allowThresholdMove)) return void (s.currentTranslate = s.startTranslate);
      if (!s.allowThresholdMove) return s.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, s.currentTranslate = s.startTranslate, void (n.diff = t.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
    }

    a.followFinger && ((a.freeMode || a.watchSlidesProgress || a.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), a.freeMode && (0 === s.velocities.length && s.velocities.push({
      position: n[t.isHorizontal() ? "startX" : "startY"],
      time: s.touchStartTime
    }), s.velocities.push({
      position: n[t.isHorizontal() ? "currentX" : "currentY"],
      time: d.now()
    })), t.updateProgress(s.currentTranslate), t.setTranslate(s.currentTranslate));
  }

  function E(e) {
    var t = this,
        s = t.touchEventsData,
        i = t.params,
        a = t.touches,
        n = t.rtlTranslate,
        r = t.$wrapperEl,
        l = t.slidesGrid,
        o = t.snapGrid;
    var p = e;
    if (p.originalEvent && (p = p.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", p), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && i.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
    i.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var c = d.now(),
        h = c - s.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(p), t.emit("tap", p), h < 300 && c - s.lastClickTime > 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), s.clickTimeout = d.nextTick(function () {
      t && !t.destroyed && t.emit("click", p);
    }, 300)), h < 300 && c - s.lastClickTime < 300 && (s.clickTimeout && clearTimeout(s.clickTimeout), t.emit("doubleTap", p))), s.lastClickTime = d.now(), d.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === a.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
    var u;

    if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, u = i.followFinger ? n ? t.translate : -t.translate : -s.currentTranslate, i.freeMode) {
      if (u < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (u > -t.maxTranslate()) return void (t.slides.length < o.length ? t.slideTo(o.length - 1) : t.slideTo(t.slides.length - 1));

      if (i.freeModeMomentum) {
        if (s.velocities.length > 1) {
          var _e45 = s.velocities.pop(),
              _a14 = s.velocities.pop(),
              _n10 = _e45.position - _a14.position,
              _r9 = _e45.time - _a14.time;

          t.velocity = _n10 / _r9, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (_r9 > 150 || d.now() - _e45.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= i.freeModeMomentumVelocityRatio, s.velocities.length = 0;

        var _e44 = 1e3 * i.freeModeMomentumRatio;

        var _a13 = t.velocity * _e44;

        var _l6 = t.translate + _a13;

        n && (_l6 = -_l6);

        var _p,
            _c = !1;

        var _h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;

        var _u;

        if (_l6 < t.maxTranslate()) i.freeModeMomentumBounce ? (_l6 + t.maxTranslate() < -_h && (_l6 = t.maxTranslate() - _h), _p = t.maxTranslate(), _c = !0, s.allowMomentumBounce = !0) : _l6 = t.maxTranslate(), i.loop && i.centeredSlides && (_u = !0);else if (_l6 > t.minTranslate()) i.freeModeMomentumBounce ? (_l6 - t.minTranslate() > _h && (_l6 = t.minTranslate() + _h), _p = t.minTranslate(), _c = !0, s.allowMomentumBounce = !0) : _l6 = t.minTranslate(), i.loop && i.centeredSlides && (_u = !0);else if (i.freeModeSticky) {
          var _e46;

          for (var _t24 = 0; _t24 < o.length; _t24 += 1) {
            if (o[_t24] > -_l6) {
              _e46 = _t24;
              break;
            }
          }

          _l6 = -(_l6 = Math.abs(o[_e46] - _l6) < Math.abs(o[_e46 - 1] - _l6) || "next" === t.swipeDirection ? o[_e46] : o[_e46 - 1]);
        }
        if (_u && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) _e44 = n ? Math.abs((-_l6 - t.translate) / t.velocity) : Math.abs((_l6 - t.translate) / t.velocity);else if (i.freeModeSticky) return void t.slideToClosest();
        i.freeModeMomentumBounce && _c ? (t.updateProgress(_p), t.setTransition(_e44), t.setTranslate(_l6), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function () {
          t && !t.destroyed && s.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), t.setTranslate(_p), r.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }));
        })) : t.velocity ? (t.updateProgress(_l6), t.setTransition(_e44), t.setTranslate(_l6), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(_l6), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (i.freeModeSticky) return void t.slideToClosest();

      return void ((!i.freeModeMomentum || h >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
    }

    var m = 0,
        f = t.slidesSizesGrid[0];

    for (var _e47 = 0; _e47 < l.length; _e47 += i.slidesPerGroup) {
      void 0 !== l[_e47 + i.slidesPerGroup] ? u >= l[_e47] && u < l[_e47 + i.slidesPerGroup] && (m = _e47, f = l[_e47 + i.slidesPerGroup] - l[_e47]) : u >= l[_e47] && (m = _e47, f = l[l.length - 1] - l[l.length - 2]);
    }

    var g = (u - l[m]) / f;

    if (h > i.longSwipesMs) {
      if (!i.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(m + i.slidesPerGroup) : t.slideTo(m)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(m + i.slidesPerGroup) : t.slideTo(m));
    } else {
      if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && t.slideTo(m + i.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(m);
    }
  }

  function S() {
    var e = this,
        t = e.params,
        s = e.el;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var i = e.allowSlideNext,
        a = e.allowSlidePrev,
        n = e.snapGrid;

    if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
      var _s30 = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());

      e.setTranslate(_s30), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);

    e.allowSlidePrev = a, e.allowSlideNext = i, e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow();
  }

  function C(e) {
    var t = this;
    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  var $ = {
    init: !0,
    direction: "horizontal",
    touchEventsTarget: "container",
    initialSlide: 0,
    speed: 300,
    preventInteractionOnTransition: !1,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    freeMode: !1,
    freeModeMomentum: !0,
    freeModeMomentumRatio: 1,
    freeModeMomentumBounce: !0,
    freeModeMomentumBounceRatio: 1,
    freeModeMomentumVelocityRatio: 1,
    freeModeSticky: !1,
    freeModeMinimumVelocity: .02,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsInverse: !1,
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerColumn: 1,
    slidesPerColumnFill: "column",
    slidesPerGroup: 1,
    centeredSlides: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !1,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: .5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !0,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: .85,
    watchSlidesProgress: !1,
    watchSlidesVisibility: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    containerModifierClass: "swiper-container-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-invisible-blank",
    slideActiveClass: "swiper-slide-active",
    slideDuplicateActiveClass: "swiper-slide-duplicate-active",
    slideVisibleClass: "swiper-slide-visible",
    slideDuplicateClass: "swiper-slide-duplicate",
    slideNextClass: "swiper-slide-next",
    slideDuplicateNextClass: "swiper-slide-duplicate-next",
    slidePrevClass: "swiper-slide-prev",
    slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
    wrapperClass: "swiper-wrapper",
    runCallbacksOnInit: !0
  };
  var M = {
    update: u,
    translate: m,
    transition: f,
    slide: g,
    loop: v,
    grabCursor: b,
    manipulation: w,
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = e.params,
            s = e.touchEvents,
            a = e.el,
            n = e.wrapperEl;
        e.onTouchStart = x.bind(e), e.onTouchMove = T.bind(e), e.onTouchEnd = E.bind(e), e.onClick = C.bind(e);
        var r = "container" === t.touchEventsTarget ? a : n,
            l = !!t.nested;

        if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
          if (p.touch) {
            var _i13 = !("touchstart" !== s.start || !p.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };

            r.addEventListener(s.start, e.onTouchStart, _i13), r.addEventListener(s.move, e.onTouchMove, p.passiveListener ? {
              passive: !1,
              capture: l
            } : l), r.addEventListener(s.end, e.onTouchEnd, _i13);
          }

          (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !p.touch && y.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), i.addEventListener("mousemove", e.onTouchMove, l), i.addEventListener("mouseup", e.onTouchEnd, !1));
        } else r.addEventListener(s.start, e.onTouchStart, !1), i.addEventListener(s.move, e.onTouchMove, l), i.addEventListener(s.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = e.params,
            s = e.touchEvents,
            a = e.el,
            n = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? a : n,
            l = !!t.nested;

        if (p.touch || !p.pointerEvents && !p.prefixedPointerEvents) {
          if (p.touch) {
            var _i14 = !("onTouchStart" !== s.start || !p.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };

            r.removeEventListener(s.start, e.onTouchStart, _i14), r.removeEventListener(s.move, e.onTouchMove, l), r.removeEventListener(s.end, e.onTouchEnd, _i14);
          }

          (t.simulateTouch && !y.ios && !y.android || t.simulateTouch && !p.touch && y.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), i.removeEventListener("mousemove", e.onTouchMove, l), i.removeEventListener("mouseup", e.onTouchEnd, !1));
        } else r.removeEventListener(s.start, e.onTouchStart, !1), i.removeEventListener(s.move, e.onTouchMove, l), i.removeEventListener(s.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(y.ios || y.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", S);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            s = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            i = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            a = e.params,
            n = a.breakpoints;
        if (!n || n && 0 === Object.keys(n).length) return;
        var r = e.getBreakpoint(n);

        if (r && e.currentBreakpoint !== r) {
          var _l7 = r in n ? n[r] : void 0;

          _l7 && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
            var t = _l7[e];
            void 0 !== t && (_l7[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
          });

          var _o2 = _l7 || e.originalParams,
              _p2 = _o2.direction && _o2.direction !== a.direction,
              _c2 = a.loop && (_o2.slidesPerView !== a.slidesPerView || _p2);

          _p2 && s && e.changeDirection(), d.extend(e.params, _o2), d.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), e.currentBreakpoint = r, _c2 && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - i + e.loopedSlides, 0, !1)), e.emit("breakpoint", _o2);
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = this;
        if (!e) return;
        var s = !1;
        var i = [];
        Object.keys(e).forEach(function (e) {
          i.push(e);
        }), i.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });

        for (var _e48 = 0; _e48 < i.length; _e48 += 1) {
          var _n11 = i[_e48];
          t.params.breakpointsInverse ? _n11 <= a.innerWidth && (s = _n11) : _n11 >= a.innerWidth && !s && (s = _n11);
        }

        return s || "max";
      }
    },
    checkOverflow: {
      checkOverflow: function checkOverflow() {
        var e = this,
            t = e.isLocked;
        e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), t && t !== e.isLocked && (e.isEnd = !1, e.navigation.update());
      }
    },
    classes: {
      addClasses: function addClasses() {
        var e = this.classNames,
            t = this.params,
            s = this.rtl,
            i = this.$el,
            a = [];
        a.push("initialized"), a.push(t.direction), t.freeMode && a.push("free-mode"), p.flexbox || a.push("no-flexbox"), t.autoHeight && a.push("autoheight"), s && a.push("rtl"), t.slidesPerColumn > 1 && a.push("multirow"), y.android && a.push("android"), y.ios && a.push("ios"), (c.isIE || c.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && a.push("wp8-".concat(t.direction)), a.forEach(function (s) {
          e.push(t.containerModifierClass + s);
        }), i.addClass(e.join(" "));
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" "));
      }
    },
    images: {
      loadImage: function loadImage(e, t, s, i, n, r) {
        var l;

        function o() {
          r && r();
        }

        e.complete && n ? o() : t ? ((l = new a.Image()).onload = o, l.onerror = o, i && (l.sizes = i), s && (l.srcset = s), t && (l.src = t)) : o();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _s31 = 0; _s31 < e.imagesToLoad.length; _s31 += 1) {
          var _i15 = e.imagesToLoad[_s31];
          e.loadImage(_i15, _i15.currentSrc || _i15.getAttribute("src"), _i15.srcset || _i15.getAttribute("srcset"), _i15.sizes || _i15.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      P = {};

  var z =
  /*#__PURE__*/
  function (_h2) {
    _inherits(z, _h2);

    function z() {
      var _e49, _e50;

      var _this;

      _classCallCheck(this, z);

      var t, s;

      for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        e[_key9] = arguments[_key9];
      }

      1 === e.length && e[0].constructor && e[0].constructor === Object ? s = e[0] : (_e49 = e, _e50 = _slicedToArray(_e49, 2), t = _e50[0], s = _e50[1], _e49), s || (s = {}), s = d.extend({}, s), t && !s.el && (s.el = t), _this = _possibleConstructorReturn(this, _getPrototypeOf(z).call(this, s)), Object.keys(M).forEach(function (e) {
        Object.keys(M[e]).forEach(function (t) {
          z.prototype[t] || (z.prototype[t] = M[e][t]);
        });
      });

      var i = _assertThisInitialized(_this);

      void 0 === i.modules && (i.modules = {}), Object.keys(i.modules).forEach(function (e) {
        var t = i.modules[e];

        if (t.params) {
          var _e51 = Object.keys(t.params)[0],
              _i16 = t.params[_e51];
          if ("object" != _typeof(_i16) || null === _i16) return;
          if (!(_e51 in s && "enabled" in _i16)) return;
          !0 === s[_e51] && (s[_e51] = {
            enabled: !0
          }), "object" != _typeof(s[_e51]) || "enabled" in s[_e51] || (s[_e51].enabled = !0), s[_e51] || (s[_e51] = {
            enabled: !1
          });
        }
      });
      var a = d.extend({}, $);
      i.useModulesParams(a), i.params = d.extend({}, a, P, s), i.originalParams = d.extend({}, i.params), i.passedParams = d.extend({}, s), i.$ = r;
      var n = r(i.params.el);
      if (!(t = n[0])) return _possibleConstructorReturn(_this);

      if (n.length > 1) {
        var _e52 = [];
        return _possibleConstructorReturn(_this, (n.each(function (t, i) {
          var a = d.extend({}, s, {
            el: i
          });

          _e52.push(new z(a));
        }), _e52));
      }

      t.swiper = i, n.data("swiper", i);
      var l = n.children(".".concat(i.params.wrapperClass));
      return _possibleConstructorReturn(_this, (d.extend(i, {
        $el: n,
        el: t,
        $wrapperEl: l,
        wrapperEl: l[0],
        classNames: [],
        slides: r(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === i.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === i.params.direction;
        },
        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
        rtlTranslate: "horizontal" === i.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
        wrongRTL: "-webkit-box" === l.css("display"),
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: i.params.allowSlideNext,
        allowSlidePrev: i.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend"];
          var t = ["mousedown", "mousemove", "mouseup"];
          return p.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : p.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), i.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2]
          }, i.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, p.touch || !i.params.simulateTouch ? i.touchEventsTouch : i.touchEventsDesktop;
        }(),
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          formElements: "input, select, option, textarea, button, video",
          lastClickTime: d.now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: i.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), i.useModules(), i.params.init && i.init(), i));
    }

    _createClass(z, [{
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = this.params,
            t = this.slides,
            s = this.slidesGrid,
            i = this.size,
            a = this.activeIndex;
        var n = 1;

        if (e.centeredSlides) {
          var _e53,
              _s32 = t[a].swiperSlideSize;

          for (var _r10 = a + 1; _r10 < t.length; _r10 += 1) {
            t[_r10] && !_e53 && (n += 1, (_s32 += t[_r10].swiperSlideSize) > i && (_e53 = !0));
          }

          for (var _r11 = a - 1; _r11 >= 0; _r11 -= 1) {
            t[_r11] && !_e53 && (n += 1, (_s32 += t[_r11].swiperSlideSize) > i && (_e53 = !0));
          }
        } else for (var _e54 = a + 1; _e54 < t.length; _e54 += 1) {
          s[_e54] - s[a] < i && (n += 1);
        }

        return n;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            s = e.params;

        function i() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var a;
        s.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (i(), e.params.autoHeight && e.updateAutoHeight()) : (a = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || i(), s.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            i = s.params.direction;
        return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e ? s : ("vertical" === i && (s.$el.removeClass("".concat(s.params.containerModifierClass, "vertical wp8-vertical")).addClass("".concat(s.params.containerModifierClass).concat(e)), (c.isIE || c.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && s.$el.addClass("".concat(s.params.containerModifierClass, "wp8-").concat(e))), "horizontal" === i && (s.$el.removeClass("".concat(s.params.containerModifierClass, "horizontal wp8-horizontal")).addClass("".concat(s.params.containerModifierClass).concat(e)), (c.isIE || c.isEdge) && (p.pointerEvents || p.prefixedPointerEvents) && s.$el.addClass("".concat(s.params.containerModifierClass, "wp8-").concat(e))), s.params.direction = e, s.slides.each(function (t, s) {
          "vertical" === e ? s.style.width = "" : s.style.height = "";
        }), s.emit("changeDirection"), t && s.update(), s);
      }
    }, {
      key: "init",
      value: function init() {
        var e = this;
        e.initialized || (e.emit("beforeInit"), e.params.breakpoints && e.setBreakpoint(), e.addClasses(), e.params.loop && e.loopCreate(), e.updateSize(), e.updateSlides(), e.params.watchOverflow && e.checkOverflow(), e.params.grabCursor && e.setGrabCursor(), e.params.preloadImages && e.preloadImages(), e.params.loop ? e.slideTo(e.params.initialSlide + e.loopedSlides, 0, e.params.runCallbacksOnInit) : e.slideTo(e.params.initialSlide, 0, e.params.runCallbacksOnInit), e.attachEvents(), e.initialized = !0, e.emit("init"));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var s = this,
            i = s.params,
            a = s.$el,
            n = s.$wrapperEl,
            r = s.slides;
        return void 0 === s.params || s.destroyed ? null : (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), i.loop && s.loopDestroy(), t && (s.removeClasses(), a.removeAttr("style"), n.removeAttr("style"), r && r.length && r.removeClass([i.slideVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach(function (e) {
          s.off(e);
        }), !1 !== e && (s.$el[0].swiper = null, s.$el.data("swiper", null), d.deleteProps(s)), s.destroyed = !0, null);
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        d.extend(P, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return P;
      }
    }, {
      key: "defaults",
      get: function get() {
        return $;
      }
    }, {
      key: "Class",
      get: function get() {
        return h;
      }
    }, {
      key: "$",
      get: function get() {
        return r;
      }
    }]);

    return z;
  }(h);

  var k = {
    name: "device",
    proto: {
      device: y
    },
    "static": {
      device: y
    }
  },
      L = {
    name: "support",
    proto: {
      support: p
    },
    "static": {
      support: p
    }
  },
      I = {
    name: "browser",
    proto: {
      browser: c
    },
    "static": {
      browser: c
    }
  },
      D = {
    name: "resize",
    create: function create() {
      var e = this;
      d.extend(e, {
        resize: {
          resizeHandler: function resizeHandler() {
            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"));
          },
          orientationChangeHandler: function orientationChangeHandler() {
            e && !e.destroyed && e.initialized && e.emit("orientationchange");
          }
        }
      });
    },
    on: {
      init: function init() {
        a.addEventListener("resize", this.resize.resizeHandler), a.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        a.removeEventListener("resize", this.resize.resizeHandler), a.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  };
  var O = {
    func: a.MutationObserver || a.WebkitMutationObserver,
    attach: function attach(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var s = this,
          i = new (0, O.func)(function (e) {
        if (1 === e.length) return void s.emit("observerUpdate", e[0]);

        var t = function t() {
          s.emit("observerUpdate", e[0]);
        };

        a.requestAnimationFrame ? a.requestAnimationFrame(t) : a.setTimeout(t, 0);
      });
      i.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), s.observer.observers.push(i);
    },
    init: function init() {
      var e = this;

      if (p.observer && e.params.observer) {
        if (e.params.observeParents) {
          var _t25 = e.$el.parents();

          for (var _s33 = 0; _s33 < _t25.length; _s33 += 1) {
            e.observer.attach(_t25[_s33]);
          }
        }

        e.observer.attach(e.$el[0], {
          childList: e.params.observeSlideChildren
        }), e.observer.attach(e.$wrapperEl[0], {
          attributes: !1
        });
      }
    },
    destroy: function destroy() {
      this.observer.observers.forEach(function (e) {
        e.disconnect();
      }), this.observer.observers = [];
    }
  };
  var A = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      d.extend(this, {
        observer: {
          init: O.init.bind(this),
          attach: O.attach.bind(this),
          destroy: O.destroy.bind(this),
          observers: []
        }
      });
    },
    on: {
      init: function init() {
        this.observer.init();
      },
      destroy: function destroy() {
        this.observer.destroy();
      }
    }
  };
  var H = {
    update: function update(e) {
      var t = this,
          _t$params = t.params,
          s = _t$params.slidesPerView,
          i = _t$params.slidesPerGroup,
          a = _t$params.centeredSlides,
          _t$params$virtual = t.params.virtual,
          n = _t$params$virtual.addSlidesBefore,
          r = _t$params$virtual.addSlidesAfter,
          _t$virtual = t.virtual,
          l = _t$virtual.from,
          o = _t$virtual.to,
          p = _t$virtual.slides,
          c = _t$virtual.slidesGrid,
          h = _t$virtual.renderSlide,
          u = _t$virtual.offset;
      t.updateActiveIndex();
      var m = t.activeIndex || 0;
      var f, g, v;
      f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", a ? (g = Math.floor(s / 2) + i + n, v = Math.floor(s / 2) + i + r) : (g = s + (i - 1) + n, v = i + r);
      var b = Math.max((m || 0) - v, 0),
          w = Math.min((m || 0) + g, p.length - 1),
          y = (t.slidesGrid[b] || 0) - (t.slidesGrid[0] || 0);

      function x() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (d.extend(t.virtual, {
        from: b,
        to: w,
        offset: y,
        slidesGrid: t.slidesGrid
      }), l === b && o === w && !e) return t.slidesGrid !== c && y !== u && t.slides.css(f, "".concat(y, "px")), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: y,
        from: b,
        to: w,
        slides: function () {
          var e = [];

          for (var _t26 = b; _t26 <= w; _t26 += 1) {
            e.push(p[_t26]);
          }

          return e;
        }()
      }), void x();
      var T = [],
          E = [];
      if (e) t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();else for (var _e55 = l; _e55 <= o; _e55 += 1) {
        (_e55 < b || _e55 > w) && t.$wrapperEl.find(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(_e55, "\"]")).remove();
      }

      for (var _t27 = 0; _t27 < p.length; _t27 += 1) {
        _t27 >= b && _t27 <= w && (void 0 === o || e ? E.push(_t27) : (_t27 > o && E.push(_t27), _t27 < l && T.push(_t27)));
      }

      E.forEach(function (e) {
        t.$wrapperEl.append(h(p[e], e));
      }), T.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(h(p[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(f, "".concat(y, "px")), x();
    },
    renderSlide: function renderSlide(e, t) {
      var s = this,
          i = s.params.virtual;
      if (i.cache && s.virtual.cache[t]) return s.virtual.cache[t];
      var a = i.renderSlide ? r(i.renderSlide.call(s, e, t)) : r("<div class=\"".concat(s.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return a.attr("data-swiper-slide-index") || a.attr("data-swiper-slide-index", t), i.cache && (s.virtual.cache[t] = a), a;
    },
    appendSlide: function appendSlide(e) {
      var t = this;
      if ("object" == _typeof(e) && "length" in e) for (var _s34 = 0; _s34 < e.length; _s34 += 1) {
        e[_s34] && t.virtual.slides.push(e[_s34]);
      } else t.virtual.slides.push(e);
      t.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          s = t.activeIndex;
      var i = s + 1,
          a = 1;

      if (Array.isArray(e)) {
        for (var _s35 = 0; _s35 < e.length; _s35 += 1) {
          e[_s35] && t.virtual.slides.unshift(e[_s35]);
        }

        i = s + e.length, a = e.length;
      } else t.virtual.slides.unshift(e);

      if (t.params.virtual.cache) {
        var _e56 = t.virtual.cache,
            _s36 = {};
        Object.keys(_e56).forEach(function (t) {
          _s36[parseInt(t, 10) + a] = _e56[t];
        }), t.virtual.cache = _s36;
      }

      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeSlide: function removeSlide(e) {
      var t = this;
      if (null == e) return;
      var s = t.activeIndex;
      if (Array.isArray(e)) for (var _i17 = e.length - 1; _i17 >= 0; _i17 -= 1) {
        t.virtual.slides.splice(e[_i17], 1), t.params.virtual.cache && delete t.virtual.cache[e[_i17]], e[_i17] < s && (s -= 1), s = Math.max(s, 0);
      } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < s && (s -= 1), s = Math.max(s, 0);
      t.virtual.update(!0), t.slideTo(s, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  };
  var N = {
    name: "virtual",
    params: {
      virtual: {
        enabled: !1,
        slides: [],
        cache: !0,
        renderSlide: null,
        renderExternal: null,
        addSlidesBefore: 0,
        addSlidesAfter: 0
      }
    },
    create: function create() {
      d.extend(this, {
        virtual: {
          update: H.update.bind(this),
          appendSlide: H.appendSlide.bind(this),
          prependSlide: H.prependSlide.bind(this),
          removeSlide: H.removeSlide.bind(this),
          removeAllSlides: H.removeAllSlides.bind(this),
          renderSlide: H.renderSlide.bind(this),
          slides: this.params.virtual.slides,
          cache: {}
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;
        if (!e.params.virtual.enabled) return;
        e.classNames.push("".concat(e.params.containerModifierClass, "virtual"));
        var t = {
          watchSlidesProgress: !0
        };
        d.extend(e.params, t), d.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
      },
      setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  };
  var B = {
    handle: function handle(e) {
      var t = this,
          s = t.rtlTranslate;
      var n = e;
      n.originalEvent && (n = n.originalEvent);
      var r = n.keyCode || n.charCode;
      if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;

      if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
          var _e57 = !1;

          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

          var _i18 = a.innerWidth,
              _n12 = a.innerHeight,
              _r12 = t.$el.offset();

          s && (_r12.left -= t.$el[0].scrollLeft);
          var _l8 = [[_r12.left, _r12.top], [_r12.left + t.width, _r12.top], [_r12.left, _r12.top + t.height], [_r12.left + t.width, _r12.top + t.height]];

          for (var _t28 = 0; _t28 < _l8.length; _t28 += 1) {
            var _s37 = _l8[_t28];
            _s37[0] >= 0 && _s37[0] <= _i18 && _s37[1] >= 0 && _s37[1] <= _n12 && (_e57 = !0);
          }

          if (!_e57) return;
        }

        t.isHorizontal() ? (37 !== r && 39 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === r && !s || 37 === r && s) && t.slideNext(), (37 === r && !s || 39 === r && s) && t.slidePrev()) : (38 !== r && 40 !== r || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r);
      }
    },
    enable: function enable() {
      this.keyboard.enabled || (r(i).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      this.keyboard.enabled && (r(i).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  };
  var G = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function create() {
      d.extend(this, {
        keyboard: {
          enabled: !1,
          enable: B.enable.bind(this),
          disable: B.disable.bind(this),
          handle: B.handle.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        var e = this;
        e.params.keyboard.enabled && e.keyboard.enable();
      },
      destroy: function destroy() {
        var e = this;
        e.keyboard.enabled && e.keyboard.disable();
      }
    }
  };
  var X = {
    lastScrollTime: d.now(),
    event: a.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
      var e = "onwheel" in i;

      if (!e) {
        var _t29 = i.createElement("div");

        _t29.setAttribute("onwheel", "return;"), e = "function" == typeof _t29.onwheel;
      }

      return !e && i.implementation && i.implementation.hasFeature && !0 !== i.implementation.hasFeature("", "") && (e = i.implementation.hasFeature("Events.wheel", "3.0")), e;
    }() ? "wheel" : "mousewheel",
    normalize: function normalize(e) {
      var t = 0,
          s = 0,
          i = 0,
          a = 0;
      return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), i = 10 * t, a = 10 * s, "deltaY" in e && (a = e.deltaY), "deltaX" in e && (i = e.deltaX), (i || a) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, a *= 40) : (i *= 800, a *= 800)), i && !t && (t = i < 1 ? -1 : 1), a && !s && (s = a < 1 ? -1 : 1), {
        spinX: t,
        spinY: s,
        pixelX: i,
        pixelY: a
      };
    },
    handleMouseEnter: function handleMouseEnter() {
      this.mouseEntered = !0;
    },
    handleMouseLeave: function handleMouseLeave() {
      this.mouseEntered = !1;
    },
    handle: function handle(e) {
      var t = e;
      var s = this,
          i = s.params.mousewheel;
      if (!s.mouseEntered && !i.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var n = 0;
      var r = s.rtlTranslate ? -1 : 1,
          l = X.normalize(t);
      if (i.forceToAxis) {
        if (s.isHorizontal()) {
          if (!(Math.abs(l.pixelX) > Math.abs(l.pixelY))) return !0;
          n = l.pixelX * r;
        } else {
          if (!(Math.abs(l.pixelY) > Math.abs(l.pixelX))) return !0;
          n = l.pixelY;
        }
      } else n = Math.abs(l.pixelX) > Math.abs(l.pixelY) ? -l.pixelX * r : -l.pixelY;
      if (0 === n) return !0;

      if (i.invert && (n = -n), s.params.freeMode) {
        s.params.loop && s.loopFix();

        var _e58 = s.getTranslate() + n * i.sensitivity;

        var _a15 = s.isBeginning,
            _r13 = s.isEnd;
        if (_e58 >= s.minTranslate() && (_e58 = s.minTranslate()), _e58 <= s.maxTranslate() && (_e58 = s.maxTranslate()), s.setTransition(0), s.setTranslate(_e58), s.updateProgress(), s.updateActiveIndex(), s.updateSlidesClasses(), (!_a15 && s.isBeginning || !_r13 && s.isEnd) && s.updateSlidesClasses(), s.params.freeModeSticky && (clearTimeout(s.mousewheel.timeout), s.mousewheel.timeout = d.nextTick(function () {
          s.slideToClosest();
        }, 300)), s.emit("scroll", t), s.params.autoplay && s.params.autoplayDisableOnInteraction && s.autoplay.stop(), _e58 === s.minTranslate() || _e58 === s.maxTranslate()) return !0;
      } else {
        if (d.now() - s.mousewheel.lastScrollTime > 60) if (n < 0) {
          if (s.isEnd && !s.params.loop || s.animating) {
            if (i.releaseOnEdges) return !0;
          } else s.slideNext(), s.emit("scroll", t);
        } else if (s.isBeginning && !s.params.loop || s.animating) {
          if (i.releaseOnEdges) return !0;
        } else s.slidePrev(), s.emit("scroll", t);
        s.mousewheel.lastScrollTime = new a.Date().getTime();
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    enable: function enable() {
      var e = this;
      if (!X.event) return !1;
      if (e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(X.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = this;
      if (!X.event) return !1;
      if (!e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.off(X.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
    }
  };
  var Y = {
    update: function update() {
      var e = this,
          t = e.params.navigation;
      if (e.params.loop) return;
      var _e$navigation = e.navigation,
          s = _e$navigation.$nextEl,
          i = _e$navigation.$prevEl;
      i && i.length > 0 && (e.isBeginning ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), s && s.length > 0 && (e.isEnd ? s.addClass(t.disabledClass) : s.removeClass(t.disabledClass), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
    },
    onPrevClick: function onPrevClick(e) {
      e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev();
    },
    onNextClick: function onNextClick(e) {
      e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext();
    },
    init: function init() {
      var e = this,
          t = e.params.navigation;
      if (!t.nextEl && !t.prevEl) return;
      var s, i;
      t.nextEl && (s = r(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && s.length > 1 && 1 === e.$el.find(t.nextEl).length && (s = e.$el.find(t.nextEl))), t.prevEl && (i = r(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && i.length > 1 && 1 === e.$el.find(t.prevEl).length && (i = e.$el.find(t.prevEl))), s && s.length > 0 && s.on("click", e.navigation.onNextClick), i && i.length > 0 && i.on("click", e.navigation.onPrevClick), d.extend(e.navigation, {
        $nextEl: s,
        nextEl: s && s[0],
        $prevEl: i,
        prevEl: i && i[0]
      });
    },
    destroy: function destroy() {
      var e = this,
          _e$navigation2 = e.navigation,
          t = _e$navigation2.$nextEl,
          s = _e$navigation2.$prevEl;
      t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), s && s.length && (s.off("click", e.navigation.onPrevClick), s.removeClass(e.params.navigation.disabledClass));
    }
  };
  var V = {
    update: function update() {
      var e = this,
          t = e.rtl,
          s = e.params.pagination;
      if (!s.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
      var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          a = e.pagination.$el;
      var n;
      var l = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? ((n = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > i - 1 - 2 * e.loopedSlides && (n -= i - 2 * e.loopedSlides), n > l - 1 && (n -= l), n < 0 && "bullets" !== e.params.paginationType && (n = l + n)) : n = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === s.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _i19 = e.pagination.bullets;

        var _l9, _o3, _d2;

        if (s.dynamicBullets && (e.pagination.bulletSize = _i19.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", "".concat(e.pagination.bulletSize * (s.dynamicMainBullets + 4), "px")), s.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += n - e.previousIndex, e.pagination.dynamicBulletIndex > s.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = s.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), _l9 = n - e.pagination.dynamicBulletIndex, _d2 = ((_o3 = _l9 + (Math.min(_i19.length, s.dynamicMainBullets) - 1)) + _l9) / 2), _i19.removeClass("".concat(s.bulletActiveClass, " ").concat(s.bulletActiveClass, "-next ").concat(s.bulletActiveClass, "-next-next ").concat(s.bulletActiveClass, "-prev ").concat(s.bulletActiveClass, "-prev-prev ").concat(s.bulletActiveClass, "-main")), a.length > 1) _i19.each(function (e, t) {
          var i = r(t),
              a = i.index();
          a === n && i.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= _l9 && a <= _o3 && i.addClass("".concat(s.bulletActiveClass, "-main")), a === _l9 && i.prev().addClass("".concat(s.bulletActiveClass, "-prev")).prev().addClass("".concat(s.bulletActiveClass, "-prev-prev")), a === _o3 && i.next().addClass("".concat(s.bulletActiveClass, "-next")).next().addClass("".concat(s.bulletActiveClass, "-next-next")));
        });else {
          if (_i19.eq(n).addClass(s.bulletActiveClass), s.dynamicBullets) {
            var _e59 = _i19.eq(_l9),
                _t30 = _i19.eq(_o3);

            for (var _e60 = _l9; _e60 <= _o3; _e60 += 1) {
              _i19.eq(_e60).addClass("".concat(s.bulletActiveClass, "-main"));
            }

            _e59.prev().addClass("".concat(s.bulletActiveClass, "-prev")).prev().addClass("".concat(s.bulletActiveClass, "-prev-prev")), _t30.next().addClass("".concat(s.bulletActiveClass, "-next")).next().addClass("".concat(s.bulletActiveClass, "-next-next"));
          }
        }

        if (s.dynamicBullets) {
          var _a16 = Math.min(_i19.length, s.dynamicMainBullets + 4),
              _n13 = (e.pagination.bulletSize * _a16 - e.pagination.bulletSize) / 2 - _d2 * e.pagination.bulletSize,
              _r14 = t ? "right" : "left";

          _i19.css(e.isHorizontal() ? _r14 : "top", "".concat(_n13, "px"));
        }
      }

      if ("fraction" === s.type && (a.find(".".concat(s.currentClass)).text(s.formatFractionCurrent(n + 1)), a.find(".".concat(s.totalClass)).text(s.formatFractionTotal(l))), "progressbar" === s.type) {
        var _t31;

        _t31 = s.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _i20 = (n + 1) / l;

        var _r15 = 1,
            _o4 = 1;
        "horizontal" === _t31 ? _r15 = _i20 : _o4 = _i20, a.find(".".concat(s.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_r15, ") scaleY(").concat(_o4, ")")).transition(e.params.speed);
      }

      "custom" === s.type && s.renderCustom ? (a.html(s.renderCustom(e, n + 1, l)), e.emit("paginationRender", e, a[0])) : e.emit("paginationUpdate", e, a[0]), a[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;
      if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
      var s = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          i = e.pagination.$el;
      var a = "";

      if ("bullets" === t.type) {
        var _n14 = e.params.loop ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        for (var _s38 = 0; _s38 < _n14; _s38 += 1) {
          t.renderBullet ? a += t.renderBullet.call(e, _s38, t.bulletClass) : a += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
        }

        i.html(a), e.pagination.bullets = i.find(".".concat(t.bulletClass));
      }

      "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : "<span class=\"".concat(t.currentClass, "\"></span>") + " / " + "<span class=\"".concat(t.totalClass, "\"></span>"), i.html(a)), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : "<span class=\"".concat(t.progressbarFillClass, "\"></span>"), i.html(a)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;
      if (!t.el) return;
      var s = r(t.el);
      0 !== s.length && (e.params.uniqueNavElements && "string" == typeof t.el && s.length > 1 && 1 === e.$el.find(t.el).length && (s = e.$el.find(t.el)), "bullets" === t.type && t.clickable && s.addClass(t.clickableClass), s.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (s.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && s.addClass(t.progressbarOppositeClass), t.clickable && s.on("click", ".".concat(t.bulletClass), function (t) {
        t.preventDefault();
        var s = r(this).index() * e.params.slidesPerGroup;
        e.params.loop && (s += e.loopedSlides), e.slideTo(s);
      }), d.extend(e.pagination, {
        $el: s,
        el: s[0]
      }));
    },
    destroy: function destroy() {
      var e = this.params.pagination;
      if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
      var t = this.pagination.$el;
      t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", ".".concat(e.bulletClass));
    }
  };
  var F = {
    setTranslate: function setTranslate() {
      var e = this;
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          s = e.rtlTranslate,
          i = e.progress,
          a = t.dragSize,
          n = t.trackSize,
          r = t.$dragEl,
          l = t.$el,
          o = e.params.scrollbar;
      var d = a,
          c = (n - a) * i;
      s ? (c = -c) > 0 ? (d = a - c, c = 0) : -c + a > n && (d = n + c) : c < 0 ? (d = a + c, c = 0) : c + a > n && (d = n - c), e.isHorizontal() ? (p.transforms3d ? r.transform("translate3d(".concat(c, "px, 0, 0)")) : r.transform("translateX(".concat(c, "px)")), r[0].style.width = "".concat(d, "px")) : (p.transforms3d ? r.transform("translate3d(0px, ".concat(c, "px, 0)")) : r.transform("translateY(".concat(c, "px)")), r[0].style.height = "".concat(d, "px")), o.hide && (clearTimeout(e.scrollbar.timeout), l[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
        l[0].style.opacity = 0, l.transition(400);
      }, 1e3));
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      var e = this;
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          s = t.$dragEl,
          i = t.$el;
      s[0].style.width = "", s[0].style.height = "";
      var a = e.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight,
          n = e.size / e.virtualSize,
          r = n * (a / e.size);
      var l;
      l = "auto" === e.params.scrollbar.dragSize ? a * n : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? s[0].style.width = "".concat(l, "px") : s[0].style.height = "".concat(l, "px"), i[0].style.display = n >= 1 ? "none" : "", e.params.scrollbar.hide && (i[0].style.opacity = 0), d.extend(t, {
        trackSize: a,
        divider: n,
        moveDivider: r,
        dragSize: l
      }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var t = this.scrollbar,
          s = this.rtlTranslate,
          i = t.$el,
          a = t.dragSize,
          n = t.trackSize;
      var r, l;
      l = ((r = this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - i.offset()[this.isHorizontal() ? "left" : "top"] - a / 2) / (n - a), l = Math.max(Math.min(l, 1), 0), s && (l = 1 - l);
      var o = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * l;
      this.updateProgress(o), this.setTranslate(o), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          s = this.scrollbar,
          i = this.$wrapperEl,
          a = s.$el,
          n = s.$dragEl;
      this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), i.transition(100), n.transition(100), s.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), a.transition(0), t.hide && a.css("opacity", 1), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          s = this.$wrapperEl,
          i = t.$el,
          a = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), s.transition(0), i.transition(0), a.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this,
          s = t.params.scrollbar,
          i = t.scrollbar,
          a = i.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, s.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = d.nextTick(function () {
        a.css("opacity", 0), a.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          s = e.touchEventsTouch,
          a = e.touchEventsDesktop,
          n = e.params,
          r = t.$el[0],
          l = !(!p.passiveListener || !n.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          o = !(!p.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      p.touch ? (r.addEventListener(s.start, e.scrollbar.onDragStart, l), r.addEventListener(s.move, e.scrollbar.onDragMove, l), r.addEventListener(s.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(a.start, e.scrollbar.onDragStart, l), i.addEventListener(a.move, e.scrollbar.onDragMove, l), i.addEventListener(a.end, e.scrollbar.onDragEnd, o));
    },
    disableDraggable: function disableDraggable() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          s = e.touchEventsTouch,
          a = e.touchEventsDesktop,
          n = e.params,
          r = t.$el[0],
          l = !(!p.passiveListener || !n.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          o = !(!p.passiveListener || !n.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      p.touch ? (r.removeEventListener(s.start, e.scrollbar.onDragStart, l), r.removeEventListener(s.move, e.scrollbar.onDragMove, l), r.removeEventListener(s.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(a.start, e.scrollbar.onDragStart, l), i.removeEventListener(a.move, e.scrollbar.onDragMove, l), i.removeEventListener(a.end, e.scrollbar.onDragEnd, o));
    },
    init: function init() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          s = e.$el,
          i = e.params.scrollbar;
      var a = r(i.el);
      e.params.uniqueNavElements && "string" == typeof i.el && a.length > 1 && 1 === s.find(i.el).length && (a = s.find(i.el));
      var n = a.find(".".concat(e.params.scrollbar.dragClass));
      0 === n.length && (n = r("<div class=\"".concat(e.params.scrollbar.dragClass, "\"></div>")), a.append(n)), d.extend(t, {
        $el: a,
        el: a[0],
        $dragEl: n,
        dragEl: n[0]
      }), i.draggable && t.enableDraggable();
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  };
  var R = {
    setTransform: function setTransform(e, t) {
      var s = this.rtl,
          i = r(e),
          a = s ? -1 : 1,
          n = i.attr("data-swiper-parallax") || "0";
      var l = i.attr("data-swiper-parallax-x"),
          o = i.attr("data-swiper-parallax-y");
      var d = i.attr("data-swiper-parallax-scale"),
          p = i.attr("data-swiper-parallax-opacity");

      if (l || o ? (l = l || "0", o = o || "0") : this.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? "".concat(parseInt(l, 10) * t * a, "%") : "".concat(l * t * a, "px"), o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * t, "%") : "".concat(o * t, "px"), null != p) {
        var _e61 = p - (p - 1) * (1 - Math.abs(t));

        i[0].style.opacity = _e61;
      }

      if (null == d) i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px)"));else {
        var _e62 = d - (d - 1) * (1 - Math.abs(t));

        i.transform("translate3d(".concat(l, ", ").concat(o, ", 0px) scale(").concat(_e62, ")"));
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          s = e.slides,
          i = e.progress,
          a = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, s) {
        e.parallax.setTransform(s, i);
      }), s.each(function (t, s) {
        var n = s.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (n += Math.ceil(t / 2) - i * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), r(s).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, s) {
          e.parallax.setTransform(s, n);
        });
      });
    },
    setTransition: function setTransition() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = this.$el;
      t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, s) {
        var i = r(s);
        var a = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (a = 0), i.transition(a);
      });
    }
  };
  var q = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          i = e.targetTouches[1].pageX,
          a = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(i - t, 2) + Math.pow(a - s, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this,
          s = t.params.zoom,
          i = t.zoom,
          a = i.gesture;

      if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !p.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureTouched = !0, a.scaleStart = q.getDistanceBetweenTouches(e);
      }

      a.$slideEl && a.$slideEl.length || (a.$slideEl = r(e.target).closest(".swiper-slide"), 0 === a.$slideEl.length && (a.$slideEl = t.slides.eq(t.activeIndex)), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent(".".concat(s.containerClass)), a.maxRatio = a.$imageWrapEl.attr("data-swiper-zoom") || s.maxRatio, 0 !== a.$imageWrapEl.length) ? (a.$imageEl.transition(0), t.zoom.isScaling = !0) : a.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          s = this.zoom,
          i = s.gesture;

      if (!p.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        s.fakeGestureMoved = !0, i.scaleMove = q.getDistanceBetweenTouches(e);
      }

      i.$imageEl && 0 !== i.$imageEl.length && (p.gestures ? s.scale = e.scale * s.currentScale : s.scale = i.scaleMove / i.scaleStart * s.currentScale, s.scale > i.maxRatio && (s.scale = i.maxRatio - 1 + Math.pow(s.scale - i.maxRatio + 1, .5)), s.scale < t.minRatio && (s.scale = t.minRatio + 1 - Math.pow(t.minRatio - s.scale + 1, .5)), i.$imageEl.transform("translate3d(0,0,0) scale(".concat(s.scale, ")")));
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          s = this.zoom,
          i = s.gesture;

      if (!p.gestures) {
        if (!s.fakeGestureTouched || !s.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !y.android) return;
        s.fakeGestureTouched = !1, s.fakeGestureMoved = !1;
      }

      i.$imageEl && 0 !== i.$imageEl.length && (s.scale = Math.max(Math.min(s.scale, i.maxRatio), t.minRatio), i.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(".concat(s.scale, ")")), s.currentScale = s.scale, s.isScaling = !1, 1 === s.scale && (i.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          s = t.gesture,
          i = t.image;
      s.$imageEl && 0 !== s.$imageEl.length && (i.isTouched || (y.android && e.preventDefault(), i.isTouched = !0, i.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, i.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          s = t.zoom,
          i = s.gesture,
          a = s.image,
          n = s.velocity;
      if (!i.$imageEl || 0 === i.$imageEl.length) return;
      if (t.allowClick = !1, !a.isTouched || !i.$slideEl) return;
      a.isMoved || (a.width = i.$imageEl[0].offsetWidth, a.height = i.$imageEl[0].offsetHeight, a.startX = d.getTranslate(i.$imageWrapEl[0], "x") || 0, a.startY = d.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), t.rtl && (a.startX = -a.startX, a.startY = -a.startY));
      var r = a.width * s.scale,
          l = a.height * s.scale;

      if (!(r < i.slideWidth && l < i.slideHeight)) {
        if (a.minX = Math.min(i.slideWidth / 2 - r / 2, 0), a.maxX = -a.minX, a.minY = Math.min(i.slideHeight / 2 - l / 2, 0), a.maxY = -a.minY, a.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, a.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !a.isMoved && !s.isScaling) {
          if (t.isHorizontal() && (Math.floor(a.minX) === Math.floor(a.startX) && a.touchesCurrent.x < a.touchesStart.x || Math.floor(a.maxX) === Math.floor(a.startX) && a.touchesCurrent.x > a.touchesStart.x)) return void (a.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(a.minY) === Math.floor(a.startY) && a.touchesCurrent.y < a.touchesStart.y || Math.floor(a.maxY) === Math.floor(a.startY) && a.touchesCurrent.y > a.touchesStart.y)) return void (a.isTouched = !1);
        }

        e.preventDefault(), e.stopPropagation(), a.isMoved = !0, a.currentX = a.touchesCurrent.x - a.touchesStart.x + a.startX, a.currentY = a.touchesCurrent.y - a.touchesStart.y + a.startY, a.currentX < a.minX && (a.currentX = a.minX + 1 - Math.pow(a.minX - a.currentX + 1, .8)), a.currentX > a.maxX && (a.currentX = a.maxX - 1 + Math.pow(a.currentX - a.maxX + 1, .8)), a.currentY < a.minY && (a.currentY = a.minY + 1 - Math.pow(a.minY - a.currentY + 1, .8)), a.currentY > a.maxY && (a.currentY = a.maxY - 1 + Math.pow(a.currentY - a.maxY + 1, .8)), n.prevPositionX || (n.prevPositionX = a.touchesCurrent.x), n.prevPositionY || (n.prevPositionY = a.touchesCurrent.y), n.prevTime || (n.prevTime = Date.now()), n.x = (a.touchesCurrent.x - n.prevPositionX) / (Date.now() - n.prevTime) / 2, n.y = (a.touchesCurrent.y - n.prevPositionY) / (Date.now() - n.prevTime) / 2, Math.abs(a.touchesCurrent.x - n.prevPositionX) < 2 && (n.x = 0), Math.abs(a.touchesCurrent.y - n.prevPositionY) < 2 && (n.y = 0), n.prevPositionX = a.touchesCurrent.x, n.prevPositionY = a.touchesCurrent.y, n.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(".concat(a.currentX, "px, ").concat(a.currentY, "px,0)"));
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          s = e.image,
          i = e.velocity;
      if (!t.$imageEl || 0 === t.$imageEl.length) return;
      if (!s.isTouched || !s.isMoved) return s.isTouched = !1, void (s.isMoved = !1);
      s.isTouched = !1, s.isMoved = !1;
      var a = 300,
          n = 300;
      var r = i.x * a,
          l = s.currentX + r,
          o = i.y * n,
          d = s.currentY + o;
      0 !== i.x && (a = Math.abs((l - s.currentX) / i.x)), 0 !== i.y && (n = Math.abs((d - s.currentY) / i.y));
      var p = Math.max(a, n);
      s.currentX = l, s.currentY = d;
      var c = s.width * e.scale,
          h = s.height * e.scale;
      s.minX = Math.min(t.slideWidth / 2 - c / 2, 0), s.maxX = -s.minX, s.minY = Math.min(t.slideHeight / 2 - h / 2, 0), s.maxY = -s.minY, s.currentX = Math.max(Math.min(s.currentX, s.maxX), s.minX), s.currentY = Math.max(Math.min(s.currentY, s.maxY), s.minY), t.$imageWrapEl.transition(p).transform("translate3d(".concat(s.currentX, "px, ").concat(s.currentY, "px,0)"));
    },
    onTransitionEnd: function onTransitionEnd() {
      var e = this.zoom,
          t = e.gesture;
      t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0);
    },
    toggle: function toggle(e) {
      var t = this.zoom;
      t.scale && 1 !== t.scale ? t.out() : t["in"](e);
    },
    "in": function _in(e) {
      var t = this,
          s = t.zoom,
          i = t.params.zoom,
          a = s.gesture,
          n = s.image;
      if (a.$slideEl || (a.$slideEl = t.clickedSlide ? r(t.clickedSlide) : t.slides.eq(t.activeIndex), a.$imageEl = a.$slideEl.find("img, svg, canvas"), a.$imageWrapEl = a.$imageEl.parent(".".concat(i.containerClass))), !a.$imageEl || 0 === a.$imageEl.length) return;
      var l, o, d, p, c, h, u, m, f, g, v, b, w, y, x, T, E, S;
      a.$slideEl.addClass("".concat(i.zoomedSlideClass)), void 0 === n.touchesStart.x && e ? (l = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (l = n.touchesStart.x, o = n.touchesStart.y), s.scale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, s.currentScale = a.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, e ? (E = a.$slideEl[0].offsetWidth, S = a.$slideEl[0].offsetHeight, c = (d = a.$slideEl.offset().left) + E / 2 - l, h = (p = a.$slideEl.offset().top) + S / 2 - o, f = a.$imageEl[0].offsetWidth, g = a.$imageEl[0].offsetHeight, v = f * s.scale, b = g * s.scale, x = -(w = Math.min(E / 2 - v / 2, 0)), T = -(y = Math.min(S / 2 - b / 2, 0)), (u = c * s.scale) < w && (u = w), u > x && (u = x), (m = h * s.scale) < y && (m = y), m > T && (m = T)) : (u = 0, m = 0), a.$imageWrapEl.transition(300).transform("translate3d(".concat(u, "px, ").concat(m, "px,0)")), a.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(s.scale, ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          s = e.params.zoom,
          i = t.gesture;
      i.$slideEl || (i.$slideEl = e.clickedSlide ? r(e.clickedSlide) : e.slides.eq(e.activeIndex), i.$imageEl = i.$slideEl.find("img, svg, canvas"), i.$imageWrapEl = i.$imageEl.parent(".".concat(s.containerClass))), i.$imageEl && 0 !== i.$imageEl.length && (t.scale = 1, t.currentScale = 1, i.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), i.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), i.$slideEl.removeClass("".concat(s.zoomedSlideClass)), i.$slideEl = void 0);
    },
    enable: function enable() {
      var e = this,
          t = e.zoom;
      if (t.enabled) return;
      t.enabled = !0;
      var s = !("touchstart" !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      p.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;
      if (!t.enabled) return;
      e.zoom.enabled = !1;
      var s = !("touchstart" !== e.touchEvents.start || !p.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      p.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, s)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, s), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, s), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, s)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
    }
  };
  var W = {
    loadInSlide: function loadInSlide(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var s = this,
          i = s.params.lazy;
      if (void 0 === e) return;
      if (0 === s.slides.length) return;
      var a = s.virtual && s.params.virtual.enabled ? s.$wrapperEl.children(".".concat(s.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : s.slides.eq(e);
      var n = a.find(".".concat(i.elementClass, ":not(.").concat(i.loadedClass, "):not(.").concat(i.loadingClass, ")"));
      !a.hasClass(i.elementClass) || a.hasClass(i.loadedClass) || a.hasClass(i.loadingClass) || (n = n.add(a[0])), 0 !== n.length && n.each(function (e, n) {
        var l = r(n);
        l.addClass(i.loadingClass);
        var o = l.attr("data-background"),
            d = l.attr("data-src"),
            p = l.attr("data-srcset"),
            c = l.attr("data-sizes");
        s.loadImage(l[0], d || o, p, c, !1, function () {
          if (null != s && s && (!s || s.params) && !s.destroyed) {
            if (o ? (l.css("background-image", "url(\"".concat(o, "\")")), l.removeAttr("data-background")) : (p && (l.attr("srcset", p), l.removeAttr("data-srcset")), c && (l.attr("sizes", c), l.removeAttr("data-sizes")), d && (l.attr("src", d), l.removeAttr("data-src"))), l.addClass(i.loadedClass).removeClass(i.loadingClass), a.find(".".concat(i.preloaderClass)).remove(), s.params.loop && t) {
              var _e63 = a.attr("data-swiper-slide-index");

              if (a.hasClass(s.params.slideDuplicateClass)) {
                var _t32 = s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e63, "\"]:not(.").concat(s.params.slideDuplicateClass, ")"));

                s.lazy.loadInSlide(_t32.index(), !1);
              } else {
                var _t33 = s.$wrapperEl.children(".".concat(s.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e63, "\"]"));

                s.lazy.loadInSlide(_t33.index(), !1);
              }
            }

            s.emit("lazyImageReady", a[0], l[0]);
          }
        }), s.emit("lazyImageLoad", a[0], l[0]);
      });
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          s = e.params,
          i = e.slides,
          a = e.activeIndex,
          n = e.virtual && s.virtual.enabled,
          l = s.lazy;
      var o = s.slidesPerView;

      function d(e) {
        if (n) {
          if (t.children(".".concat(s.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
        } else if (i[e]) return !0;

        return !1;
      }

      function p(e) {
        return n ? r(e).attr("data-swiper-slide-index") : r(e).index();
      }

      if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(".".concat(s.slideVisibleClass)).each(function (t, s) {
        var i = n ? r(s).attr("data-swiper-slide-index") : r(s).index();
        e.lazy.loadInSlide(i);
      });else if (o > 1) for (var _t34 = a; _t34 < a + o; _t34 += 1) {
        d(_t34) && e.lazy.loadInSlide(_t34);
      } else e.lazy.loadInSlide(a);
      if (l.loadPrevNext) if (o > 1 || l.loadPrevNextAmount && l.loadPrevNextAmount > 1) {
        var _t35 = l.loadPrevNextAmount,
            _s39 = o,
            _n15 = Math.min(a + _s39 + Math.max(_t35, _s39), i.length),
            _r16 = Math.max(a - Math.max(_s39, _t35), 0);

        for (var _t36 = a + o; _t36 < _n15; _t36 += 1) {
          d(_t36) && e.lazy.loadInSlide(_t36);
        }

        for (var _t37 = _r16; _t37 < a; _t37 += 1) {
          d(_t37) && e.lazy.loadInSlide(_t37);
        }
      } else {
        var _i21 = t.children(".".concat(s.slideNextClass));

        _i21.length > 0 && e.lazy.loadInSlide(p(_i21));

        var _a17 = t.children(".".concat(s.slidePrevClass));

        _a17.length > 0 && e.lazy.loadInSlide(p(_a17));
      }
    }
  };
  var j = {
    LinearSpline: function LinearSpline(e, t) {
      var s = function () {
        var e, t, s;
        return function (i, a) {
          for (t = -1, e = i.length; e - t > 1;) {
            i[s = e + t >> 1] <= a ? t = s : e = s;
          }

          return e;
        };
      }();

      var i, a;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (a = s(this.x, e), i = a - 1, (e - this.x[i]) * (this.y[a] - this.y[i]) / (this.x[a] - this.x[i]) + this.y[i]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new j.LinearSpline(t.slidesGrid, e.slidesGrid) : new j.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var s = this,
          i = s.controller.control;
      var a, n;

      function r(e) {
        var t = s.rtlTranslate ? -s.translate : s.translate;
        "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), n = -s.controller.spline.interpolate(-t)), n && "container" !== s.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), n = (t - s.minTranslate()) * a + e.minTranslate()), s.params.controller.inverse && (n = e.maxTranslate() - n), e.updateProgress(n), e.setTranslate(n, s), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(i)) for (var _e64 = 0; _e64 < i.length; _e64 += 1) {
        i[_e64] !== t && i[_e64] instanceof z && r(i[_e64]);
      } else i instanceof z && t !== i && r(i);
    },
    setTransition: function setTransition(e, t) {
      var s = this,
          i = s.controller.control;
      var a;

      function n(t) {
        t.setTransition(e, s), 0 !== e && (t.transitionStart(), t.params.autoHeight && d.nextTick(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          i && (t.params.loop && "slide" === s.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(i)) for (a = 0; a < i.length; a += 1) {
        i[a] !== t && i[a] instanceof z && n(i[a]);
      } else i instanceof z && t !== i && n(i);
    }
  };
  var U = {
    makeElFocusable: function makeElFocusable(e) {
      return e.attr("tabIndex", "0"), e;
    },
    addElRole: function addElRole(e, t) {
      return e.attr("role", t), e;
    },
    addElLabel: function addElLabel(e, t) {
      return e.attr("aria-label", t), e;
    },
    disableEl: function disableEl(e) {
      return e.attr("aria-disabled", !0), e;
    },
    enableEl: function enableEl(e) {
      return e.attr("aria-disabled", !1), e;
    },
    onEnterKey: function onEnterKey(e) {
      var t = this,
          s = t.params.a11y;
      if (13 !== e.keyCode) return;
      var i = r(e.target);
      t.navigation && t.navigation.$nextEl && i.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(s.lastSlideMessage) : t.a11y.notify(s.nextSlideMessage)), t.navigation && t.navigation.$prevEl && i.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(s.firstSlideMessage) : t.a11y.notify(s.prevSlideMessage)), t.pagination && i.is(".".concat(t.params.pagination.bulletClass)) && i[0].click();
    },
    notify: function notify(e) {
      var t = this.a11y.liveRegion;
      0 !== t.length && (t.html(""), t.html(e));
    },
    updateNavigation: function updateNavigation() {
      var e = this;
      if (e.params.loop) return;
      var _e$navigation3 = e.navigation,
          t = _e$navigation3.$nextEl,
          s = _e$navigation3.$prevEl;
      s && s.length > 0 && (e.isBeginning ? e.a11y.disableEl(s) : e.a11y.enableEl(s)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (s, i) {
        var a = r(i);
        e.a11y.makeElFocusable(a), e.a11y.addElRole(a, "button"), e.a11y.addElLabel(a, t.paginationBulletMessage.replace(/{{index}}/, a.index() + 1));
      });
    },
    init: function init() {
      var e = this;
      e.$el.append(e.a11y.liveRegion);
      var t = e.params.a11y;
      var s, i;
      e.navigation && e.navigation.$nextEl && (s = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), s && (e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.nextSlideMessage), s.on("keydown", e.a11y.onEnterKey)), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.prevSlideMessage), i.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e = this;
      var t, s;
      e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (s = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), s && s.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey);
    }
  };
  var _ = {
    init: function init() {
      var e = this;
      if (!e.params.history) return;
      if (!a.history || !a.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
      var t = e.history;
      t.initialized = !0, t.paths = _.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || a.addEventListener("popstate", e.history.setHistoryPopState));
    },
    destroy: function destroy() {
      var e = this;
      e.params.history.replaceState || a.removeEventListener("popstate", e.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = _.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues() {
      var e = a.location.pathname.slice(1).split("/").filter(function (e) {
        return "" !== e;
      }),
          t = e.length;
      return {
        key: e[t - 2],
        value: e[t - 1]
      };
    },
    setHistory: function setHistory(e, t) {
      if (!this.history.initialized || !this.params.history.enabled) return;
      var s = this.slides.eq(t);

      var i = _.slugify(s.attr("data-history"));

      a.location.pathname.includes(e) || (i = "".concat(e, "/").concat(i));
      var n = a.history.state;
      n && n.value === i || (this.params.history.replaceState ? a.history.replaceState({
        value: i
      }, null, i) : a.history.pushState({
        value: i
      }, null, i));
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, s) {
      var i = this;
      if (t) for (var _a18 = 0, _n16 = i.slides.length; _a18 < _n16; _a18 += 1) {
        var _n17 = i.slides.eq(_a18);

        if (_.slugify(_n17.attr("data-history")) === t && !_n17.hasClass(i.params.slideDuplicateClass)) {
          var _t38 = _n17.index();

          i.slideTo(_t38, e, s);
        }
      } else i.slideTo(0, e, s);
    }
  };
  var K = {
    onHashCange: function onHashCange() {
      var e = this,
          t = i.location.hash.replace("#", "");

      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var _s40 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

        if (void 0 === _s40) return;
        e.slideTo(_s40);
      }
    },
    setHash: function setHash() {
      var e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && a.history && a.history.replaceState) a.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || "");else {
        var _t39 = e.slides.eq(e.activeIndex),
            _s41 = _t39.attr("data-hash") || _t39.attr("data-history");

        i.location.hash = _s41 || "";
      }
    },
    init: function init() {
      var e = this;
      if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
      e.hashNavigation.initialized = !0;
      var t = i.location.hash.replace("#", "");

      if (t) {
        var _s42 = 0;

        for (var _i22 = 0, _a19 = e.slides.length; _i22 < _a19; _i22 += 1) {
          var _a20 = e.slides.eq(_i22);

          if ((_a20.attr("data-hash") || _a20.attr("data-history")) === t && !_a20.hasClass(e.params.slideDuplicateClass)) {
            var _t40 = _a20.index();

            e.slideTo(_t40, _s42, e.params.runCallbacksOnInit, !0);
          }
        }
      }

      e.params.hashNavigation.watchState && r(a).on("hashchange", e.hashNavigation.onHashCange);
    },
    destroy: function destroy() {
      var e = this;
      e.params.hashNavigation.watchState && r(a).off("hashchange", e.hashNavigation.onHashCange);
    }
  };
  var Z = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex);
      var s = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = d.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, s);
    },
    start: function start() {
      return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0);
    },
    stop: function stop() {
      var e = this;
      return !!e.autoplay.running && void 0 !== e.autoplay.timeout && (e.autoplay.timeout && (clearTimeout(e.autoplay.timeout), e.autoplay.timeout = void 0), e.autoplay.running = !1, e.emit("autoplayStop"), !0);
    },
    pause: function pause(e) {
      var t = this;
      t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? (t.$wrapperEl[0].addEventListener("transitionend", t.autoplay.onTransitionEnd), t.$wrapperEl[0].addEventListener("webkitTransitionEnd", t.autoplay.onTransitionEnd)) : (t.autoplay.paused = !1, t.autoplay.run())));
    }
  };
  var Q = {
    setTranslate: function setTranslate() {
      var e = this,
          t = e.slides;

      for (var _s43 = 0; _s43 < t.length; _s43 += 1) {
        var _t41 = e.slides.eq(_s43);

        var _i23 = -_t41[0].swiperSlideOffset;

        e.params.virtualTranslate || (_i23 -= e.translate);
        var _a21 = 0;
        e.isHorizontal() || (_a21 = _i23, _i23 = 0);

        var _n18 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t41[0].progress), 0) : 1 + Math.min(Math.max(_t41[0].progress, -1), 0);

        _t41.css({
          opacity: _n18
        }).transform("translate3d(".concat(_i23, "px, ").concat(_a21, "px, 0px)"));
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          s = t.slides,
          i = t.$wrapperEl;

      if (s.transition(e), t.params.virtualTranslate && 0 !== e) {
        var _e65 = !1;

        s.transitionEnd(function () {
          if (_e65) return;
          if (!t || t.destroyed) return;
          _e65 = !0, t.animating = !1;
          var s = ["webkitTransitionEnd", "transitionend"];

          for (var _e66 = 0; _e66 < s.length; _e66 += 1) {
            i.trigger(s[_e66]);
          }
        });
      }
    }
  };
  var J = {
    setTranslate: function setTranslate() {
      var e = this.$el,
          t = this.$wrapperEl,
          s = this.slides,
          i = this.width,
          a = this.height,
          n = this.rtlTranslate,
          l = this.size,
          o = this.params.cubeEffect,
          d = this.isHorizontal(),
          p = this.virtual && this.params.virtual.enabled;
      var h,
          u = 0;
      o.shadow && (d ? (0 === (h = t.find(".swiper-cube-shadow")).length && (h = r('<div class="swiper-cube-shadow"></div>'), t.append(h)), h.css({
        height: "".concat(i, "px")
      })) : 0 === (h = e.find(".swiper-cube-shadow")).length && (h = r('<div class="swiper-cube-shadow"></div>'), e.append(h)));

      for (var _e67 = 0; _e67 < s.length; _e67 += 1) {
        var _t42 = s.eq(_e67);

        var _i24 = _e67;
        p && (_i24 = parseInt(_t42.attr("data-swiper-slide-index"), 10));

        var _a22 = 90 * _i24,
            _c3 = Math.floor(_a22 / 360);

        n && (_a22 = -_a22, _c3 = Math.floor(-_a22 / 360));

        var _h3 = Math.max(Math.min(_t42[0].progress, 1), -1);

        var _m = 0,
            _f = 0,
            _g = 0;
        _i24 % 4 == 0 ? (_m = 4 * -_c3 * l, _g = 0) : (_i24 - 1) % 4 == 0 ? (_m = 0, _g = 4 * -_c3 * l) : (_i24 - 2) % 4 == 0 ? (_m = l + 4 * _c3 * l, _g = l) : (_i24 - 3) % 4 == 0 && (_m = -l, _g = 3 * l + 4 * l * _c3), n && (_m = -_m), d || (_f = _m, _m = 0);

        var _v = "rotateX(".concat(d ? 0 : -_a22, "deg) rotateY(").concat(d ? _a22 : 0, "deg) translate3d(").concat(_m, "px, ").concat(_f, "px, ").concat(_g, "px)");

        if (_h3 <= 1 && _h3 > -1 && (u = 90 * _i24 + 90 * _h3, n && (u = 90 * -_i24 - 90 * _h3)), _t42.transform(_v), o.slideShadows) {
          var _e68 = d ? _t42.find(".swiper-slide-shadow-left") : _t42.find(".swiper-slide-shadow-top"),
              _s44 = d ? _t42.find(".swiper-slide-shadow-right") : _t42.find(".swiper-slide-shadow-bottom");

          0 === _e68.length && (_e68 = r("<div class=\"swiper-slide-shadow-".concat(d ? "left" : "top", "\"></div>")), _t42.append(_e68)), 0 === _s44.length && (_s44 = r("<div class=\"swiper-slide-shadow-".concat(d ? "right" : "bottom", "\"></div>")), _t42.append(_s44)), _e68.length && (_e68[0].style.opacity = Math.max(-_h3, 0)), _s44.length && (_s44[0].style.opacity = Math.max(_h3, 0));
        }
      }

      if (t.css({
        "-webkit-transform-origin": "50% 50% -".concat(l / 2, "px"),
        "-moz-transform-origin": "50% 50% -".concat(l / 2, "px"),
        "-ms-transform-origin": "50% 50% -".concat(l / 2, "px"),
        "transform-origin": "50% 50% -".concat(l / 2, "px")
      }), o.shadow) if (d) h.transform("translate3d(0px, ".concat(i / 2 + o.shadowOffset, "px, ").concat(-i / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(o.shadowScale, ")"));else {
        var _e69 = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            _t43 = 1.5 - (Math.sin(2 * _e69 * Math.PI / 360) / 2 + Math.cos(2 * _e69 * Math.PI / 360) / 2),
            _s45 = o.shadowScale,
            _i25 = o.shadowScale / _t43,
            _n19 = o.shadowOffset;

        h.transform("scale3d(".concat(_s45, ", 1, ").concat(_i25, ") translate3d(0px, ").concat(a / 2 + _n19, "px, ").concat(-a / 2 / _i25, "px) rotateX(-90deg)"));
      }
      var m = c.isSafari || c.isUiWebView ? -l / 2 : 0;
      t.transform("translate3d(0px,0,".concat(m, "px) rotateX(").concat(this.isHorizontal() ? 0 : u, "deg) rotateY(").concat(this.isHorizontal() ? -u : 0, "deg)"));
    },
    setTransition: function setTransition(e) {
      var t = this.$el,
          s = this.slides;
      s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  };
  var ee = {
    setTranslate: function setTranslate() {
      var e = this,
          t = e.slides,
          s = e.rtlTranslate;

      for (var _i26 = 0; _i26 < t.length; _i26 += 1) {
        var _a23 = t.eq(_i26);

        var _n20 = _a23[0].progress;
        e.params.flipEffect.limitRotation && (_n20 = Math.max(Math.min(_a23[0].progress, 1), -1));

        var _l10 = -180 * _n20,
            _o5 = 0,
            _d3 = -_a23[0].swiperSlideOffset,
            _p3 = 0;

        if (e.isHorizontal() ? s && (_l10 = -_l10) : (_p3 = _d3, _d3 = 0, _o5 = -_l10, _l10 = 0), _a23[0].style.zIndex = -Math.abs(Math.round(_n20)) + t.length, e.params.flipEffect.slideShadows) {
          var _t44 = e.isHorizontal() ? _a23.find(".swiper-slide-shadow-left") : _a23.find(".swiper-slide-shadow-top"),
              _s46 = e.isHorizontal() ? _a23.find(".swiper-slide-shadow-right") : _a23.find(".swiper-slide-shadow-bottom");

          0 === _t44.length && (_t44 = r("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "left" : "top", "\"></div>")), _a23.append(_t44)), 0 === _s46.length && (_s46 = r("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "right" : "bottom", "\"></div>")), _a23.append(_s46)), _t44.length && (_t44[0].style.opacity = Math.max(-_n20, 0)), _s46.length && (_s46[0].style.opacity = Math.max(_n20, 0));
        }

        _a23.transform("translate3d(".concat(_d3, "px, ").concat(_p3, "px, 0px) rotateX(").concat(_o5, "deg) rotateY(").concat(_l10, "deg)"));
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          s = t.slides,
          i = t.activeIndex,
          a = t.$wrapperEl;

      if (s.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var _e70 = !1;

        s.eq(i).transitionEnd(function () {
          if (_e70) return;
          if (!t || t.destroyed) return;
          _e70 = !0, t.animating = !1;
          var s = ["webkitTransitionEnd", "transitionend"];

          for (var _e71 = 0; _e71 < s.length; _e71 += 1) {
            a.trigger(s[_e71]);
          }
        });
      }
    }
  };
  var te = {
    setTranslate: function setTranslate() {
      var e = this.width,
          t = this.height,
          s = this.slides,
          i = this.$wrapperEl,
          a = this.slidesSizesGrid,
          n = this.params.coverflowEffect,
          l = this.isHorizontal(),
          o = this.translate,
          d = l ? e / 2 - o : t / 2 - o,
          c = l ? n.rotate : -n.rotate,
          h = n.depth;

      for (var _e72 = 0, _t45 = s.length; _e72 < _t45; _e72 += 1) {
        var _t46 = s.eq(_e72),
            _i27 = a[_e72],
            _o6 = (d - _t46[0].swiperSlideOffset - _i27 / 2) / _i27 * n.modifier;

        var _p4 = l ? c * _o6 : 0,
            _u2 = l ? 0 : c * _o6,
            _m2 = -h * Math.abs(_o6),
            _f2 = l ? 0 : n.stretch * _o6,
            _g2 = l ? n.stretch * _o6 : 0;

        Math.abs(_g2) < .001 && (_g2 = 0), Math.abs(_f2) < .001 && (_f2 = 0), Math.abs(_m2) < .001 && (_m2 = 0), Math.abs(_p4) < .001 && (_p4 = 0), Math.abs(_u2) < .001 && (_u2 = 0);

        var _v2 = "translate3d(".concat(_g2, "px,").concat(_f2, "px,").concat(_m2, "px)  rotateX(").concat(_u2, "deg) rotateY(").concat(_p4, "deg)");

        if (_t46.transform(_v2), _t46[0].style.zIndex = 1 - Math.abs(Math.round(_o6)), n.slideShadows) {
          var _e73 = l ? _t46.find(".swiper-slide-shadow-left") : _t46.find(".swiper-slide-shadow-top"),
              _s47 = l ? _t46.find(".swiper-slide-shadow-right") : _t46.find(".swiper-slide-shadow-bottom");

          0 === _e73.length && (_e73 = r("<div class=\"swiper-slide-shadow-".concat(l ? "left" : "top", "\"></div>")), _t46.append(_e73)), 0 === _s47.length && (_s47 = r("<div class=\"swiper-slide-shadow-".concat(l ? "right" : "bottom", "\"></div>")), _t46.append(_s47)), _e73.length && (_e73[0].style.opacity = _o6 > 0 ? _o6 : 0), _s47.length && (_s47[0].style.opacity = -_o6 > 0 ? -_o6 : 0);
        }
      }

      if (p.pointerEvents || p.prefixedPointerEvents) {
        i[0].style.perspectiveOrigin = "".concat(d, "px 50%");
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  };
  var se = {
    init: function init() {
      var e = this,
          t = e.params.thumbs,
          s = e.constructor;
      t.swiper instanceof s ? (e.thumbs.swiper = t.swiper, d.extend(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), d.extend(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : d.isObject(t.swiper) && (e.thumbs.swiper = new s(d.extend({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;
      if (!t) return;
      var s = t.clickedIndex,
          i = t.clickedSlide;
      if (i && r(i).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
      if (null == s) return;
      var a;

      if (a = t.params.loop ? parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10) : s, e.params.loop) {
        var _t47 = e.activeIndex;
        e.slides.eq(_t47).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t47 = e.activeIndex);

        var _s48 = e.slides.eq(_t47).prevAll("[data-swiper-slide-index=\"".concat(a, "\"]")).eq(0).index(),
            _i28 = e.slides.eq(_t47).nextAll("[data-swiper-slide-index=\"".concat(a, "\"]")).eq(0).index();

        a = void 0 === _s48 ? _i28 : void 0 === _i28 ? _s48 : _i28 - _t47 < _t47 - _s48 ? _i28 : _s48;
      }

      e.slideTo(a);
    },
    update: function update(e) {
      var t = this,
          s = t.thumbs.swiper;
      if (!s) return;
      var i = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView;

      if (t.realIndex !== s.realIndex) {
        var _a24,
            _n21 = s.activeIndex;

        if (s.params.loop) {
          s.slides.eq(_n21).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, _n21 = s.activeIndex);

          var _e74 = s.slides.eq(_n21).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
              _i29 = s.slides.eq(_n21).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

          _a24 = void 0 === _e74 ? _i29 : void 0 === _i29 ? _e74 : _i29 - _n21 == _n21 - _e74 ? _n21 : _i29 - _n21 < _n21 - _e74 ? _i29 : _e74;
        } else _a24 = t.realIndex;

        s.visibleSlidesIndexes.indexOf(_a24) < 0 && (s.params.centeredSlides ? _a24 = _a24 > _n21 ? _a24 - Math.floor(i / 2) + 1 : _a24 + Math.floor(i / 2) - 1 : _a24 > _n21 && (_a24 = _a24 - i + 1), s.slideTo(_a24, e ? 0 : void 0));
      }

      var a = 1;
      var n = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (a = t.params.slidesPerView), s.slides.removeClass(n), s.params.loop) for (var _e75 = 0; _e75 < a; _e75 += 1) {
        s.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e75, "\"]")).addClass(n);
      } else for (var _e76 = 0; _e76 < a; _e76 += 1) {
        s.slides.eq(t.realIndex + _e76).addClass(n);
      }
    }
  };
  var ie = [k, L, I, D, A, N, G, {
    name: "mousewheel",
    params: {
      mousewheel: {
        enabled: !1,
        releaseOnEdges: !1,
        invert: !1,
        forceToAxis: !1,
        sensitivity: 1,
        eventsTarged: "container"
      }
    },
    create: function create() {
      d.extend(this, {
        mousewheel: {
          enabled: !1,
          enable: X.enable.bind(this),
          disable: X.disable.bind(this),
          handle: X.handle.bind(this),
          handleMouseEnter: X.handleMouseEnter.bind(this),
          handleMouseLeave: X.handleMouseLeave.bind(this),
          lastScrollTime: d.now()
        }
      });
    },
    on: {
      init: function init() {
        this.params.mousewheel.enabled && this.mousewheel.enable();
      },
      destroy: function destroy() {
        this.mousewheel.enabled && this.mousewheel.disable();
      }
    }
  }, {
    name: "navigation",
    params: {
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock"
      }
    },
    create: function create() {
      d.extend(this, {
        navigation: {
          init: Y.init.bind(this),
          update: Y.update.bind(this),
          destroy: Y.destroy.bind(this),
          onNextClick: Y.onNextClick.bind(this),
          onPrevClick: Y.onPrevClick.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        this.navigation.init(), this.navigation.update();
      },
      toEdge: function toEdge() {
        this.navigation.update();
      },
      fromEdge: function fromEdge() {
        this.navigation.update();
      },
      destroy: function destroy() {
        this.navigation.destroy();
      },
      click: function click(e) {
        var t = this,
            _t$navigation = t.navigation,
            s = _t$navigation.$nextEl,
            i = _t$navigation.$prevEl;

        if (t.params.navigation.hideOnClick && !r(e.target).is(i) && !r(e.target).is(s)) {
          var _e77;

          s ? _e77 = s.hasClass(t.params.navigation.hiddenClass) : i && (_e77 = i.hasClass(t.params.navigation.hiddenClass)), !0 === _e77 ? t.emit("navigationShow", t) : t.emit("navigationHide", t), s && s.toggleClass(t.params.navigation.hiddenClass), i && i.toggleClass(t.params.navigation.hiddenClass);
        }
      }
    }
  }, {
    name: "pagination",
    params: {
      pagination: {
        el: null,
        bulletElement: "span",
        clickable: !1,
        hideOnClick: !1,
        renderBullet: null,
        renderProgressbar: null,
        renderFraction: null,
        renderCustom: null,
        progressbarOpposite: !1,
        type: "bullets",
        dynamicBullets: !1,
        dynamicMainBullets: 1,
        formatFractionCurrent: function formatFractionCurrent(e) {
          return e;
        },
        formatFractionTotal: function formatFractionTotal(e) {
          return e;
        },
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        modifierClass: "swiper-pagination-",
        currentClass: "swiper-pagination-current",
        totalClass: "swiper-pagination-total",
        hiddenClass: "swiper-pagination-hidden",
        progressbarFillClass: "swiper-pagination-progressbar-fill",
        progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
        clickableClass: "swiper-pagination-clickable",
        lockClass: "swiper-pagination-lock"
      }
    },
    create: function create() {
      d.extend(this, {
        pagination: {
          init: V.init.bind(this),
          render: V.render.bind(this),
          update: V.update.bind(this),
          destroy: V.destroy.bind(this),
          dynamicBulletIndex: 0
        }
      });
    },
    on: {
      init: function init() {
        this.pagination.init(), this.pagination.render(), this.pagination.update();
      },
      activeIndexChange: function activeIndexChange() {
        var e = this;
        e.params.loop ? e.pagination.update() : void 0 === e.snapIndex && e.pagination.update();
      },
      snapIndexChange: function snapIndexChange() {
        var e = this;
        e.params.loop || e.pagination.update();
      },
      slidesLengthChange: function slidesLengthChange() {
        var e = this;
        e.params.loop && (e.pagination.render(), e.pagination.update());
      },
      snapGridLengthChange: function snapGridLengthChange() {
        var e = this;
        e.params.loop || (e.pagination.render(), e.pagination.update());
      },
      destroy: function destroy() {
        this.pagination.destroy();
      },
      click: function click(e) {
        var t = this;

        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !r(e.target).hasClass(t.params.pagination.bulletClass)) {
          !0 === t.pagination.$el.hasClass(t.params.pagination.hiddenClass) ? t.emit("paginationShow", t) : t.emit("paginationHide", t), t.pagination.$el.toggleClass(t.params.pagination.hiddenClass);
        }
      }
    }
  }, {
    name: "scrollbar",
    params: {
      scrollbar: {
        el: null,
        dragSize: "auto",
        hide: !1,
        draggable: !1,
        snapOnRelease: !0,
        lockClass: "swiper-scrollbar-lock",
        dragClass: "swiper-scrollbar-drag"
      }
    },
    create: function create() {
      d.extend(this, {
        scrollbar: {
          init: F.init.bind(this),
          destroy: F.destroy.bind(this),
          updateSize: F.updateSize.bind(this),
          setTranslate: F.setTranslate.bind(this),
          setTransition: F.setTransition.bind(this),
          enableDraggable: F.enableDraggable.bind(this),
          disableDraggable: F.disableDraggable.bind(this),
          setDragPosition: F.setDragPosition.bind(this),
          onDragStart: F.onDragStart.bind(this),
          onDragMove: F.onDragMove.bind(this),
          onDragEnd: F.onDragEnd.bind(this),
          isTouched: !1,
          timeout: null,
          dragTimeout: null
        }
      });
    },
    on: {
      init: function init() {
        this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate();
      },
      update: function update() {
        this.scrollbar.updateSize();
      },
      resize: function resize() {
        this.scrollbar.updateSize();
      },
      observerUpdate: function observerUpdate() {
        this.scrollbar.updateSize();
      },
      setTranslate: function setTranslate() {
        this.scrollbar.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.scrollbar.setTransition(e);
      },
      destroy: function destroy() {
        this.scrollbar.destroy();
      }
    }
  }, {
    name: "parallax",
    params: {
      parallax: {
        enabled: !1
      }
    },
    create: function create() {
      d.extend(this, {
        parallax: {
          setTransform: R.setTransform.bind(this),
          setTranslate: R.setTranslate.bind(this),
          setTransition: R.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        this.params.parallax.enabled && (this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      init: function init() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      },
      setTranslate: function setTranslate() {
        this.params.parallax.enabled && this.parallax.setTranslate();
      },
      setTransition: function setTransition(e) {
        this.params.parallax.enabled && this.parallax.setTransition(e);
      }
    }
  }, {
    name: "zoom",
    params: {
      zoom: {
        enabled: !1,
        maxRatio: 3,
        minRatio: 1,
        toggle: !0,
        containerClass: "swiper-zoom-container",
        zoomedSlideClass: "swiper-slide-zoomed"
      }
    },
    create: function create() {
      var e = this,
          t = {
        enabled: !1,
        scale: 1,
        currentScale: 1,
        isScaling: !1,
        gesture: {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3
        },
        image: {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {}
        },
        velocity: {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0
        }
      };
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (s) {
        t[s] = q[s].bind(e);
      }), d.extend(e, {
        zoom: t
      });
      var s = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return s;
        },
        set: function set(t) {
          if (s !== t) {
            var _s49 = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                _i30 = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;

            e.emit("zoomChange", t, _s49, _i30);
          }

          s = t;
        }
      });
    },
    on: {
      init: function init() {
        var e = this;
        e.params.zoom.enabled && e.zoom.enable();
      },
      destroy: function destroy() {
        this.zoom.disable();
      },
      touchStart: function touchStart(e) {
        this.zoom.enabled && this.zoom.onTouchStart(e);
      },
      touchEnd: function touchEnd(e) {
        this.zoom.enabled && this.zoom.onTouchEnd(e);
      },
      doubleTap: function doubleTap(e) {
        var t = this;
        t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && t.zoom.toggle(e);
      },
      transitionEnd: function transitionEnd() {
        var e = this;
        e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd();
      }
    }
  }, {
    name: "lazy",
    params: {
      lazy: {
        enabled: !1,
        loadPrevNext: !1,
        loadPrevNextAmount: 1,
        loadOnTransitionStart: !1,
        elementClass: "swiper-lazy",
        loadingClass: "swiper-lazy-loading",
        loadedClass: "swiper-lazy-loaded",
        preloaderClass: "swiper-lazy-preloader"
      }
    },
    create: function create() {
      d.extend(this, {
        lazy: {
          initialImageLoaded: !1,
          load: W.load.bind(this),
          loadInSlide: W.loadInSlide.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this;
        e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1);
      },
      init: function init() {
        var e = this;
        e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && e.lazy.load();
      },
      scroll: function scroll() {
        var e = this;
        e.params.freeMode && !e.params.freeModeSticky && e.lazy.load();
      },
      resize: function resize() {
        var e = this;
        e.params.lazy.enabled && e.lazy.load();
      },
      scrollbarDragMove: function scrollbarDragMove() {
        var e = this;
        e.params.lazy.enabled && e.lazy.load();
      },
      transitionStart: function transitionStart() {
        var e = this;
        e.params.lazy.enabled && (e.params.lazy.loadOnTransitionStart || !e.params.lazy.loadOnTransitionStart && !e.lazy.initialImageLoaded) && e.lazy.load();
      },
      transitionEnd: function transitionEnd() {
        var e = this;
        e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load();
      }
    }
  }, {
    name: "controller",
    params: {
      controller: {
        control: void 0,
        inverse: !1,
        by: "slide"
      }
    },
    create: function create() {
      d.extend(this, {
        controller: {
          control: this.params.controller.control,
          getInterpolateFunction: j.getInterpolateFunction.bind(this),
          setTranslate: j.setTranslate.bind(this),
          setTransition: j.setTransition.bind(this)
        }
      });
    },
    on: {
      update: function update() {
        var e = this;
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      resize: function resize() {
        var e = this;
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      observerUpdate: function observerUpdate() {
        var e = this;
        e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline);
      },
      setTranslate: function setTranslate(e, t) {
        this.controller.control && this.controller.setTranslate(e, t);
      },
      setTransition: function setTransition(e, t) {
        this.controller.control && this.controller.setTransition(e, t);
      }
    }
  }, {
    name: "a11y",
    params: {
      a11y: {
        enabled: !0,
        notificationClass: "swiper-notification",
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
        paginationBulletMessage: "Go to slide {{index}}"
      }
    },
    create: function create() {
      var e = this;
      d.extend(e, {
        a11y: {
          liveRegion: r("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
        }
      }), Object.keys(U).forEach(function (t) {
        e.a11y[t] = U[t].bind(e);
      });
    },
    on: {
      init: function init() {
        this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation());
      },
      toEdge: function toEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      fromEdge: function fromEdge() {
        this.params.a11y.enabled && this.a11y.updateNavigation();
      },
      paginationUpdate: function paginationUpdate() {
        this.params.a11y.enabled && this.a11y.updatePagination();
      },
      destroy: function destroy() {
        this.params.a11y.enabled && this.a11y.destroy();
      }
    }
  }, {
    name: "history",
    params: {
      history: {
        enabled: !1,
        replaceState: !1,
        key: "slides"
      }
    },
    create: function create() {
      d.extend(this, {
        history: {
          init: _.init.bind(this),
          setHistory: _.setHistory.bind(this),
          setHistoryPopState: _.setHistoryPopState.bind(this),
          scrollToSlide: _.scrollToSlide.bind(this),
          destroy: _.destroy.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        var e = this;
        e.params.history.enabled && e.history.init();
      },
      destroy: function destroy() {
        var e = this;
        e.params.history.enabled && e.history.destroy();
      },
      transitionEnd: function transitionEnd() {
        var e = this;
        e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex);
      }
    }
  }, {
    name: "hash-navigation",
    params: {
      hashNavigation: {
        enabled: !1,
        replaceState: !1,
        watchState: !1
      }
    },
    create: function create() {
      d.extend(this, {
        hashNavigation: {
          initialized: !1,
          init: K.init.bind(this),
          destroy: K.destroy.bind(this),
          setHash: K.setHash.bind(this),
          onHashCange: K.onHashCange.bind(this)
        }
      });
    },
    on: {
      init: function init() {
        var e = this;
        e.params.hashNavigation.enabled && e.hashNavigation.init();
      },
      destroy: function destroy() {
        var e = this;
        e.params.hashNavigation.enabled && e.hashNavigation.destroy();
      },
      transitionEnd: function transitionEnd() {
        var e = this;
        e.hashNavigation.initialized && e.hashNavigation.setHash();
      }
    }
  }, {
    name: "autoplay",
    params: {
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !0,
        stopOnLastSlide: !1,
        reverseDirection: !1
      }
    },
    create: function create() {
      var e = this;
      d.extend(e, {
        autoplay: {
          running: !1,
          paused: !1,
          run: Z.run.bind(e),
          start: Z.start.bind(e),
          stop: Z.stop.bind(e),
          pause: Z.pause.bind(e),
          onTransitionEnd: function onTransitionEnd(t) {
            e && !e.destroyed && e.$wrapperEl && t.target === this && (e.$wrapperEl[0].removeEventListener("transitionend", e.autoplay.onTransitionEnd), e.$wrapperEl[0].removeEventListener("webkitTransitionEnd", e.autoplay.onTransitionEnd), e.autoplay.paused = !1, e.autoplay.running ? e.autoplay.run() : e.autoplay.stop());
          }
        }
      });
    },
    on: {
      init: function init() {
        var e = this;
        e.params.autoplay.enabled && e.autoplay.start();
      },
      beforeTransitionStart: function beforeTransitionStart(e, t) {
        var s = this;
        s.autoplay.running && (t || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(e) : s.autoplay.stop());
      },
      sliderFirstMove: function sliderFirstMove() {
        var e = this;
        e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause());
      },
      destroy: function destroy() {
        var e = this;
        e.autoplay.running && e.autoplay.stop();
      }
    }
  }, {
    name: "effect-fade",
    params: {
      fadeEffect: {
        crossFade: !1
      }
    },
    create: function create() {
      d.extend(this, {
        fadeEffect: {
          setTranslate: Q.setTranslate.bind(this),
          setTransition: Q.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("fade" !== this.params.effect) return;
        this.classNames.push("".concat(this.params.containerModifierClass, "fade"));
        var e = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !0
        };
        d.extend(this.params, e), d.extend(this.originalParams, e);
      },
      setTranslate: function setTranslate() {
        "fade" === this.params.effect && this.fadeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "fade" === this.params.effect && this.fadeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-cube",
    params: {
      cubeEffect: {
        slideShadows: !0,
        shadow: !0,
        shadowOffset: 20,
        shadowScale: .94
      }
    },
    create: function create() {
      d.extend(this, {
        cubeEffect: {
          setTranslate: J.setTranslate.bind(this),
          setTransition: J.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("cube" !== this.params.effect) return;
        this.classNames.push("".concat(this.params.containerModifierClass, "cube")), this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
        var e = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0
        };
        d.extend(this.params, e), d.extend(this.originalParams, e);
      },
      setTranslate: function setTranslate() {
        "cube" === this.params.effect && this.cubeEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "cube" === this.params.effect && this.cubeEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-flip",
    params: {
      flipEffect: {
        slideShadows: !0,
        limitRotation: !0
      }
    },
    create: function create() {
      d.extend(this, {
        flipEffect: {
          setTranslate: ee.setTranslate.bind(this),
          setTransition: ee.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        if ("flip" !== this.params.effect) return;
        this.classNames.push("".concat(this.params.containerModifierClass, "flip")), this.classNames.push("".concat(this.params.containerModifierClass, "3d"));
        var e = {
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !0
        };
        d.extend(this.params, e), d.extend(this.originalParams, e);
      },
      setTranslate: function setTranslate() {
        "flip" === this.params.effect && this.flipEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "flip" === this.params.effect && this.flipEffect.setTransition(e);
      }
    }
  }, {
    name: "effect-coverflow",
    params: {
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: !0
      }
    },
    create: function create() {
      d.extend(this, {
        coverflowEffect: {
          setTranslate: te.setTranslate.bind(this),
          setTransition: te.setTransition.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        "coverflow" === this.params.effect && (this.classNames.push("".concat(this.params.containerModifierClass, "coverflow")), this.classNames.push("".concat(this.params.containerModifierClass, "3d")), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0);
      },
      setTranslate: function setTranslate() {
        "coverflow" === this.params.effect && this.coverflowEffect.setTranslate();
      },
      setTransition: function setTransition(e) {
        "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e);
      }
    }
  }, {
    name: "thumbs",
    params: {
      thumbs: {
        swiper: null,
        slideThumbActiveClass: "swiper-slide-thumb-active",
        thumbsContainerClass: "swiper-container-thumbs"
      }
    },
    create: function create() {
      d.extend(this, {
        thumbs: {
          swiper: null,
          init: se.init.bind(this),
          update: se.update.bind(this),
          onThumbClick: se.onThumbClick.bind(this)
        }
      });
    },
    on: {
      beforeInit: function beforeInit() {
        var e = this.params.thumbs;
        e && e.swiper && (this.thumbs.init(), this.thumbs.update(!0));
      },
      slideChange: function slideChange() {
        this.thumbs.swiper && this.thumbs.update();
      },
      update: function update() {
        this.thumbs.swiper && this.thumbs.update();
      },
      resize: function resize() {
        this.thumbs.swiper && this.thumbs.update();
      },
      observerUpdate: function observerUpdate() {
        this.thumbs.swiper && this.thumbs.update();
      },
      setTransition: function setTransition(e) {
        var t = this.thumbs.swiper;
        t && t.setTransition(e);
      },
      beforeDestroy: function beforeDestroy() {
        var e = this.thumbs.swiper;
        e && this.thumbs.swiperCreated && e && e.destroy();
      }
    }
  }];
  void 0 === z.use && (z.use = z.Class.use, z.installModule = z.Class.installModule), z.use(ie);
  new z(".swiper-container", {
    autoplay: {
      delay: 5e3,
      disableOnInteraction: !1
    },
    speed: 800,
    loop: !0,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: !0
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    }
  });
}]);