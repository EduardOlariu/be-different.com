!function (t) {
    function e(r) {
        if (n[r])return n[r].exports;
        var i = n[r] = {i: r, l: !1, exports: {}};
        return t[r].call(i.exports, i, i.exports, e), i.l = !0, i.exports
    }

    var n = {};
    return e.m = t, e.c = n, e.i = function (t) {
        return t
    }, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, {configurable: !1, enumerable: !0, get: r})
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () {
            return t.default
        } : function () {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "./", e(e.s = 38)
}([function (t, e, n) {
    "use strict";
    function r(t) {
        return "[object Array]" === C.call(t)
    }

    function i(t) {
        return "[object ArrayBuffer]" === C.call(t)
    }

    function o(t) {
        return "undefined" != typeof FormData && t instanceof FormData
    }

    function a(t) {
        var e;
        return e = "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(t) : t && t.buffer && t.buffer instanceof ArrayBuffer
    }

    function s(t) {
        return "string" == typeof t
    }

    function u(t) {
        return "number" == typeof t
    }

    function c(t) {
        return "undefined" == typeof t
    }

    function l(t) {
        return null !== t && "object" == typeof t
    }

    function f(t) {
        return "[object Date]" === C.call(t)
    }

    function p(t) {
        return "[object File]" === C.call(t)
    }

    function d(t) {
        return "[object Blob]" === C.call(t)
    }

    function h(t) {
        return "[object Function]" === C.call(t)
    }

    function v(t) {
        return l(t) && h(t.pipe)
    }

    function g(t) {
        return "undefined" != typeof URLSearchParams && t instanceof URLSearchParams
    }

    function m(t) {
        return t.replace(/^\s*/, "").replace(/\s*$/, "")
    }

    function y() {
        return "undefined" != typeof window && "undefined" != typeof document && "function" == typeof document.createElement
    }

    function b(t, e) {
        if (null !== t && "undefined" != typeof t)if ("object" == typeof t || r(t) || (t = [t]), r(t))for (var n = 0,
                                                                                                               i = t.length; n < i; n++)e.call(null, t[n], n, t); else for (var o in t)Object.prototype.hasOwnProperty.call(t, o) && e.call(null, t[o], o, t)
    }

    function _() {
        function t(t, n) {
            "object" == typeof e[n] && "object" == typeof t ? e[n] = _(e[n], t) : e[n] = t
        }

        for (var e = {}, n = 0, r = arguments.length; n < r; n++)b(arguments[n], t);
        return e
    }

    function w(t, e, n) {
        return b(e, function (e, r) {
            n && "function" == typeof e ? t[r] = x(e, n) : t[r] = e
        }), t
    }

    var x = n(6), C = Object.prototype.toString;
    t.exports = {
        isArray: r,
        isArrayBuffer: i,
        isFormData: o,
        isArrayBufferView: a,
        isString: s,
        isNumber: u,
        isObject: l,
        isUndefined: c,
        isDate: f,
        isFile: p,
        isBlob: d,
        isFunction: h,
        isStream: v,
        isURLSearchParams: g,
        isStandardBrowserEnv: y,
        forEach: b,
        merge: _,
        extend: w,
        trim: m
    }
}, function (t, e, n) {
    "use strict";
    (function (e) {
        function r(t, e) {
            !o.isUndefined(t) && o.isUndefined(t["Content-Type"]) && (t["Content-Type"] = e)
        }

        function i() {
            var t;
            return "undefined" != typeof XMLHttpRequest ? t = n(2) : "undefined" != typeof e && (t = n(2)), t
        }

        var o = n(0), a = n(26), s = /^\)\]\}',?\n/, u = {"Content-Type": "application/x-www-form-urlencoded"}, c = {
            adapter: i(),
            transformRequest: [function (t, e) {
                return a(e, "Content-Type"), o.isFormData(t) || o.isArrayBuffer(t) || o.isStream(t) || o.isFile(t) || o.isBlob(t) ? t : o.isArrayBufferView(t) ? t.buffer : o.isURLSearchParams(t) ? (r(e, "application/x-www-form-urlencoded;charset=utf-8"), t.toString()) : o.isObject(t) ? (r(e, "application/json;charset=utf-8"), JSON.stringify(t)) : t
            }],
            transformResponse: [function (t) {
                if ("string" == typeof t) {
                    t = t.replace(s, "");
                    try {
                        t = JSON.parse(t)
                    } catch (t) {
                    }
                }
                return t
            }],
            timeout: 0,
            xsrfCookieName: "XSRF-TOKEN",
            xsrfHeaderName: "X-XSRF-TOKEN",
            maxContentLength: -1,
            validateStatus: function (t) {
                return t >= 200 && t < 300
            }
        };
        c.headers = {common: {Accept: "application/json, text/plain, */*"}}, o.forEach(["delete", "get", "head"], function (t) {
            c.headers[t] = {}
        }), o.forEach(["post", "put", "patch"], function (t) {
            c.headers[t] = o.merge(u)
        }), t.exports = c
    }).call(e, n(33))
}, function (t, e, n) {
    "use strict";
    var r = n(0), i = n(18), o = n(21), a = n(27), s = n(25), u = n(5),
        c = "undefined" != typeof window && window.btoa && window.btoa.bind(window) || n(20);
    t.exports = function (t) {
        return new Promise(function (e, l) {
            var f = t.data, p = t.headers;
            r.isFormData(f) && delete p["Content-Type"];
            var d = new XMLHttpRequest, h = "onreadystatechange", v = !1;
            if ("undefined" == typeof window || !window.XDomainRequest || "withCredentials" in d || s(t.url) || (d = new window.XDomainRequest, h = "onload", v = !0, d.onprogress = function () {
                }, d.ontimeout = function () {
                }), t.auth) {
                var g = t.auth.username || "", m = t.auth.password || "";
                p.Authorization = "Basic " + c(g + ":" + m)
            }
            if (d.open(t.method.toUpperCase(), o(t.url, t.params, t.paramsSerializer), !0), d.timeout = t.timeout, d[h] = function () {
                    if (d && (4 === d.readyState || v) && (0 !== d.status || d.responseURL && 0 === d.responseURL.indexOf("file:"))) {
                        var n = "getAllResponseHeaders" in d ? a(d.getAllResponseHeaders()) : null,
                            r = t.responseType && "text" !== t.responseType ? d.response : d.responseText, o = {
                                data: r,
                                status: 1223 === d.status ? 204 : d.status,
                                statusText: 1223 === d.status ? "No Content" : d.statusText,
                                headers: n,
                                config: t,
                                request: d
                            };
                        i(e, l, o), d = null
                    }
                }, d.onerror = function () {
                    l(u("Network Error", t)), d = null
                }, d.ontimeout = function () {
                    l(u("timeout of " + t.timeout + "ms exceeded", t, "ECONNABORTED")), d = null
                }, r.isStandardBrowserEnv()) {
                var y = n(23),
                    b = (t.withCredentials || s(t.url)) && t.xsrfCookieName ? y.read(t.xsrfCookieName) : void 0;
                b && (p[t.xsrfHeaderName] = b)
            }
            if ("setRequestHeader" in d && r.forEach(p, function (t, e) {
                    "undefined" == typeof f && "content-type" === e.toLowerCase() ? delete p[e] : d.setRequestHeader(e, t)
                }), t.withCredentials && (d.withCredentials = !0), t.responseType)try {
                d.responseType = t.responseType
            } catch (t) {
                if ("json" !== d.responseType)throw t
            }
            "function" == typeof t.onDownloadProgress && d.addEventListener("progress", t.onDownloadProgress), "function" == typeof t.onUploadProgress && d.upload && d.upload.addEventListener("progress", t.onUploadProgress), t.cancelToken && t.cancelToken.promise.then(function (t) {
                d && (d.abort(), l(t), d = null)
            }), void 0 === f && (f = null), d.send(f)
        })
    }
}, function (t, e, n) {
    "use strict";
    function r(t) {
        this.message = t
    }

    r.prototype.toString = function () {
        return "Cancel" + (this.message ? ": " + this.message : "")
    }, r.prototype.__CANCEL__ = !0, t.exports = r
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return !(!t || !t.__CANCEL__)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(17);
    t.exports = function (t, e, n, i) {
        var o = new Error(t);
        return r(o, e, n, i)
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return function () {
            for (var n = new Array(arguments.length), r = 0; r < n.length; r++)n[r] = arguments[r];
            return t.apply(e, n)
        }
    }
}, function (t, e, n) {
    var r, i;
    /*!
     * jQuery JavaScript Library v3.1.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright jQuery Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2016-09-22T22:30Z
     */
    !function (e, n) {
        "use strict";
        "object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
            if (!t.document)throw new Error("jQuery requires a window with a document");
            return n(t)
        } : n(e)
    }("undefined" != typeof window ? window : this, function (n, o) {
        "use strict";
        function a(t, e) {
            e = e || ot;
            var n = e.createElement("script");
            n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
        }

        function s(t) {
            var e = !!t && "length" in t && t.length, n = yt.type(t);
            return "function" !== n && !yt.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function u(t, e, n) {
            return yt.isFunction(e) ? yt.grep(t, function (t, r) {
                return !!e.call(t, r, t) !== n
            }) : e.nodeType ? yt.grep(t, function (t) {
                return t === e !== n
            }) : "string" != typeof e ? yt.grep(t, function (t) {
                return lt.call(e, t) > -1 !== n
            }) : Et.test(e) ? yt.filter(e, t, n) : (e = yt.filter(e, t), yt.grep(t, function (t) {
                return lt.call(e, t) > -1 !== n && 1 === t.nodeType
            }))
        }

        function c(t, e) {
            for (; (t = t[e]) && 1 !== t.nodeType;);
            return t
        }

        function l(t) {
            var e = {};
            return yt.each(t.match(It) || [], function (t, n) {
                e[n] = !0
            }), e
        }

        function f(t) {
            return t
        }

        function p(t) {
            throw t
        }

        function d(t, e, n) {
            var r;
            try {
                t && yt.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && yt.isFunction(r = t.then) ? r.call(t, e, n) : e.call(void 0, t)
            } catch (t) {
                n.call(void 0, t)
            }
        }

        function h() {
            ot.removeEventListener("DOMContentLoaded", h), n.removeEventListener("load", h), yt.ready()
        }

        function v() {
            this.expando = yt.expando + v.uid++
        }

        function g(t) {
            return "true" === t || "false" !== t && ("null" === t ? null : t === +t + "" ? +t : Ht.test(t) ? JSON.parse(t) : t)
        }

        function m(t, e, n) {
            var r;
            if (void 0 === n && 1 === t.nodeType)if (r = "data-" + e.replace(Bt, "-$&").toLowerCase(), n = t.getAttribute(r), "string" == typeof n) {
                try {
                    n = g(n)
                } catch (t) {
                }
                Mt.set(t, e, n)
            } else n = void 0;
            return n
        }

        function y(t, e, n, r) {
            var i, o = 1, a = 20, s = r ? function () {
                    return r.cur()
                } : function () {
                    return yt.css(t, e, "")
                }, u = s(), c = n && n[3] || (yt.cssNumber[e] ? "" : "px"),
                l = (yt.cssNumber[e] || "px" !== c && +u) && Wt.exec(yt.css(t, e));
            if (l && l[3] !== c) {
                c = c || l[3], n = n || [], l = +u || 1;
                do o = o || ".5", l /= o, yt.style(t, e, l + c); while (o !== (o = s() / u) && 1 !== o && --a)
            }
            return n && (l = +l || +u || 0, i = n[1] ? l + (n[1] + 1) * n[2] : +n[2], r && (r.unit = c, r.start = l, r.end = i)), i
        }

        function b(t) {
            var e, n = t.ownerDocument, r = t.nodeName, i = Kt[r];
            return i ? i : (e = n.body.appendChild(n.createElement(r)), i = yt.css(e, "display"), e.parentNode.removeChild(e), "none" === i && (i = "block"), Kt[r] = i, i)
        }

        function _(t, e) {
            for (var n, r, i = [], o = 0,
                     a = t.length; o < a; o++)r = t[o], r.style && (n = r.style.display, e ? ("none" === n && (i[o] = qt.get(r, "display") || null, i[o] || (r.style.display = "")), "" === r.style.display && Vt(r) && (i[o] = b(r))) : "none" !== n && (i[o] = "none", qt.set(r, "display", n)));
            for (o = 0; o < a; o++)null != i[o] && (t[o].style.display = i[o]);
            return t
        }

        function w(t, e) {
            var n;
            return n = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : [], void 0 === e || e && yt.nodeName(t, e) ? yt.merge([t], n) : n
        }

        function x(t, e) {
            for (var n = 0, r = t.length; n < r; n++)qt.set(t[n], "globalEval", !e || qt.get(e[n], "globalEval"))
        }

        function C(t, e, n, r, i) {
            for (var o, a, s, u, c, l, f = e.createDocumentFragment(), p = [], d = 0,
                     h = t.length; d < h; d++)if (o = t[d], o || 0 === o)if ("object" === yt.type(o)) yt.merge(p, o.nodeType ? [o] : o); else if (Qt.test(o)) {
                for (a = a || f.appendChild(e.createElement("div")), s = (Gt.exec(o) || ["", ""])[1].toLowerCase(), u = Yt[s] || Yt._default, a.innerHTML = u[1] + yt.htmlPrefilter(o) + u[2], l = u[0]; l--;)a = a.lastChild;
                yt.merge(p, a.childNodes), a = f.firstChild, a.textContent = ""
            } else p.push(e.createTextNode(o));
            for (f.textContent = "", d = 0; o = p[d++];)if (r && yt.inArray(o, r) > -1) i && i.push(o); else if (c = yt.contains(o.ownerDocument, o), a = w(f.appendChild(o), "script"), c && x(a), n)for (l = 0; o = a[l++];)Zt.test(o.type || "") && n.push(o);
            return f
        }

        function T() {
            return !0
        }

        function $() {
            return !1
        }

        function k() {
            try {
                return ot.activeElement
            } catch (t) {
            }
        }

        function A(t, e, n, r, i, o) {
            var a, s;
            if ("object" == typeof e) {
                "string" != typeof n && (r = r || n, n = void 0);
                for (s in e)A(t, s, n, r, e[s], o);
                return t
            }
            if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), i === !1) i = $; else if (!i)return t;
            return 1 === o && (a = i, i = function (t) {
                return yt().off(t), a.apply(this, arguments)
            }, i.guid = a.guid || (a.guid = yt.guid++)), t.each(function () {
                yt.event.add(this, e, i, r, n)
            })
        }

        function E(t, e) {
            return yt.nodeName(t, "table") && yt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t : t
        }

        function S(t) {
            return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t
        }

        function O(t) {
            var e = se.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function j(t, e) {
            var n, r, i, o, a, s, u, c;
            if (1 === e.nodeType) {
                if (qt.hasData(t) && (o = qt.access(t), a = qt.set(e, o), c = o.events)) {
                    delete a.handle, a.events = {};
                    for (i in c)for (n = 0, r = c[i].length; n < r; n++)yt.event.add(e, i, c[i][n])
                }
                Mt.hasData(t) && (s = Mt.access(t), u = yt.extend({}, s), Mt.set(e, u))
            }
        }

        function N(t, e) {
            var n = e.nodeName.toLowerCase();
            "input" === n && Jt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }

        function D(t, e, n, r) {
            e = ut.apply([], e);
            var i, o, s, u, c, l, f = 0, p = t.length, d = p - 1, h = e[0], v = yt.isFunction(h);
            if (v || p > 1 && "string" == typeof h && !gt.checkClone && ae.test(h))return t.each(function (i) {
                var o = t.eq(i);
                v && (e[0] = h.call(this, i, o.html())), D(o, e, n, r)
            });
            if (p && (i = C(e, t[0].ownerDocument, !1, t, r), o = i.firstChild, 1 === i.childNodes.length && (i = o), o || r)) {
                for (s = yt.map(w(i, "script"), S), u = s.length; f < p; f++)c = i, f !== d && (c = yt.clone(c, !0, !0), u && yt.merge(s, w(c, "script"))), n.call(t[f], c, f);
                if (u)for (l = s[s.length - 1].ownerDocument, yt.map(s, O), f = 0; f < u; f++)c = s[f], Zt.test(c.type || "") && !qt.access(c, "globalEval") && yt.contains(l, c) && (c.src ? yt._evalUrl && yt._evalUrl(c.src) : a(c.textContent.replace(ue, ""), l))
            }
            return t
        }

        function I(t, e, n) {
            for (var r, i = e ? yt.filter(e, t) : t,
                     o = 0; null != (r = i[o]); o++)n || 1 !== r.nodeType || yt.cleanData(w(r)), r.parentNode && (n && yt.contains(r.ownerDocument, r) && x(w(r, "script")), r.parentNode.removeChild(r));
            return t
        }

        function R(t, e, n) {
            var r, i, o, a, s = t.style;
            return n = n || fe(t), n && (a = n.getPropertyValue(e) || n[e], "" !== a || yt.contains(t.ownerDocument, t) || (a = yt.style(t, e)), !gt.pixelMarginRight() && le.test(a) && ce.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a
        }

        function L(t, e) {
            return {
                get: function () {
                    return t() ? void delete this.get : (this.get = e).apply(this, arguments)
                }
            }
        }

        function P(t) {
            if (t in ge)return t;
            for (var e = t[0].toUpperCase() + t.slice(1), n = ve.length; n--;)if (t = ve[n] + e, t in ge)return t
        }

        function F(t, e, n) {
            var r = Wt.exec(e);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e
        }

        function q(t, e, n, r, i) {
            var o, a = 0;
            for (o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0; o < 4; o += 2)"margin" === n && (a += yt.css(t, n + zt[o], !0, i)), r ? ("content" === n && (a -= yt.css(t, "padding" + zt[o], !0, i)), "margin" !== n && (a -= yt.css(t, "border" + zt[o] + "Width", !0, i))) : (a += yt.css(t, "padding" + zt[o], !0, i), "padding" !== n && (a += yt.css(t, "border" + zt[o] + "Width", !0, i)));
            return a
        }

        function M(t, e, n) {
            var r, i = !0, o = fe(t), a = "border-box" === yt.css(t, "boxSizing", !1, o);
            if (t.getClientRects().length && (r = t.getBoundingClientRect()[e]), r <= 0 || null == r) {
                if (r = R(t, e, o), (r < 0 || null == r) && (r = t.style[e]), le.test(r))return r;
                i = a && (gt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
            }
            return r + q(t, e, n || (a ? "border" : "content"), i, o) + "px"
        }

        function H(t, e, n, r, i) {
            return new H.prototype.init(t, e, n, r, i)
        }

        function B() {
            ye && (n.requestAnimationFrame(B), yt.fx.tick())
        }

        function U() {
            return n.setTimeout(function () {
                me = void 0
            }), me = yt.now()
        }

        function W(t, e) {
            var n, r = 0, i = {height: t};
            for (e = e ? 1 : 0; r < 4; r += 2 - e)n = zt[r], i["margin" + n] = i["padding" + n] = t;
            return e && (i.opacity = i.width = t), i
        }

        function z(t, e, n) {
            for (var r, i = (K.tweeners[e] || []).concat(K.tweeners["*"]), o = 0,
                     a = i.length; o < a; o++)if (r = i[o].call(n, e, t))return r
        }

        function V(t, e, n) {
            var r, i, o, a, s, u, c, l, f = "width" in e || "height" in e, p = this, d = {}, h = t.style,
                v = t.nodeType && Vt(t), g = qt.get(t, "fxshow");
            n.queue || (a = yt._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, s = a.empty.fire, a.empty.fire = function () {
                a.unqueued || s()
            }), a.unqueued++, p.always(function () {
                p.always(function () {
                    a.unqueued--, yt.queue(t, "fx").length || a.empty.fire()
                })
            }));
            for (r in e)if (i = e[r], be.test(i)) {
                if (delete e[r], o = o || "toggle" === i, i === (v ? "hide" : "show")) {
                    if ("show" !== i || !g || void 0 === g[r])continue;
                    v = !0
                }
                d[r] = g && g[r] || yt.style(t, r)
            }
            if (u = !yt.isEmptyObject(e), u || !yt.isEmptyObject(d)) {
                f && 1 === t.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], c = g && g.display, null == c && (c = qt.get(t, "display")), l = yt.css(t, "display"), "none" === l && (c ? l = c : (_([t], !0), c = t.style.display || c, l = yt.css(t, "display"), _([t]))), ("inline" === l || "inline-block" === l && null != c) && "none" === yt.css(t, "float") && (u || (p.done(function () {
                    h.display = c
                }), null == c && (l = h.display, c = "none" === l ? "" : l)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", p.always(function () {
                    h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                })), u = !1;
                for (r in d)u || (g ? "hidden" in g && (v = g.hidden) : g = qt.access(t, "fxshow", {display: c}), o && (g.hidden = !v), v && _([t], !0), p.done(function () {
                    v || _([t]), qt.remove(t, "fxshow");
                    for (r in d)yt.style(t, r, d[r])
                })), u = z(v ? g[r] : 0, r, p), r in g || (g[r] = u.start, v && (u.end = u.start, u.start = 0))
            }
        }

        function X(t, e) {
            var n, r, i, o, a;
            for (n in t)if (r = yt.camelCase(n), i = e[r], o = t[n], yt.isArray(o) && (i = o[1], o = t[n] = o[0]), n !== r && (t[r] = o, delete t[n]), a = yt.cssHooks[r], a && "expand" in a) {
                o = a.expand(o), delete t[r];
                for (n in o)n in t || (t[n] = o[n], e[n] = i)
            } else e[r] = i
        }

        function K(t, e, n) {
            var r, i, o = 0, a = K.prefilters.length, s = yt.Deferred().always(function () {
                delete u.elem
            }), u = function () {
                if (i)return !1;
                for (var e = me || U(), n = Math.max(0, c.startTime + c.duration - e), r = n / c.duration || 0,
                         o = 1 - r, a = 0, u = c.tweens.length; a < u; a++)c.tweens[a].run(o);
                return s.notifyWith(t, [c, o, n]), o < 1 && u ? n : (s.resolveWith(t, [c]), !1)
            }, c = s.promise({
                elem: t,
                props: yt.extend({}, e),
                opts: yt.extend(!0, {specialEasing: {}, easing: yt.easing._default}, n),
                originalProperties: e,
                originalOptions: n,
                startTime: me || U(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var r = yt.Tween(t, c.opts, e, n, c.opts.specialEasing[e] || c.opts.easing);
                    return c.tweens.push(r), r
                },
                stop: function (e) {
                    var n = 0, r = e ? c.tweens.length : 0;
                    if (i)return this;
                    for (i = !0; n < r; n++)c.tweens[n].run(1);
                    return e ? (s.notifyWith(t, [c, 1, 0]), s.resolveWith(t, [c, e])) : s.rejectWith(t, [c, e]), this
                }
            }), l = c.props;
            for (X(l, c.opts.specialEasing); o < a; o++)if (r = K.prefilters[o].call(c, t, l, c.opts))return yt.isFunction(r.stop) && (yt._queueHooks(c.elem, c.opts.queue).stop = yt.proxy(r.stop, r)), r;
            return yt.map(l, z, c), yt.isFunction(c.opts.start) && c.opts.start.call(t, c), yt.fx.timer(yt.extend(u, {
                elem: t,
                anim: c,
                queue: c.opts.queue
            })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
        }

        function J(t) {
            var e = t.match(It) || [];
            return e.join(" ")
        }

        function G(t) {
            return t.getAttribute && t.getAttribute("class") || ""
        }

        function Z(t, e, n, r) {
            var i;
            if (yt.isArray(e)) yt.each(e, function (e, i) {
                n || Oe.test(t) ? r(t, i) : Z(t + "[" + ("object" == typeof i && null != i ? e : "") + "]", i, n, r)
            }); else if (n || "object" !== yt.type(e)) r(t, e); else for (i in e)Z(t + "[" + i + "]", e[i], n, r)
        }

        function Y(t) {
            return function (e, n) {
                "string" != typeof e && (n = e, e = "*");
                var r, i = 0, o = e.toLowerCase().match(It) || [];
                if (yt.isFunction(n))for (; r = o[i++];)"+" === r[0] ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
            }
        }

        function Q(t, e, n, r) {
            function i(s) {
                var u;
                return o[s] = !0, yt.each(t[s] || [], function (t, s) {
                    var c = s(e, n, r);
                    return "string" != typeof c || a || o[c] ? a ? !(u = c) : void 0 : (e.dataTypes.unshift(c), i(c), !1)
                }), u
            }

            var o = {}, a = t === Be;
            return i(e.dataTypes[0]) || !o["*"] && i("*")
        }

        function tt(t, e) {
            var n, r, i = yt.ajaxSettings.flatOptions || {};
            for (n in e)void 0 !== e[n] && ((i[n] ? t : r || (r = {}))[n] = e[n]);
            return r && yt.extend(!0, t, r), t
        }

        function et(t, e, n) {
            for (var r, i, o, a, s = t.contents,
                     u = t.dataTypes; "*" === u[0];)u.shift(), void 0 === r && (r = t.mimeType || e.getResponseHeader("Content-Type"));
            if (r)for (i in s)if (s[i] && s[i].test(r)) {
                u.unshift(i);
                break
            }
            if (u[0] in n) o = u[0]; else {
                for (i in n) {
                    if (!u[0] || t.converters[i + " " + u[0]]) {
                        o = i;
                        break
                    }
                    a || (a = i)
                }
                o = o || a
            }
            if (o)return o !== u[0] && u.unshift(o), n[o]
        }

        function nt(t, e, n, r) {
            var i, o, a, s, u, c = {}, l = t.dataTypes.slice();
            if (l[1])for (a in t.converters)c[a.toLowerCase()] = t.converters[a];
            for (o = l.shift(); o;)if (t.responseFields[o] && (n[t.responseFields[o]] = e), !u && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), u = o, o = l.shift())if ("*" === o) o = u; else if ("*" !== u && u !== o) {
                if (a = c[u + " " + o] || c["* " + o], !a)for (i in c)if (s = i.split(" "), s[1] === o && (a = c[u + " " + s[0]] || c["* " + s[0]])) {
                    a === !0 ? a = c[i] : c[i] !== !0 && (o = s[0], l.unshift(s[1]));
                    break
                }
                if (a !== !0)if (a && t.throws) e = a(e); else try {
                    e = a(e)
                } catch (t) {
                    return {state: "parsererror", error: a ? t : "No conversion from " + u + " to " + o}
                }
            }
            return {state: "success", data: e}
        }

        function rt(t) {
            return yt.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
        }

        var it = [], ot = n.document, at = Object.getPrototypeOf, st = it.slice, ut = it.concat, ct = it.push,
            lt = it.indexOf, ft = {}, pt = ft.toString, dt = ft.hasOwnProperty, ht = dt.toString, vt = ht.call(Object),
            gt = {}, mt = "3.1.1", yt = function (t, e) {
                return new yt.fn.init(t, e)
            }, bt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, _t = /^-ms-/, wt = /-([a-z])/g, xt = function (t, e) {
                return e.toUpperCase()
            };
        yt.fn = yt.prototype = {
            jquery: mt, constructor: yt, length: 0, toArray: function () {
                return st.call(this)
            }, get: function (t) {
                return null == t ? st.call(this) : t < 0 ? this[t + this.length] : this[t]
            }, pushStack: function (t) {
                var e = yt.merge(this.constructor(), t);
                return e.prevObject = this, e
            }, each: function (t) {
                return yt.each(this, t)
            }, map: function (t) {
                return this.pushStack(yt.map(this, function (e, n) {
                    return t.call(e, n, e)
                }))
            }, slice: function () {
                return this.pushStack(st.apply(this, arguments))
            }, first: function () {
                return this.eq(0)
            }, last: function () {
                return this.eq(-1)
            }, eq: function (t) {
                var e = this.length, n = +t + (t < 0 ? e : 0);
                return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
            }, end: function () {
                return this.prevObject || this.constructor()
            }, push: ct, sort: it.sort, splice: it.splice
        }, yt.extend = yt.fn.extend = function () {
            var t, e, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, c = !1;
            for ("boolean" == typeof a && (c = a, a = arguments[s] || {}, s++), "object" == typeof a || yt.isFunction(a) || (a = {}), s === u && (a = this, s--); s < u; s++)if (null != (t = arguments[s]))for (e in t)n = a[e], r = t[e], a !== r && (c && r && (yt.isPlainObject(r) || (i = yt.isArray(r))) ? (i ? (i = !1, o = n && yt.isArray(n) ? n : []) : o = n && yt.isPlainObject(n) ? n : {}, a[e] = yt.extend(c, o, r)) : void 0 !== r && (a[e] = r));
            return a
        }, yt.extend({
            expando: "jQuery" + (mt + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (t) {
                throw new Error(t)
            }, noop: function () {
            }, isFunction: function (t) {
                return "function" === yt.type(t)
            }, isArray: Array.isArray, isWindow: function (t) {
                return null != t && t === t.window
            }, isNumeric: function (t) {
                var e = yt.type(t);
                return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t))
            }, isPlainObject: function (t) {
                var e, n;
                return !(!t || "[object Object]" !== pt.call(t)) && (!(e = at(t)) || (n = dt.call(e, "constructor") && e.constructor, "function" == typeof n && ht.call(n) === vt))
            }, isEmptyObject: function (t) {
                var e;
                for (e in t)return !1;
                return !0
            }, type: function (t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? ft[pt.call(t)] || "object" : typeof t
            }, globalEval: function (t) {
                a(t)
            }, camelCase: function (t) {
                return t.replace(_t, "ms-").replace(wt, xt)
            }, nodeName: function (t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            }, each: function (t, e) {
                var n, r = 0;
                if (s(t))for (n = t.length; r < n && e.call(t[r], r, t[r]) !== !1; r++); else for (r in t)if (e.call(t[r], r, t[r]) === !1)break;
                return t
            }, trim: function (t) {
                return null == t ? "" : (t + "").replace(bt, "")
            }, makeArray: function (t, e) {
                var n = e || [];
                return null != t && (s(Object(t)) ? yt.merge(n, "string" == typeof t ? [t] : t) : ct.call(n, t)), n
            }, inArray: function (t, e, n) {
                return null == e ? -1 : lt.call(e, t, n)
            }, merge: function (t, e) {
                for (var n = +e.length, r = 0, i = t.length; r < n; r++)t[i++] = e[r];
                return t.length = i, t
            }, grep: function (t, e, n) {
                for (var r, i = [], o = 0, a = t.length, s = !n; o < a; o++)r = !e(t[o], o), r !== s && i.push(t[o]);
                return i
            }, map: function (t, e, n) {
                var r, i, o = 0, a = [];
                if (s(t))for (r = t.length; o < r; o++)i = e(t[o], o, n), null != i && a.push(i); else for (o in t)i = e(t[o], o, n), null != i && a.push(i);
                return ut.apply([], a)
            }, guid: 1, proxy: function (t, e) {
                var n, r, i;
                if ("string" == typeof e && (n = t[e], e = t, t = n), yt.isFunction(t))return r = st.call(arguments, 2), i = function () {
                    return t.apply(e || this, r.concat(st.call(arguments)))
                }, i.guid = t.guid = t.guid || yt.guid++, i
            }, now: Date.now, support: gt
        }), "function" == typeof Symbol && (yt.fn[Symbol.iterator] = it[Symbol.iterator]), yt.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
            ft["[object " + e + "]"] = e.toLowerCase()
        });
        var Ct = /*!
         * Sizzle CSS Selector Engine v2.3.3
         * https://sizzlejs.com/
         *
         * Copyright jQuery Foundation and other contributors
         * Released under the MIT license
         * http://jquery.org/license
         *
         * Date: 2016-08-08
         */
            function (t) {
                function e(t, e, n, r) {
                    var i, o, a, s, u, c, l, p = e && e.ownerDocument, h = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== h && 9 !== h && 11 !== h)return n;
                    if (!r && ((e ? e.ownerDocument || e : H) !== D && N(e), e = e || D, R)) {
                        if (11 !== h && (u = mt.exec(t)))if (i = u[1]) {
                            if (9 === h) {
                                if (!(a = e.getElementById(i)))return n;
                                if (a.id === i)return n.push(a), n
                            } else if (p && (a = p.getElementById(i)) && q(e, a) && a.id === i)return n.push(a), n
                        } else {
                            if (u[2])return Y.apply(n, e.getElementsByTagName(t)), n;
                            if ((i = u[3]) && x.getElementsByClassName && e.getElementsByClassName)return Y.apply(n, e.getElementsByClassName(i)), n
                        }
                        if (x.qsa && !V[t + " "] && (!L || !L.test(t))) {
                            if (1 !== h) p = e, l = t; else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((s = e.getAttribute("id")) ? s = s.replace(wt, xt) : e.setAttribute("id", s = M), c = k(t), o = c.length; o--;)c[o] = "#" + s + " " + d(c[o]);
                                l = c.join(","), p = yt.test(t) && f(e.parentNode) || e
                            }
                            if (l)try {
                                return Y.apply(n, p.querySelectorAll(l)), n
                            } catch (t) {
                            } finally {
                                s === M && e.removeAttribute("id")
                            }
                        }
                    }
                    return E(t.replace(st, "$1"), e, n, r)
                }

                function n() {
                    function t(n, r) {
                        return e.push(n + " ") > C.cacheLength && delete t[e.shift()], t[n + " "] = r
                    }

                    var e = [];
                    return t
                }

                function r(t) {
                    return t[M] = !0, t
                }

                function i(t) {
                    var e = D.createElement("fieldset");
                    try {
                        return !!t(e)
                    } catch (t) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function o(t, e) {
                    for (var n = t.split("|"), r = n.length; r--;)C.attrHandle[n[r]] = e
                }

                function a(t, e) {
                    var n = e && t, r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (r)return r;
                    if (n)for (; n = n.nextSibling;)if (n === e)return -1;
                    return t ? 1 : -1
                }

                function s(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return "input" === n && e.type === t
                    }
                }

                function u(t) {
                    return function (e) {
                        var n = e.nodeName.toLowerCase();
                        return ("input" === n || "button" === n) && e.type === t
                    }
                }

                function c(t) {
                    return function (e) {
                        return "form" in e ? e.parentNode && e.disabled === !1 ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && Tt(e) === t : e.disabled === t : "label" in e && e.disabled === t
                    }
                }

                function l(t) {
                    return r(function (e) {
                        return e = +e, r(function (n, r) {
                            for (var i, o = t([], n.length, e),
                                     a = o.length; a--;)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                        })
                    })
                }

                function f(t) {
                    return t && "undefined" != typeof t.getElementsByTagName && t
                }

                function p() {
                }

                function d(t) {
                    for (var e = 0, n = t.length, r = ""; e < n; e++)r += t[e].value;
                    return r
                }

                function h(t, e, n) {
                    var r = e.dir, i = e.next, o = i || r, a = n && "parentNode" === o, s = U++;
                    return e.first ? function (e, n, i) {
                        for (; e = e[r];)if (1 === e.nodeType || a)return t(e, n, i);
                        return !1
                    } : function (e, n, u) {
                        var c, l, f, p = [B, s];
                        if (u) {
                            for (; e = e[r];)if ((1 === e.nodeType || a) && t(e, n, u))return !0
                        } else for (; e = e[r];)if (1 === e.nodeType || a)if (f = e[M] || (e[M] = {}), l = f[e.uniqueID] || (f[e.uniqueID] = {}), i && i === e.nodeName.toLowerCase()) e = e[r] || e; else {
                            if ((c = l[o]) && c[0] === B && c[1] === s)return p[2] = c[2];
                            if (l[o] = p, p[2] = t(e, n, u))return !0
                        }
                        return !1
                    }
                }

                function v(t) {
                    return t.length > 1 ? function (e, n, r) {
                        for (var i = t.length; i--;)if (!t[i](e, n, r))return !1;
                        return !0
                    } : t[0]
                }

                function g(t, n, r) {
                    for (var i = 0, o = n.length; i < o; i++)e(t, n[i], r);
                    return r
                }

                function m(t, e, n, r, i) {
                    for (var o, a = [], s = 0, u = t.length,
                             c = null != e; s < u; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), c && e.push(s)));
                    return a
                }

                function y(t, e, n, i, o, a) {
                    return i && !i[M] && (i = y(i)), o && !o[M] && (o = y(o, a)), r(function (r, a, s, u) {
                        var c, l, f, p = [], d = [], h = a.length, v = r || g(e || "*", s.nodeType ? [s] : s, []),
                            y = !t || !r && e ? v : m(v, p, t, s, u), b = n ? o || (r ? t : h || i) ? [] : a : y;
                        if (n && n(y, b, s, u), i)for (c = m(b, d), i(c, [], s, u), l = c.length; l--;)(f = c[l]) && (b[d[l]] = !(y[d[l]] = f));
                        if (r) {
                            if (o || t) {
                                if (o) {
                                    for (c = [], l = b.length; l--;)(f = b[l]) && c.push(y[l] = f);
                                    o(null, b = [], c, u)
                                }
                                for (l = b.length; l--;)(f = b[l]) && (c = o ? tt(r, f) : p[l]) > -1 && (r[c] = !(a[c] = f))
                            }
                        } else b = m(b === a ? b.splice(h, b.length) : b), o ? o(null, a, b, u) : Y.apply(a, b)
                    })
                }

                function b(t) {
                    for (var e, n, r, i = t.length, o = C.relative[t[0].type], a = o || C.relative[" "], s = o ? 1 : 0,
                             u = h(function (t) {
                                 return t === e
                             }, a, !0), c = h(function (t) {
                            return tt(e, t) > -1
                        }, a, !0), l = [function (t, n, r) {
                            var i = !o && (r || n !== S) || ((e = n).nodeType ? u(t, n, r) : c(t, n, r));
                            return e = null, i
                        }]; s < i; s++)if (n = C.relative[t[s].type]) l = [h(v(l), n)]; else {
                        if (n = C.filter[t[s].type].apply(null, t[s].matches), n[M]) {
                            for (r = ++s; r < i && !C.relative[t[r].type]; r++);
                            return y(s > 1 && v(l), s > 1 && d(t.slice(0, s - 1).concat({value: " " === t[s - 2].type ? "*" : ""})).replace(st, "$1"), n, s < r && b(t.slice(s, r)), r < i && b(t = t.slice(r)), r < i && d(t))
                        }
                        l.push(n)
                    }
                    return v(l)
                }

                function _(t, n) {
                    var i = n.length > 0, o = t.length > 0, a = function (r, a, s, u, c) {
                        var l, f, p, d = 0, h = "0", v = r && [], g = [], y = S, b = r || o && C.find.TAG("*", c),
                            _ = B += null == y ? 1 : Math.random() || .1, w = b.length;
                        for (c && (S = a === D || a || c); h !== w && null != (l = b[h]); h++) {
                            if (o && l) {
                                for (f = 0, a || l.ownerDocument === D || (N(l), s = !R); p = t[f++];)if (p(l, a || D, s)) {
                                    u.push(l);
                                    break
                                }
                                c && (B = _)
                            }
                            i && ((l = !p && l) && d--, r && v.push(l))
                        }
                        if (d += h, i && h !== d) {
                            for (f = 0; p = n[f++];)p(v, g, a, s);
                            if (r) {
                                if (d > 0)for (; h--;)v[h] || g[h] || (g[h] = G.call(u));
                                g = m(g)
                            }
                            Y.apply(u, g), c && !r && g.length > 0 && d + n.length > 1 && e.uniqueSort(u)
                        }
                        return c && (B = _, S = y), v
                    };
                    return i ? r(a) : a
                }

                var w, x, C, T, $, k, A, E, S, O, j, N, D, I, R, L, P, F, q, M = "sizzle" + 1 * new Date,
                    H = t.document, B = 0, U = 0, W = n(), z = n(), V = n(), X = function (t, e) {
                        return t === e && (j = !0), 0
                    }, K = {}.hasOwnProperty, J = [], G = J.pop, Z = J.push, Y = J.push, Q = J.slice, tt = function (t, e) {
                        for (var n = 0, r = t.length; n < r; n++)if (t[n] === e)return n;
                        return -1
                    },
                    et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    nt = "[\\x20\\t\\r\\n\\f]", rt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    it = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]",
                    ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + it + ")*)|.*)\\)|)",
                    at = new RegExp(nt + "+", "g"),
                    st = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
                    ut = new RegExp("^" + nt + "*," + nt + "*"),
                    ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
                    lt = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"), ft = new RegExp(ot),
                    pt = new RegExp("^" + rt + "$"), dt = {
                        ID: new RegExp("^#(" + rt + ")"),
                        CLASS: new RegExp("^\\.(" + rt + ")"),
                        TAG: new RegExp("^(" + rt + "|[*])"),
                        ATTR: new RegExp("^" + it),
                        PSEUDO: new RegExp("^" + ot),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + et + ")$", "i"),
                        needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
                    }, ht = /^(?:input|select|textarea|button)$/i, vt = /^h\d$/i, gt = /^[^{]+\{\s*\[native \w/,
                    mt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, yt = /[+~]/,
                    bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"), _t = function (t, e, n) {
                        var r = "0x" + e - 65536;
                        return r !== r || n ? e : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
                    }, wt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, xt = function (t, e) {
                        return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
                    }, Ct = function () {
                        N()
                    }, Tt = h(function (t) {
                        return t.disabled === !0 && ("form" in t || "label" in t)
                    }, {dir: "parentNode", next: "legend"});
                try {
                    Y.apply(J = Q.call(H.childNodes), H.childNodes), J[H.childNodes.length].nodeType
                } catch (t) {
                    Y = {
                        apply: J.length ? function (t, e) {
                            Z.apply(t, Q.call(e))
                        } : function (t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];);
                            t.length = n - 1
                        }
                    }
                }
                x = e.support = {}, $ = e.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName
                }, N = e.setDocument = function (t) {
                    var e, n, r = t ? t.ownerDocument || t : H;
                    return r !== D && 9 === r.nodeType && r.documentElement ? (D = r, I = D.documentElement, R = !$(D), H !== D && (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Ct, !1) : n.attachEvent && n.attachEvent("onunload", Ct)), x.attributes = i(function (t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), x.getElementsByTagName = i(function (t) {
                        return t.appendChild(D.createComment("")), !t.getElementsByTagName("*").length
                    }), x.getElementsByClassName = gt.test(D.getElementsByClassName), x.getById = i(function (t) {
                        return I.appendChild(t).id = M, !D.getElementsByName || !D.getElementsByName(M).length
                    }), x.getById ? (C.filter.ID = function (t) {
                        var e = t.replace(bt, _t);
                        return function (t) {
                            return t.getAttribute("id") === e
                        }
                    }, C.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && R) {
                            var n = e.getElementById(t);
                            return n ? [n] : []
                        }
                    }) : (C.filter.ID = function (t) {
                        var e = t.replace(bt, _t);
                        return function (t) {
                            var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                            return n && n.value === e
                        }
                    }, C.find.ID = function (t, e) {
                        if ("undefined" != typeof e.getElementById && R) {
                            var n, r, i, o = e.getElementById(t);
                            if (o) {
                                if (n = o.getAttributeNode("id"), n && n.value === t)return [o];
                                for (i = e.getElementsByName(t), r = 0; o = i[r++];)if (n = o.getAttributeNode("id"), n && n.value === t)return [o]
                            }
                            return []
                        }
                    }), C.find.TAG = x.getElementsByTagName ? function (t, e) {
                        return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
                    } : function (t, e) {
                        var n, r = [], i = 0, o = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; n = o[i++];)1 === n.nodeType && r.push(n);
                            return r
                        }
                        return o
                    }, C.find.CLASS = x.getElementsByClassName && function (t, e) {
                            if ("undefined" != typeof e.getElementsByClassName && R)return e.getElementsByClassName(t)
                        }, P = [], L = [], (x.qsa = gt.test(D.querySelectorAll)) && (i(function (t) {
                        I.appendChild(t).innerHTML = "<a id='" + M + "'></a><select id='" + M + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && L.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || L.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + M + "-]").length || L.push("~="), t.querySelectorAll(":checked").length || L.push(":checked"), t.querySelectorAll("a#" + M + "+*").length || L.push(".#.+[+~]")
                    }), i(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = D.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && L.push("name" + nt + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && L.push(":enabled", ":disabled"), I.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && L.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), L.push(",.*:")
                    })), (x.matchesSelector = gt.test(F = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && i(function (t) {
                        x.disconnectedMatch = F.call(t, "*"), F.call(t, "[s!='']:x"), P.push("!=", ot)
                    }), L = L.length && new RegExp(L.join("|")), P = P.length && new RegExp(P.join("|")), e = gt.test(I.compareDocumentPosition), q = e || gt.test(I.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t, r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function (t, e) {
                        if (e)for (; e = e.parentNode;)if (e === t)return !0;
                        return !1
                    }, X = e ? function (t, e) {
                        if (t === e)return j = !0, 0;
                        var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                        return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === D || t.ownerDocument === H && q(H, t) ? -1 : e === D || e.ownerDocument === H && q(H, e) ? 1 : O ? tt(O, t) - tt(O, e) : 0 : 4 & n ? -1 : 1)
                    } : function (t, e) {
                        if (t === e)return j = !0, 0;
                        var n, r = 0, i = t.parentNode, o = e.parentNode, s = [t], u = [e];
                        if (!i || !o)return t === D ? -1 : e === D ? 1 : i ? -1 : o ? 1 : O ? tt(O, t) - tt(O, e) : 0;
                        if (i === o)return a(t, e);
                        for (n = t; n = n.parentNode;)s.unshift(n);
                        for (n = e; n = n.parentNode;)u.unshift(n);
                        for (; s[r] === u[r];)r++;
                        return r ? a(s[r], u[r]) : s[r] === H ? -1 : u[r] === H ? 1 : 0
                    }, D) : D
                }, e.matches = function (t, n) {
                    return e(t, null, null, n)
                }, e.matchesSelector = function (t, n) {
                    if ((t.ownerDocument || t) !== D && N(t), n = n.replace(lt, "='$1']"), x.matchesSelector && R && !V[n + " "] && (!P || !P.test(n)) && (!L || !L.test(n)))try {
                        var r = F.call(t, n);
                        if (r || x.disconnectedMatch || t.document && 11 !== t.document.nodeType)return r
                    } catch (t) {
                    }
                    return e(n, D, null, [t]).length > 0
                }, e.contains = function (t, e) {
                    return (t.ownerDocument || t) !== D && N(t), q(t, e)
                }, e.attr = function (t, e) {
                    (t.ownerDocument || t) !== D && N(t);
                    var n = C.attrHandle[e.toLowerCase()],
                        r = n && K.call(C.attrHandle, e.toLowerCase()) ? n(t, e, !R) : void 0;
                    return void 0 !== r ? r : x.attributes || !R ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, e.escape = function (t) {
                    return (t + "").replace(wt, xt)
                }, e.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, e.uniqueSort = function (t) {
                    var e, n = [], r = 0, i = 0;
                    if (j = !x.detectDuplicates, O = !x.sortStable && t.slice(0), t.sort(X), j) {
                        for (; e = t[i++];)e === t[i] && (r = n.push(i));
                        for (; r--;)t.splice(n[r], 1)
                    }
                    return O = null, t
                }, T = e.getText = function (t) {
                    var e, n = "", r = 0, i = t.nodeType;
                    if (i) {
                        if (1 === i || 9 === i || 11 === i) {
                            if ("string" == typeof t.textContent)return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling)n += T(t)
                        } else if (3 === i || 4 === i)return t.nodeValue
                    } else for (; e = t[r++];)n += T(e);
                    return n
                }, C = e.selectors = {
                    cacheLength: 50,
                    createPseudo: r,
                    match: dt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {dir: "parentNode", first: !0},
                        " ": {dir: "parentNode"},
                        "+": {dir: "previousSibling", first: !0},
                        "~": {dir: "previousSibling"}
                    },
                    preFilter: {
                        ATTR: function (t) {
                            return t[1] = t[1].replace(bt, _t), t[3] = (t[3] || t[4] || t[5] || "").replace(bt, _t), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        }, CHILD: function (t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                        }, PSEUDO: function (t) {
                            var e, n = !t[6] && t[2];
                            return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = k(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(bt, _t).toLowerCase();
                            return "*" === t ? function () {
                                return !0
                            } : function (t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        }, CLASS: function (t) {
                            var e = W[t + " "];
                            return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && W(t, function (t) {
                                    return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                                })
                        }, ATTR: function (t, n, r) {
                            return function (i) {
                                var o = e.attr(i, t);
                                return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(r) > -1 : "|=" === n && (o === r || o.slice(0, r.length + 1) === r + "-"))
                            }
                        }, CHILD: function (t, e, n, r, i) {
                            var o = "nth" !== t.slice(0, 3), a = "last" !== t.slice(-4), s = "of-type" === e;
                            return 1 === r && 0 === i ? function (t) {
                                return !!t.parentNode
                            } : function (e, n, u) {
                                var c, l, f, p, d, h, v = o !== a ? "nextSibling" : "previousSibling", g = e.parentNode,
                                    m = s && e.nodeName.toLowerCase(), y = !u && !s, b = !1;
                                if (g) {
                                    if (o) {
                                        for (; v;) {
                                            for (p = e; p = p[v];)if (s ? p.nodeName.toLowerCase() === m : 1 === p.nodeType)return !1;
                                            h = v = "only" === t && !h && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (h = [a ? g.firstChild : g.lastChild], a && y) {
                                        for (p = g, f = p[M] || (p[M] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[t] || [], d = c[0] === B && c[1], b = d && c[2], p = d && g.childNodes[d]; p = ++d && p && p[v] || (b = d = 0) || h.pop();)if (1 === p.nodeType && ++b && p === e) {
                                            l[t] = [B, d, b];
                                            break
                                        }
                                    } else if (y && (p = e, f = p[M] || (p[M] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), c = l[t] || [], d = c[0] === B && c[1], b = d), b === !1)for (; (p = ++d && p && p[v] || (b = d = 0) || h.pop()) && ((s ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && (f = p[M] || (p[M] = {}), l = f[p.uniqueID] || (f[p.uniqueID] = {}), l[t] = [B, b]), p !== e)););
                                    return b -= i, b === r || b % r === 0 && b / r >= 0
                                }
                            }
                        }, PSEUDO: function (t, n) {
                            var i,
                                o = C.pseudos[t] || C.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                            return o[M] ? o(n) : o.length > 1 ? (i = [t, t, "", n], C.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
                                for (var r, i = o(t, n), a = i.length; a--;)r = tt(t, i[a]), t[r] = !(e[r] = i[a])
                            }) : function (t) {
                                return o(t, 0, i)
                            }) : o
                        }
                    },
                    pseudos: {
                        not: r(function (t) {
                            var e = [], n = [], i = A(t.replace(st, "$1"));
                            return i[M] ? r(function (t, e, n, r) {
                                for (var o, a = i(t, null, r, []), s = t.length; s--;)(o = a[s]) && (t[s] = !(e[s] = o))
                            }) : function (t, r, o) {
                                return e[0] = t, i(e, null, o, n), e[0] = null, !n.pop()
                            }
                        }), has: r(function (t) {
                            return function (n) {
                                return e(t, n).length > 0
                            }
                        }), contains: r(function (t) {
                            return t = t.replace(bt, _t), function (e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                        }), lang: r(function (t) {
                            return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(bt, _t).toLowerCase(), function (e) {
                                var n;
                                do if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                        }), target: function (e) {
                            var n = t.location && t.location.hash;
                            return n && n.slice(1) === e.id
                        }, root: function (t) {
                            return t === I
                        }, focus: function (t) {
                            return t === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        }, enabled: c(!1), disabled: c(!0), checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        }, selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        }, empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)if (t.nodeType < 6)return !1;
                            return !0
                        }, parent: function (t) {
                            return !C.pseudos.empty(t)
                        }, header: function (t) {
                            return vt.test(t.nodeName)
                        }, input: function (t) {
                            return ht.test(t.nodeName)
                        }, button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        }, text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                        }, first: l(function () {
                            return [0]
                        }), last: l(function (t, e) {
                            return [e - 1]
                        }), eq: l(function (t, e, n) {
                            return [n < 0 ? n + e : n]
                        }), even: l(function (t, e) {
                            for (var n = 0; n < e; n += 2)t.push(n);
                            return t
                        }), odd: l(function (t, e) {
                            for (var n = 1; n < e; n += 2)t.push(n);
                            return t
                        }), lt: l(function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; --r >= 0;)t.push(r);
                            return t
                        }), gt: l(function (t, e, n) {
                            for (var r = n < 0 ? n + e : n; ++r < e;)t.push(r);
                            return t
                        })
                    }
                }, C.pseudos.nth = C.pseudos.eq;
                for (w in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})C.pseudos[w] = s(w);
                for (w in{submit: !0, reset: !0})C.pseudos[w] = u(w);
                return p.prototype = C.filters = C.pseudos, C.setFilters = new p, k = e.tokenize = function (t, n) {
                    var r, i, o, a, s, u, c, l = z[t + " "];
                    if (l)return n ? 0 : l.slice(0);
                    for (s = t, u = [], c = C.preFilter; s;) {
                        r && !(i = ut.exec(s)) || (i && (s = s.slice(i[0].length) || s), u.push(o = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), o.push({
                            value: r,
                            type: i[0].replace(st, " ")
                        }), s = s.slice(r.length));
                        for (a in C.filter)!(i = dt[a].exec(s)) || c[a] && !(i = c[a](i)) || (r = i.shift(), o.push({
                            value: r,
                            type: a,
                            matches: i
                        }), s = s.slice(r.length));
                        if (!r)break
                    }
                    return n ? s.length : s ? e.error(t) : z(t, u).slice(0)
                }, A = e.compile = function (t, e) {
                    var n, r = [], i = [], o = V[t + " "];
                    if (!o) {
                        for (e || (e = k(t)), n = e.length; n--;)o = b(e[n]), o[M] ? r.push(o) : i.push(o);
                        o = V(t, _(i, r)), o.selector = t
                    }
                    return o
                }, E = e.select = function (t, e, n, r) {
                    var i, o, a, s, u, c = "function" == typeof t && t, l = !r && k(t = c.selector || t);
                    if (n = n || [], 1 === l.length) {
                        if (o = l[0] = l[0].slice(0), o.length > 2 && "ID" === (a = o[0]).type && 9 === e.nodeType && R && C.relative[o[1].type]) {
                            if (e = (C.find.ID(a.matches[0].replace(bt, _t), e) || [])[0], !e)return n;
                            c && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (i = dt.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !C.relative[s = a.type]);)if ((u = C.find[s]) && (r = u(a.matches[0].replace(bt, _t), yt.test(o[0].type) && f(e.parentNode) || e))) {
                            if (o.splice(i, 1), t = r.length && d(o), !t)return Y.apply(n, r), n;
                            break
                        }
                    }
                    return (c || A(t, l))(r, e, !R, n, !e || yt.test(t) && f(e.parentNode) || e), n
                }, x.sortStable = M.split("").sort(X).join("") === M, x.detectDuplicates = !!j, N(), x.sortDetached = i(function (t) {
                    return 1 & t.compareDocumentPosition(D.createElement("fieldset"))
                }), i(function (t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || o("type|href|height|width", function (t, e, n) {
                    if (!n)return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), x.attributes && i(function (t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || o("value", function (t, e, n) {
                    if (!n && "input" === t.nodeName.toLowerCase())return t.defaultValue
                }), i(function (t) {
                    return null == t.getAttribute("disabled")
                }) || o(et, function (t, e, n) {
                    var r;
                    if (!n)return t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }), e
            }(n);
        yt.find = Ct, yt.expr = Ct.selectors, yt.expr[":"] = yt.expr.pseudos, yt.uniqueSort = yt.unique = Ct.uniqueSort, yt.text = Ct.getText, yt.isXMLDoc = Ct.isXML, yt.contains = Ct.contains, yt.escapeSelector = Ct.escape;
        var Tt = function (t, e, n) {
                for (var r = [], i = void 0 !== n; (t = t[e]) && 9 !== t.nodeType;)if (1 === t.nodeType) {
                    if (i && yt(t).is(n))break;
                    r.push(t)
                }
                return r
            }, $t = function (t, e) {
                for (var n = []; t; t = t.nextSibling)1 === t.nodeType && t !== e && n.push(t);
                return n
            }, kt = yt.expr.match.needsContext, At = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
            Et = /^.[^:#\[\.,]*$/;
        yt.filter = function (t, e, n) {
            var r = e[0];
            return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? yt.find.matchesSelector(r, t) ? [r] : [] : yt.find.matches(t, yt.grep(e, function (t) {
                return 1 === t.nodeType
            }))
        }, yt.fn.extend({
            find: function (t) {
                var e, n, r = this.length, i = this;
                if ("string" != typeof t)return this.pushStack(yt(t).filter(function () {
                    for (e = 0; e < r; e++)if (yt.contains(i[e], this))return !0
                }));
                for (n = this.pushStack([]), e = 0; e < r; e++)yt.find(t, i[e], n);
                return r > 1 ? yt.uniqueSort(n) : n
            }, filter: function (t) {
                return this.pushStack(u(this, t || [], !1))
            }, not: function (t) {
                return this.pushStack(u(this, t || [], !0))
            }, is: function (t) {
                return !!u(this, "string" == typeof t && kt.test(t) ? yt(t) : t || [], !1).length
            }
        });
        var St, Ot = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, jt = yt.fn.init = function (t, e, n) {
            var r, i;
            if (!t)return this;
            if (n = n || St, "string" == typeof t) {
                if (r = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : Ot.exec(t), !r || !r[1] && e)return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof yt ? e[0] : e, yt.merge(this, yt.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : ot, !0)), At.test(r[1]) && yt.isPlainObject(e))for (r in e)yt.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return i = ot.getElementById(r[2]), i && (this[0] = i, this.length = 1), this
            }
            return t.nodeType ? (this[0] = t, this.length = 1, this) : yt.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(yt) : yt.makeArray(t, this)
        };
        jt.prototype = yt.fn, St = yt(ot);
        var Nt = /^(?:parents|prev(?:Until|All))/, Dt = {children: !0, contents: !0, next: !0, prev: !0};
        yt.fn.extend({
            has: function (t) {
                var e = yt(t, this), n = e.length;
                return this.filter(function () {
                    for (var t = 0; t < n; t++)if (yt.contains(this, e[t]))return !0
                })
            }, closest: function (t, e) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof t && yt(t);
                if (!kt.test(t))for (; r < i; r++)for (n = this[r]; n && n !== e; n = n.parentNode)if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && yt.find.matchesSelector(n, t))) {
                    o.push(n);
                    break
                }
                return this.pushStack(o.length > 1 ? yt.uniqueSort(o) : o)
            }, index: function (t) {
                return t ? "string" == typeof t ? lt.call(yt(t), this[0]) : lt.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            }, add: function (t, e) {
                return this.pushStack(yt.uniqueSort(yt.merge(this.get(), yt(t, e))))
            }, addBack: function (t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), yt.each({
            parent: function (t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            }, parents: function (t) {
                return Tt(t, "parentNode")
            }, parentsUntil: function (t, e, n) {
                return Tt(t, "parentNode", n)
            }, next: function (t) {
                return c(t, "nextSibling")
            }, prev: function (t) {
                return c(t, "previousSibling")
            }, nextAll: function (t) {
                return Tt(t, "nextSibling")
            }, prevAll: function (t) {
                return Tt(t, "previousSibling")
            }, nextUntil: function (t, e, n) {
                return Tt(t, "nextSibling", n)
            }, prevUntil: function (t, e, n) {
                return Tt(t, "previousSibling", n)
            }, siblings: function (t) {
                return $t((t.parentNode || {}).firstChild, t)
            }, children: function (t) {
                return $t(t.firstChild)
            }, contents: function (t) {
                return t.contentDocument || yt.merge([], t.childNodes)
            }
        }, function (t, e) {
            yt.fn[t] = function (n, r) {
                var i = yt.map(this, e, n);
                return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = yt.filter(r, i)), this.length > 1 && (Dt[t] || yt.uniqueSort(i), Nt.test(t) && i.reverse()), this.pushStack(i)
            }
        });
        var It = /[^\x20\t\r\n\f]+/g;
        yt.Callbacks = function (t) {
            t = "string" == typeof t ? l(t) : yt.extend({}, t);
            var e, n, r, i, o = [], a = [], s = -1, u = function () {
                for (i = t.once, r = e = !0; a.length; s = -1)for (n = a.shift(); ++s < o.length;)o[s].apply(n[0], n[1]) === !1 && t.stopOnFalse && (s = o.length, n = !1);
                t.memory || (n = !1), e = !1, i && (o = n ? [] : "")
            }, c = {
                add: function () {
                    return o && (n && !e && (s = o.length - 1, a.push(n)), function e(n) {
                        yt.each(n, function (n, r) {
                            yt.isFunction(r) ? t.unique && c.has(r) || o.push(r) : r && r.length && "string" !== yt.type(r) && e(r)
                        })
                    }(arguments), n && !e && u()), this
                }, remove: function () {
                    return yt.each(arguments, function (t, e) {
                        for (var n; (n = yt.inArray(e, o, n)) > -1;)o.splice(n, 1), n <= s && s--
                    }), this
                }, has: function (t) {
                    return t ? yt.inArray(t, o) > -1 : o.length > 0
                }, empty: function () {
                    return o && (o = []), this
                }, disable: function () {
                    return i = a = [], o = n = "", this
                }, disabled: function () {
                    return !o
                }, lock: function () {
                    return i = a = [], n || e || (o = n = ""), this
                }, locked: function () {
                    return !!i
                }, fireWith: function (t, n) {
                    return i || (n = n || [], n = [t, n.slice ? n.slice() : n], a.push(n), e || u()), this
                }, fire: function () {
                    return c.fireWith(this, arguments), this
                }, fired: function () {
                    return !!r
                }
            };
            return c
        }, yt.extend({
            Deferred: function (t) {
                var e = [["notify", "progress", yt.Callbacks("memory"), yt.Callbacks("memory"), 2], ["resolve", "done", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", yt.Callbacks("once memory"), yt.Callbacks("once memory"), 1, "rejected"]],
                    r = "pending", i = {
                        state: function () {
                            return r
                        }, always: function () {
                            return o.done(arguments).fail(arguments), this
                        }, catch: function (t) {
                            return i.then(null, t)
                        }, pipe: function () {
                            var t = arguments;
                            return yt.Deferred(function (n) {
                                yt.each(e, function (e, r) {
                                    var i = yt.isFunction(t[r[4]]) && t[r[4]];
                                    o[r[1]](function () {
                                        var t = i && i.apply(this, arguments);
                                        t && yt.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[r[0] + "With"](this, i ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        }, then: function (t, r, i) {
                            function o(t, e, r, i) {
                                return function () {
                                    var s = this, u = arguments, c = function () {
                                        var n, c;
                                        if (!(t < a)) {
                                            if (n = r.apply(s, u), n === e.promise())throw new TypeError("Thenable self-resolution");
                                            c = n && ("object" == typeof n || "function" == typeof n) && n.then, yt.isFunction(c) ? i ? c.call(n, o(a, e, f, i), o(a, e, p, i)) : (a++, c.call(n, o(a, e, f, i), o(a, e, p, i), o(a, e, f, e.notifyWith))) : (r !== f && (s = void 0, u = [n]), (i || e.resolveWith)(s, u))
                                        }
                                    }, l = i ? c : function () {
                                        try {
                                            c()
                                        } catch (n) {
                                            yt.Deferred.exceptionHook && yt.Deferred.exceptionHook(n, l.stackTrace), t + 1 >= a && (r !== p && (s = void 0, u = [n]), e.rejectWith(s, u))
                                        }
                                    };
                                    t ? l() : (yt.Deferred.getStackHook && (l.stackTrace = yt.Deferred.getStackHook()), n.setTimeout(l))
                                }
                            }

                            var a = 0;
                            return yt.Deferred(function (n) {
                                e[0][3].add(o(0, n, yt.isFunction(i) ? i : f, n.notifyWith)), e[1][3].add(o(0, n, yt.isFunction(t) ? t : f)), e[2][3].add(o(0, n, yt.isFunction(r) ? r : p))
                            }).promise()
                        }, promise: function (t) {
                            return null != t ? yt.extend(t, i) : i
                        }
                    }, o = {};
                return yt.each(e, function (t, n) {
                    var a = n[2], s = n[5];
                    i[n[1]] = a.add, s && a.add(function () {
                        r = s
                    }, e[3 - t][2].disable, e[0][2].lock), a.add(n[3].fire), o[n[0]] = function () {
                        return o[n[0] + "With"](this === o ? void 0 : this, arguments), this
                    }, o[n[0] + "With"] = a.fireWith
                }), i.promise(o), t && t.call(o, o), o
            }, when: function (t) {
                var e = arguments.length, n = e, r = Array(n), i = st.call(arguments), o = yt.Deferred(),
                    a = function (t) {
                        return function (n) {
                            r[t] = this, i[t] = arguments.length > 1 ? st.call(arguments) : n, --e || o.resolveWith(r, i)
                        }
                    };
                if (e <= 1 && (d(t, o.done(a(n)).resolve, o.reject), "pending" === o.state() || yt.isFunction(i[n] && i[n].then)))return o.then();
                for (; n--;)d(i[n], a(n), o.reject);
                return o.promise()
            }
        });
        var Rt = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        yt.Deferred.exceptionHook = function (t, e) {
            n.console && n.console.warn && t && Rt.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e)
        }, yt.readyException = function (t) {
            n.setTimeout(function () {
                throw t
            })
        };
        var Lt = yt.Deferred();
        yt.fn.ready = function (t) {
            return Lt.then(t).catch(function (t) {
                yt.readyException(t)
            }), this
        }, yt.extend({
            isReady: !1, readyWait: 1, holdReady: function (t) {
                t ? yt.readyWait++ : yt.ready(!0)
            }, ready: function (t) {
                (t === !0 ? --yt.readyWait : yt.isReady) || (yt.isReady = !0, t !== !0 && --yt.readyWait > 0 || Lt.resolveWith(ot, [yt]))
            }
        }), yt.ready.then = Lt.then, "complete" === ot.readyState || "loading" !== ot.readyState && !ot.documentElement.doScroll ? n.setTimeout(yt.ready) : (ot.addEventListener("DOMContentLoaded", h), n.addEventListener("load", h));
        var Pt = function (t, e, n, r, i, o, a) {
            var s = 0, u = t.length, c = null == n;
            if ("object" === yt.type(n)) {
                i = !0;
                for (s in n)Pt(t, e, s, n[s], !0, o, a)
            } else if (void 0 !== r && (i = !0, yt.isFunction(r) || (a = !0), c && (a ? (e.call(t, r), e = null) : (c = e, e = function (t, e, n) {
                    return c.call(yt(t), n)
                })), e))for (; s < u; s++)e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
            return i ? t : c ? e.call(t) : u ? e(t[0], n) : o
        }, Ft = function (t) {
            return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
        };
        v.uid = 1, v.prototype = {
            cache: function (t) {
                var e = t[this.expando];
                return e || (e = {}, Ft(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0
                }))), e
            }, set: function (t, e, n) {
                var r, i = this.cache(t);
                if ("string" == typeof e) i[yt.camelCase(e)] = n; else for (r in e)i[yt.camelCase(r)] = e[r];
                return i
            }, get: function (t, e) {
                return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][yt.camelCase(e)]
            }, access: function (t, e, n) {
                return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e)
            }, remove: function (t, e) {
                var n, r = t[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== e) {
                        yt.isArray(e) ? e = e.map(yt.camelCase) : (e = yt.camelCase(e), e = e in r ? [e] : e.match(It) || []), n = e.length;
                        for (; n--;)delete r[e[n]]
                    }
                    (void 0 === e || yt.isEmptyObject(r)) && (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                }
            }, hasData: function (t) {
                var e = t[this.expando];
                return void 0 !== e && !yt.isEmptyObject(e)
            }
        };
        var qt = new v, Mt = new v, Ht = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, Bt = /[A-Z]/g;
        yt.extend({
            hasData: function (t) {
                return Mt.hasData(t) || qt.hasData(t)
            }, data: function (t, e, n) {
                return Mt.access(t, e, n)
            }, removeData: function (t, e) {
                Mt.remove(t, e)
            }, _data: function (t, e, n) {
                return qt.access(t, e, n)
            }, _removeData: function (t, e) {
                qt.remove(t, e)
            }
        }), yt.fn.extend({
            data: function (t, e) {
                var n, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (i = Mt.get(o), 1 === o.nodeType && !qt.get(o, "hasDataAttrs"))) {
                        for (n = a.length; n--;)a[n] && (r = a[n].name, 0 === r.indexOf("data-") && (r = yt.camelCase(r.slice(5)), m(o, r, i[r])));
                        qt.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof t ? this.each(function () {
                    Mt.set(this, t)
                }) : Pt(this, function (e) {
                    var n;
                    if (o && void 0 === e) {
                        if (n = Mt.get(o, t), void 0 !== n)return n;
                        if (n = m(o, t), void 0 !== n)return n
                    } else this.each(function () {
                        Mt.set(this, t, e)
                    })
                }, null, e, arguments.length > 1, null, !0)
            }, removeData: function (t) {
                return this.each(function () {
                    Mt.remove(this, t)
                })
            }
        }), yt.extend({
            queue: function (t, e, n) {
                var r;
                if (t)return e = (e || "fx") + "queue", r = qt.get(t, e), n && (!r || yt.isArray(n) ? r = qt.access(t, e, yt.makeArray(n)) : r.push(n)), r || []
            }, dequeue: function (t, e) {
                e = e || "fx";
                var n = yt.queue(t, e), r = n.length, i = n.shift(), o = yt._queueHooks(t, e), a = function () {
                    yt.dequeue(t, e)
                };
                "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, a, o)), !r && o && o.empty.fire()
            }, _queueHooks: function (t, e) {
                var n = e + "queueHooks";
                return qt.get(t, n) || qt.access(t, n, {
                        empty: yt.Callbacks("once memory").add(function () {
                            qt.remove(t, [e + "queue", n])
                        })
                    })
            }
        }), yt.fn.extend({
            queue: function (t, e) {
                var n = 2;
                return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? yt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
                    var n = yt.queue(this, t, e);
                    yt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && yt.dequeue(this, t)
                })
            }, dequeue: function (t) {
                return this.each(function () {
                    yt.dequeue(this, t)
                })
            }, clearQueue: function (t) {
                return this.queue(t || "fx", [])
            }, promise: function (t, e) {
                var n, r = 1, i = yt.Deferred(), o = this, a = this.length, s = function () {
                    --r || i.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; a--;)n = qt.get(o[a], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
                return s(), i.promise(e)
            }
        });
        var Ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            Wt = new RegExp("^(?:([+-])=|)(" + Ut + ")([a-z%]*)$", "i"), zt = ["Top", "Right", "Bottom", "Left"],
            Vt = function (t, e) {
                return t = e || t, "none" === t.style.display || "" === t.style.display && yt.contains(t.ownerDocument, t) && "none" === yt.css(t, "display")
            }, Xt = function (t, e, n, r) {
                var i, o, a = {};
                for (o in e)a[o] = t.style[o], t.style[o] = e[o];
                i = n.apply(t, r || []);
                for (o in e)t.style[o] = a[o];
                return i
            }, Kt = {};
        yt.fn.extend({
            show: function () {
                return _(this, !0)
            }, hide: function () {
                return _(this)
            }, toggle: function (t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                    Vt(this) ? yt(this).show() : yt(this).hide()
                })
            }
        });
        var Jt = /^(?:checkbox|radio)$/i, Gt = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i, Zt = /^$|\/(?:java|ecma)script/i,
            Yt = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                thead: [1, "<table>", "</table>"],
                col: [2, "<table><colgroup>", "</colgroup></table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: [0, "", ""]
            };
        Yt.optgroup = Yt.option, Yt.tbody = Yt.tfoot = Yt.colgroup = Yt.caption = Yt.thead, Yt.th = Yt.td;
        var Qt = /<|&#?\w+;/;
        !function () {
            var t = ot.createDocumentFragment(), e = t.appendChild(ot.createElement("div")),
                n = ot.createElement("input");
            n.setAttribute("type", "radio"), n.setAttribute("checked", "checked"), n.setAttribute("name", "t"), e.appendChild(n), gt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", gt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
        }();
        var te = ot.documentElement, ee = /^key/, ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            re = /^([^.]*)(?:\.(.+)|)/;
        yt.event = {
            global: {}, add: function (t, e, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, v, g = qt.get(t);
                if (g)for (n.handler && (o = n, n = o.handler, i = o.selector), i && yt.find.matchesSelector(te, i), n.guid || (n.guid = yt.guid++), (u = g.events) || (u = g.events = {}), (a = g.handle) || (a = g.handle = function (e) {
                    return "undefined" != typeof yt && yt.event.triggered !== e.type ? yt.event.dispatch.apply(t, arguments) : void 0
                }), e = (e || "").match(It) || [""], c = e.length; c--;)s = re.exec(e[c]) || [], d = v = s[1], h = (s[2] || "").split(".").sort(), d && (f = yt.event.special[d] || {}, d = (i ? f.delegateType : f.bindType) || d, f = yt.event.special[d] || {}, l = yt.extend({
                    type: d,
                    origType: v,
                    data: r,
                    handler: n,
                    guid: n.guid,
                    selector: i,
                    needsContext: i && yt.expr.match.needsContext.test(i),
                    namespace: h.join(".")
                }, o), (p = u[d]) || (p = u[d] = [], p.delegateCount = 0, f.setup && f.setup.call(t, r, h, a) !== !1 || t.addEventListener && t.addEventListener(d, a)), f.add && (f.add.call(t, l), l.handler.guid || (l.handler.guid = n.guid)), i ? p.splice(p.delegateCount++, 0, l) : p.push(l), yt.event.global[d] = !0)
            }, remove: function (t, e, n, r, i) {
                var o, a, s, u, c, l, f, p, d, h, v, g = qt.hasData(t) && qt.get(t);
                if (g && (u = g.events)) {
                    for (e = (e || "").match(It) || [""], c = e.length; c--;)if (s = re.exec(e[c]) || [], d = v = s[1], h = (s[2] || "").split(".").sort(), d) {
                        for (f = yt.event.special[d] || {}, d = (r ? f.delegateType : f.bindType) || d, p = u[d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;)l = p[o], !i && v !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || r && r !== l.selector && ("**" !== r || !l.selector) || (p.splice(o, 1), l.selector && p.delegateCount--, f.remove && f.remove.call(t, l));
                        a && !p.length && (f.teardown && f.teardown.call(t, h, g.handle) !== !1 || yt.removeEvent(t, d, g.handle), delete u[d])
                    } else for (d in u)yt.event.remove(t, d + e[c], n, r, !0);
                    yt.isEmptyObject(u) && qt.remove(t, "handle events")
                }
            }, dispatch: function (t) {
                var e, n, r, i, o, a, s = yt.event.fix(t), u = new Array(arguments.length),
                    c = (qt.get(this, "events") || {})[s.type] || [], l = yt.event.special[s.type] || {};
                for (u[0] = s, e = 1; e < arguments.length; e++)u[e] = arguments[e];
                if (s.delegateTarget = this, !l.preDispatch || l.preDispatch.call(this, s) !== !1) {
                    for (a = yt.event.handlers.call(this, s, c), e = 0; (i = a[e++]) && !s.isPropagationStopped();)for (s.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();)s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, r = ((yt.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, u), void 0 !== r && (s.result = r) === !1 && (s.preventDefault(), s.stopPropagation()));
                    return l.postDispatch && l.postDispatch.call(this, s), s.result
                }
            }, handlers: function (t, e) {
                var n, r, i, o, a, s = [], u = e.delegateCount, c = t.target;
                if (u && c.nodeType && !("click" === t.type && t.button >= 1))for (; c !== this; c = c.parentNode || this)if (1 === c.nodeType && ("click" !== t.type || c.disabled !== !0)) {
                    for (o = [], a = {}, n = 0; n < u; n++)r = e[n], i = r.selector + " ", void 0 === a[i] && (a[i] = r.needsContext ? yt(i, this).index(c) > -1 : yt.find(i, this, null, [c]).length), a[i] && o.push(r);
                    o.length && s.push({elem: c, handlers: o})
                }
                return c = this, u < e.length && s.push({elem: c, handlers: e.slice(u)}), s
            }, addProp: function (t, e) {
                Object.defineProperty(yt.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: yt.isFunction(e) ? function () {
                        if (this.originalEvent)return e(this.originalEvent)
                    } : function () {
                        if (this.originalEvent)return this.originalEvent[t]
                    },
                    set: function (e) {
                        Object.defineProperty(this, t, {enumerable: !0, configurable: !0, writable: !0, value: e})
                    }
                })
            }, fix: function (t) {
                return t[yt.expando] ? t : new yt.Event(t)
            }, special: {
                load: {noBubble: !0}, focus: {
                    trigger: function () {
                        if (this !== k() && this.focus)return this.focus(), !1
                    }, delegateType: "focusin"
                }, blur: {
                    trigger: function () {
                        if (this === k() && this.blur)return this.blur(), !1
                    }, delegateType: "focusout"
                }, click: {
                    trigger: function () {
                        if ("checkbox" === this.type && this.click && yt.nodeName(this, "input"))return this.click(), !1
                    }, _default: function (t) {
                        return yt.nodeName(t.target, "a")
                    }
                }, beforeunload: {
                    postDispatch: function (t) {
                        void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                    }
                }
            }
        }, yt.removeEvent = function (t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n)
        }, yt.Event = function (t, e) {
            return this instanceof yt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? T : $, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && yt.extend(this, e), this.timeStamp = t && t.timeStamp || yt.now(), void(this[yt.expando] = !0)) : new yt.Event(t, e)
        }, yt.Event.prototype = {
            constructor: yt.Event,
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            isSimulated: !1,
            preventDefault: function () {
                var t = this.originalEvent;
                this.isDefaultPrevented = T, t && !this.isSimulated && t.preventDefault()
            },
            stopPropagation: function () {
                var t = this.originalEvent;
                this.isPropagationStopped = T, t && !this.isSimulated && t.stopPropagation()
            },
            stopImmediatePropagation: function () {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = T, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
            }
        }, yt.each({
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
            char: !0,
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
            which: function (t) {
                var e = t.button;
                return null == t.which && ee.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && ne.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which
            }
        }, yt.event.addProp), yt.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function (t, e) {
            yt.event.special[t] = {
                delegateType: e, bindType: e, handle: function (t) {
                    var n, r = this, i = t.relatedTarget, o = t.handleObj;
                    return i && (i === r || yt.contains(r, i)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
                }
            }
        }), yt.fn.extend({
            on: function (t, e, n, r) {
                return A(this, t, e, n, r)
            }, one: function (t, e, n, r) {
                return A(this, t, e, n, r, 1)
            }, off: function (t, e, n) {
                var r, i;
                if (t && t.preventDefault && t.handleObj)return r = t.handleObj, yt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
                if ("object" == typeof t) {
                    for (i in t)this.off(i, e, t[i]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e, e = void 0), n === !1 && (n = $), this.each(function () {
                    yt.event.remove(this, t, n, e)
                })
            }
        });
        var ie = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            oe = /<script|<style|<link/i, ae = /checked\s*(?:[^=]|=\s*.checked.)/i, se = /^true\/(.*)/,
            ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        yt.extend({
            htmlPrefilter: function (t) {
                return t.replace(ie, "<$1></$2>")
            }, clone: function (t, e, n) {
                var r, i, o, a, s = t.cloneNode(!0), u = yt.contains(t.ownerDocument, t);
                if (!(gt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || yt.isXMLDoc(t)))for (a = w(s), o = w(t), r = 0, i = o.length; r < i; r++)N(o[r], a[r]);
                if (e)if (n)for (o = o || w(t), a = a || w(s), r = 0, i = o.length; r < i; r++)j(o[r], a[r]); else j(t, s);
                return a = w(s, "script"), a.length > 0 && x(a, !u && w(t, "script")), s
            }, cleanData: function (t) {
                for (var e, n, r, i = yt.event.special, o = 0; void 0 !== (n = t[o]); o++)if (Ft(n)) {
                    if (e = n[qt.expando]) {
                        if (e.events)for (r in e.events)i[r] ? yt.event.remove(n, r) : yt.removeEvent(n, r, e.handle);
                        n[qt.expando] = void 0
                    }
                    n[Mt.expando] && (n[Mt.expando] = void 0)
                }
            }
        }), yt.fn.extend({
            detach: function (t) {
                return I(this, t, !0)
            }, remove: function (t) {
                return I(this, t)
            }, text: function (t) {
                return Pt(this, function (t) {
                    return void 0 === t ? yt.text(this) : this.empty().each(function () {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            }, append: function () {
                return D(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = E(this, t);
                        e.appendChild(t)
                    }
                })
            }, prepend: function () {
                return D(this, arguments, function (t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = E(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            }, before: function () {
                return D(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            }, after: function () {
                return D(this, arguments, function (t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            }, empty: function () {
                for (var t,
                         e = 0; null != (t = this[e]); e++)1 === t.nodeType && (yt.cleanData(w(t, !1)), t.textContent = "");
                return this
            }, clone: function (t, e) {
                return t = null != t && t, e = null == e ? t : e, this.map(function () {
                    return yt.clone(this, t, e)
                })
            }, html: function (t) {
                return Pt(this, function (t) {
                    var e = this[0] || {}, n = 0, r = this.length;
                    if (void 0 === t && 1 === e.nodeType)return e.innerHTML;
                    if ("string" == typeof t && !oe.test(t) && !Yt[(Gt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = yt.htmlPrefilter(t);
                        try {
                            for (; n < r; n++)e = this[n] || {}, 1 === e.nodeType && (yt.cleanData(w(e, !1)), e.innerHTML = t);
                            e = 0
                        } catch (t) {
                        }
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            }, replaceWith: function () {
                var t = [];
                return D(this, arguments, function (e) {
                    var n = this.parentNode;
                    yt.inArray(this, t) < 0 && (yt.cleanData(w(this)), n && n.replaceChild(e, this))
                }, t)
            }
        }), yt.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (t, e) {
            yt.fn[t] = function (t) {
                for (var n, r = [], i = yt(t), o = i.length - 1,
                         a = 0; a <= o; a++)n = a === o ? this : this.clone(!0), yt(i[a])[e](n), ct.apply(r, n.get());
                return this.pushStack(r)
            }
        });
        var ce = /^margin/, le = new RegExp("^(" + Ut + ")(?!px)[a-z%]+$", "i"), fe = function (t) {
            var e = t.ownerDocument.defaultView;
            return e && e.opener || (e = n), e.getComputedStyle(t)
        };
        !function () {
            function t() {
                if (s) {
                    s.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", s.innerHTML = "", te.appendChild(a);
                    var t = n.getComputedStyle(s);
                    e = "1%" !== t.top, o = "2px" === t.marginLeft, r = "4px" === t.width, s.style.marginRight = "50%", i = "4px" === t.marginRight, te.removeChild(a), s = null
                }
            }

            var e, r, i, o, a = ot.createElement("div"), s = ot.createElement("div");
            s.style && (s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", gt.clearCloneStyle = "content-box" === s.style.backgroundClip, a.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", a.appendChild(s), yt.extend(gt, {
                pixelPosition: function () {
                    return t(), e
                }, boxSizingReliable: function () {
                    return t(), r
                }, pixelMarginRight: function () {
                    return t(), i
                }, reliableMarginLeft: function () {
                    return t(), o
                }
            }))
        }();
        var pe = /^(none|table(?!-c[ea]).+)/, de = {position: "absolute", visibility: "hidden", display: "block"},
            he = {letterSpacing: "0", fontWeight: "400"}, ve = ["Webkit", "Moz", "ms"],
            ge = ot.createElement("div").style;
        yt.extend({
            cssHooks: {
                opacity: {
                    get: function (t, e) {
                        if (e) {
                            var n = R(t, "opacity");
                            return "" === n ? "1" : n
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
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {float: "cssFloat"},
            style: function (t, e, n, r) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var i, o, a, s = yt.camelCase(e), u = t.style;
                    return e = yt.cssProps[s] || (yt.cssProps[s] = P(s) || s), a = yt.cssHooks[e] || yt.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : u[e] : (o = typeof n, "string" === o && (i = Wt.exec(n)) && i[1] && (n = y(t, e, i), o = "number"), null != n && n === n && ("number" === o && (n += i && i[3] || (yt.cssNumber[s] ? "" : "px")), gt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (u[e] = n)), void 0)
                }
            },
            css: function (t, e, n, r) {
                var i, o, a, s = yt.camelCase(e);
                return e = yt.cssProps[s] || (yt.cssProps[s] = P(s) || s), a = yt.cssHooks[e] || yt.cssHooks[s], a && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = R(t, e, r)), "normal" === i && e in he && (i = he[e]), "" === n || n ? (o = parseFloat(i), n === !0 || isFinite(o) ? o || 0 : i) : i
            }
        }), yt.each(["height", "width"], function (t, e) {
            yt.cssHooks[e] = {
                get: function (t, n, r) {
                    if (n)return !pe.test(yt.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? M(t, e, r) : Xt(t, de, function () {
                        return M(t, e, r)
                    })
                }, set: function (t, n, r) {
                    var i, o = r && fe(t), a = r && q(t, e, r, "border-box" === yt.css(t, "boxSizing", !1, o), o);
                    return a && (i = Wt.exec(n)) && "px" !== (i[3] || "px") && (t.style[e] = n, n = yt.css(t, e)), F(t, n, a)
                }
            }
        }), yt.cssHooks.marginLeft = L(gt.reliableMarginLeft, function (t, e) {
            if (e)return (parseFloat(R(t, "marginLeft")) || t.getBoundingClientRect().left - Xt(t, {marginLeft: 0}, function () {
                    return t.getBoundingClientRect().left
                })) + "px"
        }), yt.each({margin: "", padding: "", border: "Width"}, function (t, e) {
            yt.cssHooks[t + e] = {
                expand: function (n) {
                    for (var r = 0, i = {},
                             o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++)i[t + zt[r] + e] = o[r] || o[r - 2] || o[0];
                    return i
                }
            }, ce.test(t) || (yt.cssHooks[t + e].set = F)
        }), yt.fn.extend({
            css: function (t, e) {
                return Pt(this, function (t, e, n) {
                    var r, i, o = {}, a = 0;
                    if (yt.isArray(e)) {
                        for (r = fe(t), i = e.length; a < i; a++)o[e[a]] = yt.css(t, e[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? yt.style(t, e, n) : yt.css(t, e)
                }, t, e, arguments.length > 1)
            }
        }), yt.Tween = H, H.prototype = {
            constructor: H, init: function (t, e, n, r, i, o) {
                this.elem = t, this.prop = n, this.easing = i || yt.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = o || (yt.cssNumber[n] ? "" : "px")
            }, cur: function () {
                var t = H.propHooks[this.prop];
                return t && t.get ? t.get(this) : H.propHooks._default.get(this)
            }, run: function (t) {
                var e, n = H.propHooks[this.prop];
                return this.options.duration ? this.pos = e = yt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : H.propHooks._default.set(this), this
            }
        }, H.prototype.init.prototype = H.prototype, H.propHooks = {
            _default: {
                get: function (t) {
                    var e;
                    return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = yt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0)
                }, set: function (t) {
                    yt.fx.step[t.prop] ? yt.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[yt.cssProps[t.prop]] && !yt.cssHooks[t.prop] ? t.elem[t.prop] = t.now : yt.style(t.elem, t.prop, t.now + t.unit)
                }
            }
        }, H.propHooks.scrollTop = H.propHooks.scrollLeft = {
            set: function (t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, yt.easing = {
            linear: function (t) {
                return t
            }, swing: function (t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }, _default: "swing"
        }, yt.fx = H.prototype.init, yt.fx.step = {};
        var me, ye, be = /^(?:toggle|show|hide)$/, _e = /queueHooks$/;
        yt.Animation = yt.extend(K, {
            tweeners: {
                "*": [function (t, e) {
                    var n = this.createTween(t, e);
                    return y(n.elem, t, Wt.exec(e), n), n
                }]
            }, tweener: function (t, e) {
                yt.isFunction(t) ? (e = t, t = ["*"]) : t = t.match(It);
                for (var n, r = 0,
                         i = t.length; r < i; r++)n = t[r], K.tweeners[n] = K.tweeners[n] || [], K.tweeners[n].unshift(e)
            }, prefilters: [V], prefilter: function (t, e) {
                e ? K.prefilters.unshift(t) : K.prefilters.push(t)
            }
        }), yt.speed = function (t, e, n) {
            var r = t && "object" == typeof t ? yt.extend({}, t) : {
                complete: n || !n && e || yt.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !yt.isFunction(e) && e
            };
            return yt.fx.off || ot.hidden ? r.duration = 0 : "number" != typeof r.duration && (r.duration in yt.fx.speeds ? r.duration = yt.fx.speeds[r.duration] : r.duration = yt.fx.speeds._default), null != r.queue && r.queue !== !0 || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
                yt.isFunction(r.old) && r.old.call(this), r.queue && yt.dequeue(this, r.queue)
            }, r
        }, yt.fn.extend({
            fadeTo: function (t, e, n, r) {
                return this.filter(Vt).css("opacity", 0).show().end().animate({opacity: e}, t, n, r)
            }, animate: function (t, e, n, r) {
                var i = yt.isEmptyObject(t), o = yt.speed(e, n, r), a = function () {
                    var e = K(this, yt.extend({}, t), o);
                    (i || qt.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
            }, stop: function (t, e, n) {
                var r = function (t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
                    var e = !0, i = null != t && t + "queueHooks", o = yt.timers, a = qt.get(this);
                    if (i) a[i] && a[i].stop && r(a[i]); else for (i in a)a[i] && a[i].stop && _e.test(i) && r(a[i]);
                    for (i = o.length; i--;)o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                    !e && n || yt.dequeue(this, t)
                })
            }, finish: function (t) {
                return t !== !1 && (t = t || "fx"), this.each(function () {
                    var e, n = qt.get(this), r = n[t + "queue"], i = n[t + "queueHooks"], o = yt.timers,
                        a = r ? r.length : 0;
                    for (n.finish = !0, yt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = o.length; e--;)o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                    for (e = 0; e < a; e++)r[e] && r[e].finish && r[e].finish.call(this);
                    delete n.finish
                })
            }
        }), yt.each(["toggle", "show", "hide"], function (t, e) {
            var n = yt.fn[e];
            yt.fn[e] = function (t, r, i) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(W(e, !0), t, r, i)
            }
        }), yt.each({
            slideDown: W("show"),
            slideUp: W("hide"),
            slideToggle: W("toggle"),
            fadeIn: {opacity: "show"},
            fadeOut: {opacity: "hide"},
            fadeToggle: {opacity: "toggle"}
        }, function (t, e) {
            yt.fn[t] = function (t, n, r) {
                return this.animate(e, t, n, r)
            }
        }), yt.timers = [], yt.fx.tick = function () {
            var t, e = 0, n = yt.timers;
            for (me = yt.now(); e < n.length; e++)t = n[e], t() || n[e] !== t || n.splice(e--, 1);
            n.length || yt.fx.stop(), me = void 0
        }, yt.fx.timer = function (t) {
            yt.timers.push(t), t() ? yt.fx.start() : yt.timers.pop()
        }, yt.fx.interval = 13, yt.fx.start = function () {
            ye || (ye = n.requestAnimationFrame ? n.requestAnimationFrame(B) : n.setInterval(yt.fx.tick, yt.fx.interval))
        }, yt.fx.stop = function () {
            n.cancelAnimationFrame ? n.cancelAnimationFrame(ye) : n.clearInterval(ye), ye = null
        }, yt.fx.speeds = {slow: 600, fast: 200, _default: 400}, yt.fn.delay = function (t, e) {
            return t = yt.fx ? yt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, r) {
                var i = n.setTimeout(e, t);
                r.stop = function () {
                    n.clearTimeout(i)
                }
            })
        }, function () {
            var t = ot.createElement("input"), e = ot.createElement("select"),
                n = e.appendChild(ot.createElement("option"));
            t.type = "checkbox", gt.checkOn = "" !== t.value, gt.optSelected = n.selected, t = ot.createElement("input"), t.value = "t", t.type = "radio", gt.radioValue = "t" === t.value
        }();
        var we, xe = yt.expr.attrHandle;
        yt.fn.extend({
            attr: function (t, e) {
                return Pt(this, yt.attr, t, e, arguments.length > 1)
            }, removeAttr: function (t) {
                return this.each(function () {
                    yt.removeAttr(this, t)
                })
            }
        }), yt.extend({
            attr: function (t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)return "undefined" == typeof t.getAttribute ? yt.prop(t, e, n) : (1 === o && yt.isXMLDoc(t) || (i = yt.attrHooks[e.toLowerCase()] || (yt.expr.match.bool.test(e) ? we : void 0)), void 0 !== n ? null === n ? void yt.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : (r = yt.find.attr(t, e), null == r ? void 0 : r))
            }, attrHooks: {
                type: {
                    set: function (t, e) {
                        if (!gt.radioValue && "radio" === e && yt.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e), n && (t.value = n), e
                        }
                    }
                }
            }, removeAttr: function (t, e) {
                var n, r = 0, i = e && e.match(It);
                if (i && 1 === t.nodeType)for (; n = i[r++];)t.removeAttribute(n)
            }
        }), we = {
            set: function (t, e, n) {
                return e === !1 ? yt.removeAttr(t, n) : t.setAttribute(n, n), n
            }
        }, yt.each(yt.expr.match.bool.source.match(/\w+/g), function (t, e) {
            var n = xe[e] || yt.find.attr;
            xe[e] = function (t, e, r) {
                var i, o, a = e.toLowerCase();
                return r || (o = xe[a], xe[a] = i, i = null != n(t, e, r) ? a : null, xe[a] = o), i
            }
        });
        var Ce = /^(?:input|select|textarea|button)$/i, Te = /^(?:a|area)$/i;
        yt.fn.extend({
            prop: function (t, e) {
                return Pt(this, yt.prop, t, e, arguments.length > 1)
            }, removeProp: function (t) {
                return this.each(function () {
                    delete this[yt.propFix[t] || t]
                })
            }
        }), yt.extend({
            prop: function (t, e, n) {
                var r, i, o = t.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)return 1 === o && yt.isXMLDoc(t) || (e = yt.propFix[e] || e, i = yt.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
            }, propHooks: {
                tabIndex: {
                    get: function (t) {
                        var e = yt.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : Ce.test(t.nodeName) || Te.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }, propFix: {for: "htmlFor", class: "className"}
        }), gt.optSelected || (yt.propHooks.selected = {
            get: function (t) {
                var e = t.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex, null
            }, set: function (t) {
                var e = t.parentNode;
                e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
            }
        }), yt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
            yt.propFix[this.toLowerCase()] = this
        }), yt.fn.extend({
            addClass: function (t) {
                var e, n, r, i, o, a, s, u = 0;
                if (yt.isFunction(t))return this.each(function (e) {
                    yt(this).addClass(t.call(this, e, G(this)))
                });
                if ("string" == typeof t && t)for (e = t.match(It) || []; n = this[u++];)if (i = G(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                    for (a = 0; o = e[a++];)r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                    s = J(r), i !== s && n.setAttribute("class", s)
                }
                return this
            }, removeClass: function (t) {
                var e, n, r, i, o, a, s, u = 0;
                if (yt.isFunction(t))return this.each(function (e) {
                    yt(this).removeClass(t.call(this, e, G(this)))
                });
                if (!arguments.length)return this.attr("class", "");
                if ("string" == typeof t && t)for (e = t.match(It) || []; n = this[u++];)if (i = G(n), r = 1 === n.nodeType && " " + J(i) + " ") {
                    for (a = 0; o = e[a++];)for (; r.indexOf(" " + o + " ") > -1;)r = r.replace(" " + o + " ", " ");
                    s = J(r), i !== s && n.setAttribute("class", s)
                }
                return this
            }, toggleClass: function (t, e) {
                var n = typeof t;
                return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : yt.isFunction(t) ? this.each(function (n) {
                    yt(this).toggleClass(t.call(this, n, G(this), e), e)
                }) : this.each(function () {
                    var e, r, i, o;
                    if ("string" === n)for (r = 0, i = yt(this), o = t.match(It) || []; e = o[r++];)i.hasClass(e) ? i.removeClass(e) : i.addClass(e); else void 0 !== t && "boolean" !== n || (e = G(this), e && qt.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || t === !1 ? "" : qt.get(this, "__className__") || ""))
                })
            }, hasClass: function (t) {
                var e, n, r = 0;
                for (e = " " + t + " "; n = this[r++];)if (1 === n.nodeType && (" " + J(G(n)) + " ").indexOf(e) > -1)return !0;
                return !1
            }
        });
        var $e = /\r/g;
        yt.fn.extend({
            val: function (t) {
                var e, n, r, i = this[0];
                {
                    if (arguments.length)return r = yt.isFunction(t), this.each(function (n) {
                        var i;
                        1 === this.nodeType && (i = r ? t.call(this, n, yt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : yt.isArray(i) && (i = yt.map(i, function (t) {
                                return null == t ? "" : t + ""
                            })), e = yt.valHooks[this.type] || yt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
                    });
                    if (i)return e = yt.valHooks[i.type] || yt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace($e, "") : null == n ? "" : n)
                }
            }
        }), yt.extend({
            valHooks: {
                option: {
                    get: function (t) {
                        var e = yt.find.attr(t, "value");
                        return null != e ? e : J(yt.text(t))
                    }
                }, select: {
                    get: function (t) {
                        var e, n, r, i = t.options, o = t.selectedIndex, a = "select-one" === t.type, s = a ? null : [],
                            u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)if (n = i[r], (n.selected || r === o) && !n.disabled && (!n.parentNode.disabled || !yt.nodeName(n.parentNode, "optgroup"))) {
                            if (e = yt(n).val(), a)return e;
                            s.push(e)
                        }
                        return s
                    }, set: function (t, e) {
                        for (var n, r, i = t.options, o = yt.makeArray(e),
                                 a = i.length; a--;)r = i[a], (r.selected = yt.inArray(yt.valHooks.option.get(r), o) > -1) && (n = !0);
                        return n || (t.selectedIndex = -1), o
                    }
                }
            }
        }), yt.each(["radio", "checkbox"], function () {
            yt.valHooks[this] = {
                set: function (t, e) {
                    if (yt.isArray(e))return t.checked = yt.inArray(yt(t).val(), e) > -1
                }
            }, gt.checkOn || (yt.valHooks[this].get = function (t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var ke = /^(?:focusinfocus|focusoutblur)$/;
        yt.extend(yt.event, {
            trigger: function (t, e, r, i) {
                var o, a, s, u, c, l, f, p = [r || ot], d = dt.call(t, "type") ? t.type : t,
                    h = dt.call(t, "namespace") ? t.namespace.split(".") : [];
                if (a = s = r = r || ot, 3 !== r.nodeType && 8 !== r.nodeType && !ke.test(d + yt.event.triggered) && (d.indexOf(".") > -1 && (h = d.split("."), d = h.shift(), h.sort()), c = d.indexOf(":") < 0 && "on" + d, t = t[yt.expando] ? t : new yt.Event(d, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = h.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : yt.makeArray(e, [t]), f = yt.event.special[d] || {}, i || !f.trigger || f.trigger.apply(r, e) !== !1)) {
                    if (!i && !f.noBubble && !yt.isWindow(r)) {
                        for (u = f.delegateType || d, ke.test(u + d) || (a = a.parentNode); a; a = a.parentNode)p.push(a), s = a;
                        s === (r.ownerDocument || ot) && p.push(s.defaultView || s.parentWindow || n)
                    }
                    for (o = 0; (a = p[o++]) && !t.isPropagationStopped();)t.type = o > 1 ? u : f.bindType || d, l = (qt.get(a, "events") || {})[t.type] && qt.get(a, "handle"), l && l.apply(a, e), l = c && a[c], l && l.apply && Ft(a) && (t.result = l.apply(a, e), t.result === !1 && t.preventDefault());
                    return t.type = d, i || t.isDefaultPrevented() || f._default && f._default.apply(p.pop(), e) !== !1 || !Ft(r) || c && yt.isFunction(r[d]) && !yt.isWindow(r) && (s = r[c], s && (r[c] = null), yt.event.triggered = d, r[d](), yt.event.triggered = void 0, s && (r[c] = s)), t.result
                }
            }, simulate: function (t, e, n) {
                var r = yt.extend(new yt.Event, n, {type: t, isSimulated: !0});
                yt.event.trigger(r, null, e)
            }
        }), yt.fn.extend({
            trigger: function (t, e) {
                return this.each(function () {
                    yt.event.trigger(t, e, this)
                })
            }, triggerHandler: function (t, e) {
                var n = this[0];
                if (n)return yt.event.trigger(t, e, n, !0)
            }
        }), yt.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
            yt.fn[e] = function (t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }), yt.fn.extend({
            hover: function (t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            }
        }), gt.focusin = "onfocusin" in n, gt.focusin || yt.each({focus: "focusin", blur: "focusout"}, function (t, e) {
            var n = function (t) {
                yt.event.simulate(e, t.target, yt.event.fix(t))
            };
            yt.event.special[e] = {
                setup: function () {
                    var r = this.ownerDocument || this, i = qt.access(r, e);
                    i || r.addEventListener(t, n, !0), qt.access(r, e, (i || 0) + 1)
                }, teardown: function () {
                    var r = this.ownerDocument || this, i = qt.access(r, e) - 1;
                    i ? qt.access(r, e, i) : (r.removeEventListener(t, n, !0), qt.remove(r, e))
                }
            }
        });
        var Ae = n.location, Ee = yt.now(), Se = /\?/;
        yt.parseXML = function (t) {
            var e;
            if (!t || "string" != typeof t)return null;
            try {
                e = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (t) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || yt.error("Invalid XML: " + t), e
        };
        var Oe = /\[\]$/, je = /\r?\n/g, Ne = /^(?:submit|button|image|reset|file)$/i,
            De = /^(?:input|select|textarea|keygen)/i;
        yt.param = function (t, e) {
            var n, r = [], i = function (t, e) {
                var n = yt.isFunction(e) ? e() : e;
                r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (yt.isArray(t) || t.jquery && !yt.isPlainObject(t)) yt.each(t, function () {
                i(this.name, this.value)
            }); else for (n in t)Z(n, t[n], e, i);
            return r.join("&")
        }, yt.fn.extend({
            serialize: function () {
                return yt.param(this.serializeArray())
            }, serializeArray: function () {
                return this.map(function () {
                    var t = yt.prop(this, "elements");
                    return t ? yt.makeArray(t) : this
                }).filter(function () {
                    var t = this.type;
                    return this.name && !yt(this).is(":disabled") && De.test(this.nodeName) && !Ne.test(t) && (this.checked || !Jt.test(t))
                }).map(function (t, e) {
                    var n = yt(this).val();
                    return null == n ? null : yt.isArray(n) ? yt.map(n, function (t) {
                        return {name: e.name, value: t.replace(je, "\r\n")}
                    }) : {name: e.name, value: n.replace(je, "\r\n")}
                }).get()
            }
        });
        var Ie = /%20/g, Re = /#.*$/, Le = /([?&])_=[^&]*/, Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            Fe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, qe = /^(?:GET|HEAD)$/, Me = /^\/\//,
            He = {}, Be = {}, Ue = "*/".concat("*"), We = ot.createElement("a");
        We.href = Ae.href, yt.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Ae.href,
                type: "GET",
                isLocal: Fe.test(Ae.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Ue,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/},
                responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
                converters: {"* text": String, "text html": !0, "text json": JSON.parse, "text xml": yt.parseXML},
                flatOptions: {url: !0, context: !0}
            },
            ajaxSetup: function (t, e) {
                return e ? tt(tt(t, yt.ajaxSettings), e) : tt(yt.ajaxSettings, t)
            },
            ajaxPrefilter: Y(He),
            ajaxTransport: Y(Be),
            ajax: function (t, e) {
                function r(t, e, r, s) {
                    var c, p, d, _, w, x = e;
                    l || (l = !0, u && n.clearTimeout(u), i = void 0, a = s || "", C.readyState = t > 0 ? 4 : 0, c = t >= 200 && t < 300 || 304 === t, r && (_ = et(h, C, r)), _ = nt(h, _, C, c), c ? (h.ifModified && (w = C.getResponseHeader("Last-Modified"), w && (yt.lastModified[o] = w), w = C.getResponseHeader("etag"), w && (yt.etag[o] = w)), 204 === t || "HEAD" === h.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = _.state, p = _.data, d = _.error, c = !d)) : (d = x, !t && x || (x = "error", t < 0 && (t = 0))), C.status = t, C.statusText = (e || x) + "", c ? m.resolveWith(v, [p, x, C]) : m.rejectWith(v, [C, x, d]), C.statusCode(b), b = void 0, f && g.trigger(c ? "ajaxSuccess" : "ajaxError", [C, h, c ? p : d]), y.fireWith(v, [C, x]), f && (g.trigger("ajaxComplete", [C, h]), --yt.active || yt.event.trigger("ajaxStop")))
                }

                "object" == typeof t && (e = t, t = void 0), e = e || {};
                var i, o, a, s, u, c, l, f, p, d, h = yt.ajaxSetup({}, e), v = h.context || h,
                    g = h.context && (v.nodeType || v.jquery) ? yt(v) : yt.event, m = yt.Deferred(),
                    y = yt.Callbacks("once memory"), b = h.statusCode || {}, _ = {}, w = {}, x = "canceled", C = {
                        readyState: 0, getResponseHeader: function (t) {
                            var e;
                            if (l) {
                                if (!s)for (s = {}; e = Pe.exec(a);)s[e[1].toLowerCase()] = e[2];
                                e = s[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        }, getAllResponseHeaders: function () {
                            return l ? a : null
                        }, setRequestHeader: function (t, e) {
                            return null == l && (t = w[t.toLowerCase()] = w[t.toLowerCase()] || t, _[t] = e), this
                        }, overrideMimeType: function (t) {
                            return null == l && (h.mimeType = t), this
                        }, statusCode: function (t) {
                            var e;
                            if (t)if (l) C.always(t[C.status]); else for (e in t)b[e] = [b[e], t[e]];
                            return this
                        }, abort: function (t) {
                            var e = t || x;
                            return i && i.abort(e), r(0, e), this
                        }
                    };
                if (m.promise(C), h.url = ((t || h.url || Ae.href) + "").replace(Me, Ae.protocol + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = (h.dataType || "*").toLowerCase().match(It) || [""], null == h.crossDomain) {
                    c = ot.createElement("a");
                    try {
                        c.href = h.url, c.href = c.href, h.crossDomain = We.protocol + "//" + We.host != c.protocol + "//" + c.host
                    } catch (t) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = yt.param(h.data, h.traditional)), Q(He, h, e, C), l)return C;
                f = yt.event && h.global, f && 0 === yt.active++ && yt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !qe.test(h.type), o = h.url.replace(Re, ""), h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(Ie, "+")) : (d = h.url.slice(o.length), h.data && (o += (Se.test(o) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (o = o.replace(Le, "$1"), d = (Se.test(o) ? "&" : "?") + "_=" + Ee++ + d), h.url = o + d), h.ifModified && (yt.lastModified[o] && C.setRequestHeader("If-Modified-Since", yt.lastModified[o]), yt.etag[o] && C.setRequestHeader("If-None-Match", yt.etag[o])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && C.setRequestHeader("Content-Type", h.contentType), C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ue + "; q=0.01" : "") : h.accepts["*"]);
                for (p in h.headers)C.setRequestHeader(p, h.headers[p]);
                if (h.beforeSend && (h.beforeSend.call(v, C, h) === !1 || l))return C.abort();
                if (x = "abort", y.add(h.complete), C.done(h.success), C.fail(h.error), i = Q(Be, h, e, C)) {
                    if (C.readyState = 1, f && g.trigger("ajaxSend", [C, h]), l)return C;
                    h.async && h.timeout > 0 && (u = n.setTimeout(function () {
                        C.abort("timeout")
                    }, h.timeout));
                    try {
                        l = !1, i.send(_, r)
                    } catch (t) {
                        if (l)throw t;
                        r(-1, t)
                    }
                } else r(-1, "No Transport");
                return C
            },
            getJSON: function (t, e, n) {
                return yt.get(t, e, n, "json")
            },
            getScript: function (t, e) {
                return yt.get(t, void 0, e, "script")
            }
        }), yt.each(["get", "post"], function (t, e) {
            yt[e] = function (t, n, r, i) {
                return yt.isFunction(n) && (i = i || r, r = n, n = void 0), yt.ajax(yt.extend({
                    url: t,
                    type: e,
                    dataType: i,
                    data: n,
                    success: r
                }, yt.isPlainObject(t) && t))
            }
        }), yt._evalUrl = function (t) {
            return yt.ajax({url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0})
        }, yt.fn.extend({
            wrapAll: function (t) {
                var e;
                return this[0] && (yt.isFunction(t) && (t = t.call(this[0])), e = yt(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstElementChild;)t = t.firstElementChild;
                    return t
                }).append(this)), this
            }, wrapInner: function (t) {
                return yt.isFunction(t) ? this.each(function (e) {
                    yt(this).wrapInner(t.call(this, e))
                }) : this.each(function () {
                    var e = yt(this), n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            }, wrap: function (t) {
                var e = yt.isFunction(t);
                return this.each(function (n) {
                    yt(this).wrapAll(e ? t.call(this, n) : t)
                })
            }, unwrap: function (t) {
                return this.parent(t).not("body").each(function () {
                    yt(this).replaceWith(this.childNodes)
                }), this
            }
        }), yt.expr.pseudos.hidden = function (t) {
            return !yt.expr.pseudos.visible(t)
        }, yt.expr.pseudos.visible = function (t) {
            return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length)
        }, yt.ajaxSettings.xhr = function () {
            try {
                return new n.XMLHttpRequest
            } catch (t) {
            }
        };
        var ze = {0: 200, 1223: 204}, Ve = yt.ajaxSettings.xhr();
        gt.cors = !!Ve && "withCredentials" in Ve, gt.ajax = Ve = !!Ve, yt.ajaxTransport(function (t) {
            var e, r;
            if (gt.cors || Ve && !t.crossDomain)return {
                send: function (i, o) {
                    var a, s = t.xhr();
                    if (s.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)for (a in t.xhrFields)s[a] = t.xhrFields[a];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType), t.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                    for (a in i)s.setRequestHeader(a, i[a]);
                    e = function (t) {
                        return function () {
                            e && (e = r = s.onload = s.onerror = s.onabort = s.onreadystatechange = null, "abort" === t ? s.abort() : "error" === t ? "number" != typeof s.status ? o(0, "error") : o(s.status, s.statusText) : o(ze[s.status] || s.status, s.statusText, "text" !== (s.responseType || "text") || "string" != typeof s.responseText ? {binary: s.response} : {text: s.responseText}, s.getAllResponseHeaders()))
                        }
                    }, s.onload = e(), r = s.onerror = e("error"), void 0 !== s.onabort ? s.onabort = r : s.onreadystatechange = function () {
                        4 === s.readyState && n.setTimeout(function () {
                            e && r()
                        })
                    }, e = e("abort");
                    try {
                        s.send(t.hasContent && t.data || null)
                    } catch (t) {
                        if (e)throw t
                    }
                }, abort: function () {
                    e && e()
                }
            }
        }), yt.ajaxPrefilter(function (t) {
            t.crossDomain && (t.contents.script = !1)
        }), yt.ajaxSetup({
            accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
            contents: {script: /\b(?:java|ecma)script\b/},
            converters: {
                "text script": function (t) {
                    return yt.globalEval(t), t
                }
            }
        }), yt.ajaxPrefilter("script", function (t) {
            void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET")
        }), yt.ajaxTransport("script", function (t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function (r, i) {
                        e = yt("<script>").prop({
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function (t) {
                            e.remove(), n = null, t && i("error" === t.type ? 404 : 200, t.type)
                        }), ot.head.appendChild(e[0])
                    }, abort: function () {
                        n && n()
                    }
                }
            }
        });
        var Xe = [], Ke = /(=)\?(?=&|$)|\?\?/;
        yt.ajaxSetup({
            jsonp: "callback", jsonpCallback: function () {
                var t = Xe.pop() || yt.expando + "_" + Ee++;
                return this[t] = !0, t
            }
        }), yt.ajaxPrefilter("json jsonp", function (t, e, r) {
            var i, o, a,
                s = t.jsonp !== !1 && (Ke.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ke.test(t.data) && "data");
            if (s || "jsonp" === t.dataTypes[0])return i = t.jsonpCallback = yt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(Ke, "$1" + i) : t.jsonp !== !1 && (t.url += (Se.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
                return a || yt.error(i + " was not called"), a[0]
            }, t.dataTypes[0] = "json", o = n[i], n[i] = function () {
                a = arguments
            }, r.always(function () {
                void 0 === o ? yt(n).removeProp(i) : n[i] = o, t[i] && (t.jsonpCallback = e.jsonpCallback, Xe.push(i)), a && yt.isFunction(o) && o(a[0]), a = o = void 0
            }), "script"
        }), gt.createHTMLDocument = function () {
            var t = ot.implementation.createHTMLDocument("").body;
            return t.innerHTML = "<form></form><form></form>", 2 === t.childNodes.length
        }(), yt.parseHTML = function (t, e, n) {
            if ("string" != typeof t)return [];
            "boolean" == typeof e && (n = e, e = !1);
            var r, i, o;
            return e || (gt.createHTMLDocument ? (e = ot.implementation.createHTMLDocument(""), r = e.createElement("base"), r.href = ot.location.href, e.head.appendChild(r)) : e = ot), i = At.exec(t), o = !n && [], i ? [e.createElement(i[1])] : (i = C([t], e, o), o && o.length && yt(o).remove(), yt.merge([], i.childNodes))
        }, yt.fn.load = function (t, e, n) {
            var r, i, o, a = this, s = t.indexOf(" ");
            return s > -1 && (r = J(t.slice(s)), t = t.slice(0, s)), yt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (i = "POST"), a.length > 0 && yt.ajax({
                url: t,
                type: i || "GET",
                dataType: "html",
                data: e
            }).done(function (t) {
                o = arguments, a.html(r ? yt("<div>").append(yt.parseHTML(t)).find(r) : t)
            }).always(n && function (t, e) {
                    a.each(function () {
                        n.apply(this, o || [t.responseText, e, t])
                    })
                }), this
        }, yt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
            yt.fn[e] = function (t) {
                return this.on(e, t)
            }
        }), yt.expr.pseudos.animated = function (t) {
            return yt.grep(yt.timers, function (e) {
                return t === e.elem
            }).length
        }, yt.offset = {
            setOffset: function (t, e, n) {
                var r, i, o, a, s, u, c, l = yt.css(t, "position"), f = yt(t), p = {};
                "static" === l && (t.style.position = "relative"), s = f.offset(), o = yt.css(t, "top"), u = yt.css(t, "left"), c = ("absolute" === l || "fixed" === l) && (o + u).indexOf("auto") > -1, c ? (r = f.position(), a = r.top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(u) || 0), yt.isFunction(e) && (e = e.call(t, n, yt.extend({}, s))), null != e.top && (p.top = e.top - s.top + a), null != e.left && (p.left = e.left - s.left + i), "using" in e ? e.using.call(t, p) : f.css(p)
            }
        }, yt.fn.extend({
            offset: function (t) {
                if (arguments.length)return void 0 === t ? this : this.each(function (e) {
                    yt.offset.setOffset(this, t, e)
                });
                var e, n, r, i, o = this[0];
                if (o)return o.getClientRects().length ? (r = o.getBoundingClientRect(), r.width || r.height ? (i = o.ownerDocument, n = rt(i), e = i.documentElement, {
                    top: r.top + n.pageYOffset - e.clientTop,
                    left: r.left + n.pageXOffset - e.clientLeft
                }) : r) : {top: 0, left: 0}
            }, position: function () {
                if (this[0]) {
                    var t, e, n = this[0], r = {top: 0, left: 0};
                    return "fixed" === yt.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), yt.nodeName(t[0], "html") || (r = t.offset()), r = {
                        top: r.top + yt.css(t[0], "borderTopWidth", !0),
                        left: r.left + yt.css(t[0], "borderLeftWidth", !0)
                    }), {
                        top: e.top - r.top - yt.css(n, "marginTop", !0),
                        left: e.left - r.left - yt.css(n, "marginLeft", !0)
                    }
                }
            }, offsetParent: function () {
                return this.map(function () {
                    for (var t = this.offsetParent; t && "static" === yt.css(t, "position");)t = t.offsetParent;
                    return t || te
                })
            }
        }), yt.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (t, e) {
            var n = "pageYOffset" === e;
            yt.fn[t] = function (r) {
                return Pt(this, function (t, r, i) {
                    var o = rt(t);
                    return void 0 === i ? o ? o[e] : t[r] : void(o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : t[r] = i)
                }, t, r, arguments.length)
            }
        }), yt.each(["top", "left"], function (t, e) {
            yt.cssHooks[e] = L(gt.pixelPosition, function (t, n) {
                if (n)return n = R(t, e), le.test(n) ? yt(t).position()[e] + "px" : n
            })
        }), yt.each({Height: "height", Width: "width"}, function (t, e) {
            yt.each({padding: "inner" + t, content: e, "": "outer" + t}, function (n, r) {
                yt.fn[r] = function (i, o) {
                    var a = arguments.length && (n || "boolean" != typeof i),
                        s = n || (i === !0 || o === !0 ? "margin" : "border");
                    return Pt(this, function (e, n, i) {
                        var o;
                        return yt.isWindow(e) ? 0 === r.indexOf("outer") ? e["inner" + t] : e.document.documentElement["client" + t] : 9 === e.nodeType ? (o = e.documentElement, Math.max(e.body["scroll" + t], o["scroll" + t], e.body["offset" + t], o["offset" + t], o["client" + t])) : void 0 === i ? yt.css(e, n, s) : yt.style(e, n, i, s)
                    }, e, a ? i : void 0, a)
                }
            })
        }), yt.fn.extend({
            bind: function (t, e, n) {
                return this.on(t, null, e, n)
            }, unbind: function (t, e) {
                return this.off(t, null, e)
            }, delegate: function (t, e, n, r) {
                return this.on(e, t, n, r)
            }, undelegate: function (t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        }), yt.parseJSON = JSON.parse, r = [], i = function () {
            return yt
        }.apply(e, r), !(void 0 !== i && (t.exports = i));
        var Je = n.jQuery, Ge = n.$;
        return yt.noConflict = function (t) {
            return n.$ === yt && (n.$ = Ge), t && n.jQuery === yt && (n.jQuery = Je), yt
        }, o || (n.jQuery = n.$ = yt), yt
    })
}, function (t, e) {
    var n;
    n = function () {
        return this
    }();
    try {
        n = n || Function("return this")() || (0, eval)("this")
    } catch (t) {
        "object" == typeof window && (n = window)
    }
    t.exports = n
}, function (t, e, n) {
    n(30), Vue.component("example", n(34));
    new Vue({el: "#app"})
}, function (t, e) {
}, function (t, e, n) {
    t.exports = n(12)
}, function (t, e, n) {
    "use strict";
    function r(t) {
        var e = new a(t), n = o(a.prototype.request, e);
        return i.extend(n, a.prototype, e), i.extend(n, e), n
    }

    var i = n(0), o = n(6), a = n(14), s = n(1), u = r(s);
    u.Axios = a, u.create = function (t) {
        return r(i.merge(s, t))
    }, u.Cancel = n(3), u.CancelToken = n(13), u.isCancel = n(4), u.all = function (t) {
        return Promise.all(t)
    }, u.spread = n(28), t.exports = u, t.exports.default = u
}, function (t, e, n) {
    "use strict";
    function r(t) {
        if ("function" != typeof t)throw new TypeError("executor must be a function.");
        var e;
        this.promise = new Promise(function (t) {
            e = t
        });
        var n = this;
        t(function (t) {
            n.reason || (n.reason = new i(t), e(n.reason))
        })
    }

    var i = n(3);
    r.prototype.throwIfRequested = function () {
        if (this.reason)throw this.reason
    }, r.source = function () {
        var t, e = new r(function (e) {
            t = e
        });
        return {token: e, cancel: t}
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    function r(t) {
        this.defaults = t, this.interceptors = {request: new a, response: new a}
    }

    var i = n(1), o = n(0), a = n(15), s = n(16), u = n(24), c = n(22);
    r.prototype.request = function (t) {
        "string" == typeof t && (t = o.merge({url: arguments[0]}, arguments[1])), t = o.merge(i, this.defaults, {method: "get"}, t), t.baseURL && !u(t.url) && (t.url = c(t.baseURL, t.url));
        var e = [s, void 0], n = Promise.resolve(t);
        for (this.interceptors.request.forEach(function (t) {
            e.unshift(t.fulfilled, t.rejected)
        }), this.interceptors.response.forEach(function (t) {
            e.push(t.fulfilled, t.rejected)
        }); e.length;)n = n.then(e.shift(), e.shift());
        return n
    }, o.forEach(["delete", "get", "head"], function (t) {
        r.prototype[t] = function (e, n) {
            return this.request(o.merge(n || {}, {method: t, url: e}))
        }
    }), o.forEach(["post", "put", "patch"], function (t) {
        r.prototype[t] = function (e, n, r) {
            return this.request(o.merge(r || {}, {method: t, url: e, data: n}))
        }
    }), t.exports = r
}, function (t, e, n) {
    "use strict";
    function r() {
        this.handlers = []
    }

    var i = n(0);
    r.prototype.use = function (t, e) {
        return this.handlers.push({fulfilled: t, rejected: e}), this.handlers.length - 1
    }, r.prototype.eject = function (t) {
        this.handlers[t] && (this.handlers[t] = null)
    }, r.prototype.forEach = function (t) {
        i.forEach(this.handlers, function (e) {
            null !== e && t(e)
        })
    }, t.exports = r
}, function (t, e, n) {
    "use strict";
    function r(t) {
        t.cancelToken && t.cancelToken.throwIfRequested()
    }

    var i = n(0), o = n(19), a = n(4), s = n(1);
    t.exports = function (t) {
        r(t), t.headers = t.headers || {}, t.data = o(t.data, t.headers, t.transformRequest), t.headers = i.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers || {}), i.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
            delete t.headers[e]
        });
        var e = t.adapter || s.adapter;
        return e(t).then(function (e) {
            return r(t), e.data = o(e.data, e.headers, t.transformResponse), e
        }, function (e) {
            return a(e) || (r(t), e && e.response && (e.response.data = o(e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        })
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e, n, r) {
        return t.config = e, n && (t.code = n), t.response = r, t
    }
}, function (t, e, n) {
    "use strict";
    var r = n(5);
    t.exports = function (t, e, n) {
        var i = n.config.validateStatus;
        n.status && i && !i(n.status) ? e(r("Request failed with status code " + n.status, n.config, null, n)) : t(n)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t, e, n) {
        return r.forEach(n, function (n) {
            t = n(t, e)
        }), t
    }
}, function (t, e, n) {
    "use strict";
    function r() {
        this.message = "String contains an invalid character"
    }

    function i(t) {
        for (var e, n, i = String(t), a = "", s = 0,
                 u = o; i.charAt(0 | s) || (u = "=", s % 1); a += u.charAt(63 & e >> 8 - s % 1 * 8)) {
            if (n = i.charCodeAt(s += .75), n > 255)throw new r;
            e = e << 8 | n
        }
        return a
    }

    var o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    r.prototype = new Error, r.prototype.code = 5, r.prototype.name = "InvalidCharacterError", t.exports = i
}, function (t, e, n) {
    "use strict";
    function r(t) {
        return encodeURIComponent(t).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    var i = n(0);
    t.exports = function (t, e, n) {
        if (!e)return t;
        var o;
        if (n) o = n(e); else if (i.isURLSearchParams(e)) o = e.toString(); else {
            var a = [];
            i.forEach(e, function (t, e) {
                null !== t && "undefined" != typeof t && (i.isArray(t) && (e += "[]"), i.isArray(t) || (t = [t]), i.forEach(t, function (t) {
                    i.isDate(t) ? t = t.toISOString() : i.isObject(t) && (t = JSON.stringify(t)), a.push(r(e) + "=" + r(t))
                }))
            }), o = a.join("&")
        }
        return o && (t += (t.indexOf("?") === -1 ? "?" : "&") + o), t
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t, e) {
        return t.replace(/\/+$/, "") + "/" + e.replace(/^\/+/, "")
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = r.isStandardBrowserEnv() ? function () {
        return {
            write: function (t, e, n, i, o, a) {
                var s = [];
                s.push(t + "=" + encodeURIComponent(e)), r.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), r.isString(i) && s.push("path=" + i), r.isString(o) && s.push("domain=" + o), a === !0 && s.push("secure"), document.cookie = s.join("; ")
            }, read: function (t) {
                var e = document.cookie.match(new RegExp("(^|;\\s*)(" + t + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            }, remove: function (t) {
                this.write(t, "", Date.now() - 864e5)
            }
        }
    }() : function () {
        return {
            write: function () {
            }, read: function () {
                return null
            }, remove: function () {
            }
        }
    }()
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = r.isStandardBrowserEnv() ? function () {
        function t(t) {
            var e = t;
            return n && (i.setAttribute("href", e), e = i.href), i.setAttribute("href", e), {
                href: i.href,
                protocol: i.protocol ? i.protocol.replace(/:$/, "") : "",
                host: i.host,
                search: i.search ? i.search.replace(/^\?/, "") : "",
                hash: i.hash ? i.hash.replace(/^#/, "") : "",
                hostname: i.hostname,
                port: i.port,
                pathname: "/" === i.pathname.charAt(0) ? i.pathname : "/" + i.pathname
            }
        }

        var e, n = /(msie|trident)/i.test(navigator.userAgent), i = document.createElement("a");
        return e = t(window.location.href), function (n) {
            var i = r.isString(n) ? t(n) : n;
            return i.protocol === e.protocol && i.host === e.host
        }
    }() : function () {
        return function () {
            return !0
        }
    }()
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t, e) {
        r.forEach(t, function (n, r) {
            r !== e && r.toUpperCase() === e.toUpperCase() && (t[e] = n, delete t[r])
        })
    }
}, function (t, e, n) {
    "use strict";
    var r = n(0);
    t.exports = function (t) {
        var e, n, i, o = {};
        return t ? (r.forEach(t.split("\n"), function (t) {
            i = t.indexOf(":"), e = r.trim(t.substr(0, i)).toLowerCase(), n = r.trim(t.substr(i + 1)), e && (o[e] = o[e] ? o[e] + ", " + n : n)
        }), o) : o
    }
}, function (t, e, n) {
    "use strict";
    t.exports = function (t) {
        return function (e) {
            return t.apply(null, e)
        }
    }
}, function (t, e, n) {
    "use strict";
    Object.defineProperty(e, "__esModule", {value: !0}), e.default = {
        mounted: function () {
            console.log("Component mounted.")
        }
    }
}, function (t, e, n) {
    window._ = n(32), window.$ = window.jQuery = n(7), n(31), window.Vue = n(36), window.axios = n(11), window.axios.defaults.headers.common = {"X-Requested-With": "XMLHttpRequest"}
}, function (t, e, n) {
    (function (t) {/*!
     * Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under the MIT license
     */
        if ("undefined" == typeof t)throw new Error("Bootstrap's JavaScript requires jQuery");
        +function (t) {
            "use strict";
            var e = t.fn.jquery.split(" ")[0].split(".");
            if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
        }(t), +function (t) {
            "use strict";
            function e() {
                var t = document.createElement("bootstrap"), e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (var n in e)if (void 0 !== t.style[n])return {end: e[n]};
                return !1
            }

            t.fn.emulateTransitionEnd = function (e) {
                var n = !1, r = this;
                t(this).one("bsTransitionEnd", function () {
                    n = !0
                });
                var i = function () {
                    n || t(r).trigger(t.support.transition.end)
                };
                return setTimeout(i, e), this
            }, t(function () {
                t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
                    bindType: t.support.transition.end,
                    delegateType: t.support.transition.end,
                    handle: function (e) {
                        if (t(e.target).is(this))return e.handleObj.handler.apply(this, arguments)
                    }
                })
            })
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var n = t(this), i = n.data("bs.alert");
                    i || n.data("bs.alert", i = new r(this)), "string" == typeof e && i[e].call(n)
                })
            }

            var n = '[data-dismiss="alert"]', r = function (e) {
                t(e).on("click", n, this.close)
            };
            r.VERSION = "3.3.7", r.TRANSITION_DURATION = 150, r.prototype.close = function (e) {
                function n() {
                    a.detach().trigger("closed.bs.alert").remove()
                }

                var i = t(this), o = i.attr("data-target");
                o || (o = i.attr("href"), o = o && o.replace(/.*(?=#[^\s]*$)/, ""));
                var a = t("#" === o ? [] : o);
                e && e.preventDefault(), a.length || (a = i.closest(".alert")), a.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (a.removeClass("in"), t.support.transition && a.hasClass("fade") ? a.one("bsTransitionEnd", n).emulateTransitionEnd(r.TRANSITION_DURATION) : n())
            };
            var i = t.fn.alert;
            t.fn.alert = e, t.fn.alert.Constructor = r, t.fn.alert.noConflict = function () {
                return t.fn.alert = i, this
            }, t(document).on("click.bs.alert.data-api", n, r.prototype.close)
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.button"), o = "object" == typeof e && e;
                    i || r.data("bs.button", i = new n(this, o)), "toggle" == e ? i.toggle() : e && i.setState(e)
                })
            }

            var n = function (e, r) {
                this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, r), this.isLoading = !1
            };
            n.VERSION = "3.3.7", n.DEFAULTS = {loadingText: "loading..."}, n.prototype.setState = function (e) {
                var n = "disabled", r = this.$element, i = r.is("input") ? "val" : "html", o = r.data();
                e += "Text", null == o.resetText && r.data("resetText", r[i]()), setTimeout(t.proxy(function () {
                    r[i](null == o[e] ? this.options[e] : o[e]), "loadingText" == e ? (this.isLoading = !0, r.addClass(n).attr(n, n).prop(n, !0)) : this.isLoading && (this.isLoading = !1, r.removeClass(n).removeAttr(n).prop(n, !1))
                }, this), 0)
            }, n.prototype.toggle = function () {
                var t = !0, e = this.$element.closest('[data-toggle="buttons"]');
                if (e.length) {
                    var n = this.$element.find("input");
                    "radio" == n.prop("type") ? (n.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == n.prop("type") && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")
                } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
            };
            var r = t.fn.button;
            t.fn.button = e, t.fn.button.Constructor = n, t.fn.button.noConflict = function () {
                return t.fn.button = r, this
            }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (n) {
                var r = t(n.target).closest(".btn");
                e.call(r, "toggle"), t(n.target).is('input[type="radio"], input[type="checkbox"]') || (n.preventDefault(), r.is("input,button") ? r.trigger("focus") : r.find("input:visible,button:visible").first().trigger("focus"))
            }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
            })
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.carousel"),
                        o = t.extend({}, n.DEFAULTS, r.data(), "object" == typeof e && e),
                        a = "string" == typeof e ? e : o.slide;
                    i || r.data("bs.carousel", i = new n(this, o)), "number" == typeof e ? i.to(e) : a ? i[a]() : o.interval && i.pause().cycle()
                })
            }

            var n = function (e, n) {
                this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 600, n.DEFAULTS = {
                interval: 5e3,
                pause: "hover",
                wrap: !0,
                keyboard: !0
            }, n.prototype.keydown = function (t) {
                if (!/input|textarea/i.test(t.target.tagName)) {
                    switch (t.which) {
                        case 37:
                            this.prev();
                            break;
                        case 39:
                            this.next();
                            break;
                        default:
                            return
                    }
                    t.preventDefault()
                }
            }, n.prototype.cycle = function (e) {
                return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
            }, n.prototype.getItemIndex = function (t) {
                return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
            }, n.prototype.getItemForDirection = function (t, e) {
                var n = this.getItemIndex(e), r = "prev" == t && 0 === n || "next" == t && n == this.$items.length - 1;
                if (r && !this.options.wrap)return e;
                var i = "prev" == t ? -1 : 1, o = (n + i) % this.$items.length;
                return this.$items.eq(o)
            }, n.prototype.to = function (t) {
                var e = this, n = this.getItemIndex(this.$active = this.$element.find(".item.active"));
                if (!(t > this.$items.length - 1 || t < 0))return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    e.to(t)
                }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", this.$items.eq(t))
            }, n.prototype.pause = function (e) {
                return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
            }, n.prototype.next = function () {
                if (!this.sliding)return this.slide("next")
            }, n.prototype.prev = function () {
                if (!this.sliding)return this.slide("prev")
            }, n.prototype.slide = function (e, r) {
                var i = this.$element.find(".item.active"), o = r || this.getItemForDirection(e, i), a = this.interval,
                    s = "next" == e ? "left" : "right", u = this;
                if (o.hasClass("active"))return this.sliding = !1;
                var c = o[0], l = t.Event("slide.bs.carousel", {relatedTarget: c, direction: s});
                if (this.$element.trigger(l), !l.isDefaultPrevented()) {
                    if (this.sliding = !0, a && this.pause(), this.$indicators.length) {
                        this.$indicators.find(".active").removeClass("active");
                        var f = t(this.$indicators.children()[this.getItemIndex(o)]);
                        f && f.addClass("active")
                    }
                    var p = t.Event("slid.bs.carousel", {relatedTarget: c, direction: s});
                    return t.support.transition && this.$element.hasClass("slide") ? (o.addClass(e), o[0].offsetWidth, i.addClass(s), o.addClass(s), i.one("bsTransitionEnd", function () {
                        o.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), u.sliding = !1, setTimeout(function () {
                            u.$element.trigger(p)
                        }, 0)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION)) : (i.removeClass("active"), o.addClass("active"), this.sliding = !1, this.$element.trigger(p)), a && this.cycle(), this
                }
            };
            var r = t.fn.carousel;
            t.fn.carousel = e, t.fn.carousel.Constructor = n, t.fn.carousel.noConflict = function () {
                return t.fn.carousel = r, this
            };
            var i = function (n) {
                var r, i = t(this),
                    o = t(i.attr("data-target") || (r = i.attr("href")) && r.replace(/.*(?=#[^\s]+$)/, ""));
                if (o.hasClass("carousel")) {
                    var a = t.extend({}, o.data(), i.data()), s = i.attr("data-slide-to");
                    s && (a.interval = !1), e.call(o, a), s && o.data("bs.carousel").to(s), n.preventDefault()
                }
            };
            t(document).on("click.bs.carousel.data-api", "[data-slide]", i).on("click.bs.carousel.data-api", "[data-slide-to]", i), t(window).on("load", function () {
                t('[data-ride="carousel"]').each(function () {
                    var n = t(this);
                    e.call(n, n.data())
                })
            })
        }(t), +function (t) {
            "use strict";
            function e(e) {
                var n, r = e.attr("data-target") || (n = e.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "");
                return t(r)
            }

            function n(e) {
                return this.each(function () {
                    var n = t(this), i = n.data("bs.collapse"),
                        o = t.extend({}, r.DEFAULTS, n.data(), "object" == typeof e && e);
                    !i && o.toggle && /show|hide/.test(e) && (o.toggle = !1), i || n.data("bs.collapse", i = new r(this, o)), "string" == typeof e && i[e]()
                })
            }

            var r = function (e, n) {
                this.$element = t(e), this.options = t.extend({}, r.DEFAULTS, n), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
            };
            r.VERSION = "3.3.7", r.TRANSITION_DURATION = 350, r.DEFAULTS = {toggle: !0}, r.prototype.dimension = function () {
                var t = this.$element.hasClass("width");
                return t ? "width" : "height"
            }, r.prototype.show = function () {
                if (!this.transitioning && !this.$element.hasClass("in")) {
                    var e, i = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                    if (!(i && i.length && (e = i.data("bs.collapse"), e && e.transitioning))) {
                        var o = t.Event("show.bs.collapse");
                        if (this.$element.trigger(o), !o.isDefaultPrevented()) {
                            i && i.length && (n.call(i, "hide"), e || i.data("bs.collapse", null));
                            var a = this.dimension();
                            this.$element.removeClass("collapse").addClass("collapsing")[a](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                            var s = function () {
                                this.$element.removeClass("collapsing").addClass("collapse in")[a](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                            };
                            if (!t.support.transition)return s.call(this);
                            var u = t.camelCase(["scroll", a].join("-"));
                            this.$element.one("bsTransitionEnd", t.proxy(s, this)).emulateTransitionEnd(r.TRANSITION_DURATION)[a](this.$element[0][u])
                        }
                    }
                }
            }, r.prototype.hide = function () {
                if (!this.transitioning && this.$element.hasClass("in")) {
                    var e = t.Event("hide.bs.collapse");
                    if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                        var n = this.dimension();
                        this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                        var i = function () {
                            this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                        };
                        return t.support.transition ? void this.$element[n](0).one("bsTransitionEnd", t.proxy(i, this)).emulateTransitionEnd(r.TRANSITION_DURATION) : i.call(this)
                    }
                }
            }, r.prototype.toggle = function () {
                this[this.$element.hasClass("in") ? "hide" : "show"]()
            }, r.prototype.getParent = function () {
                return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function (n, r) {
                    var i = t(r);
                    this.addAriaAndCollapsedClass(e(i), i)
                }, this)).end()
            }, r.prototype.addAriaAndCollapsedClass = function (t, e) {
                var n = t.hasClass("in");
                t.attr("aria-expanded", n), e.toggleClass("collapsed", !n).attr("aria-expanded", n)
            };
            var i = t.fn.collapse;
            t.fn.collapse = n, t.fn.collapse.Constructor = r, t.fn.collapse.noConflict = function () {
                return t.fn.collapse = i, this
            }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (r) {
                var i = t(this);
                i.attr("data-target") || r.preventDefault();
                var o = e(i), a = o.data("bs.collapse"), s = a ? "toggle" : i.data();
                n.call(o, s)
            })
        }(t), +function (t) {
            "use strict";
            function e(e) {
                var n = e.attr("data-target");
                n || (n = e.attr("href"), n = n && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
                var r = n && t(n);
                return r && r.length ? r : e.parent()
            }

            function n(n) {
                n && 3 === n.which || (t(i).remove(), t(o).each(function () {
                    var r = t(this), i = e(r), o = {relatedTarget: this};
                    i.hasClass("open") && (n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target) || (i.trigger(n = t.Event("hide.bs.dropdown", o)), n.isDefaultPrevented() || (r.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", o)))))
                }))
            }

            function r(e) {
                return this.each(function () {
                    var n = t(this), r = n.data("bs.dropdown");
                    r || n.data("bs.dropdown", r = new a(this)), "string" == typeof e && r[e].call(n)
                })
            }

            var i = ".dropdown-backdrop", o = '[data-toggle="dropdown"]', a = function (e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
            a.VERSION = "3.3.7", a.prototype.toggle = function (r) {
                var i = t(this);
                if (!i.is(".disabled, :disabled")) {
                    var o = e(i), a = o.hasClass("open");
                    if (n(), !a) {
                        "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", n);
                        var s = {relatedTarget: this};
                        if (o.trigger(r = t.Event("show.bs.dropdown", s)), r.isDefaultPrevented())return;
                        i.trigger("focus").attr("aria-expanded", "true"), o.toggleClass("open").trigger(t.Event("shown.bs.dropdown", s))
                    }
                    return !1
                }
            }, a.prototype.keydown = function (n) {
                if (/(38|40|27|32)/.test(n.which) && !/input|textarea/i.test(n.target.tagName)) {
                    var r = t(this);
                    if (n.preventDefault(), n.stopPropagation(), !r.is(".disabled, :disabled")) {
                        var i = e(r), a = i.hasClass("open");
                        if (!a && 27 != n.which || a && 27 == n.which)return 27 == n.which && i.find(o).trigger("focus"), r.trigger("click");
                        var s = " li:not(.disabled):visible a", u = i.find(".dropdown-menu" + s);
                        if (u.length) {
                            var c = u.index(n.target);
                            38 == n.which && c > 0 && c--, 40 == n.which && c < u.length - 1 && c++, ~c || (c = 0), u.eq(c).trigger("focus")
                        }
                    }
                }
            };
            var s = t.fn.dropdown;
            t.fn.dropdown = r, t.fn.dropdown.Constructor = a, t.fn.dropdown.noConflict = function () {
                return t.fn.dropdown = s, this
            }, t(document).on("click.bs.dropdown.data-api", n).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                t.stopPropagation()
            }).on("click.bs.dropdown.data-api", o, a.prototype.toggle).on("keydown.bs.dropdown.data-api", o, a.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", a.prototype.keydown)
        }(t), +function (t) {
            "use strict";
            function e(e, r) {
                return this.each(function () {
                    var i = t(this), o = i.data("bs.modal"),
                        a = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
                    o || i.data("bs.modal", o = new n(this, a)), "string" == typeof e ? o[e](r) : a.show && o.show(r)
                })
            }

            var n = function (e, n) {
                this.options = n, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                    this.$element.trigger("loaded.bs.modal")
                }, this))
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 300, n.BACKDROP_TRANSITION_DURATION = 150, n.DEFAULTS = {
                backdrop: !0,
                keyboard: !0,
                show: !0
            }, n.prototype.toggle = function (t) {
                return this.isShown ? this.hide() : this.show(t)
            }, n.prototype.show = function (e) {
                var r = this, i = t.Event("show.bs.modal", {relatedTarget: e});
                this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                    r.$element.one("mouseup.dismiss.bs.modal", function (e) {
                        t(e.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                    })
                }), this.backdrop(function () {
                    var i = t.support.transition && r.$element.hasClass("fade");
                    r.$element.parent().length || r.$element.appendTo(r.$body), r.$element.show().scrollTop(0), r.adjustDialog(), i && r.$element[0].offsetWidth, r.$element.addClass("in"), r.enforceFocus();
                    var o = t.Event("shown.bs.modal", {relatedTarget: e});
                    i ? r.$dialog.one("bsTransitionEnd", function () {
                        r.$element.trigger("focus").trigger(o)
                    }).emulateTransitionEnd(n.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(o)
                }))
            }, n.prototype.hide = function (e) {
                e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : this.hideModal())
            }, n.prototype.enforceFocus = function () {
                t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                    document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
                }, this))
            }, n.prototype.escape = function () {
                this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function (t) {
                    27 == t.which && this.hide()
                }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
            }, n.prototype.resize = function () {
                this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
            }, n.prototype.hideModal = function () {
                var t = this;
                this.$element.hide(), this.backdrop(function () {
                    t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
                })
            }, n.prototype.removeBackdrop = function () {
                this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
            }, n.prototype.backdrop = function (e) {
                var r = this, i = this.$element.hasClass("fade") ? "fade" : "";
                if (this.isShown && this.options.backdrop) {
                    var o = t.support.transition && i;
                    if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + i).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                            return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                        }, this)), o && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e)return;
                    o ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : e()
                } else if (!this.isShown && this.$backdrop) {
                    this.$backdrop.removeClass("in");
                    var a = function () {
                        r.removeBackdrop(), e && e()
                    };
                    t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", a).emulateTransitionEnd(n.BACKDROP_TRANSITION_DURATION) : a()
                } else e && e()
            }, n.prototype.handleUpdate = function () {
                this.adjustDialog()
            }, n.prototype.adjustDialog = function () {
                var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                this.$element.css({
                    paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
                    paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
                })
            }, n.prototype.resetAdjustments = function () {
                this.$element.css({paddingLeft: "", paddingRight: ""})
            }, n.prototype.checkScrollbar = function () {
                var t = window.innerWidth;
                if (!t) {
                    var e = document.documentElement.getBoundingClientRect();
                    t = e.right - Math.abs(e.left)
                }
                this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
            }, n.prototype.setScrollbar = function () {
                var t = parseInt(this.$body.css("padding-right") || 0, 10);
                this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
            }, n.prototype.resetScrollbar = function () {
                this.$body.css("padding-right", this.originalBodyPad)
            }, n.prototype.measureScrollbar = function () {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", this.$body.append(t);
                var e = t.offsetWidth - t.clientWidth;
                return this.$body[0].removeChild(t), e
            };
            var r = t.fn.modal;
            t.fn.modal = e, t.fn.modal.Constructor = n, t.fn.modal.noConflict = function () {
                return t.fn.modal = r, this
            }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (n) {
                var r = t(this), i = r.attr("href"),
                    o = t(r.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                    a = o.data("bs.modal") ? "toggle" : t.extend({remote: !/#/.test(i) && i}, o.data(), r.data());
                r.is("a") && n.preventDefault(), o.one("show.bs.modal", function (t) {
                    t.isDefaultPrevented() || o.one("hidden.bs.modal", function () {
                        r.is(":visible") && r.trigger("focus")
                    })
                }), e.call(o, a, this)
            })
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.tooltip"), o = "object" == typeof e && e;
                    !i && /destroy|hide/.test(e) || (i || r.data("bs.tooltip", i = new n(this, o)), "string" == typeof e && i[e]())
                })
            }

            var n = function (t, e) {
                this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.DEFAULTS = {
                animation: !0,
                placement: "top",
                selector: !1,
                template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                container: !1,
                viewport: {selector: "body", padding: 0}
            }, n.prototype.init = function (e, n, r) {
                if (this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(r), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                        click: !1,
                        hover: !1,
                        focus: !1
                    }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                for (var i = this.options.trigger.split(" "), o = i.length; o--;) {
                    var a = i[o];
                    if ("click" == a) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this)); else if ("manual" != a) {
                        var s = "hover" == a ? "mouseenter" : "focusin", u = "hover" == a ? "mouseleave" : "focusout";
                        this.$element.on(s + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(u + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                    }
                }
                this.options.selector ? this._options = t.extend({}, this.options, {
                    trigger: "manual",
                    selector: ""
                }) : this.fixTitle()
            }, n.prototype.getDefaults = function () {
                return n.DEFAULTS
            }, n.prototype.getOptions = function (e) {
                return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
                    show: e.delay,
                    hide: e.delay
                }), e
            }, n.prototype.getDelegateOptions = function () {
                var e = {}, n = this.getDefaults();
                return this._options && t.each(this._options, function (t, r) {
                    n[t] != r && (e[t] = r)
                }), e
            }, n.prototype.enter = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                return n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusin" == e.type ? "focus" : "hover"] = !0), n.tip().hasClass("in") || "in" == n.hoverState ? void(n.hoverState = "in") : (clearTimeout(n.timeout), n.hoverState = "in", n.options.delay && n.options.delay.show ? void(n.timeout = setTimeout(function () {
                    "in" == n.hoverState && n.show()
                }, n.options.delay.show)) : n.show())
            }, n.prototype.isInStateTrue = function () {
                for (var t in this.inState)if (this.inState[t])return !0;
                return !1
            }, n.prototype.leave = function (e) {
                var n = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                if (n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n)), e instanceof t.Event && (n.inState["focusout" == e.type ? "focus" : "hover"] = !1), !n.isInStateTrue())return clearTimeout(n.timeout), n.hoverState = "out", n.options.delay && n.options.delay.hide ? void(n.timeout = setTimeout(function () {
                    "out" == n.hoverState && n.hide()
                }, n.options.delay.hide)) : n.hide()
            }, n.prototype.show = function () {
                var e = t.Event("show.bs." + this.type);
                if (this.hasContent() && this.enabled) {
                    this.$element.trigger(e);
                    var r = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                    if (e.isDefaultPrevented() || !r)return;
                    var i = this, o = this.tip(), a = this.getUID(this.type);
                    this.setContent(), o.attr("id", a), this.$element.attr("aria-describedby", a), this.options.animation && o.addClass("fade");
                    var s = "function" == typeof this.options.placement ? this.options.placement.call(this, o[0], this.$element[0]) : this.options.placement,
                        u = /\s?auto?\s?/i, c = u.test(s);
                    c && (s = s.replace(u, "") || "top"), o.detach().css({
                        top: 0,
                        left: 0,
                        display: "block"
                    }).addClass(s).data("bs." + this.type, this), this.options.container ? o.appendTo(this.options.container) : o.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
                    var l = this.getPosition(), f = o[0].offsetWidth, p = o[0].offsetHeight;
                    if (c) {
                        var d = s, h = this.getPosition(this.$viewport);
                        s = "bottom" == s && l.bottom + p > h.bottom ? "top" : "top" == s && l.top - p < h.top ? "bottom" : "right" == s && l.right + f > h.width ? "left" : "left" == s && l.left - f < h.left ? "right" : s, o.removeClass(d).addClass(s)
                    }
                    var v = this.getCalculatedOffset(s, l, f, p);
                    this.applyPlacement(v, s);
                    var g = function () {
                        var t = i.hoverState;
                        i.$element.trigger("shown.bs." + i.type), i.hoverState = null, "out" == t && i.leave(i)
                    };
                    t.support.transition && this.$tip.hasClass("fade") ? o.one("bsTransitionEnd", g).emulateTransitionEnd(n.TRANSITION_DURATION) : g()
                }
            }, n.prototype.applyPlacement = function (e, n) {
                var r = this.tip(), i = r[0].offsetWidth, o = r[0].offsetHeight, a = parseInt(r.css("margin-top"), 10),
                    s = parseInt(r.css("margin-left"), 10);
                isNaN(a) && (a = 0), isNaN(s) && (s = 0), e.top += a, e.left += s, t.offset.setOffset(r[0], t.extend({
                    using: function (t) {
                        r.css({top: Math.round(t.top), left: Math.round(t.left)})
                    }
                }, e), 0), r.addClass("in");
                var u = r[0].offsetWidth, c = r[0].offsetHeight;
                "top" == n && c != o && (e.top = e.top + o - c);
                var l = this.getViewportAdjustedDelta(n, e, u, c);
                l.left ? e.left += l.left : e.top += l.top;
                var f = /top|bottom/.test(n), p = f ? 2 * l.left - i + u : 2 * l.top - o + c,
                    d = f ? "offsetWidth" : "offsetHeight";
                r.offset(e), this.replaceArrow(p, r[0][d], f)
            }, n.prototype.replaceArrow = function (t, e, n) {
                this.arrow().css(n ? "left" : "top", 50 * (1 - t / e) + "%").css(n ? "top" : "left", "")
            }, n.prototype.setContent = function () {
                var t = this.tip(), e = this.getTitle();
                t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
            }, n.prototype.hide = function (e) {
                function r() {
                    "in" != i.hoverState && o.detach(), i.$element && i.$element.removeAttr("aria-describedby").trigger("hidden.bs." + i.type), e && e()
                }

                var i = this, o = t(this.$tip), a = t.Event("hide.bs." + this.type);
                if (this.$element.trigger(a), !a.isDefaultPrevented())return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(n.TRANSITION_DURATION) : r(), this.hoverState = null, this
            }, n.prototype.fixTitle = function () {
                var t = this.$element;
                (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
            }, n.prototype.hasContent = function () {
                return this.getTitle()
            }, n.prototype.getPosition = function (e) {
                e = e || this.$element;
                var n = e[0], r = "BODY" == n.tagName, i = n.getBoundingClientRect();
                null == i.width && (i = t.extend({}, i, {width: i.right - i.left, height: i.bottom - i.top}));
                var o = window.SVGElement && n instanceof window.SVGElement,
                    a = r ? {top: 0, left: 0} : o ? null : e.offset(),
                    s = {scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()},
                    u = r ? {width: t(window).width(), height: t(window).height()} : null;
                return t.extend({}, i, s, u, a)
            }, n.prototype.getCalculatedOffset = function (t, e, n, r) {
                return "bottom" == t ? {
                    top: e.top + e.height,
                    left: e.left + e.width / 2 - n / 2
                } : "top" == t ? {
                    top: e.top - r,
                    left: e.left + e.width / 2 - n / 2
                } : "left" == t ? {
                    top: e.top + e.height / 2 - r / 2,
                    left: e.left - n
                } : {top: e.top + e.height / 2 - r / 2, left: e.left + e.width}
            }, n.prototype.getViewportAdjustedDelta = function (t, e, n, r) {
                var i = {top: 0, left: 0};
                if (!this.$viewport)return i;
                var o = this.options.viewport && this.options.viewport.padding || 0,
                    a = this.getPosition(this.$viewport);
                if (/right|left/.test(t)) {
                    var s = e.top - o - a.scroll, u = e.top + o - a.scroll + r;
                    s < a.top ? i.top = a.top - s : u > a.top + a.height && (i.top = a.top + a.height - u)
                } else {
                    var c = e.left - o, l = e.left + o + n;
                    c < a.left ? i.left = a.left - c : l > a.right && (i.left = a.left + a.width - l)
                }
                return i
            }, n.prototype.getTitle = function () {
                var t, e = this.$element, n = this.options;
                return t = e.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(e[0]) : n.title)
            }, n.prototype.getUID = function (t) {
                do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
                return t
            }, n.prototype.tip = function () {
                if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                return this.$tip
            }, n.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
            }, n.prototype.enable = function () {
                this.enabled = !0
            }, n.prototype.disable = function () {
                this.enabled = !1
            }, n.prototype.toggleEnabled = function () {
                this.enabled = !this.enabled
            }, n.prototype.toggle = function (e) {
                var n = this;
                e && (n = t(e.currentTarget).data("bs." + this.type), n || (n = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, n))), e ? (n.inState.click = !n.inState.click, n.isInStateTrue() ? n.enter(n) : n.leave(n)) : n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
            }, n.prototype.destroy = function () {
                var t = this;
                clearTimeout(this.timeout), this.hide(function () {
                    t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null, t.$element = null
                })
            };
            var r = t.fn.tooltip;
            t.fn.tooltip = e, t.fn.tooltip.Constructor = n, t.fn.tooltip.noConflict = function () {
                return t.fn.tooltip = r, this
            }
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.popover"), o = "object" == typeof e && e;
                    !i && /destroy|hide/.test(e) || (i || r.data("bs.popover", i = new n(this, o)), "string" == typeof e && i[e]())
                })
            }

            var n = function (t, e) {
                this.init("popover", t, e)
            };
            if (!t.fn.tooltip)throw new Error("Popover requires tooltip.js");
            n.VERSION = "3.3.7", n.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
            }), n.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), n.prototype.constructor = n, n.prototype.getDefaults = function () {
                return n.DEFAULTS
            }, n.prototype.setContent = function () {
                var t = this.tip(), e = this.getTitle(), n = this.getContent();
                t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
            }, n.prototype.hasContent = function () {
                return this.getTitle() || this.getContent()
            }, n.prototype.getContent = function () {
                var t = this.$element, e = this.options;
                return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
            }, n.prototype.arrow = function () {
                return this.$arrow = this.$arrow || this.tip().find(".arrow")
            };
            var r = t.fn.popover;
            t.fn.popover = e, t.fn.popover.Constructor = n, t.fn.popover.noConflict = function () {
                return t.fn.popover = r, this
            }
        }(t), +function (t) {
            "use strict";
            function e(n, r) {
                this.$body = t(document.body), this.$scrollElement = t(t(n).is(document.body) ? window : n), this.options = t.extend({}, e.DEFAULTS, r), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
            }

            function n(n) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.scrollspy"), o = "object" == typeof n && n;
                    i || r.data("bs.scrollspy", i = new e(this, o)), "string" == typeof n && i[n]()
                })
            }

            e.VERSION = "3.3.7", e.DEFAULTS = {offset: 10}, e.prototype.getScrollHeight = function () {
                return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
            }, e.prototype.refresh = function () {
                var e = this, n = "offset", r = 0;
                this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (n = "position", r = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
                    var e = t(this), i = e.data("target") || e.attr("href"), o = /^#./.test(i) && t(i);
                    return o && o.length && o.is(":visible") && [[o[n]().top + r, i]] || null
                }).sort(function (t, e) {
                    return t[0] - e[0]
                }).each(function () {
                    e.offsets.push(this[0]), e.targets.push(this[1])
                })
            }, e.prototype.process = function () {
                var t, e = this.$scrollElement.scrollTop() + this.options.offset, n = this.getScrollHeight(),
                    r = this.options.offset + n - this.$scrollElement.height(), i = this.offsets, o = this.targets,
                    a = this.activeTarget;
                if (this.scrollHeight != n && this.refresh(), e >= r)return a != (t = o[o.length - 1]) && this.activate(t);
                if (a && e < i[0])return this.activeTarget = null, this.clear();
                for (t = i.length; t--;)a != o[t] && e >= i[t] && (void 0 === i[t + 1] || e < i[t + 1]) && this.activate(o[t])
            }, e.prototype.activate = function (e) {
                this.activeTarget = e, this.clear();
                var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                    r = t(n).parents("li").addClass("active");
                r.parent(".dropdown-menu").length && (r = r.closest("li.dropdown").addClass("active")), r.trigger("activate.bs.scrollspy")
            }, e.prototype.clear = function () {
                t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
            };
            var r = t.fn.scrollspy;
            t.fn.scrollspy = n, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
                return t.fn.scrollspy = r, this
            }, t(window).on("load.bs.scrollspy.data-api", function () {
                t('[data-spy="scroll"]').each(function () {
                    var e = t(this);
                    n.call(e, e.data())
                })
            })
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.tab");
                    i || r.data("bs.tab", i = new n(this)), "string" == typeof e && i[e]()
                })
            }

            var n = function (e) {
                this.element = t(e)
            };
            n.VERSION = "3.3.7", n.TRANSITION_DURATION = 150, n.prototype.show = function () {
                var e = this.element, n = e.closest("ul:not(.dropdown-menu)"), r = e.data("target");
                if (r || (r = e.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                    var i = n.find(".active:last a"), o = t.Event("hide.bs.tab", {relatedTarget: e[0]}),
                        a = t.Event("show.bs.tab", {relatedTarget: i[0]});
                    if (i.trigger(o), e.trigger(a), !a.isDefaultPrevented() && !o.isDefaultPrevented()) {
                        var s = t(r);
                        this.activate(e.closest("li"), n), this.activate(s, s.parent(), function () {
                            i.trigger({type: "hidden.bs.tab", relatedTarget: e[0]}), e.trigger({
                                type: "shown.bs.tab",
                                relatedTarget: i[0]
                            })
                        })
                    }
                }
            }, n.prototype.activate = function (e, r, i) {
                function o() {
                    a.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), i && i()
                }

                var a = r.find("> .active"),
                    s = i && t.support.transition && (a.length && a.hasClass("fade") || !!r.find("> .fade").length);
                a.length && s ? a.one("bsTransitionEnd", o).emulateTransitionEnd(n.TRANSITION_DURATION) : o(), a.removeClass("in")
            };
            var r = t.fn.tab;
            t.fn.tab = e, t.fn.tab.Constructor = n, t.fn.tab.noConflict = function () {
                return t.fn.tab = r, this
            };
            var i = function (n) {
                n.preventDefault(), e.call(t(this), "show")
            };
            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
        }(t), +function (t) {
            "use strict";
            function e(e) {
                return this.each(function () {
                    var r = t(this), i = r.data("bs.affix"), o = "object" == typeof e && e;
                    i || r.data("bs.affix", i = new n(this, o)), "string" == typeof e && i[e]()
                })
            }

            var n = function (e, r) {
                this.options = t.extend({}, n.DEFAULTS, r), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
            };
            n.VERSION = "3.3.7", n.RESET = "affix affix-top affix-bottom", n.DEFAULTS = {
                offset: 0,
                target: window
            }, n.prototype.getState = function (t, e, n, r) {
                var i = this.$target.scrollTop(), o = this.$element.offset(), a = this.$target.height();
                if (null != n && "top" == this.affixed)return i < n && "top";
                if ("bottom" == this.affixed)return null != n ? !(i + this.unpin <= o.top) && "bottom" : !(i + a <= t - r) && "bottom";
                var s = null == this.affixed, u = s ? i : o.top, c = s ? a : e;
                return null != n && i <= n ? "top" : null != r && u + c >= t - r && "bottom"
            }, n.prototype.getPinnedOffset = function () {
                if (this.pinnedOffset)return this.pinnedOffset;
                this.$element.removeClass(n.RESET).addClass("affix");
                var t = this.$target.scrollTop(), e = this.$element.offset();
                return this.pinnedOffset = e.top - t
            }, n.prototype.checkPositionWithEventLoop = function () {
                setTimeout(t.proxy(this.checkPosition, this), 1)
            }, n.prototype.checkPosition = function () {
                if (this.$element.is(":visible")) {
                    var e = this.$element.height(), r = this.options.offset, i = r.top, o = r.bottom,
                        a = Math.max(t(document).height(), t(document.body).height());
                    "object" != typeof r && (o = i = r), "function" == typeof i && (i = r.top(this.$element)), "function" == typeof o && (o = r.bottom(this.$element));
                    var s = this.getState(a, e, i, o);
                    if (this.affixed != s) {
                        null != this.unpin && this.$element.css("top", "");
                        var u = "affix" + (s ? "-" + s : ""), c = t.Event(u + ".bs.affix");
                        if (this.$element.trigger(c), c.isDefaultPrevented())return;
                        this.affixed = s, this.unpin = "bottom" == s ? this.getPinnedOffset() : null, this.$element.removeClass(n.RESET).addClass(u).trigger(u.replace("affix", "affixed") + ".bs.affix")
                    }
                    "bottom" == s && this.$element.offset({top: a - e - o})
                }
            };
            var r = t.fn.affix;
            t.fn.affix = e, t.fn.affix.Constructor = n, t.fn.affix.noConflict = function () {
                return t.fn.affix = r, this
            }, t(window).on("load", function () {
                t('[data-spy="affix"]').each(function () {
                    var n = t(this), r = n.data();
                    r.offset = r.offset || {}, null != r.offsetBottom && (r.offset.bottom = r.offsetBottom), null != r.offsetTop && (r.offset.top = r.offsetTop), e.call(n, r)
                })
            })
        }(t)
    }).call(e, n(7))
}, function (t, e, n) {
    (function (t, r) {
        var i;
        (function () {
            function o(t, e) {
                return t.set(e[0], e[1]), t
            }

            function a(t, e) {
                return t.add(e), t
            }

            function s(t, e, n) {
                switch (n.length) {
                    case 0:
                        return t.call(e);
                    case 1:
                        return t.call(e, n[0]);
                    case 2:
                        return t.call(e, n[0], n[1]);
                    case 3:
                        return t.call(e, n[0], n[1], n[2])
                }
                return t.apply(e, n)
            }

            function u(t, e, n, r) {
                for (var i = -1, o = null == t ? 0 : t.length; ++i < o;) {
                    var a = t[i];
                    e(r, a, n(a), t)
                }
                return r
            }

            function c(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r && e(t[n], n, t) !== !1;);
                return t
            }

            function l(t, e) {
                for (var n = null == t ? 0 : t.length; n-- && e(t[n], n, t) !== !1;);
                return t
            }

            function f(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)if (!e(t[n], n, t))return !1;
                return !0
            }

            function p(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    e(a, n, t) && (o[i++] = a)
                }
                return o
            }

            function d(t, e) {
                var n = null == t ? 0 : t.length;
                return !!n && T(t, e, 0) > -1
            }

            function h(t, e, n) {
                for (var r = -1, i = null == t ? 0 : t.length; ++r < i;)if (n(e, t[r]))return !0;
                return !1
            }

            function v(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length, i = Array(r); ++n < r;)i[n] = e(t[n], n, t);
                return i
            }

            function g(t, e) {
                for (var n = -1, r = e.length, i = t.length; ++n < r;)t[i + n] = e[n];
                return t
            }

            function m(t, e, n, r) {
                var i = -1, o = null == t ? 0 : t.length;
                for (r && o && (n = t[++i]); ++i < o;)n = e(n, t[i], i, t);
                return n
            }

            function y(t, e, n, r) {
                var i = null == t ? 0 : t.length;
                for (r && i && (n = t[--i]); i--;)n = e(n, t[i], i, t);
                return n
            }

            function b(t, e) {
                for (var n = -1, r = null == t ? 0 : t.length; ++n < r;)if (e(t[n], n, t))return !0;
                return !1
            }

            function _(t) {
                return t.split("")
            }

            function w(t) {
                return t.match(Ue) || []
            }

            function x(t, e, n) {
                var r;
                return n(t, function (t, n, i) {
                    if (e(t, n, i))return r = n, !1
                }), r
            }

            function C(t, e, n, r) {
                for (var i = t.length, o = n + (r ? 1 : -1); r ? o-- : ++o < i;)if (e(t[o], o, t))return o;
                return -1
            }

            function T(t, e, n) {
                return e === e ? Z(t, e, n) : C(t, k, n)
            }

            function $(t, e, n, r) {
                for (var i = n - 1, o = t.length; ++i < o;)if (r(t[i], e))return i;
                return -1
            }

            function k(t) {
                return t !== t
            }

            function A(t, e) {
                var n = null == t ? 0 : t.length;
                return n ? N(t, e) / n : Pt
            }

            function E(t) {
                return function (e) {
                    return null == e ? it : e[t]
                }
            }

            function S(t) {
                return function (e) {
                    return null == t ? it : t[e]
                }
            }

            function O(t, e, n, r, i) {
                return i(t, function (t, i, o) {
                    n = r ? (r = !1, t) : e(n, t, i, o)
                }), n
            }

            function j(t, e) {
                var n = t.length;
                for (t.sort(e); n--;)t[n] = t[n].value;
                return t
            }

            function N(t, e) {
                for (var n, r = -1, i = t.length; ++r < i;) {
                    var o = e(t[r]);
                    o !== it && (n = n === it ? o : n + o)
                }
                return n
            }

            function D(t, e) {
                for (var n = -1, r = Array(t); ++n < t;)r[n] = e(n);
                return r
            }

            function I(t, e) {
                return v(e, function (e) {
                    return [e, t[e]]
                })
            }

            function R(t) {
                return function (e) {
                    return t(e)
                }
            }

            function L(t, e) {
                return v(e, function (e) {
                    return t[e]
                })
            }

            function P(t, e) {
                return t.has(e)
            }

            function F(t, e) {
                for (var n = -1, r = t.length; ++n < r && T(e, t[n], 0) > -1;);
                return n
            }

            function q(t, e) {
                for (var n = t.length; n-- && T(e, t[n], 0) > -1;);
                return n
            }

            function M(t, e) {
                for (var n = t.length, r = 0; n--;)t[n] === e && ++r;
                return r
            }

            function H(t) {
                return "\\" + nr[t]
            }

            function B(t, e) {
                return null == t ? it : t[e]
            }

            function U(t) {
                return Xn.test(t)
            }

            function W(t) {
                return Kn.test(t)
            }

            function z(t) {
                for (var e, n = []; !(e = t.next()).done;)n.push(e.value);
                return n
            }

            function V(t) {
                var e = -1, n = Array(t.size);
                return t.forEach(function (t, r) {
                    n[++e] = [r, t]
                }), n
            }

            function X(t, e) {
                return function (n) {
                    return t(e(n))
                }
            }

            function K(t, e) {
                for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                    var a = t[n];
                    a !== e && a !== ft || (t[n] = ft, o[i++] = n)
                }
                return o
            }

            function J(t) {
                var e = -1, n = Array(t.size);
                return t.forEach(function (t) {
                    n[++e] = t
                }), n
            }

            function G(t) {
                var e = -1, n = Array(t.size);
                return t.forEach(function (t) {
                    n[++e] = [t, t]
                }), n
            }

            function Z(t, e, n) {
                for (var r = n - 1, i = t.length; ++r < i;)if (t[r] === e)return r;
                return -1
            }

            function Y(t, e, n) {
                for (var r = n + 1; r--;)if (t[r] === e)return r;
                return r
            }

            function Q(t) {
                return U(t) ? et(t) : br(t)
            }

            function tt(t) {
                return U(t) ? nt(t) : _(t)
            }

            function et(t) {
                for (var e = zn.lastIndex = 0; zn.test(t);)++e;
                return e
            }

            function nt(t) {
                return t.match(zn) || []
            }

            function rt(t) {
                return t.match(Vn) || []
            }

            var it, ot = "4.17.4", at = 200, st = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",
                ut = "Expected a function", ct = "__lodash_hash_undefined__", lt = 500, ft = "__lodash_placeholder__",
                pt = 1, dt = 2, ht = 4, vt = 1, gt = 2, mt = 1, yt = 2, bt = 4, _t = 8, wt = 16, xt = 32, Ct = 64,
                Tt = 128, $t = 256, kt = 512, At = 30, Et = "...", St = 800, Ot = 16, jt = 1, Nt = 2, Dt = 3,
                It = 1 / 0, Rt = 9007199254740991, Lt = 1.7976931348623157e308, Pt = NaN, Ft = 4294967295, qt = Ft - 1,
                Mt = Ft >>> 1,
                Ht = [["ary", Tt], ["bind", mt], ["bindKey", yt], ["curry", _t], ["curryRight", wt], ["flip", kt], ["partial", xt], ["partialRight", Ct], ["rearg", $t]],
                Bt = "[object Arguments]", Ut = "[object Array]", Wt = "[object AsyncFunction]",
                zt = "[object Boolean]", Vt = "[object Date]", Xt = "[object DOMException]", Kt = "[object Error]",
                Jt = "[object Function]", Gt = "[object GeneratorFunction]", Zt = "[object Map]",
                Yt = "[object Number]", Qt = "[object Null]", te = "[object Object]", ee = "[object Promise]",
                ne = "[object Proxy]", re = "[object RegExp]", ie = "[object Set]", oe = "[object String]",
                ae = "[object Symbol]", se = "[object Undefined]", ue = "[object WeakMap]", ce = "[object WeakSet]",
                le = "[object ArrayBuffer]", fe = "[object DataView]", pe = "[object Float32Array]",
                de = "[object Float64Array]", he = "[object Int8Array]", ve = "[object Int16Array]",
                ge = "[object Int32Array]", me = "[object Uint8Array]", ye = "[object Uint8ClampedArray]",
                be = "[object Uint16Array]", _e = "[object Uint32Array]", we = /\b__p \+= '';/g,
                xe = /\b(__p \+=) '' \+/g, Ce = /(__e\(.*?\)|\b__t\)) \+\n'';/g, Te = /&(?:amp|lt|gt|quot|#39);/g,
                $e = /[&<>"']/g, ke = RegExp(Te.source), Ae = RegExp($e.source), Ee = /<%-([\s\S]+?)%>/g,
                Se = /<%([\s\S]+?)%>/g, Oe = /<%=([\s\S]+?)%>/g,
                je = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ne = /^\w*$/, De = /^\./,
                Ie = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                Re = /[\\^$.*+?()[\]{}|]/g, Le = RegExp(Re.source), Pe = /^\s+|\s+$/g, Fe = /^\s+/, qe = /\s+$/,
                Me = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, He = /\{\n\/\* \[wrapped with (.+)\] \*/,
                Be = /,? & /, Ue = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, We = /\\(\\)?/g,
                ze = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ve = /\w*$/, Xe = /^[-+]0x[0-9a-f]+$/i, Ke = /^0b[01]+$/i,
                Je = /^\[object .+?Constructor\]$/, Ge = /^0o[0-7]+$/i, Ze = /^(?:0|[1-9]\d*)$/,
                Ye = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Qe = /($^)/, tn = /['\n\r\u2028\u2029\\]/g,
                en = "\\ud800-\\udfff", nn = "\\u0300-\\u036f", rn = "\\ufe20-\\ufe2f", on = "\\u20d0-\\u20ff",
                an = nn + rn + on, sn = "\\u2700-\\u27bf", un = "a-z\\xdf-\\xf6\\xf8-\\xff",
                cn = "\\xac\\xb1\\xd7\\xf7", ln = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
                fn = "\\u2000-\\u206f",
                pn = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                dn = "A-Z\\xc0-\\xd6\\xd8-\\xde", hn = "\\ufe0e\\ufe0f", vn = cn + ln + fn + pn, gn = "['’]",
                mn = "[" + en + "]", yn = "[" + vn + "]", bn = "[" + an + "]", _n = "\\d+", wn = "[" + sn + "]",
                xn = "[" + un + "]", Cn = "[^" + en + vn + _n + sn + un + dn + "]", Tn = "\\ud83c[\\udffb-\\udfff]",
                $n = "(?:" + bn + "|" + Tn + ")", kn = "[^" + en + "]", An = "(?:\\ud83c[\\udde6-\\uddff]){2}",
                En = "[\\ud800-\\udbff][\\udc00-\\udfff]", Sn = "[" + dn + "]", On = "\\u200d",
                jn = "(?:" + xn + "|" + Cn + ")", Nn = "(?:" + Sn + "|" + Cn + ")",
                Dn = "(?:" + gn + "(?:d|ll|m|re|s|t|ve))?", In = "(?:" + gn + "(?:D|LL|M|RE|S|T|VE))?", Rn = $n + "?",
                Ln = "[" + hn + "]?", Pn = "(?:" + On + "(?:" + [kn, An, En].join("|") + ")" + Ln + Rn + ")*",
                Fn = "\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)", qn = "\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)",
                Mn = Ln + Rn + Pn, Hn = "(?:" + [wn, An, En].join("|") + ")" + Mn,
                Bn = "(?:" + [kn + bn + "?", bn, An, En, mn].join("|") + ")", Un = RegExp(gn, "g"),
                Wn = RegExp(bn, "g"), zn = RegExp(Tn + "(?=" + Tn + ")|" + Bn + Mn, "g"),
                Vn = RegExp([Sn + "?" + xn + "+" + Dn + "(?=" + [yn, Sn, "$"].join("|") + ")", Nn + "+" + In + "(?=" + [yn, Sn + jn, "$"].join("|") + ")", Sn + "?" + jn + "+" + Dn, Sn + "+" + In, qn, Fn, _n, Hn].join("|"), "g"),
                Xn = RegExp("[" + On + en + an + hn + "]"),
                Kn = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                Jn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                Gn = -1, Zn = {};
            Zn[pe] = Zn[de] = Zn[he] = Zn[ve] = Zn[ge] = Zn[me] = Zn[ye] = Zn[be] = Zn[_e] = !0, Zn[Bt] = Zn[Ut] = Zn[le] = Zn[zt] = Zn[fe] = Zn[Vt] = Zn[Kt] = Zn[Jt] = Zn[Zt] = Zn[Yt] = Zn[te] = Zn[re] = Zn[ie] = Zn[oe] = Zn[ue] = !1;
            var Yn = {};
            Yn[Bt] = Yn[Ut] = Yn[le] = Yn[fe] = Yn[zt] = Yn[Vt] = Yn[pe] = Yn[de] = Yn[he] = Yn[ve] = Yn[ge] = Yn[Zt] = Yn[Yt] = Yn[te] = Yn[re] = Yn[ie] = Yn[oe] = Yn[ae] = Yn[me] = Yn[ye] = Yn[be] = Yn[_e] = !0, Yn[Kt] = Yn[Jt] = Yn[ue] = !1;
            var Qn = {
                    "À": "A",
                    "Á": "A",
                    "Â": "A",
                    "Ã": "A",
                    "Ä": "A",
                    "Å": "A",
                    "à": "a",
                    "á": "a",
                    "â": "a",
                    "ã": "a",
                    "ä": "a",
                    "å": "a",
                    "Ç": "C",
                    "ç": "c",
                    "Ð": "D",
                    "ð": "d",
                    "È": "E",
                    "É": "E",
                    "Ê": "E",
                    "Ë": "E",
                    "è": "e",
                    "é": "e",
                    "ê": "e",
                    "ë": "e",
                    "Ì": "I",
                    "Í": "I",
                    "Î": "I",
                    "Ï": "I",
                    "ì": "i",
                    "í": "i",
                    "î": "i",
                    "ï": "i",
                    "Ñ": "N",
                    "ñ": "n",
                    "Ò": "O",
                    "Ó": "O",
                    "Ô": "O",
                    "Õ": "O",
                    "Ö": "O",
                    "Ø": "O",
                    "ò": "o",
                    "ó": "o",
                    "ô": "o",
                    "õ": "o",
                    "ö": "o",
                    "ø": "o",
                    "Ù": "U",
                    "Ú": "U",
                    "Û": "U",
                    "Ü": "U",
                    "ù": "u",
                    "ú": "u",
                    "û": "u",
                    "ü": "u",
                    "Ý": "Y",
                    "ý": "y",
                    "ÿ": "y",
                    "Æ": "Ae",
                    "æ": "ae",
                    "Þ": "Th",
                    "þ": "th",
                    "ß": "ss",
                    "Ā": "A",
                    "Ă": "A",
                    "Ą": "A",
                    "ā": "a",
                    "ă": "a",
                    "ą": "a",
                    "Ć": "C",
                    "Ĉ": "C",
                    "Ċ": "C",
                    "Č": "C",
                    "ć": "c",
                    "ĉ": "c",
                    "ċ": "c",
                    "č": "c",
                    "Ď": "D",
                    "Đ": "D",
                    "ď": "d",
                    "đ": "d",
                    "Ē": "E",
                    "Ĕ": "E",
                    "Ė": "E",
                    "Ę": "E",
                    "Ě": "E",
                    "ē": "e",
                    "ĕ": "e",
                    "ė": "e",
                    "ę": "e",
                    "ě": "e",
                    "Ĝ": "G",
                    "Ğ": "G",
                    "Ġ": "G",
                    "Ģ": "G",
                    "ĝ": "g",
                    "ğ": "g",
                    "ġ": "g",
                    "ģ": "g",
                    "Ĥ": "H",
                    "Ħ": "H",
                    "ĥ": "h",
                    "ħ": "h",
                    "Ĩ": "I",
                    "Ī": "I",
                    "Ĭ": "I",
                    "Į": "I",
                    "İ": "I",
                    "ĩ": "i",
                    "ī": "i",
                    "ĭ": "i",
                    "į": "i",
                    "ı": "i",
                    "Ĵ": "J",
                    "ĵ": "j",
                    "Ķ": "K",
                    "ķ": "k",
                    "ĸ": "k",
                    "Ĺ": "L",
                    "Ļ": "L",
                    "Ľ": "L",
                    "Ŀ": "L",
                    "Ł": "L",
                    "ĺ": "l",
                    "ļ": "l",
                    "ľ": "l",
                    "ŀ": "l",
                    "ł": "l",
                    "Ń": "N",
                    "Ņ": "N",
                    "Ň": "N",
                    "Ŋ": "N",
                    "ń": "n",
                    "ņ": "n",
                    "ň": "n",
                    "ŋ": "n",
                    "Ō": "O",
                    "Ŏ": "O",
                    "Ő": "O",
                    "ō": "o",
                    "ŏ": "o",
                    "ő": "o",
                    "Ŕ": "R",
                    "Ŗ": "R",
                    "Ř": "R",
                    "ŕ": "r",
                    "ŗ": "r",
                    "ř": "r",
                    "Ś": "S",
                    "Ŝ": "S",
                    "Ş": "S",
                    "Š": "S",
                    "ś": "s",
                    "ŝ": "s",
                    "ş": "s",
                    "š": "s",
                    "Ţ": "T",
                    "Ť": "T",
                    "Ŧ": "T",
                    "ţ": "t",
                    "ť": "t",
                    "ŧ": "t",
                    "Ũ": "U",
                    "Ū": "U",
                    "Ŭ": "U",
                    "Ů": "U",
                    "Ű": "U",
                    "Ų": "U",
                    "ũ": "u",
                    "ū": "u",
                    "ŭ": "u",
                    "ů": "u",
                    "ű": "u",
                    "ų": "u",
                    "Ŵ": "W",
                    "ŵ": "w",
                    "Ŷ": "Y",
                    "ŷ": "y",
                    "Ÿ": "Y",
                    "Ź": "Z",
                    "Ż": "Z",
                    "Ž": "Z",
                    "ź": "z",
                    "ż": "z",
                    "ž": "z",
                    "Ĳ": "IJ",
                    "ĳ": "ij",
                    "Œ": "Oe",
                    "œ": "oe",
                    "ŉ": "'n",
                    "ſ": "s"
                }, tr = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
                er = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'"},
                nr = {"\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029"},
                rr = parseFloat, ir = parseInt, or = "object" == typeof t && t && t.Object === Object && t,
                ar = "object" == typeof self && self && self.Object === Object && self,
                sr = or || ar || Function("return this")(), ur = "object" == typeof e && e && !e.nodeType && e,
                cr = ur && "object" == typeof r && r && !r.nodeType && r, lr = cr && cr.exports === ur,
                fr = lr && or.process, pr = function () {
                    try {
                        return fr && fr.binding && fr.binding("util")
                    } catch (t) {
                    }
                }(), dr = pr && pr.isArrayBuffer, hr = pr && pr.isDate, vr = pr && pr.isMap, gr = pr && pr.isRegExp,
                mr = pr && pr.isSet, yr = pr && pr.isTypedArray, br = E("length"), _r = S(Qn), wr = S(tr), xr = S(er),
                Cr = function t(e) {
                    function n(t) {
                        if (cu(t) && !wp(t) && !(t instanceof _)) {
                            if (t instanceof i)return t;
                            if (_l.call(t, "__wrapped__"))return aa(t)
                        }
                        return new i(t)
                    }

                    function r() {
                    }

                    function i(t, e) {
                        this.__wrapped__ = t, this.__actions__ = [], this.__chain__ = !!e, this.__index__ = 0, this.__values__ = it
                    }

                    function _(t) {
                        this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Ft, this.__views__ = []
                    }

                    function S() {
                        var t = new _(this.__wrapped__);
                        return t.__actions__ = Mi(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = Mi(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = Mi(this.__views__), t
                    }

                    function Z() {
                        if (this.__filtered__) {
                            var t = new _(this);
                            t.__dir__ = -1, t.__filtered__ = !0
                        } else t = this.clone(), t.__dir__ *= -1;
                        return t
                    }

                    function et() {
                        var t = this.__wrapped__.value(), e = this.__dir__, n = wp(t), r = e < 0, i = n ? t.length : 0,
                            o = Oo(0, i, this.__views__), a = o.start, s = o.end, u = s - a, c = r ? s : a - 1,
                            l = this.__iteratees__, f = l.length, p = 0, d = Gl(u, this.__takeCount__);
                        if (!n || !r && i == u && d == u)return wi(t, this.__actions__);
                        var h = [];
                        t:for (; u-- && p < d;) {
                            c += e;
                            for (var v = -1, g = t[c]; ++v < f;) {
                                var m = l[v], y = m.iteratee, b = m.type, _ = y(g);
                                if (b == Nt) g = _; else if (!_) {
                                    if (b == jt)continue t;
                                    break t
                                }
                            }
                            h[p++] = g
                        }
                        return h
                    }

                    function nt(t) {
                        var e = -1, n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function Ue() {
                        this.__data__ = sf ? sf(null) : {}, this.size = 0
                    }

                    function en(t) {
                        var e = this.has(t) && delete this.__data__[t];
                        return this.size -= e ? 1 : 0, e
                    }

                    function nn(t) {
                        var e = this.__data__;
                        if (sf) {
                            var n = e[t];
                            return n === ct ? it : n
                        }
                        return _l.call(e, t) ? e[t] : it
                    }

                    function rn(t) {
                        var e = this.__data__;
                        return sf ? e[t] !== it : _l.call(e, t)
                    }

                    function on(t, e) {
                        var n = this.__data__;
                        return this.size += this.has(t) ? 0 : 1, n[t] = sf && e === it ? ct : e, this
                    }

                    function an(t) {
                        var e = -1, n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function sn() {
                        this.__data__ = [], this.size = 0
                    }

                    function un(t) {
                        var e = this.__data__, n = Dn(e, t);
                        if (n < 0)return !1;
                        var r = e.length - 1;
                        return n == r ? e.pop() : Il.call(e, n, 1), --this.size, !0
                    }

                    function cn(t) {
                        var e = this.__data__, n = Dn(e, t);
                        return n < 0 ? it : e[n][1]
                    }

                    function ln(t) {
                        return Dn(this.__data__, t) > -1
                    }

                    function fn(t, e) {
                        var n = this.__data__, r = Dn(n, t);
                        return r < 0 ? (++this.size, n.push([t, e])) : n[r][1] = e, this
                    }

                    function pn(t) {
                        var e = -1, n = null == t ? 0 : t.length;
                        for (this.clear(); ++e < n;) {
                            var r = t[e];
                            this.set(r[0], r[1])
                        }
                    }

                    function dn() {
                        this.size = 0, this.__data__ = {hash: new nt, map: new (nf || an), string: new nt}
                    }

                    function hn(t) {
                        var e = ko(this, t).delete(t);
                        return this.size -= e ? 1 : 0, e
                    }

                    function vn(t) {
                        return ko(this, t).get(t)
                    }

                    function gn(t) {
                        return ko(this, t).has(t)
                    }

                    function mn(t, e) {
                        var n = ko(this, t), r = n.size;
                        return n.set(t, e), this.size += n.size == r ? 0 : 1, this
                    }

                    function yn(t) {
                        var e = -1, n = null == t ? 0 : t.length;
                        for (this.__data__ = new pn; ++e < n;)this.add(t[e])
                    }

                    function bn(t) {
                        return this.__data__.set(t, ct), this
                    }

                    function _n(t) {
                        return this.__data__.has(t)
                    }

                    function wn(t) {
                        var e = this.__data__ = new an(t);
                        this.size = e.size
                    }

                    function xn() {
                        this.__data__ = new an, this.size = 0
                    }

                    function Cn(t) {
                        var e = this.__data__, n = e.delete(t);
                        return this.size = e.size, n
                    }

                    function Tn(t) {
                        return this.__data__.get(t)
                    }

                    function $n(t) {
                        return this.__data__.has(t)
                    }

                    function kn(t, e) {
                        var n = this.__data__;
                        if (n instanceof an) {
                            var r = n.__data__;
                            if (!nf || r.length < at - 1)return r.push([t, e]), this.size = ++n.size, this;
                            n = this.__data__ = new pn(r)
                        }
                        return n.set(t, e), this.size = n.size, this
                    }

                    function An(t, e) {
                        var n = wp(t), r = !n && _p(t), i = !n && !r && Cp(t), o = !n && !r && !i && Ep(t),
                            a = n || r || i || o, s = a ? D(t.length, dl) : [], u = s.length;
                        for (var c in t)!e && !_l.call(t, c) || a && ("length" == c || i && ("offset" == c || "parent" == c) || o && ("buffer" == c || "byteLength" == c || "byteOffset" == c) || Fo(c, u)) || s.push(c);
                        return s
                    }

                    function En(t) {
                        var e = t.length;
                        return e ? t[ni(0, e - 1)] : it
                    }

                    function Sn(t, e) {
                        return na(Mi(t), qn(e, 0, t.length))
                    }

                    function On(t) {
                        return na(Mi(t))
                    }

                    function jn(t, e, n) {
                        (n === it || Js(t[e], n)) && (n !== it || e in t) || Pn(t, e, n)
                    }

                    function Nn(t, e, n) {
                        var r = t[e];
                        _l.call(t, e) && Js(r, n) && (n !== it || e in t) || Pn(t, e, n)
                    }

                    function Dn(t, e) {
                        for (var n = t.length; n--;)if (Js(t[n][0], e))return n;
                        return -1
                    }

                    function In(t, e, n, r) {
                        return bf(t, function (t, i, o) {
                            e(r, t, n(t), o)
                        }), r
                    }

                    function Rn(t, e) {
                        return t && Hi(e, Wu(e), t)
                    }

                    function Ln(t, e) {
                        return t && Hi(e, zu(e), t)
                    }

                    function Pn(t, e, n) {
                        "__proto__" == e && Fl ? Fl(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            value: n,
                            writable: !0
                        }) : t[e] = n
                    }

                    function Fn(t, e) {
                        for (var n = -1, r = e.length, i = al(r), o = null == t; ++n < r;)i[n] = o ? it : Hu(t, e[n]);
                        return i
                    }

                    function qn(t, e, n) {
                        return t === t && (n !== it && (t = t <= n ? t : n), e !== it && (t = t >= e ? t : e)), t
                    }

                    function Mn(t, e, n, r, i, o) {
                        var a, s = e & pt, u = e & dt, l = e & ht;
                        if (n && (a = i ? n(t, r, i, o) : n(t)), a !== it)return a;
                        if (!uu(t))return t;
                        var f = wp(t);
                        if (f) {
                            if (a = Do(t), !s)return Mi(t, a)
                        } else {
                            var p = jf(t), d = p == Jt || p == Gt;
                            if (Cp(t))return Ei(t, s);
                            if (p == te || p == Bt || d && !i) {
                                if (a = u || d ? {} : Io(t), !s)return u ? Ui(t, Ln(a, t)) : Bi(t, Rn(a, t))
                            } else {
                                if (!Yn[p])return i ? t : {};
                                a = Ro(t, p, Mn, s)
                            }
                        }
                        o || (o = new wn);
                        var h = o.get(t);
                        if (h)return h;
                        o.set(t, a);
                        var v = l ? u ? xo : wo : u ? zu : Wu, g = f ? it : v(t);
                        return c(g || t, function (r, i) {
                            g && (i = r, r = t[i]), Nn(a, i, Mn(r, e, n, i, t, o))
                        }), a
                    }

                    function Hn(t) {
                        var e = Wu(t);
                        return function (n) {
                            return Bn(n, t, e)
                        }
                    }

                    function Bn(t, e, n) {
                        var r = n.length;
                        if (null == t)return !r;
                        for (t = fl(t); r--;) {
                            var i = n[r], o = e[i], a = t[i];
                            if (a === it && !(i in t) || !o(a))return !1
                        }
                        return !0
                    }

                    function zn(t, e, n) {
                        if ("function" != typeof t)throw new hl(ut);
                        return If(function () {
                            t.apply(it, n)
                        }, e)
                    }

                    function Vn(t, e, n, r) {
                        var i = -1, o = d, a = !0, s = t.length, u = [], c = e.length;
                        if (!s)return u;
                        n && (e = v(e, R(n))), r ? (o = h, a = !1) : e.length >= at && (o = P, a = !1, e = new yn(e));
                        t:for (; ++i < s;) {
                            var l = t[i], f = null == n ? l : n(l);
                            if (l = r || 0 !== l ? l : 0, a && f === f) {
                                for (var p = c; p--;)if (e[p] === f)continue t;
                                u.push(l)
                            } else o(e, f, r) || u.push(l)
                        }
                        return u
                    }

                    function Xn(t, e) {
                        var n = !0;
                        return bf(t, function (t, r, i) {
                            return n = !!e(t, r, i)
                        }), n
                    }

                    function Kn(t, e, n) {
                        for (var r = -1, i = t.length; ++r < i;) {
                            var o = t[r], a = e(o);
                            if (null != a && (s === it ? a === a && !_u(a) : n(a, s)))var s = a, u = o
                        }
                        return u
                    }

                    function Qn(t, e, n, r) {
                        var i = t.length;
                        for (n = ku(n), n < 0 && (n = -n > i ? 0 : i + n), r = r === it || r > i ? i : ku(r), r < 0 && (r += i), r = n > r ? 0 : Au(r); n < r;)t[n++] = e;
                        return t
                    }

                    function tr(t, e) {
                        var n = [];
                        return bf(t, function (t, r, i) {
                            e(t, r, i) && n.push(t)
                        }), n
                    }

                    function er(t, e, n, r, i) {
                        var o = -1, a = t.length;
                        for (n || (n = Po), i || (i = []); ++o < a;) {
                            var s = t[o];
                            e > 0 && n(s) ? e > 1 ? er(s, e - 1, n, r, i) : g(i, s) : r || (i[i.length] = s)
                        }
                        return i
                    }

                    function nr(t, e) {
                        return t && wf(t, e, Wu)
                    }

                    function or(t, e) {
                        return t && xf(t, e, Wu)
                    }

                    function ar(t, e) {
                        return p(e, function (e) {
                            return ou(t[e])
                        })
                    }

                    function ur(t, e) {
                        e = ki(e, t);
                        for (var n = 0, r = e.length; null != t && n < r;)t = t[ra(e[n++])];
                        return n && n == r ? t : it
                    }

                    function cr(t, e, n) {
                        var r = e(t);
                        return wp(t) ? r : g(r, n(t))
                    }

                    function fr(t) {
                        return null == t ? t === it ? se : Qt : Pl && Pl in fl(t) ? So(t) : Go(t)
                    }

                    function pr(t, e) {
                        return t > e
                    }

                    function br(t, e) {
                        return null != t && _l.call(t, e)
                    }

                    function Cr(t, e) {
                        return null != t && e in fl(t)
                    }

                    function $r(t, e, n) {
                        return t >= Gl(e, n) && t < Jl(e, n)
                    }

                    function kr(t, e, n) {
                        for (var r = n ? h : d, i = t[0].length, o = t.length, a = o, s = al(o), u = 1 / 0,
                                 c = []; a--;) {
                            var l = t[a];
                            a && e && (l = v(l, R(e))), u = Gl(l.length, u), s[a] = !n && (e || i >= 120 && l.length >= 120) ? new yn(a && l) : it
                        }
                        l = t[0];
                        var f = -1, p = s[0];
                        t:for (; ++f < i && c.length < u;) {
                            var g = l[f], m = e ? e(g) : g;
                            if (g = n || 0 !== g ? g : 0, !(p ? P(p, m) : r(c, m, n))) {
                                for (a = o; --a;) {
                                    var y = s[a];
                                    if (!(y ? P(y, m) : r(t[a], m, n)))continue t
                                }
                                p && p.push(m), c.push(g)
                            }
                        }
                        return c
                    }

                    function Ar(t, e, n, r) {
                        return nr(t, function (t, i, o) {
                            e(r, n(t), i, o)
                        }), r
                    }

                    function Er(t, e, n) {
                        e = ki(e, t), t = Yo(t, e);
                        var r = null == t ? t : t[ra($a(e))];
                        return null == r ? it : s(r, t, n)
                    }

                    function Sr(t) {
                        return cu(t) && fr(t) == Bt
                    }

                    function Or(t) {
                        return cu(t) && fr(t) == le
                    }

                    function jr(t) {
                        return cu(t) && fr(t) == Vt
                    }

                    function Nr(t, e, n, r, i) {
                        return t === e || (null == t || null == e || !cu(t) && !cu(e) ? t !== t && e !== e : Dr(t, e, n, r, Nr, i))
                    }

                    function Dr(t, e, n, r, i, o) {
                        var a = wp(t), s = wp(e), u = a ? Ut : jf(t), c = s ? Ut : jf(e);
                        u = u == Bt ? te : u, c = c == Bt ? te : c;
                        var l = u == te, f = c == te, p = u == c;
                        if (p && Cp(t)) {
                            if (!Cp(e))return !1;
                            a = !0, l = !1
                        }
                        if (p && !l)return o || (o = new wn), a || Ep(t) ? mo(t, e, n, r, i, o) : yo(t, e, u, n, r, i, o);
                        if (!(n & vt)) {
                            var d = l && _l.call(t, "__wrapped__"), h = f && _l.call(e, "__wrapped__");
                            if (d || h) {
                                var v = d ? t.value() : t, g = h ? e.value() : e;
                                return o || (o = new wn), i(v, g, n, r, o)
                            }
                        }
                        return !!p && (o || (o = new wn), bo(t, e, n, r, i, o))
                    }

                    function Ir(t) {
                        return cu(t) && jf(t) == Zt
                    }

                    function Rr(t, e, n, r) {
                        var i = n.length, o = i, a = !r;
                        if (null == t)return !o;
                        for (t = fl(t); i--;) {
                            var s = n[i];
                            if (a && s[2] ? s[1] !== t[s[0]] : !(s[0] in t))return !1
                        }
                        for (; ++i < o;) {
                            s = n[i];
                            var u = s[0], c = t[u], l = s[1];
                            if (a && s[2]) {
                                if (c === it && !(u in t))return !1
                            } else {
                                var f = new wn;
                                if (r)var p = r(c, l, u, t, e, f);
                                if (!(p === it ? Nr(l, c, vt | gt, r, f) : p))return !1
                            }
                        }
                        return !0
                    }

                    function Lr(t) {
                        if (!uu(t) || Uo(t))return !1;
                        var e = ou(t) ? kl : Je;
                        return e.test(ia(t))
                    }

                    function Pr(t) {
                        return cu(t) && fr(t) == re
                    }

                    function Fr(t) {
                        return cu(t) && jf(t) == ie
                    }

                    function qr(t) {
                        return cu(t) && su(t.length) && !!Zn[fr(t)]
                    }

                    function Mr(t) {
                        return "function" == typeof t ? t : null == t ? Ic : "object" == typeof t ? wp(t) ? Vr(t[0], t[1]) : zr(t) : Bc(t)
                    }

                    function Hr(t) {
                        if (!Wo(t))return Kl(t);
                        var e = [];
                        for (var n in fl(t))_l.call(t, n) && "constructor" != n && e.push(n);
                        return e
                    }

                    function Br(t) {
                        if (!uu(t))return Jo(t);
                        var e = Wo(t), n = [];
                        for (var r in t)("constructor" != r || !e && _l.call(t, r)) && n.push(r);
                        return n
                    }

                    function Ur(t, e) {
                        return t < e
                    }

                    function Wr(t, e) {
                        var n = -1, r = Gs(t) ? al(t.length) : [];
                        return bf(t, function (t, i, o) {
                            r[++n] = e(t, i, o)
                        }), r
                    }

                    function zr(t) {
                        var e = Ao(t);
                        return 1 == e.length && e[0][2] ? Vo(e[0][0], e[0][1]) : function (n) {
                            return n === t || Rr(n, t, e)
                        }
                    }

                    function Vr(t, e) {
                        return Mo(t) && zo(e) ? Vo(ra(t), e) : function (n) {
                            var r = Hu(n, t);
                            return r === it && r === e ? Uu(n, t) : Nr(e, r, vt | gt)
                        }
                    }

                    function Xr(t, e, n, r, i) {
                        t !== e && wf(e, function (o, a) {
                            if (uu(o)) i || (i = new wn), Kr(t, e, a, n, Xr, r, i); else {
                                var s = r ? r(t[a], o, a + "", t, e, i) : it;
                                s === it && (s = o), jn(t, a, s)
                            }
                        }, zu)
                    }

                    function Kr(t, e, n, r, i, o, a) {
                        var s = t[n], u = e[n], c = a.get(u);
                        if (c)return void jn(t, n, c);
                        var l = o ? o(s, u, n + "", t, e, a) : it, f = l === it;
                        if (f) {
                            var p = wp(u), d = !p && Cp(u), h = !p && !d && Ep(u);
                            l = u, p || d || h ? wp(s) ? l = s : Zs(s) ? l = Mi(s) : d ? (f = !1, l = Ei(u, !0)) : h ? (f = !1, l = Ri(u, !0)) : l = [] : mu(u) || _p(u) ? (l = s, _p(s) ? l = Su(s) : (!uu(s) || r && ou(s)) && (l = Io(u))) : f = !1
                        }
                        f && (a.set(u, l), i(l, u, r, o, a), a.delete(u)), jn(t, n, l)
                    }

                    function Jr(t, e) {
                        var n = t.length;
                        if (n)return e += e < 0 ? n : 0, Fo(e, n) ? t[e] : it
                    }

                    function Gr(t, e, n) {
                        var r = -1;
                        e = v(e.length ? e : [Ic], R($o()));
                        var i = Wr(t, function (t, n, i) {
                            var o = v(e, function (e) {
                                return e(t)
                            });
                            return {criteria: o, index: ++r, value: t}
                        });
                        return j(i, function (t, e) {
                            return Pi(t, e, n)
                        })
                    }

                    function Zr(t, e) {
                        return Yr(t, e, function (e, n) {
                            return Uu(t, n)
                        })
                    }

                    function Yr(t, e, n) {
                        for (var r = -1, i = e.length, o = {}; ++r < i;) {
                            var a = e[r], s = ur(t, a);
                            n(s, a) && ui(o, ki(a, t), s)
                        }
                        return o
                    }

                    function Qr(t) {
                        return function (e) {
                            return ur(e, t)
                        }
                    }

                    function ti(t, e, n, r) {
                        var i = r ? $ : T, o = -1, a = e.length, s = t;
                        for (t === e && (e = Mi(e)), n && (s = v(t, R(n))); ++o < a;)for (var u = 0, c = e[o],
                                                                                              l = n ? n(c) : c; (u = i(s, l, u, r)) > -1;)s !== t && Il.call(s, u, 1), Il.call(t, u, 1);
                        return t
                    }

                    function ei(t, e) {
                        for (var n = t ? e.length : 0, r = n - 1; n--;) {
                            var i = e[n];
                            if (n == r || i !== o) {
                                var o = i;
                                Fo(i) ? Il.call(t, i, 1) : yi(t, i)
                            }
                        }
                        return t
                    }

                    function ni(t, e) {
                        return t + Ul(Ql() * (e - t + 1))
                    }

                    function ri(t, e, n, r) {
                        for (var i = -1, o = Jl(Bl((e - t) / (n || 1)), 0), a = al(o); o--;)a[r ? o : ++i] = t, t += n;
                        return a
                    }

                    function ii(t, e) {
                        var n = "";
                        if (!t || e < 1 || e > Rt)return n;
                        do e % 2 && (n += t), e = Ul(e / 2), e && (t += t); while (e);
                        return n
                    }

                    function oi(t, e) {
                        return Rf(Zo(t, e, Ic), t + "")
                    }

                    function ai(t) {
                        return En(rc(t))
                    }

                    function si(t, e) {
                        var n = rc(t);
                        return na(n, qn(e, 0, n.length))
                    }

                    function ui(t, e, n, r) {
                        if (!uu(t))return t;
                        e = ki(e, t);
                        for (var i = -1, o = e.length, a = o - 1, s = t; null != s && ++i < o;) {
                            var u = ra(e[i]), c = n;
                            if (i != a) {
                                var l = s[u];
                                c = r ? r(l, u, s) : it, c === it && (c = uu(l) ? l : Fo(e[i + 1]) ? [] : {})
                            }
                            Nn(s, u, c), s = s[u]
                        }
                        return t
                    }

                    function ci(t) {
                        return na(rc(t))
                    }

                    function li(t, e, n) {
                        var r = -1, i = t.length;
                        e < 0 && (e = -e > i ? 0 : i + e), n = n > i ? i : n, n < 0 && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
                        for (var o = al(i); ++r < i;)o[r] = t[r + e];
                        return o
                    }

                    function fi(t, e) {
                        var n;
                        return bf(t, function (t, r, i) {
                            return n = e(t, r, i), !n
                        }), !!n
                    }

                    function pi(t, e, n) {
                        var r = 0, i = null == t ? r : t.length;
                        if ("number" == typeof e && e === e && i <= Mt) {
                            for (; r < i;) {
                                var o = r + i >>> 1, a = t[o];
                                null !== a && !_u(a) && (n ? a <= e : a < e) ? r = o + 1 : i = o
                            }
                            return i
                        }
                        return di(t, e, Ic, n)
                    }

                    function di(t, e, n, r) {
                        e = n(e);
                        for (var i = 0, o = null == t ? 0 : t.length, a = e !== e, s = null === e, u = _u(e),
                                 c = e === it; i < o;) {
                            var l = Ul((i + o) / 2), f = n(t[l]), p = f !== it, d = null === f, h = f === f, v = _u(f);
                            if (a)var g = r || h; else g = c ? h && (r || p) : s ? h && p && (r || !d) : u ? h && p && !d && (r || !v) : !d && !v && (r ? f <= e : f < e);
                            g ? i = l + 1 : o = l
                        }
                        return Gl(o, qt)
                    }

                    function hi(t, e) {
                        for (var n = -1, r = t.length, i = 0, o = []; ++n < r;) {
                            var a = t[n], s = e ? e(a) : a;
                            if (!n || !Js(s, u)) {
                                var u = s;
                                o[i++] = 0 === a ? 0 : a
                            }
                        }
                        return o
                    }

                    function vi(t) {
                        return "number" == typeof t ? t : _u(t) ? Pt : +t
                    }

                    function gi(t) {
                        if ("string" == typeof t)return t;
                        if (wp(t))return v(t, gi) + "";
                        if (_u(t))return mf ? mf.call(t) : "";
                        var e = t + "";
                        return "0" == e && 1 / t == -It ? "-0" : e
                    }

                    function mi(t, e, n) {
                        var r = -1, i = d, o = t.length, a = !0, s = [], u = s;
                        if (n) a = !1, i = h; else if (o >= at) {
                            var c = e ? null : Af(t);
                            if (c)return J(c);
                            a = !1, i = P, u = new yn
                        } else u = e ? [] : s;
                        t:for (; ++r < o;) {
                            var l = t[r], f = e ? e(l) : l;
                            if (l = n || 0 !== l ? l : 0, a && f === f) {
                                for (var p = u.length; p--;)if (u[p] === f)continue t;
                                e && u.push(f), s.push(l)
                            } else i(u, f, n) || (u !== s && u.push(f), s.push(l))
                        }
                        return s
                    }

                    function yi(t, e) {
                        return e = ki(e, t), t = Yo(t, e), null == t || delete t[ra($a(e))]
                    }

                    function bi(t, e, n, r) {
                        return ui(t, e, n(ur(t, e)), r)
                    }

                    function _i(t, e, n, r) {
                        for (var i = t.length, o = r ? i : -1; (r ? o-- : ++o < i) && e(t[o], o, t););
                        return n ? li(t, r ? 0 : o, r ? o + 1 : i) : li(t, r ? o + 1 : 0, r ? i : o)
                    }

                    function wi(t, e) {
                        var n = t;
                        return n instanceof _ && (n = n.value()), m(e, function (t, e) {
                            return e.func.apply(e.thisArg, g([t], e.args))
                        }, n)
                    }

                    function xi(t, e, n) {
                        var r = t.length;
                        if (r < 2)return r ? mi(t[0]) : [];
                        for (var i = -1, o = al(r); ++i < r;)for (var a = t[i],
                                                                      s = -1; ++s < r;)s != i && (o[i] = Vn(o[i] || a, t[s], e, n));
                        return mi(er(o, 1), e, n)
                    }

                    function Ci(t, e, n) {
                        for (var r = -1, i = t.length, o = e.length, a = {}; ++r < i;) {
                            var s = r < o ? e[r] : it;
                            n(a, t[r], s)
                        }
                        return a
                    }

                    function Ti(t) {
                        return Zs(t) ? t : []
                    }

                    function $i(t) {
                        return "function" == typeof t ? t : Ic
                    }

                    function ki(t, e) {
                        return wp(t) ? t : Mo(t, e) ? [t] : Lf(ju(t))
                    }

                    function Ai(t, e, n) {
                        var r = t.length;
                        return n = n === it ? r : n, !e && n >= r ? t : li(t, e, n)
                    }

                    function Ei(t, e) {
                        if (e)return t.slice();
                        var n = t.length, r = Ol ? Ol(n) : new t.constructor(n);
                        return t.copy(r), r
                    }

                    function Si(t) {
                        var e = new t.constructor(t.byteLength);
                        return new Sl(e).set(new Sl(t)), e
                    }

                    function Oi(t, e) {
                        var n = e ? Si(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.byteLength)
                    }

                    function ji(t, e, n) {
                        var r = e ? n(V(t), pt) : V(t);
                        return m(r, o, new t.constructor)
                    }

                    function Ni(t) {
                        var e = new t.constructor(t.source, Ve.exec(t));
                        return e.lastIndex = t.lastIndex, e
                    }

                    function Di(t, e, n) {
                        var r = e ? n(J(t), pt) : J(t);
                        return m(r, a, new t.constructor)
                    }

                    function Ii(t) {
                        return gf ? fl(gf.call(t)) : {}
                    }

                    function Ri(t, e) {
                        var n = e ? Si(t.buffer) : t.buffer;
                        return new t.constructor(n, t.byteOffset, t.length)
                    }

                    function Li(t, e) {
                        if (t !== e) {
                            var n = t !== it, r = null === t, i = t === t, o = _u(t), a = e !== it, s = null === e,
                                u = e === e, c = _u(e);
                            if (!s && !c && !o && t > e || o && a && u && !s && !c || r && a && u || !n && u || !i)return 1;
                            if (!r && !o && !c && t < e || c && n && i && !r && !o || s && n && i || !a && i || !u)return -1
                        }
                        return 0
                    }

                    function Pi(t, e, n) {
                        for (var r = -1, i = t.criteria, o = e.criteria, a = i.length, s = n.length; ++r < a;) {
                            var u = Li(i[r], o[r]);
                            if (u) {
                                if (r >= s)return u;
                                var c = n[r];
                                return u * ("desc" == c ? -1 : 1)
                            }
                        }
                        return t.index - e.index
                    }

                    function Fi(t, e, n, r) {
                        for (var i = -1, o = t.length, a = n.length, s = -1, u = e.length, c = Jl(o - a, 0),
                                 l = al(u + c), f = !r; ++s < u;)l[s] = e[s];
                        for (; ++i < a;)(f || i < o) && (l[n[i]] = t[i]);
                        for (; c--;)l[s++] = t[i++];
                        return l
                    }

                    function qi(t, e, n, r) {
                        for (var i = -1, o = t.length, a = -1, s = n.length, u = -1, c = e.length, l = Jl(o - s, 0),
                                 f = al(l + c), p = !r; ++i < l;)f[i] = t[i];
                        for (var d = i; ++u < c;)f[d + u] = e[u];
                        for (; ++a < s;)(p || i < o) && (f[d + n[a]] = t[i++]);
                        return f
                    }

                    function Mi(t, e) {
                        var n = -1, r = t.length;
                        for (e || (e = al(r)); ++n < r;)e[n] = t[n];
                        return e
                    }

                    function Hi(t, e, n, r) {
                        var i = !n;
                        n || (n = {});
                        for (var o = -1, a = e.length; ++o < a;) {
                            var s = e[o], u = r ? r(n[s], t[s], s, n, t) : it;
                            u === it && (u = t[s]), i ? Pn(n, s, u) : Nn(n, s, u)
                        }
                        return n
                    }

                    function Bi(t, e) {
                        return Hi(t, Sf(t), e)
                    }

                    function Ui(t, e) {
                        return Hi(t, Of(t), e)
                    }

                    function Wi(t, e) {
                        return function (n, r) {
                            var i = wp(n) ? u : In, o = e ? e() : {};
                            return i(n, t, $o(r, 2), o)
                        }
                    }

                    function zi(t) {
                        return oi(function (e, n) {
                            var r = -1, i = n.length, o = i > 1 ? n[i - 1] : it, a = i > 2 ? n[2] : it;
                            for (o = t.length > 3 && "function" == typeof o ? (i--, o) : it, a && qo(n[0], n[1], a) && (o = i < 3 ? it : o, i = 1), e = fl(e); ++r < i;) {
                                var s = n[r];
                                s && t(e, s, r, o)
                            }
                            return e
                        })
                    }

                    function Vi(t, e) {
                        return function (n, r) {
                            if (null == n)return n;
                            if (!Gs(n))return t(n, r);
                            for (var i = n.length, o = e ? i : -1,
                                     a = fl(n); (e ? o-- : ++o < i) && r(a[o], o, a) !== !1;);
                            return n
                        }
                    }

                    function Xi(t) {
                        return function (e, n, r) {
                            for (var i = -1, o = fl(e), a = r(e), s = a.length; s--;) {
                                var u = a[t ? s : ++i];
                                if (n(o[u], u, o) === !1)break
                            }
                            return e
                        }
                    }

                    function Ki(t, e, n) {
                        function r() {
                            var e = this && this !== sr && this instanceof r ? o : t;
                            return e.apply(i ? n : this, arguments)
                        }

                        var i = e & mt, o = Zi(t);
                        return r
                    }

                    function Ji(t) {
                        return function (e) {
                            e = ju(e);
                            var n = U(e) ? tt(e) : it, r = n ? n[0] : e.charAt(0),
                                i = n ? Ai(n, 1).join("") : e.slice(1);
                            return r[t]() + i
                        }
                    }

                    function Gi(t) {
                        return function (e) {
                            return m(Sc(cc(e).replace(Un, "")), t, "")
                        }
                    }

                    function Zi(t) {
                        return function () {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(e[0]);
                                case 2:
                                    return new t(e[0], e[1]);
                                case 3:
                                    return new t(e[0], e[1], e[2]);
                                case 4:
                                    return new t(e[0], e[1], e[2], e[3]);
                                case 5:
                                    return new t(e[0], e[1], e[2], e[3], e[4]);
                                case 6:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
                                case 7:
                                    return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
                            }
                            var n = yf(t.prototype), r = t.apply(n, e);
                            return uu(r) ? r : n
                        }
                    }

                    function Yi(t, e, n) {
                        function r() {
                            for (var o = arguments.length, a = al(o), u = o, c = To(r); u--;)a[u] = arguments[u];
                            var l = o < 3 && a[0] !== c && a[o - 1] !== c ? [] : K(a, c);
                            if (o -= l.length, o < n)return co(t, e, eo, r.placeholder, it, a, l, it, it, n - o);
                            var f = this && this !== sr && this instanceof r ? i : t;
                            return s(f, this, a)
                        }

                        var i = Zi(t);
                        return r
                    }

                    function Qi(t) {
                        return function (e, n, r) {
                            var i = fl(e);
                            if (!Gs(e)) {
                                var o = $o(n, 3);
                                e = Wu(e), n = function (t) {
                                    return o(i[t], t, i)
                                }
                            }
                            var a = t(e, n, r);
                            return a > -1 ? i[o ? e[a] : a] : it
                        }
                    }

                    function to(t) {
                        return _o(function (e) {
                            var n = e.length, r = n, o = i.prototype.thru;
                            for (t && e.reverse(); r--;) {
                                var a = e[r];
                                if ("function" != typeof a)throw new hl(ut);
                                if (o && !s && "wrapper" == Co(a))var s = new i([], !0)
                            }
                            for (r = s ? r : n; ++r < n;) {
                                a = e[r];
                                var u = Co(a), c = "wrapper" == u ? Ef(a) : it;
                                s = c && Bo(c[0]) && c[1] == (Tt | _t | xt | $t) && !c[4].length && 1 == c[9] ? s[Co(c[0])].apply(s, c[3]) : 1 == a.length && Bo(a) ? s[u]() : s.thru(a)
                            }
                            return function () {
                                var t = arguments, r = t[0];
                                if (s && 1 == t.length && wp(r))return s.plant(r).value();
                                for (var i = 0, o = n ? e[i].apply(this, t) : r; ++i < n;)o = e[i].call(this, o);
                                return o
                            }
                        })
                    }

                    function eo(t, e, n, r, i, o, a, s, u, c) {
                        function l() {
                            for (var m = arguments.length, y = al(m), b = m; b--;)y[b] = arguments[b];
                            if (h)var _ = To(l), w = M(y, _);
                            if (r && (y = Fi(y, r, i, h)), o && (y = qi(y, o, a, h)), m -= w, h && m < c) {
                                var x = K(y, _);
                                return co(t, e, eo, l.placeholder, n, y, x, s, u, c - m)
                            }
                            var C = p ? n : this, T = d ? C[t] : t;
                            return m = y.length, s ? y = Qo(y, s) : v && m > 1 && y.reverse(), f && u < m && (y.length = u), this && this !== sr && this instanceof l && (T = g || Zi(T)), T.apply(C, y)
                        }

                        var f = e & Tt, p = e & mt, d = e & yt, h = e & (_t | wt), v = e & kt, g = d ? it : Zi(t);
                        return l
                    }

                    function no(t, e) {
                        return function (n, r) {
                            return Ar(n, t, e(r), {})
                        }
                    }

                    function ro(t, e) {
                        return function (n, r) {
                            var i;
                            if (n === it && r === it)return e;
                            if (n !== it && (i = n), r !== it) {
                                if (i === it)return r;
                                "string" == typeof n || "string" == typeof r ? (n = gi(n), r = gi(r)) : (n = vi(n), r = vi(r)), i = t(n, r)
                            }
                            return i
                        }
                    }

                    function io(t) {
                        return _o(function (e) {
                            return e = v(e, R($o())), oi(function (n) {
                                var r = this;
                                return t(e, function (t) {
                                    return s(t, r, n)
                                })
                            })
                        })
                    }

                    function oo(t, e) {
                        e = e === it ? " " : gi(e);
                        var n = e.length;
                        if (n < 2)return n ? ii(e, t) : e;
                        var r = ii(e, Bl(t / Q(e)));
                        return U(e) ? Ai(tt(r), 0, t).join("") : r.slice(0, t)
                    }

                    function ao(t, e, n, r) {
                        function i() {
                            for (var e = -1, u = arguments.length, c = -1, l = r.length, f = al(l + u),
                                     p = this && this !== sr && this instanceof i ? a : t; ++c < l;)f[c] = r[c];
                            for (; u--;)f[c++] = arguments[++e];
                            return s(p, o ? n : this, f)
                        }

                        var o = e & mt, a = Zi(t);
                        return i
                    }

                    function so(t) {
                        return function (e, n, r) {
                            return r && "number" != typeof r && qo(e, n, r) && (n = r = it), e = $u(e), n === it ? (n = e, e = 0) : n = $u(n), r = r === it ? e < n ? 1 : -1 : $u(r), ri(e, n, r, t)
                        }
                    }

                    function uo(t) {
                        return function (e, n) {
                            return "string" == typeof e && "string" == typeof n || (e = Eu(e), n = Eu(n)), t(e, n)
                        }
                    }

                    function co(t, e, n, r, i, o, a, s, u, c) {
                        var l = e & _t, f = l ? a : it, p = l ? it : a, d = l ? o : it, h = l ? it : o;
                        e |= l ? xt : Ct, e &= ~(l ? Ct : xt), e & bt || (e &= ~(mt | yt));
                        var v = [t, e, i, d, f, h, p, s, u, c], g = n.apply(it, v);
                        return Bo(t) && Df(g, v), g.placeholder = r, ta(g, t, e)
                    }

                    function lo(t) {
                        var e = ll[t];
                        return function (t, n) {
                            if (t = Eu(t), n = null == n ? 0 : Gl(ku(n), 292)) {
                                var r = (ju(t) + "e").split("e"), i = e(r[0] + "e" + (+r[1] + n));
                                return r = (ju(i) + "e").split("e"), +(r[0] + "e" + (+r[1] - n))
                            }
                            return e(t)
                        }
                    }

                    function fo(t) {
                        return function (e) {
                            var n = jf(e);
                            return n == Zt ? V(e) : n == ie ? G(e) : I(e, t(e))
                        }
                    }

                    function po(t, e, n, r, i, o, a, s) {
                        var u = e & yt;
                        if (!u && "function" != typeof t)throw new hl(ut);
                        var c = r ? r.length : 0;
                        if (c || (e &= ~(xt | Ct), r = i = it), a = a === it ? a : Jl(ku(a), 0), s = s === it ? s : ku(s), c -= i ? i.length : 0, e & Ct) {
                            var l = r, f = i;
                            r = i = it
                        }
                        var p = u ? it : Ef(t), d = [t, e, n, r, i, l, f, o, a, s];
                        if (p && Ko(d, p), t = d[0], e = d[1], n = d[2], r = d[3], i = d[4], s = d[9] = d[9] === it ? u ? 0 : t.length : Jl(d[9] - c, 0), !s && e & (_t | wt) && (e &= ~(_t | wt)), e && e != mt) h = e == _t || e == wt ? Yi(t, e, s) : e != xt && e != (mt | xt) || i.length ? eo.apply(it, d) : ao(t, e, n, r); else var h = Ki(t, e, n);
                        var v = p ? Cf : Df;
                        return ta(v(h, d), t, e)
                    }

                    function ho(t, e, n, r) {
                        return t === it || Js(t, ml[n]) && !_l.call(r, n) ? e : t
                    }

                    function vo(t, e, n, r, i, o) {
                        return uu(t) && uu(e) && (o.set(e, t), Xr(t, e, it, vo, o), o.delete(e)), t
                    }

                    function go(t) {
                        return mu(t) ? it : t
                    }

                    function mo(t, e, n, r, i, o) {
                        var a = n & vt, s = t.length, u = e.length;
                        if (s != u && !(a && u > s))return !1;
                        var c = o.get(t);
                        if (c && o.get(e))return c == e;
                        var l = -1, f = !0, p = n & gt ? new yn : it;
                        for (o.set(t, e), o.set(e, t); ++l < s;) {
                            var d = t[l], h = e[l];
                            if (r)var v = a ? r(h, d, l, e, t, o) : r(d, h, l, t, e, o);
                            if (v !== it) {
                                if (v)continue;
                                f = !1;
                                break
                            }
                            if (p) {
                                if (!b(e, function (t, e) {
                                        if (!P(p, e) && (d === t || i(d, t, n, r, o)))return p.push(e)
                                    })) {
                                    f = !1;
                                    break
                                }
                            } else if (d !== h && !i(d, h, n, r, o)) {
                                f = !1;
                                break
                            }
                        }
                        return o.delete(t), o.delete(e), f
                    }

                    function yo(t, e, n, r, i, o, a) {
                        switch (n) {
                            case fe:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)return !1;
                                t = t.buffer, e = e.buffer;
                            case le:
                                return !(t.byteLength != e.byteLength || !o(new Sl(t), new Sl(e)));
                            case zt:
                            case Vt:
                            case Yt:
                                return Js(+t, +e);
                            case Kt:
                                return t.name == e.name && t.message == e.message;
                            case re:
                            case oe:
                                return t == e + "";
                            case Zt:
                                var s = V;
                            case ie:
                                var u = r & vt;
                                if (s || (s = J), t.size != e.size && !u)return !1;
                                var c = a.get(t);
                                if (c)return c == e;
                                r |= gt, a.set(t, e);
                                var l = mo(s(t), s(e), r, i, o, a);
                                return a.delete(t), l;
                            case ae:
                                if (gf)return gf.call(t) == gf.call(e)
                        }
                        return !1
                    }

                    function bo(t, e, n, r, i, o) {
                        var a = n & vt, s = wo(t), u = s.length, c = wo(e), l = c.length;
                        if (u != l && !a)return !1;
                        for (var f = u; f--;) {
                            var p = s[f];
                            if (!(a ? p in e : _l.call(e, p)))return !1
                        }
                        var d = o.get(t);
                        if (d && o.get(e))return d == e;
                        var h = !0;
                        o.set(t, e), o.set(e, t);
                        for (var v = a; ++f < u;) {
                            p = s[f];
                            var g = t[p], m = e[p];
                            if (r)var y = a ? r(m, g, p, e, t, o) : r(g, m, p, t, e, o);
                            if (!(y === it ? g === m || i(g, m, n, r, o) : y)) {
                                h = !1;
                                break
                            }
                            v || (v = "constructor" == p)
                        }
                        if (h && !v) {
                            var b = t.constructor, _ = e.constructor;
                            b != _ && "constructor" in t && "constructor" in e && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (h = !1)
                        }
                        return o.delete(t), o.delete(e), h
                    }

                    function _o(t) {
                        return Rf(Zo(t, it, ma), t + "")
                    }

                    function wo(t) {
                        return cr(t, Wu, Sf)
                    }

                    function xo(t) {
                        return cr(t, zu, Of)
                    }

                    function Co(t) {
                        for (var e = t.name + "", n = cf[e], r = _l.call(cf, e) ? n.length : 0; r--;) {
                            var i = n[r], o = i.func;
                            if (null == o || o == t)return i.name
                        }
                        return e
                    }

                    function To(t) {
                        var e = _l.call(n, "placeholder") ? n : t;
                        return e.placeholder
                    }

                    function $o() {
                        var t = n.iteratee || Rc;
                        return t = t === Rc ? Mr : t, arguments.length ? t(arguments[0], arguments[1]) : t
                    }

                    function ko(t, e) {
                        var n = t.__data__;
                        return Ho(e) ? n["string" == typeof e ? "string" : "hash"] : n.map
                    }

                    function Ao(t) {
                        for (var e = Wu(t), n = e.length; n--;) {
                            var r = e[n], i = t[r];
                            e[n] = [r, i, zo(i)]
                        }
                        return e
                    }

                    function Eo(t, e) {
                        var n = B(t, e);
                        return Lr(n) ? n : it
                    }

                    function So(t) {
                        var e = _l.call(t, Pl), n = t[Pl];
                        try {
                            t[Pl] = it;
                            var r = !0
                        } catch (t) {
                        }
                        var i = Cl.call(t);
                        return r && (e ? t[Pl] = n : delete t[Pl]), i
                    }

                    function Oo(t, e, n) {
                        for (var r = -1, i = n.length; ++r < i;) {
                            var o = n[r], a = o.size;
                            switch (o.type) {
                                case"drop":
                                    t += a;
                                    break;
                                case"dropRight":
                                    e -= a;
                                    break;
                                case"take":
                                    e = Gl(e, t + a);
                                    break;
                                case"takeRight":
                                    t = Jl(t, e - a)
                            }
                        }
                        return {start: t, end: e}
                    }

                    function jo(t) {
                        var e = t.match(He);
                        return e ? e[1].split(Be) : []
                    }

                    function No(t, e, n) {
                        e = ki(e, t);
                        for (var r = -1, i = e.length, o = !1; ++r < i;) {
                            var a = ra(e[r]);
                            if (!(o = null != t && n(t, a)))break;
                            t = t[a]
                        }
                        return o || ++r != i ? o : (i = null == t ? 0 : t.length, !!i && su(i) && Fo(a, i) && (wp(t) || _p(t)))
                    }

                    function Do(t) {
                        var e = t.length, n = t.constructor(e);
                        return e && "string" == typeof t[0] && _l.call(t, "index") && (n.index = t.index, n.input = t.input), n
                    }

                    function Io(t) {
                        return "function" != typeof t.constructor || Wo(t) ? {} : yf(jl(t))
                    }

                    function Ro(t, e, n, r) {
                        var i = t.constructor;
                        switch (e) {
                            case le:
                                return Si(t);
                            case zt:
                            case Vt:
                                return new i(+t);
                            case fe:
                                return Oi(t, r);
                            case pe:
                            case de:
                            case he:
                            case ve:
                            case ge:
                            case me:
                            case ye:
                            case be:
                            case _e:
                                return Ri(t, r);
                            case Zt:
                                return ji(t, r, n);
                            case Yt:
                            case oe:
                                return new i(t);
                            case re:
                                return Ni(t);
                            case ie:
                                return Di(t, r, n);
                            case ae:
                                return Ii(t)
                        }
                    }

                    function Lo(t, e) {
                        var n = e.length;
                        if (!n)return t;
                        var r = n - 1;
                        return e[r] = (n > 1 ? "& " : "") + e[r], e = e.join(n > 2 ? ", " : " "), t.replace(Me, "{\n/* [wrapped with " + e + "] */\n")
                    }

                    function Po(t) {
                        return wp(t) || _p(t) || !!(Rl && t && t[Rl])
                    }

                    function Fo(t, e) {
                        return e = null == e ? Rt : e, !!e && ("number" == typeof t || Ze.test(t)) && t > -1 && t % 1 == 0 && t < e
                    }

                    function qo(t, e, n) {
                        if (!uu(n))return !1;
                        var r = typeof e;
                        return !!("number" == r ? Gs(n) && Fo(e, n.length) : "string" == r && e in n) && Js(n[e], t)
                    }

                    function Mo(t, e) {
                        if (wp(t))return !1;
                        var n = typeof t;
                        return !("number" != n && "symbol" != n && "boolean" != n && null != t && !_u(t)) || (Ne.test(t) || !je.test(t) || null != e && t in fl(e))
                    }

                    function Ho(t) {
                        var e = typeof t;
                        return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                    }

                    function Bo(t) {
                        var e = Co(t), r = n[e];
                        if ("function" != typeof r || !(e in _.prototype))return !1;
                        if (t === r)return !0;
                        var i = Ef(r);
                        return !!i && t === i[0]
                    }

                    function Uo(t) {
                        return !!xl && xl in t
                    }

                    function Wo(t) {
                        var e = t && t.constructor, n = "function" == typeof e && e.prototype || ml;
                        return t === n
                    }

                    function zo(t) {
                        return t === t && !uu(t)
                    }

                    function Vo(t, e) {
                        return function (n) {
                            return null != n && (n[t] === e && (e !== it || t in fl(n)))
                        }
                    }

                    function Xo(t) {
                        var e = Rs(t, function (t) {
                            return n.size === lt && n.clear(), t
                        }), n = e.cache;
                        return e
                    }

                    function Ko(t, e) {
                        var n = t[1], r = e[1], i = n | r, o = i < (mt | yt | Tt),
                            a = r == Tt && n == _t || r == Tt && n == $t && t[7].length <= e[8] || r == (Tt | $t) && e[7].length <= e[8] && n == _t;
                        if (!o && !a)return t;
                        r & mt && (t[2] = e[2], i |= n & mt ? 0 : bt);
                        var s = e[3];
                        if (s) {
                            var u = t[3];
                            t[3] = u ? Fi(u, s, e[4]) : s, t[4] = u ? K(t[3], ft) : e[4]
                        }
                        return s = e[5], s && (u = t[5], t[5] = u ? qi(u, s, e[6]) : s, t[6] = u ? K(t[5], ft) : e[6]), s = e[7], s && (t[7] = s), r & Tt && (t[8] = null == t[8] ? e[8] : Gl(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
                    }

                    function Jo(t) {
                        var e = [];
                        if (null != t)for (var n in fl(t))e.push(n);
                        return e
                    }

                    function Go(t) {
                        return Cl.call(t)
                    }

                    function Zo(t, e, n) {
                        return e = Jl(e === it ? t.length - 1 : e, 0), function () {
                            for (var r = arguments, i = -1, o = Jl(r.length - e, 0),
                                     a = al(o); ++i < o;)a[i] = r[e + i];
                            i = -1;
                            for (var u = al(e + 1); ++i < e;)u[i] = r[i];
                            return u[e] = n(a), s(t, this, u)
                        }
                    }

                    function Yo(t, e) {
                        return e.length < 2 ? t : ur(t, li(e, 0, -1))
                    }

                    function Qo(t, e) {
                        for (var n = t.length, r = Gl(e.length, n), i = Mi(t); r--;) {
                            var o = e[r];
                            t[r] = Fo(o, n) ? i[o] : it
                        }
                        return t
                    }

                    function ta(t, e, n) {
                        var r = e + "";
                        return Rf(t, Lo(r, oa(jo(r), n)))
                    }

                    function ea(t) {
                        var e = 0, n = 0;
                        return function () {
                            var r = Zl(), i = Ot - (r - n);
                            if (n = r, i > 0) {
                                if (++e >= St)return arguments[0]
                            } else e = 0;
                            return t.apply(it, arguments)
                        }
                    }

                    function na(t, e) {
                        var n = -1, r = t.length, i = r - 1;
                        for (e = e === it ? r : e; ++n < e;) {
                            var o = ni(n, i), a = t[o];
                            t[o] = t[n], t[n] = a
                        }
                        return t.length = e, t
                    }

                    function ra(t) {
                        if ("string" == typeof t || _u(t))return t;
                        var e = t + "";
                        return "0" == e && 1 / t == -It ? "-0" : e
                    }

                    function ia(t) {
                        if (null != t) {
                            try {
                                return bl.call(t)
                            } catch (t) {
                            }
                            try {
                                return t + ""
                            } catch (t) {
                            }
                        }
                        return ""
                    }

                    function oa(t, e) {
                        return c(Ht, function (n) {
                            var r = "_." + n[0];
                            e & n[1] && !d(t, r) && t.push(r)
                        }), t.sort()
                    }

                    function aa(t) {
                        if (t instanceof _)return t.clone();
                        var e = new i(t.__wrapped__, t.__chain__);
                        return e.__actions__ = Mi(t.__actions__), e.__index__ = t.__index__, e.__values__ = t.__values__, e
                    }

                    function sa(t, e, n) {
                        e = (n ? qo(t, e, n) : e === it) ? 1 : Jl(ku(e), 0);
                        var r = null == t ? 0 : t.length;
                        if (!r || e < 1)return [];
                        for (var i = 0, o = 0, a = al(Bl(r / e)); i < r;)a[o++] = li(t, i, i += e);
                        return a
                    }

                    function ua(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = 0, i = []; ++e < n;) {
                            var o = t[e];
                            o && (i[r++] = o)
                        }
                        return i
                    }

                    function ca() {
                        var t = arguments.length;
                        if (!t)return [];
                        for (var e = al(t - 1), n = arguments[0], r = t; r--;)e[r - 1] = arguments[r];
                        return g(wp(n) ? Mi(n) : [n], er(e, 1))
                    }

                    function la(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e = n || e === it ? 1 : ku(e), li(t, e < 0 ? 0 : e, r)) : []
                    }

                    function fa(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e = n || e === it ? 1 : ku(e), e = r - e, li(t, 0, e < 0 ? 0 : e)) : []
                    }

                    function pa(t, e) {
                        return t && t.length ? _i(t, $o(e, 3), !0, !0) : []
                    }

                    function da(t, e) {
                        return t && t.length ? _i(t, $o(e, 3), !0) : []
                    }

                    function ha(t, e, n, r) {
                        var i = null == t ? 0 : t.length;
                        return i ? (n && "number" != typeof n && qo(t, e, n) && (n = 0, r = i), Qn(t, e, n, r)) : []
                    }

                    function va(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)return -1;
                        var i = null == n ? 0 : ku(n);
                        return i < 0 && (i = Jl(r + i, 0)), C(t, $o(e, 3), i)
                    }

                    function ga(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)return -1;
                        var i = r - 1;
                        return n !== it && (i = ku(n), i = n < 0 ? Jl(r + i, 0) : Gl(i, r - 1)), C(t, $o(e, 3), i, !0)
                    }

                    function ma(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? er(t, 1) : []
                    }

                    function ya(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? er(t, It) : []
                    }

                    function ba(t, e) {
                        var n = null == t ? 0 : t.length;
                        return n ? (e = e === it ? 1 : ku(e), er(t, e)) : []
                    }

                    function _a(t) {
                        for (var e = -1, n = null == t ? 0 : t.length, r = {}; ++e < n;) {
                            var i = t[e];
                            r[i[0]] = i[1]
                        }
                        return r
                    }

                    function wa(t) {
                        return t && t.length ? t[0] : it
                    }

                    function xa(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)return -1;
                        var i = null == n ? 0 : ku(n);
                        return i < 0 && (i = Jl(r + i, 0)), T(t, e, i)
                    }

                    function Ca(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? li(t, 0, -1) : []
                    }

                    function Ta(t, e) {
                        return null == t ? "" : Xl.call(t, e)
                    }

                    function $a(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? t[e - 1] : it
                    }

                    function ka(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        if (!r)return -1;
                        var i = r;
                        return n !== it && (i = ku(n), i = i < 0 ? Jl(r + i, 0) : Gl(i, r - 1)), e === e ? Y(t, e, i) : C(t, k, i, !0)
                    }

                    function Aa(t, e) {
                        return t && t.length ? Jr(t, ku(e)) : it
                    }

                    function Ea(t, e) {
                        return t && t.length && e && e.length ? ti(t, e) : t
                    }

                    function Sa(t, e, n) {
                        return t && t.length && e && e.length ? ti(t, e, $o(n, 2)) : t
                    }

                    function Oa(t, e, n) {
                        return t && t.length && e && e.length ? ti(t, e, it, n) : t
                    }

                    function ja(t, e) {
                        var n = [];
                        if (!t || !t.length)return n;
                        var r = -1, i = [], o = t.length;
                        for (e = $o(e, 3); ++r < o;) {
                            var a = t[r];
                            e(a, r, t) && (n.push(a), i.push(r))
                        }
                        return ei(t, i), n
                    }

                    function Na(t) {
                        return null == t ? t : tf.call(t)
                    }

                    function Da(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (n && "number" != typeof n && qo(t, e, n) ? (e = 0, n = r) : (e = null == e ? 0 : ku(e), n = n === it ? r : ku(n)), li(t, e, n)) : []
                    }

                    function Ia(t, e) {
                        return pi(t, e)
                    }

                    function Ra(t, e, n) {
                        return di(t, e, $o(n, 2))
                    }

                    function La(t, e) {
                        var n = null == t ? 0 : t.length;
                        if (n) {
                            var r = pi(t, e);
                            if (r < n && Js(t[r], e))return r
                        }
                        return -1
                    }

                    function Pa(t, e) {
                        return pi(t, e, !0)
                    }

                    function Fa(t, e, n) {
                        return di(t, e, $o(n, 2), !0)
                    }

                    function qa(t, e) {
                        var n = null == t ? 0 : t.length;
                        if (n) {
                            var r = pi(t, e, !0) - 1;
                            if (Js(t[r], e))return r
                        }
                        return -1
                    }

                    function Ma(t) {
                        return t && t.length ? hi(t) : []
                    }

                    function Ha(t, e) {
                        return t && t.length ? hi(t, $o(e, 2)) : []
                    }

                    function Ba(t) {
                        var e = null == t ? 0 : t.length;
                        return e ? li(t, 1, e) : []
                    }

                    function Ua(t, e, n) {
                        return t && t.length ? (e = n || e === it ? 1 : ku(e), li(t, 0, e < 0 ? 0 : e)) : []
                    }

                    function Wa(t, e, n) {
                        var r = null == t ? 0 : t.length;
                        return r ? (e = n || e === it ? 1 : ku(e), e = r - e, li(t, e < 0 ? 0 : e, r)) : []
                    }

                    function za(t, e) {
                        return t && t.length ? _i(t, $o(e, 3), !1, !0) : []
                    }

                    function Va(t, e) {
                        return t && t.length ? _i(t, $o(e, 3)) : []
                    }

                    function Xa(t) {
                        return t && t.length ? mi(t) : []
                    }

                    function Ka(t, e) {
                        return t && t.length ? mi(t, $o(e, 2)) : []
                    }

                    function Ja(t, e) {
                        return e = "function" == typeof e ? e : it, t && t.length ? mi(t, it, e) : []
                    }

                    function Ga(t) {
                        if (!t || !t.length)return [];
                        var e = 0;
                        return t = p(t, function (t) {
                            if (Zs(t))return e = Jl(t.length, e), !0
                        }), D(e, function (e) {
                            return v(t, E(e))
                        })
                    }

                    function Za(t, e) {
                        if (!t || !t.length)return [];
                        var n = Ga(t);
                        return null == e ? n : v(n, function (t) {
                            return s(e, it, t)
                        })
                    }

                    function Ya(t, e) {
                        return Ci(t || [], e || [], Nn)
                    }

                    function Qa(t, e) {
                        return Ci(t || [], e || [], ui)
                    }

                    function ts(t) {
                        var e = n(t);
                        return e.__chain__ = !0, e
                    }

                    function es(t, e) {
                        return e(t), t
                    }

                    function ns(t, e) {
                        return e(t)
                    }

                    function rs() {
                        return ts(this)
                    }

                    function is() {
                        return new i(this.value(), this.__chain__)
                    }

                    function os() {
                        this.__values__ === it && (this.__values__ = Tu(this.value()));
                        var t = this.__index__ >= this.__values__.length,
                            e = t ? it : this.__values__[this.__index__++];
                        return {done: t, value: e}
                    }

                    function as() {
                        return this
                    }

                    function ss(t) {
                        for (var e, n = this; n instanceof r;) {
                            var i = aa(n);
                            i.__index__ = 0, i.__values__ = it, e ? o.__wrapped__ = i : e = i;
                            var o = i;
                            n = n.__wrapped__
                        }
                        return o.__wrapped__ = t, e
                    }

                    function us() {
                        var t = this.__wrapped__;
                        if (t instanceof _) {
                            var e = t;
                            return this.__actions__.length && (e = new _(this)), e = e.reverse(), e.__actions__.push({
                                func: ns,
                                args: [Na],
                                thisArg: it
                            }), new i(e, this.__chain__)
                        }
                        return this.thru(Na)
                    }

                    function cs() {
                        return wi(this.__wrapped__, this.__actions__)
                    }

                    function ls(t, e, n) {
                        var r = wp(t) ? f : Xn;
                        return n && qo(t, e, n) && (e = it), r(t, $o(e, 3))
                    }

                    function fs(t, e) {
                        var n = wp(t) ? p : tr;
                        return n(t, $o(e, 3))
                    }

                    function ps(t, e) {
                        return er(ys(t, e), 1)
                    }

                    function ds(t, e) {
                        return er(ys(t, e), It)
                    }

                    function hs(t, e, n) {
                        return n = n === it ? 1 : ku(n), er(ys(t, e), n)
                    }

                    function vs(t, e) {
                        var n = wp(t) ? c : bf;
                        return n(t, $o(e, 3))
                    }

                    function gs(t, e) {
                        var n = wp(t) ? l : _f;
                        return n(t, $o(e, 3))
                    }

                    function ms(t, e, n, r) {
                        t = Gs(t) ? t : rc(t), n = n && !r ? ku(n) : 0;
                        var i = t.length;
                        return n < 0 && (n = Jl(i + n, 0)), bu(t) ? n <= i && t.indexOf(e, n) > -1 : !!i && T(t, e, n) > -1
                    }

                    function ys(t, e) {
                        var n = wp(t) ? v : Wr;
                        return n(t, $o(e, 3))
                    }

                    function bs(t, e, n, r) {
                        return null == t ? [] : (wp(e) || (e = null == e ? [] : [e]), n = r ? it : n, wp(n) || (n = null == n ? [] : [n]), Gr(t, e, n))
                    }

                    function _s(t, e, n) {
                        var r = wp(t) ? m : O, i = arguments.length < 3;
                        return r(t, $o(e, 4), n, i, bf)
                    }

                    function ws(t, e, n) {
                        var r = wp(t) ? y : O, i = arguments.length < 3;
                        return r(t, $o(e, 4), n, i, _f)
                    }

                    function xs(t, e) {
                        var n = wp(t) ? p : tr;
                        return n(t, Ls($o(e, 3)))
                    }

                    function Cs(t) {
                        var e = wp(t) ? En : ai;
                        return e(t)
                    }

                    function Ts(t, e, n) {
                        e = (n ? qo(t, e, n) : e === it) ? 1 : ku(e);
                        var r = wp(t) ? Sn : si;
                        return r(t, e)
                    }

                    function $s(t) {
                        var e = wp(t) ? On : ci;
                        return e(t)
                    }

                    function ks(t) {
                        if (null == t)return 0;
                        if (Gs(t))return bu(t) ? Q(t) : t.length;
                        var e = jf(t);
                        return e == Zt || e == ie ? t.size : Hr(t).length
                    }

                    function As(t, e, n) {
                        var r = wp(t) ? b : fi;
                        return n && qo(t, e, n) && (e = it), r(t, $o(e, 3))
                    }

                    function Es(t, e) {
                        if ("function" != typeof e)throw new hl(ut);
                        return t = ku(t), function () {
                            if (--t < 1)return e.apply(this, arguments)
                        }
                    }

                    function Ss(t, e, n) {
                        return e = n ? it : e, e = t && null == e ? t.length : e, po(t, Tt, it, it, it, it, e)
                    }

                    function Os(t, e) {
                        var n;
                        if ("function" != typeof e)throw new hl(ut);
                        return t = ku(t), function () {
                            return --t > 0 && (n = e.apply(this, arguments)), t <= 1 && (e = it), n
                        }
                    }

                    function js(t, e, n) {
                        e = n ? it : e;
                        var r = po(t, _t, it, it, it, it, it, e);
                        return r.placeholder = js.placeholder, r
                    }

                    function Ns(t, e, n) {
                        e = n ? it : e;
                        var r = po(t, wt, it, it, it, it, it, e);
                        return r.placeholder = Ns.placeholder, r
                    }

                    function Ds(t, e, n) {
                        function r(e) {
                            var n = p, r = d;
                            return p = d = it, y = e, v = t.apply(r, n)
                        }

                        function i(t) {
                            return y = t, g = If(s, e), b ? r(t) : v
                        }

                        function o(t) {
                            var n = t - m, r = t - y, i = e - n;
                            return _ ? Gl(i, h - r) : i
                        }

                        function a(t) {
                            var n = t - m, r = t - y;
                            return m === it || n >= e || n < 0 || _ && r >= h
                        }

                        function s() {
                            var t = cp();
                            return a(t) ? u(t) : void(g = If(s, o(t)))
                        }

                        function u(t) {
                            return g = it, w && p ? r(t) : (p = d = it, v)
                        }

                        function c() {
                            g !== it && kf(g), y = 0, p = m = d = g = it
                        }

                        function l() {
                            return g === it ? v : u(cp())
                        }

                        function f() {
                            var t = cp(), n = a(t);
                            if (p = arguments, d = this, m = t, n) {
                                if (g === it)return i(m);
                                if (_)return g = If(s, e), r(m)
                            }
                            return g === it && (g = If(s, e)), v
                        }

                        var p, d, h, v, g, m, y = 0, b = !1, _ = !1, w = !0;
                        if ("function" != typeof t)throw new hl(ut);
                        return e = Eu(e) || 0, uu(n) && (b = !!n.leading, _ = "maxWait" in n, h = _ ? Jl(Eu(n.maxWait) || 0, e) : h, w = "trailing" in n ? !!n.trailing : w), f.cancel = c, f.flush = l, f
                    }

                    function Is(t) {
                        return po(t, kt)
                    }

                    function Rs(t, e) {
                        if ("function" != typeof t || null != e && "function" != typeof e)throw new hl(ut);
                        var n = function () {
                            var r = arguments, i = e ? e.apply(this, r) : r[0], o = n.cache;
                            if (o.has(i))return o.get(i);
                            var a = t.apply(this, r);
                            return n.cache = o.set(i, a) || o, a
                        };
                        return n.cache = new (Rs.Cache || pn), n
                    }

                    function Ls(t) {
                        if ("function" != typeof t)throw new hl(ut);
                        return function () {
                            var e = arguments;
                            switch (e.length) {
                                case 0:
                                    return !t.call(this);
                                case 1:
                                    return !t.call(this, e[0]);
                                case 2:
                                    return !t.call(this, e[0], e[1]);
                                case 3:
                                    return !t.call(this, e[0], e[1], e[2])
                            }
                            return !t.apply(this, e)
                        }
                    }

                    function Ps(t) {
                        return Os(2, t)
                    }

                    function Fs(t, e) {
                        if ("function" != typeof t)throw new hl(ut);
                        return e = e === it ? e : ku(e), oi(t, e)
                    }

                    function qs(t, e) {
                        if ("function" != typeof t)throw new hl(ut);
                        return e = null == e ? 0 : Jl(ku(e), 0), oi(function (n) {
                            var r = n[e], i = Ai(n, 0, e);
                            return r && g(i, r), s(t, this, i)
                        })
                    }

                    function Ms(t, e, n) {
                        var r = !0, i = !0;
                        if ("function" != typeof t)throw new hl(ut);
                        return uu(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Ds(t, e, {
                            leading: r,
                            maxWait: e,
                            trailing: i
                        })
                    }

                    function Hs(t) {
                        return Ss(t, 1)
                    }

                    function Bs(t, e) {
                        return vp($i(e), t)
                    }

                    function Us() {
                        if (!arguments.length)return [];
                        var t = arguments[0];
                        return wp(t) ? t : [t]
                    }

                    function Ws(t) {
                        return Mn(t, ht)
                    }

                    function zs(t, e) {
                        return e = "function" == typeof e ? e : it, Mn(t, ht, e)
                    }

                    function Vs(t) {
                        return Mn(t, pt | ht)
                    }

                    function Xs(t, e) {
                        return e = "function" == typeof e ? e : it, Mn(t, pt | ht, e)
                    }

                    function Ks(t, e) {
                        return null == e || Bn(t, e, Wu(e))
                    }

                    function Js(t, e) {
                        return t === e || t !== t && e !== e
                    }

                    function Gs(t) {
                        return null != t && su(t.length) && !ou(t)
                    }

                    function Zs(t) {
                        return cu(t) && Gs(t)
                    }

                    function Ys(t) {
                        return t === !0 || t === !1 || cu(t) && fr(t) == zt
                    }

                    function Qs(t) {
                        return cu(t) && 1 === t.nodeType && !mu(t)
                    }

                    function tu(t) {
                        if (null == t)return !0;
                        if (Gs(t) && (wp(t) || "string" == typeof t || "function" == typeof t.splice || Cp(t) || Ep(t) || _p(t)))return !t.length;
                        var e = jf(t);
                        if (e == Zt || e == ie)return !t.size;
                        if (Wo(t))return !Hr(t).length;
                        for (var n in t)if (_l.call(t, n))return !1;
                        return !0
                    }

                    function eu(t, e) {
                        return Nr(t, e)
                    }

                    function nu(t, e, n) {
                        n = "function" == typeof n ? n : it;
                        var r = n ? n(t, e) : it;
                        return r === it ? Nr(t, e, it, n) : !!r
                    }

                    function ru(t) {
                        if (!cu(t))return !1;
                        var e = fr(t);
                        return e == Kt || e == Xt || "string" == typeof t.message && "string" == typeof t.name && !mu(t)
                    }

                    function iu(t) {
                        return "number" == typeof t && Vl(t)
                    }

                    function ou(t) {
                        if (!uu(t))return !1;
                        var e = fr(t);
                        return e == Jt || e == Gt || e == Wt || e == ne
                    }

                    function au(t) {
                        return "number" == typeof t && t == ku(t)
                    }

                    function su(t) {
                        return "number" == typeof t && t > -1 && t % 1 == 0 && t <= Rt
                    }

                    function uu(t) {
                        var e = typeof t;
                        return null != t && ("object" == e || "function" == e)
                    }

                    function cu(t) {
                        return null != t && "object" == typeof t
                    }

                    function lu(t, e) {
                        return t === e || Rr(t, e, Ao(e))
                    }

                    function fu(t, e, n) {
                        return n = "function" == typeof n ? n : it, Rr(t, e, Ao(e), n)
                    }

                    function pu(t) {
                        return gu(t) && t != +t
                    }

                    function du(t) {
                        if (Nf(t))throw new ul(st);
                        return Lr(t)
                    }

                    function hu(t) {
                        return null === t
                    }

                    function vu(t) {
                        return null == t
                    }

                    function gu(t) {
                        return "number" == typeof t || cu(t) && fr(t) == Yt
                    }

                    function mu(t) {
                        if (!cu(t) || fr(t) != te)return !1;
                        var e = jl(t);
                        if (null === e)return !0;
                        var n = _l.call(e, "constructor") && e.constructor;
                        return "function" == typeof n && n instanceof n && bl.call(n) == Tl
                    }

                    function yu(t) {
                        return au(t) && t >= -Rt && t <= Rt
                    }

                    function bu(t) {
                        return "string" == typeof t || !wp(t) && cu(t) && fr(t) == oe
                    }

                    function _u(t) {
                        return "symbol" == typeof t || cu(t) && fr(t) == ae
                    }

                    function wu(t) {
                        return t === it
                    }

                    function xu(t) {
                        return cu(t) && jf(t) == ue
                    }

                    function Cu(t) {
                        return cu(t) && fr(t) == ce
                    }

                    function Tu(t) {
                        if (!t)return [];
                        if (Gs(t))return bu(t) ? tt(t) : Mi(t);
                        if (Ll && t[Ll])return z(t[Ll]());
                        var e = jf(t), n = e == Zt ? V : e == ie ? J : rc;
                        return n(t)
                    }

                    function $u(t) {
                        if (!t)return 0 === t ? t : 0;
                        if (t = Eu(t), t === It || t === -It) {
                            var e = t < 0 ? -1 : 1;
                            return e * Lt
                        }
                        return t === t ? t : 0
                    }

                    function ku(t) {
                        var e = $u(t), n = e % 1;
                        return e === e ? n ? e - n : e : 0
                    }

                    function Au(t) {
                        return t ? qn(ku(t), 0, Ft) : 0
                    }

                    function Eu(t) {
                        if ("number" == typeof t)return t;
                        if (_u(t))return Pt;
                        if (uu(t)) {
                            var e = "function" == typeof t.valueOf ? t.valueOf() : t;
                            t = uu(e) ? e + "" : e
                        }
                        if ("string" != typeof t)return 0 === t ? t : +t;
                        t = t.replace(Pe, "");
                        var n = Ke.test(t);
                        return n || Ge.test(t) ? ir(t.slice(2), n ? 2 : 8) : Xe.test(t) ? Pt : +t
                    }

                    function Su(t) {
                        return Hi(t, zu(t))
                    }

                    function Ou(t) {
                        return t ? qn(ku(t), -Rt, Rt) : 0 === t ? t : 0
                    }

                    function ju(t) {
                        return null == t ? "" : gi(t)
                    }

                    function Nu(t, e) {
                        var n = yf(t);
                        return null == e ? n : Rn(n, e)
                    }

                    function Du(t, e) {
                        return x(t, $o(e, 3), nr)
                    }

                    function Iu(t, e) {
                        return x(t, $o(e, 3), or)
                    }

                    function Ru(t, e) {
                        return null == t ? t : wf(t, $o(e, 3), zu)
                    }

                    function Lu(t, e) {
                        return null == t ? t : xf(t, $o(e, 3), zu)
                    }

                    function Pu(t, e) {
                        return t && nr(t, $o(e, 3))
                    }

                    function Fu(t, e) {
                        return t && or(t, $o(e, 3))
                    }

                    function qu(t) {
                        return null == t ? [] : ar(t, Wu(t))
                    }

                    function Mu(t) {
                        return null == t ? [] : ar(t, zu(t))
                    }

                    function Hu(t, e, n) {
                        var r = null == t ? it : ur(t, e);
                        return r === it ? n : r
                    }

                    function Bu(t, e) {
                        return null != t && No(t, e, br)
                    }

                    function Uu(t, e) {
                        return null != t && No(t, e, Cr)
                    }

                    function Wu(t) {
                        return Gs(t) ? An(t) : Hr(t)
                    }

                    function zu(t) {
                        return Gs(t) ? An(t, !0) : Br(t)
                    }

                    function Vu(t, e) {
                        var n = {};
                        return e = $o(e, 3), nr(t, function (t, r, i) {
                            Pn(n, e(t, r, i), t)
                        }), n
                    }

                    function Xu(t, e) {
                        var n = {};
                        return e = $o(e, 3), nr(t, function (t, r, i) {
                            Pn(n, r, e(t, r, i))
                        }), n
                    }

                    function Ku(t, e) {
                        return Ju(t, Ls($o(e)))
                    }

                    function Ju(t, e) {
                        if (null == t)return {};
                        var n = v(xo(t), function (t) {
                            return [t]
                        });
                        return e = $o(e), Yr(t, n, function (t, n) {
                            return e(t, n[0])
                        })
                    }

                    function Gu(t, e, n) {
                        e = ki(e, t);
                        var r = -1, i = e.length;
                        for (i || (i = 1, t = it); ++r < i;) {
                            var o = null == t ? it : t[ra(e[r])];
                            o === it && (r = i, o = n), t = ou(o) ? o.call(t) : o
                        }
                        return t
                    }

                    function Zu(t, e, n) {
                        return null == t ? t : ui(t, e, n)
                    }

                    function Yu(t, e, n, r) {
                        return r = "function" == typeof r ? r : it, null == t ? t : ui(t, e, n, r)
                    }

                    function Qu(t, e, n) {
                        var r = wp(t), i = r || Cp(t) || Ep(t);
                        if (e = $o(e, 4), null == n) {
                            var o = t && t.constructor;
                            n = i ? r ? new o : [] : uu(t) && ou(o) ? yf(jl(t)) : {}
                        }
                        return (i ? c : nr)(t, function (t, r, i) {
                            return e(n, t, r, i)
                        }), n
                    }

                    function tc(t, e) {
                        return null == t || yi(t, e)
                    }

                    function ec(t, e, n) {
                        return null == t ? t : bi(t, e, $i(n))
                    }

                    function nc(t, e, n, r) {
                        return r = "function" == typeof r ? r : it, null == t ? t : bi(t, e, $i(n), r)
                    }

                    function rc(t) {
                        return null == t ? [] : L(t, Wu(t))
                    }

                    function ic(t) {
                        return null == t ? [] : L(t, zu(t))
                    }

                    function oc(t, e, n) {
                        return n === it && (n = e, e = it), n !== it && (n = Eu(n), n = n === n ? n : 0), e !== it && (e = Eu(e), e = e === e ? e : 0), qn(Eu(t), e, n)
                    }

                    function ac(t, e, n) {
                        return e = $u(e), n === it ? (n = e, e = 0) : n = $u(n), t = Eu(t), $r(t, e, n)
                    }

                    function sc(t, e, n) {
                        if (n && "boolean" != typeof n && qo(t, e, n) && (e = n = it), n === it && ("boolean" == typeof e ? (n = e, e = it) : "boolean" == typeof t && (n = t, t = it)), t === it && e === it ? (t = 0, e = 1) : (t = $u(t), e === it ? (e = t, t = 0) : e = $u(e)), t > e) {
                            var r = t;
                            t = e, e = r
                        }
                        if (n || t % 1 || e % 1) {
                            var i = Ql();
                            return Gl(t + i * (e - t + rr("1e-" + ((i + "").length - 1))), e)
                        }
                        return ni(t, e)
                    }

                    function uc(t) {
                        return td(ju(t).toLowerCase())
                    }

                    function cc(t) {
                        return t = ju(t), t && t.replace(Ye, _r).replace(Wn, "")
                    }

                    function lc(t, e, n) {
                        t = ju(t), e = gi(e);
                        var r = t.length;
                        n = n === it ? r : qn(ku(n), 0, r);
                        var i = n;
                        return n -= e.length, n >= 0 && t.slice(n, i) == e
                    }

                    function fc(t) {
                        return t = ju(t), t && Ae.test(t) ? t.replace($e, wr) : t
                    }

                    function pc(t) {
                        return t = ju(t), t && Le.test(t) ? t.replace(Re, "\\$&") : t
                    }

                    function dc(t, e, n) {
                        t = ju(t), e = ku(e);
                        var r = e ? Q(t) : 0;
                        if (!e || r >= e)return t;
                        var i = (e - r) / 2;
                        return oo(Ul(i), n) + t + oo(Bl(i), n)
                    }

                    function hc(t, e, n) {
                        t = ju(t), e = ku(e);
                        var r = e ? Q(t) : 0;
                        return e && r < e ? t + oo(e - r, n) : t
                    }

                    function vc(t, e, n) {
                        t = ju(t), e = ku(e);
                        var r = e ? Q(t) : 0;
                        return e && r < e ? oo(e - r, n) + t : t
                    }

                    function gc(t, e, n) {
                        return n || null == e ? e = 0 : e && (e = +e), Yl(ju(t).replace(Fe, ""), e || 0)
                    }

                    function mc(t, e, n) {
                        return e = (n ? qo(t, e, n) : e === it) ? 1 : ku(e), ii(ju(t), e)
                    }

                    function yc() {
                        var t = arguments, e = ju(t[0]);
                        return t.length < 3 ? e : e.replace(t[1], t[2])
                    }

                    function bc(t, e, n) {
                        return n && "number" != typeof n && qo(t, e, n) && (e = n = it), (n = n === it ? Ft : n >>> 0) ? (t = ju(t), t && ("string" == typeof e || null != e && !kp(e)) && (e = gi(e), !e && U(t)) ? Ai(tt(t), 0, n) : t.split(e, n)) : []
                    }

                    function _c(t, e, n) {
                        return t = ju(t), n = null == n ? 0 : qn(ku(n), 0, t.length), e = gi(e), t.slice(n, n + e.length) == e
                    }

                    function wc(t, e, r) {
                        var i = n.templateSettings;
                        r && qo(t, e, r) && (e = it), t = ju(t), e = Dp({}, e, i, ho);
                        var o, a, s = Dp({}, e.imports, i.imports, ho), u = Wu(s), c = L(s, u), l = 0,
                            f = e.interpolate || Qe, p = "__p += '",
                            d = pl((e.escape || Qe).source + "|" + f.source + "|" + (f === Oe ? ze : Qe).source + "|" + (e.evaluate || Qe).source + "|$", "g"),
                            h = "//# sourceURL=" + ("sourceURL" in e ? e.sourceURL : "lodash.templateSources[" + ++Gn + "]") + "\n";
                        t.replace(d, function (e, n, r, i, s, u) {
                            return r || (r = i), p += t.slice(l, u).replace(tn, H), n && (o = !0, p += "' +\n__e(" + n + ") +\n'"), s && (a = !0, p += "';\n" + s + ";\n__p += '"), r && (p += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), l = u + e.length, e
                        }), p += "';\n";
                        var v = e.variable;
                        v || (p = "with (obj) {\n" + p + "\n}\n"), p = (a ? p.replace(we, "") : p).replace(xe, "$1").replace(Ce, "$1;"), p = "function(" + (v || "obj") + ") {\n" + (v ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (a ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + p + "return __p\n}";
                        var g = ed(function () {
                            return cl(u, h + "return " + p).apply(it, c)
                        });
                        if (g.source = p, ru(g))throw g;
                        return g
                    }

                    function xc(t) {
                        return ju(t).toLowerCase()
                    }

                    function Cc(t) {
                        return ju(t).toUpperCase()
                    }

                    function Tc(t, e, n) {
                        if (t = ju(t), t && (n || e === it))return t.replace(Pe, "");
                        if (!t || !(e = gi(e)))return t;
                        var r = tt(t), i = tt(e), o = F(r, i), a = q(r, i) + 1;
                        return Ai(r, o, a).join("")
                    }

                    function $c(t, e, n) {
                        if (t = ju(t), t && (n || e === it))return t.replace(qe, "");
                        if (!t || !(e = gi(e)))return t;
                        var r = tt(t), i = q(r, tt(e)) + 1;
                        return Ai(r, 0, i).join("")
                    }

                    function kc(t, e, n) {
                        if (t = ju(t), t && (n || e === it))return t.replace(Fe, "");
                        if (!t || !(e = gi(e)))return t;
                        var r = tt(t), i = F(r, tt(e));
                        return Ai(r, i).join("")
                    }

                    function Ac(t, e) {
                        var n = At, r = Et;
                        if (uu(e)) {
                            var i = "separator" in e ? e.separator : i;
                            n = "length" in e ? ku(e.length) : n, r = "omission" in e ? gi(e.omission) : r
                        }
                        t = ju(t);
                        var o = t.length;
                        if (U(t)) {
                            var a = tt(t);
                            o = a.length
                        }
                        if (n >= o)return t;
                        var s = n - Q(r);
                        if (s < 1)return r;
                        var u = a ? Ai(a, 0, s).join("") : t.slice(0, s);
                        if (i === it)return u + r;
                        if (a && (s += u.length - s), kp(i)) {
                            if (t.slice(s).search(i)) {
                                var c, l = u;
                                for (i.global || (i = pl(i.source, ju(Ve.exec(i)) + "g")), i.lastIndex = 0; c = i.exec(l);)var f = c.index;
                                u = u.slice(0, f === it ? s : f)
                            }
                        } else if (t.indexOf(gi(i), s) != s) {
                            var p = u.lastIndexOf(i);
                            p > -1 && (u = u.slice(0, p))
                        }
                        return u + r
                    }

                    function Ec(t) {
                        return t = ju(t), t && ke.test(t) ? t.replace(Te, xr) : t
                    }

                    function Sc(t, e, n) {
                        return t = ju(t), e = n ? it : e, e === it ? W(t) ? rt(t) : w(t) : t.match(e) || []
                    }

                    function Oc(t) {
                        var e = null == t ? 0 : t.length, n = $o();
                        return t = e ? v(t, function (t) {
                            if ("function" != typeof t[1])throw new hl(ut);
                            return [n(t[0]), t[1]]
                        }) : [], oi(function (n) {
                            for (var r = -1; ++r < e;) {
                                var i = t[r];
                                if (s(i[0], this, n))return s(i[1], this, n)
                            }
                        })
                    }

                    function jc(t) {
                        return Hn(Mn(t, pt))
                    }

                    function Nc(t) {
                        return function () {
                            return t
                        }
                    }

                    function Dc(t, e) {
                        return null == t || t !== t ? e : t
                    }

                    function Ic(t) {
                        return t
                    }

                    function Rc(t) {
                        return Mr("function" == typeof t ? t : Mn(t, pt))
                    }

                    function Lc(t) {
                        return zr(Mn(t, pt))
                    }

                    function Pc(t, e) {
                        return Vr(t, Mn(e, pt))
                    }

                    function Fc(t, e, n) {
                        var r = Wu(e), i = ar(e, r);
                        null != n || uu(e) && (i.length || !r.length) || (n = e, e = t, t = this, i = ar(e, Wu(e)));
                        var o = !(uu(n) && "chain" in n && !n.chain), a = ou(t);
                        return c(i, function (n) {
                            var r = e[n];
                            t[n] = r, a && (t.prototype[n] = function () {
                                var e = this.__chain__;
                                if (o || e) {
                                    var n = t(this.__wrapped__), i = n.__actions__ = Mi(this.__actions__);
                                    return i.push({func: r, args: arguments, thisArg: t}), n.__chain__ = e, n
                                }
                                return r.apply(t, g([this.value()], arguments))
                            })
                        }), t
                    }

                    function qc() {
                        return sr._ === this && (sr._ = $l), this
                    }

                    function Mc() {
                    }

                    function Hc(t) {
                        return t = ku(t), oi(function (e) {
                            return Jr(e, t)
                        })
                    }

                    function Bc(t) {
                        return Mo(t) ? E(ra(t)) : Qr(t)
                    }

                    function Uc(t) {
                        return function (e) {
                            return null == t ? it : ur(t, e)
                        }
                    }

                    function Wc() {
                        return []
                    }

                    function zc() {
                        return !1
                    }

                    function Vc() {
                        return {}
                    }

                    function Xc() {
                        return ""
                    }

                    function Kc() {
                        return !0
                    }

                    function Jc(t, e) {
                        if (t = ku(t), t < 1 || t > Rt)return [];
                        var n = Ft, r = Gl(t, Ft);
                        e = $o(e), t -= Ft;
                        for (var i = D(r, e); ++n < t;)e(n);
                        return i
                    }

                    function Gc(t) {
                        return wp(t) ? v(t, ra) : _u(t) ? [t] : Mi(Lf(ju(t)))
                    }

                    function Zc(t) {
                        var e = ++wl;
                        return ju(t) + e
                    }

                    function Yc(t) {
                        return t && t.length ? Kn(t, Ic, pr) : it
                    }

                    function Qc(t, e) {
                        return t && t.length ? Kn(t, $o(e, 2), pr) : it
                    }

                    function tl(t) {
                        return A(t, Ic)
                    }

                    function el(t, e) {
                        return A(t, $o(e, 2))
                    }

                    function nl(t) {
                        return t && t.length ? Kn(t, Ic, Ur) : it
                    }

                    function rl(t, e) {
                        return t && t.length ? Kn(t, $o(e, 2), Ur) : it
                    }

                    function il(t) {
                        return t && t.length ? N(t, Ic) : 0
                    }

                    function ol(t, e) {
                        return t && t.length ? N(t, $o(e, 2)) : 0
                    }

                    e = null == e ? sr : Tr.defaults(sr.Object(), e, Tr.pick(sr, Jn));
                    var al = e.Array, sl = e.Date, ul = e.Error, cl = e.Function, ll = e.Math, fl = e.Object,
                        pl = e.RegExp, dl = e.String, hl = e.TypeError, vl = al.prototype, gl = cl.prototype,
                        ml = fl.prototype, yl = e["__core-js_shared__"], bl = gl.toString, _l = ml.hasOwnProperty,
                        wl = 0, xl = function () {
                            var t = /[^.]+$/.exec(yl && yl.keys && yl.keys.IE_PROTO || "");
                            return t ? "Symbol(src)_1." + t : ""
                        }(), Cl = ml.toString, Tl = bl.call(fl), $l = sr._,
                        kl = pl("^" + bl.call(_l).replace(Re, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                        Al = lr ? e.Buffer : it, El = e.Symbol, Sl = e.Uint8Array, Ol = Al ? Al.allocUnsafe : it,
                        jl = X(fl.getPrototypeOf, fl), Nl = fl.create, Dl = ml.propertyIsEnumerable, Il = vl.splice,
                        Rl = El ? El.isConcatSpreadable : it, Ll = El ? El.iterator : it, Pl = El ? El.toStringTag : it,
                        Fl = function () {
                            try {
                                var t = Eo(fl, "defineProperty");
                                return t({}, "", {}), t
                            } catch (t) {
                            }
                        }(), ql = e.clearTimeout !== sr.clearTimeout && e.clearTimeout,
                        Ml = sl && sl.now !== sr.Date.now && sl.now,
                        Hl = e.setTimeout !== sr.setTimeout && e.setTimeout, Bl = ll.ceil, Ul = ll.floor,
                        Wl = fl.getOwnPropertySymbols, zl = Al ? Al.isBuffer : it, Vl = e.isFinite, Xl = vl.join,
                        Kl = X(fl.keys, fl), Jl = ll.max, Gl = ll.min, Zl = sl.now, Yl = e.parseInt, Ql = ll.random,
                        tf = vl.reverse, ef = Eo(e, "DataView"), nf = Eo(e, "Map"), rf = Eo(e, "Promise"),
                        of = Eo(e, "Set"), af = Eo(e, "WeakMap"), sf = Eo(fl, "create"), uf = af && new af, cf = {},
                        lf = ia(ef), ff = ia(nf), pf = ia(rf), df = ia(of), hf = ia(af), vf = El ? El.prototype : it,
                        gf = vf ? vf.valueOf : it, mf = vf ? vf.toString : it, yf = function () {
                            function t() {
                            }

                            return function (e) {
                                if (!uu(e))return {};
                                if (Nl)return Nl(e);
                                t.prototype = e;
                                var n = new t;
                                return t.prototype = it, n
                            }
                        }();
                    n.templateSettings = {
                        escape: Ee,
                        evaluate: Se,
                        interpolate: Oe,
                        variable: "",
                        imports: {_: n}
                    }, n.prototype = r.prototype, n.prototype.constructor = n, i.prototype = yf(r.prototype), i.prototype.constructor = i, _.prototype = yf(r.prototype), _.prototype.constructor = _, nt.prototype.clear = Ue, nt.prototype.delete = en, nt.prototype.get = nn, nt.prototype.has = rn, nt.prototype.set = on, an.prototype.clear = sn, an.prototype.delete = un, an.prototype.get = cn, an.prototype.has = ln, an.prototype.set = fn, pn.prototype.clear = dn, pn.prototype.delete = hn, pn.prototype.get = vn, pn.prototype.has = gn, pn.prototype.set = mn, yn.prototype.add = yn.prototype.push = bn, yn.prototype.has = _n, wn.prototype.clear = xn, wn.prototype.delete = Cn, wn.prototype.get = Tn, wn.prototype.has = $n, wn.prototype.set = kn;
                    var bf = Vi(nr), _f = Vi(or, !0), wf = Xi(), xf = Xi(!0), Cf = uf ? function (t, e) {
                        return uf.set(t, e), t
                    } : Ic, Tf = Fl ? function (t, e) {
                        return Fl(t, "toString", {configurable: !0, enumerable: !1, value: Nc(e), writable: !0})
                    } : Ic, $f = oi, kf = ql || function (t) {
                            return sr.clearTimeout(t)
                        }, Af = of && 1 / J(new of([, -0]))[1] == It ? function (t) {
                        return new of(t)
                    } : Mc, Ef = uf ? function (t) {
                        return uf.get(t)
                    } : Mc, Sf = Wl ? function (t) {
                        return null == t ? [] : (t = fl(t), p(Wl(t), function (e) {
                            return Dl.call(t, e)
                        }))
                    } : Wc, Of = Wl ? function (t) {
                        for (var e = []; t;)g(e, Sf(t)), t = jl(t);
                        return e
                    } : Wc, jf = fr;
                    (ef && jf(new ef(new ArrayBuffer(1))) != fe || nf && jf(new nf) != Zt || rf && jf(rf.resolve()) != ee || of && jf(new of) != ie || af && jf(new af) != ue) && (jf = function (t) {
                        var e = fr(t), n = e == te ? t.constructor : it, r = n ? ia(n) : "";
                        if (r)switch (r) {
                            case lf:
                                return fe;
                            case ff:
                                return Zt;
                            case pf:
                                return ee;
                            case df:
                                return ie;
                            case hf:
                                return ue
                        }
                        return e
                    });
                    var Nf = yl ? ou : zc, Df = ea(Cf), If = Hl || function (t, e) {
                            return sr.setTimeout(t, e)
                        }, Rf = ea(Tf), Lf = Xo(function (t) {
                        var e = [];
                        return De.test(t) && e.push(""), t.replace(Ie, function (t, n, r, i) {
                            e.push(r ? i.replace(We, "$1") : n || t)
                        }), e
                    }), Pf = oi(function (t, e) {
                        return Zs(t) ? Vn(t, er(e, 1, Zs, !0)) : [];
                    }), Ff = oi(function (t, e) {
                        var n = $a(e);
                        return Zs(n) && (n = it), Zs(t) ? Vn(t, er(e, 1, Zs, !0), $o(n, 2)) : []
                    }), qf = oi(function (t, e) {
                        var n = $a(e);
                        return Zs(n) && (n = it), Zs(t) ? Vn(t, er(e, 1, Zs, !0), it, n) : []
                    }), Mf = oi(function (t) {
                        var e = v(t, Ti);
                        return e.length && e[0] === t[0] ? kr(e) : []
                    }), Hf = oi(function (t) {
                        var e = $a(t), n = v(t, Ti);
                        return e === $a(n) ? e = it : n.pop(), n.length && n[0] === t[0] ? kr(n, $o(e, 2)) : []
                    }), Bf = oi(function (t) {
                        var e = $a(t), n = v(t, Ti);
                        return e = "function" == typeof e ? e : it, e && n.pop(), n.length && n[0] === t[0] ? kr(n, it, e) : []
                    }), Uf = oi(Ea), Wf = _o(function (t, e) {
                        var n = null == t ? 0 : t.length, r = Fn(t, e);
                        return ei(t, v(e, function (t) {
                            return Fo(t, n) ? +t : t
                        }).sort(Li)), r
                    }), zf = oi(function (t) {
                        return mi(er(t, 1, Zs, !0))
                    }), Vf = oi(function (t) {
                        var e = $a(t);
                        return Zs(e) && (e = it), mi(er(t, 1, Zs, !0), $o(e, 2))
                    }), Xf = oi(function (t) {
                        var e = $a(t);
                        return e = "function" == typeof e ? e : it, mi(er(t, 1, Zs, !0), it, e)
                    }), Kf = oi(function (t, e) {
                        return Zs(t) ? Vn(t, e) : []
                    }), Jf = oi(function (t) {
                        return xi(p(t, Zs))
                    }), Gf = oi(function (t) {
                        var e = $a(t);
                        return Zs(e) && (e = it), xi(p(t, Zs), $o(e, 2))
                    }), Zf = oi(function (t) {
                        var e = $a(t);
                        return e = "function" == typeof e ? e : it, xi(p(t, Zs), it, e)
                    }), Yf = oi(Ga), Qf = oi(function (t) {
                        var e = t.length, n = e > 1 ? t[e - 1] : it;
                        return n = "function" == typeof n ? (t.pop(), n) : it, Za(t, n)
                    }), tp = _o(function (t) {
                        var e = t.length, n = e ? t[0] : 0, r = this.__wrapped__, o = function (e) {
                            return Fn(e, t)
                        };
                        return !(e > 1 || this.__actions__.length) && r instanceof _ && Fo(n) ? (r = r.slice(n, +n + (e ? 1 : 0)), r.__actions__.push({
                            func: ns,
                            args: [o],
                            thisArg: it
                        }), new i(r, this.__chain__).thru(function (t) {
                            return e && !t.length && t.push(it), t
                        })) : this.thru(o)
                    }), ep = Wi(function (t, e, n) {
                        _l.call(t, n) ? ++t[n] : Pn(t, n, 1)
                    }), np = Qi(va), rp = Qi(ga), ip = Wi(function (t, e, n) {
                        _l.call(t, n) ? t[n].push(e) : Pn(t, n, [e])
                    }), op = oi(function (t, e, n) {
                        var r = -1, i = "function" == typeof e, o = Gs(t) ? al(t.length) : [];
                        return bf(t, function (t) {
                            o[++r] = i ? s(e, t, n) : Er(t, e, n)
                        }), o
                    }), ap = Wi(function (t, e, n) {
                        Pn(t, n, e)
                    }), sp = Wi(function (t, e, n) {
                        t[n ? 0 : 1].push(e)
                    }, function () {
                        return [[], []]
                    }), up = oi(function (t, e) {
                        if (null == t)return [];
                        var n = e.length;
                        return n > 1 && qo(t, e[0], e[1]) ? e = [] : n > 2 && qo(e[0], e[1], e[2]) && (e = [e[0]]), Gr(t, er(e, 1), [])
                    }), cp = Ml || function () {
                            return sr.Date.now()
                        }, lp = oi(function (t, e, n) {
                        var r = mt;
                        if (n.length) {
                            var i = K(n, To(lp));
                            r |= xt
                        }
                        return po(t, r, e, n, i)
                    }), fp = oi(function (t, e, n) {
                        var r = mt | yt;
                        if (n.length) {
                            var i = K(n, To(fp));
                            r |= xt
                        }
                        return po(e, r, t, n, i)
                    }), pp = oi(function (t, e) {
                        return zn(t, 1, e)
                    }), dp = oi(function (t, e, n) {
                        return zn(t, Eu(e) || 0, n)
                    });
                    Rs.Cache = pn;
                    var hp = $f(function (t, e) {
                            e = 1 == e.length && wp(e[0]) ? v(e[0], R($o())) : v(er(e, 1), R($o()));
                            var n = e.length;
                            return oi(function (r) {
                                for (var i = -1, o = Gl(r.length, n); ++i < o;)r[i] = e[i].call(this, r[i]);
                                return s(t, this, r)
                            })
                        }), vp = oi(function (t, e) {
                            var n = K(e, To(vp));
                            return po(t, xt, it, e, n)
                        }), gp = oi(function (t, e) {
                            var n = K(e, To(gp));
                            return po(t, Ct, it, e, n)
                        }), mp = _o(function (t, e) {
                            return po(t, $t, it, it, it, e)
                        }), yp = uo(pr), bp = uo(function (t, e) {
                            return t >= e
                        }), _p = Sr(function () {
                            return arguments
                        }()) ? Sr : function (t) {
                            return cu(t) && _l.call(t, "callee") && !Dl.call(t, "callee")
                        }, wp = al.isArray, xp = dr ? R(dr) : Or, Cp = zl || zc, Tp = hr ? R(hr) : jr, $p = vr ? R(vr) : Ir,
                        kp = gr ? R(gr) : Pr, Ap = mr ? R(mr) : Fr, Ep = yr ? R(yr) : qr, Sp = uo(Ur),
                        Op = uo(function (t, e) {
                            return t <= e
                        }), jp = zi(function (t, e) {
                            if (Wo(e) || Gs(e))return void Hi(e, Wu(e), t);
                            for (var n in e)_l.call(e, n) && Nn(t, n, e[n])
                        }), Np = zi(function (t, e) {
                            Hi(e, zu(e), t)
                        }), Dp = zi(function (t, e, n, r) {
                            Hi(e, zu(e), t, r)
                        }), Ip = zi(function (t, e, n, r) {
                            Hi(e, Wu(e), t, r)
                        }), Rp = _o(Fn), Lp = oi(function (t) {
                            return t.push(it, ho), s(Dp, it, t)
                        }), Pp = oi(function (t) {
                            return t.push(it, vo), s(Bp, it, t)
                        }), Fp = no(function (t, e, n) {
                            t[e] = n
                        }, Nc(Ic)), qp = no(function (t, e, n) {
                            _l.call(t, e) ? t[e].push(n) : t[e] = [n]
                        }, $o), Mp = oi(Er), Hp = zi(function (t, e, n) {
                            Xr(t, e, n)
                        }), Bp = zi(function (t, e, n, r) {
                            Xr(t, e, n, r)
                        }), Up = _o(function (t, e) {
                            var n = {};
                            if (null == t)return n;
                            var r = !1;
                            e = v(e, function (e) {
                                return e = ki(e, t), r || (r = e.length > 1), e
                            }), Hi(t, xo(t), n), r && (n = Mn(n, pt | dt | ht, go));
                            for (var i = e.length; i--;)yi(n, e[i]);
                            return n
                        }), Wp = _o(function (t, e) {
                            return null == t ? {} : Zr(t, e)
                        }), zp = fo(Wu), Vp = fo(zu), Xp = Gi(function (t, e, n) {
                            return e = e.toLowerCase(), t + (n ? uc(e) : e)
                        }), Kp = Gi(function (t, e, n) {
                            return t + (n ? "-" : "") + e.toLowerCase()
                        }), Jp = Gi(function (t, e, n) {
                            return t + (n ? " " : "") + e.toLowerCase()
                        }), Gp = Ji("toLowerCase"), Zp = Gi(function (t, e, n) {
                            return t + (n ? "_" : "") + e.toLowerCase()
                        }), Yp = Gi(function (t, e, n) {
                            return t + (n ? " " : "") + td(e)
                        }), Qp = Gi(function (t, e, n) {
                            return t + (n ? " " : "") + e.toUpperCase()
                        }), td = Ji("toUpperCase"), ed = oi(function (t, e) {
                            try {
                                return s(t, it, e)
                            } catch (t) {
                                return ru(t) ? t : new ul(t)
                            }
                        }), nd = _o(function (t, e) {
                            return c(e, function (e) {
                                e = ra(e), Pn(t, e, lp(t[e], t))
                            }), t
                        }), rd = to(), id = to(!0), od = oi(function (t, e) {
                            return function (n) {
                                return Er(n, t, e)
                            }
                        }), ad = oi(function (t, e) {
                            return function (n) {
                                return Er(t, n, e)
                            }
                        }), sd = io(v), ud = io(f), cd = io(b), ld = so(), fd = so(!0), pd = ro(function (t, e) {
                            return t + e
                        }, 0), dd = lo("ceil"), hd = ro(function (t, e) {
                            return t / e
                        }, 1), vd = lo("floor"), gd = ro(function (t, e) {
                            return t * e
                        }, 1), md = lo("round"), yd = ro(function (t, e) {
                            return t - e
                        }, 0);
                    return n.after = Es, n.ary = Ss, n.assign = jp, n.assignIn = Np, n.assignInWith = Dp, n.assignWith = Ip, n.at = Rp, n.before = Os, n.bind = lp, n.bindAll = nd, n.bindKey = fp, n.castArray = Us, n.chain = ts, n.chunk = sa, n.compact = ua, n.concat = ca, n.cond = Oc, n.conforms = jc, n.constant = Nc, n.countBy = ep, n.create = Nu, n.curry = js, n.curryRight = Ns, n.debounce = Ds, n.defaults = Lp, n.defaultsDeep = Pp, n.defer = pp, n.delay = dp, n.difference = Pf, n.differenceBy = Ff, n.differenceWith = qf, n.drop = la, n.dropRight = fa, n.dropRightWhile = pa, n.dropWhile = da, n.fill = ha, n.filter = fs, n.flatMap = ps, n.flatMapDeep = ds, n.flatMapDepth = hs, n.flatten = ma, n.flattenDeep = ya, n.flattenDepth = ba, n.flip = Is, n.flow = rd, n.flowRight = id, n.fromPairs = _a, n.functions = qu, n.functionsIn = Mu, n.groupBy = ip, n.initial = Ca, n.intersection = Mf, n.intersectionBy = Hf, n.intersectionWith = Bf, n.invert = Fp, n.invertBy = qp, n.invokeMap = op, n.iteratee = Rc, n.keyBy = ap, n.keys = Wu, n.keysIn = zu, n.map = ys, n.mapKeys = Vu, n.mapValues = Xu, n.matches = Lc, n.matchesProperty = Pc, n.memoize = Rs, n.merge = Hp, n.mergeWith = Bp, n.method = od, n.methodOf = ad, n.mixin = Fc, n.negate = Ls, n.nthArg = Hc, n.omit = Up, n.omitBy = Ku, n.once = Ps, n.orderBy = bs, n.over = sd, n.overArgs = hp, n.overEvery = ud, n.overSome = cd, n.partial = vp, n.partialRight = gp, n.partition = sp, n.pick = Wp, n.pickBy = Ju, n.property = Bc, n.propertyOf = Uc, n.pull = Uf, n.pullAll = Ea, n.pullAllBy = Sa, n.pullAllWith = Oa, n.pullAt = Wf, n.range = ld, n.rangeRight = fd, n.rearg = mp, n.reject = xs, n.remove = ja, n.rest = Fs, n.reverse = Na,n.sampleSize = Ts,n.set = Zu,n.setWith = Yu,n.shuffle = $s,n.slice = Da,n.sortBy = up,n.sortedUniq = Ma,n.sortedUniqBy = Ha,n.split = bc,n.spread = qs,n.tail = Ba,n.take = Ua,n.takeRight = Wa,n.takeRightWhile = za,n.takeWhile = Va,n.tap = es,n.throttle = Ms,n.thru = ns,n.toArray = Tu,n.toPairs = zp,n.toPairsIn = Vp,n.toPath = Gc,n.toPlainObject = Su,n.transform = Qu,n.unary = Hs,n.union = zf,n.unionBy = Vf,n.unionWith = Xf,n.uniq = Xa,n.uniqBy = Ka,n.uniqWith = Ja,n.unset = tc,n.unzip = Ga,n.unzipWith = Za,n.update = ec,n.updateWith = nc,n.values = rc,n.valuesIn = ic,n.without = Kf,n.words = Sc,n.wrap = Bs,n.xor = Jf,n.xorBy = Gf,n.xorWith = Zf,n.zip = Yf,n.zipObject = Ya,n.zipObjectDeep = Qa,n.zipWith = Qf,n.entries = zp,n.entriesIn = Vp,n.extend = Np,n.extendWith = Dp,Fc(n, n),n.add = pd,n.attempt = ed,n.camelCase = Xp,n.capitalize = uc,n.ceil = dd,n.clamp = oc,n.clone = Ws,n.cloneDeep = Vs,n.cloneDeepWith = Xs,n.cloneWith = zs,n.conformsTo = Ks,n.deburr = cc,n.defaultTo = Dc,n.divide = hd,n.endsWith = lc,n.eq = Js,n.escape = fc,n.escapeRegExp = pc,n.every = ls,n.find = np,n.findIndex = va,n.findKey = Du,n.findLast = rp,n.findLastIndex = ga,n.findLastKey = Iu,n.floor = vd,n.forEach = vs,n.forEachRight = gs,n.forIn = Ru,n.forInRight = Lu,n.forOwn = Pu,n.forOwnRight = Fu,n.get = Hu,n.gt = yp,n.gte = bp,n.has = Bu,n.hasIn = Uu,n.head = wa,n.identity = Ic,n.includes = ms,n.indexOf = xa,n.inRange = ac,n.invoke = Mp,n.isArguments = _p,n.isArray = wp,n.isArrayBuffer = xp,n.isArrayLike = Gs,n.isArrayLikeObject = Zs,n.isBoolean = Ys,n.isBuffer = Cp,n.isDate = Tp,n.isElement = Qs,n.isEmpty = tu,n.isEqual = eu,n.isEqualWith = nu,n.isError = ru,n.isFinite = iu,n.isFunction = ou,n.isInteger = au,n.isLength = su,n.isMap = $p,n.isMatch = lu,n.isMatchWith = fu,n.isNaN = pu,n.isNative = du,n.isNil = vu,n.isNull = hu,n.isNumber = gu,n.isObject = uu,n.isObjectLike = cu,n.isPlainObject = mu,n.isRegExp = kp,n.isSafeInteger = yu,n.isSet = Ap,n.isString = bu,n.isSymbol = _u,n.isTypedArray = Ep,n.isUndefined = wu,n.isWeakMap = xu,n.isWeakSet = Cu,n.join = Ta,n.kebabCase = Kp,n.last = $a,n.lastIndexOf = ka,n.lowerCase = Jp,n.lowerFirst = Gp,n.lt = Sp,n.lte = Op,n.max = Yc,n.maxBy = Qc,n.mean = tl,n.meanBy = el,n.min = nl,n.minBy = rl,n.stubArray = Wc,n.stubFalse = zc,n.stubObject = Vc,n.stubString = Xc,n.stubTrue = Kc,n.multiply = gd,n.nth = Aa,n.noConflict = qc,n.noop = Mc,n.now = cp,n.pad = dc,n.padEnd = hc,n.padStart = vc,n.parseInt = gc,n.random = sc,n.reduce = _s,n.reduceRight = ws,n.repeat = mc,n.replace = yc,n.result = Gu,n.round = md,n.runInContext = t,n.sample = Cs,n.size = ks,n.snakeCase = Zp,n.some = As,n.sortedIndex = Ia,n.sortedIndexBy = Ra,n.sortedIndexOf = La,n.sortedLastIndex = Pa,n.sortedLastIndexBy = Fa,n.sortedLastIndexOf = qa,n.startCase = Yp,n.startsWith = _c,n.subtract = yd,n.sum = il,n.sumBy = ol,n.template = wc,n.times = Jc,n.toFinite = $u,n.toInteger = ku,n.toLength = Au,n.toLower = xc,n.toNumber = Eu,n.toSafeInteger = Ou,n.toString = ju,n.toUpper = Cc,n.trim = Tc,n.trimEnd = $c,n.trimStart = kc,n.truncate = Ac,n.unescape = Ec,n.uniqueId = Zc,n.upperCase = Qp,n.upperFirst = td,n.each = vs,n.eachRight = gs,n.first = wa,Fc(n, function () {
                        var t = {};
                        return nr(n, function (e, r) {
                            _l.call(n.prototype, r) || (t[r] = e)
                        }), t
                    }(), {chain: !1}),n.VERSION = ot,c(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
                        n[t].placeholder = n
                    }),c(["drop", "take"], function (t, e) {
                        _.prototype[t] = function (n) {
                            n = n === it ? 1 : Jl(ku(n), 0);
                            var r = this.__filtered__ && !e ? new _(this) : this.clone();
                            return r.__filtered__ ? r.__takeCount__ = Gl(n, r.__takeCount__) : r.__views__.push({
                                size: Gl(n, Ft),
                                type: t + (r.__dir__ < 0 ? "Right" : "")
                            }), r
                        }, _.prototype[t + "Right"] = function (e) {
                            return this.reverse()[t](e).reverse()
                        }
                    }),c(["filter", "map", "takeWhile"], function (t, e) {
                        var n = e + 1, r = n == jt || n == Dt;
                        _.prototype[t] = function (t) {
                            var e = this.clone();
                            return e.__iteratees__.push({
                                iteratee: $o(t, 3),
                                type: n
                            }), e.__filtered__ = e.__filtered__ || r, e
                        }
                    }),c(["head", "last"], function (t, e) {
                        var n = "take" + (e ? "Right" : "");
                        _.prototype[t] = function () {
                            return this[n](1).value()[0]
                        }
                    }),c(["initial", "tail"], function (t, e) {
                        var n = "drop" + (e ? "" : "Right");
                        _.prototype[t] = function () {
                            return this.__filtered__ ? new _(this) : this[n](1)
                        }
                    }),_.prototype.compact = function () {
                        return this.filter(Ic)
                    },_.prototype.find = function (t) {
                        return this.filter(t).head()
                    },_.prototype.findLast = function (t) {
                        return this.reverse().find(t)
                    },_.prototype.invokeMap = oi(function (t, e) {
                        return "function" == typeof t ? new _(this) : this.map(function (n) {
                            return Er(n, t, e)
                        })
                    }),_.prototype.reject = function (t) {
                        return this.filter(Ls($o(t)))
                    },_.prototype.slice = function (t, e) {
                        t = ku(t);
                        var n = this;
                        return n.__filtered__ && (t > 0 || e < 0) ? new _(n) : (t < 0 ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== it && (e = ku(e), n = e < 0 ? n.dropRight(-e) : n.take(e - t)), n)
                    },_.prototype.takeRightWhile = function (t) {
                        return this.reverse().takeWhile(t).reverse()
                    },_.prototype.toArray = function () {
                        return this.take(Ft)
                    },nr(_.prototype, function (t, e) {
                        var r = /^(?:filter|find|map|reject)|While$/.test(e), o = /^(?:head|last)$/.test(e),
                            a = n[o ? "take" + ("last" == e ? "Right" : "") : e], s = o || /^find/.test(e);
                        a && (n.prototype[e] = function () {
                            var e = this.__wrapped__, u = o ? [1] : arguments, c = e instanceof _, l = u[0],
                                f = c || wp(e), p = function (t) {
                                    var e = a.apply(n, g([t], u));
                                    return o && d ? e[0] : e
                                };
                            f && r && "function" == typeof l && 1 != l.length && (c = f = !1);
                            var d = this.__chain__, h = !!this.__actions__.length, v = s && !d, m = c && !h;
                            if (!s && f) {
                                e = m ? e : new _(this);
                                var y = t.apply(e, u);
                                return y.__actions__.push({func: ns, args: [p], thisArg: it}), new i(y, d)
                            }
                            return v && m ? t.apply(this, u) : (y = this.thru(p), v ? o ? y.value()[0] : y.value() : y)
                        })
                    }),c(["pop", "push", "shift", "sort", "splice", "unshift"], function (t) {
                        var e = vl[t], r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
                            i = /^(?:pop|shift)$/.test(t);
                        n.prototype[t] = function () {
                            var t = arguments;
                            if (i && !this.__chain__) {
                                var n = this.value();
                                return e.apply(wp(n) ? n : [], t)
                            }
                            return this[r](function (n) {
                                return e.apply(wp(n) ? n : [], t)
                            })
                        }
                    }),nr(_.prototype, function (t, e) {
                        var r = n[e];
                        if (r) {
                            var i = r.name + "", o = cf[i] || (cf[i] = []);
                            o.push({name: e, func: r})
                        }
                    }),cf[eo(it, yt).name] = [{
                        name: "wrapper",
                        func: it
                    }],_.prototype.clone = S,_.prototype.reverse = Z,_.prototype.value = et,n.prototype.at = tp,n.prototype.chain = rs,n.prototype.commit = is,n.prototype.next = os,n.prototype.plant = ss,n.prototype.reverse = us,n.prototype.toJSON = n.prototype.valueOf = n.prototype.value = cs,n.prototype.first = n.prototype.head,Ll && (n.prototype[Ll] = as),n
                }, Tr = Cr();
            sr._ = Tr, i = function () {
                return Tr
            }.call(e, n, e, r), !(i !== it && (r.exports = i))
        }).call(this)
    }).call(e, n(8), n(37)(t))
}, function (t, e) {
    function n() {
        throw new Error("setTimeout has not been defined")
    }

    function r() {
        throw new Error("clearTimeout has not been defined")
    }

    function i(t) {
        if (l === setTimeout)return setTimeout(t, 0);
        if ((l === n || !l) && setTimeout)return l = setTimeout, setTimeout(t, 0);
        try {
            return l(t, 0)
        } catch (e) {
            try {
                return l.call(null, t, 0)
            } catch (e) {
                return l.call(this, t, 0)
            }
        }
    }

    function o(t) {
        if (f === clearTimeout)return clearTimeout(t);
        if ((f === r || !f) && clearTimeout)return f = clearTimeout, clearTimeout(t);
        try {
            return f(t)
        } catch (e) {
            try {
                return f.call(null, t)
            } catch (e) {
                return f.call(this, t)
            }
        }
    }

    function a() {
        v && d && (v = !1, d.length ? h = d.concat(h) : g = -1, h.length && s())
    }

    function s() {
        if (!v) {
            var t = i(a);
            v = !0;
            for (var e = h.length; e;) {
                for (d = h, h = []; ++g < e;)d && d[g].run();
                g = -1, e = h.length
            }
            d = null, v = !1, o(t)
        }
    }

    function u(t, e) {
        this.fun = t, this.array = e
    }

    function c() {
    }

    var l, f, p = t.exports = {};
    !function () {
        try {
            l = "function" == typeof setTimeout ? setTimeout : n
        } catch (t) {
            l = n
        }
        try {
            f = "function" == typeof clearTimeout ? clearTimeout : r
        } catch (t) {
            f = r
        }
    }();
    var d, h = [], v = !1, g = -1;
    p.nextTick = function (t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
        h.push(new u(t, e)), 1 !== h.length || v || i(s)
    }, u.prototype.run = function () {
        this.fun.apply(null, this.array)
    }, p.title = "browser", p.browser = !0, p.env = {}, p.argv = [], p.version = "", p.versions = {}, p.on = c, p.addListener = c, p.once = c, p.off = c, p.removeListener = c, p.removeAllListeners = c, p.emit = c, p.binding = function (t) {
        throw new Error("process.binding is not supported")
    }, p.cwd = function () {
        return "/"
    }, p.chdir = function (t) {
        throw new Error("process.chdir is not supported")
    }, p.umask = function () {
        return 0
    }
}, function (t, e, n) {
    var r, i;
    r = n(29);
    var o = n(35);
    i = r = r || {}, "object" != typeof r.default && "function" != typeof r.default || (i = r = r.default), "function" == typeof i && (i = i.options), i.render = o.render, i.staticRenderFns = o.staticRenderFns, t.exports = r
}, function (t, e) {
    t.exports = {
        render: function () {
            var t = this, e = t.$createElement;
            t._self._c || e;
            return t._m(0)
        }, staticRenderFns: [function () {
            var t = this, e = t.$createElement, n = t._self._c || e;
            return n("div", {staticClass: "container"}, [n("div", {staticClass: "row"}, [n("div", {staticClass: "col-md-8 col-md-offset-2"}, [n("div", {staticClass: "panel panel-default"}, [n("div", {staticClass: "panel-heading"}, [t._v("Example Component")]), t._v(" "), n("div", {staticClass: "panel-body"}, [t._v("\n                    I'm an example component!\n                ")])])])])])
        }]
    }
}, function (t, e, n) {
    "use strict";
    (function (e) {/*!
     * Vue.js v2.1.10
     * (c) 2014-2017 Evan You
     * Released under the MIT License.
     */
        function n(t) {
            return null == t ? "" : "object" == typeof t ? JSON.stringify(t, null, 2) : String(t)
        }

        function r(t) {
            var e = parseFloat(t);
            return isNaN(e) ? t : e
        }

        function i(t, e) {
            for (var n = Object.create(null), r = t.split(","), i = 0; i < r.length; i++)n[r[i]] = !0;
            return e ? function (t) {
                return n[t.toLowerCase()]
            } : function (t) {
                return n[t]
            }
        }

        function o(t, e) {
            if (t.length) {
                var n = t.indexOf(e);
                if (n > -1)return t.splice(n, 1)
            }
        }

        function a(t, e) {
            return ai.call(t, e)
        }

        function s(t) {
            return "string" == typeof t || "number" == typeof t
        }

        function u(t) {
            var e = Object.create(null);
            return function (n) {
                var r = e[n];
                return r || (e[n] = t(n))
            }
        }

        function c(t, e) {
            function n(n) {
                var r = arguments.length;
                return r ? r > 1 ? t.apply(e, arguments) : t.call(e, n) : t.call(e)
            }

            return n._length = t.length, n
        }

        function l(t, e) {
            e = e || 0;
            for (var n = t.length - e, r = new Array(n); n--;)r[n] = t[n + e];
            return r
        }

        function f(t, e) {
            for (var n in e)t[n] = e[n];
            return t
        }

        function p(t) {
            return null !== t && "object" == typeof t
        }

        function d(t) {
            return pi.call(t) === di
        }

        function h(t) {
            for (var e = {}, n = 0; n < t.length; n++)t[n] && f(e, t[n]);
            return e
        }

        function v() {
        }

        function g(t) {
            return t.reduce(function (t, e) {
                return t.concat(e.staticKeys || [])
            }, []).join(",")
        }

        function m(t, e) {
            var n = p(t), r = p(e);
            return n && r ? JSON.stringify(t) === JSON.stringify(e) : !n && !r && String(t) === String(e)
        }

        function y(t, e) {
            for (var n = 0; n < t.length; n++)if (m(t[n], e))return n;
            return -1
        }

        function b(t) {
            var e = (t + "").charCodeAt(0);
            return 36 === e || 95 === e
        }

        function _(t, e, n, r) {
            Object.defineProperty(t, e, {value: n, enumerable: !!r, writable: !0, configurable: !0})
        }

        function w(t) {
            if (!mi.test(t)) {
                var e = t.split(".");
                return function (t) {
                    for (var n = 0; n < e.length; n++) {
                        if (!t)return;
                        t = t[e[n]]
                    }
                    return t
                }
            }
        }

        function x(t) {
            return /native code/.test(t.toString())
        }

        function C(t) {
            Ni.target && Di.push(Ni.target), Ni.target = t
        }

        function T() {
            Ni.target = Di.pop()
        }

        function $(t, e) {
            t.__proto__ = e
        }

        function k(t, e, n) {
            for (var r = 0, i = n.length; r < i; r++) {
                var o = n[r];
                _(t, o, e[o])
            }
        }

        function A(t, e) {
            if (p(t)) {
                var n;
                return a(t, "__ob__") && t.__ob__ instanceof Fi ? n = t.__ob__ : Pi.shouldConvert && !ki() && (Array.isArray(t) || d(t)) && Object.isExtensible(t) && !t._isVue && (n = new Fi(t)), e && n && n.vmCount++, n
            }
        }

        function E(t, e, n, r) {
            var i = new Ni, o = Object.getOwnPropertyDescriptor(t, e);
            if (!o || o.configurable !== !1) {
                var a = o && o.get, s = o && o.set, u = A(n);
                Object.defineProperty(t, e, {
                    enumerable: !0, configurable: !0, get: function () {
                        var e = a ? a.call(t) : n;
                        return Ni.target && (i.depend(), u && u.dep.depend(), Array.isArray(e) && j(e)), e
                    }, set: function (e) {
                        var r = a ? a.call(t) : n;
                        e === r || e !== e && r !== r || (s ? s.call(t, e) : n = e, u = A(e), i.notify())
                    }
                })
            }
        }

        function S(t, e, n) {
            if (Array.isArray(t))return t.length = Math.max(t.length, e), t.splice(e, 1, n), n;
            if (a(t, e))return void(t[e] = n);
            var r = t.__ob__;
            if (!(t._isVue || r && r.vmCount))return r ? (E(r.value, e, n), r.dep.notify(), n) : void(t[e] = n)
        }

        function O(t, e) {
            var n = t.__ob__;
            t._isVue || n && n.vmCount || a(t, e) && (delete t[e], n && n.dep.notify())
        }

        function j(t) {
            for (var e = void 0, n = 0,
                     r = t.length; n < r; n++)e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Array.isArray(e) && j(e)
        }

        function N(t, e) {
            if (!e)return t;
            for (var n, r, i, o = Object.keys(e),
                     s = 0; s < o.length; s++)n = o[s], r = t[n], i = e[n], a(t, n) ? d(r) && d(i) && N(r, i) : S(t, n, i);
            return t
        }

        function D(t, e) {
            return e ? t ? t.concat(e) : Array.isArray(e) ? e : [e] : t
        }

        function I(t, e) {
            var n = Object.create(t || null);
            return e ? f(n, e) : n
        }

        function R(t) {
            var e = t.props;
            if (e) {
                var n, r, i, o = {};
                if (Array.isArray(e))for (n = e.length; n--;)r = e[n], "string" == typeof r && (i = ui(r), o[i] = {type: null}); else if (d(e))for (var a in e)r = e[a], i = ui(a), o[i] = d(r) ? r : {type: r};
                t.props = o
            }
        }

        function L(t) {
            var e = t.directives;
            if (e)for (var n in e) {
                var r = e[n];
                "function" == typeof r && (e[n] = {bind: r, update: r})
            }
        }

        function P(t, e, n) {
            function r(r) {
                var i = qi[r] || Mi;
                l[r] = i(t[r], e[r], n, r)
            }

            R(e), L(e);
            var i = e.extends;
            if (i && (t = "function" == typeof i ? P(t, i.options, n) : P(t, i, n)), e.mixins)for (var o = 0,
                                                                                                       s = e.mixins.length; o < s; o++) {
                var u = e.mixins[o];
                u.prototype instanceof Ut && (u = u.options), t = P(t, u, n)
            }
            var c, l = {};
            for (c in t)r(c);
            for (c in e)a(t, c) || r(c);
            return l
        }

        function F(t, e, n, r) {
            if ("string" == typeof n) {
                var i = t[e];
                if (a(i, n))return i[n];
                var o = ui(n);
                if (a(i, o))return i[o];
                var s = ci(o);
                if (a(i, s))return i[s];
                var u = i[n] || i[o] || i[s];
                return u
            }
        }

        function q(t, e, n, r) {
            var i = e[t], o = !a(n, t), s = n[t];
            if (B(Boolean, i.type) && (o && !a(i, "default") ? s = !1 : B(String, i.type) || "" !== s && s !== fi(t) || (s = !0)), void 0 === s) {
                s = M(r, i, t);
                var u = Pi.shouldConvert;
                Pi.shouldConvert = !0, A(s), Pi.shouldConvert = u
            }
            return s
        }

        function M(t, e, n) {
            if (a(e, "default")) {
                var r = e.default;
                return p(r), t && t.$options.propsData && void 0 === t.$options.propsData[n] && void 0 !== t[n] ? t[n] : "function" == typeof r && e.type !== Function ? r.call(t) : r
            }
        }

        function H(t) {
            var e = t && t.toString().match(/^\s*function (\w+)/);
            return e && e[1]
        }

        function B(t, e) {
            if (!Array.isArray(e))return H(e) === H(t);
            for (var n = 0, r = e.length; n < r; n++)if (H(e[n]) === H(t))return !0;
            return !1
        }

        function U(t) {
            return new Bi(void 0, void 0, void 0, String(t))
        }

        function W(t) {
            var e = new Bi(t.tag, t.data, t.children, t.text, t.elm, t.context, t.componentOptions);
            return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isCloned = !0, e
        }

        function z(t) {
            for (var e = new Array(t.length), n = 0; n < t.length; n++)e[n] = W(t[n]);
            return e
        }

        function V(t, e, n, r, i) {
            if (t) {
                var o = n.$options._base;
                if (p(t) && (t = o.extend(t)), "function" == typeof t) {
                    if (!t.cid)if (t.resolved) t = t.resolved; else if (t = Q(t, o, function () {
                            n.$forceUpdate()
                        }), !t)return;
                    Bt(t), e = e || {};
                    var a = tt(e, t);
                    if (t.options.functional)return X(t, a, e, n, r);
                    var s = e.on;
                    e.on = e.nativeOn, t.options.abstract && (e = {}), nt(e);
                    var u = t.options.name || i,
                        c = new Bi("vue-component-" + t.cid + (u ? "-" + u : ""), e, void 0, void 0, void 0, n, {
                            Ctor: t,
                            propsData: a,
                            listeners: s,
                            tag: i,
                            children: r
                        });
                    return c
                }
            }
        }

        function X(t, e, n, r, i) {
            var o = {}, a = t.options.props;
            if (a)for (var s in a)o[s] = q(s, a, e);
            var u = Object.create(r), c = function (t, e, n, r) {
                return ft(u, t, e, n, r, !0)
            }, l = t.options.render.call(null, c, {
                props: o, data: n, parent: r, children: i, slots: function () {
                    return gt(i, r)
                }
            });
            return l instanceof Bi && (l.functionalContext = r, n.slot && ((l.data || (l.data = {})).slot = n.slot)), l
        }

        function K(t, e, n, r) {
            var i = t.componentOptions, o = {
                _isComponent: !0,
                parent: e,
                propsData: i.propsData,
                _componentTag: i.tag,
                _parentVnode: t,
                _parentListeners: i.listeners,
                _renderChildren: i.children,
                _parentElm: n || null,
                _refElm: r || null
            }, a = t.data.inlineTemplate;
            return a && (o.render = a.render, o.staticRenderFns = a.staticRenderFns), new i.Ctor(o)
        }

        function J(t, e, n, r) {
            if (!t.componentInstance || t.componentInstance._isDestroyed) {
                var i = t.componentInstance = K(t, Zi, n, r);
                i.$mount(e ? t.elm : void 0, e)
            } else if (t.data.keepAlive) {
                var o = t;
                G(o, o)
            }
        }

        function G(t, e) {
            var n = e.componentOptions, r = e.componentInstance = t.componentInstance;
            r._updateFromParent(n.propsData, n.listeners, e, n.children)
        }

        function Z(t) {
            t.componentInstance._isMounted || (t.componentInstance._isMounted = !0, Tt(t.componentInstance, "mounted")), t.data.keepAlive && (t.componentInstance._inactive = !1, Tt(t.componentInstance, "activated"))
        }

        function Y(t) {
            t.componentInstance._isDestroyed || (t.data.keepAlive ? (t.componentInstance._inactive = !0, Tt(t.componentInstance, "deactivated")) : t.componentInstance.$destroy())
        }

        function Q(t, e, n) {
            if (!t.requested) {
                t.requested = !0;
                var r = t.pendingCallbacks = [n], i = !0, o = function (n) {
                    if (p(n) && (n = e.extend(n)), t.resolved = n, !i)for (var o = 0, a = r.length; o < a; o++)r[o](n)
                }, a = function (t) {
                }, s = t(o, a);
                return s && "function" == typeof s.then && !t.resolved && s.then(o, a), i = !1, t.resolved
            }
            t.pendingCallbacks.push(n)
        }

        function tt(t, e) {
            var n = e.options.props;
            if (n) {
                var r = {}, i = t.attrs, o = t.props, a = t.domProps;
                if (i || o || a)for (var s in n) {
                    var u = fi(s);
                    et(r, o, s, u, !0) || et(r, i, s, u) || et(r, a, s, u)
                }
                return r
            }
        }

        function et(t, e, n, r, i) {
            if (e) {
                if (a(e, n))return t[n] = e[n], i || delete e[n], !0;
                if (a(e, r))return t[n] = e[r], i || delete e[r], !0
            }
            return !1
        }

        function nt(t) {
            t.hook || (t.hook = {});
            for (var e = 0; e < Xi.length; e++) {
                var n = Xi[e], r = t.hook[n], i = Vi[n];
                t.hook[n] = r ? rt(i, r) : i
            }
        }

        function rt(t, e) {
            return function (n, r, i, o) {
                t(n, r, i, o), e(n, r, i, o)
            }
        }

        function it(t, e, n, r) {
            r += e;
            var i = t.__injected || (t.__injected = {});
            if (!i[r]) {
                i[r] = !0;
                var o = t[e];
                o ? t[e] = function () {
                    o.apply(this, arguments), n.apply(this, arguments)
                } : t[e] = n
            }
        }

        function ot(t) {
            var e = {
                fn: t, invoker: function () {
                    var t = arguments, n = e.fn;
                    if (Array.isArray(n))for (var r = 0; r < n.length; r++)n[r].apply(null, t); else n.apply(null, arguments)
                }
            };
            return e
        }

        function at(t, e, n, r, i) {
            var o, a, s, u;
            for (o in t)a = t[o], s = e[o], u = Ki(o), a && (s ? a !== s && (s.fn = a, t[o] = s) : (a.invoker || (a = t[o] = ot(a)), n(u.name, a.invoker, u.once, u.capture)));
            for (o in e)t[o] || (u = Ki(o), r(u.name, e[o].invoker, u.capture))
        }

        function st(t) {
            for (var e = 0; e < t.length; e++)if (Array.isArray(t[e]))return Array.prototype.concat.apply([], t);
            return t
        }

        function ut(t) {
            return s(t) ? [U(t)] : Array.isArray(t) ? ct(t) : void 0
        }

        function ct(t, e) {
            var n, r, i, o = [];
            for (n = 0; n < t.length; n++)r = t[n], null != r && "boolean" != typeof r && (i = o[o.length - 1], Array.isArray(r) ? o.push.apply(o, ct(r, (e || "") + "_" + n)) : s(r) ? i && i.text ? i.text += String(r) : "" !== r && o.push(U(r)) : r.text && i && i.text ? o[o.length - 1] = U(i.text + r.text) : (r.tag && null == r.key && null != e && (r.key = "__vlist" + e + "_" + n + "__"), o.push(r)));
            return o
        }

        function lt(t) {
            return t && t.filter(function (t) {
                    return t && t.componentOptions
                })[0]
        }

        function ft(t, e, n, r, i, o) {
            return (Array.isArray(n) || s(n)) && (i = r, r = n, n = void 0), o && (i = Gi), pt(t, e, n, r, i)
        }

        function pt(t, e, n, r, i) {
            if (n && n.__ob__)return zi();
            if (!e)return zi();
            Array.isArray(r) && "function" == typeof r[0] && (n = n || {}, n.scopedSlots = {default: r[0]}, r.length = 0), i === Gi ? r = ut(r) : i === Ji && (r = st(r));
            var o, a;
            if ("string" == typeof e) {
                var s;
                a = gi.getTagNamespace(e), o = gi.isReservedTag(e) ? new Bi(gi.parsePlatformTagName(e), n, r, void 0, void 0, t) : (s = F(t.$options, "components", e)) ? V(s, n, t, r, e) : new Bi(e, n, r, void 0, void 0, t)
            } else o = V(e, n, t, r);
            return o ? (a && dt(o, a), o) : zi()
        }

        function dt(t, e) {
            if (t.ns = e, "foreignObject" !== t.tag && t.children)for (var n = 0, r = t.children.length; n < r; n++) {
                var i = t.children[n];
                i.tag && !i.ns && dt(i, e)
            }
        }

        function ht(t) {
            t.$vnode = null, t._vnode = null, t._staticTrees = null;
            var e = t.$options._parentVnode, n = e && e.context;
            t.$slots = gt(t.$options._renderChildren, n), t.$scopedSlots = {}, t._c = function (e, n, r, i) {
                return ft(t, e, n, r, i, !1)
            }, t.$createElement = function (e, n, r, i) {
                return ft(t, e, n, r, i, !0)
            }
        }

        function vt(t) {
            function e(t, e, n) {
                if (Array.isArray(t))for (var r = 0; r < t.length; r++)t[r] && "string" != typeof t[r] && i(t[r], e + "_" + r, n); else i(t, e, n)
            }

            function i(t, e, n) {
                t.isStatic = !0, t.key = e, t.isOnce = n
            }

            t.prototype.$nextTick = function (t) {
                return Ei(t, this)
            }, t.prototype._render = function () {
                var t = this, e = t.$options, n = e.render, r = e.staticRenderFns, i = e._parentVnode;
                if (t._isMounted)for (var o in t.$slots)t.$slots[o] = z(t.$slots[o]);
                i && i.data.scopedSlots && (t.$scopedSlots = i.data.scopedSlots), r && !t._staticTrees && (t._staticTrees = []), t.$vnode = i;
                var a;
                try {
                    a = n.call(t._renderProxy, t.$createElement)
                } catch (e) {
                    if (!gi.errorHandler)throw e;
                    gi.errorHandler.call(null, e, t), a = t._vnode
                }
                return a instanceof Bi || (a = zi()), a.parent = i, a
            }, t.prototype._s = n, t.prototype._v = U, t.prototype._n = r, t.prototype._e = zi, t.prototype._q = m, t.prototype._i = y, t.prototype._m = function (t, n) {
                var r = this._staticTrees[t];
                return r && !n ? Array.isArray(r) ? z(r) : W(r) : (r = this._staticTrees[t] = this.$options.staticRenderFns[t].call(this._renderProxy), e(r, "__static__" + t, !1), r)
            }, t.prototype._o = function (t, n, r) {
                return e(t, "__once__" + n + (r ? "_" + r : ""), !0), t
            }, t.prototype._f = function (t) {
                return F(this.$options, "filters", t, !0) || vi
            }, t.prototype._l = function (t, e) {
                var n, r, i, o, a;
                if (Array.isArray(t) || "string" == typeof t)for (n = new Array(t.length), r = 0, i = t.length; r < i; r++)n[r] = e(t[r], r); else if ("number" == typeof t)for (n = new Array(t), r = 0; r < t; r++)n[r] = e(r + 1, r); else if (p(t))for (o = Object.keys(t), n = new Array(o.length), r = 0, i = o.length; r < i; r++)a = o[r], n[r] = e(t[a], a, r);
                return n
            }, t.prototype._t = function (t, e, n, r) {
                var i = this.$scopedSlots[t];
                if (i)return n = n || {}, r && f(n, r), i(n) || e;
                var o = this.$slots[t];
                return o || e
            }, t.prototype._b = function (t, e, n, r) {
                if (n)if (p(n)) {
                    Array.isArray(n) && (n = h(n));
                    for (var i in n)if ("class" === i || "style" === i) t[i] = n[i]; else {
                        var o = t.attrs && t.attrs.type,
                            a = r || gi.mustUseProp(e, o, i) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
                        a[i] = n[i]
                    }
                } else;
                return t
            }, t.prototype._k = function (t, e, n) {
                var r = gi.keyCodes[e] || n;
                return Array.isArray(r) ? r.indexOf(t) === -1 : r !== t
            }
        }

        function gt(t, e) {
            var n = {};
            if (!t)return n;
            for (var r, i, o = [], a = 0,
                     s = t.length; a < s; a++)if (i = t[a], (i.context === e || i.functionalContext === e) && i.data && (r = i.data.slot)) {
                var u = n[r] || (n[r] = []);
                "template" === i.tag ? u.push.apply(u, i.children) : u.push(i)
            } else o.push(i);
            return o.length && (1 !== o.length || " " !== o[0].text && !o[0].isComment) && (n.default = o), n
        }

        function mt(t) {
            t._events = Object.create(null), t._hasHookEvent = !1;
            var e = t.$options._parentListeners;
            e && _t(t, e)
        }

        function yt(t, e, n) {
            n ? Wi.$once(t, e) : Wi.$on(t, e)
        }

        function bt(t, e) {
            Wi.$off(t, e)
        }

        function _t(t, e, n) {
            Wi = t, at(e, n || {}, yt, bt, t)
        }

        function wt(t) {
            var e = /^hook:/;
            t.prototype.$on = function (t, n) {
                var r = this;
                return (r._events[t] || (r._events[t] = [])).push(n), e.test(t) && (r._hasHookEvent = !0), r
            }, t.prototype.$once = function (t, e) {
                function n() {
                    r.$off(t, n), e.apply(r, arguments)
                }

                var r = this;
                return n.fn = e, r.$on(t, n), r
            }, t.prototype.$off = function (t, e) {
                var n = this;
                if (!arguments.length)return n._events = Object.create(null), n;
                var r = n._events[t];
                if (!r)return n;
                if (1 === arguments.length)return n._events[t] = null, n;
                for (var i, o = r.length; o--;)if (i = r[o], i === e || i.fn === e) {
                    r.splice(o, 1);
                    break
                }
                return n
            }, t.prototype.$emit = function (t) {
                var e = this, n = e._events[t];
                if (n) {
                    n = n.length > 1 ? l(n) : n;
                    for (var r = l(arguments, 1), i = 0, o = n.length; i < o; i++)n[i].apply(e, r)
                }
                return e
            }
        }

        function xt(t) {
            var e = t.$options, n = e.parent;
            if (n && !e.abstract) {
                for (; n.$options.abstract && n.$parent;)n = n.$parent;
                n.$children.push(t)
            }
            t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._watcher = null, t._inactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1
        }

        function Ct(t) {
            t.prototype._mount = function (t, e) {
                var n = this;
                return n.$el = t, n.$options.render || (n.$options.render = zi), Tt(n, "beforeMount"), n._watcher = new io(n, function () {
                    n._update(n._render(), e)
                }, v), e = !1, null == n.$vnode && (n._isMounted = !0, Tt(n, "mounted")), n
            }, t.prototype._update = function (t, e) {
                var n = this;
                n._isMounted && Tt(n, "beforeUpdate");
                var r = n.$el, i = n._vnode, o = Zi;
                Zi = n, n._vnode = t, i ? n.$el = n.__patch__(i, t) : n.$el = n.__patch__(n.$el, t, e, !1, n.$options._parentElm, n.$options._refElm), Zi = o, r && (r.__vue__ = null), n.$el && (n.$el.__vue__ = n), n.$vnode && n.$parent && n.$vnode === n.$parent._vnode && (n.$parent.$el = n.$el)
            }, t.prototype._updateFromParent = function (t, e, n, r) {
                var i = this, o = !(!i.$options._renderChildren && !r);
                if (i.$options._parentVnode = n, i.$vnode = n, i._vnode && (i._vnode.parent = n), i.$options._renderChildren = r, t && i.$options.props) {
                    Pi.shouldConvert = !1;
                    for (var a = i.$options._propKeys || [], s = 0; s < a.length; s++) {
                        var u = a[s];
                        i[u] = q(u, i.$options.props, t, i)
                    }
                    Pi.shouldConvert = !0, i.$options.propsData = t
                }
                if (e) {
                    var c = i.$options._parentListeners;
                    i.$options._parentListeners = e, _t(i, e, c)
                }
                o && (i.$slots = gt(r, n.context), i.$forceUpdate())
            }, t.prototype.$forceUpdate = function () {
                var t = this;
                t._watcher && t._watcher.update()
            }, t.prototype.$destroy = function () {
                var t = this;
                if (!t._isBeingDestroyed) {
                    Tt(t, "beforeDestroy"), t._isBeingDestroyed = !0;
                    var e = t.$parent;
                    !e || e._isBeingDestroyed || t.$options.abstract || o(e.$children, t), t._watcher && t._watcher.teardown();
                    for (var n = t._watchers.length; n--;)t._watchers[n].teardown();
                    t._data.__ob__ && t._data.__ob__.vmCount--, t._isDestroyed = !0, Tt(t, "destroyed"), t.$off(), t.$el && (t.$el.__vue__ = null), t.__patch__(t._vnode, null)
                }
            }
        }

        function Tt(t, e) {
            var n = t.$options[e];
            if (n)for (var r = 0, i = n.length; r < i; r++)n[r].call(t);
            t._hasHookEvent && t.$emit("hook:" + e)
        }

        function $t() {
            Yi.length = 0, Qi = {}, to = eo = !1
        }

        function kt() {
            eo = !0;
            var t, e, n;
            for (Yi.sort(function (t, e) {
                return t.id - e.id
            }), no = 0; no < Yi.length; no++)t = Yi[no], e = t.id, Qi[e] = null, t.run();
            for (no = Yi.length; no--;)t = Yi[no], n = t.vm, n._watcher === t && n._isMounted && Tt(n, "updated");
            Ai && gi.devtools && Ai.emit("flush"), $t()
        }

        function At(t) {
            var e = t.id;
            if (null == Qi[e]) {
                if (Qi[e] = !0, eo) {
                    for (var n = Yi.length - 1; n >= 0 && Yi[n].id > t.id;)n--;
                    Yi.splice(Math.max(n, no) + 1, 0, t)
                } else Yi.push(t);
                to || (to = !0, Ei(kt))
            }
        }

        function Et(t) {
            oo.clear(), St(t, oo)
        }

        function St(t, e) {
            var n, r, i = Array.isArray(t);
            if ((i || p(t)) && Object.isExtensible(t)) {
                if (t.__ob__) {
                    var o = t.__ob__.dep.id;
                    if (e.has(o))return;
                    e.add(o)
                }
                if (i)for (n = t.length; n--;)St(t[n], e); else for (r = Object.keys(t), n = r.length; n--;)St(t[r[n]], e)
            }
        }

        function Ot(t) {
            t._watchers = [];
            var e = t.$options;
            e.props && jt(t, e.props), e.methods && Rt(t, e.methods), e.data ? Nt(t) : A(t._data = {}, !0), e.computed && Dt(t, e.computed), e.watch && Lt(t, e.watch)
        }

        function jt(t, e) {
            var n = t.$options.propsData || {}, r = t.$options._propKeys = Object.keys(e), i = !t.$parent;
            Pi.shouldConvert = i;
            for (var o = function (i) {
                var o = r[i];
                E(t, o, q(o, e, n, t))
            }, a = 0; a < r.length; a++)o(a);
            Pi.shouldConvert = !0
        }

        function Nt(t) {
            var e = t.$options.data;
            e = t._data = "function" == typeof e ? e.call(t) : e || {}, d(e) || (e = {});
            for (var n = Object.keys(e), r = t.$options.props, i = n.length; i--;)r && a(r, n[i]) || qt(t, n[i]);
            A(e, !0)
        }

        function Dt(t, e) {
            for (var n in e) {
                var r = e[n];
                "function" == typeof r ? (ao.get = It(r, t), ao.set = v) : (ao.get = r.get ? r.cache !== !1 ? It(r.get, t) : c(r.get, t) : v, ao.set = r.set ? c(r.set, t) : v), Object.defineProperty(t, n, ao)
            }
        }

        function It(t, e) {
            var n = new io(e, t, v, {lazy: !0});
            return function () {
                return n.dirty && n.evaluate(), Ni.target && n.depend(), n.value
            }
        }

        function Rt(t, e) {
            for (var n in e)t[n] = null == e[n] ? v : c(e[n], t)
        }

        function Lt(t, e) {
            for (var n in e) {
                var r = e[n];
                if (Array.isArray(r))for (var i = 0; i < r.length; i++)Pt(t, n, r[i]); else Pt(t, n, r)
            }
        }

        function Pt(t, e, n) {
            var r;
            d(n) && (r = n, n = n.handler), "string" == typeof n && (n = t[n]), t.$watch(e, n, r)
        }

        function Ft(t) {
            var e = {};
            e.get = function () {
                return this._data
            }, Object.defineProperty(t.prototype, "$data", e), t.prototype.$set = S, t.prototype.$delete = O, t.prototype.$watch = function (t, e, n) {
                var r = this;
                n = n || {}, n.user = !0;
                var i = new io(r, t, e, n);
                return n.immediate && e.call(r, i.value), function () {
                    i.teardown()
                }
            }
        }

        function qt(t, e) {
            b(e) || Object.defineProperty(t, e, {
                configurable: !0, enumerable: !0, get: function () {
                    return t._data[e]
                }, set: function (n) {
                    t._data[e] = n
                }
            })
        }

        function Mt(t) {
            t.prototype._init = function (t) {
                var e = this;
                e._uid = so++, e._isVue = !0, t && t._isComponent ? Ht(e, t) : e.$options = P(Bt(e.constructor), t || {}, e), e._renderProxy = e, e._self = e, xt(e), mt(e), ht(e), Tt(e, "beforeCreate"), Ot(e), Tt(e, "created"), e.$options.el && e.$mount(e.$options.el)
            }
        }

        function Ht(t, e) {
            var n = t.$options = Object.create(t.constructor.options);
            n.parent = e.parent, n.propsData = e.propsData, n._parentVnode = e._parentVnode, n._parentListeners = e._parentListeners, n._renderChildren = e._renderChildren, n._componentTag = e._componentTag, n._parentElm = e._parentElm, n._refElm = e._refElm, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns)
        }

        function Bt(t) {
            var e = t.options;
            if (t.super) {
                var n = t.super.options, r = t.superOptions, i = t.extendOptions;
                n !== r && (t.superOptions = n, i.render = e.render, i.staticRenderFns = e.staticRenderFns, i._scopeId = e._scopeId, e = t.options = P(n, i), e.name && (e.components[e.name] = t))
            }
            return e
        }

        function Ut(t) {
            this._init(t)
        }

        function Wt(t) {
            t.use = function (t) {
                if (!t.installed) {
                    var e = l(arguments, 1);
                    return e.unshift(this), "function" == typeof t.install ? t.install.apply(t, e) : t.apply(null, e), t.installed = !0, this
                }
            }
        }

        function zt(t) {
            t.mixin = function (t) {
                this.options = P(this.options, t)
            }
        }

        function Vt(t) {
            t.cid = 0;
            var e = 1;
            t.extend = function (t) {
                t = t || {};
                var n = this, r = n.cid, i = t._Ctor || (t._Ctor = {});
                if (i[r])return i[r];
                var o = t.name || n.options.name, a = function (t) {
                    this._init(t)
                };
                return a.prototype = Object.create(n.prototype), a.prototype.constructor = a, a.cid = e++, a.options = P(n.options, t), a.super = n, a.extend = n.extend, a.mixin = n.mixin, a.use = n.use, gi._assetTypes.forEach(function (t) {
                    a[t] = n[t]
                }), o && (a.options.components[o] = a), a.superOptions = n.options, a.extendOptions = t, i[r] = a, a
            }
        }

        function Xt(t) {
            gi._assetTypes.forEach(function (e) {
                t[e] = function (t, n) {
                    return n ? ("component" === e && d(n) && (n.name = n.name || t, n = this.options._base.extend(n)), "directive" === e && "function" == typeof n && (n = {
                        bind: n,
                        update: n
                    }), this.options[e + "s"][t] = n, n) : this.options[e + "s"][t]
                }
            })
        }

        function Kt(t) {
            return t && (t.Ctor.options.name || t.tag)
        }

        function Jt(t, e) {
            return "string" == typeof t ? t.split(",").indexOf(e) > -1 : t.test(e)
        }

        function Gt(t, e) {
            for (var n in t) {
                var r = t[n];
                if (r) {
                    var i = Kt(r.componentOptions);
                    i && !e(i) && (Zt(r), t[n] = null)
                }
            }
        }

        function Zt(t) {
            t && (t.componentInstance._inactive || Tt(t.componentInstance, "deactivated"), t.componentInstance.$destroy())
        }

        function Yt(t) {
            var e = {};
            e.get = function () {
                return gi
            }, Object.defineProperty(t, "config", e), t.util = Hi, t.set = S, t.delete = O, t.nextTick = Ei, t.options = Object.create(null), gi._assetTypes.forEach(function (e) {
                t.options[e + "s"] = Object.create(null)
            }), t.options._base = t, f(t.options.components, lo), Wt(t), zt(t), Vt(t), Xt(t)
        }

        function Qt(t) {
            for (var e = t.data, n = t,
                     r = t; r.componentInstance;)r = r.componentInstance._vnode, r.data && (e = te(r.data, e));
            for (; n = n.parent;)n.data && (e = te(e, n.data));
            return ee(e)
        }

        function te(t, e) {
            return {staticClass: ne(t.staticClass, e.staticClass), class: t.class ? [t.class, e.class] : e.class}
        }

        function ee(t) {
            var e = t.class, n = t.staticClass;
            return n || e ? ne(n, re(e)) : ""
        }

        function ne(t, e) {
            return t ? e ? t + " " + e : t : e || ""
        }

        function re(t) {
            var e = "";
            if (!t)return e;
            if ("string" == typeof t)return t;
            if (Array.isArray(t)) {
                for (var n, r = 0, i = t.length; r < i; r++)t[r] && (n = re(t[r])) && (e += n + " ");
                return e.slice(0, -1)
            }
            if (p(t)) {
                for (var o in t)t[o] && (e += o + " ");
                return e.slice(0, -1)
            }
            return e
        }

        function ie(t) {
            return To(t) ? "svg" : "math" === t ? "math" : void 0
        }

        function oe(t) {
            if (!bi)return !0;
            if (ko(t))return !1;
            if (t = t.toLowerCase(), null != Ao[t])return Ao[t];
            var e = document.createElement(t);
            return t.indexOf("-") > -1 ? Ao[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : Ao[t] = /HTMLUnknownElement/.test(e.toString())
        }

        function ae(t) {
            if ("string" == typeof t) {
                if (t = document.querySelector(t), !t)return document.createElement("div")
            }
            return t
        }

        function se(t, e) {
            var n = document.createElement(t);
            return "select" !== t ? n : (e.data && e.data.attrs && "multiple" in e.data.attrs && n.setAttribute("multiple", "multiple"), n)
        }

        function ue(t, e) {
            return document.createElementNS(xo[t], e)
        }

        function ce(t) {
            return document.createTextNode(t)
        }

        function le(t) {
            return document.createComment(t)
        }

        function fe(t, e, n) {
            t.insertBefore(e, n)
        }

        function pe(t, e) {
            t.removeChild(e)
        }

        function de(t, e) {
            t.appendChild(e)
        }

        function he(t) {
            return t.parentNode
        }

        function ve(t) {
            return t.nextSibling
        }

        function ge(t) {
            return t.tagName
        }

        function me(t, e) {
            t.textContent = e
        }

        function ye(t, e, n) {
            t.setAttribute(e, n)
        }

        function be(t, e) {
            var n = t.data.ref;
            if (n) {
                var r = t.context, i = t.componentInstance || t.elm, a = r.$refs;
                e ? Array.isArray(a[n]) ? o(a[n], i) : a[n] === i && (a[n] = void 0) : t.data.refInFor ? Array.isArray(a[n]) && a[n].indexOf(i) < 0 ? a[n].push(i) : a[n] = [i] : a[n] = i
            }
        }

        function _e(t) {
            return null == t
        }

        function we(t) {
            return null != t
        }

        function xe(t, e) {
            return t.key === e.key && t.tag === e.tag && t.isComment === e.isComment && !t.data == !e.data
        }

        function Ce(t, e, n) {
            var r, i, o = {};
            for (r = e; r <= n; ++r)i = t[r].key, we(i) && (o[i] = r);
            return o
        }

        function Te(t) {
            function e(t) {
                return new Bi(A.tagName(t).toLowerCase(), {}, [], void 0, t)
            }

            function n(t, e) {
                function n() {
                    0 === --n.listeners && r(t)
                }

                return n.listeners = e, n
            }

            function r(t) {
                var e = A.parentNode(t);
                e && A.removeChild(e, t)
            }

            function o(t, e, n, r, i) {
                if (t.isRootInsert = !i, !a(t, e, n, r)) {
                    var o = t.data, s = t.children, u = t.tag;
                    we(u) ? (t.elm = t.ns ? A.createElementNS(t.ns, u) : A.createElement(u, t), h(t), f(t, s, e), we(o) && d(t, e), l(n, t.elm, r)) : t.isComment ? (t.elm = A.createComment(t.text), l(n, t.elm, r)) : (t.elm = A.createTextNode(t.text), l(n, t.elm, r))
                }
            }

            function a(t, e, n, r) {
                var i = t.data;
                if (we(i)) {
                    var o = we(t.componentInstance) && i.keepAlive;
                    if (we(i = i.hook) && we(i = i.init) && i(t, !1, n, r), we(t.componentInstance))return u(t, e), o && c(t, e, n, r), !0
                }
            }

            function u(t, e) {
                t.data.pendingInsert && e.push.apply(e, t.data.pendingInsert), t.elm = t.componentInstance.$el, p(t) ? (d(t, e), h(t)) : (be(t), e.push(t))
            }

            function c(t, e, n, r) {
                for (var i,
                         o = t; o.componentInstance;)if (o = o.componentInstance._vnode, we(i = o.data) && we(i = i.transition)) {
                    for (i = 0; i < $.activate.length; ++i)$.activate[i](Oo, o);
                    e.push(o);
                    break
                }
                l(n, t.elm, r)
            }

            function l(t, e, n) {
                t && (n ? A.insertBefore(t, e, n) : A.appendChild(t, e))
            }

            function f(t, e, n) {
                if (Array.isArray(e))for (var r = 0; r < e.length; ++r)o(e[r], n, t.elm, null, !0); else s(t.text) && A.appendChild(t.elm, A.createTextNode(t.text))
            }

            function p(t) {
                for (; t.componentInstance;)t = t.componentInstance._vnode;
                return we(t.tag)
            }

            function d(t, e) {
                for (var n = 0; n < $.create.length; ++n)$.create[n](Oo, t);
                C = t.data.hook, we(C) && (C.create && C.create(Oo, t), C.insert && e.push(t))
            }

            function h(t) {
                var e;
                we(e = t.context) && we(e = e.$options._scopeId) && A.setAttribute(t.elm, e, ""), we(e = Zi) && e !== t.context && we(e = e.$options._scopeId) && A.setAttribute(t.elm, e, "")
            }

            function v(t, e, n, r, i, a) {
                for (; r <= i; ++r)o(n[r], a, t, e)
            }

            function g(t) {
                var e, n, r = t.data;
                if (we(r))for (we(e = r.hook) && we(e = e.destroy) && e(t), e = 0; e < $.destroy.length; ++e)$.destroy[e](t);
                if (we(e = t.children))for (n = 0; n < t.children.length; ++n)g(t.children[n])
            }

            function m(t, e, n, i) {
                for (; n <= i; ++n) {
                    var o = e[n];
                    we(o) && (we(o.tag) ? (y(o), g(o)) : r(o.elm))
                }
            }

            function y(t, e) {
                if (e || we(t.data)) {
                    var i = $.remove.length + 1;
                    for (e ? e.listeners += i : e = n(t.elm, i), we(C = t.componentInstance) && we(C = C._vnode) && we(C.data) && y(C, e), C = 0; C < $.remove.length; ++C)$.remove[C](t, e);
                    we(C = t.data.hook) && we(C = C.remove) ? C(t, e) : e()
                } else r(t.elm)
            }

            function b(t, e, n, r, i) {
                for (var a, s, u, c, l = 0, f = 0, p = e.length - 1, d = e[0], h = e[p], g = n.length - 1, y = n[0],
                         b = n[g],
                         w = !i; l <= p && f <= g;)_e(d) ? d = e[++l] : _e(h) ? h = e[--p] : xe(d, y) ? (_(d, y, r), d = e[++l], y = n[++f]) : xe(h, b) ? (_(h, b, r), h = e[--p], b = n[--g]) : xe(d, b) ? (_(d, b, r), w && A.insertBefore(t, d.elm, A.nextSibling(h.elm)), d = e[++l], b = n[--g]) : xe(h, y) ? (_(h, y, r), w && A.insertBefore(t, h.elm, d.elm), h = e[--p], y = n[++f]) : (_e(a) && (a = Ce(e, l, p)), s = we(y.key) ? a[y.key] : null, _e(s) ? (o(y, r, t, d.elm), y = n[++f]) : (u = e[s], xe(u, y) ? (_(u, y, r), e[s] = void 0, w && A.insertBefore(t, y.elm, d.elm), y = n[++f]) : (o(y, r, t, d.elm), y = n[++f])));
                l > p ? (c = _e(n[g + 1]) ? null : n[g + 1].elm, v(t, c, n, f, g, r)) : f > g && m(t, e, l, p)
            }

            function _(t, e, n, r) {
                if (t !== e) {
                    if (e.isStatic && t.isStatic && e.key === t.key && (e.isCloned || e.isOnce))return e.elm = t.elm, void(e.componentInstance = t.componentInstance);
                    var i, o = e.data, a = we(o);
                    a && we(i = o.hook) && we(i = i.prepatch) && i(t, e);
                    var s = e.elm = t.elm, u = t.children, c = e.children;
                    if (a && p(e)) {
                        for (i = 0; i < $.update.length; ++i)$.update[i](t, e);
                        we(i = o.hook) && we(i = i.update) && i(t, e)
                    }
                    _e(e.text) ? we(u) && we(c) ? u !== c && b(s, u, c, n, r) : we(c) ? (we(t.text) && A.setTextContent(s, ""), v(s, null, c, 0, c.length - 1, n)) : we(u) ? m(s, u, 0, u.length - 1) : we(t.text) && A.setTextContent(s, "") : t.text !== e.text && A.setTextContent(s, e.text), a && we(i = o.hook) && we(i = i.postpatch) && i(t, e)
                }
            }

            function w(t, e, n) {
                if (n && t.parent) t.parent.data.pendingInsert = e; else for (var r = 0; r < e.length; ++r)e[r].data.hook.insert(e[r])
            }

            function x(t, e, n) {
                e.elm = t;
                var r = e.tag, i = e.data, o = e.children;
                if (we(i) && (we(C = i.hook) && we(C = C.init) && C(e, !0), we(C = e.componentInstance)))return u(e, n), !0;
                if (we(r)) {
                    if (we(o))if (t.hasChildNodes()) {
                        for (var a = !0, s = t.firstChild, c = 0; c < o.length; c++) {
                            if (!s || !x(s, o[c], n)) {
                                a = !1;
                                break
                            }
                            s = s.nextSibling
                        }
                        if (!a || s)return !1
                    } else f(e, o, n);
                    if (we(i))for (var l in i)if (!E(l)) {
                        d(e, n);
                        break
                    }
                } else t.data !== e.text && (t.data = e.text);
                return !0
            }

            var C, T, $ = {}, k = t.modules, A = t.nodeOps;
            for (C = 0; C < jo.length; ++C)for ($[jo[C]] = [], T = 0; T < k.length; ++T)void 0 !== k[T][jo[C]] && $[jo[C]].push(k[T][jo[C]]);
            var E = i("attrs,style,class,staticClass,staticStyle,key");
            return function (t, n, r, i, a, s) {
                if (!n)return void(t && g(t));
                var u = !1, c = [];
                if (t) {
                    var l = we(t.nodeType);
                    if (!l && xe(t, n)) _(t, n, c, i); else {
                        if (l) {
                            if (1 === t.nodeType && t.hasAttribute("server-rendered") && (t.removeAttribute("server-rendered"), r = !0), r && x(t, n, c))return w(n, c, !0), t;
                            t = e(t)
                        }
                        var f = t.elm, d = A.parentNode(f);
                        if (o(n, c, f._leaveCb ? null : d, A.nextSibling(f)), n.parent) {
                            for (var h = n.parent; h;)h.elm = n.elm, h = h.parent;
                            if (p(n))for (var v = 0; v < $.create.length; ++v)$.create[v](Oo, n.parent)
                        }
                        null !== d ? m(d, [t], 0, 0) : we(t.tag) && g(t)
                    }
                } else u = !0, o(n, c, a, s);
                return w(n, c, u), n.elm
            }
        }

        function $e(t, e) {
            (t.data.directives || e.data.directives) && ke(t, e)
        }

        function ke(t, e) {
            var n, r, i, o = t === Oo, a = e === Oo, s = Ae(t.data.directives, t.context),
                u = Ae(e.data.directives, e.context), c = [], l = [];
            for (n in u)r = s[n], i = u[n], r ? (i.oldValue = r.value, Se(i, "update", e, t), i.def && i.def.componentUpdated && l.push(i)) : (Se(i, "bind", e, t), i.def && i.def.inserted && c.push(i));
            if (c.length) {
                var f = function () {
                    for (var n = 0; n < c.length; n++)Se(c[n], "inserted", e, t)
                };
                o ? it(e.data.hook || (e.data.hook = {}), "insert", f, "dir-insert") : f()
            }
            if (l.length && it(e.data.hook || (e.data.hook = {}), "postpatch", function () {
                    for (var n = 0; n < l.length; n++)Se(l[n], "componentUpdated", e, t)
                }, "dir-postpatch"), !o)for (n in s)u[n] || Se(s[n], "unbind", t, t, a)
        }

        function Ae(t, e) {
            var n = Object.create(null);
            if (!t)return n;
            var r, i;
            for (r = 0; r < t.length; r++)i = t[r], i.modifiers || (i.modifiers = Do), n[Ee(i)] = i, i.def = F(e.$options, "directives", i.name, !0);
            return n
        }

        function Ee(t) {
            return t.rawName || t.name + "." + Object.keys(t.modifiers || {}).join(".")
        }

        function Se(t, e, n, r, i) {
            var o = t.def && t.def[e];
            o && o(n.elm, t, n, r, i)
        }

        function Oe(t, e) {
            if (t.data.attrs || e.data.attrs) {
                var n, r, i, o = e.elm, a = t.data.attrs || {}, s = e.data.attrs || {};
                s.__ob__ && (s = e.data.attrs = f({}, s));
                for (n in s)r = s[n], i = a[n], i !== r && je(o, n, r);
                xi && s.value !== a.value && je(o, "value", s.value);
                for (n in a)null == s[n] && (bo(n) ? o.removeAttributeNS(yo, _o(n)) : go(n) || o.removeAttribute(n))
            }
        }

        function je(t, e, n) {
            mo(e) ? wo(n) ? t.removeAttribute(e) : t.setAttribute(e, e) : go(e) ? t.setAttribute(e, wo(n) || "false" === n ? "false" : "true") : bo(e) ? wo(n) ? t.removeAttributeNS(yo, _o(e)) : t.setAttributeNS(yo, e, n) : wo(n) ? t.removeAttribute(e) : t.setAttribute(e, n)
        }

        function Ne(t, e) {
            var n = e.elm, r = e.data, i = t.data;
            if (r.staticClass || r.class || i && (i.staticClass || i.class)) {
                var o = Qt(e), a = n._transitionClasses;
                a && (o = ne(o, re(a))), o !== n._prevClass && (n.setAttribute("class", o), n._prevClass = o)
            }
        }

        function De(t, e, n, r) {
            if (n) {
                var i = e, o = fo;
                e = function (n) {
                    Ie(t, e, r, o), 1 === arguments.length ? i(n) : i.apply(null, arguments)
                }
            }
            fo.addEventListener(t, e, r)
        }

        function Ie(t, e, n, r) {
            (r || fo).removeEventListener(t, e, n)
        }

        function Re(t, e) {
            if (t.data.on || e.data.on) {
                var n = e.data.on || {}, r = t.data.on || {};
                fo = e.elm, at(n, r, De, Ie, e.context)
            }
        }

        function Le(t, e) {
            if (t.data.domProps || e.data.domProps) {
                var n, r, i = e.elm, o = t.data.domProps || {}, a = e.data.domProps || {};
                a.__ob__ && (a = e.data.domProps = f({}, a));
                for (n in o)null == a[n] && (i[n] = "");
                for (n in a)if (r = a[n], "textContent" !== n && "innerHTML" !== n || (e.children && (e.children.length = 0), r !== o[n]))if ("value" === n) {
                    i._value = r;
                    var s = null == r ? "" : String(r);
                    Pe(i, e, s) && (i.value = s)
                } else i[n] = r
            }
        }

        function Pe(t, e, n) {
            return !t.composing && ("option" === e.tag || Fe(t, n) || qe(e, n))
        }

        function Fe(t, e) {
            return document.activeElement !== t && t.value !== e
        }

        function qe(t, e) {
            var n = t.elm.value, i = t.elm._vModifiers;
            return i && i.number || "number" === t.elm.type ? r(n) !== r(e) : i && i.trim ? n.trim() !== e.trim() : n !== e
        }

        function Me(t) {
            var e = He(t.style);
            return t.staticStyle ? f(t.staticStyle, e) : e
        }

        function He(t) {
            return Array.isArray(t) ? h(t) : "string" == typeof t ? qo(t) : t
        }

        function Be(t, e) {
            var n, r = {};
            if (e)for (var i = t; i.componentInstance;)i = i.componentInstance._vnode, i.data && (n = Me(i.data)) && f(r, n);
            (n = Me(t.data)) && f(r, n);
            for (var o = t; o = o.parent;)o.data && (n = Me(o.data)) && f(r, n);
            return r
        }

        function Ue(t, e) {
            var n = e.data, r = t.data;
            if (n.staticStyle || n.style || r.staticStyle || r.style) {
                var i, o, a = e.elm, s = t.data.staticStyle, u = t.data.style || {}, c = s || u,
                    l = He(e.data.style) || {};
                e.data.style = l.__ob__ ? f({}, l) : l;
                var p = Be(e, !0);
                for (o in c)null == p[o] && Bo(a, o, "");
                for (o in p)i = p[o], i !== c[o] && Bo(a, o, null == i ? "" : i)
            }
        }

        function We(t, e) {
            if (e && e.trim())if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
                return t.classList.add(e)
            }) : t.classList.add(e); else {
                var n = " " + t.getAttribute("class") + " ";
                n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim())
            }
        }

        function ze(t, e) {
            if (e && e.trim())if (t.classList) e.indexOf(" ") > -1 ? e.split(/\s+/).forEach(function (e) {
                return t.classList.remove(e)
            }) : t.classList.remove(e); else {
                for (var n = " " + t.getAttribute("class") + " ",
                         r = " " + e + " "; n.indexOf(r) >= 0;)n = n.replace(r, " ");
                t.setAttribute("class", n.trim())
            }
        }

        function Ve(t) {
            Qo(function () {
                Qo(t)
            })
        }

        function Xe(t, e) {
            (t._transitionClasses || (t._transitionClasses = [])).push(e), We(t, e)
        }

        function Ke(t, e) {
            t._transitionClasses && o(t._transitionClasses, e), ze(t, e)
        }

        function Je(t, e, n) {
            var r = Ge(t, e), i = r.type, o = r.timeout, a = r.propCount;
            if (!i)return n();
            var s = i === Xo ? Go : Yo, u = 0, c = function () {
                t.removeEventListener(s, l), n()
            }, l = function (e) {
                e.target === t && ++u >= a && c()
            };
            setTimeout(function () {
                u < a && c()
            }, o + 1), t.addEventListener(s, l)
        }

        function Ge(t, e) {
            var n, r = window.getComputedStyle(t), i = r[Jo + "Delay"].split(", "), o = r[Jo + "Duration"].split(", "),
                a = Ze(i, o), s = r[Zo + "Delay"].split(", "), u = r[Zo + "Duration"].split(", "), c = Ze(s, u), l = 0,
                f = 0;
            e === Xo ? a > 0 && (n = Xo, l = a, f = o.length) : e === Ko ? c > 0 && (n = Ko, l = c, f = u.length) : (l = Math.max(a, c), n = l > 0 ? a > c ? Xo : Ko : null, f = n ? n === Xo ? o.length : u.length : 0);
            var p = n === Xo && ta.test(r[Jo + "Property"]);
            return {type: n, timeout: l, propCount: f, hasTransform: p}
        }

        function Ze(t, e) {
            for (; t.length < e.length;)t = t.concat(t);
            return Math.max.apply(null, e.map(function (e, n) {
                return Ye(e) + Ye(t[n])
            }))
        }

        function Ye(t) {
            return 1e3 * Number(t.slice(0, -1))
        }

        function Qe(t, e) {
            var n = t.elm;
            n._leaveCb && (n._leaveCb.cancelled = !0,
                n._leaveCb());
            var r = en(t.data.transition);
            if (r && !n._enterCb && 1 === n.nodeType) {
                for (var i = r.css, o = r.type, a = r.enterClass, s = r.enterToClass, u = r.enterActiveClass,
                         c = r.appearClass, l = r.appearToClass, f = r.appearActiveClass, p = r.beforeEnter,
                         d = r.enter, h = r.afterEnter, v = r.enterCancelled, g = r.beforeAppear, m = r.appear,
                         y = r.afterAppear, b = r.appearCancelled, _ = Zi,
                         w = Zi.$vnode; w && w.parent;)w = w.parent, _ = w.context;
                var x = !_._isMounted || !t.isRootInsert;
                if (!x || m || "" === m) {
                    var C = x ? c : a, T = x ? f : u, $ = x ? l : s, k = x ? g || p : p,
                        A = x && "function" == typeof m ? m : d, E = x ? y || h : h, S = x ? b || v : v,
                        O = i !== !1 && !xi, j = A && (A._length || A.length) > 1, N = n._enterCb = nn(function () {
                            O && (Ke(n, $), Ke(n, T)), N.cancelled ? (O && Ke(n, C), S && S(n)) : E && E(n), n._enterCb = null
                        });
                    t.data.show || it(t.data.hook || (t.data.hook = {}), "insert", function () {
                        var e = n.parentNode, r = e && e._pending && e._pending[t.key];
                        r && r.tag === t.tag && r.elm._leaveCb && r.elm._leaveCb(), A && A(n, N)
                    }, "transition-insert"), k && k(n), O && (Xe(n, C), Xe(n, T), Ve(function () {
                        Xe(n, $), Ke(n, C), N.cancelled || j || Je(n, o, N)
                    })), t.data.show && (e && e(), A && A(n, N)), O || j || N()
                }
            }
        }

        function tn(t, e) {
            function n() {
                m.cancelled || (t.data.show || ((r.parentNode._pending || (r.parentNode._pending = {}))[t.key] = t), l && l(r), v && (Xe(r, s), Xe(r, c), Ve(function () {
                    Xe(r, u), Ke(r, s), m.cancelled || g || Je(r, a, m)
                })), f && f(r, m), v || g || m())
            }

            var r = t.elm;
            r._enterCb && (r._enterCb.cancelled = !0, r._enterCb());
            var i = en(t.data.transition);
            if (!i)return e();
            if (!r._leaveCb && 1 === r.nodeType) {
                var o = i.css, a = i.type, s = i.leaveClass, u = i.leaveToClass, c = i.leaveActiveClass,
                    l = i.beforeLeave, f = i.leave, p = i.afterLeave, d = i.leaveCancelled, h = i.delayLeave,
                    v = o !== !1 && !xi, g = f && (f._length || f.length) > 1, m = r._leaveCb = nn(function () {
                        r.parentNode && r.parentNode._pending && (r.parentNode._pending[t.key] = null), v && (Ke(r, u), Ke(r, c)), m.cancelled ? (v && Ke(r, s), d && d(r)) : (e(), p && p(r)), r._leaveCb = null
                    });
                h ? h(n) : n()
            }
        }

        function en(t) {
            if (t) {
                if ("object" == typeof t) {
                    var e = {};
                    return t.css !== !1 && f(e, ea(t.name || "v")), f(e, t), e
                }
                return "string" == typeof t ? ea(t) : void 0
            }
        }

        function nn(t) {
            var e = !1;
            return function () {
                e || (e = !0, t())
            }
        }

        function rn(t, e) {
            e.data.show || Qe(e)
        }

        function on(t, e, n) {
            var r = e.value, i = t.multiple;
            if (!i || Array.isArray(r)) {
                for (var o, a, s = 0,
                         u = t.options.length; s < u; s++)if (a = t.options[s], i) o = y(r, sn(a)) > -1, a.selected !== o && (a.selected = o); else if (m(sn(a), r))return void(t.selectedIndex !== s && (t.selectedIndex = s));
                i || (t.selectedIndex = -1)
            }
        }

        function an(t, e) {
            for (var n = 0, r = e.length; n < r; n++)if (m(sn(e[n]), t))return !1;
            return !0
        }

        function sn(t) {
            return "_value" in t ? t._value : t.value
        }

        function un(t) {
            t.target.composing = !0
        }

        function cn(t) {
            t.target.composing = !1, ln(t.target, "input")
        }

        function ln(t, e) {
            var n = document.createEvent("HTMLEvents");
            n.initEvent(e, !0, !0), t.dispatchEvent(n)
        }

        function fn(t) {
            return !t.componentInstance || t.data && t.data.transition ? t : fn(t.componentInstance._vnode)
        }

        function pn(t) {
            var e = t && t.componentOptions;
            return e && e.Ctor.options.abstract ? pn(lt(e.children)) : t
        }

        function dn(t) {
            var e = {}, n = t.$options;
            for (var r in n.propsData)e[r] = t[r];
            var i = n._parentListeners;
            for (var o in i)e[ui(o)] = i[o].fn;
            return e
        }

        function hn(t, e) {
            return /\d-keep-alive$/.test(e.tag) ? t("keep-alive") : null
        }

        function vn(t) {
            for (; t = t.parent;)if (t.data.transition)return !0
        }

        function gn(t, e) {
            return e.key === t.key && e.tag === t.tag
        }

        function mn(t) {
            t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb()
        }

        function yn(t) {
            t.data.newPos = t.elm.getBoundingClientRect()
        }

        function bn(t) {
            var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, i = e.top - n.top;
            if (r || i) {
                t.data.moved = !0;
                var o = t.elm.style;
                o.transform = o.WebkitTransform = "translate(" + r + "px," + i + "px)", o.transitionDuration = "0s"
            }
        }

        function _n(t, e) {
            var n = document.createElement("div");
            return n.innerHTML = '<div a="' + t + '">', n.innerHTML.indexOf(e) > 0
        }

        function wn(t) {
            return ha = ha || document.createElement("div"), ha.innerHTML = t, ha.textContent
        }

        function xn(t, e) {
            return e && (t = t.replace(ss, "\n")), t.replace(os, "<").replace(as, ">").replace(us, "&").replace(cs, '"')
        }

        function Cn(t, e) {
            function n(e) {
                f += e, t = t.substring(e)
            }

            function r() {
                var e = t.match($a);
                if (e) {
                    var r = {tagName: e[1], attrs: [], start: f};
                    n(e[0].length);
                    for (var i, o; !(i = t.match(ka)) && (o = t.match(xa));)n(o[0].length), r.attrs.push(o);
                    if (i)return r.unarySlash = i[1], n(i[0].length), r.end = f, r
                }
            }

            function i(t) {
                var n = t.tagName, r = t.unarySlash;
                c && ("p" === s && ya(n) && o(s), ma(n) && s === n && o(n));
                for (var i = l(n) || "html" === n && "head" === s || !!r, a = t.attrs.length, f = new Array(a),
                         p = 0; p < a; p++) {
                    var d = t.attrs[p];
                    ja && d[0].indexOf('""') === -1 && ("" === d[3] && delete d[3], "" === d[4] && delete d[4], "" === d[5] && delete d[5]);
                    var h = d[3] || d[4] || d[5] || "";
                    f[p] = {name: d[1], value: xn(h, e.shouldDecodeNewlines)}
                }
                i || (u.push({
                    tag: n,
                    lowerCasedTag: n.toLowerCase(),
                    attrs: f
                }), s = n, r = ""), e.start && e.start(n, f, i, t.start, t.end)
            }

            function o(t, n, r) {
                var i, o;
                if (null == n && (n = f), null == r && (r = f), t && (o = t.toLowerCase()), t)for (i = u.length - 1; i >= 0 && u[i].lowerCasedTag !== o; i--); else i = 0;
                if (i >= 0) {
                    for (var a = u.length - 1; a >= i; a--)e.end && e.end(u[a].tag, n, r);
                    u.length = i, s = i && u[i - 1].tag
                } else"br" === o ? e.start && e.start(t, [], !0, n, r) : "p" === o && (e.start && e.start(t, [], !1, n, r), e.end && e.end(t, n, r))
            }

            for (var a, s, u = [], c = e.expectHTML, l = e.isUnaryTag || hi, f = 0; t;) {
                if (a = t, s && rs(s)) {
                    var p = s.toLowerCase(), d = is[p] || (is[p] = new RegExp("([\\s\\S]*?)(</" + p + "[^>]*>)", "i")),
                        h = 0, v = t.replace(d, function (t, n, r) {
                            return h = r.length, "script" !== p && "style" !== p && "noscript" !== p && (n = n.replace(/<!--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), e.chars && e.chars(n), ""
                        });
                    f += t.length - v.length, t = v, o(p, f - h, f)
                } else {
                    var g = t.indexOf("<");
                    if (0 === g) {
                        if (Sa.test(t)) {
                            var m = t.indexOf("-->");
                            if (m >= 0) {
                                n(m + 3);
                                continue
                            }
                        }
                        if (Oa.test(t)) {
                            var y = t.indexOf("]>");
                            if (y >= 0) {
                                n(y + 2);
                                continue
                            }
                        }
                        var b = t.match(Ea);
                        if (b) {
                            n(b[0].length);
                            continue
                        }
                        var _ = t.match(Aa);
                        if (_) {
                            var w = f;
                            n(_[0].length), o(_[1], w, f);
                            continue
                        }
                        var x = r();
                        if (x) {
                            i(x);
                            continue
                        }
                    }
                    var C = void 0, T = void 0, $ = void 0;
                    if (g > 0) {
                        for (T = t.slice(g); !(Aa.test(T) || $a.test(T) || Sa.test(T) || Oa.test(T) || ($ = T.indexOf("<", 1), $ < 0));)g += $, T = t.slice(g);
                        C = t.substring(0, g), n(g)
                    }
                    g < 0 && (C = t, t = ""), e.chars && C && e.chars(C)
                }
                if (t === a && e.chars) {
                    e.chars(t);
                    break
                }
            }
            o()
        }

        function Tn(t) {
            function e() {
                (a || (a = [])).push(t.slice(h, i).trim()), h = i + 1
            }

            var n, r, i, o, a, s = !1, u = !1, c = !1, l = !1, f = 0, p = 0, d = 0, h = 0;
            for (i = 0; i < t.length; i++)if (r = n, n = t.charCodeAt(i), s) 39 === n && 92 !== r && (s = !1); else if (u) 34 === n && 92 !== r && (u = !1); else if (c) 96 === n && 92 !== r && (c = !1); else if (l) 47 === n && 92 !== r && (l = !1); else if (124 !== n || 124 === t.charCodeAt(i + 1) || 124 === t.charCodeAt(i - 1) || f || p || d) {
                switch (n) {
                    case 34:
                        u = !0;
                        break;
                    case 39:
                        s = !0;
                        break;
                    case 96:
                        c = !0;
                        break;
                    case 40:
                        d++;
                        break;
                    case 41:
                        d--;
                        break;
                    case 91:
                        p++;
                        break;
                    case 93:
                        p--;
                        break;
                    case 123:
                        f++;
                        break;
                    case 125:
                        f--
                }
                if (47 === n) {
                    for (var v = i - 1, g = void 0; v >= 0 && (g = t.charAt(v), " " === g); v--);
                    g && /[\w$]/.test(g) || (l = !0)
                }
            } else void 0 === o ? (h = i + 1, o = t.slice(0, i).trim()) : e();
            if (void 0 === o ? o = t.slice(0, i).trim() : 0 !== h && e(), a)for (i = 0; i < a.length; i++)o = $n(o, a[i]);
            return o
        }

        function $n(t, e) {
            var n = e.indexOf("(");
            if (n < 0)return '_f("' + e + '")(' + t + ")";
            var r = e.slice(0, n), i = e.slice(n + 1);
            return '_f("' + r + '")(' + t + "," + i
        }

        function kn(t, e) {
            var n = e ? ps(e) : ls;
            if (n.test(t)) {
                for (var r, i, o = [], a = n.lastIndex = 0; r = n.exec(t);) {
                    i = r.index, i > a && o.push(JSON.stringify(t.slice(a, i)));
                    var s = Tn(r[1].trim());
                    o.push("_s(" + s + ")"), a = i + r[0].length
                }
                return a < t.length && o.push(JSON.stringify(t.slice(a))), o.join("+")
            }
        }

        function An(t) {
            console.error("[Vue parser]: " + t)
        }

        function En(t, e) {
            return t ? t.map(function (t) {
                return t[e]
            }).filter(function (t) {
                return t
            }) : []
        }

        function Sn(t, e, n) {
            (t.props || (t.props = [])).push({name: e, value: n})
        }

        function On(t, e, n) {
            (t.attrs || (t.attrs = [])).push({name: e, value: n})
        }

        function jn(t, e, n, r, i, o) {
            (t.directives || (t.directives = [])).push({name: e, rawName: n, value: r, arg: i, modifiers: o})
        }

        function Nn(t, e, n, r, i) {
            r && r.capture && (delete r.capture, e = "!" + e), r && r.once && (delete r.once, e = "~" + e);
            var o;
            r && r.native ? (delete r.native, o = t.nativeEvents || (t.nativeEvents = {})) : o = t.events || (t.events = {});
            var a = {value: n, modifiers: r}, s = o[e];
            Array.isArray(s) ? i ? s.unshift(a) : s.push(a) : s ? o[e] = i ? [a, s] : [s, a] : o[e] = a
        }

        function Dn(t, e, n) {
            var r = In(t, ":" + e) || In(t, "v-bind:" + e);
            if (null != r)return Tn(r);
            if (n !== !1) {
                var i = In(t, e);
                if (null != i)return JSON.stringify(i)
            }
        }

        function In(t, e) {
            var n;
            if (null != (n = t.attrsMap[e]))for (var r = t.attrsList, i = 0,
                                                     o = r.length; i < o; i++)if (r[i].name === e) {
                r.splice(i, 1);
                break
            }
            return n
        }

        function Rn(t) {
            if (Da = t, Na = Da.length, Ra = La = Pa = 0, t.indexOf("[") < 0 || t.lastIndexOf("]") < Na - 1)return {
                exp: t,
                idx: null
            };
            for (; !Pn();)Ia = Ln(), Fn(Ia) ? Mn(Ia) : 91 === Ia && qn(Ia);
            return {exp: t.substring(0, La), idx: t.substring(La + 1, Pa)}
        }

        function Ln() {
            return Da.charCodeAt(++Ra)
        }

        function Pn() {
            return Ra >= Na
        }

        function Fn(t) {
            return 34 === t || 39 === t
        }

        function qn(t) {
            var e = 1;
            for (La = Ra; !Pn();)if (t = Ln(), Fn(t)) Mn(t); else if (91 === t && e++, 93 === t && e--, 0 === e) {
                Pa = Ra;
                break
            }
        }

        function Mn(t) {
            for (var e = t; !Pn() && (t = Ln(), t !== e););
        }

        function Hn(t, e) {
            Fa = e.warn || An, qa = e.getTagNamespace || hi, Ma = e.mustUseProp || hi, Ha = e.isPreTag || hi, Ba = En(e.modules, "preTransformNode"), Ua = En(e.modules, "transformNode"), Wa = En(e.modules, "postTransformNode"), za = e.delimiters;
            var n, r, i = [], o = e.preserveWhitespace !== !1, a = !1, s = !1;
            return Cn(t, {
                expectHTML: e.expectHTML,
                isUnaryTag: e.isUnaryTag,
                shouldDecodeNewlines: e.shouldDecodeNewlines,
                start: function (t, o, u) {
                    function c(t) {
                    }

                    var l = r && r.ns || qa(t);
                    wi && "svg" === l && (o = or(o));
                    var f = {type: 1, tag: t, attrsList: o, attrsMap: rr(o), parent: r, children: []};
                    l && (f.ns = l), ir(f) && !ki() && (f.forbidden = !0);
                    for (var p = 0; p < Ba.length; p++)Ba[p](f, e);
                    if (a || (Bn(f), f.pre && (a = !0)), Ha(f.tag) && (s = !0), a) Un(f); else {
                        Vn(f), Xn(f), Zn(f), Wn(f), f.plain = !f.key && !o.length, zn(f), Yn(f), Qn(f);
                        for (var d = 0; d < Ua.length; d++)Ua[d](f, e);
                        tr(f)
                    }
                    if (n ? i.length || n.if && (f.elseif || f.else) && (c(f), Gn(n, {
                                exp: f.elseif,
                                block: f
                            })) : (n = f, c(n)), r && !f.forbidden)if (f.elseif || f.else) Kn(f, r); else if (f.slotScope) {
                        r.plain = !1;
                        var h = f.slotTarget || "default";
                        (r.scopedSlots || (r.scopedSlots = {}))[h] = f
                    } else r.children.push(f), f.parent = r;
                    u || (r = f, i.push(f));
                    for (var v = 0; v < Wa.length; v++)Wa[v](f, e)
                },
                end: function () {
                    var t = i[i.length - 1], e = t.children[t.children.length - 1];
                    e && 3 === e.type && " " === e.text && t.children.pop(), i.length -= 1, r = i[i.length - 1], t.pre && (a = !1), Ha(t.tag) && (s = !1)
                },
                chars: function (t) {
                    if (r && (!wi || "textarea" !== r.tag || r.attrsMap.placeholder !== t)) {
                        var e = r.children;
                        if (t = s || t.trim() ? _s(t) : o && e.length ? " " : "") {
                            var n;
                            !a && " " !== t && (n = kn(t, za)) ? e.push({
                                type: 2,
                                expression: n,
                                text: t
                            }) : " " === t && " " === e[e.length - 1].text || r.children.push({type: 3, text: t})
                        }
                    }
                }
            }), n
        }

        function Bn(t) {
            null != In(t, "v-pre") && (t.pre = !0)
        }

        function Un(t) {
            var e = t.attrsList.length;
            if (e)for (var n = t.attrs = new Array(e), r = 0; r < e; r++)n[r] = {
                name: t.attrsList[r].name,
                value: JSON.stringify(t.attrsList[r].value)
            }; else t.pre || (t.plain = !0)
        }

        function Wn(t) {
            var e = Dn(t, "key");
            e && (t.key = e)
        }

        function zn(t) {
            var e = Dn(t, "ref");
            e && (t.ref = e, t.refInFor = er(t))
        }

        function Vn(t) {
            var e;
            if (e = In(t, "v-for")) {
                var n = e.match(hs);
                if (!n)return;
                t.for = n[2].trim();
                var r = n[1].trim(), i = r.match(vs);
                i ? (t.alias = i[1].trim(), t.iterator1 = i[2].trim(), i[3] && (t.iterator2 = i[3].trim())) : t.alias = r
            }
        }

        function Xn(t) {
            var e = In(t, "v-if");
            if (e) t.if = e, Gn(t, {exp: e, block: t}); else {
                null != In(t, "v-else") && (t.else = !0);
                var n = In(t, "v-else-if");
                n && (t.elseif = n)
            }
        }

        function Kn(t, e) {
            var n = Jn(e.children);
            n && n.if && Gn(n, {exp: t.elseif, block: t})
        }

        function Jn(t) {
            for (var e = t.length; e--;) {
                if (1 === t[e].type)return t[e];
                t.pop()
            }
        }

        function Gn(t, e) {
            t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e)
        }

        function Zn(t) {
            var e = In(t, "v-once");
            null != e && (t.once = !0)
        }

        function Yn(t) {
            if ("slot" === t.tag) t.slotName = Dn(t, "name"); else {
                var e = Dn(t, "slot");
                e && (t.slotTarget = '""' === e ? '"default"' : e), "template" === t.tag && (t.slotScope = In(t, "scope"))
            }
        }

        function Qn(t) {
            var e;
            (e = Dn(t, "is")) && (t.component = e), null != In(t, "inline-template") && (t.inlineTemplate = !0)
        }

        function tr(t) {
            var e, n, r, i, o, a, s, u, c = t.attrsList;
            for (e = 0, n = c.length; e < n; e++)if (r = i = c[e].name, o = c[e].value, ds.test(r))if (t.hasBindings = !0, s = nr(r), s && (r = r.replace(bs, "")), gs.test(r)) r = r.replace(gs, ""), o = Tn(o), u = !1, s && (s.prop && (u = !0, r = ui(r), "innerHtml" === r && (r = "innerHTML")), s.camel && (r = ui(r))), u || Ma(t.tag, t.attrsMap.type, r) ? Sn(t, r, o) : On(t, r, o); else if (ms.test(r)) r = r.replace(ms, ""), Nn(t, r, o, s); else {
                r = r.replace(ds, "");
                var l = r.match(ys);
                l && (a = l[1]) && (r = r.slice(0, -(a.length + 1))), jn(t, r, i, o, a, s)
            } else {
                On(t, r, JSON.stringify(o))
            }
        }

        function er(t) {
            for (var e = t; e;) {
                if (void 0 !== e.for)return !0;
                e = e.parent
            }
            return !1
        }

        function nr(t) {
            var e = t.match(bs);
            if (e) {
                var n = {};
                return e.forEach(function (t) {
                    n[t.slice(1)] = !0
                }), n
            }
        }

        function rr(t) {
            for (var e = {}, n = 0, r = t.length; n < r; n++)e[t[n].name] = t[n].value;
            return e
        }

        function ir(t) {
            return "style" === t.tag || "script" === t.tag && (!t.attrsMap.type || "text/javascript" === t.attrsMap.type)
        }

        function or(t) {
            for (var e = [], n = 0; n < t.length; n++) {
                var r = t[n];
                ws.test(r.name) || (r.name = r.name.replace(xs, ""), e.push(r))
            }
            return e
        }

        function ar(t, e) {
            t && (Va = Cs(e.staticKeys || ""), Xa = e.isReservedTag || hi, ur(t), cr(t, !1))
        }

        function sr(t) {
            return i("type,tag,attrsList,attrsMap,plain,parent,children,attrs" + (t ? "," + t : ""))
        }

        function ur(t) {
            if (t.static = fr(t), 1 === t.type) {
                if (!Xa(t.tag) && "slot" !== t.tag && null == t.attrsMap["inline-template"])return;
                for (var e = 0, n = t.children.length; e < n; e++) {
                    var r = t.children[e];
                    ur(r), r.static || (t.static = !1)
                }
            }
        }

        function cr(t, e) {
            if (1 === t.type) {
                if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && (1 !== t.children.length || 3 !== t.children[0].type))return void(t.staticRoot = !0);
                if (t.staticRoot = !1, t.children)for (var n = 0,
                                                           r = t.children.length; n < r; n++)cr(t.children[n], e || !!t.for);
                t.ifConditions && lr(t.ifConditions, e)
            }
        }

        function lr(t, e) {
            for (var n = 1, r = t.length; n < r; n++)cr(t[n].block, e)
        }

        function fr(t) {
            return 2 !== t.type && (3 === t.type || !(!t.pre && (t.hasBindings || t.if || t.for || oi(t.tag) || !Xa(t.tag) || pr(t) || !Object.keys(t).every(Va))))
        }

        function pr(t) {
            for (; t.parent;) {
                if (t = t.parent, "template" !== t.tag)return !1;
                if (t.for)return !0
            }
            return !1
        }

        function dr(t, e) {
            var n = e ? "nativeOn:{" : "on:{";
            for (var r in t)n += '"' + r + '":' + hr(r, t[r]) + ",";
            return n.slice(0, -1) + "}"
        }

        function hr(t, e) {
            if (e) {
                if (Array.isArray(e))return "[" + e.map(function (e) {
                        return hr(t, e)
                    }).join(",") + "]";
                if (e.modifiers) {
                    var n = "", r = [];
                    for (var i in e.modifiers)As[i] ? n += As[i] : r.push(i);
                    r.length && (n = vr(r) + n);
                    var o = $s.test(e.value) ? e.value + "($event)" : e.value;
                    return "function($event){" + n + o + "}"
                }
                return Ts.test(e.value) || $s.test(e.value) ? e.value : "function($event){" + e.value + "}"
            }
            return "function(){}"
        }

        function vr(t) {
            return "if(" + t.map(gr).join("&&") + ")return;"
        }

        function gr(t) {
            var e = parseInt(t, 10);
            if (e)return "$event.keyCode!==" + e;
            var n = ks[t];
            return "_k($event.keyCode," + JSON.stringify(t) + (n ? "," + JSON.stringify(n) : "") + ")"
        }

        function mr(t, e) {
            t.wrapData = function (n) {
                return "_b(" + n + ",'" + t.tag + "'," + e.value + (e.modifiers && e.modifiers.prop ? ",true" : "") + ")"
            }
        }

        function yr(t, e) {
            var n = Qa, r = Qa = [], i = ts;
            ts = 0, es = e, Ka = e.warn || An, Ja = En(e.modules, "transformCode"), Ga = En(e.modules, "genData"), Za = e.directives || {}, Ya = e.isReservedTag || hi;
            var o = t ? br(t) : '_c("div")';
            return Qa = n, ts = i, {render: "with(this){return " + o + "}", staticRenderFns: r}
        }

        function br(t) {
            if (t.staticRoot && !t.staticProcessed)return _r(t);
            if (t.once && !t.onceProcessed)return wr(t);
            if (t.for && !t.forProcessed)return Tr(t);
            if (t.if && !t.ifProcessed)return xr(t);
            if ("template" !== t.tag || t.slotTarget) {
                if ("slot" === t.tag)return Lr(t);
                var e;
                if (t.component) e = Pr(t.component, t); else {
                    var n = t.plain ? void 0 : $r(t), r = t.inlineTemplate ? null : Or(t, !0);
                    e = "_c('" + t.tag + "'" + (n ? "," + n : "") + (r ? "," + r : "") + ")"
                }
                for (var i = 0; i < Ja.length; i++)e = Ja[i](t, e);
                return e
            }
            return Or(t) || "void 0"
        }

        function _r(t) {
            return t.staticProcessed = !0, Qa.push("with(this){return " + br(t) + "}"), "_m(" + (Qa.length - 1) + (t.staticInFor ? ",true" : "") + ")"
        }

        function wr(t) {
            if (t.onceProcessed = !0, t.if && !t.ifProcessed)return xr(t);
            if (t.staticInFor) {
                for (var e = "", n = t.parent; n;) {
                    if (n.for) {
                        e = n.key;
                        break
                    }
                    n = n.parent
                }
                return e ? "_o(" + br(t) + "," + ts++ + (e ? "," + e : "") + ")" : br(t)
            }
            return _r(t)
        }

        function xr(t) {
            return t.ifProcessed = !0, Cr(t.ifConditions.slice())
        }

        function Cr(t) {
            function e(t) {
                return t.once ? wr(t) : br(t)
            }

            if (!t.length)return "_e()";
            var n = t.shift();
            return n.exp ? "(" + n.exp + ")?" + e(n.block) + ":" + Cr(t) : "" + e(n.block)
        }

        function Tr(t) {
            var e = t.for, n = t.alias, r = t.iterator1 ? "," + t.iterator1 : "",
                i = t.iterator2 ? "," + t.iterator2 : "";
            return t.forProcessed = !0, "_l((" + e + "),function(" + n + r + i + "){return " + br(t) + "})"
        }

        function $r(t) {
            var e = "{", n = kr(t);
            n && (e += n + ","), t.key && (e += "key:" + t.key + ","), t.ref && (e += "ref:" + t.ref + ","), t.refInFor && (e += "refInFor:true,"), t.pre && (e += "pre:true,"), t.component && (e += 'tag:"' + t.tag + '",');
            for (var r = 0; r < Ga.length; r++)e += Ga[r](t);
            if (t.attrs && (e += "attrs:{" + Fr(t.attrs) + "},"), t.props && (e += "domProps:{" + Fr(t.props) + "},"), t.events && (e += dr(t.events) + ","), t.nativeEvents && (e += dr(t.nativeEvents, !0) + ","), t.slotTarget && (e += "slot:" + t.slotTarget + ","), t.scopedSlots && (e += Er(t.scopedSlots) + ","), t.inlineTemplate) {
                var i = Ar(t);
                i && (e += i + ",")
            }
            return e = e.replace(/,$/, "") + "}", t.wrapData && (e = t.wrapData(e)), e
        }

        function kr(t) {
            var e = t.directives;
            if (e) {
                var n, r, i, o, a = "directives:[", s = !1;
                for (n = 0, r = e.length; n < r; n++) {
                    i = e[n], o = !0;
                    var u = Za[i.name] || Es[i.name];
                    u && (o = !!u(t, i, Ka)), o && (s = !0, a += '{name:"' + i.name + '",rawName:"' + i.rawName + '"' + (i.value ? ",value:(" + i.value + "),expression:" + JSON.stringify(i.value) : "") + (i.arg ? ',arg:"' + i.arg + '"' : "") + (i.modifiers ? ",modifiers:" + JSON.stringify(i.modifiers) : "") + "},")
                }
                return s ? a.slice(0, -1) + "]" : void 0
            }
        }

        function Ar(t) {
            var e = t.children[0];
            if (1 === e.type) {
                var n = yr(e, es);
                return "inlineTemplate:{render:function(){" + n.render + "},staticRenderFns:[" + n.staticRenderFns.map(function (t) {
                        return "function(){" + t + "}"
                    }).join(",") + "]}"
            }
        }

        function Er(t) {
            return "scopedSlots:{" + Object.keys(t).map(function (e) {
                    return Sr(e, t[e])
                }).join(",") + "}"
        }

        function Sr(t, e) {
            return t + ":function(" + String(e.attrsMap.scope) + "){return " + ("template" === e.tag ? Or(e) || "void 0" : br(e)) + "}"
        }

        function Or(t, e) {
            var n = t.children;
            if (n.length) {
                var r = n[0];
                if (1 === n.length && r.for && "template" !== r.tag && "slot" !== r.tag)return br(r);
                var i = jr(n);
                return "[" + n.map(Ir).join(",") + "]" + (e && i ? "," + i : "")
            }
        }

        function jr(t) {
            for (var e = 0, n = 0; n < t.length; n++) {
                var r = t[n];
                if (1 === r.type) {
                    if (Nr(r) || r.ifConditions && r.ifConditions.some(function (t) {
                            return Nr(t.block)
                        })) {
                        e = 2;
                        break
                    }
                    (Dr(r) || r.ifConditions && r.ifConditions.some(function (t) {
                        return Dr(t.block)
                    })) && (e = 1)
                }
            }
            return e
        }

        function Nr(t) {
            return void 0 !== t.for || "template" === t.tag || "slot" === t.tag
        }

        function Dr(t) {
            return !Ya(t.tag)
        }

        function Ir(t) {
            return 1 === t.type ? br(t) : Rr(t)
        }

        function Rr(t) {
            return "_v(" + (2 === t.type ? t.expression : qr(JSON.stringify(t.text))) + ")"
        }

        function Lr(t) {
            var e = t.slotName || '"default"', n = Or(t), r = "_t(" + e + (n ? "," + n : ""),
                i = t.attrs && "{" + t.attrs.map(function (t) {
                        return ui(t.name) + ":" + t.value
                    }).join(",") + "}", o = t.attrsMap["v-bind"];
            return !i && !o || n || (r += ",null"), i && (r += "," + i), o && (r += (i ? "" : ",null") + "," + o), r + ")"
        }

        function Pr(t, e) {
            var n = e.inlineTemplate ? null : Or(e, !0);
            return "_c(" + t + "," + $r(e) + (n ? "," + n : "") + ")"
        }

        function Fr(t) {
            for (var e = "", n = 0; n < t.length; n++) {
                var r = t[n];
                e += '"' + r.name + '":' + qr(r.value) + ","
            }
            return e.slice(0, -1)
        }

        function qr(t) {
            return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029")
        }

        function Mr(t, e) {
            var n = Hn(t.trim(), e);
            ar(n, e);
            var r = yr(n, e);
            return {ast: n, render: r.render, staticRenderFns: r.staticRenderFns}
        }

        function Hr(t, e) {
            var n = (e.warn || An, In(t, "class"));
            n && (t.staticClass = JSON.stringify(n));
            var r = Dn(t, "class", !1);
            r && (t.classBinding = r)
        }

        function Br(t) {
            var e = "";
            return t.staticClass && (e += "staticClass:" + t.staticClass + ","), t.classBinding && (e += "class:" + t.classBinding + ","), e
        }

        function Ur(t, e) {
            var n = (e.warn || An, In(t, "style"));
            if (n) {
                t.staticStyle = JSON.stringify(qo(n))
            }
            var r = Dn(t, "style", !1);
            r && (t.styleBinding = r)
        }

        function Wr(t) {
            var e = "";
            return t.staticStyle && (e += "staticStyle:" + t.staticStyle + ","), t.styleBinding && (e += "style:(" + t.styleBinding + "),"), e
        }

        function zr(t, e, n) {
            ns = n;
            var r = e.value, i = e.modifiers, o = t.tag, a = t.attrsMap.type;
            return "select" === o ? Jr(t, r, i) : "input" === o && "checkbox" === a ? Vr(t, r, i) : "input" === o && "radio" === a ? Xr(t, r, i) : Kr(t, r, i), !0
        }

        function Vr(t, e, n) {
            var r = n && n.number, i = Dn(t, "value") || "null", o = Dn(t, "true-value") || "true",
                a = Dn(t, "false-value") || "false";
            Sn(t, "checked", "Array.isArray(" + e + ")?_i(" + e + "," + i + ")>-1" + ("true" === o ? ":(" + e + ")" : ":_q(" + e + "," + o + ")")), Nn(t, "click", "var $$a=" + e + ",$$el=$event.target,$$c=$$el.checked?(" + o + "):(" + a + ");if(Array.isArray($$a)){var $$v=" + (r ? "_n(" + i + ")" : i) + ",$$i=_i($$a,$$v);if($$c){$$i<0&&(" + e + "=$$a.concat($$v))}else{$$i>-1&&(" + e + "=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{" + e + "=$$c}", null, !0)
        }

        function Xr(t, e, n) {
            var r = n && n.number, i = Dn(t, "value") || "null";
            i = r ? "_n(" + i + ")" : i, Sn(t, "checked", "_q(" + e + "," + i + ")"), Nn(t, "click", Gr(e, i), null, !0)
        }

        function Kr(t, e, n) {
            var r = t.attrsMap.type, i = n || {}, o = i.lazy, a = i.number, s = i.trim,
                u = o || wi && "range" === r ? "change" : "input", c = !o && "range" !== r,
                l = "input" === t.tag || "textarea" === t.tag,
                f = l ? "$event.target.value" + (s ? ".trim()" : "") : s ? "(typeof $event === 'string' ? $event.trim() : $event)" : "$event";
            f = a || "number" === r ? "_n(" + f + ")" : f;
            var p = Gr(e, f);
            l && c && (p = "if($event.target.composing)return;" + p), Sn(t, "value", l ? "_s(" + e + ")" : "(" + e + ")"), Nn(t, u, p, null, !0), (s || a || "number" === r) && Nn(t, "blur", "$forceUpdate()")
        }

        function Jr(t, e, n) {
            var r = n && n.number,
                i = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;return ' + (r ? "_n(val)" : "val") + "})" + (null == t.attrsMap.multiple ? "[0]" : ""),
                o = Gr(e, i);
            Nn(t, "change", o, null, !0)
        }

        function Gr(t, e) {
            var n = Rn(t);
            return null === n.idx ? t + "=" + e : "var $$exp = " + n.exp + ", $$idx = " + n.idx + ";if (!Array.isArray($$exp)){" + t + "=" + e + "}else{$$exp.splice($$idx, 1, " + e + ")}"
        }

        function Zr(t, e) {
            e.value && Sn(t, "textContent", "_s(" + e.value + ")")
        }

        function Yr(t, e) {
            e.value && Sn(t, "innerHTML", "_s(" + e.value + ")")
        }

        function Qr(t, e) {
            return e = e ? f(f({}, Is), e) : Is, Mr(t, e)
        }

        function ti(t, e, n) {
            var r = (e && e.warn || Oi, e && e.delimiters ? String(e.delimiters) + t : t);
            if (Ds[r])return Ds[r];
            var i = {}, o = Qr(t, e);
            i.render = ei(o.render);
            var a = o.staticRenderFns.length;
            i.staticRenderFns = new Array(a);
            for (var s = 0; s < a; s++)i.staticRenderFns[s] = ei(o.staticRenderFns[s]);
            return Ds[r] = i
        }

        function ei(t) {
            try {
                return new Function(t)
            } catch (t) {
                return v
            }
        }

        function ni(t) {
            if (t.outerHTML)return t.outerHTML;
            var e = document.createElement("div");
            return e.appendChild(t.cloneNode(!0)), e.innerHTML
        }

        var ri, ii, oi = i("slot,component", !0), ai = Object.prototype.hasOwnProperty, si = /-(\w)/g,
            ui = u(function (t) {
                return t.replace(si, function (t, e) {
                    return e ? e.toUpperCase() : ""
                })
            }), ci = u(function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1)
            }), li = /([^-])([A-Z])/g, fi = u(function (t) {
                return t.replace(li, "$1-$2").replace(li, "$1-$2").toLowerCase()
            }), pi = Object.prototype.toString, di = "[object Object]", hi = function () {
                return !1
            }, vi = function (t) {
                return t
            }, gi = {
                optionMergeStrategies: Object.create(null),
                silent: !1,
                devtools: !1,
                errorHandler: null,
                ignoredElements: [],
                keyCodes: Object.create(null),
                isReservedTag: hi,
                isUnknownElement: hi,
                getTagNamespace: v,
                parsePlatformTagName: vi,
                mustUseProp: hi,
                _assetTypes: ["component", "directive", "filter"],
                _lifecycleHooks: ["beforeCreate", "created", "beforeMount", "mounted", "beforeUpdate", "updated", "beforeDestroy", "destroyed", "activated", "deactivated"],
                _maxUpdateCount: 100
            }, mi = /[^\w.$]/, yi = "__proto__" in {}, bi = "undefined" != typeof window,
            _i = bi && window.navigator.userAgent.toLowerCase(), wi = _i && /msie|trident/.test(_i),
            xi = _i && _i.indexOf("msie 9.0") > 0, Ci = _i && _i.indexOf("edge/") > 0,
            Ti = _i && _i.indexOf("android") > 0, $i = _i && /iphone|ipad|ipod|ios/.test(_i), ki = function () {
                return void 0 === ri && (ri = !bi && "undefined" != typeof e && "server" === e.process.env.VUE_ENV), ri
            }, Ai = bi && window.__VUE_DEVTOOLS_GLOBAL_HOOK__, Ei = function () {
                function t() {
                    r = !1;
                    var t = n.slice(0);
                    n.length = 0;
                    for (var e = 0; e < t.length; e++)t[e]()
                }

                var e, n = [], r = !1;
                if ("undefined" != typeof Promise && x(Promise)) {
                    var i = Promise.resolve(), o = function (t) {
                        console.error(t)
                    };
                    e = function () {
                        i.then(t).catch(o), $i && setTimeout(v)
                    }
                } else if ("undefined" == typeof MutationObserver || !x(MutationObserver) && "[object MutationObserverConstructor]" !== MutationObserver.toString()) e = function () {
                    setTimeout(t, 0)
                }; else {
                    var a = 1, s = new MutationObserver(t), u = document.createTextNode(String(a));
                    s.observe(u, {characterData: !0}), e = function () {
                        a = (a + 1) % 2, u.data = String(a)
                    }
                }
                return function (t, i) {
                    var o;
                    if (n.push(function () {
                            t && t.call(i), o && o(i)
                        }), r || (r = !0, e()), !t && "undefined" != typeof Promise)return new Promise(function (t) {
                        o = t
                    })
                }
            }();
        ii = "undefined" != typeof Set && x(Set) ? Set : function () {
            function t() {
                this.set = Object.create(null)
            }

            return t.prototype.has = function (t) {
                return this.set[t] === !0
            }, t.prototype.add = function (t) {
                this.set[t] = !0
            }, t.prototype.clear = function () {
                this.set = Object.create(null)
            }, t
        }();
        var Si, Oi = v, ji = 0, Ni = function () {
            this.id = ji++, this.subs = []
        };
        Ni.prototype.addSub = function (t) {
            this.subs.push(t)
        }, Ni.prototype.removeSub = function (t) {
            o(this.subs, t)
        }, Ni.prototype.depend = function () {
            Ni.target && Ni.target.addDep(this)
        }, Ni.prototype.notify = function () {
            for (var t = this.subs.slice(), e = 0, n = t.length; e < n; e++)t[e].update()
        }, Ni.target = null;
        var Di = [], Ii = Array.prototype, Ri = Object.create(Ii);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function (t) {
            var e = Ii[t];
            _(Ri, t, function () {
                for (var n = arguments, r = arguments.length, i = new Array(r); r--;)i[r] = n[r];
                var o, a = e.apply(this, i), s = this.__ob__;
                switch (t) {
                    case"push":
                        o = i;
                        break;
                    case"unshift":
                        o = i;
                        break;
                    case"splice":
                        o = i.slice(2)
                }
                return o && s.observeArray(o), s.dep.notify(), a
            })
        });
        var Li = Object.getOwnPropertyNames(Ri), Pi = {shouldConvert: !0, isSettingProps: !1}, Fi = function (t) {
            if (this.value = t, this.dep = new Ni, this.vmCount = 0, _(t, "__ob__", this), Array.isArray(t)) {
                var e = yi ? $ : k;
                e(t, Ri, Li), this.observeArray(t)
            } else this.walk(t)
        };
        Fi.prototype.walk = function (t) {
            for (var e = Object.keys(t), n = 0; n < e.length; n++)E(t, e[n], t[e[n]])
        }, Fi.prototype.observeArray = function (t) {
            for (var e = 0, n = t.length; e < n; e++)A(t[e])
        };
        var qi = gi.optionMergeStrategies;
        qi.data = function (t, e, n) {
            return n ? t || e ? function () {
                var r = "function" == typeof e ? e.call(n) : e, i = "function" == typeof t ? t.call(n) : void 0;
                return r ? N(r, i) : i
            } : void 0 : e ? "function" != typeof e ? t : t ? function () {
                return N(e.call(this), t.call(this))
            } : e : t
        }, gi._lifecycleHooks.forEach(function (t) {
            qi[t] = D
        }), gi._assetTypes.forEach(function (t) {
            qi[t + "s"] = I
        }), qi.watch = function (t, e) {
            if (!e)return t;
            if (!t)return e;
            var n = {};
            f(n, t);
            for (var r in e) {
                var i = n[r], o = e[r];
                i && !Array.isArray(i) && (i = [i]), n[r] = i ? i.concat(o) : [o]
            }
            return n
        }, qi.props = qi.methods = qi.computed = function (t, e) {
            if (!e)return t;
            if (!t)return e;
            var n = Object.create(null);
            return f(n, t), f(n, e), n
        };
        var Mi = function (t, e) {
            return void 0 === e ? t : e
        }, Hi = Object.freeze({
            defineReactive: E,
            _toString: n,
            toNumber: r,
            makeMap: i,
            isBuiltInTag: oi,
            remove: o,
            hasOwn: a,
            isPrimitive: s,
            cached: u,
            camelize: ui,
            capitalize: ci,
            hyphenate: fi,
            bind: c,
            toArray: l,
            extend: f,
            isObject: p,
            isPlainObject: d,
            toObject: h,
            noop: v,
            no: hi,
            identity: vi,
            genStaticKeys: g,
            looseEqual: m,
            looseIndexOf: y,
            isReserved: b,
            def: _,
            parsePath: w,
            hasProto: yi,
            inBrowser: bi,
            UA: _i,
            isIE: wi,
            isIE9: xi,
            isEdge: Ci,
            isAndroid: Ti,
            isIOS: $i,
            isServerRendering: ki,
            devtools: Ai,
            nextTick: Ei,
            get _Set() {
                return ii
            },
            mergeOptions: P,
            resolveAsset: F,
            get warn() {
                return Oi
            },
            get formatComponentName() {
                return Si
            },
            validateProp: q
        }), Bi = function (t, e, n, r, i, o, a) {
            this.tag = t, this.data = e, this.children = n, this.text = r, this.elm = i, this.ns = void 0, this.context = o, this.functionalContext = void 0, this.key = e && e.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1
        }, Ui = {child: {}};
        Ui.child.get = function () {
            return this.componentInstance
        }, Object.defineProperties(Bi.prototype, Ui);
        var Wi, zi = function () {
            var t = new Bi;
            return t.text = "", t.isComment = !0, t
        }, Vi = {init: J, prepatch: G, insert: Z, destroy: Y}, Xi = Object.keys(Vi), Ki = u(function (t) {
            var e = "~" === t.charAt(0);
            t = e ? t.slice(1) : t;
            var n = "!" === t.charAt(0);
            return t = n ? t.slice(1) : t, {name: t, once: e, capture: n}
        }), Ji = 1, Gi = 2, Zi = null, Yi = [], Qi = {}, to = !1, eo = !1, no = 0, ro = 0, io = function (t, e, n, r) {
            this.vm = t, t._watchers.push(this), r ? (this.deep = !!r.deep, this.user = !!r.user, this.lazy = !!r.lazy, this.sync = !!r.sync) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = n, this.id = ++ro, this.active = !0, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ii, this.newDepIds = new ii, this.expression = "", "function" == typeof e ? this.getter = e : (this.getter = w(e), this.getter || (this.getter = function () {
            })), this.value = this.lazy ? void 0 : this.get()
        };
        io.prototype.get = function () {
            C(this);
            var t = this.getter.call(this.vm, this.vm);
            return this.deep && Et(t), T(), this.cleanupDeps(), t
        }, io.prototype.addDep = function (t) {
            var e = t.id;
            this.newDepIds.has(e) || (this.newDepIds.add(e), this.newDeps.push(t), this.depIds.has(e) || t.addSub(this))
        }, io.prototype.cleanupDeps = function () {
            for (var t = this, e = this.deps.length; e--;) {
                var n = t.deps[e];
                t.newDepIds.has(n.id) || n.removeSub(t)
            }
            var r = this.depIds;
            this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0
        }, io.prototype.update = function () {
            this.lazy ? this.dirty = !0 : this.sync ? this.run() : At(this)
        }, io.prototype.run = function () {
            if (this.active) {
                var t = this.get();
                if (t !== this.value || p(t) || this.deep) {
                    var e = this.value;
                    if (this.value = t, this.user)try {
                        this.cb.call(this.vm, t, e)
                    } catch (t) {
                        if (!gi.errorHandler)throw t;
                        gi.errorHandler.call(null, t, this.vm)
                    } else this.cb.call(this.vm, t, e)
                }
            }
        }, io.prototype.evaluate = function () {
            this.value = this.get(), this.dirty = !1
        }, io.prototype.depend = function () {
            for (var t = this, e = this.deps.length; e--;)t.deps[e].depend()
        }, io.prototype.teardown = function () {
            var t = this;
            if (this.active) {
                this.vm._isBeingDestroyed || o(this.vm._watchers, this);
                for (var e = this.deps.length; e--;)t.deps[e].removeSub(t);
                this.active = !1
            }
        };
        var oo = new ii, ao = {enumerable: !0, configurable: !0, get: v, set: v}, so = 0;
        Mt(Ut), Ft(Ut), wt(Ut), Ct(Ut), vt(Ut);
        var uo = [String, RegExp], co = {
            name: "keep-alive", abstract: !0, props: {include: uo, exclude: uo}, created: function () {
                this.cache = Object.create(null)
            }, destroyed: function () {
                var t = this;
                for (var e in this.cache)Zt(t.cache[e])
            }, watch: {
                include: function (t) {
                    Gt(this.cache, function (e) {
                        return Jt(t, e)
                    })
                }, exclude: function (t) {
                    Gt(this.cache, function (e) {
                        return !Jt(t, e)
                    })
                }
            }, render: function () {
                var t = lt(this.$slots.default), e = t && t.componentOptions;
                if (e) {
                    var n = Kt(e);
                    if (n && (this.include && !Jt(this.include, n) || this.exclude && Jt(this.exclude, n)))return t;
                    var r = null == t.key ? e.Ctor.cid + (e.tag ? "::" + e.tag : "") : t.key;
                    this.cache[r] ? t.componentInstance = this.cache[r].componentInstance : this.cache[r] = t, t.data.keepAlive = !0
                }
                return t
            }
        }, lo = {KeepAlive: co};
        Yt(Ut), Object.defineProperty(Ut.prototype, "$isServer", {get: ki}), Ut.version = "2.1.10";
        var fo, po, ho = i("input,textarea,option,select"), vo = function (t, e, n) {
                return "value" === n && ho(t) && "button" !== e || "selected" === n && "option" === t || "checked" === n && "input" === t || "muted" === n && "video" === t
            }, go = i("contenteditable,draggable,spellcheck"),
            mo = i("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,translate,truespeed,typemustmatch,visible"),
            yo = "http://www.w3.org/1999/xlink", bo = function (t) {
                return ":" === t.charAt(5) && "xlink" === t.slice(0, 5)
            }, _o = function (t) {
                return bo(t) ? t.slice(6, t.length) : ""
            }, wo = function (t) {
                return null == t || t === !1
            }, xo = {svg: "http://www.w3.org/2000/svg", math: "http://www.w3.org/1998/Math/MathML"},
            Co = i("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template"),
            To = i("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0),
            $o = function (t) {
                return "pre" === t
            }, ko = function (t) {
                return Co(t) || To(t)
            }, Ao = Object.create(null), Eo = Object.freeze({
                createElement: se,
                createElementNS: ue,
                createTextNode: ce,
                createComment: le,
                insertBefore: fe,
                removeChild: pe,
                appendChild: de,
                parentNode: he,
                nextSibling: ve,
                tagName: ge,
                setTextContent: me,
                setAttribute: ye
            }), So = {
                create: function (t, e) {
                    be(e)
                }, update: function (t, e) {
                    t.data.ref !== e.data.ref && (be(t, !0), be(e))
                }, destroy: function (t) {
                    be(t, !0)
                }
            }, Oo = new Bi("", {}, []), jo = ["create", "activate", "update", "remove", "destroy"], No = {
                create: $e, update: $e, destroy: function (t) {
                    $e(t, Oo)
                }
            }, Do = Object.create(null), Io = [So, No], Ro = {create: Oe, update: Oe}, Lo = {
                create: Ne,
                update: Ne
            }, Po = {create: Re, update: Re}, Fo = {create: Le, update: Le}, qo = u(function (t) {
                var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
                return t.split(n).forEach(function (t) {
                    if (t) {
                        var n = t.split(r);
                        n.length > 1 && (e[n[0].trim()] = n[1].trim())
                    }
                }), e
            }), Mo = /^--/, Ho = /\s*!important$/, Bo = function (t, e, n) {
                Mo.test(e) ? t.style.setProperty(e, n) : Ho.test(n) ? t.style.setProperty(e, n.replace(Ho, ""), "important") : t.style[Wo(e)] = n
            }, Uo = ["Webkit", "Moz", "ms"], Wo = u(function (t) {
                if (po = po || document.createElement("div"), t = ui(t), "filter" !== t && t in po.style)return t;
                for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < Uo.length; n++) {
                    var r = Uo[n] + e;
                    if (r in po.style)return r
                }
            }), zo = {create: Ue, update: Ue}, Vo = bi && !xi, Xo = "transition", Ko = "animation", Jo = "transition",
            Go = "transitionend", Zo = "animation", Yo = "animationend";
        Vo && (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (Jo = "WebkitTransition", Go = "webkitTransitionEnd"), void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend && (Zo = "WebkitAnimation", Yo = "webkitAnimationEnd"));
        var Qo = bi && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout,
            ta = /\b(transform|all)(,|$)/, ea = u(function (t) {
                return {
                    enterClass: t + "-enter",
                    leaveClass: t + "-leave",
                    appearClass: t + "-enter",
                    enterToClass: t + "-enter-to",
                    leaveToClass: t + "-leave-to",
                    appearToClass: t + "-enter-to",
                    enterActiveClass: t + "-enter-active",
                    leaveActiveClass: t + "-leave-active",
                    appearActiveClass: t + "-enter-active"
                }
            }), na = bi ? {
                create: rn, activate: rn, remove: function (t, e) {
                    t.data.show ? e() : tn(t, e)
                }
            } : {}, ra = [Ro, Lo, Po, Fo, zo, na], ia = ra.concat(Io), oa = Te({nodeOps: Eo, modules: ia});
        xi && document.addEventListener("selectionchange", function () {
            var t = document.activeElement;
            t && t.vmodel && ln(t, "input")
        });
        var aa = {
            inserted: function (t, e, n) {
                if ("select" === n.tag) {
                    var r = function () {
                        on(t, e, n.context)
                    };
                    r(), (wi || Ci) && setTimeout(r, 0)
                } else"textarea" !== n.tag && "text" !== t.type || (t._vModifiers = e.modifiers, e.modifiers.lazy || (Ti || (t.addEventListener("compositionstart", un), t.addEventListener("compositionend", cn)), xi && (t.vmodel = !0)))
            }, componentUpdated: function (t, e, n) {
                if ("select" === n.tag) {
                    on(t, e, n.context);
                    var r = t.multiple ? e.value.some(function (e) {
                        return an(e, t.options)
                    }) : e.value !== e.oldValue && an(e.value, t.options);
                    r && ln(t, "change")
                }
            }
        }, sa = {
            bind: function (t, e, n) {
                var r = e.value;
                n = fn(n);
                var i = n.data && n.data.transition,
                    o = t.__vOriginalDisplay = "none" === t.style.display ? "" : t.style.display;
                r && i && !xi ? (n.data.show = !0, Qe(n, function () {
                    t.style.display = o
                })) : t.style.display = r ? o : "none"
            }, update: function (t, e, n) {
                var r = e.value, i = e.oldValue;
                if (r !== i) {
                    n = fn(n);
                    var o = n.data && n.data.transition;
                    o && !xi ? (n.data.show = !0, r ? Qe(n, function () {
                        t.style.display = t.__vOriginalDisplay
                    }) : tn(n, function () {
                        t.style.display = "none"
                    })) : t.style.display = r ? t.__vOriginalDisplay : "none"
                }
            }, unbind: function (t, e, n, r, i) {
                i || (t.style.display = t.__vOriginalDisplay)
            }
        }, ua = {model: aa, show: sa}, ca = {
            name: String,
            appear: Boolean,
            css: Boolean,
            mode: String,
            type: String,
            enterClass: String,
            leaveClass: String,
            enterToClass: String,
            leaveToClass: String,
            enterActiveClass: String,
            leaveActiveClass: String,
            appearClass: String,
            appearActiveClass: String,
            appearToClass: String
        }, la = {
            name: "transition", props: ca, abstract: !0, render: function (t) {
                var e = this, n = this.$slots.default;
                if (n && (n = n.filter(function (t) {
                        return t.tag
                    }), n.length)) {
                    var r = this.mode, i = n[0];
                    if (vn(this.$vnode))return i;
                    var o = pn(i);
                    if (!o)return i;
                    if (this._leaving)return hn(t, i);
                    var a = "__transition-" + this._uid + "-",
                        u = o.key = null == o.key ? a + o.tag : s(o.key) ? 0 === String(o.key).indexOf(a) ? o.key : a + o.key : o.key,
                        c = (o.data || (o.data = {})).transition = dn(this), l = this._vnode, p = pn(l);
                    if (o.data.directives && o.data.directives.some(function (t) {
                            return "show" === t.name
                        }) && (o.data.show = !0), p && p.data && !gn(o, p)) {
                        var d = p && (p.data.transition = f({}, c));
                        if ("out-in" === r)return this._leaving = !0, it(d, "afterLeave", function () {
                            e._leaving = !1, e.$forceUpdate()
                        }, u), hn(t, i);
                        if ("in-out" === r) {
                            var h, v = function () {
                                h()
                            };
                            it(c, "afterEnter", v, u), it(c, "enterCancelled", v, u), it(d, "delayLeave", function (t) {
                                h = t
                            }, u)
                        }
                    }
                    return i
                }
            }
        }, fa = f({tag: String, moveClass: String}, ca);
        delete fa.mode;
        var pa = {
            props: fa, render: function (t) {
                for (var e = this.tag || this.$vnode.data.tag || "span", n = Object.create(null),
                         r = this.prevChildren = this.children, i = this.$slots.default || [], o = this.children = [],
                         a = dn(this), s = 0; s < i.length; s++) {
                    var u = i[s];
                    if (u.tag)if (null != u.key && 0 !== String(u.key).indexOf("__vlist")) o.push(u), n[u.key] = u, (u.data || (u.data = {})).transition = a; else;
                }
                if (r) {
                    for (var c = [], l = [], f = 0; f < r.length; f++) {
                        var p = r[f];
                        p.data.transition = a, p.data.pos = p.elm.getBoundingClientRect(), n[p.key] ? c.push(p) : l.push(p)
                    }
                    this.kept = t(e, null, c), this.removed = l
                }
                return t(e, null, o)
            }, beforeUpdate: function () {
                this.__patch__(this._vnode, this.kept, !1, !0), this._vnode = this.kept
            }, updated: function () {
                var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
                if (t.length && this.hasMove(t[0].elm, e)) {
                    t.forEach(mn), t.forEach(yn), t.forEach(bn);
                    document.body.offsetHeight;
                    t.forEach(function (t) {
                        if (t.data.moved) {
                            var n = t.elm, r = n.style;
                            Xe(n, e), r.transform = r.WebkitTransform = r.transitionDuration = "", n.addEventListener(Go, n._moveCb = function t(r) {
                                r && !/transform$/.test(r.propertyName) || (n.removeEventListener(Go, t), n._moveCb = null, Ke(n, e))
                            })
                        }
                    })
                }
            }, methods: {
                hasMove: function (t, e) {
                    if (!Vo)return !1;
                    if (null != this._hasMove)return this._hasMove;
                    Xe(t, e);
                    var n = Ge(t);
                    return Ke(t, e), this._hasMove = n.hasTransform
                }
            }
        }, da = {Transition: la, TransitionGroup: pa};
        Ut.config.isUnknownElement = oe, Ut.config.isReservedTag = ko, Ut.config.getTagNamespace = ie, Ut.config.mustUseProp = vo, f(Ut.options.directives, ua), f(Ut.options.components, da), Ut.prototype.__patch__ = bi ? oa : v, Ut.prototype.$mount = function (t, e) {
            return t = t && bi ? ae(t) : void 0, this._mount(t, e)
        }, setTimeout(function () {
            gi.devtools && Ai && Ai.emit("init", Ut)
        }, 0);
        var ha, va = !!bi && _n("\n", "&#10;"),
            ga = i("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr", !0),
            ma = i("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source", !0),
            ya = i("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track", !0),
            ba = /([^\s"'<>\/=]+)/, _a = /(?:=)/,
            wa = [/"([^"]*)"+/.source, /'([^']*)'+/.source, /([^\s"'=<>`]+)/.source],
            xa = new RegExp("^\\s*" + ba.source + "(?:\\s*(" + _a.source + ")\\s*(?:" + wa.join("|") + "))?"),
            Ca = "[a-zA-Z_][\\w\\-\\.]*", Ta = "((?:" + Ca + "\\:)?" + Ca + ")", $a = new RegExp("^<" + Ta),
            ka = /^\s*(\/?)>/, Aa = new RegExp("^<\\/" + Ta + "[^>]*>"), Ea = /^<!DOCTYPE [^>]+>/i, Sa = /^<!--/,
            Oa = /^<!\[/, ja = !1;
        "x".replace(/x(.)?/g, function (t, e) {
            ja = "" === e
        });
        var Na, Da, Ia, Ra, La, Pa, Fa, qa, Ma, Ha, Ba, Ua, Wa, za, Va, Xa, Ka, Ja, Ga, Za, Ya, Qa, ts, es, ns,
            rs = i("script,style", !0), is = {}, os = /&lt;/g, as = /&gt;/g, ss = /&#10;/g, us = /&amp;/g,
            cs = /&quot;/g, ls = /\{\{((?:.|\n)+?)\}\}/g, fs = /[-.*+?^${}()|[\]\/\\]/g, ps = u(function (t) {
                var e = t[0].replace(fs, "\\$&"), n = t[1].replace(fs, "\\$&");
                return new RegExp(e + "((?:.|\\n)+?)" + n, "g")
            }), ds = /^v-|^@|^:/, hs = /(.*?)\s+(?:in|of)\s+(.*)/, vs = /\((\{[^}]*\}|[^,]*),([^,]*)(?:,([^,]*))?\)/,
            gs = /^:|^v-bind:/, ms = /^@|^v-on:/, ys = /:(.*)$/, bs = /\.[^.]+/g, _s = u(wn), ws = /^xmlns:NS\d+/,
            xs = /^NS\d+:/, Cs = u(sr), Ts = /^\s*([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/,
            $s = /^\s*[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?']|\[".*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*\s*$/,
            ks = {esc: 27, tab: 9, enter: 13, space: 32, up: 38, left: 37, right: 39, down: 40, delete: [8, 46]}, As = {
                stop: "$event.stopPropagation();",
                prevent: "$event.preventDefault();",
                self: "if($event.target !== $event.currentTarget)return;",
                ctrl: "if(!$event.ctrlKey)return;",
                shift: "if(!$event.shiftKey)return;",
                alt: "if(!$event.altKey)return;",
                meta: "if(!$event.metaKey)return;"
            }, Es = {bind: mr, cloak: v},
            Ss = (new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b"), {
                staticKeys: ["staticClass"],
                transformNode: Hr,
                genData: Br
            }), Os = {staticKeys: ["staticStyle"], transformNode: Ur, genData: Wr}, js = [Ss, Os],
            Ns = {model: zr, text: Zr, html: Yr}, Ds = Object.create(null), Is = {
                expectHTML: !0,
                modules: js,
                staticKeys: g(js),
                directives: Ns,
                isReservedTag: ko,
                isUnaryTag: ga,
                mustUseProp: vo,
                getTagNamespace: ie,
                isPreTag: $o
            }, Rs = u(function (t) {
                var e = ae(t);
                return e && e.innerHTML
            }), Ls = Ut.prototype.$mount;
        Ut.prototype.$mount = function (t, e) {
            if (t = t && ae(t), t === document.body || t === document.documentElement)return this;
            var n = this.$options;
            if (!n.render) {
                var r = n.template;
                if (r)if ("string" == typeof r) "#" === r.charAt(0) && (r = Rs(r)); else {
                    if (!r.nodeType)return this;
                    r = r.innerHTML
                } else t && (r = ni(t));
                if (r) {
                    var i = ti(r, {warn: Oi, shouldDecodeNewlines: va, delimiters: n.delimiters}, this), o = i.render,
                        a = i.staticRenderFns;
                    n.render = o, n.staticRenderFns = a
                }
            }
            return Ls.call(this, t, e)
        }, Ut.compile = ti, t.exports = Ut
    }).call(e, n(8))
}, function (t, e) {
    t.exports = function (t) {
        return t.webpackPolyfill || (t.deprecate = function () {
        }, t.paths = [], t.children || (t.children = []), Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function () {
                return t.l
            }
        }), Object.defineProperty(t, "id", {
            enumerable: !0, get: function () {
                return t.i
            }
        }), t.webpackPolyfill = 1), t
    }
}, function (t, e, n) {
    n(9), t.exports = n(10)
}]);
/**
 * Created by eduardolariu on 15/03/2017.
 */
$(function() {
    setTimeout(function(){
        $('#flash_message').slideUp(800);
    }, 4000);
});

/*! Lity - v2.2.2 - 2016-12-14
* http://sorgalla.com/lity/
* Copyright (c) 2015-2016 Jan Sorgalla; Licensed MIT */
(function(window, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory(window, $);
        });
    } else if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = factory(window, require('jquery'));
    } else {
        window.lity = factory(window, window.jQuery || window.Zepto);
    }
}(typeof window !== "undefined" ? window : this, function(window, $) {
    'use strict';

    var document = window.document;

    var _win = $(window);
    var _deferred = $.Deferred;
    var _html = $('html');
    var _instances = [];

    var _attrAriaHidden = 'aria-hidden';
    var _dataAriaHidden = 'lity-' + _attrAriaHidden;

    var _focusableElementsSelector = 'a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';

    var _defaultOptions = {
        handler: null,
        handlers: {
            image: imageHandler,
            inline: inlineHandler,
            youtube: youtubeHandler,
            vimeo: vimeoHandler,
            googlemaps: googlemapsHandler,
            facebookvideo: facebookvideoHandler,
            iframe: iframeHandler
        },
        template: '<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
    };

    var _imageRegexp = /(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;
    var _youtubeRegex = /(youtube(-nocookie)?\.com|youtu\.be)\/(watch\?v=|v\/|u\/|embed\/?)?([\w-]{11})(.*)?/i;
    var _vimeoRegex =  /(vimeo(pro)?.com)\/(?:[^\d]+)?(\d+)\??(.*)?$/;
    var _googlemapsRegex = /((maps|www)\.)?google\.([^\/\?]+)\/?((maps\/?)?\?)(.*)/i;
    var _facebookvideoRegex = /(facebook\.com)\/([a-z0-9_-]*)\/videos\/([0-9]*)(.*)?$/i;

    var _transitionEndEvent = (function() {
        var el = document.createElement('div');

        var transEndEventNames = {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd otransitionend',
            transition: 'transitionend'
        };

        for (var name in transEndEventNames) {
            if (el.style[name] !== undefined) {
                return transEndEventNames[name];
            }
        }

        return false;
    })();

    function transitionEnd(element) {
        var deferred = _deferred();

        if (!_transitionEndEvent || !element.length) {
            deferred.resolve();
        } else {
            element.one(_transitionEndEvent, deferred.resolve);
            setTimeout(deferred.resolve, 500);
        }

        return deferred.promise();
    }

    function settings(currSettings, key, value) {
        if (arguments.length === 1) {
            return $.extend({}, currSettings);
        }

        if (typeof key === 'string') {
            if (typeof value === 'undefined') {
                return typeof currSettings[key] === 'undefined'
                    ? null
                    : currSettings[key];
            }

            currSettings[key] = value;
        } else {
            $.extend(currSettings, key);
        }

        return this;
    }

    function parseQueryParams(params) {
        var pairs = decodeURI(params.split('#')[0]).split('&');
        var obj = {}, p;

        for (var i = 0, n = pairs.length; i < n; i++) {
            if (!pairs[i]) {
                continue;
            }

            p = pairs[i].split('=');
            obj[p[0]] = p[1];
        }

        return obj;
    }

    function appendQueryParams(url, params) {
        return url + (url.indexOf('?') > -1 ? '&' : '?') + $.param(params);
    }

    function transferHash(originalUrl, newUrl) {
        var pos = originalUrl.indexOf('#');

        if (-1 === pos) {
            return newUrl;
        }

        if (pos > 0) {
            originalUrl = originalUrl.substr(pos);
        }

        return newUrl + originalUrl;
    }

    function error(msg) {
        return $('<span class="lity-error"/>').append(msg);
    }

    function imageHandler(target, instance) {
        var desc = (instance.opener() && instance.opener().data('lity-desc')) || 'Image with no description';
        var img = $('<img src="' + target + '" alt="' + desc + '"/>');
        var deferred = _deferred();
        var failed = function() {
            deferred.reject(error('Failed loading image'));
        };

        img
            .on('load', function() {
                if (this.naturalWidth === 0) {
                    return failed();
                }

                deferred.resolve(img);
            })
            .on('error', failed)
        ;

        return deferred.promise();
    }

    imageHandler.test = function(target) {
        return _imageRegexp.test(target);
    };

    function inlineHandler(target, instance) {
        var el, placeholder, hasHideClass;

        try {
            el = $(target);
        } catch (e) {
            return false;
        }

        if (!el.length) {
            return false;
        }

        placeholder = $('<i style="display:none !important"/>');
        hasHideClass = el.hasClass('lity-hide');

        instance
            .element()
            .one('lity:remove', function() {
                placeholder
                    .before(el)
                    .remove()
                ;

                if (hasHideClass && !el.closest('.lity-content').length) {
                    el.addClass('lity-hide');
                }
            })
        ;

        return el
            .removeClass('lity-hide')
            .after(placeholder)
        ;
    }

    function youtubeHandler(target) {
        var matches = _youtubeRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.youtube' + (matches[2] || '') + '.com/embed/' + matches[4],
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[5] || '')
                    )
                )
            )
        );
    }

    function vimeoHandler(target) {
        var matches = _vimeoRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://player.vimeo.com/video/' + matches[3],
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[4] || '')
                    )
                )
            )
        );
    }

    function facebookvideoHandler(target) {
        var matches = _facebookvideoRegex.exec(target);

        if (!matches) {
            return false;
        }

        if (0 !== target.indexOf('http')) {
            target = 'https:' + target;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.facebook.com/plugins/video.php?href=' + target,
                    $.extend(
                        {
                            autoplay: 1
                        },
                        parseQueryParams(matches[4] || '')
                    )
                )
            )
        );
    }

    function googlemapsHandler(target) {
        var matches = _googlemapsRegex.exec(target);

        if (!matches) {
            return false;
        }

        return iframeHandler(
            transferHash(
                target,
                appendQueryParams(
                    'https://www.google.' + matches[3] + '/maps?' + matches[6],
                    {
                        output: matches[6].indexOf('layer=c') > 0 ? 'svembed' : 'embed'
                    }
                )
            )
        );
    }

    function iframeHandler(target) {
        return '<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen src="' + target + '"/></div>';
    }

    function winHeight() {
        return document.documentElement.clientHeight
            ? document.documentElement.clientHeight
            : Math.round(_win.height());
    }

    function keydown(e) {
        var current = currentInstance();

        if (!current) {
            return;
        }

        // ESC key
        if (e.keyCode === 27) {
            current.close();
        }

        // TAB key
        if (e.keyCode === 9) {
            handleTabKey(e, current);
        }
    }

    function handleTabKey(e, instance) {
        var focusableElements = instance.element().find(_focusableElementsSelector);
        var focusedIndex = focusableElements.index(document.activeElement);

        if (e.shiftKey && focusedIndex <= 0) {
            focusableElements.get(focusableElements.length - 1).focus();
            e.preventDefault();
        } else if (!e.shiftKey && focusedIndex === focusableElements.length - 1) {
            focusableElements.get(0).focus();
            e.preventDefault();
        }
    }

    function resize() {
        $.each(_instances, function(i, instance) {
            instance.resize();
        });
    }

    function registerInstance(instanceToRegister) {
        if (1 === _instances.unshift(instanceToRegister)) {
            _html.addClass('lity-active');

            _win
                .on({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        $('body > *').not(instanceToRegister.element())
            .addClass('lity-hidden')
            .each(function() {
                var el = $(this);

                if (undefined !== el.data(_dataAriaHidden)) {
                    return;
                }

                el.data(_dataAriaHidden, el.attr(_attrAriaHidden) || null);
            })
            .attr(_attrAriaHidden, 'true')
        ;
    }

    function removeInstance(instanceToRemove) {
        var show;

        instanceToRemove
            .element()
            .attr(_attrAriaHidden, 'true')
        ;

        if (1 === _instances.length) {
            _html.removeClass('lity-active');

            _win
                .off({
                    resize: resize,
                    keydown: keydown
                })
            ;
        }

        _instances = $.grep(_instances, function(instance) {
            return instanceToRemove !== instance;
        });

        if (!!_instances.length) {
            show = _instances[0].element();
        } else {
            show = $('.lity-hidden');
        }

        show
            .removeClass('lity-hidden')
            .each(function() {
                var el = $(this), oldAttr = el.data(_dataAriaHidden);

                if (!oldAttr) {
                    el.removeAttr(_attrAriaHidden);
                } else {
                    el.attr(_attrAriaHidden, oldAttr);
                }

                el.removeData(_dataAriaHidden);
            })
        ;
    }

    function currentInstance() {
        if (0 === _instances.length) {
            return null;
        }

        return _instances[0];
    }

    function factory(target, instance, handlers, preferredHandler) {
        var handler = 'inline', content;

        var currentHandlers = $.extend({}, handlers);

        if (preferredHandler && currentHandlers[preferredHandler]) {
            content = currentHandlers[preferredHandler](target, instance);
            handler = preferredHandler;
        } else {
            // Run inline and iframe handlers after all other handlers
            $.each(['inline', 'iframe'], function(i, name) {
                delete currentHandlers[name];

                currentHandlers[name] = handlers[name];
            });

            $.each(currentHandlers, function(name, currentHandler) {
                // Handler might be "removed" by setting callback to null
                if (!currentHandler) {
                    return true;
                }

                if (
                    currentHandler.test &&
                    !currentHandler.test(target, instance)
                ) {
                    return true;
                }

                content = currentHandler(target, instance);

                if (false !== content) {
                    handler = name;
                    return false;
                }
            });
        }

        return {handler: handler, content: content || ''};
    }

    function Lity(target, options, opener, activeElement) {
        var self = this;
        var result;
        var isReady = false;
        var isClosed = false;
        var element;
        var content;

        options = $.extend(
            {},
            _defaultOptions,
            options
        );

        element = $(options.template);

        // -- API --

        self.element = function() {
            return element;
        };

        self.opener = function() {
            return opener;
        };

        self.options  = $.proxy(settings, self, options);
        self.handlers = $.proxy(settings, self, options.handlers);

        self.resize = function() {
            if (!isReady || isClosed) {
                return;
            }

            content
                .css('max-height', winHeight() + 'px')
                .trigger('lity:resize', [self])
            ;
        };

        self.close = function() {
            if (!isReady || isClosed) {
                return;
            }

            isClosed = true;

            removeInstance(self);

            var deferred = _deferred();

            // We return focus only if the current focus is inside this instance
            if (
                activeElement &&
                (
                    document.activeElement === element[0] ||
                    $.contains(element[0], document.activeElement)
                )
            ) {
                try {
                    activeElement.focus();
                } catch (e) {
                    // Ignore exceptions, eg. for SVG elements which can't be
                    // focused in IE11
                }
            }

            content.trigger('lity:close', [self]);

            element
                .removeClass('lity-opened')
                .addClass('lity-closed')
            ;

            transitionEnd(content.add(element))
                .always(function() {
                    content.trigger('lity:remove', [self]);
                    element.remove();
                    element = undefined;
                    deferred.resolve();
                })
            ;

            return deferred.promise();
        };

        // -- Initialization --

        result = factory(target, self, options.handlers, options.handler);

        element
            .attr(_attrAriaHidden, 'false')
            .addClass('lity-loading lity-opened lity-' + result.handler)
            .appendTo('body')
            .focus()
            .on('click', '[data-lity-close]', function(e) {
                if ($(e.target).is('[data-lity-close]')) {
                    self.close();
                }
            })
            .trigger('lity:open', [self])
        ;

        registerInstance(self);

        $.when(result.content)
            .always(ready)
        ;

        function ready(result) {
            content = $(result)
                .css('max-height', winHeight() + 'px')
            ;

            element
                .find('.lity-loader')
                .each(function() {
                    var loader = $(this);

                    transitionEnd(loader)
                        .always(function() {
                            loader.remove();
                        })
                    ;
                })
            ;

            element
                .removeClass('lity-loading')
                .find('.lity-content')
                .empty()
                .append(content)
            ;

            isReady = true;

            content
                .trigger('lity:ready', [self])
            ;
        }
    }

    function lity(target, options, opener) {
        if (!target.preventDefault) {
            opener = $(opener);
        } else {
            target.preventDefault();
            opener = $(this);
            target = opener.data('lity-target') || opener.attr('href') || opener.attr('src');
        }

        var instance = new Lity(
            target,
            $.extend(
                {},
                opener.data('lity-options') || opener.data('lity'),
                options
            ),
            opener,
            document.activeElement
        );

        if (!target.preventDefault) {
            return instance;
        }
    }

    lity.version  = '2.2.2';
    lity.options  = $.proxy(settings, lity, _defaultOptions);
    lity.handlers = $.proxy(settings, lity, _defaultOptions.handlers);
    lity.current  = currentInstance;

    $(document).on('click.lity', '[data-lity]', lity);

    return lity;
}));

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return u.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n=b&&b.split("/"),o=s.map,p=o&&o["*"]||{};if(a&&"."===a.charAt(0))if(b){for(a=a.split("/"),g=a.length-1,s.nodeIdCompat&&w.test(a[g])&&(a[g]=a[g].replace(w,"")),a=n.slice(0,n.length-1).concat(a),k=0;k<a.length;k+=1)if(m=a[k],"."===m)a.splice(k,1),k-=1;else if(".."===m){if(1===k&&(".."===a[2]||".."===a[0]))break;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}else 0===a.indexOf("./")&&(a=a.substring(2));if((n||p)&&o){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),n)for(l=n.length;l>0;l-=1)if(e=o[n.slice(0,l).join("/")],e&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&p&&p[d]&&(i=p[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=v.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),n.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){q[a]=b}}function j(a){if(e(r,a)){var c=r[a];delete r[a],t[a]=!0,m.apply(b,c)}if(!e(q,a)&&!e(t,a))throw new Error("No "+a);return q[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return function(){return s&&s.config&&s.config[a]||{}}}var m,n,o,p,q={},r={},s={},t={},u=Object.prototype.hasOwnProperty,v=[].slice,w=/\.js$/;o=function(a,b){var c,d=k(a),e=d[0];return a=d[1],e&&(e=f(e,b),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(b)):f(a,b):(a=f(a,b),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},p={require:function(a){return g(a)},exports:function(a){var b=q[a];return"undefined"!=typeof b?b:q[a]={}},module:function(a){return{id:a,uri:"",exports:q[a],config:l(a)}}},m=function(a,c,d,f){var h,k,l,m,n,s,u=[],v=typeof d;if(f=f||a,"undefined"===v||"function"===v){for(c=!c.length&&d.length?["require","exports","module"]:c,n=0;n<c.length;n+=1)if(m=o(c[n],f),k=m.f,"require"===k)u[n]=p.require(a);else if("exports"===k)u[n]=p.exports(a),s=!0;else if("module"===k)h=u[n]=p.module(a);else if(e(q,k)||e(r,k)||e(t,k))u[n]=j(k);else{if(!m.p)throw new Error(a+" missing "+k);m.p.load(m.n,g(f,!0),i(k),{}),u[n]=q[k]}l=d?d.apply(q[a],u):void 0,a&&(h&&h.exports!==b&&h.exports!==q[a]?q[a]=h.exports:l===b&&s||(q[a]=l))}else a&&(q[a]=d)},a=c=n=function(a,c,d,e,f){if("string"==typeof a)return p[a]?p[a](c):j(o(a,c).f);if(!a.splice){if(s=a,s.deps&&n(s.deps,s.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?m(b,a,c,d):setTimeout(function(){m(b,a,c,d)},4),n},n.config=function(a){return n(a)},a._defined=q,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(q,a)||e(r,a)||(r[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){var e=b[d];"function"==typeof e&&"constructor"!==d&&c.push(d)}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){var a=Array.prototype.unshift;return a.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;d>c;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;a>c;c++){var d=Math.floor(36*Math.random());b+=d.toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return e!==f||"hidden"!==f&&"visible"!==f?"scroll"===e||"scroll"===f?!0:d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth:!1},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){var c=b.find(".select2-results");c.append(a)},c.prototype.sort=function(a){var b=this.options.get("sorter");return b(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()}),e=b.$results.find(".select2-results__option[aria-selected]");e.each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{"class":"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):0>h-g&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");return"true"===c.attr("aria-selected")?void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{})):void d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){var a=this.$results.find(".select2-results__option--highlighted");return a},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),2>=c?this.$results.scrollTop(0):(g>this.$results.outerHeight()||0>g)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){var a={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46};return a}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id+"-container",a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2"),e=a(".select2.select2-container--open");e.each(function(){var b=a(this);if(this!=d[0]){var c=b.data("element");c.select2("close")}})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){var c=b.find(".selection");c.append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection"),d=this.options.get("escapeMarkup");return d(c(a,b))},d.prototype.selectionContainer=function(){var b=a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>');return b},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id,d=b.length>1;if(d||c)return a.call(this,b);this.clear();var e=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(e)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||(c.which==b.DELETE||c.which==b.BACKSPACE)&&this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented();var b=a.which;if(b===c.BACKSPACE&&""===e.$search.val()){var d=e.$searchContainer.prev(".select2-selection__choice");if(d.length>0){var f=d.data("data");e.searchRemoveChoice(f),a.preventDefault()}}});var f=document.documentMode,g=f&&11>=f;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){return g?void e.$selection.off("input.search input.searchcheck"):void e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{var b=this.$search.val().length+1;a=.75*b+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){var a={"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ω":"ω","ς":"σ"};return a}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),d+=null!=c.id?"-"+c.id.toString():"-"+a.generateChars(4)},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");
if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple"))return a.selected=!1,c(a.element).is("option")?(a.element.selected=!1,void this.$element.trigger("change")):void this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this,f=this.$element.children();f.each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(b=c.data(a[0],"data"),null!=b)return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){var c=this.options.get("matcher");return c(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0),k=i.text===b.term;if(k||j)return f?!1:(a.data=g,void c(a))}if(f)return!0;var l=e.createTag(b);if(null!=l){var m=e.option(l);m.attr("data-select2-tag",!0),e.addOptions([m]),e.insertTag(g,l)}a.results=g,c(a)}var e=this;return this._removeOldTags(),null==b.term||null!=b.page?void a.call(this,b,c):void a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){var c=(this._lastTag,this.$element.find("option[data-select2-tag]"));c.each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b),d=g.$element.find("option").filter(function(){return a(this).val()===c.id});if(!d.length){var e=g.option(c);e.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([e])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",b.term.length<this.minimumInputLength?void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){return b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength?void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}}):void a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;return d.maximumSelectionLength>0&&f>=d.maximumSelectionLength?void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}}):void a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()&&e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){var b=e.showSearch(a);b?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){var c=e.$results.offset().top+e.$results.outerHeight(!1),d=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1);c+50>=d&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id,h=this.$container.parents().filter(b.hasScroll);h.off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return a(c.data.results)<this.minimumResultsForSearch?!1:b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){var b=a.minimum-a.input.length,c="Please enter "+b+" or more characters";return c},loadingMore:function(){return"Loading more results…"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searching…"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),(null!=l.tokenSeparators||null!=l.tokenizer)&&(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(O){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(P){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var Q=k.loadPath(this.defaults.amdLanguageBase+"en"),R=new k(l.language);R.extend(Q),l.translations=R}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){var h=e.children[g],i=c(d,h);null==i&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var j=b(e.text).toUpperCase(),k=b(d.term).toUpperCase();return j.indexOf(k)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)};var E=new D;return E}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return 0>=e?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;i>h;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),(null==a||0===a.length)&&(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null;
},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if(b=b||{},"object"==typeof b)return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});
/*!
 * Datepicker for Bootstrap v1.6.4 (https://github.com/eternicode/bootstrap-datepicker)
 *
 * Copyright 2012 Stefan Petre
 * Improvements by Andrew Rowls
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */(function(factory){
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === 'object') {
        factory(require('jquery'));
    } else {
        factory(jQuery);
    }
}(function($, undefined){

	function UTCDate(){
		return new Date(Date.UTC.apply(Date, arguments));
	}
	function UTCToday(){
		var today = new Date();
		return UTCDate(today.getFullYear(), today.getMonth(), today.getDate());
	}
	function isUTCEquals(date1, date2) {
		return (
			date1.getUTCFullYear() === date2.getUTCFullYear() &&
			date1.getUTCMonth() === date2.getUTCMonth() &&
			date1.getUTCDate() === date2.getUTCDate()
		);
	}
	function alias(method){
		return function(){
			return this[method].apply(this, arguments);
		};
	}
	function isValidDate(d) {
		return d && !isNaN(d.getTime());
	}

	var DateArray = (function(){
		var extras = {
			get: function(i){
				return this.slice(i)[0];
			},
			contains: function(d){
				// Array.indexOf is not cross-browser;
				// $.inArray doesn't work with Dates
				var val = d && d.valueOf();
				for (var i=0, l=this.length; i < l; i++)
					if (this[i].valueOf() === val)
						return i;
				return -1;
			},
			remove: function(i){
				this.splice(i,1);
			},
			replace: function(new_array){
				if (!new_array)
					return;
				if (!$.isArray(new_array))
					new_array = [new_array];
				this.clear();
				this.push.apply(this, new_array);
			},
			clear: function(){
				this.length = 0;
			},
			copy: function(){
				var a = new DateArray();
				a.replace(this);
				return a;
			}
		};

		return function(){
			var a = [];
			a.push.apply(a, arguments);
			$.extend(a, extras);
			return a;
		};
	})();


	// Picker object

	var Datepicker = function(element, options){
		$(element).data('datepicker', this);
		this._process_options(options);

		this.dates = new DateArray();
		this.viewDate = this.o.defaultViewDate;
		this.focusDate = null;

		this.element = $(element);
		this.isInput = this.element.is('input');
		this.inputField = this.isInput ? this.element : this.element.find('input');
		this.component = this.element.hasClass('date') ? this.element.find('.add-on, .input-group-addon, .btn') : false;
		this.hasInput = this.component && this.inputField.length;
		if (this.component && this.component.length === 0)
			this.component = false;
		this.isInline = !this.component && this.element.is('div');

		this.picker = $(DPGlobal.template);

		// Checking templates and inserting
		if (this._check_template(this.o.templates.leftArrow)) {
			this.picker.find('.prev').html(this.o.templates.leftArrow);
		}
		if (this._check_template(this.o.templates.rightArrow)) {
			this.picker.find('.next').html(this.o.templates.rightArrow);
		}

		this._buildEvents();
		this._attachEvents();

		if (this.isInline){
			this.picker.addClass('datepicker-inline').appendTo(this.element);
		}
		else {
			this.picker.addClass('datepicker-dropdown dropdown-menu');
		}

		if (this.o.rtl){
			this.picker.addClass('datepicker-rtl');
		}

		this.viewMode = this.o.startView;

		if (this.o.calendarWeeks)
			this.picker.find('thead .datepicker-title, tfoot .today, tfoot .clear')
						.attr('colspan', function(i, val){
							return parseInt(val) + 1;
						});

		this._allow_update = false;

		this.setStartDate(this._o.startDate);
		this.setEndDate(this._o.endDate);
		this.setDaysOfWeekDisabled(this.o.daysOfWeekDisabled);
		this.setDaysOfWeekHighlighted(this.o.daysOfWeekHighlighted);
		this.setDatesDisabled(this.o.datesDisabled);

		this.fillDow();
		this.fillMonths();

		this._allow_update = true;

		this.update();
		this.showMode();

		if (this.isInline){
			this.show();
		}
	};

	Datepicker.prototype = {
		constructor: Datepicker,

		_resolveViewName: function(view, default_value){
			if (view === 0 || view === 'days' || view === 'month') {
				return 0;
			}
			if (view === 1 || view === 'months' || view === 'year') {
				return 1;
			}
			if (view === 2 || view === 'years' || view === 'decade') {
				return 2;
			}
			if (view === 3 || view === 'decades' || view === 'century') {
				return 3;
			}
			if (view === 4 || view === 'centuries' || view === 'millennium') {
				return 4;
			}
			return default_value === undefined ? false : default_value;
		},

		_check_template: function(tmp){
			try {
				// If empty
				if (tmp === undefined || tmp === "") {
					return false;
				}
				// If no html, everything ok
				if ((tmp.match(/[<>]/g) || []).length <= 0) {
					return true;
				}
				// Checking if html is fine
				var jDom = $(tmp);
				return jDom.length > 0;
			}
			catch (ex) {
				return false;
			}
		},

		_process_options: function(opts){
			// Store raw options for reference
			this._o = $.extend({}, this._o, opts);
			// Processed options
			var o = this.o = $.extend({}, this._o);

			// Check if "de-DE" style date is available, if not language should
			// fallback to 2 letter code eg "de"
			var lang = o.language;
			if (!dates[lang]){
				lang = lang.split('-')[0];
				if (!dates[lang])
					lang = defaults.language;
			}
			o.language = lang;

			// Retrieve view index from any aliases
			o.startView = this._resolveViewName(o.startView, 0);
			o.minViewMode = this._resolveViewName(o.minViewMode, 0);
			o.maxViewMode = this._resolveViewName(o.maxViewMode, 4);

			// Check that the start view is between min and max
			o.startView = Math.min(o.startView, o.maxViewMode);
			o.startView = Math.max(o.startView, o.minViewMode);

			// true, false, or Number > 0
			if (o.multidate !== true){
				o.multidate = Number(o.multidate) || false;
				if (o.multidate !== false)
					o.multidate = Math.max(0, o.multidate);
			}
			o.multidateSeparator = String(o.multidateSeparator);

			o.weekStart %= 7;
			o.weekEnd = (o.weekStart + 6) % 7;

			var format = DPGlobal.parseFormat(o.format);
			if (o.startDate !== -Infinity){
				if (!!o.startDate){
					if (o.startDate instanceof Date)
						o.startDate = this._local_to_utc(this._zero_time(o.startDate));
					else
						o.startDate = DPGlobal.parseDate(o.startDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.startDate = -Infinity;
				}
			}
			if (o.endDate !== Infinity){
				if (!!o.endDate){
					if (o.endDate instanceof Date)
						o.endDate = this._local_to_utc(this._zero_time(o.endDate));
					else
						o.endDate = DPGlobal.parseDate(o.endDate, format, o.language, o.assumeNearbyYear);
				}
				else {
					o.endDate = Infinity;
				}
			}

			o.daysOfWeekDisabled = o.daysOfWeekDisabled||[];
			if (!$.isArray(o.daysOfWeekDisabled))
				o.daysOfWeekDisabled = o.daysOfWeekDisabled.split(/[,\s]*/);
			o.daysOfWeekDisabled = $.map(o.daysOfWeekDisabled, function(d){
				return parseInt(d, 10);
			});

			o.daysOfWeekHighlighted = o.daysOfWeekHighlighted||[];
			if (!$.isArray(o.daysOfWeekHighlighted))
				o.daysOfWeekHighlighted = o.daysOfWeekHighlighted.split(/[,\s]*/);
			o.daysOfWeekHighlighted = $.map(o.daysOfWeekHighlighted, function(d){
				return parseInt(d, 10);
			});

			o.datesDisabled = o.datesDisabled||[];
			if (!$.isArray(o.datesDisabled)) {
				o.datesDisabled = [
					o.datesDisabled
				];
			}
			o.datesDisabled = $.map(o.datesDisabled,function(d){
				return DPGlobal.parseDate(d, format, o.language, o.assumeNearbyYear);
			});

			var plc = String(o.orientation).toLowerCase().split(/\s+/g),
				_plc = o.orientation.toLowerCase();
			plc = $.grep(plc, function(word){
				return /^auto|left|right|top|bottom$/.test(word);
			});
			o.orientation = {x: 'auto', y: 'auto'};
			if (!_plc || _plc === 'auto')
				; // no action
			else if (plc.length === 1){
				switch (plc[0]){
					case 'top':
					case 'bottom':
						o.orientation.y = plc[0];
						break;
					case 'left':
					case 'right':
						o.orientation.x = plc[0];
						break;
				}
			}
			else {
				_plc = $.grep(plc, function(word){
					return /^left|right$/.test(word);
				});
				o.orientation.x = _plc[0] || 'auto';

				_plc = $.grep(plc, function(word){
					return /^top|bottom$/.test(word);
				});
				o.orientation.y = _plc[0] || 'auto';
			}
			if (o.defaultViewDate) {
				var year = o.defaultViewDate.year || new Date().getFullYear();
				var month = o.defaultViewDate.month || 0;
				var day = o.defaultViewDate.day || 1;
				o.defaultViewDate = UTCDate(year, month, day);
			} else {
				o.defaultViewDate = UTCToday();
			}
		},
		_events: [],
		_secondaryEvents: [],
		_applyEvents: function(evs){
			for (var i=0, el, ch, ev; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.on(ev, ch);
			}
		},
		_unapplyEvents: function(evs){
			for (var i=0, el, ev, ch; i < evs.length; i++){
				el = evs[i][0];
				if (evs[i].length === 2){
					ch = undefined;
					ev = evs[i][1];
				}
				else if (evs[i].length === 3){
					ch = evs[i][1];
					ev = evs[i][2];
				}
				el.off(ev, ch);
			}
		},
		_buildEvents: function(){
            var events = {
                keyup: $.proxy(function(e){
                    if ($.inArray(e.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) === -1)
                        this.update();
                }, this),
                keydown: $.proxy(this.keydown, this),
                paste: $.proxy(this.paste, this)
            };

            if (this.o.showOnFocus === true) {
                events.focus = $.proxy(this.show, this);
            }

            if (this.isInput) { // single input
                this._events = [
                    [this.element, events]
                ];
            }
            else if (this.component && this.hasInput) { // component: input + button
                this._events = [
                    // For components that are not readonly, allow keyboard nav
                    [this.inputField, events],
                    [this.component, {
                        click: $.proxy(this.show, this)
                    }]
                ];
            }
			else {
				this._events = [
					[this.element, {
						click: $.proxy(this.show, this),
						keydown: $.proxy(this.keydown, this)
					}]
				];
			}
			this._events.push(
				// Component: listen for blur on element descendants
				[this.element, '*', {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}],
				// Input: listen for blur on element
				[this.element, {
					blur: $.proxy(function(e){
						this._focused_from = e.target;
					}, this)
				}]
			);

			if (this.o.immediateUpdates) {
				// Trigger input updates immediately on changed year/month
				this._events.push([this.element, {
					'changeYear changeMonth': $.proxy(function(e){
						this.update(e.date);
					}, this)
				}]);
			}

			this._secondaryEvents = [
				[this.picker, {
					click: $.proxy(this.click, this)
				}],
				[$(window), {
					resize: $.proxy(this.place, this)
				}],
				[$(document), {
					mousedown: $.proxy(function(e){
						// Clicked outside the datepicker, hide it
						if (!(
							this.element.is(e.target) ||
							this.element.find(e.target).length ||
							this.picker.is(e.target) ||
							this.picker.find(e.target).length ||
							this.isInline
						)){
							this.hide();
						}
					}, this)
				}]
			];
		},
		_attachEvents: function(){
			this._detachEvents();
			this._applyEvents(this._events);
		},
		_detachEvents: function(){
			this._unapplyEvents(this._events);
		},
		_attachSecondaryEvents: function(){
			this._detachSecondaryEvents();
			this._applyEvents(this._secondaryEvents);
		},
		_detachSecondaryEvents: function(){
			this._unapplyEvents(this._secondaryEvents);
		},
		_trigger: function(event, altdate){
			var date = altdate || this.dates.get(-1),
				local_date = this._utc_to_local(date);

			this.element.trigger({
				type: event,
				date: local_date,
				dates: $.map(this.dates, this._utc_to_local),
				format: $.proxy(function(ix, format){
					if (arguments.length === 0){
						ix = this.dates.length - 1;
						format = this.o.format;
					}
					else if (typeof ix === 'string'){
						format = ix;
						ix = this.dates.length - 1;
					}
					format = format || this.o.format;
					var date = this.dates.get(ix);
					return DPGlobal.formatDate(date, format, this.o.language);
				}, this)
			});
		},

		show: function(){
			if (this.inputField.prop('disabled') || (this.inputField.prop('readonly') && this.o.enableOnReadonly === false))
				return;
			if (!this.isInline)
				this.picker.appendTo(this.o.container);
			this.place();
			this.picker.show();
			this._attachSecondaryEvents();
			this._trigger('show');
			if ((window.navigator.msMaxTouchPoints || 'ontouchstart' in document) && this.o.disableTouchKeyboard) {
				$(this.element).blur();
			}
			return this;
		},

		hide: function(){
			if (this.isInline || !this.picker.is(':visible'))
				return this;
			this.focusDate = null;
			this.picker.hide().detach();
			this._detachSecondaryEvents();
			this.viewMode = this.o.startView;
			this.showMode();

			if (this.o.forceParse && this.inputField.val())
				this.setValue();
			this._trigger('hide');
			return this;
		},

		destroy: function(){
			this.hide();
			this._detachEvents();
			this._detachSecondaryEvents();
			this.picker.remove();
			delete this.element.data().datepicker;
			if (!this.isInput){
				delete this.element.data().date;
			}
			return this;
		},

		paste: function(evt){
			var dateString;
			if (evt.originalEvent.clipboardData && evt.originalEvent.clipboardData.types
				&& $.inArray('text/plain', evt.originalEvent.clipboardData.types) !== -1) {
				dateString = evt.originalEvent.clipboardData.getData('text/plain');
			}
			else if (window.clipboardData) {
				dateString = window.clipboardData.getData('Text');
			}
			else {
				return;
			}
			this.setDate(dateString);
			this.update();
			evt.preventDefault();
		},

		_utc_to_local: function(utc){
			return utc && new Date(utc.getTime() + (utc.getTimezoneOffset()*60000));
		},
		_local_to_utc: function(local){
			return local && new Date(local.getTime() - (local.getTimezoneOffset()*60000));
		},
		_zero_time: function(local){
			return local && new Date(local.getFullYear(), local.getMonth(), local.getDate());
		},
		_zero_utc_time: function(utc){
			return utc && new Date(Date.UTC(utc.getUTCFullYear(), utc.getUTCMonth(), utc.getUTCDate()));
		},

		getDates: function(){
			return $.map(this.dates, this._utc_to_local);
		},

		getUTCDates: function(){
			return $.map(this.dates, function(d){
				return new Date(d);
			});
		},

		getDate: function(){
			return this._utc_to_local(this.getUTCDate());
		},

		getUTCDate: function(){
			var selected_date = this.dates.get(-1);
			if (typeof selected_date !== 'undefined') {
				return new Date(selected_date);
			} else {
				return null;
			}
		},

		clearDates: function(){
			if (this.inputField) {
				this.inputField.val('');
			}

			this.update();
			this._trigger('changeDate');

			if (this.o.autoclose) {
				this.hide();
			}
		},
		setDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, args);
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setUTCDates: function(){
			var args = $.isArray(arguments[0]) ? arguments[0] : arguments;
			this.update.apply(this, $.map(args, this._utc_to_local));
			this._trigger('changeDate');
			this.setValue();
			return this;
		},

		setDate: alias('setDates'),
		setUTCDate: alias('setUTCDates'),
		remove: alias('destroy'),

		setValue: function(){
			var formatted = this.getFormattedDate();
			this.inputField.val(formatted);
			return this;
		},

		getFormattedDate: function(format){
			if (format === undefined)
				format = this.o.format;

			var lang = this.o.language;
			return $.map(this.dates, function(d){
				return DPGlobal.formatDate(d, format, lang);
			}).join(this.o.multidateSeparator);
		},

		getStartDate: function(){
			return this.o.startDate;
		},

		setStartDate: function(startDate){
			this._process_options({startDate: startDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		getEndDate: function(){
			return this.o.endDate;
		},

		setEndDate: function(endDate){
			this._process_options({endDate: endDate});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekDisabled: function(daysOfWeekDisabled){
			this._process_options({daysOfWeekDisabled: daysOfWeekDisabled});
			this.update();
			this.updateNavArrows();
			return this;
		},

		setDaysOfWeekHighlighted: function(daysOfWeekHighlighted){
			this._process_options({daysOfWeekHighlighted: daysOfWeekHighlighted});
			this.update();
			return this;
		},

		setDatesDisabled: function(datesDisabled){
			this._process_options({datesDisabled: datesDisabled});
			this.update();
			this.updateNavArrows();
		},

		place: function(){
			if (this.isInline)
				return this;
			var calendarWidth = this.picker.outerWidth(),
				calendarHeight = this.picker.outerHeight(),
				visualPadding = 10,
				container = $(this.o.container),
				windowWidth = container.width(),
				scrollTop = this.o.container === 'body' ? $(document).scrollTop() : container.scrollTop(),
				appendOffset = container.offset();

			var parentsZindex = [];
			this.element.parents().each(function(){
				var itemZIndex = $(this).css('z-index');
				if (itemZIndex !== 'auto' && itemZIndex !== 0) parentsZindex.push(parseInt(itemZIndex));
			});
			var zIndex = Math.max.apply(Math, parentsZindex) + this.o.zIndexOffset;
			var offset = this.component ? this.component.parent().offset() : this.element.offset();
			var height = this.component ? this.component.outerHeight(true) : this.element.outerHeight(false);
			var width = this.component ? this.component.outerWidth(true) : this.element.outerWidth(false);
			var left = offset.left - appendOffset.left,
				top = offset.top - appendOffset.top;

			if (this.o.container !== 'body') {
				top += scrollTop;
			}

			this.picker.removeClass(
				'datepicker-orient-top datepicker-orient-bottom '+
				'datepicker-orient-right datepicker-orient-left'
			);

			if (this.o.orientation.x !== 'auto'){
				this.picker.addClass('datepicker-orient-' + this.o.orientation.x);
				if (this.o.orientation.x === 'right')
					left -= calendarWidth - width;
			}
			// auto x orientation is best-placement: if it crosses a window
			// edge, fudge it sideways
			else {
				if (offset.left < 0) {
					// component is outside the window on the left side. Move it into visible range
					this.picker.addClass('datepicker-orient-left');
					left -= offset.left - visualPadding;
				} else if (left + calendarWidth > windowWidth) {
					// the calendar passes the widow right edge. Align it to component right side
					this.picker.addClass('datepicker-orient-right');
					left += width - calendarWidth;
				} else {
					// Default to left
					this.picker.addClass('datepicker-orient-left');
				}
			}

			// auto y orientation is best-situation: top or bottom, no fudging,
			// decision based on which shows more of the calendar
			var yorient = this.o.orientation.y,
				top_overflow;
			if (yorient === 'auto'){
				top_overflow = -scrollTop + top - calendarHeight;
				yorient = top_overflow < 0 ? 'bottom' : 'top';
			}

			this.picker.addClass('datepicker-orient-' + yorient);
			if (yorient === 'top')
				top -= calendarHeight + parseInt(this.picker.css('padding-top'));
			else
				top += height;

			if (this.o.rtl) {
				var right = windowWidth - (left + width);
				this.picker.css({
					top: top,
					right: right,
					zIndex: zIndex
				});
			} else {
				this.picker.css({
					top: top,
					left: left,
					zIndex: zIndex
				});
			}
			return this;
		},

		_allow_update: true,
		update: function(){
			if (!this._allow_update)
				return this;

			var oldDates = this.dates.copy(),
				dates = [],
				fromArgs = false;
			if (arguments.length){
				$.each(arguments, $.proxy(function(i, date){
					if (date instanceof Date)
						date = this._local_to_utc(date);
					dates.push(date);
				}, this));
				fromArgs = true;
			}
			else {
				dates = this.isInput
						? this.element.val()
						: this.element.data('date') || this.inputField.val();
				if (dates && this.o.multidate)
					dates = dates.split(this.o.multidateSeparator);
				else
					dates = [dates];
				delete this.element.data().date;
			}

			dates = $.map(dates, $.proxy(function(date){
				return DPGlobal.parseDate(date, this.o.format, this.o.language, this.o.assumeNearbyYear);
			}, this));
			dates = $.grep(dates, $.proxy(function(date){
				return (
					!this.dateWithinRange(date) ||
					!date
				);
			}, this), true);
			this.dates.replace(dates);

			if (this.dates.length)
				this.viewDate = new Date(this.dates.get(-1));
			else if (this.viewDate < this.o.startDate)
				this.viewDate = new Date(this.o.startDate);
			else if (this.viewDate > this.o.endDate)
				this.viewDate = new Date(this.o.endDate);
			else
				this.viewDate = this.o.defaultViewDate;

			if (fromArgs){
				// setting date by clicking
				this.setValue();
			}
			else if (dates.length){
				// setting date by typing
				if (String(oldDates) !== String(this.dates))
					this._trigger('changeDate');
			}
			if (!this.dates.length && oldDates.length)
				this._trigger('clearDate');

			this.fill();
			this.element.change();
			return this;
		},

		fillDow: function(){
			var dowCnt = this.o.weekStart,
				html = '<tr>';
			if (this.o.calendarWeeks){
				this.picker.find('.datepicker-days .datepicker-switch')
					.attr('colspan', function(i, val){
						return parseInt(val) + 1;
					});
				html += '<th class="cw">&#160;</th>';
			}
			while (dowCnt < this.o.weekStart + 7){
				html += '<th class="dow';
        if ($.inArray(dowCnt, this.o.daysOfWeekDisabled) > -1)
          html += ' disabled';
        html += '">'+dates[this.o.language].daysMin[(dowCnt++)%7]+'</th>';
			}
			html += '</tr>';
			this.picker.find('.datepicker-days thead').append(html);
		},

		fillMonths: function(){
      var localDate = this._utc_to_local(this.viewDate);
			var html = '',
			i = 0;
			while (i < 12){
        var focused = localDate && localDate.getMonth() === i ? ' focused' : '';
				html += '<span class="month' + focused + '">' + dates[this.o.language].monthsShort[i++]+'</span>';
			}
			this.picker.find('.datepicker-months td').html(html);
		},

		setRange: function(range){
			if (!range || !range.length)
				delete this.range;
			else
				this.range = $.map(range, function(d){
					return d.valueOf();
				});
			this.fill();
		},

		getClassNames: function(date){
			var cls = [],
				year = this.viewDate.getUTCFullYear(),
				month = this.viewDate.getUTCMonth(),
				today = new Date();
			if (date.getUTCFullYear() < year || (date.getUTCFullYear() === year && date.getUTCMonth() < month)){
				cls.push('old');
			}
			else if (date.getUTCFullYear() > year || (date.getUTCFullYear() === year && date.getUTCMonth() > month)){
				cls.push('new');
			}
			if (this.focusDate && date.valueOf() === this.focusDate.valueOf())
				cls.push('focused');
			// Compare internal UTC date with local today, not UTC today
			if (this.o.todayHighlight &&
				date.getUTCFullYear() === today.getFullYear() &&
				date.getUTCMonth() === today.getMonth() &&
				date.getUTCDate() === today.getDate()){
				cls.push('today');
			}
			if (this.dates.contains(date) !== -1)
				cls.push('active');
			if (!this.dateWithinRange(date)){
				cls.push('disabled');
			}
			if (this.dateIsDisabled(date)){
				cls.push('disabled', 'disabled-date');	
			} 
			if ($.inArray(date.getUTCDay(), this.o.daysOfWeekHighlighted) !== -1){
				cls.push('highlighted');
			}

			if (this.range){
				if (date > this.range[0] && date < this.range[this.range.length-1]){
					cls.push('range');
				}
				if ($.inArray(date.valueOf(), this.range) !== -1){
					cls.push('selected');
				}
				if (date.valueOf() === this.range[0]){
          cls.push('range-start');
        }
        if (date.valueOf() === this.range[this.range.length-1]){
          cls.push('range-end');
        }
			}
			return cls;
		},

		_fill_yearsView: function(selector, cssClass, factor, step, currentYear, startYear, endYear, callback){
			var html, view, year, steps, startStep, endStep, thisYear, i, classes, tooltip, before;

			html      = '';
			view      = this.picker.find(selector);
			year      = parseInt(currentYear / factor, 10) * factor;
			startStep = parseInt(startYear / step, 10) * step;
			endStep   = parseInt(endYear / step, 10) * step;
			steps     = $.map(this.dates, function(d){
				return parseInt(d.getUTCFullYear() / step, 10) * step;
			});

			view.find('.datepicker-switch').text(year + '-' + (year + step * 9));

			thisYear = year - step;
			for (i = -1; i < 11; i += 1) {
				classes = [cssClass];
				tooltip = null;

				if (i === -1) {
					classes.push('old');
				} else if (i === 10) {
					classes.push('new');
				}
				if ($.inArray(thisYear, steps) !== -1) {
					classes.push('active');
				}
				if (thisYear < startStep || thisYear > endStep) {
					classes.push('disabled');
				}
        if (thisYear === this.viewDate.getFullYear()) {
				  classes.push('focused');
        }

				if (callback !== $.noop) {
					before = callback(new Date(thisYear, 0, 1));
					if (before === undefined) {
						before = {};
					} else if (typeof(before) === 'boolean') {
						before = {enabled: before};
					} else if (typeof(before) === 'string') {
						before = {classes: before};
					}
					if (before.enabled === false) {
						classes.push('disabled');
					}
					if (before.classes) {
						classes = classes.concat(before.classes.split(/\s+/));
					}
					if (before.tooltip) {
						tooltip = before.tooltip;
					}
				}

				html += '<span class="' + classes.join(' ') + '"' + (tooltip ? ' title="' + tooltip + '"' : '') + '>' + thisYear + '</span>';
				thisYear += step;
			}
			view.find('td').html(html);
		},

		fill: function(){
			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth(),
				startYear = this.o.startDate !== -Infinity ? this.o.startDate.getUTCFullYear() : -Infinity,
				startMonth = this.o.startDate !== -Infinity ? this.o.startDate.getUTCMonth() : -Infinity,
				endYear = this.o.endDate !== Infinity ? this.o.endDate.getUTCFullYear() : Infinity,
				endMonth = this.o.endDate !== Infinity ? this.o.endDate.getUTCMonth() : Infinity,
				todaytxt = dates[this.o.language].today || dates['en'].today || '',
				cleartxt = dates[this.o.language].clear || dates['en'].clear || '',
				titleFormat = dates[this.o.language].titleFormat || dates['en'].titleFormat,
				tooltip,
				before;
			if (isNaN(year) || isNaN(month))
				return;
			this.picker.find('.datepicker-days .datepicker-switch')
						.text(DPGlobal.formatDate(d, titleFormat, this.o.language));
			this.picker.find('tfoot .today')
						.text(todaytxt)
						.toggle(this.o.todayBtn !== false);
			this.picker.find('tfoot .clear')
						.text(cleartxt)
						.toggle(this.o.clearBtn !== false);
			this.picker.find('thead .datepicker-title')
						.text(this.o.title)
						.toggle(this.o.title !== '');
			this.updateNavArrows();
			this.fillMonths();
			var prevMonth = UTCDate(year, month-1, 28),
				day = DPGlobal.getDaysInMonth(prevMonth.getUTCFullYear(), prevMonth.getUTCMonth());
			prevMonth.setUTCDate(day);
			prevMonth.setUTCDate(day - (prevMonth.getUTCDay() - this.o.weekStart + 7)%7);
			var nextMonth = new Date(prevMonth);
			if (prevMonth.getUTCFullYear() < 100){
        nextMonth.setUTCFullYear(prevMonth.getUTCFullYear());
      }
			nextMonth.setUTCDate(nextMonth.getUTCDate() + 42);
			nextMonth = nextMonth.valueOf();
			var html = [];
			var clsName;
			while (prevMonth.valueOf() < nextMonth){
				if (prevMonth.getUTCDay() === this.o.weekStart){
					html.push('<tr>');
					if (this.o.calendarWeeks){
						// ISO 8601: First week contains first thursday.
						// ISO also states week starts on Monday, but we can be more abstract here.
						var
							// Start of current week: based on weekstart/current date
							ws = new Date(+prevMonth + (this.o.weekStart - prevMonth.getUTCDay() - 7) % 7 * 864e5),
							// Thursday of this week
							th = new Date(Number(ws) + (7 + 4 - ws.getUTCDay()) % 7 * 864e5),
							// First Thursday of year, year from thursday
							yth = new Date(Number(yth = UTCDate(th.getUTCFullYear(), 0, 1)) + (7 + 4 - yth.getUTCDay())%7*864e5),
							// Calendar week: ms between thursdays, div ms per day, div 7 days
							calWeek =  (th - yth) / 864e5 / 7 + 1;
						html.push('<td class="cw">'+ calWeek +'</td>');
					}
				}
				clsName = this.getClassNames(prevMonth);
				clsName.push('day');

				if (this.o.beforeShowDay !== $.noop){
					before = this.o.beforeShowDay(this._utc_to_local(prevMonth));
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false)
						clsName.push('disabled');
					if (before.classes)
						clsName = clsName.concat(before.classes.split(/\s+/));
					if (before.tooltip)
						tooltip = before.tooltip;
				}

				//Check if uniqueSort exists (supported by jquery >=1.12 and >=2.2)
				//Fallback to unique function for older jquery versions
				if ($.isFunction($.uniqueSort)) {
					clsName = $.uniqueSort(clsName);
				} else {
					clsName = $.unique(clsName);
				}

				html.push('<td class="'+clsName.join(' ')+'"' + (tooltip ? ' title="'+tooltip+'"' : '') + '>'+prevMonth.getUTCDate() + '</td>');
				tooltip = null;
				if (prevMonth.getUTCDay() === this.o.weekEnd){
					html.push('</tr>');
				}
				prevMonth.setUTCDate(prevMonth.getUTCDate()+1);
			}
			this.picker.find('.datepicker-days tbody').empty().append(html.join(''));

			var monthsTitle = dates[this.o.language].monthsTitle || dates['en'].monthsTitle || 'Months';
			var months = this.picker.find('.datepicker-months')
						.find('.datepicker-switch')
							.text(this.o.maxViewMode < 2 ? monthsTitle : year)
							.end()
						.find('span').removeClass('active');

			$.each(this.dates, function(i, d){
				if (d.getUTCFullYear() === year)
					months.eq(d.getUTCMonth()).addClass('active');
			});

			if (year < startYear || year > endYear){
				months.addClass('disabled');
			}
			if (year === startYear){
				months.slice(0, startMonth).addClass('disabled');
			}
			if (year === endYear){
				months.slice(endMonth+1).addClass('disabled');
			}

			if (this.o.beforeShowMonth !== $.noop){
				var that = this;
				$.each(months, function(i, month){
          var moDate = new Date(year, i, 1);
          var before = that.o.beforeShowMonth(moDate);
					if (before === undefined)
						before = {};
					else if (typeof(before) === 'boolean')
						before = {enabled: before};
					else if (typeof(before) === 'string')
						before = {classes: before};
					if (before.enabled === false && !$(month).hasClass('disabled'))
					    $(month).addClass('disabled');
					if (before.classes)
					    $(month).addClass(before.classes);
					if (before.tooltip)
					    $(month).prop('title', before.tooltip);
				});
			}

			// Generating decade/years picker
			this._fill_yearsView(
				'.datepicker-years',
				'year',
				10,
				1,
				year,
				startYear,
				endYear,
				this.o.beforeShowYear
			);

			// Generating century/decades picker
			this._fill_yearsView(
				'.datepicker-decades',
				'decade',
				100,
				10,
				year,
				startYear,
				endYear,
				this.o.beforeShowDecade
			);

			// Generating millennium/centuries picker
			this._fill_yearsView(
				'.datepicker-centuries',
				'century',
				1000,
				100,
				year,
				startYear,
				endYear,
				this.o.beforeShowCentury
			);
		},

		updateNavArrows: function(){
			if (!this._allow_update)
				return;

			var d = new Date(this.viewDate),
				year = d.getUTCFullYear(),
				month = d.getUTCMonth();
			switch (this.viewMode){
				case 0:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() && month <= this.o.startDate.getUTCMonth()){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() && month >= this.o.endDate.getUTCMonth()){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
				case 1:
				case 2:
				case 3:
				case 4:
					if (this.o.startDate !== -Infinity && year <= this.o.startDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.prev').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.prev').css({visibility: 'visible'});
					}
					if (this.o.endDate !== Infinity && year >= this.o.endDate.getUTCFullYear() || this.o.maxViewMode < 2){
						this.picker.find('.next').css({visibility: 'hidden'});
					}
					else {
						this.picker.find('.next').css({visibility: 'visible'});
					}
					break;
			}
		},

		click: function(e){
			e.preventDefault();
			e.stopPropagation();

			var target, dir, day, year, month, monthChanged, yearChanged;
			target = $(e.target);

			// Clicked on the switch
			if (target.hasClass('datepicker-switch')){
				this.showMode(1);
			}

			// Clicked on prev or next
			var navArrow = target.closest('.prev, .next');
			if (navArrow.length > 0) {
				dir = DPGlobal.modes[this.viewMode].navStep * (navArrow.hasClass('prev') ? -1 : 1);
				if (this.viewMode === 0){
					this.viewDate = this.moveMonth(this.viewDate, dir);
					this._trigger('changeMonth', this.viewDate);
				} else {
					this.viewDate = this.moveYear(this.viewDate, dir);
					if (this.viewMode === 1){
						this._trigger('changeYear', this.viewDate);
					}
				}
				this.fill();
			}

			// Clicked on today button
			if (target.hasClass('today') && !target.hasClass('day')){
				this.showMode(-2);
				this._setDate(UTCToday(), this.o.todayBtn === 'linked' ? null : 'view');
			}

			// Clicked on clear button
			if (target.hasClass('clear')){
				this.clearDates();
			}

			if (!target.hasClass('disabled')){
				// Clicked on a day
				if (target.hasClass('day')){
					day = parseInt(target.text(), 10) || 1;
					year = this.viewDate.getUTCFullYear();
					month = this.viewDate.getUTCMonth();

					// From last month
					if (target.hasClass('old')){
						if (month === 0) {
							month = 11;
							year = year - 1;
							monthChanged = true;
							yearChanged = true;
						} else {
							month = month - 1;
							monthChanged = true;
 						}
 					}

					// From next month
					if (target.hasClass('new')) {
						if (month === 11){
							month = 0;
							year = year + 1;
							monthChanged = true;
							yearChanged = true;
 						} else {
							month = month + 1;
							monthChanged = true;
 						}
					}
					this._setDate(UTCDate(year, month, day));
					if (yearChanged) {
						this._trigger('changeYear', this.viewDate);
					}
					if (monthChanged) {
						this._trigger('changeMonth', this.viewDate);
					}
				}

				// Clicked on a month
				if (target.hasClass('month')) {
					this.viewDate.setUTCDate(1);
					day = 1;
					month = target.parent().find('span').index(target);
					year = this.viewDate.getUTCFullYear();
					this.viewDate.setUTCMonth(month);
					this._trigger('changeMonth', this.viewDate);
					if (this.o.minViewMode === 1){
						this._setDate(UTCDate(year, month, day));
						this.showMode();
					} else {
						this.showMode(-1);
					}
					this.fill();
				}

				// Clicked on a year
				if (target.hasClass('year')
						|| target.hasClass('decade')
						|| target.hasClass('century')) {
					this.viewDate.setUTCDate(1);

					day = 1;
					month = 0;
					year = parseInt(target.text(), 10)||0;
					this.viewDate.setUTCFullYear(year);

					if (target.hasClass('year')){
						this._trigger('changeYear', this.viewDate);
						if (this.o.minViewMode === 2){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('decade')){
						this._trigger('changeDecade', this.viewDate);
						if (this.o.minViewMode === 3){
							this._setDate(UTCDate(year, month, day));
						}
					}
					if (target.hasClass('century')){
						this._trigger('changeCentury', this.viewDate);
						if (this.o.minViewMode === 4){
							this._setDate(UTCDate(year, month, day));
						}
					}

					this.showMode(-1);
					this.fill();
				}
			}

			if (this.picker.is(':visible') && this._focused_from){
				$(this._focused_from).focus();
			}
			delete this._focused_from;
		},

		_toggle_multidate: function(date){
			var ix = this.dates.contains(date);
			if (!date){
				this.dates.clear();
			}

			if (ix !== -1){
				if (this.o.multidate === true || this.o.multidate > 1 || this.o.toggleActive){
					this.dates.remove(ix);
				}
			} else if (this.o.multidate === false) {
				this.dates.clear();
				this.dates.push(date);
			}
			else {
				this.dates.push(date);
			}

			if (typeof this.o.multidate === 'number')
				while (this.dates.length > this.o.multidate)
					this.dates.remove(0);
		},

		_setDate: function(date, which){
			if (!which || which === 'date')
				this._toggle_multidate(date && new Date(date));
			if (!which || which === 'view')
				this.viewDate = date && new Date(date);

			this.fill();
			this.setValue();
			if (!which || which !== 'view') {
				this._trigger('changeDate');
			}
			if (this.inputField){
				this.inputField.change();
			}
			if (this.o.autoclose && (!which || which === 'date')){
				this.hide();
			}
		},

		moveDay: function(date, dir){
			var newDate = new Date(date);
			newDate.setUTCDate(date.getUTCDate() + dir);

			return newDate;
		},

		moveWeek: function(date, dir){
			return this.moveDay(date, dir * 7);
		},

		moveMonth: function(date, dir){
			if (!isValidDate(date))
				return this.o.defaultViewDate;
			if (!dir)
				return date;
			var new_date = new Date(date.valueOf()),
				day = new_date.getUTCDate(),
				month = new_date.getUTCMonth(),
				mag = Math.abs(dir),
				new_month, test;
			dir = dir > 0 ? 1 : -1;
			if (mag === 1){
				test = dir === -1
					// If going back one month, make sure month is not current month
					// (eg, Mar 31 -> Feb 31 == Feb 28, not Mar 02)
					? function(){
						return new_date.getUTCMonth() === month;
					}
					// If going forward one month, make sure month is as expected
					// (eg, Jan 31 -> Feb 31 == Feb 28, not Mar 02)
					: function(){
						return new_date.getUTCMonth() !== new_month;
					};
				new_month = month + dir;
				new_date.setUTCMonth(new_month);
				// Dec -> Jan (12) or Jan -> Dec (-1) -- limit expected date to 0-11
				if (new_month < 0 || new_month > 11)
					new_month = (new_month + 12) % 12;
			}
			else {
				// For magnitudes >1, move one month at a time...
				for (var i=0; i < mag; i++)
					// ...which might decrease the day (eg, Jan 31 to Feb 28, etc)...
					new_date = this.moveMonth(new_date, dir);
				// ...then reset the day, keeping it in the new month
				new_month = new_date.getUTCMonth();
				new_date.setUTCDate(day);
				test = function(){
					return new_month !== new_date.getUTCMonth();
				};
			}
			// Common date-resetting loop -- if date is beyond end of month, make it
			// end of month
			while (test()){
				new_date.setUTCDate(--day);
				new_date.setUTCMonth(new_month);
			}
			return new_date;
		},

		moveYear: function(date, dir){
			return this.moveMonth(date, dir*12);
		},

		moveAvailableDate: function(date, dir, fn){
			do {
				date = this[fn](date, dir);

				if (!this.dateWithinRange(date))
					return false;

				fn = 'moveDay';
			}
			while (this.dateIsDisabled(date));

			return date;
		},

		weekOfDateIsDisabled: function(date){
			return $.inArray(date.getUTCDay(), this.o.daysOfWeekDisabled) !== -1;
		},

		dateIsDisabled: function(date){
			return (
				this.weekOfDateIsDisabled(date) ||
				$.grep(this.o.datesDisabled, function(d){
					return isUTCEquals(date, d);
				}).length > 0
			);
		},

		dateWithinRange: function(date){
			return date >= this.o.startDate && date <= this.o.endDate;
		},

		keydown: function(e){
			if (!this.picker.is(':visible')){
				if (e.keyCode === 40 || e.keyCode === 27) { // allow down to re-show picker
					this.show();
					e.stopPropagation();
        }
				return;
			}
			var dateChanged = false,
				dir, newViewDate,
				focusDate = this.focusDate || this.viewDate;
			switch (e.keyCode){
				case 27: // escape
					if (this.focusDate){
						this.focusDate = null;
						this.viewDate = this.dates.get(-1) || this.viewDate;
						this.fill();
					}
					else
						this.hide();
					e.preventDefault();
					e.stopPropagation();
					break;
				case 37: // left
				case 38: // up
				case 39: // right
				case 40: // down
					if (!this.o.keyboardNavigation || this.o.daysOfWeekDisabled.length === 7)
						break;
					dir = e.keyCode === 37 || e.keyCode === 38 ? -1 : 1;
          if (this.viewMode === 0) {
  					if (e.ctrlKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');

  						if (newViewDate)
  							this._trigger('changeYear', this.viewDate);
  					}
  					else if (e.shiftKey){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');

  						if (newViewDate)
  							this._trigger('changeMonth', this.viewDate);
  					}
  					else if (e.keyCode === 37 || e.keyCode === 39){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveDay');
  					}
  					else if (!this.weekOfDateIsDisabled(focusDate)){
  						newViewDate = this.moveAvailableDate(focusDate, dir, 'moveWeek');
  					}
          } else if (this.viewMode === 1) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveMonth');
          } else if (this.viewMode === 2) {
            if (e.keyCode === 38 || e.keyCode === 40) {
              dir = dir * 4;
            }
            newViewDate = this.moveAvailableDate(focusDate, dir, 'moveYear');
          }
					if (newViewDate){
						this.focusDate = this.viewDate = newViewDate;
						this.setValue();
						this.fill();
						e.preventDefault();
					}
					break;
				case 13: // enter
					if (!this.o.forceParse)
						break;
					focusDate = this.focusDate || this.dates.get(-1) || this.viewDate;
					if (this.o.keyboardNavigation) {
						this._toggle_multidate(focusDate);
						dateChanged = true;
					}
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.setValue();
					this.fill();
					if (this.picker.is(':visible')){
						e.preventDefault();
						e.stopPropagation();
						if (this.o.autoclose)
							this.hide();
					}
					break;
				case 9: // tab
					this.focusDate = null;
					this.viewDate = this.dates.get(-1) || this.viewDate;
					this.fill();
					this.hide();
					break;
			}
			if (dateChanged){
				if (this.dates.length)
					this._trigger('changeDate');
				else
					this._trigger('clearDate');
				if (this.inputField){
					this.inputField.change();
				}
			}
		},

		showMode: function(dir){
			if (dir){
				this.viewMode = Math.max(this.o.minViewMode, Math.min(this.o.maxViewMode, this.viewMode + dir));
			}
			this.picker
				.children('div')
				.hide()
				.filter('.datepicker-' + DPGlobal.modes[this.viewMode].clsName)
					.show();
			this.updateNavArrows();
		}
	};

	var DateRangePicker = function(element, options){
		$(element).data('datepicker', this);
		this.element = $(element);
		this.inputs = $.map(options.inputs, function(i){
			return i.jquery ? i[0] : i;
		});
		delete options.inputs;

		datepickerPlugin.call($(this.inputs), options)
			.on('changeDate', $.proxy(this.dateUpdated, this));

		this.pickers = $.map(this.inputs, function(i){
			return $(i).data('datepicker');
		});
		this.updateDates();
	};
	DateRangePicker.prototype = {
		updateDates: function(){
			this.dates = $.map(this.pickers, function(i){
				return i.getUTCDate();
			});
			this.updateRanges();
		},
		updateRanges: function(){
			var range = $.map(this.dates, function(d){
				return d.valueOf();
			});
			$.each(this.pickers, function(i, p){
				p.setRange(range);
			});
		},
		dateUpdated: function(e){
			// `this.updating` is a workaround for preventing infinite recursion
			// between `changeDate` triggering and `setUTCDate` calling.  Until
			// there is a better mechanism.
			if (this.updating)
				return;
			this.updating = true;

			var dp = $(e.target).data('datepicker');

			if (typeof(dp) === "undefined") {
				return;
			}

			var new_date = dp.getUTCDate(),
				i = $.inArray(e.target, this.inputs),
				j = i - 1,
				k = i + 1,
				l = this.inputs.length;
			if (i === -1)
				return;

			$.each(this.pickers, function(i, p){
				if (!p.getUTCDate())
					p.setUTCDate(new_date);
			});

			if (new_date < this.dates[j]){
				// Date being moved earlier/left
				while (j >= 0 && new_date < this.dates[j]){
					this.pickers[j--].setUTCDate(new_date);
				}
			}
			else if (new_date > this.dates[k]){
				// Date being moved later/right
				while (k < l && new_date > this.dates[k]){
					this.pickers[k++].setUTCDate(new_date);
				}
			}
			this.updateDates();

			delete this.updating;
		},
		remove: function(){
			$.map(this.pickers, function(p){ p.remove(); });
			delete this.element.data().datepicker;
		}
	};

	function opts_from_el(el, prefix){
		// Derive options from element data-attrs
		var data = $(el).data(),
			out = {}, inkey,
			replace = new RegExp('^' + prefix.toLowerCase() + '([A-Z])');
		prefix = new RegExp('^' + prefix.toLowerCase());
		function re_lower(_,a){
			return a.toLowerCase();
		}
		for (var key in data)
			if (prefix.test(key)){
				inkey = key.replace(replace, re_lower);
				out[inkey] = data[key];
			}
		return out;
	}

	function opts_from_locale(lang){
		// Derive options from locale plugins
		var out = {};
		// Check if "de-DE" style date is available, if not language should
		// fallback to 2 letter code eg "de"
		if (!dates[lang]){
			lang = lang.split('-')[0];
			if (!dates[lang])
				return;
		}
		var d = dates[lang];
		$.each(locale_opts, function(i,k){
			if (k in d)
				out[k] = d[k];
		});
		return out;
	}

	var old = $.fn.datepicker;
	var datepickerPlugin = function(option){
		var args = Array.apply(null, arguments);
		args.shift();
		var internal_return;
		this.each(function(){
			var $this = $(this),
				data = $this.data('datepicker'),
				options = typeof option === 'object' && option;
			if (!data){
				var elopts = opts_from_el(this, 'date'),
					// Preliminary otions
					xopts = $.extend({}, defaults, elopts, options),
					locopts = opts_from_locale(xopts.language),
					// Options priority: js args, data-attrs, locales, defaults
					opts = $.extend({}, defaults, locopts, elopts, options);
				if ($this.hasClass('input-daterange') || opts.inputs){
					$.extend(opts, {
						inputs: opts.inputs || $this.find('input').toArray()
					});
					data = new DateRangePicker(this, opts);
				}
				else {
					data = new Datepicker(this, opts);
				}
				$this.data('datepicker', data);
			}
			if (typeof option === 'string' && typeof data[option] === 'function'){
				internal_return = data[option].apply(data, args);
			}
		});

		if (
			internal_return === undefined ||
			internal_return instanceof Datepicker ||
			internal_return instanceof DateRangePicker
		)
			return this;

		if (this.length > 1)
			throw new Error('Using only allowed for the collection of a single element (' + option + ' function)');
		else
			return internal_return;
	};
	$.fn.datepicker = datepickerPlugin;

	var defaults = $.fn.datepicker.defaults = {
		assumeNearbyYear: false,
		autoclose: false,
		beforeShowDay: $.noop,
		beforeShowMonth: $.noop,
		beforeShowYear: $.noop,
		beforeShowDecade: $.noop,
		beforeShowCentury: $.noop,
		calendarWeeks: false,
		clearBtn: false,
		toggleActive: false,
		daysOfWeekDisabled: [],
		daysOfWeekHighlighted: [],
		datesDisabled: [],
		endDate: Infinity,
		forceParse: true,
		format: 'mm/dd/yyyy',
		keyboardNavigation: true,
		language: 'en',
		minViewMode: 0,
		maxViewMode: 4,
		multidate: false,
		multidateSeparator: ',',
		orientation: "auto",
		rtl: false,
		startDate: -Infinity,
		startView: 0,
		todayBtn: false,
		todayHighlight: false,
		weekStart: 0,
		disableTouchKeyboard: false,
		enableOnReadonly: true,
		showOnFocus: true,
		zIndexOffset: 10,
		container: 'body',
		immediateUpdates: false,
		title: '',
		templates: {
			leftArrow: '&laquo;',
			rightArrow: '&raquo;'
		}
	};
	var locale_opts = $.fn.datepicker.locale_opts = [
		'format',
		'rtl',
		'weekStart'
	];
	$.fn.datepicker.Constructor = Datepicker;
	var dates = $.fn.datepicker.dates = {
		en: {
			days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
			daysShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
			daysMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			monthsShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
			today: "Today",
			clear: "Clear",
			titleFormat: "MM yyyy"
		}
	};

	var DPGlobal = {
		modes: [
			{
				clsName: 'days',
				navFnc: 'Month',
				navStep: 1
			},
			{
				clsName: 'months',
				navFnc: 'FullYear',
				navStep: 1
			},
			{
				clsName: 'years',
				navFnc: 'FullYear',
				navStep: 10
			},
			{
				clsName: 'decades',
				navFnc: 'FullDecade',
				navStep: 100
			},
			{
				clsName: 'centuries',
				navFnc: 'FullCentury',
				navStep: 1000
		}],
		isLeapYear: function(year){
			return (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0));
		},
		getDaysInMonth: function(year, month){
			return [31, (DPGlobal.isLeapYear(year) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
		},
		validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
		nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
		parseFormat: function(format){
			if (typeof format.toValue === 'function' && typeof format.toDisplay === 'function')
                return format;
            // IE treats \0 as a string end in inputs (truncating the value),
			// so it's a bad format delimiter, anyway
			var separators = format.replace(this.validParts, '\0').split('\0'),
				parts = format.match(this.validParts);
			if (!separators || !separators.length || !parts || parts.length === 0){
				throw new Error("Invalid date format.");
			}
			return {separators: separators, parts: parts};
		},
		parseDate: function(date, format, language, assumeNearby){
			if (!date)
				return undefined;
			if (date instanceof Date)
				return date;
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toValue)
                return format.toValue(date, format, language);
            var part_re = /([\-+]\d+)([dmwy])/,
				parts = date.match(/([\-+]\d+)([dmwy])/g),
				fn_map = {
					d: 'moveDay',
					m: 'moveMonth',
					w: 'moveWeek',
					y: 'moveYear'
				},
				dateAliases = {
					yesterday: '-1d',
					today: '+0d',
					tomorrow: '+1d'
				},
				part, dir, i, fn;
			if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
				date = new Date();
				for (i=0; i < parts.length; i++){
					part = part_re.exec(parts[i]);
					dir = parseInt(part[1]);
					fn = fn_map[part[2]];
					date = Datepicker.prototype[fn](date, dir);
				}
				return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
			}

			if (typeof dateAliases[date] !== 'undefined') {
				date = dateAliases[date];
				parts = date.match(/([\-+]\d+)([dmwy])/g);

				if (/^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/.test(date)){
					date = new Date();
				  	for (i=0; i < parts.length; i++){
						part = part_re.exec(parts[i]);
						dir = parseInt(part[1]);
						fn = fn_map[part[2]];
						date = Datepicker.prototype[fn](date, dir);
				  	}

			  		return UTCDate(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());
				}
			}

			parts = date && date.match(this.nonpunctuation) || [];
			date = new Date();

			function applyNearbyYear(year, threshold){
				if (threshold === true)
					threshold = 10;

				// if year is 2 digits or less, than the user most likely is trying to get a recent century
				if (year < 100){
					year += 2000;
					// if the new year is more than threshold years in advance, use last century
					if (year > ((new Date()).getFullYear()+threshold)){
						year -= 100;
					}
				}

				return year;
			}

			var parsed = {},
				setters_order = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
				setters_map = {
					yyyy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					yy: function(d,v){
						return d.setUTCFullYear(assumeNearby ? applyNearbyYear(v, assumeNearby) : v);
					},
					m: function(d,v){
						if (isNaN(d))
							return d;
						v -= 1;
						while (v < 0) v += 12;
						v %= 12;
						d.setUTCMonth(v);
						while (d.getUTCMonth() !== v)
							d.setUTCDate(d.getUTCDate()-1);
						return d;
					},
					d: function(d,v){
						return d.setUTCDate(v);
					}
				},
				val, filtered;
			setters_map['M'] = setters_map['MM'] = setters_map['mm'] = setters_map['m'];
			setters_map['dd'] = setters_map['d'];
			date = UTCToday();
			var fparts = format.parts.slice();
			// Remove noop parts
			if (parts.length !== fparts.length){
				fparts = $(fparts).filter(function(i,p){
					return $.inArray(p, setters_order) !== -1;
				}).toArray();
			}
			// Process remainder
			function match_part(){
				var m = this.slice(0, parts[i].length),
					p = parts[i].slice(0, m.length);
				return m.toLowerCase() === p.toLowerCase();
			}
			if (parts.length === fparts.length){
				var cnt;
				for (i=0, cnt = fparts.length; i < cnt; i++){
					val = parseInt(parts[i], 10);
					part = fparts[i];
					if (isNaN(val)){
						switch (part){
							case 'MM':
								filtered = $(dates[language].months).filter(match_part);
								val = $.inArray(filtered[0], dates[language].months) + 1;
								break;
							case 'M':
								filtered = $(dates[language].monthsShort).filter(match_part);
								val = $.inArray(filtered[0], dates[language].monthsShort) + 1;
								break;
						}
					}
					parsed[part] = val;
				}
				var _date, s;
				for (i=0; i < setters_order.length; i++){
					s = setters_order[i];
					if (s in parsed && !isNaN(parsed[s])){
						_date = new Date(date);
						setters_map[s](_date, parsed[s]);
						if (!isNaN(_date))
							date = _date;
					}
				}
			}
			return date;
		},
		formatDate: function(date, format, language){
			if (!date)
				return '';
			if (typeof format === 'string')
				format = DPGlobal.parseFormat(format);
			if (format.toDisplay)
                return format.toDisplay(date, format, language);
            var val = {
				d: date.getUTCDate(),
				D: dates[language].daysShort[date.getUTCDay()],
				DD: dates[language].days[date.getUTCDay()],
				m: date.getUTCMonth() + 1,
				M: dates[language].monthsShort[date.getUTCMonth()],
				MM: dates[language].months[date.getUTCMonth()],
				yy: date.getUTCFullYear().toString().substring(2),
				yyyy: date.getUTCFullYear()
			};
			val.dd = (val.d < 10 ? '0' : '') + val.d;
			val.mm = (val.m < 10 ? '0' : '') + val.m;
			date = [];
			var seps = $.extend([], format.separators);
			for (var i=0, cnt = format.parts.length; i <= cnt; i++){
				if (seps.length)
					date.push(seps.shift());
				date.push(val[format.parts[i]]);
			}
			return date.join('');
		},
		headTemplate: '<thead>'+
			              '<tr>'+
			                '<th colspan="7" class="datepicker-title"></th>'+
			              '</tr>'+
							'<tr>'+
								'<th class="prev">&laquo;</th>'+
								'<th colspan="5" class="datepicker-switch"></th>'+
								'<th class="next">&raquo;</th>'+
							'</tr>'+
						'</thead>',
		contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
		footTemplate: '<tfoot>'+
							'<tr>'+
								'<th colspan="7" class="today"></th>'+
							'</tr>'+
							'<tr>'+
								'<th colspan="7" class="clear"></th>'+
							'</tr>'+
						'</tfoot>'
	};
	DPGlobal.template = '<div class="datepicker">'+
							'<div class="datepicker-days">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									'<tbody></tbody>'+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-months">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-years">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-decades">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
							'<div class="datepicker-centuries">'+
								'<table class="table-condensed">'+
									DPGlobal.headTemplate+
									DPGlobal.contTemplate+
									DPGlobal.footTemplate+
								'</table>'+
							'</div>'+
						'</div>';

	$.fn.datepicker.DPGlobal = DPGlobal;


	/* DATEPICKER NO CONFLICT
	* =================== */

	$.fn.datepicker.noConflict = function(){
		$.fn.datepicker = old;
		return this;
	};

	/* DATEPICKER VERSION
	 * =================== */
	$.fn.datepicker.version = '1.6.4';

	/* DATEPICKER DATA-API
	* ================== */

	$(document).on(
		'focus.datepicker.data-api click.datepicker.data-api',
		'[data-provide="datepicker"]',
		function(e){
			var $this = $(this);
			if ($this.data('datepicker'))
				return;
			e.preventDefault();
			// component click requires us to explicitly show it
			datepickerPlugin.call($this, 'show');
		}
	);
	$(function(){
		datepickerPlugin.call($('[data-provide="datepicker-inline"]'));
	});

}));

//# sourceMappingURL=all.js.map
