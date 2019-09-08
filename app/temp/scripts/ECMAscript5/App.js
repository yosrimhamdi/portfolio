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
  }, i.p = "", i(i.s = 3);
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

    var a = [],
        r = i.document,
        o = Object.getPrototypeOf,
        l = a.slice,
        c = a.concat,
        d = a.push,
        u = a.indexOf,
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
        x = {
      type: !0,
      src: !0,
      nonce: !0,
      noModule: !0
    };

    function w(e, t, i) {
      var n,
          s,
          a = (i = i || r).createElement("script");
      if (a.text = e, t) for (n in x) {
        (s = t[n] || t.getAttribute && t.getAttribute(n)) && a.setAttribute(n, s);
      }
      i.head.appendChild(a).parentNode.removeChild(a);
    }

    function T(e) {
      return null == e ? e + "" : "object" == _typeof(e) || "function" == typeof e ? p[h.call(e)] || "object" : _typeof(e);
    }

    var C = function C(e, t) {
      return new C.fn.init(e, t);
    },
        E = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function S(e) {
      var t = !!e && "length" in e && e.length,
          i = T(e);
      return !y(e) && !b(e) && ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
    }

    C.fn = C.prototype = {
      jquery: "3.4.1",
      constructor: C,
      length: 0,
      toArray: function toArray() {
        return l.call(this);
      },
      get: function get(e) {
        return null == e ? l.call(this) : e < 0 ? this[e + this.length] : this[e];
      },
      pushStack: function pushStack(e) {
        var t = C.merge(this.constructor(), e);
        return t.prevObject = this, t;
      },
      each: function each(e) {
        return C.each(this, e);
      },
      map: function map(e) {
        return this.pushStack(C.map(this, function (t, i) {
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
      sort: a.sort,
      splice: a.splice
    }, C.extend = C.fn.extend = function () {
      var e,
          t,
          i,
          n,
          s,
          a,
          r = arguments[0] || {},
          o = 1,
          l = arguments.length,
          c = !1;

      for ("boolean" == typeof r && (c = r, r = arguments[o] || {}, o++), "object" == _typeof(r) || y(r) || (r = {}), o === l && (r = this, o--); o < l; o++) {
        if (null != (e = arguments[o])) for (t in e) {
          n = e[t], "__proto__" !== t && r !== n && (c && n && (C.isPlainObject(n) || (s = Array.isArray(n))) ? (i = r[t], a = s && !Array.isArray(i) ? [] : s || C.isPlainObject(i) ? i : {}, s = !1, r[t] = C.extend(c, a, n)) : void 0 !== n && (r[t] = n));
        }
      }

      return r;
    }, C.extend({
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
        w(e, {
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
        return null == e ? "" : (e + "").replace(E, "");
      },
      makeArray: function makeArray(e, t) {
        var i = t || [];
        return null != e && (S(Object(e)) ? C.merge(i, "string" == typeof e ? [e] : e) : d.call(i, e)), i;
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
        for (var n = [], s = 0, a = e.length, r = !i; s < a; s++) {
          !t(e[s], s) !== r && n.push(e[s]);
        }

        return n;
      },
      map: function map(e, t, i) {
        var n,
            s,
            a = 0,
            r = [];
        if (S(e)) for (n = e.length; a < n; a++) {
          null != (s = t(e[a], a, i)) && r.push(s);
        } else for (a in e) {
          null != (s = t(e[a], a, i)) && r.push(s);
        }
        return c.apply([], r);
      },
      guid: 1,
      support: g
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = a[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (e, t) {
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
          a,
          r,
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
          x = "sizzle" + 1 * new Date(),
          w = e.document,
          T = 0,
          C = 0,
          E = le(),
          S = le(),
          k = le(),
          $ = le(),
          M = function M(e, t) {
        return e === t && (u = !0), 0;
      },
          P = {}.hasOwnProperty,
          z = [],
          L = z.pop,
          D = z.push,
          A = z.push,
          I = z.slice,
          O = function O(e, t) {
        for (var i = 0, n = e.length; i < n; i++) {
          if (e[i] === t) return i;
        }

        return -1;
      },
          N = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
          _ = "[\\x20\\t\\r\\n\\f]",
          j = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
          H = "\\[" + _ + "*(" + j + ")(?:" + _ + "*([*^$|!~]?=)" + _ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + j + "))|)" + _ + "*\\]",
          q = ":(" + j + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
          B = new RegExp(_ + "+", "g"),
          F = new RegExp("^" + _ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + _ + "+$", "g"),
          R = new RegExp("^" + _ + "*," + _ + "*"),
          X = new RegExp("^" + _ + "*([>+~]|" + _ + ")" + _ + "*"),
          G = new RegExp(_ + "|>"),
          W = new RegExp(q),
          V = new RegExp("^" + j + "$"),
          Y = {
        ID: new RegExp("^#(" + j + ")"),
        CLASS: new RegExp("^\\.(" + j + ")"),
        TAG: new RegExp("^(" + j + "|[*])"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + q),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + _ + "*(even|odd|(([+-]|)(\\d*)n|)" + _ + "*(?:([+-]|)" + _ + "*(\\d+)|))" + _ + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + N + ")$", "i"),
        needsContext: new RegExp("^" + _ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + _ + "*((?:-\\d)?\\d*)" + _ + "*\\)|)(?=[^-]|$)", "i")
      },
          U = /HTML$/i,
          J = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Q = /^[^{]+\{\s*\[native \w/,
          Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          ee = /[+~]/,
          te = new RegExp("\\\\([\\da-f]{1,6}" + _ + "?|(" + _ + ")|.)", "ig"),
          ie = function ie(e, t, i) {
        var n = "0x" + t - 65536;
        return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320);
      },
          ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
          se = function se(e, t) {
        return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e;
      },
          ae = function ae() {
        p();
      },
          re = xe(function (e) {
        return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
      }, {
        dir: "parentNode",
        next: "legend"
      });

      try {
        A.apply(z = I.call(w.childNodes), w.childNodes), z[w.childNodes.length].nodeType;
      } catch (e) {
        A = {
          apply: z.length ? function (e, t) {
            D.apply(e, I.call(t));
          } : function (e, t) {
            for (var i = e.length, n = 0; e[i++] = t[n++];) {
              ;
            }

            e.length = i - 1;
          }
        };
      }

      function oe(e, t, n, s) {
        var a,
            o,
            c,
            d,
            u,
            f,
            g,
            y = t && t.ownerDocument,
            T = t ? t.nodeType : 9;
        if (n = n || [], "string" != typeof e || !e || 1 !== T && 9 !== T && 11 !== T) return n;

        if (!s && ((t ? t.ownerDocument || t : w) !== h && p(t), t = t || h, m)) {
          if (11 !== T && (u = Z.exec(e))) if (a = u[1]) {
            if (9 === T) {
              if (!(c = t.getElementById(a))) return n;
              if (c.id === a) return n.push(c), n;
            } else if (y && (c = y.getElementById(a)) && b(t, c) && c.id === a) return n.push(c), n;
          } else {
            if (u[2]) return A.apply(n, t.getElementsByTagName(e)), n;
            if ((a = u[3]) && i.getElementsByClassName && t.getElementsByClassName) return A.apply(n, t.getElementsByClassName(a)), n;
          }

          if (i.qsa && !$[e + " "] && (!v || !v.test(e)) && (1 !== T || "object" !== t.nodeName.toLowerCase())) {
            if (g = e, y = t, 1 === T && G.test(e)) {
              for ((d = t.getAttribute("id")) ? d = d.replace(ne, se) : t.setAttribute("id", d = x), o = (f = r(e)).length; o--;) {
                f[o] = "#" + d + " " + be(f[o]);
              }

              g = f.join(","), y = ee.test(e) && ge(t.parentNode) || t;
            }

            try {
              return A.apply(n, y.querySelectorAll(g)), n;
            } catch (t) {
              $(e, !0);
            } finally {
              d === x && t.removeAttribute("id");
            }
          }
        }

        return l(e.replace(F, "$1"), t, n, s);
      }

      function le() {
        var e = [];
        return function t(i, s) {
          return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = s;
        };
      }

      function ce(e) {
        return e[x] = !0, e;
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
          return "form" in t ? t.parentNode && !1 === t.disabled ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === e : t.disabled === e : t.isDisabled === e || t.isDisabled !== !e && re(t) === e : t.disabled === e : "label" in t && t.disabled === e;
        };
      }

      function ve(e) {
        return ce(function (t) {
          return t = +t, ce(function (i, n) {
            for (var s, a = e([], i.length, t), r = a.length; r--;) {
              i[s = a[r]] && (i[s] = !(n[s] = i[s]));
            }
          });
        });
      }

      function ge(e) {
        return e && void 0 !== e.getElementsByTagName && e;
      }

      for (t in i = oe.support = {}, a = oe.isXML = function (e) {
        var t = e.namespaceURI,
            i = (e.ownerDocument || e).documentElement;
        return !U.test(t || i && i.nodeName || "HTML");
      }, p = oe.setDocument = function (e) {
        var t,
            s,
            r = e ? e.ownerDocument || e : w;
        return r !== h && 9 === r.nodeType && r.documentElement ? (f = (h = r).documentElement, m = !a(h), w !== h && (s = h.defaultView) && s.top !== s && (s.addEventListener ? s.addEventListener("unload", ae, !1) : s.attachEvent && s.attachEvent("onunload", ae)), i.attributes = de(function (e) {
          return e.className = "i", !e.getAttribute("className");
        }), i.getElementsByTagName = de(function (e) {
          return e.appendChild(h.createComment("")), !e.getElementsByTagName("*").length;
        }), i.getElementsByClassName = Q.test(h.getElementsByClassName), i.getById = de(function (e) {
          return f.appendChild(e).id = x, !h.getElementsByName || !h.getElementsByName(x).length;
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
                a = t.getElementById(e);

            if (a) {
              if ((i = a.getAttributeNode("id")) && i.value === e) return [a];

              for (s = t.getElementsByName(e), n = 0; a = s[n++];) {
                if ((i = a.getAttributeNode("id")) && i.value === e) return [a];
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
              a = t.getElementsByTagName(e);

          if ("*" === e) {
            for (; i = a[s++];) {
              1 === i.nodeType && n.push(i);
            }

            return n;
          }

          return a;
        }, n.find.CLASS = i.getElementsByClassName && function (e, t) {
          if (void 0 !== t.getElementsByClassName && m) return t.getElementsByClassName(e);
        }, g = [], v = [], (i.qsa = Q.test(h.querySelectorAll)) && (de(function (e) {
          f.appendChild(e).innerHTML = "<a id='" + x + "'></a><select id='" + x + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + _ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + _ + "*(?:value|" + N + ")"), e.querySelectorAll("[id~=" + x + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + x + "+*").length || v.push(".#.+[+~]");
        }), de(function (e) {
          e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
          var t = h.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + _ + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), f.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
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
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === h || e.ownerDocument === w && b(w, e) ? -1 : t === h || t.ownerDocument === w && b(w, t) ? 1 : d ? O(d, e) - O(d, t) : 0 : 4 & n ? -1 : 1);
        } : function (e, t) {
          if (e === t) return u = !0, 0;
          var i,
              n = 0,
              s = e.parentNode,
              a = t.parentNode,
              r = [e],
              o = [t];
          if (!s || !a) return e === h ? -1 : t === h ? 1 : s ? -1 : a ? 1 : d ? O(d, e) - O(d, t) : 0;
          if (s === a) return pe(e, t);

          for (i = e; i = i.parentNode;) {
            r.unshift(i);
          }

          for (i = t; i = i.parentNode;) {
            o.unshift(i);
          }

          for (; r[n] === o[n];) {
            n++;
          }

          return n ? pe(r[n], o[n]) : r[n] === w ? -1 : o[n] === w ? 1 : 0;
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
            a = s && P.call(n.attrHandle, t.toLowerCase()) ? s(e, t, !m) : void 0;
        return void 0 !== a ? a : i.attributes || !m ? e.getAttribute(t) : (a = e.getAttributeNode(t)) && a.specified ? a.value : null;
      }, oe.escape = function (e) {
        return (e + "").replace(ne, se);
      }, oe.error = function (e) {
        throw new Error("Syntax error, unrecognized expression: " + e);
      }, oe.uniqueSort = function (e) {
        var t,
            n = [],
            s = 0,
            a = 0;

        if (u = !i.detectDuplicates, d = !i.sortStable && e.slice(0), e.sort(M), u) {
          for (; t = e[a++];) {
            t === e[a] && (s = n.push(a));
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
            a = e.nodeType;

        if (a) {
          if (1 === a || 9 === a || 11 === a) {
            if ("string" == typeof e.textContent) return e.textContent;

            for (e = e.firstChild; e; e = e.nextSibling) {
              i += s(e);
            }
          } else if (3 === a || 4 === a) return e.nodeValue;
        } else for (; t = e[n++];) {
          i += s(t);
        }

        return i;
      }, (n = oe.selectors = {
        cacheLength: 50,
        createPseudo: ce,
        match: Y,
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
            return Y.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && W.test(i) && (t = r(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3));
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
            var t = E[e + " "];
            return t || (t = new RegExp("(^|" + _ + ")" + e + "(" + _ + "|$)")) && E(e, function (e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "");
            });
          },
          ATTR: function ATTR(e, t, i) {
            return function (n) {
              var s = oe.attr(n, e);
              return null == s ? "!=" === t : !t || (s += "", "=" === t ? s === i : "!=" === t ? s !== i : "^=" === t ? i && 0 === s.indexOf(i) : "*=" === t ? i && s.indexOf(i) > -1 : "$=" === t ? i && s.slice(-i.length) === i : "~=" === t ? (" " + s.replace(B, " ") + " ").indexOf(i) > -1 : "|=" === t && (s === i || s.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function CHILD(e, t, i, n, s) {
            var a = "nth" !== e.slice(0, 3),
                r = "last" !== e.slice(-4),
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
                  m = a !== r ? "nextSibling" : "previousSibling",
                  v = t.parentNode,
                  g = o && t.nodeName.toLowerCase(),
                  y = !l && !o,
                  b = !1;

              if (v) {
                if (a) {
                  for (; m;) {
                    for (p = t; p = p[m];) {
                      if (o ? p.nodeName.toLowerCase() === g : 1 === p.nodeType) return !1;
                    }

                    f = m = "only" === e && !f && "nextSibling";
                  }

                  return !0;
                }

                if (f = [r ? v.firstChild : v.lastChild], r && y) {
                  for (b = (h = (c = (d = (u = (p = v)[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]) && c[2], p = h && v.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();) {
                    if (1 === p.nodeType && ++b && p === t) {
                      d[e] = [T, h, b];
                      break;
                    }
                  }
                } else if (y && (b = h = (c = (d = (u = (p = t)[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] || [])[0] === T && c[1]), !1 === b) for (; (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((o ? p.nodeName.toLowerCase() !== g : 1 !== p.nodeType) || !++b || (y && ((d = (u = p[x] || (p[x] = {}))[p.uniqueID] || (u[p.uniqueID] = {}))[e] = [T, b]), p !== t));) {
                  ;
                }

                return (b -= s) === n || b % n == 0 && b / n >= 0;
              }
            };
          },
          PSEUDO: function PSEUDO(e, t) {
            var i,
                s = n.pseudos[e] || n.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);
            return s[x] ? s(t) : s.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? ce(function (e, i) {
              for (var n, a = s(e, t), r = a.length; r--;) {
                e[n = O(e, a[r])] = !(i[n] = a[r]);
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
                n = o(e.replace(F, "$1"));
            return n[x] ? ce(function (e, t, i, s) {
              for (var a, r = n(e, null, s, []), o = e.length; o--;) {
                (a = r[o]) && (e[o] = !(t[o] = a));
              }
            }) : function (e, s, a) {
              return t[0] = e, n(t, null, a, i), t[0] = null, !i.pop();
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
            return V.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(te, ie).toLowerCase(), function (t) {
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

      function xe(e, t, i) {
        var n = t.dir,
            s = t.next,
            a = s || n,
            r = i && "parentNode" === a,
            o = C++;
        return t.first ? function (t, i, s) {
          for (; t = t[n];) {
            if (1 === t.nodeType || r) return e(t, i, s);
          }

          return !1;
        } : function (t, i, l) {
          var c,
              d,
              u,
              p = [T, o];

          if (l) {
            for (; t = t[n];) {
              if ((1 === t.nodeType || r) && e(t, i, l)) return !0;
            }
          } else for (; t = t[n];) {
            if (1 === t.nodeType || r) if (d = (u = t[x] || (t[x] = {}))[t.uniqueID] || (u[t.uniqueID] = {}), s && s === t.nodeName.toLowerCase()) t = t[n] || t;else {
              if ((c = d[a]) && c[0] === T && c[1] === o) return p[2] = c[2];
              if (d[a] = p, p[2] = e(t, i, l)) return !0;
            }
          }

          return !1;
        };
      }

      function we(e) {
        return e.length > 1 ? function (t, i, n) {
          for (var s = e.length; s--;) {
            if (!e[s](t, i, n)) return !1;
          }

          return !0;
        } : e[0];
      }

      function Te(e, t, i, n, s) {
        for (var a, r = [], o = 0, l = e.length, c = null != t; o < l; o++) {
          (a = e[o]) && (i && !i(a, n, s) || (r.push(a), c && t.push(o)));
        }

        return r;
      }

      function Ce(e, t, i, n, s, a) {
        return n && !n[x] && (n = Ce(n)), s && !s[x] && (s = Ce(s, a)), ce(function (a, r, o, l) {
          var c,
              d,
              u,
              p = [],
              h = [],
              f = r.length,
              m = a || function (e, t, i) {
            for (var n = 0, s = t.length; n < s; n++) {
              oe(e, t[n], i);
            }

            return i;
          }(t || "*", o.nodeType ? [o] : o, []),
              v = !e || !a && t ? m : Te(m, p, e, o, l),
              g = i ? s || (a ? e : f || n) ? [] : r : v;

          if (i && i(v, g, o, l), n) for (c = Te(g, h), n(c, [], o, l), d = c.length; d--;) {
            (u = c[d]) && (g[h[d]] = !(v[h[d]] = u));
          }

          if (a) {
            if (s || e) {
              if (s) {
                for (c = [], d = g.length; d--;) {
                  (u = g[d]) && c.push(v[d] = u);
                }

                s(null, g = [], c, l);
              }

              for (d = g.length; d--;) {
                (u = g[d]) && (c = s ? O(a, u) : p[d]) > -1 && (a[c] = !(r[c] = u));
              }
            }
          } else g = Te(g === r ? g.splice(f, g.length) : g), s ? s(null, r, g, l) : A.apply(r, g);
        });
      }

      function Ee(e) {
        for (var t, i, s, a = e.length, r = n.relative[e[0].type], o = r || n.relative[" "], l = r ? 1 : 0, d = xe(function (e) {
          return e === t;
        }, o, !0), u = xe(function (e) {
          return O(t, e) > -1;
        }, o, !0), p = [function (e, i, n) {
          var s = !r && (n || i !== c) || ((t = i).nodeType ? d(e, i, n) : u(e, i, n));
          return t = null, s;
        }]; l < a; l++) {
          if (i = n.relative[e[l].type]) p = [xe(we(p), i)];else {
            if ((i = n.filter[e[l].type].apply(null, e[l].matches))[x]) {
              for (s = ++l; s < a && !n.relative[e[s].type]; s++) {
                ;
              }

              return Ce(l > 1 && we(p), l > 1 && be(e.slice(0, l - 1).concat({
                value: " " === e[l - 2].type ? "*" : ""
              })).replace(F, "$1"), i, l < s && Ee(e.slice(l, s)), s < a && Ee(e = e.slice(s)), s < a && be(e));
            }

            p.push(i);
          }
        }

        return we(p);
      }

      return ye.prototype = n.filters = n.pseudos, n.setFilters = new ye(), r = oe.tokenize = function (e, t) {
        var i,
            s,
            a,
            r,
            o,
            l,
            c,
            d = S[e + " "];
        if (d) return t ? 0 : d.slice(0);

        for (o = e, l = [], c = n.preFilter; o;) {
          for (r in i && !(s = R.exec(o)) || (s && (o = o.slice(s[0].length) || o), l.push(a = [])), i = !1, (s = X.exec(o)) && (i = s.shift(), a.push({
            value: i,
            type: s[0].replace(F, " ")
          }), o = o.slice(i.length)), n.filter) {
            !(s = Y[r].exec(o)) || c[r] && !(s = c[r](s)) || (i = s.shift(), a.push({
              value: i,
              type: r,
              matches: s
            }), o = o.slice(i.length));
          }

          if (!i) break;
        }

        return t ? o.length : o ? oe.error(e) : S(e, l).slice(0);
      }, o = oe.compile = function (e, t) {
        var i,
            s = [],
            a = [],
            o = k[e + " "];

        if (!o) {
          for (t || (t = r(e)), i = t.length; i--;) {
            (o = Ee(t[i]))[x] ? s.push(o) : a.push(o);
          }

          (o = k(e, function (e, t) {
            var i = t.length > 0,
                s = e.length > 0,
                a = function a(_a, r, o, l, d) {
              var u,
                  f,
                  v,
                  g = 0,
                  y = "0",
                  b = _a && [],
                  x = [],
                  w = c,
                  C = _a || s && n.find.TAG("*", d),
                  E = T += null == w ? 1 : Math.random() || .1,
                  S = C.length;

              for (d && (c = r === h || r || d); y !== S && null != (u = C[y]); y++) {
                if (s && u) {
                  for (f = 0, r || u.ownerDocument === h || (p(u), o = !m); v = e[f++];) {
                    if (v(u, r || h, o)) {
                      l.push(u);
                      break;
                    }
                  }

                  d && (T = E);
                }

                i && ((u = !v && u) && g--, _a && b.push(u));
              }

              if (g += y, i && y !== g) {
                for (f = 0; v = t[f++];) {
                  v(b, x, r, o);
                }

                if (_a) {
                  if (g > 0) for (; y--;) {
                    b[y] || x[y] || (x[y] = L.call(l));
                  }
                  x = Te(x);
                }

                A.apply(l, x), d && !_a && x.length > 0 && g + t.length > 1 && oe.uniqueSort(l);
              }

              return d && (T = E, c = w), b;
            };

            return i ? ce(a) : a;
          }(a, s))).selector = e;
        }

        return o;
      }, l = oe.select = function (e, t, i, s) {
        var a,
            l,
            c,
            d,
            u,
            p = "function" == typeof e && e,
            h = !s && r(e = p.selector || e);

        if (i = i || [], 1 === h.length) {
          if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === t.nodeType && m && n.relative[l[1].type]) {
            if (!(t = (n.find.ID(c.matches[0].replace(te, ie), t) || [])[0])) return i;
            p && (t = t.parentNode), e = e.slice(l.shift().value.length);
          }

          for (a = Y.needsContext.test(e) ? 0 : l.length; a-- && (c = l[a], !n.relative[d = c.type]);) {
            if ((u = n.find[d]) && (s = u(c.matches[0].replace(te, ie), ee.test(l[0].type) && ge(t.parentNode) || t))) {
              if (l.splice(a, 1), !(e = s.length && be(l))) return A.apply(i, s), i;
              break;
            }
          }
        }

        return (p || o(e, h))(s, t, !m, i, !t || ee.test(e) && ge(t.parentNode) || t), i;
      }, i.sortStable = x.split("").sort(M).join("") === x, i.detectDuplicates = !!u, p(), i.sortDetached = de(function (e) {
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
      }) || ue(N, function (e, t, i) {
        var n;
        if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null;
      }), oe;
    }(i);

    C.find = k, C.expr = k.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = k.uniqueSort, C.text = k.getText, C.isXMLDoc = k.isXML, C.contains = k.contains, C.escapeSelector = k.escape;

    var $ = function $(e, t, i) {
      for (var n = [], s = void 0 !== i; (e = e[t]) && 9 !== e.nodeType;) {
        if (1 === e.nodeType) {
          if (s && C(e).is(i)) break;
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
        P = C.expr.match.needsContext;

    function z(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }

    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function D(e, t, i) {
      return y(t) ? C.grep(e, function (e, n) {
        return !!t.call(e, n, e) !== i;
      }) : t.nodeType ? C.grep(e, function (e) {
        return e === t !== i;
      }) : "string" != typeof t ? C.grep(e, function (e) {
        return u.call(t, e) > -1 !== i;
      }) : C.filter(t, e, i);
    }

    C.filter = function (e, t, i) {
      var n = t[0];
      return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? C.find.matchesSelector(n, e) ? [n] : [] : C.find.matches(e, C.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, C.fn.extend({
      find: function find(e) {
        var t,
            i,
            n = this.length,
            s = this;
        if ("string" != typeof e) return this.pushStack(C(e).filter(function () {
          for (t = 0; t < n; t++) {
            if (C.contains(s[t], this)) return !0;
          }
        }));

        for (i = this.pushStack([]), t = 0; t < n; t++) {
          C.find(e, s[t], i);
        }

        return n > 1 ? C.uniqueSort(i) : i;
      },
      filter: function filter(e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function not(e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function is(e) {
        return !!D(this, "string" == typeof e && P.test(e) ? C(e) : e || [], !1).length;
      }
    });
    var A,
        I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function (e, t, i) {
      var n, s;
      if (!e) return this;

      if (i = i || A, "string" == typeof e) {
        if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : I.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);

        if (n[1]) {
          if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : r, !0)), L.test(n[1]) && C.isPlainObject(t)) for (n in t) {
            y(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
          }
          return this;
        }

        return (s = r.getElementById(n[2])) && (this[0] = s, this.length = 1), this;
      }

      return e.nodeType ? (this[0] = e, this.length = 1, this) : y(e) ? void 0 !== i.ready ? i.ready(e) : e(C) : C.makeArray(e, this);
    }).prototype = C.fn, A = C(r);
    var O = /^(?:parents|prev(?:Until|All))/,
        N = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

    function _(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;) {
        ;
      }

      return e;
    }

    C.fn.extend({
      has: function has(e) {
        var t = C(e, this),
            i = t.length;
        return this.filter(function () {
          for (var e = 0; e < i; e++) {
            if (C.contains(this, t[e])) return !0;
          }
        });
      },
      closest: function closest(e, t) {
        var i,
            n = 0,
            s = this.length,
            a = [],
            r = "string" != typeof e && C(e);
        if (!P.test(e)) for (; n < s; n++) {
          for (i = this[n]; i && i !== t; i = i.parentNode) {
            if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && C.find.matchesSelector(i, e))) {
              a.push(i);
              break;
            }
          }
        }
        return this.pushStack(a.length > 1 ? C.uniqueSort(a) : a);
      },
      index: function index(e) {
        return e ? "string" == typeof e ? u.call(C(e), this[0]) : u.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
      },
      add: function add(e, t) {
        return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
      },
      addBack: function addBack(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
      }
    }), C.each({
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
        return _(e, "nextSibling");
      },
      prev: function prev(e) {
        return _(e, "previousSibling");
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
        return void 0 !== e.contentDocument ? e.contentDocument : (z(e, "template") && (e = e.content || e), C.merge([], e.childNodes));
      }
    }, function (e, t) {
      C.fn[e] = function (i, n) {
        var s = C.map(this, t, i);
        return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (s = C.filter(n, s)), this.length > 1 && (N[e] || C.uniqueSort(s), O.test(e) && s.reverse()), this.pushStack(s);
      };
    });
    var j = /[^\x20\t\r\n\f]+/g;

    function H(e) {
      return e;
    }

    function q(e) {
      throw e;
    }

    function B(e, t, i, n) {
      var s;

      try {
        e && y(s = e.promise) ? s.call(e).done(t).fail(i) : e && y(s = e.then) ? s.call(e, t, i) : t.apply(void 0, [e].slice(n));
      } catch (e) {
        i.apply(void 0, [e]);
      }
    }

    C.Callbacks = function (e) {
      e = "string" == typeof e ? function (e) {
        var t = {};
        return C.each(e.match(j) || [], function (e, i) {
          t[i] = !0;
        }), t;
      }(e) : C.extend({}, e);

      var t,
          i,
          n,
          s,
          a = [],
          r = [],
          o = -1,
          l = function l() {
        for (s = s || e.once, n = t = !0; r.length; o = -1) {
          for (i = r.shift(); ++o < a.length;) {
            !1 === a[o].apply(i[0], i[1]) && e.stopOnFalse && (o = a.length, i = !1);
          }
        }

        e.memory || (i = !1), t = !1, s && (a = i ? [] : "");
      },
          c = {
        add: function add() {
          return a && (i && !t && (o = a.length - 1, r.push(i)), function t(i) {
            C.each(i, function (i, n) {
              y(n) ? e.unique && c.has(n) || a.push(n) : n && n.length && "string" !== T(n) && t(n);
            });
          }(arguments), i && !t && l()), this;
        },
        remove: function remove() {
          return C.each(arguments, function (e, t) {
            for (var i; (i = C.inArray(t, a, i)) > -1;) {
              a.splice(i, 1), i <= o && o--;
            }
          }), this;
        },
        has: function has(e) {
          return e ? C.inArray(e, a) > -1 : a.length > 0;
        },
        empty: function empty() {
          return a && (a = []), this;
        },
        disable: function disable() {
          return s = r = [], a = i = "", this;
        },
        disabled: function disabled() {
          return !a;
        },
        lock: function lock() {
          return s = r = [], i || t || (a = i = ""), this;
        },
        locked: function locked() {
          return !!s;
        },
        fireWith: function fireWith(e, i) {
          return s || (i = [e, (i = i || []).slice ? i.slice() : i], r.push(i), t || l()), this;
        },
        fire: function fire() {
          return c.fireWith(this, arguments), this;
        },
        fired: function fired() {
          return !!n;
        }
      };

      return c;
    }, C.extend({
      Deferred: function Deferred(e) {
        var t = [["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2], ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]],
            n = "pending",
            s = {
          state: function state() {
            return n;
          },
          always: function always() {
            return a.done(arguments).fail(arguments), this;
          },
          "catch": function _catch(e) {
            return s.then(null, e);
          },
          pipe: function pipe() {
            var e = arguments;
            return C.Deferred(function (i) {
              C.each(t, function (t, n) {
                var s = y(e[n[4]]) && e[n[4]];
                a[n[1]](function () {
                  var e = s && s.apply(this, arguments);
                  e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, s ? [e] : arguments);
                });
              }), e = null;
            }).promise();
          },
          then: function then(e, n, s) {
            var a = 0;

            function r(e, t, n, s) {
              return function () {
                var o = this,
                    l = arguments,
                    c = function c() {
                  var i, c;

                  if (!(e < a)) {
                    if ((i = n.apply(o, l)) === t.promise()) throw new TypeError("Thenable self-resolution");
                    c = i && ("object" == _typeof(i) || "function" == typeof i) && i.then, y(c) ? s ? c.call(i, r(a, t, H, s), r(a, t, q, s)) : (a++, c.call(i, r(a, t, H, s), r(a, t, q, s), r(a, t, H, t.notifyWith))) : (n !== H && (o = void 0, l = [i]), (s || t.resolveWith)(o, l));
                  }
                },
                    d = s ? c : function () {
                  try {
                    c();
                  } catch (i) {
                    C.Deferred.exceptionHook && C.Deferred.exceptionHook(i, d.stackTrace), e + 1 >= a && (n !== q && (o = void 0, l = [i]), t.rejectWith(o, l));
                  }
                };

                e ? d() : (C.Deferred.getStackHook && (d.stackTrace = C.Deferred.getStackHook()), i.setTimeout(d));
              };
            }

            return C.Deferred(function (i) {
              t[0][3].add(r(0, i, y(s) ? s : H, i.notifyWith)), t[1][3].add(r(0, i, y(e) ? e : H)), t[2][3].add(r(0, i, y(n) ? n : q));
            }).promise();
          },
          promise: function promise(e) {
            return null != e ? C.extend(e, s) : s;
          }
        },
            a = {};
        return C.each(t, function (e, i) {
          var r = i[2],
              o = i[5];
          s[i[1]] = r.add, o && r.add(function () {
            n = o;
          }, t[3 - e][2].disable, t[3 - e][3].disable, t[0][2].lock, t[0][3].lock), r.add(i[3].fire), a[i[0]] = function () {
            return a[i[0] + "With"](this === a ? void 0 : this, arguments), this;
          }, a[i[0] + "With"] = r.fireWith;
        }), s.promise(a), e && e.call(a, a), a;
      },
      when: function when(e) {
        var t = arguments.length,
            i = t,
            n = Array(i),
            s = l.call(arguments),
            a = C.Deferred(),
            r = function r(e) {
          return function (i) {
            n[e] = this, s[e] = arguments.length > 1 ? l.call(arguments) : i, --t || a.resolveWith(n, s);
          };
        };

        if (t <= 1 && (B(e, a.done(r(i)).resolve, a.reject, !t), "pending" === a.state() || y(s[i] && s[i].then))) return a.then();

        for (; i--;) {
          B(s[i], r(i), a.reject);
        }

        return a.promise();
      }
    });
    var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function (e, t) {
      i.console && i.console.warn && e && F.test(e.name) && i.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
    }, C.readyException = function (e) {
      i.setTimeout(function () {
        throw e;
      });
    };
    var R = C.Deferred();

    function X() {
      r.removeEventListener("DOMContentLoaded", X), i.removeEventListener("load", X), C.ready();
    }

    C.fn.ready = function (e) {
      return R.then(e)["catch"](function (e) {
        C.readyException(e);
      }), this;
    }, C.extend({
      isReady: !1,
      readyWait: 1,
      ready: function ready(e) {
        (!0 === e ? --C.readyWait : C.isReady) || (C.isReady = !0, !0 !== e && --C.readyWait > 0 || R.resolveWith(r, [C]));
      }
    }), C.ready.then = R.then, "complete" === r.readyState || "loading" !== r.readyState && !r.documentElement.doScroll ? i.setTimeout(C.ready) : (r.addEventListener("DOMContentLoaded", X), i.addEventListener("load", X));

    var G = function G(e, t, i, n, s, a, r) {
      var o = 0,
          l = e.length,
          c = null == i;
      if ("object" === T(i)) for (o in s = !0, i) {
        G(e, t, o, i[o], !0, a, r);
      } else if (void 0 !== n && (s = !0, y(n) || (r = !0), c && (r ? (t.call(e, n), t = null) : (c = t, t = function t(e, _t2, i) {
        return c.call(C(e), i);
      })), t)) for (; o < l; o++) {
        t(e[o], i, r ? n : n.call(e[o], o, t(e[o], i)));
      }
      return s ? e : c ? t.call(e) : l ? t(e[0], i) : a;
    },
        W = /^-ms-/,
        V = /-([a-z])/g;

    function Y(e, t) {
      return t.toUpperCase();
    }

    function U(e) {
      return e.replace(W, "ms-").replace(V, Y);
    }

    var J = function J(e) {
      return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
    };

    function K() {
      this.expando = C.expando + K.uid++;
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

          (void 0 === t || C.isEmptyObject(n)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando]);
        }
      },
      hasData: function hasData(e) {
        var t = e[this.expando];
        return void 0 !== t && !C.isEmptyObject(t);
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

    C.extend({
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
    }), C.fn.extend({
      data: function data(e, t) {
        var i,
            n,
            s,
            a = this[0],
            r = a && a.attributes;

        if (void 0 === e) {
          if (this.length && (s = Z.get(a), 1 === a.nodeType && !Q.get(a, "hasDataAttrs"))) {
            for (i = r.length; i--;) {
              r[i] && 0 === (n = r[i].name).indexOf("data-") && (n = U(n.slice(5)), ie(a, n, s[n]));
            }

            Q.set(a, "hasDataAttrs", !0);
          }

          return s;
        }

        return "object" == _typeof(e) ? this.each(function () {
          Z.set(this, e);
        }) : G(this, function (t) {
          var i;
          if (a && void 0 === t) return void 0 !== (i = Z.get(a, e)) ? i : void 0 !== (i = ie(a, e)) ? i : void 0;
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
    }), C.extend({
      queue: function queue(e, t, i) {
        var n;
        if (e) return t = (t || "fx") + "queue", n = Q.get(e, t), i && (!n || Array.isArray(i) ? n = Q.access(e, t, C.makeArray(i)) : n.push(i)), n || [];
      },
      dequeue: function dequeue(e, t) {
        t = t || "fx";

        var i = C.queue(e, t),
            n = i.length,
            s = i.shift(),
            a = C._queueHooks(e, t);

        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete a.stop, s.call(e, function () {
          C.dequeue(e, t);
        }, a)), !n && a && a.empty.fire();
      },
      _queueHooks: function _queueHooks(e, t) {
        var i = t + "queueHooks";
        return Q.get(e, i) || Q.access(e, i, {
          empty: C.Callbacks("once memory").add(function () {
            Q.remove(e, [t + "queue", i]);
          })
        });
      }
    }), C.fn.extend({
      queue: function queue(e, t) {
        var i = 2;
        return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? C.queue(this[0], e) : void 0 === t ? this : this.each(function () {
          var i = C.queue(this, e, t);
          C._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && C.dequeue(this, e);
        });
      },
      dequeue: function dequeue(e) {
        return this.each(function () {
          C.dequeue(this, e);
        });
      },
      clearQueue: function clearQueue(e) {
        return this.queue(e || "fx", []);
      },
      promise: function promise(e, t) {
        var i,
            n = 1,
            s = C.Deferred(),
            a = this,
            r = this.length,
            o = function o() {
          --n || s.resolveWith(a, [a]);
        };

        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; r--;) {
          (i = Q.get(a[r], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
        }

        return o(), s.promise(t);
      }
    });

    var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        se = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ae = ["Top", "Right", "Bottom", "Left"],
        re = r.documentElement,
        oe = function oe(e) {
      return C.contains(e.ownerDocument, e);
    },
        le = {
      composed: !0
    };

    re.getRootNode && (oe = function oe(e) {
      return C.contains(e.ownerDocument, e) || e.getRootNode(le) === e.ownerDocument;
    });

    var ce = function ce(e, t) {
      return "none" === (e = t || e).style.display || "" === e.style.display && oe(e) && "none" === C.css(e, "display");
    },
        de = function de(e, t, i, n) {
      var s,
          a,
          r = {};

      for (a in t) {
        r[a] = e.style[a], e.style[a] = t[a];
      }

      for (a in s = i.apply(e, n || []), t) {
        e.style[a] = r[a];
      }

      return s;
    };

    function ue(e, t, i, n) {
      var s,
          a,
          r = 20,
          o = n ? function () {
        return n.cur();
      } : function () {
        return C.css(e, t, "");
      },
          l = o(),
          c = i && i[3] || (C.cssNumber[t] ? "" : "px"),
          d = e.nodeType && (C.cssNumber[t] || "px" !== c && +l) && se.exec(C.css(e, t));

      if (d && d[3] !== c) {
        for (l /= 2, c = c || d[3], d = +l || 1; r--;) {
          C.style(e, t, d + c), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (r = 0), d /= a;
        }

        d *= 2, C.style(e, t, d + c), i = i || [];
      }

      return i && (d = +d || +l || 0, s = i[1] ? d + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = d, n.end = s)), s;
    }

    var pe = {};

    function he(e) {
      var t,
          i = e.ownerDocument,
          n = e.nodeName,
          s = pe[n];
      return s || (t = i.body.appendChild(i.createElement(n)), s = C.css(t, "display"), t.parentNode.removeChild(t), "none" === s && (s = "block"), pe[n] = s, s);
    }

    function fe(e, t) {
      for (var i, n, s = [], a = 0, r = e.length; a < r; a++) {
        (n = e[a]).style && (i = n.style.display, t ? ("none" === i && (s[a] = Q.get(n, "display") || null, s[a] || (n.style.display = "")), "" === n.style.display && ce(n) && (s[a] = he(n))) : "none" !== i && (s[a] = "none", Q.set(n, "display", i)));
      }

      for (a = 0; a < r; a++) {
        null != s[a] && (e[a].style.display = s[a]);
      }

      return e;
    }

    C.fn.extend({
      show: function show() {
        return fe(this, !0);
      },
      hide: function hide() {
        return fe(this);
      },
      toggle: function toggle(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
          ce(this) ? C(this).show() : C(this).hide();
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
      return i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [], void 0 === t || t && z(e, t) ? C.merge([e], i) : i;
    }

    function xe(e, t) {
      for (var i = 0, n = e.length; i < n; i++) {
        Q.set(e[i], "globalEval", !t || Q.get(t[i], "globalEval"));
      }
    }

    ye.optgroup = ye.option, ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead, ye.th = ye.td;
    var we,
        Te,
        Ce = /<|&#?\w+;/;

    function Ee(e, t, i, n, s) {
      for (var a, r, o, l, c, d, u = t.createDocumentFragment(), p = [], h = 0, f = e.length; h < f; h++) {
        if ((a = e[h]) || 0 === a) if ("object" === T(a)) C.merge(p, a.nodeType ? [a] : a);else if (Ce.test(a)) {
          for (r = r || u.appendChild(t.createElement("div")), o = (ve.exec(a) || ["", ""])[1].toLowerCase(), l = ye[o] || ye._default, r.innerHTML = l[1] + C.htmlPrefilter(a) + l[2], d = l[0]; d--;) {
            r = r.lastChild;
          }

          C.merge(p, r.childNodes), (r = u.firstChild).textContent = "";
        } else p.push(t.createTextNode(a));
      }

      for (u.textContent = "", h = 0; a = p[h++];) {
        if (n && C.inArray(a, n) > -1) s && s.push(a);else if (c = oe(a), r = be(u.appendChild(a), "script"), c && xe(r), i) for (d = 0; a = r[d++];) {
          ge.test(a.type || "") && i.push(a);
        }
      }

      return u;
    }

    we = r.createDocumentFragment().appendChild(r.createElement("div")), (Te = r.createElement("input")).setAttribute("type", "radio"), Te.setAttribute("checked", "checked"), Te.setAttribute("name", "t"), we.appendChild(Te), g.checkClone = we.cloneNode(!0).cloneNode(!0).lastChild.checked, we.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!we.cloneNode(!0).lastChild.defaultValue;
    var Se = /^key/,
        ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        $e = /^([^.]*)(?:\.(.+)|)/;

    function Me() {
      return !0;
    }

    function Pe() {
      return !1;
    }

    function ze(e, t) {
      return e === function () {
        try {
          return r.activeElement;
        } catch (e) {}
      }() == ("focus" === t);
    }

    function Le(e, t, i, n, s, a) {
      var r, o;

      if ("object" == _typeof(t)) {
        for (o in "string" != typeof i && (n = n || i, i = void 0), t) {
          Le(e, o, i, n, t[o], a);
        }

        return e;
      }

      if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = Pe;else if (!s) return e;
      return 1 === a && (r = s, (s = function s(e) {
        return C().off(e), r.apply(this, arguments);
      }).guid = r.guid || (r.guid = C.guid++)), e.each(function () {
        C.event.add(this, t, s, n, i);
      });
    }

    function De(e, t, i) {
      i ? (Q.set(e, t, !1), C.event.add(e, t, {
        namespace: !1,
        handler: function handler(e) {
          var n,
              s,
              a = Q.get(this, t);

          if (1 & e.isTrigger && this[t]) {
            if (a.length) (C.event.special[t] || {}).delegateType && e.stopPropagation();else if (a = l.call(arguments), Q.set(this, t, a), n = i(this, t), this[t](), a !== (s = Q.get(this, t)) || n ? Q.set(this, t, !1) : s = {}, a !== s) return e.stopImmediatePropagation(), e.preventDefault(), s.value;
          } else a.length && (Q.set(this, t, {
            value: C.event.trigger(C.extend(a[0], C.Event.prototype), a.slice(1), this)
          }), e.stopImmediatePropagation());
        }
      })) : void 0 === Q.get(e, t) && C.event.add(e, t, Me);
    }

    C.event = {
      global: {},
      add: function add(e, t, i, n, s) {
        var a,
            r,
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
        if (v) for (i.handler && (i = (a = i).handler, s = a.selector), s && C.find.matchesSelector(re, s), i.guid || (i.guid = C.guid++), (l = v.events) || (l = v.events = {}), (r = v.handle) || (r = v.handle = function (t) {
          return void 0 !== C && C.event.triggered !== t.type ? C.event.dispatch.apply(e, arguments) : void 0;
        }), c = (t = (t || "").match(j) || [""]).length; c--;) {
          h = m = (o = $e.exec(t[c]) || [])[1], f = (o[2] || "").split(".").sort(), h && (u = C.event.special[h] || {}, h = (s ? u.delegateType : u.bindType) || h, u = C.event.special[h] || {}, d = C.extend({
            type: h,
            origType: m,
            data: n,
            handler: i,
            guid: i.guid,
            selector: s,
            needsContext: s && C.expr.match.needsContext.test(s),
            namespace: f.join(".")
          }, a), (p = l[h]) || ((p = l[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(e, n, f, r) || e.addEventListener && e.addEventListener(h, r)), u.add && (u.add.call(e, d), d.handler.guid || (d.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, d) : p.push(d), C.event.global[h] = !0);
        }
      },
      remove: function remove(e, t, i, n, s) {
        var a,
            r,
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
              for (u = C.event.special[h] || {}, p = l[h = (n ? u.delegateType : u.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = a = p.length; a--;) {
                d = p[a], !s && m !== d.origType || i && i.guid !== d.guid || o && !o.test(d.namespace) || n && n !== d.selector && ("**" !== n || !d.selector) || (p.splice(a, 1), d.selector && p.delegateCount--, u.remove && u.remove.call(e, d));
              }

              r && !p.length && (u.teardown && !1 !== u.teardown.call(e, f, v.handle) || C.removeEvent(e, h, v.handle), delete l[h]);
            } else for (h in l) {
              C.event.remove(e, h + t[c], i, n, !0);
            }
          }

          C.isEmptyObject(l) && Q.remove(e, "handle events");
        }
      },
      dispatch: function dispatch(e) {
        var t,
            i,
            n,
            s,
            a,
            r,
            o = C.event.fix(e),
            l = new Array(arguments.length),
            c = (Q.get(this, "events") || {})[o.type] || [],
            d = C.event.special[o.type] || {};

        for (l[0] = o, t = 1; t < arguments.length; t++) {
          l[t] = arguments[t];
        }

        if (o.delegateTarget = this, !d.preDispatch || !1 !== d.preDispatch.call(this, o)) {
          for (r = C.event.handlers.call(this, o, c), t = 0; (s = r[t++]) && !o.isPropagationStopped();) {
            for (o.currentTarget = s.elem, i = 0; (a = s.handlers[i++]) && !o.isImmediatePropagationStopped();) {
              o.rnamespace && !1 !== a.namespace && !o.rnamespace.test(a.namespace) || (o.handleObj = a, o.data = a.data, void 0 !== (n = ((C.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (o.result = n) && (o.preventDefault(), o.stopPropagation()));
            }
          }

          return d.postDispatch && d.postDispatch.call(this, o), o.result;
        }
      },
      handlers: function handlers(e, t) {
        var i,
            n,
            s,
            a,
            r,
            o = [],
            l = t.delegateCount,
            c = e.target;
        if (l && c.nodeType && !("click" === e.type && e.button >= 1)) for (; c !== this; c = c.parentNode || this) {
          if (1 === c.nodeType && ("click" !== e.type || !0 !== c.disabled)) {
            for (a = [], r = {}, i = 0; i < l; i++) {
              void 0 === r[s = (n = t[i]).selector + " "] && (r[s] = n.needsContext ? C(s, this).index(c) > -1 : C.find(s, this, null, [c]).length), r[s] && a.push(n);
            }

            a.length && o.push({
              elem: c,
              handlers: a
            });
          }
        }
        return c = this, l < t.length && o.push({
          elem: c,
          handlers: t.slice(l)
        }), o;
      },
      addProp: function addProp(e, t) {
        Object.defineProperty(C.Event.prototype, e, {
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
        return e[C.expando] ? e : new C.Event(e);
      },
      special: {
        load: {
          noBubble: !0
        },
        click: {
          setup: function setup(e) {
            var t = this || e;
            return me.test(t.type) && t.click && z(t, "input") && De(t, "click", Me), !1;
          },
          trigger: function trigger(e) {
            var t = this || e;
            return me.test(t.type) && t.click && z(t, "input") && De(t, "click"), !0;
          },
          _default: function _default(e) {
            var t = e.target;
            return me.test(t.type) && t.click && z(t, "input") && Q.get(t, "click") || z(t, "a");
          }
        },
        beforeunload: {
          postDispatch: function postDispatch(e) {
            void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
          }
        }
      }
    }, C.removeEvent = function (e, t, i) {
      e.removeEventListener && e.removeEventListener(t, i);
    }, C.Event = function (e, t) {
      if (!(this instanceof C.Event)) return new C.Event(e, t);
      e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Me : Pe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0;
    }, C.Event.prototype = {
      constructor: C.Event,
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
    }, C.each({
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
    }, C.event.addProp), C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      C.event.special[e] = {
        setup: function setup() {
          return De(this, e, ze), !1;
        },
        trigger: function trigger() {
          return De(this, e), !0;
        },
        delegateType: t
      };
    }), C.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function (e, t) {
      C.event.special[e] = {
        delegateType: t,
        bindType: t,
        handle: function handle(e) {
          var i,
              n = this,
              s = e.relatedTarget,
              a = e.handleObj;
          return s && (s === n || C.contains(n, s)) || (e.type = a.origType, i = a.handler.apply(this, arguments), e.type = t), i;
        }
      };
    }), C.fn.extend({
      on: function on(e, t, i, n) {
        return Le(this, e, t, i, n);
      },
      one: function one(e, t, i, n) {
        return Le(this, e, t, i, n, 1);
      },
      off: function off(e, t, i) {
        var n, s;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, C(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;

        if ("object" == _typeof(e)) {
          for (s in e) {
            this.off(s, t, e[s]);
          }

          return this;
        }

        return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = Pe), this.each(function () {
          C.event.remove(this, e, i, t);
        });
      }
    });
    var Ae = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Ie = /<script|<style|<link/i,
        Oe = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function _e(e, t) {
      return z(e, "table") && z(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e;
    }

    function je(e) {
      return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
    }

    function He(e) {
      return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e;
    }

    function qe(e, t) {
      var i, n, s, a, r, o, l, c;

      if (1 === t.nodeType) {
        if (Q.hasData(e) && (a = Q.access(e), r = Q.set(t, a), c = a.events)) for (s in delete r.handle, r.events = {}, c) {
          for (i = 0, n = c[s].length; i < n; i++) {
            C.event.add(t, s, c[s][i]);
          }
        }
        Z.hasData(e) && (o = Z.access(e), l = C.extend({}, o), Z.set(t, l));
      }
    }

    function Be(e, t) {
      var i = t.nodeName.toLowerCase();
      "input" === i && me.test(e.type) ? t.checked = e.checked : "input" !== i && "textarea" !== i || (t.defaultValue = e.defaultValue);
    }

    function Fe(e, t, i, n) {
      t = c.apply([], t);
      var s,
          a,
          r,
          o,
          l,
          d,
          u = 0,
          p = e.length,
          h = p - 1,
          f = t[0],
          m = y(f);
      if (m || p > 1 && "string" == typeof f && !g.checkClone && Oe.test(f)) return e.each(function (s) {
        var a = e.eq(s);
        m && (t[0] = f.call(this, s, a.html())), Fe(a, t, i, n);
      });

      if (p && (a = (s = Ee(t, e[0].ownerDocument, !1, e, n)).firstChild, 1 === s.childNodes.length && (s = a), a || n)) {
        for (o = (r = C.map(be(s, "script"), je)).length; u < p; u++) {
          l = s, u !== h && (l = C.clone(l, !0, !0), o && C.merge(r, be(l, "script"))), i.call(e[u], l, u);
        }

        if (o) for (d = r[r.length - 1].ownerDocument, C.map(r, He), u = 0; u < o; u++) {
          l = r[u], ge.test(l.type || "") && !Q.access(l, "globalEval") && C.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && !l.noModule && C._evalUrl(l.src, {
            nonce: l.nonce || l.getAttribute("nonce")
          }) : w(l.textContent.replace(Ne, ""), l, d));
        }
      }

      return e;
    }

    function Re(e, t, i) {
      for (var n, s = t ? C.filter(t, e) : e, a = 0; null != (n = s[a]); a++) {
        i || 1 !== n.nodeType || C.cleanData(be(n)), n.parentNode && (i && oe(n) && xe(be(n, "script")), n.parentNode.removeChild(n));
      }

      return e;
    }

    C.extend({
      htmlPrefilter: function htmlPrefilter(e) {
        return e.replace(Ae, "<$1></$2>");
      },
      clone: function clone(e, t, i) {
        var n,
            s,
            a,
            r,
            o = e.cloneNode(!0),
            l = oe(e);
        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e))) for (r = be(o), n = 0, s = (a = be(e)).length; n < s; n++) {
          Be(a[n], r[n]);
        }
        if (t) if (i) for (a = a || be(e), r = r || be(o), n = 0, s = a.length; n < s; n++) {
          qe(a[n], r[n]);
        } else qe(e, o);
        return (r = be(o, "script")).length > 0 && xe(r, !l && be(e, "script")), o;
      },
      cleanData: function cleanData(e) {
        for (var t, i, n, s = C.event.special, a = 0; void 0 !== (i = e[a]); a++) {
          if (J(i)) {
            if (t = i[Q.expando]) {
              if (t.events) for (n in t.events) {
                s[n] ? C.event.remove(i, n) : C.removeEvent(i, n, t.handle);
              }
              i[Q.expando] = void 0;
            }

            i[Z.expando] && (i[Z.expando] = void 0);
          }
        }
      }
    }), C.fn.extend({
      detach: function detach(e) {
        return Re(this, e, !0);
      },
      remove: function remove(e) {
        return Re(this, e);
      },
      text: function text(e) {
        return G(this, function (e) {
          return void 0 === e ? C.text(this) : this.empty().each(function () {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
          });
        }, null, e, arguments.length);
      },
      append: function append() {
        return Fe(this, arguments, function (e) {
          1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || _e(this, e).appendChild(e);
        });
      },
      prepend: function prepend() {
        return Fe(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = _e(this, e);

            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function before() {
        return Fe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function after() {
        return Fe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function empty() {
        for (var e, t = 0; null != (e = this[t]); t++) {
          1 === e.nodeType && (C.cleanData(be(e, !1)), e.textContent = "");
        }

        return this;
      },
      clone: function clone(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function () {
          return C.clone(this, e, t);
        });
      },
      html: function html(e) {
        return G(this, function (e) {
          var t = this[0] || {},
              i = 0,
              n = this.length;
          if (void 0 === e && 1 === t.nodeType) return t.innerHTML;

          if ("string" == typeof e && !Ie.test(e) && !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]) {
            e = C.htmlPrefilter(e);

            try {
              for (; i < n; i++) {
                1 === (t = this[i] || {}).nodeType && (C.cleanData(be(t, !1)), t.innerHTML = e);
              }

              t = 0;
            } catch (e) {}
          }

          t && this.empty().append(e);
        }, null, e, arguments.length);
      },
      replaceWith: function replaceWith() {
        var e = [];
        return Fe(this, arguments, function (t) {
          var i = this.parentNode;
          C.inArray(this, e) < 0 && (C.cleanData(be(this)), i && i.replaceChild(t, this));
        }, e);
      }
    }), C.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function (e, t) {
      C.fn[e] = function (e) {
        for (var i, n = [], s = C(e), a = s.length - 1, r = 0; r <= a; r++) {
          i = r === a ? this : this.clone(!0), C(s[r])[t](i), d.apply(n, i.get());
        }

        return this.pushStack(n);
      };
    });

    var Xe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        Ge = function Ge(e) {
      var t = e.ownerDocument.defaultView;
      return t && t.opener || (t = i), t.getComputedStyle(e);
    },
        We = new RegExp(ae.join("|"), "i");

    function Ve(e, t, i) {
      var n,
          s,
          a,
          r,
          o = e.style;
      return (i = i || Ge(e)) && ("" !== (r = i.getPropertyValue(t) || i[t]) || oe(e) || (r = C.style(e, t)), !g.pixelBoxStyles() && Xe.test(r) && We.test(t) && (n = o.width, s = o.minWidth, a = o.maxWidth, o.minWidth = o.maxWidth = o.width = r, r = i.width, o.width = n, o.minWidth = s, o.maxWidth = a)), void 0 !== r ? r + "" : r;
    }

    function Ye(e, t) {
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
          c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", d.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", re.appendChild(c).appendChild(d);
          var e = i.getComputedStyle(d);
          n = "1%" !== e.top, l = 12 === t(e.marginLeft), d.style.right = "60%", o = 36 === t(e.right), s = 36 === t(e.width), d.style.position = "absolute", a = 12 === t(d.offsetWidth / 3), re.removeChild(c), d = null;
        }
      }

      function t(e) {
        return Math.round(parseFloat(e));
      }

      var n,
          s,
          a,
          o,
          l,
          c = r.createElement("div"),
          d = r.createElement("div");
      d.style && (d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === d.style.backgroundClip, C.extend(g, {
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
          return e(), a;
        }
      }));
    }();
    var Ue = ["Webkit", "Moz", "ms"],
        Je = r.createElement("div").style,
        Ke = {};

    function Qe(e) {
      var t = C.cssProps[e] || Ke[e];
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

    function st(e, t, i, n, s, a) {
      var r = "width" === t ? 1 : 0,
          o = 0,
          l = 0;
      if (i === (n ? "border" : "content")) return 0;

      for (; r < 4; r += 2) {
        "margin" === i && (l += C.css(e, i + ae[r], !0, s)), n ? ("content" === i && (l -= C.css(e, "padding" + ae[r], !0, s)), "margin" !== i && (l -= C.css(e, "border" + ae[r] + "Width", !0, s))) : (l += C.css(e, "padding" + ae[r], !0, s), "padding" !== i ? l += C.css(e, "border" + ae[r] + "Width", !0, s) : o += C.css(e, "border" + ae[r] + "Width", !0, s));
      }

      return !n && a >= 0 && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5)) || 0), l;
    }

    function at(e, t, i) {
      var n = Ge(e),
          s = (!g.boxSizingReliable() || i) && "border-box" === C.css(e, "boxSizing", !1, n),
          a = s,
          r = Ve(e, t, n),
          o = "offset" + t[0].toUpperCase() + t.slice(1);

      if (Xe.test(r)) {
        if (!i) return r;
        r = "auto";
      }

      return (!g.boxSizingReliable() && s || "auto" === r || !parseFloat(r) && "inline" === C.css(e, "display", !1, n)) && e.getClientRects().length && (s = "border-box" === C.css(e, "boxSizing", !1, n), (a = o in e) && (r = e[o])), (r = parseFloat(r) || 0) + st(e, t, i || (s ? "border" : "content"), a, n, r) + "px";
    }

    function rt(e, t, i, n, s) {
      return new rt.prototype.init(e, t, i, n, s);
    }

    C.extend({
      cssHooks: {
        opacity: {
          get: function get(e, t) {
            if (t) {
              var i = Ve(e, "opacity");
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
              a,
              r,
              o = U(t),
              l = et.test(t),
              c = e.style;
          if (l || (t = Qe(o)), r = C.cssHooks[t] || C.cssHooks[o], void 0 === i) return r && "get" in r && void 0 !== (s = r.get(e, !1, n)) ? s : c[t];
          "string" === (a = _typeof(i)) && (s = se.exec(i)) && s[1] && (i = ue(e, t, s), a = "number"), null != i && i == i && ("number" !== a || l || (i += s && s[3] || (C.cssNumber[o] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (c[t] = "inherit"), r && "set" in r && void 0 === (i = r.set(e, i, n)) || (l ? c.setProperty(t, i) : c[t] = i));
        }
      },
      css: function css(e, t, i, n) {
        var s,
            a,
            r,
            o = U(t);
        return et.test(t) || (t = Qe(o)), (r = C.cssHooks[t] || C.cssHooks[o]) && "get" in r && (s = r.get(e, !0, i)), void 0 === s && (s = Ve(e, t, n)), "normal" === s && t in it && (s = it[t]), "" === i || i ? (a = parseFloat(s), !0 === i || isFinite(a) ? a || 0 : s) : s;
      }
    }), C.each(["height", "width"], function (e, t) {
      C.cssHooks[t] = {
        get: function get(e, i, n) {
          if (i) return !Ze.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? at(e, t, n) : de(e, tt, function () {
            return at(e, t, n);
          });
        },
        set: function set(e, i, n) {
          var s,
              a = Ge(e),
              r = !g.scrollboxSize() && "absolute" === a.position,
              o = (r || n) && "border-box" === C.css(e, "boxSizing", !1, a),
              l = n ? st(e, t, n, o, a) : 0;
          return o && r && (l -= Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - parseFloat(a[t]) - st(e, t, "border", !1, a) - .5)), l && (s = se.exec(i)) && "px" !== (s[3] || "px") && (e.style[t] = i, i = C.css(e, t)), nt(0, i, l);
        }
      };
    }), C.cssHooks.marginLeft = Ye(g.reliableMarginLeft, function (e, t) {
      if (t) return (parseFloat(Ve(e, "marginLeft")) || e.getBoundingClientRect().left - de(e, {
        marginLeft: 0
      }, function () {
        return e.getBoundingClientRect().left;
      })) + "px";
    }), C.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function (e, t) {
      C.cssHooks[e + t] = {
        expand: function expand(i) {
          for (var n = 0, s = {}, a = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) {
            s[e + ae[n] + t] = a[n] || a[n - 2] || a[0];
          }

          return s;
        }
      }, "margin" !== e && (C.cssHooks[e + t].set = nt);
    }), C.fn.extend({
      css: function css(e, t) {
        return G(this, function (e, t, i) {
          var n,
              s,
              a = {},
              r = 0;

          if (Array.isArray(t)) {
            for (n = Ge(e), s = t.length; r < s; r++) {
              a[t[r]] = C.css(e, t[r], !1, n);
            }

            return a;
          }

          return void 0 !== i ? C.style(e, t, i) : C.css(e, t);
        }, e, t, arguments.length > 1);
      }
    }), C.Tween = rt, rt.prototype = {
      constructor: rt,
      init: function init(e, t, i, n, s, a) {
        this.elem = e, this.prop = i, this.easing = s || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = a || (C.cssNumber[i] ? "" : "px");
      },
      cur: function cur() {
        var e = rt.propHooks[this.prop];
        return e && e.get ? e.get(this) : rt.propHooks._default.get(this);
      },
      run: function run(e) {
        var t,
            i = rt.propHooks[this.prop];
        return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : rt.propHooks._default.set(this), this;
      }
    }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
      _default: {
        get: function get(e) {
          var t;
          return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = C.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0;
        },
        set: function set(e) {
          C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit);
        }
      }
    }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
      set: function set(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
      }
    }, C.easing = {
      linear: function linear(e) {
        return e;
      },
      swing: function swing(e) {
        return .5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing"
    }, C.fx = rt.prototype.init, C.fx.step = {};
    var ot,
        lt,
        ct = /^(?:toggle|show|hide)$/,
        dt = /queueHooks$/;

    function ut() {
      lt && (!1 === r.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(ut) : i.setTimeout(ut, C.fx.interval), C.fx.tick());
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
        s["margin" + (i = ae[n])] = s["padding" + i] = e;
      }

      return t && (s.opacity = s.width = e), s;
    }

    function ft(e, t, i) {
      for (var n, s = (mt.tweeners[t] || []).concat(mt.tweeners["*"]), a = 0, r = s.length; a < r; a++) {
        if (n = s[a].call(i, t, e)) return n;
      }
    }

    function mt(e, t, i) {
      var n,
          s,
          a = 0,
          r = mt.prefilters.length,
          o = C.Deferred().always(function () {
        delete l.elem;
      }),
          l = function l() {
        if (s) return !1;

        for (var t = ot || pt(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), a = 0, r = c.tweens.length; a < r; a++) {
          c.tweens[a].run(n);
        }

        return o.notifyWith(e, [c, n, i]), n < 1 && r ? i : (r || o.notifyWith(e, [c, 1, 0]), o.resolveWith(e, [c]), !1);
      },
          c = o.promise({
        elem: e,
        props: C.extend({}, t),
        opts: C.extend(!0, {
          specialEasing: {},
          easing: C.easing._default
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: ot || pt(),
        duration: i.duration,
        tweens: [],
        createTween: function createTween(t, i) {
          var n = C.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
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
        var i, n, s, a, r;

        for (i in e) {
          if (s = t[n = U(i)], a = e[i], Array.isArray(a) && (s = a[1], a = e[i] = a[0]), i !== n && (e[n] = a, delete e[i]), (r = C.cssHooks[n]) && ("expand" in r)) for (i in a = r.expand(a), delete e[n], a) {
            (i in e) || (e[i] = a[i], t[i] = s);
          } else t[n] = s;
        }
      }(d, c.opts.specialEasing); a < r; a++) {
        if (n = mt.prefilters[a].call(c, e, d, c.opts)) return y(n.stop) && (C._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
      }

      return C.map(d, ft, c), y(c.opts.start) && c.opts.start.call(e, c), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always), C.fx.timer(C.extend(l, {
        elem: e,
        anim: c,
        queue: c.opts.queue
      })), c;
    }

    C.Animation = C.extend(mt, {
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
            a,
            r,
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

        for (n in i.queue || (null == (r = C._queueHooks(e, "fx")).unqueued && (r.unqueued = 0, o = r.empty.fire, r.empty.fire = function () {
          r.unqueued || o();
        }), r.unqueued++, p.always(function () {
          p.always(function () {
            r.unqueued--, C.queue(e, "fx").length || r.empty.fire();
          });
        })), t) {
          if (s = t[n], ct.test(s)) {
            if (delete t[n], a = a || "toggle" === s, s === (m ? "hide" : "show")) {
              if ("show" !== s || !v || void 0 === v[n]) continue;
              m = !0;
            }

            h[n] = v && v[n] || C.style(e, n);
          }
        }

        if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(h)) for (n in u && 1 === e.nodeType && (i.overflow = [f.overflow, f.overflowX, f.overflowY], null == (c = v && v.display) && (c = Q.get(e, "display")), "none" === (d = C.css(e, "display")) && (c ? d = c : (fe([e], !0), c = e.style.display || c, d = C.css(e, "display"), fe([e]))), ("inline" === d || "inline-block" === d && null != c) && "none" === C.css(e, "float") && (l || (p.done(function () {
          f.display = c;
        }), null == c && (d = f.display, c = "none" === d ? "" : d)), f.display = "inline-block")), i.overflow && (f.overflow = "hidden", p.always(function () {
          f.overflow = i.overflow[0], f.overflowX = i.overflow[1], f.overflowY = i.overflow[2];
        })), l = !1, h) {
          l || (v ? "hidden" in v && (m = v.hidden) : v = Q.access(e, "fxshow", {
            display: c
          }), a && (v.hidden = !m), m && fe([e], !0), p.done(function () {
            for (n in m || fe([e]), Q.remove(e, "fxshow"), h) {
              C.style(e, n, h[n]);
            }
          })), l = ft(m ? v[n] : 0, n, p), n in v || (v[n] = l.start, m && (l.end = l.start, l.start = 0));
        }
      }],
      prefilter: function prefilter(e, t) {
        t ? mt.prefilters.unshift(e) : mt.prefilters.push(e);
      }
    }), C.speed = function (e, t, i) {
      var n = e && "object" == _typeof(e) ? C.extend({}, e) : {
        complete: i || !i && t || y(e) && e,
        duration: e,
        easing: i && t || t && !y(t) && t
      };
      return C.fx.off ? n.duration = 0 : "number" != typeof n.duration && (n.duration in C.fx.speeds ? n.duration = C.fx.speeds[n.duration] : n.duration = C.fx.speeds._default), null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function () {
        y(n.old) && n.old.call(this), n.queue && C.dequeue(this, n.queue);
      }, n;
    }, C.fn.extend({
      fadeTo: function fadeTo(e, t, i, n) {
        return this.filter(ce).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n);
      },
      animate: function animate(e, t, i, n) {
        var s = C.isEmptyObject(e),
            a = C.speed(t, i, n),
            r = function r() {
          var t = mt(this, C.extend({}, e), a);
          (s || Q.get(this, "finish")) && t.stop(!0);
        };

        return r.finish = r, s || !1 === a.queue ? this.each(r) : this.queue(a.queue, r);
      },
      stop: function stop(e, t, i) {
        var n = function n(e) {
          var t = e.stop;
          delete e.stop, t(i);
        };

        return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
          var t = !0,
              s = null != e && e + "queueHooks",
              a = C.timers,
              r = Q.get(this);
          if (s) r[s] && r[s].stop && n(r[s]);else for (s in r) {
            r[s] && r[s].stop && dt.test(s) && n(r[s]);
          }

          for (s = a.length; s--;) {
            a[s].elem !== this || null != e && a[s].queue !== e || (a[s].anim.stop(i), t = !1, a.splice(s, 1));
          }

          !t && i || C.dequeue(this, e);
        });
      },
      finish: function finish(e) {
        return !1 !== e && (e = e || "fx"), this.each(function () {
          var t,
              i = Q.get(this),
              n = i[e + "queue"],
              s = i[e + "queueHooks"],
              a = C.timers,
              r = n ? n.length : 0;

          for (i.finish = !0, C.queue(this, e, []), s && s.stop && s.stop.call(this, !0), t = a.length; t--;) {
            a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0), a.splice(t, 1));
          }

          for (t = 0; t < r; t++) {
            n[t] && n[t].finish && n[t].finish.call(this);
          }

          delete i.finish;
        });
      }
    }), C.each(["toggle", "show", "hide"], function (e, t) {
      var i = C.fn[t];

      C.fn[t] = function (e, n, s) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(ht(t, !0), e, n, s);
      };
    }), C.each({
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
      C.fn[e] = function (e, i, n) {
        return this.animate(t, e, i, n);
      };
    }), C.timers = [], C.fx.tick = function () {
      var e,
          t = 0,
          i = C.timers;

      for (ot = Date.now(); t < i.length; t++) {
        (e = i[t])() || i[t] !== e || i.splice(t--, 1);
      }

      i.length || C.fx.stop(), ot = void 0;
    }, C.fx.timer = function (e) {
      C.timers.push(e), C.fx.start();
    }, C.fx.interval = 13, C.fx.start = function () {
      lt || (lt = !0, ut());
    }, C.fx.stop = function () {
      lt = null;
    }, C.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, C.fn.delay = function (e, t) {
      return e = C.fx && C.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
        var s = i.setTimeout(t, e);

        n.stop = function () {
          i.clearTimeout(s);
        };
      });
    }, function () {
      var e = r.createElement("input"),
          t = r.createElement("select").appendChild(r.createElement("option"));
      e.type = "checkbox", g.checkOn = "" !== e.value, g.optSelected = t.selected, (e = r.createElement("input")).value = "t", e.type = "radio", g.radioValue = "t" === e.value;
    }();
    var vt,
        gt = C.expr.attrHandle;
    C.fn.extend({
      attr: function attr(e, t) {
        return G(this, C.attr, e, t, arguments.length > 1);
      },
      removeAttr: function removeAttr(e) {
        return this.each(function () {
          C.removeAttr(this, e);
        });
      }
    }), C.extend({
      attr: function attr(e, t, i) {
        var n,
            s,
            a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? C.prop(e, t, i) : (1 === a && C.isXMLDoc(e) || (s = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? vt : void 0)), void 0 !== i ? null === i ? void C.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = C.find.attr(e, t)) ? void 0 : n);
      },
      attrHooks: {
        type: {
          set: function set(e, t) {
            if (!g.radioValue && "radio" === t && z(e, "input")) {
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
        return !1 === t ? C.removeAttr(e, i) : e.setAttribute(i, i), i;
      }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var i = gt[t] || C.find.attr;

      gt[t] = function (e, t, n) {
        var s,
            a,
            r = t.toLowerCase();
        return n || (a = gt[r], gt[r] = s, s = null != i(e, t, n) ? r : null, gt[r] = a), s;
      };
    });
    var yt = /^(?:input|select|textarea|button)$/i,
        bt = /^(?:a|area)$/i;

    function xt(e) {
      return (e.match(j) || []).join(" ");
    }

    function wt(e) {
      return e.getAttribute && e.getAttribute("class") || "";
    }

    function Tt(e) {
      return Array.isArray(e) ? e : "string" == typeof e && e.match(j) || [];
    }

    C.fn.extend({
      prop: function prop(e, t) {
        return G(this, C.prop, e, t, arguments.length > 1);
      },
      removeProp: function removeProp(e) {
        return this.each(function () {
          delete this[C.propFix[e] || e];
        });
      }
    }), C.extend({
      prop: function prop(e, t, i) {
        var n,
            s,
            a = e.nodeType;
        if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, s = C.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function get(e) {
            var t = C.find.attr(e, "tabindex");
            return t ? parseInt(t, 10) : yt.test(e.nodeName) || bt.test(e.nodeName) && e.href ? 0 : -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    }), g.optSelected || (C.propHooks.selected = {
      get: function get(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null;
      },
      set: function set(e) {
        var t = e.parentNode;
        t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
      }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
      C.propFix[this.toLowerCase()] = this;
    }), C.fn.extend({
      addClass: function addClass(e) {
        var t,
            i,
            n,
            s,
            a,
            r,
            o,
            l = 0;
        if (y(e)) return this.each(function (t) {
          C(this).addClass(e.call(this, t, wt(this)));
        });
        if ((t = Tt(e)).length) for (; i = this[l++];) {
          if (s = wt(i), n = 1 === i.nodeType && " " + xt(s) + " ") {
            for (r = 0; a = t[r++];) {
              n.indexOf(" " + a + " ") < 0 && (n += a + " ");
            }

            s !== (o = xt(n)) && i.setAttribute("class", o);
          }
        }
        return this;
      },
      removeClass: function removeClass(e) {
        var t,
            i,
            n,
            s,
            a,
            r,
            o,
            l = 0;
        if (y(e)) return this.each(function (t) {
          C(this).removeClass(e.call(this, t, wt(this)));
        });
        if (!arguments.length) return this.attr("class", "");
        if ((t = Tt(e)).length) for (; i = this[l++];) {
          if (s = wt(i), n = 1 === i.nodeType && " " + xt(s) + " ") {
            for (r = 0; a = t[r++];) {
              for (; n.indexOf(" " + a + " ") > -1;) {
                n = n.replace(" " + a + " ", " ");
              }
            }

            s !== (o = xt(n)) && i.setAttribute("class", o);
          }
        }
        return this;
      },
      toggleClass: function toggleClass(e, t) {
        var i = _typeof(e),
            n = "string" === i || Array.isArray(e);

        return "boolean" == typeof t && n ? t ? this.addClass(e) : this.removeClass(e) : y(e) ? this.each(function (i) {
          C(this).toggleClass(e.call(this, i, wt(this), t), t);
        }) : this.each(function () {
          var t, s, a, r;
          if (n) for (s = 0, a = C(this), r = Tt(e); t = r[s++];) {
            a.hasClass(t) ? a.removeClass(t) : a.addClass(t);
          } else void 0 !== e && "boolean" !== i || ((t = wt(this)) && Q.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === e ? "" : Q.get(this, "__className__") || ""));
        });
      },
      hasClass: function hasClass(e) {
        var t,
            i,
            n = 0;

        for (t = " " + e + " "; i = this[n++];) {
          if (1 === i.nodeType && (" " + xt(wt(i)) + " ").indexOf(t) > -1) return !0;
        }

        return !1;
      }
    });
    var Ct = /\r/g;
    C.fn.extend({
      val: function val(e) {
        var t,
            i,
            n,
            s = this[0];
        return arguments.length ? (n = y(e), this.each(function (i) {
          var s;
          1 === this.nodeType && (null == (s = n ? e.call(this, i, C(this).val()) : e) ? s = "" : "number" == typeof s ? s += "" : Array.isArray(s) && (s = C.map(s, function (e) {
            return null == e ? "" : e + "";
          })), (t = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, s, "value") || (this.value = s));
        })) : s ? (t = C.valHooks[s.type] || C.valHooks[s.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(s, "value")) ? i : "string" == typeof (i = s.value) ? i.replace(Ct, "") : null == i ? "" : i : void 0;
      }
    }), C.extend({
      valHooks: {
        option: {
          get: function get(e) {
            var t = C.find.attr(e, "value");
            return null != t ? t : xt(C.text(e));
          }
        },
        select: {
          get: function get(e) {
            var t,
                i,
                n,
                s = e.options,
                a = e.selectedIndex,
                r = "select-one" === e.type,
                o = r ? null : [],
                l = r ? a + 1 : s.length;

            for (n = a < 0 ? l : r ? a : 0; n < l; n++) {
              if (((i = s[n]).selected || n === a) && !i.disabled && (!i.parentNode.disabled || !z(i.parentNode, "optgroup"))) {
                if (t = C(i).val(), r) return t;
                o.push(t);
              }
            }

            return o;
          },
          set: function set(e, t) {
            for (var i, n, s = e.options, a = C.makeArray(t), r = s.length; r--;) {
              ((n = s[r]).selected = C.inArray(C.valHooks.option.get(n), a) > -1) && (i = !0);
            }

            return i || (e.selectedIndex = -1), a;
          }
        }
      }
    }), C.each(["radio", "checkbox"], function () {
      C.valHooks[this] = {
        set: function set(e, t) {
          if (Array.isArray(t)) return e.checked = C.inArray(C(e).val(), t) > -1;
        }
      }, g.checkOn || (C.valHooks[this].get = function (e) {
        return null === e.getAttribute("value") ? "on" : e.value;
      });
    }), g.focusin = "onfocusin" in i;

    var Et = /^(?:focusinfocus|focusoutblur)$/,
        St = function St(e) {
      e.stopPropagation();
    };

    C.extend(C.event, {
      trigger: function trigger(e, t, n, s) {
        var a,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            m = [n || r],
            v = f.call(e, "type") ? e.type : e,
            g = f.call(e, "namespace") ? e.namespace.split(".") : [];

        if (o = h = l = n = n || r, 3 !== n.nodeType && 8 !== n.nodeType && !Et.test(v + C.event.triggered) && (v.indexOf(".") > -1 && (g = v.split("."), v = g.shift(), g.sort()), d = v.indexOf(":") < 0 && "on" + v, (e = e[C.expando] ? e : new C.Event(v, "object" == _typeof(e) && e)).isTrigger = s ? 2 : 3, e.namespace = g.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), p = C.event.special[v] || {}, s || !p.trigger || !1 !== p.trigger.apply(n, t))) {
          if (!s && !p.noBubble && !b(n)) {
            for (c = p.delegateType || v, Et.test(c + v) || (o = o.parentNode); o; o = o.parentNode) {
              m.push(o), l = o;
            }

            l === (n.ownerDocument || r) && m.push(l.defaultView || l.parentWindow || i);
          }

          for (a = 0; (o = m[a++]) && !e.isPropagationStopped();) {
            h = o, e.type = a > 1 ? c : p.bindType || v, (u = (Q.get(o, "events") || {})[e.type] && Q.get(o, "handle")) && u.apply(o, t), (u = d && o[d]) && u.apply && J(o) && (e.result = u.apply(o, t), !1 === e.result && e.preventDefault());
          }

          return e.type = v, s || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(m.pop(), t) || !J(n) || d && y(n[v]) && !b(n) && ((l = n[d]) && (n[d] = null), C.event.triggered = v, e.isPropagationStopped() && h.addEventListener(v, St), n[v](), e.isPropagationStopped() && h.removeEventListener(v, St), C.event.triggered = void 0, l && (n[d] = l)), e.result;
        }
      },
      simulate: function simulate(e, t, i) {
        var n = C.extend(new C.Event(), i, {
          type: e,
          isSimulated: !0
        });
        C.event.trigger(n, null, t);
      }
    }), C.fn.extend({
      trigger: function trigger(e, t) {
        return this.each(function () {
          C.event.trigger(e, t, this);
        });
      },
      triggerHandler: function triggerHandler(e, t) {
        var i = this[0];
        if (i) return C.event.trigger(e, t, i, !0);
      }
    }), g.focusin || C.each({
      focus: "focusin",
      blur: "focusout"
    }, function (e, t) {
      var i = function i(e) {
        C.event.simulate(t, e.target, C.event.fix(e));
      };

      C.event.special[t] = {
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

    C.parseXML = function (e) {
      var t;
      if (!e || "string" != typeof e) return null;

      try {
        t = new i.DOMParser().parseFromString(e, "text/xml");
      } catch (e) {
        t = void 0;
      }

      return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t;
    };

    var Pt = /\[\]$/,
        zt = /\r?\n/g,
        Lt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;

    function At(e, t, i, n) {
      var s;
      if (Array.isArray(t)) C.each(t, function (t, s) {
        i || Pt.test(e) ? n(e, s) : At(e + "[" + ("object" == _typeof(s) && null != s ? t : "") + "]", s, i, n);
      });else if (i || "object" !== T(t)) n(e, t);else for (s in t) {
        At(e + "[" + s + "]", t[s], i, n);
      }
    }

    C.param = function (e, t) {
      var i,
          n = [],
          s = function s(e, t) {
        var i = y(t) ? t() : t;
        n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == i ? "" : i);
      };

      if (null == e) return "";
      if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function () {
        s(this.name, this.value);
      });else for (i in e) {
        At(i, e[i], t, s);
      }
      return n.join("&");
    }, C.fn.extend({
      serialize: function serialize() {
        return C.param(this.serializeArray());
      },
      serializeArray: function serializeArray() {
        return this.map(function () {
          var e = C.prop(this, "elements");
          return e ? C.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !C(this).is(":disabled") && Dt.test(this.nodeName) && !Lt.test(e) && (this.checked || !me.test(e));
        }).map(function (e, t) {
          var i = C(this).val();
          return null == i ? null : Array.isArray(i) ? C.map(i, function (e) {
            return {
              name: t.name,
              value: e.replace(zt, "\r\n")
            };
          }) : {
            name: t.name,
            value: i.replace(zt, "\r\n")
          };
        }).get();
      }
    });
    var It = /%20/g,
        Ot = /#.*$/,
        Nt = /([?&])_=[^&]*/,
        _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        jt = /^(?:GET|HEAD)$/,
        Ht = /^\/\//,
        qt = {},
        Bt = {},
        Ft = "*/".concat("*"),
        Rt = r.createElement("a");

    function Xt(e) {
      return function (t, i) {
        "string" != typeof t && (i = t, t = "*");
        var n,
            s = 0,
            a = t.toLowerCase().match(j) || [];
        if (y(i)) for (; n = a[s++];) {
          "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i);
        }
      };
    }

    function Gt(e, t, i, n) {
      var s = {},
          a = e === Bt;

      function r(o) {
        var l;
        return s[o] = !0, C.each(e[o] || [], function (e, o) {
          var c = o(t, i, n);
          return "string" != typeof c || a || s[c] ? a ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1);
        }), l;
      }

      return r(t.dataTypes[0]) || !s["*"] && r("*");
    }

    function Wt(e, t) {
      var i,
          n,
          s = C.ajaxSettings.flatOptions || {};

      for (i in t) {
        void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
      }

      return n && C.extend(!0, e, n), e;
    }

    Rt.href = kt.href, C.extend({
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
          "*": Ft,
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
          "text xml": C.parseXML
        },
        flatOptions: {
          url: !0,
          context: !0
        }
      },
      ajaxSetup: function ajaxSetup(e, t) {
        return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e);
      },
      ajaxPrefilter: Xt(qt),
      ajaxTransport: Xt(Bt),
      ajax: function ajax(e, t) {
        "object" == _typeof(e) && (t = e, e = void 0), t = t || {};
        var n,
            s,
            a,
            o,
            l,
            c,
            d,
            u,
            p,
            h,
            f = C.ajaxSetup({}, t),
            m = f.context || f,
            v = f.context && (m.nodeType || m.jquery) ? C(m) : C.event,
            g = C.Deferred(),
            y = C.Callbacks("once memory"),
            b = f.statusCode || {},
            x = {},
            w = {},
            T = "canceled",
            E = {
          readyState: 0,
          getResponseHeader: function getResponseHeader(e) {
            var t;

            if (d) {
              if (!o) for (o = {}; t = _t.exec(a);) {
                o[t[1].toLowerCase() + " "] = (o[t[1].toLowerCase() + " "] || []).concat(t[2]);
              }
              t = o[e.toLowerCase() + " "];
            }

            return null == t ? null : t.join(", ");
          },
          getAllResponseHeaders: function getAllResponseHeaders() {
            return d ? a : null;
          },
          setRequestHeader: function setRequestHeader(e, t) {
            return null == d && (e = w[e.toLowerCase()] = w[e.toLowerCase()] || e, x[e] = t), this;
          },
          overrideMimeType: function overrideMimeType(e) {
            return null == d && (f.mimeType = e), this;
          },
          statusCode: function statusCode(e) {
            var t;
            if (e) if (d) E.always(e[E.status]);else for (t in e) {
              b[t] = [b[t], e[t]];
            }
            return this;
          },
          abort: function abort(e) {
            var t = e || T;
            return n && n.abort(t), S(0, t), this;
          }
        };

        if (g.promise(E), f.url = ((e || f.url || kt.href) + "").replace(Ht, kt.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(j) || [""], null == f.crossDomain) {
          c = r.createElement("a");

          try {
            c.href = f.url, c.href = c.href, f.crossDomain = Rt.protocol + "//" + Rt.host != c.protocol + "//" + c.host;
          } catch (e) {
            f.crossDomain = !0;
          }
        }

        if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Gt(qt, f, t, E), d) return E;

        for (p in (u = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !jt.test(f.type), s = f.url.replace(Ot, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(It, "+")) : (h = f.url.slice(s.length), f.data && (f.processData || "string" == typeof f.data) && (s += (Mt.test(s) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (s = s.replace(Nt, "$1"), h = (Mt.test(s) ? "&" : "?") + "_=" + $t++ + h), f.url = s + h), f.ifModified && (C.lastModified[s] && E.setRequestHeader("If-Modified-Since", C.lastModified[s]), C.etag[s] && E.setRequestHeader("If-None-Match", C.etag[s])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && E.setRequestHeader("Content-Type", f.contentType), E.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Ft + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
          E.setRequestHeader(p, f.headers[p]);
        }

        if (f.beforeSend && (!1 === f.beforeSend.call(m, E, f) || d)) return E.abort();

        if (T = "abort", y.add(f.complete), E.done(f.success), E.fail(f.error), n = Gt(Bt, f, t, E)) {
          if (E.readyState = 1, u && v.trigger("ajaxSend", [E, f]), d) return E;
          f.async && f.timeout > 0 && (l = i.setTimeout(function () {
            E.abort("timeout");
          }, f.timeout));

          try {
            d = !1, n.send(x, S);
          } catch (e) {
            if (d) throw e;
            S(-1, e);
          }
        } else S(-1, "No Transport");

        function S(e, t, r, o) {
          var c,
              p,
              h,
              x,
              w,
              T = t;
          d || (d = !0, l && i.clearTimeout(l), n = void 0, a = o || "", E.readyState = e > 0 ? 4 : 0, c = e >= 200 && e < 300 || 304 === e, r && (x = function (e, t, i) {
            for (var n, s, a, r, o = e.contents, l = e.dataTypes; "*" === l[0];) {
              l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
            }

            if (n) for (s in o) {
              if (o[s] && o[s].test(n)) {
                l.unshift(s);
                break;
              }
            }
            if (l[0] in i) a = l[0];else {
              for (s in i) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                  a = s;
                  break;
                }

                r || (r = s);
              }

              a = a || r;
            }
            if (a) return a !== l[0] && l.unshift(a), i[a];
          }(f, E, r)), x = function (e, t, i, n) {
            var s,
                a,
                r,
                o,
                l,
                c = {},
                d = e.dataTypes.slice();
            if (d[1]) for (r in e.converters) {
              c[r.toLowerCase()] = e.converters[r];
            }

            for (a = d.shift(); a;) {
              if (e.responseFields[a] && (i[e.responseFields[a]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = d.shift()) if ("*" === a) a = l;else if ("*" !== l && l !== a) {
                if (!(r = c[l + " " + a] || c["* " + a])) for (s in c) {
                  if ((o = s.split(" "))[1] === a && (r = c[l + " " + o[0]] || c["* " + o[0]])) {
                    !0 === r ? r = c[s] : !0 !== c[s] && (a = o[0], d.unshift(o[1]));
                    break;
                  }
                }
                if (!0 !== r) if (r && e["throws"]) t = r(t);else try {
                  t = r(t);
                } catch (e) {
                  return {
                    state: "parsererror",
                    error: r ? e : "No conversion from " + l + " to " + a
                  };
                }
              }
            }

            return {
              state: "success",
              data: t
            };
          }(f, x, E, c), c ? (f.ifModified && ((w = E.getResponseHeader("Last-Modified")) && (C.lastModified[s] = w), (w = E.getResponseHeader("etag")) && (C.etag[s] = w)), 204 === e || "HEAD" === f.type ? T = "nocontent" : 304 === e ? T = "notmodified" : (T = x.state, p = x.data, c = !(h = x.error))) : (h = T, !e && T || (T = "error", e < 0 && (e = 0))), E.status = e, E.statusText = (t || T) + "", c ? g.resolveWith(m, [p, T, E]) : g.rejectWith(m, [E, T, h]), E.statusCode(b), b = void 0, u && v.trigger(c ? "ajaxSuccess" : "ajaxError", [E, f, c ? p : h]), y.fireWith(m, [E, T]), u && (v.trigger("ajaxComplete", [E, f]), --C.active || C.event.trigger("ajaxStop")));
        }

        return E;
      },
      getJSON: function getJSON(e, t, i) {
        return C.get(e, t, i, "json");
      },
      getScript: function getScript(e, t) {
        return C.get(e, void 0, t, "script");
      }
    }), C.each(["get", "post"], function (e, t) {
      C[t] = function (e, i, n, s) {
        return y(i) && (s = s || n, n = i, i = void 0), C.ajax(C.extend({
          url: e,
          type: t,
          dataType: s,
          data: i,
          success: n
        }, C.isPlainObject(e) && e));
      };
    }), C._evalUrl = function (e, t) {
      return C.ajax({
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
          C.globalEval(e, t);
        }
      });
    }, C.fn.extend({
      wrapAll: function wrapAll(e) {
        var t;
        return this[0] && (y(e) && (e = e.call(this[0])), t = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstElementChild;) {
            e = e.firstElementChild;
          }

          return e;
        }).append(this)), this;
      },
      wrapInner: function wrapInner(e) {
        return y(e) ? this.each(function (t) {
          C(this).wrapInner(e.call(this, t));
        }) : this.each(function () {
          var t = C(this),
              i = t.contents();
          i.length ? i.wrapAll(e) : t.append(e);
        });
      },
      wrap: function wrap(e) {
        var t = y(e);
        return this.each(function (i) {
          C(this).wrapAll(t ? e.call(this, i) : e);
        });
      },
      unwrap: function unwrap(e) {
        return this.parent(e).not("body").each(function () {
          C(this).replaceWith(this.childNodes);
        }), this;
      }
    }), C.expr.pseudos.hidden = function (e) {
      return !C.expr.pseudos.visible(e);
    }, C.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }, C.ajaxSettings.xhr = function () {
      try {
        return new i.XMLHttpRequest();
      } catch (e) {}
    };
    var Vt = {
      0: 200,
      1223: 204
    },
        Yt = C.ajaxSettings.xhr();
    g.cors = !!Yt && "withCredentials" in Yt, g.ajax = Yt = !!Yt, C.ajaxTransport(function (e) {
      var _t3, n;

      if (g.cors || Yt && !e.crossDomain) return {
        send: function send(s, a) {
          var r,
              o = e.xhr();
          if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (r in e.xhrFields) {
            o[r] = e.xhrFields[r];
          }

          for (r in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest"), s) {
            o.setRequestHeader(r, s[r]);
          }

          _t3 = function t(e) {
            return function () {
              _t3 && (_t3 = n = o.onload = o.onerror = o.onabort = o.ontimeout = o.onreadystatechange = null, "abort" === e ? o.abort() : "error" === e ? "number" != typeof o.status ? a(0, "error") : a(o.status, o.statusText) : a(Vt[o.status] || o.status, o.statusText, "text" !== (o.responseType || "text") || "string" != typeof o.responseText ? {
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
    }), C.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }), C.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function textScript(e) {
          return C.globalEval(e), e;
        }
      }
    }), C.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }), C.ajaxTransport("script", function (e) {
      var t, _i;

      if (e.crossDomain || e.scriptAttrs) return {
        send: function send(n, s) {
          t = C("<script>").attr(e.scriptAttrs || {}).prop({
            charset: e.scriptCharset,
            src: e.url
          }).on("load error", _i = function i(e) {
            t.remove(), _i = null, e && s("error" === e.type ? 404 : 200, e.type);
          }), r.head.appendChild(t[0]);
        },
        abort: function abort() {
          _i && _i();
        }
      };
    });
    var Ut,
        Jt = [],
        Kt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function jsonpCallback() {
        var e = Jt.pop() || C.expando + "_" + $t++;
        return this[e] = !0, e;
      }
    }), C.ajaxPrefilter("json jsonp", function (e, t, n) {
      var s,
          a,
          r,
          o = !1 !== e.jsonp && (Kt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Kt.test(e.data) && "data");
      if (o || "jsonp" === e.dataTypes[0]) return s = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Kt, "$1" + s) : !1 !== e.jsonp && (e.url += (Mt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s), e.converters["script json"] = function () {
        return r || C.error(s + " was not called"), r[0];
      }, e.dataTypes[0] = "json", a = i[s], i[s] = function () {
        r = arguments;
      }, n.always(function () {
        void 0 === a ? C(i).removeProp(s) : i[s] = a, e[s] && (e.jsonpCallback = t.jsonpCallback, Jt.push(s)), r && y(a) && a(r[0]), r = a = void 0;
      }), "script";
    }), g.createHTMLDocument = ((Ut = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Ut.childNodes.length), C.parseHTML = function (e, t, i) {
      return "string" != typeof e ? [] : ("boolean" == typeof t && (i = t, t = !1), t || (g.createHTMLDocument ? ((n = (t = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href, t.head.appendChild(n)) : t = r), a = !i && [], (s = L.exec(e)) ? [t.createElement(s[1])] : (s = Ee([e], t, a), a && a.length && C(a).remove(), C.merge([], s.childNodes)));
      var n, s, a;
    }, C.fn.load = function (e, t, i) {
      var n,
          s,
          a,
          r = this,
          o = e.indexOf(" ");
      return o > -1 && (n = xt(e.slice(o)), e = e.slice(0, o)), y(t) ? (i = t, t = void 0) : t && "object" == _typeof(t) && (s = "POST"), r.length > 0 && C.ajax({
        url: e,
        type: s || "GET",
        dataType: "html",
        data: t
      }).done(function (e) {
        a = arguments, r.html(n ? C("<div>").append(C.parseHTML(e)).find(n) : e);
      }).always(i && function (e, t) {
        r.each(function () {
          i.apply(this, a || [e.responseText, t, e]);
        });
      }), this;
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
      C.fn[t] = function (e) {
        return this.on(t, e);
      };
    }), C.expr.pseudos.animated = function (e) {
      return C.grep(C.timers, function (t) {
        return e === t.elem;
      }).length;
    }, C.offset = {
      setOffset: function setOffset(e, t, i) {
        var n,
            s,
            a,
            r,
            o,
            l,
            c = C.css(e, "position"),
            d = C(e),
            u = {};
        "static" === c && (e.style.position = "relative"), o = d.offset(), a = C.css(e, "top"), l = C.css(e, "left"), ("absolute" === c || "fixed" === c) && (a + l).indexOf("auto") > -1 ? (r = (n = d.position()).top, s = n.left) : (r = parseFloat(a) || 0, s = parseFloat(l) || 0), y(t) && (t = t.call(e, i, C.extend({}, o))), null != t.top && (u.top = t.top - o.top + r), null != t.left && (u.left = t.left - o.left + s), "using" in t ? t.using.call(e, u) : d.css(u);
      }
    }, C.fn.extend({
      offset: function offset(e) {
        if (arguments.length) return void 0 === e ? this : this.each(function (t) {
          C.offset.setOffset(this, e, t);
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
          if ("fixed" === C.css(n, "position")) t = n.getBoundingClientRect();else {
            for (t = this.offset(), i = n.ownerDocument, e = n.offsetParent || i.documentElement; e && (e === i.body || e === i.documentElement) && "static" === C.css(e, "position");) {
              e = e.parentNode;
            }

            e && e !== n && 1 === e.nodeType && ((s = C(e).offset()).top += C.css(e, "borderTopWidth", !0), s.left += C.css(e, "borderLeftWidth", !0));
          }
          return {
            top: t.top - s.top - C.css(n, "marginTop", !0),
            left: t.left - s.left - C.css(n, "marginLeft", !0)
          };
        }
      },
      offsetParent: function offsetParent() {
        return this.map(function () {
          for (var e = this.offsetParent; e && "static" === C.css(e, "position");) {
            e = e.offsetParent;
          }

          return e || re;
        });
      }
    }), C.each({
      scrollLeft: "pageXOffset",
      scrollTop: "pageYOffset"
    }, function (e, t) {
      var i = "pageYOffset" === t;

      C.fn[e] = function (n) {
        return G(this, function (e, n, s) {
          var a;
          if (b(e) ? a = e : 9 === e.nodeType && (a = e.defaultView), void 0 === s) return a ? a[t] : e[n];
          a ? a.scrollTo(i ? a.pageXOffset : s, i ? s : a.pageYOffset) : e[n] = s;
        }, e, n, arguments.length);
      };
    }), C.each(["top", "left"], function (e, t) {
      C.cssHooks[t] = Ye(g.pixelPosition, function (e, i) {
        if (i) return i = Ve(e, t), Xe.test(i) ? C(e).position()[t] + "px" : i;
      });
    }), C.each({
      Height: "height",
      Width: "width"
    }, function (e, t) {
      C.each({
        padding: "inner" + e,
        content: t,
        "": "outer" + e
      }, function (i, n) {
        C.fn[n] = function (s, a) {
          var r = arguments.length && (i || "boolean" != typeof s),
              o = i || (!0 === s || !0 === a ? "margin" : "border");
          return G(this, function (t, i, s) {
            var a;
            return b(t) ? 0 === n.indexOf("outer") ? t["inner" + e] : t.document.documentElement["client" + e] : 9 === t.nodeType ? (a = t.documentElement, Math.max(t.body["scroll" + e], a["scroll" + e], t.body["offset" + e], a["offset" + e], a["client" + e])) : void 0 === s ? C.css(t, i, o) : C.style(t, i, s, o);
          }, t, r ? s : void 0, r);
        };
      });
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (e, t) {
      C.fn[t] = function (e, i) {
        return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t);
      };
    }), C.fn.extend({
      hover: function hover(e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      }
    }), C.fn.extend({
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
    }), C.proxy = function (e, t) {
      var i, n, s;
      if ("string" == typeof t && (i = e[t], t = e, e = i), y(e)) return n = l.call(arguments, 2), (s = function s() {
        return e.apply(t || this, n.concat(l.call(arguments)));
      }).guid = e.guid = e.guid || C.guid++, s;
    }, C.holdReady = function (e) {
      e ? C.readyWait++ : C.ready(!0);
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = z, C.isFunction = y, C.isWindow = b, C.camelCase = U, C.type = T, C.now = Date.now, C.isNumeric = function (e) {
      var t = C.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }, void 0 === (n = function () {
      return C;
    }.apply(t, [])) || (e.exports = n);
    var Qt = i.jQuery,
        Zt = i.$;
    return C.noConflict = function (e) {
      return i.$ === C && (i.$ = Zt), e && i.jQuery === C && (i.jQuery = Qt), C;
    }, s || (i.jQuery = i.$ = C), C;
  });
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
          a = i(3),
          r = function () {
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
              t = a.htmlParser.typeHtmlChars(e, t, i);
              var n = 0,
                  r = e.substr(t);

              if ("^" === r.charAt(0) && /^\^\d+/.test(r)) {
                var o = 1;
                o += (r = /\d+/.exec(r)[0]).length, n = parseInt(r), i.temporaryPause = !0, i.options.onTypingPaused(i.arrayPos, i), e = e.substring(0, t) + e.substring(t + o), i.toggleBlinking(!0);
              }

              if ("`" === r.charAt(0)) {
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
                t = a.htmlParser.backSpaceHtmlChars(e, t, i);
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

      t["default"] = r, e.exports = t["default"];
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
          a = function () {
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
          r = i(2),
          o = (n = r) && n.__esModule ? n : {
        "default": n
      },
          l = function () {
        function e() {
          !function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
          }(this, e);
        }

        return a(e, [{
          key: "load",
          value: function value(e, t, i) {
            if (e.el = "string" == typeof i ? document.querySelector(i) : i, e.options = s({}, o["default"], t), e.isInput = "input" === e.el.tagName.toLowerCase(), e.attr = e.options.attr, e.bindInputFocusEvents = e.options.bindInputFocusEvents, e.showCursor = !e.isInput && e.options.showCursor, e.cursorChar = e.options.cursorChar, e.cursorBlinking = !0, e.elContent = e.attr ? e.el.getAttribute(e.attr) : e.el.textContent, e.contentType = e.options.contentType, e.typeSpeed = e.options.typeSpeed, e.startDelay = e.options.startDelay, e.backSpeed = e.options.backSpeed, e.smartBackspace = e.options.smartBackspace, e.backDelay = e.options.backDelay, e.fadeOut = e.options.fadeOut, e.fadeOutClass = e.options.fadeOutClass, e.fadeOutDelay = e.options.fadeOutDelay, e.isPaused = !1, e.strings = e.options.strings.map(function (e) {
              return e.trim();
            }), "string" == typeof e.options.stringsElement ? e.stringsElement = document.querySelector(e.options.stringsElement) : e.stringsElement = e.options.stringsElement, e.stringsElement) {
              e.strings = [], e.stringsElement.style.display = "none";
              var n = Array.prototype.slice.apply(e.stringsElement.children),
                  a = n.length;
              if (a) for (var r = 0; r < a; r += 1) {
                var l = n[r];
                e.strings.push(l.innerHTML.trim());
              }
            }

            for (var r in e.strPos = 0, e.arrayPos = 0, e.stopNum = 0, e.loop = e.options.loop, e.loopCount = e.options.loopCount, e.curLoop = 0, e.shuffle = e.options.shuffle, e.sequence = [], e.pause = {
              status: !1,
              typewrite: !0,
              curString: "",
              curStrPos: 0
            }, e.typingComplete = !1, e.strings) {
              e.sequence[r] = r;
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
    var a = this.pJS;
    t && Object.deepExtend(a, t), a.tmp.obj = {
      size_value: a.particles.size.value,
      size_anim_speed: a.particles.size.anim.speed,
      move_speed: a.particles.move.speed,
      line_linked_distance: a.particles.line_linked.distance,
      line_linked_width: a.particles.line_linked.width,
      mode_grab_distance: a.interactivity.modes.grab.distance,
      mode_bubble_distance: a.interactivity.modes.bubble.distance,
      mode_bubble_size: a.interactivity.modes.bubble.size,
      mode_repulse_distance: a.interactivity.modes.repulse.distance
    }, a.fn.retinaInit = function () {
      a.retina_detect && window.devicePixelRatio > 1 ? (a.canvas.pxratio = window.devicePixelRatio, a.tmp.retina = !0) : (a.canvas.pxratio = 1, a.tmp.retina = !1), a.canvas.w = a.canvas.el.offsetWidth * a.canvas.pxratio, a.canvas.h = a.canvas.el.offsetHeight * a.canvas.pxratio, a.particles.size.value = a.tmp.obj.size_value * a.canvas.pxratio, a.particles.size.anim.speed = a.tmp.obj.size_anim_speed * a.canvas.pxratio, a.particles.move.speed = a.tmp.obj.move_speed * a.canvas.pxratio, a.particles.line_linked.distance = a.tmp.obj.line_linked_distance * a.canvas.pxratio, a.interactivity.modes.grab.distance = a.tmp.obj.mode_grab_distance * a.canvas.pxratio, a.interactivity.modes.bubble.distance = a.tmp.obj.mode_bubble_distance * a.canvas.pxratio, a.particles.line_linked.width = a.tmp.obj.line_linked_width * a.canvas.pxratio, a.interactivity.modes.bubble.size = a.tmp.obj.mode_bubble_size * a.canvas.pxratio, a.interactivity.modes.repulse.distance = a.tmp.obj.mode_repulse_distance * a.canvas.pxratio;
    }, a.fn.canvasInit = function () {
      a.canvas.ctx = a.canvas.el.getContext("2d");
    }, a.fn.canvasSize = function () {
      a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a && a.interactivity.events.resize && window.addEventListener("resize", function () {
        a.canvas.w = a.canvas.el.offsetWidth, a.canvas.h = a.canvas.el.offsetHeight, a.tmp.retina && (a.canvas.w *= a.canvas.pxratio, a.canvas.h *= a.canvas.pxratio), a.canvas.el.width = a.canvas.w, a.canvas.el.height = a.canvas.h, a.particles.move.enable || (a.fn.particlesEmpty(), a.fn.particlesCreate(), a.fn.particlesDraw(), a.fn.vendors.densityAutoParticles()), a.fn.vendors.densityAutoParticles();
      });
    }, a.fn.canvasPaint = function () {
      a.canvas.ctx.fillRect(0, 0, a.canvas.w, a.canvas.h);
    }, a.fn.canvasClear = function () {
      a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h);
    }, a.fn.particle = function (e, t, i) {
      if (this.radius = (a.particles.size.random ? Math.random() : 1) * a.particles.size.value, a.particles.size.anim.enable && (this.size_status = !1, this.vs = a.particles.size.anim.speed / 100, a.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = i ? i.x : Math.random() * a.canvas.w, this.y = i ? i.y : Math.random() * a.canvas.h, this.x > a.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > a.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), a.particles.move.bounce && a.fn.vendors.checkOverlap(this, i), this.color = {}, "object" == _typeof(e.value)) {
        if (e.value instanceof Array) {
          var s = e.value[Math.floor(Math.random() * a.particles.color.value.length)];
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
      this.opacity = (a.particles.opacity.random ? Math.random() : 1) * a.particles.opacity.value, a.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = a.particles.opacity.anim.speed / 100, a.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var r = {};

      switch (a.particles.move.direction) {
        case "top":
          r = {
            x: 0,
            y: -1
          };
          break;

        case "top-right":
          r = {
            x: .5,
            y: -.5
          };
          break;

        case "right":
          r = {
            x: 1,
            y: -0
          };
          break;

        case "bottom-right":
          r = {
            x: .5,
            y: .5
          };
          break;

        case "bottom":
          r = {
            x: 0,
            y: 1
          };
          break;

        case "bottom-left":
          r = {
            x: -.5,
            y: 1
          };
          break;

        case "left":
          r = {
            x: -1,
            y: 0
          };
          break;

        case "top-left":
          r = {
            x: -.5,
            y: -.5
          };
          break;

        default:
          r = {
            x: 0,
            y: 0
          };
      }

      a.particles.move.straight ? (this.vx = r.x, this.vy = r.y, a.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = r.x + Math.random() - .5, this.vy = r.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
      var o = a.particles.shape.type;

      if ("object" == _typeof(o)) {
        if (o instanceof Array) {
          var l = o[Math.floor(Math.random() * o.length)];
          this.shape = l;
        }
      } else this.shape = o;

      if ("image" == this.shape) {
        var c = a.particles.shape;
        this.img = {
          src: c.image.src,
          ratio: c.image.width / c.image.height
        }, this.img.ratio || (this.img.ratio = 1), "svg" == a.tmp.img_type && null != a.tmp.source_svg && (a.fn.vendors.createSvgImg(this), a.tmp.pushing && (this.img.loaded = !1));
      }
    }, a.fn.particle.prototype.draw = function () {
      var e = this;
      if (null != e.radius_bubble) var t = e.radius_bubble;else t = e.radius;
      if (null != e.opacity_bubble) var i = e.opacity_bubble;else i = e.opacity;
      if (e.color.rgb) var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + i + ")";else n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + i + ")";

      switch (a.canvas.ctx.fillStyle = n, a.canvas.ctx.beginPath(), e.shape) {
        case "circle":
          a.canvas.ctx.arc(e.x, e.y, t, 0, 2 * Math.PI, !1);
          break;

        case "edge":
          a.canvas.ctx.rect(e.x - t, e.y - t, 2 * t, 2 * t);
          break;

        case "triangle":
          a.fn.vendors.drawShape(a.canvas.ctx, e.x - t, e.y + t / 1.66, 2 * t, 3, 2);
          break;

        case "polygon":
          a.fn.vendors.drawShape(a.canvas.ctx, e.x - t / (a.particles.shape.polygon.nb_sides / 3.5), e.y - t / .76, 2.66 * t / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 1);
          break;

        case "star":
          a.fn.vendors.drawShape(a.canvas.ctx, e.x - 2 * t / (a.particles.shape.polygon.nb_sides / 4), e.y - t / 1.52, 2 * t * 2.66 / (a.particles.shape.polygon.nb_sides / 3), a.particles.shape.polygon.nb_sides, 2);
          break;

        case "image":
          ;
          if ("svg" == a.tmp.img_type) var s = e.img.obj;else s = a.tmp.img_obj;
          s && a.canvas.ctx.drawImage(s, e.x - t, e.y - t, 2 * t, 2 * t / e.img.ratio);
      }

      a.canvas.ctx.closePath(), a.particles.shape.stroke.width > 0 && (a.canvas.ctx.strokeStyle = a.particles.shape.stroke.color, a.canvas.ctx.lineWidth = a.particles.shape.stroke.width, a.canvas.ctx.stroke()), a.canvas.ctx.fill();
    }, a.fn.particlesCreate = function () {
      for (var e = 0; e < a.particles.number.value; e++) {
        a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value));
      }
    }, a.fn.particlesUpdate = function () {
      for (var e = 0; e < a.particles.array.length; e++) {
        var t = a.particles.array[e];

        if (a.particles.move.enable) {
          var i = a.particles.move.speed / 2;
          t.x += t.vx * i, t.y += t.vy * i;
        }

        if (a.particles.opacity.anim.enable && (1 == t.opacity_status ? (t.opacity >= a.particles.opacity.value && (t.opacity_status = !1), t.opacity += t.vo) : (t.opacity <= a.particles.opacity.anim.opacity_min && (t.opacity_status = !0), t.opacity -= t.vo), t.opacity < 0 && (t.opacity = 0)), a.particles.size.anim.enable && (1 == t.size_status ? (t.radius >= a.particles.size.value && (t.size_status = !1), t.radius += t.vs) : (t.radius <= a.particles.size.anim.size_min && (t.size_status = !0), t.radius -= t.vs), t.radius < 0 && (t.radius = 0)), "bounce" == a.particles.move.out_mode) var n = {
          x_left: t.radius,
          x_right: a.canvas.w,
          y_top: t.radius,
          y_bottom: a.canvas.h
        };else n = {
          x_left: -t.radius,
          x_right: a.canvas.w + t.radius,
          y_top: -t.radius,
          y_bottom: a.canvas.h + t.radius
        };

        switch (t.x - t.radius > a.canvas.w ? (t.x = n.x_left, t.y = Math.random() * a.canvas.h) : t.x + t.radius < 0 && (t.x = n.x_right, t.y = Math.random() * a.canvas.h), t.y - t.radius > a.canvas.h ? (t.y = n.y_top, t.x = Math.random() * a.canvas.w) : t.y + t.radius < 0 && (t.y = n.y_bottom, t.x = Math.random() * a.canvas.w), a.particles.move.out_mode) {
          case "bounce":
            t.x + t.radius > a.canvas.w ? t.vx = -t.vx : t.x - t.radius < 0 && (t.vx = -t.vx), t.y + t.radius > a.canvas.h ? t.vy = -t.vy : t.y - t.radius < 0 && (t.vy = -t.vy);
        }

        if (s("grab", a.interactivity.events.onhover.mode) && a.fn.modes.grabParticle(t), (s("bubble", a.interactivity.events.onhover.mode) || s("bubble", a.interactivity.events.onclick.mode)) && a.fn.modes.bubbleParticle(t), (s("repulse", a.interactivity.events.onhover.mode) || s("repulse", a.interactivity.events.onclick.mode)) && a.fn.modes.repulseParticle(t), a.particles.line_linked.enable || a.particles.move.attract.enable) for (var r = e + 1; r < a.particles.array.length; r++) {
          var o = a.particles.array[r];
          a.particles.line_linked.enable && a.fn.interact.linkParticles(t, o), a.particles.move.attract.enable && a.fn.interact.attractParticles(t, o), a.particles.move.bounce && a.fn.interact.bounceParticles(t, o);
        }
      }
    }, a.fn.particlesDraw = function () {
      a.canvas.ctx.clearRect(0, 0, a.canvas.w, a.canvas.h), a.fn.particlesUpdate();

      for (var e = 0; e < a.particles.array.length; e++) {
        a.particles.array[e].draw();
      }
    }, a.fn.particlesEmpty = function () {
      a.particles.array = [];
    }, a.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(a.fn.checkAnimFrame), cancelRequestAnimFrame(a.fn.drawAnimFrame), a.tmp.source_svg = void 0, a.tmp.img_obj = void 0, a.tmp.count_svg = 0, a.fn.particlesEmpty(), a.fn.canvasClear(), a.fn.vendors.start();
    }, a.fn.interact.linkParticles = function (e, t) {
      var i = e.x - t.x,
          n = e.y - t.y,
          s = Math.sqrt(i * i + n * n);

      if (s <= a.particles.line_linked.distance) {
        var r = a.particles.line_linked.opacity - s / (1 / a.particles.line_linked.opacity) / a.particles.line_linked.distance;

        if (r > 0) {
          var o = a.particles.line_linked.color_rgb_line;
          a.canvas.ctx.strokeStyle = "rgba(" + o.r + "," + o.g + "," + o.b + "," + r + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(t.x, t.y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath();
        }
      }
    }, a.fn.interact.attractParticles = function (e, t) {
      var i = e.x - t.x,
          n = e.y - t.y;

      if (Math.sqrt(i * i + n * n) <= a.particles.line_linked.distance) {
        var s = i / (1e3 * a.particles.move.attract.rotateX),
            r = n / (1e3 * a.particles.move.attract.rotateY);
        e.vx -= s, e.vy -= r, t.vx += s, t.vy += r;
      }
    }, a.fn.interact.bounceParticles = function (e, t) {
      var i = e.x - t.x,
          n = e.y - t.y;
      Math.sqrt(i * i + n * n) <= e.radius + t.radius && (e.vx = -e.vx, e.vy = -e.vy, t.vx = -t.vx, t.vy = -t.vy);
    }, a.fn.modes.pushParticles = function (e, t) {
      a.tmp.pushing = !0;

      for (var i = 0; i < e; i++) {
        a.particles.array.push(new a.fn.particle(a.particles.color, a.particles.opacity.value, {
          x: t ? t.pos_x : Math.random() * a.canvas.w,
          y: t ? t.pos_y : Math.random() * a.canvas.h
        })), i == e - 1 && (a.particles.move.enable || a.fn.particlesDraw(), a.tmp.pushing = !1);
      }
    }, a.fn.modes.removeParticles = function (e) {
      a.particles.array.splice(0, e), a.particles.move.enable || a.fn.particlesDraw();
    }, a.fn.modes.bubbleParticle = function (e) {
      if (a.interactivity.events.onhover.enable && s("bubble", a.interactivity.events.onhover.mode)) {
        var r = function r() {
          e.opacity_bubble = e.opacity, e.radius_bubble = e.radius;
        };

        var t = e.x - a.interactivity.mouse.pos_x,
            i = e.y - a.interactivity.mouse.pos_y,
            n = 1 - (d = Math.sqrt(t * t + i * i)) / a.interactivity.modes.bubble.distance;

        if (d <= a.interactivity.modes.bubble.distance) {
          if (n >= 0 && "mousemove" == a.interactivity.status) {
            if (a.interactivity.modes.bubble.size != a.particles.size.value) if (a.interactivity.modes.bubble.size > a.particles.size.value) {
              (l = e.radius + a.interactivity.modes.bubble.size * n) >= 0 && (e.radius_bubble = l);
            } else {
              var o = e.radius - a.interactivity.modes.bubble.size,
                  l = e.radius - o * n;
              e.radius_bubble = l > 0 ? l : 0;
            }
            var c;
            if (a.interactivity.modes.bubble.opacity != a.particles.opacity.value) if (a.interactivity.modes.bubble.opacity > a.particles.opacity.value) (c = a.interactivity.modes.bubble.opacity * n) > e.opacity && c <= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);else (c = e.opacity - (a.particles.opacity.value - a.interactivity.modes.bubble.opacity) * n) < e.opacity && c >= a.interactivity.modes.bubble.opacity && (e.opacity_bubble = c);
          }
        } else r();

        "mouseleave" == a.interactivity.status && r();
      } else if (a.interactivity.events.onclick.enable && s("bubble", a.interactivity.events.onclick.mode)) {
        var p = function p(t, i, n, s, r) {
          if (t != i) if (a.tmp.bubble_duration_end) null != n && (l = t + (t - (s - u * (s - t) / a.interactivity.modes.bubble.duration)), "size" == r && (e.radius_bubble = l), "opacity" == r && (e.opacity_bubble = l));else if (d <= a.interactivity.modes.bubble.distance) {
            if (null != n) var o = n;else o = s;

            if (o != t) {
              var l = s - u * (s - t) / a.interactivity.modes.bubble.duration;
              "size" == r && (e.radius_bubble = l), "opacity" == r && (e.opacity_bubble = l);
            }
          } else "size" == r && (e.radius_bubble = void 0), "opacity" == r && (e.opacity_bubble = void 0);
        };

        if (a.tmp.bubble_clicking) {
          t = e.x - a.interactivity.mouse.click_pos_x, i = e.y - a.interactivity.mouse.click_pos_y;
          var d = Math.sqrt(t * t + i * i),
              u = (new Date().getTime() - a.interactivity.mouse.click_time) / 1e3;
          u > a.interactivity.modes.bubble.duration && (a.tmp.bubble_duration_end = !0), u > 2 * a.interactivity.modes.bubble.duration && (a.tmp.bubble_clicking = !1, a.tmp.bubble_duration_end = !1);
        }

        a.tmp.bubble_clicking && (p(a.interactivity.modes.bubble.size, a.particles.size.value, e.radius_bubble, e.radius, "size"), p(a.interactivity.modes.bubble.opacity, a.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"));
      }
    }, a.fn.modes.repulseParticle = function (e) {
      if (a.interactivity.events.onhover.enable && s("repulse", a.interactivity.events.onhover.mode) && "mousemove" == a.interactivity.status) {
        var t = e.x - a.interactivity.mouse.pos_x,
            i = e.y - a.interactivity.mouse.pos_y,
            n = Math.sqrt(t * t + i * i),
            r = {
          x: t / n,
          y: i / n
        },
            o = a.interactivity.modes.repulse.distance,
            l = (f = 1 / o * (-1 * Math.pow(n / o, 2) + 1) * o * 100, m = 0, v = 50, Math.min(Math.max(f, m), v)),
            c = {
          x: e.x + r.x * l,
          y: e.y + r.y * l
        };
        "bounce" == a.particles.move.out_mode ? (c.x - e.radius > 0 && c.x + e.radius < a.canvas.w && (e.x = c.x), c.y - e.radius > 0 && c.y + e.radius < a.canvas.h && (e.y = c.y)) : (e.x = c.x, e.y = c.y);
      } else if (a.interactivity.events.onclick.enable && s("repulse", a.interactivity.events.onclick.mode)) if (a.tmp.repulse_finish || (a.tmp.repulse_count++, a.tmp.repulse_count == a.particles.array.length && (a.tmp.repulse_finish = !0)), a.tmp.repulse_clicking) {
        o = Math.pow(a.interactivity.modes.repulse.distance / 6, 3);
        var d = a.interactivity.mouse.click_pos_x - e.x,
            u = a.interactivity.mouse.click_pos_y - e.y,
            p = d * d + u * u,
            h = -o / p * 1;
        p <= o && function () {
          var t = Math.atan2(u, d);

          if (e.vx = h * Math.cos(t), e.vy = h * Math.sin(t), "bounce" == a.particles.move.out_mode) {
            var i = {
              x: e.x + e.vx,
              y: e.y + e.vy
            };
            i.x + e.radius > a.canvas.w ? e.vx = -e.vx : i.x - e.radius < 0 && (e.vx = -e.vx), i.y + e.radius > a.canvas.h ? e.vy = -e.vy : i.y - e.radius < 0 && (e.vy = -e.vy);
          }
        }();
      } else 0 == a.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i);

      var f, m, v;
    }, a.fn.modes.grabParticle = function (e) {
      if (a.interactivity.events.onhover.enable && "mousemove" == a.interactivity.status) {
        var t = e.x - a.interactivity.mouse.pos_x,
            i = e.y - a.interactivity.mouse.pos_y,
            n = Math.sqrt(t * t + i * i);

        if (n <= a.interactivity.modes.grab.distance) {
          var s = a.interactivity.modes.grab.line_linked.opacity - n / (1 / a.interactivity.modes.grab.line_linked.opacity) / a.interactivity.modes.grab.distance;

          if (s > 0) {
            var r = a.particles.line_linked.color_rgb_line;
            a.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")", a.canvas.ctx.lineWidth = a.particles.line_linked.width, a.canvas.ctx.beginPath(), a.canvas.ctx.moveTo(e.x, e.y), a.canvas.ctx.lineTo(a.interactivity.mouse.pos_x, a.interactivity.mouse.pos_y), a.canvas.ctx.stroke(), a.canvas.ctx.closePath();
          }
        }
      }
    }, a.fn.vendors.eventsListeners = function () {
      "window" == a.interactivity.detect_on ? a.interactivity.el = window : a.interactivity.el = a.canvas.el, (a.interactivity.events.onhover.enable || a.interactivity.events.onclick.enable) && (a.interactivity.el.addEventListener("mousemove", function (e) {
        if (a.interactivity.el == window) var t = e.clientX,
            i = e.clientY;else t = e.offsetX || e.clientX, i = e.offsetY || e.clientY;
        a.interactivity.mouse.pos_x = t, a.interactivity.mouse.pos_y = i, a.tmp.retina && (a.interactivity.mouse.pos_x *= a.canvas.pxratio, a.interactivity.mouse.pos_y *= a.canvas.pxratio), a.interactivity.status = "mousemove";
      }), a.interactivity.el.addEventListener("mouseleave", function (e) {
        a.interactivity.mouse.pos_x = null, a.interactivity.mouse.pos_y = null, a.interactivity.status = "mouseleave";
      })), a.interactivity.events.onclick.enable && a.interactivity.el.addEventListener("click", function () {
        if (a.interactivity.mouse.click_pos_x = a.interactivity.mouse.pos_x, a.interactivity.mouse.click_pos_y = a.interactivity.mouse.pos_y, a.interactivity.mouse.click_time = new Date().getTime(), a.interactivity.events.onclick.enable) switch (a.interactivity.events.onclick.mode) {
          case "push":
            a.particles.move.enable ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : 1 == a.interactivity.modes.push.particles_nb ? a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb, a.interactivity.mouse) : a.interactivity.modes.push.particles_nb > 1 && a.fn.modes.pushParticles(a.interactivity.modes.push.particles_nb);
            break;

          case "remove":
            a.fn.modes.removeParticles(a.interactivity.modes.remove.particles_nb);
            break;

          case "bubble":
            a.tmp.bubble_clicking = !0;
            break;

          case "repulse":
            a.tmp.repulse_clicking = !0, a.tmp.repulse_count = 0, a.tmp.repulse_finish = !1, setTimeout(function () {
              a.tmp.repulse_clicking = !1;
            }, 1e3 * a.interactivity.modes.repulse.duration);
        }
      });
    }, a.fn.vendors.densityAutoParticles = function () {
      if (a.particles.number.density.enable) {
        var e = a.canvas.el.width * a.canvas.el.height / 1e3;
        a.tmp.retina && (e /= 2 * a.canvas.pxratio);
        var t = e * a.particles.number.value / a.particles.number.density.value_area,
            i = a.particles.array.length - t;
        i < 0 ? a.fn.modes.pushParticles(Math.abs(i)) : a.fn.modes.removeParticles(i);
      }
    }, a.fn.vendors.checkOverlap = function (e, t) {
      for (var i = 0; i < a.particles.array.length; i++) {
        var n = a.particles.array[i],
            s = e.x - n.x,
            r = e.y - n.y;
        Math.sqrt(s * s + r * r) <= e.radius + n.radius && (e.x = t ? t.x : Math.random() * a.canvas.w, e.y = t ? t.y : Math.random() * a.canvas.h, a.fn.vendors.checkOverlap(e));
      }
    }, a.fn.vendors.createSvgImg = function (e) {
      var t = a.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi, function (t, i, n, s) {
        if (e.color.rgb) var a = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")";else a = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
        return a;
      }),
          i = new Blob([t], {
        type: "image/svg+xml;charset=utf-8"
      }),
          n = window.URL || window.webkitURL || window,
          s = n.createObjectURL(i),
          r = new Image();
      r.addEventListener("load", function () {
        e.img.obj = r, e.img.loaded = !0, n.revokeObjectURL(s), a.tmp.count_svg++;
      }), r.src = s;
    }, a.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(a.fn.drawAnimFrame), i.remove(), pJSDom = null;
    }, a.fn.vendors.drawShape = function (e, t, i, n, s, a) {
      var r = s * a,
          o = s / a,
          l = 180 * (o - 2) / o,
          c = Math.PI - Math.PI * l / 180;
      e.save(), e.beginPath(), e.translate(t, i), e.moveTo(0, 0);

      for (var d = 0; d < r; d++) {
        e.lineTo(n, 0), e.translate(n, 0), e.rotate(c);
      }

      e.fill(), e.restore();
    }, a.fn.vendors.exportImg = function () {
      window.open(a.canvas.el.toDataURL("image/png"), "_blank");
    }, a.fn.vendors.loadImg = function (e) {
      if (a.tmp.img_error = void 0, "" != a.particles.shape.image.src) {
        if ("svg" == e) {
          var t = new XMLHttpRequest();
          t.open("GET", a.particles.shape.image.src), t.onreadystatechange = function (e) {
            4 == t.readyState && (200 == t.status ? (a.tmp.source_svg = e.currentTarget.response, a.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), a.tmp.img_error = !0));
          }, t.send();
        } else {
          var i = new Image();
          i.addEventListener("load", function () {
            a.tmp.img_obj = i, a.fn.vendors.checkBeforeDraw();
          }), i.src = a.particles.shape.image.src;
        }
      } else console.log("Error pJS - No image.src"), a.tmp.img_error = !0;
    }, a.fn.vendors.draw = function () {
      "image" == a.particles.shape.type ? "svg" == a.tmp.img_type ? a.tmp.count_svg >= a.particles.number.value ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : null != a.tmp.img_obj ? (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame)) : a.tmp.img_error || (a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw)) : (a.fn.particlesDraw(), a.particles.move.enable ? a.fn.drawAnimFrame = requestAnimFrame(a.fn.vendors.draw) : cancelRequestAnimFrame(a.fn.drawAnimFrame));
    }, a.fn.vendors.checkBeforeDraw = function () {
      "image" == a.particles.shape.type ? "svg" == a.tmp.img_type && null == a.tmp.source_svg ? a.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(a.tmp.checkAnimFrame), a.tmp.img_error || (a.fn.vendors.init(), a.fn.vendors.draw())) : (a.fn.vendors.init(), a.fn.vendors.draw());
    }, a.fn.vendors.init = function () {
      a.fn.retinaInit(), a.fn.canvasInit(), a.fn.canvasSize(), a.fn.canvasPaint(), a.fn.particlesCreate(), a.fn.vendors.densityAutoParticles(), a.particles.line_linked.color_rgb_line = n(a.particles.line_linked.color);
    }, a.fn.vendors.start = function () {
      s("image", a.particles.shape.type) ? (a.tmp.img_type = a.particles.shape.image.src.substr(a.particles.shape.image.src.length - 3), a.fn.vendors.loadImg(a.tmp.img_type)) : a.fn.vendors.checkBeforeDraw();
    }, a.fn.vendors.eventsListeners(), a.fn.vendors.start();
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
    var a = document.createElement("canvas");
    a.className = "particles-js-canvas-el", a.style.width = "100%", a.style.height = "100%", null != document.getElementById(e).appendChild(a) && pJSDom.push(new i(e, t));
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
  var n = "undefined" == typeof document ? {
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
      s = "undefined" == typeof window ? {
    document: n,
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

  var a = function a(e) {
    _classCallCheck(this, a);

    var t = this;

    for (var _i2 = 0; _i2 < e.length; _i2 += 1) {
      t[_i2] = e[_i2];
    }

    return t.length = e.length, this;
  };

  function r(e, t) {
    var i = [];
    var r = 0;
    if (e && !t && e instanceof a) return e;
    if (e) if ("string" == typeof e) {
      var _s, _a2;

      var _o = e.trim();

      if (_o.indexOf("<") >= 0 && _o.indexOf(">") >= 0) {
        var _e2 = "div";

        for (0 === _o.indexOf("<li") && (_e2 = "ul"), 0 === _o.indexOf("<tr") && (_e2 = "tbody"), 0 !== _o.indexOf("<td") && 0 !== _o.indexOf("<th") || (_e2 = "tr"), 0 === _o.indexOf("<tbody") && (_e2 = "table"), 0 === _o.indexOf("<option") && (_e2 = "select"), (_a2 = n.createElement(_e2)).innerHTML = _o, r = 0; r < _a2.childNodes.length; r += 1) {
          i.push(_a2.childNodes[r]);
        }
      } else for (_s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || n).querySelectorAll(e.trim()) : [n.getElementById(e.trim().split("#")[1])], r = 0; r < _s.length; r += 1) {
        _s[r] && i.push(_s[r]);
      }
    } else if (e.nodeType || e === s || e === n) i.push(e);else if (e.length > 0 && e[0].nodeType) for (r = 0; r < e.length; r += 1) {
      i.push(e[r]);
    }
    return new a(i);
  }

  function o(e) {
    var t = [];

    for (var _i3 = 0; _i3 < e.length; _i3 += 1) {
      -1 === t.indexOf(e[_i3]) && t.push(e[_i3]);
    }

    return t;
  }

  r.fn = a.prototype, r.Class = a, r.Dom7 = a;
  "resize scroll".split(" ");
  var l = {
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

      function a(e) {
        var t = e.target;
        if (!t) return;
        var s = e.target.dom7EventData || [];
        if (s.indexOf(e) < 0 && s.unshift(e), r(t).is(i)) n.apply(t, s);else {
          var _e6 = r(t).parents();

          for (var _t9 = 0; _t9 < _e6.length; _t9 += 1) {
            r(_e6[_t9]).is(i) && n.apply(_e6[_t9], s);
          }
        }
      }

      function o(e) {
        var t = e && e.target && e.target.dom7EventData || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }

      "function" == typeof e[1] && ((_e7 = e, _e8 = _slicedToArray(_e7, 3), t = _e8[0], n = _e8[1], s = _e8[2], _e7), i = void 0), s || (s = !1);
      var l = t.split(" ");
      var c;

      for (var _e9 = 0; _e9 < this.length; _e9 += 1) {
        var _t10 = this[_e9];
        if (i) for (c = 0; c < l.length; c += 1) {
          var _e10 = l[c];
          _t10.dom7LiveListeners || (_t10.dom7LiveListeners = {}), _t10.dom7LiveListeners[_e10] || (_t10.dom7LiveListeners[_e10] = []), _t10.dom7LiveListeners[_e10].push({
            listener: n,
            proxyListener: a
          }), _t10.addEventListener(_e10, a, s);
        } else for (c = 0; c < l.length; c += 1) {
          var _e11 = l[c];
          _t10.dom7Listeners || (_t10.dom7Listeners = {}), _t10.dom7Listeners[_e11] || (_t10.dom7Listeners[_e11] = []), _t10.dom7Listeners[_e11].push({
            listener: n,
            proxyListener: o
          }), _t10.addEventListener(_e11, o, s);
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
      var a = t.split(" ");

      for (var _e14 = 0; _e14 < a.length; _e14 += 1) {
        var _t11 = a[_e14];

        for (var _e15 = 0; _e15 < this.length; _e15 += 1) {
          var _a3 = this[_e15];

          var _r = void 0;

          if (!i && _a3.dom7Listeners ? _r = _a3.dom7Listeners[_t11] : i && _a3.dom7LiveListeners && (_r = _a3.dom7LiveListeners[_t11]), _r && _r.length) for (var _e16 = _r.length - 1; _e16 >= 0; _e16 -= 1) {
            var _i10 = _r[_e16];
            n && _i10.listener === n ? (_a3.removeEventListener(_t11, _i10.proxyListener, s), _r.splice(_e16, 1)) : n && _i10.listener && _i10.listener.dom7proxy && _i10.listener.dom7proxy === n ? (_a3.removeEventListener(_t11, _i10.proxyListener, s), _r.splice(_e16, 1)) : n || (_a3.removeEventListener(_t11, _i10.proxyListener, s), _r.splice(_e16, 1));
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

      for (var _a4 = 0; _a4 < t.length; _a4 += 1) {
        var _r2 = t[_a4];

        for (var _t12 = 0; _t12 < this.length; _t12 += 1) {
          var _a5 = this[_t12];

          var _o2 = void 0;

          try {
            _o2 = new s.CustomEvent(_r2, {
              detail: i,
              bubbles: !0,
              cancelable: !0
            });
          } catch (e) {
            (_o2 = n.createEvent("Event")).initEvent(_r2, !0, !0), _o2.detail = i;
          }

          _a5.dom7EventData = e.filter(function (e, t) {
            return t > 0;
          }), _a5.dispatchEvent(_o2), _a5.dom7EventData = [], delete _a5.dom7EventData;
        }
      }

      return this;
    },
    transitionEnd: function transitionEnd(e) {
      var t = ["webkitTransitionEnd", "transitionend"],
          i = this;
      var n;

      function s(a) {
        if (a.target === this) for (e.call(this, a), n = 0; n < t.length; n += 1) {
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
            _i11 = n.body,
            _a6 = _e19.clientTop || _i11.clientTop || 0,
            _r3 = _e19.clientLeft || _i11.clientLeft || 0,
            _o3 = _e19 === s ? s.scrollY : _e19.scrollTop,
            _l = _e19 === s ? s.scrollX : _e19.scrollLeft;

        return {
          top: _t13.top + _o3 - _a6,
          left: _t13.left + _l - _r3
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

        if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
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
      var i, o;
      if (!t || void 0 === e) return !1;

      if ("string" == typeof e) {
        if (t.matches) return t.matches(e);
        if (t.webkitMatchesSelector) return t.webkitMatchesSelector(e);
        if (t.msMatchesSelector) return t.msMatchesSelector(e);

        for (i = r(e), o = 0; o < i.length; o += 1) {
          if (i[o] === t) return !0;
        }

        return !1;
      }

      if (e === n) return t === n;
      if (e === s) return t === s;

      if (e.nodeType || e instanceof a) {
        for (i = e.nodeType ? [e] : e, o = 0; o < i.length; o += 1) {
          if (i[o] === t) return !0;
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
      return new a(e > t - 1 ? [] : e < 0 ? (i = t + e) < 0 ? [] : [this[i]] : [this[e]]);
    },
    append: function append() {
      var t;

      for (var _i12 = 0; _i12 < arguments.length; _i12 += 1) {
        t = _i12 < 0 || arguments.length <= _i12 ? undefined : arguments[_i12];

        for (var _e20 = 0; _e20 < this.length; _e20 += 1) {
          if ("string" == typeof t) {
            var _i13 = n.createElement("div");

            for (_i13.innerHTML = t; _i13.firstChild;) {
              this[_e20].appendChild(_i13.firstChild);
            }
          } else if (t instanceof a) for (var _i14 = 0; _i14 < t.length; _i14 += 1) {
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
          var _s2 = n.createElement("div");

          for (_s2.innerHTML = e, i = _s2.childNodes.length - 1; i >= 0; i -= 1) {
            this[t].insertBefore(_s2.childNodes[i], this[t].childNodes[0]);
          }
        } else if (e instanceof a) for (i = 0; i < e.length; i += 1) {
          this[t].insertBefore(e[i], this[t].childNodes[0]);
        } else this[t].insertBefore(e, this[t].childNodes[0]);
      }

      return this;
    },
    next: function next(e) {
      return this.length > 0 ? e ? this[0].nextElementSibling && r(this[0].nextElementSibling).is(e) ? new a([this[0].nextElementSibling]) : new a([]) : this[0].nextElementSibling ? new a([this[0].nextElementSibling]) : new a([]) : new a([]);
    },
    nextAll: function nextAll(e) {
      var t = [];
      var i = this[0];
      if (!i) return new a([]);

      for (; i.nextElementSibling;) {
        var _n2 = i.nextElementSibling;
        e ? r(_n2).is(e) && t.push(_n2) : t.push(_n2), i = _n2;
      }

      return new a(t);
    },
    prev: function prev(e) {
      if (this.length > 0) {
        var _t18 = this[0];
        return e ? _t18.previousElementSibling && r(_t18.previousElementSibling).is(e) ? new a([_t18.previousElementSibling]) : new a([]) : _t18.previousElementSibling ? new a([_t18.previousElementSibling]) : new a([]);
      }

      return new a([]);
    },
    prevAll: function prevAll(e) {
      var t = [];
      var i = this[0];
      if (!i) return new a([]);

      for (; i.previousElementSibling;) {
        var _n3 = i.previousElementSibling;
        e ? r(_n3).is(e) && t.push(_n3) : t.push(_n3), i = _n3;
      }

      return new a(t);
    },
    parent: function parent(e) {
      var t = [];

      for (var _i15 = 0; _i15 < this.length; _i15 += 1) {
        null !== this[_i15].parentNode && (e ? r(this[_i15].parentNode).is(e) && t.push(this[_i15].parentNode) : t.push(this[_i15].parentNode));
      }

      return r(o(t));
    },
    parents: function parents(e) {
      var t = [];

      for (var _i16 = 0; _i16 < this.length; _i16 += 1) {
        var _n4 = this[_i16].parentNode;

        for (; _n4;) {
          e ? r(_n4).is(e) && t.push(_n4) : t.push(_n4), _n4 = _n4.parentNode;
        }
      }

      return r(o(t));
    },
    closest: function closest(e) {
      var t = this;
      return void 0 === e ? new a([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function find(e) {
      var t = [];

      for (var _i17 = 0; _i17 < this.length; _i17 += 1) {
        var _n5 = this[_i17].querySelectorAll(e);

        for (var _e21 = 0; _e21 < _n5.length; _e21 += 1) {
          t.push(_n5[_e21]);
        }
      }

      return new a(t);
    },
    children: function children(e) {
      var t = [];

      for (var _i18 = 0; _i18 < this.length; _i18 += 1) {
        var _n6 = this[_i18].childNodes;

        for (var _i19 = 0; _i19 < _n6.length; _i19 += 1) {
          e ? 1 === _n6[_i19].nodeType && r(_n6[_i19]).is(e) && t.push(_n6[_i19]) : 1 === _n6[_i19].nodeType && t.push(_n6[_i19]);
        }
      }

      return new a(o(t));
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
        var _s3 = r(e[i]);

        for (n = 0; n < _s3.length; n += 1) {
          t[t.length] = _s3[n], t.length += 1;
        }
      }

      return t;
    },
    styles: function styles() {
      return this[0] ? s.getComputedStyle(this[0], null) : {};
    }
  };
  Object.keys(l).forEach(function (e) {
    r.fn[e] = l[e];
  });

  var c = {
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
      var i, n, a;
      var r = s.getComputedStyle(e, null);
      return s.WebKitCSSMatrix ? ((n = r.transform || r.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (e) {
        return e.replace(",", ".");
      }).join(", ")), a = new s.WebKitCSSMatrix("none" === n ? "" : n)) : i = (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = s.WebKitCSSMatrix ? a.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = s.WebKitCSSMatrix ? a.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0;
    },
    parseUrlQuery: function parseUrlQuery(e) {
      var t = {};
      var i,
          n,
          a,
          r,
          o = e || s.location.href;
      if ("string" == typeof o && o.length) for (r = (n = (o = o.indexOf("?") > -1 ? o.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
        return "" !== e;
      })).length, i = 0; i < r; i += 1) {
        a = n[i].replace(/#\S+/g, "").split("="), t[decodeURIComponent(a[0])] = void 0 === a[1] ? void 0 : decodeURIComponent(a[1]) || "";
      }
      return t;
    },
    isObject: function isObject(e) {
      return "object" == _typeof(e) && null !== e && e.constructor && e.constructor === Object;
    },
    extend: function extend() {
      var t = Object(arguments.length <= 0 ? undefined : arguments[0]);

      for (var _i20 = 1; _i20 < arguments.length; _i20 += 1) {
        var _n7 = _i20 < 0 || arguments.length <= _i20 ? undefined : arguments[_i20];

        if (null != _n7) {
          var _e23 = Object.keys(Object(_n7));

          for (var _i21 = 0, _s4 = _e23.length; _i21 < _s4; _i21 += 1) {
            var _s5 = _e23[_i21],
                _a7 = Object.getOwnPropertyDescriptor(_n7, _s5);

            void 0 !== _a7 && _a7.enumerable && (c.isObject(t[_s5]) && c.isObject(_n7[_s5]) ? c.extend(t[_s5], _n7[_s5]) : !c.isObject(t[_s5]) && c.isObject(_n7[_s5]) ? (t[_s5] = {}, c.extend(t[_s5], _n7[_s5])) : t[_s5] = _n7[_s5]);
          }
        }
      }

      return t;
    }
  },
      d = function () {
    var e = n.createElement("div");
    return {
      touch: s.Modernizr && !0 === s.Modernizr.touch || !!(s.navigator.maxTouchPoints > 0 || "ontouchstart" in s || s.DocumentTouch && n instanceof s.DocumentTouch),
      pointerEvents: !!(s.navigator.pointerEnabled || s.PointerEvent || "maxTouchPoints" in s.navigator && s.navigator.maxTouchPoints > 0),
      prefixedPointerEvents: !!s.navigator.msPointerEnabled,
      transition: function () {
        var t = e.style;
        return "transition" in t || "webkitTransition" in t || "MozTransition" in t;
      }(),
      transforms3d: s.Modernizr && !0 === s.Modernizr.csstransforms3d || function () {
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
      observer: "MutationObserver" in s || "WebkitMutationObserver" in s,
      passiveListener: function () {
        var e = !1;

        try {
          var _t19 = Object.defineProperty({}, "passive", {
            get: function get() {
              e = !0;
            }
          });

          s.addEventListener("testPassiveListener", null, _t19);
        } catch (e) {}

        return e;
      }(),
      gestures: "ongesturestart" in s
    };
  }(),
      u = {
    isIE: !!s.navigator.userAgent.match(/Trident/g) || !!s.navigator.userAgent.match(/MSIE/g),
    isEdge: !!s.navigator.userAgent.match(/Edge/g),
    isSafari: function () {
      var e = s.navigator.userAgent.toLowerCase();
      return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0;
    }(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(s.navigator.userAgent)
  };

  var p =
  /*#__PURE__*/
  function () {
    function p() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, p);

      var t = this;
      t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
        t.on(e, t.params.on[e]);
      });
    }

    _createClass(p, [{
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
          n.params && c.extend(e, n.params);
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
        var n = e.name || "".concat(Object.keys(i.prototype.modules).length, "_").concat(c.now());

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

    return p;
  }();

  var h = {
    updateSize: function updateSize() {
      var e = this;
      var t, i;
      var n = e.$el;
      t = void 0 !== e.params.width ? e.params.width : n[0].clientWidth, i = void 0 !== e.params.height ? e.params.height : n[0].clientHeight, 0 === t && e.isHorizontal() || 0 === i && e.isVertical() || (t = t - parseInt(n.css("padding-left"), 10) - parseInt(n.css("padding-right"), 10), i = i - parseInt(n.css("padding-top"), 10) - parseInt(n.css("padding-bottom"), 10), c.extend(e, {
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
          a = e.rtlTranslate,
          r = e.wrongRTL,
          o = e.virtual && t.virtual.enabled,
          l = o ? e.virtual.slides.length : e.slides.length,
          u = i.children(".".concat(e.params.slideClass)),
          p = o ? e.virtual.slides.length : u.length;
      var h = [];
      var f = [],
          m = [];
      var v = t.slidesOffsetBefore;
      "function" == typeof v && (v = t.slidesOffsetBefore.call(e));
      var g = t.slidesOffsetAfter;
      "function" == typeof g && (g = t.slidesOffsetAfter.call(e));
      var y = e.snapGrid.length,
          b = e.snapGrid.length;
      var x,
          w,
          T = t.spaceBetween,
          C = -v,
          E = 0,
          S = 0;
      if (void 0 === n) return;
      "string" == typeof T && T.indexOf("%") >= 0 && (T = parseFloat(T.replace("%", "")) / 100 * n), e.virtualSize = -T, a ? u.css({
        marginLeft: "",
        marginTop: ""
      }) : u.css({
        marginRight: "",
        marginBottom: ""
      }), t.slidesPerColumn > 1 && (x = Math.floor(p / t.slidesPerColumn) === p / e.params.slidesPerColumn ? p : Math.ceil(p / t.slidesPerColumn) * t.slidesPerColumn, "auto" !== t.slidesPerView && "row" === t.slidesPerColumnFill && (x = Math.max(x, t.slidesPerView * t.slidesPerColumn)));
      var k = t.slidesPerColumn,
          $ = x / k,
          M = Math.floor(p / t.slidesPerColumn);

      for (var _i23 = 0; _i23 < p; _i23 += 1) {
        w = 0;

        var _a8 = u.eq(_i23);

        if (t.slidesPerColumn > 1) {
          var _n8 = void 0,
              _s6 = void 0,
              _r4 = void 0;

          "column" === t.slidesPerColumnFill ? (_r4 = _i23 - (_s6 = Math.floor(_i23 / k)) * k, (_s6 > M || _s6 === M && _r4 === k - 1) && (_r4 += 1) >= k && (_r4 = 0, _s6 += 1), _n8 = _s6 + _r4 * x / k, _a8.css({
            "-webkit-box-ordinal-group": _n8,
            "-moz-box-ordinal-group": _n8,
            "-ms-flex-order": _n8,
            "-webkit-order": _n8,
            order: _n8
          })) : _s6 = _i23 - (_r4 = Math.floor(_i23 / $)) * $, _a8.css("margin-".concat(e.isHorizontal() ? "top" : "left"), 0 !== _r4 && t.spaceBetween && "".concat(t.spaceBetween, "px")).attr("data-swiper-column", _s6).attr("data-swiper-row", _r4);
        }

        if ("none" !== _a8.css("display")) {
          if ("auto" === t.slidesPerView) {
            var _i24 = s.getComputedStyle(_a8[0], null),
                _n9 = _a8[0].style.transform,
                _r5 = _a8[0].style.webkitTransform;

            if (_n9 && (_a8[0].style.transform = "none"), _r5 && (_a8[0].style.webkitTransform = "none"), t.roundLengths) w = e.isHorizontal() ? _a8.outerWidth(!0) : _a8.outerHeight(!0);else if (e.isHorizontal()) {
              var _e25 = parseFloat(_i24.getPropertyValue("width")),
                  _t20 = parseFloat(_i24.getPropertyValue("padding-left")),
                  _n10 = parseFloat(_i24.getPropertyValue("padding-right")),
                  _s7 = parseFloat(_i24.getPropertyValue("margin-left")),
                  _a9 = parseFloat(_i24.getPropertyValue("margin-right")),
                  _r6 = _i24.getPropertyValue("box-sizing");

              w = _r6 && "border-box" === _r6 ? _e25 + _s7 + _a9 : _e25 + _t20 + _n10 + _s7 + _a9;
            } else {
              var _e26 = parseFloat(_i24.getPropertyValue("height")),
                  _t21 = parseFloat(_i24.getPropertyValue("padding-top")),
                  _n11 = parseFloat(_i24.getPropertyValue("padding-bottom")),
                  _s8 = parseFloat(_i24.getPropertyValue("margin-top")),
                  _a10 = parseFloat(_i24.getPropertyValue("margin-bottom")),
                  _r7 = _i24.getPropertyValue("box-sizing");

              w = _r7 && "border-box" === _r7 ? _e26 + _s8 + _a10 : _e26 + _t21 + _n11 + _s8 + _a10;
            }
            _n9 && (_a8[0].style.transform = _n9), _r5 && (_a8[0].style.webkitTransform = _r5), t.roundLengths && (w = Math.floor(w));
          } else w = (n - (t.slidesPerView - 1) * T) / t.slidesPerView, t.roundLengths && (w = Math.floor(w)), u[_i23] && (e.isHorizontal() ? u[_i23].style.width = "".concat(w, "px") : u[_i23].style.height = "".concat(w, "px"));

          u[_i23] && (u[_i23].swiperSlideSize = w), m.push(w), t.centeredSlides ? (C = C + w / 2 + E / 2 + T, 0 === E && 0 !== _i23 && (C = C - n / 2 - T), 0 === _i23 && (C = C - n / 2 - T), Math.abs(C) < .001 && (C = 0), t.roundLengths && (C = Math.floor(C)), S % t.slidesPerGroup == 0 && h.push(C), f.push(C)) : (t.roundLengths && (C = Math.floor(C)), S % t.slidesPerGroup == 0 && h.push(C), f.push(C), C = C + w + T), e.virtualSize += w + T, E = w, S += 1;
        }
      }

      var P;

      if (e.virtualSize = Math.max(e.virtualSize, n) + g, a && r && ("slide" === t.effect || "coverflow" === t.effect) && i.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }), d.flexbox && !t.setWrapperSize || (e.isHorizontal() ? i.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }) : i.css({
        height: "".concat(e.virtualSize + t.spaceBetween, "px")
      })), t.slidesPerColumn > 1 && (e.virtualSize = (w + t.spaceBetween) * x, e.virtualSize = Math.ceil(e.virtualSize / t.slidesPerColumn) - t.spaceBetween, e.isHorizontal() ? i.css({
        width: "".concat(e.virtualSize + t.spaceBetween, "px")
      }) : i.css({
        height: "".concat(e.virtualSize + t.spaceBetween, "px")
      }), t.centeredSlides)) {
        P = [];

        for (var _i25 = 0; _i25 < h.length; _i25 += 1) {
          var _n12 = h[_i25];
          t.roundLengths && (_n12 = Math.floor(_n12)), h[_i25] < e.virtualSize + h[0] && P.push(_n12);
        }

        h = P;
      }

      if (!t.centeredSlides) {
        P = [];

        for (var _i26 = 0; _i26 < h.length; _i26 += 1) {
          var _s9 = h[_i26];
          t.roundLengths && (_s9 = Math.floor(_s9)), h[_i26] <= e.virtualSize - n && P.push(_s9);
        }

        h = P, Math.floor(e.virtualSize - n) - Math.floor(h[h.length - 1]) > 1 && h.push(e.virtualSize - n);
      }

      if (0 === h.length && (h = [0]), 0 !== t.spaceBetween && (e.isHorizontal() ? a ? u.css({
        marginLeft: "".concat(T, "px")
      }) : u.css({
        marginRight: "".concat(T, "px")
      }) : u.css({
        marginBottom: "".concat(T, "px")
      })), t.centerInsufficientSlides) {
        var _e27 = 0;

        if (m.forEach(function (i) {
          _e27 += i + (t.spaceBetween ? t.spaceBetween : 0);
        }), (_e27 -= t.spaceBetween) < n) {
          var _t22 = (n - _e27) / 2;

          h.forEach(function (e, i) {
            h[i] = e - _t22;
          }), f.forEach(function (e, i) {
            f[i] = e + _t22;
          });
        }
      }

      c.extend(e, {
        slides: u,
        snapGrid: h,
        slidesGrid: f,
        slidesSizesGrid: m
      }), p !== l && e.emit("slidesLengthChange"), h.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), (t.watchSlidesProgress || t.watchSlidesVisibility) && e.updateSlidesOffset();
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
      var a = -e;
      s && (a = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];

      for (var _e30 = 0; _e30 < n.length; _e30 += 1) {
        var _r8 = n[_e30],
            _o4 = (a + (i.centeredSlides ? t.minTranslate() : 0) - _r8.swiperSlideOffset) / (_r8.swiperSlideSize + i.spaceBetween);

        if (i.watchSlidesVisibility) {
          var _s10 = -(a - _r8.swiperSlideOffset),
              _o5 = _s10 + t.slidesSizesGrid[_e30];

          (_s10 >= 0 && _s10 < t.size || _o5 > 0 && _o5 <= t.size || _s10 <= 0 && _o5 >= t.size) && (t.visibleSlides.push(_r8), t.visibleSlidesIndexes.push(_e30), n.eq(_e30).addClass(i.slideVisibleClass));
        }

        _r8.progress = s ? -_o4 : _o4;
      }

      t.visibleSlides = r(t.visibleSlides);
    },
    updateProgress: function updateProgress() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this && this.translate || 0;
      var t = this,
          i = t.params,
          n = t.maxTranslate() - t.minTranslate();
      var s = t.progress,
          a = t.isBeginning,
          r = t.isEnd;
      var o = a,
          l = r;
      0 === n ? (s = 0, a = !0, r = !0) : (a = (s = (e - t.minTranslate()) / n) <= 0, r = s >= 1), c.extend(t, {
        progress: s,
        isBeginning: a,
        isEnd: r
      }), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesProgress(e), a && !o && t.emit("reachBeginning toEdge"), r && !l && t.emit("reachEnd toEdge"), (o && !a || l && !r) && t.emit("fromEdge"), t.emit("progress", s);
    },
    updateSlidesClasses: function updateSlidesClasses() {
      var e = this,
          t = e.slides,
          i = e.params,
          n = e.$wrapperEl,
          s = e.activeIndex,
          a = e.realIndex,
          r = e.virtual && i.virtual.enabled;
      var o;
      t.removeClass("".concat(i.slideActiveClass, " ").concat(i.slideNextClass, " ").concat(i.slidePrevClass, " ").concat(i.slideDuplicateActiveClass, " ").concat(i.slideDuplicateNextClass, " ").concat(i.slideDuplicatePrevClass)), (o = r ? e.$wrapperEl.find(".".concat(i.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]")) : t.eq(s)).addClass(i.slideActiveClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children(".".concat(i.slideClass, ":not(.").concat(i.slideDuplicateClass, ")[data-swiper-slide-index=\"").concat(a, "\"]")).addClass(i.slideDuplicateActiveClass) : n.children(".".concat(i.slideClass, ".").concat(i.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(a, "\"]")).addClass(i.slideDuplicateActiveClass));
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
          a = t.params,
          r = t.activeIndex,
          o = t.realIndex,
          l = t.snapIndex;
      var d,
          u = e;

      if (void 0 === u) {
        for (var _e31 = 0; _e31 < n.length; _e31 += 1) {
          void 0 !== n[_e31 + 1] ? i >= n[_e31] && i < n[_e31 + 1] - (n[_e31 + 1] - n[_e31]) / 2 ? u = _e31 : i >= n[_e31] && i < n[_e31 + 1] && (u = _e31 + 1) : i >= n[_e31] && (u = _e31);
        }

        a.normalizeSlideIndex && (u < 0 || void 0 === u) && (u = 0);
      }

      if ((d = s.indexOf(i) >= 0 ? s.indexOf(i) : Math.floor(u / a.slidesPerGroup)) >= s.length && (d = s.length - 1), u === r) return void (d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
      var p = parseInt(t.slides.eq(u).attr("data-swiper-slide-index") || u, 10);
      c.extend(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: r,
        activeIndex: u
      }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== p && t.emit("realIndexChange"), t.emit("slideChange");
    },
    updateClickedSlide: function updateClickedSlide(e) {
      var t = this,
          i = t.params,
          n = r(e.target).closest(".".concat(i.slideClass))[0];
      var s = !1;
      if (n) for (var _e32 = 0; _e32 < t.slides.length; _e32 += 1) {
        t.slides[_e32] === n && (s = !0);
      }
      if (!n || !s) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
      t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(r(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = r(n).index(), i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
    }
  };
  var f = {
    getTranslate: function getTranslate() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.isHorizontal() ? "x" : "y";
      var t = this.params,
          i = this.rtlTranslate,
          n = this.translate,
          s = this.$wrapperEl;
      if (t.virtualTranslate) return i ? -n : n;
      var a = c.getTranslate(s[0], e);
      return i && (a = -a), a || 0;
    },
    setTranslate: function setTranslate(e, t) {
      var i = this,
          n = i.rtlTranslate,
          s = i.params,
          a = i.$wrapperEl,
          r = i.progress;
      var o,
          l = 0,
          c = 0;
      i.isHorizontal() ? l = n ? -e : e : c = e, s.roundLengths && (l = Math.floor(l), c = Math.floor(c)), s.virtualTranslate || (d.transforms3d ? a.transform("translate3d(".concat(l, "px, ").concat(c, "px, 0px)")) : a.transform("translate(".concat(l, "px, ").concat(c, "px)"))), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? l : c;
      var u = i.maxTranslate() - i.minTranslate();
      (o = 0 === u ? 0 : (e - i.minTranslate()) / u) !== r && i.updateProgress(e), i.emit("setTranslate", i.translate, t);
    },
    minTranslate: function minTranslate() {
      return -this.snapGrid[0];
    },
    maxTranslate: function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  };
  var m = {
    setTransition: function setTransition(e, t) {
      this.$wrapperEl.transition(e), this.emit("setTransition", e, t);
    },
    transitionStart: function transitionStart() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var i = this,
          n = i.activeIndex,
          s = i.params,
          a = i.previousIndex;
      s.autoHeight && i.updateAutoHeight();
      var r = t;

      if (r || (r = n > a ? "next" : n < a ? "prev" : "reset"), i.emit("transitionStart"), e && n !== a) {
        if ("reset" === r) return void i.emit("slideResetTransitionStart");
        i.emit("slideChangeTransitionStart"), "next" === r ? i.emit("slideNextTransitionStart") : i.emit("slidePrevTransitionStart");
      }
    },
    transitionEnd: function transitionEnd() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
      var t = arguments.length > 1 ? arguments[1] : undefined;
      var i = this,
          n = i.activeIndex,
          s = i.previousIndex;
      i.animating = !1, i.setTransition(0);
      var a = t;

      if (a || (a = n > s ? "next" : n < s ? "prev" : "reset"), i.emit("transitionEnd"), e && n !== s) {
        if ("reset" === a) return void i.emit("slideResetTransitionEnd");
        i.emit("slideChangeTransitionEnd"), "next" === a ? i.emit("slideNextTransitionEnd") : i.emit("slidePrevTransitionEnd");
      }
    }
  };
  var v = {
    slideTo: function slideTo() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var n = arguments.length > 3 ? arguments[3] : undefined;
      var s = this;
      var a = e;
      a < 0 && (a = 0);
      var r = s.params,
          o = s.snapGrid,
          l = s.slidesGrid,
          c = s.previousIndex,
          u = s.activeIndex,
          p = s.rtlTranslate;
      if (s.animating && r.preventInteractionOnTransition) return !1;
      var h = Math.floor(a / r.slidesPerGroup);
      h >= o.length && (h = o.length - 1), (u || r.initialSlide || 0) === (c || 0) && i && s.emit("beforeSlideChangeStart");
      var f = -o[h];
      if (s.updateProgress(f), r.normalizeSlideIndex) for (var _e33 = 0; _e33 < l.length; _e33 += 1) {
        -Math.floor(100 * f) >= Math.floor(100 * l[_e33]) && (a = _e33);
      }

      if (s.initialized && a !== u) {
        if (!s.allowSlideNext && f < s.translate && f < s.minTranslate()) return !1;
        if (!s.allowSlidePrev && f > s.translate && f > s.maxTranslate() && (u || 0) !== a) return !1;
      }

      var m;
      return m = a > u ? "next" : a < u ? "prev" : "reset", p && -f === s.translate || !p && f === s.translate ? (s.updateActiveIndex(a), r.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== r.effect && s.setTranslate(f), "reset" !== m && (s.transitionStart(i, m), s.transitionEnd(i, m)), !1) : (0 !== t && d.transition ? (s.setTransition(t), s.setTranslate(f), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, m), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function (e) {
        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(i, m));
      }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))) : (s.setTransition(0), s.setTranslate(f), s.updateActiveIndex(a), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, n), s.transitionStart(i, m), s.transitionEnd(i, m)), !0);
    },
    slideToLoop: function slideToLoop() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.params.speed;
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      var n = arguments.length > 3 ? arguments[3] : undefined;
      var s = this;
      var a = e;
      return s.params.loop && (a += s.loopedSlides), s.slideTo(a, t, i, n);
    },
    slideNext: function slideNext() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      var n = this,
          s = n.params,
          a = n.animating;
      return s.loop ? !a && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i)) : n.slideTo(n.activeIndex + s.slidesPerGroup, e, t, i);
    },
    slidePrev: function slidePrev() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = arguments.length > 2 ? arguments[2] : undefined;
      var n = this,
          s = n.params,
          a = n.animating,
          r = n.snapGrid,
          o = n.slidesGrid,
          l = n.rtlTranslate;

      if (s.loop) {
        if (a) return !1;
        n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft;
      }

      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }

      var d = c(l ? n.translate : -n.translate),
          u = r.map(function (e) {
        return c(e);
      }),
          p = (o.map(function (e) {
        return c(e);
      }), r[u.indexOf(d)], r[u.indexOf(d) - 1]);
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
      var a = Math.floor(s / n.params.slidesPerGroup);

      if (a < n.snapGrid.length - 1) {
        var _e34 = n.rtlTranslate ? n.translate : -n.translate,
            _t23 = n.snapGrid[a];

        _e34 - _t23 > (n.snapGrid[a + 1] - _t23) / 2 && (s = n.params.slidesPerGroup);
      }

      return n.slideTo(s, e, t, i);
    },
    slideToClickedSlide: function slideToClickedSlide() {
      var e = this,
          t = e.params,
          i = e.$wrapperEl,
          n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
      var s,
          a = e.clickedIndex;

      if (t.loop) {
        if (e.animating) return;
        s = parseInt(r(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), a = i.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), c.nextTick(function () {
          e.slideTo(a);
        })) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(), a = i.children(".".concat(t.slideClass, "[data-swiper-slide-index=\"").concat(s, "\"]:not(.").concat(t.slideDuplicateClass, ")")).eq(0).index(), c.nextTick(function () {
          e.slideTo(a);
        })) : e.slideTo(a);
      } else e.slideTo(a);
    }
  };
  var g = {
    loopCreate: function loopCreate() {
      var e = this,
          t = e.params,
          i = e.$wrapperEl;
      i.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass)).remove();
      var s = i.children(".".concat(t.slideClass));

      if (t.loopFillGroupWithBlank) {
        var _e35 = t.slidesPerGroup - s.length % t.slidesPerGroup;

        if (_e35 !== t.slidesPerGroup) {
          for (var _s11 = 0; _s11 < _e35; _s11 += 1) {
            var _e36 = r(n.createElement("div")).addClass("".concat(t.slideClass, " ").concat(t.slideBlankClass));

            i.append(_e36);
          }

          s = i.children(".".concat(t.slideClass));
        }
      }

      "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = s.length), e.loopedSlides = parseInt(t.loopedSlides || t.slidesPerView, 10), e.loopedSlides += t.loopAdditionalSlides, e.loopedSlides > s.length && (e.loopedSlides = s.length);
      var a = [],
          o = [];
      s.each(function (t, i) {
        var n = r(i);
        t < e.loopedSlides && o.push(i), t < s.length && t >= s.length - e.loopedSlides && a.push(i), n.attr("data-swiper-slide-index", t);
      });

      for (var _e37 = 0; _e37 < o.length; _e37 += 1) {
        i.append(r(o[_e37].cloneNode(!0)).addClass(t.slideDuplicateClass));
      }

      for (var _e38 = a.length - 1; _e38 >= 0; _e38 -= 1) {
        i.prepend(r(a[_e38].cloneNode(!0)).addClass(t.slideDuplicateClass));
      }
    },
    loopFix: function loopFix() {
      var e = this,
          t = e.params,
          i = e.activeIndex,
          n = e.slides,
          s = e.loopedSlides,
          a = e.allowSlidePrev,
          r = e.allowSlideNext,
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

      e.allowSlidePrev = a, e.allowSlideNext = r;
    },
    loopDestroy: function loopDestroy() {
      var e = this.$wrapperEl,
          t = this.params,
          i = this.slides;
      e.children(".".concat(t.slideClass, ".").concat(t.slideDuplicateClass, ",.").concat(t.slideClass, ".").concat(t.slideBlankClass)).remove(), i.removeAttr("data-swiper-slide-index");
    }
  };
  var y = {
    setGrabCursor: function setGrabCursor(e) {
      if (d.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked) return;
      var t = this.el;
      t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab";
    },
    unsetGrabCursor: function unsetGrabCursor() {
      d.touch || this.params.watchOverflow && this.isLocked || (this.el.style.cursor = "");
    }
  };
  var b = {
    appendSlide: function appendSlide(e) {
      var t = this,
          i = t.$wrapperEl,
          n = t.params;
      if (n.loop && t.loopDestroy(), "object" == _typeof(e) && "length" in e) for (var _t24 = 0; _t24 < e.length; _t24 += 1) {
        e[_t24] && i.append(e[_t24]);
      } else i.append(e);
      n.loop && t.loopCreate(), n.observer && d.observer || t.update();
    },
    prependSlide: function prependSlide(e) {
      var t = this,
          i = t.params,
          n = t.$wrapperEl,
          s = t.activeIndex;
      i.loop && t.loopDestroy();
      var a = s + 1;

      if ("object" == _typeof(e) && "length" in e) {
        for (var _t25 = 0; _t25 < e.length; _t25 += 1) {
          e[_t25] && n.prepend(e[_t25]);
        }

        a = s + e.length;
      } else n.prepend(e);

      i.loop && t.loopCreate(), i.observer && d.observer || t.update(), t.slideTo(a, 0, !1);
    },
    addSlide: function addSlide(e, t) {
      var i = this,
          n = i.$wrapperEl,
          s = i.params,
          a = i.activeIndex;
      var r = a;
      s.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(".".concat(s.slideClass)));
      var o = i.slides.length;
      if (e <= 0) return void i.prependSlide(t);
      if (e >= o) return void i.appendSlide(t);
      var l = r > e ? r + 1 : r;
      var c = [];

      for (var _t26 = o - 1; _t26 >= e; _t26 -= 1) {
        var _e39 = i.slides.eq(_t26);

        _e39.remove(), c.unshift(_e39);
      }

      if ("object" == _typeof(t) && "length" in t) {
        for (var _e40 = 0; _e40 < t.length; _e40 += 1) {
          t[_e40] && n.append(t[_e40]);
        }

        l = r > e ? r + t.length : r;
      } else n.append(t);

      for (var _e41 = 0; _e41 < c.length; _e41 += 1) {
        n.append(c[_e41]);
      }

      s.loop && i.loopCreate(), s.observer && d.observer || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1);
    },
    removeSlide: function removeSlide(e) {
      var t = this,
          i = t.params,
          n = t.$wrapperEl,
          s = t.activeIndex;
      var a = s;
      i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(".".concat(i.slideClass)));
      var r,
          o = a;

      if ("object" == _typeof(e) && "length" in e) {
        for (var _i28 = 0; _i28 < e.length; _i28 += 1) {
          r = e[_i28], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
        }

        o = Math.max(o, 0);
      } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);

      i.loop && t.loopCreate(), i.observer && d.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1);
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

  var x = function () {
    var e = s.navigator.userAgent,
        t = {
      ios: !1,
      android: !1,
      androidChrome: !1,
      desktop: !1,
      windows: !1,
      iphone: !1,
      ipod: !1,
      ipad: !1,
      cordova: s.cordova || s.phonegap,
      phonegap: s.cordova || s.phonegap
    },
        i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/),
        a = e.match(/(Android);?[\s\/]+([\d.]+)?/),
        r = e.match(/(iPad).*OS\s([\d_]+)/),
        o = e.match(/(iPod)(.*OS\s([\d_]+))?/),
        l = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);

    if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), a && !i && (t.os = "android", t.osVersion = a[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || l || o) && (t.os = "ios", t.ios = !0), l && !o && (t.osVersion = l[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), o && (t.osVersion = o[3] ? o[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (l || r || o) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
      var _e42 = t.osVersion.split("."),
          _i30 = n.querySelector('meta[name="viewport"]');

      t.minimalUi = !t.webView && (o || l) && (1 * _e42[0] == 7 ? 1 * _e42[1] >= 1 : 1 * _e42[0] > 7) && _i30 && _i30.getAttribute("content").indexOf("minimal-ui") >= 0;
    }

    return t.pixelRatio = s.devicePixelRatio || 1, t;
  }();

  function w(e) {
    var t = this,
        i = t.touchEventsData,
        a = t.params,
        o = t.touches;
    if (t.animating && a.preventInteractionOnTransition) return;
    var l = e;
    if (l.originalEvent && (l = l.originalEvent), i.isTouchEvent = "touchstart" === l.type, !i.isTouchEvent && "which" in l && 3 === l.which) return;
    if (!i.isTouchEvent && "button" in l && l.button > 0) return;
    if (i.isTouched && i.isMoved) return;
    if (a.noSwiping && r(l.target).closest(a.noSwipingSelector ? a.noSwipingSelector : ".".concat(a.noSwipingClass))[0]) return void (t.allowClick = !0);
    if (a.swipeHandler && !r(l).closest(a.swipeHandler)[0]) return;
    o.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX, o.currentY = "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY;
    var d = o.currentX,
        u = o.currentY,
        p = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
        h = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;

    if (!p || !(d <= h || d >= s.screen.width - h)) {
      if (c.extend(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
      }), o.startX = d, o.startY = u, i.touchStartTime = c.now(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, a.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== l.type) {
        var _e43 = !0;

        r(l.target).is(i.formElements) && (_e43 = !1), n.activeElement && r(n.activeElement).is(i.formElements) && n.activeElement !== l.target && n.activeElement.blur();

        var _s12 = _e43 && t.allowTouchMove && a.touchStartPreventDefault;

        (a.touchStartForcePreventDefault || _s12) && l.preventDefault();
      }

      t.emit("touchStart", l);
    }
  }

  function T(e) {
    var t = this,
        i = t.touchEventsData,
        s = t.params,
        a = t.touches,
        o = t.rtlTranslate;
    var l = e;
    if (l.originalEvent && (l = l.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && t.emit("touchMoveOpposite", l));
    if (i.isTouchEvent && "mousemove" === l.type) return;
    var d = "touchmove" === l.type ? l.targetTouches[0].pageX : l.pageX,
        u = "touchmove" === l.type ? l.targetTouches[0].pageY : l.pageY;
    if (l.preventedByNestedSwiper) return a.startX = d, void (a.startY = u);
    if (!t.allowTouchMove) return t.allowClick = !1, void (i.isTouched && (c.extend(a, {
      startX: d,
      startY: u,
      currentX: d,
      currentY: u
    }), i.touchStartTime = c.now()));
    if (i.isTouchEvent && s.touchReleaseOnEdges && !s.loop) if (t.isVertical()) {
      if (u < a.startY && t.translate <= t.maxTranslate() || u > a.startY && t.translate >= t.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
    } else if (d < a.startX && t.translate <= t.maxTranslate() || d > a.startX && t.translate >= t.minTranslate()) return;
    if (i.isTouchEvent && n.activeElement && l.target === n.activeElement && r(l.target).is(i.formElements)) return i.isMoved = !0, void (t.allowClick = !1);
    if (i.allowTouchCallbacks && t.emit("touchMove", l), l.targetTouches && l.targetTouches.length > 1) return;
    a.currentX = d, a.currentY = u;
    var p = a.currentX - a.startX,
        h = a.currentY - a.startY;
    if (t.params.threshold && Math.sqrt(Math.pow(p, 2) + Math.pow(h, 2)) < t.params.threshold) return;

    if (void 0 === i.isScrolling) {
      var _e44;

      t.isHorizontal() && a.currentY === a.startY || t.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : p * p + h * h >= 25 && (_e44 = 180 * Math.atan2(Math.abs(h), Math.abs(p)) / Math.PI, i.isScrolling = t.isHorizontal() ? _e44 > s.touchAngle : 90 - _e44 > s.touchAngle);
    }

    if (i.isScrolling && t.emit("touchMoveOpposite", l), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
    if (!i.startMoving) return;
    t.allowClick = !1, l.preventDefault(), s.touchMoveStopPropagation && !s.nested && l.stopPropagation(), i.isMoved || (s.loop && t.loopFix(), i.startTranslate = t.getTranslate(), t.setTransition(0), t.animating && t.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !s.grabCursor || !0 !== t.allowSlideNext && !0 !== t.allowSlidePrev || t.setGrabCursor(!0), t.emit("sliderFirstMove", l)), t.emit("sliderMove", l), i.isMoved = !0;
    var f = t.isHorizontal() ? p : h;
    a.diff = f, f *= s.touchRatio, o && (f = -f), t.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
    var m = !0,
        v = s.resistanceRatio;

    if (s.touchReleaseOnEdges && (v = 0), f > 0 && i.currentTranslate > t.minTranslate() ? (m = !1, s.resistance && (i.currentTranslate = t.minTranslate() - 1 + Math.pow(-t.minTranslate() + i.startTranslate + f, v))) : f < 0 && i.currentTranslate < t.maxTranslate() && (m = !1, s.resistance && (i.currentTranslate = t.maxTranslate() + 1 - Math.pow(t.maxTranslate() - i.startTranslate - f, v))), m && (l.preventedByNestedSwiper = !0), !t.allowSlideNext && "next" === t.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !t.allowSlidePrev && "prev" === t.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.threshold > 0) {
      if (!(Math.abs(f) > s.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void (a.diff = t.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY);
    }

    s.followFinger && ((s.freeMode || s.watchSlidesProgress || s.watchSlidesVisibility) && (t.updateActiveIndex(), t.updateSlidesClasses()), s.freeMode && (0 === i.velocities.length && i.velocities.push({
      position: a[t.isHorizontal() ? "startX" : "startY"],
      time: i.touchStartTime
    }), i.velocities.push({
      position: a[t.isHorizontal() ? "currentX" : "currentY"],
      time: c.now()
    })), t.updateProgress(i.currentTranslate), t.setTranslate(i.currentTranslate));
  }

  function C(e) {
    var t = this,
        i = t.touchEventsData,
        n = t.params,
        s = t.touches,
        a = t.rtlTranslate,
        r = t.$wrapperEl,
        o = t.slidesGrid,
        l = t.snapGrid;
    var d = e;
    if (d.originalEvent && (d = d.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", d), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void (i.startMoving = !1);
    n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
    var u = c.now(),
        p = u - i.touchStartTime;
    if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap", d), p < 300 && u - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = c.nextTick(function () {
      t && !t.destroyed && t.emit("click", d);
    }, 300)), p < 300 && u - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", d))), i.lastClickTime = c.now(), c.nextTick(function () {
      t.destroyed || (t.allowClick = !0);
    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void (i.startMoving = !1);
    var h;

    if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, h = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
      if (h < -t.minTranslate()) return void t.slideTo(t.activeIndex);
      if (h > -t.maxTranslate()) return void (t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1));

      if (n.freeModeMomentum) {
        if (i.velocities.length > 1) {
          var _e46 = i.velocities.pop(),
              _s14 = i.velocities.pop(),
              _a11 = _e46.position - _s14.position,
              _r9 = _e46.time - _s14.time;

          t.velocity = _a11 / _r9, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (_r9 > 150 || c.now() - _e46.time > 300) && (t.velocity = 0);
        } else t.velocity = 0;

        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;

        var _e45 = 1e3 * n.freeModeMomentumRatio;

        var _s13 = t.velocity * _e45;

        var _o6 = t.translate + _s13;

        a && (_o6 = -_o6);

        var _d2,
            _u = !1;

        var _p = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;

        var _h;

        if (_o6 < t.maxTranslate()) n.freeModeMomentumBounce ? (_o6 + t.maxTranslate() < -_p && (_o6 = t.maxTranslate() - _p), _d2 = t.maxTranslate(), _u = !0, i.allowMomentumBounce = !0) : _o6 = t.maxTranslate(), n.loop && n.centeredSlides && (_h = !0);else if (_o6 > t.minTranslate()) n.freeModeMomentumBounce ? (_o6 - t.minTranslate() > _p && (_o6 = t.minTranslate() + _p), _d2 = t.minTranslate(), _u = !0, i.allowMomentumBounce = !0) : _o6 = t.minTranslate(), n.loop && n.centeredSlides && (_h = !0);else if (n.freeModeSticky) {
          var _e47;

          for (var _t27 = 0; _t27 < l.length; _t27 += 1) {
            if (l[_t27] > -_o6) {
              _e47 = _t27;
              break;
            }
          }

          _o6 = -(_o6 = Math.abs(l[_e47] - _o6) < Math.abs(l[_e47 - 1] - _o6) || "next" === t.swipeDirection ? l[_e47] : l[_e47 - 1]);
        }
        if (_h && t.once("transitionEnd", function () {
          t.loopFix();
        }), 0 !== t.velocity) _e45 = a ? Math.abs((-_o6 - t.translate) / t.velocity) : Math.abs((_o6 - t.translate) / t.velocity);else if (n.freeModeSticky) return void t.slideToClosest();
        n.freeModeMomentumBounce && _u ? (t.updateProgress(_d2), t.setTransition(_e45), t.setTranslate(_o6), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(function () {
          t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(_d2), r.transitionEnd(function () {
            t && !t.destroyed && t.transitionEnd();
          }));
        })) : t.velocity ? (t.updateProgress(_o6), t.setTransition(_e45), t.setTranslate(_o6), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(function () {
          t && !t.destroyed && t.transitionEnd();
        }))) : t.updateProgress(_o6), t.updateActiveIndex(), t.updateSlidesClasses();
      } else if (n.freeModeSticky) return void t.slideToClosest();

      return void ((!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses()));
    }

    var f = 0,
        m = t.slidesSizesGrid[0];

    for (var _e48 = 0; _e48 < o.length; _e48 += n.slidesPerGroup) {
      void 0 !== o[_e48 + n.slidesPerGroup] ? h >= o[_e48] && h < o[_e48 + n.slidesPerGroup] && (f = _e48, m = o[_e48 + n.slidesPerGroup] - o[_e48]) : h >= o[_e48] && (f = _e48, m = o[o.length - 1] - o[o.length - 2]);
    }

    var v = (h - o[f]) / m;

    if (p > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && (v >= n.longSwipesRatio ? t.slideTo(f + n.slidesPerGroup) : t.slideTo(f)), "prev" === t.swipeDirection && (v > 1 - n.longSwipesRatio ? t.slideTo(f + n.slidesPerGroup) : t.slideTo(f));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection && t.slideTo(f + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(f);
    }
  }

  function E() {
    var e = this,
        t = e.params,
        i = e.el;
    if (i && 0 === i.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    var n = e.allowSlideNext,
        s = e.allowSlidePrev,
        a = e.snapGrid;

    if (e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), t.freeMode) {
      var _i31 = Math.min(Math.max(e.translate, e.maxTranslate()), e.minTranslate());

      e.setTranslate(_i31), e.updateActiveIndex(), e.updateSlidesClasses(), t.autoHeight && e.updateAutoHeight();
    } else e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);

    e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow();
  }

  function S(e) {
    var t = this;
    t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation()));
  }

  var k = {
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
  var $ = {
    update: h,
    translate: f,
    transition: m,
    slide: v,
    loop: g,
    grabCursor: y,
    manipulation: b,
    events: {
      attachEvents: function attachEvents() {
        var e = this,
            t = e.params,
            i = e.touchEvents,
            s = e.el,
            a = e.wrapperEl;
        e.onTouchStart = w.bind(e), e.onTouchMove = T.bind(e), e.onTouchEnd = C.bind(e), e.onClick = S.bind(e);
        var r = "container" === t.touchEventsTarget ? s : a,
            o = !!t.nested;

        if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
          if (d.touch) {
            var _n13 = !("touchstart" !== i.start || !d.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };

            r.addEventListener(i.start, e.onTouchStart, _n13), r.addEventListener(i.move, e.onTouchMove, d.passiveListener ? {
              passive: !1,
              capture: o
            } : o), r.addEventListener(i.end, e.onTouchEnd, _n13);
          }

          (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !d.touch && x.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), n.addEventListener("mousemove", e.onTouchMove, o), n.addEventListener("mouseup", e.onTouchEnd, !1));
        } else r.addEventListener(i.start, e.onTouchStart, !1), n.addEventListener(i.move, e.onTouchMove, o), n.addEventListener(i.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), e.on(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0);
      },
      detachEvents: function detachEvents() {
        var e = this,
            t = e.params,
            i = e.touchEvents,
            s = e.el,
            a = e.wrapperEl,
            r = "container" === t.touchEventsTarget ? s : a,
            o = !!t.nested;

        if (d.touch || !d.pointerEvents && !d.prefixedPointerEvents) {
          if (d.touch) {
            var _n14 = !("onTouchStart" !== i.start || !d.passiveListener || !t.passiveListeners) && {
              passive: !0,
              capture: !1
            };

            r.removeEventListener(i.start, e.onTouchStart, _n14), r.removeEventListener(i.move, e.onTouchMove, o), r.removeEventListener(i.end, e.onTouchEnd, _n14);
          }

          (t.simulateTouch && !x.ios && !x.android || t.simulateTouch && !d.touch && x.ios) && (r.removeEventListener("mousedown", e.onTouchStart, !1), n.removeEventListener("mousemove", e.onTouchMove, o), n.removeEventListener("mouseup", e.onTouchEnd, !1));
        } else r.removeEventListener(i.start, e.onTouchStart, !1), n.removeEventListener(i.move, e.onTouchMove, o), n.removeEventListener(i.end, e.onTouchEnd, !1);

        (t.preventClicks || t.preventClicksPropagation) && r.removeEventListener("click", e.onClick, !0), e.off(x.ios || x.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E);
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
            a = s.breakpoints;
        if (!a || a && 0 === Object.keys(a).length) return;
        var r = e.getBreakpoint(a);

        if (r && e.currentBreakpoint !== r) {
          var _o7 = r in a ? a[r] : void 0;

          _o7 && ["slidesPerView", "spaceBetween", "slidesPerGroup"].forEach(function (e) {
            var t = _o7[e];
            void 0 !== t && (_o7[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto");
          });

          var _l2 = _o7 || e.originalParams,
              _d3 = _l2.direction && _l2.direction !== s.direction,
              _u2 = s.loop && (_l2.slidesPerView !== s.slidesPerView || _d3);

          _d3 && i && e.changeDirection(), c.extend(e.params, _l2), c.extend(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev
          }), e.currentBreakpoint = r, _u2 && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", _l2);
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
          var _a12 = n[_e49];
          t.params.breakpointsInverse ? _a12 <= s.innerWidth && (i = _a12) : _a12 >= s.innerWidth && !i && (i = _a12);
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
        s.push("initialized"), s.push(t.direction), t.freeMode && s.push("free-mode"), d.flexbox || s.push("no-flexbox"), t.autoHeight && s.push("autoheight"), i && s.push("rtl"), t.slidesPerColumn > 1 && s.push("multirow"), x.android && s.push("android"), x.ios && s.push("ios"), (u.isIE || u.isEdge) && (d.pointerEvents || d.prefixedPointerEvents) && s.push("wp8-".concat(t.direction)), s.forEach(function (i) {
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
      loadImage: function loadImage(e, t, i, n, a, r) {
        var o;

        function l() {
          r && r();
        }

        e.complete && a ? l() : t ? ((o = new s.Image()).onload = l, o.onerror = l, n && (o.sizes = n), i && (o.srcset = i), t && (o.src = t)) : l();
      },
      preloadImages: function preloadImages() {
        var e = this;

        function t() {
          null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
        }

        e.imagesToLoad = e.$el.find("img");

        for (var _i32 = 0; _i32 < e.imagesToLoad.length; _i32 += 1) {
          var _n15 = e.imagesToLoad[_i32];
          e.loadImage(_n15, _n15.currentSrc || _n15.getAttribute("src"), _n15.srcset || _n15.getAttribute("srcset"), _n15.sizes || _n15.getAttribute("sizes"), !0, t);
        }
      }
    }
  },
      M = {};

  var P =
  /*#__PURE__*/
  function (_p2) {
    _inherits(P, _p2);

    function P() {
      var _e50, _e51;

      var _this;

      _classCallCheck(this, P);

      var t, i;

      for (var _len9 = arguments.length, e = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        e[_key9] = arguments[_key9];
      }

      1 === e.length && e[0].constructor && e[0].constructor === Object ? i = e[0] : (_e50 = e, _e51 = _slicedToArray(_e50, 2), t = _e51[0], i = _e51[1], _e50), i || (i = {}), i = c.extend({}, i), t && !i.el && (i.el = t), _this = _possibleConstructorReturn(this, _getPrototypeOf(P).call(this, i)), Object.keys($).forEach(function (e) {
        Object.keys($[e]).forEach(function (t) {
          P.prototype[t] || (P.prototype[t] = $[e][t]);
        });
      });

      var n = _assertThisInitialized(_this);

      void 0 === n.modules && (n.modules = {}), Object.keys(n.modules).forEach(function (e) {
        var t = n.modules[e];

        if (t.params) {
          var _e52 = Object.keys(t.params)[0],
              _n16 = t.params[_e52];
          if ("object" != _typeof(_n16) || null === _n16) return;
          if (!(_e52 in i && "enabled" in _n16)) return;
          !0 === i[_e52] && (i[_e52] = {
            enabled: !0
          }), "object" != _typeof(i[_e52]) || "enabled" in i[_e52] || (i[_e52].enabled = !0), i[_e52] || (i[_e52] = {
            enabled: !1
          });
        }
      });
      var s = c.extend({}, k);
      n.useModulesParams(s), n.params = c.extend({}, s, M, i), n.originalParams = c.extend({}, n.params), n.passedParams = c.extend({}, i), n.$ = r;
      var a = r(n.params.el);
      if (!(t = a[0])) return _possibleConstructorReturn(_this);

      if (a.length > 1) {
        var _e53 = [];
        return _possibleConstructorReturn(_this, (a.each(function (t, n) {
          var s = c.extend({}, i, {
            el: n
          });

          _e53.push(new P(s));
        }), _e53));
      }

      t.swiper = n, a.data("swiper", n);
      var o = a.children(".".concat(n.params.wrapperClass));
      return _possibleConstructorReturn(_this, (c.extend(n, {
        $el: a,
        el: t,
        $wrapperEl: o,
        wrapperEl: o[0],
        classNames: [],
        slides: r(),
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal: function isHorizontal() {
          return "horizontal" === n.params.direction;
        },
        isVertical: function isVertical() {
          return "vertical" === n.params.direction;
        },
        rtl: "rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction"),
        rtlTranslate: "horizontal" === n.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === a.css("direction")),
        wrongRTL: "-webkit-box" === o.css("display"),
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
          return d.pointerEvents ? t = ["pointerdown", "pointermove", "pointerup"] : d.prefixedPointerEvents && (t = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), n.touchEventsTouch = {
            start: e[0],
            move: e[1],
            end: e[2]
          }, n.touchEventsDesktop = {
            start: t[0],
            move: t[1],
            end: t[2]
          }, d.touch || !n.params.simulateTouch ? n.touchEventsTouch : n.touchEventsDesktop;
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
          lastClickTime: c.now(),
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

    _createClass(P, [{
      key: "slidesPerViewDynamic",
      value: function slidesPerViewDynamic() {
        var e = this.params,
            t = this.slides,
            i = this.slidesGrid,
            n = this.size,
            s = this.activeIndex;
        var a = 1;

        if (e.centeredSlides) {
          var _e54,
              _i33 = t[s].swiperSlideSize;

          for (var _r10 = s + 1; _r10 < t.length; _r10 += 1) {
            t[_r10] && !_e54 && (a += 1, (_i33 += t[_r10].swiperSlideSize) > n && (_e54 = !0));
          }

          for (var _r11 = s - 1; _r11 >= 0; _r11 -= 1) {
            t[_r11] && !_e54 && (a += 1, (_i33 += t[_r11].swiperSlideSize) > n && (_e54 = !0));
          }
        } else for (var _e55 = s + 1; _e55 < t.length; _e55 += 1) {
          i[_e55] - i[s] < n && (a += 1);
        }

        return a;
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
        return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e ? i : ("vertical" === n && (i.$el.removeClass("".concat(i.params.containerModifierClass, "vertical wp8-vertical")).addClass("".concat(i.params.containerModifierClass).concat(e)), (u.isIE || u.isEdge) && (d.pointerEvents || d.prefixedPointerEvents) && i.$el.addClass("".concat(i.params.containerModifierClass, "wp8-").concat(e))), "horizontal" === n && (i.$el.removeClass("".concat(i.params.containerModifierClass, "horizontal wp8-horizontal")).addClass("".concat(i.params.containerModifierClass).concat(e)), (u.isIE || u.isEdge) && (d.pointerEvents || d.prefixedPointerEvents) && i.$el.addClass("".concat(i.params.containerModifierClass, "wp8-").concat(e))), i.params.direction = e, i.slides.each(function (t, i) {
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
            a = i.$wrapperEl,
            r = i.slides;
        return void 0 === i.params || i.destroyed ? null : (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
          i.off(e);
        }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), c.deleteProps(i)), i.destroyed = !0, null);
      }
    }], [{
      key: "extendDefaults",
      value: function extendDefaults(e) {
        c.extend(M, e);
      }
    }, {
      key: "extendedDefaults",
      get: function get() {
        return M;
      }
    }, {
      key: "defaults",
      get: function get() {
        return k;
      }
    }, {
      key: "Class",
      get: function get() {
        return p;
      }
    }, {
      key: "$",
      get: function get() {
        return r;
      }
    }]);

    return P;
  }(p);

  var z = {
    name: "device",
    proto: {
      device: x
    },
    "static": {
      device: x
    }
  },
      L = {
    name: "support",
    proto: {
      support: d
    },
    "static": {
      support: d
    }
  },
      D = {
    name: "browser",
    proto: {
      browser: u
    },
    "static": {
      browser: u
    }
  },
      A = {
    name: "resize",
    create: function create() {
      var e = this;
      c.extend(e, {
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
        s.addEventListener("resize", this.resize.resizeHandler), s.addEventListener("orientationchange", this.resize.orientationChangeHandler);
      },
      destroy: function destroy() {
        s.removeEventListener("resize", this.resize.resizeHandler), s.removeEventListener("orientationchange", this.resize.orientationChangeHandler);
      }
    }
  };
  var I = {
    func: s.MutationObserver || s.WebkitMutationObserver,
    attach: function attach(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = this,
          n = new (0, I.func)(function (e) {
        if (1 === e.length) return void i.emit("observerUpdate", e[0]);

        var t = function t() {
          i.emit("observerUpdate", e[0]);
        };

        s.requestAnimationFrame ? s.requestAnimationFrame(t) : s.setTimeout(t, 0);
      });
      n.observe(e, {
        attributes: void 0 === t.attributes || t.attributes,
        childList: void 0 === t.childList || t.childList,
        characterData: void 0 === t.characterData || t.characterData
      }), i.observer.observers.push(n);
    },
    init: function init() {
      var e = this;

      if (d.observer && e.params.observer) {
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
  var O = {
    name: "observer",
    params: {
      observer: !1,
      observeParents: !1,
      observeSlideChildren: !1
    },
    create: function create() {
      c.extend(this, {
        observer: {
          init: I.init.bind(this),
          attach: I.attach.bind(this),
          destroy: I.destroy.bind(this),
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
  var N = {
    update: function update(e) {
      var t = this,
          _t$params = t.params,
          i = _t$params.slidesPerView,
          n = _t$params.slidesPerGroup,
          s = _t$params.centeredSlides,
          _t$params$virtual = t.params.virtual,
          a = _t$params$virtual.addSlidesBefore,
          r = _t$params$virtual.addSlidesAfter,
          _t$virtual = t.virtual,
          o = _t$virtual.from,
          l = _t$virtual.to,
          d = _t$virtual.slides,
          u = _t$virtual.slidesGrid,
          p = _t$virtual.renderSlide,
          h = _t$virtual.offset;
      t.updateActiveIndex();
      var f = t.activeIndex || 0;
      var m, v, g;
      m = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top", s ? (v = Math.floor(i / 2) + n + a, g = Math.floor(i / 2) + n + r) : (v = i + (n - 1) + a, g = n + r);
      var y = Math.max((f || 0) - g, 0),
          b = Math.min((f || 0) + v, d.length - 1),
          x = (t.slidesGrid[y] || 0) - (t.slidesGrid[0] || 0);

      function w() {
        t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load();
      }

      if (c.extend(t.virtual, {
        from: y,
        to: b,
        offset: x,
        slidesGrid: t.slidesGrid
      }), o === y && l === b && !e) return t.slidesGrid !== u && x !== h && t.slides.css(m, "".concat(x, "px")), void t.updateProgress();
      if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
        offset: x,
        from: y,
        to: b,
        slides: function () {
          var e = [];

          for (var _t29 = y; _t29 <= b; _t29 += 1) {
            e.push(d[_t29]);
          }

          return e;
        }()
      }), void w();
      var T = [],
          C = [];
      if (e) t.$wrapperEl.find(".".concat(t.params.slideClass)).remove();else for (var _e56 = o; _e56 <= l; _e56 += 1) {
        (_e56 < y || _e56 > b) && t.$wrapperEl.find(".".concat(t.params.slideClass, "[data-swiper-slide-index=\"").concat(_e56, "\"]")).remove();
      }

      for (var _t30 = 0; _t30 < d.length; _t30 += 1) {
        _t30 >= y && _t30 <= b && (void 0 === l || e ? C.push(_t30) : (_t30 > l && C.push(_t30), _t30 < o && T.push(_t30)));
      }

      C.forEach(function (e) {
        t.$wrapperEl.append(p(d[e], e));
      }), T.sort(function (e, t) {
        return t - e;
      }).forEach(function (e) {
        t.$wrapperEl.prepend(p(d[e], e));
      }), t.$wrapperEl.children(".swiper-slide").css(m, "".concat(x, "px")), w();
    },
    renderSlide: function renderSlide(e, t) {
      var i = this,
          n = i.params.virtual;
      if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
      var s = n.renderSlide ? r(n.renderSlide.call(i, e, t)) : r("<div class=\"".concat(i.params.slideClass, "\" data-swiper-slide-index=\"").concat(t, "\">").concat(e, "</div>"));
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
      if (Array.isArray(e)) for (var _n17 = e.length - 1; _n17 >= 0; _n17 -= 1) {
        t.virtual.slides.splice(e[_n17], 1), t.params.virtual.cache && delete t.virtual.cache[e[_n17]], e[_n17] < i && (i -= 1), i = Math.max(i, 0);
      } else t.virtual.slides.splice(e, 1), t.params.virtual.cache && delete t.virtual.cache[e], e < i && (i -= 1), i = Math.max(i, 0);
      t.virtual.update(!0), t.slideTo(i, 0);
    },
    removeAllSlides: function removeAllSlides() {
      var e = this;
      e.virtual.slides = [], e.params.virtual.cache && (e.virtual.cache = {}), e.virtual.update(!0), e.slideTo(0, 0);
    }
  };
  var _ = {
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
      c.extend(this, {
        virtual: {
          update: N.update.bind(this),
          appendSlide: N.appendSlide.bind(this),
          prependSlide: N.prependSlide.bind(this),
          removeSlide: N.removeSlide.bind(this),
          removeAllSlides: N.removeAllSlides.bind(this),
          renderSlide: N.renderSlide.bind(this),
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
        c.extend(e.params, t), c.extend(e.originalParams, t), e.params.initialSlide || e.virtual.update();
      },
      setTranslate: function setTranslate() {
        this.params.virtual.enabled && this.virtual.update();
      }
    }
  };
  var j = {
    handle: function handle(e) {
      var t = this,
          i = t.rtlTranslate;
      var a = e;
      a.originalEvent && (a = a.originalEvent);
      var r = a.keyCode || a.charCode;
      if (!t.allowSlideNext && (t.isHorizontal() && 39 === r || t.isVertical() && 40 === r)) return !1;
      if (!t.allowSlidePrev && (t.isHorizontal() && 37 === r || t.isVertical() && 38 === r)) return !1;

      if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || n.activeElement && n.activeElement.nodeName && ("input" === n.activeElement.nodeName.toLowerCase() || "textarea" === n.activeElement.nodeName.toLowerCase()))) {
        if (t.params.keyboard.onlyInViewport && (37 === r || 39 === r || 38 === r || 40 === r)) {
          var _e58 = !1;

          if (t.$el.parents(".".concat(t.params.slideClass)).length > 0 && 0 === t.$el.parents(".".concat(t.params.slideActiveClass)).length) return;

          var _n18 = s.innerWidth,
              _a13 = s.innerHeight,
              _r12 = t.$el.offset();

          i && (_r12.left -= t.$el[0].scrollLeft);
          var _o8 = [[_r12.left, _r12.top], [_r12.left + t.width, _r12.top], [_r12.left, _r12.top + t.height], [_r12.left + t.width, _r12.top + t.height]];

          for (var _t31 = 0; _t31 < _o8.length; _t31 += 1) {
            var _i38 = _o8[_t31];
            _i38[0] >= 0 && _i38[0] <= _n18 && _i38[1] >= 0 && _i38[1] <= _a13 && (_e58 = !0);
          }

          if (!_e58) return;
        }

        t.isHorizontal() ? (37 !== r && 39 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (39 === r && !i || 37 === r && i) && t.slideNext(), (37 === r && !i || 39 === r && i) && t.slidePrev()) : (38 !== r && 40 !== r || (a.preventDefault ? a.preventDefault() : a.returnValue = !1), 40 === r && t.slideNext(), 38 === r && t.slidePrev()), t.emit("keyPress", r);
      }
    },
    enable: function enable() {
      this.keyboard.enabled || (r(n).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0);
    },
    disable: function disable() {
      this.keyboard.enabled && (r(n).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1);
    }
  };
  var H = {
    name: "keyboard",
    params: {
      keyboard: {
        enabled: !1,
        onlyInViewport: !0
      }
    },
    create: function create() {
      c.extend(this, {
        keyboard: {
          enabled: !1,
          enable: j.enable.bind(this),
          disable: j.disable.bind(this),
          handle: j.handle.bind(this)
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
  var q = {
    lastScrollTime: c.now(),
    event: s.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
      var e = "onwheel" in n;

      if (!e) {
        var _t32 = n.createElement("div");

        _t32.setAttribute("onwheel", "return;"), e = "function" == typeof _t32.onwheel;
      }

      return !e && n.implementation && n.implementation.hasFeature && !0 !== n.implementation.hasFeature("", "") && (e = n.implementation.hasFeature("Events.wheel", "3.0")), e;
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
      var a = 0;
      var r = i.rtlTranslate ? -1 : 1,
          o = q.normalize(t);
      if (n.forceToAxis) {
        if (i.isHorizontal()) {
          if (!(Math.abs(o.pixelX) > Math.abs(o.pixelY))) return !0;
          a = o.pixelX * r;
        } else {
          if (!(Math.abs(o.pixelY) > Math.abs(o.pixelX))) return !0;
          a = o.pixelY;
        }
      } else a = Math.abs(o.pixelX) > Math.abs(o.pixelY) ? -o.pixelX * r : -o.pixelY;
      if (0 === a) return !0;

      if (n.invert && (a = -a), i.params.freeMode) {
        i.params.loop && i.loopFix();

        var _e59 = i.getTranslate() + a * n.sensitivity;

        var _s15 = i.isBeginning,
            _r13 = i.isEnd;
        if (_e59 >= i.minTranslate() && (_e59 = i.minTranslate()), _e59 <= i.maxTranslate() && (_e59 = i.maxTranslate()), i.setTransition(0), i.setTranslate(_e59), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!_s15 && i.isBeginning || !_r13 && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = c.nextTick(function () {
          i.slideToClosest();
        }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.autoplay.stop(), _e59 === i.minTranslate() || _e59 === i.maxTranslate()) return !0;
      } else {
        if (c.now() - i.mousewheel.lastScrollTime > 60) if (a < 0) {
          if (i.isEnd && !i.params.loop || i.animating) {
            if (n.releaseOnEdges) return !0;
          } else i.slideNext(), i.emit("scroll", t);
        } else if (i.isBeginning && !i.params.loop || i.animating) {
          if (n.releaseOnEdges) return !0;
        } else i.slidePrev(), i.emit("scroll", t);
        i.mousewheel.lastScrollTime = new s.Date().getTime();
      }

      return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1;
    },
    enable: function enable() {
      var e = this;
      if (!q.event) return !1;
      if (e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.on("mouseenter", e.mousewheel.handleMouseEnter), t.on("mouseleave", e.mousewheel.handleMouseLeave), t.on(q.event, e.mousewheel.handle), e.mousewheel.enabled = !0, !0;
    },
    disable: function disable() {
      var e = this;
      if (!q.event) return !1;
      if (!e.mousewheel.enabled) return !1;
      var t = e.$el;
      return "container" !== e.params.mousewheel.eventsTarged && (t = r(e.params.mousewheel.eventsTarged)), t.off(q.event, e.mousewheel.handle), e.mousewheel.enabled = !1, !0;
    }
  };
  var B = {
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
      t.nextEl && (i = r(t.nextEl), e.params.uniqueNavElements && "string" == typeof t.nextEl && i.length > 1 && 1 === e.$el.find(t.nextEl).length && (i = e.$el.find(t.nextEl))), t.prevEl && (n = r(t.prevEl), e.params.uniqueNavElements && "string" == typeof t.prevEl && n.length > 1 && 1 === e.$el.find(t.prevEl).length && (n = e.$el.find(t.prevEl))), i && i.length > 0 && i.on("click", e.navigation.onNextClick), n && n.length > 0 && n.on("click", e.navigation.onPrevClick), c.extend(e.navigation, {
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
  var F = {
    update: function update() {
      var e = this,
          t = e.rtl,
          i = e.params.pagination;
      if (!i.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
      var n = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          s = e.pagination.$el;
      var a;
      var o = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

      if (e.params.loop ? ((a = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > n - 1 - 2 * e.loopedSlides && (a -= n - 2 * e.loopedSlides), a > o - 1 && (a -= o), a < 0 && "bullets" !== e.params.paginationType && (a = o + a)) : a = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === i.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
        var _n19 = e.pagination.bullets;

        var _o9, _l3, _c;

        if (i.dynamicBullets && (e.pagination.bulletSize = _n19.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(e.isHorizontal() ? "width" : "height", "".concat(e.pagination.bulletSize * (i.dynamicMainBullets + 4), "px")), i.dynamicMainBullets > 1 && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += a - e.previousIndex, e.pagination.dynamicBulletIndex > i.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = i.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), _o9 = a - e.pagination.dynamicBulletIndex, _c = ((_l3 = _o9 + (Math.min(_n19.length, i.dynamicMainBullets) - 1)) + _o9) / 2), _n19.removeClass("".concat(i.bulletActiveClass, " ").concat(i.bulletActiveClass, "-next ").concat(i.bulletActiveClass, "-next-next ").concat(i.bulletActiveClass, "-prev ").concat(i.bulletActiveClass, "-prev-prev ").concat(i.bulletActiveClass, "-main")), s.length > 1) _n19.each(function (e, t) {
          var n = r(t),
              s = n.index();
          s === a && n.addClass(i.bulletActiveClass), i.dynamicBullets && (s >= _o9 && s <= _l3 && n.addClass("".concat(i.bulletActiveClass, "-main")), s === _o9 && n.prev().addClass("".concat(i.bulletActiveClass, "-prev")).prev().addClass("".concat(i.bulletActiveClass, "-prev-prev")), s === _l3 && n.next().addClass("".concat(i.bulletActiveClass, "-next")).next().addClass("".concat(i.bulletActiveClass, "-next-next")));
        });else {
          if (_n19.eq(a).addClass(i.bulletActiveClass), i.dynamicBullets) {
            var _e60 = _n19.eq(_o9),
                _t33 = _n19.eq(_l3);

            for (var _e61 = _o9; _e61 <= _l3; _e61 += 1) {
              _n19.eq(_e61).addClass("".concat(i.bulletActiveClass, "-main"));
            }

            _e60.prev().addClass("".concat(i.bulletActiveClass, "-prev")).prev().addClass("".concat(i.bulletActiveClass, "-prev-prev")), _t33.next().addClass("".concat(i.bulletActiveClass, "-next")).next().addClass("".concat(i.bulletActiveClass, "-next-next"));
          }
        }

        if (i.dynamicBullets) {
          var _s16 = Math.min(_n19.length, i.dynamicMainBullets + 4),
              _a14 = (e.pagination.bulletSize * _s16 - e.pagination.bulletSize) / 2 - _c * e.pagination.bulletSize,
              _r14 = t ? "right" : "left";

          _n19.css(e.isHorizontal() ? _r14 : "top", "".concat(_a14, "px"));
        }
      }

      if ("fraction" === i.type && (s.find(".".concat(i.currentClass)).text(i.formatFractionCurrent(a + 1)), s.find(".".concat(i.totalClass)).text(i.formatFractionTotal(o))), "progressbar" === i.type) {
        var _t34;

        _t34 = i.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";

        var _n20 = (a + 1) / o;

        var _r15 = 1,
            _l4 = 1;
        "horizontal" === _t34 ? _r15 = _n20 : _l4 = _n20, s.find(".".concat(i.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(".concat(_r15, ") scaleY(").concat(_l4, ")")).transition(e.params.speed);
      }

      "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(e, a + 1, o)), e.emit("paginationRender", e, s[0])) : e.emit("paginationUpdate", e, s[0]), s[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](i.lockClass);
    },
    render: function render() {
      var e = this,
          t = e.params.pagination;
      if (!t.el || !e.pagination.el || !e.pagination.$el || 0 === e.pagination.$el.length) return;
      var i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
          n = e.pagination.$el;
      var s = "";

      if ("bullets" === t.type) {
        var _a15 = e.params.loop ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;

        for (var _i39 = 0; _i39 < _a15; _i39 += 1) {
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
      var i = r(t.el);
      0 !== i.length && (e.params.uniqueNavElements && "string" == typeof t.el && i.length > 1 && 1 === e.$el.find(t.el).length && (i = e.$el.find(t.el)), "bullets" === t.type && t.clickable && i.addClass(t.clickableClass), i.addClass(t.modifierClass + t.type), "bullets" === t.type && t.dynamicBullets && (i.addClass("".concat(t.modifierClass).concat(t.type, "-dynamic")), e.pagination.dynamicBulletIndex = 0, t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)), "progressbar" === t.type && t.progressbarOpposite && i.addClass(t.progressbarOppositeClass), t.clickable && i.on("click", ".".concat(t.bulletClass), function (t) {
        t.preventDefault();
        var i = r(this).index() * e.params.slidesPerGroup;
        e.params.loop && (i += e.loopedSlides), e.slideTo(i);
      }), c.extend(e.pagination, {
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
  var R = {
    setTranslate: function setTranslate() {
      var e = this;
      if (!e.params.scrollbar.el || !e.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.rtlTranslate,
          n = e.progress,
          s = t.dragSize,
          a = t.trackSize,
          r = t.$dragEl,
          o = t.$el,
          l = e.params.scrollbar;
      var c = s,
          u = (a - s) * n;
      i ? (u = -u) > 0 ? (c = s - u, u = 0) : -u + s > a && (c = a + u) : u < 0 ? (c = s + u, u = 0) : u + s > a && (c = a - u), e.isHorizontal() ? (d.transforms3d ? r.transform("translate3d(".concat(u, "px, 0, 0)")) : r.transform("translateX(".concat(u, "px)")), r[0].style.width = "".concat(c, "px")) : (d.transforms3d ? r.transform("translate3d(0px, ".concat(u, "px, 0)")) : r.transform("translateY(".concat(u, "px)")), r[0].style.height = "".concat(c, "px")), l.hide && (clearTimeout(e.scrollbar.timeout), o[0].style.opacity = 1, e.scrollbar.timeout = setTimeout(function () {
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
          a = e.size / e.virtualSize,
          r = a * (s / e.size);
      var o;
      o = "auto" === e.params.scrollbar.dragSize ? s * a : parseInt(e.params.scrollbar.dragSize, 10), e.isHorizontal() ? i[0].style.width = "".concat(o, "px") : i[0].style.height = "".concat(o, "px"), n[0].style.display = a >= 1 ? "none" : "", e.params.scrollbar.hide && (n[0].style.opacity = 0), c.extend(t, {
        trackSize: s,
        divider: a,
        moveDivider: r,
        dragSize: o
      }), t.$el[e.params.watchOverflow && e.isLocked ? "addClass" : "removeClass"](e.params.scrollbar.lockClass);
    },
    setDragPosition: function setDragPosition(e) {
      var t = this.scrollbar,
          i = this.rtlTranslate,
          n = t.$el,
          s = t.dragSize,
          a = t.trackSize;
      var r, o;
      o = ((r = this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - s / 2) / (a - s), o = Math.max(Math.min(o, 1), 0), i && (o = 1 - o);
      var l = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * o;
      this.updateProgress(l), this.setTranslate(l), this.updateActiveIndex(), this.updateSlidesClasses();
    },
    onDragStart: function onDragStart(e) {
      var t = this.params.scrollbar,
          i = this.scrollbar,
          n = this.$wrapperEl,
          s = i.$el,
          a = i.$dragEl;
      this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), a.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), s.transition(0), t.hide && s.css("opacity", 1), this.emit("scrollbarDragStart", e);
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
      t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, i.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = c.nextTick(function () {
        s.css("opacity", 0), s.transition(400);
      }, 1e3)), t.emit("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest());
    },
    enableDraggable: function enableDraggable() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.touchEventsTouch,
          s = e.touchEventsDesktop,
          a = e.params,
          r = t.$el[0],
          o = !(!d.passiveListener || !a.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          l = !(!d.passiveListener || !a.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      d.touch ? (r.addEventListener(i.start, e.scrollbar.onDragStart, o), r.addEventListener(i.move, e.scrollbar.onDragMove, o), r.addEventListener(i.end, e.scrollbar.onDragEnd, l)) : (r.addEventListener(s.start, e.scrollbar.onDragStart, o), n.addEventListener(s.move, e.scrollbar.onDragMove, o), n.addEventListener(s.end, e.scrollbar.onDragEnd, l));
    },
    disableDraggable: function disableDraggable() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.touchEventsTouch,
          s = e.touchEventsDesktop,
          a = e.params,
          r = t.$el[0],
          o = !(!d.passiveListener || !a.passiveListeners) && {
        passive: !1,
        capture: !1
      },
          l = !(!d.passiveListener || !a.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      d.touch ? (r.removeEventListener(i.start, e.scrollbar.onDragStart, o), r.removeEventListener(i.move, e.scrollbar.onDragMove, o), r.removeEventListener(i.end, e.scrollbar.onDragEnd, l)) : (r.removeEventListener(s.start, e.scrollbar.onDragStart, o), n.removeEventListener(s.move, e.scrollbar.onDragMove, o), n.removeEventListener(s.end, e.scrollbar.onDragEnd, l));
    },
    init: function init() {
      var e = this;
      if (!e.params.scrollbar.el) return;
      var t = e.scrollbar,
          i = e.$el,
          n = e.params.scrollbar;
      var s = r(n.el);
      e.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el));
      var a = s.find(".".concat(e.params.scrollbar.dragClass));
      0 === a.length && (a = r("<div class=\"".concat(e.params.scrollbar.dragClass, "\"></div>")), s.append(a)), c.extend(t, {
        $el: s,
        el: s[0],
        $dragEl: a,
        dragEl: a[0]
      }), n.draggable && t.enableDraggable();
    },
    destroy: function destroy() {
      this.scrollbar.disableDraggable();
    }
  };
  var X = {
    setTransform: function setTransform(e, t) {
      var i = this.rtl,
          n = r(e),
          s = i ? -1 : 1,
          a = n.attr("data-swiper-parallax") || "0";
      var o = n.attr("data-swiper-parallax-x"),
          l = n.attr("data-swiper-parallax-y");
      var c = n.attr("data-swiper-parallax-scale"),
          d = n.attr("data-swiper-parallax-opacity");

      if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = o.indexOf("%") >= 0 ? "".concat(parseInt(o, 10) * t * s, "%") : "".concat(o * t * s, "px"), l = l.indexOf("%") >= 0 ? "".concat(parseInt(l, 10) * t, "%") : "".concat(l * t, "px"), null != d) {
        var _e62 = d - (d - 1) * (1 - Math.abs(t));

        n[0].style.opacity = _e62;
      }

      if (null == c) n.transform("translate3d(".concat(o, ", ").concat(l, ", 0px)"));else {
        var _e63 = c - (c - 1) * (1 - Math.abs(t));

        n.transform("translate3d(".concat(o, ", ").concat(l, ", 0px) scale(").concat(_e63, ")"));
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
        var a = i.progress;
        e.params.slidesPerGroup > 1 && "auto" !== e.params.slidesPerView && (a += Math.ceil(t / 2) - n * (s.length - 1)), a = Math.min(Math.max(a, -1), 1), r(i).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
          e.parallax.setTransform(i, a);
        });
      });
    },
    setTransition: function setTransition() {
      var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.params.speed;
      var t = this.$el;
      t.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (t, i) {
        var n = r(i);
        var s = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
        0 === e && (s = 0), n.transition(s);
      });
    }
  };
  var G = {
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

      if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !d.gestures) {
        if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
        n.fakeGestureTouched = !0, s.scaleStart = G.getDistanceBetweenTouches(e);
      }

      s.$slideEl && s.$slideEl.length || (s.$slideEl = r(e.target).closest(".swiper-slide"), 0 === s.$slideEl.length && (s.$slideEl = t.slides.eq(t.activeIndex)), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(".".concat(i.containerClass)), s.maxRatio = s.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== s.$imageWrapEl.length) ? (s.$imageEl.transition(0), t.zoom.isScaling = !0) : s.$imageEl = void 0;
    },
    onGestureChange: function onGestureChange(e) {
      var t = this.params.zoom,
          i = this.zoom,
          n = i.gesture;

      if (!d.gestures) {
        if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
        i.fakeGestureMoved = !0, n.scaleMove = G.getDistanceBetweenTouches(e);
      }

      n.$imageEl && 0 !== n.$imageEl.length && (d.gestures ? i.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(".concat(i.scale, ")")));
    },
    onGestureEnd: function onGestureEnd(e) {
      var t = this.params.zoom,
          i = this.zoom,
          n = i.gesture;

      if (!d.gestures) {
        if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
        if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !x.android) return;
        i.fakeGestureTouched = !1, i.fakeGestureMoved = !1;
      }

      n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(".concat(i.scale, ")")), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0));
    },
    onTouchStart: function onTouchStart(e) {
      var t = this.zoom,
          i = t.gesture,
          n = t.image;
      i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (x.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
    },
    onTouchMove: function onTouchMove(e) {
      var t = this,
          i = t.zoom,
          n = i.gesture,
          s = i.image,
          a = i.velocity;
      if (!n.$imageEl || 0 === n.$imageEl.length) return;
      if (t.allowClick = !1, !s.isTouched || !n.$slideEl) return;
      s.isMoved || (s.width = n.$imageEl[0].offsetWidth, s.height = n.$imageEl[0].offsetHeight, s.startX = c.getTranslate(n.$imageWrapEl[0], "x") || 0, s.startY = c.getTranslate(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0), t.rtl && (s.startX = -s.startX, s.startY = -s.startY));
      var r = s.width * i.scale,
          o = s.height * i.scale;

      if (!(r < n.slideWidth && o < n.slideHeight)) {
        if (s.minX = Math.min(n.slideWidth / 2 - r / 2, 0), s.maxX = -s.minX, s.minY = Math.min(n.slideHeight / 2 - o / 2, 0), s.maxY = -s.minY, s.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, s.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !s.isMoved && !i.isScaling) {
          if (t.isHorizontal() && (Math.floor(s.minX) === Math.floor(s.startX) && s.touchesCurrent.x < s.touchesStart.x || Math.floor(s.maxX) === Math.floor(s.startX) && s.touchesCurrent.x > s.touchesStart.x)) return void (s.isTouched = !1);
          if (!t.isHorizontal() && (Math.floor(s.minY) === Math.floor(s.startY) && s.touchesCurrent.y < s.touchesStart.y || Math.floor(s.maxY) === Math.floor(s.startY) && s.touchesCurrent.y > s.touchesStart.y)) return void (s.isTouched = !1);
        }

        e.preventDefault(), e.stopPropagation(), s.isMoved = !0, s.currentX = s.touchesCurrent.x - s.touchesStart.x + s.startX, s.currentY = s.touchesCurrent.y - s.touchesStart.y + s.startY, s.currentX < s.minX && (s.currentX = s.minX + 1 - Math.pow(s.minX - s.currentX + 1, .8)), s.currentX > s.maxX && (s.currentX = s.maxX - 1 + Math.pow(s.currentX - s.maxX + 1, .8)), s.currentY < s.minY && (s.currentY = s.minY + 1 - Math.pow(s.minY - s.currentY + 1, .8)), s.currentY > s.maxY && (s.currentY = s.maxY - 1 + Math.pow(s.currentY - s.maxY + 1, .8)), a.prevPositionX || (a.prevPositionX = s.touchesCurrent.x), a.prevPositionY || (a.prevPositionY = s.touchesCurrent.y), a.prevTime || (a.prevTime = Date.now()), a.x = (s.touchesCurrent.x - a.prevPositionX) / (Date.now() - a.prevTime) / 2, a.y = (s.touchesCurrent.y - a.prevPositionY) / (Date.now() - a.prevTime) / 2, Math.abs(s.touchesCurrent.x - a.prevPositionX) < 2 && (a.x = 0), Math.abs(s.touchesCurrent.y - a.prevPositionY) < 2 && (a.y = 0), a.prevPositionX = s.touchesCurrent.x, a.prevPositionY = s.touchesCurrent.y, a.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(".concat(s.currentX, "px, ").concat(s.currentY, "px,0)"));
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
          a = 300;
      var r = n.x * s,
          o = i.currentX + r,
          l = n.y * a,
          c = i.currentY + l;
      0 !== n.x && (s = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (a = Math.abs((c - i.currentY) / n.y));
      var d = Math.max(s, a);
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
          a = i.image;
      if (s.$slideEl || (s.$slideEl = t.clickedSlide ? r(t.clickedSlide) : t.slides.eq(t.activeIndex), s.$imageEl = s.$slideEl.find("img, svg, canvas"), s.$imageWrapEl = s.$imageEl.parent(".".concat(n.containerClass))), !s.$imageEl || 0 === s.$imageEl.length) return;
      var o, l, c, d, u, p, h, f, m, v, g, y, b, x, w, T, C, E;
      s.$slideEl.addClass("".concat(n.zoomedSlideClass)), void 0 === a.touchesStart.x && e ? (o = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, l = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (o = a.touchesStart.x, l = a.touchesStart.y), i.scale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, i.currentScale = s.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, e ? (C = s.$slideEl[0].offsetWidth, E = s.$slideEl[0].offsetHeight, u = (c = s.$slideEl.offset().left) + C / 2 - o, p = (d = s.$slideEl.offset().top) + E / 2 - l, m = s.$imageEl[0].offsetWidth, v = s.$imageEl[0].offsetHeight, g = m * i.scale, y = v * i.scale, w = -(b = Math.min(C / 2 - g / 2, 0)), T = -(x = Math.min(E / 2 - y / 2, 0)), (h = u * i.scale) < b && (h = b), h > w && (h = w), (f = p * i.scale) < x && (f = x), f > T && (f = T)) : (h = 0, f = 0), s.$imageWrapEl.transition(300).transform("translate3d(".concat(h, "px, ").concat(f, "px,0)")), s.$imageEl.transition(300).transform("translate3d(0,0,0) scale(".concat(i.scale, ")"));
    },
    out: function out() {
      var e = this,
          t = e.zoom,
          i = e.params.zoom,
          n = t.gesture;
      n.$slideEl || (n.$slideEl = e.clickedSlide ? r(e.clickedSlide) : e.slides.eq(e.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent(".".concat(i.containerClass))), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("".concat(i.zoomedSlideClass)), n.$slideEl = void 0);
    },
    enable: function enable() {
      var e = this,
          t = e.zoom;
      if (t.enabled) return;
      t.enabled = !0;
      var i = !("touchstart" !== e.touchEvents.start || !d.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      d.gestures ? (e.$wrapperEl.on("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.on(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.on(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.on(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.on(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
    },
    disable: function disable() {
      var e = this,
          t = e.zoom;
      if (!t.enabled) return;
      e.zoom.enabled = !1;
      var i = !("touchstart" !== e.touchEvents.start || !d.passiveListener || !e.params.passiveListeners) && {
        passive: !0,
        capture: !1
      };
      d.gestures ? (e.$wrapperEl.off("gesturestart", ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off("gesturechange", ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off("gestureend", ".swiper-slide", t.onGestureEnd, i)) : "touchstart" === e.touchEvents.start && (e.$wrapperEl.off(e.touchEvents.start, ".swiper-slide", t.onGestureStart, i), e.$wrapperEl.off(e.touchEvents.move, ".swiper-slide", t.onGestureChange, i), e.$wrapperEl.off(e.touchEvents.end, ".swiper-slide", t.onGestureEnd, i)), e.$wrapperEl.off(e.touchEvents.move, ".".concat(e.params.zoom.containerClass), t.onTouchMove);
    }
  };
  var W = {
    loadInSlide: function loadInSlide(e) {
      var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !0;
      var i = this,
          n = i.params.lazy;
      if (void 0 === e) return;
      if (0 === i.slides.length) return;
      var s = i.virtual && i.params.virtual.enabled ? i.$wrapperEl.children(".".concat(i.params.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")) : i.slides.eq(e);
      var a = s.find(".".concat(n.elementClass, ":not(.").concat(n.loadedClass, "):not(.").concat(n.loadingClass, ")"));
      !s.hasClass(n.elementClass) || s.hasClass(n.loadedClass) || s.hasClass(n.loadingClass) || (a = a.add(s[0])), 0 !== a.length && a.each(function (e, a) {
        var o = r(a);
        o.addClass(n.loadingClass);
        var l = o.attr("data-background"),
            c = o.attr("data-src"),
            d = o.attr("data-srcset"),
            u = o.attr("data-sizes");
        i.loadImage(o[0], c || l, d, u, !1, function () {
          if (null != i && i && (!i || i.params) && !i.destroyed) {
            if (l ? (o.css("background-image", "url(\"".concat(l, "\")")), o.removeAttr("data-background")) : (d && (o.attr("srcset", d), o.removeAttr("data-srcset")), u && (o.attr("sizes", u), o.removeAttr("data-sizes")), c && (o.attr("src", c), o.removeAttr("data-src"))), o.addClass(n.loadedClass).removeClass(n.loadingClass), s.find(".".concat(n.preloaderClass)).remove(), i.params.loop && t) {
              var _e64 = s.attr("data-swiper-slide-index");

              if (s.hasClass(i.params.slideDuplicateClass)) {
                var _t35 = i.$wrapperEl.children("[data-swiper-slide-index=\"".concat(_e64, "\"]:not(.").concat(i.params.slideDuplicateClass, ")"));

                i.lazy.loadInSlide(_t35.index(), !1);
              } else {
                var _t36 = i.$wrapperEl.children(".".concat(i.params.slideDuplicateClass, "[data-swiper-slide-index=\"").concat(_e64, "\"]"));

                i.lazy.loadInSlide(_t36.index(), !1);
              }
            }

            i.emit("lazyImageReady", s[0], o[0]);
          }
        }), i.emit("lazyImageLoad", s[0], o[0]);
      });
    },
    load: function load() {
      var e = this,
          t = e.$wrapperEl,
          i = e.params,
          n = e.slides,
          s = e.activeIndex,
          a = e.virtual && i.virtual.enabled,
          o = i.lazy;
      var l = i.slidesPerView;

      function c(e) {
        if (a) {
          if (t.children(".".concat(i.slideClass, "[data-swiper-slide-index=\"").concat(e, "\"]")).length) return !0;
        } else if (n[e]) return !0;

        return !1;
      }

      function d(e) {
        return a ? r(e).attr("data-swiper-slide-index") : r(e).index();
      }

      if ("auto" === l && (l = 0), e.lazy.initialImageLoaded || (e.lazy.initialImageLoaded = !0), e.params.watchSlidesVisibility) t.children(".".concat(i.slideVisibleClass)).each(function (t, i) {
        var n = a ? r(i).attr("data-swiper-slide-index") : r(i).index();
        e.lazy.loadInSlide(n);
      });else if (l > 1) for (var _t37 = s; _t37 < s + l; _t37 += 1) {
        c(_t37) && e.lazy.loadInSlide(_t37);
      } else e.lazy.loadInSlide(s);
      if (o.loadPrevNext) if (l > 1 || o.loadPrevNextAmount && o.loadPrevNextAmount > 1) {
        var _t38 = o.loadPrevNextAmount,
            _i40 = l,
            _a16 = Math.min(s + _i40 + Math.max(_t38, _i40), n.length),
            _r16 = Math.max(s - Math.max(_i40, _t38), 0);

        for (var _t39 = s + l; _t39 < _a16; _t39 += 1) {
          c(_t39) && e.lazy.loadInSlide(_t39);
        }

        for (var _t40 = _r16; _t40 < s; _t40 += 1) {
          c(_t40) && e.lazy.loadInSlide(_t40);
        }
      } else {
        var _n21 = t.children(".".concat(i.slideNextClass));

        _n21.length > 0 && e.lazy.loadInSlide(d(_n21));

        var _s17 = t.children(".".concat(i.slidePrevClass));

        _s17.length > 0 && e.lazy.loadInSlide(d(_s17));
      }
    }
  };
  var V = {
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
      t.controller.spline || (t.controller.spline = t.params.loop ? new V.LinearSpline(t.slidesGrid, e.slidesGrid) : new V.LinearSpline(t.snapGrid, e.snapGrid));
    },
    setTranslate: function setTranslate(e, t) {
      var i = this,
          n = i.controller.control;
      var s, a;

      function r(e) {
        var t = i.rtlTranslate ? -i.translate : i.translate;
        "slide" === i.params.controller.by && (i.controller.getInterpolateFunction(e), a = -i.controller.spline.interpolate(-t)), a && "container" !== i.params.controller.by || (s = (e.maxTranslate() - e.minTranslate()) / (i.maxTranslate() - i.minTranslate()), a = (t - i.minTranslate()) * s + e.minTranslate()), i.params.controller.inverse && (a = e.maxTranslate() - a), e.updateProgress(a), e.setTranslate(a, i), e.updateActiveIndex(), e.updateSlidesClasses();
      }

      if (Array.isArray(n)) for (var _e65 = 0; _e65 < n.length; _e65 += 1) {
        n[_e65] !== t && n[_e65] instanceof P && r(n[_e65]);
      } else n instanceof P && t !== n && r(n);
    },
    setTransition: function setTransition(e, t) {
      var i = this,
          n = i.controller.control;
      var s;

      function a(t) {
        t.setTransition(e, i), 0 !== e && (t.transitionStart(), t.params.autoHeight && c.nextTick(function () {
          t.updateAutoHeight();
        }), t.$wrapperEl.transitionEnd(function () {
          n && (t.params.loop && "slide" === i.params.controller.by && t.loopFix(), t.transitionEnd());
        }));
      }

      if (Array.isArray(n)) for (s = 0; s < n.length; s += 1) {
        n[s] !== t && n[s] instanceof P && a(n[s]);
      } else n instanceof P && t !== n && a(n);
    }
  };
  var Y = {
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
      var n = r(e.target);
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
        var s = r(n);
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
  var U = {
    init: function init() {
      var e = this;
      if (!e.params.history) return;
      if (!s.history || !s.history.pushState) return e.params.history.enabled = !1, void (e.params.hashNavigation.enabled = !0);
      var t = e.history;
      t.initialized = !0, t.paths = U.getPathValues(), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, e.params.runCallbacksOnInit), e.params.history.replaceState || s.addEventListener("popstate", e.history.setHistoryPopState));
    },
    destroy: function destroy() {
      var e = this;
      e.params.history.replaceState || s.removeEventListener("popstate", e.history.setHistoryPopState);
    },
    setHistoryPopState: function setHistoryPopState() {
      this.history.paths = U.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1);
    },
    getPathValues: function getPathValues() {
      var e = s.location.pathname.slice(1).split("/").filter(function (e) {
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
      var n = U.slugify(i.attr("data-history"));
      s.location.pathname.includes(e) || (n = "".concat(e, "/").concat(n));
      var a = s.history.state;
      a && a.value === n || (this.params.history.replaceState ? s.history.replaceState({
        value: n
      }, null, n) : s.history.pushState({
        value: n
      }, null, n));
    },
    slugify: function slugify(e) {
      return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "");
    },
    scrollToSlide: function scrollToSlide(e, t, i) {
      var n = this;
      if (t) for (var _s18 = 0, _a17 = n.slides.length; _s18 < _a17; _s18 += 1) {
        var _a18 = n.slides.eq(_s18);

        if (U.slugify(_a18.attr("data-history")) === t && !_a18.hasClass(n.params.slideDuplicateClass)) {
          var _t41 = _a18.index();

          n.slideTo(_t41, e, i);
        }
      } else n.slideTo(0, e, i);
    }
  };
  var J = {
    onHashCange: function onHashCange() {
      var e = this,
          t = n.location.hash.replace("#", "");

      if (t !== e.slides.eq(e.activeIndex).attr("data-hash")) {
        var _i41 = e.$wrapperEl.children(".".concat(e.params.slideClass, "[data-hash=\"").concat(t, "\"]")).index();

        if (void 0 === _i41) return;
        e.slideTo(_i41);
      }
    },
    setHash: function setHash() {
      var e = this;
      if (e.hashNavigation.initialized && e.params.hashNavigation.enabled) if (e.params.hashNavigation.replaceState && s.history && s.history.replaceState) s.history.replaceState(null, null, "#".concat(e.slides.eq(e.activeIndex).attr("data-hash")) || "");else {
        var _t42 = e.slides.eq(e.activeIndex),
            _i42 = _t42.attr("data-hash") || _t42.attr("data-history");

        n.location.hash = _i42 || "";
      }
    },
    init: function init() {
      var e = this;
      if (!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled) return;
      e.hashNavigation.initialized = !0;
      var t = n.location.hash.replace("#", "");

      if (t) {
        var _i43 = 0;

        for (var _n22 = 0, _s19 = e.slides.length; _n22 < _s19; _n22 += 1) {
          var _s20 = e.slides.eq(_n22);

          if ((_s20.attr("data-hash") || _s20.attr("data-history")) === t && !_s20.hasClass(e.params.slideDuplicateClass)) {
            var _t43 = _s20.index();

            e.slideTo(_t43, _i43, e.params.runCallbacksOnInit, !0);
          }
        }
      }

      e.params.hashNavigation.watchState && r(s).on("hashchange", e.hashNavigation.onHashCange);
    },
    destroy: function destroy() {
      var e = this;
      e.params.hashNavigation.watchState && r(s).off("hashchange", e.hashNavigation.onHashCange);
    }
  };
  var K = {
    run: function run() {
      var e = this,
          t = e.slides.eq(e.activeIndex);
      var i = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = c.nextTick(function () {
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
  var Q = {
    setTranslate: function setTranslate() {
      var e = this,
          t = e.slides;

      for (var _i44 = 0; _i44 < t.length; _i44 += 1) {
        var _t44 = e.slides.eq(_i44);

        var _n23 = -_t44[0].swiperSlideOffset;

        e.params.virtualTranslate || (_n23 -= e.translate);
        var _s21 = 0;
        e.isHorizontal() || (_s21 = _n23, _n23 = 0);

        var _a19 = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(_t44[0].progress), 0) : 1 + Math.min(Math.max(_t44[0].progress, -1), 0);

        _t44.css({
          opacity: _a19
        }).transform("translate3d(".concat(_n23, "px, ").concat(_s21, "px, 0px)"));
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
  var Z = {
    setTranslate: function setTranslate() {
      var e = this.$el,
          t = this.$wrapperEl,
          i = this.slides,
          n = this.width,
          s = this.height,
          a = this.rtlTranslate,
          o = this.size,
          l = this.params.cubeEffect,
          c = this.isHorizontal(),
          d = this.virtual && this.params.virtual.enabled;
      var p,
          h = 0;
      l.shadow && (c ? (0 === (p = t.find(".swiper-cube-shadow")).length && (p = r('<div class="swiper-cube-shadow"></div>'), t.append(p)), p.css({
        height: "".concat(n, "px")
      })) : 0 === (p = e.find(".swiper-cube-shadow")).length && (p = r('<div class="swiper-cube-shadow"></div>'), e.append(p)));

      for (var _e68 = 0; _e68 < i.length; _e68 += 1) {
        var _t45 = i.eq(_e68);

        var _n24 = _e68;
        d && (_n24 = parseInt(_t45.attr("data-swiper-slide-index"), 10));

        var _s22 = 90 * _n24,
            _u3 = Math.floor(_s22 / 360);

        a && (_s22 = -_s22, _u3 = Math.floor(-_s22 / 360));

        var _p3 = Math.max(Math.min(_t45[0].progress, 1), -1);

        var _f = 0,
            _m = 0,
            _v = 0;
        _n24 % 4 == 0 ? (_f = 4 * -_u3 * o, _v = 0) : (_n24 - 1) % 4 == 0 ? (_f = 0, _v = 4 * -_u3 * o) : (_n24 - 2) % 4 == 0 ? (_f = o + 4 * _u3 * o, _v = o) : (_n24 - 3) % 4 == 0 && (_f = -o, _v = 3 * o + 4 * o * _u3), a && (_f = -_f), c || (_m = _f, _f = 0);

        var _g = "rotateX(".concat(c ? 0 : -_s22, "deg) rotateY(").concat(c ? _s22 : 0, "deg) translate3d(").concat(_f, "px, ").concat(_m, "px, ").concat(_v, "px)");

        if (_p3 <= 1 && _p3 > -1 && (h = 90 * _n24 + 90 * _p3, a && (h = 90 * -_n24 - 90 * _p3)), _t45.transform(_g), l.slideShadows) {
          var _e69 = c ? _t45.find(".swiper-slide-shadow-left") : _t45.find(".swiper-slide-shadow-top"),
              _i45 = c ? _t45.find(".swiper-slide-shadow-right") : _t45.find(".swiper-slide-shadow-bottom");

          0 === _e69.length && (_e69 = r("<div class=\"swiper-slide-shadow-".concat(c ? "left" : "top", "\"></div>")), _t45.append(_e69)), 0 === _i45.length && (_i45 = r("<div class=\"swiper-slide-shadow-".concat(c ? "right" : "bottom", "\"></div>")), _t45.append(_i45)), _e69.length && (_e69[0].style.opacity = Math.max(-_p3, 0)), _i45.length && (_i45[0].style.opacity = Math.max(_p3, 0));
        }
      }

      if (t.css({
        "-webkit-transform-origin": "50% 50% -".concat(o / 2, "px"),
        "-moz-transform-origin": "50% 50% -".concat(o / 2, "px"),
        "-ms-transform-origin": "50% 50% -".concat(o / 2, "px"),
        "transform-origin": "50% 50% -".concat(o / 2, "px")
      }), l.shadow) if (c) p.transform("translate3d(0px, ".concat(n / 2 + l.shadowOffset, "px, ").concat(-n / 2, "px) rotateX(90deg) rotateZ(0deg) scale(").concat(l.shadowScale, ")"));else {
        var _e70 = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
            _t46 = 1.5 - (Math.sin(2 * _e70 * Math.PI / 360) / 2 + Math.cos(2 * _e70 * Math.PI / 360) / 2),
            _i46 = l.shadowScale,
            _n25 = l.shadowScale / _t46,
            _a20 = l.shadowOffset;

        p.transform("scale3d(".concat(_i46, ", 1, ").concat(_n25, ") translate3d(0px, ").concat(s / 2 + _a20, "px, ").concat(-s / 2 / _n25, "px) rotateX(-90deg)"));
      }
      var f = u.isSafari || u.isUiWebView ? -o / 2 : 0;
      t.transform("translate3d(0px,0,".concat(f, "px) rotateX(").concat(this.isHorizontal() ? 0 : h, "deg) rotateY(").concat(this.isHorizontal() ? -h : 0, "deg)"));
    },
    setTransition: function setTransition(e) {
      var t = this.$el,
          i = this.slides;
      i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e);
    }
  };
  var ee = {
    setTranslate: function setTranslate() {
      var e = this,
          t = e.slides,
          i = e.rtlTranslate;

      for (var _n26 = 0; _n26 < t.length; _n26 += 1) {
        var _s23 = t.eq(_n26);

        var _a21 = _s23[0].progress;
        e.params.flipEffect.limitRotation && (_a21 = Math.max(Math.min(_s23[0].progress, 1), -1));

        var _o10 = -180 * _a21,
            _l5 = 0,
            _c2 = -_s23[0].swiperSlideOffset,
            _d4 = 0;

        if (e.isHorizontal() ? i && (_o10 = -_o10) : (_d4 = _c2, _c2 = 0, _l5 = -_o10, _o10 = 0), _s23[0].style.zIndex = -Math.abs(Math.round(_a21)) + t.length, e.params.flipEffect.slideShadows) {
          var _t47 = e.isHorizontal() ? _s23.find(".swiper-slide-shadow-left") : _s23.find(".swiper-slide-shadow-top"),
              _i47 = e.isHorizontal() ? _s23.find(".swiper-slide-shadow-right") : _s23.find(".swiper-slide-shadow-bottom");

          0 === _t47.length && (_t47 = r("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "left" : "top", "\"></div>")), _s23.append(_t47)), 0 === _i47.length && (_i47 = r("<div class=\"swiper-slide-shadow-".concat(e.isHorizontal() ? "right" : "bottom", "\"></div>")), _s23.append(_i47)), _t47.length && (_t47[0].style.opacity = Math.max(-_a21, 0)), _i47.length && (_i47[0].style.opacity = Math.max(_a21, 0));
        }

        _s23.transform("translate3d(".concat(_c2, "px, ").concat(_d4, "px, 0px) rotateX(").concat(_l5, "deg) rotateY(").concat(_o10, "deg)"));
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
  var te = {
    setTranslate: function setTranslate() {
      var e = this.width,
          t = this.height,
          i = this.slides,
          n = this.$wrapperEl,
          s = this.slidesSizesGrid,
          a = this.params.coverflowEffect,
          o = this.isHorizontal(),
          l = this.translate,
          c = o ? e / 2 - l : t / 2 - l,
          u = o ? a.rotate : -a.rotate,
          p = a.depth;

      for (var _e73 = 0, _t48 = i.length; _e73 < _t48; _e73 += 1) {
        var _t49 = i.eq(_e73),
            _n27 = s[_e73],
            _l6 = (c - _t49[0].swiperSlideOffset - _n27 / 2) / _n27 * a.modifier;

        var _d5 = o ? u * _l6 : 0,
            _h2 = o ? 0 : u * _l6,
            _f2 = -p * Math.abs(_l6),
            _m2 = o ? 0 : a.stretch * _l6,
            _v2 = o ? a.stretch * _l6 : 0;

        Math.abs(_v2) < .001 && (_v2 = 0), Math.abs(_m2) < .001 && (_m2 = 0), Math.abs(_f2) < .001 && (_f2 = 0), Math.abs(_d5) < .001 && (_d5 = 0), Math.abs(_h2) < .001 && (_h2 = 0);

        var _g2 = "translate3d(".concat(_v2, "px,").concat(_m2, "px,").concat(_f2, "px)  rotateX(").concat(_h2, "deg) rotateY(").concat(_d5, "deg)");

        if (_t49.transform(_g2), _t49[0].style.zIndex = 1 - Math.abs(Math.round(_l6)), a.slideShadows) {
          var _e74 = o ? _t49.find(".swiper-slide-shadow-left") : _t49.find(".swiper-slide-shadow-top"),
              _i48 = o ? _t49.find(".swiper-slide-shadow-right") : _t49.find(".swiper-slide-shadow-bottom");

          0 === _e74.length && (_e74 = r("<div class=\"swiper-slide-shadow-".concat(o ? "left" : "top", "\"></div>")), _t49.append(_e74)), 0 === _i48.length && (_i48 = r("<div class=\"swiper-slide-shadow-".concat(o ? "right" : "bottom", "\"></div>")), _t49.append(_i48)), _e74.length && (_e74[0].style.opacity = _l6 > 0 ? _l6 : 0), _i48.length && (_i48[0].style.opacity = -_l6 > 0 ? -_l6 : 0);
        }
      }

      if (d.pointerEvents || d.prefixedPointerEvents) {
        n[0].style.perspectiveOrigin = "".concat(c, "px 50%");
      }
    },
    setTransition: function setTransition(e) {
      this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
    }
  };
  var ie = {
    init: function init() {
      var e = this,
          t = e.params.thumbs,
          i = e.constructor;
      t.swiper instanceof i ? (e.thumbs.swiper = t.swiper, c.extend(e.thumbs.swiper.originalParams, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      }), c.extend(e.thumbs.swiper.params, {
        watchSlidesProgress: !0,
        slideToClickedSlide: !1
      })) : c.isObject(t.swiper) && (e.thumbs.swiper = new i(c.extend({}, t.swiper, {
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
      if (n && r(n).hasClass(e.params.thumbs.slideThumbActiveClass)) return;
      if (null == i) return;
      var s;

      if (s = t.params.loop ? parseInt(r(t.clickedSlide).attr("data-swiper-slide-index"), 10) : i, e.params.loop) {
        var _t50 = e.activeIndex;
        e.slides.eq(_t50).hasClass(e.params.slideDuplicateClass) && (e.loopFix(), e._clientLeft = e.$wrapperEl[0].clientLeft, _t50 = e.activeIndex);

        var _i49 = e.slides.eq(_t50).prevAll("[data-swiper-slide-index=\"".concat(s, "\"]")).eq(0).index(),
            _n28 = e.slides.eq(_t50).nextAll("[data-swiper-slide-index=\"".concat(s, "\"]")).eq(0).index();

        s = void 0 === _i49 ? _n28 : void 0 === _n28 ? _i49 : _n28 - _t50 < _t50 - _i49 ? _n28 : _i49;
      }

      e.slideTo(s);
    },
    update: function update(e) {
      var t = this,
          i = t.thumbs.swiper;
      if (!i) return;
      var n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView;

      if (t.realIndex !== i.realIndex) {
        var _s24,
            _a22 = i.activeIndex;

        if (i.params.loop) {
          i.slides.eq(_a22).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, _a22 = i.activeIndex);

          var _e75 = i.slides.eq(_a22).prevAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index(),
              _n29 = i.slides.eq(_a22).nextAll("[data-swiper-slide-index=\"".concat(t.realIndex, "\"]")).eq(0).index();

          _s24 = void 0 === _e75 ? _n29 : void 0 === _n29 ? _e75 : _n29 - _a22 == _a22 - _e75 ? _a22 : _n29 - _a22 < _a22 - _e75 ? _n29 : _e75;
        } else _s24 = t.realIndex;

        i.visibleSlidesIndexes.indexOf(_s24) < 0 && (i.params.centeredSlides ? _s24 = _s24 > _a22 ? _s24 - Math.floor(n / 2) + 1 : _s24 + Math.floor(n / 2) - 1 : _s24 > _a22 && (_s24 = _s24 - n + 1), i.slideTo(_s24, e ? 0 : void 0));
      }

      var s = 1;
      var a = t.params.thumbs.slideThumbActiveClass;
      if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView), i.slides.removeClass(a), i.params.loop) for (var _e76 = 0; _e76 < s; _e76 += 1) {
        i.$wrapperEl.children("[data-swiper-slide-index=\"".concat(t.realIndex + _e76, "\"]")).addClass(a);
      } else for (var _e77 = 0; _e77 < s; _e77 += 1) {
        i.slides.eq(t.realIndex + _e77).addClass(a);
      }
    }
  };
  var ne = [z, L, D, A, O, _, H, {
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
      c.extend(this, {
        mousewheel: {
          enabled: !1,
          enable: q.enable.bind(this),
          disable: q.disable.bind(this),
          handle: q.handle.bind(this),
          handleMouseEnter: q.handleMouseEnter.bind(this),
          handleMouseLeave: q.handleMouseLeave.bind(this),
          lastScrollTime: c.now()
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
      c.extend(this, {
        navigation: {
          init: B.init.bind(this),
          update: B.update.bind(this),
          destroy: B.destroy.bind(this),
          onNextClick: B.onNextClick.bind(this),
          onPrevClick: B.onPrevClick.bind(this)
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

        if (t.params.navigation.hideOnClick && !r(e.target).is(n) && !r(e.target).is(i)) {
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
      c.extend(this, {
        pagination: {
          init: F.init.bind(this),
          render: F.render.bind(this),
          update: F.update.bind(this),
          destroy: F.destroy.bind(this),
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
      c.extend(this, {
        scrollbar: {
          init: R.init.bind(this),
          destroy: R.destroy.bind(this),
          updateSize: R.updateSize.bind(this),
          setTranslate: R.setTranslate.bind(this),
          setTransition: R.setTransition.bind(this),
          enableDraggable: R.enableDraggable.bind(this),
          disableDraggable: R.disableDraggable.bind(this),
          setDragPosition: R.setDragPosition.bind(this),
          onDragStart: R.onDragStart.bind(this),
          onDragMove: R.onDragMove.bind(this),
          onDragEnd: R.onDragEnd.bind(this),
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
      c.extend(this, {
        parallax: {
          setTransform: X.setTransform.bind(this),
          setTranslate: X.setTranslate.bind(this),
          setTransition: X.setTransition.bind(this)
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
        t[i] = G[i].bind(e);
      }), c.extend(e, {
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
                _n30 = e.zoom.gesture.$slideEl ? e.zoom.gesture.$slideEl[0] : void 0;

            e.emit("zoomChange", t, _i50, _n30);
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
      c.extend(this, {
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
      c.extend(this, {
        controller: {
          control: this.params.controller.control,
          getInterpolateFunction: V.getInterpolateFunction.bind(this),
          setTranslate: V.setTranslate.bind(this),
          setTransition: V.setTransition.bind(this)
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
      c.extend(e, {
        a11y: {
          liveRegion: r("<span class=\"".concat(e.params.a11y.notificationClass, "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>"))
        }
      }), Object.keys(Y).forEach(function (t) {
        e.a11y[t] = Y[t].bind(e);
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
      c.extend(this, {
        history: {
          init: U.init.bind(this),
          setHistory: U.setHistory.bind(this),
          setHistoryPopState: U.setHistoryPopState.bind(this),
          scrollToSlide: U.scrollToSlide.bind(this),
          destroy: U.destroy.bind(this)
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
      c.extend(this, {
        hashNavigation: {
          initialized: !1,
          init: J.init.bind(this),
          destroy: J.destroy.bind(this),
          setHash: J.setHash.bind(this),
          onHashCange: J.onHashCange.bind(this)
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
      c.extend(e, {
        autoplay: {
          running: !1,
          paused: !1,
          run: K.run.bind(e),
          start: K.start.bind(e),
          stop: K.stop.bind(e),
          pause: K.pause.bind(e),
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
      c.extend(this, {
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
        c.extend(this.params, e), c.extend(this.originalParams, e);
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
      c.extend(this, {
        cubeEffect: {
          setTranslate: Z.setTranslate.bind(this),
          setTransition: Z.setTransition.bind(this)
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
        c.extend(this.params, e), c.extend(this.originalParams, e);
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
      c.extend(this, {
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
        c.extend(this.params, e), c.extend(this.originalParams, e);
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
      c.extend(this, {
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
      c.extend(this, {
        thumbs: {
          swiper: null,
          init: ie.init.bind(this),
          update: ie.update.bind(this),
          onThumbClick: ie.onThumbClick.bind(this)
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
  void 0 === P.use && (P.use = P.Class.use, P.installModule = P.Class.installModule), P.use(ne);
  var se = P;

  var ae =
  /*#__PURE__*/
  function () {
    function ae() {
      _classCallCheck(this, ae);

      this.root = document.documentElement, this.updateVh(), this.events();
    }

    _createClass(ae, [{
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

    return ae;
  }(),
      re = i(0),
      oe = i.n(re);

  var le =
  /*#__PURE__*/
  function () {
    function le() {
      _classCallCheck(this, le);

      this.button = oe()(".button-main"), this.contentWrapper = oe()(".content-wrapper"), this.animatedHero = oe()(".animated-hero"), this.disableJump(), this.initialClasses(), this.events();
    }

    _createClass(le, [{
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
        this.contentWrapper.toggleClass("slide-on-click--clicked"), this.animatedHero.toggleClass("scale-on-click--clicked");
      }
    }, {
      key: "disableJump",
      value: function disableJump() {
        window.innerWidth >= 1024 && this.button.attr("href", "#1");
      }
    }]);

    return le;
  }(),
      ce = (i(2), i(1)),
      de = i.n(ce);

  particlesJS.load("particles-js", "/particles/particles.json", function () {
    return 0;
  }), new se(".swiper-container", {
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
  }), new ae(), new le(), new de.a(".professional-skill", {
    strings: ["web developer", "front-end engineer", "web expert"],
    loop: !0,
    typeSpeed: 100,
    shuffle: !0,
    backSpeed: 60,
    smartBackspace: !1
  });
}]);