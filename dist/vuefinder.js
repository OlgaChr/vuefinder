import { ref as L, watch as je, inject as P, openBlock as _, createElementBlock as C, createElementVNode as p, unref as x, normalizeClass as dt, createTextVNode as nt, toDisplayString as E, createCommentVNode as X, createVNode as Tt, TransitionGroup as _n, withCtx as Z, Fragment as ut, renderList as Dt, reactive as Ie, onMounted as Ct, onUpdated as xn, withDirectives as $t, vShow as Me, withModifiers as Zt, nextTick as ze, customRef as kn, withKeys as oe, isRef as Dn, vModelText as ie, normalizeStyle as Jr, provide as Yt, createBlock as G, resolveDynamicComponent as Cn, renderSlot as Ze } from "vue";
import pe from "plupload";
var Gr;
const Le = (Gr = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Gr.getAttribute("content"), Oe = (e, { method: t = "get", params: r = {}, json: n = !0, signal: a = null }) => {
  const o = { method: t };
  if (o.signal = a, t == "get")
    e += "?" + new URLSearchParams(r);
  else {
    o.headers = {}, Le && (o.headers["X-CSRF-Token"] = Le);
    let l = new FormData();
    for (const [d, b] of Object.entries(r))
      l.append(d, b);
    o.body = l;
  }
  return fetch(e, o).then((l) => l.ok ? n ? l.json() : l.text() : l.json().then(Promise.reject.bind(Promise)));
};
function En(e) {
  return { all: e = e || /* @__PURE__ */ new Map(), on: function(t, r) {
    var n = e.get(t);
    n ? n.push(r) : e.set(t, [r]);
  }, off: function(t, r) {
    var n = e.get(t);
    n && (r ? n.splice(n.indexOf(r) >>> 0, 1) : e.set(t, []));
  }, emit: function(t, r) {
    var n = e.get(t);
    n && n.slice().map(function(a) {
      a(r);
    }), (n = e.get("*")) && n.slice().map(function(a) {
      a(t, r);
    });
  } };
}
function qe(e) {
  let t = localStorage.getItem(e + "_storage");
  const r = L(JSON.parse(t));
  je(r, n);
  function n() {
    r.value === null || r.value === "" ? localStorage.removeItem(e + "_storage") : localStorage.setItem(e + "_storage", JSON.stringify(r.value));
  }
  function a(d, b) {
    r.value = Object.assign({ ...r.value }, { [d]: b });
  }
  function o() {
    r.value = null;
  }
  return { getStore: (d, b = null) => r.value === null || r.value === "" ? b : r.value.hasOwnProperty(d) ? r.value[d] : b, setStore: a, clearStore: o };
}
const Tr = L("");
function Lt() {
  function e(t) {
    Tr.value = t;
  }
  return { apiUrl: Tr, setApiUrl: e };
}
const Mn = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Tn = {
  key: 0,
  class: "flex text-center"
}, $n = ["aria-label"], An = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), In = [
  An
], Ln = ["aria-label"], On = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), Pn = [
  On
], Nn = ["aria-label"], jn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), zn = [
  jn
], Rn = ["aria-label"], Hn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Vn = [
  Hn
], Bn = ["aria-label"], Un = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), Kn = [
  Un
], Yn = ["aria-label"], Wn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Xn = [
  Wn
], Zn = ["aria-label"], qn = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Fn = [
  qn
], Gn = {
  key: 1,
  class: "flex text-center"
}, Jn = { class: "pl-2" }, Qn = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, to = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, eo = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ro = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), so = [
  eo,
  ro
], no = { class: "flex text-center items-center justify-end" }, oo = ["aria-label"], io = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, ao = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, lo = {
  name: "VFToolbar"
}, co = /* @__PURE__ */ Object.assign(lo, {
  props: {
    data: Object
  },
  setup(e) {
    const t = P("emitter"), { getStore: r, setStore: n } = P("storage"), { t: a } = P("i18n"), o = L(r("viewport", "grid")), l = L([]);
    L(r("full-screen", !1));
    const d = L("");
    t.on("vf-search-query", ({ newQuery: h }) => {
      d.value = h;
    });
    const b = P("loadingState"), m = () => b.value;
    return t.on("vf-nodes-selected", (h) => {
      l.value = h;
    }), t.on("vf-view-toggle", (h) => {
      n("viewport", h), o.value = h;
    }), (h, v) => (_(), C("div", Mn, [
      d.value.length ? (_(), C("div", Gn, [
        p("div", Jn, [
          nt(E(x(a)("Search results for")) + " ", 1),
          p("span", Qn, E(d.value), 1)
        ]),
        m() ? (_(), C("svg", to, so)) : X("", !0)
      ])) : (_(), C("div", Tn, [
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: v[0] || (v[0] = (S) => x(t).emit("vf-modal-show", { type: "new-folder", items: l.value }))
        }, In, 8, $n),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v[1] || (v[1] = (S) => x(t).emit("vf-modal-show", { type: "new-file", items: l.value }))
        }, Pn, 8, Ln),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v[2] || (v[2] = (S) => l.value.length != 1 || x(t).emit("vf-modal-show", { type: "rename", items: l.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, zn, 2))
        ], 8, Nn),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v[3] || (v[3] = (S) => !l.value.length || x(t).emit("vf-modal-show", { type: "delete", items: l.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Vn, 2))
        ], 8, Rn),
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v[4] || (v[4] = (S) => x(t).emit("vf-modal-show", { type: "upload", items: l.value }))
        }, Kn, 8, Bn),
        l.value.length == 1 && l.value[0].mime_type == "application/zip" ? (_(), C("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": x(a)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v[5] || (v[5] = (S) => !l.value.length || x(t).emit("vf-modal-show", { type: "unarchive", items: l.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Xn, 2))
        ], 8, Yn)) : (_(), C("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": x(a)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: v[6] || (v[6] = (S) => !l.value.length || x(t).emit("vf-modal-show", { type: "archive", items: l.value }))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Fn, 2))
        ], 8, Zn))
      ])),
      p("div", no, [
        p("div", {
          class: "mx-1.5",
          "aria-label": x(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: v[7] || (v[7] = (S) => d.value.length || x(t).emit("vf-view-toggle", o.value == "list" ? "grid" : "list"))
        }, [
          (_(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: dt([d.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            o.value == "grid" ? (_(), C("path", io)) : X("", !0),
            o.value == "list" ? (_(), C("path", ao)) : X("", !0)
          ], 2))
        ], 8, oo)
      ])
    ]));
  }
});
var uo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Qr = { exports: {} };
(function(e, t) {
  (function(r, n) {
    e.exports = n();
  })(uo, function() {
    function r(u, c) {
      if (!(u instanceof c))
        throw new TypeError("Cannot call a class as a function");
    }
    function n(u, c) {
      for (var s = 0; s < c.length; s++) {
        var g = c[s];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(u, g.key, g);
      }
    }
    function a(u, c, s) {
      return c && n(u.prototype, c), s && n(u, s), u;
    }
    function o(u, c, s) {
      return c in u ? Object.defineProperty(u, c, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : u[c] = s, u;
    }
    function l(u, c) {
      var s = Object.keys(u);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(u);
        c && (g = g.filter(function(i) {
          return Object.getOwnPropertyDescriptor(u, i).enumerable;
        })), s.push.apply(s, g);
      }
      return s;
    }
    function d(u) {
      for (var c = 1; c < arguments.length; c++) {
        var s = arguments[c] != null ? arguments[c] : {};
        c % 2 ? l(Object(s), !0).forEach(function(g) {
          o(u, g, s[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(u, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach(function(g) {
          Object.defineProperty(u, g, Object.getOwnPropertyDescriptor(s, g));
        });
      }
      return u;
    }
    function b(u, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Super expression must either be null or a function");
      u.prototype = Object.create(c && c.prototype, {
        constructor: {
          value: u,
          writable: !0,
          configurable: !0
        }
      }), c && h(u, c);
    }
    function m(u) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
        return s.__proto__ || Object.getPrototypeOf(s);
      }, m(u);
    }
    function h(u, c) {
      return h = Object.setPrototypeOf || function(g, i) {
        return g.__proto__ = i, g;
      }, h(u, c);
    }
    function v() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }
    function S(u, c, s) {
      return v() ? S = Reflect.construct : S = function(i, f, y) {
        var w = [null];
        w.push.apply(w, f);
        var D = Function.bind.apply(i, w), V = new D();
        return y && h(V, y.prototype), V;
      }, S.apply(null, arguments);
    }
    function O(u) {
      return Function.toString.call(u).indexOf("[native code]") !== -1;
    }
    function T(u) {
      var c = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return T = function(g) {
        if (g === null || !O(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof c < "u") {
          if (c.has(g))
            return c.get(g);
          c.set(g, i);
        }
        function i() {
          return S(g, arguments, m(this).constructor);
        }
        return i.prototype = Object.create(g.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), h(i, g);
      }, T(u);
    }
    function M(u) {
      if (u === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return u;
    }
    function A(u, c) {
      return c && (typeof c == "object" || typeof c == "function") ? c : M(u);
    }
    function U(u) {
      var c = v();
      return function() {
        var g = m(u), i;
        if (c) {
          var f = m(this).constructor;
          i = Reflect.construct(g, arguments, f);
        } else
          i = g.apply(this, arguments);
        return A(this, i);
      };
    }
    function N(u, c) {
      for (; !Object.prototype.hasOwnProperty.call(u, c) && (u = m(u), u !== null); )
        ;
      return u;
    }
    function I(u, c, s) {
      return typeof Reflect < "u" && Reflect.get ? I = Reflect.get : I = function(i, f, y) {
        var w = N(i, f);
        if (!!w) {
          var D = Object.getOwnPropertyDescriptor(w, f);
          return D.get ? D.get.call(y) : D.value;
        }
      }, I(u, c, s || u);
    }
    function B(u, c) {
      return z(u) || ot(u, c) || rt(u, c) || bt();
    }
    function H(u) {
      return k(u) || J(u) || rt(u) || St();
    }
    function k(u) {
      if (Array.isArray(u))
        return ht(u);
    }
    function z(u) {
      if (Array.isArray(u))
        return u;
    }
    function J(u) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(u))
        return Array.from(u);
    }
    function ot(u, c) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(u)))) {
        var s = [], g = !0, i = !1, f = void 0;
        try {
          for (var y = u[Symbol.iterator](), w; !(g = (w = y.next()).done) && (s.push(w.value), !(c && s.length === c)); g = !0)
            ;
        } catch (D) {
          i = !0, f = D;
        } finally {
          try {
            !g && y.return != null && y.return();
          } finally {
            if (i)
              throw f;
          }
        }
        return s;
      }
    }
    function rt(u, c) {
      if (!!u) {
        if (typeof u == "string")
          return ht(u, c);
        var s = Object.prototype.toString.call(u).slice(8, -1);
        if (s === "Object" && u.constructor && (s = u.constructor.name), s === "Map" || s === "Set")
          return Array.from(u);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return ht(u, c);
      }
    }
    function ht(u, c) {
      (c == null || c > u.length) && (c = u.length);
      for (var s = 0, g = new Array(c); s < c; s++)
        g[s] = u[s];
      return g;
    }
    function St() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function bt() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function ft(u, c) {
      var s;
      if (typeof Symbol > "u" || u[Symbol.iterator] == null) {
        if (Array.isArray(u) || (s = rt(u)) || c && u && typeof u.length == "number") {
          s && (u = s);
          var g = 0, i = function() {
          };
          return {
            s: i,
            n: function() {
              return g >= u.length ? {
                done: !0
              } : {
                done: !1,
                value: u[g++]
              };
            },
            e: function(D) {
              throw D;
            },
            f: i
          };
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      var f = !0, y = !1, w;
      return {
        s: function() {
          s = u[Symbol.iterator]();
        },
        n: function() {
          var D = s.next();
          return f = D.done, D;
        },
        e: function(D) {
          y = !0, w = D;
        },
        f: function() {
          try {
            !f && s.return != null && s.return();
          } finally {
            if (y)
              throw w;
          }
        }
      };
    }
    var q = function(c, s, g) {
      var i = c.x, f = c.y, y = g.x, w = g.y, D = {
        "+": {
          x: i + y,
          y: f + w
        },
        "-": {
          x: i - y,
          y: f - w
        },
        "*": {
          x: i * y,
          y: f * w
        },
        "/": {
          x: i / y,
          y: f / w
        }
      };
      return D[s];
    }, $ = function(c) {
      return {
        x: c.left,
        y: c.top
      };
    }, R = function(c) {
      var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      return {
        left: c.x,
        top: c.y,
        right: c.x,
        bottom: c.y,
        width: s,
        height: s
      };
    }, j = function(c) {
      return {
        x: c,
        y: c
      };
    }, lt = function(u, c) {
      var s = c;
      window.addEventListener("resize", s), window.addEventListener("scroll", s);
      var g = new MutationObserver(s);
      u.forEach(function(f, y) {
        g.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return rn(g, s);
      };
      return {
        observer: g,
        callback: s,
        cleanup: i
      };
    }, F = function(u) {
      var c = Ee(u);
      return c.x || c.y ? !0 : u instanceof Document ? u.body ? !!(u.body.scrollTop = 1) : !!(u.documentElement.scrollTop = 1) : !!(u.scrollTop = 1);
    }, pt = function() {
      var u = document.createElement("div");
      return u.style.position = "fixed", u.style.overflow = "hidden", u.style.pointerEvents = "none", u.style.zIndex = "999999999999999999", u;
    }, Q = function(u) {
      var c = document.createElement("div");
      return c.style.position = "absolute", u || (c.style.background = "rgba(0, 175, 255, 0.2)", c.style.border = "1px solid rgba(0, 175, 255, 0.8)", c.style.display = "none", c.style.pointerEvents = "none"), c;
    }, le = function(u, c) {
      var s;
      return function() {
        for (var g = arguments.length, i = new Array(g), f = 0; f < g; f++)
          i[f] = arguments[f];
        var y = function() {
          s = null, u.apply(void 0, i);
        };
        clearTimeout(s), s = setTimeout(y, c);
      };
    }, ce = function() {
      var u, c, s, g;
      return {
        y: ((u = document.body) === null || u === void 0 ? void 0 : u.scrollTop) || ((c = document.documentElement) === null || c === void 0 ? void 0 : c.scrollTop) || 0,
        x: ((s = document.body) === null || s === void 0 ? void 0 : s.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Ce = function(u) {
      var c = function s(g) {
        var i, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = g[f]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (g.push(y), f++, s(g, f)) : g;
      };
      return c([u]);
    }, Ys = function(u, c) {
      if (u instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var s = u.getBoundingClientRect();
      return {
        top: s.top,
        left: s.left,
        bottom: s.bottom,
        right: s.right,
        width: (u.clientWidth || s.width) * c,
        height: (u.clientHeight || s.height) * c
      };
    }, Ee = function(u) {
      return !u || u instanceof Document ? ce() : {
        x: u.scrollLeft >= 0 ? u.scrollLeft : ce().x,
        y: u.scrollTop >= 0 ? u.scrollTop : ce().y
      };
    }, kr = function(u) {
      var c = u.elementRect, s = u.containerRect, g = u.tolerance, i = g === void 0 ? {
        x: 0,
        y: 0
      } : g, f = [];
      return c.top - i.y < s.top && f.push("top"), c.left - i.x < s.left && f.push("left"), c.bottom + i.y > s.bottom && f.push("bottom"), c.right + i.y > s.right && f.push("right"), f;
    }, Ws = function(u) {
      var c = u.event;
      return {
        x: c.clientX,
        y: c.clientY
      };
    }, Xs = function(u) {
      var c = u.scrollAmount, s = u.initialPointerPos, g = u.pointerPos, i = {};
      return g.x > s.x - c.x ? (i.left = s.x - c.x, i.width = g.x - s.x + c.x) : (i.left = g.x, i.width = s.x - g.x - c.x), g.y > s.y - c.y ? (i.top = s.y - c.y, i.height = g.y - s.y + c.y) : (i.top = g.y, i.height = s.y - g.y - c.y), i;
    }, Dr = function(c) {
      var s = {
        x: 0,
        y: 0
      }, g = window.getComputedStyle(c);
      if (!g.transform || g.transform === "none")
        return s;
      if (g.transform.indexOf("3d") >= 0) {
        var i = g.transform.trim().match(/matrix3d\((.*?)\)/);
        if (i && i.length) {
          var f, y = (f = i[1]) === null || f === void 0 ? void 0 : f.split(",");
          s.x = parseInt(y[12]) || 0, s.y = parseInt(y[13]) || 0;
        }
        return s;
      }
      var w = g.transform.trim().match(/matrix\((.*?)\)/);
      if (w && w.length) {
        var D, V = (D = w[1]) === null || D === void 0 ? void 0 : D.split(",");
        s.x = parseInt(V[4]) || 0, s.y = parseInt(V[5]) || 0;
      }
      return s;
    }, Zs = function(c) {
      var s = c.style.transform;
      if (!s || s.indexOf("translate") < 0)
        return Dr(c);
      var g = {
        x: 0,
        y: 0
      }, i = s.trim().match(/translate[3dD]*?\(.*?\)/);
      if (i) {
        var f, y = (f = i[0]) === null || f === void 0 ? void 0 : f.split("(");
        if (y) {
          var w, D = (w = y[1]) === null || w === void 0 ? void 0 : w.split(",");
          g.x = parseInt(D[0]) || 0, g.y = parseInt(D[1]) || 0;
        }
      }
      return !g.x && !g.x ? Dr(c) : g;
    }, qs = function(c) {
      var s = c.style, g = {
        x: parseInt(s.left) || 0,
        y: parseInt(s.top) || 0
      };
      if (!g.x && !g.x) {
        var i = window.getComputedStyle(c);
        return {
          x: parseInt(i.left) || 0,
          y: parseInt(i.top) || 0
        };
      }
      return g;
    }, Fs = function(u, c) {
      return c ? Zs(u) : qs(u);
    }, Gs = function(u) {
      var c = u.element, s = u.edges, g = u.elementRect, i = u.containerRect, f = u.elementPos, y = u.useTransform;
      s.includes("top") && he(c, {
        y: f.y + i.top - g.top,
        x: f.x
      }, y), s.includes("left") && he(c, {
        y: f.y,
        x: f.x + i.left - g.left
      }, y), s.includes("bottom") && he(c, {
        y: f.y + i.bottom - g.bottom,
        x: f.x
      }, y), s.includes("right") && he(c, {
        y: f.y,
        x: f.x + i.right - g.right
      }, y);
    }, Cr = function(u) {
      var c = u.computedStyle, s = u.node, g = c.position, i = g === "absolute" || g === "relative" || g === "fixed";
      !(s instanceof Document) && !i && (s.style.position = "relative");
    }, Js = function(u) {
      var c = u.shiftKey, s = u.keyboardDragSpeed, g = u.zoom, i = u.key, f = u.dragKeys, y = u.scrollDiff, w = u.canScroll, D = u.scrollCallback, V = {
        x: 0,
        y: 0
      }, W = c ? s * 4 * g : s * g;
      return f.left.includes(i) && (V.x = y.x || -W, !c && !y.x && w && D(["left"], s)), f.right.includes(i) && (V.x = y.x || W, !c && !y.x && w && D(["right"], s)), f.up.includes(i) && (V.y = y.y || -W, !c && !y.y && w && D(["top"], s)), f.down.includes(i) && (V.y = y.y || W, !c && !y.y && w && D(["bottom"], s)), V;
    }, Qs = function(u) {
      var c = u.element, s = u.force, g = u.multiSelectionToggle, i = u.SelectedSet, f = u.hoverClassName;
      c.classList.contains(f) && !s || (i.has(c) ? g && i.delete(c) : i.add(c), c.classList.add(f));
    }, tn = function(u) {
      var c = u.element, s = u.force, g = u.SelectedSet, i = u.PrevSelectedSet, f = u.hoverClassName;
      if (!c.classList.contains(f) && !s)
        return !1;
      var y = g.has(c), w = i.has(c);
      y && !w ? g.delete(c) : !y && w && g.add(c), c.classList.remove(f);
    }, ue = function(c, s, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(c, '" is not of type "').concat(s, '".'));
    }, Y = function(c, s, g, i) {
      if (s === void 0)
        return g ? o({}, c, i) : {};
      if (s === null)
        return o({}, c, null);
      var f = !0, y = !1, w = typeof i == "string";
      w && (f = typeof s == "string" || s instanceof String), w && !f && (y = !0, ue(c, "string"));
      var D = !Number.isNaN(i) && typeof i == "number";
      D && (f = !Number.isNaN(s) && typeof s == "number"), D && !f && (y = !0, ue(c, "number"));
      var V = Object.prototype.toString.call(i) === "[object Object]";
      V && (f = Object.prototype.toString.call(s) === "[object Object]"), V && !f && (y = !0, ue(c, "object"));
      var W = typeof i == "boolean";
      W && (f = typeof s == "boolean"), W && !f && (y = !0, ue(c, "boolean"));
      var it = Array.isArray(i);
      it && (f = Array.isArray(s)), it && !f && (y = !0, ue(c, "array"));
      var wt = y || g;
      return c === "dragKeys" && f ? o({}, c, Object.assign(i, s)) : c === "dragKeys" && !f ? wt ? o({}, c, i) : {} : (c === "dropZones" && f && new Set(s.map(function(yt) {
        return yt.id;
      })).size !== s.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? o({}, c, s) : wt ? o({}, c, i) : {});
    }, en = function(u, c) {
      return d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d(d({}, Y("area", u.area, c, document)), Y("selectables", u.selectables, c, null)), Y("autoScrollSpeed", u.autoScrollSpeed, c, 5)), Y("overflowTolerance", u.overflowTolerance, c, {
        x: 25,
        y: 25
      })), Y("zoom", u.zoom, c, 1)), Y("customStyles", u.customStyles, c, !1)), Y("multiSelectMode", u.multiSelectMode, c, !1)), Y("multiSelectToggling", u.multiSelectToggling, c, !0)), Y("multiSelectKeys", u.multiSelectKeys, c, ["Control", "Shift", "Meta"])), Y("selector", u.selector, c, null)), Y("selectionThreshold", u.selectionThreshold, c, 0)), Y("draggability", u.draggability, c, !0)), Y("immediateDrag", u.immediateDrag, c, !0)), Y("keyboardDrag", u.keyboardDrag, c, !0)), Y("dragKeys", u.dragKeys, c, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", u.keyboardDragSpeed, c, 10)), Y("useTransform", u.useTransform, c, !0)), Y("refreshMemoryRate", u.refreshMemoryRate, c, 80)), Y("dropZones", u.dropZones, c, [])), Y("dropInsideThreshold", u.dropInsideThreshold, c, 1)), Y("dropTargetThreshold", u.dropTargetThreshold, c, 0)), Y("usePointerEvents", u.usePointerEvents, c, !1)), Y("hoverClass", u.hoverClass, c, "ds-hover")), Y("selectableClass", u.selectableClass, c, "ds-selectable")), Y("selectedClass", u.selectedClass, c, "ds-selected")), Y("selectorClass", u.selectorClass, c, "ds-selector")), Y("selectorAreaClass", u.selectorAreaClass, c, "ds-selector-area")), Y("droppedTargetClass", u.droppedTargetClass, c, "ds-dropped-target")), Y("droppedInsideClass", u.droppedInsideClass, c, "ds-dropped-inside")), Y("droppableClass", u.droppableClass, c, "ds-droppable")), Y("dropZoneClass", u.dropZoneClass, c, "ds-dropzone")), Y("dropZoneReadyClass", u.dropZoneReadyClass, c, "ds-dropzone-ready")), Y("dropZoneTargetClass", u.dropZoneTargetClass, c, "ds-dropzone-target")), Y("dropZoneInsideClass", u.dropZoneInsideClass, c, "ds-dropzone-inside"));
    }, de = function(u, c) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = u;
      if (s > 0) {
        var i = (u.right - u.left) * s, f = (u.bottom - u.top) * s;
        g = {
          left: u.left + i,
          right: u.right - i,
          top: u.top + f,
          bottom: u.bottom - f
        };
      }
      return g.left < c.right && g.right > c.left && g.top < c.bottom && g.bottom > c.top;
    }, Er = function(u) {
      var c = u.element, s = u.posDirection, g = u.containerRect, i = u.useTransform, f = Fs(c, i), y = q(f, "+", s);
      he(c, y, i);
      var w = c.getBoundingClientRect(), D = kr({
        elementRect: w,
        containerRect: g
      });
      Gs({
        element: c,
        edges: D,
        elementRect: w,
        containerRect: g,
        elementPos: y,
        useTransform: i
      });
    }, rn = function(u, c) {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c), u.disconnect();
    }, sn = function(u, c, s) {
      if (!!c.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = u instanceof Document ? g || document.body : u, f = c.includes("top") && i.scrollTop > 0, y = c.includes("bottom") && i.scrollTop < i.scrollHeight, w = c.includes("left") && i.scrollLeft > 0, D = c.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * s), y && (i.scrollTop += 1 * s), w && (i.scrollLeft -= 1 * s), D && (i.scrollLeft += 1 * s);
      }
    }, he = function(u, c, s) {
      if (s) {
        var g = u.style.transform;
        u.style.transform = "translate3d(".concat(c.x, "px,").concat(c.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        u.style.left = "".concat(c.x, "px"), u.style.top = "".concat(c.y, "px");
      return u;
    }, nn = function(u) {
      for (var c = u.subscribe, s = u.publish, g = u.Interaction, i = u.SelectedSet, f = u.DropZones, y = {
        "Selected:added": [{
          name: "elementselect"
        }],
        "Selected:removed": [{
          name: "elementunselect"
        }],
        "Area:scroll": [{
          name: "autoscroll"
        }],
        "Interaction:start": [{
          name: "dragstart"
        }],
        "Interaction:update": [
          {
            name: "dragmove",
            condition: function(it) {
              return it.event;
            }
          }
        ],
        "Interaction:end": [
          {
            name: "callback",
            extraData: function() {
              var it = f.getTarget();
              return d({}, it ? {
                dropTarget: it.toObject()
              } : {});
            }
          }
        ]
      }, w = function() {
        var it = B(V[D], 2), wt = it[0], yt = it[1];
        ["pre", !1].forEach(function(Et) {
          return c(Et ? "".concat(wt, ":").concat(Et) : wt, function(at) {
            return yt.forEach(function(_t) {
              return (!_t.condition || _t.condition(at)) && s(Et ? "".concat(Et).concat(_t.name) : _t.name, d(d({
                items: i.elements,
                isDragging: g.isDragging
              }, at), _t.extraData ? _t.extraData(at) : {}));
            });
          });
        });
      }, D = 0, V = Object.entries(y); D < V.length; D++)
        w();
    }, Ut = function(u) {
      return u ? !Array.isArray(u) && (u instanceof HTMLElement || u instanceof SVGElement) ? [u] : H(new Set(H(u))) : [];
    }, Mr = function(u, c) {
      u.style.left = "".concat(c.left, "px"), u.style.top = "".concat(c.top, "px"), u.style.width = "".concat(c.width, "px"), u.style.height = "".concat(c.height, "px");
    }, on = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "DS", void 0), o(this, "_observers", void 0), o(this, "_node", void 0), o(this, "_parentNodes", void 0), o(this, "_computedStyle", void 0), o(this, "_computedBorder", void 0), o(this, "_rect", void 0), o(this, "setArea", function(i) {
          s.reset(), s._node = i, Cr({
            computedStyle: s.computedStyle,
            node: s._node
          }), setTimeout(function() {
            s.DS.PubSub.publish("Area:modified:pre", {
              item: s
            }), s.reset(), s.DS.PubSub.publish("Area:modified", {
              item: s
            });
          });
        }), o(this, "start", function() {
          s._observers = lt(s.parentNodes, le(function(i) {
            s.DS.PubSub.publish("Area:modified:pre", {
              event: i,
              item: s
            }), s.reset(), s.DS.PubSub.publish("Area:modified", {
              event: i,
              item: s
            });
          }, 60));
        }), o(this, "reset", function() {
          s._computedStyle = void 0, s._rect = void 0, s._computedBorder = void 0, s._parentNodes = void 0;
        }), o(this, "stop", function() {
          s._observers.cleanup(), s.reset();
        }), o(this, "scroll", function(i, f) {
          var y = {
            scroll_directions: i,
            scroll_multiplier: f
          };
          s.DS.PubSub.publish("Area:scroll:pre", y), sn(s._node, i, f), s.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          s.setArea(f.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return a(u, [{
        key: "HTMLNode",
        get: function() {
          return this._node;
        }
      }, {
        key: "computedBorder",
        get: function() {
          return this._computedBorder ? this._computedBorder : {
            top: parseInt(this.computedStyle.borderTopWidth),
            bottom: parseInt(this.computedStyle.borderBottomWidth),
            left: parseInt(this.computedStyle.borderLeftWidth),
            right: parseInt(this.computedStyle.borderRightWidth)
          };
        }
      }, {
        key: "computedStyle",
        get: function() {
          return this._computedStyle ? this._computedStyle : this.HTMLNode instanceof Document ? this._computedStyle = window.getComputedStyle(this.HTMLNode.body || this.HTMLNode.documentElement) : this._computedStyle = window.getComputedStyle(this.HTMLNode);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = Ys(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Ce(this.HTMLNode);
        }
      }]), u;
    }(), an = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_prevCursorPos", void 0), o(this, "_prevScrollPos", void 0), o(this, "_elements", []), o(this, "_dragKeys", void 0), o(this, "_dragKeysFlat", []), o(this, "assignDragkeys", function() {
          s._dragKeys = {
            up: s.DS.stores.SettingsStore.s.dragKeys.up.map(function(i) {
              return i.toLowerCase();
            }),
            down: s.DS.stores.SettingsStore.s.dragKeys.down.map(function(i) {
              return i.toLowerCase();
            }),
            left: s.DS.stores.SettingsStore.s.dragKeys.left.map(function(i) {
              return i.toLowerCase();
            }),
            right: s.DS.stores.SettingsStore.s.dragKeys.right.map(function(i) {
              return i.toLowerCase();
            })
          }, s._dragKeysFlat = [].concat(H(s._dragKeys.up), H(s._dragKeys.down), H(s._dragKeys.left), H(s._dragKeys.right));
        }), o(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, w = y.toLowerCase();
          if (!(!s.DS.stores.SettingsStore.s.keyboardDrag || !s._dragKeysFlat.includes(w) || !s.DS.SelectedSet.size || !s.DS.stores.SettingsStore.s.draggability || s.DS.continue)) {
            var D = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            s.DS.publish(["Interaction:start:pre", "Interaction:start"], D), s._elements = s.DS.getSelection(), s.handleZIndex(!0);
            var V = Js({
              shiftKey: s.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: s.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: s.DS.stores.SettingsStore.s.zoom,
              key: w,
              scrollCallback: s.DS.Area.scroll,
              scrollDiff: s._scrollDiff,
              canScroll: s.DS.stores.ScrollStore.canScroll,
              dragKeys: s._dragKeys
            });
            s._elements.forEach(function(W) {
              return Er({
                element: W,
                posDirection: V,
                containerRect: s.DS.SelectorArea.rect,
                useTransform: s.DS.stores.SettingsStore.s.useTransform
              });
            }), s.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), o(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, w = y.toLowerCase();
          if (!(!s.DS.stores.SettingsStore.s.keyboardDrag || !s._dragKeysFlat.includes(w) || !s.DS.SelectedSet.size || !s.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: f,
              isDragging: s.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            s.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), o(this, "start", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          !f || y || (s._prevCursorPos = null, s._prevScrollPos = null, s._elements = s.DS.getSelection(), s.handleZIndex(!0));
        }), o(this, "stop", function(i) {
          i != null && i.isKeyboard || (s._prevCursorPos = null, s._prevScrollPos = null, s.handleZIndex(!1), s._elements = []);
        }), o(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !s._elements.length || y || s.DS.continue)) {
            var w = q(s._cursorDiff, "+", s._scrollDiff);
            s._elements.forEach(function(D) {
              return Er({
                element: D,
                posDirection: w,
                containerRect: s.DS.SelectorArea.rect,
                useTransform: s.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), o(this, "handleZIndex", function(i) {
          s._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return a(u, [{
        key: "_cursorDiff",
        get: function() {
          var s = this.DS.stores.PointerStore.currentVal, g = this._prevCursorPos ? q(s, "-", this._prevCursorPos) : {
            x: 0,
            y: 0
          };
          return this._prevCursorPos = s, g;
        }
      }, {
        key: "_scrollDiff",
        get: function() {
          var s = this.DS.stores.ScrollStore.currentVal, g = this._prevScrollPos ? q(s, "-", this._prevScrollPos) : {
            x: 0,
            y: 0
          };
          return this._prevScrollPos = s, g;
        }
      }]), u;
    }(), ln = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS, i = c.id, f = c.element, y = c.droppables;
        r(this, u), o(this, "id", void 0), o(this, "element", void 0), o(this, "_droppables", void 0), o(this, "_rect", void 0), o(this, "_observers", void 0), o(this, "_timeout", void 0), o(this, "_itemsDropped", []), o(this, "_itemsInside", void 0), o(this, "setReadyClasses", function(w) {
          if (!s.isDestroyed) {
            var D = s.droppables.filter(function(V) {
              return s.DS.SelectedSet.has(V);
            });
            !D.length || (D.forEach(function(V) {
              V.classList[w]("".concat(s.Settings.droppableClass)), V.classList[w]("".concat(s.Settings.droppableClass, "-").concat(s.id));
            }), s.element.classList[w]("".concat(s.Settings.dropZoneReadyClass)));
          }
        }), o(this, "handleNoDrop", function() {
          var w;
          s.isDestroyed || (s.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(s.Settings.droppedTargetClass), D.classList.remove("".concat(s.Settings.droppedTargetClass, "-").concat(s.id));
          }), s._itemsDropped = s._itemsDropped.filter(function(D) {
            return !s.DS.SelectedSet.has(D);
          }), (w = s._itemsDropped) !== null && w !== void 0 && w.length || s.element.classList.remove("".concat(s.Settings.dropZoneTargetClass)));
        }), o(this, "handleDrop", function() {
          var w, D, V;
          s.isDestroyed || (s._itemsDropped = H(new Set([].concat(H(s._itemsDropped), H((w = s.droppables) === null || w === void 0 ? void 0 : w.filter(function(W) {
            return s.DS.SelectedSet.has(W);
          }))))), (D = s._itemsDropped) === null || D === void 0 || D.forEach(function(W) {
            W.classList.add("".concat(s.Settings.droppedTargetClass)), W.classList.add("".concat(s.Settings.droppedTargetClass, "-").concat(s.id));
          }), (V = s._itemsDropped) !== null && V !== void 0 && V.length && s.element.classList.add("".concat(s.Settings.dropZoneTargetClass)));
        }), o(this, "handleItemsInsideClasses", function() {
          var w = !1;
          s.droppables.forEach(function(D) {
            s.itemsInside.includes(D) ? (D.classList.add("".concat(s.Settings.droppedInsideClass)), D.classList.add("".concat(s.Settings.droppedInsideClass, "-").concat(s.id)), w = !0) : (D.classList.remove("".concat(s.Settings.droppedInsideClass, "-").concat(s.id)), D.className.includes("".concat(s.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(s.Settings.droppedInsideClass)));
          }), w ? s.element.classList.add("".concat(s.Settings.dropZoneInsideClass)) : s.element.classList.remove("".concat(s.Settings.dropZoneInsideClass));
        }), o(this, "start", function(w) {
          var D = w.isDragging;
          !D || s.isDestroyed || s.setReadyClasses("add");
        }), o(this, "stop", function(w) {
          var D = w.isDragging;
          !D || s.isDestroyed || (s.setReadyClasses("remove"), s.handleItemsInsideClasses());
        }), o(this, "toObject", function() {
          return {
            id: s.id,
            element: s.element,
            droppables: s.droppables,
            itemsDropped: s.itemsDropped,
            itemsInside: s.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = Ut(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(w) {
          var D = w.settings;
          s.element.classList.remove(D["dropZoneClass:pre"]), s.element.classList.add(D.dropZoneClass);
        }), this._observers = lt(this.parentNodes, le(function() {
          return s._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(u, [{
        key: "destroy",
        value: function() {
          var s = this;
          this._observers.cleanup(), this.element.classList.remove("".concat(this.Settings.dropZoneClass)), this.element.classList.remove("".concat(this.Settings.dropZoneTargetClass)), this.element.classList.remove("".concat(this.Settings.dropZoneReadyClass)), this.droppables.forEach(function(g) {
            g.classList.remove("".concat(s.Settings.droppedTargetClass)), g.classList.remove("".concat(s.Settings.droppedTargetClass, "-").concat(s.id)), g.classList.remove("".concat(s.Settings.droppableClass)), g.classList.remove("".concat(s.Settings.droppableClass, "-").concat(s.id));
          }), this.DS.unsubscribe("Interaction:start", this.start), this.DS.unsubscribe("Interaction:end", this.stop), this.element = null, this.droppables = null, this.id = null, this._itemsDropped = null, this._itemsInside = null, this.isDestroyed = !0;
        }
      }, {
        key: "rect",
        get: function() {
          return this.isDestroyed ? null : this._rect ? this._rect : this._rect = this.element.getBoundingClientRect();
        }
      }, {
        key: "itemsDropped",
        get: function() {
          return this.isDestroyed ? null : this._itemsDropped;
        }
      }, {
        key: "itemsInside",
        get: function() {
          var s = this;
          return this.isDestroyed ? null : this._itemsInside ? this._itemsInside : (this._itemsInside = this.droppables.flatMap(function(g) {
            return de(s.DS.SelectableSet.rects.get(g), s.rect, s.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return s._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Ce(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(s) {
          this._droppables = s;
        }
      }]), u;
    }(), cn = function u(c) {
      var s = this, g = c.DS;
      r(this, u), o(this, "_zoneByElement", /* @__PURE__ */ new Map()), o(this, "_zoneById", /* @__PURE__ */ new Map()), o(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), o(this, "_zones", void 0), o(this, "setDropZones", function(i) {
        var f = i.dropZones;
        !f || (s._zones && s._zones.forEach(function(y) {
          return y.destroy();
        }), s._zones = f.map(function(y) {
          return new ln(d({
            DS: s.DS
          }, y));
        }), s._zones.forEach(function(y) {
          s._zoneByElement.set(y.element, y), s._zoneById.set(y.id, y), y.droppables.forEach(function(w) {
            var D = s._zonesByDroppable.get(w);
            if (!(D != null && D.length))
              return s._zonesByDroppable.set(w, [y]);
            s._zonesByDroppable.set(w, H(new Set([].concat(H(D), [y]))));
          });
        }));
      }), o(this, "_handleDrop", function(i) {
        s._zones.forEach(function(f) {
          f !== i && f.handleNoDrop();
        }), i && i.handleDrop();
      }), o(this, "_getZoneByElementsFromPoint", function(i, f) {
        for (var y = f.x, w = f.y, D = 0, V = i.length; D < V; D++) {
          var W = s._zoneByElement.get(i[D]);
          if (W && de(W.rect, {
            left: y,
            right: y,
            top: w,
            bottom: w
          }, Math.min(s.Settings.dropTargetThreshold, 0.5)))
            return W;
        }
      }), o(this, "stop", function(i) {
        var f = i.isDragging;
        if (!!f) {
          var y = s.getTarget();
          s._handleDrop(y);
        }
      }), o(this, "getItemsDroppedById", function(i) {
        var f = s._zoneById.get(i);
        return f ? f.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
      }), o(this, "getItemsInsideById", function(i, f) {
        var y = s._zoneById.get(i);
        if (!y)
          return console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
        var w = y.itemsInside;
        return f && y.handleItemsInsideClasses(), w;
      }), o(this, "getTarget", function(i) {
        var f;
        if (!!((f = s._zones) !== null && f !== void 0 && f.length)) {
          var y = (i == null ? void 0 : i.x) || s.DS.stores.PointerStore.currentVal.x, w = (i == null ? void 0 : i.y) || s.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, w);
          return s._getZoneByElementsFromPoint(D, {
            x: y,
            y: w
          });
        }
      }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(i) {
        var f = i.settings;
        return s.setDropZones(f);
      }), this.setDropZones({
        dropZones: this.DS.stores.SettingsStore.s.dropZones
      }), this.DS.subscribe("Interaction:end", this.stop);
    }, un = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "isInteracting", void 0), o(this, "isDragging", void 0), o(this, "init", function() {
          return s.DS.publish("Interaction:init:pre", {});
        }), o(this, "_init", function() {
          s.stop(), s.Settings.usePointerEvents ? s.DS.Area.HTMLNode.addEventListener("pointerdown", s.start, {
            passive: !1
          }) : s.DS.Area.HTMLNode.addEventListener("mousedown", s.start), s.DS.Area.HTMLNode.addEventListener("touchstart", s.start, {
            passive: !1
          }), s.DS.publish("Interaction:init", {});
        }), o(this, "start", function(i) {
          return s.DS.publish("Interaction:start:pre", {
            event: i,
            isDragging: s.isDragging
          });
        }), o(this, "_start", function(i) {
          i.type === "touchstart" && i.preventDefault(), s._canInteract(i) && (s.isInteracting = !0, s.isDragging = s.isDragEvent(i), s.DS.publish("Interaction:start", {
            event: i,
            isDragging: s.isDragging
          }), s.Settings.usePointerEvents ? (document.addEventListener("pointerup", s.reset), document.addEventListener("pointercancel", s.reset)) : document.addEventListener("mouseup", s.reset), document.addEventListener("touchend", s.reset));
        }), o(this, "isDragEvent", function(i) {
          var f = i.target.closest(".".concat(s.Settings.selectableClass));
          return !s.Settings.draggability || s.DS.stores.KeyStore.isMultiSelectKeyPressed(i) || !f ? !1 : (s.Settings.immediateDrag && (s.DS.SelectedSet.size ? s.DS.SelectedSet.has(f) || (s.DS.SelectedSet.clear(), s.DS.SelectedSet.add(f)) : s.DS.SelectedSet.add(f)), !!s.DS.SelectedSet.has(f));
        }), o(this, "onClick", function(i) {
          var f = i.event;
          if (!!s._canInteract(f) && !(f.detail > 0)) {
            var y = s.DS, w = y.stores, D = w.PointerStore, V = w.KeyStore, W = y.SelectableSet, it = y.SelectedSet;
            D.start(f);
            var wt = f.target;
            !W.has(wt) || (V.isMultiSelectKeyPressed(f) || it.clear(), it.toggle(wt), s.reset());
          }
        }), o(this, "stop", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s.DS.Area.HTMLNode;
          s.isInteracting = !1, s.isDragging = !1, s.Settings.usePointerEvents ? (i.removeEventListener("pointerdown", s.start, {
            passive: !1
          }), document.removeEventListener("pointerup", s.reset), document.removeEventListener("pointercancel", s.reset)) : (i.removeEventListener("mousedown", s.start), document.removeEventListener("mouseup", s.reset)), i.removeEventListener("touchstart", s.start, {
            passive: !1
          }), document.removeEventListener("touchend", s.reset);
        }), o(this, "update", function(i) {
          var f = i.event, y = i.scroll_directions, w = i.scroll_multiplier;
          s.isInteracting && s.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: w,
            isDragging: s.isDragging
          });
        }), o(this, "reset", function(i) {
          return s.DS.publish("Interaction:end:pre", {
            event: i,
            isDragging: s.isDragging
          });
        }), o(this, "_reset", function(i) {
          var f = s.isDragging;
          s.stop(), s.init(), s.DS.publish("Interaction:end", {
            event: i,
            isDragging: f
          });
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          s.stop(f["area:pre"]), s.init();
        }), this.DS.subscribe("PointerStore:updated", this.update), this.DS.subscribe("Selectable:click", this.onClick), this.DS.subscribe("Selectable:pointer", function(i) {
          var f = i.event;
          return s.start(f);
        }), this.DS.subscribe("Interaction:start:pre", function(i) {
          var f = i.event;
          return s._start(f);
        }), this.DS.subscribe("Interaction:init:pre", this._init), this.DS.subscribe("Interaction:end:pre", function(i) {
          var f = i.event;
          return s._reset(f);
        }), this.DS.subscribe("Area:scroll", this.update);
      }
      return a(u, [{
        key: "_canInteract",
        value: function(s) {
          var g = s.clientX === 0 && s.clientY === 0 && s.detail === 0 && s.target;
          return !(s.button === 2 || this.isInteracting || s.target && !this.DS.SelectorArea.isInside(s.target) || !g && !this.DS.SelectorArea.isClicked(s));
        }
      }]), u;
    }(), dn = function u(c) {
      var s = this, g = c.DS;
      r(this, u), o(this, "subscribers", {}), o(this, "subscribe", function(i, f) {
        return Array.isArray(s.subscribers[i]) || (s.subscribers[i] = []), s.subscribers[i].push(f), s.subscribers[i].length - 1;
      }), o(this, "unsubscribe", function(i, f, y) {
        y >= 0 ? s.subscribers[i].splice(y, 1) : f && (s.subscribers[i] = s.subscribers[i].filter(function(w) {
          return w !== f;
        }));
      }), o(this, "publish", function(i, f) {
        Array.isArray(i) ? i.forEach(function(y) {
          return s._publish(y, f);
        }) : s._publish(i, f);
      }), o(this, "_publish", function(i, f) {
        var y = s.subscribers[i];
        !Array.isArray(y) || (i.includes(":pre") ? s._handlePrePublish(y, f) : s._handlePublish(y, f));
      }), o(this, "_handlePublish", function(i, f) {
        for (var y = 0, w = i.length; y < w; y++) {
          if (s.DS.stopped)
            return;
          i[y](f);
        }
      }), o(this, "_handlePrePublish", function(i, f) {
        for (var y = i.length; y--; ) {
          if (s.DS.stopped)
            return;
          i[y](f);
        }
      }), this.DS = g;
    }, hn = /* @__PURE__ */ function(u) {
      b(s, u);
      var c = U(s);
      function s(g) {
        var i, f = g.DS;
        return r(this, s), i = c.call(this), o(M(i), "_rects", void 0), o(M(i), "_timeout", void 0), o(M(i), "init", function() {
          return Ut(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), o(M(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), o(M(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), o(M(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), o(M(i), "addAll", function(y) {
          return y.forEach(function(w) {
            return i.add(w);
          });
        }), o(M(i), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return i.delete(w);
          });
        }), i.DS = f, i.Settings = f.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var w = y.settings;
          i.forEach(function(D) {
            D.classList.remove(w["selectableClass:pre"]), D.classList.add(w.selectableClass);
          });
        }), i;
      }
      return a(s, [{
        key: "add",
        value: function(i) {
          if (!I(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:added:pre", f), i.classList.add(this.Settings.selectableClass), i.addEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.addEventListener("pointerdown", this._onPointer, {
              passive: !1
            }) : i.addEventListener("mousedown", this._onPointer), i.addEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.Settings.draggability && !this.Settings.useTransform && Cr({
              computedStyle: window.getComputedStyle(i),
              node: i
            }), this.DS.publish("Selectable:added", f), I(m(s.prototype), "add", this).call(this, i);
          }
        }
      }, {
        key: "delete",
        value: function(i) {
          if (!!I(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:removed:pre", f), i.classList.remove(this.Settings.selectableClass), i.classList.remove(this.Settings.hoverClass), i.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.removeEventListener("pointerdown", this._onPointer, {
              passive: !1
            }) : i.removeEventListener("mousedown", this._onPointer), i.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", f), I(m(s.prototype), "delete", this).call(this, i);
          }
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }, {
        key: "rects",
        get: function() {
          var i = this;
          return this._rects ? this._rects : (this._rects = /* @__PURE__ */ new Map(), this.forEach(function(f) {
            return i._rects.set(f, f.getBoundingClientRect());
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return i._rects = null;
          }, this.Settings.refreshMemoryRate), this._rects);
        }
      }]), s;
    }(/* @__PURE__ */ T(Set)), fn = /* @__PURE__ */ function(u) {
      b(s, u);
      var c = U(s);
      function s(g) {
        var i, f = g.DS;
        return r(this, s), i = c.call(this), o(M(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), o(M(i), "addAll", function(y) {
          return y.forEach(function(w) {
            return i.add(w);
          });
        }), o(M(i), "deleteAll", function(y) {
          return y.forEach(function(w) {
            return i.delete(w);
          });
        }), i.DS = f, i;
      }
      return a(s, [{
        key: "add",
        value: function(i) {
          if (!I(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selected:added:pre", f), I(m(s.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
          }
        }
      }, {
        key: "delete",
        value: function(i) {
          if (!!I(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            this.DS.publish("Selected:removed:pre", f);
            var y = I(m(s.prototype), "delete", this).call(this, i);
            return i.classList.remove(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) - 1), this.DS.publish("Selected:removed", f), y;
          }
        }
      }, {
        key: "toggle",
        value: function(i) {
          return this.has(i) ? this.delete(i) : this.add(i), i;
        }
      }, {
        key: "elements",
        get: function() {
          return Array.from(this.values());
        }
      }]), s;
    }(/* @__PURE__ */ T(Set)), pn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_prevSelectedSet", void 0), o(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (s._storePrevious(f), s._handleInsideSelection(!0, f));
        }), o(this, "update", function(i) {
          var f = i.isDragging;
          f || s.DS.continue || s._handleInsideSelection();
        }), o(this, "_handleInsideSelection", function(i, f) {
          var y = s.DS, w = y.SelectableSet, D = y.SelectorArea, V = y.Selector, W = w.rects, it = [], wt = [], yt = ft(W), Et;
          try {
            for (yt.s(); !(Et = yt.n()).done; ) {
              var at = B(Et.value, 2), _t = at[0], fe = at[1];
              !D.isInside(_t, fe) || (de(fe, V.rect, s.Settings.selectionThreshold) ? it.push(_t) : wt.push(_t));
            }
          } catch (Kt) {
            yt.e(Kt);
          } finally {
            yt.f();
          }
          var Ke = s.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && s.Settings.multiSelectToggling;
          s.DS.continue || (it.forEach(function(Kt) {
            return Qs({
              element: Kt,
              force: i,
              multiSelectionToggle: Ke,
              SelectedSet: s.DS.SelectedSet,
              hoverClassName: s.Settings.hoverClass
            });
          }), wt.forEach(function(Kt) {
            return tn({
              element: Kt,
              force: i,
              SelectedSet: s.DS.SelectedSet,
              hoverClassName: s.Settings.hoverClass,
              PrevSelectedSet: s._prevSelectedSet
            });
          }));
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return a(u, [{
        key: "_storePrevious",
        value: function(s) {
          var g = this.DS, i = g.stores.KeyStore, f = g.SelectedSet;
          i.isMultiSelectKeyPressed(s) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), u;
    }(), gn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_rect", void 0), o(this, "attachSelector", function() {
          var i, f;
          s.HTMLNode && (i = s.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && s.DS.SelectorArea.HTMLNode.removeChild(s.HTMLNode), s.HTMLNode = s.DS.stores.SettingsStore.s.selector || Q(s.DS.stores.SettingsStore.s.customStyles), s.HTMLNode.classList.add(s.DS.stores.SettingsStore.s.selectorClass), s.HTMLNode && (f = s.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && s.DS.SelectorArea.HTMLNode.appendChild(s.HTMLNode);
        }), o(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = s.DS.stores.PointerStore, w = y.initialValArea;
            Mr(s.HTMLNode, R(w, 1)), s.HTMLNode.style.display = "block", s._rect = null;
          }
        }), o(this, "stop", function() {
          s.HTMLNode.style.width = "0", s.HTMLNode.style.height = "0", s.HTMLNode.style.display = "none";
        }), o(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || s.DS.continue)) {
            var y = s.DS.stores, w = y.ScrollStore, D = y.PointerStore, V = Xs({
              scrollAmount: w.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Mr(s.HTMLNode, V), s._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var f = i.settings;
          s.HTMLNode.classList.remove(f["selectorClass:pre"]), s.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(u, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), mn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_scrollInterval", void 0), o(this, "_rect", void 0), o(this, "currentEdges", []), o(this, "start", function() {
          return s.applyElements("append");
        }), o(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          s.HTMLNode[y](s.DS.Selector.HTMLNode), document[f][y](s.HTMLNode);
        }), o(this, "updatePos", function() {
          s._rect = null;
          var i = s.DS.Area.rect, f = s.DS.Area.computedBorder, y = s.HTMLNode.style, w = "".concat(i.top + f.top, "px"), D = "".concat(i.left + f.left, "px"), V = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== w && (y.top = w), y.left !== D && (y.left = D), y.width !== V && (y.width = V), y.height !== W && (y.height = W);
        }), o(this, "stop", function(i) {
          s.stopAutoScroll(), i && s.applyElements("remove");
        }), o(this, "startAutoScroll", function() {
          s.currentEdges = [], s._scrollInterval = setInterval(function() {
            return s.handleAutoScroll();
          }, 16);
        }), o(this, "handleAutoScroll", function() {
          if (!s.DS.continue) {
            var i = s.DS, f = i.stores.PointerStore, y = i.Area;
            s.currentEdges = kr({
              elementRect: R(f.currentVal),
              containerRect: s.rect,
              tolerance: s.DS.stores.SettingsStore.s.overflowTolerance
            }), s.currentEdges.length && y.scroll(s.currentEdges, s.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), o(this, "stopAutoScroll", function() {
          s.currentEdges = [], clearInterval(s._scrollInterval);
        }), o(this, "isInside", function(i, f) {
          return s.DS.Area.HTMLNode.contains(i) && s.DS.stores.ScrollStore.canScroll ? !0 : de(s.rect, f || i.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = pt(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var f = i.settings;
          s.HTMLNode.classList.remove(f["selectorAreaClass:pre"]), s.HTMLNode.classList.add(f.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          s.updatePos(), s.stopAutoScroll();
        });
      }
      return a(u, [{
        key: "isClicked",
        value: function(s) {
          var g = this.DS.stores.PointerStore, i = s ? g.getPointerPosition(s) : g.initialVal;
          return de({
            left: i.x,
            top: i.y,
            right: i.x,
            bottom: i.y
          }, this.rect);
        }
      }, {
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), u;
    }(), vn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_currentValues", /* @__PURE__ */ new Set()), o(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), o(this, "init", function() {
          document.addEventListener("keydown", s.keydown), document.addEventListener("keyup", s.keyup), window.addEventListener("blur", s.reset);
        }), o(this, "keydown", function(i) {
          var f = i.key.toLowerCase();
          s.DS.publish("KeyStore:down:pre", {
            event: i,
            key: f
          }), s._currentValues.add(f), s.DS.publish("KeyStore:down", {
            event: i,
            key: f
          });
        }), o(this, "keyup", function(i) {
          var f = i.key.toLowerCase();
          s.DS.publish("KeyStore:up:pre", {
            event: i,
            key: f
          }), s._currentValues.delete(f), s.DS.publish("KeyStore:up", {
            event: i,
            key: f
          });
        }), o(this, "stop", function() {
          document.removeEventListener("keydown", s.keydown), document.removeEventListener("keyup", s.reset), window.removeEventListener("blur", s.reset), s.reset();
        }), o(this, "reset", function() {
          return s._currentValues.clear();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return a(u, [{
        key: "isMultiSelectKeyPressed",
        value: function(s) {
          var g = this;
          if (this.DS.stores.SettingsStore.s.multiSelectMode)
            return !0;
          var i = this.DS.stores.SettingsStore.s.multiSelectKeys.map(function(f) {
            return f.toLocaleLowerCase();
          });
          return !!(this.currentValues.some(function(f) {
            return i.includes(f.toLocaleLowerCase());
          }) || s && i.some(function(f) {
            return s[g._keyMapping[f]];
          }));
        }
      }, {
        key: "currentValues",
        get: function() {
          return Array.from(this._currentValues.values());
        }
      }]), u;
    }(), bn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_isMouseInteraction", !1), o(this, "_initialValArea", void 0), o(this, "_currentValArea", void 0), o(this, "_lastValArea", void 0), o(this, "_initialVal", void 0), o(this, "_currentVal", void 0), o(this, "_lastVal", void 0), o(this, "_lastTouch", void 0), o(this, "init", function() {
          s.Settings.usePointerEvents ? document.addEventListener("pointermove", s.update, {
            passive: !1
          }) : document.addEventListener("mousemove", s.update), document.addEventListener("touchmove", s.update, {
            passive: !1
          });
        }), o(this, "getPointerPosition", function(i) {
          return Ws({
            event: s._normalizedEvent(i)
          });
        }), o(this, "update", function(i) {
          !i || (s.DS.publish("PointerStore:updated:pre", {
            event: i
          }), s.currentVal = s.getPointerPosition(i), s._isMouseInteraction && s.DS.publish("PointerStore:updated", {
            event: i
          }));
        }), o(this, "stop", function() {
          s.Settings.usePointerEvents ? document.removeEventListener("pointermove", s.update, {
            passive: !1
          }) : document.removeEventListener("mousemove", s.update), document.removeEventListener("touchmove", s.update, {
            passive: !1
          }), setTimeout(function() {
            return s._isMouseInteraction = !1;
          }, 100);
        }), o(this, "reset", function(i) {
          !i || (s.currentVal = s.lastVal = s.getPointerPosition(i), s.stop(), s.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var f = i.event;
          return s.start(f);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var f = i.event;
          return s.reset(f);
        });
      }
      return a(u, [{
        key: "start",
        value: function(s) {
          !s || (this._isMouseInteraction = !0, this.currentVal = this.initialVal = this.getPointerPosition(s));
        }
      }, {
        key: "_normalizedEvent",
        value: function(s) {
          return "touches" in s && s.type !== "touchend" && (this._lastTouch = s), "touches" in s ? this._lastTouch.touches[0] : s;
        }
      }, {
        key: "initialValArea",
        get: function() {
          return this._initialValArea ? this._initialValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentValArea",
        get: function() {
          return this._currentValArea ? this._currentValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "lastValArea",
        get: function() {
          return this._lastValArea ? this._lastValArea : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        },
        set: function(s) {
          this._initialVal = s, this._initialValArea = s && q(s, "-", q($(this.DS.Area.rect), "+", $(this.DS.Area.computedBorder)));
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal ? this._currentVal : {
            x: 0,
            y: 0
          };
        },
        set: function(s) {
          this._currentVal = s, this._currentValArea = s && q(s, "-", q($(this.DS.Area.rect), "+", $(this.DS.Area.computedBorder)));
        }
      }, {
        key: "lastVal",
        get: function() {
          return this._lastVal ? this._lastVal : {
            x: 0,
            y: 0
          };
        },
        set: function(s) {
          this._lastVal = s, this._lastValArea = s && q(s, "-", q($(this.DS.Area.rect), "+", $(this.DS.Area.computedBorder)));
        }
      }]), u;
    }(), yn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this, g = c.DS;
        r(this, u), o(this, "_initialVal", void 0), o(this, "_currentVal", void 0), o(this, "_canScroll", void 0), o(this, "init", function() {
          return s.DS.stores.SettingsStore.s.area.addEventListener("scroll", s.update);
        }), o(this, "start", function() {
          s._currentVal = s._initialVal = Ee(s.DS.stores.SettingsStore.s.area), s.DS.stores.SettingsStore.s.area.addEventListener("scroll", s.update);
        }), o(this, "update", function() {
          return s._currentVal = Ee(s.DS.stores.SettingsStore.s.area);
        }), o(this, "stop", function() {
          s.DS.stores.SettingsStore.s.area.removeEventListener("scroll", s.update), s._initialVal = {
            x: 0,
            y: 0
          }, s._canScroll = null;
        }), o(this, "reset", function() {
          s.stop(), s.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return s.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return s.reset();
        });
      }
      return a(u, [{
        key: "canScroll",
        get: function() {
          return typeof this._canScroll == "boolean" ? this._canScroll : this._canScroll = F(this.DS.stores.SettingsStore.s.area);
        }
      }, {
        key: "scrollAmount",
        get: function() {
          var s = q(this.currentVal, "-", this.initialVal), g = j(this.DS.stores.SettingsStore.s.zoom), i = q(q(s, "*", g), "-", s);
          return {
            x: s.x + i.x,
            y: s.y + i.y
          };
        }
      }, {
        key: "initialVal",
        get: function() {
          return this._initialVal ? this._initialVal : {
            x: 0,
            y: 0
          };
        }
      }, {
        key: "currentVal",
        get: function() {
          return this._currentVal || (this._currentVal = Ee(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), u;
    }(), Sn = function u(c) {
      var s = this, g = c.DS, i = c.settings;
      r(this, u), o(this, "_settings", {}), o(this, "s", {}), o(this, "update", function(f) {
        var y = f.settings, w = f.init;
        return s.DS.publish("Settings:updated:pre", d({
          settings: y
        }, w ? {
          init: w
        } : {}));
      }), o(this, "_update", function(f) {
        for (var y = f.settings, w = f.init, D = en(y, w), V = function() {
          var yt, Et = B(it[W], 2), at = Et[0], _t = Et[1];
          at in s._settings || Object.defineProperty(s.s, at, {
            get: function() {
              return s._settings[at];
            },
            set: function(Kt) {
              return s.update({
                settings: o({}, at, Kt)
              });
            }
          }), s._settings["".concat(at, ":pre")] = s._settings[at], s._settings[at] = _t;
          var fe = {
            settings: (yt = {}, o(yt, at, s._settings[at]), o(yt, "".concat(at, ":pre"), s._settings["".concat(at, ":pre")]), yt)
          };
          s.DS.publish("Settings:updated", fe), s.DS.publish("Settings:updated:".concat(at), fe);
        }, W = 0, it = Object.entries(D); W < it.length; W++)
          V();
      }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
        settings: i,
        init: !0
      });
    }, wn = /* @__PURE__ */ function() {
      function u(c) {
        var s = this;
        r(this, u), o(this, "continue", !1), o(this, "start", function() {
          s.stopped = !1, s.Interaction.init();
        }), o(this, "break", function() {
          return s.continue = !0;
        }), o(this, "setSettings", function(g) {
          return s.stores.SettingsStore.update({
            settings: g
          });
        }), o(this, "getSelection", function() {
          return s.SelectedSet.elements;
        }), o(this, "getSelectables", function() {
          return s.SelectableSet.elements;
        }), o(this, "getInitialCursorPosition", function() {
          return s.stores.PointerStore.initialVal;
        }), o(this, "getCurrentCursorPosition", function() {
          return s.stores.PointerStore.currentVal;
        }), o(this, "getPreviousCursorPosition", function() {
          return s.stores.PointerStore.lastVal;
        }), o(this, "getInitialCursorPositionArea", function() {
          return s.stores.PointerStore.initialValArea;
        }), o(this, "getCurrentCursorPositionArea", function() {
          return s.stores.PointerStore.currentValArea;
        }), o(this, "getPreviousCursorPositionArea", function() {
          return s.stores.PointerStore.lastValArea;
        }), o(this, "isMultiSelect", function(g) {
          return s.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), o(this, "isDragging", function() {
          return s.Interaction.isDragging;
        }), o(this, "getZoneByCoordinates", function(g) {
          var i;
          return (i = s.DropZones.getTarget(g)) === null || i === void 0 ? void 0 : i.toObject();
        }), o(this, "getItemsDroppedByZoneId", function(g) {
          return s.DropZones.getItemsDroppedById(g);
        }), o(this, "getItemsInsideByZoneId", function(g, i) {
          return s.DropZones.getItemsInsideById(g, i);
        }), this.PubSub = new dn({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = {}, this.stores.SettingsStore = new Sn({
          DS: this,
          settings: c
        }), this.stores.PointerStore = new bn({
          DS: this
        }), this.stores.ScrollStore = new yn({
          DS: this
        }), this.stores.KeyStore = new vn({
          DS: this
        }), this.Area = new on({
          DS: this
        }), this.Selector = new gn({
          DS: this
        }), this.SelectorArea = new mn({
          DS: this
        }), this.SelectableSet = new hn({
          DS: this
        }), this.SelectedSet = new fn({
          DS: this
        }), this.Selection = new pn({
          DS: this
        }), this.Drag = new an({
          DS: this
        }), this.DropZones = new cn({
          DS: this
        }), this.Interaction = new un({
          DS: this
        }), nn({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return s.continue = !1;
        }), this.start();
      }
      return a(u, [{
        key: "stop",
        value: function() {
          var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0, g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          i && this.publish("callback", {
            items: this.getSelection()
          }), this.Interaction.stop(), this.Area.stop(), this.Drag.stop(), this.Selector.stop(), this.SelectorArea.stop(s), this.stores.KeyStore.stop(), this.stores.PointerStore.stop(), this.stores.ScrollStore.stop(), s && this.SelectableSet.clear(), g && this.SelectedSet.clear(), this.stopped = !0;
        }
      }, {
        key: "addSelection",
        value: function(s) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.addAll(Ut(s)), i || this.addSelectables(s), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(s) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ut(s)), i && this.removeSelectables(s), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(s) {
          var g = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ut(s).forEach(function(y) {
            return g.SelectedSet.has(y) ? g.removeSelection(s, i, f) : g.addSelection(s, i, f);
          }), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "setSelection",
        value: function(s) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.clearSelection(), this.addSelection(s, g, i), this.getSelection();
        }
      }, {
        key: "clearSelection",
        value: function() {
          var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
          return this.SelectedSet.clear(), s && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "addSelectables",
        value: function(s, g, i) {
          var f = Ut(s);
          return this.SelectableSet.addAll(f), g && this.SelectedSet.addAll(f), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), s;
        }
      }, {
        key: "setSelectables",
        value: function(s) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return console.warn('[DragSelect] DEPRECATION ".setSelectables" is deprecated and will be removed soon. Please use "ds.setSettings({ selectables: << new dom elements >> })" instead (see docs)'), this.removeSelectables(s, g), this.addSelectables(s, i);
        }
      }, {
        key: "removeSelectables",
        value: function(s, g, i) {
          return this.SelectableSet.deleteAll(Ut(s)), g && this.removeSelection(s), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), s;
        }
      }]), u;
    }();
    return wn;
  });
})(Qr);
const ho = Qr.exports, ts = (e, t, r, n, a) => (t = Math, r = t.log, n = 1024, a = r(e) / r(n) | 0, e / t.pow(n, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), es = (e, t = null) => {
  var r;
  return new Date(e * 1e3).toLocaleString((r = t != null ? t : navigator.language) != null ? r : "en-US");
}, fo = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, po = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), go = [
  po
], mo = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, vo = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), bo = [
  vo
], yo = {
  name: "VFSortIcon"
}, Te = /* @__PURE__ */ Object.assign(yo, {
  props: { direction: String },
  setup(e) {
    return (t, r) => (_(), C("div", null, [
      e.direction == "down" ? (_(), C("svg", fo, go)) : X("", !0),
      e.direction == "up" ? (_(), C("svg", mo, bo)) : X("", !0)
    ]));
  }
}), So = ["onClick"], wo = {
  name: "VFToast.vue"
}, _o = /* @__PURE__ */ Object.assign(wo, {
  setup(e) {
    const t = P("emitter"), { getStore: r } = P("storage"), n = L(r("full-screen", !1)), a = (b) => b == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", o = L([]), l = (b) => {
      o.value.splice(b, 1);
    }, d = (b) => {
      let m = o.value.findIndex((h) => h.id === b);
      m !== -1 && l(m);
    };
    return t.on("vf-toast-clear", () => {
      o.value = [];
    }), t.on("vf-toast-push", (b) => {
      let m = new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      b.id = m, o.value.push(b), setTimeout(() => {
        d(m);
      }, 5e3);
    }), (b, m) => (_(), C("div", {
      class: dt([n.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Tt(_n, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: Z(() => [
          (_(!0), C(ut, null, Dt(o.value, (h, v) => (_(), C("div", {
            onClick: (S) => l(v),
            key: h,
            class: dt([a(h.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(h.label), 11, So))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Gt = (e) => Object.entries(e).map((t) => t.map(encodeURIComponent).join("=")).join("&"), { apiUrl: xo } = Lt(), Fe = (e, t) => xo.value + "?" + Gt({ q: "preview", adapter: e, path: t }), Vt = typeof window < "u", rs = Vt && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ss = Vt && "IntersectionObserver" in window, ns = Vt && "classList" in document.createElement("p"), os = Vt && window.devicePixelRatio > 1, ko = {
  elements_selector: ".lazy",
  container: rs || Vt ? document : null,
  threshold: 300,
  thresholds: null,
  data_src: "src",
  data_srcset: "srcset",
  data_sizes: "sizes",
  data_bg: "bg",
  data_bg_hidpi: "bg-hidpi",
  data_bg_multi: "bg-multi",
  data_bg_multi_hidpi: "bg-multi-hidpi",
  data_bg_set: "bg-set",
  data_poster: "poster",
  class_applied: "applied",
  class_loading: "loading",
  class_loaded: "loaded",
  class_error: "error",
  class_entered: "entered",
  class_exited: "exited",
  unobserve_completed: !0,
  unobserve_entered: !1,
  cancel_on_exit: !0,
  callback_enter: null,
  callback_exit: null,
  callback_applied: null,
  callback_loading: null,
  callback_loaded: null,
  callback_error: null,
  callback_finish: null,
  callback_cancel: null,
  use_native: !1,
  restore_on_error: !1
}, is = (e) => Object.assign({}, ko, e), $r = function(e, t) {
  let r;
  const n = "LazyLoad::Initialized", a = new e(t);
  try {
    r = new CustomEvent(n, { detail: { instance: a } });
  } catch {
    r = document.createEvent("CustomEvent"), r.initCustomEvent(n, !1, !1, { instance: a });
  }
  window.dispatchEvent(r);
}, Do = (e, t) => {
  if (!!t)
    if (!t.length)
      $r(e, t);
    else
      for (let r = 0, n; n = t[r]; r += 1)
        $r(e, n);
}, Nt = "src", lr = "srcset", cr = "sizes", as = "poster", xe = "llOriginalAttrs", ls = "data", ur = "loading", cs = "loaded", us = "applied", Co = "entered", dr = "error", ds = "native", hs = "data-", fs = "ll-status", vt = (e, t) => e.getAttribute(hs + t), Eo = (e, t, r) => {
  var n = hs + t;
  if (r === null) {
    e.removeAttribute(n);
    return;
  }
  e.setAttribute(n, r);
}, ke = (e) => vt(e, fs), Jt = (e, t) => Eo(e, fs, t), Re = (e) => Jt(e, null), hr = (e) => ke(e) === null, Mo = (e) => ke(e) === ur, To = (e) => ke(e) === dr, fr = (e) => ke(e) === ds, $o = [ur, cs, us, dr], Ao = (e) => $o.indexOf(ke(e)) >= 0, Bt = (e, t, r, n) => {
  if (!!e) {
    if (n !== void 0) {
      e(t, r, n);
      return;
    }
    if (r !== void 0) {
      e(t, r);
      return;
    }
    e(t);
  }
}, ae = (e, t) => {
  if (ns) {
    e.classList.add(t);
    return;
  }
  e.className += (e.className ? " " : "") + t;
}, Mt = (e, t) => {
  if (ns) {
    e.classList.remove(t);
    return;
  }
  e.className = e.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Io = (e) => {
  e.llTempImage = document.createElement("IMG");
}, Lo = (e) => {
  delete e.llTempImage;
}, ps = (e) => e.llTempImage, He = (e, t) => {
  if (!t)
    return;
  const r = t._observer;
  !r || r.unobserve(e);
}, Oo = (e) => {
  e.disconnect();
}, Po = (e, t, r) => {
  t.unobserve_entered && He(e, r);
}, pr = (e, t) => {
  !e || (e.loadingCount += t);
}, No = (e) => {
  !e || (e.toLoadCount -= 1);
}, gs = (e, t) => {
  !e || (e.toLoadCount = t);
}, jo = (e) => e.loadingCount > 0, zo = (e) => e.toLoadCount > 0, ms = (e) => {
  let t = [];
  for (let r = 0, n; n = e.children[r]; r += 1)
    n.tagName === "SOURCE" && t.push(n);
  return t;
}, gr = (e, t) => {
  const r = e.parentNode;
  if (!r || r.tagName !== "PICTURE")
    return;
  ms(r).forEach(t);
}, vs = (e, t) => {
  ms(e).forEach(t);
}, Ve = [Nt], bs = [Nt, as], Se = [Nt, lr, cr], ys = [ls], Be = (e) => !!e[xe], Ss = (e) => e[xe], ws = (e) => delete e[xe], ne = (e, t) => {
  if (Be(e))
    return;
  const r = {};
  t.forEach((n) => {
    r[n] = e.getAttribute(n);
  }), e[xe] = r;
}, Ro = (e) => {
  Be(e) || (e[xe] = { backgroundImage: e.style.backgroundImage });
}, Ho = (e, t, r) => {
  if (!r) {
    e.removeAttribute(t);
    return;
  }
  e.setAttribute(t, r);
}, qt = (e, t) => {
  if (!Be(e))
    return;
  const r = Ss(e);
  t.forEach((n) => {
    Ho(e, n, r[n]);
  });
}, Vo = (e) => {
  if (!Be(e))
    return;
  const t = Ss(e);
  e.style.backgroundImage = t.backgroundImage;
}, _s = (e, t, r) => {
  ae(e, t.class_applied), Jt(e, us), r && (t.unobserve_completed && He(e, t), Bt(t.callback_applied, e, r));
}, xs = (e, t, r) => {
  ae(e, t.class_loading), Jt(e, ur), r && (pr(r, 1), Bt(t.callback_loading, e, r));
}, Ht = (e, t, r) => {
  !r || e.setAttribute(t, r);
}, Ar = (e, t) => {
  Ht(e, cr, vt(e, t.data_sizes)), Ht(e, lr, vt(e, t.data_srcset)), Ht(e, Nt, vt(e, t.data_src));
}, Bo = (e, t) => {
  gr(e, (r) => {
    ne(r, Se), Ar(r, t);
  }), ne(e, Se), Ar(e, t);
}, Uo = (e, t) => {
  ne(e, Ve), Ht(e, Nt, vt(e, t.data_src));
}, Ko = (e, t) => {
  vs(e, (r) => {
    ne(r, Ve), Ht(r, Nt, vt(r, t.data_src));
  }), ne(e, bs), Ht(e, as, vt(e, t.data_poster)), Ht(e, Nt, vt(e, t.data_src)), e.load();
}, Yo = (e, t) => {
  ne(e, ys), Ht(e, ls, vt(e, t.data_src));
}, Wo = (e, t, r) => {
  const n = vt(e, t.data_bg), a = vt(e, t.data_bg_hidpi), o = os && a ? a : n;
  !o || (e.style.backgroundImage = `url("${o}")`, ps(e).setAttribute(Nt, o), xs(e, t, r));
}, Xo = (e, t, r) => {
  const n = vt(e, t.data_bg_multi), a = vt(e, t.data_bg_multi_hidpi), o = os && a ? a : n;
  !o || (e.style.backgroundImage = o, _s(e, t, r));
}, Zo = (e, t, r) => {
  const n = vt(e, t.data_bg_set);
  if (!n)
    return;
  const a = n.split("|");
  let o = a.map((l) => `image-set(${l})`);
  e.style.backgroundImage = o.join(), e.style.backgroundImage === "" && (o = a.map((l) => `-webkit-image-set(${l})`), e.style.backgroundImage = o.join()), _s(e, t, r);
}, ks = {
  IMG: Bo,
  IFRAME: Uo,
  VIDEO: Ko,
  OBJECT: Yo
}, qo = (e, t) => {
  const r = ks[e.tagName];
  !r || r(e, t);
}, Fo = (e, t, r) => {
  const n = ks[e.tagName];
  !n || (n(e, t), xs(e, t, r));
}, Go = ["IMG", "IFRAME", "VIDEO", "OBJECT"], Jo = (e) => Go.indexOf(e.tagName) > -1, Ds = (e, t) => {
  t && !jo(t) && !zo(t) && Bt(e.callback_finish, t);
}, Ir = (e, t, r) => {
  e.addEventListener(t, r), e.llEvLisnrs[t] = r;
}, Qo = (e, t, r) => {
  e.removeEventListener(t, r);
}, mr = (e) => !!e.llEvLisnrs, ti = (e, t, r) => {
  mr(e) || (e.llEvLisnrs = {});
  const n = e.tagName === "VIDEO" ? "loadeddata" : "load";
  Ir(e, n, t), Ir(e, "error", r);
}, Ge = (e) => {
  if (!mr(e))
    return;
  const t = e.llEvLisnrs;
  for (let r in t) {
    const n = t[r];
    Qo(e, r, n);
  }
  delete e.llEvLisnrs;
}, Cs = (e, t, r) => {
  Lo(e), pr(r, -1), No(r), Mt(e, t.class_loading), t.unobserve_completed && He(e, r);
}, ei = (e, t, r, n) => {
  const a = fr(t);
  Cs(t, r, n), ae(t, r.class_loaded), Jt(t, cs), Bt(r.callback_loaded, t, n), a || Ds(r, n);
}, ri = (e, t, r, n) => {
  const a = fr(t);
  Cs(t, r, n), ae(t, r.class_error), Jt(t, dr), Bt(r.callback_error, t, n), r.restore_on_error && qt(t, Se), a || Ds(r, n);
}, vr = (e, t, r) => {
  const n = ps(e) || e;
  if (mr(n))
    return;
  ti(n, (l) => {
    ei(l, e, t, r), Ge(n);
  }, (l) => {
    ri(l, e, t, r), Ge(n);
  });
}, si = (e, t, r) => {
  Io(e), vr(e, t, r), Ro(e), Wo(e, t, r), Xo(e, t, r), Zo(e, t, r);
}, ni = (e, t, r) => {
  vr(e, t, r), Fo(e, t, r);
}, br = (e, t, r) => {
  Jo(e) ? ni(e, t, r) : si(e, t, r);
}, oi = (e, t, r) => {
  e.setAttribute("loading", "lazy"), vr(e, t, r), qo(e, t), Jt(e, ds);
}, Lr = (e) => {
  e.removeAttribute(Nt), e.removeAttribute(lr), e.removeAttribute(cr);
}, ii = (e) => {
  gr(e, (t) => {
    Lr(t);
  }), Lr(e);
}, Es = (e) => {
  gr(e, (t) => {
    qt(t, Se);
  }), qt(e, Se);
}, ai = (e) => {
  vs(e, (t) => {
    qt(t, Ve);
  }), qt(e, bs), e.load();
}, li = (e) => {
  qt(e, Ve);
}, ci = (e) => {
  qt(e, ys);
}, ui = {
  IMG: Es,
  IFRAME: li,
  VIDEO: ai,
  OBJECT: ci
}, di = (e) => {
  const t = ui[e.tagName];
  if (!t) {
    Vo(e);
    return;
  }
  t(e);
}, hi = (e, t) => {
  hr(e) || fr(e) || (Mt(e, t.class_entered), Mt(e, t.class_exited), Mt(e, t.class_applied), Mt(e, t.class_loading), Mt(e, t.class_loaded), Mt(e, t.class_error));
}, fi = (e, t) => {
  di(e), hi(e, t), Re(e), ws(e);
}, pi = (e, t, r, n) => {
  !r.cancel_on_exit || !Mo(e) || e.tagName === "IMG" && (Ge(e), ii(e), Es(e), Mt(e, r.class_loading), pr(n, -1), Re(e), Bt(r.callback_cancel, e, t, n));
}, gi = (e, t, r, n) => {
  const a = Ao(e);
  Jt(e, Co), ae(e, r.class_entered), Mt(e, r.class_exited), Po(e, r, n), Bt(r.callback_enter, e, t, n), !a && br(e, r, n);
}, mi = (e, t, r, n) => {
  hr(e) || (ae(e, r.class_exited), pi(e, t, r, n), Bt(r.callback_exit, e, t, n));
}, vi = ["IMG", "IFRAME", "VIDEO"], Ms = (e) => e.use_native && "loading" in HTMLImageElement.prototype, bi = (e, t, r) => {
  e.forEach((n) => {
    vi.indexOf(n.tagName) !== -1 && oi(n, t, r);
  }), gs(r, 0);
}, yi = (e) => e.isIntersecting || e.intersectionRatio > 0, Si = (e) => ({
  root: e.container === document ? null : e.container,
  rootMargin: e.thresholds || e.threshold + "px"
}), wi = (e, t, r) => {
  e.forEach(
    (n) => yi(n) ? gi(n.target, n, t, r) : mi(n.target, n, t, r)
  );
}, _i = (e, t) => {
  t.forEach((r) => {
    e.observe(r);
  });
}, xi = (e, t) => {
  Oo(e), _i(e, t);
}, ki = (e, t) => {
  !ss || Ms(e) || (t._observer = new IntersectionObserver((r) => {
    wi(r, e, t);
  }, Si(e)));
}, Ts = (e) => Array.prototype.slice.call(e), Pe = (e) => e.container.querySelectorAll(e.elements_selector), Di = (e) => Ts(e).filter(hr), Ci = (e) => To(e), Ei = (e) => Ts(e).filter(Ci), Or = (e, t) => Di(e || Pe(t)), Mi = (e, t) => {
  Ei(Pe(e)).forEach((n) => {
    Mt(n, e.class_error), Re(n);
  }), t.update();
}, Ti = (e, t) => {
  !Vt || (t._onlineHandler = () => {
    Mi(e, t);
  }, window.addEventListener("online", t._onlineHandler));
}, $i = (e) => {
  !Vt || window.removeEventListener("online", e._onlineHandler);
}, De = function(e, t) {
  const r = is(e);
  this._settings = r, this.loadingCount = 0, ki(r, this), Ti(r, this), this.update(t);
};
De.prototype = {
  update: function(e) {
    const t = this._settings, r = Or(e, t);
    if (gs(this, r.length), rs || !ss) {
      this.loadAll(r);
      return;
    }
    if (Ms(t)) {
      bi(r, t, this);
      return;
    }
    xi(this._observer, r);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), $i(this), Pe(this._settings).forEach((e) => {
      ws(e);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(e) {
    const t = this._settings;
    Or(e, t).forEach((n) => {
      He(n, this), br(n, t, this);
    });
  },
  restoreAll: function() {
    const e = this._settings;
    Pe(e).forEach((t) => {
      fi(t, e);
    });
  }
};
De.load = (e, t) => {
  const r = is(t);
  br(e, r);
};
De.resetStatus = (e) => {
  Re(e);
};
Vt && Do(De, window.lazyLoadOptions);
const Ai = { class: "relative flex-auto flex flex-col overflow-hidden" }, Ii = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Li = { class: "absolute" }, Oi = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Pi = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Ni = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], ji = { class: "grid grid-cols-12 items-center" }, zi = { class: "flex col-span-7 items-center" }, Ri = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Hi = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Vi = [
  Hi
], Bi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ui = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ki = [
  Ui
], Yi = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, Wi = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, Xi = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], Zi = { class: "grid grid-cols-12 items-center" }, qi = { class: "flex col-span-7 items-center" }, Fi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Gi = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Ji = [
  Gi
], Qi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ta = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), ea = [
  ta
], ra = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, sa = { class: "col-span-2 text-center" }, na = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, oa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "onClick", "data-type", "data-item", "data-index"], ia = { class: "relative" }, aa = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, la = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ca = [
  la
], ua = ["data-src", "alt"], da = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ha = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), fa = [
  ha
], pa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, ga = { class: "break-all" }, ma = {
  name: "VFExplorer"
}, va = /* @__PURE__ */ Object.assign(ma, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(e) {
    const t = e, r = P("emitter"), { setStore: n, getStore: a } = P("storage"), o = P("adapter"), l = ($) => $ == null ? void 0 : $.substring(0, 3), d = ($) => $.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), b = L(null), m = L(null), h = L(0), v = L(null), { t: S } = P("i18n"), O = Math.floor(Math.random() * 2 ** 32), T = L(a("full-screen", !1)), M = new De();
    r.on("vf-fullscreen-toggle", () => {
      b.value.style.height = null, T.value = !T.value, n("full-screen", T.value);
    });
    const A = L("");
    r.on("vf-search-query", ({ newQuery: $ }) => {
      A.value = $, $ ? r.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: t.data.adapter,
          path: t.data.dirname,
          filter: $
        },
        onSuccess: (R) => {
          R.files.length || r.emit("vf-toast-push", { label: S("No search result found.") });
        }
      }) : r.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
    });
    let U = null;
    const N = () => {
      U && clearTimeout(U);
    }, I = L(!0), B = ($) => {
      $.touches.length > 1 && (I.value ? (v.value.stop(), r.emit("vf-toast-push", { label: S("Drag&Drop: off") })) : (v.value.start(), r.emit("vf-toast-push", { label: S("Drag&Drop: on") }), r.emit("vf-explorer-update")), I.value = !I.value);
    }, H = ($) => {
      U = setTimeout(() => {
        const R = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: $.target.getBoundingClientRect().x,
          clientY: $.target.getBoundingClientRect().y
        });
        $.target.dispatchEvent(R);
      }, 500);
    }, k = ($) => {
      $.type == "dir" ? (r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: $.path } })) : r.emit("vf-modal-show", { type: "preview", adapter: t.data.adapter, item: $ });
    }, z = Ie({ active: !1, column: "", order: "" }), J = ($ = !0) => {
      let R = [...t.data.files], j = z.column, lt = z.order == "asc" ? 1 : -1;
      if (!$)
        return R;
      const F = (pt, Q) => typeof pt == "string" && typeof Q == "string" ? pt.toLowerCase().localeCompare(Q.toLowerCase()) : pt < Q ? -1 : pt > Q ? 1 : 0;
      return z.active && (R = R.slice().sort((pt, Q) => F(pt[j], Q[j]) * lt)), R;
    }, ot = ($) => {
      z.active && z.column == $ ? (z.active = z.order == "asc", z.column = $, z.order = "desc") : (z.active = !0, z.column = $, z.order = "asc");
    }, rt = () => v.value.getSelection().map(($) => JSON.parse($.dataset.item)), ht = ($, R) => {
      if ($.altKey || $.ctrlKey || $.metaKey)
        return $.preventDefault(), !1;
      $.dataTransfer.setDragImage(m.value, 0, 15), $.dataTransfer.effectAllowed = "all", $.dataTransfer.dropEffect = "copy", $.dataTransfer.setData("items", JSON.stringify(rt()));
    }, St = ($, R) => {
      $.preventDefault();
      let j = JSON.parse($.dataTransfer.getData("items"));
      if (j.find((lt) => lt.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", { type: "move", items: { from: j, to: R } });
    }, bt = ($, R) => {
      $.preventDefault(), !R || R.type !== "dir" || v.value.getSelection().find((j) => j == $.currentTarget) ? ($.dataTransfer.dropEffect = "none", $.dataTransfer.effectAllowed = "none") : $.dataTransfer.dropEffect = "copy";
    }, ft = () => {
      v.value = new ho({
        area: b.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), r.on("vf-explorer-update", () => ze(() => {
        v.value.clearSelection(), v.value.setSelectables(document.getElementsByClassName("vf-item-" + O));
      })), v.value.subscribe("predragstart", ({ event: $, isDragging: R }) => {
        if (R)
          h.value = v.value.getSelection().length, v.value.break();
        else {
          const j = $.target.offsetWidth - $.offsetX, lt = $.target.offsetHeight - $.offsetY;
          j < 15 && lt < 15 && (v.value.clearSelection(), v.value.break());
        }
      }), v.value.subscribe("predragmove", ({ isDragging: $ }) => {
        $ && v.value.break();
      }), v.value.subscribe("callback", ({ items: $, event: R, isDragging: j }) => {
        r.emit("vf-nodes-selected", rt()), h.value = v.value.getSelection().length;
      });
    }, q = ($, R) => {
      r.emit("vf-file-select", R);
    };
    return Ct(ft), xn(() => {
      v.value.Area.reset(), v.value.SelectorArea.updatePos(), M.update();
    }), Ct(() => {
      je(() => t.view, () => r.emit("vf-explorer-update"));
    }), ($, R) => (_(), C("div", Ai, [
      e.view == "list" || A.value.length ? (_(), C("div", Ii, [
        p("div", {
          onClick: R[0] || (R[0] = (j) => ot("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          nt(E(x(S)("Name")) + " ", 1),
          $t(Tt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Me, z.active && z.column == "basename"]
          ])
        ]),
        A.value.length ? X("", !0) : (_(), C("div", {
          key: 0,
          onClick: R[1] || (R[1] = (j) => ot("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          nt(E(x(S)("Size")) + " ", 1),
          $t(Tt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Me, z.active && z.column == "file_size"]
          ])
        ])),
        A.value.length ? X("", !0) : (_(), C("div", {
          key: 1,
          onClick: R[2] || (R[2] = (j) => ot("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          nt(E(x(S)("Date")) + " ", 1),
          $t(Tt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Me, z.active && z.column == "last_modified"]
          ])
        ])),
        A.value.length ? (_(), C("div", {
          key: 2,
          onClick: R[3] || (R[3] = (j) => ot("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          nt(E(x(S)("Filepath")) + " ", 1),
          $t(Tt(Te, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Me, z.active && z.column == "path"]
          ])
        ])) : X("", !0)
      ])) : X("", !0),
      p("div", Li, [
        p("div", {
          ref_key: "dragImage",
          ref: m,
          class: "absolute -z-50 -top-96"
        }, [
          Oi,
          p("div", Pi, E(h.value), 1)
        ], 512)
      ]),
      p("div", {
        onTouchstart: B,
        onContextmenu: R[10] || (R[10] = Zt((j) => x(r).emit("vf-contextmenu-show", { event: j, area: b.value, items: rt() }), ["self", "prevent"])),
        class: dt([T.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[550px] max-h-[80vh] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: b
      }, [
        A.value.length ? (_(!0), C(ut, { key: 0 }, Dt(J(), (j, lt) => (_(), C("div", {
          onDblclick: (F) => k(j),
          onTouchstart: R[4] || (R[4] = (F) => H(F)),
          onTouchend: R[5] || (R[5] = (F) => N()),
          onContextmenu: Zt((F) => x(r).emit("vf-contextmenu-show", { event: F, area: b.value, items: rt(), target: j }), ["prevent"]),
          class: dt(["vf-item-" + x(O), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": lt
        }, [
          p("div", ji, [
            p("div", zi, [
              j.type == "dir" ? (_(), C("svg", Ri, Vi)) : (_(), C("svg", Bi, Ki)),
              p("span", Yi, E(j.basename), 1)
            ]),
            p("div", Wi, E(j.path), 1)
          ])
        ], 42, Ni))), 256)) : X("", !0),
        e.view == "list" && !A.value.length ? (_(!0), C(ut, { key: 1 }, Dt(J(), (j, lt) => (_(), C("div", {
          draggable: "true",
          onDblclick: (F) => k(j),
          onTouchstart: R[6] || (R[6] = (F) => H(F)),
          onTouchend: R[7] || (R[7] = (F) => N()),
          onContextmenu: Zt((F) => x(r).emit("vf-contextmenu-show", { event: F, area: b.value, items: rt(), target: j }), ["prevent"]),
          onDragstart: (F) => ht(F),
          onDragover: (F) => bt(F, j),
          onDrop: (F) => St(F, j),
          class: dt(["vf-item-" + x(O), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": lt
        }, [
          p("div", Zi, [
            p("div", qi, [
              j.type == "dir" ? (_(), C("svg", Fi, Ji)) : (_(), C("svg", Qi, ea)),
              p("span", ra, E(j.basename), 1)
            ]),
            p("div", sa, E(j.file_size ? x(ts)(j.file_size) : ""), 1),
            p("div", na, E(x(es)(j.last_modified)), 1)
          ])
        ], 42, Xi))), 256)) : X("", !0),
        e.view == "grid" && !A.value.length ? (_(!0), C(ut, { key: 2 }, Dt(J(!1), (j, lt) => {
          var F, pt;
          return _(), C("div", {
            draggable: "true",
            onDblclick: (Q) => k(j),
            onTouchstart: R[8] || (R[8] = (Q) => H(Q)),
            onTouchend: R[9] || (R[9] = (Q) => N()),
            onContextmenu: Zt((Q) => x(r).emit("vf-contextmenu-show", { event: Q, area: b.value, items: rt(), target: j }), ["prevent"]),
            onDragstart: (Q) => ht(Q),
            onDragover: (Q) => bt(Q, j),
            onDrop: (Q) => St(Q, j),
            onClick: (Q) => q(Q, j),
            class: dt(["vf-item-" + x(O), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": j.type,
            "data-item": JSON.stringify(j),
            "data-index": lt
          }, [
            p("div", null, [
              p("div", ia, [
                j.type == "dir" ? (_(), C("svg", aa, ca)) : ((F = j.mime_type) != null ? F : "").startsWith("image") ? (_(), C("img", {
                  key: 1,
                  class: "lazy h-10 md:h-12 m-auto",
                  "data-src": x(Fe)(x(o).value, j.path),
                  alt: j.basename
                }, null, 8, ua)) : (_(), C("svg", da, fa)),
                !((pt = j.mime_type) != null ? pt : "").startsWith("image") && j.type != "dir" ? (_(), C("div", pa, E(l(j.extension)), 1)) : X("", !0)
              ]),
              p("span", ga, E(d(j.basename)), 1)
            ])
          ], 42, oa);
        }), 256)) : X("", !0)
      ], 34),
      Tt(_o)
    ]));
  }
}), ba = (e, t = 0, r = !1) => {
  let n;
  return (...a) => {
    r && !n && e(...a), clearTimeout(n), n = setTimeout(() => {
      e(...a);
    }, t);
  };
}, ya = (e, t, r) => {
  const n = L(e);
  return kn((o, l) => ({
    get() {
      return o(), n.value;
    },
    set: ba(
      (d) => {
        n.value = d, l();
      },
      t,
      r
    )
  }));
}, Sa = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, wa = ["aria-label"], _a = /* @__PURE__ */ p("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), xa = [
  _a
], ka = ["aria-label"], Da = /* @__PURE__ */ p("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Ca = [
  Da
], Ea = ["aria-label"], Ma = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Ta = [
  Ma
], $a = ["onClick"], Aa = /* @__PURE__ */ p("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), Ia = [
  Aa
], La = { class: "flex leading-5" }, Oa = /* @__PURE__ */ p("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), Pa = ["title", "onClick"], Na = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, ja = /* @__PURE__ */ p("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), za = /* @__PURE__ */ p("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), Ra = [
  ja,
  za
], Ha = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, Va = /* @__PURE__ */ p("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), Ba = /* @__PURE__ */ p("div", { class: "w-full" }, null, -1), Ua = ["onKeydown", "placeholder"], Ka = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), Ya = [
  Ka
], Wa = {
  name: "VFBreadcrumb"
}, Xa = /* @__PURE__ */ Object.assign(Wa, {
  props: {
    data: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), a = L(null), o = L([]), l = L(!1), d = L(null), { t: b } = P("i18n"), m = P("loadingState");
    r.on("vf-explorer-update", () => {
      var B;
      let N = [], I = [];
      a.value = (B = t.data.dirname) != null ? B : n.value + "://", a.value.length == 0 && (o.value = []), a.value.replace(n.value + "://", "").split("/").forEach(function(H) {
        N.push(H), N.join("/") != "" && I.push({
          basename: H,
          name: H,
          path: n.value + "://" + N.join("/"),
          type: "dir"
        });
      }), I.length > 4 && (I = I.slice(-5), I[0].name = ".."), o.value = I;
    });
    const h = () => {
      l.value = !1, S.value = "";
    };
    r.on("vf-search-exit", () => {
      h();
    });
    const v = () => {
      l.value = !0, ze(() => d.value.focus());
    }, S = ya("", 400), O = () => m.value;
    je(S, (N) => {
      r.emit("vf-toast-clear"), r.emit("vf-search-query", { newQuery: N });
    });
    const T = () => o.value.length && !l.value, M = (N) => {
      var B;
      N.preventDefault();
      let I = JSON.parse(N.dataTransfer.getData("items"));
      if (I.find((H) => H.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", {
        type: "move",
        items: { from: I, to: (B = o.value[o.value.length - 2]) != null ? B : { path: n.value + "://" } }
      });
    }, A = (N) => {
      N.preventDefault(), T() ? N.dataTransfer.dropEffect = "copy" : (N.dataTransfer.dropEffect = "none", N.dataTransfer.effectAllowed = "none");
    }, U = () => {
      S.value == "" && h();
    };
    return (N, I) => (_(), C("div", Sa, [
      p("span", {
        "aria-label": x(b)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onDragover: I[0] || (I[0] = (B) => A(B)),
          onDrop: I[1] || (I[1] = (B) => M(B)),
          onClick: I[2] || (I[2] = (B) => {
            var H, k;
            return !T() || x(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: (k = (H = o.value[o.value.length - 2]) == null ? void 0 : H.path) != null ? k : x(n) + "://" } });
          }),
          class: dt(["h-6 w-6 p-0.5 rounded", T() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, xa, 34))
      ], 8, wa),
      O() ? (_(), C("span", {
        key: 1,
        "aria-label": x(b)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onClick: I[4] || (I[4] = (B) => x(r).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, Ta))
      ], 8, Ea)) : (_(), C("span", {
        key: 0,
        "aria-label": x(b)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (_(), C("svg", {
          onClick: I[3] || (I[3] = (B) => {
            x(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Ca))
      ], 8, ka)),
      l.value ? (_(), C("div", Ha, [
        Va,
        Ba,
        $t(p("input", {
          ref_key: "searchInput",
          ref: d,
          onKeydown: oe(h, ["esc"]),
          onBlur: U,
          "onUpdate:modelValue": I[6] || (I[6] = (B) => Dn(S) ? S.value = B : null),
          placeholder: x(b)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, Ua), [
          [ie, x(S)]
        ]),
        (_(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: h,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, Ya))
      ])) : (_(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Zt(v, ["self"])
      }, [
        (_(), C("svg", {
          onClick: I[5] || (I[5] = (B) => x(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Ia)),
        p("div", La, [
          (_(!0), C(ut, null, Dt(o.value, (B, H) => (_(), C("div", { key: H }, [
            Oa,
            p("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (k) => x(r).emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: B.path } })
            }, E(B.name), 9, Pa)
          ]))), 128))
        ]),
        O() ? (_(), C("svg", Na, Ra)) : X("", !0)
      ], 8, $a))
    ]));
  }
}), Za = ["onClick"], qa = /* @__PURE__ */ p("span", { class: "px-1" }, null, -1), Fa = {
  name: "VFContextMenu"
}, Ga = /* @__PURE__ */ Object.assign(Fa, {
  props: {
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter"), n = L(null), { apiUrl: a } = Lt(), o = Ie({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = L([]);
    r.on("vf-context-selected", (S) => {
      l.value = S;
    });
    const { t: d } = P("i18n"), b = {
      newfolder: {
        title: () => d("New Folder"),
        action: () => {
          r.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => d("Delete"),
        action: () => {
          r.emit("vf-modal-show", { type: "delete", items: l });
        }
      },
      refresh: {
        title: () => d("Refresh"),
        action: () => {
          r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
        }
      },
      preview: {
        title: () => d("Preview"),
        action: () => {
          r.emit("vf-modal-show", { type: "preview", adapter: t.current.adapter, item: l.value[0] });
        }
      },
      open: {
        title: () => d("Open"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].path } });
        }
      },
      openDir: {
        title: () => d("Open containing folder"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: l.value[0].dir } });
        }
      },
      download: {
        title: () => d("Download"),
        action: () => {
          const S = a.value + "?" + Gt({ q: "download", adapter: t.current.adapter, path: l.value[0].path });
          r.emit("vf-download", S);
        }
      },
      archive: {
        title: () => d("Archive"),
        action: () => {
          r.emit("vf-modal-show", { type: "archive", items: l });
        }
      },
      unarchive: {
        title: () => d("Unarchive"),
        action: () => {
          r.emit("vf-modal-show", { type: "unarchive", items: l });
        }
      },
      rename: {
        title: () => d("Rename"),
        action: () => {
          r.emit("vf-modal-show", { type: "rename", items: l });
        }
      }
    }, m = (S) => {
      r.emit("vf-contextmenu-hide"), S.action();
    }, h = L("");
    r.on("vf-search-query", ({ newQuery: S }) => {
      h.value = S;
    }), r.on("vf-contextmenu-show", ({ event: S, area: O, items: T, target: M = null }) => {
      if (o.items = [], h.value)
        if (M)
          o.items.push(b.openDir), r.emit("vf-context-selected", [M]);
        else
          return;
      else
        !M && !h.value ? (o.items.push(b.refresh), o.items.push(b.newfolder), r.emit("vf-context-selected", [])) : T.length > 1 && T.some((A) => A.path === M.path) ? (o.items.push(b.refresh), o.items.push(b.archive), o.items.push(b.delete), r.emit("vf-context-selected", T)) : (M.type == "dir" ? o.items.push(b.open) : (o.items.push(b.preview), o.items.push(b.download)), o.items.push(b.rename), M.mime_type == "application/zip" ? o.items.push(b.unarchive) : o.items.push(b.archive), o.items.push(b.delete), r.emit("vf-context-selected", [M]));
      v(S, O);
    }), r.on("vf-contextmenu-hide", () => {
      o.active = !1;
    });
    const v = (S, O) => {
      o.active = !0, ze(() => {
        let T = O.getBoundingClientRect(), M = S.pageX, A = S.pageY, U = n.value.offsetHeight, N = n.value.offsetWidth;
        M = T.right - S.pageX + window.scrollX < N ? M - N : M, A = T.bottom - S.pageY + window.scrollY < U ? A - U : A, o.positions = {
          left: M + "px",
          top: A + "px"
        };
      });
    };
    return (S, O) => o.active ? (_(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: n,
      style: Jr(o.positions)
    }, [
      (_(!0), C(ut, null, Dt(o.items, (T) => (_(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: T.title,
        onClick: (M) => m(T)
      }, [
        qa,
        p("span", null, E(T.title()), 1)
      ], 8, Za))), 128))
    ], 4)) : X("", !0);
  }
}), Ja = (e, t) => {
  const r = e[t];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((n, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + t)));
  });
};
async function Qa(e) {
  const t = await Ja(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.70efd54a.js"), "../locales/fa.json": () => import("./fa.1da73475.js"), "../locales/ru.json": () => import("./ru.8dbff4f2.js"), "../locales/tr.json": () => import("./tr.78307c97.js") }), `../locales/${e}.json`);
  return JSON.parse(t.default);
}
function tl(e, t, r) {
  const { getStore: n, setStore: a } = qe(e), o = L({}), l = (m) => {
    Qa(m).then((h) => {
      o.value = h, a("locale", m), a("translations", h), r.emit("vf-toast-push", { label: "The language is set to " + m });
    }).catch((h) => {
      r.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), l("en");
    });
  };
  n("locale") ? o.value = n("translations") : l(t);
  const d = (m, ...h) => h.length ? d(m = m.replace("%s", h.shift()), ...h) : m;
  function b(m, ...h) {
    return o.value.hasOwnProperty(m) ? d(o.value[m], ...h) : d(m, ...h);
  }
  return { t: b, changeLocale: l };
}
const el = { class: "vuefinder" }, rl = /* @__PURE__ */ p("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), sl = {
  name: "VueFinder"
}, nl = /* @__PURE__ */ Object.assign(sl, {
  props: {
    url: {
      type: [String]
    },
    id: {
      type: String,
      default: "vf"
    },
    dark: {
      type: Boolean,
      default: !1
    },
    locale: {
      type: String,
      default: "en"
    },
    maxHeight: {
      type: String,
      default: "600px"
    },
    maxFileSize: {
      type: String,
      default: "10mb"
    },
    postData: {
      type: Object,
      default: {}
    }
  },
  emits: ["change"],
  setup(e, { emit: t }) {
    const r = e, n = En(), { setStore: a, getStore: o } = qe(r.id), l = L(o("adapter"));
    Yt("emitter", n), Yt("storage", qe(r.id)), Yt("postData", r.postData), Yt("adapter", l), Yt("maxFileSize", r.maxFileSize);
    const d = tl(r.id, r.locale, n);
    Yt("i18n", d);
    const { apiUrl: b, setApiUrl: m } = Lt();
    m(r.url);
    const h = Ie({ adapter: l.value, storages: [], dirname: ".", files: [] }), v = L(o("viewport", "grid")), S = L(o("darkMode", r.dark));
    n.on("vf-darkMode-toggle", () => {
      S.value = !S.value, a("darkMode", S.value);
    });
    const O = L(!1);
    Yt("loadingState", O);
    const T = L(o("full-screen", !1));
    n.on("vf-fullscreen-toggle", () => {
      T.value = !T.value, a("full-screen", T.value);
    }), n.on("vf-view-toggle", (N) => {
      v.value = N;
    });
    const M = Ie({
      active: !1,
      type: "delete",
      data: {}
    });
    n.on("vf-modal-close", () => {
      M.active = !1;
    }), n.on("vf-modal-show", (N) => {
      M.active = !0, M.type = N.type, M.data = N;
    });
    const A = (N) => {
      Object.assign(h, N), n.emit("vf-nodes-selected", {}), n.emit("vf-explorer-update");
    };
    let U;
    return n.on("vf-fetch-abort", () => {
      U.abort(), O.value = !1;
    }), n.on("vf-file-select", (N) => {
      t("change", N);
    }), n.on("vf-fetch", ({ params: N, onSuccess: I = null, onError: B = null }) => {
      ["index", "search"].includes(N.q) && (U && U.abort(), O.value = !0), U = new AbortController();
      const H = U.signal;
      Oe(b.value, { params: N, signal: H }).then((k) => {
        l.value = k.adapter, ["index", "search"].includes(N.q) && (O.value = !1), n.emit("vf-modal-close"), A(k), I(k);
      }).catch((k) => {
        B && B(k);
      }).finally(() => {
      });
    }), n.on("vf-download", (N) => {
      document.getElementById("download_frame").src = N, n.emit("vf-modal-close");
    }), Ct(() => {
      n.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }), (N, I) => (_(), C("div", el, [
      p("div", {
        class: dt(S.value ? "dark" : "")
      }, [
        p("div", {
          class: dt([T.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: Jr(T.value ? "" : "max-height: " + e.maxHeight),
          onMousedown: I[0] || (I[0] = (B) => x(n).emit("vf-contextmenu-hide")),
          onTouchstart: I[1] || (I[1] = (B) => x(n).emit("vf-contextmenu-hide"))
        }, [
          Tt(co, { data: h }, null, 8, ["data"]),
          Tt(Xa, { data: h }, null, 8, ["data"]),
          Tt(va, {
            view: v.value,
            data: h
          }, null, 8, ["view", "data"])
        ], 38),
        M.active ? (_(), G(Cn("v-f-modal-" + M.type), {
          key: 0,
          selection: M.data,
          current: h
        }, null, 8, ["selection", "current"])) : X("", !0),
        Tt(Ga, { current: h }, null, 8, ["current"]),
        rl
      ], 2)
    ]));
  }
}), ol = /* @__PURE__ */ p("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), il = { class: "fixed z-10 inset-0 overflow-hidden" }, al = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, ll = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, cl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Ot = {
  __name: "ModalLayout",
  setup(e) {
    const t = P("emitter");
    return Ct(() => {
      const r = document.querySelector(".v-f-modal input");
      r && r.focus();
    }), (r, n) => (_(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: n[1] || (n[1] = oe((a) => x(t).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      ol,
      p("div", il, [
        p("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: n[0] || (n[0] = Zt((a) => x(t).emit("vf-modal-close"), ["self"]))
        }, [
          p("div", al, [
            p("div", ll, [
              Ze(r.$slots, "default")
            ]),
            p("div", cl, [
              Ze(r.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, ul = ["aria-label"], dl = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), hl = [
  dl
], fl = {
  name: "Message"
}, Pt = /* @__PURE__ */ Object.assign(fl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(e, { emit: t }) {
    var d;
    const { t: r } = P("i18n"), n = L(!1), a = L(null), o = L((d = a.value) == null ? void 0 : d.strMessage);
    je(o, () => n.value = !1);
    const l = () => {
      t("hidden"), n.value = !0;
    };
    return (b, m) => (_(), C("div", null, [
      n.value ? X("", !0) : (_(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: dt(["flex mt-1 p-1 px-2 rounded text-sm", e.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Ze(b.$slots, "default"),
        p("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": x(r)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, hl, 8, ul)
      ], 2))
    ]));
  }
}), pl = { class: "sm:flex sm:items-start" }, gl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), ml = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, vl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, bl = { class: "mt-2" }, yl = { class: "text-sm text-gray-500" }, Sl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, wl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, _l = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), xl = [
  _l
], kl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Dl = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Cl = [
  Dl
], El = { class: "ml-1.5" }, Ml = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, Tl = {
  name: "VFModalDelete"
}, $l = /* @__PURE__ */ Object.assign(Tl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), o = L(t.selection.items), l = L(""), d = () => {
      o.value.length && r.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(o.value.map(({ path: b, type: m }) => ({ path: b, type: m })))
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (b) => {
          l.value = a(b.message);
        }
      });
    };
    return (b, m) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: d,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Yes, Delete!")), 1),
        p("button", {
          type: "button",
          onClick: m[1] || (m[1] = (h) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1),
        p("div", Ml, E(x(a)("This action cannot be undone.")), 1)
      ]),
      default: Z(() => [
        p("div", pl, [
          gl,
          p("div", ml, [
            p("h3", vl, E(x(a)("Delete files")), 1),
            p("div", bl, [
              p("p", yl, E(x(a)("Are you sure you want to delete these files?")), 1),
              (_(!0), C(ut, null, Dt(o.value, (h) => (_(), C("p", Sl, [
                h.type == "dir" ? (_(), C("svg", wl, xl)) : (_(), C("svg", kl, Cl)),
                p("span", El, E(h.basename), 1)
              ]))), 256)),
              l.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: m[0] || (m[0] = (h) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(l.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Al = { class: "sm:flex sm:items-start" }, Il = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), Ll = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Ol = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Pl = { class: "mt-2" }, Nl = { class: "text-sm text-gray-500" }, jl = {
  name: "VFModalMessage"
}, zl = /* @__PURE__ */ Object.assign(jl, {
  props: {
    selection: Object
  },
  setup(e) {
    const t = P("emitter"), { t: r } = P("i18n");
    return (n, a) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: a[0] || (a[0] = (o) => x(t).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(r)("Close")), 1)
      ]),
      default: Z(() => {
        var o, l, d, b;
        return [
          p("div", Al, [
            Il,
            p("div", Ll, [
              p("h3", Ol, E((l = (o = e.selection) == null ? void 0 : o.title) != null ? l : "Title"), 1),
              p("div", Pl, [
                p("p", Nl, E((b = (d = e.selection) == null ? void 0 : d.message) != null ? b : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), Rl = { class: "sm:flex sm:items-start" }, Hl = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), Vl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Bl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Ul = { class: "mt-2" }, Kl = { class: "text-sm text-gray-500" }, Yl = ["onKeyup", "placeholder"], Wl = {
  name: "VFModalNewFolder"
}, Xl = /* @__PURE__ */ Object.assign(Wl, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), o = L(""), l = L(""), d = () => {
      o.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: n.value,
          path: t.current.dirname,
          name: o.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is created.", o.value) });
        },
        onError: (b) => {
          l.value = a(b.message);
        }
      });
    };
    return (b, m) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: d,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Create")), 1),
        p("button", {
          type: "button",
          onClick: m[2] || (m[2] = (h) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Rl, [
          Hl,
          p("div", Vl, [
            p("h3", Bl, E(x(a)("New Folder")), 1),
            p("div", Ul, [
              p("p", Kl, E(x(a)("Create a new folder")), 1),
              $t(p("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (h) => o.value = h),
                onKeyup: oe(d, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Folder Name"),
                type: "text"
              }, null, 40, Yl), [
                [ie, o.value]
              ]),
              l.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: m[1] || (m[1] = (h) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(l.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Zl = { class: "sm:flex sm:items-start" }, ql = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), Fl = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Gl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Jl = { class: "mt-2" }, Ql = { class: "text-sm text-gray-500" }, tc = ["onKeyup", "placeholder"], ec = {
  name: "VFModalNewFile"
}, rc = /* @__PURE__ */ Object.assign(ec, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), o = L(""), l = L(""), d = () => {
      o.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: n.value,
          path: t.current.dirname,
          name: o.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is created.", o.value) });
        },
        onError: (b) => {
          l.value = a(b.message);
        }
      });
    };
    return (b, m) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: d,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Create")), 1),
        p("button", {
          type: "button",
          onClick: m[2] || (m[2] = (h) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Zl, [
          ql,
          p("div", Fl, [
            p("h3", Gl, E(x(a)("New File")), 1),
            p("div", Jl, [
              p("p", Ql, E(x(a)("Create a new file")), 1),
              $t(p("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (h) => o.value = h),
                onKeyup: oe(d, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("File Name"),
                type: "text"
              }, null, 40, tc), [
                [ie, o.value]
              ]),
              l.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: m[1] || (m[1] = (h) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(l.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), sc = { class: "flex" }, nc = ["aria-label"], oc = { class: "ml-auto mb-2" }, ic = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, ac = { key: 1 }, lc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, n = L(""), a = L(""), o = L(null), l = L(!1), { apiUrl: d } = Lt(), b = L(""), m = L(!1), { t: h } = P("i18n");
    Ct(() => {
      Oe(d.value, {
        params: { q: "preview", adapter: r.selection.adapter, path: r.selection.item.path },
        json: !1
      }).then((T) => {
        n.value = T, t("load");
      });
    });
    const v = () => {
      l.value = !l.value, a.value = n.value, l.value == !0 && ze(() => {
        o.value.focus();
      });
    }, S = P("postData"), O = () => {
      b.value = "", m.value = !1, Oe(d.value, {
        method: "POST",
        params: Object.assign(S, {
          q: "save",
          adapter: r.selection.adapter,
          path: r.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((T) => {
        b.value = h("Updated."), n.value = T, t("load"), l.value = !l.value;
      }).catch((T) => {
        b.value = h(T.message), m.value = !0;
      });
    };
    return (T, M) => (_(), C(ut, null, [
      p("div", sc, [
        p("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(e.selection.item.basename), 9, nc),
        p("div", oc, [
          l.value ? (_(), C("button", {
            key: 0,
            onClick: O,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(h)("Save")), 1)) : X("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (A) => v())
          }, E(l.value ? x(h)("Cancel") : x(h)("Edit")), 1)
        ])
      ]),
      p("div", null, [
        l.value ? (_(), C("div", ac, [
          $t(p("textarea", {
            ref_key: "editInput",
            ref: o,
            "onUpdate:modelValue": M[1] || (M[1] = (A) => a.value = A),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [ie, a.value]
          ])
        ])) : (_(), C("pre", ic, E(n.value), 1)),
        b.value.length ? (_(), G(Pt, {
          key: 2,
          onHidden: M[2] || (M[2] = (A) => b.value = ""),
          error: m.value
        }, {
          default: Z(() => [
            nt(E(b.value), 1)
          ]),
          _: 1
        }, 8, ["error"])) : X("", !0)
      ])
    ], 64));
  }
};
/*!
 * Cropper.js v1.5.13
 * https://fengyuanchen.github.io/cropperjs
 *
 * Copyright 2015-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2022-11-20T05:30:46.114Z
 */
function Pr(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $s(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pr(Object(r), !0).forEach(function(n) {
      dc(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Pr(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Je(e) {
  return Je = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Je(e);
}
function cc(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Nr(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
  }
}
function uc(e, t, r) {
  return t && Nr(e.prototype, t), r && Nr(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function dc(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function As(e) {
  return hc(e) || fc(e) || pc(e) || gc();
}
function hc(e) {
  if (Array.isArray(e))
    return Qe(e);
}
function fc(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function pc(e, t) {
  if (!!e) {
    if (typeof e == "string")
      return Qe(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qe(e, t);
  }
}
function Qe(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function gc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ue = typeof window < "u" && typeof window.document < "u", It = Ue ? window : {}, yr = Ue && It.document.documentElement ? "ontouchstart" in It.document.documentElement : !1, Sr = Ue ? "PointerEvent" in It : !1, tt = "cropper", wr = "all", Is = "crop", Ls = "move", Os = "zoom", Wt = "e", Xt = "w", Qt = "s", jt = "n", ge = "ne", me = "nw", ve = "se", be = "sw", tr = "".concat(tt, "-crop"), jr = "".concat(tt, "-disabled"), mt = "".concat(tt, "-hidden"), zr = "".concat(tt, "-hide"), mc = "".concat(tt, "-invisible"), Ne = "".concat(tt, "-modal"), er = "".concat(tt, "-move"), we = "".concat(tt, "Action"), $e = "".concat(tt, "Preview"), _r = "crop", Ps = "move", Ns = "none", rr = "crop", sr = "cropend", nr = "cropmove", or = "cropstart", Rr = "dblclick", vc = yr ? "touchstart" : "mousedown", bc = yr ? "touchmove" : "mousemove", yc = yr ? "touchend touchcancel" : "mouseup", Hr = Sr ? "pointerdown" : vc, Vr = Sr ? "pointermove" : bc, Br = Sr ? "pointerup pointercancel" : yc, Ur = "ready", Kr = "resize", Yr = "wheel", ir = "zoom", Wr = "image/jpeg", Sc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, wc = /^data:/, _c = /^data:image\/jpeg;base64,/, xc = /^img|canvas$/i, js = 200, zs = 100, Xr = {
  viewMode: 0,
  dragMode: _r,
  initialAspectRatio: NaN,
  aspectRatio: NaN,
  data: null,
  preview: "",
  responsive: !0,
  restore: !0,
  checkCrossOrigin: !0,
  checkOrientation: !0,
  modal: !0,
  guides: !0,
  center: !0,
  highlight: !0,
  background: !0,
  autoCrop: !0,
  autoCropArea: 0.8,
  movable: !0,
  rotatable: !0,
  scalable: !0,
  zoomable: !0,
  zoomOnTouch: !0,
  zoomOnWheel: !0,
  wheelZoomRatio: 0.1,
  cropBoxMovable: !0,
  cropBoxResizable: !0,
  toggleDragModeOnDblclick: !0,
  minCanvasWidth: 0,
  minCanvasHeight: 0,
  minCropBoxWidth: 0,
  minCropBoxHeight: 0,
  minContainerWidth: js,
  minContainerHeight: zs,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, kc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Dc = Number.isNaN || It.isNaN;
function K(e) {
  return typeof e == "number" && !Dc(e);
}
var Zr = function(t) {
  return t > 0 && t < 1 / 0;
};
function Ye(e) {
  return typeof e > "u";
}
function Ft(e) {
  return Je(e) === "object" && e !== null;
}
var Cc = Object.prototype.hasOwnProperty;
function te(e) {
  if (!Ft(e))
    return !1;
  try {
    var t = e.constructor, r = t.prototype;
    return t && r && Cc.call(r, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function gt(e) {
  return typeof e == "function";
}
var Ec = Array.prototype.slice;
function Rs(e) {
  return Array.from ? Array.from(e) : Ec.call(e);
}
function st(e, t) {
  return e && gt(t) && (Array.isArray(e) || K(e.length) ? Rs(e).forEach(function(r, n) {
    t.call(e, r, n, e);
  }) : Ft(e) && Object.keys(e).forEach(function(r) {
    t.call(e, e[r], r, e);
  })), e;
}
var et = Object.assign || function(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    n[a - 1] = arguments[a];
  return Ft(t) && n.length > 0 && n.forEach(function(o) {
    Ft(o) && Object.keys(o).forEach(function(l) {
      t[l] = o[l];
    });
  }), t;
}, Mc = /\.\d*(?:0|9){12}\d*$/;
function re(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return Mc.test(e) ? Math.round(e * t) / t : e;
}
var Tc = /^width|height|left|top|marginLeft|marginTop$/;
function zt(e, t) {
  var r = e.style;
  st(t, function(n, a) {
    Tc.test(a) && K(n) && (n = "".concat(n, "px")), r[a] = n;
  });
}
function $c(e, t) {
  return e.classList ? e.classList.contains(t) : e.className.indexOf(t) > -1;
}
function ct(e, t) {
  if (!!t) {
    if (K(e.length)) {
      st(e, function(n) {
        ct(n, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.add(t);
      return;
    }
    var r = e.className.trim();
    r ? r.indexOf(t) < 0 && (e.className = "".concat(r, " ").concat(t)) : e.className = t;
  }
}
function At(e, t) {
  if (!!t) {
    if (K(e.length)) {
      st(e, function(r) {
        At(r, t);
      });
      return;
    }
    if (e.classList) {
      e.classList.remove(t);
      return;
    }
    e.className.indexOf(t) >= 0 && (e.className = e.className.replace(t, ""));
  }
}
function ee(e, t, r) {
  if (!!t) {
    if (K(e.length)) {
      st(e, function(n) {
        ee(n, t, r);
      });
      return;
    }
    r ? ct(e, t) : At(e, t);
  }
}
var Ac = /([a-z\d])([A-Z])/g;
function xr(e) {
  return e.replace(Ac, "$1-$2").toLowerCase();
}
function ar(e, t) {
  return Ft(e[t]) ? e[t] : e.dataset ? e.dataset[t] : e.getAttribute("data-".concat(xr(t)));
}
function _e(e, t, r) {
  Ft(r) ? e[t] = r : e.dataset ? e.dataset[t] = r : e.setAttribute("data-".concat(xr(t)), r);
}
function Ic(e, t) {
  if (Ft(e[t]))
    try {
      delete e[t];
    } catch {
      e[t] = void 0;
    }
  else if (e.dataset)
    try {
      delete e.dataset[t];
    } catch {
      e.dataset[t] = void 0;
    }
  else
    e.removeAttribute("data-".concat(xr(t)));
}
var Hs = /\s\s*/, Vs = function() {
  var e = !1;
  if (Ue) {
    var t = !1, r = function() {
    }, n = Object.defineProperty({}, "once", {
      get: function() {
        return e = !0, t;
      },
      set: function(o) {
        t = o;
      }
    });
    It.addEventListener("test", r, n), It.removeEventListener("test", r, n);
  }
  return e;
}();
function kt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r;
  t.trim().split(Hs).forEach(function(o) {
    if (!Vs) {
      var l = e.listeners;
      l && l[o] && l[o][r] && (a = l[o][r], delete l[o][r], Object.keys(l[o]).length === 0 && delete l[o], Object.keys(l).length === 0 && delete e.listeners);
    }
    e.removeEventListener(o, a, n);
  });
}
function xt(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r;
  t.trim().split(Hs).forEach(function(o) {
    if (n.once && !Vs) {
      var l = e.listeners, d = l === void 0 ? {} : l;
      a = function() {
        delete d[o][r], e.removeEventListener(o, a, n);
        for (var m = arguments.length, h = new Array(m), v = 0; v < m; v++)
          h[v] = arguments[v];
        r.apply(e, h);
      }, d[o] || (d[o] = {}), d[o][r] && e.removeEventListener(o, d[o][r], n), d[o][r] = a, e.listeners = d;
    }
    e.addEventListener(o, a, n);
  });
}
function se(e, t, r) {
  var n;
  return gt(Event) && gt(CustomEvent) ? n = new CustomEvent(t, {
    detail: r,
    bubbles: !0,
    cancelable: !0
  }) : (n = document.createEvent("CustomEvent"), n.initCustomEvent(t, !0, !0, r)), e.dispatchEvent(n);
}
function Bs(e) {
  var t = e.getBoundingClientRect();
  return {
    left: t.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: t.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var We = It.location, Lc = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function qr(e) {
  var t = e.match(Lc);
  return t !== null && (t[1] !== We.protocol || t[2] !== We.hostname || t[3] !== We.port);
}
function Fr(e) {
  var t = "timestamp=".concat(new Date().getTime());
  return e + (e.indexOf("?") === -1 ? "?" : "&") + t;
}
function ye(e) {
  var t = e.rotate, r = e.scaleX, n = e.scaleY, a = e.translateX, o = e.translateY, l = [];
  K(a) && a !== 0 && l.push("translateX(".concat(a, "px)")), K(o) && o !== 0 && l.push("translateY(".concat(o, "px)")), K(t) && t !== 0 && l.push("rotate(".concat(t, "deg)")), K(r) && r !== 1 && l.push("scaleX(".concat(r, ")")), K(n) && n !== 1 && l.push("scaleY(".concat(n, ")"));
  var d = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: d,
    msTransform: d,
    transform: d
  };
}
function Oc(e) {
  var t = $s({}, e), r = 0;
  return st(e, function(n, a) {
    delete t[a], st(t, function(o) {
      var l = Math.abs(n.startX - o.startX), d = Math.abs(n.startY - o.startY), b = Math.abs(n.endX - o.endX), m = Math.abs(n.endY - o.endY), h = Math.sqrt(l * l + d * d), v = Math.sqrt(b * b + m * m), S = (v - h) / h;
      Math.abs(S) > Math.abs(r) && (r = S);
    });
  }), r;
}
function Ae(e, t) {
  var r = e.pageX, n = e.pageY, a = {
    endX: r,
    endY: n
  };
  return t ? a : $s({
    startX: r,
    startY: n
  }, a);
}
function Pc(e) {
  var t = 0, r = 0, n = 0;
  return st(e, function(a) {
    var o = a.startX, l = a.startY;
    t += o, r += l, n += 1;
  }), t /= n, r /= n, {
    pageX: t,
    pageY: r
  };
}
function Rt(e) {
  var t = e.aspectRatio, r = e.height, n = e.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", o = Zr(n), l = Zr(r);
  if (o && l) {
    var d = r * t;
    a === "contain" && d > n || a === "cover" && d < n ? r = n / t : n = r * t;
  } else
    o ? r = n / t : l && (n = r * t);
  return {
    width: n,
    height: r
  };
}
function Nc(e) {
  var t = e.width, r = e.height, n = e.degree;
  if (n = Math.abs(n) % 180, n === 90)
    return {
      width: r,
      height: t
    };
  var a = n % 90 * Math.PI / 180, o = Math.sin(a), l = Math.cos(a), d = t * l + r * o, b = t * o + r * l;
  return n > 90 ? {
    width: b,
    height: d
  } : {
    width: d,
    height: b
  };
}
function jc(e, t, r, n) {
  var a = t.aspectRatio, o = t.naturalWidth, l = t.naturalHeight, d = t.rotate, b = d === void 0 ? 0 : d, m = t.scaleX, h = m === void 0 ? 1 : m, v = t.scaleY, S = v === void 0 ? 1 : v, O = r.aspectRatio, T = r.naturalWidth, M = r.naturalHeight, A = n.fillColor, U = A === void 0 ? "transparent" : A, N = n.imageSmoothingEnabled, I = N === void 0 ? !0 : N, B = n.imageSmoothingQuality, H = B === void 0 ? "low" : B, k = n.maxWidth, z = k === void 0 ? 1 / 0 : k, J = n.maxHeight, ot = J === void 0 ? 1 / 0 : J, rt = n.minWidth, ht = rt === void 0 ? 0 : rt, St = n.minHeight, bt = St === void 0 ? 0 : St, ft = document.createElement("canvas"), q = ft.getContext("2d"), $ = Rt({
    aspectRatio: O,
    width: z,
    height: ot
  }), R = Rt({
    aspectRatio: O,
    width: ht,
    height: bt
  }, "cover"), j = Math.min($.width, Math.max(R.width, T)), lt = Math.min($.height, Math.max(R.height, M)), F = Rt({
    aspectRatio: a,
    width: z,
    height: ot
  }), pt = Rt({
    aspectRatio: a,
    width: ht,
    height: bt
  }, "cover"), Q = Math.min(F.width, Math.max(pt.width, o)), le = Math.min(F.height, Math.max(pt.height, l)), ce = [-Q / 2, -le / 2, Q, le];
  return ft.width = re(j), ft.height = re(lt), q.fillStyle = U, q.fillRect(0, 0, j, lt), q.save(), q.translate(j / 2, lt / 2), q.rotate(b * Math.PI / 180), q.scale(h, S), q.imageSmoothingEnabled = I, q.imageSmoothingQuality = H, q.drawImage.apply(q, [e].concat(As(ce.map(function(Ce) {
    return Math.floor(re(Ce));
  })))), q.restore(), ft;
}
var Us = String.fromCharCode;
function zc(e, t, r) {
  var n = "";
  r += t;
  for (var a = t; a < r; a += 1)
    n += Us(e.getUint8(a));
  return n;
}
var Rc = /^data:.*,/;
function Hc(e) {
  var t = e.replace(Rc, ""), r = atob(t), n = new ArrayBuffer(r.length), a = new Uint8Array(n);
  return st(a, function(o, l) {
    a[l] = r.charCodeAt(l);
  }), n;
}
function Vc(e, t) {
  for (var r = [], n = 8192, a = new Uint8Array(e); a.length > 0; )
    r.push(Us.apply(null, Rs(a.subarray(0, n)))), a = a.subarray(n);
  return "data:".concat(t, ";base64,").concat(btoa(r.join("")));
}
function Bc(e) {
  var t = new DataView(e), r;
  try {
    var n, a, o;
    if (t.getUint8(0) === 255 && t.getUint8(1) === 216)
      for (var l = t.byteLength, d = 2; d + 1 < l; ) {
        if (t.getUint8(d) === 255 && t.getUint8(d + 1) === 225) {
          a = d;
          break;
        }
        d += 1;
      }
    if (a) {
      var b = a + 4, m = a + 10;
      if (zc(t, b, 4) === "Exif") {
        var h = t.getUint16(m);
        if (n = h === 18761, (n || h === 19789) && t.getUint16(m + 2, n) === 42) {
          var v = t.getUint32(m + 4, n);
          v >= 8 && (o = m + v);
        }
      }
    }
    if (o) {
      var S = t.getUint16(o, n), O, T;
      for (T = 0; T < S; T += 1)
        if (O = o + T * 12 + 2, t.getUint16(O, n) === 274) {
          O += 8, r = t.getUint16(O, n), t.setUint16(O, 1, n);
          break;
        }
    }
  } catch {
    r = 1;
  }
  return r;
}
function Uc(e) {
  var t = 0, r = 1, n = 1;
  switch (e) {
    case 2:
      r = -1;
      break;
    case 3:
      t = -180;
      break;
    case 4:
      n = -1;
      break;
    case 5:
      t = 90, n = -1;
      break;
    case 6:
      t = 90;
      break;
    case 7:
      t = 90, r = -1;
      break;
    case 8:
      t = -90;
      break;
  }
  return {
    rotate: t,
    scaleX: r,
    scaleY: n
  };
}
var Kc = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var t = this.element, r = this.options, n = this.container, a = this.cropper, o = Number(r.minContainerWidth), l = Number(r.minContainerHeight);
    ct(a, mt), At(t, mt);
    var d = {
      width: Math.max(n.offsetWidth, o >= 0 ? o : js),
      height: Math.max(n.offsetHeight, l >= 0 ? l : zs)
    };
    this.containerData = d, zt(a, {
      width: d.width,
      height: d.height
    }), ct(t, mt), At(a, mt);
  },
  initCanvas: function() {
    var t = this.containerData, r = this.imageData, n = this.options.viewMode, a = Math.abs(r.rotate) % 180 === 90, o = a ? r.naturalHeight : r.naturalWidth, l = a ? r.naturalWidth : r.naturalHeight, d = o / l, b = t.width, m = t.height;
    t.height * d > t.width ? n === 3 ? b = t.height * d : m = t.width / d : n === 3 ? m = t.width / d : b = t.height * d;
    var h = {
      aspectRatio: d,
      naturalWidth: o,
      naturalHeight: l,
      width: b,
      height: m
    };
    this.canvasData = h, this.limited = n === 1 || n === 2, this.limitCanvas(!0, !0), h.width = Math.min(Math.max(h.width, h.minWidth), h.maxWidth), h.height = Math.min(Math.max(h.height, h.minHeight), h.maxHeight), h.left = (t.width - h.width) / 2, h.top = (t.height - h.height) / 2, h.oldLeft = h.left, h.oldTop = h.top, this.initialCanvasData = et({}, h);
  },
  limitCanvas: function(t, r) {
    var n = this.options, a = this.containerData, o = this.canvasData, l = this.cropBoxData, d = n.viewMode, b = o.aspectRatio, m = this.cropped && l;
    if (t) {
      var h = Number(n.minCanvasWidth) || 0, v = Number(n.minCanvasHeight) || 0;
      d > 1 ? (h = Math.max(h, a.width), v = Math.max(v, a.height), d === 3 && (v * b > h ? h = v * b : v = h / b)) : d > 0 && (h ? h = Math.max(h, m ? l.width : 0) : v ? v = Math.max(v, m ? l.height : 0) : m && (h = l.width, v = l.height, v * b > h ? h = v * b : v = h / b));
      var S = Rt({
        aspectRatio: b,
        width: h,
        height: v
      });
      h = S.width, v = S.height, o.minWidth = h, o.minHeight = v, o.maxWidth = 1 / 0, o.maxHeight = 1 / 0;
    }
    if (r)
      if (d > (m ? 0 : 1)) {
        var O = a.width - o.width, T = a.height - o.height;
        o.minLeft = Math.min(0, O), o.minTop = Math.min(0, T), o.maxLeft = Math.max(0, O), o.maxTop = Math.max(0, T), m && this.limited && (o.minLeft = Math.min(l.left, l.left + (l.width - o.width)), o.minTop = Math.min(l.top, l.top + (l.height - o.height)), o.maxLeft = l.left, o.maxTop = l.top, d === 2 && (o.width >= a.width && (o.minLeft = Math.min(0, O), o.maxLeft = Math.max(0, O)), o.height >= a.height && (o.minTop = Math.min(0, T), o.maxTop = Math.max(0, T))));
      } else
        o.minLeft = -o.width, o.minTop = -o.height, o.maxLeft = a.width, o.maxTop = a.height;
  },
  renderCanvas: function(t, r) {
    var n = this.canvasData, a = this.imageData;
    if (r) {
      var o = Nc({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), l = o.width, d = o.height, b = n.width * (l / n.naturalWidth), m = n.height * (d / n.naturalHeight);
      n.left -= (b - n.width) / 2, n.top -= (m - n.height) / 2, n.width = b, n.height = m, n.aspectRatio = l / d, n.naturalWidth = l, n.naturalHeight = d, this.limitCanvas(!0, !1);
    }
    (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCanvas(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, zt(this.canvas, et({
      width: n.width,
      height: n.height
    }, ye({
      translateX: n.left,
      translateY: n.top
    }))), this.renderImage(t), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(t) {
    var r = this.canvasData, n = this.imageData, a = n.naturalWidth * (r.width / r.naturalWidth), o = n.naturalHeight * (r.height / r.naturalHeight);
    et(n, {
      width: a,
      height: o,
      left: (r.width - a) / 2,
      top: (r.height - o) / 2
    }), zt(this.image, et({
      width: n.width,
      height: n.height
    }, ye(et({
      translateX: n.left,
      translateY: n.top
    }, n)))), t && this.output();
  },
  initCropBox: function() {
    var t = this.options, r = this.canvasData, n = t.aspectRatio || t.initialAspectRatio, a = Number(t.autoCropArea) || 0.8, o = {
      width: r.width,
      height: r.height
    };
    n && (r.height * n > r.width ? o.height = o.width / n : o.width = o.height * n), this.cropBoxData = o, this.limitCropBox(!0, !0), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), o.width = Math.max(o.minWidth, o.width * a), o.height = Math.max(o.minHeight, o.height * a), o.left = r.left + (r.width - o.width) / 2, o.top = r.top + (r.height - o.height) / 2, o.oldLeft = o.left, o.oldTop = o.top, this.initialCropBoxData = et({}, o);
  },
  limitCropBox: function(t, r) {
    var n = this.options, a = this.containerData, o = this.canvasData, l = this.cropBoxData, d = this.limited, b = n.aspectRatio;
    if (t) {
      var m = Number(n.minCropBoxWidth) || 0, h = Number(n.minCropBoxHeight) || 0, v = d ? Math.min(a.width, o.width, o.width + o.left, a.width - o.left) : a.width, S = d ? Math.min(a.height, o.height, o.height + o.top, a.height - o.top) : a.height;
      m = Math.min(m, a.width), h = Math.min(h, a.height), b && (m && h ? h * b > m ? h = m / b : m = h * b : m ? h = m / b : h && (m = h * b), S * b > v ? S = v / b : v = S * b), l.minWidth = Math.min(m, v), l.minHeight = Math.min(h, S), l.maxWidth = v, l.maxHeight = S;
    }
    r && (d ? (l.minLeft = Math.max(0, o.left), l.minTop = Math.max(0, o.top), l.maxLeft = Math.min(a.width, o.left + o.width) - l.width, l.maxTop = Math.min(a.height, o.top + o.height) - l.height) : (l.minLeft = 0, l.minTop = 0, l.maxLeft = a.width - l.width, l.maxTop = a.height - l.height));
  },
  renderCropBox: function() {
    var t = this.options, r = this.containerData, n = this.cropBoxData;
    (n.width > n.maxWidth || n.width < n.minWidth) && (n.left = n.oldLeft), (n.height > n.maxHeight || n.height < n.minHeight) && (n.top = n.oldTop), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), this.limitCropBox(!1, !0), n.left = Math.min(Math.max(n.left, n.minLeft), n.maxLeft), n.top = Math.min(Math.max(n.top, n.minTop), n.maxTop), n.oldLeft = n.left, n.oldTop = n.top, t.movable && t.cropBoxMovable && _e(this.face, we, n.width >= r.width && n.height >= r.height ? Ls : wr), zt(this.cropBox, et({
      width: n.width,
      height: n.height
    }, ye({
      translateX: n.left,
      translateY: n.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), se(this.element, rr, this.getData());
  }
}, Yc = {
  initPreview: function() {
    var t = this.element, r = this.crossOrigin, n = this.options.preview, a = r ? this.crossOriginUrl : this.url, o = t.alt || "The image to preview", l = document.createElement("img");
    if (r && (l.crossOrigin = r), l.src = a, l.alt = o, this.viewBox.appendChild(l), this.viewBoxImage = l, !!n) {
      var d = n;
      typeof n == "string" ? d = t.ownerDocument.querySelectorAll(n) : n.querySelector && (d = [n]), this.previews = d, st(d, function(b) {
        var m = document.createElement("img");
        _e(b, $e, {
          width: b.offsetWidth,
          height: b.offsetHeight,
          html: b.innerHTML
        }), r && (m.crossOrigin = r), m.src = a, m.alt = o, m.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', b.innerHTML = "", b.appendChild(m);
      });
    }
  },
  resetPreview: function() {
    st(this.previews, function(t) {
      var r = ar(t, $e);
      zt(t, {
        width: r.width,
        height: r.height
      }), t.innerHTML = r.html, Ic(t, $e);
    });
  },
  preview: function() {
    var t = this.imageData, r = this.canvasData, n = this.cropBoxData, a = n.width, o = n.height, l = t.width, d = t.height, b = n.left - r.left - t.left, m = n.top - r.top - t.top;
    !this.cropped || this.disabled || (zt(this.viewBoxImage, et({
      width: l,
      height: d
    }, ye(et({
      translateX: -b,
      translateY: -m
    }, t)))), st(this.previews, function(h) {
      var v = ar(h, $e), S = v.width, O = v.height, T = S, M = O, A = 1;
      a && (A = S / a, M = o * A), o && M > O && (A = O / o, T = a * A, M = O), zt(h, {
        width: T,
        height: M
      }), zt(h.getElementsByTagName("img")[0], et({
        width: l * A,
        height: d * A
      }, ye(et({
        translateX: -b * A,
        translateY: -m * A
      }, t))));
    }));
  }
}, Wc = {
  bind: function() {
    var t = this.element, r = this.options, n = this.cropper;
    gt(r.cropstart) && xt(t, or, r.cropstart), gt(r.cropmove) && xt(t, nr, r.cropmove), gt(r.cropend) && xt(t, sr, r.cropend), gt(r.crop) && xt(t, rr, r.crop), gt(r.zoom) && xt(t, ir, r.zoom), xt(n, Hr, this.onCropStart = this.cropStart.bind(this)), r.zoomable && r.zoomOnWheel && xt(n, Yr, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && xt(n, Rr, this.onDblclick = this.dblclick.bind(this)), xt(t.ownerDocument, Vr, this.onCropMove = this.cropMove.bind(this)), xt(t.ownerDocument, Br, this.onCropEnd = this.cropEnd.bind(this)), r.responsive && xt(window, Kr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var t = this.element, r = this.options, n = this.cropper;
    gt(r.cropstart) && kt(t, or, r.cropstart), gt(r.cropmove) && kt(t, nr, r.cropmove), gt(r.cropend) && kt(t, sr, r.cropend), gt(r.crop) && kt(t, rr, r.crop), gt(r.zoom) && kt(t, ir, r.zoom), kt(n, Hr, this.onCropStart), r.zoomable && r.zoomOnWheel && kt(n, Yr, this.onWheel, {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && kt(n, Rr, this.onDblclick), kt(t.ownerDocument, Vr, this.onCropMove), kt(t.ownerDocument, Br, this.onCropEnd), r.responsive && kt(window, Kr, this.onResize);
  }
}, Xc = {
  resize: function() {
    if (!this.disabled) {
      var t = this.options, r = this.container, n = this.containerData, a = r.offsetWidth / n.width, o = r.offsetHeight / n.height, l = Math.abs(a - 1) > Math.abs(o - 1) ? a : o;
      if (l !== 1) {
        var d, b;
        t.restore && (d = this.getCanvasData(), b = this.getCropBoxData()), this.render(), t.restore && (this.setCanvasData(st(d, function(m, h) {
          d[h] = m * l;
        })), this.setCropBoxData(st(b, function(m, h) {
          b[h] = m * l;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === Ns || this.setDragMode($c(this.dragBox, tr) ? Ps : _r);
  },
  wheel: function(t) {
    var r = this, n = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (t.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      r.wheeling = !1;
    }, 50), t.deltaY ? a = t.deltaY > 0 ? 1 : -1 : t.wheelDelta ? a = -t.wheelDelta / 120 : t.detail && (a = t.detail > 0 ? 1 : -1), this.zoom(-a * n, t)));
  },
  cropStart: function(t) {
    var r = t.buttons, n = t.button;
    if (!(this.disabled || (t.type === "mousedown" || t.type === "pointerdown" && t.pointerType === "mouse") && (K(r) && r !== 1 || K(n) && n !== 0 || t.ctrlKey))) {
      var a = this.options, o = this.pointers, l;
      t.changedTouches ? st(t.changedTouches, function(d) {
        o[d.identifier] = Ae(d);
      }) : o[t.pointerId || 0] = Ae(t), Object.keys(o).length > 1 && a.zoomable && a.zoomOnTouch ? l = Os : l = ar(t.target, we), !!Sc.test(l) && se(this.element, or, {
        originalEvent: t,
        action: l
      }) !== !1 && (t.preventDefault(), this.action = l, this.cropping = !1, l === Is && (this.cropping = !0, ct(this.dragBox, Ne)));
    }
  },
  cropMove: function(t) {
    var r = this.action;
    if (!(this.disabled || !r)) {
      var n = this.pointers;
      t.preventDefault(), se(this.element, nr, {
        originalEvent: t,
        action: r
      }) !== !1 && (t.changedTouches ? st(t.changedTouches, function(a) {
        et(n[a.identifier] || {}, Ae(a, !0));
      }) : et(n[t.pointerId || 0] || {}, Ae(t, !0)), this.change(t));
    }
  },
  cropEnd: function(t) {
    if (!this.disabled) {
      var r = this.action, n = this.pointers;
      t.changedTouches ? st(t.changedTouches, function(a) {
        delete n[a.identifier];
      }) : delete n[t.pointerId || 0], r && (t.preventDefault(), Object.keys(n).length || (this.action = ""), this.cropping && (this.cropping = !1, ee(this.dragBox, Ne, this.cropped && this.options.modal)), se(this.element, sr, {
        originalEvent: t,
        action: r
      }));
    }
  }
}, Zc = {
  change: function(t) {
    var r = this.options, n = this.canvasData, a = this.containerData, o = this.cropBoxData, l = this.pointers, d = this.action, b = r.aspectRatio, m = o.left, h = o.top, v = o.width, S = o.height, O = m + v, T = h + S, M = 0, A = 0, U = a.width, N = a.height, I = !0, B;
    !b && t.shiftKey && (b = v && S ? v / S : 1), this.limited && (M = o.minLeft, A = o.minTop, U = M + Math.min(a.width, n.width, n.left + n.width), N = A + Math.min(a.height, n.height, n.top + n.height));
    var H = l[Object.keys(l)[0]], k = {
      x: H.endX - H.startX,
      y: H.endY - H.startY
    }, z = function(ot) {
      switch (ot) {
        case Wt:
          O + k.x > U && (k.x = U - O);
          break;
        case Xt:
          m + k.x < M && (k.x = M - m);
          break;
        case jt:
          h + k.y < A && (k.y = A - h);
          break;
        case Qt:
          T + k.y > N && (k.y = N - T);
          break;
      }
    };
    switch (d) {
      case wr:
        m += k.x, h += k.y;
        break;
      case Wt:
        if (k.x >= 0 && (O >= U || b && (h <= A || T >= N))) {
          I = !1;
          break;
        }
        z(Wt), v += k.x, v < 0 && (d = Xt, v = -v, m -= v), b && (S = v / b, h += (o.height - S) / 2);
        break;
      case jt:
        if (k.y <= 0 && (h <= A || b && (m <= M || O >= U))) {
          I = !1;
          break;
        }
        z(jt), S -= k.y, h += k.y, S < 0 && (d = Qt, S = -S, h -= S), b && (v = S * b, m += (o.width - v) / 2);
        break;
      case Xt:
        if (k.x <= 0 && (m <= M || b && (h <= A || T >= N))) {
          I = !1;
          break;
        }
        z(Xt), v -= k.x, m += k.x, v < 0 && (d = Wt, v = -v, m -= v), b && (S = v / b, h += (o.height - S) / 2);
        break;
      case Qt:
        if (k.y >= 0 && (T >= N || b && (m <= M || O >= U))) {
          I = !1;
          break;
        }
        z(Qt), S += k.y, S < 0 && (d = jt, S = -S, h -= S), b && (v = S * b, m += (o.width - v) / 2);
        break;
      case ge:
        if (b) {
          if (k.y <= 0 && (h <= A || O >= U)) {
            I = !1;
            break;
          }
          z(jt), S -= k.y, h += k.y, v = S * b;
        } else
          z(jt), z(Wt), k.x >= 0 ? O < U ? v += k.x : k.y <= 0 && h <= A && (I = !1) : v += k.x, k.y <= 0 ? h > A && (S -= k.y, h += k.y) : (S -= k.y, h += k.y);
        v < 0 && S < 0 ? (d = be, S = -S, v = -v, h -= S, m -= v) : v < 0 ? (d = me, v = -v, m -= v) : S < 0 && (d = ve, S = -S, h -= S);
        break;
      case me:
        if (b) {
          if (k.y <= 0 && (h <= A || m <= M)) {
            I = !1;
            break;
          }
          z(jt), S -= k.y, h += k.y, v = S * b, m += o.width - v;
        } else
          z(jt), z(Xt), k.x <= 0 ? m > M ? (v -= k.x, m += k.x) : k.y <= 0 && h <= A && (I = !1) : (v -= k.x, m += k.x), k.y <= 0 ? h > A && (S -= k.y, h += k.y) : (S -= k.y, h += k.y);
        v < 0 && S < 0 ? (d = ve, S = -S, v = -v, h -= S, m -= v) : v < 0 ? (d = ge, v = -v, m -= v) : S < 0 && (d = be, S = -S, h -= S);
        break;
      case be:
        if (b) {
          if (k.x <= 0 && (m <= M || T >= N)) {
            I = !1;
            break;
          }
          z(Xt), v -= k.x, m += k.x, S = v / b;
        } else
          z(Qt), z(Xt), k.x <= 0 ? m > M ? (v -= k.x, m += k.x) : k.y >= 0 && T >= N && (I = !1) : (v -= k.x, m += k.x), k.y >= 0 ? T < N && (S += k.y) : S += k.y;
        v < 0 && S < 0 ? (d = ge, S = -S, v = -v, h -= S, m -= v) : v < 0 ? (d = ve, v = -v, m -= v) : S < 0 && (d = me, S = -S, h -= S);
        break;
      case ve:
        if (b) {
          if (k.x >= 0 && (O >= U || T >= N)) {
            I = !1;
            break;
          }
          z(Wt), v += k.x, S = v / b;
        } else
          z(Qt), z(Wt), k.x >= 0 ? O < U ? v += k.x : k.y >= 0 && T >= N && (I = !1) : v += k.x, k.y >= 0 ? T < N && (S += k.y) : S += k.y;
        v < 0 && S < 0 ? (d = me, S = -S, v = -v, h -= S, m -= v) : v < 0 ? (d = be, v = -v, m -= v) : S < 0 && (d = ge, S = -S, h -= S);
        break;
      case Ls:
        this.move(k.x, k.y), I = !1;
        break;
      case Os:
        this.zoom(Oc(l), t), I = !1;
        break;
      case Is:
        if (!k.x || !k.y) {
          I = !1;
          break;
        }
        B = Bs(this.cropper), m = H.startX - B.left, h = H.startY - B.top, v = o.minWidth, S = o.minHeight, k.x > 0 ? d = k.y > 0 ? ve : ge : k.x < 0 && (m -= v, d = k.y > 0 ? be : me), k.y < 0 && (h -= S), this.cropped || (At(this.cropBox, mt), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    I && (o.width = v, o.height = S, o.left = m, o.top = h, this.action = d, this.renderCropBox()), st(l, function(J) {
      J.startX = J.endX, J.startY = J.endY;
    });
  }
}, qc = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ct(this.dragBox, Ne), At(this.cropBox, mt), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = et({}, this.initialImageData), this.canvasData = et({}, this.initialCanvasData), this.cropBoxData = et({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (et(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), At(this.dragBox, Ne), ct(this.cropBox, mt)), this;
  },
  replace: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && t && (this.isImg && (this.element.src = t), r ? (this.url = t, this.image.src = t, this.ready && (this.viewBoxImage.src = t, st(this.previews, function(n) {
      n.getElementsByTagName("img")[0].src = t;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(t))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, At(this.cropper, jr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ct(this.cropper, jr)), this;
  },
  destroy: function() {
    var t = this.element;
    return t[tt] ? (t[tt] = void 0, this.isImg && this.replaced && (t.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.canvasData, a = n.left, o = n.top;
    return this.moveTo(Ye(t) ? t : a + Number(t), Ye(r) ? r : o + Number(r));
  },
  moveTo: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.canvasData, a = !1;
    return t = Number(t), r = Number(r), this.ready && !this.disabled && this.options.movable && (K(t) && (n.left = t, a = !0), K(r) && (n.top = r, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(t, r) {
    var n = this.canvasData;
    return t = Number(t), t < 0 ? t = 1 / (1 - t) : t = 1 + t, this.zoomTo(n.width * t / n.naturalWidth, null, r);
  },
  zoomTo: function(t, r, n) {
    var a = this.options, o = this.canvasData, l = o.width, d = o.height, b = o.naturalWidth, m = o.naturalHeight;
    if (t = Number(t), t >= 0 && this.ready && !this.disabled && a.zoomable) {
      var h = b * t, v = m * t;
      if (se(this.element, ir, {
        ratio: t,
        oldRatio: l / b,
        originalEvent: n
      }) === !1)
        return this;
      if (n) {
        var S = this.pointers, O = Bs(this.cropper), T = S && Object.keys(S).length ? Pc(S) : {
          pageX: n.pageX,
          pageY: n.pageY
        };
        o.left -= (h - l) * ((T.pageX - O.left - o.left) / l), o.top -= (v - d) * ((T.pageY - O.top - o.top) / d);
      } else
        te(r) && K(r.x) && K(r.y) ? (o.left -= (h - l) * ((r.x - o.left) / l), o.top -= (v - d) * ((r.y - o.top) / d)) : (o.left -= (h - l) / 2, o.top -= (v - d) / 2);
      o.width = h, o.height = v, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(t) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(t));
  },
  rotateTo: function(t) {
    return t = Number(t), K(t) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = t % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(t) {
    var r = this.imageData.scaleY;
    return this.scale(t, K(r) ? r : 1);
  },
  scaleY: function(t) {
    var r = this.imageData.scaleX;
    return this.scale(K(r) ? r : 1, t);
  },
  scale: function(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : t, n = this.imageData, a = !1;
    return t = Number(t), r = Number(r), this.ready && !this.disabled && this.options.scalable && (K(t) && (n.scaleX = t, a = !0), K(r) && (n.scaleY = r, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = this.options, n = this.imageData, a = this.canvasData, o = this.cropBoxData, l;
    if (this.ready && this.cropped) {
      l = {
        x: o.left - a.left,
        y: o.top - a.top,
        width: o.width,
        height: o.height
      };
      var d = n.width / n.naturalWidth;
      if (st(l, function(h, v) {
        l[v] = h / d;
      }), t) {
        var b = Math.round(l.y + l.height), m = Math.round(l.x + l.width);
        l.x = Math.round(l.x), l.y = Math.round(l.y), l.width = m - l.x, l.height = b - l.y;
      }
    } else
      l = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return r.rotatable && (l.rotate = n.rotate || 0), r.scalable && (l.scaleX = n.scaleX || 1, l.scaleY = n.scaleY || 1), l;
  },
  setData: function(t) {
    var r = this.options, n = this.imageData, a = this.canvasData, o = {};
    if (this.ready && !this.disabled && te(t)) {
      var l = !1;
      r.rotatable && K(t.rotate) && t.rotate !== n.rotate && (n.rotate = t.rotate, l = !0), r.scalable && (K(t.scaleX) && t.scaleX !== n.scaleX && (n.scaleX = t.scaleX, l = !0), K(t.scaleY) && t.scaleY !== n.scaleY && (n.scaleY = t.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var d = n.width / n.naturalWidth;
      K(t.x) && (o.left = t.x * d + a.left), K(t.y) && (o.top = t.y * d + a.top), K(t.width) && (o.width = t.width * d), K(t.height) && (o.height = t.height * d), this.setCropBoxData(o);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? et({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? et({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var t = this.canvasData, r = {};
    return this.ready && st(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(n) {
      r[n] = t[n];
    }), r;
  },
  setCanvasData: function(t) {
    var r = this.canvasData, n = r.aspectRatio;
    return this.ready && !this.disabled && te(t) && (K(t.left) && (r.left = t.left), K(t.top) && (r.top = t.top), K(t.width) ? (r.width = t.width, r.height = t.width / n) : K(t.height) && (r.height = t.height, r.width = t.height * n), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var t = this.cropBoxData, r;
    return this.ready && this.cropped && (r = {
      left: t.left,
      top: t.top,
      width: t.width,
      height: t.height
    }), r || {};
  },
  setCropBoxData: function(t) {
    var r = this.cropBoxData, n = this.options.aspectRatio, a, o;
    return this.ready && this.cropped && !this.disabled && te(t) && (K(t.left) && (r.left = t.left), K(t.top) && (r.top = t.top), K(t.width) && t.width !== r.width && (a = !0, r.width = t.width), K(t.height) && t.height !== r.height && (o = !0, r.height = t.height), n && (a ? r.height = r.width / n : o && (r.width = r.height * n)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var r = this.canvasData, n = jc(this.image, this.imageData, r, t);
    if (!this.cropped)
      return n;
    var a = this.getData(), o = a.x, l = a.y, d = a.width, b = a.height, m = n.width / Math.floor(r.naturalWidth);
    m !== 1 && (o *= m, l *= m, d *= m, b *= m);
    var h = d / b, v = Rt({
      aspectRatio: h,
      width: t.maxWidth || 1 / 0,
      height: t.maxHeight || 1 / 0
    }), S = Rt({
      aspectRatio: h,
      width: t.minWidth || 0,
      height: t.minHeight || 0
    }, "cover"), O = Rt({
      aspectRatio: h,
      width: t.width || (m !== 1 ? n.width : d),
      height: t.height || (m !== 1 ? n.height : b)
    }), T = O.width, M = O.height;
    T = Math.min(v.width, Math.max(S.width, T)), M = Math.min(v.height, Math.max(S.height, M));
    var A = document.createElement("canvas"), U = A.getContext("2d");
    A.width = re(T), A.height = re(M), U.fillStyle = t.fillColor || "transparent", U.fillRect(0, 0, T, M);
    var N = t.imageSmoothingEnabled, I = N === void 0 ? !0 : N, B = t.imageSmoothingQuality;
    U.imageSmoothingEnabled = I, B && (U.imageSmoothingQuality = B);
    var H = n.width, k = n.height, z = o, J = l, ot, rt, ht, St, bt, ft;
    z <= -d || z > H ? (z = 0, ot = 0, ht = 0, bt = 0) : z <= 0 ? (ht = -z, z = 0, ot = Math.min(H, d + z), bt = ot) : z <= H && (ht = 0, ot = Math.min(d, H - z), bt = ot), ot <= 0 || J <= -b || J > k ? (J = 0, rt = 0, St = 0, ft = 0) : J <= 0 ? (St = -J, J = 0, rt = Math.min(k, b + J), ft = rt) : J <= k && (St = 0, rt = Math.min(b, k - J), ft = rt);
    var q = [z, J, ot, rt];
    if (bt > 0 && ft > 0) {
      var $ = T / d;
      q.push(ht * $, St * $, bt * $, ft * $);
    }
    return U.drawImage.apply(U, [n].concat(As(q.map(function(R) {
      return Math.floor(re(R));
    })))), A;
  },
  setAspectRatio: function(t) {
    var r = this.options;
    return !this.disabled && !Ye(t) && (r.aspectRatio = Math.max(0, t) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(t) {
    var r = this.options, n = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var o = t === _r, l = r.movable && t === Ps;
      t = o || l ? t : Ns, r.dragMode = t, _e(n, we, t), ee(n, tr, o), ee(n, er, l), r.cropBoxMovable || (_e(a, we, t), ee(a, tr, o), ee(a, er, l));
    }
    return this;
  }
}, Fc = It.Cropper, Ks = /* @__PURE__ */ function() {
  function e(t) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (cc(this, e), !t || !xc.test(t.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = t, this.options = et({}, Xr, te(r) && r), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return uc(e, [{
    key: "init",
    value: function() {
      var r = this.element, n = r.tagName.toLowerCase(), a;
      if (!r[tt]) {
        if (r[tt] = this, n === "img") {
          if (this.isImg = !0, a = r.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = r.src;
        } else
          n === "canvas" && window.HTMLCanvasElement && (a = r.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(r) {
      var n = this;
      if (!!r) {
        this.url = r, this.imageData = {};
        var a = this.element, o = this.options;
        if (!o.rotatable && !o.scalable && (o.checkOrientation = !1), !o.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (wc.test(r)) {
          _c.test(r) ? this.read(Hc(r)) : this.clone();
          return;
        }
        var l = new XMLHttpRequest(), d = this.clone.bind(this);
        this.reloading = !0, this.xhr = l, l.onabort = d, l.onerror = d, l.ontimeout = d, l.onprogress = function() {
          l.getResponseHeader("content-type") !== Wr && l.abort();
        }, l.onload = function() {
          n.read(l.response);
        }, l.onloadend = function() {
          n.reloading = !1, n.xhr = null;
        }, o.checkCrossOrigin && qr(r) && a.crossOrigin && (r = Fr(r)), l.open("GET", r, !0), l.responseType = "arraybuffer", l.withCredentials = a.crossOrigin === "use-credentials", l.send();
      }
    }
  }, {
    key: "read",
    value: function(r) {
      var n = this.options, a = this.imageData, o = Bc(r), l = 0, d = 1, b = 1;
      if (o > 1) {
        this.url = Vc(r, Wr);
        var m = Uc(o);
        l = m.rotate, d = m.scaleX, b = m.scaleY;
      }
      n.rotatable && (a.rotate = l), n.scalable && (a.scaleX = d, a.scaleY = b), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var r = this.element, n = this.url, a = r.crossOrigin, o = n;
      this.options.checkCrossOrigin && qr(n) && (a || (a = "anonymous"), o = Fr(n)), this.crossOrigin = a, this.crossOriginUrl = o;
      var l = document.createElement("img");
      a && (l.crossOrigin = a), l.src = o || n, l.alt = r.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), ct(l, zr), r.parentNode.insertBefore(l, r.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var r = this, n = this.image;
      n.onload = null, n.onerror = null, this.sizing = !0;
      var a = It.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(It.navigator.userAgent), o = function(m, h) {
        et(r.imageData, {
          naturalWidth: m,
          naturalHeight: h,
          aspectRatio: m / h
        }), r.initialImageData = et({}, r.imageData), r.sizing = !1, r.sized = !0, r.build();
      };
      if (n.naturalWidth && !a) {
        o(n.naturalWidth, n.naturalHeight);
        return;
      }
      var l = document.createElement("img"), d = document.body || document.documentElement;
      this.sizingImage = l, l.onload = function() {
        o(l.width, l.height), a || d.removeChild(l);
      }, l.src = n.src, a || (l.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", d.appendChild(l));
    }
  }, {
    key: "stop",
    value: function() {
      var r = this.image;
      r.onload = null, r.onerror = null, r.parentNode.removeChild(r), this.image = null;
    }
  }, {
    key: "build",
    value: function() {
      if (!(!this.sized || this.ready)) {
        var r = this.element, n = this.options, a = this.image, o = r.parentNode, l = document.createElement("div");
        l.innerHTML = kc;
        var d = l.querySelector(".".concat(tt, "-container")), b = d.querySelector(".".concat(tt, "-canvas")), m = d.querySelector(".".concat(tt, "-drag-box")), h = d.querySelector(".".concat(tt, "-crop-box")), v = h.querySelector(".".concat(tt, "-face"));
        this.container = o, this.cropper = d, this.canvas = b, this.dragBox = m, this.cropBox = h, this.viewBox = d.querySelector(".".concat(tt, "-view-box")), this.face = v, b.appendChild(a), ct(r, mt), o.insertBefore(d, r.nextSibling), At(a, zr), this.initPreview(), this.bind(), n.initialAspectRatio = Math.max(0, n.initialAspectRatio) || NaN, n.aspectRatio = Math.max(0, n.aspectRatio) || NaN, n.viewMode = Math.max(0, Math.min(3, Math.round(n.viewMode))) || 0, ct(h, mt), n.guides || ct(h.getElementsByClassName("".concat(tt, "-dashed")), mt), n.center || ct(h.getElementsByClassName("".concat(tt, "-center")), mt), n.background && ct(d, "".concat(tt, "-bg")), n.highlight || ct(v, mc), n.cropBoxMovable && (ct(v, er), _e(v, we, wr)), n.cropBoxResizable || (ct(h.getElementsByClassName("".concat(tt, "-line")), mt), ct(h.getElementsByClassName("".concat(tt, "-point")), mt)), this.render(), this.ready = !0, this.setDragMode(n.dragMode), n.autoCrop && this.crop(), this.setData(n.data), gt(n.ready) && xt(r, Ur, n.ready, {
          once: !0
        }), se(r, Ur);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (!!this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var r = this.cropper.parentNode;
        r && r.removeChild(this.cropper), At(this.element, mt);
      }
    }
  }, {
    key: "uncreate",
    value: function() {
      this.ready ? (this.unbuild(), this.ready = !1, this.cropped = !1) : this.sizing ? (this.sizingImage.onload = null, this.sizing = !1, this.sized = !1) : this.reloading ? (this.xhr.onabort = null, this.xhr.abort()) : this.image && this.stop();
    }
  }], [{
    key: "noConflict",
    value: function() {
      return window.Cropper = Fc, e;
    }
  }, {
    key: "setDefaults",
    value: function(r) {
      et(Xr, te(r) && r);
    }
  }]), e;
}();
et(Ks.prototype, Kc, Yc, Wc, Xc, Zc, qc);
const Gc = { class: "flex" }, Jc = ["aria-label"], Qc = { class: "ml-auto mb-2" }, tu = { class: "w-full flex justify-center" }, eu = ["src"], ru = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { t: n } = P("i18n"), { apiUrl: a } = Lt(), o = L(null), l = L(null), d = L(!1), b = L(""), m = L(!1), h = () => {
      d.value = !d.value, d.value ? l.value = new Ks(o.value, {
        crop(O) {
        }
      }) : l.value.destroy();
    }, v = P("postData"), S = () => {
      l.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        (O) => {
          b.value = "", m.value = !1, Oe(a.value, {
            method: "POST",
            params: Object.assign(v, {
              q: "upload",
              adapter: r.selection.adapter,
              path: r.selection.item.path,
              file: O
            }),
            name: r.selection.item.basename,
            json: !1
          }).then((T) => {
            b.value = n("Updated."), o.value.src = Fe(r.selection.adapter, r.selection.item.path), h(), t("load");
          }).catch((T) => {
            b.value = n(T.message), m.value = !0;
          });
        }
      );
    };
    return Ct(() => {
      t("load");
    }), (O, T) => (_(), C(ut, null, [
      p("div", Gc, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(e.selection.item.basename), 9, Jc),
        p("div", Qc, [
          d.value ? (_(), C("button", {
            key: 0,
            onClick: S,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(x(n)("Crop")), 1)) : X("", !0),
          p("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: T[0] || (T[0] = (M) => h())
          }, E(d.value ? x(n)("Cancel") : x(n)("Edit")), 1)
        ])
      ]),
      p("div", tu, [
        p("img", {
          ref_key: "image",
          ref: o,
          class: "max-w-[50vh] max-h-[50vh]",
          src: x(Fe)(r.selection.adapter, r.selection.item.path),
          alt: ""
        }, null, 8, eu)
      ]),
      b.value.length ? (_(), G(Pt, {
        key: 0,
        onHidden: T[1] || (T[1] = (M) => b.value = ""),
        error: m.value
      }, {
        default: Z(() => [
          nt(E(b.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : X("", !0)
    ], 64));
  }
}, su = { class: "flex" }, nu = ["aria-label"], ou = /* @__PURE__ */ p("div", null, null, -1), iu = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    return Ct(() => {
      t("load");
    }), (r, n) => (_(), C(ut, null, [
      p("div", su, [
        p("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": e.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(e.selection.item.basename), 9, nu)
      ]),
      ou
    ], 64));
  }
}, au = ["aria-label"], lu = {
  class: "w-full",
  preload: "",
  controls: ""
}, cu = ["src"], uu = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: n } = Lt(), a = () => n.value + "?" + Gt({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ct(() => {
      t("load");
    }), (o, l) => (_(), C(ut, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(e.selection.item.basename), 9, au),
      p("div", null, [
        p("video", lu, [
          p("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, cu),
          nt(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, du = ["aria-label"], hu = {
  class: "w-full",
  controls: ""
}, fu = ["src"], pu = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: n } = Lt(), a = () => n.value + "?" + Gt({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ct(() => {
      t("load");
    }), (o, l) => (_(), C(ut, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(e.selection.item.basename), 9, du),
      p("div", null, [
        p("audio", hu, [
          p("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, fu),
          nt(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, gu = ["aria-label"], mu = ["data"], vu = ["src"], bu = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(e, { emit: t }) {
    const r = e, { apiUrl: n } = Lt(), a = () => n.value + "?" + Gt({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ct(() => {
      t("load");
    }), (o, l) => (_(), C(ut, null, [
      p("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": e.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(e.selection.item.basename), 9, gu),
      p("div", null, [
        p("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          p("iframe", {
            class: "border-0",
            src: a(),
            width: "100%",
            height: "100%"
          }, `
          <p>
            Your browser does not support PDFs.
            <a href="https://example.com/test.pdf">Download the PDF</a>
            .
          </p>
        `, 8, vu)
        ], 8, mu)
      ])
    ], 64));
  }
}, yu = { class: "sm:flex sm:items-start" }, Su = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, wu = { class: "text-gray-700 dark:text-gray-200 text-sm" }, _u = {
  key: 0,
  class: "flex leading-5"
}, xu = /* @__PURE__ */ p("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ p("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ p("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), ku = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Du = { class: "font-bold pl-2" }, Cu = { class: "font-bold pl-2" }, Eu = {
  name: "VFModalPreview"
}, Mu = /* @__PURE__ */ Object.assign(Eu, {
  props: {
    selection: Object
  },
  setup(e) {
    const t = e, { apiUrl: r } = Lt(), n = P("emitter"), { t: a } = P("i18n"), o = L(!1), l = (m) => o.value = m, d = (m) => {
      var h;
      return ((h = t.selection.item.mime_type) != null ? h : "").startsWith(m);
    }, b = () => {
      const m = r.value + "?" + Gt({ q: "download", adapter: t.selection.adapter, path: t.selection.item.path });
      n.emit("vf-download", m);
    };
    return (m, h) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: h[6] || (h[6] = (v) => x(n).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Close")), 1),
        p("button", {
          type: "button",
          onClick: h[7] || (h[7] = (v) => b()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Download")), 1)
      ]),
      default: Z(() => [
        p("div", yu, [
          p("div", Su, [
            p("div", null, [
              d("text") ? (_(), G(lc, {
                key: 0,
                selection: e.selection,
                onLoad: h[0] || (h[0] = (v) => l(!0))
              }, null, 8, ["selection"])) : d("image") ? (_(), G(ru, {
                key: 1,
                selection: e.selection,
                onLoad: h[1] || (h[1] = (v) => l(!0))
              }, null, 8, ["selection"])) : d("video") ? (_(), G(uu, {
                key: 2,
                selection: e.selection,
                onLoad: h[2] || (h[2] = (v) => l(!0))
              }, null, 8, ["selection"])) : d("audio") ? (_(), G(pu, {
                key: 3,
                selection: e.selection,
                onLoad: h[3] || (h[3] = (v) => l(!0))
              }, null, 8, ["selection"])) : d("application/pdf") ? (_(), G(bu, {
                key: 4,
                selection: e.selection,
                onLoad: h[4] || (h[4] = (v) => l(!0))
              }, null, 8, ["selection"])) : (_(), G(iu, {
                key: 5,
                selection: e.selection,
                onLoad: h[5] || (h[5] = (v) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            p("div", wu, [
              o.value == !1 ? (_(), C("div", _u, [
                xu,
                p("span", null, E(x(a)("Loading")), 1)
              ])) : X("", !0)
            ])
          ])
        ]),
        p("div", ku, [
          p("div", null, [
            p("span", Du, E(x(a)("File Size")) + ": ", 1),
            nt(E(x(ts)(e.selection.item.file_size)), 1)
          ]),
          p("div", null, [
            p("span", Cu, E(x(a)("Last Modified")) + ": ", 1),
            nt(" " + E(x(es)(e.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Tu = { class: "sm:flex sm:items-start" }, $u = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), Au = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Iu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Lu = { class: "mt-2" }, Ou = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, Pu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Nu = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ju = [
  Nu
], zu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ru = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Hu = [
  Ru
], Vu = { class: "ml-1.5" }, Bu = ["onKeyup"], Uu = {
  name: "VFModalRename"
}, Ku = /* @__PURE__ */ Object.assign(Uu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), o = L(t.selection.items[0]), l = L(t.selection.items[0].basename), d = L(""), b = () => {
      l.value != "" && r.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: n.value,
          path: t.current.dirname,
          item: o.value.path,
          name: l.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is renamed.", l.value) });
        },
        onError: (m) => {
          d.value = a(m.message);
        }
      });
    };
    return (m, h) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: b,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Rename")), 1),
        p("button", {
          type: "button",
          onClick: h[2] || (h[2] = (v) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Tu, [
          $u,
          p("div", Au, [
            p("h3", Iu, E(x(a)("Rename")), 1),
            p("div", Lu, [
              p("p", Ou, [
                o.value.type == "dir" ? (_(), C("svg", Pu, ju)) : (_(), C("svg", zu, Hu)),
                p("span", Vu, E(o.value.basename), 1)
              ]),
              $t(p("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (v) => l.value = v),
                onKeyup: oe(b, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, Bu), [
                [ie, l.value]
              ]),
              d.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: h[1] || (h[1] = (v) => d.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(d.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Yu = { class: "sm:flex sm:items-start" }, Wu = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), Xu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Zu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, qu = { class: "mt-2" }, Fu = { class: "text-gray-500 mb-1" }, Gu = ["id"], Ju = {
  key: 0,
  class: "py-2"
}, Qu = ["disabled", "onClick"], td = {
  name: "VFModalUpload"
}, ed = /* @__PURE__ */ Object.assign(td, {
  props: {
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter"), { apiUrl: n } = Lt(), { t: a } = P("i18n"), o = P("maxFileSize"), l = L(null), d = L(null), b = L(null), m = L([]), h = L(""), v = L(!0), S = () => {
      h.value = "", l.value.start();
    }, O = P("postData");
    return Ct(() => {
      l.value = new pe.Uploader({
        runtimes: "html5",
        browse_button: b.value,
        container: d.value,
        max_file_size: o,
        multiple_queues: !0,
        file_data_name: "file",
        url: n.value + "?" + Gt(Object.assign(O, { q: "upload", adapter: t.current.adapter, path: t.current.dirname })),
        headers: {
          ...Le && { "X-CSRF-Token": Le }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(T, M) {
            v.value = !1, pe.each(M, function(A) {
              m.value.push({
                id: A.id,
                name: A.name,
                size: pe.formatSize(A.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(T, M) {
            m.value[m.value.findIndex((A) => A.id == M.id)].percent = M.percent + "%";
          },
          UploadComplete: function() {
            v.value = !0, r.emit("vf-fetch", { params: { q: "index", adapter: t.current.adapter, path: t.current.dirname } });
          },
          Error: function(T, M) {
            l.value.stop(), M.code == pe.HTTP_ERROR ? h.value = a(JSON.parse(M.response).message) : M.code == pe.FILE_SIZE_ERROR ? h.value = a("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [o]) : h.value = a(M.message);
          }
        }
      }), l.value.init();
    }), (T, M) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          disabled: v.value,
          onClick: Zt(S, ["prevent"]),
          type: "button",
          class: dt([v.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(x(a)("Upload")), 11, Qu),
        p("button", {
          type: "button",
          onClick: M[1] || (M[1] = (A) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Yu, [
          Wu,
          p("div", Xu, [
            p("h3", Zu, E(x(a)("Upload files")), 1),
            p("div", qu, [
              p("div", Fu, [
                (_(!0), C(ut, null, Dt(m.value, (A) => (_(), C("div", null, [
                  p("div", {
                    id: A.id
                  }, [
                    nt(E(A.name) + " ( " + E(A.size) + ") ", 1),
                    p("b", null, E(A.percent), 1)
                  ], 8, Gu)
                ]))), 256)),
                m.value.length ? X("", !0) : (_(), C("div", Ju, E(x(a)("No files selected!")), 1))
              ]),
              p("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: d
              }, [
                p("button", {
                  ref_key: "pickFiles",
                  ref: b,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(x(a)("Select Files")), 513)
              ], 512),
              h.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: M[0] || (M[0] = (A) => h.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(h.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), rd = { class: "sm:flex sm:items-start" }, sd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), nd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, od = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, id = { class: "mt-2" }, ad = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, ld = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, cd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ud = [
  cd
], dd = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, hd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), fd = [
  hd
], pd = { class: "ml-1.5" }, gd = ["onKeyup", "placeholder"], md = {
  name: "VFModalArchive"
}, vd = /* @__PURE__ */ Object.assign(md, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n"), o = L(""), l = L(""), d = L(t.selection.items), b = () => {
      d.value.length && r.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: n.value,
          path: t.current.dirname,
          items: JSON.stringify(d.value.map(({ path: m, type: h }) => ({ path: m, type: h }))),
          name: o.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (m) => {
          l.value = a(m.message);
        }
      });
    };
    return (m, h) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: b,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Archive")), 1),
        p("button", {
          type: "button",
          onClick: h[2] || (h[2] = (v) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", rd, [
          sd,
          p("div", nd, [
            p("h3", od, E(x(a)("Archive the files")), 1),
            p("div", id, [
              (_(!0), C(ut, null, Dt(d.value, (v) => (_(), C("p", ad, [
                v.type == "dir" ? (_(), C("svg", ld, ud)) : (_(), C("svg", dd, fd)),
                p("span", pd, E(v.basename), 1)
              ]))), 256)),
              $t(p("input", {
                "onUpdate:modelValue": h[0] || (h[0] = (v) => o.value = v),
                onKeyup: oe(b, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: x(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, gd), [
                [ie, o.value]
              ]),
              l.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: h[1] || (h[1] = (v) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(l.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), bd = { class: "sm:flex sm:items-start" }, yd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Sd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, wd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, _d = { class: "mt-2" }, xd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, kd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Dd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Cd = [
  Dd
], Ed = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Md = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Td = [
  Md
], $d = { class: "ml-1.5" }, Ad = { class: "my-1 text-sm text-gray-500" }, Id = {
  name: "VFModalUnarchive"
}, Ld = /* @__PURE__ */ Object.assign(Id, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter");
    P("storage");
    const n = P("adapter"), { t: a } = P("i18n");
    L("");
    const o = L(t.selection.items[0]), l = L(""), d = L([]), b = () => {
      r.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: n.value,
          path: t.current.dirname,
          item: o.value.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (m) => {
          l.value = a(m.message);
        }
      });
    };
    return (m, h) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: b,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Unarchive")), 1),
        p("button", {
          type: "button",
          onClick: h[1] || (h[1] = (v) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", bd, [
          yd,
          p("div", Sd, [
            p("h3", wd, E(x(a)("Unarchive")), 1),
            p("div", _d, [
              (_(!0), C(ut, null, Dt(d.value, (v) => (_(), C("p", xd, [
                v.type == "dir" ? (_(), C("svg", kd, Cd)) : (_(), C("svg", Ed, Td)),
                p("span", $d, E(v.basename), 1)
              ]))), 256)),
              p("p", Ad, E(x(a)("The archive will be unarchived at")) + " (" + E(e.current.dirname) + ")", 1),
              l.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: h[0] || (h[0] = (v) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(l.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Od = { class: "sm:flex sm:items-start" }, Pd = /* @__PURE__ */ p("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ p("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ p("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), Nd = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, jd = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, zd = { class: "mt-2" }, Rd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Hd = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Vd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Bd = [
  Vd
], Ud = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Kd = /* @__PURE__ */ p("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Yd = [
  Kd
], Wd = { class: "ml-1.5" }, Xd = { class: "text-sm text-gray-500 pb-1 pt-3" }, Zd = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, qd = /* @__PURE__ */ p("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ p("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), Fd = { class: "ml-1.5 overflow-auto" }, Gd = {
  name: "VFModalMove"
}, Jd = /* @__PURE__ */ Object.assign(Gd, {
  props: {
    selection: Object,
    current: Object
  },
  setup(e) {
    const t = e, r = P("emitter"), { t: n } = P("i18n");
    P("storage");
    const a = P("adapter"), o = L(t.selection.items.from), l = L(""), d = () => {
      o.value.length && r.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: t.current.dirname,
          items: JSON.stringify(o.value.map(({ path: b, type: m }) => ({ path: b, type: m }))),
          item: t.selection.items.to.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: n("Files moved.", t.selection.items.to.name) });
        },
        onError: (b) => {
          l.value = n(b.message);
        }
      });
    };
    return (b, m) => (_(), G(Ot, null, {
      buttons: Z(() => [
        p("button", {
          type: "button",
          onClick: d,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Yes, Move!")), 1),
        p("button", {
          type: "button",
          onClick: m[1] || (m[1] = (h) => x(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(x(n)("Cancel")), 1)
      ]),
      default: Z(() => [
        p("div", Od, [
          Pd,
          p("div", Nd, [
            p("h3", jd, E(x(n)("Move files")), 1),
            p("div", zd, [
              (_(!0), C(ut, null, Dt(o.value, (h) => (_(), C("p", Rd, [
                h.type == "dir" ? (_(), C("svg", Hd, Bd)) : (_(), C("svg", Ud, Yd)),
                p("span", Wd, E(h.path), 1)
              ]))), 256)),
              p("p", Xd, E(x(n)("Are you sure you want to move these files?")), 1),
              p("p", Zd, [
                qd,
                p("span", Fd, E(e.selection.items.to.path), 1)
              ]),
              l.value.length ? (_(), G(Pt, {
                key: 0,
                onHidden: m[0] || (m[0] = (h) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  nt(E(l.value), 1)
                ]),
                _: 1
              })) : X("", !0)
            ])
          ])
        ])
      ]),
      _: 1
    }));
  }
}), Qd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: $l,
  ModalMessage: zl,
  ModalNewFolder: Xl,
  ModalNewFile: rc,
  ModalPreview: Mu,
  ModalRename: Ku,
  ModalUpload: ed,
  ModalArchive: vd,
  ModalUnarchive: Ld,
  ModalMove: Jd
}, Symbol.toStringTag, { value: "Module" })), Xe = {
  VueFinder: nl,
  ...Qd
};
const rh = {
  install(e) {
    for (const t in Xe)
      if (Xe.hasOwnProperty(t)) {
        const r = Xe[t];
        e.component(r.name, r);
      }
  }
};
export {
  rh as default
};
