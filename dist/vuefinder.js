import { ref as A, watch as jt, inject as P, openBlock as S, createElementBlock as C, createElementVNode as h, unref as _, normalizeClass as ue, createTextVNode as oe, toDisplayString as E, createCommentVNode as X, createVNode as Me, TransitionGroup as ko, withCtx as Z, Fragment as de, renderList as De, reactive as It, onMounted as Ee, onUpdated as Do, withDirectives as ke, vShow as Et, withModifiers as Ze, nextTick as zt, isRef as Qr, vModelSelect as $r, createStaticVNode as Co, customRef as Mo, withKeys as nt, vModelText as it, normalizeStyle as es, provide as Ye, createBlock as G, resolveDynamicComponent as Eo, renderSlot as Zt } from "vue";
import pt from "plupload";
var Jr;
const Lt = (Jr = document.querySelector('meta[name="csrf-token"]')) == null ? void 0 : Jr.getAttribute("content"), Ot = (t, { method: e = "get", params: r = {}, json: o = !0, signal: a = null }) => {
  const n = { method: e };
  if (n.signal = a, e == "get")
    t += "?" + new URLSearchParams(r);
  else {
    n.headers = {}, Lt && (n.headers["X-CSRF-Token"] = Lt);
    let l = new FormData();
    for (const [u, v] of Object.entries(r))
      l.append(u, v);
    n.body = l;
  }
  return fetch(t, n).then((l) => l.ok ? o ? l.json() : l.text() : l.json().then(Promise.reject.bind(Promise)));
};
function $o(t) {
  return { all: t = t || /* @__PURE__ */ new Map(), on: function(e, r) {
    var o = t.get(e);
    o ? o.push(r) : t.set(e, [r]);
  }, off: function(e, r) {
    var o = t.get(e);
    o && (r ? o.splice(o.indexOf(r) >>> 0, 1) : t.set(e, []));
  }, emit: function(e, r) {
    var o = t.get(e);
    o && o.slice().map(function(a) {
      a(r);
    }), (o = t.get("*")) && o.slice().map(function(a) {
      a(e, r);
    });
  } };
}
function qt(t) {
  let e = localStorage.getItem(t + "_storage");
  const r = A(JSON.parse(e));
  jt(r, o);
  function o() {
    r.value === null || r.value === "" ? localStorage.removeItem(t + "_storage") : localStorage.setItem(t + "_storage", JSON.stringify(r.value));
  }
  function a(u, v) {
    r.value = Object.assign({ ...r.value }, { [u]: v });
  }
  function n() {
    r.value = null;
  }
  return { getStore: (u, v = null) => r.value === null || r.value === "" ? v : r.value.hasOwnProperty(u) ? r.value[u] : v, setStore: a, clearStore: n };
}
const Tr = A("");
function Le() {
  function t(e) {
    Tr.value = e;
  }
  return { apiUrl: Tr, setApiUrl: t };
}
const To = { class: "border-neutral-300 flex justify-between items-center py-1 text-sm" }, Ao = {
  key: 0,
  class: "flex text-center"
}, Io = ["aria-label"], Lo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
  })
], -1), Oo = [
  Lo
], Po = ["aria-label"], No = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  })
], -1), jo = [
  No
], zo = ["aria-label"], Vo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
}, null, -1), Ro = [
  Vo
], Ho = ["aria-label"], Bo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
}, null, -1), Uo = [
  Bo
], Ko = ["aria-label"], Yo = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
  })
], -1), Wo = [
  Yo
], Xo = ["aria-label"], Zo = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), qo = [
  Zo
], Fo = ["aria-label"], Go = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
}, null, -1), Jo = [
  Go
], Qo = {
  key: 1,
  class: "flex text-center"
}, en = { class: "pl-2" }, tn = { class: "dark:bg-gray-700 bg-gray-200 text-xs px-2 py-1 rounded" }, rn = {
  key: 0,
  class: "animate-spin p-0.5 h-5 w-5 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, sn = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), on = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), nn = [
  sn,
  on
], an = { class: "flex text-center items-center justify-end" }, ln = ["aria-label"], cn = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
}, null, -1), dn = [
  cn
], un = ["aria-label"], hn = {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-6 w-6 md:h-8 md:w-8 m-auto cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "none",
  "stroke-width": "1.5"
}, fn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25"
}, pn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
}, gn = ["aria-label"], mn = {
  key: 0,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
}, vn = {
  key: 1,
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
}, bn = {
  name: "VFToolbar"
}, yn = /* @__PURE__ */ Object.assign(bn, {
  props: {
    data: Object
  },
  setup(t) {
    const e = P("emitter"), { getStore: r, setStore: o } = P("storage"), { t: a } = P("i18n"), n = A(r("viewport", "grid")), l = A([]), u = A(r("full-screen", !1)), v = A("");
    e.on("vf-search-query", ({ newQuery: w }) => {
      v.value = w;
    });
    const m = P("loadingState"), p = () => m.value, b = () => {
      u.value = !u.value, e.emit("vf-fullscreen-toggle");
    };
    return e.on("vf-nodes-selected", (w) => {
      l.value = w;
    }), e.on("vf-view-toggle", (w) => {
      o("viewport", w), n.value = w;
    }), (w, $) => (S(), C("div", To, [
      v.value.length ? (S(), C("div", Qo, [
        h("div", en, [
          oe(E(_(a)("Search results for")) + " ", 1),
          h("span", tn, E(v.value), 1)
        ]),
        p() ? (S(), C("svg", rn, nn)) : X("", !0)
      ])) : (S(), C("div", Ao, [
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("New Folder"),
          "data-microtip-position": "bottom-right",
          role: "tooltip",
          onClick: $[0] || ($[0] = (M) => _(e).emit("vf-modal-show", { type: "new-folder", items: l.value }))
        }, Oo, 8, Io),
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("New File"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[1] || ($[1] = (M) => _(e).emit("vf-modal-show", { type: "new-file", items: l.value }))
        }, jo, 8, Po),
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Rename"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[2] || ($[2] = (M) => l.value.length != 1 || _(e).emit("vf-modal-show", { type: "rename", items: l.value }))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([l.value.length == 1 ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Ro, 2))
        ], 8, zo),
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Delete"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[3] || ($[3] = (M) => !l.value.length || _(e).emit("vf-modal-show", { type: "delete", items: l.value }))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Uo, 2))
        ], 8, Ho),
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Upload"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[4] || ($[4] = (M) => _(e).emit("vf-modal-show", { type: "upload", items: l.value }))
        }, Wo, 8, Ko),
        l.value.length == 1 && l.value[0].mime_type == "application/zip" ? (S(), C("div", {
          key: 0,
          class: "mx-1.5",
          "aria-label": _(a)("Unrchive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[5] || ($[5] = (M) => !l.value.length || _(e).emit("vf-modal-show", { type: "unarchive", items: l.value }))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, qo, 2))
        ], 8, Xo)) : (S(), C("div", {
          key: 1,
          class: "mx-1.5",
          "aria-label": _(a)("Archive"),
          "data-microtip-position": "bottom",
          role: "tooltip",
          onClick: $[6] || ($[6] = (M) => !l.value.length || _(e).emit("vf-modal-show", { type: "archive", items: l.value }))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([l.value.length ? "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300" : "stroke-gray-200  dark:stroke-gray-700", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, Jo, 2))
        ], 8, Fo))
      ])),
      h("div", an, [
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Dark Mode"),
          "data-microtip-position": "bottom",
          role: "tooltip"
        }, [
          (S(), C("svg", {
            onClick: $[7] || ($[7] = (M) => _(e).emit("vf-darkMode-toggle")),
            viewBox: "0 0 24 24",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round",
            class: "h-6 w-6 m-auto cursor-pointer stroke-sky-500 fill-sky-100 hover:stroke-sky-600 dark:stroke-gray-400 dark:fill-gray-400/20 dark:hover:stroke-gray-300"
          }, dn))
        ], 8, ln),
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Toggle Full Screen"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: b
        }, [
          (S(), C("svg", hn, [
            u.value ? (S(), C("path", fn)) : (S(), C("path", pn))
          ]))
        ], 8, un),
        h("div", {
          class: "mx-1.5",
          "aria-label": _(a)("Change View"),
          "data-microtip-position": "bottom-left",
          role: "tooltip",
          onClick: $[8] || ($[8] = (M) => v.value.length || _(e).emit("vf-view-toggle", n.value == "list" ? "grid" : "list"))
        }, [
          (S(), C("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            class: ue([v.value.length ? "stroke-gray-200  dark:stroke-gray-700" : "cursor-pointer stroke-gray-500 hover:stroke-cyan-700 dark:stroke-gray-400 dark:hover:stroke-gray-300", "h-6 w-6 md:h-8 md:w-8 m-auto"]),
            fill: "none",
            viewBox: "0 0 24 24",
            stroke: "none",
            "stroke-width": "1.5"
          }, [
            n.value == "grid" ? (S(), C("path", mn)) : X("", !0),
            n.value == "list" ? (S(), C("path", vn)) : X("", !0)
          ], 2))
        ], 8, gn)
      ])
    ]));
  }
});
var wn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ts = { exports: {} };
(function(t, e) {
  (function(r, o) {
    t.exports = o();
  })(wn, function() {
    function r(d, c) {
      if (!(d instanceof c))
        throw new TypeError("Cannot call a class as a function");
    }
    function o(d, c) {
      for (var s = 0; s < c.length; s++) {
        var g = c[s];
        g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(d, g.key, g);
      }
    }
    function a(d, c, s) {
      return c && o(d.prototype, c), s && o(d, s), d;
    }
    function n(d, c, s) {
      return c in d ? Object.defineProperty(d, c, {
        value: s,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : d[c] = s, d;
    }
    function l(d, c) {
      var s = Object.keys(d);
      if (Object.getOwnPropertySymbols) {
        var g = Object.getOwnPropertySymbols(d);
        c && (g = g.filter(function(i) {
          return Object.getOwnPropertyDescriptor(d, i).enumerable;
        })), s.push.apply(s, g);
      }
      return s;
    }
    function u(d) {
      for (var c = 1; c < arguments.length; c++) {
        var s = arguments[c] != null ? arguments[c] : {};
        c % 2 ? l(Object(s), !0).forEach(function(g) {
          n(d, g, s[g]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(d, Object.getOwnPropertyDescriptors(s)) : l(Object(s)).forEach(function(g) {
          Object.defineProperty(d, g, Object.getOwnPropertyDescriptor(s, g));
        });
      }
      return d;
    }
    function v(d, c) {
      if (typeof c != "function" && c !== null)
        throw new TypeError("Super expression must either be null or a function");
      d.prototype = Object.create(c && c.prototype, {
        constructor: {
          value: d,
          writable: !0,
          configurable: !0
        }
      }), c && p(d, c);
    }
    function m(d) {
      return m = Object.setPrototypeOf ? Object.getPrototypeOf : function(s) {
        return s.__proto__ || Object.getPrototypeOf(s);
      }, m(d);
    }
    function p(d, c) {
      return p = Object.setPrototypeOf || function(g, i) {
        return g.__proto__ = i, g;
      }, p(d, c);
    }
    function b() {
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
    function w(d, c, s) {
      return b() ? w = Reflect.construct : w = function(i, f, y) {
        var x = [null];
        x.push.apply(x, f);
        var D = Function.bind.apply(i, x), H = new D();
        return y && p(H, y.prototype), H;
      }, w.apply(null, arguments);
    }
    function $(d) {
      return Function.toString.call(d).indexOf("[native code]") !== -1;
    }
    function M(d) {
      var c = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
      return M = function(g) {
        if (g === null || !$(g))
          return g;
        if (typeof g != "function")
          throw new TypeError("Super expression must either be null or a function");
        if (typeof c < "u") {
          if (c.has(g))
            return c.get(g);
          c.set(g, i);
        }
        function i() {
          return w(g, arguments, m(this).constructor);
        }
        return i.prototype = Object.create(g.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), p(i, g);
      }, M(d);
    }
    function T(d) {
      if (d === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return d;
    }
    function L(d, c) {
      return c && (typeof c == "object" || typeof c == "function") ? c : T(d);
    }
    function U(d) {
      var c = b();
      return function() {
        var g = m(d), i;
        if (c) {
          var f = m(this).constructor;
          i = Reflect.construct(g, arguments, f);
        } else
          i = g.apply(this, arguments);
        return L(this, i);
      };
    }
    function N(d, c) {
      for (; !Object.prototype.hasOwnProperty.call(d, c) && (d = m(d), d !== null); )
        ;
      return d;
    }
    function O(d, c, s) {
      return typeof Reflect < "u" && Reflect.get ? O = Reflect.get : O = function(i, f, y) {
        var x = N(i, f);
        if (!!x) {
          var D = Object.getOwnPropertyDescriptor(x, f);
          return D.get ? D.get.call(y) : D.value;
        }
      }, O(d, c, s || d);
    }
    function B(d, c) {
      return z(d) || ne(d, c) || re(d, c) || be();
    }
    function R(d) {
      return k(d) || J(d) || re(d) || we();
    }
    function k(d) {
      if (Array.isArray(d))
        return he(d);
    }
    function z(d) {
      if (Array.isArray(d))
        return d;
    }
    function J(d) {
      if (typeof Symbol < "u" && Symbol.iterator in Object(d))
        return Array.from(d);
    }
    function ne(d, c) {
      if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(d)))) {
        var s = [], g = !0, i = !1, f = void 0;
        try {
          for (var y = d[Symbol.iterator](), x; !(g = (x = y.next()).done) && (s.push(x.value), !(c && s.length === c)); g = !0)
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
    function re(d, c) {
      if (!!d) {
        if (typeof d == "string")
          return he(d, c);
        var s = Object.prototype.toString.call(d).slice(8, -1);
        if (s === "Object" && d.constructor && (s = d.constructor.name), s === "Map" || s === "Set")
          return Array.from(d);
        if (s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s))
          return he(d, c);
      }
    }
    function he(d, c) {
      (c == null || c > d.length) && (c = d.length);
      for (var s = 0, g = new Array(c); s < c; s++)
        g[s] = d[s];
      return g;
    }
    function we() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function be() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    function fe(d, c) {
      var s;
      if (typeof Symbol > "u" || d[Symbol.iterator] == null) {
        if (Array.isArray(d) || (s = re(d)) || c && d && typeof d.length == "number") {
          s && (d = s);
          var g = 0, i = function() {
          };
          return {
            s: i,
            n: function() {
              return g >= d.length ? {
                done: !0
              } : {
                done: !1,
                value: d[g++]
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
      var f = !0, y = !1, x;
      return {
        s: function() {
          s = d[Symbol.iterator]();
        },
        n: function() {
          var D = s.next();
          return f = D.done, D;
        },
        e: function(D) {
          y = !0, x = D;
        },
        f: function() {
          try {
            !f && s.return != null && s.return();
          } finally {
            if (y)
              throw x;
          }
        }
      };
    }
    var q = function(c, s, g) {
      var i = c.x, f = c.y, y = g.x, x = g.y, D = {
        "+": {
          x: i + y,
          y: f + x
        },
        "-": {
          x: i - y,
          y: f - x
        },
        "*": {
          x: i * y,
          y: f * x
        },
        "/": {
          x: i / y,
          y: f / x
        }
      };
      return D[s];
    }, I = function(c) {
      return {
        x: c.left,
        y: c.top
      };
    }, V = function(c) {
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
    }, le = function(d, c) {
      var s = c;
      window.addEventListener("resize", s), window.addEventListener("scroll", s);
      var g = new MutationObserver(s);
      d.forEach(function(f, y) {
        g.observe(f, {
          childList: y !== 0,
          attributes: !0
        });
      });
      var i = function() {
        return oo(g, s);
      };
      return {
        observer: g,
        callback: s,
        cleanup: i
      };
    }, F = function(d) {
      var c = Mt(d);
      return c.x || c.y ? !0 : d instanceof Document ? d.body ? !!(d.body.scrollTop = 1) : !!(d.documentElement.scrollTop = 1) : !!(d.scrollTop = 1);
    }, pe = function() {
      var d = document.createElement("div");
      return d.style.position = "fixed", d.style.overflow = "hidden", d.style.pointerEvents = "none", d.style.zIndex = "999999999999999999", d;
    }, Q = function(d) {
      var c = document.createElement("div");
      return c.style.position = "absolute", d || (c.style.background = "rgba(0, 175, 255, 0.2)", c.style.border = "1px solid rgba(0, 175, 255, 0.8)", c.style.display = "none", c.style.pointerEvents = "none"), c;
    }, lt = function(d, c) {
      var s;
      return function() {
        for (var g = arguments.length, i = new Array(g), f = 0; f < g; f++)
          i[f] = arguments[f];
        var y = function() {
          s = null, d.apply(void 0, i);
        };
        clearTimeout(s), s = setTimeout(y, c);
      };
    }, ct = function() {
      var d, c, s, g;
      return {
        y: ((d = document.body) === null || d === void 0 ? void 0 : d.scrollTop) || ((c = document.documentElement) === null || c === void 0 ? void 0 : c.scrollTop) || 0,
        x: ((s = document.body) === null || s === void 0 ? void 0 : s.scrollLeft) || ((g = document.documentElement) === null || g === void 0 ? void 0 : g.scrollLeft) || 0
      };
    }, Ct = function(d) {
      var c = function s(g) {
        var i, f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, y = (i = g[f]) === null || i === void 0 ? void 0 : i.parentNode;
        return y ? (g.push(y), f++, s(g, f)) : g;
      };
      return c([d]);
    }, Xs = function(d, c) {
      if (d instanceof Document)
        return {
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      var s = d.getBoundingClientRect();
      return {
        top: s.top,
        left: s.left,
        bottom: s.bottom,
        right: s.right,
        width: (d.clientWidth || s.width) * c,
        height: (d.clientHeight || s.height) * c
      };
    }, Mt = function(d) {
      return !d || d instanceof Document ? ct() : {
        x: d.scrollLeft >= 0 ? d.scrollLeft : ct().x,
        y: d.scrollTop >= 0 ? d.scrollTop : ct().y
      };
    }, kr = function(d) {
      var c = d.elementRect, s = d.containerRect, g = d.tolerance, i = g === void 0 ? {
        x: 0,
        y: 0
      } : g, f = [];
      return c.top - i.y < s.top && f.push("top"), c.left - i.x < s.left && f.push("left"), c.bottom + i.y > s.bottom && f.push("bottom"), c.right + i.y > s.right && f.push("right"), f;
    }, Zs = function(d) {
      var c = d.event;
      return {
        x: c.clientX,
        y: c.clientY
      };
    }, qs = function(d) {
      var c = d.scrollAmount, s = d.initialPointerPos, g = d.pointerPos, i = {};
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
      var x = g.transform.trim().match(/matrix\((.*?)\)/);
      if (x && x.length) {
        var D, H = (D = x[1]) === null || D === void 0 ? void 0 : D.split(",");
        s.x = parseInt(H[4]) || 0, s.y = parseInt(H[5]) || 0;
      }
      return s;
    }, Fs = function(c) {
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
          var x, D = (x = y[1]) === null || x === void 0 ? void 0 : x.split(",");
          g.x = parseInt(D[0]) || 0, g.y = parseInt(D[1]) || 0;
        }
      }
      return !g.x && !g.x ? Dr(c) : g;
    }, Gs = function(c) {
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
    }, Js = function(d, c) {
      return c ? Fs(d) : Gs(d);
    }, Qs = function(d) {
      var c = d.element, s = d.edges, g = d.elementRect, i = d.containerRect, f = d.elementPos, y = d.useTransform;
      s.includes("top") && ht(c, {
        y: f.y + i.top - g.top,
        x: f.x
      }, y), s.includes("left") && ht(c, {
        y: f.y,
        x: f.x + i.left - g.left
      }, y), s.includes("bottom") && ht(c, {
        y: f.y + i.bottom - g.bottom,
        x: f.x
      }, y), s.includes("right") && ht(c, {
        y: f.y,
        x: f.x + i.right - g.right
      }, y);
    }, Cr = function(d) {
      var c = d.computedStyle, s = d.node, g = c.position, i = g === "absolute" || g === "relative" || g === "fixed";
      !(s instanceof Document) && !i && (s.style.position = "relative");
    }, eo = function(d) {
      var c = d.shiftKey, s = d.keyboardDragSpeed, g = d.zoom, i = d.key, f = d.dragKeys, y = d.scrollDiff, x = d.canScroll, D = d.scrollCallback, H = {
        x: 0,
        y: 0
      }, W = c ? s * 4 * g : s * g;
      return f.left.includes(i) && (H.x = y.x || -W, !c && !y.x && x && D(["left"], s)), f.right.includes(i) && (H.x = y.x || W, !c && !y.x && x && D(["right"], s)), f.up.includes(i) && (H.y = y.y || -W, !c && !y.y && x && D(["top"], s)), f.down.includes(i) && (H.y = y.y || W, !c && !y.y && x && D(["bottom"], s)), H;
    }, to = function(d) {
      var c = d.element, s = d.force, g = d.multiSelectionToggle, i = d.SelectedSet, f = d.hoverClassName;
      c.classList.contains(f) && !s || (i.has(c) ? g && i.delete(c) : i.add(c), c.classList.add(f));
    }, ro = function(d) {
      var c = d.element, s = d.force, g = d.SelectedSet, i = d.PrevSelectedSet, f = d.hoverClassName;
      if (!c.classList.contains(f) && !s)
        return !1;
      var y = g.has(c), x = i.has(c);
      y && !x ? g.delete(c) : !y && x && g.add(c), c.classList.remove(f);
    }, dt = function(c, s, g) {
      return console.warn('[DragSelect] TypeIssue: setting "'.concat(c, '" is not of type "').concat(s, '".'));
    }, Y = function(c, s, g, i) {
      if (s === void 0)
        return g ? n({}, c, i) : {};
      if (s === null)
        return n({}, c, null);
      var f = !0, y = !1, x = typeof i == "string";
      x && (f = typeof s == "string" || s instanceof String), x && !f && (y = !0, dt(c, "string"));
      var D = !Number.isNaN(i) && typeof i == "number";
      D && (f = !Number.isNaN(s) && typeof s == "number"), D && !f && (y = !0, dt(c, "number"));
      var H = Object.prototype.toString.call(i) === "[object Object]";
      H && (f = Object.prototype.toString.call(s) === "[object Object]"), H && !f && (y = !0, dt(c, "object"));
      var W = typeof i == "boolean";
      W && (f = typeof s == "boolean"), W && !f && (y = !0, dt(c, "boolean"));
      var ie = Array.isArray(i);
      ie && (f = Array.isArray(s)), ie && !f && (y = !0, dt(c, "array"));
      var Se = y || g;
      return c === "dragKeys" && f ? n({}, c, Object.assign(i, s)) : c === "dragKeys" && !f ? Se ? n({}, c, i) : {} : (c === "dropZones" && f && new Set(s.map(function(ye) {
        return ye.id;
      })).size !== s.length && console.warn('[DragSelect] UniqueConstraintsIssue: setting "dropZones" contains duplicate ids.'), f ? n({}, c, s) : Se ? n({}, c, i) : {});
    }, so = function(d, c) {
      return u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u(u({}, Y("area", d.area, c, document)), Y("selectables", d.selectables, c, null)), Y("autoScrollSpeed", d.autoScrollSpeed, c, 5)), Y("overflowTolerance", d.overflowTolerance, c, {
        x: 25,
        y: 25
      })), Y("zoom", d.zoom, c, 1)), Y("customStyles", d.customStyles, c, !1)), Y("multiSelectMode", d.multiSelectMode, c, !1)), Y("multiSelectToggling", d.multiSelectToggling, c, !0)), Y("multiSelectKeys", d.multiSelectKeys, c, ["Control", "Shift", "Meta"])), Y("selector", d.selector, c, null)), Y("selectionThreshold", d.selectionThreshold, c, 0)), Y("draggability", d.draggability, c, !0)), Y("immediateDrag", d.immediateDrag, c, !0)), Y("keyboardDrag", d.keyboardDrag, c, !0)), Y("dragKeys", d.dragKeys, c, {
        up: ["ArrowUp"],
        down: ["ArrowDown"],
        left: ["ArrowLeft"],
        right: ["ArrowRight"]
      })), Y("keyboardDragSpeed", d.keyboardDragSpeed, c, 10)), Y("useTransform", d.useTransform, c, !0)), Y("refreshMemoryRate", d.refreshMemoryRate, c, 80)), Y("dropZones", d.dropZones, c, [])), Y("dropInsideThreshold", d.dropInsideThreshold, c, 1)), Y("dropTargetThreshold", d.dropTargetThreshold, c, 0)), Y("usePointerEvents", d.usePointerEvents, c, !1)), Y("hoverClass", d.hoverClass, c, "ds-hover")), Y("selectableClass", d.selectableClass, c, "ds-selectable")), Y("selectedClass", d.selectedClass, c, "ds-selected")), Y("selectorClass", d.selectorClass, c, "ds-selector")), Y("selectorAreaClass", d.selectorAreaClass, c, "ds-selector-area")), Y("droppedTargetClass", d.droppedTargetClass, c, "ds-dropped-target")), Y("droppedInsideClass", d.droppedInsideClass, c, "ds-dropped-inside")), Y("droppableClass", d.droppableClass, c, "ds-droppable")), Y("dropZoneClass", d.dropZoneClass, c, "ds-dropzone")), Y("dropZoneReadyClass", d.dropZoneReadyClass, c, "ds-dropzone-ready")), Y("dropZoneTargetClass", d.dropZoneTargetClass, c, "ds-dropzone-target")), Y("dropZoneInsideClass", d.dropZoneInsideClass, c, "ds-dropzone-inside"));
    }, ut = function(d, c) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, g = d;
      if (s > 0) {
        var i = (d.right - d.left) * s, f = (d.bottom - d.top) * s;
        g = {
          left: d.left + i,
          right: d.right - i,
          top: d.top + f,
          bottom: d.bottom - f
        };
      }
      return g.left < c.right && g.right > c.left && g.top < c.bottom && g.bottom > c.top;
    }, Mr = function(d) {
      var c = d.element, s = d.posDirection, g = d.containerRect, i = d.useTransform, f = Js(c, i), y = q(f, "+", s);
      ht(c, y, i);
      var x = c.getBoundingClientRect(), D = kr({
        elementRect: x,
        containerRect: g
      });
      Qs({
        element: c,
        edges: D,
        elementRect: x,
        containerRect: g,
        elementPos: y,
        useTransform: i
      });
    }, oo = function(d, c) {
      window.removeEventListener("resize", c), window.removeEventListener("scroll", c), d.disconnect();
    }, no = function(d, c, s) {
      if (!!c.length) {
        var g = document && document.documentElement && document.documentElement.scrollTop && document.documentElement, i = d instanceof Document ? g || document.body : d, f = c.includes("top") && i.scrollTop > 0, y = c.includes("bottom") && i.scrollTop < i.scrollHeight, x = c.includes("left") && i.scrollLeft > 0, D = c.includes("right") && i.scrollLeft < i.scrollWidth;
        f && (i.scrollTop -= 1 * s), y && (i.scrollTop += 1 * s), x && (i.scrollLeft -= 1 * s), D && (i.scrollLeft += 1 * s);
      }
    }, ht = function(d, c, s) {
      if (s) {
        var g = d.style.transform;
        d.style.transform = "translate3d(".concat(c.x, "px,").concat(c.y, "px,1px) ").concat(g.replace(/translate.*?\)/g, ""));
      } else
        d.style.left = "".concat(c.x, "px"), d.style.top = "".concat(c.y, "px");
      return d;
    }, io = function(d) {
      for (var c = d.subscribe, s = d.publish, g = d.Interaction, i = d.SelectedSet, f = d.DropZones, y = {
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
            condition: function(ie) {
              return ie.event;
            }
          }
        ],
        "Interaction:end": [
          {
            name: "callback",
            extraData: function() {
              var ie = f.getTarget();
              return u({}, ie ? {
                dropTarget: ie.toObject()
              } : {});
            }
          }
        ]
      }, x = function() {
        var ie = B(H[D], 2), Se = ie[0], ye = ie[1];
        ["pre", !1].forEach(function($e) {
          return c($e ? "".concat(Se, ":").concat($e) : Se, function(ae) {
            return ye.forEach(function(_e) {
              return (!_e.condition || _e.condition(ae)) && s($e ? "".concat($e).concat(_e.name) : _e.name, u(u({
                items: i.elements,
                isDragging: g.isDragging
              }, ae), _e.extraData ? _e.extraData(ae) : {}));
            });
          });
        });
      }, D = 0, H = Object.entries(y); D < H.length; D++)
        x();
    }, Ue = function(d) {
      return d ? !Array.isArray(d) && (d instanceof HTMLElement || d instanceof SVGElement) ? [d] : R(new Set(R(d))) : [];
    }, Er = function(d, c) {
      d.style.left = "".concat(c.left, "px"), d.style.top = "".concat(c.top, "px"), d.style.width = "".concat(c.width, "px"), d.style.height = "".concat(c.height, "px");
    }, ao = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "DS", void 0), n(this, "_observers", void 0), n(this, "_node", void 0), n(this, "_parentNodes", void 0), n(this, "_computedStyle", void 0), n(this, "_computedBorder", void 0), n(this, "_rect", void 0), n(this, "setArea", function(i) {
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
        }), n(this, "start", function() {
          s._observers = le(s.parentNodes, lt(function(i) {
            s.DS.PubSub.publish("Area:modified:pre", {
              event: i,
              item: s
            }), s.reset(), s.DS.PubSub.publish("Area:modified", {
              event: i,
              item: s
            });
          }, 60));
        }), n(this, "reset", function() {
          s._computedStyle = void 0, s._rect = void 0, s._computedBorder = void 0, s._parentNodes = void 0;
        }), n(this, "stop", function() {
          s._observers.cleanup(), s.reset();
        }), n(this, "scroll", function(i, f) {
          var y = {
            scroll_directions: i,
            scroll_multiplier: f
          };
          s.DS.PubSub.publish("Area:scroll:pre", y), no(s._node, i, f), s.DS.PubSub.publish("Area:scroll", y);
        }), this.DS = g, this.setArea(this.DS.stores.SettingsStore.s.area), this.DS.PubSub.subscribe("Settings:updated:area", function(i) {
          var f = i.settings;
          s.setArea(f.area);
        }), this.DS.PubSub.subscribe("Interaction:init", this.start), this.DS.PubSub.subscribe("Interaction:end", this.reset);
      }
      return a(d, [{
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
          return this._rect ? this._rect : this._rect = Xs(this.HTMLNode, this.DS.stores.SettingsStore.s.zoom);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Ct(this.HTMLNode);
        }
      }]), d;
    }(), lo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_prevCursorPos", void 0), n(this, "_prevScrollPos", void 0), n(this, "_elements", []), n(this, "_dragKeys", void 0), n(this, "_dragKeysFlat", []), n(this, "assignDragkeys", function() {
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
          }, s._dragKeysFlat = [].concat(R(s._dragKeys.up), R(s._dragKeys.down), R(s._dragKeys.left), R(s._dragKeys.right));
        }), n(this, "keyboardDrag", function(i) {
          var f = i.event, y = i.key, x = y.toLowerCase();
          if (!(!s.DS.stores.SettingsStore.s.keyboardDrag || !s._dragKeysFlat.includes(x) || !s.DS.SelectedSet.size || !s.DS.stores.SettingsStore.s.draggability || s.DS.continue)) {
            var D = {
              event: f,
              isDragging: !0,
              isDraggingKeyboard: !0
            };
            s.DS.publish(["Interaction:start:pre", "Interaction:start"], D), s._elements = s.DS.getSelection(), s.handleZIndex(!0);
            var H = eo({
              shiftKey: s.DS.stores.KeyStore.currentValues.includes("shift"),
              keyboardDragSpeed: s.DS.stores.SettingsStore.s.keyboardDragSpeed,
              zoom: s.DS.stores.SettingsStore.s.zoom,
              key: x,
              scrollCallback: s.DS.Area.scroll,
              scrollDiff: s._scrollDiff,
              canScroll: s.DS.stores.ScrollStore.canScroll,
              dragKeys: s._dragKeys
            });
            s._elements.forEach(function(W) {
              return Mr({
                element: W,
                posDirection: H,
                containerRect: s.DS.SelectorArea.rect,
                useTransform: s.DS.stores.SettingsStore.s.useTransform
              });
            }), s.DS.publish(["Interaction:update:pre", "Interaction:update"], D);
          }
        }), n(this, "keyboardEnd", function(i) {
          var f = i.event, y = i.key, x = y.toLowerCase();
          if (!(!s.DS.stores.SettingsStore.s.keyboardDrag || !s._dragKeysFlat.includes(x) || !s.DS.SelectedSet.size || !s.DS.stores.SettingsStore.s.draggability)) {
            var D = {
              event: f,
              isDragging: s.DS.stores.SettingsStore.s.draggability,
              isDraggingKeyboard: !0
            };
            s.DS.publish(["Interaction:end:pre", "Interaction:end"], D);
          }
        }), n(this, "start", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          !f || y || (s._prevCursorPos = null, s._prevScrollPos = null, s._elements = s.DS.getSelection(), s.handleZIndex(!0));
        }), n(this, "stop", function(i) {
          i != null && i.isKeyboard || (s._prevCursorPos = null, s._prevScrollPos = null, s.handleZIndex(!1), s._elements = []);
        }), n(this, "update", function(i) {
          var f = i.isDragging, y = i.isDraggingKeyboard;
          if (!(!f || !s._elements.length || y || s.DS.continue)) {
            var x = q(s._cursorDiff, "+", s._scrollDiff);
            s._elements.forEach(function(D) {
              return Mr({
                element: D,
                posDirection: x,
                containerRect: s.DS.SelectorArea.rect,
                useTransform: s.DS.stores.SettingsStore.s.useTransform
              });
            });
          }
        }), n(this, "handleZIndex", function(i) {
          s._elements.forEach(function(f) {
            return f.style.zIndex = "".concat((parseInt(f.style.zIndex) || 0) + i ? 9999 : -9998);
          });
        }), this.DS = g, this.DS.subscribe("Settings:updated:dragKeys", this.assignDragkeys), this.assignDragkeys(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("KeyStore:down", this.keyboardDrag), this.DS.subscribe("KeyStore:up", this.keyboardEnd);
      }
      return a(d, [{
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
      }]), d;
    }(), co = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS, i = c.id, f = c.element, y = c.droppables;
        r(this, d), n(this, "id", void 0), n(this, "element", void 0), n(this, "_droppables", void 0), n(this, "_rect", void 0), n(this, "_observers", void 0), n(this, "_timeout", void 0), n(this, "_itemsDropped", []), n(this, "_itemsInside", void 0), n(this, "setReadyClasses", function(x) {
          if (!s.isDestroyed) {
            var D = s.droppables.filter(function(H) {
              return s.DS.SelectedSet.has(H);
            });
            !D.length || (D.forEach(function(H) {
              H.classList[x]("".concat(s.Settings.droppableClass)), H.classList[x]("".concat(s.Settings.droppableClass, "-").concat(s.id));
            }), s.element.classList[x]("".concat(s.Settings.dropZoneReadyClass)));
          }
        }), n(this, "handleNoDrop", function() {
          var x;
          s.isDestroyed || (s.DS.SelectedSet.forEach(function(D) {
            D.classList.remove(s.Settings.droppedTargetClass), D.classList.remove("".concat(s.Settings.droppedTargetClass, "-").concat(s.id));
          }), s._itemsDropped = s._itemsDropped.filter(function(D) {
            return !s.DS.SelectedSet.has(D);
          }), (x = s._itemsDropped) !== null && x !== void 0 && x.length || s.element.classList.remove("".concat(s.Settings.dropZoneTargetClass)));
        }), n(this, "handleDrop", function() {
          var x, D, H;
          s.isDestroyed || (s._itemsDropped = R(new Set([].concat(R(s._itemsDropped), R((x = s.droppables) === null || x === void 0 ? void 0 : x.filter(function(W) {
            return s.DS.SelectedSet.has(W);
          }))))), (D = s._itemsDropped) === null || D === void 0 || D.forEach(function(W) {
            W.classList.add("".concat(s.Settings.droppedTargetClass)), W.classList.add("".concat(s.Settings.droppedTargetClass, "-").concat(s.id));
          }), (H = s._itemsDropped) !== null && H !== void 0 && H.length && s.element.classList.add("".concat(s.Settings.dropZoneTargetClass)));
        }), n(this, "handleItemsInsideClasses", function() {
          var x = !1;
          s.droppables.forEach(function(D) {
            s.itemsInside.includes(D) ? (D.classList.add("".concat(s.Settings.droppedInsideClass)), D.classList.add("".concat(s.Settings.droppedInsideClass, "-").concat(s.id)), x = !0) : (D.classList.remove("".concat(s.Settings.droppedInsideClass, "-").concat(s.id)), D.className.includes("".concat(s.Settings.droppedInsideClass, "-")) || D.classList.remove("".concat(s.Settings.droppedInsideClass)));
          }), x ? s.element.classList.add("".concat(s.Settings.dropZoneInsideClass)) : s.element.classList.remove("".concat(s.Settings.dropZoneInsideClass));
        }), n(this, "start", function(x) {
          var D = x.isDragging;
          !D || s.isDestroyed || s.setReadyClasses("add");
        }), n(this, "stop", function(x) {
          var D = x.isDragging;
          !D || s.isDestroyed || (s.setReadyClasses("remove"), s.handleItemsInsideClasses());
        }), n(this, "toObject", function() {
          return {
            id: s.id,
            element: s.element,
            droppables: s.droppables,
            itemsDropped: s.itemsDropped,
            itemsInside: s.itemsInside
          };
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.id = i, this.element = f, y && (this.droppables = Ue(y)), this.element.classList.add("".concat(this.Settings.dropZoneClass)), this.DS.subscribe("Settings:updated:dropZoneClass", function(x) {
          var D = x.settings;
          s.element.classList.remove(D["dropZoneClass:pre"]), s.element.classList.add(D.dropZoneClass);
        }), this._observers = le(this.parentNodes, lt(function() {
          return s._rect = null;
        }, this.Settings.refreshMemoryRate)), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(d, [{
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
            return ut(s.DS.SelectableSet.rects.get(g), s.rect, s.Settings.dropInsideThreshold) ? [g] : [];
          }), this._timeout && clearTimeout(this._timeout), this._timeout = setTimeout(function() {
            return s._itemsInside = null;
          }, this.Settings.refreshMemoryRate), this._itemsInside);
        }
      }, {
        key: "parentNodes",
        get: function() {
          return this._parentNodes ? this._parentNodes : this._parentNodes = Ct(this.element);
        }
      }, {
        key: "droppables",
        get: function() {
          return this._droppables ? this._droppables : this.DS.SelectableSet.elements;
        },
        set: function(s) {
          this._droppables = s;
        }
      }]), d;
    }(), uo = function d(c) {
      var s = this, g = c.DS;
      r(this, d), n(this, "_zoneByElement", /* @__PURE__ */ new Map()), n(this, "_zoneById", /* @__PURE__ */ new Map()), n(this, "_zonesByDroppable", /* @__PURE__ */ new Map()), n(this, "_zones", void 0), n(this, "setDropZones", function(i) {
        var f = i.dropZones;
        !f || (s._zones && s._zones.forEach(function(y) {
          return y.destroy();
        }), s._zones = f.map(function(y) {
          return new co(u({
            DS: s.DS
          }, y));
        }), s._zones.forEach(function(y) {
          s._zoneByElement.set(y.element, y), s._zoneById.set(y.id, y), y.droppables.forEach(function(x) {
            var D = s._zonesByDroppable.get(x);
            if (!(D != null && D.length))
              return s._zonesByDroppable.set(x, [y]);
            s._zonesByDroppable.set(x, R(new Set([].concat(R(D), [y]))));
          });
        }));
      }), n(this, "_handleDrop", function(i) {
        s._zones.forEach(function(f) {
          f !== i && f.handleNoDrop();
        }), i && i.handleDrop();
      }), n(this, "_getZoneByElementsFromPoint", function(i, f) {
        for (var y = f.x, x = f.y, D = 0, H = i.length; D < H; D++) {
          var W = s._zoneByElement.get(i[D]);
          if (W && ut(W.rect, {
            left: y,
            right: y,
            top: x,
            bottom: x
          }, Math.min(s.Settings.dropTargetThreshold, 0.5)))
            return W;
        }
      }), n(this, "stop", function(i) {
        var f = i.isDragging;
        if (!!f) {
          var y = s.getTarget();
          s._handleDrop(y);
        }
      }), n(this, "getItemsDroppedById", function(i) {
        var f = s._zoneById.get(i);
        return f ? f.itemsDropped : console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
      }), n(this, "getItemsInsideById", function(i, f) {
        var y = s._zoneById.get(i);
        if (!y)
          return console.warn("[DragSelect] No zone found (id: ".concat(i, ")"));
        var x = y.itemsInside;
        return f && y.handleItemsInsideClasses(), x;
      }), n(this, "getTarget", function(i) {
        var f;
        if (!!((f = s._zones) !== null && f !== void 0 && f.length)) {
          var y = (i == null ? void 0 : i.x) || s.DS.stores.PointerStore.currentVal.x, x = (i == null ? void 0 : i.y) || s.DS.stores.PointerStore.currentVal.y, D = document.elementsFromPoint(y, x);
          return s._getZoneByElementsFromPoint(D, {
            x: y,
            y: x
          });
        }
      }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Settings:updated:dropZones", function(i) {
        var f = i.settings;
        return s.setDropZones(f);
      }), this.setDropZones({
        dropZones: this.DS.stores.SettingsStore.s.dropZones
      }), this.DS.subscribe("Interaction:end", this.stop);
    }, ho = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "isInteracting", void 0), n(this, "isDragging", void 0), n(this, "init", function() {
          return s.DS.publish("Interaction:init:pre", {});
        }), n(this, "_init", function() {
          s.stop(), s.Settings.usePointerEvents ? s.DS.Area.HTMLNode.addEventListener("pointerdown", s.start, {
            passive: !1
          }) : s.DS.Area.HTMLNode.addEventListener("mousedown", s.start), s.DS.Area.HTMLNode.addEventListener("touchstart", s.start, {
            passive: !1
          }), s.DS.publish("Interaction:init", {});
        }), n(this, "start", function(i) {
          return s.DS.publish("Interaction:start:pre", {
            event: i,
            isDragging: s.isDragging
          });
        }), n(this, "_start", function(i) {
          i.type === "touchstart" && i.preventDefault(), s._canInteract(i) && (s.isInteracting = !0, s.isDragging = s.isDragEvent(i), s.DS.publish("Interaction:start", {
            event: i,
            isDragging: s.isDragging
          }), s.Settings.usePointerEvents ? (document.addEventListener("pointerup", s.reset), document.addEventListener("pointercancel", s.reset)) : document.addEventListener("mouseup", s.reset), document.addEventListener("touchend", s.reset));
        }), n(this, "isDragEvent", function(i) {
          var f = i.target.closest(".".concat(s.Settings.selectableClass));
          return !s.Settings.draggability || s.DS.stores.KeyStore.isMultiSelectKeyPressed(i) || !f ? !1 : (s.Settings.immediateDrag && (s.DS.SelectedSet.size ? s.DS.SelectedSet.has(f) || (s.DS.SelectedSet.clear(), s.DS.SelectedSet.add(f)) : s.DS.SelectedSet.add(f)), !!s.DS.SelectedSet.has(f));
        }), n(this, "onClick", function(i) {
          var f = i.event;
          if (!!s._canInteract(f) && !(f.detail > 0)) {
            var y = s.DS, x = y.stores, D = x.PointerStore, H = x.KeyStore, W = y.SelectableSet, ie = y.SelectedSet;
            D.start(f);
            var Se = f.target;
            !W.has(Se) || (H.isMultiSelectKeyPressed(f) || ie.clear(), ie.toggle(Se), s.reset());
          }
        }), n(this, "stop", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : s.DS.Area.HTMLNode;
          s.isInteracting = !1, s.isDragging = !1, s.Settings.usePointerEvents ? (i.removeEventListener("pointerdown", s.start, {
            passive: !1
          }), document.removeEventListener("pointerup", s.reset), document.removeEventListener("pointercancel", s.reset)) : (i.removeEventListener("mousedown", s.start), document.removeEventListener("mouseup", s.reset)), i.removeEventListener("touchstart", s.start, {
            passive: !1
          }), document.removeEventListener("touchend", s.reset);
        }), n(this, "update", function(i) {
          var f = i.event, y = i.scroll_directions, x = i.scroll_multiplier;
          s.isInteracting && s.DS.publish(["Interaction:update:pre", "Interaction:update"], {
            event: f,
            scroll_directions: y,
            scroll_multiplier: x,
            isDragging: s.isDragging
          });
        }), n(this, "reset", function(i) {
          return s.DS.publish("Interaction:end:pre", {
            event: i,
            isDragging: s.isDragging
          });
        }), n(this, "_reset", function(i) {
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
      return a(d, [{
        key: "_canInteract",
        value: function(s) {
          var g = s.clientX === 0 && s.clientY === 0 && s.detail === 0 && s.target;
          return !(s.button === 2 || this.isInteracting || s.target && !this.DS.SelectorArea.isInside(s.target) || !g && !this.DS.SelectorArea.isClicked(s));
        }
      }]), d;
    }(), fo = function d(c) {
      var s = this, g = c.DS;
      r(this, d), n(this, "subscribers", {}), n(this, "subscribe", function(i, f) {
        return Array.isArray(s.subscribers[i]) || (s.subscribers[i] = []), s.subscribers[i].push(f), s.subscribers[i].length - 1;
      }), n(this, "unsubscribe", function(i, f, y) {
        y >= 0 ? s.subscribers[i].splice(y, 1) : f && (s.subscribers[i] = s.subscribers[i].filter(function(x) {
          return x !== f;
        }));
      }), n(this, "publish", function(i, f) {
        Array.isArray(i) ? i.forEach(function(y) {
          return s._publish(y, f);
        }) : s._publish(i, f);
      }), n(this, "_publish", function(i, f) {
        var y = s.subscribers[i];
        !Array.isArray(y) || (i.includes(":pre") ? s._handlePrePublish(y, f) : s._handlePublish(y, f));
      }), n(this, "_handlePublish", function(i, f) {
        for (var y = 0, x = i.length; y < x; y++) {
          if (s.DS.stopped)
            return;
          i[y](f);
        }
      }), n(this, "_handlePrePublish", function(i, f) {
        for (var y = i.length; y--; ) {
          if (s.DS.stopped)
            return;
          i[y](f);
        }
      }), this.DS = g;
    }, po = /* @__PURE__ */ function(d) {
      v(s, d);
      var c = U(s);
      function s(g) {
        var i, f = g.DS;
        return r(this, s), i = c.call(this), n(T(i), "_rects", void 0), n(T(i), "_timeout", void 0), n(T(i), "init", function() {
          return Ue(i.Settings.selectables).forEach(function(y) {
            return i.add(y);
          });
        }), n(T(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), n(T(i), "_onClick", function(y) {
          return i.DS.publish(["Selectable:click:pre", "Selectable:click"], {
            event: y
          });
        }), n(T(i), "_onPointer", function(y) {
          return i.DS.publish(["Selectable:pointer:pre", "Selectable:pointer"], {
            event: y
          });
        }), n(T(i), "addAll", function(y) {
          return y.forEach(function(x) {
            return i.add(x);
          });
        }), n(T(i), "deleteAll", function(y) {
          return y.forEach(function(x) {
            return i.delete(x);
          });
        }), i.DS = f, i.Settings = f.stores.SettingsStore.s, i.DS.subscribe("Interaction:init", i.init), i.DS.PubSub.subscribe("Settings:updated:selectables", function() {
          i.clear(), i.init();
        }), i.DS.subscribe("Settings:updated:selectableClass", function(y) {
          var x = y.settings;
          i.forEach(function(D) {
            D.classList.remove(x["selectableClass:pre"]), D.classList.add(x.selectableClass);
          });
        }), i;
      }
      return a(s, [{
        key: "add",
        value: function(i) {
          if (!O(m(s.prototype), "has", this).call(this, i)) {
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
            }), this.DS.publish("Selectable:added", f), O(m(s.prototype), "add", this).call(this, i);
          }
        }
      }, {
        key: "delete",
        value: function(i) {
          if (!!O(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selectable:removed:pre", f), i.classList.remove(this.Settings.selectableClass), i.classList.remove(this.Settings.hoverClass), i.removeEventListener("click", this._onClick), this.Settings.usePointerEvents ? i.removeEventListener("pointerdown", this._onPointer, {
              passive: !1
            }) : i.removeEventListener("mousedown", this._onPointer), i.removeEventListener("touchstart", this._onPointer, {
              passive: !1
            }), this.DS.publish("Selectable:removed", f), O(m(s.prototype), "delete", this).call(this, i);
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
    }(/* @__PURE__ */ M(Set)), go = /* @__PURE__ */ function(d) {
      v(s, d);
      var c = U(s);
      function s(g) {
        var i, f = g.DS;
        return r(this, s), i = c.call(this), n(T(i), "clear", function() {
          return i.forEach(function(y) {
            return i.delete(y);
          });
        }), n(T(i), "addAll", function(y) {
          return y.forEach(function(x) {
            return i.add(x);
          });
        }), n(T(i), "deleteAll", function(y) {
          return y.forEach(function(x) {
            return i.delete(x);
          });
        }), i.DS = f, i;
      }
      return a(s, [{
        key: "add",
        value: function(i) {
          if (!O(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            return this.DS.publish("Selected:added:pre", f), O(m(s.prototype), "add", this).call(this, i), i.classList.add(this.DS.stores.SettingsStore.s.selectedClass), i.style.zIndex = "".concat((parseInt(i.style.zIndex) || 0) + 1), this.DS.publish("Selected:added", f), this;
          }
        }
      }, {
        key: "delete",
        value: function(i) {
          if (!!O(m(s.prototype), "has", this).call(this, i)) {
            var f = {
              items: this.elements,
              item: i
            };
            this.DS.publish("Selected:removed:pre", f);
            var y = O(m(s.prototype), "delete", this).call(this, i);
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
    }(/* @__PURE__ */ M(Set)), mo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_prevSelectedSet", void 0), n(this, "start", function(i) {
          var f = i.event, y = i.isDragging;
          y || (s._storePrevious(f), s._handleInsideSelection(!0, f));
        }), n(this, "update", function(i) {
          var f = i.isDragging;
          f || s.DS.continue || s._handleInsideSelection();
        }), n(this, "_handleInsideSelection", function(i, f) {
          var y = s.DS, x = y.SelectableSet, D = y.SelectorArea, H = y.Selector, W = x.rects, ie = [], Se = [], ye = fe(W), $e;
          try {
            for (ye.s(); !($e = ye.n()).done; ) {
              var ae = B($e.value, 2), _e = ae[0], ft = ae[1];
              !D.isInside(_e, ft) || (ut(ft, H.rect, s.Settings.selectionThreshold) ? ie.push(_e) : Se.push(_e));
            }
          } catch (Ke) {
            ye.e(Ke);
          } finally {
            ye.f();
          }
          var Kt = s.DS.stores.KeyStore.isMultiSelectKeyPressed(f) && s.Settings.multiSelectToggling;
          s.DS.continue || (ie.forEach(function(Ke) {
            return to({
              element: Ke,
              force: i,
              multiSelectionToggle: Kt,
              SelectedSet: s.DS.SelectedSet,
              hoverClassName: s.Settings.hoverClass
            });
          }), Se.forEach(function(Ke) {
            return ro({
              element: Ke,
              force: i,
              SelectedSet: s.DS.SelectedSet,
              hoverClassName: s.Settings.hoverClass,
              PrevSelectedSet: s._prevSelectedSet
            });
          }));
        }), this.DS = g, this.Settings = this.DS.stores.SettingsStore.s, this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update);
      }
      return a(d, [{
        key: "_storePrevious",
        value: function(s) {
          var g = this.DS, i = g.stores.KeyStore, f = g.SelectedSet;
          i.isMultiSelectKeyPressed(s) ? this._prevSelectedSet = new Set(f) : this._prevSelectedSet = /* @__PURE__ */ new Set();
        }
      }]), d;
    }(), vo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_rect", void 0), n(this, "attachSelector", function() {
          var i, f;
          s.HTMLNode && (i = s.DS.SelectorArea) !== null && i !== void 0 && i.HTMLNode && s.DS.SelectorArea.HTMLNode.removeChild(s.HTMLNode), s.HTMLNode = s.DS.stores.SettingsStore.s.selector || Q(s.DS.stores.SettingsStore.s.customStyles), s.HTMLNode.classList.add(s.DS.stores.SettingsStore.s.selectorClass), s.HTMLNode && (f = s.DS.SelectorArea) !== null && f !== void 0 && f.HTMLNode && s.DS.SelectorArea.HTMLNode.appendChild(s.HTMLNode);
        }), n(this, "start", function(i) {
          var f = i.isDragging;
          if (!f) {
            var y = s.DS.stores.PointerStore, x = y.initialValArea;
            Er(s.HTMLNode, V(x, 1)), s.HTMLNode.style.display = "block", s._rect = null;
          }
        }), n(this, "stop", function() {
          s.HTMLNode.style.width = "0", s.HTMLNode.style.height = "0", s.HTMLNode.style.display = "none";
        }), n(this, "update", function(i) {
          var f = i.isDragging;
          if (!(f || s.DS.continue)) {
            var y = s.DS.stores, x = y.ScrollStore, D = y.PointerStore, H = qs({
              scrollAmount: x.scrollAmount,
              initialPointerPos: D.initialValArea,
              pointerPos: D.currentValArea
            });
            Er(s.HTMLNode, H), s._rect = null;
          }
        }), this.DS = g, this.DS.subscribe("Settings:updated:selectorClass", function(i) {
          var f = i.settings;
          s.HTMLNode.classList.remove(f["selectorClass:pre"]), s.HTMLNode.classList.add(f.selectorClass);
        }), this.DS.subscribe("Settings:updated:selector", this.attachSelector), this.DS.subscribe("Settings:updated:customStyles", this.attachSelector), this.attachSelector(), this.DS.subscribe("Interaction:start", this.start), this.DS.subscribe("Interaction:update", this.update), this.DS.subscribe("Interaction:end", this.stop);
      }
      return a(d, [{
        key: "rect",
        get: function() {
          return this._rect ? this._rect : this._rect = this.HTMLNode.getBoundingClientRect();
        }
      }]), d;
    }(), bo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_scrollInterval", void 0), n(this, "_rect", void 0), n(this, "currentEdges", []), n(this, "start", function() {
          return s.applyElements("append");
        }), n(this, "applyElements", function() {
          var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "append", f = document.body ? "body" : "documentElement", y = "".concat(i, "Child");
          s.HTMLNode[y](s.DS.Selector.HTMLNode), document[f][y](s.HTMLNode);
        }), n(this, "updatePos", function() {
          s._rect = null;
          var i = s.DS.Area.rect, f = s.DS.Area.computedBorder, y = s.HTMLNode.style, x = "".concat(i.top + f.top, "px"), D = "".concat(i.left + f.left, "px"), H = "".concat(i.width, "px"), W = "".concat(i.height, "px");
          y.top !== x && (y.top = x), y.left !== D && (y.left = D), y.width !== H && (y.width = H), y.height !== W && (y.height = W);
        }), n(this, "stop", function(i) {
          s.stopAutoScroll(), i && s.applyElements("remove");
        }), n(this, "startAutoScroll", function() {
          s.currentEdges = [], s._scrollInterval = setInterval(function() {
            return s.handleAutoScroll();
          }, 16);
        }), n(this, "handleAutoScroll", function() {
          if (!s.DS.continue) {
            var i = s.DS, f = i.stores.PointerStore, y = i.Area;
            s.currentEdges = kr({
              elementRect: V(f.currentVal),
              containerRect: s.rect,
              tolerance: s.DS.stores.SettingsStore.s.overflowTolerance
            }), s.currentEdges.length && y.scroll(s.currentEdges, s.DS.stores.SettingsStore.s.autoScrollSpeed);
          }
        }), n(this, "stopAutoScroll", function() {
          s.currentEdges = [], clearInterval(s._scrollInterval);
        }), n(this, "isInside", function(i, f) {
          return s.DS.Area.HTMLNode.contains(i) && s.DS.stores.ScrollStore.canScroll ? !0 : ut(s.rect, f || i.getBoundingClientRect());
        }), this.DS = g, this.HTMLNode = pe(), this.DS.subscribe("Settings:updated:selectorAreaClass", function(i) {
          var f = i.settings;
          s.HTMLNode.classList.remove(f["selectorAreaClass:pre"]), s.HTMLNode.classList.add(f.selectorAreaClass);
        }), this.HTMLNode.classList.add(this.DS.stores.SettingsStore.s.selectorAreaClass), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Area:modified", this.updatePos), this.DS.subscribe("Interaction:init", this.start), this.DS.subscribe("Interaction:start", this.startAutoScroll), this.DS.subscribe("Interaction:end", function() {
          s.updatePos(), s.stopAutoScroll();
        });
      }
      return a(d, [{
        key: "isClicked",
        value: function(s) {
          var g = this.DS.stores.PointerStore, i = s ? g.getPointerPosition(s) : g.initialVal;
          return ut({
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
      }]), d;
    }(), yo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_currentValues", /* @__PURE__ */ new Set()), n(this, "_keyMapping", {
          control: "ctrlKey",
          shift: "shiftKey",
          meta: "metaKey"
        }), n(this, "init", function() {
          document.addEventListener("keydown", s.keydown), document.addEventListener("keyup", s.keyup), window.addEventListener("blur", s.reset);
        }), n(this, "keydown", function(i) {
          var f = i.key.toLowerCase();
          s.DS.publish("KeyStore:down:pre", {
            event: i,
            key: f
          }), s._currentValues.add(f), s.DS.publish("KeyStore:down", {
            event: i,
            key: f
          });
        }), n(this, "keyup", function(i) {
          var f = i.key.toLowerCase();
          s.DS.publish("KeyStore:up:pre", {
            event: i,
            key: f
          }), s._currentValues.delete(f), s.DS.publish("KeyStore:up", {
            event: i,
            key: f
          });
        }), n(this, "stop", function() {
          document.removeEventListener("keydown", s.keydown), document.removeEventListener("keyup", s.reset), window.removeEventListener("blur", s.reset), s.reset();
        }), n(this, "reset", function() {
          return s._currentValues.clear();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init);
      }
      return a(d, [{
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
      }]), d;
    }(), wo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_isMouseInteraction", !1), n(this, "_initialValArea", void 0), n(this, "_currentValArea", void 0), n(this, "_lastValArea", void 0), n(this, "_initialVal", void 0), n(this, "_currentVal", void 0), n(this, "_lastVal", void 0), n(this, "_lastTouch", void 0), n(this, "init", function() {
          s.Settings.usePointerEvents ? document.addEventListener("pointermove", s.update, {
            passive: !1
          }) : document.addEventListener("mousemove", s.update), document.addEventListener("touchmove", s.update, {
            passive: !1
          });
        }), n(this, "getPointerPosition", function(i) {
          return Zs({
            event: s._normalizedEvent(i)
          });
        }), n(this, "update", function(i) {
          !i || (s.DS.publish("PointerStore:updated:pre", {
            event: i
          }), s.currentVal = s.getPointerPosition(i), s._isMouseInteraction && s.DS.publish("PointerStore:updated", {
            event: i
          }));
        }), n(this, "stop", function() {
          s.Settings.usePointerEvents ? document.removeEventListener("pointermove", s.update, {
            passive: !1
          }) : document.removeEventListener("mousemove", s.update), document.removeEventListener("touchmove", s.update, {
            passive: !1
          }), setTimeout(function() {
            return s._isMouseInteraction = !1;
          }, 100);
        }), n(this, "reset", function(i) {
          !i || (s.currentVal = s.lastVal = s.getPointerPosition(i), s.stop(), s.init());
        }), this.DS = g, this.Settings = g.stores.SettingsStore.s, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function(i) {
          var f = i.event;
          return s.start(f);
        }), this.DS.subscribe("Interaction:end", function(i) {
          var f = i.event;
          return s.reset(f);
        });
      }
      return a(d, [{
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
          this._initialVal = s, this._initialValArea = s && q(s, "-", q(I(this.DS.Area.rect), "+", I(this.DS.Area.computedBorder)));
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
          this._currentVal = s, this._currentValArea = s && q(s, "-", q(I(this.DS.Area.rect), "+", I(this.DS.Area.computedBorder)));
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
          this._lastVal = s, this._lastValArea = s && q(s, "-", q(I(this.DS.Area.rect), "+", I(this.DS.Area.computedBorder)));
        }
      }]), d;
    }(), So = /* @__PURE__ */ function() {
      function d(c) {
        var s = this, g = c.DS;
        r(this, d), n(this, "_initialVal", void 0), n(this, "_currentVal", void 0), n(this, "_canScroll", void 0), n(this, "init", function() {
          return s.DS.stores.SettingsStore.s.area.addEventListener("scroll", s.update);
        }), n(this, "start", function() {
          s._currentVal = s._initialVal = Mt(s.DS.stores.SettingsStore.s.area), s.DS.stores.SettingsStore.s.area.addEventListener("scroll", s.update);
        }), n(this, "update", function() {
          return s._currentVal = Mt(s.DS.stores.SettingsStore.s.area);
        }), n(this, "stop", function() {
          s.DS.stores.SettingsStore.s.area.removeEventListener("scroll", s.update), s._initialVal = {
            x: 0,
            y: 0
          }, s._canScroll = null;
        }), n(this, "reset", function() {
          s.stop(), s.start();
        }), this.DS = g, this.DS.subscribe("Interaction:init", this.init), this.DS.subscribe("Interaction:start", function() {
          return s.start();
        }), this.DS.subscribe("Interaction:end", function() {
          return s.reset();
        });
      }
      return a(d, [{
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
          return this._currentVal || (this._currentVal = Mt(this.DS.stores.SettingsStore.s.area)), this._currentVal;
        }
      }]), d;
    }(), _o = function d(c) {
      var s = this, g = c.DS, i = c.settings;
      r(this, d), n(this, "_settings", {}), n(this, "s", {}), n(this, "update", function(f) {
        var y = f.settings, x = f.init;
        return s.DS.publish("Settings:updated:pre", u({
          settings: y
        }, x ? {
          init: x
        } : {}));
      }), n(this, "_update", function(f) {
        for (var y = f.settings, x = f.init, D = so(y, x), H = function() {
          var ye, $e = B(ie[W], 2), ae = $e[0], _e = $e[1];
          ae in s._settings || Object.defineProperty(s.s, ae, {
            get: function() {
              return s._settings[ae];
            },
            set: function(Ke) {
              return s.update({
                settings: n({}, ae, Ke)
              });
            }
          }), s._settings["".concat(ae, ":pre")] = s._settings[ae], s._settings[ae] = _e;
          var ft = {
            settings: (ye = {}, n(ye, ae, s._settings[ae]), n(ye, "".concat(ae, ":pre"), s._settings["".concat(ae, ":pre")]), ye)
          };
          s.DS.publish("Settings:updated", ft), s.DS.publish("Settings:updated:".concat(ae), ft);
        }, W = 0, ie = Object.entries(D); W < ie.length; W++)
          H();
      }), this.DS = g, this.DS.subscribe("Settings:updated:pre", this._update), this.update({
        settings: i,
        init: !0
      });
    }, xo = /* @__PURE__ */ function() {
      function d(c) {
        var s = this;
        r(this, d), n(this, "continue", !1), n(this, "start", function() {
          s.stopped = !1, s.Interaction.init();
        }), n(this, "break", function() {
          return s.continue = !0;
        }), n(this, "setSettings", function(g) {
          return s.stores.SettingsStore.update({
            settings: g
          });
        }), n(this, "getSelection", function() {
          return s.SelectedSet.elements;
        }), n(this, "getSelectables", function() {
          return s.SelectableSet.elements;
        }), n(this, "getInitialCursorPosition", function() {
          return s.stores.PointerStore.initialVal;
        }), n(this, "getCurrentCursorPosition", function() {
          return s.stores.PointerStore.currentVal;
        }), n(this, "getPreviousCursorPosition", function() {
          return s.stores.PointerStore.lastVal;
        }), n(this, "getInitialCursorPositionArea", function() {
          return s.stores.PointerStore.initialValArea;
        }), n(this, "getCurrentCursorPositionArea", function() {
          return s.stores.PointerStore.currentValArea;
        }), n(this, "getPreviousCursorPositionArea", function() {
          return s.stores.PointerStore.lastValArea;
        }), n(this, "isMultiSelect", function(g) {
          return s.stores.KeyStore.isMultiSelectKeyPressed(g);
        }), n(this, "isDragging", function() {
          return s.Interaction.isDragging;
        }), n(this, "getZoneByCoordinates", function(g) {
          var i;
          return (i = s.DropZones.getTarget(g)) === null || i === void 0 ? void 0 : i.toObject();
        }), n(this, "getItemsDroppedByZoneId", function(g) {
          return s.DropZones.getItemsDroppedById(g);
        }), n(this, "getItemsInsideByZoneId", function(g, i) {
          return s.DropZones.getItemsInsideById(g, i);
        }), this.PubSub = new fo({
          DS: this
        }), this.subscribe = this.PubSub.subscribe, this.unsubscribe = this.PubSub.unsubscribe, this.publish = this.PubSub.publish, this.stores = {}, this.stores.SettingsStore = new _o({
          DS: this,
          settings: c
        }), this.stores.PointerStore = new wo({
          DS: this
        }), this.stores.ScrollStore = new So({
          DS: this
        }), this.stores.KeyStore = new yo({
          DS: this
        }), this.Area = new ao({
          DS: this
        }), this.Selector = new vo({
          DS: this
        }), this.SelectorArea = new bo({
          DS: this
        }), this.SelectableSet = new po({
          DS: this
        }), this.SelectedSet = new go({
          DS: this
        }), this.Selection = new mo({
          DS: this
        }), this.Drag = new lo({
          DS: this
        }), this.DropZones = new uo({
          DS: this
        }), this.Interaction = new ho({
          DS: this
        }), io({
          subscribe: this.subscribe,
          publish: this.publish,
          SelectedSet: this.SelectedSet,
          Interaction: this.Interaction,
          DropZones: this.DropZones
        }), this.subscribe("Interaction:end", function() {
          return s.continue = !1;
        }), this.start();
      }
      return a(d, [{
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
          return this.SelectedSet.addAll(Ue(s)), i || this.addSelectables(s), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "removeSelection",
        value: function(s) {
          var g = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return this.SelectedSet.deleteAll(Ue(s)), i && this.removeSelectables(s), g && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), this.getSelection();
        }
      }, {
        key: "toggleSelection",
        value: function(s) {
          var g = this, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return Ue(s).forEach(function(y) {
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
          var f = Ue(s);
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
          return this.SelectableSet.deleteAll(Ue(s)), g && this.removeSelection(s), i && this.PubSub.publish("callback", {
            items: this.getSelection()
          }), s;
        }
      }]), d;
    }();
    return xo;
  });
})(ts);
const Sn = ts.exports, rs = (t, e, r, o, a) => (e = Math, r = e.log, o = 1024, a = r(t) / r(o) | 0, t / e.pow(o, a)).toFixed(0) + " " + (a ? "KMGTPEZY"[--a] + "iB" : "B"), ss = (t, e = null) => {
  var r;
  return new Date(t * 1e3).toLocaleString((r = e != null ? e : navigator.language) != null ? r : "en-US");
}, _n = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, xn = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
  "clip-rule": "evenodd"
}, null, -1), kn = [
  xn
], Dn = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, Cn = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z",
  "clip-rule": "evenodd"
}, null, -1), Mn = [
  Cn
], En = {
  name: "VFSortIcon"
}, $t = /* @__PURE__ */ Object.assign(En, {
  props: { direction: String },
  setup(t) {
    return (e, r) => (S(), C("div", null, [
      t.direction == "down" ? (S(), C("svg", _n, kn)) : X("", !0),
      t.direction == "up" ? (S(), C("svg", Dn, Mn)) : X("", !0)
    ]));
  }
}), $n = ["onClick"], Tn = {
  name: "VFToast.vue"
}, An = /* @__PURE__ */ Object.assign(Tn, {
  setup(t) {
    const e = P("emitter"), { getStore: r } = P("storage"), o = A(r("full-screen", !1)), a = (v) => v == "error" ? "text-red-400 border-red-400 dark:text-red-300 dark:border-red-300" : "text-lime-600 border-lime-600 dark:text-lime-300 dark:border-lime-1300", n = A([]), l = (v) => {
      n.value.splice(v, 1);
    }, u = (v) => {
      let m = n.value.findIndex((p) => p.id === v);
      m !== -1 && l(m);
    };
    return e.on("vf-toast-clear", () => {
      n.value = [];
    }), e.on("vf-toast-push", (v) => {
      let m = new Date().getTime().toString(36).concat(performance.now().toString(), Math.random().toString()).replace(/\./g, "");
      v.id = m, n.value.push(v), setTimeout(() => {
        u(m);
      }, 5e3);
    }), (v, m) => (S(), C("div", {
      class: ue([o.value.value ? "fixed" : "absolute", "bottom-0 max-w-fit flex flex-col bottom-0 left-1/2 -translate-x-1/2"])
    }, [
      Me(ko, {
        name: "vf-toast-item",
        "leave-active-class": "transition-all duration-1000",
        "leave-to-class": "opacity-0"
      }, {
        default: Z(() => [
          (S(!0), C(de, null, De(n.value, (p, b) => (S(), C("div", {
            onClick: (w) => l(b),
            key: p,
            class: ue([a(p.type), "inline-block mx-auto my-0.5 py-0.5 px-2 min-w-max bg-gray-50 dark:bg-gray-600 border text-xs sm:text-sm rounded cursor-pointer"])
          }, E(p.label), 11, $n))), 128))
        ]),
        _: 1
      })
    ], 2));
  }
}), Ge = (t) => Object.entries(t).map((e) => e.map(encodeURIComponent).join("=")).join("&"), { apiUrl: In } = Le(), Ft = (t, e) => In.value + "?" + Ge({ q: "preview", adapter: t, path: e }), He = typeof window < "u", os = He && !("onscroll" in window) || typeof navigator < "u" && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), ns = He && "IntersectionObserver" in window, is = He && "classList" in document.createElement("p"), as = He && window.devicePixelRatio > 1, Ln = {
  elements_selector: ".lazy",
  container: os || He ? document : null,
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
}, ls = (t) => Object.assign({}, Ln, t), Ar = function(t, e) {
  let r;
  const o = "LazyLoad::Initialized", a = new t(e);
  try {
    r = new CustomEvent(o, { detail: { instance: a } });
  } catch {
    r = document.createEvent("CustomEvent"), r.initCustomEvent(o, !1, !1, { instance: a });
  }
  window.dispatchEvent(r);
}, On = (t, e) => {
  if (!!e)
    if (!e.length)
      Ar(t, e);
    else
      for (let r = 0, o; o = e[r]; r += 1)
        Ar(t, o);
}, Ne = "src", lr = "srcset", cr = "sizes", cs = "poster", xt = "llOriginalAttrs", ds = "data", dr = "loading", us = "loaded", hs = "applied", Pn = "entered", ur = "error", fs = "native", ps = "data-", gs = "ll-status", ve = (t, e) => t.getAttribute(ps + e), Nn = (t, e, r) => {
  var o = ps + e;
  if (r === null) {
    t.removeAttribute(o);
    return;
  }
  t.setAttribute(o, r);
}, kt = (t) => ve(t, gs), Je = (t, e) => Nn(t, gs, e), Vt = (t) => Je(t, null), hr = (t) => kt(t) === null, jn = (t) => kt(t) === dr, zn = (t) => kt(t) === ur, fr = (t) => kt(t) === fs, Vn = [dr, us, hs, ur], Rn = (t) => Vn.indexOf(kt(t)) >= 0, Be = (t, e, r, o) => {
  if (!!t) {
    if (o !== void 0) {
      t(e, r, o);
      return;
    }
    if (r !== void 0) {
      t(e, r);
      return;
    }
    t(e);
  }
}, at = (t, e) => {
  if (is) {
    t.classList.add(e);
    return;
  }
  t.className += (t.className ? " " : "") + e;
}, Te = (t, e) => {
  if (is) {
    t.classList.remove(e);
    return;
  }
  t.className = t.className.replace(new RegExp("(^|\\s+)" + e + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
}, Hn = (t) => {
  t.llTempImage = document.createElement("IMG");
}, Bn = (t) => {
  delete t.llTempImage;
}, ms = (t) => t.llTempImage, Rt = (t, e) => {
  if (!e)
    return;
  const r = e._observer;
  !r || r.unobserve(t);
}, Un = (t) => {
  t.disconnect();
}, Kn = (t, e, r) => {
  e.unobserve_entered && Rt(t, r);
}, pr = (t, e) => {
  !t || (t.loadingCount += e);
}, Yn = (t) => {
  !t || (t.toLoadCount -= 1);
}, vs = (t, e) => {
  !t || (t.toLoadCount = e);
}, Wn = (t) => t.loadingCount > 0, Xn = (t) => t.toLoadCount > 0, bs = (t) => {
  let e = [];
  for (let r = 0, o; o = t.children[r]; r += 1)
    o.tagName === "SOURCE" && e.push(o);
  return e;
}, gr = (t, e) => {
  const r = t.parentNode;
  if (!r || r.tagName !== "PICTURE")
    return;
  bs(r).forEach(e);
}, ys = (t, e) => {
  bs(t).forEach(e);
}, Ht = [Ne], ws = [Ne, cs], wt = [Ne, lr, cr], Ss = [ds], Bt = (t) => !!t[xt], _s = (t) => t[xt], xs = (t) => delete t[xt], ot = (t, e) => {
  if (Bt(t))
    return;
  const r = {};
  e.forEach((o) => {
    r[o] = t.getAttribute(o);
  }), t[xt] = r;
}, Zn = (t) => {
  Bt(t) || (t[xt] = { backgroundImage: t.style.backgroundImage });
}, qn = (t, e, r) => {
  if (!r) {
    t.removeAttribute(e);
    return;
  }
  t.setAttribute(e, r);
}, qe = (t, e) => {
  if (!Bt(t))
    return;
  const r = _s(t);
  e.forEach((o) => {
    qn(t, o, r[o]);
  });
}, Fn = (t) => {
  if (!Bt(t))
    return;
  const e = _s(t);
  t.style.backgroundImage = e.backgroundImage;
}, ks = (t, e, r) => {
  at(t, e.class_applied), Je(t, hs), r && (e.unobserve_completed && Rt(t, e), Be(e.callback_applied, t, r));
}, Ds = (t, e, r) => {
  at(t, e.class_loading), Je(t, dr), r && (pr(r, 1), Be(e.callback_loading, t, r));
}, Re = (t, e, r) => {
  !r || t.setAttribute(e, r);
}, Ir = (t, e) => {
  Re(t, cr, ve(t, e.data_sizes)), Re(t, lr, ve(t, e.data_srcset)), Re(t, Ne, ve(t, e.data_src));
}, Gn = (t, e) => {
  gr(t, (r) => {
    ot(r, wt), Ir(r, e);
  }), ot(t, wt), Ir(t, e);
}, Jn = (t, e) => {
  ot(t, Ht), Re(t, Ne, ve(t, e.data_src));
}, Qn = (t, e) => {
  ys(t, (r) => {
    ot(r, Ht), Re(r, Ne, ve(r, e.data_src));
  }), ot(t, ws), Re(t, cs, ve(t, e.data_poster)), Re(t, Ne, ve(t, e.data_src)), t.load();
}, ei = (t, e) => {
  ot(t, Ss), Re(t, ds, ve(t, e.data_src));
}, ti = (t, e, r) => {
  const o = ve(t, e.data_bg), a = ve(t, e.data_bg_hidpi), n = as && a ? a : o;
  !n || (t.style.backgroundImage = `url("${n}")`, ms(t).setAttribute(Ne, n), Ds(t, e, r));
}, ri = (t, e, r) => {
  const o = ve(t, e.data_bg_multi), a = ve(t, e.data_bg_multi_hidpi), n = as && a ? a : o;
  !n || (t.style.backgroundImage = n, ks(t, e, r));
}, si = (t, e, r) => {
  const o = ve(t, e.data_bg_set);
  if (!o)
    return;
  const a = o.split("|");
  let n = a.map((l) => `image-set(${l})`);
  t.style.backgroundImage = n.join(), t.style.backgroundImage === "" && (n = a.map((l) => `-webkit-image-set(${l})`), t.style.backgroundImage = n.join()), ks(t, e, r);
}, Cs = {
  IMG: Gn,
  IFRAME: Jn,
  VIDEO: Qn,
  OBJECT: ei
}, oi = (t, e) => {
  const r = Cs[t.tagName];
  !r || r(t, e);
}, ni = (t, e, r) => {
  const o = Cs[t.tagName];
  !o || (o(t, e), Ds(t, e, r));
}, ii = ["IMG", "IFRAME", "VIDEO", "OBJECT"], ai = (t) => ii.indexOf(t.tagName) > -1, Ms = (t, e) => {
  e && !Wn(e) && !Xn(e) && Be(t.callback_finish, e);
}, Lr = (t, e, r) => {
  t.addEventListener(e, r), t.llEvLisnrs[e] = r;
}, li = (t, e, r) => {
  t.removeEventListener(e, r);
}, mr = (t) => !!t.llEvLisnrs, ci = (t, e, r) => {
  mr(t) || (t.llEvLisnrs = {});
  const o = t.tagName === "VIDEO" ? "loadeddata" : "load";
  Lr(t, o, e), Lr(t, "error", r);
}, Gt = (t) => {
  if (!mr(t))
    return;
  const e = t.llEvLisnrs;
  for (let r in e) {
    const o = e[r];
    li(t, r, o);
  }
  delete t.llEvLisnrs;
}, Es = (t, e, r) => {
  Bn(t), pr(r, -1), Yn(r), Te(t, e.class_loading), e.unobserve_completed && Rt(t, r);
}, di = (t, e, r, o) => {
  const a = fr(e);
  Es(e, r, o), at(e, r.class_loaded), Je(e, us), Be(r.callback_loaded, e, o), a || Ms(r, o);
}, ui = (t, e, r, o) => {
  const a = fr(e);
  Es(e, r, o), at(e, r.class_error), Je(e, ur), Be(r.callback_error, e, o), r.restore_on_error && qe(e, wt), a || Ms(r, o);
}, vr = (t, e, r) => {
  const o = ms(t) || t;
  if (mr(o))
    return;
  ci(o, (l) => {
    di(l, t, e, r), Gt(o);
  }, (l) => {
    ui(l, t, e, r), Gt(o);
  });
}, hi = (t, e, r) => {
  Hn(t), vr(t, e, r), Zn(t), ti(t, e, r), ri(t, e, r), si(t, e, r);
}, fi = (t, e, r) => {
  vr(t, e, r), ni(t, e, r);
}, br = (t, e, r) => {
  ai(t) ? fi(t, e, r) : hi(t, e, r);
}, pi = (t, e, r) => {
  t.setAttribute("loading", "lazy"), vr(t, e, r), oi(t, e), Je(t, fs);
}, Or = (t) => {
  t.removeAttribute(Ne), t.removeAttribute(lr), t.removeAttribute(cr);
}, gi = (t) => {
  gr(t, (e) => {
    Or(e);
  }), Or(t);
}, $s = (t) => {
  gr(t, (e) => {
    qe(e, wt);
  }), qe(t, wt);
}, mi = (t) => {
  ys(t, (e) => {
    qe(e, Ht);
  }), qe(t, ws), t.load();
}, vi = (t) => {
  qe(t, Ht);
}, bi = (t) => {
  qe(t, Ss);
}, yi = {
  IMG: $s,
  IFRAME: vi,
  VIDEO: mi,
  OBJECT: bi
}, wi = (t) => {
  const e = yi[t.tagName];
  if (!e) {
    Fn(t);
    return;
  }
  e(t);
}, Si = (t, e) => {
  hr(t) || fr(t) || (Te(t, e.class_entered), Te(t, e.class_exited), Te(t, e.class_applied), Te(t, e.class_loading), Te(t, e.class_loaded), Te(t, e.class_error));
}, _i = (t, e) => {
  wi(t), Si(t, e), Vt(t), xs(t);
}, xi = (t, e, r, o) => {
  !r.cancel_on_exit || !jn(t) || t.tagName === "IMG" && (Gt(t), gi(t), $s(t), Te(t, r.class_loading), pr(o, -1), Vt(t), Be(r.callback_cancel, t, e, o));
}, ki = (t, e, r, o) => {
  const a = Rn(t);
  Je(t, Pn), at(t, r.class_entered), Te(t, r.class_exited), Kn(t, r, o), Be(r.callback_enter, t, e, o), !a && br(t, r, o);
}, Di = (t, e, r, o) => {
  hr(t) || (at(t, r.class_exited), xi(t, e, r, o), Be(r.callback_exit, t, e, o));
}, Ci = ["IMG", "IFRAME", "VIDEO"], Ts = (t) => t.use_native && "loading" in HTMLImageElement.prototype, Mi = (t, e, r) => {
  t.forEach((o) => {
    Ci.indexOf(o.tagName) !== -1 && pi(o, e, r);
  }), vs(r, 0);
}, Ei = (t) => t.isIntersecting || t.intersectionRatio > 0, $i = (t) => ({
  root: t.container === document ? null : t.container,
  rootMargin: t.thresholds || t.threshold + "px"
}), Ti = (t, e, r) => {
  t.forEach(
    (o) => Ei(o) ? ki(o.target, o, e, r) : Di(o.target, o, e, r)
  );
}, Ai = (t, e) => {
  e.forEach((r) => {
    t.observe(r);
  });
}, Ii = (t, e) => {
  Un(t), Ai(t, e);
}, Li = (t, e) => {
  !ns || Ts(t) || (e._observer = new IntersectionObserver((r) => {
    Ti(r, t, e);
  }, $i(t)));
}, As = (t) => Array.prototype.slice.call(t), Pt = (t) => t.container.querySelectorAll(t.elements_selector), Oi = (t) => As(t).filter(hr), Pi = (t) => zn(t), Ni = (t) => As(t).filter(Pi), Pr = (t, e) => Oi(t || Pt(e)), ji = (t, e) => {
  Ni(Pt(t)).forEach((o) => {
    Te(o, t.class_error), Vt(o);
  }), e.update();
}, zi = (t, e) => {
  !He || (e._onlineHandler = () => {
    ji(t, e);
  }, window.addEventListener("online", e._onlineHandler));
}, Vi = (t) => {
  !He || window.removeEventListener("online", t._onlineHandler);
}, Dt = function(t, e) {
  const r = ls(t);
  this._settings = r, this.loadingCount = 0, Li(r, this), zi(r, this), this.update(e);
};
Dt.prototype = {
  update: function(t) {
    const e = this._settings, r = Pr(t, e);
    if (vs(this, r.length), os || !ns) {
      this.loadAll(r);
      return;
    }
    if (Ts(e)) {
      Mi(r, e, this);
      return;
    }
    Ii(this._observer, r);
  },
  destroy: function() {
    this._observer && this._observer.disconnect(), Vi(this), Pt(this._settings).forEach((t) => {
      xs(t);
    }), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, delete this.toLoadCount;
  },
  loadAll: function(t) {
    const e = this._settings;
    Pr(t, e).forEach((o) => {
      Rt(o, this), br(o, e, this);
    });
  },
  restoreAll: function() {
    const t = this._settings;
    Pt(t).forEach((e) => {
      _i(e, t);
    });
  }
};
Dt.load = (t, e) => {
  const r = ls(e);
  br(t, r);
};
Dt.resetStatus = (t) => {
  Vt(t);
};
He && On(Dt, window.lazyLoadOptions);
const Ri = { class: "relative flex-auto flex flex-col overflow-hidden" }, Hi = {
  key: 0,
  class: "grid grid-cols-12 border-b border-neutral-300 border-gray-200 dark:border-gray-700 text-xs select-none"
}, Bi = { class: "absolute" }, Ui = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "absolute h-6 w-6 md:h-12 md:w-12 m-auto stroke-neutral-500 fill-white dark:fill-gray-700 dark:stroke-gray-600 z-10",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
  })
], -1), Ki = { class: "text-neutral-700 dark:text-neutral-300 p-1 absolute text-center top-4 right-[-2rem] md:top-5 md:right-[-2.4rem] z-20 text-xs" }, Yi = ["onDblclick", "onContextmenu", "data-type", "data-item", "data-index"], Wi = { class: "grid grid-cols-12 items-center" }, Xi = { class: "flex col-span-7 items-center" }, Zi = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, qi = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fi = [
  qi
], Gi = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ji = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Qi = [
  Ji
], ea = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ta = { class: "col-span-5 overflow-ellipsis overflow-hidden whitespace-nowrap" }, ra = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "data-type", "data-item", "data-index"], sa = { class: "grid grid-cols-12 items-center" }, oa = { class: "flex col-span-7 items-center" }, na = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ia = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), aa = [
  ia
], la = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ca = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), da = [
  ca
], ua = { class: "overflow-ellipsis overflow-hidden whitespace-nowrap" }, ha = { class: "col-span-2 text-center" }, fa = { class: "col-span-3 overflow-ellipsis overflow-hidden whitespace-nowrap" }, pa = ["onDblclick", "onContextmenu", "onDragstart", "onDragover", "onDrop", "onClick", "data-type", "data-item", "data-index"], ga = { class: "relative" }, ma = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, va = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), ba = [
  va
], ya = ["data-src", "alt"], wa = {
  key: 2,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-10 w-10 md:h-12 md:w-12 m-auto text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Sa = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), _a = [
  Sa
], xa = {
  key: 3,
  class: "absolute hidden md:block top-1/2 w-full text-center text-neutral-500"
}, ka = { class: "break-all" }, Da = {
  name: "VFExplorer"
}, Ca = /* @__PURE__ */ Object.assign(Da, {
  props: {
    view: String,
    data: Object,
    search: Object
  },
  setup(t) {
    const e = t, r = P("emitter"), { setStore: o, getStore: a } = P("storage"), n = P("adapter"), l = (I) => I == null ? void 0 : I.substring(0, 3), u = (I) => I.replace(/((?=([\w\W]{0,14}))([\w\W]{8,})([\w\W]{8,}))/, "$2..$4"), v = A(null), m = A(null), p = A(0), b = A(null), { t: w } = P("i18n"), $ = Math.floor(Math.random() * 2 ** 32), M = A(a("full-screen", !1)), T = new Dt();
    r.on("vf-fullscreen-toggle", () => {
      v.value.style.height = null, M.value = !M.value, o("full-screen", M.value);
    });
    const L = A("");
    r.on("vf-search-query", ({ newQuery: I }) => {
      L.value = I, I ? r.emit("vf-fetch", {
        params: {
          q: "search",
          adapter: e.data.adapter,
          path: e.data.dirname,
          filter: I
        },
        onSuccess: (V) => {
          V.files.length || r.emit("vf-toast-push", { label: w("No search result found.") });
        }
      }) : r.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: e.data.dirname } });
    });
    let U = null;
    const N = () => {
      U && clearTimeout(U);
    }, O = A(!0), B = (I) => {
      I.touches.length > 1 && (O.value ? (b.value.stop(), r.emit("vf-toast-push", { label: w("Drag&Drop: off") })) : (b.value.start(), r.emit("vf-toast-push", { label: w("Drag&Drop: on") }), r.emit("vf-explorer-update")), O.value = !O.value);
    }, R = (I) => {
      U = setTimeout(() => {
        const V = new MouseEvent("contextmenu", {
          bubbles: !0,
          cancelable: !1,
          view: window,
          button: 2,
          buttons: 0,
          clientX: I.target.getBoundingClientRect().x,
          clientY: I.target.getBoundingClientRect().y
        });
        I.target.dispatchEvent(V);
      }, 500);
    }, k = (I) => {
      I.type == "dir" ? (r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: e.data.adapter, path: I.path } })) : r.emit("vf-modal-show", { type: "preview", adapter: e.data.adapter, item: I });
    }, z = It({ active: !1, column: "", order: "" }), J = (I = !0) => {
      let V = [...e.data.files], j = z.column, le = z.order == "asc" ? 1 : -1;
      if (!I)
        return V;
      const F = (pe, Q) => typeof pe == "string" && typeof Q == "string" ? pe.toLowerCase().localeCompare(Q.toLowerCase()) : pe < Q ? -1 : pe > Q ? 1 : 0;
      return z.active && (V = V.slice().sort((pe, Q) => F(pe[j], Q[j]) * le)), V;
    }, ne = (I) => {
      z.active && z.column == I ? (z.active = z.order == "asc", z.column = I, z.order = "desc") : (z.active = !0, z.column = I, z.order = "asc");
    }, re = () => b.value.getSelection().map((I) => JSON.parse(I.dataset.item)), he = (I, V) => {
      if (I.altKey || I.ctrlKey || I.metaKey)
        return I.preventDefault(), !1;
      I.dataTransfer.setDragImage(m.value, 0, 15), I.dataTransfer.effectAllowed = "all", I.dataTransfer.dropEffect = "copy", I.dataTransfer.setData("items", JSON.stringify(re()));
    }, we = (I, V) => {
      I.preventDefault();
      let j = JSON.parse(I.dataTransfer.getData("items"));
      if (j.find((le) => le.storage != n.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", { type: "move", items: { from: j, to: V } });
    }, be = (I, V) => {
      I.preventDefault(), !V || V.type !== "dir" || b.value.getSelection().find((j) => j == I.currentTarget) ? (I.dataTransfer.dropEffect = "none", I.dataTransfer.effectAllowed = "none") : I.dataTransfer.dropEffect = "copy";
    }, fe = () => {
      b.value = new Sn({
        area: v.value,
        keyboardDrag: !1,
        selectedClass: "vf-explorer-selected",
        selectorClass: "vf-explorer-selector"
      }), r.on("vf-explorer-update", () => zt(() => {
        b.value.clearSelection(), b.value.setSelectables(document.getElementsByClassName("vf-item-" + $));
      })), b.value.subscribe("predragstart", ({ event: I, isDragging: V }) => {
        if (V)
          p.value = b.value.getSelection().length, b.value.break();
        else {
          const j = I.target.offsetWidth - I.offsetX, le = I.target.offsetHeight - I.offsetY;
          j < 15 && le < 15 && (b.value.clearSelection(), b.value.break());
        }
      }), b.value.subscribe("predragmove", ({ isDragging: I }) => {
        I && b.value.break();
      }), b.value.subscribe("callback", ({ items: I, event: V, isDragging: j }) => {
        r.emit("vf-nodes-selected", re()), p.value = b.value.getSelection().length;
      });
    }, q = (I, V) => {
      r.emit("vf-file-select", V);
    };
    return Ee(fe), Do(() => {
      b.value.Area.reset(), b.value.SelectorArea.updatePos(), T.update();
    }), Ee(() => {
      jt(() => e.view, () => r.emit("vf-explorer-update"));
    }), (I, V) => (S(), C("div", Ri, [
      t.view == "list" || L.value.length ? (S(), C("div", Hi, [
        h("div", {
          onClick: V[0] || (V[0] = (j) => ne("basename")),
          class: "col-span-7 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center pl-1"
        }, [
          oe(E(_(w)("Name")) + " ", 1),
          ke(Me($t, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "basename"]
          ])
        ]),
        L.value.length ? X("", !0) : (S(), C("div", {
          key: 0,
          onClick: V[1] || (V[1] = (j) => ne("file_size")),
          class: "col-span-2 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l border-r dark:border-gray-700"
        }, [
          oe(E(_(w)("Size")) + " ", 1),
          ke(Me($t, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "file_size"]
          ])
        ])),
        L.value.length ? X("", !0) : (S(), C("div", {
          key: 1,
          onClick: V[2] || (V[2] = (j) => ne("last_modified")),
          class: "col-span-3 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center"
        }, [
          oe(E(_(w)("Date")) + " ", 1),
          ke(Me($t, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "last_modified"]
          ])
        ])),
        L.value.length ? (S(), C("div", {
          key: 2,
          onClick: V[3] || (V[3] = (j) => ne("path")),
          class: "col-span-5 py-1 leading-6 hover:bg-neutral-100 bg-neutral-50 dark:bg-gray-800 dark:hover:bg-gray-700/10 flex items-center justify-center border-l dark:border-gray-700"
        }, [
          oe(E(_(w)("Filepath")) + " ", 1),
          ke(Me($t, {
            direction: z.order == "asc" ? "down" : "up"
          }, null, 8, ["direction"]), [
            [Et, z.active && z.column == "path"]
          ])
        ])) : X("", !0)
      ])) : X("", !0),
      h("div", Bi, [
        h("div", {
          ref_key: "dragImage",
          ref: m,
          class: "absolute -z-50 -top-96"
        }, [
          Ui,
          h("div", Ki, E(p.value), 1)
        ], 512)
      ]),
      h("div", {
        onTouchstart: B,
        onContextmenu: V[10] || (V[10] = Ze((j) => _(r).emit("vf-contextmenu-show", { event: j, area: v.value, items: re() }), ["self", "prevent"])),
        class: ue([M.value ? "" : "resize-y", "h-full w-full text-xs vf-selector-area min-h-[150px] overflow-auto p-1 z-0"]),
        ref_key: "selectorArea",
        ref: v
      }, [
        L.value.length ? (S(!0), C(de, { key: 0 }, De(J(), (j, le) => (S(), C("div", {
          onDblclick: (F) => k(j),
          onTouchstart: V[4] || (V[4] = (F) => R(F)),
          onTouchend: V[5] || (V[5] = (F) => N()),
          onContextmenu: Ze((F) => _(r).emit("vf-contextmenu-show", { event: F, area: v.value, items: re(), target: j }), ["prevent"]),
          class: ue(["vf-item-" + _($), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": le
        }, [
          h("div", Wi, [
            h("div", Xi, [
              j.type == "dir" ? (S(), C("svg", Zi, Fi)) : (S(), C("svg", Gi, Qi)),
              h("span", ea, E(j.basename), 1)
            ]),
            h("div", ta, E(j.path), 1)
          ])
        ], 42, Yi))), 256)) : X("", !0),
        t.view == "list" && !L.value.length ? (S(!0), C(de, { key: 1 }, De(J(), (j, le) => (S(), C("div", {
          draggable: "true",
          onDblclick: (F) => k(j),
          onTouchstart: V[6] || (V[6] = (F) => R(F)),
          onTouchend: V[7] || (V[7] = (F) => N()),
          onContextmenu: Ze((F) => _(r).emit("vf-contextmenu-show", { event: F, area: v.value, items: re(), target: j }), ["prevent"]),
          onDragstart: (F) => he(F),
          onDragover: (F) => be(F, j),
          onDrop: (F) => we(F, j),
          class: ue(["vf-item-" + _($), "grid grid-cols-1 border hover:bg-neutral-50 dark:hover:bg-gray-700 border-transparent my-0.5 w-full select-none"]),
          "data-type": j.type,
          "data-item": JSON.stringify(j),
          "data-index": le
        }, [
          h("div", sa, [
            h("div", oa, [
              j.type == "dir" ? (S(), C("svg", na, aa)) : (S(), C("svg", la, da)),
              h("span", ua, E(j.basename), 1)
            ]),
            h("div", ha, E(j.file_size ? _(rs)(j.file_size) : ""), 1),
            h("div", fa, E(_(ss)(j.last_modified)), 1)
          ])
        ], 42, ra))), 256)) : X("", !0),
        t.view == "grid" && !L.value.length ? (S(!0), C(de, { key: 2 }, De(J(!1), (j, le) => {
          var F, pe;
          return S(), C("div", {
            draggable: "true",
            onDblclick: (Q) => k(j),
            onTouchstart: V[8] || (V[8] = (Q) => R(Q)),
            onTouchend: V[9] || (V[9] = (Q) => N()),
            onContextmenu: Ze((Q) => _(r).emit("vf-contextmenu-show", { event: Q, area: v.value, items: re(), target: j }), ["prevent"]),
            onDragstart: (Q) => he(Q),
            onDragover: (Q) => be(Q, j),
            onDrop: (Q) => we(Q, j),
            onClick: (Q) => q(Q, j),
            class: ue(["vf-item-" + _($), "border border-transparent hover:bg-neutral-50 m-1 dark:hover:bg-gray-700 inline-flex w-[5.5rem] h-20 md:w-24 text-center justify-center select-none"]),
            "data-type": j.type,
            "data-item": JSON.stringify(j),
            "data-index": le
          }, [
            h("div", null, [
              h("div", ga, [
                j.type == "dir" ? (S(), C("svg", ma, ba)) : ((F = j.mime_type) != null ? F : "").startsWith("image") ? (S(), C("img", {
                  key: 1,
                  class: "lazy h-10 md:h-12 m-auto",
                  "data-src": _(Ft)(_(n).value, j.path),
                  alt: j.basename
                }, null, 8, ya)) : (S(), C("svg", wa, _a)),
                !((pe = j.mime_type) != null ? pe : "").startsWith("image") && j.type != "dir" ? (S(), C("div", xa, E(l(j.extension)), 1)) : X("", !0)
              ]),
              h("span", ka, E(u(j.basename)), 1)
            ])
          ], 42, pa);
        }), 256)) : X("", !0)
      ], 34),
      Me(An)
    ]));
  }
}), Ma = "1", Ea = { class: "p-1 text-xs border-t border-neutral-300 dark:border-gray-700/50 flex justify-between select-none" }, $a = { class: "flex leading-5 items-center" }, Ta = ["aria-label"], Aa = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
  })
], -1), Ia = [
  Aa
], La = ["value"], Oa = { class: "ml-3" }, Pa = { key: 0 }, Na = { class: "ml-1" }, ja = { class: "flex leading-5 items-center" }, za = {
  value: "",
  disabled: ""
}, Va = /* @__PURE__ */ Co('<option value="en">English</option><option value="fr">French</option><option value="fa">Persian</option><option value="ru">Russian</option><option value="tr">Turkish</option>', 5), Ra = ["aria-label"], Ha = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 stroke-slate-500 cursor-pointer",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "2"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
  })
], -1), Ba = [
  Ha
], Ua = {
  name: "VFStatusbar"
}, Ka = /* @__PURE__ */ Object.assign(Ua, {
  props: {
    data: Object
  },
  setup(t) {
    const e = P("emitter"), { getStore: r, setStore: o } = P("storage"), a = A(0), n = P("adapter"), { t: l, changeLocale: u } = P("i18n"), v = A(r("locale", "")), m = () => {
      e.emit("vf-search-exit"), e.emit("vf-fetch", { params: { q: "index", adapter: n.value } }), o("adapter", n.value);
    };
    e.on("vf-nodes-selected", (b) => {
      a.value = b.length;
    });
    const p = A("");
    return e.on("vf-search-query", ({ newQuery: b }) => {
      p.value = b;
    }), (b, w) => (S(), C("div", Ea, [
      h("div", $a, [
        h("div", {
          class: "mx-2",
          "aria-label": _(l)("Storage"),
          "data-microtip-position": "top-right",
          role: "tooltip"
        }, Ia, 8, Ta),
        ke(h("select", {
          "onUpdate:modelValue": w[0] || (w[0] = ($) => Qr(n) ? n.value = $ : null),
          onChange: m,
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8"
        }, [
          (S(!0), C(de, null, De(t.data.storages, ($) => (S(), C("option", { value: $ }, E($), 9, La))), 256))
        ], 544), [
          [$r, _(n)]
        ]),
        h("div", Oa, [
          p.value.length ? (S(), C("span", Pa, E(t.data.files.length) + " items found. ", 1)) : X("", !0),
          h("span", Na, E(a.value > 0 ? a.value + " " + _(l)("item(s) selected.") : ""), 1)
        ])
      ]),
      h("div", ja, [
        ke(h("select", {
          "onUpdate:modelValue": w[1] || (w[1] = ($) => v.value = $),
          onChange: w[2] || (w[2] = ($) => _(u)($.target.value)),
          class: "py-0.5 text-sm text-slate-500 dark:text-neutral-50 dark:bg-gray-700 rounded pl-2 pr-8 mr-3"
        }, [
          h("option", za, E(_(l)("Language")), 1),
          Va
        ], 544), [
          [$r, v.value]
        ]),
        h("span", {
          class: "mr-1",
          "aria-label": _(l)("About"),
          "data-microtip-position": "top-left",
          role: "tooltip",
          onClick: w[3] || (w[3] = ($) => _(e).emit("vf-modal-show", { type: "message", title: "Vuefinder " + _(Ma), message: _(l)("Vuefinder is a file manager component for vue 3.") }))
        }, Ba, 8, Ra)
      ])
    ]));
  }
}), Ya = (t, e = 0, r = !1) => {
  let o;
  return (...a) => {
    r && !o && t(...a), clearTimeout(o), o = setTimeout(() => {
      t(...a);
    }, e);
  };
}, Wa = (t, e, r) => {
  const o = A(t);
  return Mo((n, l) => ({
    get() {
      return n(), o.value;
    },
    set: Ya(
      (u) => {
        o.value = u, l();
      },
      e,
      r
    )
  }));
}, Xa = { class: "flex p-1.5 bg-neutral-100 dark:bg-gray-800 border-t border-b border-neutral-300 dark:border-gray-700/50 items-center select-none text-xs" }, Za = ["aria-label"], qa = /* @__PURE__ */ h("path", {
  "fill-rule": "evenodd",
  d: "M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z",
  "clip-rule": "evenodd"
}, null, -1), Fa = [
  qa
], Ga = ["aria-label"], Ja = /* @__PURE__ */ h("path", { d: "M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z" }, null, -1), Qa = [
  Ja
], el = ["aria-label"], tl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), rl = [
  tl
], sl = ["onClick"], ol = /* @__PURE__ */ h("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }, null, -1), nl = [
  ol
], il = { class: "flex leading-5" }, al = /* @__PURE__ */ h("span", { class: "text-neutral-300 dark:text-gray-600 mx-0.5" }, "/", -1), ll = ["title", "onClick"], cl = {
  key: 0,
  class: "animate-spin p-1 h-6 w-6 text-white ml-auto",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, dl = /* @__PURE__ */ h("circle", {
  class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
  cx: "12",
  cy: "12",
  r: "10",
  stroke: "currentColor",
  "stroke-width": "4"
}, null, -1), ul = /* @__PURE__ */ h("path", {
  class: "opacity-75",
  fill: "currentColor",
  d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
}, null, -1), hl = [
  dl,
  ul
], fl = {
  key: 3,
  class: "relative flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full"
}, pl = /* @__PURE__ */ h("svg", {
  class: "h-6 w-6 p-1 m-auto stroke-gray-400 fill-gray-100 dark:stroke-gray-400 dark:fill-gray-400/20",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  fill: "currentColor"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
  })
], -1), gl = /* @__PURE__ */ h("div", { class: "w-full" }, null, -1), ml = ["onKeydown", "placeholder"], vl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M6 18L18 6M6 6l12 12"
}, null, -1), bl = [
  vl
], yl = {
  name: "VFBreadcrumb"
}, wl = /* @__PURE__ */ Object.assign(yl, {
  props: {
    data: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), a = A(null), n = A([]), l = A(!1), u = A(null), { t: v } = P("i18n"), m = P("loadingState");
    r.on("vf-explorer-update", () => {
      var B;
      let N = [], O = [];
      a.value = (B = e.data.dirname) != null ? B : o.value + "://", a.value.length == 0 && (n.value = []), a.value.replace(o.value + "://", "").split("/").forEach(function(R) {
        N.push(R), N.join("/") != "" && O.push({
          basename: R,
          name: R,
          path: o.value + "://" + N.join("/"),
          type: "dir"
        });
      }), O.length > 4 && (O = O.slice(-5), O[0].name = ".."), n.value = O;
    });
    const p = () => {
      l.value = !1, w.value = "";
    };
    r.on("vf-search-exit", () => {
      p();
    });
    const b = () => {
      l.value = !0, zt(() => u.value.focus());
    }, w = Wa("", 400), $ = () => m.value;
    jt(w, (N) => {
      r.emit("vf-toast-clear"), r.emit("vf-search-query", { newQuery: N });
    });
    const M = () => n.value.length && !l.value, T = (N) => {
      var B;
      N.preventDefault();
      let O = JSON.parse(N.dataTransfer.getData("items"));
      if (O.find((R) => R.storage != o.value)) {
        alert("Moving items between different storages is not supported yet.");
        return;
      }
      r.emit("vf-modal-show", {
        type: "move",
        items: { from: O, to: (B = n.value[n.value.length - 2]) != null ? B : { path: o.value + "://" } }
      });
    }, L = (N) => {
      N.preventDefault(), M() ? N.dataTransfer.dropEffect = "copy" : (N.dataTransfer.dropEffect = "none", N.dataTransfer.effectAllowed = "none");
    }, U = () => {
      w.value == "" && p();
    };
    return (N, O) => (S(), C("div", Xa, [
      h("span", {
        "aria-label": _(v)("Go up a directory"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (S(), C("svg", {
          onDragover: O[0] || (O[0] = (B) => L(B)),
          onDrop: O[1] || (O[1] = (B) => T(B)),
          onClick: O[2] || (O[2] = (B) => {
            var R, k;
            return !M() || _(r).emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: (k = (R = n.value[n.value.length - 2]) == null ? void 0 : R.path) != null ? k : _(o) + "://" } });
          }),
          class: ue(["h-6 w-6 p-0.5 rounded", M() ? "text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer" : "text-gray-400 dark:text-neutral-500"]),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, Fa, 34))
      ], 8, Za),
      $() ? (S(), C("span", {
        key: 1,
        "aria-label": _(v)("Cancel"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (S(), C("svg", {
          onClick: O[4] || (O[4] = (B) => _(r).emit("vf-fetch-abort")),
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor",
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer"
        }, rl))
      ], 8, el)) : (S(), C("span", {
        key: 0,
        "aria-label": _(v)("Refresh"),
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, [
        (S(), C("svg", {
          onClick: O[3] || (O[3] = (B) => {
            _(r).emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: t.data.dirname } });
          }),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-300 dark:text-neutral-200 dark:hover:bg-gray-700 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "-40 -40 580 580",
          fill: "currentColor"
        }, Qa))
      ], 8, Ga)),
      l.value ? (S(), C("div", fl, [
        pl,
        gl,
        ke(h("input", {
          ref_key: "searchInput",
          ref: u,
          onKeydown: nt(p, ["esc"]),
          onBlur: U,
          "onUpdate:modelValue": O[6] || (O[6] = (B) => Qr(w) ? w.value = B : null),
          placeholder: _(v)("Search anything.."),
          class: "absolute ml-4 pt-1 pb-0 px-2 border-0 ring-0 outline-0 text-gray-600 focus:ring-transparent focus:border-transparent dark:focus:ring-transparent dark:focus:border-transparent dark:text-gray-300 bg-transparent",
          type: "text"
        }, null, 40, ml), [
          [it, _(w)]
        ]),
        (S(), C("svg", {
          class: "w-6 h-6 cursor-pointer",
          onClick: p,
          xmlns: "http://www.w3.org/2000/svg",
          fill: "none",
          viewBox: "0 0 24 24",
          "stroke-width": "1.5",
          stroke: "currentColor"
        }, bl))
      ])) : (S(), C("div", {
        key: 2,
        class: "group flex bg-white dark:bg-gray-700 items-center rounded p-1 ml-2 w-full",
        onClick: Ze(b, ["self"])
      }, [
        (S(), C("svg", {
          onClick: O[5] || (O[5] = (B) => _(r).emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter } })),
          class: "h-6 w-6 p-1 rounded text-slate-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-gray-800 cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 20 20",
          fill: "currentColor"
        }, nl)),
        h("div", il, [
          (S(!0), C(de, null, De(n.value, (B, R) => (S(), C("div", { key: R }, [
            al,
            h("span", {
              class: "px-1.5 py-1 text-slate-700 dark:text-slate-200 hover:bg-neutral-100 dark:hover:bg-gray-800 rounded cursor-pointer",
              title: B.basename,
              onClick: (k) => _(r).emit("vf-fetch", { params: { q: "index", adapter: t.data.adapter, path: B.path } })
            }, E(B.name), 9, ll)
          ]))), 128))
        ]),
        $() ? (S(), C("svg", cl, hl)) : X("", !0)
      ], 8, sl))
    ]));
  }
}), Sl = ["onClick"], _l = /* @__PURE__ */ h("span", { class: "px-1" }, null, -1), xl = {
  name: "VFContextMenu"
}, kl = /* @__PURE__ */ Object.assign(xl, {
  props: {
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter"), o = A(null), { apiUrl: a } = Le(), n = It({
      active: !1,
      items: [],
      positions: {
        left: 0,
        top: 0
      }
    }), l = A([]);
    r.on("vf-context-selected", (w) => {
      l.value = w;
    });
    const { t: u } = P("i18n"), v = {
      newfolder: {
        title: () => u("New Folder"),
        action: () => {
          r.emit("vf-modal-show", { type: "new-folder" });
        }
      },
      delete: {
        title: () => u("Delete"),
        action: () => {
          r.emit("vf-modal-show", { type: "delete", items: l });
        }
      },
      refresh: {
        title: () => u("Refresh"),
        action: () => {
          r.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
        }
      },
      preview: {
        title: () => u("Preview"),
        action: () => {
          r.emit("vf-modal-show", { type: "preview", adapter: e.current.adapter, item: l.value[0] });
        }
      },
      open: {
        title: () => u("Open"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: l.value[0].path } });
        }
      },
      openDir: {
        title: () => u("Open containing folder"),
        action: () => {
          r.emit("vf-search-exit"), r.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: l.value[0].dir } });
        }
      },
      download: {
        title: () => u("Download"),
        action: () => {
          const w = a.value + "?" + Ge({ q: "download", adapter: e.current.adapter, path: l.value[0].path });
          r.emit("vf-download", w);
        }
      },
      archive: {
        title: () => u("Archive"),
        action: () => {
          r.emit("vf-modal-show", { type: "archive", items: l });
        }
      },
      unarchive: {
        title: () => u("Unarchive"),
        action: () => {
          r.emit("vf-modal-show", { type: "unarchive", items: l });
        }
      },
      rename: {
        title: () => u("Rename"),
        action: () => {
          r.emit("vf-modal-show", { type: "rename", items: l });
        }
      }
    }, m = (w) => {
      r.emit("vf-contextmenu-hide"), w.action();
    }, p = A("");
    r.on("vf-search-query", ({ newQuery: w }) => {
      p.value = w;
    }), r.on("vf-contextmenu-show", ({ event: w, area: $, items: M, target: T = null }) => {
      if (n.items = [], p.value)
        if (T)
          n.items.push(v.openDir), r.emit("vf-context-selected", [T]);
        else
          return;
      else
        !T && !p.value ? (n.items.push(v.refresh), n.items.push(v.newfolder), r.emit("vf-context-selected", [])) : M.length > 1 && M.some((L) => L.path === T.path) ? (n.items.push(v.refresh), n.items.push(v.archive), n.items.push(v.delete), r.emit("vf-context-selected", M)) : (T.type == "dir" ? n.items.push(v.open) : (n.items.push(v.preview), n.items.push(v.download)), n.items.push(v.rename), T.mime_type == "application/zip" ? n.items.push(v.unarchive) : n.items.push(v.archive), n.items.push(v.delete), r.emit("vf-context-selected", [T]));
      b(w, $);
    }), r.on("vf-contextmenu-hide", () => {
      n.active = !1;
    });
    const b = (w, $) => {
      n.active = !0, zt(() => {
        let M = $.getBoundingClientRect(), T = w.pageX, L = w.pageY, U = o.value.offsetHeight, N = o.value.offsetWidth;
        T = M.right - w.pageX + window.scrollX < N ? T - N : T, L = M.bottom - w.pageY + window.scrollY < U ? L - U : L, n.positions = {
          left: T + "px",
          top: L + "px"
        };
      });
    };
    return (w, $) => n.active ? (S(), C("ul", {
      key: 0,
      class: "z-30 absolute text-xs bg-neutral-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-neutral-300 dark:border-gray-600 shadow rounded select-none",
      ref_key: "contextmenu",
      ref: o,
      style: es(n.positions)
    }, [
      (S(!0), C(de, null, De(n.items, (M) => (S(), C("li", {
        class: "px-2 py-1.5 cursor-pointer hover:bg-neutral-200 dark:hover:bg-gray-700",
        key: M.title,
        onClick: (T) => m(M)
      }, [
        _l,
        h("span", null, E(M.title()), 1)
      ], 8, Sl))), 128))
    ], 4)) : X("", !0);
  }
}), Dl = (t, e) => {
  const r = t[e];
  return r ? typeof r == "function" ? r() : Promise.resolve(r) : new Promise((o, a) => {
    (typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(a.bind(null, new Error("Unknown variable dynamic import: " + e)));
  });
};
async function Cl(t) {
  const e = await Dl(/* @__PURE__ */ Object.assign({ "../locales/en.json": () => import("./en.70efd54a.js"), "../locales/fa.json": () => import("./fa.1da73475.js"), "../locales/ru.json": () => import("./ru.8dbff4f2.js"), "../locales/tr.json": () => import("./tr.78307c97.js") }), `../locales/${t}.json`);
  return JSON.parse(e.default);
}
function Ml(t, e, r) {
  const { getStore: o, setStore: a } = qt(t), n = A({}), l = (m) => {
    Cl(m).then((p) => {
      n.value = p, a("locale", m), a("translations", p), r.emit("vf-toast-push", { label: "The language is set to " + m });
    }).catch((p) => {
      r.emit("vf-toast-push", { label: "The selected locale is not yet supported!", type: "error" }), l("en");
    });
  };
  o("locale") ? n.value = o("translations") : l(e);
  const u = (m, ...p) => p.length ? u(m = m.replace("%s", p.shift()), ...p) : m;
  function v(m, ...p) {
    return n.value.hasOwnProperty(m) ? u(n.value[m], ...p) : u(m, ...p);
  }
  return { t: v, changeLocale: l };
}
const El = { class: "vuefinder" }, $l = /* @__PURE__ */ h("iframe", {
  id: "download_frame",
  style: { display: "none" }
}, null, -1), Tl = {
  name: "VueFinder"
}, Al = /* @__PURE__ */ Object.assign(Tl, {
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
  setup(t, { emit: e }) {
    const r = t, o = $o(), { setStore: a, getStore: n } = qt(r.id), l = A(n("adapter"));
    Ye("emitter", o), Ye("storage", qt(r.id)), Ye("postData", r.postData), Ye("adapter", l), Ye("maxFileSize", r.maxFileSize);
    const u = Ml(r.id, r.locale, o);
    Ye("i18n", u);
    const { apiUrl: v, setApiUrl: m } = Le();
    m(r.url);
    const p = It({ adapter: l.value, storages: [], dirname: ".", files: [] }), b = A(n("viewport", "grid")), w = A(n("darkMode", r.dark));
    o.on("vf-darkMode-toggle", () => {
      w.value = !w.value, a("darkMode", w.value);
    });
    const $ = A(!1);
    Ye("loadingState", $);
    const M = A(n("full-screen", !1));
    o.on("vf-fullscreen-toggle", () => {
      M.value = !M.value, a("full-screen", M.value);
    }), o.on("vf-view-toggle", (N) => {
      b.value = N;
    });
    const T = It({
      active: !1,
      type: "delete",
      data: {}
    });
    o.on("vf-modal-close", () => {
      T.active = !1;
    }), o.on("vf-modal-show", (N) => {
      T.active = !0, T.type = N.type, T.data = N;
    });
    const L = (N) => {
      Object.assign(p, N), o.emit("vf-nodes-selected", {}), o.emit("vf-explorer-update");
    };
    let U;
    return o.on("vf-fetch-abort", () => {
      U.abort(), $.value = !1;
    }), o.on("vf-file-select", (N) => {
      e("change", N);
    }), o.on("vf-fetch", ({ params: N, onSuccess: O = null, onError: B = null }) => {
      ["index", "search"].includes(N.q) && (U && U.abort(), $.value = !0), U = new AbortController();
      const R = U.signal;
      Ot(v.value, { params: N, signal: R }).then((k) => {
        l.value = k.adapter, ["index", "search"].includes(N.q) && ($.value = !1), o.emit("vf-modal-close"), L(k), O(k);
      }).catch((k) => {
        B && B(k);
      }).finally(() => {
      });
    }), o.on("vf-download", (N) => {
      document.getElementById("download_frame").src = N, o.emit("vf-modal-close");
    }), Ee(() => {
      o.emit("vf-fetch", { params: { q: "index", adapter: l.value } });
    }), (N, O) => (S(), C("div", El, [
      h("div", {
        class: ue(w.value ? "dark" : "")
      }, [
        h("div", {
          class: ue([M.value ? "fixed w-screen inset-0 z-20" : "relative rounded-md", "border flex flex-col bg-white dark:bg-gray-800 text-gray-700 dark:text-neutral-400 border-neutral-300 dark:border-gray-900 min-w-min select-none"]),
          style: es(M.value ? "" : "max-height: " + t.maxHeight),
          onMousedown: O[0] || (O[0] = (B) => _(o).emit("vf-contextmenu-hide")),
          onTouchstart: O[1] || (O[1] = (B) => _(o).emit("vf-contextmenu-hide"))
        }, [
          Me(yn, { data: p }, null, 8, ["data"]),
          Me(wl, { data: p }, null, 8, ["data"]),
          Me(Ca, {
            view: b.value,
            data: p
          }, null, 8, ["view", "data"]),
          Me(Ka, { data: p }, null, 8, ["data"])
        ], 38),
        T.active ? (S(), G(Eo("v-f-modal-" + T.type), {
          key: 0,
          selection: T.data,
          current: p
        }, null, 8, ["selection", "current"])) : X("", !0),
        Me(kl, { current: p }, null, 8, ["current"]),
        $l
      ], 2)
    ]));
  }
}), Il = /* @__PURE__ */ h("div", { class: "fixed inset-0 bg-gray-500 dark:bg-gray-600 dark:bg-opacity-75 bg-opacity-75 transition-opacity" }, null, -1), Ll = { class: "fixed z-10 inset-0 overflow-hidden" }, Ol = { class: "relative bg-white dark:bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-4xl md:max-w-2xl lg:max-w-3xl xl:max-w-5xl w-full" }, Pl = { class: "bg-white dark:bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4" }, Nl = { class: "bg-gray-50 dark:bg-gray-800 dark:border-t dark:border-gray-700 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse" }, Oe = {
  __name: "ModalLayout",
  setup(t) {
    const e = P("emitter");
    return Ee(() => {
      const r = document.querySelector(".v-f-modal input");
      r && r.focus();
    }), (r, o) => (S(), C("div", {
      class: "v-f-modal relative z-30",
      "aria-labelledby": "modal-title",
      role: "dialog",
      "aria-modal": "true",
      onKeyup: o[1] || (o[1] = nt((a) => _(e).emit("vf-modal-close"), ["esc"])),
      tabindex: "0"
    }, [
      Il,
      h("div", Ll, [
        h("div", {
          class: "flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0",
          onMousedown: o[0] || (o[0] = Ze((a) => _(e).emit("vf-modal-close"), ["self"]))
        }, [
          h("div", Ol, [
            h("div", Pl, [
              Zt(r.$slots, "default")
            ]),
            h("div", Nl, [
              Zt(r.$slots, "buttons")
            ])
          ])
        ], 32)
      ])
    ], 32));
  }
}, jl = ["aria-label"], zl = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "1.5",
  stroke: "currentColor",
  class: "w-5 h-5"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M6 18L18 6M6 6l12 12"
  })
], -1), Vl = [
  zl
], Rl = {
  name: "Message"
}, Pe = /* @__PURE__ */ Object.assign(Rl, {
  props: {
    error: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["hidden"],
  setup(t, { emit: e }) {
    var u;
    const { t: r } = P("i18n"), o = A(!1), a = A(null), n = A((u = a.value) == null ? void 0 : u.strMessage);
    jt(n, () => o.value = !1);
    const l = () => {
      e("hidden"), o.value = !0;
    };
    return (v, m) => (S(), C("div", null, [
      o.value ? X("", !0) : (S(), C("div", {
        key: 0,
        ref_key: "strMessage",
        ref: a,
        class: ue(["flex mt-1 p-1 px-2 rounded text-sm", t.error ? "bg-red-100 text-red-600" : "bg-emerald-100 text-emerald-600"])
      }, [
        Zt(v.$slots, "default"),
        h("div", {
          class: "ml-auto cursor-pointer",
          onClick: l,
          "aria-label": _(r)("Close"),
          "data-microtip-position": "top-left",
          role: "tooltip"
        }, Vl, 8, jl)
      ], 2))
    ]));
  }
}), Hl = { class: "sm:flex sm:items-start" }, Bl = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    })
  ])
], -1), Ul = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Kl = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Yl = { class: "mt-2" }, Wl = { class: "text-sm text-gray-500" }, Xl = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Zl = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ql = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Fl = [
  ql
], Gl = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Jl = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ql = [
  Jl
], ec = { class: "ml-1.5" }, tc = { class: "m-auto font-bold text-red-500 text-sm dark:text-red-200 text-center" }, rc = {
  name: "VFModalDelete"
}, sc = /* @__PURE__ */ Object.assign(rc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = A(e.selection.items), l = A(""), u = () => {
      n.value.length && r.emit("vf-fetch", {
        params: {
          q: "delete",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(n.value.map(({ path: v, type: m }) => ({ path: v, type: m })))
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("Files deleted.") });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, m) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Yes, Delete!")), 1),
        h("button", {
          type: "button",
          onClick: m[1] || (m[1] = (p) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1),
        h("div", tc, E(_(a)("This action cannot be undone.")), 1)
      ]),
      default: Z(() => [
        h("div", Hl, [
          Bl,
          h("div", Ul, [
            h("h3", Kl, E(_(a)("Delete files")), 1),
            h("div", Yl, [
              h("p", Wl, E(_(a)("Are you sure you want to delete these files?")), 1),
              (S(!0), C(de, null, De(n.value, (p) => (S(), C("p", Xl, [
                p.type == "dir" ? (S(), C("svg", Zl, Fl)) : (S(), C("svg", Gl, Ql)),
                h("span", ec, E(p.basename), 1)
              ]))), 256)),
              l.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: m[0] || (m[0] = (p) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(l.value), 1)
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
}), oc = { class: "sm:flex sm:items-start" }, nc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    "stroke-width": "2"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    })
  ])
], -1), ic = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, ac = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, lc = { class: "mt-2" }, cc = { class: "text-sm text-gray-500" }, dc = {
  name: "VFModalMessage"
}, uc = /* @__PURE__ */ Object.assign(dc, {
  props: {
    selection: Object
  },
  setup(t) {
    const e = P("emitter"), { t: r } = P("i18n");
    return (o, a) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: a[0] || (a[0] = (n) => _(e).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(r)("Close")), 1)
      ]),
      default: Z(() => {
        var n, l, u, v;
        return [
          h("div", oc, [
            nc,
            h("div", ic, [
              h("h3", ac, E((l = (n = t.selection) == null ? void 0 : n.title) != null ? l : "Title"), 1),
              h("div", lc, [
                h("p", cc, E((v = (u = t.selection) == null ? void 0 : u.message) != null ? v : "Message") + ".", 1)
              ])
            ])
          ])
        ];
      }),
      _: 1
    }));
  }
}), hc = { class: "sm:flex sm:items-start" }, fc = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
    })
  ])
], -1), pc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, gc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, mc = { class: "mt-2" }, vc = { class: "text-sm text-gray-500" }, bc = ["onKeyup", "placeholder"], yc = {
  name: "VFModalNewFolder"
}, wc = /* @__PURE__ */ Object.assign(yc, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = A(""), l = A(""), u = () => {
      n.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfolder",
          adapter: o.value,
          path: e.current.dirname,
          name: n.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is created.", n.value) });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, m) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: m[2] || (m[2] = (p) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", hc, [
          fc,
          h("div", pc, [
            h("h3", gc, E(_(a)("New Folder")), 1),
            h("div", mc, [
              h("p", vc, E(_(a)("Create a new folder")), 1),
              ke(h("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (p) => n.value = p),
                onKeyup: nt(u, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: _(a)("Folder Name"),
                type: "text"
              }, null, 40, bc), [
                [it, n.value]
              ]),
              l.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: m[1] || (m[1] = (p) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(l.value), 1)
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
}), Sc = { class: "sm:flex sm:items-start" }, _c = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
    })
  ])
], -1), xc = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, kc = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Dc = { class: "mt-2" }, Cc = { class: "text-sm text-gray-500" }, Mc = ["onKeyup", "placeholder"], Ec = {
  name: "VFModalNewFile"
}, $c = /* @__PURE__ */ Object.assign(Ec, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = A(""), l = A(""), u = () => {
      n.value != "" && r.emit("vf-fetch", {
        params: {
          q: "newfile",
          adapter: o.value,
          path: e.current.dirname,
          name: n.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is created.", n.value) });
        },
        onError: (v) => {
          l.value = a(v.message);
        }
      });
    };
    return (v, m) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Create")), 1),
        h("button", {
          type: "button",
          onClick: m[2] || (m[2] = (p) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", Sc, [
          _c,
          h("div", xc, [
            h("h3", kc, E(_(a)("New File")), 1),
            h("div", Dc, [
              h("p", Cc, E(_(a)("Create a new file")), 1),
              ke(h("input", {
                "onUpdate:modelValue": m[0] || (m[0] = (p) => n.value = p),
                onKeyup: nt(u, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: _(a)("File Name"),
                type: "text"
              }, null, 40, Mc), [
                [it, n.value]
              ]),
              l.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: m[1] || (m[1] = (p) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(l.value), 1)
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
}), Tc = { class: "flex" }, Ac = ["aria-label"], Ic = { class: "ml-auto mb-2" }, Lc = {
  key: 0,
  class: "p-2 border font-normal whitespace-pre-wrap border-gray-200 dark:border-gray-700/50 dark:text-gray-200 rounded min-h-[200px] max-h-[60vh] text-xs overflow-auto"
}, Oc = { key: 1 }, Pc = {
  __name: "Text",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(t, { emit: e }) {
    const r = t, o = A(""), a = A(""), n = A(null), l = A(!1), { apiUrl: u } = Le(), v = A(""), m = A(!1), { t: p } = P("i18n");
    Ee(() => {
      Ot(u.value, {
        params: { q: "preview", adapter: r.selection.adapter, path: r.selection.item.path },
        json: !1
      }).then((M) => {
        o.value = M, e("load");
      });
    });
    const b = () => {
      l.value = !l.value, a.value = o.value, l.value == !0 && zt(() => {
        n.value.focus();
      });
    }, w = P("postData"), $ = () => {
      v.value = "", m.value = !1, Ot(u.value, {
        method: "POST",
        params: Object.assign(w, {
          q: "save",
          adapter: r.selection.adapter,
          path: r.selection.item.path,
          content: a.value
        }),
        json: !1
      }).then((M) => {
        v.value = p("Updated."), o.value = M, e("load"), l.value = !l.value;
      }).catch((M) => {
        v.value = p(M.message), m.value = !0;
      });
    };
    return (M, T) => (S(), C(de, null, [
      h("div", Tc, [
        h("div", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": t.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(t.selection.item.basename), 9, Ac),
        h("div", Ic, [
          l.value ? (S(), C("button", {
            key: 0,
            onClick: $,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(_(p)("Save")), 1)) : X("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: T[0] || (T[0] = (L) => b())
          }, E(l.value ? _(p)("Cancel") : _(p)("Edit")), 1)
        ])
      ]),
      h("div", null, [
        l.value ? (S(), C("div", Oc, [
          ke(h("textarea", {
            ref_key: "editInput",
            ref: n,
            "onUpdate:modelValue": T[1] || (T[1] = (L) => a.value = L),
            class: "w-full p-2 rounded dark:bg-gray-700 dark:text-gray-200 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:selection:bg-gray-500 min-h-[200px] max-h-[60vh] text-xs",
            name: "text",
            id: "",
            cols: "30",
            rows: "10"
          }, null, 512), [
            [it, a.value]
          ])
        ])) : (S(), C("pre", Lc, E(o.value), 1)),
        v.value.length ? (S(), G(Pe, {
          key: 2,
          onHidden: T[2] || (T[2] = (L) => v.value = ""),
          error: m.value
        }, {
          default: Z(() => [
            oe(E(v.value), 1)
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
function Nr(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    e && (o = o.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function Is(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Nr(Object(r), !0).forEach(function(o) {
      zc(t, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Nr(Object(r)).forEach(function(o) {
      Object.defineProperty(t, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return t;
}
function Jt(t) {
  return Jt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Jt(t);
}
function Nc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function jr(t, e) {
  for (var r = 0; r < e.length; r++) {
    var o = e[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
  }
}
function jc(t, e, r) {
  return e && jr(t.prototype, e), r && jr(t, r), Object.defineProperty(t, "prototype", {
    writable: !1
  }), t;
}
function zc(t, e, r) {
  return e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function Ls(t) {
  return Vc(t) || Rc(t) || Hc(t) || Bc();
}
function Vc(t) {
  if (Array.isArray(t))
    return Qt(t);
}
function Rc(t) {
  if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
    return Array.from(t);
}
function Hc(t, e) {
  if (!!t) {
    if (typeof t == "string")
      return Qt(t, e);
    var r = Object.prototype.toString.call(t).slice(8, -1);
    if (r === "Object" && t.constructor && (r = t.constructor.name), r === "Map" || r === "Set")
      return Array.from(t);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Qt(t, e);
  }
}
function Qt(t, e) {
  (e == null || e > t.length) && (e = t.length);
  for (var r = 0, o = new Array(e); r < e; r++)
    o[r] = t[r];
  return o;
}
function Bc() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var Ut = typeof window < "u" && typeof window.document < "u", Ie = Ut ? window : {}, yr = Ut && Ie.document.documentElement ? "ontouchstart" in Ie.document.documentElement : !1, wr = Ut ? "PointerEvent" in Ie : !1, ee = "cropper", Sr = "all", Os = "crop", Ps = "move", Ns = "zoom", We = "e", Xe = "w", Qe = "s", je = "n", gt = "ne", mt = "nw", vt = "se", bt = "sw", er = "".concat(ee, "-crop"), zr = "".concat(ee, "-disabled"), me = "".concat(ee, "-hidden"), Vr = "".concat(ee, "-hide"), Uc = "".concat(ee, "-invisible"), Nt = "".concat(ee, "-modal"), tr = "".concat(ee, "-move"), St = "".concat(ee, "Action"), Tt = "".concat(ee, "Preview"), _r = "crop", js = "move", zs = "none", rr = "crop", sr = "cropend", or = "cropmove", nr = "cropstart", Rr = "dblclick", Kc = yr ? "touchstart" : "mousedown", Yc = yr ? "touchmove" : "mousemove", Wc = yr ? "touchend touchcancel" : "mouseup", Hr = wr ? "pointerdown" : Kc, Br = wr ? "pointermove" : Yc, Ur = wr ? "pointerup pointercancel" : Wc, Kr = "ready", Yr = "resize", Wr = "wheel", ir = "zoom", Xr = "image/jpeg", Xc = /^e|w|s|n|se|sw|ne|nw|all|crop|move|zoom$/, Zc = /^data:/, qc = /^data:image\/jpeg;base64,/, Fc = /^img|canvas$/i, Vs = 200, Rs = 100, Zr = {
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
  minContainerWidth: Vs,
  minContainerHeight: Rs,
  ready: null,
  cropstart: null,
  cropmove: null,
  cropend: null,
  crop: null,
  zoom: null
}, Gc = '<div class="cropper-container" touch-action="none"><div class="cropper-wrap-box"><div class="cropper-canvas"></div></div><div class="cropper-drag-box"></div><div class="cropper-crop-box"><span class="cropper-view-box"></span><span class="cropper-dashed dashed-h"></span><span class="cropper-dashed dashed-v"></span><span class="cropper-center"></span><span class="cropper-face"></span><span class="cropper-line line-e" data-cropper-action="e"></span><span class="cropper-line line-n" data-cropper-action="n"></span><span class="cropper-line line-w" data-cropper-action="w"></span><span class="cropper-line line-s" data-cropper-action="s"></span><span class="cropper-point point-e" data-cropper-action="e"></span><span class="cropper-point point-n" data-cropper-action="n"></span><span class="cropper-point point-w" data-cropper-action="w"></span><span class="cropper-point point-s" data-cropper-action="s"></span><span class="cropper-point point-ne" data-cropper-action="ne"></span><span class="cropper-point point-nw" data-cropper-action="nw"></span><span class="cropper-point point-sw" data-cropper-action="sw"></span><span class="cropper-point point-se" data-cropper-action="se"></span></div></div>', Jc = Number.isNaN || Ie.isNaN;
function K(t) {
  return typeof t == "number" && !Jc(t);
}
var qr = function(e) {
  return e > 0 && e < 1 / 0;
};
function Yt(t) {
  return typeof t > "u";
}
function Fe(t) {
  return Jt(t) === "object" && t !== null;
}
var Qc = Object.prototype.hasOwnProperty;
function et(t) {
  if (!Fe(t))
    return !1;
  try {
    var e = t.constructor, r = e.prototype;
    return e && r && Qc.call(r, "isPrototypeOf");
  } catch {
    return !1;
  }
}
function ge(t) {
  return typeof t == "function";
}
var ed = Array.prototype.slice;
function Hs(t) {
  return Array.from ? Array.from(t) : ed.call(t);
}
function se(t, e) {
  return t && ge(e) && (Array.isArray(t) || K(t.length) ? Hs(t).forEach(function(r, o) {
    e.call(t, r, o, t);
  }) : Fe(t) && Object.keys(t).forEach(function(r) {
    e.call(t, t[r], r, t);
  })), t;
}
var te = Object.assign || function(e) {
  for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
    o[a - 1] = arguments[a];
  return Fe(e) && o.length > 0 && o.forEach(function(n) {
    Fe(n) && Object.keys(n).forEach(function(l) {
      e[l] = n[l];
    });
  }), e;
}, td = /\.\d*(?:0|9){12}\d*$/;
function rt(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e11;
  return td.test(t) ? Math.round(t * e) / e : t;
}
var rd = /^width|height|left|top|marginLeft|marginTop$/;
function ze(t, e) {
  var r = t.style;
  se(e, function(o, a) {
    rd.test(a) && K(o) && (o = "".concat(o, "px")), r[a] = o;
  });
}
function sd(t, e) {
  return t.classList ? t.classList.contains(e) : t.className.indexOf(e) > -1;
}
function ce(t, e) {
  if (!!e) {
    if (K(t.length)) {
      se(t, function(o) {
        ce(o, e);
      });
      return;
    }
    if (t.classList) {
      t.classList.add(e);
      return;
    }
    var r = t.className.trim();
    r ? r.indexOf(e) < 0 && (t.className = "".concat(r, " ").concat(e)) : t.className = e;
  }
}
function Ae(t, e) {
  if (!!e) {
    if (K(t.length)) {
      se(t, function(r) {
        Ae(r, e);
      });
      return;
    }
    if (t.classList) {
      t.classList.remove(e);
      return;
    }
    t.className.indexOf(e) >= 0 && (t.className = t.className.replace(e, ""));
  }
}
function tt(t, e, r) {
  if (!!e) {
    if (K(t.length)) {
      se(t, function(o) {
        tt(o, e, r);
      });
      return;
    }
    r ? ce(t, e) : Ae(t, e);
  }
}
var od = /([a-z\d])([A-Z])/g;
function xr(t) {
  return t.replace(od, "$1-$2").toLowerCase();
}
function ar(t, e) {
  return Fe(t[e]) ? t[e] : t.dataset ? t.dataset[e] : t.getAttribute("data-".concat(xr(e)));
}
function _t(t, e, r) {
  Fe(r) ? t[e] = r : t.dataset ? t.dataset[e] = r : t.setAttribute("data-".concat(xr(e)), r);
}
function nd(t, e) {
  if (Fe(t[e]))
    try {
      delete t[e];
    } catch {
      t[e] = void 0;
    }
  else if (t.dataset)
    try {
      delete t.dataset[e];
    } catch {
      t.dataset[e] = void 0;
    }
  else
    t.removeAttribute("data-".concat(xr(e)));
}
var Bs = /\s\s*/, Us = function() {
  var t = !1;
  if (Ut) {
    var e = !1, r = function() {
    }, o = Object.defineProperty({}, "once", {
      get: function() {
        return t = !0, e;
      },
      set: function(n) {
        e = n;
      }
    });
    Ie.addEventListener("test", r, o), Ie.removeEventListener("test", r, o);
  }
  return t;
}();
function Ce(t, e, r) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r;
  e.trim().split(Bs).forEach(function(n) {
    if (!Us) {
      var l = t.listeners;
      l && l[n] && l[n][r] && (a = l[n][r], delete l[n][r], Object.keys(l[n]).length === 0 && delete l[n], Object.keys(l).length === 0 && delete t.listeners);
    }
    t.removeEventListener(n, a, o);
  });
}
function xe(t, e, r) {
  var o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, a = r;
  e.trim().split(Bs).forEach(function(n) {
    if (o.once && !Us) {
      var l = t.listeners, u = l === void 0 ? {} : l;
      a = function() {
        delete u[n][r], t.removeEventListener(n, a, o);
        for (var m = arguments.length, p = new Array(m), b = 0; b < m; b++)
          p[b] = arguments[b];
        r.apply(t, p);
      }, u[n] || (u[n] = {}), u[n][r] && t.removeEventListener(n, u[n][r], o), u[n][r] = a, t.listeners = u;
    }
    t.addEventListener(n, a, o);
  });
}
function st(t, e, r) {
  var o;
  return ge(Event) && ge(CustomEvent) ? o = new CustomEvent(e, {
    detail: r,
    bubbles: !0,
    cancelable: !0
  }) : (o = document.createEvent("CustomEvent"), o.initCustomEvent(e, !0, !0, r)), t.dispatchEvent(o);
}
function Ks(t) {
  var e = t.getBoundingClientRect();
  return {
    left: e.left + (window.pageXOffset - document.documentElement.clientLeft),
    top: e.top + (window.pageYOffset - document.documentElement.clientTop)
  };
}
var Wt = Ie.location, id = /^(\w+:)\/\/([^:/?#]*):?(\d*)/i;
function Fr(t) {
  var e = t.match(id);
  return e !== null && (e[1] !== Wt.protocol || e[2] !== Wt.hostname || e[3] !== Wt.port);
}
function Gr(t) {
  var e = "timestamp=".concat(new Date().getTime());
  return t + (t.indexOf("?") === -1 ? "?" : "&") + e;
}
function yt(t) {
  var e = t.rotate, r = t.scaleX, o = t.scaleY, a = t.translateX, n = t.translateY, l = [];
  K(a) && a !== 0 && l.push("translateX(".concat(a, "px)")), K(n) && n !== 0 && l.push("translateY(".concat(n, "px)")), K(e) && e !== 0 && l.push("rotate(".concat(e, "deg)")), K(r) && r !== 1 && l.push("scaleX(".concat(r, ")")), K(o) && o !== 1 && l.push("scaleY(".concat(o, ")"));
  var u = l.length ? l.join(" ") : "none";
  return {
    WebkitTransform: u,
    msTransform: u,
    transform: u
  };
}
function ad(t) {
  var e = Is({}, t), r = 0;
  return se(t, function(o, a) {
    delete e[a], se(e, function(n) {
      var l = Math.abs(o.startX - n.startX), u = Math.abs(o.startY - n.startY), v = Math.abs(o.endX - n.endX), m = Math.abs(o.endY - n.endY), p = Math.sqrt(l * l + u * u), b = Math.sqrt(v * v + m * m), w = (b - p) / p;
      Math.abs(w) > Math.abs(r) && (r = w);
    });
  }), r;
}
function At(t, e) {
  var r = t.pageX, o = t.pageY, a = {
    endX: r,
    endY: o
  };
  return e ? a : Is({
    startX: r,
    startY: o
  }, a);
}
function ld(t) {
  var e = 0, r = 0, o = 0;
  return se(t, function(a) {
    var n = a.startX, l = a.startY;
    e += n, r += l, o += 1;
  }), e /= o, r /= o, {
    pageX: e,
    pageY: r
  };
}
function Ve(t) {
  var e = t.aspectRatio, r = t.height, o = t.width, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "contain", n = qr(o), l = qr(r);
  if (n && l) {
    var u = r * e;
    a === "contain" && u > o || a === "cover" && u < o ? r = o / e : o = r * e;
  } else
    n ? r = o / e : l && (o = r * e);
  return {
    width: o,
    height: r
  };
}
function cd(t) {
  var e = t.width, r = t.height, o = t.degree;
  if (o = Math.abs(o) % 180, o === 90)
    return {
      width: r,
      height: e
    };
  var a = o % 90 * Math.PI / 180, n = Math.sin(a), l = Math.cos(a), u = e * l + r * n, v = e * n + r * l;
  return o > 90 ? {
    width: v,
    height: u
  } : {
    width: u,
    height: v
  };
}
function dd(t, e, r, o) {
  var a = e.aspectRatio, n = e.naturalWidth, l = e.naturalHeight, u = e.rotate, v = u === void 0 ? 0 : u, m = e.scaleX, p = m === void 0 ? 1 : m, b = e.scaleY, w = b === void 0 ? 1 : b, $ = r.aspectRatio, M = r.naturalWidth, T = r.naturalHeight, L = o.fillColor, U = L === void 0 ? "transparent" : L, N = o.imageSmoothingEnabled, O = N === void 0 ? !0 : N, B = o.imageSmoothingQuality, R = B === void 0 ? "low" : B, k = o.maxWidth, z = k === void 0 ? 1 / 0 : k, J = o.maxHeight, ne = J === void 0 ? 1 / 0 : J, re = o.minWidth, he = re === void 0 ? 0 : re, we = o.minHeight, be = we === void 0 ? 0 : we, fe = document.createElement("canvas"), q = fe.getContext("2d"), I = Ve({
    aspectRatio: $,
    width: z,
    height: ne
  }), V = Ve({
    aspectRatio: $,
    width: he,
    height: be
  }, "cover"), j = Math.min(I.width, Math.max(V.width, M)), le = Math.min(I.height, Math.max(V.height, T)), F = Ve({
    aspectRatio: a,
    width: z,
    height: ne
  }), pe = Ve({
    aspectRatio: a,
    width: he,
    height: be
  }, "cover"), Q = Math.min(F.width, Math.max(pe.width, n)), lt = Math.min(F.height, Math.max(pe.height, l)), ct = [-Q / 2, -lt / 2, Q, lt];
  return fe.width = rt(j), fe.height = rt(le), q.fillStyle = U, q.fillRect(0, 0, j, le), q.save(), q.translate(j / 2, le / 2), q.rotate(v * Math.PI / 180), q.scale(p, w), q.imageSmoothingEnabled = O, q.imageSmoothingQuality = R, q.drawImage.apply(q, [t].concat(Ls(ct.map(function(Ct) {
    return Math.floor(rt(Ct));
  })))), q.restore(), fe;
}
var Ys = String.fromCharCode;
function ud(t, e, r) {
  var o = "";
  r += e;
  for (var a = e; a < r; a += 1)
    o += Ys(t.getUint8(a));
  return o;
}
var hd = /^data:.*,/;
function fd(t) {
  var e = t.replace(hd, ""), r = atob(e), o = new ArrayBuffer(r.length), a = new Uint8Array(o);
  return se(a, function(n, l) {
    a[l] = r.charCodeAt(l);
  }), o;
}
function pd(t, e) {
  for (var r = [], o = 8192, a = new Uint8Array(t); a.length > 0; )
    r.push(Ys.apply(null, Hs(a.subarray(0, o)))), a = a.subarray(o);
  return "data:".concat(e, ";base64,").concat(btoa(r.join("")));
}
function gd(t) {
  var e = new DataView(t), r;
  try {
    var o, a, n;
    if (e.getUint8(0) === 255 && e.getUint8(1) === 216)
      for (var l = e.byteLength, u = 2; u + 1 < l; ) {
        if (e.getUint8(u) === 255 && e.getUint8(u + 1) === 225) {
          a = u;
          break;
        }
        u += 1;
      }
    if (a) {
      var v = a + 4, m = a + 10;
      if (ud(e, v, 4) === "Exif") {
        var p = e.getUint16(m);
        if (o = p === 18761, (o || p === 19789) && e.getUint16(m + 2, o) === 42) {
          var b = e.getUint32(m + 4, o);
          b >= 8 && (n = m + b);
        }
      }
    }
    if (n) {
      var w = e.getUint16(n, o), $, M;
      for (M = 0; M < w; M += 1)
        if ($ = n + M * 12 + 2, e.getUint16($, o) === 274) {
          $ += 8, r = e.getUint16($, o), e.setUint16($, 1, o);
          break;
        }
    }
  } catch {
    r = 1;
  }
  return r;
}
function md(t) {
  var e = 0, r = 1, o = 1;
  switch (t) {
    case 2:
      r = -1;
      break;
    case 3:
      e = -180;
      break;
    case 4:
      o = -1;
      break;
    case 5:
      e = 90, o = -1;
      break;
    case 6:
      e = 90;
      break;
    case 7:
      e = 90, r = -1;
      break;
    case 8:
      e = -90;
      break;
  }
  return {
    rotate: e,
    scaleX: r,
    scaleY: o
  };
}
var vd = {
  render: function() {
    this.initContainer(), this.initCanvas(), this.initCropBox(), this.renderCanvas(), this.cropped && this.renderCropBox();
  },
  initContainer: function() {
    var e = this.element, r = this.options, o = this.container, a = this.cropper, n = Number(r.minContainerWidth), l = Number(r.minContainerHeight);
    ce(a, me), Ae(e, me);
    var u = {
      width: Math.max(o.offsetWidth, n >= 0 ? n : Vs),
      height: Math.max(o.offsetHeight, l >= 0 ? l : Rs)
    };
    this.containerData = u, ze(a, {
      width: u.width,
      height: u.height
    }), ce(e, me), Ae(a, me);
  },
  initCanvas: function() {
    var e = this.containerData, r = this.imageData, o = this.options.viewMode, a = Math.abs(r.rotate) % 180 === 90, n = a ? r.naturalHeight : r.naturalWidth, l = a ? r.naturalWidth : r.naturalHeight, u = n / l, v = e.width, m = e.height;
    e.height * u > e.width ? o === 3 ? v = e.height * u : m = e.width / u : o === 3 ? m = e.width / u : v = e.height * u;
    var p = {
      aspectRatio: u,
      naturalWidth: n,
      naturalHeight: l,
      width: v,
      height: m
    };
    this.canvasData = p, this.limited = o === 1 || o === 2, this.limitCanvas(!0, !0), p.width = Math.min(Math.max(p.width, p.minWidth), p.maxWidth), p.height = Math.min(Math.max(p.height, p.minHeight), p.maxHeight), p.left = (e.width - p.width) / 2, p.top = (e.height - p.height) / 2, p.oldLeft = p.left, p.oldTop = p.top, this.initialCanvasData = te({}, p);
  },
  limitCanvas: function(e, r) {
    var o = this.options, a = this.containerData, n = this.canvasData, l = this.cropBoxData, u = o.viewMode, v = n.aspectRatio, m = this.cropped && l;
    if (e) {
      var p = Number(o.minCanvasWidth) || 0, b = Number(o.minCanvasHeight) || 0;
      u > 1 ? (p = Math.max(p, a.width), b = Math.max(b, a.height), u === 3 && (b * v > p ? p = b * v : b = p / v)) : u > 0 && (p ? p = Math.max(p, m ? l.width : 0) : b ? b = Math.max(b, m ? l.height : 0) : m && (p = l.width, b = l.height, b * v > p ? p = b * v : b = p / v));
      var w = Ve({
        aspectRatio: v,
        width: p,
        height: b
      });
      p = w.width, b = w.height, n.minWidth = p, n.minHeight = b, n.maxWidth = 1 / 0, n.maxHeight = 1 / 0;
    }
    if (r)
      if (u > (m ? 0 : 1)) {
        var $ = a.width - n.width, M = a.height - n.height;
        n.minLeft = Math.min(0, $), n.minTop = Math.min(0, M), n.maxLeft = Math.max(0, $), n.maxTop = Math.max(0, M), m && this.limited && (n.minLeft = Math.min(l.left, l.left + (l.width - n.width)), n.minTop = Math.min(l.top, l.top + (l.height - n.height)), n.maxLeft = l.left, n.maxTop = l.top, u === 2 && (n.width >= a.width && (n.minLeft = Math.min(0, $), n.maxLeft = Math.max(0, $)), n.height >= a.height && (n.minTop = Math.min(0, M), n.maxTop = Math.max(0, M))));
      } else
        n.minLeft = -n.width, n.minTop = -n.height, n.maxLeft = a.width, n.maxTop = a.height;
  },
  renderCanvas: function(e, r) {
    var o = this.canvasData, a = this.imageData;
    if (r) {
      var n = cd({
        width: a.naturalWidth * Math.abs(a.scaleX || 1),
        height: a.naturalHeight * Math.abs(a.scaleY || 1),
        degree: a.rotate || 0
      }), l = n.width, u = n.height, v = o.width * (l / o.naturalWidth), m = o.height * (u / o.naturalHeight);
      o.left -= (v - o.width) / 2, o.top -= (m - o.height) / 2, o.width = v, o.height = m, o.aspectRatio = l / u, o.naturalWidth = l, o.naturalHeight = u, this.limitCanvas(!0, !1);
    }
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCanvas(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, ze(this.canvas, te({
      width: o.width,
      height: o.height
    }, yt({
      translateX: o.left,
      translateY: o.top
    }))), this.renderImage(e), this.cropped && this.limited && this.limitCropBox(!0, !0);
  },
  renderImage: function(e) {
    var r = this.canvasData, o = this.imageData, a = o.naturalWidth * (r.width / r.naturalWidth), n = o.naturalHeight * (r.height / r.naturalHeight);
    te(o, {
      width: a,
      height: n,
      left: (r.width - a) / 2,
      top: (r.height - n) / 2
    }), ze(this.image, te({
      width: o.width,
      height: o.height
    }, yt(te({
      translateX: o.left,
      translateY: o.top
    }, o)))), e && this.output();
  },
  initCropBox: function() {
    var e = this.options, r = this.canvasData, o = e.aspectRatio || e.initialAspectRatio, a = Number(e.autoCropArea) || 0.8, n = {
      width: r.width,
      height: r.height
    };
    o && (r.height * o > r.width ? n.height = n.width / o : n.width = n.height * o), this.cropBoxData = n, this.limitCropBox(!0, !0), n.width = Math.min(Math.max(n.width, n.minWidth), n.maxWidth), n.height = Math.min(Math.max(n.height, n.minHeight), n.maxHeight), n.width = Math.max(n.minWidth, n.width * a), n.height = Math.max(n.minHeight, n.height * a), n.left = r.left + (r.width - n.width) / 2, n.top = r.top + (r.height - n.height) / 2, n.oldLeft = n.left, n.oldTop = n.top, this.initialCropBoxData = te({}, n);
  },
  limitCropBox: function(e, r) {
    var o = this.options, a = this.containerData, n = this.canvasData, l = this.cropBoxData, u = this.limited, v = o.aspectRatio;
    if (e) {
      var m = Number(o.minCropBoxWidth) || 0, p = Number(o.minCropBoxHeight) || 0, b = u ? Math.min(a.width, n.width, n.width + n.left, a.width - n.left) : a.width, w = u ? Math.min(a.height, n.height, n.height + n.top, a.height - n.top) : a.height;
      m = Math.min(m, a.width), p = Math.min(p, a.height), v && (m && p ? p * v > m ? p = m / v : m = p * v : m ? p = m / v : p && (m = p * v), w * v > b ? w = b / v : b = w * v), l.minWidth = Math.min(m, b), l.minHeight = Math.min(p, w), l.maxWidth = b, l.maxHeight = w;
    }
    r && (u ? (l.minLeft = Math.max(0, n.left), l.minTop = Math.max(0, n.top), l.maxLeft = Math.min(a.width, n.left + n.width) - l.width, l.maxTop = Math.min(a.height, n.top + n.height) - l.height) : (l.minLeft = 0, l.minTop = 0, l.maxLeft = a.width - l.width, l.maxTop = a.height - l.height));
  },
  renderCropBox: function() {
    var e = this.options, r = this.containerData, o = this.cropBoxData;
    (o.width > o.maxWidth || o.width < o.minWidth) && (o.left = o.oldLeft), (o.height > o.maxHeight || o.height < o.minHeight) && (o.top = o.oldTop), o.width = Math.min(Math.max(o.width, o.minWidth), o.maxWidth), o.height = Math.min(Math.max(o.height, o.minHeight), o.maxHeight), this.limitCropBox(!1, !0), o.left = Math.min(Math.max(o.left, o.minLeft), o.maxLeft), o.top = Math.min(Math.max(o.top, o.minTop), o.maxTop), o.oldLeft = o.left, o.oldTop = o.top, e.movable && e.cropBoxMovable && _t(this.face, St, o.width >= r.width && o.height >= r.height ? Ps : Sr), ze(this.cropBox, te({
      width: o.width,
      height: o.height
    }, yt({
      translateX: o.left,
      translateY: o.top
    }))), this.cropped && this.limited && this.limitCanvas(!0, !0), this.disabled || this.output();
  },
  output: function() {
    this.preview(), st(this.element, rr, this.getData());
  }
}, bd = {
  initPreview: function() {
    var e = this.element, r = this.crossOrigin, o = this.options.preview, a = r ? this.crossOriginUrl : this.url, n = e.alt || "The image to preview", l = document.createElement("img");
    if (r && (l.crossOrigin = r), l.src = a, l.alt = n, this.viewBox.appendChild(l), this.viewBoxImage = l, !!o) {
      var u = o;
      typeof o == "string" ? u = e.ownerDocument.querySelectorAll(o) : o.querySelector && (u = [o]), this.previews = u, se(u, function(v) {
        var m = document.createElement("img");
        _t(v, Tt, {
          width: v.offsetWidth,
          height: v.offsetHeight,
          html: v.innerHTML
        }), r && (m.crossOrigin = r), m.src = a, m.alt = n, m.style.cssText = 'display:block;width:100%;height:auto;min-width:0!important;min-height:0!important;max-width:none!important;max-height:none!important;image-orientation:0deg!important;"', v.innerHTML = "", v.appendChild(m);
      });
    }
  },
  resetPreview: function() {
    se(this.previews, function(e) {
      var r = ar(e, Tt);
      ze(e, {
        width: r.width,
        height: r.height
      }), e.innerHTML = r.html, nd(e, Tt);
    });
  },
  preview: function() {
    var e = this.imageData, r = this.canvasData, o = this.cropBoxData, a = o.width, n = o.height, l = e.width, u = e.height, v = o.left - r.left - e.left, m = o.top - r.top - e.top;
    !this.cropped || this.disabled || (ze(this.viewBoxImage, te({
      width: l,
      height: u
    }, yt(te({
      translateX: -v,
      translateY: -m
    }, e)))), se(this.previews, function(p) {
      var b = ar(p, Tt), w = b.width, $ = b.height, M = w, T = $, L = 1;
      a && (L = w / a, T = n * L), n && T > $ && (L = $ / n, M = a * L, T = $), ze(p, {
        width: M,
        height: T
      }), ze(p.getElementsByTagName("img")[0], te({
        width: l * L,
        height: u * L
      }, yt(te({
        translateX: -v * L,
        translateY: -m * L
      }, e))));
    }));
  }
}, yd = {
  bind: function() {
    var e = this.element, r = this.options, o = this.cropper;
    ge(r.cropstart) && xe(e, nr, r.cropstart), ge(r.cropmove) && xe(e, or, r.cropmove), ge(r.cropend) && xe(e, sr, r.cropend), ge(r.crop) && xe(e, rr, r.crop), ge(r.zoom) && xe(e, ir, r.zoom), xe(o, Hr, this.onCropStart = this.cropStart.bind(this)), r.zoomable && r.zoomOnWheel && xe(o, Wr, this.onWheel = this.wheel.bind(this), {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && xe(o, Rr, this.onDblclick = this.dblclick.bind(this)), xe(e.ownerDocument, Br, this.onCropMove = this.cropMove.bind(this)), xe(e.ownerDocument, Ur, this.onCropEnd = this.cropEnd.bind(this)), r.responsive && xe(window, Yr, this.onResize = this.resize.bind(this));
  },
  unbind: function() {
    var e = this.element, r = this.options, o = this.cropper;
    ge(r.cropstart) && Ce(e, nr, r.cropstart), ge(r.cropmove) && Ce(e, or, r.cropmove), ge(r.cropend) && Ce(e, sr, r.cropend), ge(r.crop) && Ce(e, rr, r.crop), ge(r.zoom) && Ce(e, ir, r.zoom), Ce(o, Hr, this.onCropStart), r.zoomable && r.zoomOnWheel && Ce(o, Wr, this.onWheel, {
      passive: !1,
      capture: !0
    }), r.toggleDragModeOnDblclick && Ce(o, Rr, this.onDblclick), Ce(e.ownerDocument, Br, this.onCropMove), Ce(e.ownerDocument, Ur, this.onCropEnd), r.responsive && Ce(window, Yr, this.onResize);
  }
}, wd = {
  resize: function() {
    if (!this.disabled) {
      var e = this.options, r = this.container, o = this.containerData, a = r.offsetWidth / o.width, n = r.offsetHeight / o.height, l = Math.abs(a - 1) > Math.abs(n - 1) ? a : n;
      if (l !== 1) {
        var u, v;
        e.restore && (u = this.getCanvasData(), v = this.getCropBoxData()), this.render(), e.restore && (this.setCanvasData(se(u, function(m, p) {
          u[p] = m * l;
        })), this.setCropBoxData(se(v, function(m, p) {
          v[p] = m * l;
        })));
      }
    }
  },
  dblclick: function() {
    this.disabled || this.options.dragMode === zs || this.setDragMode(sd(this.dragBox, er) ? js : _r);
  },
  wheel: function(e) {
    var r = this, o = Number(this.options.wheelZoomRatio) || 0.1, a = 1;
    this.disabled || (e.preventDefault(), !this.wheeling && (this.wheeling = !0, setTimeout(function() {
      r.wheeling = !1;
    }, 50), e.deltaY ? a = e.deltaY > 0 ? 1 : -1 : e.wheelDelta ? a = -e.wheelDelta / 120 : e.detail && (a = e.detail > 0 ? 1 : -1), this.zoom(-a * o, e)));
  },
  cropStart: function(e) {
    var r = e.buttons, o = e.button;
    if (!(this.disabled || (e.type === "mousedown" || e.type === "pointerdown" && e.pointerType === "mouse") && (K(r) && r !== 1 || K(o) && o !== 0 || e.ctrlKey))) {
      var a = this.options, n = this.pointers, l;
      e.changedTouches ? se(e.changedTouches, function(u) {
        n[u.identifier] = At(u);
      }) : n[e.pointerId || 0] = At(e), Object.keys(n).length > 1 && a.zoomable && a.zoomOnTouch ? l = Ns : l = ar(e.target, St), !!Xc.test(l) && st(this.element, nr, {
        originalEvent: e,
        action: l
      }) !== !1 && (e.preventDefault(), this.action = l, this.cropping = !1, l === Os && (this.cropping = !0, ce(this.dragBox, Nt)));
    }
  },
  cropMove: function(e) {
    var r = this.action;
    if (!(this.disabled || !r)) {
      var o = this.pointers;
      e.preventDefault(), st(this.element, or, {
        originalEvent: e,
        action: r
      }) !== !1 && (e.changedTouches ? se(e.changedTouches, function(a) {
        te(o[a.identifier] || {}, At(a, !0));
      }) : te(o[e.pointerId || 0] || {}, At(e, !0)), this.change(e));
    }
  },
  cropEnd: function(e) {
    if (!this.disabled) {
      var r = this.action, o = this.pointers;
      e.changedTouches ? se(e.changedTouches, function(a) {
        delete o[a.identifier];
      }) : delete o[e.pointerId || 0], r && (e.preventDefault(), Object.keys(o).length || (this.action = ""), this.cropping && (this.cropping = !1, tt(this.dragBox, Nt, this.cropped && this.options.modal)), st(this.element, sr, {
        originalEvent: e,
        action: r
      }));
    }
  }
}, Sd = {
  change: function(e) {
    var r = this.options, o = this.canvasData, a = this.containerData, n = this.cropBoxData, l = this.pointers, u = this.action, v = r.aspectRatio, m = n.left, p = n.top, b = n.width, w = n.height, $ = m + b, M = p + w, T = 0, L = 0, U = a.width, N = a.height, O = !0, B;
    !v && e.shiftKey && (v = b && w ? b / w : 1), this.limited && (T = n.minLeft, L = n.minTop, U = T + Math.min(a.width, o.width, o.left + o.width), N = L + Math.min(a.height, o.height, o.top + o.height));
    var R = l[Object.keys(l)[0]], k = {
      x: R.endX - R.startX,
      y: R.endY - R.startY
    }, z = function(ne) {
      switch (ne) {
        case We:
          $ + k.x > U && (k.x = U - $);
          break;
        case Xe:
          m + k.x < T && (k.x = T - m);
          break;
        case je:
          p + k.y < L && (k.y = L - p);
          break;
        case Qe:
          M + k.y > N && (k.y = N - M);
          break;
      }
    };
    switch (u) {
      case Sr:
        m += k.x, p += k.y;
        break;
      case We:
        if (k.x >= 0 && ($ >= U || v && (p <= L || M >= N))) {
          O = !1;
          break;
        }
        z(We), b += k.x, b < 0 && (u = Xe, b = -b, m -= b), v && (w = b / v, p += (n.height - w) / 2);
        break;
      case je:
        if (k.y <= 0 && (p <= L || v && (m <= T || $ >= U))) {
          O = !1;
          break;
        }
        z(je), w -= k.y, p += k.y, w < 0 && (u = Qe, w = -w, p -= w), v && (b = w * v, m += (n.width - b) / 2);
        break;
      case Xe:
        if (k.x <= 0 && (m <= T || v && (p <= L || M >= N))) {
          O = !1;
          break;
        }
        z(Xe), b -= k.x, m += k.x, b < 0 && (u = We, b = -b, m -= b), v && (w = b / v, p += (n.height - w) / 2);
        break;
      case Qe:
        if (k.y >= 0 && (M >= N || v && (m <= T || $ >= U))) {
          O = !1;
          break;
        }
        z(Qe), w += k.y, w < 0 && (u = je, w = -w, p -= w), v && (b = w * v, m += (n.width - b) / 2);
        break;
      case gt:
        if (v) {
          if (k.y <= 0 && (p <= L || $ >= U)) {
            O = !1;
            break;
          }
          z(je), w -= k.y, p += k.y, b = w * v;
        } else
          z(je), z(We), k.x >= 0 ? $ < U ? b += k.x : k.y <= 0 && p <= L && (O = !1) : b += k.x, k.y <= 0 ? p > L && (w -= k.y, p += k.y) : (w -= k.y, p += k.y);
        b < 0 && w < 0 ? (u = bt, w = -w, b = -b, p -= w, m -= b) : b < 0 ? (u = mt, b = -b, m -= b) : w < 0 && (u = vt, w = -w, p -= w);
        break;
      case mt:
        if (v) {
          if (k.y <= 0 && (p <= L || m <= T)) {
            O = !1;
            break;
          }
          z(je), w -= k.y, p += k.y, b = w * v, m += n.width - b;
        } else
          z(je), z(Xe), k.x <= 0 ? m > T ? (b -= k.x, m += k.x) : k.y <= 0 && p <= L && (O = !1) : (b -= k.x, m += k.x), k.y <= 0 ? p > L && (w -= k.y, p += k.y) : (w -= k.y, p += k.y);
        b < 0 && w < 0 ? (u = vt, w = -w, b = -b, p -= w, m -= b) : b < 0 ? (u = gt, b = -b, m -= b) : w < 0 && (u = bt, w = -w, p -= w);
        break;
      case bt:
        if (v) {
          if (k.x <= 0 && (m <= T || M >= N)) {
            O = !1;
            break;
          }
          z(Xe), b -= k.x, m += k.x, w = b / v;
        } else
          z(Qe), z(Xe), k.x <= 0 ? m > T ? (b -= k.x, m += k.x) : k.y >= 0 && M >= N && (O = !1) : (b -= k.x, m += k.x), k.y >= 0 ? M < N && (w += k.y) : w += k.y;
        b < 0 && w < 0 ? (u = gt, w = -w, b = -b, p -= w, m -= b) : b < 0 ? (u = vt, b = -b, m -= b) : w < 0 && (u = mt, w = -w, p -= w);
        break;
      case vt:
        if (v) {
          if (k.x >= 0 && ($ >= U || M >= N)) {
            O = !1;
            break;
          }
          z(We), b += k.x, w = b / v;
        } else
          z(Qe), z(We), k.x >= 0 ? $ < U ? b += k.x : k.y >= 0 && M >= N && (O = !1) : b += k.x, k.y >= 0 ? M < N && (w += k.y) : w += k.y;
        b < 0 && w < 0 ? (u = mt, w = -w, b = -b, p -= w, m -= b) : b < 0 ? (u = bt, b = -b, m -= b) : w < 0 && (u = gt, w = -w, p -= w);
        break;
      case Ps:
        this.move(k.x, k.y), O = !1;
        break;
      case Ns:
        this.zoom(ad(l), e), O = !1;
        break;
      case Os:
        if (!k.x || !k.y) {
          O = !1;
          break;
        }
        B = Ks(this.cropper), m = R.startX - B.left, p = R.startY - B.top, b = n.minWidth, w = n.minHeight, k.x > 0 ? u = k.y > 0 ? vt : gt : k.x < 0 && (m -= b, u = k.y > 0 ? bt : mt), k.y < 0 && (p -= w), this.cropped || (Ae(this.cropBox, me), this.cropped = !0, this.limited && this.limitCropBox(!0, !0));
        break;
    }
    O && (n.width = b, n.height = w, n.left = m, n.top = p, this.action = u, this.renderCropBox()), se(l, function(J) {
      J.startX = J.endX, J.startY = J.endY;
    });
  }
}, _d = {
  crop: function() {
    return this.ready && !this.cropped && !this.disabled && (this.cropped = !0, this.limitCropBox(!0, !0), this.options.modal && ce(this.dragBox, Nt), Ae(this.cropBox, me), this.setCropBoxData(this.initialCropBoxData)), this;
  },
  reset: function() {
    return this.ready && !this.disabled && (this.imageData = te({}, this.initialImageData), this.canvasData = te({}, this.initialCanvasData), this.cropBoxData = te({}, this.initialCropBoxData), this.renderCanvas(), this.cropped && this.renderCropBox()), this;
  },
  clear: function() {
    return this.cropped && !this.disabled && (te(this.cropBoxData, {
      left: 0,
      top: 0,
      width: 0,
      height: 0
    }), this.cropped = !1, this.renderCropBox(), this.limitCanvas(!0, !0), this.renderCanvas(), Ae(this.dragBox, Nt), ce(this.cropBox, me)), this;
  },
  replace: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    return !this.disabled && e && (this.isImg && (this.element.src = e), r ? (this.url = e, this.image.src = e, this.ready && (this.viewBoxImage.src = e, se(this.previews, function(o) {
      o.getElementsByTagName("img")[0].src = e;
    }))) : (this.isImg && (this.replaced = !0), this.options.data = null, this.uncreate(), this.load(e))), this;
  },
  enable: function() {
    return this.ready && this.disabled && (this.disabled = !1, Ae(this.cropper, zr)), this;
  },
  disable: function() {
    return this.ready && !this.disabled && (this.disabled = !0, ce(this.cropper, zr)), this;
  },
  destroy: function() {
    var e = this.element;
    return e[ee] ? (e[ee] = void 0, this.isImg && this.replaced && (e.src = this.originalUrl), this.uncreate(), this) : this;
  },
  move: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = o.left, n = o.top;
    return this.moveTo(Yt(e) ? e : a + Number(e), Yt(r) ? r : n + Number(r));
  },
  moveTo: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.canvasData, a = !1;
    return e = Number(e), r = Number(r), this.ready && !this.disabled && this.options.movable && (K(e) && (o.left = e, a = !0), K(r) && (o.top = r, a = !0), a && this.renderCanvas(!0)), this;
  },
  zoom: function(e, r) {
    var o = this.canvasData;
    return e = Number(e), e < 0 ? e = 1 / (1 - e) : e = 1 + e, this.zoomTo(o.width * e / o.naturalWidth, null, r);
  },
  zoomTo: function(e, r, o) {
    var a = this.options, n = this.canvasData, l = n.width, u = n.height, v = n.naturalWidth, m = n.naturalHeight;
    if (e = Number(e), e >= 0 && this.ready && !this.disabled && a.zoomable) {
      var p = v * e, b = m * e;
      if (st(this.element, ir, {
        ratio: e,
        oldRatio: l / v,
        originalEvent: o
      }) === !1)
        return this;
      if (o) {
        var w = this.pointers, $ = Ks(this.cropper), M = w && Object.keys(w).length ? ld(w) : {
          pageX: o.pageX,
          pageY: o.pageY
        };
        n.left -= (p - l) * ((M.pageX - $.left - n.left) / l), n.top -= (b - u) * ((M.pageY - $.top - n.top) / u);
      } else
        et(r) && K(r.x) && K(r.y) ? (n.left -= (p - l) * ((r.x - n.left) / l), n.top -= (b - u) * ((r.y - n.top) / u)) : (n.left -= (p - l) / 2, n.top -= (b - u) / 2);
      n.width = p, n.height = b, this.renderCanvas(!0);
    }
    return this;
  },
  rotate: function(e) {
    return this.rotateTo((this.imageData.rotate || 0) + Number(e));
  },
  rotateTo: function(e) {
    return e = Number(e), K(e) && this.ready && !this.disabled && this.options.rotatable && (this.imageData.rotate = e % 360, this.renderCanvas(!0, !0)), this;
  },
  scaleX: function(e) {
    var r = this.imageData.scaleY;
    return this.scale(e, K(r) ? r : 1);
  },
  scaleY: function(e) {
    var r = this.imageData.scaleX;
    return this.scale(K(r) ? r : 1, e);
  },
  scale: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e, o = this.imageData, a = !1;
    return e = Number(e), r = Number(r), this.ready && !this.disabled && this.options.scalable && (K(e) && (o.scaleX = e, a = !0), K(r) && (o.scaleY = r, a = !0), a && this.renderCanvas(!0, !0)), this;
  },
  getData: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, r = this.options, o = this.imageData, a = this.canvasData, n = this.cropBoxData, l;
    if (this.ready && this.cropped) {
      l = {
        x: n.left - a.left,
        y: n.top - a.top,
        width: n.width,
        height: n.height
      };
      var u = o.width / o.naturalWidth;
      if (se(l, function(p, b) {
        l[b] = p / u;
      }), e) {
        var v = Math.round(l.y + l.height), m = Math.round(l.x + l.width);
        l.x = Math.round(l.x), l.y = Math.round(l.y), l.width = m - l.x, l.height = v - l.y;
      }
    } else
      l = {
        x: 0,
        y: 0,
        width: 0,
        height: 0
      };
    return r.rotatable && (l.rotate = o.rotate || 0), r.scalable && (l.scaleX = o.scaleX || 1, l.scaleY = o.scaleY || 1), l;
  },
  setData: function(e) {
    var r = this.options, o = this.imageData, a = this.canvasData, n = {};
    if (this.ready && !this.disabled && et(e)) {
      var l = !1;
      r.rotatable && K(e.rotate) && e.rotate !== o.rotate && (o.rotate = e.rotate, l = !0), r.scalable && (K(e.scaleX) && e.scaleX !== o.scaleX && (o.scaleX = e.scaleX, l = !0), K(e.scaleY) && e.scaleY !== o.scaleY && (o.scaleY = e.scaleY, l = !0)), l && this.renderCanvas(!0, !0);
      var u = o.width / o.naturalWidth;
      K(e.x) && (n.left = e.x * u + a.left), K(e.y) && (n.top = e.y * u + a.top), K(e.width) && (n.width = e.width * u), K(e.height) && (n.height = e.height * u), this.setCropBoxData(n);
    }
    return this;
  },
  getContainerData: function() {
    return this.ready ? te({}, this.containerData) : {};
  },
  getImageData: function() {
    return this.sized ? te({}, this.imageData) : {};
  },
  getCanvasData: function() {
    var e = this.canvasData, r = {};
    return this.ready && se(["left", "top", "width", "height", "naturalWidth", "naturalHeight"], function(o) {
      r[o] = e[o];
    }), r;
  },
  setCanvasData: function(e) {
    var r = this.canvasData, o = r.aspectRatio;
    return this.ready && !this.disabled && et(e) && (K(e.left) && (r.left = e.left), K(e.top) && (r.top = e.top), K(e.width) ? (r.width = e.width, r.height = e.width / o) : K(e.height) && (r.height = e.height, r.width = e.height * o), this.renderCanvas(!0)), this;
  },
  getCropBoxData: function() {
    var e = this.cropBoxData, r;
    return this.ready && this.cropped && (r = {
      left: e.left,
      top: e.top,
      width: e.width,
      height: e.height
    }), r || {};
  },
  setCropBoxData: function(e) {
    var r = this.cropBoxData, o = this.options.aspectRatio, a, n;
    return this.ready && this.cropped && !this.disabled && et(e) && (K(e.left) && (r.left = e.left), K(e.top) && (r.top = e.top), K(e.width) && e.width !== r.width && (a = !0, r.width = e.width), K(e.height) && e.height !== r.height && (n = !0, r.height = e.height), o && (a ? r.height = r.width / o : n && (r.width = r.height * o)), this.renderCropBox()), this;
  },
  getCroppedCanvas: function() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!this.ready || !window.HTMLCanvasElement)
      return null;
    var r = this.canvasData, o = dd(this.image, this.imageData, r, e);
    if (!this.cropped)
      return o;
    var a = this.getData(), n = a.x, l = a.y, u = a.width, v = a.height, m = o.width / Math.floor(r.naturalWidth);
    m !== 1 && (n *= m, l *= m, u *= m, v *= m);
    var p = u / v, b = Ve({
      aspectRatio: p,
      width: e.maxWidth || 1 / 0,
      height: e.maxHeight || 1 / 0
    }), w = Ve({
      aspectRatio: p,
      width: e.minWidth || 0,
      height: e.minHeight || 0
    }, "cover"), $ = Ve({
      aspectRatio: p,
      width: e.width || (m !== 1 ? o.width : u),
      height: e.height || (m !== 1 ? o.height : v)
    }), M = $.width, T = $.height;
    M = Math.min(b.width, Math.max(w.width, M)), T = Math.min(b.height, Math.max(w.height, T));
    var L = document.createElement("canvas"), U = L.getContext("2d");
    L.width = rt(M), L.height = rt(T), U.fillStyle = e.fillColor || "transparent", U.fillRect(0, 0, M, T);
    var N = e.imageSmoothingEnabled, O = N === void 0 ? !0 : N, B = e.imageSmoothingQuality;
    U.imageSmoothingEnabled = O, B && (U.imageSmoothingQuality = B);
    var R = o.width, k = o.height, z = n, J = l, ne, re, he, we, be, fe;
    z <= -u || z > R ? (z = 0, ne = 0, he = 0, be = 0) : z <= 0 ? (he = -z, z = 0, ne = Math.min(R, u + z), be = ne) : z <= R && (he = 0, ne = Math.min(u, R - z), be = ne), ne <= 0 || J <= -v || J > k ? (J = 0, re = 0, we = 0, fe = 0) : J <= 0 ? (we = -J, J = 0, re = Math.min(k, v + J), fe = re) : J <= k && (we = 0, re = Math.min(v, k - J), fe = re);
    var q = [z, J, ne, re];
    if (be > 0 && fe > 0) {
      var I = M / u;
      q.push(he * I, we * I, be * I, fe * I);
    }
    return U.drawImage.apply(U, [o].concat(Ls(q.map(function(V) {
      return Math.floor(rt(V));
    })))), L;
  },
  setAspectRatio: function(e) {
    var r = this.options;
    return !this.disabled && !Yt(e) && (r.aspectRatio = Math.max(0, e) || NaN, this.ready && (this.initCropBox(), this.cropped && this.renderCropBox())), this;
  },
  setDragMode: function(e) {
    var r = this.options, o = this.dragBox, a = this.face;
    if (this.ready && !this.disabled) {
      var n = e === _r, l = r.movable && e === js;
      e = n || l ? e : zs, r.dragMode = e, _t(o, St, e), tt(o, er, n), tt(o, tr, l), r.cropBoxMovable || (_t(a, St, e), tt(a, er, n), tt(a, tr, l));
    }
    return this;
  }
}, xd = Ie.Cropper, Ws = /* @__PURE__ */ function() {
  function t(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (Nc(this, t), !e || !Fc.test(e.tagName))
      throw new Error("The first argument is required and must be an <img> or <canvas> element.");
    this.element = e, this.options = te({}, Zr, et(r) && r), this.cropped = !1, this.disabled = !1, this.pointers = {}, this.ready = !1, this.reloading = !1, this.replaced = !1, this.sized = !1, this.sizing = !1, this.init();
  }
  return jc(t, [{
    key: "init",
    value: function() {
      var r = this.element, o = r.tagName.toLowerCase(), a;
      if (!r[ee]) {
        if (r[ee] = this, o === "img") {
          if (this.isImg = !0, a = r.getAttribute("src") || "", this.originalUrl = a, !a)
            return;
          a = r.src;
        } else
          o === "canvas" && window.HTMLCanvasElement && (a = r.toDataURL());
        this.load(a);
      }
    }
  }, {
    key: "load",
    value: function(r) {
      var o = this;
      if (!!r) {
        this.url = r, this.imageData = {};
        var a = this.element, n = this.options;
        if (!n.rotatable && !n.scalable && (n.checkOrientation = !1), !n.checkOrientation || !window.ArrayBuffer) {
          this.clone();
          return;
        }
        if (Zc.test(r)) {
          qc.test(r) ? this.read(fd(r)) : this.clone();
          return;
        }
        var l = new XMLHttpRequest(), u = this.clone.bind(this);
        this.reloading = !0, this.xhr = l, l.onabort = u, l.onerror = u, l.ontimeout = u, l.onprogress = function() {
          l.getResponseHeader("content-type") !== Xr && l.abort();
        }, l.onload = function() {
          o.read(l.response);
        }, l.onloadend = function() {
          o.reloading = !1, o.xhr = null;
        }, n.checkCrossOrigin && Fr(r) && a.crossOrigin && (r = Gr(r)), l.open("GET", r, !0), l.responseType = "arraybuffer", l.withCredentials = a.crossOrigin === "use-credentials", l.send();
      }
    }
  }, {
    key: "read",
    value: function(r) {
      var o = this.options, a = this.imageData, n = gd(r), l = 0, u = 1, v = 1;
      if (n > 1) {
        this.url = pd(r, Xr);
        var m = md(n);
        l = m.rotate, u = m.scaleX, v = m.scaleY;
      }
      o.rotatable && (a.rotate = l), o.scalable && (a.scaleX = u, a.scaleY = v), this.clone();
    }
  }, {
    key: "clone",
    value: function() {
      var r = this.element, o = this.url, a = r.crossOrigin, n = o;
      this.options.checkCrossOrigin && Fr(o) && (a || (a = "anonymous"), n = Gr(o)), this.crossOrigin = a, this.crossOriginUrl = n;
      var l = document.createElement("img");
      a && (l.crossOrigin = a), l.src = n || o, l.alt = r.alt || "The image to crop", this.image = l, l.onload = this.start.bind(this), l.onerror = this.stop.bind(this), ce(l, Vr), r.parentNode.insertBefore(l, r.nextSibling);
    }
  }, {
    key: "start",
    value: function() {
      var r = this, o = this.image;
      o.onload = null, o.onerror = null, this.sizing = !0;
      var a = Ie.navigator && /(?:iPad|iPhone|iPod).*?AppleWebKit/i.test(Ie.navigator.userAgent), n = function(m, p) {
        te(r.imageData, {
          naturalWidth: m,
          naturalHeight: p,
          aspectRatio: m / p
        }), r.initialImageData = te({}, r.imageData), r.sizing = !1, r.sized = !0, r.build();
      };
      if (o.naturalWidth && !a) {
        n(o.naturalWidth, o.naturalHeight);
        return;
      }
      var l = document.createElement("img"), u = document.body || document.documentElement;
      this.sizingImage = l, l.onload = function() {
        n(l.width, l.height), a || u.removeChild(l);
      }, l.src = o.src, a || (l.style.cssText = "left:0;max-height:none!important;max-width:none!important;min-height:0!important;min-width:0!important;opacity:0;position:absolute;top:0;z-index:-1;", u.appendChild(l));
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
        var r = this.element, o = this.options, a = this.image, n = r.parentNode, l = document.createElement("div");
        l.innerHTML = Gc;
        var u = l.querySelector(".".concat(ee, "-container")), v = u.querySelector(".".concat(ee, "-canvas")), m = u.querySelector(".".concat(ee, "-drag-box")), p = u.querySelector(".".concat(ee, "-crop-box")), b = p.querySelector(".".concat(ee, "-face"));
        this.container = n, this.cropper = u, this.canvas = v, this.dragBox = m, this.cropBox = p, this.viewBox = u.querySelector(".".concat(ee, "-view-box")), this.face = b, v.appendChild(a), ce(r, me), n.insertBefore(u, r.nextSibling), Ae(a, Vr), this.initPreview(), this.bind(), o.initialAspectRatio = Math.max(0, o.initialAspectRatio) || NaN, o.aspectRatio = Math.max(0, o.aspectRatio) || NaN, o.viewMode = Math.max(0, Math.min(3, Math.round(o.viewMode))) || 0, ce(p, me), o.guides || ce(p.getElementsByClassName("".concat(ee, "-dashed")), me), o.center || ce(p.getElementsByClassName("".concat(ee, "-center")), me), o.background && ce(u, "".concat(ee, "-bg")), o.highlight || ce(b, Uc), o.cropBoxMovable && (ce(b, tr), _t(b, St, Sr)), o.cropBoxResizable || (ce(p.getElementsByClassName("".concat(ee, "-line")), me), ce(p.getElementsByClassName("".concat(ee, "-point")), me)), this.render(), this.ready = !0, this.setDragMode(o.dragMode), o.autoCrop && this.crop(), this.setData(o.data), ge(o.ready) && xe(r, Kr, o.ready, {
          once: !0
        }), st(r, Kr);
      }
    }
  }, {
    key: "unbuild",
    value: function() {
      if (!!this.ready) {
        this.ready = !1, this.unbind(), this.resetPreview();
        var r = this.cropper.parentNode;
        r && r.removeChild(this.cropper), Ae(this.element, me);
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
      return window.Cropper = xd, t;
    }
  }, {
    key: "setDefaults",
    value: function(r) {
      te(Zr, et(r) && r);
    }
  }]), t;
}();
te(Ws.prototype, vd, bd, yd, wd, Sd, _d);
const kd = { class: "flex" }, Dd = ["aria-label"], Cd = { class: "ml-auto mb-2" }, Md = { class: "w-full flex justify-center" }, Ed = ["src"], $d = {
  __name: "Image",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(t, { emit: e }) {
    const r = t, { t: o } = P("i18n"), { apiUrl: a } = Le(), n = A(null), l = A(null), u = A(!1), v = A(""), m = A(!1), p = () => {
      u.value = !u.value, u.value ? l.value = new Ws(n.value, {
        crop($) {
        }
      }) : l.value.destroy();
    }, b = P("postData"), w = () => {
      l.value.getCroppedCanvas({
        width: 795,
        height: 341
      }).toBlob(
        ($) => {
          v.value = "", m.value = !1, Ot(a.value, {
            method: "POST",
            params: Object.assign(b, {
              q: "upload",
              adapter: r.selection.adapter,
              path: r.selection.item.path,
              file: $
            }),
            name: r.selection.item.basename,
            json: !1
          }).then((M) => {
            v.value = o("Updated."), n.value.src = Ft(r.selection.adapter, r.selection.item.path), p(), e("load");
          }).catch((M) => {
            v.value = o(M.message), m.value = !0;
          });
        }
      );
    };
    return Ee(() => {
      e("load");
    }), ($, M) => (S(), C(de, null, [
      h("div", kd, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": t.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(t.selection.item.basename), 9, Dd),
        h("div", Cd, [
          u.value ? (S(), C("button", {
            key: 0,
            onClick: w,
            class: "ml-1 px-2 py-1 rounded border border-transparent shadow-sm bg-blue-700/75 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-700/50 text-base font-medium text-white sm:ml-3 sm:w-auto sm:text-sm"
          }, E(_(o)("Crop")), 1)) : X("", !0),
          h("button", {
            class: "ml-1 px-2 py-1 text-blue-500",
            onClick: M[0] || (M[0] = (T) => p())
          }, E(u.value ? _(o)("Cancel") : _(o)("Edit")), 1)
        ])
      ]),
      h("div", Md, [
        h("img", {
          ref_key: "image",
          ref: n,
          class: "max-w-[50vh] max-h-[50vh]",
          src: _(Ft)(r.selection.adapter, r.selection.item.path),
          alt: ""
        }, null, 8, Ed)
      ]),
      v.value.length ? (S(), G(Pe, {
        key: 0,
        onHidden: M[1] || (M[1] = (T) => v.value = ""),
        error: m.value
      }, {
        default: Z(() => [
          oe(E(v.value), 1)
        ]),
        _: 1
      }, 8, ["error"])) : X("", !0)
    ], 64));
  }
}, Td = { class: "flex" }, Ad = ["aria-label"], Id = /* @__PURE__ */ h("div", null, null, -1), Ld = {
  __name: "Default",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(t, { emit: e }) {
    return Ee(() => {
      e("load");
    }), (r, o) => (S(), C(de, null, [
      h("div", Td, [
        h("h3", {
          class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
          id: "modal-title",
          "aria-label": t.selection.item.path,
          "data-microtip-position": "bottom-right",
          role: "tooltip"
        }, E(t.selection.item.basename), 9, Ad)
      ]),
      Id
    ], 64));
  }
}, Od = ["aria-label"], Pd = {
  class: "w-full",
  preload: "",
  controls: ""
}, Nd = ["src"], jd = {
  __name: "Video",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(t, { emit: e }) {
    const r = t, { apiUrl: o } = Le(), a = () => o.value + "?" + Ge({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ee(() => {
      e("load");
    }), (n, l) => (S(), C(de, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": t.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(t.selection.item.basename), 9, Od),
      h("div", null, [
        h("video", Pd, [
          h("source", {
            src: a(),
            type: "video/mp4"
          }, null, 8, Nd),
          oe(" Your browser does not support the video tag. ")
        ])
      ])
    ], 64));
  }
}, zd = ["aria-label"], Vd = {
  class: "w-full",
  controls: ""
}, Rd = ["src"], Hd = {
  __name: "Audio",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(t, { emit: e }) {
    const r = t, { apiUrl: o } = Le(), a = () => o.value + "?" + Ge({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ee(() => {
      e("load");
    }), (n, l) => (S(), C(de, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": t.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(t.selection.item.basename), 9, zd),
      h("div", null, [
        h("audio", Vd, [
          h("source", {
            src: a(),
            type: "audio/mpeg"
          }, null, 8, Rd),
          oe(" Your browser does not support the audio element. ")
        ])
      ])
    ], 64));
  }
}, Bd = ["aria-label"], Ud = ["data"], Kd = ["src"], Yd = {
  __name: "Pdf",
  props: {
    selection: Object
  },
  emits: ["load"],
  setup(t, { emit: e }) {
    const r = t, { apiUrl: o } = Le(), a = () => o.value + "?" + Ge({ q: "preview", adapter: r.selection.adapter, path: r.selection.item.path });
    return Ee(() => {
      e("load");
    }), (n, l) => (S(), C(de, null, [
      h("h3", {
        class: "mb-2 text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
        id: "modal-title",
        "aria-label": t.selection.item.path,
        "data-microtip-position": "bottom-right",
        role: "tooltip"
      }, E(t.selection.item.basename), 9, Bd),
      h("div", null, [
        h("object", {
          class: "h-[60vh]",
          data: a(),
          type: "application/pdf",
          width: "100%",
          height: "100%"
        }, [
          h("iframe", {
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
        `, 8, Kd)
        ], 8, Ud)
      ])
    ], 64));
  }
}, Wd = { class: "sm:flex sm:items-start" }, Xd = { class: "mt-3 text-center sm:mt-0 sm:text-left w-full" }, Zd = { class: "text-gray-700 dark:text-gray-200 text-sm" }, qd = {
  key: 0,
  class: "flex leading-5"
}, Fd = /* @__PURE__ */ h("svg", {
  class: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24"
}, [
  /* @__PURE__ */ h("circle", {
    class: "opacity-25 stroke-blue-900 dark:stroke-blue-100",
    cx: "12",
    cy: "12",
    r: "10",
    stroke: "currentColor",
    "stroke-width": "4"
  }),
  /* @__PURE__ */ h("path", {
    class: "opacity-75",
    fill: "currentColor",
    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
  })
], -1), Gd = { class: "py-2 flex font-normal break-all dark:text-gray-200 rounded text-xs" }, Jd = { class: "font-bold pl-2" }, Qd = { class: "font-bold pl-2" }, eu = {
  name: "VFModalPreview"
}, tu = /* @__PURE__ */ Object.assign(eu, {
  props: {
    selection: Object
  },
  setup(t) {
    const e = t, { apiUrl: r } = Le(), o = P("emitter"), { t: a } = P("i18n"), n = A(!1), l = (m) => n.value = m, u = (m) => {
      var p;
      return ((p = e.selection.item.mime_type) != null ? p : "").startsWith(m);
    }, v = () => {
      const m = r.value + "?" + Ge({ q: "download", adapter: e.selection.adapter, path: e.selection.item.path });
      o.emit("vf-download", m);
    };
    return (m, p) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: p[6] || (p[6] = (b) => _(o).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Close")), 1),
        h("button", {
          type: "button",
          onClick: p[7] || (p[7] = (b) => v()),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-gray-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Download")), 1)
      ]),
      default: Z(() => [
        h("div", Wd, [
          h("div", Xd, [
            h("div", null, [
              u("text") ? (S(), G(Pc, {
                key: 0,
                selection: t.selection,
                onLoad: p[0] || (p[0] = (b) => l(!0))
              }, null, 8, ["selection"])) : u("image") ? (S(), G($d, {
                key: 1,
                selection: t.selection,
                onLoad: p[1] || (p[1] = (b) => l(!0))
              }, null, 8, ["selection"])) : u("video") ? (S(), G(jd, {
                key: 2,
                selection: t.selection,
                onLoad: p[2] || (p[2] = (b) => l(!0))
              }, null, 8, ["selection"])) : u("audio") ? (S(), G(Hd, {
                key: 3,
                selection: t.selection,
                onLoad: p[3] || (p[3] = (b) => l(!0))
              }, null, 8, ["selection"])) : u("application/pdf") ? (S(), G(Yd, {
                key: 4,
                selection: t.selection,
                onLoad: p[4] || (p[4] = (b) => l(!0))
              }, null, 8, ["selection"])) : (S(), G(Ld, {
                key: 5,
                selection: t.selection,
                onLoad: p[5] || (p[5] = (b) => l(!0))
              }, null, 8, ["selection"]))
            ]),
            h("div", Zd, [
              n.value == !1 ? (S(), C("div", qd, [
                Fd,
                h("span", null, E(_(a)("Loading")), 1)
              ])) : X("", !0)
            ])
          ])
        ]),
        h("div", Gd, [
          h("div", null, [
            h("span", Jd, E(_(a)("File Size")) + ": ", 1),
            oe(E(_(rs)(t.selection.item.file_size)), 1)
          ]),
          h("div", null, [
            h("span", Qd, E(_(a)("Last Modified")) + ": ", 1),
            oe(" " + E(_(ss)(t.selection.item.last_modified)), 1)
          ])
        ])
      ]),
      _: 1
    }));
  }
}), ru = { class: "sm:flex sm:items-start" }, su = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    })
  ])
], -1), ou = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, nu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, iu = { class: "mt-2" }, au = { class: "flex text-sm text-gray-800 dark:text-gray-400 py-2" }, lu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, cu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), du = [
  cu
], uu = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, hu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), fu = [
  hu
], pu = { class: "ml-1.5" }, gu = ["onKeyup"], mu = {
  name: "VFModalRename"
}, vu = /* @__PURE__ */ Object.assign(mu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = A(e.selection.items[0]), l = A(e.selection.items[0].basename), u = A(""), v = () => {
      l.value != "" && r.emit("vf-fetch", {
        params: {
          q: "rename",
          adapter: o.value,
          path: e.current.dirname,
          item: n.value.path,
          name: l.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("%s is renamed.", l.value) });
        },
        onError: (m) => {
          u.value = a(m.message);
        }
      });
    };
    return (m, p) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Rename")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", ru, [
          su,
          h("div", ou, [
            h("h3", nu, E(_(a)("Rename")), 1),
            h("div", iu, [
              h("p", au, [
                n.value.type == "dir" ? (S(), C("svg", lu, du)) : (S(), C("svg", uu, fu)),
                h("span", pu, E(n.value.basename), 1)
              ]),
              ke(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => l.value = b),
                onKeyup: nt(v, ["enter"]),
                class: "px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: "Name",
                type: "text"
              }, null, 40, gu), [
                [it, l.value]
              ]),
              u.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => u.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(u.value), 1)
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
}), bu = { class: "sm:flex sm:items-start" }, yu = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
    })
  ])
], -1), wu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Su = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, _u = { class: "mt-2" }, xu = { class: "text-gray-500 mb-1" }, ku = ["id"], Du = {
  key: 0,
  class: "py-2"
}, Cu = ["disabled", "onClick"], Mu = {
  name: "VFModalUpload"
}, Eu = /* @__PURE__ */ Object.assign(Mu, {
  props: {
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter"), { apiUrl: o } = Le(), { t: a } = P("i18n"), n = P("maxFileSize"), l = A(null), u = A(null), v = A(null), m = A([]), p = A(""), b = A(!0), w = () => {
      p.value = "", l.value.start();
    }, $ = P("postData");
    return Ee(() => {
      l.value = new pt.Uploader({
        runtimes: "html5",
        browse_button: v.value,
        container: u.value,
        max_file_size: n,
        multiple_queues: !0,
        file_data_name: "file",
        url: o.value + "?" + Ge(Object.assign($, { q: "upload", adapter: e.current.adapter, path: e.current.dirname })),
        headers: {
          ...Lt && { "X-CSRF-Token": Lt }
        },
        init: {
          PostInit: function() {
          },
          FilesAdded: function(M, T) {
            b.value = !1, pt.each(T, function(L) {
              m.value.push({
                id: L.id,
                name: L.name,
                size: pt.formatSize(L.size),
                percent: ""
              });
            });
          },
          UploadProgress: function(M, T) {
            m.value[m.value.findIndex((L) => L.id == T.id)].percent = T.percent + "%";
          },
          UploadComplete: function() {
            b.value = !0, r.emit("vf-fetch", { params: { q: "index", adapter: e.current.adapter, path: e.current.dirname } });
          },
          Error: function(M, T) {
            l.value.stop(), T.code == pt.HTTP_ERROR ? p.value = a(JSON.parse(T.response).message) : T.code == pt.FILE_SIZE_ERROR ? p.value = a("The selected file exceeds the maximum file size. You cannot upload files greater than %s", [n]) : p.value = a(T.message);
          }
        }
      }), l.value.init();
    }), (M, T) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          disabled: b.value,
          onClick: Ze(w, ["prevent"]),
          type: "button",
          class: ue([b.value ? "bg-blue-200 hover:bg-blue-200 dark:bg-gray-700/50 dark:hover:bg-gray-700/50 dark:text-gray-500" : "bg-blue-600 hover:bg-blue-700 dark:bg-gray-700 dark:hover:bg-gray-500", "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"])
        }, E(_(a)("Upload")), 11, Cu),
        h("button", {
          type: "button",
          onClick: T[1] || (T[1] = (L) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", bu, [
          yu,
          h("div", wu, [
            h("h3", Su, E(_(a)("Upload files")), 1),
            h("div", _u, [
              h("div", xu, [
                (S(!0), C(de, null, De(m.value, (L) => (S(), C("div", null, [
                  h("div", {
                    id: L.id
                  }, [
                    oe(E(L.name) + " ( " + E(L.size) + ") ", 1),
                    h("b", null, E(L.percent), 1)
                  ], 8, ku)
                ]))), 256)),
                m.value.length ? X("", !0) : (S(), C("div", Du, E(_(a)("No files selected!")), 1))
              ]),
              h("div", {
                class: "text-gray-500",
                ref_key: "container",
                ref: u
              }, [
                h("button", {
                  ref_key: "pickFiles",
                  ref: v,
                  type: "button",
                  class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                }, E(_(a)("Select Files")), 513)
              ], 512),
              p.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: T[0] || (T[0] = (L) => p.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(p.value), 1)
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
}), $u = { class: "sm:flex sm:items-start" }, Tu = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Au = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Iu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, Lu = { class: "mt-2" }, Ou = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Pu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Nu = /* @__PURE__ */ h("path", {
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
}, Vu = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), Ru = [
  Vu
], Hu = { class: "ml-1.5" }, Bu = ["onKeyup", "placeholder"], Uu = {
  name: "VFModalArchive"
}, Ku = /* @__PURE__ */ Object.assign(Uu, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n"), n = A(""), l = A(""), u = A(e.selection.items), v = () => {
      u.value.length && r.emit("vf-fetch", {
        params: {
          q: "archive",
          adapter: o.value,
          path: e.current.dirname,
          items: JSON.stringify(u.value.map(({ path: m, type: p }) => ({ path: m, type: p }))),
          name: n.value
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("The file(s) archived.") });
        },
        onError: (m) => {
          l.value = a(m.message);
        }
      });
    };
    return (m, p) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Archive")), 1),
        h("button", {
          type: "button",
          onClick: p[2] || (p[2] = (b) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", $u, [
          Tu,
          h("div", Au, [
            h("h3", Iu, E(_(a)("Archive the files")), 1),
            h("div", Lu, [
              (S(!0), C(de, null, De(u.value, (b) => (S(), C("p", Ou, [
                b.type == "dir" ? (S(), C("svg", Pu, ju)) : (S(), C("svg", zu, Ru)),
                h("span", Hu, E(b.basename), 1)
              ]))), 256)),
              ke(h("input", {
                "onUpdate:modelValue": p[0] || (p[0] = (b) => n.value = b),
                onKeyup: nt(v, ["enter"]),
                class: "my-1 px-2 py-1 border rounded dark:bg-gray-700/25 dark:focus:ring-gray-600 dark:focus:border-gray-600 dark:text-gray-100 w-full",
                placeholder: _(a)("Archive name. (.zip file will be created)"),
                type: "text"
              }, null, 40, Bu), [
                [it, n.value]
              ]),
              l.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: p[1] || (p[1] = (b) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(l.value), 1)
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
}), Yu = { class: "sm:flex sm:items-start" }, Wu = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-50 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    class: "h-6 w-6 stroke-blue-600 dark:stroke-blue-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "none",
    "stroke-width": "1.5"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
    })
  ])
], -1), Xu = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, Zu = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, qu = { class: "mt-2" }, Fu = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, Gu = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, Ju = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), Qu = [
  Ju
], eh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, th = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), rh = [
  th
], sh = { class: "ml-1.5" }, oh = { class: "my-1 text-sm text-gray-500" }, nh = {
  name: "VFModalUnarchive"
}, ih = /* @__PURE__ */ Object.assign(nh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter");
    P("storage");
    const o = P("adapter"), { t: a } = P("i18n");
    A("");
    const n = A(e.selection.items[0]), l = A(""), u = A([]), v = () => {
      r.emit("vf-fetch", {
        params: {
          q: "unarchive",
          adapter: o.value,
          path: e.current.dirname,
          item: n.value.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: a("The file unarchived.") });
        },
        onError: (m) => {
          l.value = a(m.message);
        }
      });
    };
    return (m, p) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: v,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Unarchive")), 1),
        h("button", {
          type: "button",
          onClick: p[1] || (p[1] = (b) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(a)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", Yu, [
          Wu,
          h("div", Xu, [
            h("h3", Zu, E(_(a)("Unarchive")), 1),
            h("div", qu, [
              (S(!0), C(de, null, De(u.value, (b) => (S(), C("p", Fu, [
                b.type == "dir" ? (S(), C("svg", Gu, Qu)) : (S(), C("svg", eh, rh)),
                h("span", sh, E(b.basename), 1)
              ]))), 256)),
              h("p", oh, E(_(a)("The archive will be unarchived at")) + " (" + E(t.current.dirname) + ")", 1),
              l.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: p[0] || (p[0] = (b) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(l.value), 1)
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
}), ah = { class: "sm:flex sm:items-start" }, lh = /* @__PURE__ */ h("div", { class: "mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-gray-500 sm:mx-0 sm:h-10 sm:w-10" }, [
  /* @__PURE__ */ h("svg", {
    class: "h-6 w-6 stroke-red-600 dark:stroke-red-200",
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "2",
    stroke: "currentColor",
    "aria-hidden": "true"
  }, [
    /* @__PURE__ */ h("path", {
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      d: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    })
  ])
], -1), ch = { class: "mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left w-full" }, dh = {
  class: "text-lg leading-6 font-medium text-gray-900 dark:text-gray-400",
  id: "modal-title"
}, uh = { class: "mt-2" }, hh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, fh = {
  key: 0,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, ph = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
}, null, -1), gh = [
  ph
], mh = {
  key: 1,
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, vh = /* @__PURE__ */ h("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
}, null, -1), bh = [
  vh
], yh = { class: "ml-1.5" }, wh = { class: "text-sm text-gray-500 pb-1 pt-3" }, Sh = { class: "flex text-sm text-gray-800 dark:text-gray-400" }, _h = /* @__PURE__ */ h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "h-5 w-5 text-neutral-500 fill-sky-500 stroke-sky-500 dark:fill-slate-500 dark:stroke-slate-500",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor",
  "stroke-width": "1"
}, [
  /* @__PURE__ */ h("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    d: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
  })
], -1), xh = { class: "ml-1.5 overflow-auto" }, kh = {
  name: "VFModalMove"
}, Dh = /* @__PURE__ */ Object.assign(kh, {
  props: {
    selection: Object,
    current: Object
  },
  setup(t) {
    const e = t, r = P("emitter"), { t: o } = P("i18n");
    P("storage");
    const a = P("adapter"), n = A(e.selection.items.from), l = A(""), u = () => {
      n.value.length && r.emit("vf-fetch", {
        params: {
          q: "move",
          adapter: a.value,
          path: e.current.dirname,
          items: JSON.stringify(n.value.map(({ path: v, type: m }) => ({ path: v, type: m }))),
          item: e.selection.items.to.path
        },
        onSuccess: () => {
          r.emit("vf-toast-push", { label: o("Files moved.", e.selection.items.to.name) });
        },
        onError: (v) => {
          l.value = o(v.message);
        }
      });
    };
    return (v, m) => (S(), G(Oe, null, {
      buttons: Z(() => [
        h("button", {
          type: "button",
          onClick: u,
          class: "w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 dark:bg-gray-700 dark:hover:bg-gray-600/75 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(o)("Yes, Move!")), 1),
        h("button", {
          type: "button",
          onClick: m[1] || (m[1] = (p) => _(r).emit("vf-modal-close")),
          class: "mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
        }, E(_(o)("Cancel")), 1)
      ]),
      default: Z(() => [
        h("div", ah, [
          lh,
          h("div", ch, [
            h("h3", dh, E(_(o)("Move files")), 1),
            h("div", uh, [
              (S(!0), C(de, null, De(n.value, (p) => (S(), C("p", hh, [
                p.type == "dir" ? (S(), C("svg", fh, gh)) : (S(), C("svg", mh, bh)),
                h("span", yh, E(p.path), 1)
              ]))), 256)),
              h("p", wh, E(_(o)("Are you sure you want to move these files?")), 1),
              h("p", Sh, [
                _h,
                h("span", xh, E(t.selection.items.to.path), 1)
              ]),
              l.value.length ? (S(), G(Pe, {
                key: 0,
                onHidden: m[0] || (m[0] = (p) => l.value = ""),
                error: ""
              }, {
                default: Z(() => [
                  oe(E(l.value), 1)
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
}), Ch = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ModalDelete: sc,
  ModalMessage: uc,
  ModalNewFolder: wc,
  ModalNewFile: $c,
  ModalPreview: tu,
  ModalRename: vu,
  ModalUpload: Eu,
  ModalArchive: Ku,
  ModalUnarchive: ih,
  ModalMove: Dh
}, Symbol.toStringTag, { value: "Module" })), Xt = {
  VueFinder: Al,
  ...Ch
};
const $h = {
  install(t) {
    for (const e in Xt)
      if (Xt.hasOwnProperty(e)) {
        const r = Xt[e];
        t.component(r.name, r);
      }
  }
};
export {
  $h as default
};
