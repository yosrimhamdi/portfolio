"use strict";

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

!function (e) {
  var t = {};

  function i(n) {
    if (t[n]) return t[n].exports;
    var s = t[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports;
  }

  i.m = e, i.c = t, i.d = function (e, t, n) {
    i.o(e, t) || Object.defineProperty(e, t, {
      enumerable: !0,
      get: n
    });
  }, i.r = function (e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, t) {
    if (1 & t && (e = i(e)), 8 & t) return e;
    if (4 & t && "object" == _typeof(e) && e && e.__esModule) return e;
    var n = Object.create(null);
    if (i.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: e
    }), 2 & t && "string" != typeof e) for (var s in e) {
      i.d(n, s, function (t) {
        return e[t];
      }.bind(null, s));
    }
    return n;
  }, i.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(t, "a", t), t;
  }, i.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, i.p = "", i(i.s = 8);
}([function (e, t, i) {
  var n;
  /*!
   * jQuery JavaScript Library v3.4.1
   * https://jquery.com/
   *
   * Includes Sizzle.js
   * https://sizzlejs.com/
   *
   * Copyright JS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2019-05-01T21:04Z
   */

  !function (t, i) {
    "use strict";

    "object" == _typeof(e.exports) ? e.exports = t.document ? i(t, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");
      return i(e);
    } : i(t);
  }("undefined" != typeof window ? window : this, function (i, s) {
    "use strict";

    var r = [],
        a = i.document,
        o = Object.getPrototypeOf,
        l = r.slice,
        c = r.concat,
        d = r.push,
        u = r.indexOf,
        p = {},
        h = p.toString,
        f = p.hasOwnProperty,
        m = f.toString,
        v = m.call(Object),
        g = {},
        y = function y(e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
        b = function b(e) {
      return null != e && e === e.window;
    },
        w = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function x(e, t, i) {
      var n,
          s,
          r = (i = i || a).createElement("script");
      if (r.text = e, t) for (n in w) {
        (s = t[n] || t.getAttribute && t.getAttribute(n)) && r.setAttribute(n, s);
      }
      i.head.appendChild(r).parentNode.removeChild(r);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? p[h.call(e)] || "object" : _typeof(e);
    }

    var E = function E(e, t) {
      return new E.fn.init(e, t);
    },
        C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function S(e) {
      var t = !!e && "length" in e && e.length,
          i = T(e);
      return !y(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    E.fn = E.prototype = {
      jquery: "3.4.1",
      constructor: E,
      length: 0,
      toArray: function toArray() {
        return l.call(this);
      },
      get: function get(e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = E.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return E.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(E.map(this, function (t, i) {
          return e.call(t, i, t);
        }));
      },
      slice: function slice() {
        return this.pushStack(l.apply(this, arguments));
      },
      first: function first() {
        return this.eq(0);
      },
      last: function last() {
        return this.eq(-1);
      },
      eq: function eq(e) {
        var t = this.length,
            i = +e + (e < 0 ? t : 0);
        return this.pushStack(i >= 0 && i < t ? [this[i]] : []);
      },
      end: function end() {
        return this.prevObject || this.constructor();
      },
      push: d,
      sort: r.sort,
      splice: r.splice
    }, E.extend = E.fn.extend = function () {
      var e,
          t,
          i,
          n,
          s,
          r,
          a = arguments[0] || {},
          o = 1,
          l = arguments.length,
          c = !1;

      for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == _typeof(a) || y(a) || (a = {}), o === l && (a = this, o--); o < l; o++) {
        if (null != (e = arguments[o])) for (t in e) {
          n = e[t], "__proto__" !== t && a !== n && (c && n && (E.isPlainObject(n) || (s = Array.isArray(n))) ? (i = a[t], r = s && !Array.isArray(i) ? [] : s || E.isPlainObject(i) ? i : {}, s = !1, a[t] = E.extend(c, r, n)) : void 0 !== n && (a[t] = n));
        }
      }

      return a;
    }, E.extend({
      expando: "jQuery" + ("3.4.1" + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function error(e) {
        throw new Error(e);
      },
      noop: function noop() {},
      isPlainObject: function isPlainObject(e) {
        var t, i;
        return !(!e || "[object Object]" !== h.call(e)) && (!(t = o(e)) || "function" == typeof (i = f.call(t, "constructor") && t.constructor) && m.call(i) === v);
      },
      isEmptyObject: function isEmptyObject(e) {
        var t;

        for (t in e) {
          return !1;
        }

        return !0;
      },
      globalEval: function globalEval(e, t) {
        x(e, {
          nonce: t && t.nonce
        });
      },
      each: function each(e, t) {
        var i,
            n = 0;
        if (S(e)) for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++) {
          ;
        } else for (n in e) {
          if (!1 === t.call(e[n], n, e[n])) break;
        }
        return e;
      },
      trim: function trim(e) {
        return null == e ? "" : (e + "").replace(C, "");
      },
      makeArray: function makeArray(e, t) {
        var i = t || [];
        return null != e && (S(Object(e)) ? E.merge(i, "string" == typeof e ? [e] : e) : d.call(i, e)), i;
      },
      inArray: function inArray(e, t, i) {
        return null == t ? -1 : u.call(t, e, i);
      },
      merge: function merge(e, t) {
        for (var i = +t.length, n = 0, s = e.length; n < i; n++) {
          e[s++] = t[n];
        }

        return e.length = s, e;
      },
      grep: function grep(e, t, i) {
        for (var n = [], s = 0, r = e.length, a = !i; s < r; s++) {
          !t(e[s], s) !== a && n.push(e[s]);
        }

        return n;
      },
      map: function map(e, t, i) {
        var n,
            s,
            r = 0,
            a = [];
        if (S(e)) for (n = e.length; r < n; r++) {
          null != (s = t(e[r], r, i)) && a.push(s);
        } else for (r in e) {
          null != (s = t(e[r], r, i)) && a.push(s);
        }
        return c.apply([], a);
      },
      guid: 1,
      support: g
    }), "function" == typeof Symbol && (E.fn[Symbol.iterator] = r[Symbol.iterator]), E.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
      p["[object " + t + "]"] = t.toLowerCase();
    });

    var k =
    /*!
     * Sizzle CSS Selector Engine v2.3.4
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://js.foundation/
     *
     * Date: 2019-04-08
     */
    function (e) {
      var t,
          i,
          n,
          s,
          r,
          a,
          o,
          l,
          c,
          d,
          u,
          p,
          h,
          f,
          m,
          v,
          g,
          y,
          b,
          w = "sizzle" + 1 * new Date(),
          x = e.document,
          T = 0,
          E = 0,
          C = le(),
          S = le(),
          k = le(),
          $ = le(),
          M = function M(e, t) {
        return e === t && (u = !0), 0;
      },
          P = {}.hasOwnProperty,
          A = [],
          z = A.pop,
          L = A.push,
          D = A.push,
          I = A.slice,
          O = function O(e, t) {
        for (var i = 0, n = e.length; i < n; i++) {
          if (e[i] === t) return i;
        }

        return -1;
      },
          _ = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          N = "[\\x20\\t\\r\\n\\f]",
          j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          H = "\\[" + N + "*(" + j + ")(?:" + N + "*([*^$|!~]?=)" + N + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + N + "*\\]",
          q = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
          R = new RegExp(N + "+", "g"),
          B = new RegExp("^" + N + "+|((?:^|[^\\\\])(?:\\\\.)*)" + N + "+$", "g"),
          F = new RegExp("^" + N + "*," + N + "*"),
          W = new RegExp("^" + N + "*([>+~]|" + N + ")" + N + "*"),
          X = new RegExp(N + "|>"),
          G = new RegExp(q),
          Y = new RegExp("^" + j + "$"),
          V = {
        ID: new RegExp("^#(" + j + ")"),
        CLASS: new RegExp("^\\.(" + j + ")"),
        TAG: new RegExp("^(" + j + "|[*])"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + N + "*(even|odd|(([+-]|)(\\d*)n|)" + N + "*(?:([+-]|)" + N + "*(\\d+)|))" + N + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + _ + ")$", "i"),
        needsContext: new RegExp("^" + N + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + N + "*((?:-\\d)?\\d*)" + N + "*\\)|)(?=[^-]|$)", "i")
      },
          U = /HTML$/i,
          J = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + N + "?|(" + N + ")|.)", "ig"),
          ie = function ie(e, t, i) {
        var n = "0x" + t - 65536;
        return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
      },
          ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          se = function se(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          re = function re() {
        p();
      },
          ae = we(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        D.apply(A = I.call(x.childNodes), x.childNodes), A[x.childNodes.length].nodeType;
      } catch (e) {
        D = {
          apply: A.length ? function (e, t) {
            L.apply(e, I.call(t));
          } : function (e, t) {
            for (var i = e.length, n = 0; e[i++] = t[n++];) {
              ;
            }

            e.length = i - 1;
          }
        };
      }

      function oe(e, t, n, s) {
        var r,
            o,
            c,
            d,
            u,
            f,
            g,
            y = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return n;

        if (!s && ((t ? t.ownerDocument || t : x) !== h && p(t), t = t || h, m)) {
          if (11 !== T && (u = Z.exec(e))) if (r = u[1]) {
            if (9 === T) {
              if (!(c = t.getElementById(r))) return n;
              if (c.id === r) return n.push(c), n;
            } else if (y && (c = y.getElementById(r)) && b(t, c) && c.id === r) return n.push(c), n;
          } else {
            if (u[2]) return D.apply(n, t.getElementsByTagName(e)), n;
            if ((r = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return D.apply(n, t.getElementsByClassName(r)), n;
          }

          if (i.qsa && !$[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
            if (g = e, y = t, 1 === T && X.test(e)) {
              for ((d = t.getAttribute("id")) ? d = d.replace(ne, se) : t.setAttribute("id", d = w), o = (f = a(e)).length; o--;) {
                f[o] = "#" + d + " " + be(f[o]);
              }

              g = f.join(","), y = ee.test(e) && ge(t.parentNode) || t;
            }

            try {
              return D.apply(n, y.querySelectorAll(g)), n;
            } catch (t) {
              $(e, !0);
            } finally {
              d === w && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(B, "$1"), t, n, s);
      }

      function le() {
        var e = [];
        return function t(i, s) {
          return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s;
        };
      }

      function ce(e) {
        return e[w] = !0, e;
      }

      function de(e) {
        var t = h.createElement("fieldset");

        try {
          return !!e(t);
        } catch (e) {
          return !1;
        } finally {
          t.parentNode && t.parentNode.removeChild(t), t = null;
        }
      }

      function ue(e, t) {
        for (var i = e.split("|"), s = i.length; s--;) {
          n.attrHandle[i[s]] = t;
        }
      }

      function pe(e, t) {
        var i = t && e,
            n = i && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
        if (n) return n;
        if (i) for (; i = i.nextSibling;) {
          if (i === t) return -1;
        }
        return e ? 1 : -1;
      }

      function he(e) {
        return function (t) {
          return "input" === t.nodeName.toLowerCase() && t.type === e;
        };
      }

      function fe(e) {
        return function (t) {
          var i = t.nodeName.toLowerCase();
          return ("input" === i || "button" === i) && t.type === e;
        };
      }

      function me(e) {
        return function (t) {
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && ae(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function ve(e) {
        return ce(function (t) {
          return t = +t, ce(function (i, n) {
            for (var s, r = e([], i.length, t), a = r.length; a--;) {
              i[s = r[a]] && (i[s] = !(n[s] = i[s]));
            }
          });
        });
      }

      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in i = oe.support = {}, r = oe.isXML = function (e) {
        var t = e.namespaceURI,
            i = (e.ownerDocument || e).documentElement;
        return !U.test(t || i && i.nodeName || "HTML");
      }, p = oe.setDocument = function (e) {
        var t,
            s,
            a = e ? e.ownerDocument || e : x;
        return a !== h && 9 === a.nodeType && a.documentElement ? (f = (h = a).documentElement, m = !r(h), x !== h && (s = h.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", re, !1) : s.attachEvent && s.attachEvent("onunload", re)), i.attributes = de(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), i.getElementsByTagName = de(function (e) {
          return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
        }), i.getElementsByClassName = Q.test(h.getElementsByClassName), i.getById = de(function (e) {
          return f.appendChild(e).id = w, !h.getElementsByName || !h.getElementsByName(w).length;
        }), i.getById ? (n.filter.ID = function (e) {
          var t = e.replace(te, ie);
          return function (e) {
            return e.getAttribute("id") === t;
          };
        }, n.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && m) {
            var i = t.getElementById(e);
            return i ? [i] : [];
          }
        }) : (n.filter.ID = function (e) {
          var t = e.replace(te, ie);
          return function (e) {
            var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return i && i.value === t;
          };
        }, n.find.ID = function (e, t) {
          if (void 0 !== t.getElementById && m) {
            var i,
                n,
                s,
                r = t.getElementById(e);

            if (r) {
              if ((i = r.getAttributeNode("id")) && i.value === e) return [r];

              for (s = t.getElementsByName(e), n = 0; r = s[n++];) {
                if ((i = r.getAttributeNode("id")) && i.value === e) return [r];
              }
            }

            return [];
          }
        }), n.find.TAG = i.getElementsByTagName ? function (e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0;
        } : function (e, t) {
          var i,
              n = [],
              s = 0,
              r = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; i = r[s++];) {
              1 === i.nodeType && n.push(i);
            }

            return n;
          }

          return r;
        }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
        }, g = [], v = [], (i.qsa = Q.test(h.querySelectorAll)) && (de(function (e) {
          f.appendChild(e).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + N + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + N + "*(?:value|" + _ + ")"), e.querySelectorAll("[id~=" + w + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]");
        }), de(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = h.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + N + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
        })), (i.matchesSelector = Q.test(y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && de(function (e) {
          i.disconnectedMatch = y.call(e, "*"), y.call(e, "[s!='']:x"), g.push("!=", q);
        }), v = v.length && new RegExp(v.join("|")), g = g.length && new RegExp(g.join("|")), t = Q.test(f.compareDocumentPosition), b = t || Q.test(f.contains) ? function (e, t) {
          var i = 9 === e.nodeType ? e.documentElement : e,
              n = t && t.parentNode;
          return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)));
        } : function (e, t) {
          if (t) for (; t = t.parentNode;) {
            if (t === e) return !0;
          }
          return !1;
        }, M = t ? function (e, t) {
          if (e === t) return u = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === h || e.ownerDocument === x && b(x, e) ? -1 : t === h || t.ownerDocument === x && b(x, t) ? 1 : d ? O(d, e) - O(d, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return u = !0, 0;
          var i,
              n = 0,
              s = e.parentNode,
              r = t.parentNode,
              a = [e],
              o = [t];
          if (!s || !r) return e === h ? -1 : t === h ? 1 : s ? -1 : r ? 1 : d ? O(d, e) - O(d, t) : 0;
          if (s === r) return pe(e, t);

          for (i = e; i = i.parentNode;) {
            a.unshift(i);
          }

          for (i = t; i = i.parentNode;) {
            o.unshift(i);
          }

          for (; a[n] === o[n];) {
            n++;
          }

          return n ? pe(a[n], o[n]) : a[n] === x ? -1 : o[n] === x ? 1 : 0;
        }, h) : h;
      }, oe.matches = function (e, t) {
        return oe(e, null, null, t);
      }, oe.matchesSelector = function (e, t) {
        if ((e.ownerDocument || e) !== h && p(e), i.matchesSelector && m && !$[t + " "] && (!g || !g.test(t)) && (!v || !v.test(t))) try {
          var n = y.call(e, t);
          if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n;
        } catch (e) {
          $(t, !0);
        }
        return oe(t, h, null, [e]).length > 0;
      }, oe.contains = function (e, t) {
        return (e.ownerDocument || e) !== h && p(e), b(e, t);
      }, oe.attr = function (e, t) {
        (e.ownerDocument || e) !== h && p(e);
        var s = n.attrHandle[t.toLowerCase()],
            r = s && P.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
        return void 0 !== r ? r : i.attributes || !m ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
      }, oe.escape = function (e) {
        return (e + "").replace(ne, se);
      }, oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, oe.uniqueSort = function (e) {
        var t,
            n = [],
            s = 0,
            r = 0;

        if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(M), u) {
          for (; t = e[r++];) {
            t === e[r] && (s = n.push(r));
          }

          for (; s--;) {
            e.splice(n[s], 1);
          }
        }

        return d = null, e;
      }, s = oe.getText = function (e) {
        var t,
            i = "",
            n = 0,
            r = e.nodeType;

        if (r) {
          if (1 === r || 9 === r || 11 === r) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              i += s(e);
            }
          } else if (3 === r || 4 === r) return e.nodeValue;
        } else for (; t = e[n++];) {
          i += s(t);
        }

        return i;
      }, (n = oe.selectors = {
        cacheLength: 50,
        createPseudo: ce,
        match: V,
        attrHandle: {},
        find: {},
        relative: {
          ">": {
            dir: "parentNode",
            first: !0
          },
          " ": {
            dir: "parentNode"
          },
          "+": {
            dir: "previousSibling",
            first: !0
          },
          "~": {
            dir: "previousSibling"
          }
        },
        preFilter: {
          ATTR: function ATTR(e) {
            return e[1] = e[1].replace(te, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(te, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
          },
          CHILD: function CHILD(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
          },
          PSEUDO: function PSEUDO(e) {
            var t,
                i = !e[6] && e[2];
            return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && G.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3));
          }
        },
        filter: {
          TAG: function TAG(e) {
            var t = e.replace(te, ie).toLowerCase();
            return "*" === e ? function () {
              return !0;
            } : function (e) {
              return e.nodeName && e.nodeName.toLowerCase() === t;
            };
          },
          CLASS: function CLASS(e) {
            var t = C[e + " "];
            return t || (t = new RegExp("(^|" + N + ")" + e + "(" + N + "|$)")) && C(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, i) {
            return function (n) {
              var s = oe.attr(n, e);
              return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(R, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function CHILD(e, t, i, n, s) {
            var r = "nth" !== e.slice(0, 3),
                a = "last" !== e.slice(-4),
                o = "of-type" === t;
            return 1 === n && 0 === s ? function (e) {
              return !!e.parentNode;
            } : function (t, i, l) {
              var c,
                  d,
                  u,
                  p,
                  h,
                  f,
                  m = r !== a ? "nextSibling" : "previousSibling",
                  v = t.parentNode,
                  g = o && t.nodeName.toLowerCase(),
                  y = !l && !o,
                  b = !1;

              if (v) {
                if (r) {
                  for (; m;) {
                    for (p = t; p = p[m];) {
                      if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                    }

                    f = m = "only" === e && !f && "nextSibling";
                  }

                  return !0;
                }

                if (f = [a ? v.firstChild : v.lastChild], a && y) {
                  for (b = (h = (c = (d = (u = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();) {
                    if (1 === p.nodeType && ++b && p === t) {
                      d[e] = [T, h, b];
                      break;
                    }
                  }
                } else if (y && (b = h = (c = (d = (u = (p = t)[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b) for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[w] || (p[w] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, b]), p !== t));) {
                  ;
                }

                return (b -= s) === n || b % n == 0 && b / n >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var i,
                s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
            return s[w] ? s(t) : s.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, i) {
              for (var n, r = s(e, t), a = r.length; a--;) {
                e[n = O(e, r[a])] = !(i[n] = r[a]);
              }
            }) : function (e) {
              return s(e, 0, i);
            }) : s;
          }
        },
        pseudos: {
          not: ce(function (e) {
            var t = [],
                i = [],
                n = o(e.replace(B, "$1"));
            return n[w] ? ce(function (e, t, i, s) {
              for (var r, a = n(e, null, s, []), o = e.length; o--;) {
                (r = a[o]) && (e[o] = !(t[o] = r));
              }
            }) : function (e, s, r) {
              return t[0] = e, n(t, null, r, i), t[0] = null, !i.pop();
            };
          }),
          has: ce(function (e) {
            return function (t) {
              return oe(e, t).length > 0;
            };
          }),
          contains: ce(function (e) {
            return e = e.replace(te, ie), function (t) {
              return (t.textContent || s(t)).indexOf(e) > -1;
            };
          }),
          lang: ce(function (e) {
            return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(), function (t) {
              var i;

              do {
                if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-");
              } while ((t = t.parentNode) && 1 === t.nodeType);

              return !1;
            };
          }),
          target: function target(t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id;
          },
          root: function root(e) {
            return e === f;
          },
          focus: function focus(e) {
            return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: me(!1),
          disabled: me(!0),
          checked: function checked(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected;
          },
          selected: function selected(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function empty(e) {
            for (e = e.firstChild; e; e = e.nextSibling) {
              if (e.nodeType < 6) return !1;
            }

            return !0;
          },
          parent: function parent(e) {
            return !n.pseudos.empty(e);
          },
          header: function header(e) {
            return K.test(e.nodeName);
          },
          input: function input(e) {
            return J.test(e.nodeName);
          },
          button: function button(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t;
          },
          text: function text(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, i) {
            return [i < 0 ? i + t : i];
          }),
          even: ve(function (e, t) {
            for (var i = 0; i < t; i += 2) {
              e.push(i);
            }

            return e;
          }),
          odd: ve(function (e, t) {
            for (var i = 1; i < t; i += 2) {
              e.push(i);
            }

            return e;
          }),
          lt: ve(function (e, t, i) {
            for (var n = i < 0 ? i + t : i > t ? t : i; --n >= 0;) {
              e.push(n);
            }

            return e;
          }),
          gt: ve(function (e, t, i) {
            for (var n = i < 0 ? i + t : i; ++n < t;) {
              e.push(n);
            }

            return e;
          })
        }
      }).pseudos.nth = n.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) {
        n.pseudos[t] = he(t);
      }

      for (t in {
        submit: !0,
        reset: !0
      }) {
        n.pseudos[t] = fe(t);
      }

      function ye() {}

      function be(e) {
        for (var t = 0, i = e.length, n = ""; t < i; t++) {
          n += e[t].value;
        }

        return n;
      }

      function we(e, t, i) {
        var n = t.dir,
            s = t.next,
            r = s || n,
            a = i && "parentNode" === r,
            o = E++;
        return t.first ? function (t, i, s) {
          for (; t = t[n];) {
            if (1 === t.nodeType || a) return e(t, i, s);
          }

          return !1;
        } : function (t, i, l) {
          var c,
              d,
              u,
              p = [T, o];

          if (l) {
            for (; t = t[n];) {
              if ((1 === t.nodeType || a) && e(t, i, l)) return !0;
            }
          } else for (; t = t[n];) {
            if (1 === t.nodeType || a) if (d = (u = t[w] || (t[w] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[n] || t;else {
              if ((c = d[r]) && c[0] === T && c[1] === o) return p[2] = c[2];
              if (d[r] = p, p[2] = e(t, i, l)) return !0;
            }
          }

          return !1;
        };
      }

      function xe(e) {
        return e.length > 1 ? function (t, i, n) {
          for (var s = e.length; s--;) {
            if (!e[s](t, i, n)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, i, n, s) {
        for (var r, a = [], o = 0, l = e.length, c = null != t; o < l; o++) {
          (r = e[o]) && (i && !i(r, n, s) || (a.push(r), c && t.push(o)));
        }

        return a;
      }

      function Ee(e, t, i, n, s, r) {
        return n && !n[w] && (n = Ee(n)), s && !s[w] && (s = Ee(s, r)), ce(function (r, a, o, l) {
          var c,
              d,
              u,
              p = [],
              h = [],
              f = a.length,
              m = r || function (e, t, i) {
            for (var n = 0, s = t.length; n < s; n++) {
              oe(e, t[n], i);
            }

            return i;
          }(t || "*", o.nodeType ? [o] : o, []),
              v = !e || !r && t ? m : Te(m, p, e, o, l),
              g = i ? s || (r ? e : f || n) ? [] : a : v;

          if (i && i(v, g, o, l), n) for (c = Te(g, h), n(c, [], o, l), d = c.length; d--;) {
            (u = c[d]) && (g[h[d]] = !(v[h[d]] = u));
          }

          if (r) {
            if (s || e) {
              if (s) {
                for (c = [], d = g.length; d--;) {
                  (u = g[d]) && c.push(v[d] = u);
                }

                s(null, g = [], c, l);
              }

              for (d = g.length; d--;) {
                (u = g[d]) && (c = s ? O(r, u) : p[d]) > -1 && (r[c] = !(a[c] = u));
              }
            }
          } else g = Te(g === a ? g.splice(f, g.length) : g), s ? s(null, a, g, l) : D.apply(a, g);
        });
      }

      function Ce(e) {
        for (var t, i, s, r = e.length, a = n.relative[e[0].type], o = a || n.relative[" "], l = a ? 1 : 0, d = we(function (e) {
          return e === t;
        }, o, !0), u = we(function (e) {
          return O(t, e) > -1;
        }, o, !0), p = [function (e, i, n) {
          var s = !a && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
          return t = null, s;
        }]; l < r; l++) {
          if (i = n.relative[e[l].type]) p = [we(xe(p), i)];else {
            if ((i = n.filter[e[l].type].apply(null, e[l].matches))[w]) {
              for (s = ++l; s < r && !n.relative[e[s].type]; s++) {
                ;
              }

              return Ee(l > 1 && xe(p), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(B, "$1"), i, l < s && Ce(e.slice(l, s)), s < r && Ce(e = e.slice(s)), s < r && be(e));
            }

            p.push(i);
          }
        }

        return xe(p);
      }

      return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye(), a = oe.tokenize = function (e, t) {
        var i,
            s,
            r,
            a,
            o,
            l,
            c,
            d = S[e + " "];
        if (d) return t ? 0 : d.slice(0);

        for (o = e, l = [], c = n.preFilter; o;) {
          for (a in i && !(s = F.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(r = [])), i = !1, (s = W.exec(o)) && (i = s.shift(), r.push({
            value: i,
            type: s[0].replace(B, " ")
          }), o = o.slice(i.length)), n.filter) {
            !(s = V[a].exec(o)) || c[a] && !(s = c[a](s)) || (i = s.shift(), r.push({
              value: i,
              type: a,
              matches: s
            }), o = o.slice(i.length));
          }

          if (!i) break;
        }

        return t ? o.length : o ? oe.error(e) : S(e, l).slice(0);
      }, o = oe.compile = function (e, t) {
        var i,
            s = [],
            r = [],
            o = k[e + " "];

        if (!o) {
          for (t || (t = a(e)), i = t.length; i--;) {
            (o = Ce(t[i]))[w] ? s.push(o) : r.push(o);
          }

          (o = k(e, function (e, t) {
            var i = t.length > 0,
                s = e.length > 0,
                r = function r(_r, a, o, l, d) {
              var u,
                  f,
                  v,
                  g = 0,
                  y = "0",
                  b = _r && [],
                  w = [],
                  x = c,
                  E = _r || s && n.find.TAG("*", d),
                  C = T += null == x ? 1 : Math.random() || .1,
                  S = E.length;

              for (d && (c = a === h || a || d); y !== S && null != (u = E[y]); y++) {
                if (s && u) {
                  for (f = 0, a || u.ownerDocument === h || (p(u), o = !m); v = e[f++];) {
                    if (v(u, a || h, o)) {
                      l.push(u);
                      break;
                    }
                  }

                  d && (T = C);
                }

                i && ((u = !v && u) && g--, _r && b.push(u));
              }

              if (g += y, i && y !== g) {
                for (f = 0; v = t[f++];) {
                  v(b, w, a, o);
                }

                if (_r) {
                  if (g > 0) for (; y--;) {
                    b[y] || w[y] || (w[y] = z.call(l));
                  }
                  w = Te(w);
                }

                D.apply(l, w), d && !_r && w.length > 0 && g + t.length > 1 && oe.uniqueSort(l);
              }

              return d && (T = C, c = x), b;
            };

            return i ? ce(r) : r;
          }(r, s))).selector = e;
        }

        return o;
      }, l = oe.select = function (e, t, i, s) {
        var r,
            l,
            c,
            d,
            u,
            p = "function" == typeof e && e,
            h = !s && a(e = p.selector || e);

        if (i = i || [], 1 === h.length) {
          if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
            if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (r = V.needsContext.test(e) ? 0 : l.length; r-- && (c = l[r], !n.relative[d = c.type]);) {
            if ((u = n.find[d]) && (s = u(c.matches[0].replace(te, ie), ee.test(l[0].type) && ge(t.parentNode) || t))) {
              if (l.splice(r, 1), !(e = s.length && be(l))) return D.apply(i, s), i;
              break;
            }
          }
        }

        return (p || o(e, h))(s, t, !m, i, !t || ee.test(e) && ge(t.parentNode) || t), i;
      }, i.sortStable = w.split("").sort(M).join("") === w, i.detectDuplicates = !!u, p(), i.sortDetached = de(function (e) {
        return 1 & e.compareDocumentPosition(h.createElement("fieldset"));
      }), de(function (e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
      }) || ue("type|href|height|width", function (e, t, i) {
        if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
      }), i.attributes && de(function (e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }) || ue("value", function (e, t, i) {
        if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
      }), de(function (e) {
        return null == e.getAttribute("disabled");
      }) || ue(_, function (e, t, i) {
        var n;
        if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
      }), oe;
    }(i);

    E.find = k, E.expr = k.selectors, E.expr[":"] = E.expr.pseudos, E.uniqueSort = E.unique = k.uniqueSort, E.text = k.getText, E.isXMLDoc = k.isXML, E.contains = k.contains, E.escapeSelector = k.escape;

    var $ = function $(e, t, i) {
      for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (s && E(e).is(i)) break;
          n.push(e);
        }
      }

      return n;
    },
        M = function M(e, t) {
      for (var i = []; e; e = e.nextSibling) {
        1 === e.nodeType && e !== t && i.push(e);
      }

      return i;
    },
        P = E.expr.match.needsContext;

    function A(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var z = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function L(e, t, i) {
      return y(t) ? E.grep(e, function (e, n) {
        return !!t.call(e, n, e) !== i;
      }) : t.nodeType ? E.grep(e, function (e) {
        return e === t !== i;
      }) : "string" != typeof t ? E.grep(e, function (e) {
        return u.call(t, e) > -1 !== i;
      }) : E.filter(t, e, i);
    }

    E.filter = function (e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? E.find.matchesSelector(n, e) ? [n] : [] : E.find.matches(e, E.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, E.fn.extend({
      find: function find(e) {
        var t,
            i,
            n = this.length,
            s = this;
        if ("string" != typeof e) return this.pushStack(E(e).filter(function () {
          for (t = 0; t < n; t++) {
            if (E.contains(s[t], this)) return !0;
          }
        }));

        for (i = this.pushStack([]), t = 0; t < n; t++) {
          E.find(e, s[t], i);
        }

        return n > 1 ? E.uniqueSort(i) : i;
      },
      filter: function filter(e) {
        return this.pushStack(L(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(L(this, e || [], !0));
      },
      is: function is(e) {
        return !!L(this, "string" == typeof e && P.test(e) ? E(e) : e || [], !1).length;
      }
    });
    var D,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (E.fn.init = function (e, t, i) {
      var n, s;
      if (!e) return this;

      if (i = i || D, "string" == typeof e) {
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);

        if (n[1]) {
          if (t = t instanceof E ? t[0] : t, E.merge(this, E.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : a, !0)), z.test(n[1]) && E.isPlainObject(t)) for (n in t) {
            y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          }
          return this;
        }

        return (s = a.getElementById(n[2])) && (this[0] = s, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(E) : E.makeArray(e, this);
    }).prototype = E.fn, D = E(a);
    var O = /^(?:parents|prev(?:Until|All))/,
        _ = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function N(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    E.fn.extend({
      has: function has(e) {
        var t = E(e, this),
            i = t.length;
        return this.filter(function () {
          for (var e = 0; e < i; e++) {
            if (E.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var i,
            n = 0,
            s = this.length,
            r = [],
            a = "string" != typeof e && E(e);
        if (!P.test(e)) for (; n < s; n++) {
          for (i = this[n]; i && i !== t; i = i.parentNode) {
            if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && E.find.matchesSelector(i, e))) {
              r.push(i);
              break;
            }
          }
        }
        return this.pushStack(r.length > 1 ? E.uniqueSort(r) : r);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? u.call(E(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(E.uniqueSort(E.merge(this.get(), E(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), E.each({
      parent: function parent(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null;
      },
      parents: function parents(e) {
        return $(e, "parentNode");
      },
      parentsUntil: function parentsUntil(e, t, i) {
        return $(e, "parentNode", i);
      },
      next: function next(e) {
        return N(e, "nextSibling");
      },
      prev: function prev(e) {
        return N(e, "previousSibling");
      },
      nextAll: function nextAll(e) {
        return $(e, "nextSibling");
      },
      prevAll: function prevAll(e) {
        return $(e, "previousSibling");
      },
      nextUntil: function nextUntil(e, t, i) {
        return $(e, "nextSibling", i);
      },
      prevUntil: function prevUntil(e, t, i) {
        return $(e, "previousSibling", i);
      },
      siblings: function siblings(e) {
        return M((e.parentNode || {}).firstChild, e);
      },
      children: function children(e) {
        return M(e.firstChild);
      },
      contents: function contents(e) {
        return void 0 !== e.contentDocument ? e.contentDocument : (A(e, "template") && (e = e.content || e), E.merge([], e.childNodes));
      }
    }, function (e, t) {
      E.fn[e] = function (i, n) {
        var s = E.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = E.filter(n, s)), this.length > 1 && (_[e] || E.uniqueSort(s), O.test(e) && s.reverse()), this.pushStack(s);
      };
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function H(e) {
      return e;
    }

    function q(e) {
      throw e;
    }

    function R(e, t, i, n) {
      var s;

      try {
        e && y(s = e.promise) ? s.call(e).done(t).fail(i) : e && y(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n));
      } catch (e) {
        i.apply(void 0, [e]);
      }
    }

    E.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return E.each(e.match(j) || [], function (e, i) {
          t[i] = !0;
        }), t;
      }(e) : E.extend({}, e);

      var t,
          i,
          n,
          s,
          r = [],
          a = [],
          o = -1,
          l = function l() {
        for (s = s || e.once, n = t = !0; a.length; o = -1) {
          for (i = a.shift(); ++o < r.length;) {
            !1 === r[o].apply(i[0], i[1]) && e.stopOnFalse && (o = r.length, i = !1);
          }
        }

        e.memory || (i = !1), t = !1, s && (r = i ? [] : "");
      },
          c = {
        add: function add() {
          return r && (i && !t && (o = r.length - 1, a.push(i)), function t(i) {
            E.each(i, function (i, n) {
              y(n) ? e.unique && c.has(n) || r.push(n) : n && n.length && "string" !== T(n) && t(n);
            });
          }(arguments), i && !t && l()), this;
        },
        remove: function remove() {
          return E.each(arguments, function (e, t) {
            for (var i; (i = E.inArray(t, r, i)) > -1;) {
              r.splice(i, 1), i <= o && o--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? E.inArray(e, r) > -1 : r.length > 0;
        },
        empty: function empty() {
          return r && (r = []), this;
        },
        disable: function disable() {
          return s = a = [], r = i = "", this;
        },
        disabled: function disabled() {
          return !r;
        },
        lock: function lock() {
          return s = a = [], i || t || (r = i = ""), this;
        },
        locked: function locked() {
          return !!s;
        },
        fireWith: function fireWith(e, i) {
          return s || (i = [e, (i = i || []).slice ? i.slice() : i], a.push(i), t || l()), this;
        },
        fire: function fire() {
          return c.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!n;
        }
      };

      return c;
    }, E.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", E.Callbacks("memory"), E.Callbacks("memory"), 2], ["resolve", "done", E.Callbacks("once memory"), E.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", E.Callbacks("once memory"), E.Callbacks("once memory"), 1, "rejected"]],
            n = "pending",
            s = {
          state: function state() {
            return n;
          },
          always: function always() {
            return r.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return s.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return E.Deferred(function (i) {
              E.each(t, function (t, n) {
                var s = y(e[n[4]]) && e[n[4]];
                r[n[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, n, s) {
            var r = 0;

            function a(e, t, n, s) {
              return function () {
                var o = this,
                    l = arguments,
                    c = function c() {
                  var i, c;

                  if (!(e < r)) {
                    if ((i = n.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    c = i && ("object" == _typeof(i) || "function" == typeof i) && i.then, y(c) ? s ? c.call(i, a(r, t, H, s), a(r, t, q, s)) : (r++, c.call(i, a(r, t, H, s), a(r, t, q, s), a(r, t, H, t.notifyWith))) : (n !== H && (o = void 0, l = [i]), (s || t.resolveWith)(o, l));
                  }
                },
                    d = s ? c : function () {
                  try {
                    c();
                  } catch (i) {
                    E.Deferred.exceptionHook && E.Deferred.exceptionHook(i, d.stackTrace), e + 1 >= r && (n !== q && (o = void 0, l = [i]), t.rejectWith(o, l));
                  }
                };

                e ? d() : (E.Deferred.getStackHook && (d.stackTrace = E.Deferred.getStackHook()), i.setTimeout(d));
              };
            }

            return E.Deferred(function (i) {
              t[0][3].add(a(0, i, y(s) ? s : H, i.notifyWith)), t[1][3].add(a(0, i, y(e) ? e : H)), t[2][3].add(a(0, i, y(n) ? n : q));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? E.extend(e, s) : s;
          }
        },
            r = {};
        return E.each(t, function (e, i) {
          var a = i[2],
              o = i[5];
          s[i[1]] = a.add, o && a.add(function () {
            n = o;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), a.add(i[3].fire), r[i[0]] = function () {
            return r[i[0] + "With"](this === r ? void 0 : this, arguments), this;
          }, r[i[0] + "With"] = a.fireWith;
        }), s.promise(r), e && e.call(r, r), r;
      },
      when: function when(e) {
        var t = arguments.length,
            i = t,
            n = Array(i),
            s = l.call(arguments),
            r = E.Deferred(),
            a = function a(e) {
          return function (i) {
            n[e] = this, s[e] = arguments.length > 1 ? l.call(arguments) : i, --t || r.resolveWith(n, s);
          };
        };

        if (t <= 1 && (R(e, r.done(a(i)).resolve, r.reject, !t), "pending" === r.state() || y(s[i] && s[i].then))) return r.then();

        for (; i--;) {
          R(s[i], a(i), r.reject);
        }

        return r.promise();
      }
    });
    var B = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    E.Deferred.exceptionHook = function (e, t) {
      i.console && i.console.warn && e && B.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, E.readyException = function (e) {
      i.setTimeout(function () {
        throw e;
      });
    };
    var F = E.Deferred();

    function W() {
      a.removeEventListener("DOMContentLoaded", W), i.removeEventListener("load", W), E.ready();
    }

    E.fn.ready = function (e) {
      return F.then(e)["catch"](function (e) {
        E.readyException(e);
      }), this;
    }, E.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --E.readyWait : E.isReady) || (E.isReady = !0, !0 !== e && --E.readyWait > 0 || F.resolveWith(a, [E]));
      }
    }), E.ready.then = F.then, "complete" === a.readyState || "loading" !== a.readyState && !a.documentElement.doScroll ? i.setTimeout(E.ready) : (a.addEventListener("DOMContentLoaded", W), i.addEventListener("load", W));

    var X = function X(e, t, i, n, s, r, a) {
      var o = 0,
          l = e.length,
          c = null == i;
      if ("object" === T(i)) for (o in s = !0, i) {
        X(e, t, o, i[o], !0, r, a);
      } else if (void 0 !== n && (s = !0, y(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function t(e, _t2, i) {
        return c.call(E(e), i);
      })), t)) for (; o < l; o++) {
        t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
      }
      return s ? e : c ? t.call(e) : l ? t(e[0], i) : r;
    },
        G = /^-ms-/,
        Y = /-([a-z])/g;

    function V(e, t) {
      return t.toUpperCase();
    }

    function U(e) {
      return e.replace(G, "ms-").replace(Y, V);
    }

    var J = function J(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function K() {
      this.expando = E.expando + K.uid++;
    }

    K.uid = 1, K.prototype = {
      cache: function cache(e) {
        var t = e[this.expando];
        return t || (t = {}, J(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
          value: t,
          configurable: !0
        }))), t;
      },
      set: function set(e, t, i) {
        var n,
            s = this.cache(e);
        if ("string" == typeof t) s[U(t)] = i;else for (n in t) {
          s[U(n)] = t[n];
        }
        return s;
      },
      get: function get(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][U(t)];
      },
      access: function access(e, t, i) {
        return void 0 === t || t && "string" == typeof t && void 0 === i ? this.get(e, t) : (this.set(e, t, i), void 0 !== i ? i : t);
      },
      remove: function remove(e, t) {
        var i,
            n = e[this.expando];

        if (void 0 !== n) {
          if (void 0 !== t) {
            i = (t = Array.isArray(t) ? t.map(U) : (t = U(t)) in n ? [t] : t.match(j) || []).length;

            for (; i--;) {
              delete n[t[i]];
            }
          }

          (void 0 === t || E.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !E.isEmptyObject(t);
      }
    };
    var Q = new K(),
        Z = new K(),
        ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        te = /[A-Z]/g;

    function ie(e, t, i) {
      var n;
      if (void 0 === i && 1 === e.nodeType) if (n = "data-" + t.replace(te, "-$&").toLowerCase(), "string" == typeof (i = e.getAttribute(n))) {
        try {
          i = function (e) {
            return "true" === e || "false" !== e && ("null" === e ? null : e === +e + "" ? +e : ee.test(e) ? JSON.parse(e) : e);
          }(i);
        } catch (e) {}

        Z.set(e, t, i);
      } else i = void 0;
      return i;
    }

    E.extend({
      hasData: function hasData(e) {
        return Z.hasData(e) || Q.hasData(e);
      },
      data: function data(e, t, i) {
        return Z.access(e, t, i);
      },
      removeData: function removeData(e, t) {
        Z.remove(e, t);
      },
      _data: function _data(e, t, i) {
        return Q.access(e, t, i);
      },
      _removeData: function _removeData(e, t) {
        Q.remove(e, t);
      }
    }), E.fn.extend({
      data: function data(e, t) {
        var i,
            n,
            s,
            r = this[0],
            a = r && r.attributes;

        if (void 0 === e) {
          if (this.length && (s = Z.get(r), 1 === r.nodeType && !Q.get(r, "hasDataAttrs"))) {
            for (i = a.length; i--;) {
              a[i] && 0 === (n = a[i].name).indexOf("data-") && (n = U(n.slice(5)), ie(r, n, s[n]));
            }

            Q.set(r, "hasDataAttrs", !0);
          }

          return s;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Z.set(this, e);
        }) : X(this, function (t) {
          var i;
          if (r && void 0 === t) return void 0 !== (i = Z.get(r, e)) ? i : void 0 !== (i = ie(r, e)) ? i : void 0;
          this.each(function () {
            Z.set(this, e, t);
          });
        }, null, t, arguments.length > 1, null, !0);
      },
      removeData: function removeData(e) {
        return this.each(function () {
          Z.remove(this, e);
        });
      }
    }), E.extend({
      queue: function queue(e, t, i) {
        var n;
        if (e) return t = (t || "fx") + "queue", n = Q.get(e, t), i && (!n || Array.isArray(i) ? n = Q.access(e, t, E.makeArray(i)) : n.push(i)), n || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var i = E.queue(e, t),
            n = i.length,
            s = i.shift(),
            r = E._queueHooks(e, t);

        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, function () {
          E.dequeue(e, t);
        }, r)), !n && r && r.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var i = t + "queueHooks";
        return Q.get(e, i) || Q.access(e, i, {
          empty: E.Callbacks("once memory").add(function () {
            Q.remove(e, [t + "queue", i]);
          })
        });
      }
    }), E.fn.extend({
      queue: function queue(e, t) {
        var i = 2;
        return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? E.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var i = E.queue(this, e, t);
          E._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && E.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          E.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var i,
            n = 1,
            s = E.Deferred(),
            r = this,
            a = this.length,
            o = function o() {
          --n || s.resolveWith(r, [r]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
          (i = Q.get(r[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
        }

        return o(), s.promise(t);
      }
    });

    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        se = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        re = ["Top", "Right", "Bottom", "Left"],
        ae = a.documentElement,
        oe = function oe(e) {
      return E.contains(e.ownerDocument, e);
    },
        le = {
      composed: !0
    };

    ae.getRootNode && (oe = function oe(e) {
      return E.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
    });

    var ce = function ce(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === E.css(e, "display");
    },
        de = function de(e, t, i, n) {
      var s,
          r,
          a = {};

      for (r in t) {
        a[r] = e.style[r], e.style[r] = t[r];
      }

      for (r in s = i.apply(e, n || []), t) {
        e.style[r] = a[r];
      }

      return s;
    };

    function ue(e, t, i, n) {
      var s,
          r,
          a = 20,
          o = n ? function () {
        return n.cur();
      } : function () {
        return E.css(e, t, "");
      },
          l = o(),
          c = i && i[3] || (E.cssNumber[t] ? "" : "px"),
          d = e.nodeType && (E.cssNumber[t] || "px" !== c && +l) && se.exec(E.css(e, t));

      if (d && d[3] !== c) {
        for (l /= 2, c = c || d[3], d = +l || 1; a--;) {
          E.style(e, t, d + c), (1 - r) * (1 - (r = o() / l || .5)) <= 0 && (a = 0), d /= r;
        }

        d *= 2, E.style(e, t, d + c), i = i || [];
      }

      return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = s)), s;
    }

    var pe = {};

    function he(e) {
      var t,
          i = e.ownerDocument,
          n = e.nodeName,
          s = pe[n];
      return s || (t = i.body.appendChild(i.createElement(n)), s = E.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), pe[n] = s, s);
    }

    function fe(e, t) {
      for (var i, n, s = [], r = 0, a = e.length; r < a; r++) {
        (n = e[r]).style && (i = n.style.display, t ? ("none" === i && (s[r] = Q.get(n, "display") || null, s[r] || (n.style.display = "")), "" === n.style.display && ce(n) && (s[r] = he(n))) : "none" !== i && (s[r] = "none", Q.set(n, "display", i)));
      }

      for (r = 0; r < a; r++) {
        null != s[r] && (e[r].style.display = s[r]);
      }

      return e;
    }

    E.fn.extend({
      show: function show() {
        return fe(this, !0);
      },
      hide: function hide() {
        return fe(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          ce(this) ? E(this).show() : E(this).hide();
        });
      }
    });
    var me = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        ge = /^$|^module$|\/(?:java|ecma)script/i,
        ye = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

    function be(e, t) {
      var i;
      return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && A(e, t) ? E.merge([e], i) : i;
    }

    function we(e, t) {
      for (var i = 0, n = e.length; i < n; i++) {
        Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"));
      }
    }

    ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
    var xe,
        Te,
        Ee = /<|&#?\w+;/;

    function Ce(e, t, i, n, s) {
      for (var r, a, o, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) {
        if ((r = e[h]) || 0 === r) if ("object" === T(r)) E.merge(p, r.nodeType ? [r] : r);else if (Ee.test(r)) {
          for (a = a || u.appendChild(t.createElement("div")), o = (ve.exec(r) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, a.innerHTML = l[1] + E.htmlPrefilter(r) + l[2], d = l[0]; d--;) {
            a = a.lastChild;
          }

          E.merge(p, a.childNodes), (a = u.firstChild).textContent = "";
        } else p.push(t.createTextNode(r));
      }

      for (u.textContent = "", h = 0; r = p[h++];) {
        if (n && E.inArray(r, n) > -1) s && s.push(r);else if (c = oe(r), a = be(u.appendChild(r), "script"), c && we(a), i) for (d = 0; r = a[d++];) {
          ge.test(r.type || "") && i.push(r);
        }
      }

      return u;
    }

    xe = a.createDocumentFragment().appendChild(a.createElement("div")), (Te = a.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), xe.appendChild(Te), g.checkClone = xe.cloneNode(!0).cloneNode(!0).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!xe.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        $e = /^([^.]*)(?:\.(.+)|)/;

    function Me() {
      return !0;
    }

    function Pe() {
      return !1;
    }

    function Ae(e, t) {
      return e === function () {
        try {
          return a.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function ze(e, t, i, n, s, r) {
      var a, o;

      if ("object" == _typeof(t)) {
        for (o in "string" != typeof i && (n = n || i, i = void 0), t) {
          ze(e, o, i, n, t[o], r);
        }

        return e;
      }

      if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Pe;else if (!s) return e;
      return 1 === r && (a = s, (s = function s(e) {
        return E().off(e), a.apply(this, arguments);
      }).guid = a.guid || (a.guid = E.guid++)), e.each(function () {
        E.event.add(this, t, s, n, i);
      });
    }

    function Le(e, t, i) {
      i ? (Q.set(e, t, !1), E.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var n,
              s,
              r = Q.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (r.length) (E.event.special[t] || {}).delegateType && e.stopPropagation();else if (r = l.call(arguments), Q.set(this, t, r), n = i(this, t), this[t](), r !== (s = Q.get(this, t)) || n ? Q.set(this, t, !1) : s = {}, r !== s) return e.stopImmediatePropagation(), e.preventDefault(), s.value;
          } else r.length && (Q.set(this, t, {
            value: E.event.trigger(E.extend(r[0], E.Event.prototype), r.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === Q.get(e, t) && E.event.add(e, t, Me);
    }

    E.event = {
      global: {},
      add: function add(e, t, i, n, s) {
        var r,
            a,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            f,
            m,
            v = Q.get(e);
        if (v) for (i.handler && (i = (r = i).handler, s = r.selector), s && E.find.matchesSelector(ae, s), i.guid || (i.guid = E.guid++), (l = v.events) || (l = v.events = {}), (a = v.handle) || (a = v.handle = function (t) {
          return void 0 !== E && E.event.triggered !== t.type ? E.event.dispatch.apply(e, arguments) : void 0;
        }), c = (t = (t || "").match(j) || [""]).length; c--;) {
          h = m = (o = $e.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), h && (u = E.event.special[h] || {}, h = (s ? u.delegateType : u.bindType) || h, u = E.event.special[h] || {}, d = E.extend({
            type: h,
            origType: m,
            data: n,
            handler: i,
            guid: i.guid,
            selector: s,
            needsContext: s && E.expr.match.needsContext.test(s),
            namespace: f.join(".")
          }, r), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, a) || e.addEventListener && e.addEventListener(h, a)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), E.event.global[h] = !0);
        }
      },
      remove: function remove(e, t, i, n, s) {
        var r,
            a,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            f,
            m,
            v = Q.hasData(e) && Q.get(e);

        if (v && (l = v.events)) {
          for (c = (t = (t || "").match(j) || [""]).length; c--;) {
            if (h = m = (o = $e.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), h) {
              for (u = E.event.special[h] || {}, p = l[h = (n ? u.delegateType : u.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = r = p.length; r--;) {
                d = p[r], !s && m !== d.origType || i && i.guid !== d.guid || o && !o.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(r, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
              }

              a && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || E.removeEvent(e, h, v.handle), delete l[h]);
            } else for (h in l) {
              E.event.remove(e, h + t[c], i, n, !0);
            }
          }

          E.isEmptyObject(l) && Q.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            i,
            n,
            s,
            r,
            a,
            o = E.event.fix(e),
            l = new Array(arguments.length),
            c = (Q.get(this, "events") || {})[o.type] || [],
            d = E.event.special[o.type] || {};

        for (l[0] = o, t = 1; t < arguments.length; t++) {
          l[t] = arguments[t];
        }

        if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
          for (a = E.event.handlers.call(this, o, c), t = 0; (s = a[t++]) && !o.isPropagationStopped();) {
            for (o.currentTarget = s.elem, i = 0; (r = s.handlers[i++]) && !o.isImmediatePropagationStopped();) {
              o.rnamespace && !1 !== r.namespace && !o.rnamespace.test(r.namespace) || (o.handleObj = r, o.data = r.data, void 0 !== (n = ((E.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
            }
          }

          return d.postDispatch && d.postDispatch.call(this, o), o.result;
        }
      },
      handlers: function handlers(e, t) {
        var i,
            n,
            s,
            r,
            a,
            o = [],
            l = t.delegateCount,
            c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (r = [], a = {}, i = 0; i < l; i++) {
              void 0 === a[s = (n = t[i]).selector + " "] && (a[s] = n.needsContext ? E(s, this).index(c) > -1 : E.find(s, this, null, [c]).length), a[s] && r.push(n);
            }

            r.length && o.push({
              elem: c,
              handlers: r
            });
          }
        }
        return c = this, l < t.length && o.push({
          elem: c,
          handlers: t.slice(l)
        }), o;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(E.Event.prototype, e, {
          enumerable: !0,
          configurable: !0,
          get: y(t) ? function () {
            if (this.originalEvent) return t(this.originalEvent);
          } : function () {
            if (this.originalEvent) return this.originalEvent[e];
          },
          set: function set(t) {
            Object.defineProperty(this, e, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t
            });
          }
        });
      },
      fix: function fix(e) {
        return e[E.expando] ? e : new E.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return me.test(t.type) && t.click && A(t, "input") && Le(t, "click", Me), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return me.test(t.type) && t.click && A(t, "input") && Le(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return me.test(t.type) && t.click && A(t, "input") && Q.get(t, "click") || A(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, E.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i);
    }, E.Event = function (e, t) {
      if (!(this instanceof E.Event)) return new E.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Me : Pe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && E.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[E.expando] = !0;
    }, E.Event.prototype = {
      constructor: E.Event,
      isDefaultPrevented: Pe,
      isPropagationStopped: Pe,
      isImmediatePropagationStopped: Pe,
      isSimulated: !1,
      preventDefault: function preventDefault() {
        var e = this.originalEvent;
        this.isDefaultPrevented = Me, e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function stopPropagation() {
        var e = this.originalEvent;
        this.isPropagationStopped = Me, e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function stopImmediatePropagation() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = Me, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
      }
    }, E.each({
      altKey: !0,
      bubbles: !0,
      cancelable: !0,
      changedTouches: !0,
      ctrlKey: !0,
      detail: !0,
      eventPhase: !0,
      metaKey: !0,
      pageX: !0,
      pageY: !0,
      shiftKey: !0,
      view: !0,
      "char": !0,
      code: !0,
      charCode: !0,
      key: !0,
      keyCode: !0,
      button: !0,
      buttons: !0,
      clientX: !0,
      clientY: !0,
      offsetX: !0,
      offsetY: !0,
      pointerId: !0,
      pointerType: !0,
      screenX: !0,
      screenY: !0,
      targetTouches: !0,
      toElement: !0,
      touches: !0,
      which: function which(e) {
        var t = e.button;
        return null == e.which && Se.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ke.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which;
      }
    }, E.event.addProp), E.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      E.event.special[e] = {
        setup: function setup() {
          return Le(this, e, Ae), !1;
        },
        trigger: function trigger() {
          return Le(this, e), !0;
        },
        delegateType: t
      };
    }), E.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      E.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var i,
              n = this,
              s = e.relatedTarget,
              r = e.handleObj;
          return s && (s === n || E.contains(n, s)) || (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i;
        }
      };
    }), E.fn.extend({
      on: function on(e, t, i, n) {
        return ze(this, e, t, i, n);
      },
      one: function one(e, t, i, n) {
        return ze(this, e, t, i, n, 1);
      },
      off: function off(e, t, i) {
        var n, s;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, E(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;

        if ("object" == _typeof(e)) {
          for (s in e) {
            this.off(s, t, e[s]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Pe), this.each(function () {
          E.event.remove(this, e, i, t);
        });
      }
    });
    var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        _e = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Ne(e, t) {
      return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && E(e).children("tbody")[0] || e;
    }

    function je(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function He(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function qe(e, t) {
      var i, n, s, r, a, o, l, c;

      if (1 === t.nodeType) {
        if (Q.hasData(e) && (r = Q.access(e), a = Q.set(t, r), c = r.events)) for (s in delete a.handle, a.events = {}, c) {
          for (i = 0, n = c[s].length; i < n; i++) {
            E.event.add(t, s, c[s][i]);
          }
        }
        Z.hasData(e) && (o = Z.access(e), l = E.extend({}, o), Z.set(t, l));
      }
    }

    function Re(e, t) {
      var i = t.nodeName.toLowerCase();
      "input" === i && me.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue);
    }

    function Be(e, t, i, n) {
      t = c.apply([], t);
      var s,
          r,
          a,
          o,
          l,
          d,
          u = 0,
          p = e.length,
          h = p - 1,
          f = t[0],
          m = y(f);
      if (m || p > 1 && "string" == typeof f && !g.checkClone && Oe.test(f)) return e.each(function (s) {
        var r = e.eq(s);
        m && (t[0] = f.call(this, s, r.html())), Be(r, t, i, n);
      });

      if (p && (r = (s = Ce(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = r), r || n)) {
        for (o = (a = E.map(be(s, "script"), je)).length; u < p; u++) {
          l = s, u !== h && (l = E.clone(l, !0, !0), o && E.merge(a, be(l, "script"))), i.call(e[u], l, u);
        }

        if (o) for (d = a[a.length - 1].ownerDocument, E.map(a, He), u = 0; u < o; u++) {
          l = a[u], ge.test(l.type || "") && !Q.access(l, "globalEval") && E.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? E._evalUrl && !l.noModule && E._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : x(l.textContent.replace(_e, ""), l, d));
        }
      }

      return e;
    }

    function Fe(e, t, i) {
      for (var n, s = t ? E.filter(t, e) : e, r = 0; null != (n = s[r]); r++) {
        i || 1 !== n.nodeType || E.cleanData(be(n)), n.parentNode && (i && oe(n) && we(be(n, "script")), n.parentNode.removeChild(n));
      }

      return e;
    }

    E.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(De, "<$1></$2>");
      },
      clone: function clone(e, t, i) {
        var n,
            s,
            r,
            a,
            o = e.cloneNode(!0),
            l = oe(e);
        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || E.isXMLDoc(e))) for (a = be(o), n = 0, s = (r = be(e)).length; n < s; n++) {
          Re(r[n], a[n]);
        }
        if (t) if (i) for (r = r || be(e), a = a || be(o), n = 0, s = r.length; n < s; n++) {
          qe(r[n], a[n]);
        } else qe(e, o);
        return (a = be(o, "script")).length > 0 && we(a, !l && be(e, "script")), o;
      },
      cleanData: function cleanData(e) {
        for (var t, i, n, s = E.event.special, r = 0; void 0 !== (i = e[r]); r++) {
          if (J(i)) {
            if (t = i[Q.expando]) {
              if (t.events) for (n in t.events) {
                s[n] ? E.event.remove(i, n) : E.removeEvent(i, n, t.handle);
              }
              i[Q.expando] = void 0;
            }

            i[Z.expando] && (i[Z.expando] = void 0);
          }
        }
      }
    }), E.fn.extend({
      detach: function detach(e) {
        return Fe(this, e, !0);
      },
      remove: function remove(e) {
        return Fe(this, e);
      },
      text: function text(e) {
        return X(this, function (e) {
          return void 0 === e ? E.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return Be(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Ne(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return Be(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = Ne(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return Be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return Be(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (E.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return E.clone(this, e, t);
        });
      },
      html: function html(e) {
        return X(this, function (e) {
          var t = this[0] || {},
              i = 0,
              n = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Ie.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = E.htmlPrefilter(e);

            try {
              for (; i < n; i++) {
                1 === (t = this[i] || {}).nodeType && (E.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return Be(this, arguments, function (t) {
          var i = this.parentNode;
          E.inArray(this, e) < 0 && (E.cleanData(be(this)), i && i.replaceChild(t, this));
        }, e);
      }
    }), E.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      E.fn[e] = function (e) {
        for (var i, n = [], s = E(e), r = s.length - 1, a = 0; a <= r; a++) {
          i = a === r ? this : this.clone(!0), E(s[a])[t](i), d.apply(n, i.get());
        }

        return this.pushStack(n);
      };
    });

    var We = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Xe = function Xe(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = i), t.getComputedStyle(e);
    },
        Ge = new RegExp(re.join("|"), "i");

    function Ye(e, t, i) {
      var n,
          s,
          r,
          a,
          o = e.style;
      return (i = i || Xe(e)) && ("" !== (a = i.getPropertyValue(t) || i[t]) || oe(e) || (a = E.style(e, t)), !g.pixelBoxStyles() && We.test(a) && Ge.test(t) && (n = o.width, s = o.minWidth, r = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = s, o.maxWidth = r)), void 0 !== a ? a + "" : a;
    }

    function Ve(e, t) {
      return {
        get: function get() {
          if (!e()) return (this.get = t).apply(this, arguments);
          delete this.get;
        }
      };
    }

    !function () {
      function e() {
        if (d) {
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ae.appendChild(c).appendChild(d);
          var e = i.getComputedStyle(d);
          n = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", o = 36 === t(e.right), s = 36 === t(e.width), d.style.position = "absolute", r = 12 === t(d.offsetWidth / 3), ae.removeChild(c), d = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var n,
          s,
          r,
          o,
          l,
          c = a.createElement("div"),
          d = a.createElement("div");
      d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === d.style.backgroundClip, E.extend(g, {
        boxSizingReliable: function boxSizingReliable() {
          return e(), s;
        },
        pixelBoxStyles: function pixelBoxStyles() {
          return e(), o;
        },
        pixelPosition: function pixelPosition() {
          return e(), n;
        },
        reliableMarginLeft: function reliableMarginLeft() {
          return e(), l;
        },
        scrollboxSize: function scrollboxSize() {
          return e(), r;
        }
      }));
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Je = a.createElement("div").style,
        Ke = {};

    function Qe(e) {
      var t = E.cssProps[e] || Ke[e];
      return t || (e in Je ? e : Ke[e] = function (e) {
        for (var t = e[0].toUpperCase() + e.slice(1), i = Ue.length; i--;) {
          if ((e = Ue[i] + t) in Je) return e;
        }
      }(e) || e);
    }

    var Ze = /^(none|table(?!-c[ea]).+)/,
        et = /^--/,
        tt = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
        it = {
      letterSpacing: "0",
      fontWeight: "400"
    };

    function nt(e, t, i) {
      var n = se.exec(t);
      return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t;
    }

    function st(e, t, i, n, s, r) {
      var a = "width" === t ? 1 : 0,
          o = 0,
          l = 0;
      if (i === (n ? "border" : "content")) return 0;

      for (; a < 4; a += 2) {
        "margin" === i && (l += E.css(e, i + re[a], !0, s)), n ? ("content" === i && (l -= E.css(e, "padding" + re[a], !0, s)), "margin" !== i && (l -= E.css(e, "border" + re[a] + "Width", !0, s))) : (l += E.css(e, "padding" + re[a], !0, s), "padding" !== i ? l += E.css(e, "border" + re[a] + "Width", !0, s) : o += E.css(e, "border" + re[a] + "Width", !0, s));
      }

      return !n && r >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - r - l - o - .5)) || 0), l;
    }

    function rt(e, t, i) {
      var n = Xe(e),
          s = (!g.boxSizingReliable() || i) && "border-box" === E.css(e, "boxSizing", !1, n),
          r = s,
          a = Ye(e, t, n),
          o = "offset" + t[0].toUpperCase() + t.slice(1);

      if (We.test(a)) {
        if (!i) return a;
        a = "auto";
      }

      return (!g.boxSizingReliable() && s || "auto" === a || !parseFloat(a) && "inline" === E.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === E.css(e, "boxSizing", !1, n), (r = o in e) && (a = e[o])), (a = parseFloat(a) || 0) + st(e, t, i || (s ? "border" : "content"), r, n, a) + "px";
    }

    function at(e, t, i, n, s) {
      return new at.prototype.init(e, t, i, n, s);
    }

    E.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var i = Ye(e, "opacity");
              return "" === i ? "1" : i;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        gridArea: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnStart: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowStart: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
      },
      cssProps: {},
      style: function style(e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
          var s,
              r,
              a,
              o = U(t),
              l = et.test(t),
              c = e.style;
          if (l || (t = Qe(o)), a = E.cssHooks[t] || E.cssHooks[o], void 0 === i) return a && "get" in a && void 0 !== (s = a.get(e, !1, n)) ? s : c[t];
          "string" === (r = _typeof(i)) && (s = se.exec(i)) && s[1] && (i = ue(e, t, s), r = "number"), null != i && i == i && ("number" !== r || l || (i += s && s[3] || (E.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i));
        }
      },
      css: function css(e, t, i, n) {
        var s,
            r,
            a,
            o = U(t);
        return et.test(t) || (t = Qe(o)), (a = E.cssHooks[t] || E.cssHooks[o]) && "get" in a && (s = a.get(e, !0, i)), void 0 === s && (s = Ye(e, t, n)), "normal" === s && t in it && (s = it[t]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s;
      }
    }), E.each(["height", "width"], function (e, t) {
      E.cssHooks[t] = {
        get: function get(e, i, n) {
          if (i) return !Ze.test(E.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? rt(e, t, n) : de(e, tt, function () {
            return rt(e, t, n);
          });
        },
        set: function set(e, i, n) {
          var s,
              r = Xe(e),
              a = !g.scrollboxSize() && "absolute" === r.position,
              o = (a || n) && "border-box" === E.css(e, "boxSizing", !1, r),
              l = n ? st(e, t, n, o, r) : 0;
          return o && a && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(r[t]) - st(e, t, "border", !1, r) - .5)), l && (s = se.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = E.css(e, t)), nt(0, i, l);
        }
      };
    }), E.cssHooks.marginLeft = Ve(g.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Ye(e, "marginLeft")) || e.getBoundingClientRect().left - de(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), E.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      E.cssHooks[e + t] = {
        expand: function expand(i) {
          for (var n = 0, s = {}, r = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) {
            s[e + re[n] + t] = r[n] || r[n - 2] || r[0];
          }

          return s;
        }
      }, "margin" !== e && (E.cssHooks[e + t].set = nt);
    }), E.fn.extend({
      css: function css(e, t) {
        return X(this, function (e, t, i) {
          var n,
              s,
              r = {},
              a = 0;

          if (Array.isArray(t)) {
            for (n = Xe(e), s = t.length; a < s; a++) {
              r[t[a]] = E.css(e, t[a], !1, n);
            }

            return r;
          }

          return void 0 !== i ? E.style(e, t, i) : E.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), E.Tween = at, at.prototype = {
      constructor: at,
      init: function init(e, t, i, n, s, r) {
        this.elem = e, this.prop = i, this.easing = s || E.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (E.cssNumber[i] ? "" : "px");
      },
      cur: function cur() {
        var e = at.propHooks[this.prop];
        return e && e.get ? e.get(this) : at.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            i = at.propHooks[this.prop];
        return this.options.duration ? this.pos = t = E.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : at.propHooks._default.set(this), this;
      }
    }, at.prototype.init.prototype = at.prototype, at.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = E.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          E.fx.step[e.prop] ? E.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !E.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : E.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, at.propHooks.scrollTop = at.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, E.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, E.fx = at.prototype.init, E.fx.step = {};
    var ot,
        lt,
        ct = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;

    function ut() {
      lt && (!1 === a.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, E.fx.interval), E.fx.tick());
    }

    function pt() {
      return i.setTimeout(function () {
        ot = void 0;
      }), ot = Date.now();
    }

    function ht(e, t) {
      var i,
          n = 0,
          s = {
        height: e
      };

      for (t = t ? 1 : 0; n < 4; n += 2 - t) {
        s["margin" + (i = re[n])] = s["padding" + i] = e;
      }

      return t && (s.opacity = s.width = e), s;
    }

    function ft(e, t, i) {
      for (var n, s = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), r = 0, a = s.length; r < a; r++) {
        if (n = s[r].call(i, t, e)) return n;
      }
    }

    function mt(e, t, i) {
      var n,
          s,
          r = 0,
          a = mt.prefilters.length,
          o = E.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (s) return !1;

        for (var t = ot || pt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), r = 0, a = c.tweens.length; r < a; r++) {
          c.tweens[r].run(n);
        }

        return o.notifyWith(e, [c, n, i]), n < 1 && a ? i : (a || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1);
      },
          c = o.promise({
        elem: e,
        props: E.extend({}, t),
        opts: E.extend(!0, {
          specialEasing: {},
          easing: E.easing._default
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: ot || pt(),
        duration: i.duration,
        tweens: [],
        createTween: function createTween(t, i) {
          var n = E.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(n), n;
        },
        stop: function stop(t) {
          var i = 0,
              n = t ? c.tweens.length : 0;
          if (s) return this;

          for (s = !0; i < n; i++) {
            c.tweens[i].run(1);
          }

          return t ? (o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c, t])) : o.rejectWith(e, [c, t]), this;
        }
      }),
          d = c.props;

      for (!function (e, t) {
        var i, n, s, r, a;

        for (i in e) {
          if (s = t[n = U(i)], r = e[i], Array.isArray(r) && (s = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (a = E.cssHooks[n]) && ("expand" in a)) for (i in r = a.expand(r), delete e[n], r) {
            (i in e) || (e[i] = r[i], t[i] = s);
          } else t[n] = s;
        }
      }(d, c.opts.specialEasing); r < a; r++) {
        if (n = mt.prefilters[r].call(c, e, d, c.opts)) return y(n.stop) && (E._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
      }

      return E.map(d, ft, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), E.fx.timer(E.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c;
    }

    E.Animation = E.extend(mt, {
      tweeners: {
        "*": [function (e, t) {
          var i = this.createTween(e, t);
          return ue(i.elem, e, se.exec(t), i), i;
        }]
      },
      tweener: function tweener(e, t) {
        y(e) ? (t = e, e = ["*"]) : e = e.match(j);

        for (var i, n = 0, s = e.length; n < s; n++) {
          i = e[n], mt.tweeners[i] = mt.tweeners[i] || [], mt.tweeners[i].unshift(t);
        }
      },
      prefilters: [function (e, t, i) {
        var n,
            s,
            r,
            a,
            o,
            l,
            c,
            d,
            u = "width" in t || "height" in t,
            p = this,
            h = {},
            f = e.style,
            m = e.nodeType && ce(e),
            v = Q.get(e, "fxshow");

        for (n in i.queue || (null == (a = E._queueHooks(e, "fx")).unqueued && (a.unqueued = 0, o = a.empty.fire, a.empty.fire = function () {
          a.unqueued || o();
        }), a.unqueued++, p.always(function () {
          p.always(function () {
            a.unqueued--, E.queue(e, "fx").length || a.empty.fire();
          });
        })), t) {
          if (s = t[n], ct.test(s)) {
            if (delete t[n], r = r || "toggle" === s, s === (m ? "hide" : "show")) {
              if ("show" !== s || !v || void 0 === v[n]) continue;
              m = !0;
            }

            h[n] = v && v[n] || E.style(e, n);
          }
        }

        if ((l = !E.isEmptyObject(t)) || !E.isEmptyObject(h)) for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = Q.get(e, "display")), "none" === (d = E.css(e, "display")) && (c ? d = c : (fe([e], !0), c = e.style.display || c, d = E.css(e, "display"), fe([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === E.css(e, "float") && (l || (p.done(function () {
          f.display = c;
        }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always(function () {
          f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2];
        })), l = !1, h) {
          l || (v ? "hidden" in v && (m = v.hidden) : v = Q.access(e, "fxshow", {
            display: c
          }), r && (v.hidden = !m), m && fe([e], !0), p.done(function () {
            for (n in m || fe([e]), Q.remove(e, "fxshow"), h) {
              E.style(e, n, h[n]);
            }
          })), l = ft(m ? v[n] : 0, n, p), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
      }
    }), E.speed = function (e, t, i) {
      var n = e && "object" == _typeof(e) ? E.extend({}, e) : {
        complete: i || !i && t || y(e) && e,
        duration: e,
        easing: i && t || t && !y(t) && t
      };
      return E.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in E.fx.speeds ? n.duration = E.fx.speeds[n.duration] : n.duration = E.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
        y(n.old) && n.old.call(this), n.queue && E.dequeue(this, n.queue);
      }, n;
    }, E.fn.extend({
      fadeTo: function fadeTo(e, t, i, n) {
        return this.filter(ce).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n);
      },
      animate: function animate(e, t, i, n) {
        var s = E.isEmptyObject(e),
            r = E.speed(t, i, n),
            a = function a() {
          var t = mt(this, E.extend({}, e), r);
          (s || Q.get(this, "finish")) && t.stop(!0);
        };

        return a.finish = a, s || !1 === r.queue ? this.each(a) : this.queue(r.queue, a);
      },
      stop: function stop(e, t, i) {
        var n = function n(e) {
          var t = e.stop;
          delete e.stop, t(i);
        };

        return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              s = null != e && e + "queueHooks",
              r = E.timers,
              a = Q.get(this);
          if (s) a[s] && a[s].stop && n(a[s]);else for (s in a) {
            a[s] && a[s].stop && dt.test(s) && n(a[s]);
          }

          for (s = r.length; s--;) {
            r[s].elem !== this || null != e && r[s].queue !== e || (r[s].anim.stop(i), t = !1, r.splice(s, 1));
          }

          !t && i || E.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              i = Q.get(this),
              n = i[e + "queue"],
              s = i[e + "queueHooks"],
              r = E.timers,
              a = n ? n.length : 0;

          for (i.finish = !0, E.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = r.length; t--;) {
            r[t].elem === this && r[t].queue === e && (r[t].anim.stop(!0), r.splice(t, 1));
          }

          for (t = 0; t < a; t++) {
            n[t] && n[t].finish && n[t].finish.call(this);
          }

          delete i.finish;
        });
      }
    }), E.each(["toggle", "show", "hide"], function (e, t) {
      var i = E.fn[t];

      E.fn[t] = function (e, n, s) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ht(t, !0), e, n, s);
      };
    }), E.each({
      slideDown: ht("show"),
      slideUp: ht("hide"),
      slideToggle: ht("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function (e, t) {
      E.fn[e] = function (e, i, n) {
        return this.animate(t, e, i, n);
      };
    }), E.timers = [], E.fx.tick = function () {
      var e,
          t = 0,
          i = E.timers;

      for (ot = Date.now(); t < i.length; t++) {
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      }

      i.length || E.fx.stop(), ot = void 0;
    }, E.fx.timer = function (e) {
      E.timers.push(e), E.fx.start();
    }, E.fx.interval = 13, E.fx.start = function () {
      lt || (lt = !0, ut());
    }, E.fx.stop = function () {
      lt = null;
    }, E.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, E.fn.delay = function (e, t) {
      return e = E.fx && E.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
        var s = i.setTimeout(t, e);

        n.stop = function () {
          i.clearTimeout(s);
        };
      });
    }, function () {
      var e = a.createElement("input"),
          t = a.createElement("select").appendChild(a.createElement("option"));
      e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = a.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
    }();
    var vt,
        gt = E.expr.attrHandle;
    E.fn.extend({
      attr: function attr(e, t) {
        return X(this, E.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          E.removeAttr(this, e);
        });
      }
    }), E.extend({
      attr: function attr(e, t, i) {
        var n,
            s,
            r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? E.prop(e, t, i) : (1 === r && E.isXMLDoc(e) || (s = E.attrHooks[t.toLowerCase()] || (E.expr.match.bool.test(t) ? vt : void 0)), void 0 !== i ? null === i ? void E.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = E.find.attr(e, t)) ? void 0 : n);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!g.radioValue && "radio" === t && A(e, "input")) {
              var i = e.value;
              return e.setAttribute("type", t), i && (e.value = i), t;
            }
          }
        }
      },
      removeAttr: function removeAttr(e, t) {
        var i,
            n = 0,
            s = t && t.match(j);
        if (s && 1 === e.nodeType) for (; i = s[n++];) {
          e.removeAttribute(i);
        }
      }
    }), vt = {
      set: function set(e, t, i) {
        return !1 === t ? E.removeAttr(e, i) : e.setAttribute(i, i), i;
      }
    }, E.each(E.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = gt[t] || E.find.attr;

      gt[t] = function (e, t, n) {
        var s,
            r,
            a = t.toLowerCase();
        return n || (r = gt[a], gt[a] = s, s = null != i(e, t, n) ? a : null, gt[a] = r), s;
      };
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;

    function wt(e) {
      return (e.match(j) || []).join(" ");
    }

    function xt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function Tt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || [];
    }

    E.fn.extend({
      prop: function prop(e, t) {
        return X(this, E.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[E.propFix[e] || e];
        });
      }
    }), E.extend({
      prop: function prop(e, t, i) {
        var n,
            s,
            r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && E.isXMLDoc(e) || (t = E.propFix[t] || t, s = E.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = E.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), g.optSelected || (E.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), E.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      E.propFix[this.toLowerCase()] = this;
    }), E.fn.extend({
      addClass: function addClass(e) {
        var t,
            i,
            n,
            s,
            r,
            a,
            o,
            l = 0;
        if (y(e)) return this.each(function (t) {
          E(this).addClass(e.call(this, t, xt(this)));
        });
        if ((t = Tt(e)).length) for (; i = this[l++];) {
          if (s = xt(i), n = 1 === i.nodeType && " " + wt(s) + " ") {
            for (a = 0; r = t[a++];) {
              n.indexOf(" " + r + " ") < 0 && (n += r + " ");
            }

            s !== (o = wt(n)) && i.setAttribute("class", o);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            i,
            n,
            s,
            r,
            a,
            o,
            l = 0;
        if (y(e)) return this.each(function (t) {
          E(this).removeClass(e.call(this, t, xt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = Tt(e)).length) for (; i = this[l++];) {
          if (s = xt(i), n = 1 === i.nodeType && " " + wt(s) + " ") {
            for (a = 0; r = t[a++];) {
              for (; n.indexOf(" " + r + " ") > -1;) {
                n = n.replace(" " + r + " ", " ");
              }
            }

            s !== (o = wt(n)) && i.setAttribute("class", o);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var i = _typeof(e),
            n = "string" === i || Array.isArray(e);

        return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (i) {
          E(this).toggleClass(e.call(this, i, xt(this), t), t);
        }) : this.each(function () {
          var t, s, r, a;
          if (n) for (s = 0, r = E(this), a = Tt(e); t = a[s++];) {
            r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
          } else void 0 !== e && "boolean" !== i || ((t = xt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            i,
            n = 0;

        for (t = " " + e + " "; i = this[n++];) {
          if (1 === i.nodeType && (" " + wt(xt(i)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var Et = /\r/g;
    E.fn.extend({
      val: function val(e) {
        var t,
            i,
            n,
            s = this[0];
        return arguments.length ? (n = y(e), this.each(function (i) {
          var s;
          1 === this.nodeType && (null == (s = n ? e.call(this, i, E(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = E.map(s, function (e) {
            return null == e ? "" : e + "";
          })), (t = E.valHooks[this.type] || E.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s));
        })) : s ? (t = E.valHooks[s.type] || E.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Et, "") : null == i ? "" : i : void 0;
      }
    }), E.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = E.find.attr(e, "value");
            return null != t ? t : wt(E.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                i,
                n,
                s = e.options,
                r = e.selectedIndex,
                a = "select-one" === e.type,
                o = a ? null : [],
                l = a ? r + 1 : s.length;

            for (n = r < 0 ? l : a ? r : 0; n < l; n++) {
              if (((i = s[n]).selected || n === r) && !i.disabled && (!i.parentNode.disabled || !A(i.parentNode, "optgroup"))) {
                if (t = E(i).val(), a) return t;
                o.push(t);
              }
            }

            return o;
          },
          set: function set(e, t) {
            for (var i, n, s = e.options, r = E.makeArray(t), a = s.length; a--;) {
              ((n = s[a]).selected = E.inArray(E.valHooks.option.get(n), r) > -1) && (i = !0);
            }

            return i || (e.selectedIndex = -1), r;
          }
        }
      }
    }), E.each(["radio", "checkbox"], function () {
      E.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = E.inArray(E(e).val(), t) > -1;
        }
      }, g.checkOn || (E.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), g.focusin = "onfocusin" in i;

    var Ct = /^(?:focusinfocus|focusoutblur)$/,
        St = function St(e) {
      e.stopPropagation();
    };

    E.extend(E.event, {
      trigger: function trigger(e, t, n, s) {
        var r,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            m = [n || a],
            v = f.call(e, "type") ? e.type : e,
            g = f.call(e, "namespace") ? e.namespace.split(".") : [];

        if (o = h = l = n = n || a, 3 !== n.nodeType && 8 !== n.nodeType && !Ct.test(v + E.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), v = g.shift(), g.sort()), d = v.indexOf(":") < 0 && "on" + v, (e = e[E.expando] ? e : new E.Event(v, "object" == _typeof(e) && e)).isTrigger = s ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : E.makeArray(t, [e]), p = E.event.special[v] || {}, s || !p.trigger || !1 !== p.trigger.apply(n, t))) {
          if (!s && !p.noBubble && !b(n)) {
            for (c = p.delegateType || v, Ct.test(c + v) || (o = o.parentNode); o; o = o.parentNode) {
              m.push(o), l = o;
            }

            l === (n.ownerDocument || a) && m.push(l.defaultView || l.parentWindow || i);
          }

          for (r = 0; (o = m[r++]) && !e.isPropagationStopped();) {
            h = o, e.type = r > 1 ? c : p.bindType || v, (u = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && u.apply(o, t), (u = d && o[d]) && u.apply && J(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
          }

          return e.type = v, s || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), t) || !J(n) || d && y(n[v]) && !b(n) && ((l = n[d]) && (n[d] = null), E.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, St), n[v](), e.isPropagationStopped() && h.removeEventListener(v, St), E.event.triggered = void 0, l && (n[d] = l)), e.result;
        }
      },
      simulate: function simulate(e, t, i) {
        var n = E.extend(new E.Event(), i, {
          type: e,
          isSimulated: !0
        });
        E.event.trigger(n, null, t);
      }
    }), E.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          E.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var i = this[0];
        if (i) return E.event.trigger(e, t, i, !0);
      }
    }), g.focusin || E.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var i = function i(e) {
        E.event.simulate(t, e.target, E.event.fix(e));
      };

      E.event.special[t] = {
        setup: function setup() {
          var n = this.ownerDocument || this,
              s = Q.access(n, t);
          s || n.addEventListener(e, i, !0), Q.access(n, t, (s || 0) + 1);
        },
        teardown: function teardown() {
          var n = this.ownerDocument || this,
              s = Q.access(n, t) - 1;
          s ? Q.access(n, t, s) : (n.removeEventListener(e, i, !0), Q.remove(n, t));
        }
      };
    });
    var kt = i.location,
        $t = Date.now(),
        Mt = /\?/;

    E.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new i.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || E.error("Invalid XML: " + e), t;
    };

    var Pt = /\[\]$/,
        At = /\r?\n/g,
        zt = /^(?:submit|button|image|reset|file)$/i,
        Lt = /^(?:input|select|textarea|keygen)/i;

    function Dt(e, t, i, n) {
      var s;
      if (Array.isArray(t)) E.each(t, function (t, s) {
        i || Pt.test(e) ? n(e, s) : Dt(e + "[" + ("object" == _typeof(s) && null != s ? t : "") + "]", s, i, n);
      });else if (i || "object" !== T(t)) n(e, t);else for (s in t) {
        Dt(e + "[" + s + "]", t[s], i, n);
      }
    }

    E.param = function (e, t) {
      var i,
          n = [],
          s = function s(e, t) {
        var i = y(t) ? t() : t;
        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !E.isPlainObject(e)) E.each(e, function () {
        s(this.name, this.value);
      });else for (i in e) {
        Dt(i, e[i], t, s);
      }
      return n.join("&");
    }, E.fn.extend({
      serialize: function serialize() {
        return E.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = E.prop(this, "elements");
          return e ? E.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !E(this).is(":disabled") && Lt.test(this.nodeName) && !zt.test(e) && (this.checked || !me.test(e));
        }).map(function (e, t) {
          var i = E(this).val();
          return null == i ? null : Array.isArray(i) ? E.map(i, function (e) {
            return {
              name: t.name,
              value: e.replace(At, "\r\n")
            };
          }) : {
            name: t.name,
            value: i.replace(At, "\r\n")
          };
        }).get();
      }
    });
    var It = /%20/g,
        Ot = /#.*$/,
        _t = /([?&])_=[^&]*/,
        Nt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        qt = {},
        Rt = {},
        Bt = "*/".concat("*"),
        Ft = a.createElement("a");

    function Wt(e) {
      return function (t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n,
            s = 0,
            r = t.toLowerCase().match(j) || [];
        if (y(i)) for (; n = r[s++];) {
          "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
        }
      };
    }

    function Xt(e, t, i, n) {
      var s = {},
          r = e === Rt;

      function a(o) {
        var l;
        return s[o] = !0, E.each(e[o] || [], function (e, o) {
          var c = o(t, i, n);
          return "string" != typeof c || r || s[c] ? r ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1);
        }), l;
      }

      return a(t.dataTypes[0]) || !s["*"] && a("*");
    }

    function Gt(e, t) {
      var i,
          n,
          s = E.ajaxSettings.flatOptions || {};

      for (i in t) {
        void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
      }

      return n && E.extend(!0, e, n), e;
    }

    Ft.href = kt.href, E.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: kt.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(kt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Bt,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": E.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Gt(Gt(e, E.ajaxSettings), t) : Gt(E.ajaxSettings, e);
      },
      ajaxPrefilter: Wt(qt),
      ajaxTransport: Wt(Rt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var n,
            s,
            r,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            f = E.ajaxSetup({}, t),
            m = f.context || f,
            v = f.context && (m.nodeType || m.jquery) ? E(m) : E.event,
            g = E.Deferred(),
            y = E.Callbacks("once memory"),
            b = f.statusCode || {},
            w = {},
            x = {},
            T = "canceled",
            C = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (d) {
              if (!o) for (o = {}; t = Nt.exec(r);) {
                o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = o[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return d ? r : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == d && (e = x[e.toLowerCase()] = x[e.toLowerCase()] || e, w[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == d && (f.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (d) C.always(e[C.status]);else for (t in e) {
              b[t] = [b[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return n && n.abort(t), S(0, t), this;
          }
        };

        if (g.promise(C), f.url = ((e || f.url || kt.href) + "").replace(Ht, kt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
          c = a.createElement("a");

          try {
            c.href = f.url, c.href = c.href, f.crossDomain = Ft.protocol + "//" + Ft.host != c.protocol + "//" + c.host;
          } catch (e) {
            f.crossDomain = !0;
          }
        }

        if (f.data && f.processData && "string" != typeof f.data && (f.data = E.param(f.data, f.traditional)), Xt(qt, f, t, C), d) return C;

        for (p in (u = E.event && f.global) && 0 == E.active++ && E.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !jt.test(f.type), s = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(It, "+")) : (h = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (Mt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(_t, "$1"), h = (Mt.test(s) ? "&" : "?") + "_=" + $t++ + h), f.url = s + h), f.ifModified && (E.lastModified[s] && C.setRequestHeader("If-Modified-Since", E.lastModified[s]), E.etag[s] && C.setRequestHeader("If-None-Match", E.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
          C.setRequestHeader(p, f.headers[p]);
        }

        if (f.beforeSend && (!1 === f.beforeSend.call(m, C, f) || d)) return C.abort();

        if (T = "abort", y.add(f.complete), C.done(f.success), C.fail(f.error), n = Xt(Rt, f, t, C)) {
          if (C.readyState = 1, u && v.trigger("ajaxSend", [C, f]), d) return C;
          f.async && f.timeout > 0 && (l = i.setTimeout(function () {
            C.abort("timeout");
          }, f.timeout));

          try {
            d = !1, n.send(w, S);
          } catch (e) {
            if (d) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");

        function S(e, t, a, o) {
          var c,
              p,
              h,
              w,
              x,
              T = t;
          d || (d = !0, l && i.clearTimeout(l), n = void 0, r = o || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, a && (w = function (e, t, i) {
            for (var n, s, r, a, o = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (n) for (s in o) {
              if (o[s] && o[s].test(n)) {
                l.unshift(s);
                break;
              }
            }
            if (l[0] in i) r = l[0];else {
              for (s in i) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                  r = s;
                  break;
                }

                a || (a = s);
              }

              r = r || a;
            }
            if (r) return r !== l[0] && l.unshift(r), i[r];
          }(f, C, a)), w = function (e, t, i, n) {
            var s,
                r,
                a,
                o,
                l,
                c = {},
                d = e.dataTypes.slice();
            if (d[1]) for (a in e.converters) {
              c[a.toLowerCase()] = e.converters[a];
            }

            for (r = d.shift(); r;) {
              if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = d.shift()) if ("*" === r) r = l;else if ("*" !== l && l !== r) {
                if (!(a = c[l + " " + r] || c["* " + r])) for (s in c) {
                  if ((o = s.split(" "))[1] === r && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                    !0 === a ? a = c[s] : !0 !== c[s] && (r = o[0], d.unshift(o[1]));
                    break;
                  }
                }
                if (!0 !== a) if (a && e["throws"]) t = a(t);else try {
                  t = a(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: a ? e : "No conversion from " + l + " to " + r
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(f, w, C, c), c ? (f.ifModified && ((x = C.getResponseHeader("Last-Modified")) && (E.lastModified[s] = x), (x = C.getResponseHeader("etag")) && (E.etag[s] = x)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = w.state, p = w.data, c = !(h = w.error))) : (h = T, !e && T || (T = "error", e < 0 && (e = 0))), C.status = e, C.statusText = (t || T) + "", c ? g.resolveWith(m, [p, T, C]) : g.rejectWith(m, [C, T, h]), C.statusCode(b), b = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [C, f, c ? p : h]), y.fireWith(m, [C, T]), u && (v.trigger("ajaxComplete", [C, f]), --E.active || E.event.trigger("ajaxStop")));
        }

        return C;
      },
      getJSON: function getJSON(e, t, i) {
        return E.get(e, t, i, "json");
      },
      getScript: function getScript(e, t) {
        return E.get(e, void 0, t, "script");
      }
    }), E.each(["get", "post"], function (e, t) {
      E[t] = function (e, i, n, s) {
        return y(i) && (s = s || n, n = i, i = void 0), E.ajax(E.extend({
          url: e,
          type: t,
          dataType: s,
          data: i,
          success: n
        }, E.isPlainObject(e) && e));
      };
    }), E._evalUrl = function (e, t) {
      return E.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: {
          "text script": function textScript() {}
        },
        dataFilter: function dataFilter(e) {
          E.globalEval(e, t);
        }
      });
    }, E.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = E(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return y(e) ? this.each(function (t) {
          E(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = E(this),
              i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = y(e);
        return this.each(function (i) {
          E(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          E(this).replaceWith(this.childNodes);
        }), this;
      }
    }), E.expr.pseudos.hidden = function (e) {
      return !E.expr.pseudos.visible(e);
    }, E.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, E.ajaxSettings.xhr = function () {
      try {
        return new i.XMLHttpRequest();
      } catch (e) {}
    };
    var Yt = {
      0: 200,
      1223: 204
    },
        Vt = E.ajaxSettings.xhr();
    g.cors = !!Vt && "withCredentials" in Vt, g.ajax = Vt = !!Vt, E.ajaxTransport(function (e) {
      var _t3, n;

      if (g.cors || Vt && !e.crossDomain) return {
        send: function send(s, r) {
          var a,
              o = e.xhr();
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (a in e.xhrFields) {
            o[a] = e.xhrFields[a];
          }

          for (a in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) {
            o.setRequestHeader(a, s[a]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? r(0, "error") : r(o.status, o.statusText) : r(Yt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
                binary: o.response
              } : {
                text: o.responseText
              }, o.getAllResponseHeaders()));
            };
          }, o.onload = _t3(), n = o.onerror = o.ontimeout = _t3("error"), void 0 !== o.onabort ? o.onabort = n : o.onreadystatechange = function () {
            4 === o.readyState && i.setTimeout(function () {
              _t3 && n();
            });
          }, _t3 = _t3("abort");

          try {
            o.send(e.hasContent && e.data || null);
          } catch (e) {
            if (_t3) throw e;
          }
        },
        abort: function abort() {
          _t3 && _t3();
        }
      };
    }), E.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), E.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return E.globalEval(e), e;
        }
      }
    }), E.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), E.ajaxTransport("script", function (e) {
      var t, _i;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(n, s) {
          t = E("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _i = function i(e) {
            t.remove(), _i = null, e && s("error" === e.type ? 404 : 200, e.type);
          }), a.head.appendChild(t[0]);
        },
        abort: function abort() {
          _i && _i();
        }
      };
    });
    var Ut,
        Jt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    E.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Jt.pop() || E.expando + "_" + $t++;
        return this[e] = !0, e;
      }
    }), E.ajaxPrefilter("json jsonp", function (e, t, n) {
      var s,
          r,
          a,
          o = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
      if (o || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Kt, "$1" + s) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
        return a || E.error(s + " was not called"), a[0];
      }, e.dataTypes[0] = "json", r = i[s], i[s] = function () {
        a = arguments;
      }, n.always(function () {
        void 0 === r ? E(i).removeProp(s) : i[s] = r, e[s] && (e.jsonpCallback = t.jsonpCallback, Jt.push(s)), a && y(r) && r(a[0]), a = r = void 0;
      }), "script";
    }), g.createHTMLDocument = ((Ut = a.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), E.parseHTML = function (e, t, i) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (g.createHTMLDocument ? ((n = (t = a.implementation.createHTMLDocument("")).createElement("base")).href = a.location.href, t.head.appendChild(n)) : t = a), r = !i && [], (s = z.exec(e)) ? [t.createElement(s[1])] : (s = Ce([e], t, r), r && r.length && E(r).remove(), E.merge([], s.childNodes)));
      var n, s, r;
    }, E.fn.load = function (e, t, i) {
      var n,
          s,
          r,
          a = this,
          o = e.indexOf(" ");
      return o > -1 && (n = wt(e.slice(o)), e = e.slice(0, o)), y(t) ? (i = t, t = void 0) : t && "object" == _typeof(t) && (s = "POST"), a.length > 0 && E.ajax({
        url: e,
        type: s || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        r = arguments, a.html(n ? E("<div>").append(E.parseHTML(e)).find(n) : e);
      }).always(i && function (e, t) {
        a.each(function () {
          i.apply(this, r || [e.responseText, t, e]);
        });
      }), this;
    }, E.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      E.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), E.expr.pseudos.animated = function (e) {
      return E.grep(E.timers, function (t) {
        return e === t.elem;
      }).length;
    }, E.offset = {
      setOffset: function setOffset(e, t, i) {
        var n,
            s,
            r,
            a,
            o,
            l,
            c = E.css(e, "position"),
            d = E(e),
            u = {};
        "static" === c && (e.style.position = "relative"), o = d.offset(), r = E.css(e, "top"), l = E.css(e, "left"), ("absolute" === c || "fixed" === c) && (r + l).indexOf("auto") > -1 ? (a = (n = d.position()).top, s = n.left) : (a = parseFloat(r) || 0, s = parseFloat(l) || 0), y(t) && (t = t.call(e, i, E.extend({}, o))), null != t.top && (u.top = t.top - o.top + a), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : d.css(u);
      }
    }, E.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          E.offset.setOffset(this, e, t);
        });
        var t,
            i,
            n = this[0];
        return n ? n.getClientRects().length ? (t = n.getBoundingClientRect(), i = n.ownerDocument.defaultView, {
          top: t.top + i.pageYOffset,
          left: t.left + i.pageXOffset
        }) : {
          top: 0,
          left: 0
        } : void 0;
      },
      position: function position() {
        if (this[0]) {
          var e,
              t,
              i,
              n = this[0],
              s = {
            top: 0,
            left: 0
          };
          if ("fixed" === E.css(n, "position")) t = n.getBoundingClientRect();else {
            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === E.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== n && 1 === e.nodeType && ((s = E(e).offset()).top += E.css(e, "borderTopWidth", !0), s.left += E.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - s.top - E.css(n, "marginTop", !0),
            left: t.left - s.left - E.css(n, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === E.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || ae;
        });
      }
    }), E.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var i = "pageYOffset" === t;

      E.fn[e] = function (n) {
        return X(this, function (e, n, s) {
          var r;
          if (b(e) ? r = e : 9 === e.nodeType && (r = e.defaultView), void 0 === s) return r ? r[t] : e[n];
          r ? r.scrollTo(i ? r.pageXOffset : s, i ? s : r.pageYOffset) : e[n] = s;
        }, e, n, arguments.length);
      };
    }), E.each(["top", "left"], function (e, t) {
      E.cssHooks[t] = Ve(g.pixelPosition, function (e, i) {
        if (i) return i = Ye(e, t), We.test(i) ? E(e).position()[t] + "px" : i;
      });
    }), E.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      E.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (i, n) {
        E.fn[n] = function (s, r) {
          var a = arguments.length && (i || "boolean" != typeof s),
              o = i || (!0 === s || !0 === r ? "margin" : "border");
          return X(this, function (t, i, s) {
            var r;
            return b(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === s ? E.css(t, i, o) : E.style(t, i, s, o);
          }, t, a ? s : void 0, a);
        };
      });
    }), E.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      E.fn[t] = function (e, i) {
        return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
      };
    }), E.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), E.fn.extend({
      bind: function bind(e, t, i) {
        return this.on(e, null, t, i);
      },
      unbind: function unbind(e, t) {
        return this.off(e, null, t);
      },
      delegate: function delegate(e, t, i, n) {
        return this.on(t, e, i, n);
      },
      undelegate: function undelegate(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i);
      }
    }), E.proxy = function (e, t) {
      var i, n, s;
      if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = l.call(arguments, 2), (s = function s() {
        return e.apply(t || this, n.concat(l.call(arguments)));
      }).guid = e.guid = e.guid || E.guid++, s;
    }, E.holdReady = function (e) {
      e ? E.readyWait++ : E.ready(!0);
    }, E.isArray = Array.isArray, E.parseJSON = JSON.parse, E.nodeName = A, E.isFunction = y, E.isWindow = b, E.camelCase = U, E.type = T, E.now = Date.now, E.isNumeric = function (e) {
      var t = E.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (n = function () {
      return E;
    }.apply(t, [])) || (e.exports = n);
    var Qt = i.jQuery,
        Zt = i.$;
    return E.noConflict = function (e) {
      return i.$ === E && (i.$ = Zt), e && i.jQuery === E && (i.jQuery = Qt), E;
    }, s || (i.jQuery = i.$ = E), E;
  });
}, function (e, t, i) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = i(4),
      s = i(5),
      r = null,
      a = "https://api.emailjs.com";

  function o(e, t, i) {
    return void 0 === i && (i = {}), new Promise(function (s, r) {
      var a = new XMLHttpRequest();

      for (var o in a.addEventListener("load", function (e) {
        var t = new n.EmailJSResponseStatus(e.target);
        200 === t.status || "OK" === t.text ? s(t) : r(t);
      }), a.addEventListener("error", function (e) {
        r(new n.EmailJSResponseStatus(e.target));
      }), a.open("POST", e, !0), i) {
        a.setRequestHeader(o, i[o]);
      }

      a.send(t);
    });
  }

  function l(e) {
    var t = document.getElementById("g-recaptcha-response");
    return t && t.value && (e["g-recaptcha-response"] = t.value), t = null, e;
  }

  t.init = function (e, t) {
    r = e, a = t || "https://api.emailjs.com";
  }, t.send = function (e, t, i, n) {
    var s = {
      lib_version: "2.3.2",
      user_id: n || r,
      service_id: e,
      template_id: t,
      template_params: l(i)
    };
    return o(a + "/api/v1.0/email/send", JSON.stringify(s), {
      "Content-type": "application/json"
    });
  }, t.sendForm = function (e, t, i, n) {
    if ("string" == typeof i && (i = document.querySelector(i)), !i || "FORM" !== i.nodeName) throw "Expected the HTML form element or the style selector of form";
    s.UI.progressState(i);
    var l = new FormData(i);
    return l.append("lib_version", "2.3.2"), l.append("service_id", e), l.append("template_id", t), l.append("user_id", n || r), o(a + "/api/v1.0/email/send-form", l).then(function (e) {
      return s.UI.successState(i), e;
    }, function (e) {
      return s.UI.errorState(i), Promise.reject(e);
    });
  };
}, function (e, t, i) {
  "use strict";

  var n = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  t.validate = function (e) {
    if (!e) return !1;
    if (e.length > 254) return !1;
    if (!n.test(e)) return !1;
    var t = e.split("@");
    return !(t[0].length > 64) && !t[1].split(".").some(function (e) {
      return e.length > 63;
    });
  };
}, function (e, t, i) {
  /*!
   * 
   *   typed.js - A JavaScript Typing Animation Library
   *   Author: Matt Boldt <me@mattboldt.com>
   *   Version: v2.0.9
   *   Url: https://github.com/mattboldt/typed.js
   *   License(s): MIT
   * 
   */
  var n;
  n = function n() {
    return function (e) {
      var t = {};

      function i(n) {
        if (t[n]) return t[n].exports;
        var s = t[n] = {
          exports: {},
          id: n,
          loaded: !1
        };
        return e[n].call(s.exports, s, s.exports, i), s.loaded = !0, s.exports;
      }

      return i.m = e, i.c = t, i.p = "", i(0);
    }([function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      }(),
          s = i(1),
          r = i(3),
          a = function () {
        function e(t, i) {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e), s.initializer.load(this, i, t), this.begin();
        }

        return n(e, [{
          key: "toggle",
          value: function value() {
            this.pause.status ? this.start() : this.stop();
          }
        }, {
          key: "stop",
          value: function value() {
            this.typingComplete || this.pause.status || (this.toggleBlinking(!0), this.pause.status = !0, this.options.onStop(this.arrayPos, this));
          }
        }, {
          key: "start",
          value: function value() {
            this.typingComplete || this.pause.status && (this.pause.status = !1, this.pause.typewrite ? this.typewrite(this.pause.curString, this.pause.curStrPos) : this.backspace(this.pause.curString, this.pause.curStrPos), this.options.onStart(this.arrayPos, this));
          }
        }, {
          key: "destroy",
          value: function value() {
            this.reset(!1), this.options.onDestroy(this);
          }
        }, {
          key: "reset",
          value: function value() {
            var e = arguments.length <= 0 || void 0 === arguments[0] || arguments[0];
            clearInterval(this.timeout), this.replaceText(""), this.cursor && this.cursor.parentNode && (this.cursor.parentNode.removeChild(this.cursor), this.cursor = null), this.strPos = 0, this.arrayPos = 0, this.curLoop = 0, e && (this.insertCursor(), this.options.onReset(this), this.begin());
          }
        }, {
          key: "begin",
          value: function value() {
            var e = this;
            this.typingComplete = !1, this.shuffleStringsIfNeeded(this), this.insertCursor(), this.bindInputFocusEvents && this.bindFocusEvents(), this.timeout = setTimeout(function () {
              e.currentElContent && 0 !== e.currentElContent.length ? e.backspace(e.currentElContent, e.currentElContent.length) : e.typewrite(e.strings[e.sequence[e.arrayPos]], e.strPos);
            }, this.startDelay);
          }
        }, {
          key: "typewrite",
          value: function value(e, t) {
            var i = this;
            this.fadeOut && this.el.classList.contains(this.fadeOutClass) && (this.el.classList.remove(this.fadeOutClass), this.cursor && this.cursor.classList.remove(this.fadeOutClass));
            var n = this.humanizer(this.typeSpeed),
                s = 1;
            !0 !== this.pause.status ? this.timeout = setTimeout(function () {
              t = r.htmlParser.typeHtmlChars(e, t, i);
              var n = 0,
                  a = e.substr(t);

              if ("^" === a.charAt(0) && /^\^\d+/.test(a)) {
                var o = 1;
                o += (a = /\d+/.exec(a)[0]).length, n = parseInt(a), i.temporaryPause = !0, i.options.onTypingPaused(i.arrayPos, i), e = e.substring(0, t) + e.substring(t + o), i.toggleBlinking(!0);
              }

              if ("`" === a.charAt(0)) {
                for (; "`" !== e.substr(t + s).charAt(0) && !(t + ++s > e.length);) {
                  ;
                }

                var l = e.substring(0, t),
                    c = e.substring(l.length + 1, t + s),
                    d = e.substring(t + s + 1);
                e = l + c + d, s--;
              }

              i.timeout = setTimeout(function () {
                i.toggleBlinking(!1), t >= e.length ? i.doneTyping(e, t) : i.keepTyping(e, t, s), i.temporaryPause && (i.temporaryPause = !1, i.options.onTypingResumed(i.arrayPos, i));
              }, n);
            }, n) : this.setPauseStatus(e, t, !0);
          }
        }, {
          key: "keepTyping",
          value: function value(e, t, i) {
            0 === t && (this.toggleBlinking(!1), this.options.preStringTyped(this.arrayPos, this)), t += i;
            var n = e.substr(0, t);
            this.replaceText(n), this.typewrite(e, t);
          }
        }, {
          key: "doneTyping",
          value: function value(e, t) {
            var i = this;
            this.options.onStringTyped(this.arrayPos, this), this.toggleBlinking(!0), this.arrayPos === this.strings.length - 1 && (this.complete(), !1 === this.loop || this.curLoop === this.loopCount) || (this.timeout = setTimeout(function () {
              i.backspace(e, t);
            }, this.backDelay));
          }
        }, {
          key: "backspace",
          value: function value(e, t) {
            var i = this;

            if (!0 !== this.pause.status) {
              if (this.fadeOut) return this.initFadeOut();
              this.toggleBlinking(!1);
              var n = this.humanizer(this.backSpeed);
              this.timeout = setTimeout(function () {
                t = r.htmlParser.backSpaceHtmlChars(e, t, i);
                var n = e.substr(0, t);

                if (i.replaceText(n), i.smartBackspace) {
                  var s = i.strings[i.arrayPos + 1];
                  s && n === s.substr(0, t) ? i.stopNum = t : i.stopNum = 0;
                }

                t > i.stopNum ? (t--, i.backspace(e, t)) : t <= i.stopNum && (i.arrayPos++, i.arrayPos === i.strings.length ? (i.arrayPos = 0, i.options.onLastStringBackspaced(), i.shuffleStringsIfNeeded(), i.begin()) : i.typewrite(i.strings[i.sequence[i.arrayPos]], t));
              }, n);
            } else this.setPauseStatus(e, t, !0);
          }
        }, {
          key: "complete",
          value: function value() {
            this.options.onComplete(this), this.loop ? this.curLoop++ : this.typingComplete = !0;
          }
        }, {
          key: "setPauseStatus",
          value: function value(e, t, i) {
            this.pause.typewrite = i, this.pause.curString = e, this.pause.curStrPos = t;
          }
        }, {
          key: "toggleBlinking",
          value: function value(e) {
            this.cursor && (this.pause.status || this.cursorBlinking !== e && (this.cursorBlinking = e, e ? this.cursor.classList.add("typed-cursor--blink") : this.cursor.classList.remove("typed-cursor--blink")));
          }
        }, {
          key: "humanizer",
          value: function value(e) {
            return Math.round(Math.random() * e / 2) + e;
          }
        }, {
          key: "shuffleStringsIfNeeded",
          value: function value() {
            this.shuffle && (this.sequence = this.sequence.sort(function () {
              return Math.random() - .5;
            }));
          }
        }, {
          key: "initFadeOut",
          value: function value() {
            var e = this;
            return this.el.className += " " + this.fadeOutClass, this.cursor && (this.cursor.className += " " + this.fadeOutClass), setTimeout(function () {
              e.arrayPos++, e.replaceText(""), e.strings.length > e.arrayPos ? e.typewrite(e.strings[e.sequence[e.arrayPos]], 0) : (e.typewrite(e.strings[0], 0), e.arrayPos = 0);
            }, this.fadeOutDelay);
          }
        }, {
          key: "replaceText",
          value: function value(e) {
            this.attr ? this.el.setAttribute(this.attr, e) : this.isInput ? this.el.value = e : "html" === this.contentType ? this.el.innerHTML = e : this.el.textContent = e;
          }
        }, {
          key: "bindFocusEvents",
          value: function value() {
            var e = this;
            this.isInput && (this.el.addEventListener("focus", function (t) {
              e.stop();
            }), this.el.addEventListener("blur", function (t) {
              e.el.value && 0 !== e.el.value.length || e.start();
            }));
          }
        }, {
          key: "insertCursor",
          value: function value() {
            this.showCursor && (this.cursor || (this.cursor = document.createElement("span"), this.cursor.className = "typed-cursor", this.cursor.innerHTML = this.cursorChar, this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling)));
          }
        }]), e;
      }();

      t["default"] = a, e.exports = t["default"];
    }, function (e, t, i) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var n,
          s = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = arguments[t];

          for (var n in i) {
            Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
          }
        }

        return e;
      },
          r = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      }(),
          a = i(2),
          o = (n = a) && n.__esModule ? n : {
        "default": n
      },
          l = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e);
        }

        return r(e, [{
          key: "load",
          value: function value(e, t, i) {
            if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = s({}, o["default"], t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function (e) {
              return e.trim();
            }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
              e.strings = [], e.stringsElement.style.display = "none";
              var n = Array.prototype.slice.apply(e.stringsElement.children),
                  r = n.length;
              if (r) for (var a = 0; a < r; a += 1) {
                var l = n[a];
                e.strings.push(l.innerHTML.trim());
              }
            }

            for (var a in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0
            }, e.typingComplete = !1, e.strings) {
              e.sequence[a] = a;
            }

            e.currentElContent = this.getCurrentElContent(e), e.autoInsertCss = e.options.autoInsertCss, this.appendAnimationCss(e);
          }
        }, {
          key: "getCurrentElContent",
          value: function value(e) {
            return e.attr ? e.el.getAttribute(e.attr) : e.isInput ? e.el.value : "html" === e.contentType ? e.el.innerHTML : e.el.textContent;
          }
        }, {
          key: "appendAnimationCss",
          value: function value(e) {
            if (e.autoInsertCss && (e.showCursor || e.fadeOut) && !document.querySelector("[data-typed-js-css]")) {
              var t = document.createElement("style");
              t.type = "text/css", t.setAttribute("data-typed-js-css", !0);
              var i = "";
              e.showCursor && (i += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "), e.fadeOut && (i += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "), 0 !== t.length && (t.innerHTML = i, document.body.appendChild(t));
            }
          }
        }]), e;
      }();

      t["default"] = l;
      var c = new l();
      t.initializer = c;
    }, function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = {
        strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
        stringsElement: null,
        typeSpeed: 0,
        startDelay: 0,
        backSpeed: 0,
        smartBackspace: !0,
        shuffle: !1,
        backDelay: 700,
        fadeOut: !1,
        fadeOutClass: "typed-fade-out",
        fadeOutDelay: 500,
        loop: !1,
        loopCount: 1 / 0,
        showCursor: !0,
        cursorChar: "|",
        autoInsertCss: !0,
        attr: null,
        bindInputFocusEvents: !1,
        contentType: "html",
        onComplete: function onComplete(e) {},
        preStringTyped: function preStringTyped(e, t) {},
        onStringTyped: function onStringTyped(e, t) {},
        onLastStringBackspaced: function onLastStringBackspaced(e) {},
        onTypingPaused: function onTypingPaused(e, t) {},
        onTypingResumed: function onTypingResumed(e, t) {},
        onReset: function onReset(e) {},
        onStop: function onStop(e, t) {},
        onStart: function onStart(e, t) {},
        onDestroy: function onDestroy(e) {}
      };
      t["default"] = i, e.exports = t["default"];
    }, function (e, t) {
      "use strict";

      Object.defineProperty(t, "__esModule", {
        value: !0
      });

      var i = function () {
        function e(e, t) {
          for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
          }
        }

        return function (t, i, n) {
          return i && e(t.prototype, i), n && e(t, n), t;
        };
      }(),
          n = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e);
        }

        return i(e, [{
          key: "typeHtmlChars",
          value: function value(e, t, i) {
            if ("html" !== i.contentType) return t;
            var n = e.substr(t).charAt(0);

            if ("<" === n || "&" === n) {
              var s = "";

              for (s = "<" === n ? ">" : ";"; e.substr(t + 1).charAt(0) !== s && !(++t + 1 > e.length);) {
                ;
              }

              t++;
            }

            return t;
          }
        }, {
          key: "backSpaceHtmlChars",
          value: function value(e, t, i) {
            if ("html" !== i.contentType) return t;
            var n = e.substr(t).charAt(0);

            if (">" === n || ";" === n) {
              var s = "";

              for (s = ">" === n ? "<" : "&"; e.substr(t - 1).charAt(0) !== s && !(--t < 0);) {
                ;
              }

              t--;
            }

            return t;
          }
        }]), e;
      }();

      t["default"] = n;
      var s = new n();
      t.htmlParser = s;
    }]);
  }, e.exports = n();
}, function (e, t, i) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = function n(e) {
    this.status = e.status, this.text = e.responseText;
  };

  t.EmailJSResponseStatus = n;
}, function (e, t, i) {
  "use strict";

  Object.defineProperty(t, "__esModule", {
    value: !0
  });

  var n = function () {
    function e() {}

    return e.clearAll = function (e) {
      e.classList.remove(this.PROGRESS), e.classList.remove(this.DONE), e.classList.remove(this.ERROR);
    }, e.progressState = function (e) {
      this.clearAll(e), e.classList.add(this.PROGRESS);
    }, e.successState = function (e) {
      e.classList.remove(this.PROGRESS), e.classList.add(this.DONE);
    }, e.errorState = function (e) {
      e.classList.remove(this.PROGRESS), e.classList.add(this.ERROR);
    }, e.PROGRESS = "emailjs-sending", e.DONE = "emailjs-success", e.ERROR = "emailjs-error", e;
  }();

  t.UI = n;
}, function (e, t) {
  /*!
  Waypoints - 4.0.1
  Copyright © 2011-2016 Caleb Troughton
  Licensed under the MIT license.
  https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
  */
  !function () {
    "use strict";

    var e = 0,
        t = {};

    function i(n) {
      if (!n) throw new Error("No options passed to Waypoint constructor");
      if (!n.element) throw new Error("No element option passed to Waypoint constructor");
      if (!n.handler) throw new Error("No handler option passed to Waypoint constructor");
      this.key = "waypoint-" + e, this.options = i.Adapter.extend({}, i.defaults, n), this.element = this.options.element, this.adapter = new i.Adapter(this.element), this.callback = n.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis
      }), this.context = i.Context.findOrCreateByElement(this.options.context), i.offsetAliases[this.options.offset] && (this.options.offset = i.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), t[this.key] = this, e += 1;
    }

    i.prototype.queueTrigger = function (e) {
      this.group.queueTrigger(this, e);
    }, i.prototype.trigger = function (e) {
      this.enabled && this.callback && this.callback.apply(this, e);
    }, i.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete t[this.key];
    }, i.prototype.disable = function () {
      return this.enabled = !1, this;
    }, i.prototype.enable = function () {
      return this.context.refresh(), this.enabled = !0, this;
    }, i.prototype.next = function () {
      return this.group.next(this);
    }, i.prototype.previous = function () {
      return this.group.previous(this);
    }, i.invokeAll = function (e) {
      var i = [];

      for (var n in t) {
        i.push(t[n]);
      }

      for (var s = 0, r = i.length; s < r; s++) {
        i[s][e]();
      }
    }, i.destroyAll = function () {
      i.invokeAll("destroy");
    }, i.disableAll = function () {
      i.invokeAll("disable");
    }, i.enableAll = function () {
      for (var e in i.Context.refreshAll(), t) {
        t[e].enabled = !0;
      }

      return this;
    }, i.refreshAll = function () {
      i.Context.refreshAll();
    }, i.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight;
    }, i.viewportWidth = function () {
      return document.documentElement.clientWidth;
    }, i.adapters = [], i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: "default",
      horizontal: !1,
      offset: 0
    }, i.offsetAliases = {
      "bottom-in-view": function bottomInView() {
        return this.context.innerHeight() - this.adapter.outerHeight();
      },
      "right-in-view": function rightInView() {
        return this.context.innerWidth() - this.adapter.outerWidth();
      }
    }, window.Waypoint = i;
  }(), function () {
    "use strict";

    function e(e) {
      window.setTimeout(e, 1e3 / 60);
    }

    var t = 0,
        i = {},
        n = window.Waypoint,
        s = window.onload;

    function r(e) {
      this.element = e, this.Adapter = n.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + t, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
        x: this.adapter.scrollLeft(),
        y: this.adapter.scrollTop()
      }, this.waypoints = {
        vertical: {},
        horizontal: {}
      }, e.waypointContextKey = this.key, i[e.waypointContextKey] = this, t += 1, n.windowContext || (n.windowContext = !0, n.windowContext = new r(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler();
    }

    r.prototype.add = function (e) {
      var t = e.options.horizontal ? "horizontal" : "vertical";
      this.waypoints[t][e.key] = e, this.refresh();
    }, r.prototype.checkEmpty = function () {
      var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          t = this.Adapter.isEmptyObject(this.waypoints.vertical),
          n = this.element == this.element.window;
      e && t && !n && (this.adapter.off(".waypoints"), delete i[this.key]);
    }, r.prototype.createThrottledResizeHandler = function () {
      var e = this;

      function t() {
        e.handleResize(), e.didResize = !1;
      }

      this.adapter.on("resize.waypoints", function () {
        e.didResize || (e.didResize = !0, n.requestAnimationFrame(t));
      });
    }, r.prototype.createThrottledScrollHandler = function () {
      var e = this;

      function t() {
        e.handleScroll(), e.didScroll = !1;
      }

      this.adapter.on("scroll.waypoints", function () {
        e.didScroll && !n.isTouch || (e.didScroll = !0, n.requestAnimationFrame(t));
      });
    }, r.prototype.handleResize = function () {
      n.Context.refreshAll();
    }, r.prototype.handleScroll = function () {
      var e = {},
          t = {
        horizontal: {
          newScroll: this.adapter.scrollLeft(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left"
        },
        vertical: {
          newScroll: this.adapter.scrollTop(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up"
        }
      };

      for (var i in t) {
        var n = t[i],
            s = n.newScroll > n.oldScroll ? n.forward : n.backward;

        for (var r in this.waypoints[i]) {
          var a = this.waypoints[i][r];

          if (null !== a.triggerPoint) {
            var o = n.oldScroll < a.triggerPoint,
                l = n.newScroll >= a.triggerPoint;
            (o && l || !o && !l) && (a.queueTrigger(s), e[a.group.id] = a.group);
          }
        }
      }

      for (var c in e) {
        e[c].flushTriggers();
      }

      this.oldScroll = {
        x: t.horizontal.newScroll,
        y: t.vertical.newScroll
      };
    }, r.prototype.innerHeight = function () {
      return this.element == this.element.window ? n.viewportHeight() : this.adapter.innerHeight();
    }, r.prototype.remove = function (e) {
      delete this.waypoints[e.axis][e.key], this.checkEmpty();
    }, r.prototype.innerWidth = function () {
      return this.element == this.element.window ? n.viewportWidth() : this.adapter.innerWidth();
    }, r.prototype.destroy = function () {
      var e = [];

      for (var t in this.waypoints) {
        for (var i in this.waypoints[t]) {
          e.push(this.waypoints[t][i]);
        }
      }

      for (var n = 0, s = e.length; n < s; n++) {
        e[n].destroy();
      }
    }, r.prototype.refresh = function () {
      var e,
          t = this.element == this.element.window,
          i = t ? void 0 : this.adapter.offset(),
          s = {};

      for (var r in this.handleScroll(), e = {
        horizontal: {
          contextOffset: t ? 0 : i.left,
          contextScroll: t ? 0 : this.oldScroll.x,
          contextDimension: this.innerWidth(),
          oldScroll: this.oldScroll.x,
          forward: "right",
          backward: "left",
          offsetProp: "left"
        },
        vertical: {
          contextOffset: t ? 0 : i.top,
          contextScroll: t ? 0 : this.oldScroll.y,
          contextDimension: this.innerHeight(),
          oldScroll: this.oldScroll.y,
          forward: "down",
          backward: "up",
          offsetProp: "top"
        }
      }) {
        var a = e[r];

        for (var o in this.waypoints[r]) {
          var l,
              c,
              d,
              u,
              p = this.waypoints[r][o],
              h = p.options.offset,
              f = p.triggerPoint,
              m = 0,
              v = null == f;
          p.element !== p.element.window && (m = p.adapter.offset()[a.offsetProp]), "function" == typeof h ? h = h.apply(p) : "string" == typeof h && (h = parseFloat(h), p.options.offset.indexOf("%") > -1 && (h = Math.ceil(a.contextDimension * h / 100))), l = a.contextScroll - a.contextOffset, p.triggerPoint = Math.floor(m + l - h), c = f < a.oldScroll, d = p.triggerPoint >= a.oldScroll, u = !c && !d, !v && c && d ? (p.queueTrigger(a.backward), s[p.group.id] = p.group) : !v && u ? (p.queueTrigger(a.forward), s[p.group.id] = p.group) : v && a.oldScroll >= p.triggerPoint && (p.queueTrigger(a.forward), s[p.group.id] = p.group);
        }
      }

      return n.requestAnimationFrame(function () {
        for (var e in s) {
          s[e].flushTriggers();
        }
      }), this;
    }, r.findOrCreateByElement = function (e) {
      return r.findByElement(e) || new r(e);
    }, r.refreshAll = function () {
      for (var e in i) {
        i[e].refresh();
      }
    }, r.findByElement = function (e) {
      return i[e.waypointContextKey];
    }, window.onload = function () {
      s && s(), r.refreshAll();
    }, n.requestAnimationFrame = function (t) {
      (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || e).call(window, t);
    }, n.Context = r;
  }(), function () {
    "use strict";

    function e(e, t) {
      return e.triggerPoint - t.triggerPoint;
    }

    function t(e, t) {
      return t.triggerPoint - e.triggerPoint;
    }

    var i = {
      vertical: {},
      horizontal: {}
    },
        n = window.Waypoint;

    function s(e) {
      this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), i[this.axis][this.name] = this;
    }

    s.prototype.add = function (e) {
      this.waypoints.push(e);
    }, s.prototype.clearTriggerQueues = function () {
      this.triggerQueues = {
        up: [],
        down: [],
        left: [],
        right: []
      };
    }, s.prototype.flushTriggers = function () {
      for (var i in this.triggerQueues) {
        var n = this.triggerQueues[i],
            s = "up" === i || "left" === i;
        n.sort(s ? t : e);

        for (var r = 0, a = n.length; r < a; r += 1) {
          var o = n[r];
          (o.options.continuous || r === n.length - 1) && o.trigger([i]);
        }
      }

      this.clearTriggerQueues();
    }, s.prototype.next = function (t) {
      this.waypoints.sort(e);
      var i = n.Adapter.inArray(t, this.waypoints);
      return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
    }, s.prototype.previous = function (t) {
      this.waypoints.sort(e);
      var i = n.Adapter.inArray(t, this.waypoints);
      return i ? this.waypoints[i - 1] : null;
    }, s.prototype.queueTrigger = function (e, t) {
      this.triggerQueues[t].push(e);
    }, s.prototype.remove = function (e) {
      var t = n.Adapter.inArray(e, this.waypoints);
      t > -1 && this.waypoints.splice(t, 1);
    }, s.prototype.first = function () {
      return this.waypoints[0];
    }, s.prototype.last = function () {
      return this.waypoints[this.waypoints.length - 1];
    }, s.findOrCreate = function (e) {
      return i[e.axis][e.name] || new s(e);
    }, n.Group = s;
  }(), function () {
    "use strict";

    var e = window.Waypoint;

    function t(e) {
      return e === e.window;
    }

    function i(e) {
      return t(e) ? e : e.defaultView;
    }

    function n(e) {
      this.element = e, this.handlers = {};
    }

    n.prototype.innerHeight = function () {
      return t(this.element) ? this.element.innerHeight : this.element.clientHeight;
    }, n.prototype.innerWidth = function () {
      return t(this.element) ? this.element.innerWidth : this.element.clientWidth;
    }, n.prototype.off = function (e, t) {
      function i(e, t, i) {
        for (var n = 0, s = t.length - 1; n < s; n++) {
          var r = t[n];
          i && i !== r || e.removeEventListener(r);
        }
      }

      var n = e.split("."),
          s = n[0],
          r = n[1],
          a = this.element;
      if (r && this.handlers[r] && s) i(a, this.handlers[r][s], t), this.handlers[r][s] = [];else if (s) for (var o in this.handlers) {
        i(a, this.handlers[o][s] || [], t), this.handlers[o][s] = [];
      } else if (r && this.handlers[r]) {
        for (var l in this.handlers[r]) {
          i(a, this.handlers[r][l], t);
        }

        this.handlers[r] = {};
      }
    }, n.prototype.offset = function () {
      if (!this.element.ownerDocument) return null;
      var e = this.element.ownerDocument.documentElement,
          t = i(this.element.ownerDocument),
          n = {
        top: 0,
        left: 0
      };
      return this.element.getBoundingClientRect && (n = this.element.getBoundingClientRect()), {
        top: n.top + t.pageYOffset - e.clientTop,
        left: n.left + t.pageXOffset - e.clientLeft
      };
    }, n.prototype.on = function (e, t) {
      var i = e.split("."),
          n = i[0],
          s = i[1] || "__default",
          r = this.handlers[s] = this.handlers[s] || {};
      (r[n] = r[n] || []).push(t), this.element.addEventListener(n, t);
    }, n.prototype.outerHeight = function (e) {
      var i,
          n = this.innerHeight();
      return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginTop, 10), n += parseInt(i.marginBottom, 10)), n;
    }, n.prototype.outerWidth = function (e) {
      var i,
          n = this.innerWidth();
      return e && !t(this.element) && (i = window.getComputedStyle(this.element), n += parseInt(i.marginLeft, 10), n += parseInt(i.marginRight, 10)), n;
    }, n.prototype.scrollLeft = function () {
      var e = i(this.element);
      return e ? e.pageXOffset : this.element.scrollLeft;
    }, n.prototype.scrollTop = function () {
      var e = i(this.element);
      return e ? e.pageYOffset : this.element.scrollTop;
    }, n.extend = function () {
      var e = Array.prototype.slice.call(arguments);

      function t(e, t) {
        if ("object" == _typeof(e) && "object" == _typeof(t)) for (var i in t) {
          t.hasOwnProperty(i) && (e[i] = t[i]);
        }
        return e;
      }

      for (var i = 1, n = e.length; i < n; i++) {
        t(e[0], e[i]);
      }

      return e[0];
    }, n.inArray = function (e, t, i) {
      return null == t ? -1 : t.indexOf(e, i);
    }, n.isEmptyObject = function (e) {
      for (var t in e) {
        return !1;
      }

      return !0;
    }, e.adapters.push({
      name: "noframework",
      Adapter: n
    }), e.Adapter = n;
  }();
}, function (e, t) {
  var i = function i(e, t) {
    var i = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
      canvas: {
        el: i,
        w: i.offsetWidth,
        h: i.offsetHeight
      },
      particles: {
        number: {
          value: 400,
          density: {
            enable: !0,
            value_area: 800
          }
        },
        color: {
          value: "#fff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#ff0000"
          },
          polygon: {
            nb_sides: 5
          },
          image: {
            src: "",
            width: 100,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: !1,
          anim: {
            enable: !1,
            speed: 2,
            opacity_min: 0,
            sync: !1
          }
        },
        size: {
          value: 20,
          random: !1,
          anim: {
            enable: !1,
            speed: 20,
            size_min: 0,
            sync: !1
          }
        },
        line_linked: {
          enable: !0,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1
        },
        move: {
          enable: !0,
          speed: 2,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: {
            enable: !1,
            rotateX: 3e3,
            rotateY: 3e3
          }
        },
        array: []
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: !0,
            mode: "grab"
          },
          onclick: {
            enable: !0,
            mode: "push"
          },
          resize: !0
        },
        modes: {
          grab: {
            distance: 100,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 200,
            size: 80,
            duration: .4
          },
          repulse: {
            distance: 200,
            duration: .4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        },
        mouse: {}
      },
      retina_detect: !1,
      fn: {
        interact: {},
        modes: {},
        vendors: {}
      },
      tmp: {}
    };
    var r = this.pJS;
    t && Object.deepExtend(r, t), r.tmp.obj = {
      size_value: r.particles.size.value,
      size_anim_speed: r.particles.size.anim.speed,
      move_speed: r.particles.move.speed,
      line_linked_distance: r.particles.line_linked.distance,
      line_linked_width: r.particles.line_linked.width,
      mode_grab_distance: r.interactivity.modes.grab.distance,
      mode_bubble_distance: r.interactivity.modes.bubble.distance,
      mode_bubble_size: r.interactivity.modes.bubble.size,
      mode_repulse_distance: r.interactivity.modes.repulse.distance
    }, r.fn.retinaInit = function () {
      r.retina_detect && window.devicePixelRatio > 1 ? (r.canvas.pxratio = window.devicePixelRatio, r.tmp.retina = !0) : (r.canvas.pxratio = 1, r.tmp.retina = !1), r.canvas.w = r.canvas.el.offsetWidth * r.canvas.pxratio, r.canvas.h = r.canvas.el.offsetHeight * r.canvas.pxratio, r.particles.size.value = r.tmp.obj.size_value * r.canvas.pxratio, r.particles.size.anim.speed = r.tmp.obj.size_anim_speed * r.canvas.pxratio, r.particles.move.speed = r.tmp.obj.move_speed * r.canvas.pxratio, r.particles.line_linked.distance = r.tmp.obj.line_linked_distance * r.canvas.pxratio, r.interactivity.modes.grab.distance = r.tmp.obj.mode_grab_distance * r.canvas.pxratio, r.interactivity.modes.bubble.distance = r.tmp.obj.mode_bubble_distance * r.canvas.pxratio, r.particles.line_linked.width = r.tmp.obj.line_linked_width * r.canvas.pxratio, r.interactivity.modes.bubble.size = r.tmp.obj.mode_bubble_size * r.canvas.pxratio, r.interactivity.modes.repulse.distance = r.tmp.obj.mode_repulse_distance * r.canvas.pxratio;
    }, r.fn.canvasInit = function () {
      r.canvas.ctx = r.canvas.el.getContext("2d");
    }, r.fn.canvasSize = function () {
      r.canvas.el.width = r.canvas.w, r.canvas.el.height = r.canvas.h, r && r.interactivity.events.resize && window.addEventListener("resize", function () {
        r.canvas.w = r.canvas.el.offsetWidth, r.canvas.h = r.canvas.el.offsetHeight, r.tmp.retina && (r.canvas.w *= r.canvas.pxratio, r.canvas.h *= r.canvas.pxratio), r.canvas.el.width = r.canvas.w, r.canvas.el.height = r.canvas.h, r.particles.move.enable || (r.fn.particlesEmpty(), r.fn.particlesCreate(), r.fn.particlesDraw(), r.fn.vendors.densityAutoParticles()), r.fn.vendors.densityAutoParticles();
      });
    }, r.fn.canvasPaint = function () {
      r.canvas.ctx.fillRect(0, 0, r.canvas.w, r.canvas.h);
    }, r.fn.canvasClear = function () {
      r.canvas.ctx.clearRect(0, 0, r.canvas.w, r.canvas.h);
    }, r.fn.particle = function (e, t, i) {
      if (this.radius = (r.particles.size.random ? Math.random() : 1) * r.particles.size.value, r.particles.size.anim.enable && (this.size_status = !1, this.vs = r.particles.size.anim.speed / 100, r.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * r.canvas.w, this.y = i ? i.y : Math.random() * r.canvas.h, this.x > r.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > r.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), r.particles.move.bounce && r.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == _typeof(e.value)) {
        if (e.value instanceof Array) {
          var s = e.value[Math.floor(Math.random() * r.particles.color.value.length)];
          this.color.rgb = n(s);
        } else null != e.value.r && null != e.value.g && null != e.value.b && (this.color.rgb = {
          r: e.value.r,
          g: e.value.g,
          b: e.value.b
        }), null != e.value.h && null != e.value.s && null != e.value.l && (this.color.hsl = {
          h: e.value.h,
          s: e.value.s,
          l: e.value.l
        });
      } else "random" == e.value ? this.color.rgb = {
        r: Math.floor(256 * Math.random()) + 0,
        g: Math.floor(256 * Math.random()) + 0,
        b: Math.floor(256 * Math.random()) + 0
      } : "string" == typeof e.value && (this.color = e, this.color.rgb = n(this.color.value));
      this.opacity = (r.particles.opacity.random ? Math.random() : 1) * r.particles.opacity.value, r.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = r.particles.opacity.anim.speed / 100, r.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var a = {};

      switch (r.particles.move.direction) {
        case "top":
          a = {
            x: 0,
            y: -1
          };
          break;

        case "top-right":
          a = {
            x: .5,
            y: -.5
          };
          break;

        case "right":
          a = {
            x: 1,
            y: -0
          };
          break;

        case "bottom-right":
          a = {
            x: .5,
            y: .5
          };
          break;

        case "bottom":
          a = {
            x: 0,
            y: 1
          };
          break;

        case "bottom-left":
          a = {
            x: -.5,
            y: 1
          };
          break;

        case "left":
          a = {
            x: -1,
            y: 0
          };
          break;

        case "top-left":
          a = {
            x: -.5,
            y: -.5
          };
          break;

        default:
          a = {
            x: 0,
            y: 0
          };
      }

      r.particles.move.straight ? (this.vx = a.x, this.vy = a.y, r.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = a.x + Math.random() - .5, this.vy = a.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
      var o = r.particles.shape.type;

      if ("object" == _typeof(o)) {
        if (o instanceof Array) {
          var l = o[Math.floor(Math.random() * o.length)];
          this.shape = l;
        }
      } else this.shape = o;

      if ("image" == this.shape) {
        var c = r.particles.shape;
        this.img = {
          src: c.image.src,
          ratio: c.image.width / c.image.height
        }, this.img.ratio || (this.img.ratio = 1), "svg" == r.tmp.img_type && null != r.tmp.source_svg && (r.fn.vendors.createSvgImg(this), r.tmp.pushing && (this.img.loaded = !1));
      }
    }, r.fn.particle.prototype.draw = function () {
      var e = this;
      if (null != e.radius_bubble) var t = e.radius_bubble;else t = e.radius;
      if (null != e.opacity_bubble) var i = e.opacity_bubble;else i = e.opacity;
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";

      switch (r.canvas.ctx.fillStyle = n, r.canvas.ctx.beginPath(), e.shape) {
        case "circle":
          r.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;

        case "edge":
          r.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;

        case "triangle":
          r.fn.vendors.drawShape(r.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
          break;

        case "polygon":
          r.fn.vendors.drawShape(r.canvas.ctx, e.x - t / (r.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (r.particles.shape.polygon.nb_sides / 3), r.particles.shape.polygon.nb_sides, 1);
          break;

        case "star":
          r.fn.vendors.drawShape(r.canvas.ctx, e.x - 2 * t / (r.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (r.particles.shape.polygon.nb_sides / 3), r.particles.shape.polygon.nb_sides, 2);
          break;

        case "image":
          ;
          if ("svg" == r.tmp.img_type) var s = e.img.obj;else s = r.tmp.img_obj;
          s && r.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio);
      }

      r.canvas.ctx.closePath(), r.particles.shape.stroke.width > 0 && (r.canvas.ctx.strokeStyle = r.particles.shape.stroke.color, r.canvas.ctx.lineWidth = r.particles.shape.stroke.width, r.canvas.ctx.stroke()), r.canvas.ctx.fill();
    }, r.fn.particlesCreate = function () {
      for (var e = 0; e < r.particles.number.value; e++) {
        r.particles.array.push(new r.fn.particle(r.particles.color, r.particles.opacity.value));
      }
    }, r.fn.particlesUpdate = function () {
      for (var e = 0; e < r.particles.array.length; e++) {
        var t = r.particles.array[e];

        if (r.particles.move.enable) {
          var i = r.particles.move.speed / 2;
          t.x += t.vx * i, t.y += t.vy * i;
        }

        if (r.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= r.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= r.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), r.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= r.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= r.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == r.particles.move.out_mode) var n = {
          x_left: t.radius,
          x_right: r.canvas.w,
          y_top: t.radius,
          y_bottom: r.canvas.h
        };else n = {
          x_left: -t.radius,
          x_right: r.canvas.w + t.radius,
          y_top: -t.radius,
          y_bottom: r.canvas.h + t.radius
        };

        switch (t.x - t.radius > r.canvas.w ? (t.x = n.x_left, t.y = Math.random() * r.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * r.canvas.h), t.y - t.radius > r.canvas.h ? (t.y = n.y_top, t.x = Math.random() * r.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * r.canvas.w), r.particles.move.out_mode) {
          case "bounce":
            t.x + t.radius > r.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > r.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy);
        }

        if (s("grab", r.interactivity.events.onhover.mode) && r.fn.modes.grabParticle(t), (s("bubble", r.interactivity.events.onhover.mode) || s("bubble", r.interactivity.events.onclick.mode)) && r.fn.modes.bubbleParticle(t), (s("repulse", r.interactivity.events.onhover.mode) || s("repulse", r.interactivity.events.onclick.mode)) && r.fn.modes.repulseParticle(t), r.particles.line_linked.enable || r.particles.move.attract.enable) for (var a = e + 1; a < r.particles.array.length; a++) {
          var o = r.particles.array[a];
          r.particles.line_linked.enable && r.fn.interact.linkParticles(t, o), r.particles.move.attract.enable && r.fn.interact.attractParticles(t, o), r.particles.move.bounce && r.fn.interact.bounceParticles(t, o);
        }
      }
    }, r.fn.particlesDraw = function () {
      r.canvas.ctx.clearRect(0, 0, r.canvas.w, r.canvas.h), r.fn.particlesUpdate();

      for (var e = 0; e < r.particles.array.length; e++) {
        r.particles.array[e].draw();
      }
    }, r.fn.particlesEmpty = function () {
      r.particles.array = [];
    }, r.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(r.fn.checkAnimFrame), cancelRequestAnimFrame(r.fn.drawAnimFrame), r.tmp.source_svg = void 0, r.tmp.img_obj = void 0, r.tmp.count_svg = 0, r.fn.particlesEmpty(), r.fn.canvasClear(), r.fn.vendors.start();
    }, r.fn.interact.linkParticles = function (e, t) {
      var i = e.x - t.x,
          n = e.y - t.y,
          s = Math.sqrt(i * i + n * n);

      if (s <= r.particles.line_linked.distance) {
        var a = r.particles.line_linked.opacity - s / (1 / r.particles.line_linked.opacity) / r.particles.line_linked.distance;

        if (a > 0) {
          var o = r.particles.line_linked.color_rgb_line;
          r.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + a + ")", r.canvas.ctx.lineWidth = r.particles.line_linked.width, r.canvas.ctx.beginPath(), r.canvas.ctx.moveTo(e.x, e.y), r.canvas.ctx.lineTo(t.x, t.y), r.canvas.ctx.stroke(), r.canvas.ctx.closePath();
        }
      }
    }, r.fn.interact.attractParticles = function (e, t) {
      var i = e.x - t.x,
          n = e.y - t.y;

      if (Math.sqrt(i * i + n * n) <= r.particles.line_linked.distance) {
        var s = i / (1e3 * r.particles.move.attract.rotateX),
            a = n / (1e3 * r.particles.move.attract.rotateY);
        e.vx -= s, e.vy -= a, t.vx += s, t.vy += a;
      }
    }, r.fn.interact.bounceParticles = function (e, t) {
      var i = e.x - t.x,
          n = e.y - t.y;
      Math.sqrt(i * i + n * n) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy);
    }, r.fn.modes.pushParticles = function (e, t) {
      r.tmp.pushing = !0;

      for (var i = 0; i < e; i++) {
        r.particles.array.push(new r.fn.particle(r.particles.color, r.particles.opacity.value, {
          x: t ? t.pos_x : Math.random() * r.canvas.w,
          y: t ? t.pos_y : Math.random() * r.canvas.h
        })), i == e - 1 && (r.particles.move.enable || r.fn.particlesDraw(), r.tmp.pushing = !1);
      }
    }, r.fn.modes.removeParticles = function (e) {
      r.particles.array.splice(0, e), r.particles.move.enable || r.fn.particlesDraw();
    }, r.fn.modes.bubbleParticle = function (e) {
      if (r.interactivity.events.onhover.enable && s("bubble", r.interactivity.events.onhover.mode)) {
        var a = function a() {
          e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
        };

        var t = e.x - r.interactivity.mouse.pos_x,
            i = e.y - r.interactivity.mouse.pos_y,
            n = 1 - (d = Math.sqrt(t * t + i * i)) / r.interactivity.modes.bubble.distance;

        if (d <= r.interactivity.modes.bubble.distance) {
          if (n >= 0 && "mousemove" == r.interactivity.status) {
            if (r.interactivity.modes.bubble.size != r.particles.size.value) if (r.interactivity.modes.bubble.size > r.particles.size.value) {
              (l = e.radius + r.interactivity.modes.bubble.size * n) >= 0 && (e.radius_bubble = l);
            } else {
              var o = e.radius - r.interactivity.modes.bubble.size,
                  l = e.radius - o * n;
              e.radius_bubble = l > 0 ? l : 0;
            }
            var c;
            if (r.interactivity.modes.bubble.opacity != r.particles.opacity.value) if (r.interactivity.modes.bubble.opacity > r.particles.opacity.value) (c = r.interactivity.modes.bubble.opacity * n) > e.opacity && c <= r.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);else (c = e.opacity - (r.particles.opacity.value - r.interactivity.modes.bubble.opacity) * n) < e.opacity && c >= r.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);
          }
        } else a();

        "mouseleave" == r.interactivity.status && a();
      } else if (r.interactivity.events.onclick.enable && s("bubble", r.interactivity.events.onclick.mode)) {
        var p = function p(t, i, n, s, a) {
          if (t != i) if (r.tmp.bubble_duration_end) null != n && (l = t + (t - (s - u * (s - t) / r.interactivity.modes.bubble.duration)), "size" == a && (e.radius_bubble = l), "opacity" == a && (e.opacity_bubble = l));else if (d <= r.interactivity.modes.bubble.distance) {
            if (null != n) var o = n;else o = s;

            if (o != t) {
              var l = s - u * (s - t) / r.interactivity.modes.bubble.duration;
              "size" == a && (e.radius_bubble = l), "opacity" == a && (e.opacity_bubble = l);
            }
          } else "size" == a && (e.radius_bubble = void 0), "opacity" == a && (e.opacity_bubble = void 0);
        };

        if (r.tmp.bubble_clicking) {
          t = e.x - r.interactivity.mouse.click_pos_x, i = e.y - r.interactivity.mouse.click_pos_y;
          var d = Math.sqrt(t * t + i * i),
              u = (new Date().getTime() - r.interactivity.mouse.click_time) / 1e3;
          u > r.interactivity.modes.bubble.duration && (r.tmp.bubble_duration_end = !0), u > 2 * r.interactivity.modes.bubble.duration && (r.tmp.bubble_clicking = !1, r.tmp.bubble_duration_end = !1);
        }

        r.tmp.bubble_clicking && (p(r.interactivity.modes.bubble.size, r.particles.size.value, e.radius_bubble, e.radius, "size"), p(r.interactivity.modes.bubble.opacity, r.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
      }
    }, r.fn.modes.repulseParticle = function (e) {
      if (r.interactivity.events.onhover.enable && s("repulse", r.interactivity.events.onhover.mode) && "mousemove" == r.interactivity.status) {
        var t = e.x - r.interactivity.mouse.pos_x,
            i = e.y - r.interactivity.mouse.pos_y,
            n = Math.sqrt(t * t + i * i),
            a = {
          x: t / n,
          y: i / n
        },
            o = r.interactivity.modes.repulse.distance,
            l = (f = 1 / o * (-1 * Math.pow(n / o, 2) + 1) * o * 100, m = 0, v = 50, Math.min(Math.max(f, m), v)),
            c = {
          x: e.x + a.x * l,
          y: e.y + a.y * l
        };
        "bounce" == r.particles.move.out_mode ? (c.x - e.radius > 0 && c.x + e.radius < r.canvas.w && (e.x = c.x), c.y - e.radius > 0 && c.y + e.radius < r.canvas.h && (e.y = c.y)) : (e.x = c.x, e.y = c.y);
      } else if (r.interactivity.events.onclick.enable && s("repulse", r.interactivity.events.onclick.mode)) if (r.tmp.repulse_finish || (r.tmp.repulse_count++, r.tmp.repulse_count == r.particles.array.length && (r.tmp.repulse_finish = !0)), r.tmp.repulse_clicking) {
        o = Math.pow(r.interactivity.modes.repulse.distance / 6, 3);
        var d = r.interactivity.mouse.click_pos_x - e.x,
            u = r.interactivity.mouse.click_pos_y - e.y,
            p = d * d + u * u,
            h = -o / p * 1;
        p <= o && function () {
          var t = Math.atan2(u, d);

          if (e.vx = h * Math.cos(t), e.vy = h * Math.sin(t), "bounce" == r.particles.move.out_mode) {
            var i = {
              x: e.x + e.vx,
              y: e.y + e.vy
            };
            i.x + e.radius > r.canvas.w ? e.vx = -e.vx : i.x - e.radius < 0 && (e.vx = -e.vx), i.y + e.radius > r.canvas.h ? e.vy = -e.vy : i.y - e.radius < 0 && (e.vy = -e.vy);
          }
        }();
      } else 0 == r.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);

      var f, m, v;
    }, r.fn.modes.grabParticle = function (e) {
      if (r.interactivity.events.onhover.enable && "mousemove" == r.interactivity.status) {
        var t = e.x - r.interactivity.mouse.pos_x,
            i = e.y - r.interactivity.mouse.pos_y,
            n = Math.sqrt(t * t + i * i);

        if (n <= r.interactivity.modes.grab.distance) {
          var s = r.interactivity.modes.grab.line_linked.opacity - n / (1 / r.interactivity.modes.grab.line_linked.opacity) / r.interactivity.modes.grab.distance;

          if (s > 0) {
            var a = r.particles.line_linked.color_rgb_line;
            r.canvas.ctx.strokeStyle = "rgba(" + a.r + "," + a.g + "," + a.b + "," + s + ")", r.canvas.ctx.lineWidth = r.particles.line_linked.width, r.canvas.ctx.beginPath(), r.canvas.ctx.moveTo(e.x, e.y), r.canvas.ctx.lineTo(r.interactivity.mouse.pos_x, r.interactivity.mouse.pos_y), r.canvas.ctx.stroke(), r.canvas.ctx.closePath();
          }
        }
      }
    }, r.fn.vendors.eventsListeners = function () {
      "window" == r.interactivity.detect_on ? r.interactivity.el = window : r.interactivity.el = r.canvas.el, (r.interactivity.events.onhover.enable || r.interactivity.events.onclick.enable) && (r.interactivity.el.addEventListener("mousemove", function (e) {
        if (r.interactivity.el == window) var t = e.clientX,
            i = e.clientY;else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
        r.interactivity.mouse.pos_x = t, r.interactivity.mouse.pos_y = i, r.tmp.retina && (r.interactivity.mouse.pos_x *= r.canvas.pxratio, r.interactivity.mouse.pos_y *= r.canvas.pxratio), r.interactivity.status = "mousemove";
      }), r.interactivity.el.addEventListener("mouseleave", function (e) {
        r.interactivity.mouse.pos_x = null, r.interactivity.mouse.pos_y = null, r.interactivity.status = "mouseleave";
      })), r.interactivity.events.onclick.enable && r.interactivity.el.addEventListener("click", function () {
        if (r.interactivity.mouse.click_pos_x = r.interactivity.mouse.pos_x, r.interactivity.mouse.click_pos_y = r.interactivity.mouse.pos_y, r.interactivity.mouse.click_time = new Date().getTime(), r.interactivity.events.onclick.enable) switch (r.interactivity.events.onclick.mode) {
          case "push":
            r.particles.move.enable ? r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb, r.interactivity.mouse) : 1 == r.interactivity.modes.push.particles_nb ? r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb, r.interactivity.mouse) : r.interactivity.modes.push.particles_nb > 1 && r.fn.modes.pushParticles(r.interactivity.modes.push.particles_nb);
            break;

          case "remove":
            r.fn.modes.removeParticles(r.interactivity.modes.remove.particles_nb);
            break;

          case "bubble":
            r.tmp.bubble_clicking = !0;
            break;

          case "repulse":
            r.tmp.repulse_clicking = !0, r.tmp.repulse_count = 0, r.tmp.repulse_finish = !1, setTimeout(function () {
              r.tmp.repulse_clicking = !1;
            }, 1e3 * r.interactivity.modes.repulse.duration);
        }
      });
    }, r.fn.vendors.densityAutoParticles = function () {
      if (r.particles.number.density.enable) {
        var e = r.canvas.el.width * r.canvas.el.height / 1e3;
        r.tmp.retina && (e /= 2 * r.canvas.pxratio);
        var t = e * r.particles.number.value / r.particles.number.density.value_area,
            i = r.particles.array.length - t;
        i < 0 ? r.fn.modes.pushParticles(Math.abs(i)) : r.fn.modes.removeParticles(i);
      }
    }, r.fn.vendors.checkOverlap = function (e, t) {
      for (var i = 0; i < r.particles.array.length; i++) {
        var n = r.particles.array[i],
            s = e.x - n.x,
            a = e.y - n.y;
        Math.sqrt(s * s + a * a) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * r.canvas.w, e.y = t ? t.y : Math.random() * r.canvas.h, r.fn.vendors.checkOverlap(e));
      }
    }, r.fn.vendors.createSvgImg = function (e) {
      var t = r.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (t, i, n, s) {
        if (e.color.rgb) var r = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else r = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
        return r;
      }),
          i = new Blob([t], {
        type: "image/svg+xml;charset=utf-8"
      }),
          n = window.URL || window.webkitURL || window,
          s = n.createObjectURL(i),
          a = new Image();
      a.addEventListener("load", function () {
        e.img.obj = a, e.img.loaded = !0, n.revokeObjectURL(s), r.tmp.count_svg++;
      }), a.src = s;
    }, r.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(r.fn.drawAnimFrame), i.remove(), pJSDom = null;
    }, r.fn.vendors.drawShape = function (e, t, i, n, s, r) {
      var a = s * r,
          o = s / r,
          l = 180 * (o - 2) / o,
          c = Math.PI - Math.PI * l / 180;
      e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);

      for (var d = 0; d < a; d++) {
        e.lineTo(n, 0), e.translate(n, 0), e.rotate(c);
      }

      e.fill(), e.restore();
    }, r.fn.vendors.exportImg = function () {
      window.open(r.canvas.el.toDataURL("image/png"), "_blank");
    }, r.fn.vendors.loadImg = function (e) {
      if (r.tmp.img_error = void 0, "" != r.particles.shape.image.src) {
        if ("svg" == e) {
          var t = new XMLHttpRequest();
          t.open("GET", r.particles.shape.image.src), t.onreadystatechange = function (e) {
            4 == t.readyState && (200 == t.status ? (r.tmp.source_svg = e.currentTarget.response, r.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), r.tmp.img_error = !0));
          }, t.send();
        } else {
          var i = new Image();
          i.addEventListener("load", function () {
            r.tmp.img_obj = i, r.fn.vendors.checkBeforeDraw();
          }), i.src = r.particles.shape.image.src;
        }
      } else console.log("Error pJS - No image.src"), r.tmp.img_error = !0;
    }, r.fn.vendors.draw = function () {
      "image" == r.particles.shape.type ? "svg" == r.tmp.img_type ? r.tmp.count_svg >= r.particles.number.value ? (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame)) : r.tmp.img_error || (r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw)) : null != r.tmp.img_obj ? (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame)) : r.tmp.img_error || (r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw)) : (r.fn.particlesDraw(), r.particles.move.enable ? r.fn.drawAnimFrame = requestAnimFrame(r.fn.vendors.draw) : cancelRequestAnimFrame(r.fn.drawAnimFrame));
    }, r.fn.vendors.checkBeforeDraw = function () {
      "image" == r.particles.shape.type ? "svg" == r.tmp.img_type && null == r.tmp.source_svg ? r.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(r.tmp.checkAnimFrame), r.tmp.img_error || (r.fn.vendors.init(), r.fn.vendors.draw())) : (r.fn.vendors.init(), r.fn.vendors.draw());
    }, r.fn.vendors.init = function () {
      r.fn.retinaInit(), r.fn.canvasInit(), r.fn.canvasSize(), r.fn.canvasPaint(), r.fn.particlesCreate(), r.fn.vendors.densityAutoParticles(), r.particles.line_linked.color_rgb_line = n(r.particles.line_linked.color);
    }, r.fn.vendors.start = function () {
      s("image", r.particles.shape.type) ? (r.tmp.img_type = r.particles.shape.image.src.substr(r.particles.shape.image.src.length - 3), r.fn.vendors.loadImg(r.tmp.img_type)) : r.fn.vendors.checkBeforeDraw();
    }, r.fn.vendors.eventsListeners(), r.fn.vendors.start();
  };

  function n(e) {
    e = e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (e, t, i, n) {
      return t + t + i + i + n + n;
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {
      r: parseInt(t[1], 16),
      g: parseInt(t[2], 16),
      b: parseInt(t[3], 16)
    } : null;
  }

  function s(e, t) {
    return t.indexOf(e) > -1;
  }

  Object.deepExtend = function e(t, i) {
    for (var n in i) {
      i[n] && i[n].constructor && i[n].constructor === Object ? (t[n] = t[n] || {}, e(t[n], i[n])) : t[n] = i[n];
    }

    return t;
  }, window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
    window.setTimeout(e, 1e3 / 60);
  }, window.cancelRequestAnimFrame = window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout, window.pJSDom = [], window.particlesJS = function (e, t) {
    "string" != typeof e && (t = e, e = "particles-js"), e || (e = "particles-js");
    var n = document.getElementById(e),
        s = n.getElementsByClassName("particles-js-canvas-el");
    if (s.length) for (; s.length > 0;) {
      n.removeChild(s[0]);
    }
    var r = document.createElement("canvas");
    r.className = "particles-js-canvas-el", r.style.width = "100%", r.style.height = "100%", null != document.getElementById(e).appendChild(r) && pJSDom.push(new i(e, t));
  }, window.particlesJS.load = function (e, t, i) {
    var n = new XMLHttpRequest();
    n.open("GET", t), n.onreadystatechange = function (t) {
      if (4 == n.readyState) if (200 == n.status) {
        var s = JSON.parse(t.currentTarget.response);
        window.particlesJS(e, s), i && i();
      } else console.log("Error pJS - XMLHttpRequest status: " + n.status), console.log("Error pJS - File config not found");
    }, n.send();
  };
}, function (e, t, i) {
  "use strict";

  i.r(t);
  var n = i(0),
      s = i.n(n);

  var r =
  /*#__PURE__*/
  function () {
    function r() {
      _classCallCheck(this, r);

      this.frontSide = s()(".flipping-card__front"), this.backSide = s()(".flipping-card__back"), this.triggerPoint = s()("#trigger-point"), this.createWaypoints();
    }

    _createClass(r, [{
      key: "createWaypoints",
      value: function createWaypoints() {
        var e = this;
        new Waypoint({
          element: e.triggerPoint[0],
          handler: function handler() {
            e.frontSide.css("transform", "rotateY(180deg)"), e.backSide.css("transform", "rotateY(0)");
          },
          offset: "40%"
        });
      }
    }]);

    return r;
  }(),
      a = i(2),
      o = i(1);

  var l =
  /*#__PURE__*/
  function () {
    function l() {
      _classCallCheck(this, l);

      this.button = s()(".form__button"), this.input = s()(".form__input"), this.emailjs = {
        service_id: "default_service",
        template_id: "template_fqxB2jK3",
        template_id_me: "tome",
        userId: "user_LRXENJDLJYtP2cKZ0qAZT"
      }, this.userInfo = {
        to_email: "",
        to_name: "",
        message_html: "you have just submitted to our website."
      }, this.event();
    }

    _createClass(l, [{
      key: "event",
      value: function event() {
        var e = this;
        this.button.click(function (t) {
          if (e.getUserData(), Object(a.validate)(e.userInfo.to_email) && e.userInfo.to_name) return e.button.text("submitting..."), e.sendMailToUser(), e.sendMailToMe(), e.clearInput(), !1;
        });
      }
    }, {
      key: "getUserData",
      value: function getUserData() {
        this.userInfo.to_name = s()("#name ").val(), this.userInfo.to_email = s()("#email").val();
      }
    }, {
      key: "clearInput",
      value: function clearInput() {
        this.input.val("");
      }
    }, {
      key: "updateBtnText",
      value: function updateBtnText(e) {
        var _this = this;

        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "submit";
        this.button.text(e), setTimeout(function () {
          _this.button.text(t);
        }, 5e3);
      }
    }, {
      key: "sendMailToUser",
      value: function sendMailToUser() {
        var _this2 = this;

        o.init(this.emailjs.userId), o.send(this.emailjs.service_id, this.emailjs.template_id, this.userInfo).then(function () {
          _this2.updateBtnText("check your mail!");
        }, function () {
          _this2.updateBtnText("check your mail!", "error");
        });
      }
    }, {
      key: "sendMailToMe",
      value: function sendMailToMe() {
        o.send(this.emailjs.service_id, this.emailjs.template_id_me, this.userInfo);
      }
    }]);

    return l;
  }(),
      c = "undefined" == typeof document ? {
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
      d = "undefined" == typeof window ? {
    document: c,
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

  var u = function u(e) {
    _classCallCheck(this, u);

    var t = this;

    for (var _i2 = 0; _i2 < e.length; _i2 += 1) {
      t[_i2] = e[_i2];
    }

    return t.length = e.length, this;
  };

  function p(e, t) {
    var i = [];
    var n = 0;
    if (e && !t && e instanceof u) return e;
    if (e) if ("string" == typeof e) {
      var _s, _r2;

      var _a = e.trim();

      if (_a.indexOf("<") >= 0 && _a.indexOf(">") >= 0) {
        var _e2 = "div";

        for (0 === _a.indexOf("<li") && (_e2 = "ul"), 0 === _a.indexOf("<tr") && (_e2 = "tbody"), 0 !== _a.indexOf("<td") && 0 !== _a.indexOf("<th") || (_e2 = "tr"), 0 === _a.indexOf("<tbody") && (_e2 = "table"), 0 === _a.indexOf("<option") && (_e2 = "select"), (_r2 = c.createElement(_e2)).innerHTML = _a, n = 0; n < _r2.childNodes.length; n += 1) {
          i.push(_r2.childNodes[n]);
        }
      } else for (_s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || c).querySelectorAll(e.trim()) : [c.getElementById(e.trim().split("#")[1])], n = 0; n < _s.length; n += 1) {
        _s[n] && i.push(_s[n]);
      }
    } else if (e.nodeType || e === d || e === c) i.push(e);else if (e.length > 0 && e[0].nodeType) for (n = 0; n < e.length; n += 1) {
      i.push(e[n]);
    }
    return new u(i);
  }

  function h(e) {
    var t = [];

    for (var _i3 = 0; _i3 < e.length; _i3 += 1) {
      -1 === t.indexOf(e[_i3]) && t.push(e[_i3]);
    }

    return t;
  }

  p.fn = u.prototype, p.Class = u, p.Dom7 = u;
  "resize scroll".split(" ");
  var f = {
    addClass: function addClass(e) {
      if (void 0 === e) return this;
      var t = e.split(" ");

      for (var _e3 = 0; _e3 < t.length; _e3 += 1) {
        for (var _i4 = 0; _i4 < this.length; _i4 += 1) {
          void 0 !== this[_i4] && void 0 !== this[_i4].classList && this[_i4].classList.add(t[_e3]);
        }
      }

      return this;
    },
    removeClass: function removeClass(e) {
      var t = e.split(" ");

      for (var _e4 = 0; _e4 < t.length; _e4 += 1) {
        for (var _i5 = 0; _i5 < this.length; _i5 += 1) {
          void 0 !== this[_i5] && void 0 !== this[_i5].classList && this[_i5].classList.remove(t[_e4]);
        }
      }

      return this;
    },
    hasClass: function hasClass(e) {
      return !!this[0] && this[0].classList.contains(e);
    },
    toggleClass: function toggleClass(e) {
      var t = e.split(" ");

      for (var _e5 = 0; _e5 < t.length; _e5 += 1) {
        for (var _i6 = 0; _i6 < this.length; _i6 += 1) {
          void 0 !== this[_i6] && void 0 !== this[_i6].classList && this[_i6].classList.toggle(t[_e5]);
        }
      }

      return this;
    },
    attr: function attr(e, t) {
      if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;

      for (var _i7 = 0; _i7 < this.length; _i7 += 1) {
        if (2 === arguments.length) this[_i7].setAttribute(e, t);else for (var _t4 in e) {
          this[_i7][_t4] = e[_t4], this[_i7].setAttribute(_t4, e[_t4]);
        }
      }

      return this;
    },
    removeAttr: function removeAttr(e) {
      for (var _t5 = 0; _t5 < this.length; _t5 += 1) {
        this[_t5].removeAttribute(e);
      }

      return this;
    },
    data: function data(e, t) {
      var i;

      if (void 0 !== t) {
        for (var _n = 0; _n < this.length; _n += 1) {
          (i = this[_n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
        }

        return this;
      }

      if (i = this[0]) {
        if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];

        var _t6 = i.getAttribute("data-".concat(e));

        return _t6 || void 0;
      }
    },
    transform: function transform(e) {
      for (var _t7 = 0; _t7 < this.length; _t7 += 1) {
        var _i8 = this[_t7].style;
        _i8.webkitTransform = e, _i8.transform = e;
      }

      return this;
    },
    transition: function transition(e) {
      "string" != typeof e && (e = "".concat(e, "ms"));

      for (var _t8 = 0; _t8 < this.length; _t8 += 1) {
        var _i9 = this[_t8].style;
        _i9.webkitTransitionDuration = e, _i9.transitionDuration = e;
      }

      return this;
    },
    on: function on() {
      var _e7, _e8;

      for (var _len = arguments.length, e = new Array(_len), _key = 0; _key < _len; _key++) {
        e[_key] = arguments[_key];
      }

      var t = e[0],
          i = e[1],
          n = e[2],
          s = e[3];

      function r(e) {
        var t = e.target;
        if (!t) return;
        var s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), p(t).is(i)) n.apply(t, s);else {
          var _e6 = p(t).parents();

          for (var _t9 = 0; _t9 < _e6.length; _t9 += 1) {
            p(_e6[_t9]).is(i) && n.apply(_e6[_t9], s);
          }
        }
      }

      function a(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }

      "function" == typeof e[1] && ((_e7 = e, _e8 = _slicedToArray(_e7, 3), t = _e8[0], n = _e8[1], s = _e8[2], _e7), i = void 0), s || (s = !1);
      var o = t.split(" ");
      var l;

      for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
        var _t10 = this[_e9];
        if (i) for (l = 0; l < o.length; l += 1) {
          var _e10 = o[l];
          _t10.dom7LiveListeners || (_t10.dom7LiveListeners = {}), _t10.dom7LiveListeners[_e10] || (_t10.dom7LiveListeners[_e10] = []), _t10.dom7LiveListeners[_e10].push({
            listener: n,
            proxyListener: r
          }), _t10.addEventListener(_e10, r, s);
        } else for (l = 0; l < o.length; l += 1) {
          var _e11 = o[l];
          _t10.dom7Listeners || (_t10.dom7Listeners = {}), _t10.dom7Listeners[_e11] || (_t10.dom7Listeners[_e11] = []), _t10.dom7Listeners[_e11].push({
            listener: n,
            proxyListener: a
          }), _t10.addEventListener(_e11, a, s);
        }
      }

      return this;
    },
    off: function off() {
      var _e12, _e13;

      for (var _len2 = arguments.length, e = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        e[_key2] = arguments[_key2];
      }

      var t = e[0],
          i = e[1],
          n = e[2],
          s = e[3];
      "function" == typeof e[1] && ((_e12 = e, _e13 = _slicedToArray(_e12, 3), t = _e13[0], n = _e13[1], s = _e13[2], _e12), i = void 0), s || (s = !1);
      var r = t.split(" ");

      for (var _e14 = 0; _e14 < r.length; _e14 += 1) {
        var _t11 = r[_e14];

        for (var _e15 = 0; _e15 < this.length; _e15 += 1) {
          var _r3 = this[_e15];

          var _a2 = void 0;

          if (!i && _r3.dom7Listeners ? _a2 = _r3.dom7Listeners[_t11] : i && _r3.dom7LiveListeners && (_a2 = _r3.dom7LiveListeners[_t11]), _a2 && _a2.length) for (var _e16 = _a2.length - 1; _e16 >= 0; _e16 -= 1) {
            var _i10 = _a2[_e16];
            n && _i10.listener === n ? (_r3.removeEventListener(_t11, _i10.proxyListener, s), _a2.splice(_e16, 1)) : n && _i10.listener && _i10.listener.dom7proxy && _i10.listener.dom7proxy === n ? (_r3.removeEventListener(_t11, _i10.proxyListener, s), _a2.splice(_e16, 1)) : n || (_r3.removeEventListener(_t11, _i10.proxyListener, s), _a2.splice(_e16, 1));
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
          i = e[1];

      for (var _n2 = 0; _n2 < t.length; _n2 += 1) {
        var _s2 = t[_n2];

        for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
          var _n3 = this[_t12];

          var _r4 = void 0;

          try {
            _r4 = new d.CustomEvent(_s2, {
              detail: i,
              bubbles: !0,
              cancelable: !0
            });
          } catch (e) {
            (_r4 = c.createEvent("Event")).initEvent(_s2, !0, !0), _r4.detail = i;
          }

          _n3.dom7EventData = e.filter(function (e, t) {
            return t > 0;
          }), _n3.dispatchEvent(_r4), _n3.dom7EventData = [], delete _n3.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = ["webkitTransitionEnd", "transitionend"],
          i = this;
      var n;

      function s(r) {
        if (r.target === this) for (e.call(this, r), n = 0; n < t.length; n += 1) {
          i.off(t[n], s);
        }
      }

      if (e) for (n = 0; n < t.length; n += 1) {
        i.on(t[n], s);
      }
      return this;
    },
    outerWidth: function outerWidth(e) {
      if (this.length > 0) {
        if (e) {
          var _e17 = this.styles();

          return this[0].offsetWidth + parseFloat(_e17.getPropertyValue("margin-right")) + parseFloat(_e17.getPropertyValue("margin-left"));
        }

        return this[0].offsetWidth;
      }

      return null;
    },
    outerHeight: function outerHeight(e) {
      if (this.length > 0) {
        if (e) {
          var _e18 = this.styles();

          return this[0].offsetHeight + parseFloat(_e18.getPropertyValue("margin-top")) + parseFloat(_e18.getPropertyValue("margin-bottom"));
        }

        return this[0].offsetHeight;
      }

      return null;
    },
    offset: function offset() {
      if (this.length > 0) {
        var _e19 = this[0],
            _t13 = _e19.getBoundingClientRect(),
            _i11 = c.body,
            _n4 = _e19.clientTop || _i11.clientTop || 0,
            _s3 = _e19.clientLeft || _i11.clientLeft || 0,
            _r5 = _e19 === d ? d.scrollY : _e19.scrollTop,
            _a3 = _e19 === d ? d.scrollX : _e19.scrollLeft;

        return {
          top: _t13.top + _r5 - _n4,
          left: _t13.left + _a3 - _s3
        };
      }

      return null;
    },
    css: function css(e, t) {
      var i;

      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (i = 0; i < this.length; i += 1) {
            for (var _t14 in e) {
              this[i].style[_t14] = e[_t14];
            }
          }

          return this;
        }

        if (this[0]) return d.getComputedStyle(this[0], null).getPropertyValue(e);
      }

      if (2 === arguments.length && "string" == typeof e) {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[e] = t;
        }

        return this;
      }

      return this;
    },
    each: function each(e) {
      if (!e) return this;

      for (var _t15 = 0; _t15 < this.length; _t15 += 1) {
        if (!1 === e.call(this[_t15], _t15, this[_t15])) return this;
      }

      return this;
    },
    html: function html(e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;

      for (var _t16 = 0; _t16 < this.length; _t16 += 1) {
        this[_t16].innerHTML = e;
      }

      return this;
    },
    text: function text(e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;

      for (var _t17 = 0; _t17 < this.length; _t17 += 1) {
        this[_t17].textContent = e;
      }

      return this;
    },
    is: function is(e) {
      var t = this[0];
      var i, n;
      if (!t || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (t.matches) return t.matches(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);

        for (i = p(e), n = 0; n < i.length; n += 1) {
          if (i[n] === t) return !0;
        }

        return !1;
      }

      if (e === c) return t === c;
      if (e === d) return t === d;

      if (e.nodeType || e instanceof u) {
        for (i = e.nodeType ? [e] : e, n = 0; n < i.length; n += 1) {
          if (i[n] === t) return !0;
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
      var i;
      return new u(e > t - 1 ? [] : e < 0 ? (i = t + e) < 0 ? [] : [this[i]] : [this[e]]);
    },
    append: function append() {
      var t;

      for (var _i12 = 0; _i12 < arguments.length; _i12 += 1) {
        t = _i12 < 0 || arguments.length <= _i12 ? undefined : arguments[_i12];

        for (var _e20 = 0; _e20 < this.length; _e20 += 1) {
          if ("string" == typeof t) {
            var _i13 = c.createElement("div");

            for (_i13.innerHTML = t; _i13.firstChild;) {
              this[_e20].appendChild(_i13.firstChild);
            }
          } else if (t instanceof u) for (var _i14 = 0; _i14 < t.length; _i14 += 1) {
            this[_e20].appendChild(t[_i14]);
          } else this[_e20].appendChild(t);
        }
      }

      return this;
    },
    prepend: function prepend(e) {
      var t, i;

      for (t = 0; t < this.length; t += 1) {
        if ("string" == typeof e) {
          var _n5 = c.createElement("div");

          for (_n5.innerHTML = e, i = _n5.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(_n5.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof u) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e) ? new u([this[0].nextElementSibling]) : new u([]) : this[0].nextElementSibling ? new u([this[0].nextElementSibling]) : new u([]) : new u([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var i = this[0];
      if (!i) return new u([]);

      for (; i.nextElementSibling;) {
        var _n6 = i.nextElementSibling;
        e ? p(_n6).is(e) && t.push(_n6) : t.push(_n6), i = _n6;
      }

      return new u(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t18 = this[0];
        return e ? _t18.previousElementSibling && p(_t18.previousElementSibling).is(e) ? new u([_t18.previousElementSibling]) : new u([]) : _t18.previousElementSibling ? new u([_t18.previousElementSibling]) : new u([]);
      }

      return new u([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var i = this[0];
      if (!i) return new u([]);

      for (; i.previousElementSibling;) {
        var _n7 = i.previousElementSibling;
        e ? p(_n7).is(e) && t.push(_n7) : t.push(_n7), i = _n7;
      }

      return new u(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _i15 = 0; _i15 < this.length; _i15 += 1) {
        null !== this[_i15].parentNode && (e ? p(this[_i15].parentNode).is(e) && t.push(this[_i15].parentNode) : t.push(this[_i15].parentNode));
      }

      return p(h(t));
    },
    parents: function parents(e) {
      var t = [];

      for (var _i16 = 0; _i16 < this.length; _i16 += 1) {
        var _n8 = this[_i16].parentNode;

        for (; _n8;) {
          e ? p(_n8).is(e) && t.push(_n8) : t.push(_n8), _n8 = _n8.parentNode;
        }
      }

      return p(h(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new u([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _i17 = 0; _i17 < this.length; _i17 += 1) {
        var _n9 = this[_i17].querySelectorAll(e);

        for (var _e21 = 0; _e21 < _n9.length; _e21 += 1) {
          t.push(_n9[_e21]);
        }
      }

      return new u(t);
    },
    children: function children(e) {
      var t = [];

      for (var _i18 = 0; _i18 < this.length; _i18 += 1) {
        var _n10 = this[_i18].childNodes;

        for (var _i19 = 0; _i19 < _n10.length; _i19 += 1) {
          e ? 1 === _n10[_i19].nodeType && p(_n10[_i19]).is(e) && t.push(_n10[_i19]) : 1 === _n10[_i19].nodeType && t.push(_n10[_i19]);
        }
      }

      return new u(h(t));
    },
    remove: function remove() {
      for (var _e22 = 0; _e22 < this.length; _e22 += 1) {
        this[_e22].parentNode && this[_e22].parentNode.removeChild(this[_e22]);
      }

      return this;
    },
    add: function add() {
      var t = this;
      var i, n;

      for (var _len4 = arguments.length, e = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        e[_key4] = arguments[_key4];
      }

      for (i = 0; i < e.length; i += 1) {
        var _s4 = p(e[i]);

        for (n = 0; n < _s4.length; n += 1) {
          t[t.length] = _s4[n], t.length += 1;
        }
      }

      return t;
    },
    styles: function styles() {
      return this[0] ? d.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(f).forEach(function (e) {
    p.fn[e] = f[e];
  });

  var m = {
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
      var i, n, s;
      var r = d.getComputedStyle(e, null);
      return d.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), s = new d.WebKitCSSMatrix("none" === n ? "" : n)) : i = (s = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = d.WebKitCSSMatrix ? s.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = d.WebKitCSSMatrix ? s.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0;
    },
    parseUrlQuery: function parseUrlQuery(e) {
      var t = {};
      var i,
          n,
          s,
          r,
          a = e || d.location.href;
      if ("string" == typeof a && a.length) for (r = (n = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, i = 0; i < r; i += 1) {
        s = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(s[0])] = void 0 === s[1] ? void 0 : decodeURIComponent(s[1]) || "";
      }
      return t;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function extend() {
      var t = Object(arguments.length <= 0 ? undefined : arguments[0]);

      for (var _i20 = 1; _i20 < arguments.length; _i20 += 1) {
        var _n11 = _i20 < 0 || arguments.length <= _i20 ? undefined : arguments[_i20];

        if (null != _n11) {
          var _e23 = Object.keys(Object(_n11));

          for (var _i21 = 0, _s5 = _e23.length; _i21 < _s5; _i21 += 1) {
            var _s6 = _e23[_i21],
                _r6 = Object.getOwnPropertyDescriptor(_n11, _s6);

            void 0 !== _r6 && _r6.enumerable && (m.isObject(t[_s6]) && m.isObject(_n11[_s6]) ? m.extend(t[_s6], _n11[_s6]) : !m.isObject(t[_s6]) && m.isObject(_n11[_s6]) ? (t[_s6] = {}, m.extend(t[_s6], _n11[_s6])) : t[_s6] = _n11[_s6]);
          }
        }
      }

      return t;
    }
  },
      v = function () {
    var e = c.createElement("div");
    return {
      touch: d.Modernizr && !0 === d.Modernizr.touch || !!(d.navigator.maxTouchPoints > 0 || "ontouchstart" in d || d.DocumentTouch && c instanceof d.DocumentTouch),
      pointerEvents: !!(d.navigator.pointerEnabled || d.PointerEvent || "maxTouchPoints" in d.navigator && d.navigator.maxTouchPoints > 0),
      prefixedPointerEvents: !!d.navigator.msPointerEnabled,
      transition: function () {
        var t = e.style;
        return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
      }(),
      transforms3d: d.Modernizr && !0 === d.Modernizr.csstransforms3d || function () {
        var t = e.style;
        return "webkitPerspective" in t || "MozPerspective" in t || "OPerspective" in t || "MsPerspective" in t || "perspective" in t;
      }(),
      flexbox: function () {
        var t = e.style,
            i = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" ");

        for (var _e24 = 0; _e24 < i.length; _e24 += 1) {
          if (i[_e24] in t) return !0;
        }

        return !1;
      }(),
      observer: "MutationObserver" in d || "WebkitMutationObserver" in d,
      passiveListener: function () {
        var e = !1;

        try {
          var _t19 = Object.defineProperty({}, "passive", {
            get: function get() {
              e = !0;
            }
          });

          d.addEventListener("testPassiveListener", null, _t19);
        } catch (e) {}

        return e;
      }(),
      gestures: "ongesturestart" in d
    };
  }(),
      g = {
    isIE: !!d.navigator.userAgent.match(/Trident/g) || !!d.navigator.userAgent.match(/MSIE/g),
    isEdge: !!d.navigator.userAgent.match(/Edge/g),
    isSafari: function () {
      var e = d.navigator.userAgent.toLowerCase();
      return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(d.navigator.userAgent)
  };

  var y =
  /*#__PURE__*/
  function () {
    function y() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, y);

      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    }

    _createClass(y, [{
      key: "on",
      value: function on(e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;
        var s = i ? "unshift" : "push";
        return e.split(" ").forEach(function (e) {
          n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t);
        }), n;
      }
    }, {
      key: "once",
      value: function once(e, t, i) {
        var n = this;
        if ("function" != typeof t) return n;

        function s() {
          for (var _len5 = arguments.length, i = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            i[_key5] = arguments[_key5];
          }

          t.apply(n, i), n.off(e, s), s.f7proxy && delete s.f7proxy;
        }

        return s.f7proxy = t, n.on(e, s, i);
      }
    }, {
      key: "off",
      value: function off(e, t) {
        var i = this;
        return i.eventsListeners ? (e.split(" ").forEach(function (e) {
          void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].length && i.eventsListeners[e].forEach(function (n, s) {
            (n === t || n.f7proxy && n.f7proxy === t) && i.eventsListeners[e].splice(s, 1);
          });
        }), i) : i;
      }
    }, {
      key: "emit",
      value: function emit() {
        var t = this;
        if (!t.eventsListeners) return t;
        var i, n, s;

        for (var _len6 = arguments.length, e = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
          e[_key6] = arguments[_key6];
        }

        return "string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), s = t) : (i = e[0].events, n = e[0].data, s = e[0].context || t), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
          if (t.eventsListeners && t.eventsListeners[e]) {
            var _i22 = [];
            t.eventsListeners[e].forEach(function (e) {
              _i22.push(e);
            }), _i22.forEach(function (e) {
              e.apply(s, n);
            });
          }
        }), t;
      }
    }, {
      key: "useModulesParams",
      value: function useModulesParams(e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var n = t.modules[i];
          n.params && m.extend(e, n.params);
        });
      }
    }, {
      key: "useModules",
      value: function useModules() {
        var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
          var n = t.modules[i],
              s = e[i] || {};
          n.instance && Object.keys(n.instance).forEach(function (e) {
            var i = n.instance[e];
            t[e] = "function" == typeof i ? i.bind(t) : i;
          }), n.on && t.on && Object.keys(n.on).forEach(function (e) {
            t.on(e, n.on[e]);
          }), n.create && n.create.bind(t)(s);
        });
      }
    }], [{
      key: "installModule",
      value: function installModule(e) {
        var i = this;
        i.prototype.modules || (i.prototype.modules = {});
        var n = e.name || "".concat(Object.keys(i.prototype.modules).length, "_").concat(m.now());

        for (var _len7 = arguments.length, t = new Array(_len7 > 1 ? _len7 - 1 : 0), _key7 = 1; _key7 < _len7; _key7++) {
          t[_key7 - 1] = arguments[_key7];
        }

        return i.prototype.modules[n] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
          i.prototype[t] = e.proto[t];
        }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
          i[t] = e["static"][t];
        }), e.install && e.install.apply(i, t), i;
      }
    }, {
      key: "use",
      value: function use(e) {
        var i = this;

        for (var _len8 = arguments.length, t = new Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
          t[_key8 - 1] = arguments[_key8];
        }

        return Array.isArray(e) ? (e.forEach(function (e) {
          return i.installModule(e);
        }), i) : i.installModule.apply(i, [e].concat(t));
      }
    }, {
      key: "components",
      set: function set(e) {
        this.use && this.use(e);
      }
    }]);

    return y;
  }();

  var b = {
    updateSize: function updateSize() {
      var e = this;
      var t, i;
      var n = e.$el;
      t = void 0 !== e.params.width ? e.params.width : n[0].clientWidth, i = void 0 !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), i = i - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), m.extend(e, {
        width: t,
        height: i,
        size: e.isHorizontal() ? t : i
      }));
    },
    updateSlides: function updateSlides() {
      var e = this,
          t = e.params,
          i = e.$wrapperEl,
          n = e.size,
          s = e.rtlTranslate,
          r = e.wrongRTL,
          a = e.virtual && t.virtual.enabled,
          o = a ? e.virtual.slides.length : e.slides.length,
          l = i.children(".".concat(e.params.slideClass)),
          c = a ? e.virtual.slides.length : l.length;
      var u = [];
      var p = [],
          h = [];
      var f = t.slidesOffsetBefore;
      "function" == typeof f && (f = t.slidesOffsetBefore.call(e));
      var g = t.slidesOffsetAfter;
      "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
      var y = e.snapGrid.length,
          b = e.snapGrid.length;
      var w,
          x,
          T = t.spaceBetween,
          E = -f,
          C = 0,
          S = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * n), e.virtualSize = -T, s ? l.css({
        marginLeft: "",
        marginTop: ""
      }) : l.css({
        marginRight: "",
        marginBottom: ""
      }), t.slidesPerColumn > 1 && (w = Math.floor(c / t.slidesPerColumn) === c / e.params.slidesPerColumn ? c : Math.ceil(c / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (w = Math.max(w, t.slidesPerView * t.slidesPerColumn)));
      var k = t.slidesPerColumn,
          $ = w / k,
          M = Math.floor(c / t.slidesPerColumn);

      for (var _i23 = 0; _i23 < c; _i23 += 1) {
        x = 0;

        var _s7 = l.eq(_i23);

        if (t.slidesPerColumn > 1) {
          var _n12 = void 0,
              _r7 = void 0,
              _a4 = void 0;

          "column" === t.slidesPerColumnFill ? (_a4 = _i23 - (_r7 = Math.floor(_i23 / k)) * k, (_r7 > M || _r7 === M && _a4 === k - 1) && (_a4 += 1) >= k && (_a4 = 0, _r7 += 1), _n12 = _r7 + _a4 * w / k, _s7.css({
            "-webkit-box-ordinal-group": _n12,
            "-moz-box-ordinal-group": _n12,
            "-ms-flex-order": _n12,
            "-webkit-order": _n12,
            order: _n12
          })) : _r7 = _i23 - (_a4 = Math.floor(_i23 / $)) * $, _s7.css("margin-".concat(e.isHorizontal() ? "top" : "left"), 0 !== _a4 && t.spaceBetween && "".concat(t.spaceBetween, "px")).attr("data-swiper-column", _r7).attr("data-swiper-row", _a4);
        }

        if ("none" !== _s7.css("display")) {
          if ("auto" === t.slidesPerView) {
            var _i24 = d.getComputedStyle(_s7[0], null),
                _n13 = _s7[0].style.transform,
                _r8 = _s7[0].style.webkitTransform;

            if (_n13 && (_s7[0].style.transform = "none"), _r8 && (_s7[0].style.webkitTransform = "none"), t.roundLengths) x = e.isHorizontal() ? _s7.outerWidth(!0) : _s7.outerHeight(!0);else if (e.isHorizontal()) {
              var _e25 = parseFloat(_i24.getPropertyValue("width")),
                  _t20 = parseFloat(_i24.getPropertyValue("padding-left")),
                  _n14 = parseFloat(_i24.getPropertyValue("padding-right")),
                  _s8 = parseFloat(_i24.getPropertyValue("margin-left")),
                  _r9 = parseFloat(_i24.getPropertyValue("margin-right")),
                  _a5 = _i24.getPropertyValue("box-sizing");

              x = _a5 && "border-box" === _a5 ? _e25 + _s8 + _r9 : _e25 + _t20 + _n14 + _s8 + _r9;
            } else {
              var _e26 = parseFloat(_i24.getPropertyValue("height")),
                  _t21 = parseFloat(_i24.getPropertyValue("padding-top")),
                  _n15 = parseFloat(_i24.getPropertyValue("padding-bottom")),
                  _s9 = parseFloat(_i24.getPropertyValue("margin-top")),
                  _r10 = parseFloat(_i24.getPropertyValue("margin-bottom")),
                  _a6 = _i24.getPropertyValue("box-sizing");

              x = _a6 && "border-box" === _a6 ? _e26 + _s9 + _r10 : _e26 + _t21 + _n15 + _s9 + _r10;
            }
            _n13 && (_s7[0].style.transform = _n13), _r8 && (_s7[0].style.webkitTransform = _r8), t.roundLengths && (x = Math.floor(x));
          } else x = (n - (t.slidesPerView - 1) * T) / t.slidesPerView, t.roundLengths && (x = Math.floor(x)), l[_i23] && (e.isHorizontal() ? l[_i23].style.width = "".concat(x, "px") : l[_i23].style.height = "".concat(x, "px"));

          l[_i23] && (l[_i23].swiperSlideSize = x), h.push(x), t.centeredSlides ? (E = E + x / 2 + C / 2 + T, 0 === C && 0 !== _i23 && (E = E - n / 2 - T), 0 === _i23 && (E = E - n / 2 - T), Math.abs(E) < .001 && (E = 0), t.roundLengths && (E = Math.floor(E)), S % t.slidesPerGroup == 0 && u.push(E), p.push(E)) : (t.roundLengths && (E = Math.floor(E)), S % t.slidesPerGroup == 0 && u.push(E), p.push(E), E = E + x + T), e.virtualSize += x + T, C = x, S += 1;
        }
      }

      var P;

      if (e.virtualSize = Math.max(e.virtualSize, n) + g, s && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }), v.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }) : i.css({
        height: "".concat(e.virtualSize + t.spaceBetween, "px")
      })), t.slidesPerColumn > 1 && (e.virtualSize = (x + t.spaceBetween) * w, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }) : i.css({
        height: "".concat(e.virtualSize + t.spaceBetween, "px")
      }), t.centeredSlides)) {
        P = [];

        for (var _i25 = 0; _i25 < u.length; _i25 += 1) {
          var _n16 = u[_i25];
          t.roundLengths && (_n16 = Math.floor(_n16)), u[_i25] < e.virtualSize + u[0] && P.push(_n16);
        }

        u = P;
      }

      if (!t.centeredSlides) {
        P = [];

        for (var _i26 = 0; _i26 < u.length; _i26 += 1) {
          var _s10 = u[_i26];
          t.roundLengths && (_s10 = Math.floor(_s10)), u[_i26] <= e.virtualSize - n && P.push(_s10);
        }

        u = P, Math.floor(e.virtualSize - n) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - n);
      }

      if (0 === u.length && (u = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? s ? l.css({
        marginLeft: "".concat(T, "px")
      }) : l.css({
        marginRight: "".concat(T, "px")
      }) : l.css({
        marginBottom: "".concat(T, "px")
      })), t.centerInsufficientSlides) {
        var _e27 = 0;

        if (h.forEach(function (i) {
          _e27 += i + (t.spaceBetween ? t.spaceBetween : 0);
        }), (_e27 -= t.spaceBetween) < n) {
          var _t22 = (n - _e27) / 2;

          u.forEach(function (e, i) {
            u[i] = e - _t22;
          }), p.forEach(function (e, i) {
            p[i] = e + _t22;
          });
        }
      }

      m.extend(e, {
        slides: l,
        snapGrid: u,
        slidesGrid: p,
        slidesSizesGrid: h
      }), c !== o && e.emit("slidesLengthChange"), u.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== b && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
    },
    updateAutoHeight: function updateAutoHeight(e) {
      var t = this,
          i = [];
      var n,
          s = 0;
      if ("number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed), "auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
        var _e28 = t.activeIndex + n;

        if (_e28 > t.slides.length) break;
        i.push(t.slides.eq(_e28)[0]);
      } else i.push(t.slides.eq(t.activeIndex)[0]);

      for (n = 0; n < i.length; n += 1) {
        if (void 0 !== i[n]) {
          var _e29 = i[n].offsetHeight;
          s = _e29 > s ? _e29 : s;
        }
      }

      s && t.$wrapperEl.css("height", "".concat(s, "px"));
    },
    updateSlidesOffset: function updateSlidesOffset() {
      var e = this,
          t = e.slides;

      for (var _i27 = 0; _i27 < t.length; _i27 += 1) {
        t[_i27].swiperSlideOffset = e.isHorizontal() ? t[_i27].offsetLeft : t[_i27].offsetTop;
      }
    },
    updateSlidesProgress: function updateSlidesProgress() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var t = this,
          i = t.params,
          n = t.slides,
          s = t.rtlTranslate;
      if (0 === n.length) return;
      void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
      var r = -e;
      s && (r = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e30 = 0; _e30 < n.length; _e30 += 1) {
        var _a7 = n[_e30],
            _o = (r + (i.centeredSlides ? t.minTranslate() : 0) - _a7.swiperSlideOffset) / (_a7.swiperSlideSize + i.spaceBetween);

        if (i.watchSlidesVisibility) {
          var _s11 = -(r - _a7.swiperSlideOffset),
              _o2 = _s11 + t.slidesSizesGrid[_e30];

          (_s11 >= 0 && _s11 < t.size || _o2 > 0 && _o2 <= t.size || _s11 <= 0 && _o2 >= t.size) && (t.visibleSlides.push(_a7), t.visibleSlidesIndexes.push(_e30), n.eq(_e30).addClass(i.slideVisibleClass));
        }

        _a7.progress = s ? -_o : _o;
      }

      t.visibleSlides = p(t.visibleSlides);
    },
    updateProgress: function updateProgress() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var t = this,
          i = t.params,
          n = t.maxTranslate() - t.minTranslate();
      var s = t.progress,
          r = t.isBeginning,
          a = t.isEnd;
      var o = r,
          l = a;
      0 === n ? (s = 0, r = !0, a = !0) : (r = (s = (e - t.minTranslate()) / n) <= 0, a = s >= 1), m.extend(t, {
        progress: s,
        isBeginning: r,
        isEnd: a
      }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), r && !o && t.emit("reachBeginning toEdge"), a && !l && t.emit("reachEnd toEdge"), (o && !r || l && !a) && t.emit("fromEdge"), t.emit("progress", s);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          i = e.params,
          n = e.$wrapperEl,
          s = e.activeIndex,
          r = e.realIndex,
          a = e.virtual && i.virtual.enabled;
      var o;
      t.removeClass("".concat(i.slideActiveClass, " ").concat(i.slideNextClass, " ").concat(i.slidePrevClass, " ").concat(i.slideDuplicateActiveClass, " ").concat(i.slideDuplicateNextClass, " ").concat(i.slideDuplicatePrevClass)), (o = a ? e.$wrapperEl.find(".".concat(i.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]")) : t.eq(s)).addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(i.slideDuplicateActiveClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(r, "\"]")).addClass(i.slideDuplicateActiveClass));
      var l = o.nextAll(".".concat(i.slideClass)).eq(0).addClass(i.slideNextClass);
      i.loop && 0 === l.length && (l = t.eq(0)).addClass(i.slideNextClass);
      var c = o.prevAll(".".concat(i.slideClass)).eq(0).addClass(i.slidePrevClass);
      i.loop && 0 === c.length && (c = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (l.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"), "\"]")).addClass(i.slideDuplicateNextClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(l.attr("data-swiper-slide-index"), "\"]")).addClass(i.slideDuplicateNextClass), c.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(c.attr("data-swiper-slide-index"), "\"]")).addClass(i.slideDuplicatePrevClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(c.attr("data-swiper-slide-index"), "\"]")).addClass(i.slideDuplicatePrevClass));
    },
    updateActiveIndex: function updateActiveIndex(e) {
      var t = this,
          i = t.rtlTranslate ? t.translate : -t.translate,
          n = t.slidesGrid,
          s = t.snapGrid,
          r = t.params,
          a = t.activeIndex,
          o = t.realIndex,
          l = t.snapIndex;
      var c,
          d = e;

      if (void 0 === d) {
        for (var _e31 = 0; _e31 < n.length; _e31 += 1) {
          void 0 !== n[_e31 + 1] ? i >= n[_e31] && i < n[_e31 + 1] - (n[_e31 + 1] - n[_e31]) / 2 ? d = _e31 : i >= n[_e31] && i < n[_e31 + 1] && (d = _e31 + 1) : i >= n[_e31] && (d = _e31);
        }

        r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
      }

      if ((c = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(d / r.slidesPerGroup)) >= s.length && (c = s.length - 1), d === a) return void (c !== l && (t.snapIndex = c, t.emit("snapIndexChange")));
      var u = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10);
      m.extend(t, {
        snapIndex: c,
        realIndex: u,
        previousIndex: a,
        activeIndex: d
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== u && t.emit("realIndexChange"), t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          i = t.params,
          n = p(e.target).closest(".".concat(i.slideClass))[0];
      var s = !1;
      if (n) for (var _e32 = 0; _e32 < t.slides.length; _e32 += 1) {
        t.slides[_e32] === n && (s = !0);
      }
      if (!n || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(p(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = p(n).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var w = {
    getTranslate: function getTranslate() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
      var t = this.params,
          i = this.rtlTranslate,
          n = this.translate,
          s = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -n : n;
      var r = m.getTranslate(s[0], e);
      return i && (r = -r), r || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var i = this,
          n = i.rtlTranslate,
          s = i.params,
          r = i.$wrapperEl,
          a = i.progress;
      var o,
          l = 0,
          c = 0;
      i.isHorizontal() ? l = n ? -e : e : c = e, s.roundLengths && (l = Math.floor(l), c = Math.floor(c)), s.virtualTranslate || (v.transforms3d ? r.transform("translate3d(".concat(l, "px, ").concat(c, "px, 0px)")) : r.transform("translate(".concat(l, "px, ").concat(c, "px)"))), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c;
      var d = i.maxTranslate() - i.minTranslate();
      (o = 0 === d ? 0 : (e - i.minTranslate()) / d) !== a && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var x = {
    setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var i = this,
          n = i.activeIndex,
          s = i.params,
          r = i.previousIndex;
      s.autoHeight && i.updateAutoHeight();
      var a = t;

      if (a || (a = n > r ? "next" : n < r ? "prev" : "reset"), i.emit("transitionStart"), e && n !== r) {
        if ("reset" === a) return void i.emit("slideResetTransitionStart");
        i.emit("slideChangeTransitionStart"), "next" === a ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function transitionEnd() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var i = this,
          n = i.activeIndex,
          s = i.previousIndex;
      i.animating = !1, i.setTransition(0);
      var r = t;

      if (r || (r = n > s ? "next" : n < s ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== s) {
        if ("reset" === r) return void i.emit("slideResetTransitionEnd");
        i.emit("slideChangeTransitionEnd"), "next" === r ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd");
      }
    }
  };
  var T = {
    slideTo: function slideTo() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var n = arguments.length > 3 ? arguments[3] : undefined;
      var s = this;
      var r = e;
      r < 0 && (r = 0);
      var a = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          c = s.previousIndex,
          d = s.activeIndex,
          u = s.rtlTranslate;
      if (s.animating && a.preventInteractionOnTransition) return !1;
      var p = Math.floor(r / a.slidesPerGroup);
      p >= o.length && (p = o.length - 1), (d || a.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
      var h = -o[p];
      if (s.updateProgress(h), a.normalizeSlideIndex) for (var _e33 = 0; _e33 < l.length; _e33 += 1) {
        -Math.floor(100 * h) >= Math.floor(100 * l[_e33]) && (r = _e33);
      }

      if (s.initialized && r !== d) {
        if (!s.allowSlideNext && h < s.translate && h < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && h > s.translate && h > s.maxTranslate() && (d || 0) !== r) return !1;
      }

      var f;
      return f = r > d ? "next" : r < d ? "prev" : "reset", u && -h === s.translate || !u && h === s.translate ? (s.updateActiveIndex(r), a.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== a.effect && s.setTranslate(h), "reset" !== f && (s.transitionStart(i, f), s.transitionEnd(i, f)), !1) : (0 !== t && v.transition ? (s.setTransition(t), s.setTranslate(h), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, f));
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(h), s.updateActiveIndex(r), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, f), s.transitionEnd(i, f)), !0);
    },
    slideToLoop: function slideToLoop() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var n = arguments.length > 3 ? arguments[3] : undefined;
      var s = this;
      var r = e;
      return s.params.loop && (r += s.loopedSlides), s.slideTo(r, t, i, n);
    },
    slideNext: function slideNext() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      var n = this,
          s = n.params,
          r = n.animating;
      return s.loop ? !r && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i);
    },
    slidePrev: function slidePrev() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      var n = this,
          s = n.params,
          r = n.animating,
          a = n.snapGrid,
          o = n.slidesGrid,
          l = n.rtlTranslate;

      if (s.loop) {
        if (r) return !1;
        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var d = c(l ? n.translate : -n.translate),
          u = a.map(function (e) {
        return c(e);
      }),
          p = (o.map(function (e) {
        return c(e);
      }), a[u.indexOf(d)], a[u.indexOf(d) - 1]);
      var h;
      return void 0 !== p && (h = o.indexOf(p)) < 0 && (h = n.activeIndex - 1), n.slideTo(h, e, t, i);
    },
    slideReset: function slideReset() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      return this.slideTo(this.activeIndex, e, t, i);
    },
    slideToClosest: function slideToClosest() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      var n = this;
      var s = n.activeIndex;
      var r = Math.floor(s / n.params.slidesPerGroup);

      if (r < n.snapGrid.length - 1) {
        var _e34 = n.rtlTranslate ? n.translate : -n.translate,
            _t23 = n.snapGrid[r];

        _e34 - _t23 > (n.snapGrid[r + 1] - _t23) / 2 && (s = n.params.slidesPerGroup);
      }

      return n.slideTo(s, e, t, i);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          i = e.$wrapperEl,
          n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var s,
          r = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        s = parseInt(p(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - n / 2 || r > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), r = i.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), m.nextTick(function () {
          e.slideTo(r);
        })) : e.slideTo(r) : r > e.slides.length - n ? (e.loopFix(), r = i.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), m.nextTick(function () {
          e.slideTo(r);
        })) : e.slideTo(r);
      } else e.slideTo(r);
    }
  };
  var E = {
    loopCreate: function loopCreate() {
      var e = this,
          t = e.params,
          i = e.$wrapperEl;
      i.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
      var n = i.children(".".concat(t.slideClass));

      if (t.loopFillGroupWithBlank) {
        var _e35 = t.slidesPerGroup - n.length % t.slidesPerGroup;

        if (_e35 !== t.slidesPerGroup) {
          for (var _n17 = 0; _n17 < _e35; _n17 += 1) {
            var _e36 = p(c.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));

            i.append(_e36);
          }

          n = i.children(".".concat(t.slideClass));
        }
      }

      "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = n.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
      var s = [],
          r = [];
      n.each(function (t, i) {
        var a = p(i);
        t < e.loopedSlides && r.push(i), t < n.length && t >= n.length - e.loopedSlides && s.push(i), a.attr("data-swiper-slide-index", t);
      });

      for (var _e37 = 0; _e37 < r.length; _e37 += 1) {
        i.append(p(r[_e37].cloneNode(!0)).addClass(t.slideDuplicateClass));
      }

      for (var _e38 = s.length - 1; _e38 >= 0; _e38 -= 1) {
        i.prepend(p(s[_e38].cloneNode(!0)).addClass(t.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this,
          t = e.params,
          i = e.activeIndex,
          n = e.slides,
          s = e.loopedSlides,
          r = e.allowSlidePrev,
          a = e.allowSlideNext,
          o = e.snapGrid,
          l = e.rtlTranslate;
      var c;
      e.allowSlidePrev = !0, e.allowSlideNext = !0;
      var d = -o[i] - e.getTranslate();

      if (i < s) {
        c = n.length - 3 * s + i, c += s, e.slideTo(c, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if ("auto" === t.slidesPerView && i >= 2 * s || i >= n.length - s) {
        c = -n.length + i + s, c += s, e.slideTo(c, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
      }

      e.allowSlidePrev = r, e.allowSlideNext = a;
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var C = {
    setGrabCursor: function setGrabCursor(e) {
      if (v.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
      var t = this.el;
      t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
    },
    unsetGrabCursor: function unsetGrabCursor() {
      v.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };
  var S = {
    appendSlide: function appendSlide(e) {
      var t = this,
          i = t.$wrapperEl,
          n = t.params;
      if (n.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t24 = 0; _t24 < e.length; _t24 += 1) {
        e[_t24] && i.append(e[_t24]);
      } else i.append(e);
      n.loop && t.loopCreate(), n.observer && v.observer || t.update();
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          i = t.params,
          n = t.$wrapperEl,
          s = t.activeIndex;
      i.loop && t.loopDestroy();
      var r = s + 1;

      if ("object" == _typeof(e) && "length" in e) {
        for (var _t25 = 0; _t25 < e.length; _t25 += 1) {
          e[_t25] && n.prepend(e[_t25]);
        }

        r = s + e.length;
      } else n.prepend(e);

      i.loop && t.loopCreate(), i.observer && v.observer || t.update(), t.slideTo(r, 0, !1);
    },
    addSlide: function addSlide(e, t) {
      var i = this,
          n = i.$wrapperEl,
          s = i.params,
          r = i.activeIndex;
      var a = r;
      s.loop && (a -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(".".concat(s.slideClass)));
      var o = i.slides.length;
      if (e <= 0) return void i.prependSlide(t);
      if (e >= o) return void i.appendSlide(t);
      var l = a > e ? a + 1 : a;
      var c = [];

      for (var _t26 = o - 1; _t26 >= e; _t26 -= 1) {
        var _e39 = i.slides.eq(_t26);

        _e39.remove(), c.unshift(_e39);
      }

      if ("object" == _typeof(t) && "length" in t) {
        for (var _e40 = 0; _e40 < t.length; _e40 += 1) {
          t[_e40] && n.append(t[_e40]);
        }

        l = a > e ? a + t.length : a;
      } else n.append(t);

      for (var _e41 = 0; _e41 < c.length; _e41 += 1) {
        n.append(c[_e41]);
      }

      s.loop && i.loopCreate(), s.observer && v.observer || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
    },
    removeSlide: function removeSlide(e) {
      var t = this,
          i = t.params,
          n = t.$wrapperEl,
          s = t.activeIndex;
      var r = s;
      i.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(".".concat(i.slideClass)));
      var a,
          o = r;

      if ("object" == _typeof(e) && "length" in e) {
        for (var _i28 = 0; _i28 < e.length; _i28 += 1) {
          a = e[_i28], t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1);
        }

        o = Math.max(o, 0);
      } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < o && (o -= 1), o = Math.max(o, 0);

      i.loop && t.loopCreate(), i.observer && v.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
    },
    removeAllSlides: function removeAllSlides() {
      var e = this,
          t = [];

      for (var _i29 = 0; _i29 < e.slides.length; _i29 += 1) {
        t.push(_i29);
      }

      e.removeSlide(t);
    }
  };

  var k = function () {
    var e = d.navigator.userAgent,
        t = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: d.cordova || d.phonegap,
      phonegap: d.cordova || d.phonegap
    },
        i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        s = e.match(/(iPad).*OS\s([\d_]+)/),
        r = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        a = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (s || a || r) && (t.os = "ios", t.ios = !0), a && !r && (t.osVersion = a[2].replace(/_/g, "."), t.iphone = !0), s && (t.osVersion = s[2].replace(/_/g, "."), t.ipad = !0), r && (t.osVersion = r[3] ? r[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (a || s || r) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var _e42 = t.osVersion.split("."),
          _i30 = c.querySelector('meta[name="viewport"]');

      t.minimalUi = !t.webView && (r || a) && (1 * _e42[0] == 7 ? 1 * _e42[1] >= 1 : 1 * _e42[0] > 7) && _i30 && _i30.getAttribute("content").indexOf("minimal-ui") >= 0;
    }

    return t.pixelRatio = d.devicePixelRatio || 1, t;
  }();

  function $(e) {
    var t = this,
        i = t.touchEventsData,
        n = t.params,
        s = t.touches;
    if (t.animating && n.preventInteractionOnTransition) return;
    var r = e;
    if (r.originalEvent && (r = r.originalEvent), i.isTouchEvent = "touchstart" === r.type, !i.isTouchEvent && "which" in r && 3 === r.which) return;
    if (!i.isTouchEvent && "button" in r && r.button > 0) return;
    if (i.isTouched && i.isMoved) return;
    if (n.noSwiping && p(r.target).closest(n.noSwipingSelector ? n.noSwipingSelector : ".".concat(n.noSwipingClass))[0]) return void (t.allowClick = !0);
    if (n.swipeHandler && !p(r).closest(n.swipeHandler)[0]) return;
    s.currentX = "touchstart" === r.type ? r.targetTouches[0].pageX : r.pageX, s.currentY = "touchstart" === r.type ? r.targetTouches[0].pageY : r.pageY;
    var a = s.currentX,
        o = s.currentY,
        l = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection,
        u = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;

    if (!l || !(a <= u || a >= d.screen.width - u)) {
      if (m.extend(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), s.startX = a, s.startY = o, i.touchStartTime = m.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== r.type) {
        var _e43 = !0;

        p(r.target).is(i.formElements) && (_e43 = !1), c.activeElement && p(c.activeElement).is(i.formElements) && c.activeElement !== r.target && c.activeElement.blur();

        var _s12 = _e43 && t.allowTouchMove && n.touchStartPreventDefault;

        (n.touchStartForcePreventDefault || _s12) && r.preventDefault();
      }

      t.emit("touchStart", r);
    }
  }

  function M(e) {
    var t = this,
        i = t.touchEventsData,
        n = t.params,
        s = t.touches,
        r = t.rtlTranslate;
    var a = e;
    if (a.originalEvent && (a = a.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", a));
    if (i.isTouchEvent && "mousemove" === a.type) return;
    var o = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
        l = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY;
    if (a.preventedByNestedSwiper) return s.startX = o, void (s.startY = l);
    if (!t.allowTouchMove) return t.allowClick = !1, void (i.isTouched && (m.extend(s, {
      startX: o,
      startY: l,
      currentX: o,
      currentY: l
    }), i.touchStartTime = m.now()));
    if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (t.isVertical()) {
      if (l < s.startY && t.translate <= t.maxTranslate() || l > s.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (o < s.startX && t.translate <= t.maxTranslate() || o > s.startX && t.translate >= t.minTranslate()) return;
    if (i.isTouchEvent && c.activeElement && a.target === c.activeElement && p(a.target).is(i.formElements)) return i.isMoved = !0, void (t.allowClick = !1);
    if (i.allowTouchCallbacks && t.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
    s.currentX = o, s.currentY = l;
    var d = s.currentX - s.startX,
        u = s.currentY - s.startY;
    if (t.params.threshold && Math.sqrt(Math.pow(d, 2) + Math.pow(u, 2)) < t.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e44;

      t.isHorizontal() && s.currentY === s.startY || t.isVertical() && s.currentX === s.startX ? i.isScrolling = !1 : d * d + u * u >= 25 && (_e44 = 180 * Math.atan2(Math.abs(u), Math.abs(d)) / Math.PI, i.isScrolling = t.isHorizontal() ? _e44 > n.touchAngle : 90 - _e44 > n.touchAngle);
    }

    if (i.isScrolling && t.emit("touchMoveOpposite", a), void 0 === i.startMoving && (s.currentX === s.startX && s.currentY === s.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    t.allowClick = !1, a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation(), i.isMoved || (n.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", a)), t.emit("sliderMove", a), i.isMoved = !0;
    var h = t.isHorizontal() ? d : u;
    s.diff = h, h *= n.touchRatio, r && (h = -h), t.swipeDirection = h > 0 ? "prev" : "next", i.currentTranslate = h + i.startTranslate;
    var f = !0,
        v = n.resistanceRatio;

    if (n.touchReleaseOnEdges && (v = 0), h > 0 && i.currentTranslate > t.minTranslate() ? (f = !1, n.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + h, v))) : h < 0 && i.currentTranslate < t.maxTranslate() && (f = !1, n.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - h, v))), f && (a.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
      if (!(Math.abs(h) > n.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, s.startX = s.currentX, s.startY = s.currentY, i.currentTranslate = i.startTranslate, void (s.diff = t.isHorizontal() ? s.currentX - s.startX : s.currentY - s.startY);
    }

    n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
      position: s[t.isHorizontal() ? "startX" : "startY"],
      time: i.touchStartTime
    }), i.velocities.push({
      position: s[t.isHorizontal() ? "currentX" : "currentY"],
      time: m.now()
    })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
  }

  function P(e) {
    var t = this,
        i = t.touchEventsData,
        n = t.params,
        s = t.touches,
        r = t.rtlTranslate,
        a = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid;
    var c = e;
    if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var d = m.now(),
        u = d - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), u < 300 && d - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = m.nextTick(function () {
      t && !t.destroyed && t.emit("click", c);
    }, 300)), u < 300 && d - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = m.now(), m.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    var p;

    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, p = n.followFinger ? r ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
      if (p < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (p > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

      if (n.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var _e46 = i.velocities.pop(),
              _s14 = i.velocities.pop(),
              _r11 = _e46.position - _s14.position,
              _a8 = _e46.time - _s14.time;

          t.velocity = _r11 / _a8, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (_a8 > 150 || m.now() - _e46.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;

        var _e45 = 1e3 * n.freeModeMomentumRatio;

        var _s13 = t.velocity * _e45;

        var _o3 = t.translate + _s13;

        r && (_o3 = -_o3);

        var _c,
            _d2 = !1;

        var _u = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;

        var _p;

        if (_o3 < t.maxTranslate()) n.freeModeMomentumBounce ? (_o3 + t.maxTranslate() < -_u && (_o3 = t.maxTranslate() - _u), _c = t.maxTranslate(), _d2 = !0, i.allowMomentumBounce = !0) : _o3 = t.maxTranslate(), n.loop && n.centeredSlides && (_p = !0);else if (_o3 > t.minTranslate()) n.freeModeMomentumBounce ? (_o3 - t.minTranslate() > _u && (_o3 = t.minTranslate() + _u), _c = t.minTranslate(), _d2 = !0, i.allowMomentumBounce = !0) : _o3 = t.minTranslate(), n.loop && n.centeredSlides && (_p = !0);else if (n.freeModeSticky) {
          var _e47;

          for (var _t27 = 0; _t27 < l.length; _t27 += 1) {
            if (l[_t27] > -_o3) {
              _e47 = _t27;
              break;
            }
          }

          _o3 = -(_o3 = Math.abs(l[_e47] - _o3) < Math.abs(l[_e47 - 1] - _o3) || "next" === t.swipeDirection ? l[_e47] : l[_e47 - 1]);
        }
        if (_p && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) _e45 = r ? Math.abs((-_o3 - t.translate) / t.velocity) : Math.abs((_o3 - t.translate) / t.velocity);else if (n.freeModeSticky) return void t.slideToClosest();
        n.freeModeMomentumBounce && _d2 ? (t.updateProgress(_c), t.setTransition(_e45), t.setTranslate(_o3), t.transitionStart(!0, t.swipeDirection), t.animating = !0, a.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(_c), a.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }));
        })) : t.velocity ? (t.updateProgress(_o3), t.setTransition(_e45), t.setTranslate(_o3), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, a.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(_o3), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (n.freeModeSticky) return void t.slideToClosest();

      return void ((!n.freeModeMomentum || u >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
    }

    var h = 0,
        f = t.slidesSizesGrid[0];

    for (var _e48 = 0; _e48 < o.length; _e48 += n.slidesPerGroup) {
      void 0 !== o[_e48 + n.slidesPerGroup] ? p >= o[_e48] && p < o[_e48 + n.slidesPerGroup] && (h = _e48, f = o[_e48 + n.slidesPerGroup] - o[_e48]) : p >= o[_e48] && (h = _e48, f = o[o.length - 1] - o[o.length - 2]);
    }

    var v = (p - o[h]) / f;

    if (u > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (v >= n.longSwipesRatio ? t.slideTo(h + n.slidesPerGroup) : t.slideTo(h)), "prev" === t.swipeDirection && (v > 1 - n.longSwipesRatio ? t.slideTo(h + n.slidesPerGroup) : t.slideTo(h));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && t.slideTo(h + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(h);
    }
  }

  function A() {
    var e = this,
        t = e.params,
        i = e.el;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var n = e.allowSlideNext,
        s = e.allowSlidePrev,
        r = e.snapGrid;

    if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
      var _i31 = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());

      e.setTranslate(_i31), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);

    e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }

  function z(e) {
    var t = this;
    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  var L = {
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
  var D = {
    update: b,
    translate: w,
    transition: x,
    slide: T,
    loop: E,
    grabCursor: C,
    manipulation: S,
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = e.params,
            i = e.touchEvents,
            n = e.el,
            s = e.wrapperEl;
        e.onTouchStart = $.bind(e), e.onTouchMove = M.bind(e), e.onTouchEnd = P.bind(e), e.onClick = z.bind(e);
        var r = "container" === t.touchEventsTarget ? n : s,
            a = !!t.nested;

        if (v.touch || !v.pointerEvents && !v.prefixedPointerEvents) {
          if (v.touch) {
            var _n18 = !("touchstart" !== i.start || !v.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };

            r.addEventListener(i.start, e.onTouchStart, _n18), r.addEventListener(i.move, e.onTouchMove, v.passiveListener ? {
              passive: !1,
              capture: a
            } : a), r.addEventListener(i.end, e.onTouchEnd, _n18);
          }

          (t.simulateTouch && !k.ios && !k.android || t.simulateTouch && !v.touch && k.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), c.addEventListener("mousemove", e.onTouchMove, a), c.addEventListener("mouseup", e.onTouchEnd, !1));
        } else r.addEventListener(i.start, e.onTouchStart, !1), c.addEventListener(i.move, e.onTouchMove, a), c.addEventListener(i.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = e.params,
            i = e.touchEvents,
            n = e.el,
            s = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? n : s,
            a = !!t.nested;

        if (v.touch || !v.pointerEvents && !v.prefixedPointerEvents) {
          if (v.touch) {
            var _n19 = !("onTouchStart" !== i.start || !v.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };

            r.removeEventListener(i.start, e.onTouchStart, _n19), r.removeEventListener(i.move, e.onTouchMove, a), r.removeEventListener(i.end, e.onTouchEnd, _n19);
          }

          (t.simulateTouch && !k.ios && !k.android || t.simulateTouch && !v.touch && k.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), c.removeEventListener("mousemove", e.onTouchMove, a), c.removeEventListener("mouseup", e.onTouchEnd, !1));
        } else r.removeEventListener(i.start, e.onTouchStart, !1), c.removeEventListener(i.move, e.onTouchMove, a), c.removeEventListener(i.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(k.ios || k.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A);
      }
    },
    breakpoints: {
      setBreakpoint: function setBreakpoint() {
        var e = this,
            t = e.activeIndex,
            i = e.initialized,
            _e$loopedSlides = e.loopedSlides,
            n = _e$loopedSlides === void 0 ? 0 : _e$loopedSlides,
            s = e.params,
            r = s.breakpoints;
        if (!r || r && 0 === Object.keys(r).length) return;
        var a = e.getBreakpoint(r);

        if (a && e.currentBreakpoint !== a) {
          var _o4 = a in r ? r[a] : void 0;

          _o4 && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
            var t = _o4[e];
            void 0 !== t && (_o4[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
          });

          var _l = _o4 || e.originalParams,
              _c2 = _l.direction && _l.direction !== s.direction,
              _d3 = s.loop && (_l.slidesPerView !== s.slidesPerView || _c2);

          _c2 && i && e.changeDirection(), m.extend(e.params, _l), m.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), e.currentBreakpoint = a, _d3 && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", _l);
        }
      },
      getBreakpoint: function getBreakpoint(e) {
        var t = this;
        if (!e) return;
        var i = !1;
        var n = [];
        Object.keys(e).forEach(function (e) {
          n.push(e);
        }), n.sort(function (e, t) {
          return parseInt(e, 10) - parseInt(t, 10);
        });

        for (var _e49 = 0; _e49 < n.length; _e49 += 1) {
          var _s15 = n[_e49];
          t.params.breakpointsInverse ? _s15 <= d.innerWidth && (i = _s15) : _s15 >= d.innerWidth && !i && (i = _s15);
        }

        return i || "max";
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
            i = this.rtl,
            n = this.$el,
            s = [];
        s.push("initialized"), s.push(t.direction), t.freeMode && s.push("free-mode"), v.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), t.slidesPerColumn > 1 && s.push("multirow"), k.android && s.push("android"), k.ios && s.push("ios"), (g.isIE || g.isEdge) && (v.pointerEvents || v.prefixedPointerEvents) && s.push("wp8-".concat(t.direction)), s.forEach(function (i) {
          e.push(t.containerModifierClass + i);
        }), n.addClass(e.join(" "));
      },
      removeClasses: function removeClasses() {
        var e = this.$el,
            t = this.classNames;
        e.removeClass(t.join(" "));
      }
    },
    images: {
      loadImage: function loadImage(e, t, i, n, s, r) {
        var a;

        function o() {
          r && r();
        }

        e.complete && s ? o() : t ? ((a = new d.Image()).onload = o, a.onerror = o, n && (a.sizes = n), i && (a.srcset = i), t && (a.src = t)) : o();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _i32 = 0; _i32 < e.imagesToLoad.length; _i32 += 1) {
          var _n20 = e.imagesToLoad[_i32];
          e.loadImage(_n20, _n20.currentSrc || _n20.getAttribute("src"), _n20.srcset || _n20.getAttribute("srcset"), _n20.sizes || _n20.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      I = {};

  var O =
  /*#__PURE__*/
  function (_y) {
    _inherits(O, _y);

    function O() {
      var _e50, _e51;

      var _this3;

      _classCallCheck(this, O);

      var t, i;

      for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        e[_key9] = arguments[_key9];
      }

      1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : (_e50 = e, _e51 = _slicedToArray(_e50, 2), t = _e51[0], i = _e51[1], _e50), i || (i = {}), i = m.extend({}, i), t && !i.el && (i.el = t), _this3 = _possibleConstructorReturn(this, _getPrototypeOf(O).call(this, i)), Object.keys(D).forEach(function (e) {
        Object.keys(D[e]).forEach(function (t) {
          O.prototype[t] || (O.prototype[t] = D[e][t]);
        });
      });

      var n = _assertThisInitialized(_this3);

      void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e];

        if (t.params) {
          var _e52 = Object.keys(t.params)[0],
              _n21 = t.params[_e52];
          if ("object" != _typeof(_n21) || null === _n21) return;
          if (!(_e52 in i && "enabled" in _n21)) return;
          !0 === i[_e52] && (i[_e52] = {
            enabled: !0
          }), "object" != _typeof(i[_e52]) || "enabled" in i[_e52] || (i[_e52].enabled = !0), i[_e52] || (i[_e52] = {
            enabled: !1
          });
        }
      });
      var s = m.extend({}, L);
      n.useModulesParams(s), n.params = m.extend({}, s, I, i), n.originalParams = m.extend({}, n.params), n.passedParams = m.extend({}, i), n.$ = p;
      var r = p(n.params.el);
      if (!(t = r[0])) return _possibleConstructorReturn(_this3);

      if (r.length > 1) {
        var _e53 = [];
        return _possibleConstructorReturn(_this3, (r.each(function (t, n) {
          var s = m.extend({}, i, {
            el: n
          });

          _e53.push(new O(s));
        }), _e53));
      }

      t.swiper = n, r.data("swiper", n);
      var a = r.children(".".concat(n.params.wrapperClass));
      return _possibleConstructorReturn(_this3, (m.extend(n, {
        $el: r,
        el: t,
        $wrapperEl: a,
        wrapperEl: a[0],
        classNames: [],
        slides: p(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === n.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === n.params.direction;
        },
        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction"),
        rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === r.css("direction")),
        wrongRTL: "-webkit-box" === a.css("display"),
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        allowSlideNext: n.params.allowSlideNext,
        allowSlidePrev: n.params.allowSlidePrev,
        touchEvents: function () {
          var e = ["touchstart", "touchmove", "touchend"];
          var t = ["mousedown", "mousemove", "mouseup"];
          return v.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : v.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), n.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2]
          }, n.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, v.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop;
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
          lastClickTime: m.now(),
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          isTouchEvent: void 0,
          startMoving: void 0
        },
        allowClick: !0,
        allowTouchMove: n.params.allowTouchMove,
        touches: {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0
        },
        imagesToLoad: [],
        imagesLoaded: 0
      }), n.useModules(), n.params.init && n.init(), n));
    }

    _createClass(O, [{
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            n = this.size,
            s = this.activeIndex;
        var r = 1;

        if (e.centeredSlides) {
          var _e54,
              _i33 = t[s].swiperSlideSize;

          for (var _a9 = s + 1; _a9 < t.length; _a9 += 1) {
            t[_a9] && !_e54 && (r += 1, (_i33 += t[_a9].swiperSlideSize) > n && (_e54 = !0));
          }

          for (var _a10 = s - 1; _a10 >= 0; _a10 -= 1) {
            t[_a10] && !_e54 && (r += 1, (_i33 += t[_a10].swiperSlideSize) > n && (_e54 = !0));
          }
        } else for (var _e55 = s + 1; _e55 < t.length; _e55 += 1) {
          i[_e55] - i[s] < n && (r += 1);
        }

        return r;
      }
    }, {
      key: "update",
      value: function update() {
        var e = this;
        if (!e || e.destroyed) return;
        var t = e.snapGrid,
            i = e.params;

        function n() {
          var t = e.rtlTranslate ? -1 * e.translate : e.translate,
              i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses();
        }

        var s;
        i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update");
      }
    }, {
      key: "changeDirection",
      value: function changeDirection(e) {
        var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
        var i = this,
            n = i.params.direction;
        return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e ? i : ("vertical" === n && (i.$el.removeClass("".concat(i.params.containerModifierClass, "vertical wp8-vertical")).addClass("".concat(i.params.containerModifierClass).concat(e)), (g.isIE || g.isEdge) && (v.pointerEvents || v.prefixedPointerEvents) && i.$el.addClass("".concat(i.params.containerModifierClass, "wp8-").concat(e))), "horizontal" === n && (i.$el.removeClass("".concat(i.params.containerModifierClass, "horizontal wp8-horizontal")).addClass("".concat(i.params.containerModifierClass).concat(e)), (g.isIE || g.isEdge) && (v.pointerEvents || v.prefixedPointerEvents) && i.$el.addClass("".concat(i.params.containerModifierClass, "wp8-").concat(e))), i.params.direction = e, i.slides.each(function (t, i) {
          "vertical" === e ? i.style.width = "" : i.style.height = "";
        }), i.emit("changeDirection"), t && i.update(), i);
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
        var i = this,
            n = i.params,
            s = i.$el,
            r = i.$wrapperEl,
            a = i.slides;
        return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), r.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
          i.off(e);
        }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), m.deleteProps(i)), i.destroyed = !0, null);
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        m.extend(I, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return I;
      }
    }, {
      key: "defaults",
      get: function get() {
        return L;
      }
    }, {
      key: "Class",
      get: function get() {
        return y;
      }
    }, {
      key: "$",
      get: function get() {
        return p;
      }
    }]);

    return O;
  }(y);

  var _ = {
    name: "device",
    proto: {
      device: k
    },
    "static": {
      device: k
    }
  },
      N = {
    name: "support",
    proto: {
      support: v
    },
    "static": {
      support: v
    }
  },
      j = {
    name: "browser",
    proto: {
      browser: g
    },
    "static": {
      browser: g
    }
  },
      H = {
    name: "resize",
    create: function create() {
      var e = this;
      m.extend(e, {
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
        d.addEventListener("resize", this.resize.resizeHandler), d.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        d.removeEventListener("resize", this.resize.resizeHandler), d.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  };
  var q = {
    func: d.MutationObserver || d.WebkitMutationObserver,
    attach: function attach(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = this,
          n = new (0, q.func)(function (e) {
        if (1 === e.length) return void i.emit("observerUpdate", e[0]);

        var t = function t() {
          i.emit("observerUpdate", e[0]);
        };

        d.requestAnimationFrame ? d.requestAnimationFrame(t) : d.setTimeout(t, 0);
      });
      n.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(n);
    },
    init: function init() {
      var e = this;

      if (v.observer && e.params.observer) {
        if (e.params.observeParents) {
          var _t28 = e.$el.parents();

          for (var _i34 = 0; _i34 < _t28.length; _i34 += 1) {
            e.observer.attach(_t28[_i34]);
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
  var R = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      m.extend(this, {
        observer: {
          init: q.init.bind(this),
          attach: q.attach.bind(this),
          destroy: q.destroy.bind(this),
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
  var B = {
    update: function update(e) {
      var t = this,
          _t$params = t.params,
          i = _t$params.slidesPerView,
          n = _t$params.slidesPerGroup,
          s = _t$params.centeredSlides,
          _t$params$virtual = t.params.virtual,
          r = _t$params$virtual.addSlidesBefore,
          a = _t$params$virtual.addSlidesAfter,
          _t$virtual = t.virtual,
          o = _t$virtual.from,
          l = _t$virtual.to,
          c = _t$virtual.slides,
          d = _t$virtual.slidesGrid,
          u = _t$virtual.renderSlide,
          p = _t$virtual.offset;
      t.updateActiveIndex();
      var h = t.activeIndex || 0;
      var f, v, g;
      f = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (v = Math.floor(i / 2) + n + r, g = Math.floor(i / 2) + n + a) : (v = i + (n - 1) + r, g = n + a);
      var y = Math.max((h || 0) - g, 0),
          b = Math.min((h || 0) + v, c.length - 1),
          w = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function x() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (m.extend(t.virtual, {
        from: y,
        to: b,
        offset: w,
        slidesGrid: t.slidesGrid
      }), o === y && l === b && !e) return t.slidesGrid !== d && w !== p && t.slides.css(f, "".concat(w, "px")), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: w,
        from: y,
        to: b,
        slides: function () {
          var e = [];

          for (var _t29 = y; _t29 <= b; _t29 += 1) {
            e.push(c[_t29]);
          }

          return e;
        }()
      }), void x();
      var T = [],
          E = [];
      if (e) t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();else for (var _e56 = o; _e56 <= l; _e56 += 1) {
        (_e56 < y || _e56 > b) && t.$wrapperEl.find(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(_e56, "\"]")).remove();
      }

      for (var _t30 = 0; _t30 < c.length; _t30 += 1) {
        _t30 >= y && _t30 <= b && (void 0 === l || e ? E.push(_t30) : (_t30 > l && E.push(_t30), _t30 < o && T.push(_t30)));
      }

      E.forEach(function (e) {
        t.$wrapperEl.append(u(c[e], e));
      }), T.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(u(c[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(f, "".concat(w, "px")), x();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this,
          n = i.params.virtual;
      if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
      var s = n.renderSlide ? p(n.renderSlide.call(i, e, t)) : p("<div class=\"".concat(i.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
      return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), n.cache && (i.virtual.cache[t] = s), s;
    },
    appendSlide: function appendSlide(e) {
      var t = this;
      if ("object" == _typeof(e) && "length" in e) for (var _i35 = 0; _i35 < e.length; _i35 += 1) {
        e[_i35] && t.virtual.slides.push(e[_i35]);
      } else t.virtual.slides.push(e);
      t.virtual.update(!0);
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          i = t.activeIndex;
      var n = i + 1,
          s = 1;

      if (Array.isArray(e)) {
        for (var _i36 = 0; _i36 < e.length; _i36 += 1) {
          e[_i36] && t.virtual.slides.unshift(e[_i36]);
        }

        n = i + e.length, s = e.length;
      } else t.virtual.slides.unshift(e);

      if (t.params.virtual.cache) {
        var _e57 = t.virtual.cache,
            _i37 = {};
        Object.keys(_e57).forEach(function (t) {
          _i37[parseInt(t, 10) + s] = _e57[t];
        }), t.virtual.cache = _i37;
      }

      t.virtual.update(!0), t.slideTo(n, 0);
    },
    removeSlide: function removeSlide(e) {
      var t = this;
      if (null == e) return;
      var i = t.activeIndex;
      if (Array.isArray(e)) for (var _n22 = e.length - 1; _n22 >= 0; _n22 -= 1) {
        t.virtual.slides.splice(e[_n22], 1), t.params.virtual.cache && delete t.virtual.cache[e[_n22]], e[_n22] < i && (i -= 1), i = Math.max(i, 0);
      } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  };
  var F = {
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
      m.extend(this, {
        virtual: {
          update: B.update.bind(this),
          appendSlide: B.appendSlide.bind(this),
          prependSlide: B.prependSlide.bind(this),
          removeSlide: B.removeSlide.bind(this),
          removeAllSlides: B.removeAllSlides.bind(this),
          renderSlide: B.renderSlide.bind(this),
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
        m.extend(e.params, t), m.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
      },
      setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  };
  var W = {
    handle: function handle(e) {
      var t = this,
          i = t.rtlTranslate;
      var n = e;
      n.originalEvent && (n = n.originalEvent);
      var s = n.keyCode || n.charCode;
      if (!t.allowSlideNext && (t.isHorizontal() && 39 === s || t.isVertical() && 40 === s)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && 37 === s || t.isVertical() && 38 === s)) return !1;

      if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || c.activeElement && c.activeElement.nodeName && ("input" === c.activeElement.nodeName.toLowerCase() || "textarea" === c.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (37 === s || 39 === s || 38 === s || 40 === s)) {
          var _e58 = !1;

          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

          var _n23 = d.innerWidth,
              _s16 = d.innerHeight,
              _r12 = t.$el.offset();

          i && (_r12.left -= t.$el[0].scrollLeft);
          var _a11 = [[_r12.left, _r12.top], [_r12.left + t.width, _r12.top], [_r12.left, _r12.top + t.height], [_r12.left + t.width, _r12.top + t.height]];

          for (var _t31 = 0; _t31 < _a11.length; _t31 += 1) {
            var _i38 = _a11[_t31];
            _i38[0] >= 0 && _i38[0] <= _n23 && _i38[1] >= 0 && _i38[1] <= _s16 && (_e58 = !0);
          }

          if (!_e58) return;
        }

        t.isHorizontal() ? (37 !== s && 39 !== s || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (39 === s && !i || 37 === s && i) && t.slideNext(), (37 === s && !i || 39 === s && i) && t.slidePrev()) : (38 !== s && 40 !== s || (n.preventDefault ? n.preventDefault() : n.returnValue = !1), 40 === s && t.slideNext(), 38 === s && t.slidePrev()), t.emit("keyPress", s);
      }
    },
    enable: function enable() {
      this.keyboard.enabled || (p(c).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      this.keyboard.enabled && (p(c).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  };
  var X = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function create() {
      m.extend(this, {
        keyboard: {
          enabled: !1,
          enable: W.enable.bind(this),
          disable: W.disable.bind(this),
          handle: W.handle.bind(this)
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
  var G = {
    lastScrollTime: m.now(),
    event: d.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
      var e = "onwheel" in c;

      if (!e) {
        var _t32 = c.createElement("div");

        _t32.setAttribute("onwheel", "return;"), e = "function" == typeof _t32.onwheel;
      }

      return !e && c.implementation && c.implementation.hasFeature && !0 !== c.implementation.hasFeature("", "") && (e = c.implementation.hasFeature("Events.wheel", "3.0")), e;
    }() ? "wheel" : "mousewheel",
    normalize: function normalize(e) {
      var t = 0,
          i = 0,
          n = 0,
          s = 0;
      return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, s = 10 * i, "deltaY" in e && (s = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || s) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, s *= 40) : (n *= 800, s *= 800)), n && !t && (t = n < 1 ? -1 : 1), s && !i && (i = s < 1 ? -1 : 1), {
        spinX: t,
        spinY: i,
        pixelX: n,
        pixelY: s
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
      var i = this,
          n = i.params.mousewheel;
      if (!i.mouseEntered && !n.releaseOnEdges) return !0;
      t.originalEvent && (t = t.originalEvent);
      var s = 0;
      var r = i.rtlTranslate ? -1 : 1,
          a = G.normalize(t);
      if (n.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
          s = a.pixelX * r;
        } else {
          if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
          s = a.pixelY;
        }
      } else s = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * r : -a.pixelY;
      if (0 === s) return !0;

      if (n.invert && (s = -s), i.params.freeMode) {
        i.params.loop && i.loopFix();

        var _e59 = i.getTranslate() + s * n.sensitivity;

        var _r13 = i.isBeginning,
            _a12 = i.isEnd;
        if (_e59 >= i.minTranslate() && (_e59 = i.minTranslate()), _e59 <= i.maxTranslate() && (_e59 = i.maxTranslate()), i.setTransition(0), i.setTranslate(_e59), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!_r13 && i.isBeginning || !_a12 && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = m.nextTick(function () {
          i.slideToClosest();
        }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), _e59 === i.minTranslate() || _e59 === i.maxTranslate()) return !0;
      } else {
        if (m.now() - i.mousewheel.lastScrollTime > 60) if (s < 0) {
          if (i.isEnd && !i.params.loop || i.animating) {
            if (n.releaseOnEdges) return !0;
          } else i.slideNext(), i.emit("scroll", t);
        } else if (i.isBeginning && !i.params.loop || i.animating) {
          if (n.releaseOnEdges) return !0;
        } else i.slidePrev(), i.emit("scroll", t);
        i.mousewheel.lastScrollTime = new d.Date().getTime();
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    enable: function enable() {
      var e = this;
      if (!G.event) return !1;
      if (e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = p(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(G.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = this;
      if (!G.event) return !1;
      if (!e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = p(e.params.mousewheel.eventsTarged)), t.off(G.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
    }
  };
  var Y = {
    update: function update() {
      var e = this,
          t = e.params.navigation;
      if (e.params.loop) return;
      var _e$navigation = e.navigation,
          i = _e$navigation.$nextEl,
          n = _e$navigation.$prevEl;
      n && n.length > 0 && (e.isBeginning ? n.addClass(t.disabledClass) : n.removeClass(t.disabledClass), n[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass)), i && i.length > 0 && (e.isEnd ? i.addClass(t.disabledClass) : i.removeClass(t.disabledClass), i[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](t.lockClass));
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
      var i, n;
      t.nextEl && (i = p(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && i.length > 1 && 1 === e.$el.find(t.nextEl).length && (i = e.$el.find(t.nextEl))), t.prevEl && (n = p(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && n.length > 1 && 1 === e.$el.find(t.prevEl).length && (n = e.$el.find(t.prevEl))), i && i.length > 0 && i.on("click", e.navigation.onNextClick), n && n.length > 0 && n.on("click", e.navigation.onPrevClick), m.extend(e.navigation, {
        $nextEl: i,
        nextEl: i && i[0],
        $prevEl: n,
        prevEl: n && n[0]
      });
    },
    destroy: function destroy() {
      var e = this,
          _e$navigation2 = e.navigation,
          t = _e$navigation2.$nextEl,
          i = _e$navigation2.$prevEl;
      t && t.length && (t.off("click", e.navigation.onNextClick), t.removeClass(e.params.navigation.disabledClass)), i && i.length && (i.off("click", e.navigation.onPrevClick), i.removeClass(e.params.navigation.disabledClass));
    }
  };
  var V = {
    update: function update() {
      var e = this,
          t = e.rtl,
          i = e.params.pagination;
      if (!i.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
      var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          s = e.pagination.$el;
      var r;
      var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? ((r = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (r -= n - 2 * e.loopedSlides), r > a - 1 && (r -= a), r < 0 && "bullets" !== e.params.paginationType && (r = a + r)) : r = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _n24 = e.pagination.bullets;

        var _a13, _o5, _l2;

        if (i.dynamicBullets && (e.pagination.bulletSize = _n24.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", "".concat(e.pagination.bulletSize * (i.dynamicMainBullets + 4), "px")), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += r - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), _a13 = r - e.pagination.dynamicBulletIndex, _l2 = ((_o5 = _a13 + (Math.min(_n24.length, i.dynamicMainBullets) - 1)) + _a13) / 2), _n24.removeClass("".concat(i.bulletActiveClass, " ").concat(i.bulletActiveClass, "-next ").concat(i.bulletActiveClass, "-next-next ").concat(i.bulletActiveClass, "-prev ").concat(i.bulletActiveClass, "-prev-prev ").concat(i.bulletActiveClass, "-main")), s.length > 1) _n24.each(function (e, t) {
          var n = p(t),
              s = n.index();
          s === r && n.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= _a13 && s <= _o5 && n.addClass("".concat(i.bulletActiveClass, "-main")), s === _a13 && n.prev().addClass("".concat(i.bulletActiveClass, "-prev")).prev().addClass("".concat(i.bulletActiveClass, "-prev-prev")), s === _o5 && n.next().addClass("".concat(i.bulletActiveClass, "-next")).next().addClass("".concat(i.bulletActiveClass, "-next-next")));
        });else {
          if (_n24.eq(r).addClass(i.bulletActiveClass), i.dynamicBullets) {
            var _e60 = _n24.eq(_a13),
                _t33 = _n24.eq(_o5);

            for (var _e61 = _a13; _e61 <= _o5; _e61 += 1) {
              _n24.eq(_e61).addClass("".concat(i.bulletActiveClass, "-main"));
            }

            _e60.prev().addClass("".concat(i.bulletActiveClass, "-prev")).prev().addClass("".concat(i.bulletActiveClass, "-prev-prev")), _t33.next().addClass("".concat(i.bulletActiveClass, "-next")).next().addClass("".concat(i.bulletActiveClass, "-next-next"));
          }
        }

        if (i.dynamicBullets) {
          var _s17 = Math.min(_n24.length, i.dynamicMainBullets + 4),
              _r14 = (e.pagination.bulletSize * _s17 - e.pagination.bulletSize) / 2 - _l2 * e.pagination.bulletSize,
              _a14 = t ? "right" : "left";

          _n24.css(e.isHorizontal() ? _a14 : "top", "".concat(_r14, "px"));
        }
      }

      if ("fraction" === i.type && (s.find(".".concat(i.currentClass)).text(i.formatFractionCurrent(r + 1)), s.find(".".concat(i.totalClass)).text(i.formatFractionTotal(a))), "progressbar" === i.type) {
        var _t34;

        _t34 = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _n25 = (r + 1) / a;

        var _o6 = 1,
            _l3 = 1;
        "horizontal" === _t34 ? _o6 = _n25 : _l3 = _n25, s.find(".".concat(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_o6, ") scaleY(").concat(_l3, ")")).transition(e.params.speed);
      }

      "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, r + 1, a)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass);
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;
      if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
      var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          n = e.pagination.$el;
      var s = "";

      if ("bullets" === t.type) {
        var _r15 = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        for (var _i39 = 0; _i39 < _r15; _i39 += 1) {
          t.renderBullet ? s += t.renderBullet.call(e, _i39, t.bulletClass) : s += "<".concat(t.bulletElement, " class=\"").concat(t.bulletClass, "\"></").concat(t.bulletElement, ">");
        }

        n.html(s), e.pagination.bullets = n.find(".".concat(t.bulletClass));
      }

      "fraction" === t.type && (s = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : "<span class=\"".concat(t.currentClass, "\"></span>") + " / " + "<span class=\"".concat(t.totalClass, "\"></span>"), n.html(s)), "progressbar" === t.type && (s = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : "<span class=\"".concat(t.progressbarFillClass, "\"></span>"), n.html(s)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0]);
    },
    init: function init() {
      var e = this,
          t = e.params.pagination;
      if (!t.el) return;
      var i = p(t.el);
      0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", ".".concat(t.bulletClass), function (t) {
        t.preventDefault();
        var i = p(this).index() * e.params.slidesPerGroup;
        e.params.loop && (i += e.loopedSlides), e.slideTo(i);
      }), m.extend(e.pagination, {
        $el: i,
        el: i[0]
      }));
    },
    destroy: function destroy() {
      var e = this.params.pagination;
      if (!e.el || !this.pagination.el || !this.pagination.$el || 0 === this.pagination.$el.length) return;
      var t = this.pagination.$el;
      t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", ".".concat(e.bulletClass));
    }
  };
  var U = {
    setTranslate: function setTranslate() {
      var e = this;
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.rtlTranslate,
          n = e.progress,
          s = t.dragSize,
          r = t.trackSize,
          a = t.$dragEl,
          o = t.$el,
          l = e.params.scrollbar;
      var c = s,
          d = (r - s) * n;
      i ? (d = -d) > 0 ? (c = s - d, d = 0) : -d + s > r && (c = r + d) : d < 0 ? (c = s + d, d = 0) : d + s > r && (c = r - d), e.isHorizontal() ? (v.transforms3d ? a.transform("translate3d(".concat(d, "px, 0, 0)")) : a.transform("translateX(".concat(d, "px)")), a[0].style.width = "".concat(c, "px")) : (v.transforms3d ? a.transform("translate3d(0px, ".concat(d, "px, 0)")) : a.transform("translateY(".concat(d, "px)")), a[0].style.height = "".concat(c, "px")), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
        o[0].style.opacity = 0, o.transition(400);
      }, 1e3));
    },
    setTransition: function setTransition(e) {
      this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e);
    },
    updateSize: function updateSize() {
      var e = this;
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          i = t.$dragEl,
          n = t.$el;
      i[0].style.width = "", i[0].style.height = "";
      var s = e.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight,
          r = e.size / e.virtualSize,
          a = r * (s / e.size);
      var o;
      o = "auto" === e.params.scrollbar.dragSize ? s * r : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = "".concat(o, "px") : i[0].style.height = "".concat(o, "px"), n[0].style.display = r >= 1 ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), m.extend(t, {
        trackSize: s,
        divider: r,
        moveDivider: a,
        dragSize: o
      }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var t = this.scrollbar,
          i = this.rtlTranslate,
          n = t.$el,
          s = t.dragSize,
          r = t.trackSize;
      var a, o;
      o = ((a = this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - s / 2) / (r - s), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
      var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
      this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          n = this.$wrapperEl,
          s = i.$el,
          r = i.$dragEl;
      this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), r.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e);
    },
    onDragMove: function onDragMove(e) {
      var t = this.scrollbar,
          i = this.$wrapperEl,
          n = t.$el,
          s = t.$dragEl;
      this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), s.transition(0), this.emit("scrollbarDragMove", e));
    },
    onDragEnd: function onDragEnd(e) {
      var t = this,
          i = t.params.scrollbar,
          n = t.scrollbar,
          s = n.$el;
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = m.nextTick(function () {
        s.css("opacity", 0), s.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.touchEventsTouch,
          n = e.touchEventsDesktop,
          s = e.params,
          r = t.$el[0],
          a = !(!v.passiveListener || !s.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          o = !(!v.passiveListener || !s.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      v.touch ? (r.addEventListener(i.start, e.scrollbar.onDragStart, a), r.addEventListener(i.move, e.scrollbar.onDragMove, a), r.addEventListener(i.end, e.scrollbar.onDragEnd, o)) : (r.addEventListener(n.start, e.scrollbar.onDragStart, a), c.addEventListener(n.move, e.scrollbar.onDragMove, a), c.addEventListener(n.end, e.scrollbar.onDragEnd, o));
    },
    disableDraggable: function disableDraggable() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.touchEventsTouch,
          n = e.touchEventsDesktop,
          s = e.params,
          r = t.$el[0],
          a = !(!v.passiveListener || !s.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          o = !(!v.passiveListener || !s.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      v.touch ? (r.removeEventListener(i.start, e.scrollbar.onDragStart, a), r.removeEventListener(i.move, e.scrollbar.onDragMove, a), r.removeEventListener(i.end, e.scrollbar.onDragEnd, o)) : (r.removeEventListener(n.start, e.scrollbar.onDragStart, a), c.removeEventListener(n.move, e.scrollbar.onDragMove, a), c.removeEventListener(n.end, e.scrollbar.onDragEnd, o));
    },
    init: function init() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.$el,
          n = e.params.scrollbar;
      var s = p(n.el);
      e.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el));
      var r = s.find(".".concat(e.params.scrollbar.dragClass));
      0 === r.length && (r = p("<div class=\"".concat(e.params.scrollbar.dragClass, "\"></div>")), s.append(r)), m.extend(t, {
        $el: s,
        el: s[0],
        $dragEl: r,
        dragEl: r[0]
      }), n.draggable && t.enableDraggable();
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  };
  var J = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          n = p(e),
          s = i ? -1 : 1,
          r = n.attr("data-swiper-parallax") || "0";
      var a = n.attr("data-swiper-parallax-x"),
          o = n.attr("data-swiper-parallax-y");
      var l = n.attr("data-swiper-parallax-scale"),
          c = n.attr("data-swiper-parallax-opacity");

      if (a || o ? (a = a || "0", o = o || "0") : this.isHorizontal() ? (a = r, o = "0") : (o = r, a = "0"), a = a.indexOf("%") >= 0 ? "".concat(parseInt(a, 10) * t * s, "%") : "".concat(a * t * s, "px"), o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * t, "%") : "".concat(o * t, "px"), null != c) {
        var _e62 = c - (c - 1) * (1 - Math.abs(t));

        n[0].style.opacity = _e62;
      }

      if (null == l) n.transform("translate3d(".concat(a, ", ").concat(o, ", 0px)"));else {
        var _e63 = l - (l - 1) * (1 - Math.abs(t));

        n.transform("translate3d(".concat(a, ", ").concat(o, ", 0px) scale(").concat(_e63, ")"));
      }
    },
    setTranslate: function setTranslate() {
      var e = this,
          t = e.$el,
          i = e.slides,
          n = e.progress,
          s = e.snapGrid;
      t.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        e.parallax.setTransform(i, n);
      }), i.each(function (t, i) {
        var r = i.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (r += Math.ceil(t / 2) - n * (s.length - 1)), r = Math.min(Math.max(r, -1), 1), p(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
          e.parallax.setTransform(i, r);
        });
      });
    },
    setTransition: function setTransition() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = this.$el;
      t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        var n = p(i);
        var s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), n.transition(s);
      });
    }
  };
  var K = {
    getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
      if (e.targetTouches.length < 2) return 1;
      var t = e.targetTouches[0].pageX,
          i = e.targetTouches[0].pageY,
          n = e.targetTouches[1].pageX,
          s = e.targetTouches[1].pageY;
      return Math.sqrt(Math.pow(n - t, 2) + Math.pow(s - i, 2));
    },
    onGestureStart: function onGestureStart(e) {
      var t = this,
          i = t.params.zoom,
          n = t.zoom,
          s = n.gesture;

      if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !v.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        n.fakeGestureTouched = !0, s.scaleStart = K.getDistanceBetweenTouches(e);
      }

      s.$slideEl && s.$slideEl.length || (s.$slideEl = p(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(".".concat(i.containerClass)), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          i = this.zoom,
          n = i.gesture;

      if (!v.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureMoved = !0, n.scaleMove = K.getDistanceBetweenTouches(e);
      }

      n.$imageEl && 0 !== n.$imageEl.length && (v.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")")));
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          i = this.zoom,
          n = i.gesture;

      if (!v.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !k.android) return;
        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }

      n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(".concat(i.scale, ")")), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          i = t.gesture,
          n = t.image;
      i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (k.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          i = t.zoom,
          n = i.gesture,
          s = i.image,
          r = i.velocity;
      if (!n.$imageEl || 0 === n.$imageEl.length) return;
      if (t.allowClick = !1, !s.isTouched || !n.$slideEl) return;
      s.isMoved || (s.width = n.$imageEl[0].offsetWidth, s.height = n.$imageEl[0].offsetHeight, s.startX = m.getTranslate(n.$imageWrapEl[0], "x") || 0, s.startY = m.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
      var a = s.width * i.scale,
          o = s.height * i.scale;

      if (!(a < n.slideWidth && o < n.slideHeight)) {
        if (s.minX = Math.min(n.slideWidth / 2 - a / 2, 0), s.maxX = -s.minX, s.minY = Math.min(n.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !i.isScaling) {
          if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
        }

        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = s.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = s.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (s.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (s.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(s.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(s.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = s.touchesCurrent.x, r.prevPositionY = s.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(".concat(s.currentX, "px, ").concat(s.currentY, "px,0)"));
      }
    },
    onTouchEnd: function onTouchEnd() {
      var e = this.zoom,
          t = e.gesture,
          i = e.image,
          n = e.velocity;
      if (!t.$imageEl || 0 === t.$imageEl.length) return;
      if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void (i.isMoved = !1);
      i.isTouched = !1, i.isMoved = !1;
      var s = 300,
          r = 300;
      var a = n.x * s,
          o = i.currentX + a,
          l = n.y * r,
          c = i.currentY + l;
      0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (r = Math.abs((c - i.currentY) / n.y));
      var d = Math.max(s, r);
      i.currentX = o, i.currentY = c;
      var u = i.width * e.scale,
          p = i.height * e.scale;
      i.minX = Math.min(t.slideWidth / 2 - u / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - p / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(d).transform("translate3d(".concat(i.currentX, "px, ").concat(i.currentY, "px,0)"));
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
          i = t.zoom,
          n = t.params.zoom,
          s = i.gesture,
          r = i.image;
      if (s.$slideEl || (s.$slideEl = t.clickedSlide ? p(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(".".concat(n.containerClass))), !s.$imageEl || 0 === s.$imageEl.length) return;
      var a, o, l, c, d, u, h, f, m, v, g, y, b, w, x, T, E, C;
      s.$slideEl.addClass("".concat(n.zoomedSlideClass)), void 0 === r.touchesStart.x && e ? (a = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, o = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (a = r.touchesStart.x, o = r.touchesStart.y), i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, i.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, e ? (E = s.$slideEl[0].offsetWidth, C = s.$slideEl[0].offsetHeight, d = (l = s.$slideEl.offset().left) + E / 2 - a, u = (c = s.$slideEl.offset().top) + C / 2 - o, m = s.$imageEl[0].offsetWidth, v = s.$imageEl[0].offsetHeight, g = m * i.scale, y = v * i.scale, x = -(b = Math.min(E / 2 - g / 2, 0)), T = -(w = Math.min(C / 2 - y / 2, 0)), (h = d * i.scale) < b && (h = b), h > x && (h = x), (f = u * i.scale) < w && (f = w), f > T && (f = T)) : (h = 0, f = 0), s.$imageWrapEl.transition(300).transform("translate3d(".concat(h, "px, ").concat(f, "px,0)")), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(i.scale, ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          i = e.params.zoom,
          n = t.gesture;
      n.$slideEl || (n.$slideEl = e.clickedSlide ? p(e.clickedSlide) : e.slides.eq(e.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent(".".concat(i.containerClass))), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("".concat(i.zoomedSlideClass)), n.$slideEl = void 0);
    },
    enable: function enable() {
      var e = this,
          t = e.zoom;
      if (t.enabled) return;
      t.enabled = !0;
      var i = !("touchstart" !== e.touchEvents.start || !v.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      v.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;
      if (!t.enabled) return;
      e.zoom.enabled = !1;
      var i = !("touchstart" !== e.touchEvents.start || !v.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      v.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
    }
  };
  var Q = {
    loadInSlide: function loadInSlide(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = this,
          n = i.params.lazy;
      if (void 0 === e) return;
      if (0 === i.slides.length) return;
      var s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(".".concat(i.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : i.slides.eq(e);
      var r = s.find(".".concat(n.elementClass, ":not(.").concat(n.loadedClass, "):not(.").concat(n.loadingClass, ")"));
      !s.hasClass(n.elementClass) || s.hasClass(n.loadedClass) || s.hasClass(n.loadingClass) || (r = r.add(s[0])), 0 !== r.length && r.each(function (e, r) {
        var a = p(r);
        a.addClass(n.loadingClass);
        var o = a.attr("data-background"),
            l = a.attr("data-src"),
            c = a.attr("data-srcset"),
            d = a.attr("data-sizes");
        i.loadImage(a[0], l || o, c, d, !1, function () {
          if (null != i && i && (!i || i.params) && !i.destroyed) {
            if (o ? (a.css("background-image", "url(\"".concat(o, "\")")), a.removeAttr("data-background")) : (c && (a.attr("srcset", c), a.removeAttr("data-srcset")), d && (a.attr("sizes", d), a.removeAttr("data-sizes")), l && (a.attr("src", l), a.removeAttr("data-src"))), a.addClass(n.loadedClass).removeClass(n.loadingClass), s.find(".".concat(n.preloaderClass)).remove(), i.params.loop && t) {
              var _e64 = s.attr("data-swiper-slide-index");

              if (s.hasClass(i.params.slideDuplicateClass)) {
                var _t35 = i.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e64, "\"]:not(.").concat(i.params.slideDuplicateClass, ")"));

                i.lazy.loadInSlide(_t35.index(), !1);
              } else {
                var _t36 = i.$wrapperEl.children(".".concat(i.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e64, "\"]"));

                i.lazy.loadInSlide(_t36.index(), !1);
              }
            }

            i.emit("lazyImageReady", s[0], a[0]);
          }
        }), i.emit("lazyImageLoad", s[0], a[0]);
      });
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          n = e.slides,
          s = e.activeIndex,
          r = e.virtual && i.virtual.enabled,
          a = i.lazy;
      var o = i.slidesPerView;

      function l(e) {
        if (r) {
          if (t.children(".".concat(i.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
        } else if (n[e]) return !0;

        return !1;
      }

      function c(e) {
        return r ? p(e).attr("data-swiper-slide-index") : p(e).index();
      }

      if ("auto" === o && (o = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(".".concat(i.slideVisibleClass)).each(function (t, i) {
        var n = r ? p(i).attr("data-swiper-slide-index") : p(i).index();
        e.lazy.loadInSlide(n);
      });else if (o > 1) for (var _t37 = s; _t37 < s + o; _t37 += 1) {
        l(_t37) && e.lazy.loadInSlide(_t37);
      } else e.lazy.loadInSlide(s);
      if (a.loadPrevNext) if (o > 1 || a.loadPrevNextAmount && a.loadPrevNextAmount > 1) {
        var _t38 = a.loadPrevNextAmount,
            _i40 = o,
            _r16 = Math.min(s + _i40 + Math.max(_t38, _i40), n.length),
            _c3 = Math.max(s - Math.max(_i40, _t38), 0);

        for (var _t39 = s + o; _t39 < _r16; _t39 += 1) {
          l(_t39) && e.lazy.loadInSlide(_t39);
        }

        for (var _t40 = _c3; _t40 < s; _t40 += 1) {
          l(_t40) && e.lazy.loadInSlide(_t40);
        }
      } else {
        var _n26 = t.children(".".concat(i.slideNextClass));

        _n26.length > 0 && e.lazy.loadInSlide(c(_n26));

        var _s18 = t.children(".".concat(i.slidePrevClass));

        _s18.length > 0 && e.lazy.loadInSlide(c(_s18));
      }
    }
  };
  var Z = {
    LinearSpline: function LinearSpline(e, t) {
      var i = function () {
        var e, t, i;
        return function (n, s) {
          for (t = -1, e = n.length; e - t > 1;) {
            n[i = e + t >> 1] <= s ? t = i : e = i;
          }

          return e;
        };
      }();

      var n, s;
      return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
        return e ? (s = i(this.x, e), n = s - 1, (e - this.x[n]) * (this.y[s] - this.y[n]) / (this.x[s] - this.x[n]) + this.y[n]) : 0;
      }, this;
    },
    getInterpolateFunction: function getInterpolateFunction(e) {
      var t = this;
      t.controller.spline || (t.controller.spline = t.params.loop ? new Z.LinearSpline(t.slidesGrid, e.slidesGrid) : new Z.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i = this,
          n = i.controller.control;
      var s, r;

      function a(e) {
        var t = i.rtlTranslate ? -i.translate : i.translate;
        "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(e), r = -i.controller.spline.interpolate(-t)), r && "container" !== i.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate()), r = (t - i.minTranslate()) * s + e.minTranslate()), i.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, i), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(n)) for (var _e65 = 0; _e65 < n.length; _e65 += 1) {
        n[_e65] !== t && n[_e65] instanceof O && a(n[_e65]);
      } else n instanceof O && t !== n && a(n);
    },
    setTransition: function setTransition(e, t) {
      var i = this,
          n = i.controller.control;
      var s;

      function r(t) {
        t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && m.nextTick(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          n && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(n)) for (s = 0; s < n.length; s += 1) {
        n[s] !== t && n[s] instanceof O && r(n[s]);
      } else n instanceof O && t !== n && r(n);
    }
  };
  var ee = {
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
          i = t.params.a11y;
      if (13 !== e.keyCode) return;
      var n = p(e.target);
      t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(i.lastSlideMessage) : t.a11y.notify(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(i.firstSlideMessage) : t.a11y.notify(i.prevSlideMessage)), t.pagination && n.is(".".concat(t.params.pagination.bulletClass)) && n[0].click();
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
          i = _e$navigation3.$prevEl;
      i && i.length > 0 && (e.isBeginning ? e.a11y.disableEl(i) : e.a11y.enableEl(i)), t && t.length > 0 && (e.isEnd ? e.a11y.disableEl(t) : e.a11y.enableEl(t));
    },
    updatePagination: function updatePagination() {
      var e = this,
          t = e.params.a11y;
      e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.bullets.each(function (i, n) {
        var s = p(n);
        e.a11y.makeElFocusable(s), e.a11y.addElRole(s, "button"), e.a11y.addElLabel(s, t.paginationBulletMessage.replace(/{{index}}/, s.index() + 1));
      });
    },
    init: function init() {
      var e = this;
      e.$el.append(e.a11y.liveRegion);
      var t = e.params.a11y;
      var i, n;
      e.navigation && e.navigation.$nextEl && (i = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (n = e.navigation.$prevEl), i && (e.a11y.makeElFocusable(i), e.a11y.addElRole(i, "button"), e.a11y.addElLabel(i, t.nextSlideMessage), i.on("keydown", e.a11y.onEnterKey)), n && (e.a11y.makeElFocusable(n), e.a11y.addElRole(n, "button"), e.a11y.addElLabel(n, t.prevSlideMessage), n.on("keydown", e.a11y.onEnterKey)), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.on("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey);
    },
    destroy: function destroy() {
      var e = this;
      var t, i;
      e.a11y.liveRegion && e.a11y.liveRegion.length > 0 && e.a11y.liveRegion.remove(), e.navigation && e.navigation.$nextEl && (t = e.navigation.$nextEl), e.navigation && e.navigation.$prevEl && (i = e.navigation.$prevEl), t && t.off("keydown", e.a11y.onEnterKey), i && i.off("keydown", e.a11y.onEnterKey), e.pagination && e.params.pagination.clickable && e.pagination.bullets && e.pagination.bullets.length && e.pagination.$el.off("keydown", ".".concat(e.params.pagination.bulletClass), e.a11y.onEnterKey);
    }
  };
  var te = {
    init: function init() {
      var e = this;
      if (!e.params.history) return;
      if (!d.history || !d.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
      var t = e.history;
      t.initialized = !0, t.paths = te.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || d.addEventListener("popstate", e.history.setHistoryPopState));
    },
    destroy: function destroy() {
      var e = this;
      e.params.history.replaceState || d.removeEventListener("popstate", e.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = te.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues() {
      var e = d.location.pathname.slice(1).split("/").filter(function (e) {
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
      var i = this.slides.eq(t);
      var n = te.slugify(i.attr("data-history"));
      d.location.pathname.includes(e) || (n = "".concat(e, "/").concat(n));
      var s = d.history.state;
      s && s.value === n || (this.params.history.replaceState ? d.history.replaceState({
        value: n
      }, null, n) : d.history.pushState({
        value: n
      }, null, n));
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      var n = this;
      if (t) for (var _s19 = 0, _r17 = n.slides.length; _s19 < _r17; _s19 += 1) {
        var _r18 = n.slides.eq(_s19);

        if (te.slugify(_r18.attr("data-history")) === t && !_r18.hasClass(n.params.slideDuplicateClass)) {
          var _t41 = _r18.index();

          n.slideTo(_t41, e, i);
        }
      } else n.slideTo(0, e, i);
    }
  };
  var ie = {
    onHashCange: function onHashCange() {
      var e = this,
          t = c.location.hash.replace("#", "");

      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var _i41 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

        if (void 0 === _i41) return;
        e.slideTo(_i41);
      }
    },
    setHash: function setHash() {
      var e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && d.history && d.history.replaceState) d.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || "");else {
        var _t42 = e.slides.eq(e.activeIndex),
            _i42 = _t42.attr("data-hash") || _t42.attr("data-history");

        c.location.hash = _i42 || "";
      }
    },
    init: function init() {
      var e = this;
      if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
      e.hashNavigation.initialized = !0;
      var t = c.location.hash.replace("#", "");

      if (t) {
        var _i43 = 0;

        for (var _n27 = 0, _s20 = e.slides.length; _n27 < _s20; _n27 += 1) {
          var _s21 = e.slides.eq(_n27);

          if ((_s21.attr("data-hash") || _s21.attr("data-history")) === t && !_s21.hasClass(e.params.slideDuplicateClass)) {
            var _t43 = _s21.index();

            e.slideTo(_t43, _i43, e.params.runCallbacksOnInit, !0);
          }
        }
      }

      e.params.hashNavigation.watchState && p(d).on("hashchange", e.hashNavigation.onHashCange);
    },
    destroy: function destroy() {
      var e = this;
      e.params.hashNavigation.watchState && p(d).off("hashchange", e.hashNavigation.onHashCange);
    }
  };
  var ne = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex);
      var i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = m.nextTick(function () {
        e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"));
      }, i);
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
  var se = {
    setTranslate: function setTranslate() {
      var e = this,
          t = e.slides;

      for (var _i44 = 0; _i44 < t.length; _i44 += 1) {
        var _t44 = e.slides.eq(_i44);

        var _n28 = -_t44[0].swiperSlideOffset;

        e.params.virtualTranslate || (_n28 -= e.translate);
        var _s22 = 0;
        e.isHorizontal() || (_s22 = _n28, _n28 = 0);

        var _r19 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t44[0].progress), 0) : 1 + Math.min(Math.max(_t44[0].progress, -1), 0);

        _t44.css({
          opacity: _r19
        }).transform("translate3d(".concat(_n28, "px, ").concat(_s22, "px, 0px)"));
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          n = t.$wrapperEl;

      if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
        var _e66 = !1;

        i.transitionEnd(function () {
          if (_e66) return;
          if (!t || t.destroyed) return;
          _e66 = !0, t.animating = !1;
          var i = ["webkitTransitionEnd", "transitionend"];

          for (var _e67 = 0; _e67 < i.length; _e67 += 1) {
            n.trigger(i[_e67]);
          }
        });
      }
    }
  };
  var re = {
    setTranslate: function setTranslate() {
      var e = this.$el,
          t = this.$wrapperEl,
          i = this.slides,
          n = this.width,
          s = this.height,
          r = this.rtlTranslate,
          a = this.size,
          o = this.params.cubeEffect,
          l = this.isHorizontal(),
          c = this.virtual && this.params.virtual.enabled;
      var d,
          u = 0;
      o.shadow && (l ? (0 === (d = t.find(".swiper-cube-shadow")).length && (d = p('<div class="swiper-cube-shadow"></div>'), t.append(d)), d.css({
        height: "".concat(n, "px")
      })) : 0 === (d = e.find(".swiper-cube-shadow")).length && (d = p('<div class="swiper-cube-shadow"></div>'), e.append(d)));

      for (var _e68 = 0; _e68 < i.length; _e68 += 1) {
        var _t45 = i.eq(_e68);

        var _n29 = _e68;
        c && (_n29 = parseInt(_t45.attr("data-swiper-slide-index"), 10));

        var _s23 = 90 * _n29,
            _d4 = Math.floor(_s23 / 360);

        r && (_s23 = -_s23, _d4 = Math.floor(-_s23 / 360));

        var _h = Math.max(Math.min(_t45[0].progress, 1), -1);

        var _f = 0,
            _m = 0,
            _v = 0;
        _n29 % 4 == 0 ? (_f = 4 * -_d4 * a, _v = 0) : (_n29 - 1) % 4 == 0 ? (_f = 0, _v = 4 * -_d4 * a) : (_n29 - 2) % 4 == 0 ? (_f = a + 4 * _d4 * a, _v = a) : (_n29 - 3) % 4 == 0 && (_f = -a, _v = 3 * a + 4 * a * _d4), r && (_f = -_f), l || (_m = _f, _f = 0);

        var _g = "rotateX(".concat(l ? 0 : -_s23, "deg) rotateY(").concat(l ? _s23 : 0, "deg) translate3d(").concat(_f, "px, ").concat(_m, "px, ").concat(_v, "px)");

        if (_h <= 1 && _h > -1 && (u = 90 * _n29 + 90 * _h, r && (u = 90 * -_n29 - 90 * _h)), _t45.transform(_g), o.slideShadows) {
          var _e69 = l ? _t45.find(".swiper-slide-shadow-left") : _t45.find(".swiper-slide-shadow-top"),
              _i45 = l ? _t45.find(".swiper-slide-shadow-right") : _t45.find(".swiper-slide-shadow-bottom");

          0 === _e69.length && (_e69 = p("<div class=\"swiper-slide-shadow-".concat(l ? "left" : "top", "\"></div>")), _t45.append(_e69)), 0 === _i45.length && (_i45 = p("<div class=\"swiper-slide-shadow-".concat(l ? "right" : "bottom", "\"></div>")), _t45.append(_i45)), _e69.length && (_e69[0].style.opacity = Math.max(-_h, 0)), _i45.length && (_i45[0].style.opacity = Math.max(_h, 0));
        }
      }

      if (t.css({
        "-webkit-transform-origin": "50% 50% -".concat(a / 2, "px"),
        "-moz-transform-origin": "50% 50% -".concat(a / 2, "px"),
        "-ms-transform-origin": "50% 50% -".concat(a / 2, "px"),
        "transform-origin": "50% 50% -".concat(a / 2, "px")
      }), o.shadow) if (l) d.transform("translate3d(0px, ".concat(n / 2 + o.shadowOffset, "px, ").concat(-n / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(o.shadowScale, ")"));else {
        var _e70 = Math.abs(u) - 90 * Math.floor(Math.abs(u) / 90),
            _t46 = 1.5 - (Math.sin(2 * _e70 * Math.PI / 360) / 2 + Math.cos(2 * _e70 * Math.PI / 360) / 2),
            _i46 = o.shadowScale,
            _n30 = o.shadowScale / _t46,
            _r20 = o.shadowOffset;

        d.transform("scale3d(".concat(_i46, ", 1, ").concat(_n30, ") translate3d(0px, ").concat(s / 2 + _r20, "px, ").concat(-s / 2 / _n30, "px) rotateX(-90deg)"));
      }
      var h = g.isSafari || g.isUiWebView ? -a / 2 : 0;
      t.transform("translate3d(0px,0,".concat(h, "px) rotateX(").concat(this.isHorizontal() ? 0 : u, "deg) rotateY(").concat(this.isHorizontal() ? -u : 0, "deg)"));
    },
    setTransition: function setTransition(e) {
      var t = this.$el,
          i = this.slides;
      i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  };
  var ae = {
    setTranslate: function setTranslate() {
      var e = this,
          t = e.slides,
          i = e.rtlTranslate;

      for (var _n31 = 0; _n31 < t.length; _n31 += 1) {
        var _s24 = t.eq(_n31);

        var _r21 = _s24[0].progress;
        e.params.flipEffect.limitRotation && (_r21 = Math.max(Math.min(_s24[0].progress, 1), -1));

        var _a15 = -180 * _r21,
            _o7 = 0,
            _l4 = -_s24[0].swiperSlideOffset,
            _c4 = 0;

        if (e.isHorizontal() ? i && (_a15 = -_a15) : (_c4 = _l4, _l4 = 0, _o7 = -_a15, _a15 = 0), _s24[0].style.zIndex = -Math.abs(Math.round(_r21)) + t.length, e.params.flipEffect.slideShadows) {
          var _t47 = e.isHorizontal() ? _s24.find(".swiper-slide-shadow-left") : _s24.find(".swiper-slide-shadow-top"),
              _i47 = e.isHorizontal() ? _s24.find(".swiper-slide-shadow-right") : _s24.find(".swiper-slide-shadow-bottom");

          0 === _t47.length && (_t47 = p("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "left" : "top", "\"></div>")), _s24.append(_t47)), 0 === _i47.length && (_i47 = p("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "right" : "bottom", "\"></div>")), _s24.append(_i47)), _t47.length && (_t47[0].style.opacity = Math.max(-_r21, 0)), _i47.length && (_i47[0].style.opacity = Math.max(_r21, 0));
        }

        _s24.transform("translate3d(".concat(_l4, "px, ").concat(_c4, "px, 0px) rotateX(").concat(_o7, "deg) rotateY(").concat(_a15, "deg)"));
      }
    },
    setTransition: function setTransition(e) {
      var t = this,
          i = t.slides,
          n = t.activeIndex,
          s = t.$wrapperEl;

      if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
        var _e71 = !1;

        i.eq(n).transitionEnd(function () {
          if (_e71) return;
          if (!t || t.destroyed) return;
          _e71 = !0, t.animating = !1;
          var i = ["webkitTransitionEnd", "transitionend"];

          for (var _e72 = 0; _e72 < i.length; _e72 += 1) {
            s.trigger(i[_e72]);
          }
        });
      }
    }
  };
  var oe = {
    setTranslate: function setTranslate() {
      var e = this.width,
          t = this.height,
          i = this.slides,
          n = this.$wrapperEl,
          s = this.slidesSizesGrid,
          r = this.params.coverflowEffect,
          a = this.isHorizontal(),
          o = this.translate,
          l = a ? e / 2 - o : t / 2 - o,
          c = a ? r.rotate : -r.rotate,
          d = r.depth;

      for (var _e73 = 0, _t48 = i.length; _e73 < _t48; _e73 += 1) {
        var _t49 = i.eq(_e73),
            _n32 = s[_e73],
            _o8 = (l - _t49[0].swiperSlideOffset - _n32 / 2) / _n32 * r.modifier;

        var _u2 = a ? c * _o8 : 0,
            _h2 = a ? 0 : c * _o8,
            _f2 = -d * Math.abs(_o8),
            _m2 = a ? 0 : r.stretch * _o8,
            _v2 = a ? r.stretch * _o8 : 0;

        Math.abs(_v2) < .001 && (_v2 = 0), Math.abs(_m2) < .001 && (_m2 = 0), Math.abs(_f2) < .001 && (_f2 = 0), Math.abs(_u2) < .001 && (_u2 = 0), Math.abs(_h2) < .001 && (_h2 = 0);

        var _g2 = "translate3d(".concat(_v2, "px,").concat(_m2, "px,").concat(_f2, "px)  rotateX(").concat(_h2, "deg) rotateY(").concat(_u2, "deg)");

        if (_t49.transform(_g2), _t49[0].style.zIndex = 1 - Math.abs(Math.round(_o8)), r.slideShadows) {
          var _e74 = a ? _t49.find(".swiper-slide-shadow-left") : _t49.find(".swiper-slide-shadow-top"),
              _i48 = a ? _t49.find(".swiper-slide-shadow-right") : _t49.find(".swiper-slide-shadow-bottom");

          0 === _e74.length && (_e74 = p("<div class=\"swiper-slide-shadow-".concat(a ? "left" : "top", "\"></div>")), _t49.append(_e74)), 0 === _i48.length && (_i48 = p("<div class=\"swiper-slide-shadow-".concat(a ? "right" : "bottom", "\"></div>")), _t49.append(_i48)), _e74.length && (_e74[0].style.opacity = _o8 > 0 ? _o8 : 0), _i48.length && (_i48[0].style.opacity = -_o8 > 0 ? -_o8 : 0);
        }
      }

      if (v.pointerEvents || v.prefixedPointerEvents) {
        n[0].style.perspectiveOrigin = "".concat(l, "px 50%");
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  };
  var le = {
    init: function init() {
      var e = this,
          t = e.params.thumbs,
          i = e.constructor;
      t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, m.extend(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), m.extend(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : m.isObject(t.swiper) && (e.thumbs.swiper = new i(m.extend({}, t.swiper, {
        watchSlidesVisibility: !0,
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick);
    },
    onThumbClick: function onThumbClick() {
      var e = this,
          t = e.thumbs.swiper;
      if (!t) return;
      var i = t.clickedIndex,
          n = t.clickedSlide;
      if (n && p(n).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
      if (null == i) return;
      var s;

      if (s = t.params.loop ? parseInt(p(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
        var _t50 = e.activeIndex;
        e.slides.eq(_t50).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t50 = e.activeIndex);

        var _i49 = e.slides.eq(_t50).prevAll("[data-swiper-slide-index=\"".concat(s, "\"]")).eq(0).index(),
            _n33 = e.slides.eq(_t50).nextAll("[data-swiper-slide-index=\"".concat(s, "\"]")).eq(0).index();

        s = void 0 === _i49 ? _n33 : void 0 === _n33 ? _i49 : _n33 - _t50 < _t50 - _i49 ? _n33 : _i49;
      }

      e.slideTo(s);
    },
    update: function update(e) {
      var t = this,
          i = t.thumbs.swiper;
      if (!i) return;
      var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;

      if (t.realIndex !== i.realIndex) {
        var _s25,
            _r22 = i.activeIndex;

        if (i.params.loop) {
          i.slides.eq(_r22).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, _r22 = i.activeIndex);

          var _e75 = i.slides.eq(_r22).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
              _n34 = i.slides.eq(_r22).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

          _s25 = void 0 === _e75 ? _n34 : void 0 === _n34 ? _e75 : _n34 - _r22 == _r22 - _e75 ? _r22 : _n34 - _r22 < _r22 - _e75 ? _n34 : _e75;
        } else _s25 = t.realIndex;

        i.visibleSlidesIndexes.indexOf(_s25) < 0 && (i.params.centeredSlides ? _s25 = _s25 > _r22 ? _s25 - Math.floor(n / 2) + 1 : _s25 + Math.floor(n / 2) - 1 : _s25 > _r22 && (_s25 = _s25 - n + 1), i.slideTo(_s25, e ? 0 : void 0));
      }

      var s = 1;
      var r = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView), i.slides.removeClass(r), i.params.loop) for (var _e76 = 0; _e76 < s; _e76 += 1) {
        i.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e76, "\"]")).addClass(r);
      } else for (var _e77 = 0; _e77 < s; _e77 += 1) {
        i.slides.eq(t.realIndex + _e77).addClass(r);
      }
    }
  };
  var ce = [_, N, j, H, R, F, X, {
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
      m.extend(this, {
        mousewheel: {
          enabled: !1,
          enable: G.enable.bind(this),
          disable: G.disable.bind(this),
          handle: G.handle.bind(this),
          handleMouseEnter: G.handleMouseEnter.bind(this),
          handleMouseLeave: G.handleMouseLeave.bind(this),
          lastScrollTime: m.now()
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
      m.extend(this, {
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
            i = _t$navigation.$nextEl,
            n = _t$navigation.$prevEl;

        if (t.params.navigation.hideOnClick && !p(e.target).is(n) && !p(e.target).is(i)) {
          var _e78;

          i ? _e78 = i.hasClass(t.params.navigation.hiddenClass) : n && (_e78 = n.hasClass(t.params.navigation.hiddenClass)), !0 === _e78 ? t.emit("navigationShow", t) : t.emit("navigationHide", t), i && i.toggleClass(t.params.navigation.hiddenClass), n && n.toggleClass(t.params.navigation.hiddenClass);
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
      m.extend(this, {
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

        if (t.params.pagination.el && t.params.pagination.hideOnClick && t.pagination.$el.length > 0 && !p(e.target).hasClass(t.params.pagination.bulletClass)) {
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
      m.extend(this, {
        scrollbar: {
          init: U.init.bind(this),
          destroy: U.destroy.bind(this),
          updateSize: U.updateSize.bind(this),
          setTranslate: U.setTranslate.bind(this),
          setTransition: U.setTransition.bind(this),
          enableDraggable: U.enableDraggable.bind(this),
          disableDraggable: U.disableDraggable.bind(this),
          setDragPosition: U.setDragPosition.bind(this),
          onDragStart: U.onDragStart.bind(this),
          onDragMove: U.onDragMove.bind(this),
          onDragEnd: U.onDragEnd.bind(this),
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
      m.extend(this, {
        parallax: {
          setTransform: J.setTransform.bind(this),
          setTranslate: J.setTranslate.bind(this),
          setTransition: J.setTransition.bind(this)
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
      "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
        t[i] = K[i].bind(e);
      }), m.extend(e, {
        zoom: t
      });
      var i = 1;
      Object.defineProperty(e.zoom, "scale", {
        get: function get() {
          return i;
        },
        set: function set(t) {
          if (i !== t) {
            var _i50 = e.zoom.gesture.$imageEl ? e.zoom.gesture.$imageEl[0] : void 0,
                _n35 = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;

            e.emit("zoomChange", t, _i50, _n35);
          }

          i = t;
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
      m.extend(this, {
        lazy: {
          initialImageLoaded: !1,
          load: Q.load.bind(this),
          loadInSlide: Q.loadInSlide.bind(this)
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
      m.extend(this, {
        controller: {
          control: this.params.controller.control,
          getInterpolateFunction: Z.getInterpolateFunction.bind(this),
          setTranslate: Z.setTranslate.bind(this),
          setTransition: Z.setTransition.bind(this)
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
      m.extend(e, {
        a11y: {
          liveRegion: p("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
        }
      }), Object.keys(ee).forEach(function (t) {
        e.a11y[t] = ee[t].bind(e);
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
      m.extend(this, {
        history: {
          init: te.init.bind(this),
          setHistory: te.setHistory.bind(this),
          setHistoryPopState: te.setHistoryPopState.bind(this),
          scrollToSlide: te.scrollToSlide.bind(this),
          destroy: te.destroy.bind(this)
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
      m.extend(this, {
        hashNavigation: {
          initialized: !1,
          init: ie.init.bind(this),
          destroy: ie.destroy.bind(this),
          setHash: ie.setHash.bind(this),
          onHashCange: ie.onHashCange.bind(this)
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
      m.extend(e, {
        autoplay: {
          running: !1,
          paused: !1,
          run: ne.run.bind(e),
          start: ne.start.bind(e),
          stop: ne.stop.bind(e),
          pause: ne.pause.bind(e),
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
        var i = this;
        i.autoplay.running && (t || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(e) : i.autoplay.stop());
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
      m.extend(this, {
        fadeEffect: {
          setTranslate: se.setTranslate.bind(this),
          setTransition: se.setTransition.bind(this)
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
        m.extend(this.params, e), m.extend(this.originalParams, e);
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
      m.extend(this, {
        cubeEffect: {
          setTranslate: re.setTranslate.bind(this),
          setTransition: re.setTransition.bind(this)
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
        m.extend(this.params, e), m.extend(this.originalParams, e);
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
      m.extend(this, {
        flipEffect: {
          setTranslate: ae.setTranslate.bind(this),
          setTransition: ae.setTransition.bind(this)
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
        m.extend(this.params, e), m.extend(this.originalParams, e);
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
      m.extend(this, {
        coverflowEffect: {
          setTranslate: oe.setTranslate.bind(this),
          setTransition: oe.setTransition.bind(this)
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
      m.extend(this, {
        thumbs: {
          swiper: null,
          init: le.init.bind(this),
          update: le.update.bind(this),
          onThumbClick: le.onThumbClick.bind(this)
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
  void 0 === O.use && (O.use = O.Class.use, O.installModule = O.Class.installModule), O.use(ce);
  var de = O;

  var ue =
  /*#__PURE__*/
  function () {
    function ue() {
      _classCallCheck(this, ue);

      this.root = document.documentElement, this.updateVh();
    }

    _createClass(ue, [{
      key: "events",
      value: function events() {
        window.addEventListener("resize", this.updateVh.bind(this));
      }
    }, {
      key: "updateVh",
      value: function updateVh() {
        this.root.style.setProperty("--vh", "".concat(this.vhValue(), "px"));
      }
    }, {
      key: "vhValue",
      value: function vhValue() {
        return window.innerHeight;
      }
    }]);

    return ue;
  }();

  var pe =
  /*#__PURE__*/
  function () {
    function pe() {
      _classCallCheck(this, pe);

      this.button = s()(".button-main"), this.contentWrapper = s()(".content-wrapper"), this.animatedHero = s()(".animated-hero"), this.html = s()("html"), this.disableJump(), this.initialClasses(), this.events();
    }

    _createClass(pe, [{
      key: "events",
      value: function events() {
        this.button.click(this.animate.bind(this));
      }
    }, {
      key: "initialClasses",
      value: function initialClasses() {
        this.contentWrapper.addClass("slide-on-click"), this.animatedHero.addClass("scale-on-click");
      }
    }, {
      key: "animate",
      value: function animate() {
        this.contentWrapper.toggleClass("slide-on-click--clicked"), this.animatedHero.toggleClass("scale-on-click--clicked"), window.innerWidth >= 1024 && this.html.toggleClass("overflow-x-visible");
      }
    }, {
      key: "disableJump",
      value: function disableJump() {
        window.innerWidth >= 1024 ? this.button.attr("href", "#1") : this.html.addClass("overflow-x-visible");
      }
    }]);

    return pe;
  }();

  i(6);

  var he =
  /*#__PURE__*/
  function () {
    function he() {
      _classCallCheck(this, he);

      this.progressBars = s()(".progress-bar__bar"), this.createWaypoints();
    }

    _createClass(he, [{
      key: "createWaypoints",
      value: function createWaypoints() {
        this.progressBars.each(function (e, t) {
          new Waypoint({
            element: t,
            handler: function handler(e) {
              s()(t).addClass("progress-on-scroll");
            },
            offset: "96%"
          });
        });
      }
    }]);

    return he;
  }(),
      fe = (i(7), i(3)),
      me = i.n(fe);

  new he(), particlesJS.load("particles-js", "/particles/particles.json", function () {
    return 0;
  }), new de(".swiper-container", {
    autoplay: {
      delay: 4e3,
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
  }), new ue(), new pe(), new me.a(".professional-skill", {
    strings: ["web developer", "front-end engineer", "web expert"],
    loop: !0,
    typeSpeed: 80,
    shuffle: !0,
    backSpeed: 30
  }), new r(), new l();
}]);