(self.webpackChunk = self.webpackChunk || []).push([
    ["624"], {
        95487: function() {
            "use strict";
            window.tram = function(e) {
                function t(e, t) {
                    return (new k.Bare).init(e, t)
                }

                function a(e) {
                    var t = parseInt(e.slice(1), 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                }

                function n(e, t, a) {
                    return "#" + (0x1000000 | e << 16 | t << 8 | a).toString(16).slice(1)
                }

                function i() {}

                function o(e, t, a) {
                    if (void 0 !== t && (a = t), void 0 === e) return a;
                    var n = a;
                    return $.test(e) || !K.test(e) ? n = parseInt(e, 10) : K.test(e) && (n = 1e3 * parseFloat(e)), 0 > n && (n = 0), n == n ? n : a
                }

                function d(e) {
                    X.debug && window && window.console.warn(e)
                }
                var c, l, r, s = function(e, t, a) {
                        function n(e) {
                            return "object" == typeof e
                        }

                        function i(e) {
                            return "function" == typeof e
                        }

                        function o() {}
                        return function d(c, l) {
                            function r() {
                                var e = new s;
                                return i(e.init) && e.init.apply(e, arguments), e
                            }

                            function s() {}
                            l === a && (l = c, c = Object), r.Bare = s;
                            var f, u = o[e] = c[e],
                                E = s[e] = r[e] = new o;
                            return E.constructor = r, r.mixin = function(t) {
                                return s[e] = r[e] = d(r, t)[e], r
                            }, r.open = function(e) {
                                if (f = {}, i(e) ? f = e.call(r, E, u, r, c) : n(e) && (f = e), n(f))
                                    for (var a in f) t.call(f, a) && (E[a] = f[a]);
                                return i(E.init) || (E.init = c), r
                            }, r.open(l)
                        }
                    }("prototype", {}.hasOwnProperty),
                    f = {
                        ease: ["ease", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + .25 * e)
                        }],
                        "ease-in": ["ease-in", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (-1 * o * i + 3 * i * i + -3 * o + 2 * i)
                        }],
                        "ease-out": ["ease-out", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                        }],
                        "ease-in-out": ["ease-in-out", function(e, t, a, n) {
                            var i = (e /= n) * e,
                                o = i * e;
                            return t + a * (2 * o * i + -5 * i * i + 2 * o + 2 * i)
                        }],
                        linear: ["linear", function(e, t, a, n) {
                            return a * e / n + t
                        }],
                        "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(e, t, a, n) {
                            return a * (e /= n) * e + t
                        }],
                        "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(e, t, a, n) {
                            return -a * (e /= n) * (e - 2) + t
                        }],
                        "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e + t : -a / 2 * (--e * (e - 2) - 1) + t
                        }],
                        "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(e, t, a, n) {
                            return a * (e /= n) * e * e + t
                        }],
                        "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(e, t, a, n) {
                            return a * ((e = e / n - 1) * e * e + 1) + t
                        }],
                        "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e + t : a / 2 * ((e -= 2) * e * e + 2) + t
                        }],
                        "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(e, t, a, n) {
                            return a * (e /= n) * e * e * e + t
                        }],
                        "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(e, t, a, n) {
                            return -a * ((e = e / n - 1) * e * e * e - 1) + t
                        }],
                        "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e * e + t : -a / 2 * ((e -= 2) * e * e * e - 2) + t
                        }],
                        "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(e, t, a, n) {
                            return a * (e /= n) * e * e * e * e + t
                        }],
                        "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(e, t, a, n) {
                            return a * ((e = e / n - 1) * e * e * e * e + 1) + t
                        }],
                        "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? a / 2 * e * e * e * e * e + t : a / 2 * ((e -= 2) * e * e * e * e + 2) + t
                        }],
                        "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(e, t, a, n) {
                            return -a * Math.cos(e / n * (Math.PI / 2)) + a + t
                        }],
                        "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(e, t, a, n) {
                            return a * Math.sin(e / n * (Math.PI / 2)) + t
                        }],
                        "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(e, t, a, n) {
                            return -a / 2 * (Math.cos(Math.PI * e / n) - 1) + t
                        }],
                        "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(e, t, a, n) {
                            return 0 === e ? t : a * Math.pow(2, 10 * (e / n - 1)) + t
                        }],
                        "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(e, t, a, n) {
                            return e === n ? t + a : a * (-Math.pow(2, -10 * e / n) + 1) + t
                        }],
                        "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(e, t, a, n) {
                            return 0 === e ? t : e === n ? t + a : (e /= n / 2) < 1 ? a / 2 * Math.pow(2, 10 * (e - 1)) + t : a / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                        }],
                        "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(e, t, a, n) {
                            return -a * (Math.sqrt(1 - (e /= n) * e) - 1) + t
                        }],
                        "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(e, t, a, n) {
                            return a * Math.sqrt(1 - (e = e / n - 1) * e) + t
                        }],
                        "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(e, t, a, n) {
                            return (e /= n / 2) < 1 ? -a / 2 * (Math.sqrt(1 - e * e) - 1) + t : a / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                        }],
                        "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), a * (e /= n) * e * ((i + 1) * e - i) + t
                        }],
                        "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), a * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                        }],
                        "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(e, t, a, n, i) {
                            return void 0 === i && (i = 1.70158), (e /= n / 2) < 1 ? a / 2 * e * e * (((i *= 1.525) + 1) * e - i) + t : a / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                        }]
                    },
                    u = {
                        "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                        "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                        "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
                    },
                    E = window,
                    p = "bkwld-tram",
                    I = /[\-\.0-9]/g,
                    T = /[A-Z]/,
                    y = "number",
                    g = /^(rgb|#)/,
                    m = /(em|cm|mm|in|pt|pc|px)$/,
                    b = /(em|cm|mm|in|pt|pc|px|%)$/,
                    O = /(deg|rad|turn)$/,
                    v = "unitless",
                    L = /(all|none) 0s ease 0s/,
                    _ = /^(width|height)$/,
                    R = document.createElement("a"),
                    N = ["Webkit", "Moz", "O", "ms"],
                    h = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    S = function(e) {
                        if (e in R.style) return {
                            dom: e,
                            css: e
                        };
                        var t, a, n = "",
                            i = e.split("-");
                        for (t = 0; t < i.length; t++) n += i[t].charAt(0).toUpperCase() + i[t].slice(1);
                        for (t = 0; t < N.length; t++)
                            if ((a = N[t] + n) in R.style) return {
                                dom: a,
                                css: h[t] + e
                            }
                    },
                    C = t.support = {
                        bind: Function.prototype.bind,
                        transform: S("transform"),
                        transition: S("transition"),
                        backface: S("backface-visibility"),
                        timing: S("transition-timing-function")
                    };
                if (C.transition) {
                    var A = C.timing.dom;
                    if (R.style[A] = f["ease-in-back"][0], !R.style[A])
                        for (var M in u) f[M][0] = u[M]
                }
                var V = t.frame = (c = E.requestAnimationFrame || E.webkitRequestAnimationFrame || E.mozRequestAnimationFrame || E.oRequestAnimationFrame || E.msRequestAnimationFrame) && C.bind ? c.bind(E) : function(e) {
                        E.setTimeout(e, 16)
                    },
                    w = t.now = (r = (l = E.performance) && (l.now || l.webkitNow || l.msNow || l.mozNow)) && C.bind ? r.bind(l) : Date.now || function() {
                        return +new Date
                    },
                    F = s(function(t) {
                        function a(e, t) {
                            var a = function(e) {
                                    for (var t = -1, a = e ? e.length : 0, n = []; ++t < a;) {
                                        var i = e[t];
                                        i && n.push(i)
                                    }
                                    return n
                                }(("" + e).split(" ")),
                                n = a[0];
                            t = t || {};
                            var i = z[n];
                            if (!i) return d("Unsupported property: " + n);
                            if (!t.weak || !this.props[n]) {
                                var o = i[0],
                                    c = this.props[n];
                                return c || (c = this.props[n] = new o.Bare), c.init(this.$el, a, i, t), c
                            }
                        }

                        function n(e, t, n) {
                            if (e) {
                                var d = typeof e;
                                if (t || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == d && t) return this.timer = new P({
                                    duration: e,
                                    context: this,
                                    complete: i
                                }), void(this.active = !0);
                                if ("string" == d && t) {
                                    switch (e) {
                                        case "hide":
                                            l.call(this);
                                            break;
                                        case "stop":
                                            c.call(this);
                                            break;
                                        case "redraw":
                                            r.call(this);
                                            break;
                                        default:
                                            a.call(this, e, n && n[1])
                                    }
                                    return i.call(this)
                                }
                                if ("function" == d) return void e.call(this, this);
                                if ("object" == d) {
                                    var u = 0;
                                    f.call(this, e, function(e, t) {
                                        e.span > u && (u = e.span), e.stop(), e.animate(t)
                                    }, function(e) {
                                        "wait" in e && (u = o(e.wait, 0))
                                    }), s.call(this), u > 0 && (this.timer = new P({
                                        duration: u,
                                        context: this
                                    }), this.active = !0, t && (this.timer.complete = i));
                                    var E = this,
                                        p = !1,
                                        I = {};
                                    V(function() {
                                        f.call(E, e, function(e) {
                                            e.active && (p = !0, I[e.name] = e.nextStyle)
                                        }), p && E.$el.css(I)
                                    })
                                }
                            }
                        }

                        function i() {
                            if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                                var e = this.queue.shift();
                                n.call(this, e.options, !0, e.args)
                            }
                        }

                        function c(e) {
                            var t;
                            this.timer && this.timer.destroy(), this.queue = [], this.active = !1, "string" == typeof e ? (t = {})[e] = 1 : t = "object" == typeof e && null != e ? e : this.props, f.call(this, t, u), s.call(this)
                        }

                        function l() {
                            c.call(this), this.el.style.display = "none"
                        }

                        function r() {
                            this.el.offsetHeight
                        }

                        function s() {
                            var e, t, a = [];
                            for (e in this.upstream && a.push(this.upstream), this.props)(t = this.props[e]).active && a.push(t.string);
                            a = a.join(","), this.style !== a && (this.style = a, this.el.style[C.transition.dom] = a)
                        }

                        function f(e, t, n) {
                            var i, o, d, c, l = t !== u,
                                r = {};
                            for (i in e) d = e[i], i in j ? (r.transform || (r.transform = {}), r.transform[i] = d) : (T.test(i) && (i = i.replace(/[A-Z]/g, function(e) {
                                return "-" + e.toLowerCase()
                            })), i in z ? r[i] = d : (c || (c = {}), c[i] = d));
                            for (i in r) {
                                if (d = r[i], !(o = this.props[i])) {
                                    if (!l) continue;
                                    o = a.call(this, i)
                                }
                                t.call(this, o, d)
                            }
                            n && c && n.call(this, c)
                        }

                        function u(e) {
                            e.stop()
                        }

                        function E(e, t) {
                            e.set(t)
                        }

                        function I(e) {
                            this.$el.css(e)
                        }

                        function y(e, a) {
                            t[e] = function() {
                                return this.children ? g.call(this, a, arguments) : (this.el && a.apply(this, arguments), this)
                            }
                        }

                        function g(e, t) {
                            var a, n = this.children.length;
                            for (a = 0; n > a; a++) e.apply(this.children[a], t);
                            return this
                        }
                        t.init = function(t) {
                            if (this.$el = e(t), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, X.keepInherited && !X.fallback) {
                                var a = Q(this.el, "transition");
                                a && !L.test(a) && (this.upstream = a)
                            }
                            C.backface && X.hideBackface && H(this.el, C.backface.css, "hidden")
                        }, y("add", a), y("start", n), y("wait", function(e) {
                            e = o(e, 0), this.active ? this.queue.push({
                                options: e
                            }) : (this.timer = new P({
                                duration: e,
                                context: this,
                                complete: i
                            }), this.active = !0)
                        }), y("then", function(e) {
                            return this.active ? (this.queue.push({
                                options: e,
                                args: arguments
                            }), void(this.timer.complete = i)) : d("No active transition timer. Use start() or wait() before then().")
                        }), y("next", i), y("stop", c), y("set", function(e) {
                            c.call(this, e), f.call(this, e, E, I)
                        }), y("show", function(e) {
                            "string" != typeof e && (e = "block"), this.el.style.display = e
                        }), y("hide", l), y("redraw", r), y("destroy", function() {
                            c.call(this), e.removeData(this.el, p), this.$el = this.el = null
                        })
                    }),
                    k = s(F, function(t) {
                        function a(t, a) {
                            var n = e.data(t, p) || e.data(t, p, new F.Bare);
                            return n.el || n.init(t), a ? n.start(a) : n
                        }
                        t.init = function(t, n) {
                            var i = e(t);
                            if (!i.length) return this;
                            if (1 === i.length) return a(i[0], n);
                            var o = [];
                            return i.each(function(e, t) {
                                o.push(a(t, n))
                            }), this.children = o, this
                        }
                    }),
                    U = s(function(e) {
                        function t() {
                            var e = this.get();
                            this.update("auto");
                            var t = this.get();
                            return this.update(e), t
                        }
                        e.init = function(e, t, a, n) {
                            this.$el = e, this.el = e[0];
                            var i, d, c, l = t[0];
                            a[2] && (l = a[2]), Y[l] && (l = Y[l]), this.name = l, this.type = a[1], this.duration = o(t[1], this.duration, 500), this.ease = (i = t[2], d = this.ease, c = "ease", void 0 !== d && (c = d), i in f ? i : c), this.delay = o(t[3], this.delay, 0), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = n.unit || this.unit || X.defaultUnit, this.angle = n.angle || this.angle || X.defaultAngle, X.fallback || n.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + " " + this.duration + "ms" + ("ease" != this.ease ? " " + f[this.ease][0] : "") + (this.delay ? " " + this.delay + "ms" : ""))
                        }, e.set = function(e) {
                            e = this.convert(e, this.type), this.update(e), this.redraw()
                        }, e.transition = function(e) {
                            this.active = !0, e = this.convert(e, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == e && (e = t.call(this))), this.nextStyle = e
                        }, e.fallback = function(e) {
                            var a = this.el.style[this.name] || this.convert(this.get(), this.type);
                            e = this.convert(e, this.type), this.auto && ("auto" == a && (a = this.convert(this.get(), this.type)), "auto" == e && (e = t.call(this))), this.tween = new G({
                                from: a,
                                to: e,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.get = function() {
                            return Q(this.el, this.name)
                        }, e.update = function(e) {
                            H(this.el, this.name, e)
                        }, e.stop = function() {
                            (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, H(this.el, this.name, this.get()));
                            var e = this.tween;
                            e && e.context && e.destroy()
                        }, e.convert = function(e, t) {
                            if ("auto" == e && this.auto) return e;
                            var a, i, o = "number" == typeof e,
                                c = "string" == typeof e;
                            switch (t) {
                                case y:
                                    if (o) return e;
                                    if (c && "" === e.replace(I, "")) return +e;
                                    i = "number(unitless)";
                                    break;
                                case g:
                                    if (c) {
                                        if ("" === e && this.original) return this.original;
                                        if (t.test(e)) return "#" == e.charAt(0) && 7 == e.length ? e : ((a = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e)) ? n(a[1], a[2], a[3]) : e).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                    }
                                    i = "hex or rgb string";
                                    break;
                                case m:
                                    if (o) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    i = "number(px) or string(unit)";
                                    break;
                                case b:
                                    if (o) return e + this.unit;
                                    if (c && t.test(e)) return e;
                                    i = "number(px) or string(unit or %)";
                                    break;
                                case O:
                                    if (o) return e + this.angle;
                                    if (c && t.test(e)) return e;
                                    i = "number(deg) or string(angle)";
                                    break;
                                case v:
                                    if (o || c && b.test(e)) return e;
                                    i = "number(unitless) or string(unit or %)"
                            }
                            return d("Type warning: Expected: [" + i + "] Got: [" + typeof e + "] " + e), e
                        }, e.redraw = function() {
                            this.el.offsetHeight
                        }
                    }),
                    x = s(U, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), g))
                        }
                    }),
                    B = s(U, function(e, t) {
                        e.init = function() {
                            t.init.apply(this, arguments), this.animate = this.fallback
                        }, e.get = function() {
                            return this.$el[this.name]()
                        }, e.update = function(e) {
                            this.$el[this.name](e)
                        }
                    }),
                    D = s(U, function(e, t) {
                        function a(e, t) {
                            var a, n, i, o, d;
                            for (a in e) i = (o = j[a])[0], n = o[1] || a, d = this.convert(e[a], i), t.call(this, n, d, i)
                        }
                        e.init = function() {
                            t.init.apply(this, arguments), this.current || (this.current = {}, j.perspective && X.perspective && (this.current.perspective = X.perspective, H(this.el, this.name, this.style(this.current)), this.redraw()))
                        }, e.set = function(e) {
                            a.call(this, e, function(e, t) {
                                this.current[e] = t
                            }), H(this.el, this.name, this.style(this.current)), this.redraw()
                        }, e.transition = function(e) {
                            var t = this.values(e);
                            this.tween = new W({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease
                            });
                            var a, n = {};
                            for (a in this.current) n[a] = a in t ? t[a] : this.current[a];
                            this.active = !0, this.nextStyle = this.style(n)
                        }, e.fallback = function(e) {
                            var t = this.values(e);
                            this.tween = new W({
                                current: this.current,
                                values: t,
                                duration: this.duration,
                                delay: this.delay,
                                ease: this.ease,
                                update: this.update,
                                context: this
                            })
                        }, e.update = function() {
                            H(this.el, this.name, this.style(this.current))
                        }, e.style = function(e) {
                            var t, a = "";
                            for (t in e) a += t + "(" + e[t] + ") ";
                            return a
                        }, e.values = function(e) {
                            var t, n = {};
                            return a.call(this, e, function(e, a, i) {
                                n[e] = a, void 0 === this.current[e] && (t = 0, ~e.indexOf("scale") && (t = 1), this.current[e] = this.convert(t, i))
                            }), n
                        }
                    }),
                    G = s(function(t) {
                        function o() {
                            var e, t, a, n = l.length;
                            if (n)
                                for (V(o), t = w(), e = n; e--;)(a = l[e]) && a.render(t)
                        }
                        var c = {
                            ease: f.ease[1],
                            from: 0,
                            to: 1
                        };
                        t.init = function(e) {
                            this.duration = e.duration || 0, this.delay = e.delay || 0;
                            var t = e.ease || c.ease;
                            f[t] && (t = f[t][1]), "function" != typeof t && (t = c.ease), this.ease = t, this.update = e.update || i, this.complete = e.complete || i, this.context = e.context || this, this.name = e.name;
                            var a = e.from,
                                n = e.to;
                            void 0 === a && (a = c.from), void 0 === n && (n = c.to), this.unit = e.unit || "", "number" == typeof a && "number" == typeof n ? (this.begin = a, this.change = n - a) : this.format(n, a), this.value = this.begin + this.unit, this.start = w(), !1 !== e.autoplay && this.play()
                        }, t.play = function() {
                            this.active || (this.start || (this.start = w()), this.active = !0, 1 === l.push(this) && V(o))
                        }, t.stop = function() {
                            var t, a;
                            this.active && (this.active = !1, (a = e.inArray(this, l)) >= 0 && (t = l.slice(a + 1), l.length = a, t.length && (l = l.concat(t))))
                        }, t.render = function(e) {
                            var t, a = e - this.start;
                            if (this.delay) {
                                if (a <= this.delay) return;
                                a -= this.delay
                            }
                            if (a < this.duration) {
                                var i, o, d = this.ease(a, 0, 1, this.duration);
                                return t = this.startRGB ? (i = this.startRGB, o = this.endRGB, n(i[0] + d * (o[0] - i[0]), i[1] + d * (o[1] - i[1]), i[2] + d * (o[2] - i[2]))) : Math.round((this.begin + d * this.change) * r) / r, this.value = t + this.unit, void this.update.call(this.context, this.value)
                            }
                            t = this.endHex || this.begin + this.change, this.value = t + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                        }, t.format = function(e, t) {
                            if (t += "", "#" == (e += "").charAt(0)) return this.startRGB = a(t), this.endRGB = a(e), this.endHex = e, this.begin = 0, void(this.change = 1);
                            if (!this.unit) {
                                var n = t.replace(I, "");
                                n !== e.replace(I, "") && d("Units do not match [tween]: " + t + ", " + e), this.unit = n
                            }
                            t = parseFloat(t), e = parseFloat(e), this.begin = this.value = t, this.change = e - t
                        }, t.destroy = function() {
                            this.stop(), this.context = null, this.ease = this.update = this.complete = i
                        };
                        var l = [],
                            r = 1e3
                    }),
                    P = s(G, function(e) {
                        e.init = function(e) {
                            this.duration = e.duration || 0, this.complete = e.complete || i, this.context = e.context, this.play()
                        }, e.render = function(e) {
                            e - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                        }
                    }),
                    W = s(G, function(e, t) {
                        e.init = function(e) {
                            var t, a;
                            for (t in this.context = e.context, this.update = e.update, this.tweens = [], this.current = e.current, e.values) a = e.values[t], this.current[t] !== a && this.tweens.push(new G({
                                name: t,
                                from: this.current[t],
                                to: a,
                                duration: e.duration,
                                delay: e.delay,
                                ease: e.ease,
                                autoplay: !1
                            }));
                            this.play()
                        }, e.render = function(e) {
                            var t, a, n = this.tweens.length,
                                i = !1;
                            for (t = n; t--;)(a = this.tweens[t]).context && (a.render(e), this.current[a.name] = a.value, i = !0);
                            return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                        }, e.destroy = function() {
                            if (t.destroy.call(this), this.tweens) {
                                var e;
                                for (e = this.tweens.length; e--;) this.tweens[e].destroy();
                                this.tweens = null, this.current = null
                            }
                        }
                    }),
                    X = t.config = {
                        debug: !1,
                        defaultUnit: "px",
                        defaultAngle: "deg",
                        keepInherited: !1,
                        hideBackface: !1,
                        perspective: "",
                        fallback: !C.transition,
                        agentTests: []
                    };
                t.fallback = function(e) {
                    if (!C.transition) return X.fallback = !0;
                    X.agentTests.push("(" + e + ")");
                    var t = RegExp(X.agentTests.join("|"), "i");
                    X.fallback = t.test(navigator.userAgent)
                }, t.fallback("6.0.[2-5] Safari"), t.tween = function(e) {
                    return new G(e)
                }, t.delay = function(e, t, a) {
                    return new P({
                        complete: t,
                        duration: e,
                        context: a
                    })
                }, e.fn.tram = function(e) {
                    return t.call(null, this, e)
                };
                var H = e.style,
                    Q = e.css,
                    Y = {
                        transform: C.transform && C.transform.css
                    },
                    z = {
                        color: [x, g],
                        background: [x, g, "background-color"],
                        "outline-color": [x, g],
                        "border-color": [x, g],
                        "border-top-color": [x, g],
                        "border-right-color": [x, g],
                        "border-bottom-color": [x, g],
                        "border-left-color": [x, g],
                        "border-width": [U, m],
                        "border-top-width": [U, m],
                        "border-right-width": [U, m],
                        "border-bottom-width": [U, m],
                        "border-left-width": [U, m],
                        "border-spacing": [U, m],
                        "letter-spacing": [U, m],
                        margin: [U, m],
                        "margin-top": [U, m],
                        "margin-right": [U, m],
                        "margin-bottom": [U, m],
                        "margin-left": [U, m],
                        padding: [U, m],
                        "padding-top": [U, m],
                        "padding-right": [U, m],
                        "padding-bottom": [U, m],
                        "padding-left": [U, m],
                        "outline-width": [U, m],
                        opacity: [U, y],
                        top: [U, b],
                        right: [U, b],
                        bottom: [U, b],
                        left: [U, b],
                        "font-size": [U, b],
                        "text-indent": [U, b],
                        "word-spacing": [U, b],
                        width: [U, b],
                        "min-width": [U, b],
                        "max-width": [U, b],
                        height: [U, b],
                        "min-height": [U, b],
                        "max-height": [U, b],
                        "line-height": [U, v],
                        "scroll-top": [B, y, "scrollTop"],
                        "scroll-left": [B, y, "scrollLeft"]
                    },
                    j = {};
                C.transform && (z.transform = [D], j = {
                    x: [b, "translateX"],
                    y: [b, "translateY"],
                    rotate: [O],
                    rotateX: [O],
                    rotateY: [O],
                    scale: [y],
                    scaleX: [y],
                    scaleY: [y],
                    skew: [O],
                    skewX: [O],
                    skewY: [O]
                }), C.transform && C.backface && (j.z = [b, "translateZ"], j.rotateZ = [O], j.scaleZ = [y], j.perspective = [m]);
                var $ = /ms/,
                    K = /s|\./;
                return e.tram = t
            }(window.jQuery)
        },
        35756: function(e, t, a) {
            "use strict";
            var n, i, o, d, c, l, r, s, f, u, E, p, I, T, y, g, m, b, O, v, L = window.$,
                _ = a(95487) && L.tram;
            (n = {}).VERSION = "1.6.0-Webflow", i = {}, o = Array.prototype, d = Object.prototype, c = Function.prototype, o.push, l = o.slice, o.concat, d.toString, r = d.hasOwnProperty, s = o.forEach, f = o.map, o.reduce, o.reduceRight, u = o.filter, o.every, E = o.some, p = o.indexOf, o.lastIndexOf, I = Object.keys, c.bind, T = n.each = n.forEach = function(e, t, a) {
                if (null == e) return e;
                if (s && e.forEach === s) e.forEach(t, a);
                else if (e.length === +e.length) {
                    for (var o = 0, d = e.length; o < d; o++)
                        if (t.call(a, e[o], o, e) === i) return
                } else
                    for (var c = n.keys(e), o = 0, d = c.length; o < d; o++)
                        if (t.call(a, e[c[o]], c[o], e) === i) return;
                return e
            }, n.map = n.collect = function(e, t, a) {
                var n = [];
                return null == e ? n : f && e.map === f ? e.map(t, a) : (T(e, function(e, i, o) {
                    n.push(t.call(a, e, i, o))
                }), n)
            }, n.find = n.detect = function(e, t, a) {
                var n;
                return y(e, function(e, i, o) {
                    if (t.call(a, e, i, o)) return n = e, !0
                }), n
            }, n.filter = n.select = function(e, t, a) {
                var n = [];
                return null == e ? n : u && e.filter === u ? e.filter(t, a) : (T(e, function(e, i, o) {
                    t.call(a, e, i, o) && n.push(e)
                }), n)
            }, y = n.some = n.any = function(e, t, a) {
                t || (t = n.identity);
                var o = !1;
                return null == e ? o : E && e.some === E ? e.some(t, a) : (T(e, function(e, n, d) {
                    if (o || (o = t.call(a, e, n, d))) return i
                }), !!o)
            }, n.contains = n.include = function(e, t) {
                return null != e && (p && e.indexOf === p ? -1 != e.indexOf(t) : y(e, function(e) {
                    return e === t
                }))
            }, n.delay = function(e, t) {
                var a = l.call(arguments, 2);
                return setTimeout(function() {
                    return e.apply(null, a)
                }, t)
            }, n.defer = function(e) {
                return n.delay.apply(n, [e, 1].concat(l.call(arguments, 1)))
            }, n.throttle = function(e) {
                var t, a, n;
                return function() {
                    t || (t = !0, a = arguments, n = this, _.frame(function() {
                        t = !1, e.apply(n, a)
                    }))
                }
            }, n.debounce = function(e, t, a) {
                var i, o, d, c, l, r = function() {
                    var s = n.now() - c;
                    s < t ? i = setTimeout(r, t - s) : (i = null, a || (l = e.apply(d, o), d = o = null))
                };
                return function() {
                    d = this, o = arguments, c = n.now();
                    var s = a && !i;
                    return i || (i = setTimeout(r, t)), s && (l = e.apply(d, o), d = o = null), l
                }
            }, n.defaults = function(e) {
                if (!n.isObject(e)) return e;
                for (var t = 1, a = arguments.length; t < a; t++) {
                    var i = arguments[t];
                    for (var o in i) void 0 === e[o] && (e[o] = i[o])
                }
                return e
            }, n.keys = function(e) {
                if (!n.isObject(e)) return [];
                if (I) return I(e);
                var t = [];
                for (var a in e) n.has(e, a) && t.push(a);
                return t
            }, n.has = function(e, t) {
                return r.call(e, t)
            }, n.isObject = function(e) {
                return e === Object(e)
            }, n.now = Date.now || function() {
                return new Date().getTime()
            }, n.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            }, g = /(.)^/, m = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }, b = /\\|'|\r|\n|\u2028|\u2029/g, O = function(e) {
                return "\\" + m[e]
            }, v = /^\s*(\w|\$)+\s*$/, n.template = function(e, t, a) {
                !t && a && (t = a);
                var i, o = RegExp([((t = n.defaults({}, t, n.templateSettings)).escape || g).source, (t.interpolate || g).source, (t.evaluate || g).source].join("|") + "|$", "g"),
                    d = 0,
                    c = "__p+='";
                e.replace(o, function(t, a, n, i, o) {
                    return c += e.slice(d, o).replace(b, O), d = o + t.length, a ? c += "'+\n((__t=(" + a + "))==null?'':_.escape(__t))+\n'" : n ? c += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" : i && (c += "';\n" + i + "\n__p+='"), t
                }), c += "';\n";
                var l = t.variable;
                if (l) {
                    if (!v.test(l)) throw Error("variable is not a bare identifier: " + l)
                } else c = "with(obj||{}){\n" + c + "}\n", l = "obj";
                c = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + c + "return __p;\n";
                try {
                    i = Function(t.variable || "obj", "_", c)
                } catch (e) {
                    throw e.source = c, e
                }
                var r = function(e) {
                    return i.call(this, e, n)
                };
                return r.source = "function(" + l + "){\n" + c + "}", r
            }, e.exports = n
        },
        9461: function(e, t, a) {
            "use strict";
            var n = a(43949);
            n.define("brand", e.exports = function(e) {
                var t, a = {},
                    i = document,
                    o = e("html"),
                    d = e("body"),
                    c = window.location,
                    l = /PhantomJS/i.test(navigator.userAgent),
                    r = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";

                function s() {
                    var a = i.fullScreen || i.mozFullScreen || i.webkitIsFullScreen || i.msFullscreenElement || !!i.webkitFullscreenElement;
                    e(t).attr("style", a ? "display: none !important;" : "")
                }

                function f() {
                    var e = d.children(".w-webflow-badge"),
                        a = e.length && e.get(0) === t,
                        i = n.env("editor");
                    if (a) {
                        i && e.remove();
                        return
                    }
                    e.length && e.remove(), i || d.append(t)
                }
                return a.ready = function() {
                    var a, n, d, u = o.attr("data-wf-status"),
                        E = o.attr("data-wf-domain") || "";
                    /\.webflow\.io$/i.test(E) && c.hostname !== E && (u = !0), u && !l && (t = t || (a = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"), n = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                        marginRight: "4px",
                        width: "26px"
                    }), d = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow"), a.append(n, d), a[0]), f(), setTimeout(f, 500), e(i).off(r, s).on(r, s))
                }, a
            })
        },
        60322: function(e, t, a) {
            "use strict";
            var n = a(43949);
            n.define("edit", e.exports = function(e, t, a) {
                if (a = a || {}, (n.env("test") || n.env("frame")) && !a.fixture && ! function() {
                        try {
                            return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST)
                        } catch (e) {
                            return !1
                        }
                    }()) return {
                    exit: 1
                };
                var i, o = e(window),
                    d = e(document.documentElement),
                    c = document.location,
                    l = "hashchange",
                    r = a.load || function() {
                        var t, a, n;
                        i = !0, window.WebflowEditor = !0, o.off(l, f), t = function(t) {
                            var a;
                            e.ajax({
                                url: E("https://editor-api.webflow.com/api/editor/view"),
                                data: {
                                    siteId: d.attr("data-wf-site")
                                },
                                xhrFields: {
                                    withCredentials: !0
                                },
                                dataType: "json",
                                crossDomain: !0,
                                success: (a = t, function(t) {
                                    var n, i, o;
                                    if (!t) return void console.error("Could not load editor data");
                                    t.thirdPartyCookiesSupported = a, i = (n = t.scriptPath).indexOf("//") >= 0 ? n : E("https://editor-api.webflow.com" + n), o = function() {
                                        window.WebflowEditor(t)
                                    }, e.ajax({
                                        type: "GET",
                                        url: i,
                                        dataType: "script",
                                        cache: !0
                                    }).then(o, u)
                                })
                            })
                        }, (a = window.document.createElement("iframe")).src = "https://webflow.com/site/third-party-cookie-check.html", a.style.display = "none", a.sandbox = "allow-scripts allow-same-origin", n = function(e) {
                            "WF_third_party_cookies_unsupported" === e.data ? (p(a, n), t(!1)) : "WF_third_party_cookies_supported" === e.data && (p(a, n), t(!0))
                        }, a.onerror = function() {
                            p(a, n), t(!1)
                        }, window.addEventListener("message", n, !1), window.document.body.appendChild(a)
                    },
                    s = !1;
                try {
                    s = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
                } catch (e) {}

                function f() {
                    !i && /\?edit/.test(c.hash) && r()
                }

                function u(e, t, a) {
                    throw console.error("Could not load editor script: " + t), a
                }

                function E(e) {
                    return e.replace(/([^:])\/\//g, "$1/")
                }

                function p(e, t) {
                    window.removeEventListener("message", t, !1), e.remove()
                }
                return /[?&](update)(?:[=&?]|$)/.test(c.search) || /\?update$/.test(c.href) ? function() {
                    var e = document.documentElement,
                        t = e.getAttribute("data-wf-site"),
                        a = e.getAttribute("data-wf-page"),
                        n = e.getAttribute("data-wf-item-slug"),
                        i = e.getAttribute("data-wf-collection"),
                        o = e.getAttribute("data-wf-domain");
                    if (t && a) {
                        var d = "pageId=" + a + "&mode=edit";
                        d += "&simulateRole=editor", n && i && o && (d += "&domain=" + encodeURIComponent(o) + "&itemSlug=" + encodeURIComponent(n) + "&collectionId=" + i), window.location.href = "https://webflow.com/external/designer/" + t + "?" + d
                    }
                }() : s ? r() : c.search ? (/[?&](edit)(?:[=&?]|$)/.test(c.search) || /\?edit$/.test(c.href)) && r() : o.on(l, f).triggerHandler(l), {}
            })
        },
        12338: function(e, t, a) {
            "use strict";
            a(43949).define("focus-visible", e.exports = function() {
                return {
                    ready: function() {
                        if ("undefined" != typeof document) try {
                            document.querySelector(":focus-visible")
                        } catch (e) {
                            ! function(e) {
                                var t = !0,
                                    a = !1,
                                    n = null,
                                    i = {
                                        text: !0,
                                        search: !0,
                                        url: !0,
                                        tel: !0,
                                        email: !0,
                                        password: !0,
                                        number: !0,
                                        date: !0,
                                        month: !0,
                                        week: !0,
                                        time: !0,
                                        datetime: !0,
                                        "datetime-local": !0
                                    };

                                function o(e) {
                                    return !!e && e !== document && "HTML" !== e.nodeName && "BODY" !== e.nodeName && "classList" in e && "contains" in e.classList
                                }

                                function d(e) {
                                    e.getAttribute("data-wf-focus-visible") || e.setAttribute("data-wf-focus-visible", "true")
                                }

                                function c() {
                                    t = !1
                                }

                                function l() {
                                    document.addEventListener("mousemove", r), document.addEventListener("mousedown", r), document.addEventListener("mouseup", r), document.addEventListener("pointermove", r), document.addEventListener("pointerdown", r), document.addEventListener("pointerup", r), document.addEventListener("touchmove", r), document.addEventListener("touchstart", r), document.addEventListener("touchend", r)
                                }

                                function r(e) {
                                    e.target.nodeName && "html" === e.target.nodeName.toLowerCase() || (t = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mousedown", r), document.removeEventListener("mouseup", r), document.removeEventListener("pointermove", r), document.removeEventListener("pointerdown", r), document.removeEventListener("pointerup", r), document.removeEventListener("touchmove", r), document.removeEventListener("touchstart", r), document.removeEventListener("touchend", r))
                                }
                                document.addEventListener("keydown", function(a) {
                                    a.metaKey || a.altKey || a.ctrlKey || (o(e.activeElement) && d(e.activeElement), t = !0)
                                }, !0), document.addEventListener("mousedown", c, !0), document.addEventListener("pointerdown", c, !0), document.addEventListener("touchstart", c, !0), document.addEventListener("visibilitychange", function() {
                                    "hidden" === document.visibilityState && (a && (t = !0), l())
                                }, !0), l(), e.addEventListener("focus", function(e) {
                                    if (o(e.target)) {
                                        var a, n, c;
                                        (t || (n = (a = e.target).type, "INPUT" === (c = a.tagName) && i[n] && !a.readOnly || "TEXTAREA" === c && !a.readOnly || a.isContentEditable || 0)) && d(e.target)
                                    }
                                }, !0), e.addEventListener("blur", function(e) {
                                    if (o(e.target) && e.target.hasAttribute("data-wf-focus-visible")) {
                                        var t;
                                        a = !0, window.clearTimeout(n), n = window.setTimeout(function() {
                                            a = !1
                                        }, 100), (t = e.target).getAttribute("data-wf-focus-visible") && t.removeAttribute("data-wf-focus-visible")
                                    }
                                }, !0)
                            }(document)
                        }
                    }
                }
            })
        },
        8334: function(e, t, a) {
            "use strict";
            var n = a(43949);
            n.define("focus", e.exports = function() {
                var e = [],
                    t = !1;

                function a(a) {
                    t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
                }

                function i(a) {
                    var n, i;
                    i = (n = a.target).tagName, (/^a$/i.test(i) && null != n.href || /^(button|textarea)$/i.test(i) && !0 !== n.disabled || /^input$/i.test(i) && /^(button|reset|submit|radio|checkbox)$/i.test(n.type) && !n.disabled || !/^(button|input|textarea|select|a)$/i.test(i) && !Number.isNaN(Number.parseFloat(n.tabIndex)) || /^audio$/i.test(i) || /^video$/i.test(i) && !0 === n.controls) && (t = !0, setTimeout(() => {
                        for (t = !1, a.target.focus(); e.length > 0;) {
                            var n = e.pop();
                            n.target.dispatchEvent(new MouseEvent(n.type, n))
                        }
                    }, 0))
                }
                return {
                    ready: function() {
                        "undefined" != typeof document && document.body.hasAttribute("data-wf-focus-within") && n.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", a, !0), document.addEventListener("click", a, !0))
                    }
                }
            })
        },
        7199: function(e) {
            "use strict";
            var t = window.jQuery,
                a = {},
                n = [],
                i = ".w-ix",
                o = {
                    reset: function(e, t) {
                        t.__wf_intro = null
                    },
                    intro: function(e, n) {
                        n.__wf_intro || (n.__wf_intro = !0, t(n).triggerHandler(a.types.INTRO))
                    },
                    outro: function(e, n) {
                        n.__wf_intro && (n.__wf_intro = null, t(n).triggerHandler(a.types.OUTRO))
                    }
                };
            a.triggers = {}, a.types = {
                INTRO: "w-ix-intro" + i,
                OUTRO: "w-ix-outro" + i
            }, a.init = function() {
                for (var e = n.length, i = 0; i < e; i++) {
                    var d = n[i];
                    d[0](0, d[1])
                }
                n = [], t.extend(a.triggers, o)
            }, a.async = function() {
                for (var e in o) {
                    var t = o[e];
                    o.hasOwnProperty(e) && (a.triggers[e] = function(e, a) {
                        n.push([t, a])
                    })
                }
            }, a.async(), e.exports = a
        },
        65134: function(e, t, a) {
            "use strict";
            var n = a(7199);

            function i(e, t, a) {
                var n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, a || null), e.dispatchEvent(n)
            }
            var o = window.jQuery,
                d = {},
                c = ".w-ix";
            d.triggers = {}, d.types = {
                INTRO: "w-ix-intro" + c,
                OUTRO: "w-ix-outro" + c
            }, o.extend(d.triggers, {
                reset: function(e, t) {
                    n.triggers.reset(e, t)
                },
                intro: function(e, t) {
                    n.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE")
                },
                outro: function(e, t) {
                    n.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE")
                }
            }), d.dispatchCustomEvent = i, e.exports = d
        },
        40941: function(e, t, a) {
            "use strict";
            var n = a(43949),
                i = a(46011);
            i.setEnv(n.env), n.define("ix2", e.exports = function() {
                return i
            })
        },
        43949: function(e, t, a) {
            "use strict";
            var n, i, o = {},
                d = {},
                c = [],
                l = window.Webflow || [],
                r = window.jQuery,
                s = r(window),
                f = r(document),
                u = r.isFunction,
                E = o._ = a(35756),
                p = o.tram = a(95487) && r.tram,
                I = !1,
                T = !1;

            function y(e) {
                o.env() && (u(e.design) && s.on("__wf_design", e.design), u(e.preview) && s.on("__wf_preview", e.preview)), u(e.destroy) && s.on("__wf_destroy", e.destroy), e.ready && u(e.ready) && function(e) {
                    if (I) return e.ready();
                    E.contains(c, e.ready) || c.push(e.ready)
                }(e)
            }

            function g(e) {
                var t;
                u(e.design) && s.off("__wf_design", e.design), u(e.preview) && s.off("__wf_preview", e.preview), u(e.destroy) && s.off("__wf_destroy", e.destroy), e.ready && u(e.ready) && (t = e, c = E.filter(c, function(e) {
                    return e !== t.ready
                }))
            }
            p.config.hideBackface = !1, p.config.keepInherited = !0, o.define = function(e, t, a) {
                d[e] && g(d[e]);
                var n = d[e] = t(r, E, a) || {};
                return y(n), n
            }, o.require = function(e) {
                return d[e]
            }, o.push = function(e) {
                if (I) {
                    u(e) && e();
                    return
                }
                l.push(e)
            }, o.env = function(e) {
                var t = window.__wf_design,
                    a = void 0 !== t;
                return e ? "design" === e ? a && t : "preview" === e ? a && !t : "slug" === e ? a && window.__wf_slug : "editor" === e ? window.WebflowEditor : "test" === e ? window.__wf_test : "frame" === e ? window !== window.top : void 0 : a
            };
            var m = navigator.userAgent.toLowerCase(),
                b = o.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
                O = o.env.chrome = /chrome/.test(m) && /Google/.test(navigator.vendor) && parseInt(m.match(/chrome\/(\d+)\./)[1], 10),
                v = o.env.ios = /(ipod|iphone|ipad)/.test(m);
            o.env.safari = /safari/.test(m) && !O && !v, b && f.on("touchstart mousedown", function(e) {
                n = e.target
            }), o.validClick = b ? function(e) {
                return e === n || r.contains(e, n)
            } : function() {
                return !0
            };
            var L = "resize.webflow orientationchange.webflow load.webflow",
                _ = "scroll.webflow " + L;

            function R(e, t) {
                var a = [],
                    n = {};
                return n.up = E.throttle(function(e) {
                    E.each(a, function(t) {
                        t(e)
                    })
                }), e && t && e.on(t, n.up), n.on = function(e) {
                    "function" == typeof e && (E.contains(a, e) || a.push(e))
                }, n.off = function(e) {
                    if (!arguments.length) {
                        a = [];
                        return
                    }
                    a = E.filter(a, function(t) {
                        return t !== e
                    })
                }, n
            }

            function N(e) {
                u(e) && e()
            }

            function h() {
                i && (i.reject(), s.off("load", i.resolve)), i = new r.Deferred, s.on("load", i.resolve)
            }
            o.resize = R(s, L), o.scroll = R(s, _), o.redraw = R(), o.location = function(e) {
                window.location = e
            }, o.env() && (o.location = function() {}), o.ready = function() {
                I = !0, T ? (T = !1, E.each(d, y)) : E.each(c, N), E.each(l, N), o.resize.up()
            }, o.load = function(e) {
                i.then(e)
            }, o.destroy = function(e) {
                e = e || {}, T = !0, s.triggerHandler("__wf_destroy"), null != e.domready && (I = e.domready), E.each(d, g), o.resize.off(), o.scroll.off(), o.redraw.off(), c = [], l = [], "pending" === i.state() && h()
            }, r(o.ready), h(), e.exports = window.Webflow = o
        },
        27624: function(e, t, a) {
            "use strict";
            var n = a(43949);
            n.define("links", e.exports = function(e, t) {
                var a, i, o, d = {},
                    c = e(window),
                    l = n.env(),
                    r = window.location,
                    s = document.createElement("a"),
                    f = "w--current",
                    u = /index\.(html|php)$/,
                    E = /\/$/;

                function p() {
                    var e = c.scrollTop(),
                        a = c.height();
                    t.each(i, function(t) {
                        if (!t.link.attr("hreflang")) {
                            var n = t.link,
                                i = t.sec,
                                o = i.offset().top,
                                d = i.outerHeight(),
                                c = .5 * a,
                                l = i.is(":visible") && o + d - c >= e && o + c <= e + a;
                            t.active !== l && (t.active = l, I(n, f, l))
                        }
                    })
                }

                function I(e, t, a) {
                    var n = e.hasClass(t);
                    (!a || !n) && (a || n) && (a ? e.addClass(t) : e.removeClass(t))
                }
                return d.ready = d.design = d.preview = function() {
                    a = l && n.env("design"), o = n.env("slug") || r.pathname || "", n.scroll.off(p), i = [];
                    for (var t = document.links, d = 0; d < t.length; ++d) ! function(t) {
                        if (!t.getAttribute("hreflang")) {
                            var n = a && t.getAttribute("href-disabled") || t.getAttribute("href");
                            if (s.href = n, !(n.indexOf(":") >= 0)) {
                                var d = e(t);
                                if (s.hash.length > 1 && s.host + s.pathname === r.host + r.pathname) {
                                    if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
                                    var c = e(s.hash);
                                    c.length && i.push({
                                        link: d,
                                        sec: c,
                                        active: !1
                                    });
                                    return
                                }
                                "#" !== n && "" !== n && I(d, f, !l && s.href === r.href || n === o || u.test(n) && E.test(o))
                            }
                        }
                    }(t[d]);
                    i.length && (n.scroll.on(p), p())
                }, d
            })
        },
        30286: function(e, t, a) {
            "use strict";
            var n = a(43949);
            n.define("scroll", e.exports = function(e) {
                var t = {
                        WF_CLICK_EMPTY: "click.wf-empty-link",
                        WF_CLICK_SCROLL: "click.wf-scroll"
                    },
                    a = window.location,
                    i = ! function() {
                        try {
                            return !!window.frameElement
                        } catch (e) {
                            return !0
                        }
                    }() ? window.history : null,
                    o = e(window),
                    d = e(document),
                    c = e(document.body),
                    l = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 15)
                    },
                    r = n.env("editor") ? ".w-editor-body" : "body",
                    s = "header, " + r + " > .header, " + r + " > .w-nav:not([data-no-scroll])",
                    f = 'a[href="#"]',
                    u = 'a[href*="#"]:not(.w-tab-link):not(' + f + ")",
                    E = document.createElement("style");
                E.appendChild(document.createTextNode('.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'));
                var p = /^#[a-zA-Z0-9][\w:.-]*$/;
                let I = "function" == typeof window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");

                function T(e, t) {
                    var a;
                    switch (t) {
                        case "add":
                            (a = e.attr("tabindex")) ? e.attr("data-wf-tabindex-swap", a): e.attr("tabindex", "-1");
                            break;
                        case "remove":
                            (a = e.attr("data-wf-tabindex-swap")) ? (e.attr("tabindex", a), e.removeAttr("data-wf-tabindex-swap")) : e.removeAttr("tabindex")
                    }
                    e.toggleClass("wf-force-outline-none", "add" === t)
                }

                function y(t) {
                    var d = t.currentTarget;
                    if (!(n.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
                        var r = p.test(d.hash) && d.host + d.pathname === a.host + a.pathname ? d.hash : "";
                        if ("" !== r) {
                            var f, u = e(r);
                            u.length && (t && (t.preventDefault(), t.stopPropagation()), f = r, a.hash !== f && i && i.pushState && !(n.env.chrome && "file:" === a.protocol) && (i.state && i.state.hash) !== f && i.pushState({
                                hash: f
                            }, "", f), window.setTimeout(function() {
                                ! function(t, a) {
                                    var n = o.scrollTop(),
                                        i = function(t) {
                                            var a = e(s),
                                                n = "fixed" === a.css("position") ? a.outerHeight() : 0,
                                                i = t.offset().top - n;
                                            if ("mid" === t.data("scroll")) {
                                                var d = o.height() - n,
                                                    c = t.outerHeight();
                                                c < d && (i -= Math.round((d - c) / 2))
                                            }
                                            return i
                                        }(t);
                                    if (n !== i) {
                                        var d = function(e, t, a) {
                                                if ("none" === document.body.getAttribute("data-wf-scroll-motion") || I.matches) return 0;
                                                var n = 1;
                                                return c.add(e).each(function(e, t) {
                                                    var a = parseFloat(t.getAttribute("data-scroll-time"));
                                                    !isNaN(a) && a >= 0 && (n = a)
                                                }), (472.143 * Math.log(Math.abs(t - a) + 125) - 2e3) * n
                                            }(t, n, i),
                                            r = Date.now(),
                                            f = function() {
                                                var e, t, o, c, s, u = Date.now() - r;
                                                window.scroll(0, (e = n, t = i, (o = u) > (c = d) ? t : e + (t - e) * ((s = o / c) < .5 ? 4 * s * s * s : (s - 1) * (2 * s - 2) * (2 * s - 2) + 1))), u <= d ? l(f) : "function" == typeof a && a()
                                            };
                                        l(f)
                                    }
                                }(u, function() {
                                    T(u, "add"), u.get(0).focus({
                                        preventScroll: !0
                                    }), T(u, "remove")
                                })
                            }, 300 * !t))
                        }
                    }
                }
                return {
                    ready: function() {
                        var {
                            WF_CLICK_EMPTY: e,
                            WF_CLICK_SCROLL: a
                        } = t;
                        d.on(a, u, y), d.on(e, f, function(e) {
                            e.preventDefault()
                        }), document.head.insertBefore(E, document.head.firstChild)
                    }
                }
            })
        },
        93695: function(e, t, a) {
            "use strict";
            a(43949).define("touch", e.exports = function(e) {
                var t = {},
                    a = window.getSelection;

                function n(t) {
                    var n, i, o = !1,
                        d = !1,
                        c = Math.min(Math.round(.04 * window.innerWidth), 40);

                    function l(e) {
                        var t = e.touches;
                        t && t.length > 1 || (o = !0, t ? (d = !0, n = t[0].clientX) : n = e.clientX, i = n)
                    }

                    function r(t) {
                        if (o) {
                            if (d && "mousemove" === t.type) {
                                t.preventDefault(), t.stopPropagation();
                                return
                            }
                            var n, l, r, s, u = t.touches,
                                E = u ? u[0].clientX : t.clientX,
                                p = E - i;
                            i = E, Math.abs(p) > c && a && "" === String(a()) && (n = "swipe", l = t, r = {
                                direction: p > 0 ? "right" : "left"
                            }, s = e.Event(n, {
                                originalEvent: l
                            }), e(l.target).trigger(s, r), f())
                        }
                    }

                    function s(e) {
                        if (o && (o = !1, d && "mouseup" === e.type)) {
                            e.preventDefault(), e.stopPropagation(), d = !1;
                            return
                        }
                    }

                    function f() {
                        o = !1
                    }
                    t.addEventListener("touchstart", l, !1), t.addEventListener("touchmove", r, !1), t.addEventListener("touchend", s, !1), t.addEventListener("touchcancel", f, !1), t.addEventListener("mousedown", l, !1), t.addEventListener("mousemove", r, !1), t.addEventListener("mouseup", s, !1), t.addEventListener("mouseout", f, !1), this.destroy = function() {
                        t.removeEventListener("touchstart", l, !1), t.removeEventListener("touchmove", r, !1), t.removeEventListener("touchend", s, !1), t.removeEventListener("touchcancel", f, !1), t.removeEventListener("mousedown", l, !1), t.removeEventListener("mousemove", r, !1), t.removeEventListener("mouseup", s, !1), t.removeEventListener("mouseout", f, !1), t = null
                    }
                }
                return e.event.special.tap = {
                    bindType: "click",
                    delegateType: "click"
                }, t.init = function(t) {
                    return (t = "string" == typeof t ? e(t).get(0) : t) ? new n(t) : null
                }, t.instance = t.init(document), t
            })
        },
        79858: function(e, t, a) {
            "use strict";
            var n = a(43949),
                i = a(65134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };

            function d(e, t) {
                i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
                    component: "dropdown",
                    state: t
                })
            }
            let c = /^#[a-zA-Z0-9\-_]+$/;
            n.define("dropdown", e.exports = function(e, t) {
                var a, l, r = t.debounce,
                    s = {},
                    f = n.env(),
                    u = !1,
                    E = n.env.touch,
                    p = ".w-dropdown",
                    I = "w--open",
                    T = i.triggers,
                    y = "focusout" + p,
                    g = "keydown" + p,
                    m = "mouseenter" + p,
                    b = "mousemove" + p,
                    O = "mouseleave" + p,
                    v = (E ? "click" : "mouseup") + p,
                    L = "w-close" + p,
                    _ = "setting" + p,
                    R = e(document);

                function N() {
                    a = f && n.env("design"), (l = R.find(p)).each(h)
                }

                function h(t, i) {
                    var d, l, s, u, E, T, b, O, N, h, w = e(i),
                        F = e.data(i, p);
                    F || (F = e.data(i, p, {
                        open: !1,
                        el: w,
                        config: {},
                        selectedIdx: -1
                    })), F.toggle = F.el.children(".w-dropdown-toggle"), F.list = F.el.children(".w-dropdown-list"), F.links = F.list.find("a:not(.w-dropdown .w-dropdown a)"), F.complete = (d = F, function() {
                        d.list.removeClass(I), d.toggle.removeClass(I), d.manageZ && d.el.css("z-index", "")
                    }), F.mouseLeave = (l = F, function() {
                        l.hovering = !1, l.links.is(":focus") || M(l)
                    }), F.mouseUpOutside = ((s = F).mouseUpOutside && R.off(v, s.mouseUpOutside), r(function(t) {
                        if (s.open) {
                            var a = e(t.target);
                            if (!a.closest(".w-dropdown-toggle").length) {
                                var i = -1 === e.inArray(s.el[0], a.parents(p)),
                                    o = n.env("editor");
                                if (i) {
                                    if (o) {
                                        var d = 1 === a.parents().length && 1 === a.parents("svg").length,
                                            c = a.parents(".w-editor-bem-EditorHoverControls").length;
                                        if (d || c) return
                                    }
                                    M(s)
                                }
                            }
                        }
                    })), F.mouseMoveOutside = (u = F, r(function(t) {
                        if (u.open) {
                            var a = e(t.target);
                            if (-1 === e.inArray(u.el[0], a.parents(p))) {
                                var n = a.parents(".w-editor-bem-EditorHoverControls").length,
                                    i = a.parents(".w-editor-bem-RTToolbar").length,
                                    o = e(".w-editor-bem-EditorOverlay"),
                                    d = o.find(".w-editor-edit-outline").length || o.find(".w-editor-bem-RTToolbar").length;
                                if (n || i || d) return;
                                u.hovering = !1, M(u)
                            }
                        }
                    })), S(F);
                    var k = F.toggle.attr("id"),
                        U = F.list.attr("id");
                    k || (k = "w-dropdown-toggle-" + t), U || (U = "w-dropdown-list-" + t), F.toggle.attr("id", k), F.toggle.attr("aria-controls", U), F.toggle.attr("aria-haspopup", "menu"), F.toggle.attr("aria-expanded", "false"), F.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"), "BUTTON" !== F.toggle.prop("tagName") && (F.toggle.attr("role", "button"), F.toggle.attr("tabindex") || F.toggle.attr("tabindex", "0")), F.list.attr("id", U), F.list.attr("aria-labelledby", k), F.links.each(function(e, t) {
                        t.hasAttribute("tabindex") || t.setAttribute("tabindex", "0"), c.test(t.hash) && t.addEventListener("click", M.bind(null, F))
                    }), F.el.off(p), F.toggle.off(p), F.nav && F.nav.off(p);
                    var x = C(F, !0);
                    a && F.el.on(_, (E = F, function(e, t) {
                        t = t || {}, S(E), !0 === t.open && A(E), !1 === t.open && M(E, {
                            immediate: !0
                        })
                    })), a || (f && (F.hovering = !1, M(F)), F.config.hover && F.toggle.on(m, (T = F, function() {
                        T.hovering = !0, A(T)
                    })), F.el.on(L, x), F.el.on(g, (b = F, function(e) {
                        if (!a && b.open) switch (b.selectedIdx = b.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                                if (!b.open) return;
                                return b.selectedIdx = 0, V(b), e.preventDefault();
                            case o.END:
                                if (!b.open) return;
                                return b.selectedIdx = b.links.length - 1, V(b), e.preventDefault();
                            case o.ESCAPE:
                                return M(b), b.toggle.focus(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return b.selectedIdx = Math.min(b.links.length - 1, b.selectedIdx + 1), V(b), e.preventDefault();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return b.selectedIdx = Math.max(-1, b.selectedIdx - 1), V(b), e.preventDefault()
                        }
                    })), F.el.on(y, (O = F, r(function(e) {
                        var {
                            relatedTarget: t,
                            target: a
                        } = e, n = O.el[0];
                        return n.contains(t) || n.contains(a) || M(O), e.stopPropagation()
                    }))), F.toggle.on(v, x), F.toggle.on(g, (h = C(N = F, !0), function(e) {
                        if (!a) {
                            if (!N.open) switch (e.keyCode) {
                                case o.ARROW_UP:
                                case o.ARROW_DOWN:
                                    return e.stopPropagation()
                            }
                            switch (e.keyCode) {
                                case o.SPACE:
                                case o.ENTER:
                                    return h(), e.stopPropagation(), e.preventDefault()
                            }
                        }
                    })), F.nav = F.el.closest(".w-nav"), F.nav.on(L, x))
                }

                function S(e) {
                    var t = Number(e.el.css("z-index"));
                    e.manageZ = 900 === t || 901 === t, e.config = {
                        hover: "true" === e.el.attr("data-hover") && !E,
                        delay: e.el.attr("data-delay")
                    }
                }

                function C(e, t) {
                    return r(function(a) {
                        if (e.open || a && "w-close" === a.type) return M(e, {
                            forceClose: t
                        });
                        A(e)
                    })
                }

                function A(t) {
                    if (!t.open) {
                        i = t.el[0], l.each(function(t, a) {
                            var n = e(a);
                            n.is(i) || n.has(i).length || n.triggerHandler(L)
                        }), t.open = !0, t.list.addClass(I), t.toggle.addClass(I), t.toggle.attr("aria-expanded", "true"), T.intro(0, t.el[0]), d(t.el[0], "open"), n.redraw.up(), t.manageZ && t.el.css("z-index", 901);
                        var i, o = n.env("editor");
                        a || R.on(v, t.mouseUpOutside), t.hovering && !o && t.el.on(O, t.mouseLeave), t.hovering && o && R.on(b, t.mouseMoveOutside), window.clearTimeout(t.delayId)
                    }
                }

                function M(e, {
                    immediate: t,
                    forceClose: a
                } = {}) {
                    if (e.open && (!e.config.hover || !e.hovering || a)) {
                        e.toggle.attr("aria-expanded", "false"), e.open = !1;
                        var n = e.config;
                        if (T.outro(0, e.el[0]), d(e.el[0], "close"), R.off(v, e.mouseUpOutside), R.off(b, e.mouseMoveOutside), e.el.off(O, e.mouseLeave), window.clearTimeout(e.delayId), !n.delay || t) return e.complete();
                        e.delayId = window.setTimeout(e.complete, n.delay)
                    }
                }

                function V(e) {
                    e.links[e.selectedIdx] && e.links[e.selectedIdx].focus()
                }
                return s.ready = N, s.design = function() {
                    u && R.find(p).each(function(t, a) {
                        e(a).triggerHandler(L)
                    }), u = !1, N()
                }, s.preview = function() {
                    u = !0, N()
                }, s
            })
        },
        41655: function(e, t, a) {
            "use strict";
            var n = a(43949),
                i = a(65134);
            let o = {
                ARROW_LEFT: 37,
                ARROW_UP: 38,
                ARROW_RIGHT: 39,
                ARROW_DOWN: 40,
                ESCAPE: 27,
                SPACE: 32,
                ENTER: 13,
                HOME: 36,
                END: 35
            };

            function d(e, t) {
                i.dispatchCustomEvent(e, "IX3_COMPONENT_STATE_CHANGE", {
                    component: "navbar",
                    state: t
                })
            }
            n.define("navbar", e.exports = function(e, t) {
                var a, c, l, r, s = {},
                    f = e.tram,
                    u = e(window),
                    E = e(document),
                    p = t.debounce,
                    I = n.env(),
                    T = ".w-nav",
                    y = "w--open",
                    g = "w--nav-dropdown-open",
                    m = "w--nav-dropdown-toggle-open",
                    b = "w--nav-dropdown-list-open",
                    O = "w--nav-link-open",
                    v = i.triggers,
                    L = e();

                function _() {
                    n.resize.off(R)
                }

                function R() {
                    c.each(k)
                }

                function N(a, n) {
                    var i, d, c, s, f, p = e(n),
                        I = e.data(n, T);
                    I || (I = e.data(n, T, {
                        open: !1,
                        el: p,
                        config: {},
                        selectedIdx: -1
                    })), I.menu = p.find(".w-nav-menu"), I.links = I.menu.find(".w-nav-link"), I.dropdowns = I.menu.find(".w-dropdown"), I.dropdownToggle = I.menu.find(".w-dropdown-toggle"), I.dropdownList = I.menu.find(".w-dropdown-list"), I.button = p.find(".w-nav-button"), I.container = p.find(".w-container"), I.overlayContainerId = "w-nav-overlay-" + a, I.outside = ((i = I).outside && E.off("click" + T, i.outside), function(t) {
                        var a = e(t.target);
                        r && a.closest(".w-editor-bem-EditorOverlay").length || F(i, a)
                    });
                    var y = p.find(".w-nav-brand");
                    y && "/" === y.attr("href") && null == y.attr("aria-label") && y.attr("aria-label", "home"), I.button.attr("style", "-webkit-user-select: text;"), null == I.button.attr("aria-label") && I.button.attr("aria-label", "menu"), I.button.attr("role", "button"), I.button.attr("tabindex", "0"), I.button.attr("aria-controls", I.overlayContainerId), I.button.attr("aria-haspopup", "menu"), I.button.attr("aria-expanded", "false"), I.el.off(T), I.button.off(T), I.menu.off(T), C(I), l ? (S(I), I.el.on("setting" + T, (d = I, function(e, a) {
                        a = a || {};
                        var n = u.width();
                        C(d), !0 === a.open && D(d, !0), !1 === a.open && P(d, !0), d.open && t.defer(function() {
                            n !== u.width() && M(d)
                        })
                    }))) : ((c = I).overlay || (c.overlay = e('<div class="w-nav-overlay" data-wf-ignore />').appendTo(c.el), c.overlay.attr("id", c.overlayContainerId), c.parent = c.menu.parent(), P(c, !0)), I.button.on("click" + T, V(I)), I.menu.on("click" + T, "a", w(I)), I.button.on("keydown" + T, (s = I, function(e) {
                        switch (e.keyCode) {
                            case o.SPACE:
                            case o.ENTER:
                                return V(s)(), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return P(s), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                            case o.HOME:
                            case o.END:
                                if (!s.open) return e.preventDefault(), e.stopPropagation();
                                return e.keyCode === o.END ? s.selectedIdx = s.links.length - 1 : s.selectedIdx = 0, A(s), e.preventDefault(), e.stopPropagation()
                        }
                    })), I.el.on("keydown" + T, (f = I, function(e) {
                        if (f.open) switch (f.selectedIdx = f.links.index(document.activeElement), e.keyCode) {
                            case o.HOME:
                            case o.END:
                                return e.keyCode === o.END ? f.selectedIdx = f.links.length - 1 : f.selectedIdx = 0, A(f), e.preventDefault(), e.stopPropagation();
                            case o.ESCAPE:
                                return P(f), f.button.focus(), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_LEFT:
                            case o.ARROW_UP:
                                return f.selectedIdx = Math.max(-1, f.selectedIdx - 1), A(f), e.preventDefault(), e.stopPropagation();
                            case o.ARROW_RIGHT:
                            case o.ARROW_DOWN:
                                return f.selectedIdx = Math.min(f.links.length - 1, f.selectedIdx + 1), A(f), e.preventDefault(), e.stopPropagation()
                        }
                    }))), k(a, n)
                }

                function h(t, a) {
                    var n = e.data(a, T);
                    n && (S(n), e.removeData(a, T))
                }

                function S(e) {
                    e.overlay && (P(e, !0), e.overlay.remove(), e.overlay = null)
                }

                function C(e) {
                    var a = {},
                        n = e.config || {},
                        i = a.animation = e.el.attr("data-animation") || "default";
                    a.animOver = /^over/.test(i), a.animDirect = /left$/.test(i) ? -1 : 1, n.animation !== i && e.open && t.defer(M, e), a.easing = e.el.attr("data-easing") || "ease", a.easing2 = e.el.attr("data-easing2") || "ease";
                    var o = e.el.attr("data-duration");
                    a.duration = null != o ? Number(o) : 400, a.docHeight = e.el.attr("data-doc-height"), e.config = a
                }

                function A(e) {
                    if (e.links[e.selectedIdx]) {
                        var t = e.links[e.selectedIdx];
                        t.focus(), w(t)
                    }
                }

                function M(e) {
                    e.open && (P(e, !0), D(e, !0))
                }

                function V(e) {
                    return p(function() {
                        e.open ? P(e) : D(e)
                    })
                }

                function w(t) {
                    return function(a) {
                        var i = e(this).attr("href");
                        if (!n.validClick(a.currentTarget)) return void a.preventDefault();
                        i && 0 === i.indexOf("#") && t.open && P(t)
                    }
                }
                s.ready = s.design = s.preview = function() {
                    l = I && n.env("design"), r = n.env("editor"), a = e(document.body), (c = E.find(T)).length && (c.each(N), _(), n.resize.on(R))
                }, s.destroy = function() {
                    L = e(), _(), c && c.length && c.each(h)
                };
                var F = p(function(e, t) {
                    if (e.open) {
                        var a = t.closest(".w-nav-menu");
                        e.menu.is(a) || P(e)
                    }
                });

                function k(t, a) {
                    var n = e.data(a, T),
                        i = n.collapsed = "none" !== n.button.css("display");
                    if (!n.open || i || l || P(n, !0), n.container.length) {
                        var o, d = ("none" === (o = n.container.css(U)) && (o = ""), function(t, a) {
                            (a = e(a)).css(U, ""), "none" === a.css(U) && a.css(U, o)
                        });
                        n.links.each(d), n.dropdowns.each(d)
                    }
                    n.open && G(n)
                }
                var U = "max-width";

                function x(e, t) {
                    t.setAttribute("data-nav-menu-open", "")
                }

                function B(e, t) {
                    t.removeAttribute("data-nav-menu-open")
                }

                function D(e, t) {
                    if (!e.open) {
                        e.open = !0, e.menu.each(x), e.links.addClass(O), e.dropdowns.addClass(g), e.dropdownToggle.addClass(m), e.dropdownList.addClass(b), e.button.addClass(y);
                        var a = e.config;
                        ("none" === a.animation || !f.support.transform || a.duration <= 0) && (t = !0);
                        var i = G(e),
                            o = e.menu.outerHeight(!0),
                            c = e.menu.outerWidth(!0),
                            r = e.el.height(),
                            s = e.el[0];
                        if (k(0, s), v.intro(0, s), d(s, "open"), n.redraw.up(), l || E.on("click" + T, e.outside), t) return void p();
                        var u = "transform " + a.duration + "ms " + a.easing;
                        if (e.overlay && (L = e.menu.prev(), e.overlay.show().append(e.menu)), a.animOver) {
                            f(e.menu).add(u).set({
                                x: a.animDirect * c,
                                height: i
                            }).start({
                                x: 0
                            }).then(p), e.overlay && e.overlay.width(c);
                            return
                        }
                        f(e.menu).add(u).set({
                            y: -(r + o)
                        }).start({
                            y: 0
                        }).then(p)
                    }

                    function p() {
                        e.button.attr("aria-expanded", "true")
                    }
                }

                function G(e) {
                    var t = e.config,
                        n = t.docHeight ? E.height() : a.height();
                    return t.animOver ? e.menu.height(n) : "fixed" !== e.el.css("position") && (n -= e.el.outerHeight(!0)), e.overlay && e.overlay.height(n), n
                }

                function P(e, t) {
                    if (e.open) {
                        e.open = !1, e.button.removeClass(y);
                        var a = e.config;
                        if (("none" === a.animation || !f.support.transform || a.duration <= 0) && (t = !0), v.outro(0, e.el[0]), d(e.el[0], "close"), E.off("click" + T, e.outside), t) {
                            f(e.menu).stop(), l();
                            return
                        }
                        var n = "transform " + a.duration + "ms " + a.easing2,
                            i = e.menu.outerHeight(!0),
                            o = e.menu.outerWidth(!0),
                            c = e.el.height();
                        if (a.animOver) return void f(e.menu).add(n).start({
                            x: o * a.animDirect
                        }).then(l);
                        f(e.menu).add(n).start({
                            y: -(c + i)
                        }).then(l)
                    }

                    function l() {
                        e.menu.height(""), f(e.menu).set({
                            x: 0,
                            y: 0
                        }), e.menu.each(B), e.links.removeClass(O), e.dropdowns.removeClass(g), e.dropdownToggle.removeClass(m), e.dropdownList.removeClass(b), e.overlay && e.overlay.children().length && (L.length ? e.menu.insertAfter(L) : e.menu.prependTo(e.parent), e.overlay.attr("style", "").hide()), e.el.triggerHandler("w-close"), e.button.attr("aria-expanded", "false")
                    }
                }
                return s
            })
        },
        13946: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                actionListPlaybackChanged: function() {
                    return Q
                },
                animationFrameChanged: function() {
                    return D
                },
                clearRequested: function() {
                    return k
                },
                elementStateChanged: function() {
                    return H
                },
                eventListenerAdded: function() {
                    return U
                },
                eventStateChanged: function() {
                    return B
                },
                instanceAdded: function() {
                    return P
                },
                instanceRemoved: function() {
                    return X
                },
                instanceStarted: function() {
                    return W
                },
                mediaQueriesDefined: function() {
                    return z
                },
                parameterChanged: function() {
                    return G
                },
                playbackRequested: function() {
                    return w
                },
                previewRequested: function() {
                    return V
                },
                rawDataImported: function() {
                    return S
                },
                sessionInitialized: function() {
                    return C
                },
                sessionStarted: function() {
                    return A
                },
                sessionStopped: function() {
                    return M
                },
                stopRequested: function() {
                    return F
                },
                testFrameRendered: function() {
                    return x
                },
                viewportWidthChanged: function() {
                    return Y
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(7087),
                d = a(9468),
                {
                    IX2_RAW_DATA_IMPORTED: c,
                    IX2_SESSION_INITIALIZED: l,
                    IX2_SESSION_STARTED: r,
                    IX2_SESSION_STOPPED: s,
                    IX2_PREVIEW_REQUESTED: f,
                    IX2_PLAYBACK_REQUESTED: u,
                    IX2_STOP_REQUESTED: E,
                    IX2_CLEAR_REQUESTED: p,
                    IX2_EVENT_LISTENER_ADDED: I,
                    IX2_TEST_FRAME_RENDERED: T,
                    IX2_EVENT_STATE_CHANGED: y,
                    IX2_ANIMATION_FRAME_CHANGED: g,
                    IX2_PARAMETER_CHANGED: m,
                    IX2_INSTANCE_ADDED: b,
                    IX2_INSTANCE_STARTED: O,
                    IX2_INSTANCE_REMOVED: v,
                    IX2_ELEMENT_STATE_CHANGED: L,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
                    IX2_VIEWPORT_WIDTH_CHANGED: R,
                    IX2_MEDIA_QUERIES_DEFINED: N
                } = o.IX2EngineActionTypes,
                {
                    reifyState: h
                } = d.IX2VanillaUtils,
                S = e => ({
                    type: c,
                    payload: { ...h(e)
                    }
                }),
                C = ({
                    hasBoundaryNodes: e,
                    reducedMotion: t
                }) => ({
                    type: l,
                    payload: {
                        hasBoundaryNodes: e,
                        reducedMotion: t
                    }
                }),
                A = () => ({
                    type: r
                }),
                M = () => ({
                    type: s
                }),
                V = ({
                    rawData: e,
                    defer: t
                }) => ({
                    type: f,
                    payload: {
                        defer: t,
                        rawData: e
                    }
                }),
                w = ({
                    actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
                    actionListId: t,
                    actionItemId: a,
                    eventId: n,
                    allowEvents: i,
                    immediate: d,
                    testManual: c,
                    verbose: l,
                    rawData: r
                }) => ({
                    type: u,
                    payload: {
                        actionTypeId: e,
                        actionListId: t,
                        actionItemId: a,
                        testManual: c,
                        eventId: n,
                        allowEvents: i,
                        immediate: d,
                        verbose: l,
                        rawData: r
                    }
                }),
                F = e => ({
                    type: E,
                    payload: {
                        actionListId: e
                    }
                }),
                k = () => ({
                    type: p
                }),
                U = (e, t) => ({
                    type: I,
                    payload: {
                        target: e,
                        listenerParams: t
                    }
                }),
                x = (e = 1) => ({
                    type: T,
                    payload: {
                        step: e
                    }
                }),
                B = (e, t) => ({
                    type: y,
                    payload: {
                        stateKey: e,
                        newState: t
                    }
                }),
                D = (e, t) => ({
                    type: g,
                    payload: {
                        now: e,
                        parameters: t
                    }
                }),
                G = (e, t) => ({
                    type: m,
                    payload: {
                        key: e,
                        value: t
                    }
                }),
                P = e => ({
                    type: b,
                    payload: { ...e
                    }
                }),
                W = (e, t) => ({
                    type: O,
                    payload: {
                        instanceId: e,
                        time: t
                    }
                }),
                X = e => ({
                    type: v,
                    payload: {
                        instanceId: e
                    }
                }),
                H = (e, t, a, n) => ({
                    type: L,
                    payload: {
                        elementId: e,
                        actionTypeId: t,
                        current: a,
                        actionItem: n
                    }
                }),
                Q = ({
                    actionListId: e,
                    isPlaying: t
                }) => ({
                    type: _,
                    payload: {
                        actionListId: e,
                        isPlaying: t
                    }
                }),
                Y = ({
                    width: e,
                    mediaQueries: t
                }) => ({
                    type: R,
                    payload: {
                        width: e,
                        mediaQueries: t
                    }
                }),
                z = () => ({
                    type: N
                })
        },
        46011: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                actions: function() {
                    return r
                },
                destroy: function() {
                    return p
                },
                init: function() {
                    return E
                },
                setEnv: function() {
                    return u
                },
                store: function() {
                    return f
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = a(19516),
                c = (n = a(17243)) && n.__esModule ? n : {
                    default: n
                },
                l = a(51970),
                r = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = s(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(13946));

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }
            let f = (0, d.createStore)(c.default);

            function u(e) {
                e() && (0, l.observeRequests)(f)
            }

            function E(e) {
                p(), (0, l.startEngine)({
                    store: f,
                    rawData: e,
                    allowEvents: !0
                })
            }

            function p() {
                (0, l.stopEngine)(f)
            }
        },
        15012: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                elementContains: function() {
                    return m
                },
                getChildElements: function() {
                    return O
                },
                getClosestElement: function() {
                    return L
                },
                getProperty: function() {
                    return p
                },
                getQuerySelector: function() {
                    return T
                },
                getRefType: function() {
                    return _
                },
                getSiblingElements: function() {
                    return v
                },
                getStyle: function() {
                    return E
                },
                getValidDocument: function() {
                    return y
                },
                isSiblingNode: function() {
                    return b
                },
                matchSelector: function() {
                    return I
                },
                queryDocument: function() {
                    return g
                },
                setStyle: function() {
                    return u
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(9468),
                d = a(7087),
                {
                    ELEMENT_MATCHES: c
                } = o.IX2BrowserSupport,
                {
                    IX2_ID_DELIMITER: l,
                    HTML_ELEMENT: r,
                    PLAIN_OBJECT: s,
                    WF_PAGE: f
                } = d.IX2EngineConstants;

            function u(e, t, a) {
                e.style[t] = a
            }

            function E(e, t) {
                return t.startsWith("--") ? window.getComputedStyle(document.documentElement).getPropertyValue(t) : e.style instanceof CSSStyleDeclaration ? e.style[t] : void 0
            }

            function p(e, t) {
                return e[t]
            }

            function I(e) {
                return t => t[c](e)
            }

            function T({
                id: e,
                selector: t
            }) {
                if (e) {
                    let t = e;
                    if (-1 !== e.indexOf(l)) {
                        let a = e.split(l),
                            n = a[0];
                        if (t = a[1], n !== document.documentElement.getAttribute(f)) return null
                    }
                    return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`
                }
                return t
            }

            function y(e) {
                return null == e || e === document.documentElement.getAttribute(f) ? document : null
            }

            function g(e, t) {
                return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
            }

            function m(e, t) {
                return e.contains(t)
            }

            function b(e, t) {
                return e !== t && e.parentNode === t.parentNode
            }

            function O(e) {
                let t = [];
                for (let a = 0, {
                        length: n
                    } = e || []; a < n; a++) {
                    let {
                        children: n
                    } = e[a], {
                        length: i
                    } = n;
                    if (i)
                        for (let e = 0; e < i; e++) t.push(n[e])
                }
                return t
            }

            function v(e = []) {
                let t = [],
                    a = [];
                for (let n = 0, {
                        length: i
                    } = e; n < i; n++) {
                    let {
                        parentNode: i
                    } = e[n];
                    if (!i || !i.children || !i.children.length || -1 !== a.indexOf(i)) continue;
                    a.push(i);
                    let o = i.firstElementChild;
                    for (; null != o;) - 1 === e.indexOf(o) && t.push(o), o = o.nextElementSibling
                }
                return t
            }
            let L = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
                if (!document.documentElement.contains(e)) return null;
                let a = e;
                do {
                    if (a[c] && a[c](t)) return a;
                    a = a.parentNode
                } while (null != a);
                return null
            };

            function _(e) {
                return null != e && "object" == typeof e ? e instanceof Element ? r : s : null
            }
        },
        51970: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                observeRequests: function() {
                    return q
                },
                startActionGroup: function() {
                    return ep
                },
                startEngine: function() {
                    return en
                },
                stopActionGroup: function() {
                    return eE
                },
                stopAllActionGroups: function() {
                    return eu
                },
                stopEngine: function() {
                    return ei
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = g(a(19777)),
                d = g(a(24738)),
                c = g(a(64659)),
                l = g(a(13452)),
                r = g(a(86633)),
                s = g(a(53729)),
                f = g(a(32397)),
                u = g(a(35082)),
                E = a(7087),
                p = a(9468),
                I = a(13946),
                T = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = m(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(15012)),
                y = g(a(58955));

            function g(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function m(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (m = function(e) {
                    return e ? a : t
                })(e)
            }
            let b = Object.keys(E.QuickEffectIds),
                O = e => b.includes(e),
                {
                    COLON_DELIMITER: v,
                    BOUNDARY_SELECTOR: L,
                    HTML_ELEMENT: _,
                    RENDER_GENERAL: R,
                    W_MOD_IX: N
                } = E.IX2EngineConstants,
                {
                    getAffectedElements: h,
                    getElementId: S,
                    getDestinationValues: C,
                    observeStore: A,
                    getInstanceId: M,
                    renderHTMLElement: V,
                    clearAllStyles: w,
                    getMaxDurationItemIndex: F,
                    getComputedStyle: k,
                    getInstanceOrigin: U,
                    reduceListToGroup: x,
                    shouldNamespaceEventParameter: B,
                    getNamespacedParameterId: D,
                    shouldAllowMediaQuery: G,
                    cleanupHTMLElement: P,
                    clearObjectCache: W,
                    stringifyTarget: X,
                    mediaQueriesEqual: H,
                    shallowEqual: Q
                } = p.IX2VanillaUtils,
                {
                    isPluginType: Y,
                    createPluginInstance: z,
                    getPluginDuration: j
                } = p.IX2VanillaPlugins,
                $ = navigator.userAgent,
                K = $.match(/iPad/i) || $.match(/iPhone/);

            function q(e) {
                A({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.preview,
                    onChange: Z
                }), A({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.playback,
                    onChange: ee
                }), A({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.stop,
                    onChange: et
                }), A({
                    store: e,
                    select: ({
                        ixRequest: e
                    }) => e.clear,
                    onChange: ea
                })
            }

            function Z({
                rawData: e,
                defer: t
            }, a) {
                let n = () => {
                    en({
                        store: a,
                        rawData: e,
                        allowEvents: !0
                    }), J()
                };
                t ? setTimeout(n, 0) : n()
            }

            function J() {
                document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
            }

            function ee(e, t) {
                let {
                    actionTypeId: a,
                    actionListId: n,
                    actionItemId: i,
                    eventId: o,
                    allowEvents: d,
                    immediate: c,
                    testManual: l,
                    verbose: r = !0
                } = e, {
                    rawData: s
                } = e;
                if (n && i && s && c) {
                    let e = s.actionLists[n];
                    e && (s = x({
                        actionList: e,
                        actionItemId: i,
                        rawData: s
                    }))
                }
                if (en({
                        store: t,
                        rawData: s,
                        allowEvents: d,
                        testManual: l
                    }), n && a === E.ActionTypeConsts.GENERAL_START_ACTION || O(a)) {
                    eE({
                        store: t,
                        actionListId: n
                    }), ef({
                        store: t,
                        actionListId: n,
                        eventId: o
                    });
                    let e = ep({
                        store: t,
                        eventId: o,
                        actionListId: n,
                        immediate: c,
                        verbose: r
                    });
                    r && e && t.dispatch((0, I.actionListPlaybackChanged)({
                        actionListId: n,
                        isPlaying: !c
                    }))
                }
            }

            function et({
                actionListId: e
            }, t) {
                e ? eE({
                    store: t,
                    actionListId: e
                }) : eu({
                    store: t
                }), ei(t)
            }

            function ea(e, t) {
                ei(t), w({
                    store: t,
                    elementApi: T
                })
            }

            function en({
                store: e,
                rawData: t,
                allowEvents: a,
                testManual: n
            }) {
                let {
                    ixSession: i
                } = e.getState();
                if (t && e.dispatch((0, I.rawDataImported)(t)), !i.active) {
                    (e.dispatch((0, I.sessionInitialized)({
                        hasBoundaryNodes: !!document.querySelector(L),
                        reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
                    })), a) && (function(e) {
                        let {
                            ixData: t
                        } = e.getState(), {
                            eventTypeMap: a
                        } = t;
                        ec(e), (0, f.default)(a, (t, a) => {
                            let n = y.default[a];
                            if (!n) return void console.warn(`IX2 event type not configured: ${a}`);
                            ! function({
                                logic: e,
                                store: t,
                                events: a
                            }) {
                                ! function(e) {
                                    if (!K) return;
                                    let t = {},
                                        a = "";
                                    for (let n in e) {
                                        let {
                                            eventTypeId: i,
                                            target: o
                                        } = e[n], d = T.getQuerySelector(o);
                                        t[d] || (i === E.EventTypeConsts.MOUSE_CLICK || i === E.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[d] = !0, a += d + "{cursor: pointer;touch-action: manipulation;}")
                                    }
                                    if (a) {
                                        let e = document.createElement("style");
                                        e.textContent = a, document.body.appendChild(e)
                                    }
                                }(a);
                                let {
                                    types: n,
                                    handler: i
                                } = e, {
                                    ixData: l
                                } = t.getState(), {
                                    actionLists: r
                                } = l, s = el(a, es);
                                if (!(0, c.default)(s)) return;
                                (0, f.default)(s, (e, n) => {
                                    let i = a[n],
                                        {
                                            action: c,
                                            id: s,
                                            mediaQueries: f = l.mediaQueryKeys
                                        } = i,
                                        {
                                            actionListId: u
                                        } = c.config;
                                    H(f, l.mediaQueryKeys) || t.dispatch((0, I.mediaQueriesDefined)()), c.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(i.config) ? i.config : [i.config]).forEach(a => {
                                        let {
                                            continuousParameterGroupId: n
                                        } = a, i = (0, d.default)(r, `${u}.continuousParameterGroups`, []), c = (0, o.default)(i, ({
                                            id: e
                                        }) => e === n), l = (a.smoothing || 0) / 100, f = (a.restingState || 0) / 100;
                                        c && e.forEach((e, n) => {
                                            ! function({
                                                store: e,
                                                eventStateKey: t,
                                                eventTarget: a,
                                                eventId: n,
                                                eventConfig: i,
                                                actionListId: o,
                                                parameterGroup: c,
                                                smoothing: l,
                                                restingValue: r
                                            }) {
                                                let {
                                                    ixData: s,
                                                    ixSession: f
                                                } = e.getState(), {
                                                    events: u
                                                } = s, p = u[n], {
                                                    eventTypeId: I
                                                } = p, y = {}, g = {}, m = [], {
                                                    continuousActionGroups: b
                                                } = c, {
                                                    id: O
                                                } = c;
                                                B(I, i) && (O = D(t, O));
                                                let _ = f.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null;
                                                b.forEach(e => {
                                                    let {
                                                        keyframe: t,
                                                        actionItems: n
                                                    } = e;
                                                    n.forEach(e => {
                                                        let {
                                                            actionTypeId: n
                                                        } = e, {
                                                            target: i
                                                        } = e.config;
                                                        if (!i) return;
                                                        let o = i.boundaryMode ? _ : null,
                                                            d = X(i) + v + n;
                                                        if (g[d] = function(e = [], t, a) {
                                                                let n, i = [...e];
                                                                return i.some((e, a) => e.keyframe === t && (n = a, !0)), null == n && (n = i.length, i.push({
                                                                    keyframe: t,
                                                                    actionItems: []
                                                                })), i[n].actionItems.push(a), i
                                                            }(g[d], t, e), !y[d]) {
                                                            y[d] = !0;
                                                            let {
                                                                config: t
                                                            } = e;
                                                            h({
                                                                config: t,
                                                                event: p,
                                                                eventTarget: a,
                                                                elementRoot: o,
                                                                elementApi: T
                                                            }).forEach(e => {
                                                                m.push({
                                                                    element: e,
                                                                    key: d
                                                                })
                                                            })
                                                        }
                                                    })
                                                }), m.forEach(({
                                                    element: t,
                                                    key: a
                                                }) => {
                                                    let i = g[a],
                                                        c = (0, d.default)(i, "[0].actionItems[0]", {}),
                                                        {
                                                            actionTypeId: s
                                                        } = c,
                                                        f = (s === E.ActionTypeConsts.PLUGIN_RIVE ? 0 === (c.config ? .target ? .selectorGuids || []).length : Y(s)) ? z(s) ? .(t, c) : null,
                                                        u = C({
                                                            element: t,
                                                            actionItem: c,
                                                            elementApi: T
                                                        }, f);
                                                    eI({
                                                        store: e,
                                                        element: t,
                                                        eventId: n,
                                                        actionListId: o,
                                                        actionItem: c,
                                                        destination: u,
                                                        continuous: !0,
                                                        parameterId: O,
                                                        actionGroups: i,
                                                        smoothing: l,
                                                        restingValue: r,
                                                        pluginInstance: f
                                                    })
                                                })
                                            }({
                                                store: t,
                                                eventStateKey: s + v + n,
                                                eventTarget: e,
                                                eventId: s,
                                                eventConfig: a,
                                                actionListId: u,
                                                parameterGroup: c,
                                                smoothing: l,
                                                restingValue: f
                                            })
                                        })
                                    }), (c.actionTypeId === E.ActionTypeConsts.GENERAL_START_ACTION || O(c.actionTypeId)) && ef({
                                        store: t,
                                        actionListId: u,
                                        eventId: s
                                    })
                                });
                                let p = e => {
                                        let {
                                            ixSession: n
                                        } = t.getState();
                                        er(s, (o, d, c) => {
                                            let r = a[d],
                                                s = n.eventState[c],
                                                {
                                                    action: f,
                                                    mediaQueries: u = l.mediaQueryKeys
                                                } = r;
                                            if (!G(u, n.mediaQueryKey)) return;
                                            let p = (a = {}) => {
                                                let n = i({
                                                    store: t,
                                                    element: o,
                                                    event: r,
                                                    eventConfig: a,
                                                    nativeEvent: e,
                                                    eventStateKey: c
                                                }, s);
                                                Q(n, s) || t.dispatch((0, I.eventStateChanged)(c, n))
                                            };
                                            f.actionTypeId === E.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(r.config) ? r.config : [r.config]).forEach(p) : p()
                                        })
                                    },
                                    y = (0, u.default)(p, 12),
                                    g = ({
                                        target: e = document,
                                        types: a,
                                        throttle: n
                                    }) => {
                                        a.split(" ").filter(Boolean).forEach(a => {
                                            let i = n ? y : p;
                                            e.addEventListener(a, i), t.dispatch((0, I.eventListenerAdded)(e, [a, i]))
                                        })
                                    };
                                Array.isArray(n) ? n.forEach(g) : "string" == typeof n && g(e)
                            }({
                                logic: n,
                                store: e,
                                events: t
                            })
                        });
                        let {
                            ixSession: n
                        } = e.getState();
                        n.eventListeners.length && function(e) {
                            let t = () => {
                                ec(e)
                            };
                            ed.forEach(a => {
                                window.addEventListener(a, t), e.dispatch((0, I.eventListenerAdded)(window, [a, t]))
                            }), t()
                        }(e)
                    }(e), function() {
                        let {
                            documentElement: e
                        } = document; - 1 === e.className.indexOf(N) && (e.className += ` ${N}`)
                    }(), e.getState().ixSession.hasDefinedMediaQueries && A({
                        store: e,
                        select: ({
                            ixSession: e
                        }) => e.mediaQueryKey,
                        onChange: () => {
                            ei(e), w({
                                store: e,
                                elementApi: T
                            }), en({
                                store: e,
                                allowEvents: !0
                            }), J()
                        }
                    }));
                    e.dispatch((0, I.sessionStarted)()),
                        function(e, t) {
                            let a = n => {
                                let {
                                    ixSession: i,
                                    ixParameters: o
                                } = e.getState();
                                if (i.active)
                                    if (e.dispatch((0, I.animationFrameChanged)(n, o)), t) {
                                        let t = A({
                                            store: e,
                                            select: ({
                                                ixSession: e
                                            }) => e.tick,
                                            onChange: e => {
                                                a(e), t()
                                            }
                                        })
                                    } else requestAnimationFrame(a)
                            };
                            a(window.performance.now())
                        }(e, n)
                }
            }

            function ei(e) {
                let {
                    ixSession: t
                } = e.getState();
                if (t.active) {
                    let {
                        eventListeners: a
                    } = t;
                    a.forEach(eo), W(), e.dispatch((0, I.sessionStopped)())
                }
            }

            function eo({
                target: e,
                listenerParams: t
            }) {
                e.removeEventListener.apply(e, t)
            }
            let ed = ["resize", "orientationchange"];

            function ec(e) {
                let {
                    ixSession: t,
                    ixData: a
                } = e.getState(), n = window.innerWidth;
                if (n !== t.viewportWidth) {
                    let {
                        mediaQueries: t
                    } = a;
                    e.dispatch((0, I.viewportWidthChanged)({
                        width: n,
                        mediaQueries: t
                    }))
                }
            }
            let el = (e, t) => (0, l.default)((0, s.default)(e, t), r.default),
                er = (e, t) => {
                    (0, f.default)(e, (e, a) => {
                        e.forEach((e, n) => {
                            t(e, a, a + v + n)
                        })
                    })
                },
                es = e => h({
                    config: {
                        target: e.target,
                        targets: e.targets
                    },
                    elementApi: T
                });

            function ef({
                store: e,
                actionListId: t,
                eventId: a
            }) {
                let {
                    ixData: n,
                    ixSession: i
                } = e.getState(), {
                    actionLists: o,
                    events: c
                } = n, l = c[a], r = o[t];
                if (r && r.useFirstGroupAsInitialState) {
                    let o = (0, d.default)(r, "actionItemGroups[0].actionItems", []);
                    if (!G((0, d.default)(l, "mediaQueries", n.mediaQueryKeys), i.mediaQueryKey)) return;
                    o.forEach(n => {
                        let {
                            config: i,
                            actionTypeId: o
                        } = n, d = h({
                            config: i ? .target ? .useEventTarget === !0 && i ? .target ? .objectId == null ? {
                                target: l.target,
                                targets: l.targets
                            } : i,
                            event: l,
                            elementApi: T
                        }), c = Y(o);
                        d.forEach(i => {
                            let d = c ? z(o) ? .(i, n) : null;
                            eI({
                                destination: C({
                                    element: i,
                                    actionItem: n,
                                    elementApi: T
                                }, d),
                                immediate: !0,
                                store: e,
                                element: i,
                                eventId: a,
                                actionItem: n,
                                actionListId: t,
                                pluginInstance: d
                            })
                        })
                    })
                }
            }

            function eu({
                store: e
            }) {
                let {
                    ixInstances: t
                } = e.getState();
                (0, f.default)(t, t => {
                    if (!t.continuous) {
                        let {
                            actionListId: a,
                            verbose: n
                        } = t;
                        eT(t, e), n && e.dispatch((0, I.actionListPlaybackChanged)({
                            actionListId: a,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function eE({
                store: e,
                eventId: t,
                eventTarget: a,
                eventStateKey: n,
                actionListId: i
            }) {
                let {
                    ixInstances: o,
                    ixSession: c
                } = e.getState(), l = c.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null;
                (0, f.default)(o, a => {
                    let o = (0, d.default)(a, "actionItem.config.target.boundaryMode"),
                        c = !n || a.eventStateKey === n;
                    if (a.actionListId === i && a.eventId === t && c) {
                        if (l && o && !T.elementContains(l, a.element)) return;
                        eT(a, e), a.verbose && e.dispatch((0, I.actionListPlaybackChanged)({
                            actionListId: i,
                            isPlaying: !1
                        }))
                    }
                })
            }

            function ep({
                store: e,
                eventId: t,
                eventTarget: a,
                eventStateKey: n,
                actionListId: i,
                groupIndex: o = 0,
                immediate: c,
                verbose: l
            }) {
                let {
                    ixData: r,
                    ixSession: s
                } = e.getState(), {
                    events: f
                } = r, u = f[t] || {}, {
                    mediaQueries: E = r.mediaQueryKeys
                } = u, {
                    actionItemGroups: p,
                    useFirstGroupAsInitialState: I
                } = (0, d.default)(r, `actionLists.${i}`, {});
                if (!p || !p.length) return !1;
                o >= p.length && (0, d.default)(u, "config.loop") && (o = 0), 0 === o && I && o++;
                let y = (0 === o || 1 === o && I) && O(u.action ? .actionTypeId) ? u.config.delay : void 0,
                    g = (0, d.default)(p, [o, "actionItems"], []);
                if (!g.length || !G(E, s.mediaQueryKey)) return !1;
                let m = s.hasBoundaryNodes && a ? T.getClosestElement(a, L) : null,
                    b = F(g),
                    v = !1;
                return g.forEach((d, r) => {
                    let {
                        config: s,
                        actionTypeId: f
                    } = d, E = Y(f), {
                        target: p
                    } = s;
                    p && h({
                        config: s,
                        event: u,
                        eventTarget: a,
                        elementRoot: p.boundaryMode ? m : null,
                        elementApi: T
                    }).forEach((s, u) => {
                        let p = E ? z(f) ? .(s, d) : null,
                            I = E ? j(f)(s, d) : null;
                        v = !0;
                        let g = k({
                                element: s,
                                actionItem: d
                            }),
                            m = C({
                                element: s,
                                actionItem: d,
                                elementApi: T
                            }, p);
                        eI({
                            store: e,
                            element: s,
                            actionItem: d,
                            eventId: t,
                            eventTarget: a,
                            eventStateKey: n,
                            actionListId: i,
                            groupIndex: o,
                            isCarrier: b === r && 0 === u,
                            computedStyle: g,
                            destination: m,
                            immediate: c,
                            verbose: l,
                            pluginInstance: p,
                            pluginDuration: I,
                            instanceDelay: y
                        })
                    })
                }), v
            }

            function eI(e) {
                let t, {
                        store: a,
                        computedStyle: n,
                        ...i
                    } = e,
                    {
                        element: o,
                        actionItem: d,
                        immediate: c,
                        pluginInstance: l,
                        continuous: r,
                        restingValue: s,
                        eventId: f
                    } = i,
                    u = M(),
                    {
                        ixElements: p,
                        ixSession: y,
                        ixData: g
                    } = a.getState(),
                    m = S(p, o),
                    {
                        refState: b
                    } = p[m] || {},
                    O = T.getRefType(o),
                    v = y.reducedMotion && E.ReducedMotionTypes[d.actionTypeId];
                if (v && r) switch (g.events[f] ? .eventTypeId) {
                    case E.EventTypeConsts.MOUSE_MOVE:
                    case E.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
                        t = s;
                        break;
                    default:
                        t = .5
                }
                let L = U(o, b, n, d, T, l);
                if (a.dispatch((0, I.instanceAdded)({
                        instanceId: u,
                        elementId: m,
                        origin: L,
                        refType: O,
                        skipMotion: v,
                        skipToValue: t,
                        ...i
                    })), ey(document.body, "ix2-animation-started", u), c) return void
                function(e, t) {
                    let {
                        ixParameters: a
                    } = e.getState();
                    e.dispatch((0, I.instanceStarted)(t, 0)), e.dispatch((0, I.animationFrameChanged)(performance.now(), a));
                    let {
                        ixInstances: n
                    } = e.getState();
                    eg(n[t], e)
                }(a, u);
                A({
                    store: a,
                    select: ({
                        ixInstances: e
                    }) => e[u],
                    onChange: eg
                }), r || a.dispatch((0, I.instanceStarted)(u, y.tick))
            }

            function eT(e, t) {
                ey(document.body, "ix2-animation-stopping", {
                    instanceId: e.id,
                    state: t.getState()
                });
                let {
                    elementId: a,
                    actionItem: n
                } = e, {
                    ixElements: i
                } = t.getState(), {
                    ref: o,
                    refType: d
                } = i[a] || {};
                d === _ && P(o, n, T), t.dispatch((0, I.instanceRemoved)(e.id))
            }

            function ey(e, t, a) {
                let n = document.createEvent("CustomEvent");
                n.initCustomEvent(t, !0, !0, a), e.dispatchEvent(n)
            }

            function eg(e, t) {
                let {
                    active: a,
                    continuous: n,
                    complete: i,
                    elementId: o,
                    actionItem: d,
                    actionTypeId: c,
                    renderType: l,
                    current: r,
                    groupIndex: s,
                    eventId: f,
                    eventTarget: u,
                    eventStateKey: E,
                    actionListId: p,
                    isCarrier: y,
                    styleProp: g,
                    verbose: m,
                    pluginInstance: b
                } = e, {
                    ixData: O,
                    ixSession: v
                } = t.getState(), {
                    events: L
                } = O, {
                    mediaQueries: N = O.mediaQueryKeys
                } = L && L[f] ? L[f] : {};
                if (G(N, v.mediaQueryKey) && (n || a || i)) {
                    if (r || l === R && i) {
                        t.dispatch((0, I.elementStateChanged)(o, c, r, d));
                        let {
                            ixElements: e
                        } = t.getState(), {
                            ref: a,
                            refType: n,
                            refState: i
                        } = e[o] || {}, s = i && i[c];
                        (n === _ || Y(c)) && V(a, i, s, f, d, g, T, l, b)
                    }
                    if (i) {
                        if (y) {
                            let e = ep({
                                store: t,
                                eventId: f,
                                eventTarget: u,
                                eventStateKey: E,
                                actionListId: p,
                                groupIndex: s + 1,
                                verbose: m
                            });
                            m && !e && t.dispatch((0, I.actionListPlaybackChanged)({
                                actionListId: p,
                                isPlaying: !1
                            }))
                        }
                        eT(e, t)
                    }
                }
            }
        },
        58955: function(e, t, a) {
            "use strict";
            let n;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return eE
                }
            });
            let i = f(a(85801)),
                o = f(a(24738)),
                d = f(a(43789)),
                c = a(7087),
                l = a(51970),
                r = a(13946),
                s = a(9468);

            function f(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                MOUSE_CLICK: u,
                MOUSE_SECOND_CLICK: E,
                MOUSE_DOWN: p,
                MOUSE_UP: I,
                MOUSE_OVER: T,
                MOUSE_OUT: y,
                DROPDOWN_CLOSE: g,
                DROPDOWN_OPEN: m,
                SLIDER_ACTIVE: b,
                SLIDER_INACTIVE: O,
                TAB_ACTIVE: v,
                TAB_INACTIVE: L,
                NAVBAR_CLOSE: _,
                NAVBAR_OPEN: R,
                MOUSE_MOVE: N,
                PAGE_SCROLL_DOWN: h,
                SCROLL_INTO_VIEW: S,
                SCROLL_OUT_OF_VIEW: C,
                PAGE_SCROLL_UP: A,
                SCROLLING_IN_VIEW: M,
                PAGE_FINISH: V,
                ECOMMERCE_CART_CLOSE: w,
                ECOMMERCE_CART_OPEN: F,
                PAGE_START: k,
                PAGE_SCROLL: U
            } = c.EventTypeConsts, x = "COMPONENT_ACTIVE", B = "COMPONENT_INACTIVE", {
                COLON_DELIMITER: D
            } = c.IX2EngineConstants, {
                getNamespacedParameterId: G
            } = s.IX2VanillaUtils, P = e => t => !!("object" == typeof t && e(t)) || t, W = P(({
                element: e,
                nativeEvent: t
            }) => e === t.target), X = P(({
                element: e,
                nativeEvent: t
            }) => e.contains(t.target)), H = (0, i.default)([W, X]), Q = (e, t) => {
                if (t) {
                    let {
                        ixData: a
                    } = e.getState(), {
                        events: n
                    } = a, i = n[t];
                    if (i && !ee[i.eventTypeId]) return i
                }
                return null
            }, Y = ({
                store: e,
                event: t
            }) => {
                let {
                    action: a
                } = t, {
                    autoStopEventId: n
                } = a.config;
                return !!Q(e, n)
            }, z = ({
                store: e,
                event: t,
                element: a,
                eventStateKey: n
            }, i) => {
                let {
                    action: d,
                    id: c
                } = t, {
                    actionListId: r,
                    autoStopEventId: s
                } = d.config, f = Q(e, s);
                return f && (0, l.stopActionGroup)({
                    store: e,
                    eventId: s,
                    eventTarget: a,
                    eventStateKey: s + D + n.split(D)[1],
                    actionListId: (0, o.default)(f, "action.config.actionListId")
                }), (0, l.stopActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: a,
                    eventStateKey: n,
                    actionListId: r
                }), (0, l.startActionGroup)({
                    store: e,
                    eventId: c,
                    eventTarget: a,
                    eventStateKey: n,
                    actionListId: r
                }), i
            }, j = (e, t) => (a, n) => !0 === e(a, n) ? t(a, n) : n, $ = {
                handler: j(H, z)
            }, K = { ...$,
                types: [x, B].join(" ")
            }, q = [{
                target: window,
                types: "resize orientationchange",
                throttle: !0
            }, {
                target: document,
                types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
                throttle: !0
            }], Z = "mouseover mouseout", J = {
                types: q
            }, ee = {
                PAGE_START: k,
                PAGE_FINISH: V
            }, et = (() => {
                let e = void 0 !== window.pageXOffset,
                    t = "CSS1Compat" === document.compatMode ? document.documentElement : document.body;
                return () => ({
                    scrollLeft: e ? window.pageXOffset : t.scrollLeft,
                    scrollTop: e ? window.pageYOffset : t.scrollTop,
                    stiffScrollTop: (0, d.default)(e ? window.pageYOffset : t.scrollTop, 0, t.scrollHeight - window.innerHeight),
                    scrollWidth: t.scrollWidth,
                    scrollHeight: t.scrollHeight,
                    clientWidth: t.clientWidth,
                    clientHeight: t.clientHeight,
                    innerWidth: window.innerWidth,
                    innerHeight: window.innerHeight
                })
            })(), ea = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top), en = ({
                element: e,
                nativeEvent: t
            }) => {
                let {
                    type: a,
                    target: n,
                    relatedTarget: i
                } = t, o = e.contains(n);
                if ("mouseover" === a && o) return !0;
                let d = e.contains(i);
                return "mouseout" === a && !!o && !!d
            }, ei = e => {
                let {
                    element: t,
                    event: {
                        config: a
                    }
                } = e, {
                    clientWidth: n,
                    clientHeight: i
                } = et(), o = a.scrollOffsetValue, d = "PX" === a.scrollOffsetUnit ? o : i * (o || 0) / 100;
                return ea(t.getBoundingClientRect(), {
                    left: 0,
                    top: d,
                    right: n,
                    bottom: i - d
                })
            }, eo = e => (t, a) => {
                let {
                    type: n
                } = t.nativeEvent, i = -1 !== [x, B].indexOf(n) ? n === x : a.isActive, o = { ...a,
                    isActive: i
                };
                return (!a || o.isActive !== a.isActive) && e(t, o) || o
            }, ed = e => (t, a) => {
                let n = {
                    elementHovered: en(t)
                };
                return (a ? n.elementHovered !== a.elementHovered : n.elementHovered) && e(t, n) || n
            }, ec = e => (t, a = {}) => {
                let n, i, {
                        stiffScrollTop: o,
                        scrollHeight: d,
                        innerHeight: c
                    } = et(),
                    {
                        event: {
                            config: l,
                            eventTypeId: r
                        }
                    } = t,
                    {
                        scrollOffsetValue: s,
                        scrollOffsetUnit: f
                    } = l,
                    u = d - c,
                    E = Number((o / u).toFixed(2));
                if (a && a.percentTop === E) return a;
                let p = ("PX" === f ? s : c * (s || 0) / 100) / u,
                    I = 0;
                a && (n = E > a.percentTop, I = (i = a.scrollingDown !== n) ? E : a.anchorTop);
                let T = r === h ? E >= I + p : E <= I - p,
                    y = { ...a,
                        percentTop: E,
                        inBounds: T,
                        anchorTop: I,
                        scrollingDown: n
                    };
                return a && T && (i || y.inBounds !== a.inBounds) && e(t, y) || y
            }, el = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom, er = e => (t, a = {
                clickCount: 0
            }) => {
                let n = {
                    clickCount: a.clickCount % 2 + 1
                };
                return n.clickCount !== a.clickCount && e(t, n) || n
            }, es = (e = !0) => ({ ...K,
                handler: j(e ? H : W, eo((e, t) => t.isActive ? $.handler(e, t) : t))
            }), ef = (e = !0) => ({ ...K,
                handler: j(e ? H : W, eo((e, t) => t.isActive ? t : $.handler(e, t)))
            }), eu = { ...J,
                handler: (n = (e, t) => {
                    let {
                        elementVisible: a
                    } = t, {
                        event: n,
                        store: i
                    } = e, {
                        ixData: o
                    } = i.getState(), {
                        events: d
                    } = o;
                    return !d[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === S === a ? (z(e), { ...t,
                        triggered: !0
                    }) : t
                }, (e, t) => {
                    let a = { ...t,
                        elementVisible: ei(e)
                    };
                    return (t ? a.elementVisible !== t.elementVisible : a.elementVisible) && n(e, a) || a
                })
            }, eE = {
                [b]: es(),
                [O]: ef(),
                [m]: es(),
                [g]: ef(),
                [R]: es(!1),
                [_]: ef(!1),
                [v]: es(),
                [L]: ef(),
                [F]: {
                    types: "ecommerce-cart-open",
                    handler: j(H, z)
                },
                [w]: {
                    types: "ecommerce-cart-close",
                    handler: j(H, z)
                },
                [u]: {
                    types: "click",
                    handler: j(H, er((e, {
                        clickCount: t
                    }) => {
                        Y(e) ? 1 === t && z(e) : z(e)
                    }))
                },
                [E]: {
                    types: "click",
                    handler: j(H, er((e, {
                        clickCount: t
                    }) => {
                        2 === t && z(e)
                    }))
                },
                [p]: { ...$,
                    types: "mousedown"
                },
                [I]: { ...$,
                    types: "mouseup"
                },
                [T]: {
                    types: Z,
                    handler: j(H, ed((e, t) => {
                        t.elementHovered && z(e)
                    }))
                },
                [y]: {
                    types: Z,
                    handler: j(H, ed((e, t) => {
                        t.elementHovered || z(e)
                    }))
                },
                [N]: {
                    types: "mousemove mouseout scroll",
                    handler: ({
                        store: e,
                        element: t,
                        eventConfig: a,
                        nativeEvent: n,
                        eventStateKey: i
                    }, o = {
                        clientX: 0,
                        clientY: 0,
                        pageX: 0,
                        pageY: 0
                    }) => {
                        let {
                            basedOn: d,
                            selectedAxis: l,
                            continuousParameterGroupId: s,
                            reverse: f,
                            restingState: u = 0
                        } = a, {
                            clientX: E = o.clientX,
                            clientY: p = o.clientY,
                            pageX: I = o.pageX,
                            pageY: T = o.pageY
                        } = n, y = "X_AXIS" === l, g = "mouseout" === n.type, m = u / 100, b = s, O = !1;
                        switch (d) {
                            case c.EventBasedOn.VIEWPORT:
                                m = y ? Math.min(E, window.innerWidth) / window.innerWidth : Math.min(p, window.innerHeight) / window.innerHeight;
                                break;
                            case c.EventBasedOn.PAGE:
                                {
                                    let {
                                        scrollLeft: e,
                                        scrollTop: t,
                                        scrollWidth: a,
                                        scrollHeight: n
                                    } = et();m = y ? Math.min(e + I, a) / a : Math.min(t + T, n) / n;
                                    break
                                }
                            case c.EventBasedOn.ELEMENT:
                            default:
                                {
                                    b = G(i, s);
                                    let e = 0 === n.type.indexOf("mouse");
                                    if (e && !0 !== H({
                                            element: t,
                                            nativeEvent: n
                                        })) break;
                                    let a = t.getBoundingClientRect(),
                                        {
                                            left: o,
                                            top: d,
                                            width: c,
                                            height: l
                                        } = a;
                                    if (!e && !el({
                                            left: E,
                                            top: p
                                        }, a)) break;O = !0,
                                    m = y ? (E - o) / c : (p - d) / l
                                }
                        }
                        return g && (m > .95 || m < .05) && (m = Math.round(m)), (d !== c.EventBasedOn.ELEMENT || O || O !== o.elementHovered) && (m = f ? 1 - m : m, e.dispatch((0, r.parameterChanged)(b, m))), {
                            elementHovered: O,
                            clientX: E,
                            clientY: p,
                            pageX: I,
                            pageY: T
                        }
                    }
                },
                [U]: {
                    types: q,
                    handler: ({
                        store: e,
                        eventConfig: t
                    }) => {
                        let {
                            continuousParameterGroupId: a,
                            reverse: n
                        } = t, {
                            scrollTop: i,
                            scrollHeight: o,
                            clientHeight: d
                        } = et(), c = i / (o - d);
                        c = n ? 1 - c : c, e.dispatch((0, r.parameterChanged)(a, c))
                    }
                },
                [M]: {
                    types: q,
                    handler: ({
                        element: e,
                        store: t,
                        eventConfig: a,
                        eventStateKey: n
                    }, i = {
                        scrollPercent: 0
                    }) => {
                        let {
                            scrollLeft: o,
                            scrollTop: d,
                            scrollWidth: l,
                            scrollHeight: s,
                            clientHeight: f
                        } = et(), {
                            basedOn: u,
                            selectedAxis: E,
                            continuousParameterGroupId: p,
                            startsEntering: I,
                            startsExiting: T,
                            addEndOffset: y,
                            addStartOffset: g,
                            addOffsetValue: m = 0,
                            endOffsetValue: b = 0
                        } = a;
                        if (u === c.EventBasedOn.VIEWPORT) {
                            let e = "X_AXIS" === E ? o / l : d / s;
                            return e !== i.scrollPercent && t.dispatch((0, r.parameterChanged)(p, e)), {
                                scrollPercent: e
                            }
                        } {
                            let a = G(n, p),
                                o = e.getBoundingClientRect(),
                                d = (g ? m : 0) / 100,
                                c = (y ? b : 0) / 100;
                            d = I ? d : 1 - d, c = T ? c : 1 - c;
                            let l = o.top + Math.min(o.height * d, f),
                                u = Math.min(f + (o.top + o.height * c - l), s),
                                E = Math.min(Math.max(0, f - l), u) / u;
                            return E !== i.scrollPercent && t.dispatch((0, r.parameterChanged)(a, E)), {
                                scrollPercent: E
                            }
                        }
                    }
                },
                [S]: eu,
                [C]: eu,
                [h]: { ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown && z(e)
                    })
                },
                [A]: { ...J,
                    handler: ec((e, t) => {
                        t.scrollingDown || z(e)
                    })
                },
                [V]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: j(W, (e, t) => {
                        let a = {
                            finished: "complete" === document.readyState
                        };
                        return a.finished && !(t && t.finshed) && z(e), a
                    })
                },
                [k]: {
                    types: "readystatechange IX2_PAGE_UPDATE",
                    handler: j(W, (e, t) => (t || z(e), {
                        started: !0
                    }))
                }
            }
        },
        34609: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixData", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: n
            } = a(7087).IX2EngineActionTypes, i = (e = Object.freeze({}), t) => t.type === n ? t.payload.ixData || Object.freeze({}) : e
        },
        7718: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixInstances", {
                enumerable: !0,
                get: function() {
                    return O
                }
            });
            let n = a(7087),
                i = a(9468),
                o = a(81185),
                {
                    IX2_RAW_DATA_IMPORTED: d,
                    IX2_SESSION_STOPPED: c,
                    IX2_INSTANCE_ADDED: l,
                    IX2_INSTANCE_STARTED: r,
                    IX2_INSTANCE_REMOVED: s,
                    IX2_ANIMATION_FRAME_CHANGED: f
                } = n.IX2EngineActionTypes,
                {
                    optimizeFloat: u,
                    applyEasing: E,
                    createBezierEasing: p
                } = i.IX2EasingUtils,
                {
                    RENDER_GENERAL: I
                } = n.IX2EngineConstants,
                {
                    getItemConfigByKey: T,
                    getRenderType: y,
                    getStyleProp: g
                } = i.IX2VanillaUtils,
                m = (e, t) => {
                    let a, n, i, d, {
                            position: c,
                            parameterId: l,
                            actionGroups: r,
                            destinationKeys: s,
                            smoothing: f,
                            restingValue: p,
                            actionTypeId: I,
                            customEasingFn: y,
                            skipMotion: g,
                            skipToValue: m
                        } = e,
                        {
                            parameters: b
                        } = t.payload,
                        O = Math.max(1 - f, .01),
                        v = b[l];
                    null == v && (O = 1, v = p);
                    let L = u((Math.max(v, 0) || 0) - c),
                        _ = g ? m : u(c + L * O),
                        R = 100 * _;
                    if (_ === c && e.current) return e;
                    for (let e = 0, {
                            length: t
                        } = r; e < t; e++) {
                        let {
                            keyframe: t,
                            actionItems: o
                        } = r[e];
                        if (0 === e && (a = o[0]), R >= t) {
                            a = o[0];
                            let c = r[e + 1],
                                l = c && R !== t;
                            n = l ? c.actionItems[0] : null, l && (i = t / 100, d = (c.keyframe - t) / 100)
                        }
                    }
                    let N = {};
                    if (a && !n)
                        for (let e = 0, {
                                length: t
                            } = s; e < t; e++) {
                            let t = s[e];
                            N[t] = T(I, t, a.config)
                        } else if (a && n && void 0 !== i && void 0 !== d) {
                            let e = (_ - i) / d,
                                t = E(a.config.easing, e, y);
                            for (let e = 0, {
                                    length: i
                                } = s; e < i; e++) {
                                let i = s[e],
                                    o = T(I, i, a.config),
                                    d = (T(I, i, n.config) - o) * t + o;
                                N[i] = d
                            }
                        }
                    return (0, o.merge)(e, {
                        position: _,
                        current: N
                    })
                },
                b = (e, t) => {
                    let {
                        active: a,
                        origin: n,
                        start: i,
                        immediate: d,
                        renderType: c,
                        verbose: l,
                        actionItem: r,
                        destination: s,
                        destinationKeys: f,
                        pluginDuration: p,
                        instanceDelay: T,
                        customEasingFn: y,
                        skipMotion: g
                    } = e, m = r.config.easing, {
                        duration: b,
                        delay: O
                    } = r.config;
                    null != p && (b = p), O = null != T ? T : O, c === I ? b = 0 : (d || g) && (b = O = 0);
                    let {
                        now: v
                    } = t.payload;
                    if (a && n) {
                        let t = v - (i + O);
                        if (l) {
                            let t = b + O,
                                a = u(Math.min(Math.max(0, (v - i) / t), 1));
                            e = (0, o.set)(e, "verboseTimeElapsed", t * a)
                        }
                        if (t < 0) return e;
                        let a = u(Math.min(Math.max(0, t / b), 1)),
                            d = E(m, a, y),
                            c = {},
                            r = null;
                        return f.length && (r = f.reduce((e, t) => {
                            let a = s[t],
                                i = parseFloat(n[t]) || 0,
                                o = parseFloat(a) - i;
                            return e[t] = o * d + i, e
                        }, {})), c.current = r, c.position = a, 1 === a && (c.active = !1, c.complete = !0), (0, o.merge)(e, c)
                    }
                    return e
                },
                O = (e = Object.freeze({}), t) => {
                    switch (t.type) {
                        case d:
                            return t.payload.ixInstances || Object.freeze({});
                        case c:
                            return Object.freeze({});
                        case l:
                            {
                                let {
                                    instanceId: a,
                                    elementId: n,
                                    actionItem: i,
                                    eventId: d,
                                    eventTarget: c,
                                    eventStateKey: l,
                                    actionListId: r,
                                    groupIndex: s,
                                    isCarrier: f,
                                    origin: u,
                                    destination: E,
                                    immediate: I,
                                    verbose: T,
                                    continuous: m,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: v,
                                    restingValue: L,
                                    pluginInstance: _,
                                    pluginDuration: R,
                                    instanceDelay: N,
                                    skipMotion: h,
                                    skipToValue: S
                                } = t.payload,
                                {
                                    actionTypeId: C
                                } = i,
                                A = y(C),
                                M = g(A, C),
                                V = Object.keys(E).filter(e => null != E[e] && "string" != typeof E[e]),
                                {
                                    easing: w
                                } = i.config;
                                return (0, o.set)(e, a, {
                                    id: a,
                                    elementId: n,
                                    active: !1,
                                    position: 0,
                                    start: 0,
                                    origin: u,
                                    destination: E,
                                    destinationKeys: V,
                                    immediate: I,
                                    verbose: T,
                                    current: null,
                                    actionItem: i,
                                    actionTypeId: C,
                                    eventId: d,
                                    eventTarget: c,
                                    eventStateKey: l,
                                    actionListId: r,
                                    groupIndex: s,
                                    renderType: A,
                                    isCarrier: f,
                                    styleProp: M,
                                    continuous: m,
                                    parameterId: b,
                                    actionGroups: O,
                                    smoothing: v,
                                    restingValue: L,
                                    pluginInstance: _,
                                    pluginDuration: R,
                                    instanceDelay: N,
                                    skipMotion: h,
                                    skipToValue: S,
                                    customEasingFn: Array.isArray(w) && 4 === w.length ? p(w) : void 0
                                })
                            }
                        case r:
                            {
                                let {
                                    instanceId: a,
                                    time: n
                                } = t.payload;
                                return (0, o.mergeIn)(e, [a], {
                                    active: !0,
                                    complete: !1,
                                    start: n
                                })
                            }
                        case s:
                            {
                                let {
                                    instanceId: a
                                } = t.payload;
                                if (!e[a]) return e;
                                let n = {},
                                    i = Object.keys(e),
                                    {
                                        length: o
                                    } = i;
                                for (let t = 0; t < o; t++) {
                                    let o = i[t];
                                    o !== a && (n[o] = e[o])
                                }
                                return n
                            }
                        case f:
                            {
                                let a = e,
                                    n = Object.keys(e),
                                    {
                                        length: i
                                    } = n;
                                for (let d = 0; d < i; d++) {
                                    let i = n[d],
                                        c = e[i],
                                        l = c.continuous ? m : b;
                                    a = (0, o.set)(a, i, l(c, t))
                                }
                                return a
                            }
                        default:
                            return e
                    }
                }
        },
        71540: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixParameters", {
                enumerable: !0,
                get: function() {
                    return d
                }
            });
            let {
                IX2_RAW_DATA_IMPORTED: n,
                IX2_SESSION_STOPPED: i,
                IX2_PARAMETER_CHANGED: o
            } = a(7087).IX2EngineActionTypes, d = (e = {}, t) => {
                switch (t.type) {
                    case n:
                        return t.payload.ixParameters || {};
                    case i:
                        return {};
                    case o:
                        {
                            let {
                                key: a,
                                value: n
                            } = t.payload;
                            return e[a] = n,
                            e
                        }
                    default:
                        return e
                }
            }
        },
        17243: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let n = a(19516),
                i = a(34609),
                o = a(30628),
                d = a(25862),
                c = a(9468),
                l = a(7718),
                r = a(71540),
                {
                    ixElements: s
                } = c.IX2ElementsReducer,
                f = (0, n.combineReducers)({
                    ixData: i.ixData,
                    ixRequest: o.ixRequest,
                    ixSession: d.ixSession,
                    ixElements: s,
                    ixInstances: l.ixInstances,
                    ixParameters: r.ixParameters
                })
        },
        30628: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixRequest", {
                enumerable: !0,
                get: function() {
                    return f
                }
            });
            let n = a(7087),
                i = a(81185),
                {
                    IX2_PREVIEW_REQUESTED: o,
                    IX2_PLAYBACK_REQUESTED: d,
                    IX2_STOP_REQUESTED: c,
                    IX2_CLEAR_REQUESTED: l
                } = n.IX2EngineActionTypes,
                r = {
                    preview: {},
                    playback: {},
                    stop: {},
                    clear: {}
                },
                s = Object.create(null, {
                    [o]: {
                        value: "preview"
                    },
                    [d]: {
                        value: "playback"
                    },
                    [c]: {
                        value: "stop"
                    },
                    [l]: {
                        value: "clear"
                    }
                }),
                f = (e = r, t) => {
                    if (t.type in s) {
                        let a = [s[t.type]];
                        return (0, i.setIn)(e, [a], { ...t.payload
                        })
                    }
                    return e
                }
        },
        25862: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ixSession", {
                enumerable: !0,
                get: function() {
                    return T
                }
            });
            let n = a(7087),
                i = a(81185),
                {
                    IX2_SESSION_INITIALIZED: o,
                    IX2_SESSION_STARTED: d,
                    IX2_TEST_FRAME_RENDERED: c,
                    IX2_SESSION_STOPPED: l,
                    IX2_EVENT_LISTENER_ADDED: r,
                    IX2_EVENT_STATE_CHANGED: s,
                    IX2_ANIMATION_FRAME_CHANGED: f,
                    IX2_ACTION_LIST_PLAYBACK_CHANGED: u,
                    IX2_VIEWPORT_WIDTH_CHANGED: E,
                    IX2_MEDIA_QUERIES_DEFINED: p
                } = n.IX2EngineActionTypes,
                I = {
                    active: !1,
                    tick: 0,
                    eventListeners: [],
                    eventState: {},
                    playbackState: {},
                    viewportWidth: 0,
                    mediaQueryKey: null,
                    hasBoundaryNodes: !1,
                    hasDefinedMediaQueries: !1,
                    reducedMotion: !1
                },
                T = (e = I, t) => {
                    switch (t.type) {
                        case o:
                            {
                                let {
                                    hasBoundaryNodes: a,
                                    reducedMotion: n
                                } = t.payload;
                                return (0, i.merge)(e, {
                                    hasBoundaryNodes: a,
                                    reducedMotion: n
                                })
                            }
                        case d:
                            return (0, i.set)(e, "active", !0);
                        case c:
                            {
                                let {
                                    payload: {
                                        step: a = 20
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", e.tick + a)
                            }
                        case l:
                            return I;
                        case f:
                            {
                                let {
                                    payload: {
                                        now: a
                                    }
                                } = t;
                                return (0, i.set)(e, "tick", a)
                            }
                        case r:
                            {
                                let a = (0, i.addLast)(e.eventListeners, t.payload);
                                return (0, i.set)(e, "eventListeners", a)
                            }
                        case s:
                            {
                                let {
                                    stateKey: a,
                                    newState: n
                                } = t.payload;
                                return (0, i.setIn)(e, ["eventState", a], n)
                            }
                        case u:
                            {
                                let {
                                    actionListId: a,
                                    isPlaying: n
                                } = t.payload;
                                return (0, i.setIn)(e, ["playbackState", a], n)
                            }
                        case E:
                            {
                                let {
                                    width: a,
                                    mediaQueries: n
                                } = t.payload,
                                o = n.length,
                                d = null;
                                for (let e = 0; e < o; e++) {
                                    let {
                                        key: t,
                                        min: i,
                                        max: o
                                    } = n[e];
                                    if (a >= i && a <= o) {
                                        d = t;
                                        break
                                    }
                                }
                                return (0, i.merge)(e, {
                                    viewportWidth: a,
                                    mediaQueryKey: d
                                })
                            }
                        case p:
                            return (0, i.set)(e, "hasDefinedMediaQueries", !0);
                        default:
                            return e
                    }
                }
        },
        97377: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return s
                },
                createPluginInstance: function() {
                    return l
                },
                getPluginConfig: function() {
                    return i
                },
                getPluginDestination: function() {
                    return c
                },
                getPluginDuration: function() {
                    return o
                },
                getPluginOrigin: function() {
                    return d
                },
                renderPlugin: function() {
                    return r
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = e => e.value,
                o = (e, t) => {
                    if ("auto" !== t.config.duration) return null;
                    let a = parseFloat(e.getAttribute("data-duration"));
                    return a > 0 ? 1e3 * a : 1e3 * parseFloat(e.getAttribute("data-default-duration"))
                },
                d = e => e || {
                    value: 0
                },
                c = e => ({
                    value: e.value
                }),
                l = e => {
                    let t = window.Webflow.require("lottie");
                    if (!t) return null;
                    let a = t.createInstance(e);
                    return a.stop(), a.setSubframe(!0), a
                },
                r = (e, t, a) => {
                    if (!e) return;
                    let n = t[a.actionTypeId].value / 100;
                    e.goToFrame(e.frames * n)
                },
                s = e => {
                    let t = window.Webflow.require("lottie");
                    t && t.createInstance(e).stop()
                }
        },
        92570: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return u
                },
                getPluginConfig: function() {
                    return l
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return r
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return E
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "--wf-rive-fit",
                o = "--wf-rive-alignment",
                d = e => document.querySelector(`[data-w-id="${e}"]`),
                c = () => window.Webflow.require("rive"),
                l = (e, t) => e.value.inputs[t],
                r = () => null,
                s = (e, t) => {
                    if (e) return e;
                    let a = {},
                        {
                            inputs: n = {}
                        } = t.config.value;
                    for (let e in n) null == n[e] && (a[e] = 0);
                    return a
                },
                f = e => e.value.inputs ? ? {},
                u = (e, t) => {
                    if ((t.config ? .target ? .selectorGuids || []).length > 0) return e;
                    let a = t ? .config ? .target ? .pluginElement;
                    return a ? d(a) : null
                },
                E = (e, {
                    PLUGIN_RIVE: t
                }, a) => {
                    let n = c();
                    if (!n) return;
                    let d = n.getInstance(e),
                        l = n.rive.StateMachineInputType,
                        {
                            name: r,
                            inputs: s = {}
                        } = a.config.value || {};

                    function f(e) {
                        if (e.loaded) a();
                        else {
                            let t = () => {
                                a(), e ? .off("load", t)
                            };
                            e ? .on("load", t)
                        }

                        function a() {
                            let a = e.stateMachineInputs(r);
                            if (null != a) {
                                if (e.isPlaying || e.play(r, !1), i in s || o in s) {
                                    let t = e.layout,
                                        a = s[i] ? ? t.fit,
                                        n = s[o] ? ? t.alignment;
                                    (a !== t.fit || n !== t.alignment) && (e.layout = t.copyWith({
                                        fit: a,
                                        alignment: n
                                    }))
                                }
                                for (let e in s) {
                                    if (e === i || e === o) continue;
                                    let n = a.find(t => t.name === e);
                                    if (null != n) switch (n.type) {
                                        case l.Boolean:
                                            null != s[e] && (n.value = !!s[e]);
                                            break;
                                        case l.Number:
                                            {
                                                let a = t[e];null != a && (n.value = a);
                                                break
                                            }
                                        case l.Trigger:
                                            s[e] && n.fire()
                                    }
                                }
                            }
                        }
                    }
                    d ? .rive ? f(d.rive) : n.setLoadHandler(e, f)
                },
                p = (e, t) => null
        },
        22866: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                clearPlugin: function() {
                    return p
                },
                createPluginInstance: function() {
                    return u
                },
                getPluginConfig: function() {
                    return c
                },
                getPluginDestination: function() {
                    return f
                },
                getPluginDuration: function() {
                    return l
                },
                getPluginOrigin: function() {
                    return s
                },
                renderPlugin: function() {
                    return E
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = e => document.querySelector(`[data-w-id="${e}"]`),
                o = () => window.Webflow.require("spline"),
                d = (e, t) => e.filter(e => !t.includes(e)),
                c = (e, t) => e.value[t],
                l = () => null,
                r = Object.freeze({
                    positionX: 0,
                    positionY: 0,
                    positionZ: 0,
                    rotationX: 0,
                    rotationY: 0,
                    rotationZ: 0,
                    scaleX: 1,
                    scaleY: 1,
                    scaleZ: 1
                }),
                s = (e, t) => {
                    let a = Object.keys(t.config.value);
                    if (e) {
                        let t = d(a, Object.keys(e));
                        return t.length ? t.reduce((e, t) => (e[t] = r[t], e), e) : e
                    }
                    return a.reduce((e, t) => (e[t] = r[t], e), {})
                },
                f = e => e.value,
                u = (e, t) => {
                    let a = t ? .config ? .target ? .pluginElement;
                    return a ? i(a) : null
                },
                E = (e, t, a) => {
                    let n = o();
                    if (!n) return;
                    let i = n.getInstance(e),
                        d = a.config.target.objectId,
                        c = e => {
                            if (!e) throw Error("Invalid spline app passed to renderSpline");
                            let a = d && e.findObjectById(d);
                            if (!a) return;
                            let {
                                PLUGIN_SPLINE: n
                            } = t;
                            null != n.positionX && (a.position.x = n.positionX), null != n.positionY && (a.position.y = n.positionY), null != n.positionZ && (a.position.z = n.positionZ), null != n.rotationX && (a.rotation.x = n.rotationX), null != n.rotationY && (a.rotation.y = n.rotationY), null != n.rotationZ && (a.rotation.z = n.rotationZ), null != n.scaleX && (a.scale.x = n.scaleX), null != n.scaleY && (a.scale.y = n.scaleY), null != n.scaleZ && (a.scale.z = n.scaleZ)
                        };
                    i ? c(i.spline) : n.setLoadHandler(e, c)
                },
                p = () => null
        },
        11407: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return E
                },
                createPluginInstance: function() {
                    return s
                },
                getPluginConfig: function() {
                    return d
                },
                getPluginDestination: function() {
                    return r
                },
                getPluginDuration: function() {
                    return c
                },
                getPluginOrigin: function() {
                    return l
                },
                renderPlugin: function() {
                    return u
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(40380),
                d = (e, t) => e.value[t],
                c = () => null,
                l = (e, t) => {
                    if (e) return e;
                    let a = t.config.value,
                        n = t.config.target.objectId,
                        i = getComputedStyle(document.documentElement).getPropertyValue(n);
                    return null != a.size ? {
                        size: parseInt(i, 10)
                    } : "%" === a.unit || "-" === a.unit ? {
                        size: parseFloat(i)
                    } : null != a.red && null != a.green && null != a.blue ? (0, o.normalizeColor)(i) : void 0
                },
                r = e => e.value,
                s = () => null,
                f = {
                    color: {
                        match: ({
                            red: e,
                            green: t,
                            blue: a,
                            alpha: n
                        }) => [e, t, a, n].every(e => null != e),
                        getValue: ({
                            red: e,
                            green: t,
                            blue: a,
                            alpha: n
                        }) => `rgba(${e}, ${t}, ${a}, ${n})`
                    },
                    size: {
                        match: ({
                            size: e
                        }) => null != e,
                        getValue: ({
                            size: e
                        }, t) => "-" === t ? e : `${e}${t}`
                    }
                },
                u = (e, t, a) => {
                    let {
                        target: {
                            objectId: n
                        },
                        value: {
                            unit: i
                        }
                    } = a.config, o = t.PLUGIN_VARIABLE, d = Object.values(f).find(e => e.match(o, i));
                    d && document.documentElement.style.setProperty(n, d.getValue(o, i))
                },
                E = (e, t) => {
                    let a = t.config.target.objectId;
                    document.documentElement.style.removeProperty(a)
                }
        },
        63690: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "pluginMethodMap", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let n = a(7087),
                i = r(a(97377)),
                o = r(a(22866)),
                d = r(a(92570)),
                c = r(a(11407));

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (l = function(e) {
                    return e ? a : t
                })(e)
            }

            function r(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = l(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                    }
                return n.default = e, a && a.set(e, n), n
            }
            let s = new Map([
                [n.ActionTypeConsts.PLUGIN_LOTTIE, { ...i
                }],
                [n.ActionTypeConsts.PLUGIN_SPLINE, { ...o
                }],
                [n.ActionTypeConsts.PLUGIN_RIVE, { ...d
                }],
                [n.ActionTypeConsts.PLUGIN_VARIABLE, { ...c
                }]
            ])
        },
        48023: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                IX2_ACTION_LIST_PLAYBACK_CHANGED: function() {
                    return b
                },
                IX2_ANIMATION_FRAME_CHANGED: function() {
                    return p
                },
                IX2_CLEAR_REQUESTED: function() {
                    return f
                },
                IX2_ELEMENT_STATE_CHANGED: function() {
                    return m
                },
                IX2_EVENT_LISTENER_ADDED: function() {
                    return u
                },
                IX2_EVENT_STATE_CHANGED: function() {
                    return E
                },
                IX2_INSTANCE_ADDED: function() {
                    return T
                },
                IX2_INSTANCE_REMOVED: function() {
                    return g
                },
                IX2_INSTANCE_STARTED: function() {
                    return y
                },
                IX2_MEDIA_QUERIES_DEFINED: function() {
                    return v
                },
                IX2_PARAMETER_CHANGED: function() {
                    return I
                },
                IX2_PLAYBACK_REQUESTED: function() {
                    return r
                },
                IX2_PREVIEW_REQUESTED: function() {
                    return l
                },
                IX2_RAW_DATA_IMPORTED: function() {
                    return i
                },
                IX2_SESSION_INITIALIZED: function() {
                    return o
                },
                IX2_SESSION_STARTED: function() {
                    return d
                },
                IX2_SESSION_STOPPED: function() {
                    return c
                },
                IX2_STOP_REQUESTED: function() {
                    return s
                },
                IX2_TEST_FRAME_RENDERED: function() {
                    return L
                },
                IX2_VIEWPORT_WIDTH_CHANGED: function() {
                    return O
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "IX2_RAW_DATA_IMPORTED",
                o = "IX2_SESSION_INITIALIZED",
                d = "IX2_SESSION_STARTED",
                c = "IX2_SESSION_STOPPED",
                l = "IX2_PREVIEW_REQUESTED",
                r = "IX2_PLAYBACK_REQUESTED",
                s = "IX2_STOP_REQUESTED",
                f = "IX2_CLEAR_REQUESTED",
                u = "IX2_EVENT_LISTENER_ADDED",
                E = "IX2_EVENT_STATE_CHANGED",
                p = "IX2_ANIMATION_FRAME_CHANGED",
                I = "IX2_PARAMETER_CHANGED",
                T = "IX2_INSTANCE_ADDED",
                y = "IX2_INSTANCE_STARTED",
                g = "IX2_INSTANCE_REMOVED",
                m = "IX2_ELEMENT_STATE_CHANGED",
                b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
                O = "IX2_VIEWPORT_WIDTH_CHANGED",
                v = "IX2_MEDIA_QUERIES_DEFINED",
                L = "IX2_TEST_FRAME_RENDERED"
        },
        52686: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ABSTRACT_NODE: function() {
                    return et
                },
                AUTO: function() {
                    return H
                },
                BACKGROUND: function() {
                    return B
                },
                BACKGROUND_COLOR: function() {
                    return x
                },
                BAR_DELIMITER: function() {
                    return z
                },
                BORDER_COLOR: function() {
                    return D
                },
                BOUNDARY_SELECTOR: function() {
                    return l
                },
                CHILDREN: function() {
                    return j
                },
                COLON_DELIMITER: function() {
                    return Y
                },
                COLOR: function() {
                    return G
                },
                COMMA_DELIMITER: function() {
                    return Q
                },
                CONFIG_UNIT: function() {
                    return T
                },
                CONFIG_VALUE: function() {
                    return u
                },
                CONFIG_X_UNIT: function() {
                    return E
                },
                CONFIG_X_VALUE: function() {
                    return r
                },
                CONFIG_Y_UNIT: function() {
                    return p
                },
                CONFIG_Y_VALUE: function() {
                    return s
                },
                CONFIG_Z_UNIT: function() {
                    return I
                },
                CONFIG_Z_VALUE: function() {
                    return f
                },
                DISPLAY: function() {
                    return P
                },
                FILTER: function() {
                    return w
                },
                FLEX: function() {
                    return W
                },
                FONT_VARIATION_SETTINGS: function() {
                    return F
                },
                HEIGHT: function() {
                    return U
                },
                HTML_ELEMENT: function() {
                    return J
                },
                IMMEDIATE_CHILDREN: function() {
                    return $
                },
                IX2_ID_DELIMITER: function() {
                    return i
                },
                OPACITY: function() {
                    return V
                },
                PARENT: function() {
                    return q
                },
                PLAIN_OBJECT: function() {
                    return ee
                },
                PRESERVE_3D: function() {
                    return Z
                },
                RENDER_GENERAL: function() {
                    return en
                },
                RENDER_PLUGIN: function() {
                    return eo
                },
                RENDER_STYLE: function() {
                    return ei
                },
                RENDER_TRANSFORM: function() {
                    return ea
                },
                ROTATE_X: function() {
                    return N
                },
                ROTATE_Y: function() {
                    return h
                },
                ROTATE_Z: function() {
                    return S
                },
                SCALE_3D: function() {
                    return R
                },
                SCALE_X: function() {
                    return v
                },
                SCALE_Y: function() {
                    return L
                },
                SCALE_Z: function() {
                    return _
                },
                SIBLINGS: function() {
                    return K
                },
                SKEW: function() {
                    return C
                },
                SKEW_X: function() {
                    return A
                },
                SKEW_Y: function() {
                    return M
                },
                TRANSFORM: function() {
                    return y
                },
                TRANSLATE_3D: function() {
                    return O
                },
                TRANSLATE_X: function() {
                    return g
                },
                TRANSLATE_Y: function() {
                    return m
                },
                TRANSLATE_Z: function() {
                    return b
                },
                WF_PAGE: function() {
                    return o
                },
                WIDTH: function() {
                    return k
                },
                WILL_CHANGE: function() {
                    return X
                },
                W_MOD_IX: function() {
                    return c
                },
                W_MOD_JS: function() {
                    return d
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = "|",
                o = "data-wf-page",
                d = "w-mod-js",
                c = "w-mod-ix",
                l = ".w-dyn-item",
                r = "xValue",
                s = "yValue",
                f = "zValue",
                u = "value",
                E = "xUnit",
                p = "yUnit",
                I = "zUnit",
                T = "unit",
                y = "transform",
                g = "translateX",
                m = "translateY",
                b = "translateZ",
                O = "translate3d",
                v = "scaleX",
                L = "scaleY",
                _ = "scaleZ",
                R = "scale3d",
                N = "rotateX",
                h = "rotateY",
                S = "rotateZ",
                C = "skew",
                A = "skewX",
                M = "skewY",
                V = "opacity",
                w = "filter",
                F = "font-variation-settings",
                k = "width",
                U = "height",
                x = "backgroundColor",
                B = "background",
                D = "borderColor",
                G = "color",
                P = "display",
                W = "flex",
                X = "willChange",
                H = "AUTO",
                Q = ",",
                Y = ":",
                z = "|",
                j = "CHILDREN",
                $ = "IMMEDIATE_CHILDREN",
                K = "SIBLINGS",
                q = "PARENT",
                Z = "preserve-3d",
                J = "HTML_ELEMENT",
                ee = "PLAIN_OBJECT",
                et = "ABSTRACT_NODE",
                ea = "RENDER_TRANSFORM",
                en = "RENDER_GENERAL",
                ei = "RENDER_STYLE",
                eo = "RENDER_PLUGIN"
        },
        70262: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                ActionAppliesTo: function() {
                    return o
                },
                ActionTypeConsts: function() {
                    return i
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = {
                    TRANSFORM_MOVE: "TRANSFORM_MOVE",
                    TRANSFORM_SCALE: "TRANSFORM_SCALE",
                    TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
                    TRANSFORM_SKEW: "TRANSFORM_SKEW",
                    STYLE_OPACITY: "STYLE_OPACITY",
                    STYLE_SIZE: "STYLE_SIZE",
                    STYLE_FILTER: "STYLE_FILTER",
                    STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
                    STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
                    STYLE_BORDER: "STYLE_BORDER",
                    STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
                    OBJECT_VALUE: "OBJECT_VALUE",
                    PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
                    PLUGIN_SPLINE: "PLUGIN_SPLINE",
                    PLUGIN_RIVE: "PLUGIN_RIVE",
                    PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
                    GENERAL_DISPLAY: "GENERAL_DISPLAY",
                    GENERAL_START_ACTION: "GENERAL_START_ACTION",
                    GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
                    GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
                    GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
                    GENERAL_LOOP: "GENERAL_LOOP",
                    STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    ELEMENT_CLASS: "ELEMENT_CLASS",
                    TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
                }
        },
        7087: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                ActionTypeConsts: function() {
                    return d.ActionTypeConsts
                },
                IX2EngineActionTypes: function() {
                    return c
                },
                IX2EngineConstants: function() {
                    return l
                },
                QuickEffectIds: function() {
                    return o.QuickEffectIds
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = r(a(61833), t),
                d = r(a(70262), t);
            r(a(28704), t), r(a(83213), t);
            let c = f(a(48023)),
                l = f(a(52686));

            function r(e, t) {
                return Object.keys(e).forEach(function(a) {
                    "default" === a || Object.prototype.hasOwnProperty.call(t, a) || Object.defineProperty(t, a, {
                        enumerable: !0,
                        get: function() {
                            return e[a]
                        }
                    })
                }), e
            }

            function s(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (s = function(e) {
                    return e ? a : t
                })(e)
            }

            function f(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = s(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                    }
                return n.default = e, a && a.set(e, n), n
            }
        },
        83213: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ReducedMotionTypes", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let {
                TRANSFORM_MOVE: n,
                TRANSFORM_SCALE: i,
                TRANSFORM_ROTATE: o,
                TRANSFORM_SKEW: d,
                STYLE_SIZE: c,
                STYLE_FILTER: l,
                STYLE_FONT_VARIATION: r
            } = a(70262).ActionTypeConsts, s = {
                [n]: !0,
                [i]: !0,
                [o]: !0,
                [d]: !0,
                [c]: !0,
                [l]: !0,
                [r]: !0
            }
        },
        61833: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var a = {
                EventAppliesTo: function() {
                    return o
                },
                EventBasedOn: function() {
                    return d
                },
                EventContinuousMouseAxes: function() {
                    return c
                },
                EventLimitAffectedElements: function() {
                    return l
                },
                EventTypeConsts: function() {
                    return i
                },
                QuickEffectDirectionConsts: function() {
                    return s
                },
                QuickEffectIds: function() {
                    return r
                }
            };
            for (var n in a) Object.defineProperty(t, n, {
                enumerable: !0,
                get: a[n]
            });
            let i = {
                    NAVBAR_OPEN: "NAVBAR_OPEN",
                    NAVBAR_CLOSE: "NAVBAR_CLOSE",
                    TAB_ACTIVE: "TAB_ACTIVE",
                    TAB_INACTIVE: "TAB_INACTIVE",
                    SLIDER_ACTIVE: "SLIDER_ACTIVE",
                    SLIDER_INACTIVE: "SLIDER_INACTIVE",
                    DROPDOWN_OPEN: "DROPDOWN_OPEN",
                    DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
                    MOUSE_CLICK: "MOUSE_CLICK",
                    MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
                    MOUSE_DOWN: "MOUSE_DOWN",
                    MOUSE_UP: "MOUSE_UP",
                    MOUSE_OVER: "MOUSE_OVER",
                    MOUSE_OUT: "MOUSE_OUT",
                    MOUSE_MOVE: "MOUSE_MOVE",
                    MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
                    SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
                    SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
                    SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
                    ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
                    ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
                    PAGE_START: "PAGE_START",
                    PAGE_FINISH: "PAGE_FINISH",
                    PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
                    PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
                    PAGE_SCROLL: "PAGE_SCROLL"
                },
                o = {
                    ELEMENT: "ELEMENT",
                    CLASS: "CLASS",
                    PAGE: "PAGE"
                },
                d = {
                    ELEMENT: "ELEMENT",
                    VIEWPORT: "VIEWPORT"
                },
                c = {
                    X_AXIS: "X_AXIS",
                    Y_AXIS: "Y_AXIS"
                },
                l = {
                    CHILDREN: "CHILDREN",
                    SIBLINGS: "SIBLINGS",
                    IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
                },
                r = {
                    FADE_EFFECT: "FADE_EFFECT",
                    SLIDE_EFFECT: "SLIDE_EFFECT",
                    GROW_EFFECT: "GROW_EFFECT",
                    SHRINK_EFFECT: "SHRINK_EFFECT",
                    SPIN_EFFECT: "SPIN_EFFECT",
                    FLY_EFFECT: "FLY_EFFECT",
                    POP_EFFECT: "POP_EFFECT",
                    FLIP_EFFECT: "FLIP_EFFECT",
                    JIGGLE_EFFECT: "JIGGLE_EFFECT",
                    PULSE_EFFECT: "PULSE_EFFECT",
                    DROP_EFFECT: "DROP_EFFECT",
                    BLINK_EFFECT: "BLINK_EFFECT",
                    BOUNCE_EFFECT: "BOUNCE_EFFECT",
                    FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
                    FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
                    RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
                    JELLO_EFFECT: "JELLO_EFFECT",
                    GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
                    SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
                    PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
                },
                s = {
                    LEFT: "LEFT",
                    RIGHT: "RIGHT",
                    BOTTOM: "BOTTOM",
                    TOP: "TOP",
                    BOTTOM_LEFT: "BOTTOM_LEFT",
                    BOTTOM_RIGHT: "BOTTOM_RIGHT",
                    TOP_RIGHT: "TOP_RIGHT",
                    TOP_LEFT: "TOP_LEFT",
                    CLOCKWISE: "CLOCKWISE",
                    COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
                }
        },
        28704: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "InteractionTypeConsts", {
                enumerable: !0,
                get: function() {
                    return a
                }
            });
            let a = {
                MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
                MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
                MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
                SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
                SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
                MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
                PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
                PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
                PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
                NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
                DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
                ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
                TAB_INTERACTION: "TAB_INTERACTION",
                SLIDER_INTERACTION: "SLIDER_INTERACTION"
            }
        },
        40380: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "normalizeColor", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let a = {
                aliceblue: "#F0F8FF",
                antiquewhite: "#FAEBD7",
                aqua: "#00FFFF",
                aquamarine: "#7FFFD4",
                azure: "#F0FFFF",
                beige: "#F5F5DC",
                bisque: "#FFE4C4",
                black: "#000000",
                blanchedalmond: "#FFEBCD",
                blue: "#0000FF",
                blueviolet: "#8A2BE2",
                brown: "#A52A2A",
                burlywood: "#DEB887",
                cadetblue: "#5F9EA0",
                chartreuse: "#7FFF00",
                chocolate: "#D2691E",
                coral: "#FF7F50",
                cornflowerblue: "#6495ED",
                cornsilk: "#FFF8DC",
                crimson: "#DC143C",
                cyan: "#00FFFF",
                darkblue: "#00008B",
                darkcyan: "#008B8B",
                darkgoldenrod: "#B8860B",
                darkgray: "#A9A9A9",
                darkgreen: "#006400",
                darkgrey: "#A9A9A9",
                darkkhaki: "#BDB76B",
                darkmagenta: "#8B008B",
                darkolivegreen: "#556B2F",
                darkorange: "#FF8C00",
                darkorchid: "#9932CC",
                darkred: "#8B0000",
                darksalmon: "#E9967A",
                darkseagreen: "#8FBC8F",
                darkslateblue: "#483D8B",
                darkslategray: "#2F4F4F",
                darkslategrey: "#2F4F4F",
                darkturquoise: "#00CED1",
                darkviolet: "#9400D3",
                deeppink: "#FF1493",
                deepskyblue: "#00BFFF",
                dimgray: "#696969",
                dimgrey: "#696969",
                dodgerblue: "#1E90FF",
                firebrick: "#B22222",
                floralwhite: "#FFFAF0",
                forestgreen: "#228B22",
                fuchsia: "#FF00FF",
                gainsboro: "#DCDCDC",
                ghostwhite: "#F8F8FF",
                gold: "#FFD700",
                goldenrod: "#DAA520",
                gray: "#808080",
                green: "#008000",
                greenyellow: "#ADFF2F",
                grey: "#808080",
                honeydew: "#F0FFF0",
                hotpink: "#FF69B4",
                indianred: "#CD5C5C",
                indigo: "#4B0082",
                ivory: "#FFFFF0",
                khaki: "#F0E68C",
                lavender: "#E6E6FA",
                lavenderblush: "#FFF0F5",
                lawngreen: "#7CFC00",
                lemonchiffon: "#FFFACD",
                lightblue: "#ADD8E6",
                lightcoral: "#F08080",
                lightcyan: "#E0FFFF",
                lightgoldenrodyellow: "#FAFAD2",
                lightgray: "#D3D3D3",
                lightgreen: "#90EE90",
                lightgrey: "#D3D3D3",
                lightpink: "#FFB6C1",
                lightsalmon: "#FFA07A",
                lightseagreen: "#20B2AA",
                lightskyblue: "#87CEFA",
                lightslategray: "#778899",
                lightslategrey: "#778899",
                lightsteelblue: "#B0C4DE",
                lightyellow: "#FFFFE0",
                lime: "#00FF00",
                limegreen: "#32CD32",
                linen: "#FAF0E6",
                magenta: "#FF00FF",
                maroon: "#800000",
                mediumaquamarine: "#66CDAA",
                mediumblue: "#0000CD",
                mediumorchid: "#BA55D3",
                mediumpurple: "#9370DB",
                mediumseagreen: "#3CB371",
                mediumslateblue: "#7B68EE",
                mediumspringgreen: "#00FA9A",
                mediumturquoise: "#48D1CC",
                mediumvioletred: "#C71585",
                midnightblue: "#191970",
                mintcream: "#F5FFFA",
                mistyrose: "#FFE4E1",
                moccasin: "#FFE4B5",
                navajowhite: "#FFDEAD",
                navy: "#000080",
                oldlace: "#FDF5E6",
                olive: "#808000",
                olivedrab: "#6B8E23",
                orange: "#FFA500",
                orangered: "#FF4500",
                orchid: "#DA70D6",
                palegoldenrod: "#EEE8AA",
                palegreen: "#98FB98",
                paleturquoise: "#AFEEEE",
                palevioletred: "#DB7093",
                papayawhip: "#FFEFD5",
                peachpuff: "#FFDAB9",
                peru: "#CD853F",
                pink: "#FFC0CB",
                plum: "#DDA0DD",
                powderblue: "#B0E0E6",
                purple: "#800080",
                rebeccapurple: "#663399",
                red: "#FF0000",
                rosybrown: "#BC8F8F",
                royalblue: "#4169E1",
                saddlebrown: "#8B4513",
                salmon: "#FA8072",
                sandybrown: "#F4A460",
                seagreen: "#2E8B57",
                seashell: "#FFF5EE",
                sienna: "#A0522D",
                silver: "#C0C0C0",
                skyblue: "#87CEEB",
                slateblue: "#6A5ACD",
                slategray: "#708090",
                slategrey: "#708090",
                snow: "#FFFAFA",
                springgreen: "#00FF7F",
                steelblue: "#4682B4",
                tan: "#D2B48C",
                teal: "#008080",
                thistle: "#D8BFD8",
                tomato: "#FF6347",
                turquoise: "#40E0D0",
                violet: "#EE82EE",
                wheat: "#F5DEB3",
                white: "#FFFFFF",
                whitesmoke: "#F5F5F5",
                yellow: "#FFFF00",
                yellowgreen: "#9ACD32"
            };

            function n(e) {
                let t, n, i, o = 1,
                    d = e.replace(/\s/g, "").toLowerCase(),
                    c = ("string" == typeof a[d] ? a[d].toLowerCase() : null) || d;
                if (c.startsWith("#")) {
                    let e = c.substring(1);
                    3 === e.length || 4 === e.length ? (t = parseInt(e[0] + e[0], 16), n = parseInt(e[1] + e[1], 16), i = parseInt(e[2] + e[2], 16), 4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255)) : (6 === e.length || 8 === e.length) && (t = parseInt(e.substring(0, 2), 16), n = parseInt(e.substring(2, 4), 16), i = parseInt(e.substring(4, 6), 16), 8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255))
                } else if (c.startsWith("rgba")) {
                    let e = c.match(/rgba\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), n = parseInt(e[1], 10), i = parseInt(e[2], 10), o = parseFloat(e[3])
                } else if (c.startsWith("rgb")) {
                    let e = c.match(/rgb\(([^)]+)\)/)[1].split(",");
                    t = parseInt(e[0], 10), n = parseInt(e[1], 10), i = parseInt(e[2], 10)
                } else if (c.startsWith("hsla")) {
                    let e, a, d, l = c.match(/hsla\(([^)]+)\)/)[1].split(","),
                        r = parseFloat(l[0]),
                        s = parseFloat(l[1].replace("%", "")) / 100,
                        f = parseFloat(l[2].replace("%", "")) / 100;
                    o = parseFloat(l[3]);
                    let u = (1 - Math.abs(2 * f - 1)) * s,
                        E = u * (1 - Math.abs(r / 60 % 2 - 1)),
                        p = f - u / 2;
                    r >= 0 && r < 60 ? (e = u, a = E, d = 0) : r >= 60 && r < 120 ? (e = E, a = u, d = 0) : r >= 120 && r < 180 ? (e = 0, a = u, d = E) : r >= 180 && r < 240 ? (e = 0, a = E, d = u) : r >= 240 && r < 300 ? (e = E, a = 0, d = u) : (e = u, a = 0, d = E), t = Math.round((e + p) * 255), n = Math.round((a + p) * 255), i = Math.round((d + p) * 255)
                } else if (c.startsWith("hsl")) {
                    let e, a, o, d = c.match(/hsl\(([^)]+)\)/)[1].split(","),
                        l = parseFloat(d[0]),
                        r = parseFloat(d[1].replace("%", "")) / 100,
                        s = parseFloat(d[2].replace("%", "")) / 100,
                        f = (1 - Math.abs(2 * s - 1)) * r,
                        u = f * (1 - Math.abs(l / 60 % 2 - 1)),
                        E = s - f / 2;
                    l >= 0 && l < 60 ? (e = f, a = u, o = 0) : l >= 60 && l < 120 ? (e = u, a = f, o = 0) : l >= 120 && l < 180 ? (e = 0, a = f, o = u) : l >= 180 && l < 240 ? (e = 0, a = u, o = f) : l >= 240 && l < 300 ? (e = u, a = 0, o = f) : (e = f, a = 0, o = u), t = Math.round((e + E) * 255), n = Math.round((a + E) * 255), i = Math.round((o + E) * 255)
                }
                if (Number.isNaN(t) || Number.isNaN(n) || Number.isNaN(i)) throw Error(`Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`);
                return {
                    red: t,
                    green: n,
                    blue: i,
                    alpha: o
                }
            }
        },
        9468: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                IX2BrowserSupport: function() {
                    return o
                },
                IX2EasingUtils: function() {
                    return c
                },
                IX2Easings: function() {
                    return d
                },
                IX2ElementsReducer: function() {
                    return l
                },
                IX2VanillaPlugins: function() {
                    return r
                },
                IX2VanillaUtils: function() {
                    return s
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = u(a(12662)),
                d = u(a(78686)),
                c = u(a(73767)),
                l = u(a(85861)),
                r = u(a(31799)),
                s = u(a(4124));

            function f(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (f = function(e) {
                    return e ? a : t
                })(e)
            }

            function u(e, t) {
                if (!t && e && e.__esModule) return e;
                if (null === e || "object" != typeof e && "function" != typeof e) return {
                    default: e
                };
                var a = f(t);
                if (a && a.has(e)) return a.get(e);
                var n = {
                        __proto__: null
                    },
                    i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var o in e)
                    if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                        var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                        d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                    }
                return n.default = e, a && a.set(e, n), n
            }
        },
        12662: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                ELEMENT_MATCHES: function() {
                    return r
                },
                FLEX_PREFIXED: function() {
                    return s
                },
                IS_BROWSER_ENV: function() {
                    return c
                },
                TRANSFORM_PREFIXED: function() {
                    return f
                },
                TRANSFORM_STYLE_PREFIXED: function() {
                    return E
                },
                withBrowser: function() {
                    return l
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = (n = a(19777)) && n.__esModule ? n : {
                    default: n
                },
                c = "undefined" != typeof window,
                l = (e, t) => c ? e() : t,
                r = l(() => (0, d.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
                s = l(() => {
                    let e = document.createElement("i"),
                        t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"];
                    try {
                        let {
                            length: a
                        } = t;
                        for (let n = 0; n < a; n++) {
                            let a = t[n];
                            if (e.style.display = a, e.style.display === a) return a
                        }
                        return ""
                    } catch (e) {
                        return ""
                    }
                }, "flex"),
                f = l(() => {
                    let e = document.createElement("i");
                    if (null == e.style.transform) {
                        let t = ["Webkit", "Moz", "ms"],
                            {
                                length: a
                            } = t;
                        for (let n = 0; n < a; n++) {
                            let a = t[n] + "Transform";
                            if (void 0 !== e.style[a]) return a
                        }
                    }
                    return "transform"
                }, "transform"),
                u = f.split("transform")[0],
                E = u ? u + "TransformStyle" : "transformStyle"
        },
        73767: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                applyEasing: function() {
                    return f
                },
                createBezierEasing: function() {
                    return s
                },
                optimizeFloat: function() {
                    return r
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = function(e, t) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" != typeof e && "function" != typeof e) return {
                        default: e
                    };
                    var a = l(t);
                    if (a && a.has(e)) return a.get(e);
                    var n = {
                            __proto__: null
                        },
                        i = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in e)
                        if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                            var d = i ? Object.getOwnPropertyDescriptor(e, o) : null;
                            d && (d.get || d.set) ? Object.defineProperty(n, o, d) : n[o] = e[o]
                        }
                    return n.default = e, a && a.set(e, n), n
                }(a(78686)),
                c = (n = a(1361)) && n.__esModule ? n : {
                    default: n
                };

            function l(e) {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap,
                    a = new WeakMap;
                return (l = function(e) {
                    return e ? a : t
                })(e)
            }

            function r(e, t = 5, a = 10) {
                let n = Math.pow(a, t),
                    i = Number(Math.round(e * n) / n);
                return Math.abs(i) > 1e-4 ? i : 0
            }

            function s(e) {
                return (0, c.default)(...e)
            }

            function f(e, t, a) {
                return 0 === t ? 0 : 1 === t ? 1 : a ? r(t > 0 ? a(t) : t) : r(t > 0 && e && d[e] ? d[e](t) : t)
            }
        },
        78686: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n, i = {
                bounce: function() {
                    return W
                },
                bouncePast: function() {
                    return X
                },
                ease: function() {
                    return c
                },
                easeIn: function() {
                    return l
                },
                easeInOut: function() {
                    return s
                },
                easeOut: function() {
                    return r
                },
                inBack: function() {
                    return w
                },
                inCirc: function() {
                    return C
                },
                inCubic: function() {
                    return p
                },
                inElastic: function() {
                    return U
                },
                inExpo: function() {
                    return N
                },
                inOutBack: function() {
                    return k
                },
                inOutCirc: function() {
                    return M
                },
                inOutCubic: function() {
                    return T
                },
                inOutElastic: function() {
                    return B
                },
                inOutExpo: function() {
                    return S
                },
                inOutQuad: function() {
                    return E
                },
                inOutQuart: function() {
                    return m
                },
                inOutQuint: function() {
                    return v
                },
                inOutSine: function() {
                    return R
                },
                inQuad: function() {
                    return f
                },
                inQuart: function() {
                    return y
                },
                inQuint: function() {
                    return b
                },
                inSine: function() {
                    return L
                },
                outBack: function() {
                    return F
                },
                outBounce: function() {
                    return V
                },
                outCirc: function() {
                    return A
                },
                outCubic: function() {
                    return I
                },
                outElastic: function() {
                    return x
                },
                outExpo: function() {
                    return h
                },
                outQuad: function() {
                    return u
                },
                outQuart: function() {
                    return g
                },
                outQuint: function() {
                    return O
                },
                outSine: function() {
                    return _
                },
                swingFrom: function() {
                    return G
                },
                swingFromTo: function() {
                    return D
                },
                swingTo: function() {
                    return P
                }
            };
            for (var o in i) Object.defineProperty(t, o, {
                enumerable: !0,
                get: i[o]
            });
            let d = (n = a(1361)) && n.__esModule ? n : {
                    default: n
                },
                c = (0, d.default)(.25, .1, .25, 1),
                l = (0, d.default)(.42, 0, 1, 1),
                r = (0, d.default)(0, 0, .58, 1),
                s = (0, d.default)(.42, 0, .58, 1);

            function f(e) {
                return Math.pow(e, 2)
            }

            function u(e) {
                return -(Math.pow(e - 1, 2) - 1)
            }

            function E(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
            }

            function p(e) {
                return Math.pow(e, 3)
            }

            function I(e) {
                return Math.pow(e - 1, 3) + 1
            }

            function T(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
            }

            function y(e) {
                return Math.pow(e, 4)
            }

            function g(e) {
                return -(Math.pow(e - 1, 4) - 1)
            }

            function m(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
            }

            function b(e) {
                return Math.pow(e, 5)
            }

            function O(e) {
                return Math.pow(e - 1, 5) + 1
            }

            function v(e) {
                return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
            }

            function L(e) {
                return -Math.cos(Math.PI / 2 * e) + 1
            }

            function _(e) {
                return Math.sin(Math.PI / 2 * e)
            }

            function R(e) {
                return -.5 * (Math.cos(Math.PI * e) - 1)
            }

            function N(e) {
                return 0 === e ? 0 : Math.pow(2, 10 * (e - 1))
            }

            function h(e) {
                return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1
            }

            function S(e) {
                return 0 === e ? 0 : 1 === e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
            }

            function C(e) {
                return -(Math.sqrt(1 - e * e) - 1)
            }

            function A(e) {
                return Math.sqrt(1 - Math.pow(e - 1, 2))
            }

            function M(e) {
                return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
            }

            function V(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function w(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function F(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function k(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function U(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)))
            }

            function x(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 1 === e ? 1 : (a || (a = .3), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin(2 * Math.PI * (e - t) / a) + 1)
            }

            function B(e) {
                let t = 1.70158,
                    a = 0,
                    n = 1;
                return 0 === e ? 0 : 2 == (e /= .5) ? 1 : (a || (a = .3 * 1.5), n < 1 ? (n = 1, t = a / 4) : t = a / (2 * Math.PI) * Math.asin(1 / n), e < 1) ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * Math.PI * (e - t) / a) * .5 + 1
            }

            function D(e) {
                let t = 1.70158;
                return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
            }

            function G(e) {
                return e * e * (2.70158 * e - 1.70158)
            }

            function P(e) {
                return (e -= 1) * e * (2.70158 * e + 1.70158) + 1
            }

            function W(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
            }

            function X(e) {
                return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
            }
        },
        31799: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                clearPlugin: function() {
                    return I
                },
                createPluginInstance: function() {
                    return E
                },
                getPluginConfig: function() {
                    return r
                },
                getPluginDestination: function() {
                    return u
                },
                getPluginDuration: function() {
                    return f
                },
                getPluginOrigin: function() {
                    return s
                },
                isPluginType: function() {
                    return c
                },
                renderPlugin: function() {
                    return p
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(12662),
                d = a(63690);

            function c(e) {
                return d.pluginMethodMap.has(e)
            }
            let l = e => t => {
                    if (!o.IS_BROWSER_ENV) return () => null;
                    let a = d.pluginMethodMap.get(t);
                    if (!a) throw Error(`IX2 no plugin configured for: ${t}`);
                    let n = a[e];
                    if (!n) throw Error(`IX2 invalid plugin method: ${e}`);
                    return n
                },
                r = l("getPluginConfig"),
                s = l("getPluginOrigin"),
                f = l("getPluginDuration"),
                u = l("getPluginDestination"),
                E = l("createPluginInstance"),
                p = l("renderPlugin"),
                I = l("clearPlugin")
        },
        4124: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                cleanupHTMLElement: function() {
                    return eQ
                },
                clearAllStyles: function() {
                    return eW
                },
                clearObjectCache: function() {
                    return ef
                },
                getActionListProgress: function() {
                    return e$
                },
                getAffectedElements: function() {
                    return eb
                },
                getComputedStyle: function() {
                    return eO
                },
                getDestinationValues: function() {
                    return eC
                },
                getElementId: function() {
                    return eI
                },
                getInstanceId: function() {
                    return eE
                },
                getInstanceOrigin: function() {
                    return eR
                },
                getItemConfigByKey: function() {
                    return eS
                },
                getMaxDurationItemIndex: function() {
                    return ej
                },
                getNamespacedParameterId: function() {
                    return eZ
                },
                getRenderType: function() {
                    return eA
                },
                getStyleProp: function() {
                    return eM
                },
                mediaQueriesEqual: function() {
                    return e0
                },
                observeStore: function() {
                    return eg
                },
                reduceListToGroup: function() {
                    return eK
                },
                reifyState: function() {
                    return eT
                },
                renderHTMLElement: function() {
                    return eV
                },
                shallowEqual: function() {
                    return s.default
                },
                shouldAllowMediaQuery: function() {
                    return eJ
                },
                shouldNamespaceEventParameter: function() {
                    return eq
                },
                stringifyTarget: function() {
                    return e1
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = I(a(34075)),
                d = I(a(51455)),
                c = I(a(45720)),
                l = a(81185),
                r = a(7087),
                s = I(a(57164)),
                f = a(73767),
                u = a(40380),
                E = a(31799),
                p = a(12662);

            function I(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            let {
                BACKGROUND: T,
                TRANSFORM: y,
                TRANSLATE_3D: g,
                SCALE_3D: m,
                ROTATE_X: b,
                ROTATE_Y: O,
                ROTATE_Z: v,
                SKEW: L,
                PRESERVE_3D: _,
                FLEX: R,
                OPACITY: N,
                FILTER: h,
                FONT_VARIATION_SETTINGS: S,
                WIDTH: C,
                HEIGHT: A,
                BACKGROUND_COLOR: M,
                BORDER_COLOR: V,
                COLOR: w,
                CHILDREN: F,
                IMMEDIATE_CHILDREN: k,
                SIBLINGS: U,
                PARENT: x,
                DISPLAY: B,
                WILL_CHANGE: D,
                AUTO: G,
                COMMA_DELIMITER: P,
                COLON_DELIMITER: W,
                BAR_DELIMITER: X,
                RENDER_TRANSFORM: H,
                RENDER_GENERAL: Q,
                RENDER_STYLE: Y,
                RENDER_PLUGIN: z
            } = r.IX2EngineConstants, {
                TRANSFORM_MOVE: j,
                TRANSFORM_SCALE: $,
                TRANSFORM_ROTATE: K,
                TRANSFORM_SKEW: q,
                STYLE_OPACITY: Z,
                STYLE_FILTER: J,
                STYLE_FONT_VARIATION: ee,
                STYLE_SIZE: et,
                STYLE_BACKGROUND_COLOR: ea,
                STYLE_BORDER: en,
                STYLE_TEXT_COLOR: ei,
                GENERAL_DISPLAY: eo,
                OBJECT_VALUE: ed
            } = r.ActionTypeConsts, ec = e => e.trim(), el = Object.freeze({
                [ea]: M,
                [en]: V,
                [ei]: w
            }), er = Object.freeze({
                [p.TRANSFORM_PREFIXED]: y,
                [M]: T,
                [N]: N,
                [h]: h,
                [C]: C,
                [A]: A,
                [S]: S
            }), es = new Map;

            function ef() {
                es.clear()
            }
            let eu = 1;

            function eE() {
                return "i" + eu++
            }
            let ep = 1;

            function eI(e, t) {
                for (let a in e) {
                    let n = e[a];
                    if (n && n.ref === t) return n.id
                }
                return "e" + ep++
            }

            function eT({
                events: e,
                actionLists: t,
                site: a
            } = {}) {
                let n = (0, d.default)(e, (e, t) => {
                        let {
                            eventTypeId: a
                        } = t;
                        return e[a] || (e[a] = {}), e[a][t.id] = t, e
                    }, {}),
                    i = a && a.mediaQueries,
                    o = [];
                return i ? o = i.map(e => e.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
                    ixData: {
                        events: e,
                        actionLists: t,
                        eventTypeMap: n,
                        mediaQueries: i,
                        mediaQueryKeys: o
                    }
                }
            }
            let ey = (e, t) => e === t;

            function eg({
                store: e,
                select: t,
                onChange: a,
                comparator: n = ey
            }) {
                let {
                    getState: i,
                    subscribe: o
                } = e, d = o(function() {
                    let o = t(i());
                    if (null == o) return void d();
                    n(o, c) || a(c = o, e)
                }), c = t(i());
                return d
            }

            function em(e) {
                let t = typeof e;
                if ("string" === t) return {
                    id: e
                };
                if (null != e && "object" === t) {
                    let {
                        id: t,
                        objectId: a,
                        selector: n,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: d
                    } = e;
                    return {
                        id: t,
                        objectId: a,
                        selector: n,
                        selectorGuids: i,
                        appliesTo: o,
                        useEventTarget: d
                    }
                }
                return {}
            }

            function eb({
                config: e,
                event: t,
                eventTarget: a,
                elementRoot: n,
                elementApi: i
            }) {
                let o, d, c;
                if (!i) throw Error("IX2 missing elementApi");
                let {
                    targets: l
                } = e;
                if (Array.isArray(l) && l.length > 0) return l.reduce((e, o) => e.concat(eb({
                    config: {
                        target: o
                    },
                    event: t,
                    eventTarget: a,
                    elementRoot: n,
                    elementApi: i
                })), []);
                let {
                    getValidDocument: s,
                    getQuerySelector: f,
                    queryDocument: u,
                    getChildElements: E,
                    getSiblingElements: I,
                    matchSelector: T,
                    elementContains: y,
                    isSiblingNode: g
                } = i, {
                    target: m
                } = e;
                if (!m) return [];
                let {
                    id: b,
                    objectId: O,
                    selector: v,
                    selectorGuids: L,
                    appliesTo: _,
                    useEventTarget: R
                } = em(m);
                if (O) return [es.has(O) ? es.get(O) : es.set(O, {}).get(O)];
                if (_ === r.EventAppliesTo.PAGE) {
                    let e = s(b);
                    return e ? [e] : []
                }
                let N = (t ? .action ? .config ? .affectedElements ? ? {})[b || v] || {},
                    h = !!(N.id || N.selector),
                    S = t && f(em(t.target));
                if (h ? (o = N.limitAffectedElements, d = S, c = f(N)) : d = c = f({
                        id: b,
                        selector: v,
                        selectorGuids: L
                    }), t && R) {
                    let e = a && (c || !0 === R) ? [a] : u(S);
                    if (c) {
                        if (R === x) return u(c).filter(t => e.some(e => y(t, e)));
                        if (R === F) return u(c).filter(t => e.some(e => y(e, t)));
                        if (R === U) return u(c).filter(t => e.some(e => g(e, t)))
                    }
                    return e
                }
                return null == d || null == c ? [] : p.IS_BROWSER_ENV && n ? u(c).filter(e => n.contains(e)) : o === F ? u(d, c) : o === k ? E(u(d)).filter(T(c)) : o === U ? I(u(d)).filter(T(c)) : u(c)
            }

            function eO({
                element: e,
                actionItem: t
            }) {
                if (!p.IS_BROWSER_ENV) return {};
                let {
                    actionTypeId: a
                } = t;
                switch (a) {
                    case et:
                    case ea:
                    case en:
                    case ei:
                    case eo:
                        return window.getComputedStyle(e);
                    default:
                        return {}
                }
            }
            let ev = /px/,
                eL = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = eF[t.type]), e), e || {}),
                e_ = (e, t) => t.reduce((e, t) => (null == e[t.type] && (e[t.type] = ek[t.type] || t.defaultValue || 0), e), e || {});

            function eR(e, t = {}, a = {}, n, i) {
                let {
                    getStyle: d
                } = i, {
                    actionTypeId: c
                } = n;
                if ((0, E.isPluginType)(c)) return (0, E.getPluginOrigin)(c)(t[c], n);
                switch (n.actionTypeId) {
                    case j:
                    case $:
                    case K:
                    case q:
                        return t[n.actionTypeId] || ew[n.actionTypeId];
                    case J:
                        return eL(t[n.actionTypeId], n.config.filters);
                    case ee:
                        return e_(t[n.actionTypeId], n.config.fontVariations);
                    case Z:
                        return {
                            value: (0, o.default)(parseFloat(d(e, N)), 1)
                        };
                    case et:
                        {
                            let t, i = d(e, C),
                                c = d(e, A);
                            return {
                                widthValue: n.config.widthUnit === G ? ev.test(i) ? parseFloat(i) : parseFloat(a.width) : (0, o.default)(parseFloat(i), parseFloat(a.width)),
                                heightValue: n.config.heightUnit === G ? ev.test(c) ? parseFloat(c) : parseFloat(a.height) : (0, o.default)(parseFloat(c), parseFloat(a.height))
                            }
                        }
                    case ea:
                    case en:
                    case ei:
                        return function({
                            element: e,
                            actionTypeId: t,
                            computedStyle: a,
                            getStyle: n
                        }) {
                            let i = el[t],
                                d = n(e, i),
                                c = (function(e, t) {
                                    let a = e.exec(t);
                                    return a ? a[1] : ""
                                })(eD, eB.test(d) ? d : a[i]).split(P);
                            return {
                                rValue: (0, o.default)(parseInt(c[0], 10), 255),
                                gValue: (0, o.default)(parseInt(c[1], 10), 255),
                                bValue: (0, o.default)(parseInt(c[2], 10), 255),
                                aValue: (0, o.default)(parseFloat(c[3]), 1)
                            }
                        }({
                            element: e,
                            actionTypeId: n.actionTypeId,
                            computedStyle: a,
                            getStyle: d
                        });
                    case eo:
                        return {
                            value: (0, o.default)(d(e, B), a.display)
                        };
                    case ed:
                        return t[n.actionTypeId] || {
                            value: 0
                        };
                    default:
                        return
                }
            }
            let eN = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eh = (e, t) => (t && (e[t.type] = t.value || 0), e),
                eS = (e, t, a) => {
                    if ((0, E.isPluginType)(e)) return (0, E.getPluginConfig)(e)(a, t);
                    switch (e) {
                        case J:
                            {
                                let e = (0, c.default)(a.filters, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        case ee:
                            {
                                let e = (0, c.default)(a.fontVariations, ({
                                    type: e
                                }) => e === t);
                                return e ? e.value : 0
                            }
                        default:
                            return a[t]
                    }
                };

            function eC({
                element: e,
                actionItem: t,
                elementApi: a
            }) {
                if ((0, E.isPluginType)(t.actionTypeId)) return (0, E.getPluginDestination)(t.actionTypeId)(t.config);
                switch (t.actionTypeId) {
                    case j:
                    case $:
                    case K:
                    case q:
                        {
                            let {
                                xValue: e,
                                yValue: a,
                                zValue: n
                            } = t.config;
                            return {
                                xValue: e,
                                yValue: a,
                                zValue: n
                            }
                        }
                    case et:
                        {
                            let {
                                getStyle: n,
                                setStyle: i,
                                getProperty: o
                            } = a,
                            {
                                widthUnit: d,
                                heightUnit: c
                            } = t.config,
                            {
                                widthValue: l,
                                heightValue: r
                            } = t.config;
                            if (!p.IS_BROWSER_ENV) return {
                                widthValue: l,
                                heightValue: r
                            };
                            if (d === G) {
                                let t = n(e, C);
                                i(e, C, ""), l = o(e, "offsetWidth"), i(e, C, t)
                            }
                            if (c === G) {
                                let t = n(e, A);
                                i(e, A, ""), r = o(e, "offsetHeight"), i(e, A, t)
                            }
                            return {
                                widthValue: l,
                                heightValue: r
                            }
                        }
                    case ea:
                    case en:
                    case ei:
                        {
                            let {
                                rValue: n,
                                gValue: i,
                                bValue: o,
                                aValue: d,
                                globalSwatchId: c
                            } = t.config;
                            if (c && c.startsWith("--")) {
                                let {
                                    getStyle: t
                                } = a, n = t(e, c), i = (0, u.normalizeColor)(n);
                                return {
                                    rValue: i.red,
                                    gValue: i.green,
                                    bValue: i.blue,
                                    aValue: i.alpha
                                }
                            }
                            return {
                                rValue: n,
                                gValue: i,
                                bValue: o,
                                aValue: d
                            }
                        }
                    case J:
                        return t.config.filters.reduce(eN, {});
                    case ee:
                        return t.config.fontVariations.reduce(eh, {});
                    default:
                        {
                            let {
                                value: e
                            } = t.config;
                            return {
                                value: e
                            }
                        }
                }
            }

            function eA(e) {
                return /^TRANSFORM_/.test(e) ? H : /^STYLE_/.test(e) ? Y : /^GENERAL_/.test(e) ? Q : /^PLUGIN_/.test(e) ? z : void 0
            }

            function eM(e, t) {
                return e === Y ? t.replace("STYLE_", "").toLowerCase() : null
            }

            function eV(e, t, a, n, i, o, c, l, r) {
                switch (l) {
                    case H:
                        var s = e,
                            f = t,
                            u = a,
                            I = i,
                            T = c;
                        let y = ex.map(e => {
                                let t = ew[e],
                                    {
                                        xValue: a = t.xValue,
                                        yValue: n = t.yValue,
                                        zValue: i = t.zValue,
                                        xUnit: o = "",
                                        yUnit: d = "",
                                        zUnit: c = ""
                                    } = f[e] || {};
                                switch (e) {
                                    case j:
                                        return `${g}(${a}${o}, ${n}${d}, ${i}${c})`;
                                    case $:
                                        return `${m}(${a}${o}, ${n}${d}, ${i}${c})`;
                                    case K:
                                        return `${b}(${a}${o}) ${O}(${n}${d}) ${v}(${i}${c})`;
                                    case q:
                                        return `${L}(${a}${o}, ${n}${d})`;
                                    default:
                                        return ""
                                }
                            }).join(" "),
                            {
                                setStyle: N
                            } = T;
                        eG(s, p.TRANSFORM_PREFIXED, T), N(s, p.TRANSFORM_PREFIXED, y),
                            function({
                                actionTypeId: e
                            }, {
                                xValue: t,
                                yValue: a,
                                zValue: n
                            }) {
                                return e === j && void 0 !== n || e === $ && void 0 !== n || e === K && (void 0 !== t || void 0 !== a)
                            }(I, u) && N(s, p.TRANSFORM_STYLE_PREFIXED, _);
                        return;
                    case Y:
                        return function(e, t, a, n, i, o) {
                            let {
                                setStyle: c
                            } = o;
                            switch (n.actionTypeId) {
                                case et:
                                    {
                                        let {
                                            widthUnit: t = "",
                                            heightUnit: i = ""
                                        } = n.config,
                                        {
                                            widthValue: d,
                                            heightValue: l
                                        } = a;void 0 !== d && (t === G && (t = "px"), eG(e, C, o), c(e, C, d + t)),
                                        void 0 !== l && (i === G && (i = "px"), eG(e, A, o), c(e, A, l + i));
                                        break
                                    }
                                case J:
                                    var l = n.config;
                                    let r = (0, d.default)(a, (e, t, a) => `${e} ${a}(${t}${eU(a,l)})`, ""),
                                        {
                                            setStyle: s
                                        } = o;
                                    eG(e, h, o), s(e, h, r);
                                    break;
                                case ee:
                                    n.config;
                                    let f = (0, d.default)(a, (e, t, a) => (e.push(`"${a}" ${t}`), e), []).join(", "),
                                        {
                                            setStyle: u
                                        } = o;
                                    eG(e, S, o), u(e, S, f);
                                    break;
                                case ea:
                                case en:
                                case ei:
                                    {
                                        let t = el[n.actionTypeId],
                                            i = Math.round(a.rValue),
                                            d = Math.round(a.gValue),
                                            l = Math.round(a.bValue),
                                            r = a.aValue;eG(e, t, o),
                                        c(e, t, r >= 1 ? `rgb(${i},${d},${l})` : `rgba(${i},${d},${l},${r})`);
                                        break
                                    }
                                default:
                                    {
                                        let {
                                            unit: t = ""
                                        } = n.config;eG(e, i, o),
                                        c(e, i, a.value + t)
                                    }
                            }
                        }(e, 0, a, i, o, c);
                    case Q:
                        var M = e,
                            V = i,
                            w = c;
                        let {
                            setStyle: F
                        } = w;
                        if (V.actionTypeId === eo) {
                            let {
                                value: e
                            } = V.config;
                            F(M, B, e === R && p.IS_BROWSER_ENV ? p.FLEX_PREFIXED : e);
                        }
                        return;
                    case z:
                        {
                            let {
                                actionTypeId: e
                            } = i;
                            if ((0, E.isPluginType)(e)) return (0, E.renderPlugin)(e)(r, t, i)
                        }
                }
            }
            let ew = {
                    [j]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [$]: Object.freeze({
                        xValue: 1,
                        yValue: 1,
                        zValue: 1
                    }),
                    [K]: Object.freeze({
                        xValue: 0,
                        yValue: 0,
                        zValue: 0
                    }),
                    [q]: Object.freeze({
                        xValue: 0,
                        yValue: 0
                    })
                },
                eF = Object.freeze({
                    blur: 0,
                    "hue-rotate": 0,
                    invert: 0,
                    grayscale: 0,
                    saturate: 100,
                    sepia: 0,
                    contrast: 100,
                    brightness: 100
                }),
                ek = Object.freeze({
                    wght: 0,
                    opsz: 0,
                    wdth: 0,
                    slnt: 0
                }),
                eU = (e, t) => {
                    let a = (0, c.default)(t.filters, ({
                        type: t
                    }) => t === e);
                    if (a && a.unit) return a.unit;
                    switch (e) {
                        case "blur":
                            return "px";
                        case "hue-rotate":
                            return "deg";
                        default:
                            return "%"
                    }
                },
                ex = Object.keys(ew),
                eB = /^rgb/,
                eD = RegExp("rgba?\\(([^)]+)\\)");

            function eG(e, t, a) {
                if (!p.IS_BROWSER_ENV) return;
                let n = er[t];
                if (!n) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = a, d = i(e, D);
                if (!d) return void o(e, D, n);
                let c = d.split(P).map(ec); - 1 === c.indexOf(n) && o(e, D, c.concat(n).join(P))
            }

            function eP(e, t, a) {
                if (!p.IS_BROWSER_ENV) return;
                let n = er[t];
                if (!n) return;
                let {
                    getStyle: i,
                    setStyle: o
                } = a, d = i(e, D);
                d && -1 !== d.indexOf(n) && o(e, D, d.split(P).map(ec).filter(e => e !== n).join(P))
            }

            function eW({
                store: e,
                elementApi: t
            }) {
                let {
                    ixData: a
                } = e.getState(), {
                    events: n = {},
                    actionLists: i = {}
                } = a;
                Object.keys(n).forEach(e => {
                    let a = n[e],
                        {
                            config: o
                        } = a.action,
                        {
                            actionListId: d
                        } = o,
                        c = i[d];
                    c && eX({
                        actionList: c,
                        event: a,
                        elementApi: t
                    })
                }), Object.keys(i).forEach(e => {
                    eX({
                        actionList: i[e],
                        elementApi: t
                    })
                })
            }

            function eX({
                actionList: e = {},
                event: t,
                elementApi: a
            }) {
                let {
                    actionItemGroups: n,
                    continuousParameterGroups: i
                } = e;
                n && n.forEach(e => {
                    eH({
                        actionGroup: e,
                        event: t,
                        elementApi: a
                    })
                }), i && i.forEach(e => {
                    let {
                        continuousActionGroups: n
                    } = e;
                    n.forEach(e => {
                        eH({
                            actionGroup: e,
                            event: t,
                            elementApi: a
                        })
                    })
                })
            }

            function eH({
                actionGroup: e,
                event: t,
                elementApi: a
            }) {
                let {
                    actionItems: n
                } = e;
                n.forEach(e => {
                    let n, {
                        actionTypeId: i,
                        config: o
                    } = e;
                    n = (0, E.isPluginType)(i) ? t => (0, E.clearPlugin)(i)(t, e) : eY({
                        effect: ez,
                        actionTypeId: i,
                        elementApi: a
                    }), eb({
                        config: o,
                        event: t,
                        elementApi: a
                    }).forEach(n)
                })
            }

            function eQ(e, t, a) {
                let {
                    setStyle: n,
                    getStyle: i
                } = a, {
                    actionTypeId: o
                } = t;
                if (o === et) {
                    let {
                        config: a
                    } = t;
                    a.widthUnit === G && n(e, C, ""), a.heightUnit === G && n(e, A, "")
                }
                i(e, D) && eY({
                    effect: eP,
                    actionTypeId: o,
                    elementApi: a
                })(e)
            }
            let eY = ({
                effect: e,
                actionTypeId: t,
                elementApi: a
            }) => n => {
                switch (t) {
                    case j:
                    case $:
                    case K:
                    case q:
                        e(n, p.TRANSFORM_PREFIXED, a);
                        break;
                    case J:
                        e(n, h, a);
                        break;
                    case ee:
                        e(n, S, a);
                        break;
                    case Z:
                        e(n, N, a);
                        break;
                    case et:
                        e(n, C, a), e(n, A, a);
                        break;
                    case ea:
                    case en:
                    case ei:
                        e(n, el[t], a);
                        break;
                    case eo:
                        e(n, B, a)
                }
            };

            function ez(e, t, a) {
                let {
                    setStyle: n
                } = a;
                eP(e, t, a), n(e, t, ""), t === p.TRANSFORM_PREFIXED && n(e, p.TRANSFORM_STYLE_PREFIXED, "")
            }

            function ej(e) {
                let t = 0,
                    a = 0;
                return e.forEach((e, n) => {
                    let {
                        config: i
                    } = e, o = i.delay + i.duration;
                    o >= t && (t = o, a = n)
                }), a
            }

            function e$(e, t) {
                let {
                    actionItemGroups: a,
                    useFirstGroupAsInitialState: n
                } = e, {
                    actionItem: i,
                    verboseTimeElapsed: o = 0
                } = t, d = 0, c = 0;
                return a.forEach((e, t) => {
                    if (n && 0 === t) return;
                    let {
                        actionItems: a
                    } = e, l = a[ej(a)], {
                        config: r,
                        actionTypeId: s
                    } = l;
                    i.id === l.id && (c = d + o);
                    let f = eA(s) === Q ? 0 : r.duration;
                    d += r.delay + f
                }), d > 0 ? (0, f.optimizeFloat)(c / d) : 0
            }

            function eK({
                actionList: e,
                actionItemId: t,
                rawData: a
            }) {
                let {
                    actionItemGroups: n,
                    continuousParameterGroups: i
                } = e, o = [], d = e => (o.push((0, l.mergeIn)(e, ["config"], {
                    delay: 0,
                    duration: 0
                })), e.id === t);
                return n && n.some(({
                    actionItems: e
                }) => e.some(d)), i && i.some(e => {
                    let {
                        continuousActionGroups: t
                    } = e;
                    return t.some(({
                        actionItems: e
                    }) => e.some(d))
                }), (0, l.setIn)(a, ["actionLists"], {
                    [e.id]: {
                        id: e.id,
                        actionItemGroups: [{
                            actionItems: o
                        }]
                    }
                })
            }

            function eq(e, {
                basedOn: t
            }) {
                return e === r.EventTypeConsts.SCROLLING_IN_VIEW && (t === r.EventBasedOn.ELEMENT || null == t) || e === r.EventTypeConsts.MOUSE_MOVE && t === r.EventBasedOn.ELEMENT
            }

            function eZ(e, t) {
                return e + W + t
            }

            function eJ(e, t) {
                return null == t || -1 !== e.indexOf(t)
            }

            function e0(e, t) {
                return (0, s.default)(e && e.sort(), t && t.sort())
            }

            function e1(e) {
                if ("string" == typeof e) return e;
                if (e.pluginElement && e.objectId) return e.pluginElement + X + e.objectId;
                if (e.objectId) return e.objectId;
                let {
                    id: t = "",
                    selector: a = "",
                    useEventTarget: n = ""
                } = e;
                return t + X + a + X + n
            }
        },
        57164: function(e, t) {
            "use strict";

            function a(e, t) {
                return e === t ? 0 !== e || 0 !== t || 1 / e == 1 / t : e != e && t != t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            });
            let n = function(e, t) {
                if (a(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                let n = Object.keys(e),
                    i = Object.keys(t);
                if (n.length !== i.length) return !1;
                for (let i = 0; i < n.length; i++)
                    if (!Object.hasOwn(t, n[i]) || !a(e[n[i]], t[n[i]])) return !1;
                return !0
            }
        },
        85861: function(e, t, a) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var n = {
                createElementState: function() {
                    return L
                },
                ixElements: function() {
                    return v
                },
                mergeActionState: function() {
                    return _
                }
            };
            for (var i in n) Object.defineProperty(t, i, {
                enumerable: !0,
                get: n[i]
            });
            let o = a(81185),
                d = a(7087),
                {
                    HTML_ELEMENT: c,
                    PLAIN_OBJECT: l,
                    ABSTRACT_NODE: r,
                    CONFIG_X_VALUE: s,
                    CONFIG_Y_VALUE: f,
                    CONFIG_Z_VALUE: u,
                    CONFIG_VALUE: E,
                    CONFIG_X_UNIT: p,
                    CONFIG_Y_UNIT: I,
                    CONFIG_Z_UNIT: T,
                    CONFIG_UNIT: y
                } = d.IX2EngineConstants,
                {
                    IX2_SESSION_STOPPED: g,
                    IX2_INSTANCE_ADDED: m,
                    IX2_ELEMENT_STATE_CHANGED: b
                } = d.IX2EngineActionTypes,
                O = {},
                v = (e = O, t = {}) => {
                    switch (t.type) {
                        case g:
                            return O;
                        case m:
                            {
                                let {
                                    elementId: a,
                                    element: n,
                                    origin: i,
                                    actionItem: d,
                                    refType: c
                                } = t.payload,
                                {
                                    actionTypeId: l
                                } = d,
                                r = e;
                                return (0, o.getIn)(r, [a, n]) !== n && (r = L(r, n, c, a, d)),
                                _(r, a, l, i, d)
                            }
                        case b:
                            {
                                let {
                                    elementId: a,
                                    actionTypeId: n,
                                    current: i,
                                    actionItem: o
                                } = t.payload;
                                return _(e, a, n, i, o)
                            }
                        default:
                            return e
                    }
                };

            function L(e, t, a, n, i) {
                let d = a === l ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
                return (0, o.mergeIn)(e, [n], {
                    id: n,
                    ref: t,
                    refId: d,
                    refType: a
                })
            }

            function _(e, t, a, n, i) {
                let d = function(e) {
                    let {
                        config: t
                    } = e;
                    return R.reduce((e, a) => {
                        let n = a[0],
                            i = a[1],
                            o = t[n],
                            d = t[i];
                        return null != o && null != d && (e[i] = d), e
                    }, {})
                }(i);
                return (0, o.mergeIn)(e, [t, "refState", a], n, d)
            }
            let R = [
                [s, p],
                [f, I],
                [u, T],
                [E, y]
            ]
        },
        70641: function() {
            Webflow.require("ix2").init({
                events: {
                    e: {
                        id: "e",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-2"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "37e07495-f085-dbf4-76ec-125fadb1ba43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "37e07495-f085-dbf4-76ec-125fadb1ba43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1995b3d0e40
                    },
                    "e-2": {
                        id: "e-2",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-2",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "37e07495-f085-dbf4-76ec-125fadb1ba43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "37e07495-f085-dbf4-76ec-125fadb1ba43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1995b3d0e41
                    },
                    "e-3": {
                        id: "e-3",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-3",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-4"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "9382defc-7104-f8ce-240f-b908b80f9071",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "9382defc-7104-f8ce-240f-b908b80f9071",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19966bd2254
                    },
                    "e-4": {
                        id: "e-4",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-4",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-3"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "9382defc-7104-f8ce-240f-b908b80f9071",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "9382defc-7104-f8ce-240f-b908b80f9071",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19966bd2254
                    },
                    "e-5": {
                        id: "e-5",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-5",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-6"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "337d3348-69ff-3881-7ef1-bd908b587124",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "337d3348-69ff-3881-7ef1-bd908b587124",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19966c28f40
                    },
                    "e-6": {
                        id: "e-6",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-6",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-5"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "337d3348-69ff-3881-7ef1-bd908b587124",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "337d3348-69ff-3881-7ef1-bd908b587124",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19966c28f40
                    },
                    "e-11": {
                        id: "e-11",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-12"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e6|57321623-7552-9045-975d-db7582d7f6fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e6|57321623-7552-9045-975d-db7582d7f6fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996a677460
                    },
                    "e-12": {
                        id: "e-12",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-11"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e6|57321623-7552-9045-975d-db7582d7f6fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e6|57321623-7552-9045-975d-db7582d7f6fd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996a677460
                    },
                    "e-13": {
                        id: "e-13",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-14"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e7|7635a949-5762-5e4a-64a6-cc3b648c1d5e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e7|7635a949-5762-5e4a-64a6-cc3b648c1d5e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996a731d31
                    },
                    "e-14": {
                        id: "e-14",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-13"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e7|7635a949-5762-5e4a-64a6-cc3b648c1d5e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e7|7635a949-5762-5e4a-64a6-cc3b648c1d5e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996a731d31
                    },
                    "e-15": {
                        id: "e-15",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-7",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-16"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432df|8ab40cd0-eaa5-e501-03b1-4c3eecb144be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432df|8ab40cd0-eaa5-e501-03b1-4c3eecb144be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996b03a09b
                    },
                    "e-16": {
                        id: "e-16",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-8",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-15"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432df|8ab40cd0-eaa5-e501-03b1-4c3eecb144be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432df|8ab40cd0-eaa5-e501-03b1-4c3eecb144be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996b03a09b
                    },
                    "e-17": {
                        id: "e-17",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_OPEN",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-9",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-18"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "49356b48-7945-5dae-6c9d-89a42b6a9e05",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "49356b48-7945-5dae-6c9d-89a42b6a9e05",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996b8ed7a4
                    },
                    "e-18": {
                        id: "e-18",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "DROPDOWN_CLOSE",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-10",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-17"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "49356b48-7945-5dae-6c9d-89a42b6a9e05",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "49356b48-7945-5dae-6c9d-89a42b6a9e05",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1996b8ed7a5
                    },
                    "e-19": {
                        id: "e-19",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-11",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-20"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1997a6b51e0
                    },
                    "e-20": {
                        id: "e-20",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-12",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-19"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1997a6b51e0
                    },
                    "e-50": {
                        id: "e-50",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-51"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|6d63e4b4-a287-d4c0-4610-e2c1b684f303",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|6d63e4b4-a287-d4c0-4610-e2c1b684f303",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998ed1d43
                    },
                    "e-51": {
                        id: "e-51",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-50"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|6d63e4b4-a287-d4c0-4610-e2c1b684f303",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|6d63e4b4-a287-d4c0-4610-e2c1b684f303",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998ed1d43
                    },
                    "e-52": {
                        id: "e-52",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-53"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|af3ba6eb-9a2d-ffef-9000-581d10431b7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|af3ba6eb-9a2d-ffef-9000-581d10431b7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998ed61ca
                    },
                    "e-53": {
                        id: "e-53",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-52"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|af3ba6eb-9a2d-ffef-9000-581d10431b7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|af3ba6eb-9a2d-ffef-9000-581d10431b7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998ed61ca
                    },
                    "e-54": {
                        id: "e-54",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-55"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|8bada4a5-c0f2-517c-1422-2c68c8c2ca8c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|8bada4a5-c0f2-517c-1422-2c68c8c2ca8c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998eddc1b
                    },
                    "e-55": {
                        id: "e-55",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-54"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|8bada4a5-c0f2-517c-1422-2c68c8c2ca8c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|8bada4a5-c0f2-517c-1422-2c68c8c2ca8c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998eddc1b
                    },
                    "e-60": {
                        id: "e-60",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-61"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998ff2354
                    },
                    "e-61": {
                        id: "e-61",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-60"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19998ff2355
                    },
                    "e-72": {
                        id: "e-72",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-73"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432d1|95e67cc3-6060-3b60-dbb7-40b90141ddab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d1|95e67cc3-6060-3b60-dbb7-40b90141ddab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999911098f
                    },
                    "e-73": {
                        id: "e-73",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-72"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432d1|95e67cc3-6060-3b60-dbb7-40b90141ddab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d1|95e67cc3-6060-3b60-dbb7-40b90141ddab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999911098f
                    },
                    "e-84": {
                        id: "e-84",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-79",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-85"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|cf27c4d0-3b85-9b58-6259-b78f94ac67fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|cf27c4d0-3b85-9b58-6259-b78f94ac67fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19999142c37
                    },
                    "e-85": {
                        id: "e-85",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-80",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-84"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|cf27c4d0-3b85-9b58-6259-b78f94ac67fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|cf27c4d0-3b85-9b58-6259-b78f94ac67fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19999142c37
                    },
                    "e-90": {
                        id: "e-90",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-91"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e4|98fb0939-ed5b-d69d-abd8-6e271fe93023",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|98fb0939-ed5b-d69d-abd8-6e271fe93023",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999916a038
                    },
                    "e-91": {
                        id: "e-91",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-90"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e4|98fb0939-ed5b-d69d-abd8-6e271fe93023",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|98fb0939-ed5b-d69d-abd8-6e271fe93023",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999916a038
                    },
                    "e-92": {
                        id: "e-92",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-93"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e4|c03038d7-89a8-35b0-5142-68132be51203",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|c03038d7-89a8-35b0-5142-68132be51203",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999916f4f5
                    },
                    "e-93": {
                        id: "e-93",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-92"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e4|c03038d7-89a8-35b0-5142-68132be51203",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|c03038d7-89a8-35b0-5142-68132be51203",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999916f4f6
                    },
                    "e-94": {
                        id: "e-94",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-95"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e3|52448570-3c9a-45a9-029f-cd0f8b05ecfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|52448570-3c9a-45a9-029f-cd0f8b05ecfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19999179907
                    },
                    "e-95": {
                        id: "e-95",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-94"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e3|52448570-3c9a-45a9-029f-cd0f8b05ecfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|52448570-3c9a-45a9-029f-cd0f8b05ecfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19999179908
                    },
                    "e-96": {
                        id: "e-96",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-97"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e3|7e0eeed4-c13a-599d-5ec5-98c6a689c74a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|7e0eeed4-c13a-599d-5ec5-98c6a689c74a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19999186196
                    },
                    "e-97": {
                        id: "e-97",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-96"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e3|7e0eeed4-c13a-599d-5ec5-98c6a689c74a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|7e0eeed4-c13a-599d-5ec5-98c6a689c74a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19999186197
                    },
                    "e-98": {
                        id: "e-98",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-99"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e0|5729c3b9-d3c2-4a6b-d913-feedbf9cabfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|5729c3b9-d3c2-4a6b-d913-feedbf9cabfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999918e5d7
                    },
                    "e-99": {
                        id: "e-99",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-98"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e0|5729c3b9-d3c2-4a6b-d913-feedbf9cabfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|5729c3b9-d3c2-4a6b-d913-feedbf9cabfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999918e5d8
                    },
                    "e-100": {
                        id: "e-100",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-101"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e0|9a172c42-7bb0-cfa4-9758-954775ea97be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|9a172c42-7bb0-cfa4-9758-954775ea97be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199991ac680
                    },
                    "e-101": {
                        id: "e-101",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-100"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432e0|9a172c42-7bb0-cfa4-9758-954775ea97be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|9a172c42-7bb0-cfa4-9758-954775ea97be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199991ac680
                    },
                    "e-126": {
                        id: "e-126",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growIn",
                                autoStopEventId: "e-127"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|7e41474e-78c0-6634-ef68-a80792d1018f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|7e41474e-78c0-6634-ef68-a80792d1018f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19999339182
                    },
                    "e-134": {
                        id: "e-134",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-135"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|122431b4-dec2-3cd7-14dd-e4554b67ad3d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|122431b4-dec2-3cd7-14dd-e4554b67ad3d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199993aa6a5
                    },
                    "e-138": {
                        id: "e-138",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-139"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d2458745a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d2458745a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199993bb513
                    },
                    "e-146": {
                        id: "e-146",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-147"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c29f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c29f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199993ed29c
                    },
                    "e-148": {
                        id: "e-148",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-149"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "928c2780-a577-8574-6700-6a0d8d279a82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "928c2780-a577-8574-6700-6a0d8d279a82",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x199993f8e6c
                    },
                    "e-156": {
                        id: "e-156",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-157"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|d37d1e87-2974-20ae-7eb8-a829bab34ed9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|d37d1e87-2974-20ae-7eb8-a829bab34ed9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 100,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199994876dc
                    },
                    "e-160": {
                        id: "e-160",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-161"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|04524443-5946-8a53-1c24-802d3baf539c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|04524443-5946-8a53-1c24-802d3baf539c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199994a033e
                    },
                    "e-162": {
                        id: "e-162",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-163"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|6d4f6b3b-22dc-2a6e-d6e3-10af3ed8837d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|6d4f6b3b-22dc-2a6e-d6e3-10af3ed8837d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199994a5f0e
                    },
                    "e-164": {
                        id: "e-164",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growIn",
                                autoStopEventId: "e-165"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "f72740ec-34a6-2971-5d23-bb4c520904ad",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "f72740ec-34a6-2971-5d23-bb4c520904ad",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199994b1106
                    },
                    "e-206": {
                        id: "e-206",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growIn",
                                autoStopEventId: "e-207"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d24587460",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d24587460",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199995cd038
                    },
                    "e-210": {
                        id: "e-210",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growIn",
                                autoStopEventId: "e-211"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d24587464",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d24587464",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199995dd3d7
                    },
                    "e-307": {
                        id: "e-307",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-34",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-308"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "f51816db-0390-acf4-62be-337632aa2abd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "f51816db-0390-acf4-62be-337632aa2abd",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999e54551d
                    },
                    "e-309": {
                        id: "e-309",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-35",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-310"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "e307361d-a94c-2cab-47c4-ea521c4c0ef1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e307361d-a94c-2cab-47c4-ea521c4c0ef1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999e6d2b7e
                    },
                    "e-313": {
                        id: "e-313",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-36",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-314"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e6|68ce88d4e1e4651f530a777600000000000b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e6|68ce88d4e1e4651f530a777600000000000b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999ec194af
                    },
                    "e-333": {
                        id: "e-333",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-334"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|3574e17a-79e0-2704-18fc-a0ec201dde88",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|3574e17a-79e0-2704-18fc-a0ec201dde88",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999f1e6c5a
                    },
                    "e-395": {
                        id: "e-395",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SHRINK_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "shrinkIn",
                                autoStopEventId: "e-396"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d5|922a6ca7-553d-bdf3-e846-c394268f91f4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d5|922a6ca7-553d-bdf3-e846-c394268f91f4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 15,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999f366ad5
                    },
                    "e-413": {
                        id: "e-413",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-414"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432d5|f45524ac-f890-b7ef-5354-ec53de51aafe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d5|f45524ac-f890-b7ef-5354-ec53de51aafe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999f3b745f
                    },
                    "e-414": {
                        id: "e-414",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-413"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432d5|f45524ac-f890-b7ef-5354-ec53de51aafe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d5|f45524ac-f890-b7ef-5354-ec53de51aafe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x1999f3b745f
                    },
                    "e-445": {
                        id: "e-445",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-446"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d1|95e67cc3-6060-3b60-dbb7-40b90141ddab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d1|95e67cc3-6060-3b60-dbb7-40b90141ddab",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999f45353f
                    },
                    "e-551": {
                        id: "e-551",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-552"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|71837b9e-b80a-5763-23bd-b3306f05e837",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|71837b9e-b80a-5763-23bd-b3306f05e837",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999f9440f0
                    },
                    "e-599": {
                        id: "e-599",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-600"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d7|25deb951-24bb-94a2-9287-75e05d10aca3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d7|25deb951-24bb-94a2-9287-75e05d10aca3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999f9eca09
                    },
                    "e-613": {
                        id: "e-613",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-614"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d6|4cd19fd4-a61d-88a4-5700-f5d56f81f41d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d6|4cd19fd4-a61d-88a4-5700-f5d56f81f41d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fb68824
                    },
                    "e-633": {
                        id: "e-633",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-634"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e4|98fb0939-ed5b-d69d-abd8-6e271fe93023",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|98fb0939-ed5b-d69d-abd8-6e271fe93023",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fbd6884
                    },
                    "e-635": {
                        id: "e-635",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-636"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e4|7d3cb18b-287b-64db-a431-a678f5a8c95c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|7d3cb18b-287b-64db-a431-a678f5a8c95c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fbdeaed
                    },
                    "e-637": {
                        id: "e-637",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-638"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e4|222d3ad9-f352-79c8-c6ad-ae06df8a0ea9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|222d3ad9-f352-79c8-c6ad-ae06df8a0ea9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fbeb6c5
                    },
                    "e-651": {
                        id: "e-651",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-652"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|52448570-3c9a-45a9-029f-cd0f8b05ecfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|52448570-3c9a-45a9-029f-cd0f8b05ecfa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fc38db5
                    },
                    "e-653": {
                        id: "e-653",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-654"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|1852ea22-9b0a-e930-2035-334ededd8922",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|1852ea22-9b0a-e930-2035-334ededd8922",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fc411f5
                    },
                    "e-655": {
                        id: "e-655",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-656"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|de3b6cd1-c517-8d6a-595c-bf5eb0291b43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|de3b6cd1-c517-8d6a-595c-bf5eb0291b43",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fc45f4d
                    },
                    "e-667": {
                        id: "e-667",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_BIG_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growBigIn",
                                autoStopEventId: "e-668"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|6b4b2a02-f538-0d48-50f0-447736b73543",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|6b4b2a02-f538-0d48-50f0-447736b73543",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fc72df4
                    },
                    "e-669": {
                        id: "e-669",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_BIG_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growBigIn",
                                autoStopEventId: "e-670"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|91bd28f2-04ae-a6f1-ca0c-ec1ee3e2a1c8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|91bd28f2-04ae-a6f1-ca0c-ec1ee3e2a1c8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fc793ec
                    },
                    "e-671": {
                        id: "e-671",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_BIG_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growBigIn",
                                autoStopEventId: "e-672"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|db360a83-5c76-334a-97cf-9f989b554511",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|db360a83-5c76-334a-97cf-9f989b554511",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fc7f026
                    },
                    "e-673": {
                        id: "e-673",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-674"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|5729c3b9-d3c2-4a6b-d913-feedbf9cabfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|5729c3b9-d3c2-4a6b-d913-feedbf9cabfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fc86f37
                    },
                    "e-675": {
                        id: "e-675",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-676"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|2763f678-7cd3-7f9c-1b0a-7867417a74ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|2763f678-7cd3-7f9c-1b0a-7867417a74ce",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fc9001f
                    },
                    "e-677": {
                        id: "e-677",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-678"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|e7c5d186-ca85-d558-ea64-b8c428225718",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|e7c5d186-ca85-d558-ea64-b8c428225718",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fc96e27
                    },
                    "e-691": {
                        id: "e-691",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInTop",
                                autoStopEventId: "e-692"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432da|d65c0866-6cd8-abdb-a417-28da3f36423b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432da|d65c0866-6cd8-abdb-a417-28da3f36423b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 400,
                            direction: "TOP",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd27f85
                    },
                    "e-705": {
                        id: "e-705",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-706"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb09",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb09",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd55615
                    },
                    "e-707": {
                        id: "e-707",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growIn",
                                autoStopEventId: "e-708"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb0a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb0a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fd55615
                    },
                    "e-709": {
                        id: "e-709",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growIn",
                                autoStopEventId: "e-710"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb0d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb0d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fd55615
                    },
                    "e-733": {
                        id: "e-733",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-734"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb3b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb3b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd55615
                    },
                    "e-739": {
                        id: "e-739",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInLeft",
                                autoStopEventId: "e-740"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb42",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd55615
                    },
                    "e-757": {
                        id: "e-757",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-758"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432dd|68ca3cbe8938b277a8dfef0400000000000c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432dd|68ca3cbe8938b277a8dfef0400000000000c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd779b6
                    },
                    "e-759": {
                        id: "e-759",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GROW_BIG_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "growBigIn",
                                autoStopEventId: "e-760"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432dd|68ca3cbe8938b277a8dfef04000000000096",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432dd|68ca3cbe8938b277a8dfef04000000000096",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fd7a419
                    },
                    "e-761": {
                        id: "e-761",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-762"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432de|fb894b99-9612-849d-56e6-d814686e3389",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432de|fb894b99-9612-849d-56e6-d814686e3389",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fd80589
                    },
                    "e-763": {
                        id: "e-763",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-764"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432de|68ca3cbe8938b277a8dfef1000000000000c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432de|68ca3cbe8938b277a8dfef1000000000000c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd87e22
                    },
                    "e-765": {
                        id: "e-765",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-766"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432de|68ca3cbe8938b277a8dfef10000000000066",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432de|68ca3cbe8938b277a8dfef10000000000066",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd8b1b1
                    },
                    "e-767": {
                        id: "e-767",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-768"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432df|c2c3031b-0f82-671a-011e-8eb6896f4f38",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432df|c2c3031b-0f82-671a-011e-8eb6896f4f38",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fd92848
                    },
                    "e-769": {
                        id: "e-769",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-770"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432df|68ca3cbe8938b277a8dfef1c00000000000c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432df|68ca3cbe8938b277a8dfef1c00000000000c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd95bdf
                    },
                    "e-771": {
                        id: "e-771",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInLeft",
                                autoStopEventId: "e-772"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432df|68ca3cbe8938b277a8dfef1c000000000061",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432df|68ca3cbe8938b277a8dfef1c000000000061",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x1999fd98a6b
                    },
                    "e-773": {
                        id: "e-773",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-774"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e7|68ce99d3d55a756fcca3d7c900000000000e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e7|68ce99d3d55a756fcca3d7c900000000000e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fda52fb
                    },
                    "e-775": {
                        id: "e-775",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-776"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e7|68ce99d3d55a756fcca3d7c9000000000010",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e7|68ce99d3d55a756fcca3d7c9000000000010",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fda9811
                    },
                    "e-781": {
                        id: "e-781",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-782"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e6|e06f2f6b-95f1-6bc9-191b-a8d7d2787237",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e6|e06f2f6b-95f1-6bc9-191b-a8d7d2787237",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x1999fdc428a
                    },
                    "e-789": {
                        id: "e-789",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-790"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d3|7a9a0e49-1e4c-b2a7-ac98-ba05ae884a4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d3|7a9a0e49-1e4c-b2a7-ac98-ba05ae884a4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x1999fe0821a
                    },
                    "e-817": {
                        id: "e-817",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-40",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-818"
                            }
                        },
                        mediaQueries: ["main", "medium"],
                        target: {
                            id: "697a729c6780635254f4326d|cab279d3-ed2b-84a9-5978-74dc111a80b8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|cab279d3-ed2b-84a9-5978-74dc111a80b8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199af5f5dd0
                    },
                    "e-821": {
                        id: "e-821",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-42",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|afc257f9-111a-0923-0142-aa801a2d7eaf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|afc257f9-111a-0923-0142-aa801a2d7eaf",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-42-p",
                            smoothing: 100,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x199b2e22c4a
                    },
                    "e-872": {
                        id: "e-872",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-43",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-873"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|b1c0b488-f427-d55b-8ad5-135dd29fc028",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|b1c0b488-f427-d55b-8ad5-135dd29fc028",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199b3d0c992
                    },
                    "e-890": {
                        id: "e-890",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-44",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-891"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|4639a693-9ce1-bd66-dfba-5fef2a7871e2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4639a693-9ce1-bd66-dfba-5fef2a7871e2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199b40191bf
                    },
                    "e-892": {
                        id: "e-892",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-45",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|5af6118a-51d6-f5a4-26b2-8daa8d3f13cb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|5af6118a-51d6-f5a4-26b2-8daa8d3f13cb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-45-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x199b42d73bf
                    },
                    "e-893": {
                        id: "e-893",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-46",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-894"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|6ab31c93-abe0-66f8-bea4-1f28258b3e2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|6ab31c93-abe0-66f8-bea4-1f28258b3e2d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199b7891c58
                    },
                    "e-918": {
                        id: "e-918",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "PAGE_START",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-66",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-919"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d",
                            appliesTo: "PAGE",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199b874b033
                    },
                    "e-930": {
                        id: "e-930",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-931"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c2a1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c2a1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199b98a8fac
                    },
                    "e-969": {
                        id: "e-969",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-56",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d2458745a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|e08e49ba-59e8-8b7b-0b57-183d2458745a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-56-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x199bd3f1f76
                    },
                    "e-970": {
                        id: "e-970",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-971"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f255",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f255",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4db3fc
                    },
                    "e-971": {
                        id: "e-971",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-970"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f255",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f255",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4db3fc
                    },
                    "e-972": {
                        id: "e-972",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FLIP_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "flipInLeft",
                                autoStopEventId: "e-973"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f255",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f255",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x199bd4db3fc
                    },
                    "e-974": {
                        id: "e-974",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-975"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f256",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f256",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4db3fc
                    },
                    "e-975": {
                        id: "e-975",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-974"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f256",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f256",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4db3fc
                    },
                    "e-976": {
                        id: "e-976",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SHRINK_BIG_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "shrinkBigIn",
                                autoStopEventId: "e-977"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f258",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|65448e23-a08c-e8b1-8137-4b895f12f258",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199bd4db3fc
                    },
                    "e-978": {
                        id: "e-978",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-17",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-979"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4dbf19
                    },
                    "e-979": {
                        id: "e-979",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-18",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-978"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4dbf19
                    },
                    "e-980": {
                        id: "e-980",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FLIP_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "flipInLeft",
                                autoStopEventId: "e-981"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x199bd4dbf19
                    },
                    "e-982": {
                        id: "e-982",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-983"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4dbf19
                    },
                    "e-983": {
                        id: "e-983",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-982"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x199bd4dbf19
                    },
                    "e-984": {
                        id: "e-984",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SHRINK_BIG_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "shrinkBigIn",
                                autoStopEventId: "e-985"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|42e49691-31a3-7d95-0511-3151a8c2b1b5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x199bd4dbf19
                    },
                    "e-990": {
                        id: "e-990",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-991"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|5eb99b6d-665d-5974-f364-0cc4a1633743",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|5eb99b6d-665d-5974-f364-0cc4a1633743",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a063aa844
                    },
                    "e-992": {
                        id: "e-992",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-60",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-993"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|8b96de9c-c0b2-22b2-a2ee-36fae1ee559e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|8b96de9c-c0b2-22b2-a2ee-36fae1ee559e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0640fd10
                    },
                    "e-994": {
                        id: "e-994",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-61",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-995"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "e3909c1b-a8cb-6d27-5d10-0d858d7f3c16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "e3909c1b-a8cb-6d27-5d10-0d858d7f3c16",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a06440689
                    },
                    "e-996": {
                        id: "e-996",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-62",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-997"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "0a80c046-f26f-9f52-3da2-77a600eb4244",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "0a80c046-f26f-9f52-3da2-77a600eb4244",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !0,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a06454347
                    },
                    "e-998": {
                        id: "e-998",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-63",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-999"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "91c48d82-d074-83d2-cb74-5d5a1098f6c4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "91c48d82-d074-83d2-cb74-5d5a1098f6c4",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a064a604c
                    },
                    "e-1010": {
                        id: "e-1010",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1011"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|2b94d172-80dc-06b8-6253-c0a22e5f5387",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|2b94d172-80dc-06b8-6253-c0a22e5f5387",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a0686727e
                    },
                    "e-1012": {
                        id: "e-1012",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1013"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|2b94d172-80dc-06b8-6253-c0a22e5f5389",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|2b94d172-80dc-06b8-6253-c0a22e5f5389",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a0686bffd
                    },
                    "e-1016": {
                        id: "e-1016",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1017"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|f22c2292-9904-cd86-dbae-a77ea49eff1d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|f22c2292-9904-cd86-dbae-a77ea49eff1d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a06891636
                    },
                    "e-1024": {
                        id: "e-1024",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1025"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|b8872f6d-f43c-5cd6-5ddb-9d95be46cd37",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|b8872f6d-f43c-5cd6-5ddb-9d95be46cd37",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a068bb440
                    },
                    "e-1026": {
                        id: "e-1026",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1027"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|c85ed584-78c9-ac2d-5d52-b39fb97be788",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|c85ed584-78c9-ac2d-5d52-b39fb97be788",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a068ed543
                    },
                    "e-1028": {
                        id: "e-1028",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1029"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|8b114457-bf82-2041-37c8-f50c86a756e9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|8b114457-bf82-2041-37c8-f50c86a756e9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 300,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a068f2717
                    },
                    "e-1030": {
                        id: "e-1030",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1031"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "928c2780-a577-8574-6700-6a0d8d279a87",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "928c2780-a577-8574-6700-6a0d8d279a87",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a0693dfd6
                    },
                    "e-1032": {
                        id: "e-1032",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1033"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "928c2780-a577-8574-6700-6a0d8d279a89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "928c2780-a577-8574-6700-6a0d8d279a89",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a069412e6
                    },
                    "e-1034": {
                        id: "e-1034",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1035"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "928c2780-a577-8574-6700-6a0d8d279a90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "928c2780-a577-8574-6700-6a0d8d279a90",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a0694aa2a
                    },
                    "e-1036": {
                        id: "e-1036",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1037"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|508bce8b-3307-3328-c2c3-21744ab029bb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|508bce8b-3307-3328-c2c3-21744ab029bb",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a06c76856
                    },
                    "e-1038": {
                        id: "e-1038",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1039"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|ca6b8782-b071-6eb9-5c26-b04f41e3b530",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|ca6b8782-b071-6eb9-5c26-b04f41e3b530",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a06ca256a
                    },
                    "e-1040": {
                        id: "e-1040",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-67",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|223cdefb-3699-fbe0-573d-051793d7f738",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|223cdefb-3699-fbe0-573d-051793d7f738",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-67-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a06dd9cda
                    },
                    "e-1041": {
                        id: "e-1041",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1042"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|91c28495-a2a6-015a-e323-dab3c1031c39",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|91c28495-a2a6-015a-e323-dab3c1031c39",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 10,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a06e8459d
                    },
                    "e-1043": {
                        id: "e-1043",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1044"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|3dbbddc1-b3a4-f839-c0d4-9d67d6b45156",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|3dbbddc1-b3a4-f839-c0d4-9d67d6b45156",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a06e87fc8
                    },
                    "e-1045": {
                        id: "e-1045",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1046"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|aa9dacef-dee0-bcea-fe41-4ecddb43cfe1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|aa9dacef-dee0-bcea-fe41-4ecddb43cfe1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a06e9f966
                    },
                    "e-1049": {
                        id: "e-1049",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "SCROLLING_IN_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_CONTINUOUS_ACTION",
                            config: {
                                actionListId: "a-68",
                                affectedElements: {},
                                duration: 0
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432a4|d21e93a7-40bd-2d93-dd96-d1c665b71592",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|d21e93a7-40bd-2d93-dd96-d1c665b71592",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: [{
                            continuousParameterGroupId: "a-68-p",
                            smoothing: 90,
                            startsEntering: !0,
                            addStartOffset: !1,
                            addOffsetValue: 50,
                            startsExiting: !1,
                            addEndOffset: !1,
                            endOffsetValue: 50
                        }],
                        createdOn: 0x19a06eb6f31
                    },
                    "e-1050": {
                        id: "e-1050",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1051"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|93abe0e3-4ca2-1d47-bfc6-ec4112405506",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|93abe0e3-4ca2-1d47-bfc6-ec4112405506",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a06f1ae02
                    },
                    "e-1052": {
                        id: "e-1052",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1053"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|e962932c-9880-4ebf-e092-c646910ad650",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|e962932c-9880-4ebf-e092-c646910ad650",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a06f1d1f7
                    },
                    "e-1066": {
                        id: "e-1066",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1067"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d5|32602103-5ca9-c3de-7046-0e7abef56017",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d5|32602103-5ca9-c3de-7046-0e7abef56017",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a070937f0
                    },
                    "e-1068": {
                        id: "e-1068",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1069"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d5|d992e4af-c40f-62d2-1987-c1ecca042031",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d5|d992e4af-c40f-62d2-1987-c1ecca042031",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07096ce5
                    },
                    "e-1070": {
                        id: "e-1070",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1071"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d5|f45524ac-f890-b7ef-5354-ec53de51aafc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d5|f45524ac-f890-b7ef-5354-ec53de51aafc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a070999a8
                    },
                    "e-1072": {
                        id: "e-1072",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1073"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432c0|c8ca64bc-c0f9-bc79-c494-3286fda0679b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|c8ca64bc-c0f9-bc79-c494-3286fda0679b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a070f4ae2
                    },
                    "e-1074": {
                        id: "e-1074",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1075"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 0,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a070f7d17
                    },
                    "e-1076": {
                        id: "e-1076",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1077"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432c0|17dbe4eb-5a1e-0e89-7f49-9e4902d46989",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|17dbe4eb-5a1e-0e89-7f49-9e4902d46989",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07108617
                    },
                    "e-1078": {
                        id: "e-1078",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1079"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432c0|ebe08044-7456-6623-f487-10bf89688814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432c0|ebe08044-7456-6623-f487-10bf89688814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07111e28
                    },
                    "e-1080": {
                        id: "e-1080",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1081"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d1|d418e2b4-ac4f-79e1-3d03-c85b3b2ecb44",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d1|d418e2b4-ac4f-79e1-3d03-c85b3b2ecb44",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07126324
                    },
                    "e-1082": {
                        id: "e-1082",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1083"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d1|9cee79cd-7f1e-ba1c-c2e2-4eb98459e7aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d1|9cee79cd-7f1e-ba1c-c2e2-4eb98459e7aa",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a0712f705
                    },
                    "e-1084": {
                        id: "e-1084",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1085"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|0712efd1-2a45-f554-02da-6d4e0e207ba3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|0712efd1-2a45-f554-02da-6d4e0e207ba3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a0729a927
                    },
                    "e-1086": {
                        id: "e-1086",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1087"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|27ab411a-41f9-ff14-813a-525879a4258b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|27ab411a-41f9-ff14-813a-525879a4258b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a072a3abd
                    },
                    "e-1088": {
                        id: "e-1088",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1089"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d3|16dc727f-eab3-adc5-4f59-8bc53ec07810",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d3|16dc727f-eab3-adc5-4f59-8bc53ec07810",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a072ad5d3
                    },
                    "e-1090": {
                        id: "e-1090",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1091"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d3|77752843-f867-3dd5-ab0c-00603679733b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d3|77752843-f867-3dd5-ab0c-00603679733b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a072b30f2
                    },
                    "e-1096": {
                        id: "e-1096",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1097"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|92a70df0-177d-dea7-e451-502aef6dc977",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|92a70df0-177d-dea7-e451-502aef6dc977",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a076bf608
                    },
                    "e-1098": {
                        id: "e-1098",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1099"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|38a22889-e83c-f4ff-be79-1981e02996b3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|38a22889-e83c-f4ff-be79-1981e02996b3",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a076c4f9d
                    },
                    "e-1100": {
                        id: "e-1100",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1101"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|91a7cfd8-26e3-429a-125b-494c7521fef1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|91a7cfd8-26e3-429a-125b-494c7521fef1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a076c8e52
                    },
                    "e-1102": {
                        id: "e-1102",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInLeft",
                                autoStopEventId: "e-1103"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|a8ce1a0c-69f9-98fa-443b-0fcea3691fad",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|a8ce1a0c-69f9-98fa-443b-0fcea3691fad",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: "LEFT",
                            effectIn: !0
                        },
                        createdOn: 0x19a076ccebc
                    },
                    "e-1104": {
                        id: "e-1104",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1105"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|8881082c-ab31-e07c-cd99-57d309d8c6c8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|8881082c-ab31-e07c-cd99-57d309d8c6c8",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a076d7fb7
                    },
                    "e-1106": {
                        id: "e-1106",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1107"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|2fa13294-cf66-0a0e-5275-610686c8939e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|2fa13294-cf66-0a0e-5275-610686c8939e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a076dd5ef
                    },
                    "e-1108": {
                        id: "e-1108",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1109"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d8|9c28f6f8-718b-c60d-4464-077726985ac7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d8|9c28f6f8-718b-c60d-4464-077726985ac7",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a076e1e0b
                    },
                    "e-1110": {
                        id: "e-1110",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1111"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d7|d9bcf271-4410-8a99-77bd-30375cfa4589",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d7|d9bcf271-4410-8a99-77bd-30375cfa4589",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a076f313b
                    },
                    "e-1112": {
                        id: "e-1112",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1113"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d6|d19b921b-0f56-7946-a60b-7179971523a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d6|d19b921b-0f56-7946-a60b-7179971523a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07716e9b
                    },
                    "e-1116": {
                        id: "e-1116",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1117"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e4|a441c36a-d69e-ca97-b9c8-b6087e3eda58",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|a441c36a-d69e-ca97-b9c8-b6087e3eda58",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07786de4
                    },
                    "e-1118": {
                        id: "e-1118",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1119"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e4|521a0872-f8fb-f1fe-828c-5e59a31d6138",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|521a0872-f8fb-f1fe-828c-5e59a31d6138",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07798b02
                    },
                    "e-1120": {
                        id: "e-1120",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1121"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|b84f85b5-09e9-7218-44b6-af56348e554d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|b84f85b5-09e9-7218-44b6-af56348e554d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a077a75df
                    },
                    "e-1122": {
                        id: "e-1122",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1123"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|3c2ca80d-14cc-5f55-9aab-20afa908bea1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|3c2ca80d-14cc-5f55-9aab-20afa908bea1",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a077ab00d
                    },
                    "e-1124": {
                        id: "e-1124",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1125"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|3ae7444a-e408-a303-a9c8-6f70e9934e3d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|3ae7444a-e408-a303-a9c8-6f70e9934e3d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a077c108a
                    },
                    "e-1126": {
                        id: "e-1126",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1127"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|c665c259-503a-cfb4-9f4f-469991de8e6c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|c665c259-503a-cfb4-9f4f-469991de8e6c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a077d71f8
                    },
                    "e-1128": {
                        id: "e-1128",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1129"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|5231cfc0-bce7-b09f-00f4-60122e5d6311",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|5231cfc0-bce7-b09f-00f4-60122e5d6311",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a077db243
                    },
                    "e-1130": {
                        id: "e-1130",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1131"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|ce2d31df-69d8-7643-3004-991796e9ab30",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|ce2d31df-69d8-7643-3004-991796e9ab30",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a077e91a2
                    },
                    "e-1132": {
                        id: "e-1132",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1133"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432da|034f3420-c754-7831-3f34-1a78311d3814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432da|034f3420-c754-7831-3f34-1a78311d3814",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a077f0978
                    },
                    "e-1134": {
                        id: "e-1134",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1135"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432da|907d7d7b-5884-f9f3-05e6-5b7871988754",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432da|907d7d7b-5884-f9f3-05e6-5b7871988754",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a077fa035
                    },
                    "e-1136": {
                        id: "e-1136",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1137"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb04",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07802050
                    },
                    "e-1138": {
                        id: "e-1138",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1139"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432dd|490023aa-5461-bd82-4b46-f14971d113df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432dd|490023aa-5461-bd82-4b46-f14971d113df",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07818fd2
                    },
                    "e-1140": {
                        id: "e-1140",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1141"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e7|0157150d-a3b5-7c06-ecc8-424209a300b5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e7|0157150d-a3b5-7c06-ecc8-424209a300b5",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a0782bb20
                    },
                    "e-1142": {
                        id: "e-1142",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1143"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e6|748fbd12-94de-3962-8c80-561a30418a3c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e6|748fbd12-94de-3962-8c80-561a30418a3c",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a0783b1f2
                    },
                    "e-1144": {
                        id: "e-1144",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1145"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|1b19bb20-dccc-588b-19e8-f1a69778e1d9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|1b19bb20-dccc-588b-19e8-f1a69778e1d9",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07ca6c09
                    },
                    "e-1146": {
                        id: "e-1146",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1147"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|0a268dfd-f2db-dc8f-64b3-1eec18493468",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|0a268dfd-f2db-dc8f-64b3-1eec18493468",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cad845
                    },
                    "e-1148": {
                        id: "e-1148",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1149"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|0ddede87-a362-78b1-25ec-c72cc77dad5b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|0ddede87-a362-78b1-25ec-c72cc77dad5b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 200,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cb113a
                    },
                    "e-1150": {
                        id: "e-1150",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1151"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|78708a12-836e-6fb2-f71f-34906270d07e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|78708a12-836e-6fb2-f71f-34906270d07e",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cd5178
                    },
                    "e-1152": {
                        id: "e-1152",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1153"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c2a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c2a2",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cd842c
                    },
                    "e-1154": {
                        id: "e-1154",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1155"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|557e8eb3-60b0-e15c-3556-d9d3f5fdbb9a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|557e8eb3-60b0-e15c-3556-d9d3f5fdbb9a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 180,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07ce7f2b
                    },
                    "e-1156": {
                        id: "e-1156",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1157"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c2a0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c2a0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 180,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cebba3
                    },
                    "e-1158": {
                        id: "e-1158",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1159"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|2375c0d9-ae9a-6e28-6019-3b103ae29a61",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|2375c0d9-ae9a-6e28-6019-3b103ae29a61",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cf328d
                    },
                    "e-1160": {
                        id: "e-1160",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1161"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|393b256c-45ac-cab9-00c2-086fc42e1b9f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|393b256c-45ac-cab9-00c2-086fc42e1b9f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cf870f
                    },
                    "e-1162": {
                        id: "e-1162",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1163"
                            }
                        },
                        mediaQueries: ["medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f4326d|498d7554-e5c1-4751-9a94-613467e2e470",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|498d7554-e5c1-4751-9a94-613467e2e470",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 150,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07cfec0a
                    },
                    "e-1164": {
                        id: "e-1164",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1165"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432a4|e0e23f16-fbe1-2a90-6efa-05fc1d56045b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432a4|e0e23f16-fbe1-2a90-6efa-05fc1d56045b",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 180,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07d37dec
                    },
                    "e-1182": {
                        id: "e-1182",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1183"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d1|1fc70f8f-6f1b-4a83-b42e-c0d26bab1cfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d1|1fc70f8f-6f1b-4a83-b42e-c0d26bab1cfc",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07dc42b7
                    },
                    "e-1190": {
                        id: "e-1190",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1191"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|cf27c4d0-3b85-9b58-6259-b78f94ac67fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|cf27c4d0-3b85-9b58-6259-b78f94ac67fe",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a07e78d82
                    },
                    "e-1198": {
                        id: "e-1198",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1199"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e4|c03038d7-89a8-35b0-5142-68132be51203",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e4|c03038d7-89a8-35b0-5142-68132be51203",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07f54e6a
                    },
                    "e-1200": {
                        id: "e-1200",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1201"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e3|7e0eeed4-c13a-599d-5ec5-98c6a689c74a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e3|7e0eeed4-c13a-599d-5ec5-98c6a689c74a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07f72a97
                    },
                    "e-1202": {
                        id: "e-1202",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1203"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432e0|9a172c42-7bb0-cfa4-9758-954775ea97be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432e0|9a172c42-7bb0-cfa4-9758-954775ea97be",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 20,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07f890ec
                    },
                    "e-1204": {
                        id: "e-1204",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-73",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1205"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a07fa2d17
                    },
                    "e-1205": {
                        id: "e-1205",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-74",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1204"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a07fa2d17
                    },
                    "e-1206": {
                        id: "e-1206",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "SLIDE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "slideInBottom",
                                autoStopEventId: "e-1207"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb15",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb15",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 250,
                            direction: "BOTTOM",
                            effectIn: !0
                        },
                        createdOn: 0x19a07fb0b68
                    },
                    "e-1210": {
                        id: "e-1210",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "SCROLL_INTO_VIEW",
                        action: {
                            id: "",
                            actionTypeId: "FADE_EFFECT",
                            instant: !1,
                            config: {
                                actionListId: "fadeIn",
                                autoStopEventId: "e-1211"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|c9bcbda1-4914-fbc6-6b9b-b2c19191e808",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|c9bcbda1-4914-fbc6-6b9b-b2c19191e808",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: 0,
                            scrollOffsetUnit: "%",
                            delay: 220,
                            direction: null,
                            effectIn: !0
                        },
                        createdOn: 0x19a09e391a3
                    },
                    "e-1218": {
                        id: "e-1218",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1219"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|f9bace02-e330-d087-0af4-1e2416cc0bc0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|f9bace02-e330-d087-0af4-1e2416cc0bc0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c2f4e79
                    },
                    "e-1219": {
                        id: "e-1219",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1218"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|f9bace02-e330-d087-0af4-1e2416cc0bc0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|f9bace02-e330-d087-0af4-1e2416cc0bc0",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c2f4e7f
                    },
                    "e-1220": {
                        id: "e-1220",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-21",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1221"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c29f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c29f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c2fb1fc
                    },
                    "e-1221": {
                        id: "e-1221",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-22",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1220"
                            }
                        },
                        mediaQueries: ["main"],
                        target: {
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c29f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f4326d|4b59c6b9-2c88-b1bb-32b2-2e17ad99c29f",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c2fb204
                    },
                    "e-1222": {
                        id: "e-1222",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-77",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1223"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c55f222
                    },
                    "e-1223": {
                        id: "e-1223",
                        name: "",
                        animationType: "preset",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-78",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1222"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c55f222
                    },
                    "e-1225": {
                        id: "e-1225",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OVER",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-82",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1226"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d3|7a9a0e49-1e4c-b2a7-ac98-ba05ae884a4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d3|7a9a0e49-1e4c-b2a7-ac98-ba05ae884a4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c73a2a2
                    },
                    "e-1226": {
                        id: "e-1226",
                        name: "",
                        animationType: "custom",
                        eventTypeId: "MOUSE_OUT",
                        action: {
                            id: "",
                            actionTypeId: "GENERAL_START_ACTION",
                            config: {
                                delay: 0,
                                easing: "",
                                duration: 0,
                                actionListId: "a-83",
                                affectedElements: {},
                                playInReverse: !1,
                                autoStopEventId: "e-1225"
                            }
                        },
                        mediaQueries: ["main", "medium", "small", "tiny"],
                        target: {
                            id: "697a729c6780635254f432d3|7a9a0e49-1e4c-b2a7-ac98-ba05ae884a4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        },
                        targets: [{
                            id: "697a729c6780635254f432d3|7a9a0e49-1e4c-b2a7-ac98-ba05ae884a4a",
                            appliesTo: "ELEMENT",
                            styleBlockIds: []
                        }],
                        config: {
                            loop: !1,
                            playInReverse: !1,
                            scrollOffsetValue: null,
                            scrollOffsetUnit: null,
                            delay: null,
                            direction: null,
                            effectIn: null
                        },
                        createdOn: 0x19a0c73a2a7
                    }
                },
                actionLists: {
                    a: {
                        id: "a",
                        title: "Dropdown Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["75f9949c-29fb-cb73-ebc2-30808ce32d8b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".mega-menu-links-content-wrap",
                                        selectorGuids: ["66fbef8d-1c4a-abca-5502-51ffa8021452"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["75f9949c-29fb-cb73-ebc2-30808ce32d8b"]
                                    },
                                    zValue: -90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".mega-menu-links-content-wrap",
                                        selectorGuids: ["66fbef8d-1c4a-abca-5502-51ffa8021452"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1995b3d24f0
                    },
                    "a-2": {
                        id: "a-2",
                        title: "Dropdown Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-2-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["75f9949c-29fb-cb73-ebc2-30808ce32d8b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-2-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".mega-menu-links-content-wrap",
                                        selectorGuids: ["66fbef8d-1c4a-abca-5502-51ffa8021452"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1995b3d24f0
                    },
                    "a-3": {
                        id: "a-3",
                        title: "Button Black Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-3-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "9382defc-7104-f8ce-240f-b908b80f9071"
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-white.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "abe5e755-83a4-3af4-13cb-881b054112e7", "5740fdba-51e3-53bd-09f6-1118439590b9"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-3-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "9382defc-7104-f8ce-240f-b908b80f9071"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-3-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-3-n-6",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-white.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "abe5e755-83a4-3af4-13cb-881b054112e7", "5740fdba-51e3-53bd-09f6-1118439590b9"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19965cba328
                    },
                    "a-4": {
                        id: "a-4",
                        title: "Button Black Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-4-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "9382defc-7104-f8ce-240f-b908b80f9071"
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-4-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-white.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "abe5e755-83a4-3af4-13cb-881b054112e7", "5740fdba-51e3-53bd-09f6-1118439590b9"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-4-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-4-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19965cba328
                    },
                    "a-5": {
                        id: "a-5",
                        title: "White Button Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-5-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "337d3348-69ff-3881-7ef1-bd908b587124"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-5-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-black.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "d3c28f31-52d4-c2b7-35a1-46388b2b078f", "dce374ab-c702-4f3e-b633-4763e22b4a85"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-5-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-5-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-5-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "337d3348-69ff-3881-7ef1-bd908b587124"
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-5-n-8",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-5-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-5-n-6",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-black.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "d3c28f31-52d4-c2b7-35a1-46388b2b078f", "dce374ab-c702-4f3e-b633-4763e22b4a85"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19966c2d9fc
                    },
                    "a-6": {
                        id: "a-6",
                        title: "White Button Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-6-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "337d3348-69ff-3881-7ef1-bd908b587124"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-6-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-black.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "d3c28f31-52d4-c2b7-35a1-46388b2b078f", "dce374ab-c702-4f3e-b633-4763e22b4a85"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-6-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-6-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19966c2d9fc
                    },
                    "a-7": {
                        id: "a-7",
                        title: "Dropdown Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-7-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["75f9949c-29fb-cb73-ebc2-30808ce32d8b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-7-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".mega-menu-links-content-wrap",
                                        selectorGuids: ["66fbef8d-1c4a-abca-5502-51ffa8021452"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-7-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["75f9949c-29fb-cb73-ebc2-30808ce32d8b"]
                                    },
                                    zValue: -90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-7-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".mega-menu-links-content-wrap",
                                        selectorGuids: ["66fbef8d-1c4a-abca-5502-51ffa8021452"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1995b3d24f0
                    },
                    "a-8": {
                        id: "a-8",
                        title: "Dropdown Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-8-n",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".dropdown-icon",
                                        selectorGuids: ["75f9949c-29fb-cb73-ebc2-30808ce32d8b"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-8-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".mega-menu-links-content-wrap",
                                        selectorGuids: ["66fbef8d-1c4a-abca-5502-51ffa8021452"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1995b3d24f0
                    },
                    "a-9": {
                        id: "a-9",
                        title: "FAQ Open",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-9-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".drop-down-list-wrap",
                                        selectorGuids: ["4d050f68-2947-510c-340e-977b32363e4d"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-9-n-3",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".plus-icon",
                                        selectorGuids: ["58510163-2d0f-94c4-e17d-34269f3e84de"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-9-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".drop-down-list-wrap",
                                        selectorGuids: ["4d050f68-2947-510c-340e-977b32363e4d"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "AUTO",
                                    locked: !1
                                }
                            }, {
                                id: "a-9-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".plus-icon",
                                        selectorGuids: ["58510163-2d0f-94c4-e17d-34269f3e84de"]
                                    },
                                    zValue: 90,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1996b909d2e
                    },
                    "a-10": {
                        id: "a-10",
                        title: "FAQ Close",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-10-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".drop-down-list-wrap",
                                        selectorGuids: ["4d050f68-2947-510c-340e-977b32363e4d"]
                                    },
                                    widthValue: 100,
                                    heightValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "px",
                                    locked: !1
                                }
                            }, {
                                id: "a-10-n-2",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".plus-icon",
                                        selectorGuids: ["58510163-2d0f-94c4-e17d-34269f3e84de"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1996b909d2e
                    },
                    "a-11": {
                        id: "a-11",
                        title: "Service Box Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-11-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-11-n-2",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b"
                                    },
                                    globalSwatchId: "--card-color-second",
                                    rValue: 248,
                                    bValue: 249,
                                    gValue: 248,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1997a6b7066
                    },
                    "a-12": {
                        id: "a-12",
                        title: "Service Box Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-12-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432c0|35604687-63d8-4c51-bfae-1ef1dc6f0d7b"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x1997a6b7066
                    },
                    "a-21": {
                        id: "a-21",
                        title: "Hover Image In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-21-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-21-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91"]
                                    },
                                    xValue: 1.1,
                                    yValue: 1.1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19998db9010
                    },
                    "a-22": {
                        id: "a-22",
                        title: "Hover Image Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-22-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19998db9010
                    },
                    "a-79": {
                        id: "a-79",
                        title: "Blog Card Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-79-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-box",
                                        selectorGuids: ["c84f6455-1226-9dfd-1dd4-52db93643563"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-79-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-box",
                                        selectorGuids: ["c84f6455-1226-9dfd-1dd4-52db93643563"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a0c68ccd6
                    },
                    "a-80": {
                        id: "a-80",
                        title: "Blog Card Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-80-n",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 100,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-box",
                                        selectorGuids: ["c84f6455-1226-9dfd-1dd4-52db93643563"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a0c68ccd6
                    },
                    "a-34": {
                        id: "a-34",
                        title: "Counter Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-34-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-text-wrap",
                                        selectorGuids: ["96474910-b755-0c8c-23f0-f8368652e1d1"]
                                    },
                                    yValue: -40,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-icon-wrap",
                                        selectorGuids: ["0d4d1cf2-fed1-0b9b-c3d0-f548b101765a"]
                                    },
                                    yValue: 5,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-34-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 2e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-text-wrap",
                                        selectorGuids: ["96474910-b755-0c8c-23f0-f8368652e1d1"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-34-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 2e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-icon-wrap",
                                        selectorGuids: ["0d4d1cf2-fed1-0b9b-c3d0-f548b101765a"]
                                    },
                                    yValue: -8,
                                    xUnit: "PX",
                                    yUnit: "rem",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1999e5472dc
                    },
                    "a-35": {
                        id: "a-35",
                        title: "Counter Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-35-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-text-wrap",
                                        selectorGuids: ["96474910-b755-0c8c-23f0-f8368652e1d1"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-icon-wrap",
                                        selectorGuids: ["0d4d1cf2-fed1-0b9b-c3d0-f548b101765a"]
                                    },
                                    yValue: -120,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-35-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-text-wrap",
                                        selectorGuids: ["96474910-b755-0c8c-23f0-f8368652e1d1"]
                                    },
                                    yValue: -475,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-35-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 1500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".counter-icon-wrap",
                                        selectorGuids: ["0d4d1cf2-fed1-0b9b-c3d0-f548b101765a"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1999e5472dc
                    },
                    "a-36": {
                        id: "a-36",
                        title: "Four Zero Four Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-36-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.one",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "20faeeb6-e3f2-ccb8-e93b-34e005eb9cd9"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-13",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.black",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "6bbfcd29-09ea-c296-45c8-251880faa830"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }, {
                                id: "a-36-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.two",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "1f5e9289-709e-7d7d-ed29-0e21dc3f4e9e"]
                                    },
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-36-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.one",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "20faeeb6-e3f2-ccb8-e93b-34e005eb9cd9"]
                                    },
                                    yValue: -20,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.two",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "1f5e9289-709e-7d7d-ed29-0e21dc3f4e9e"]
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-14",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.black",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "6bbfcd29-09ea-c296-45c8-251880faa830"]
                                    },
                                    xValue: 180,
                                    yValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-36-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.one",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "20faeeb6-e3f2-ccb8-e93b-34e005eb9cd9"]
                                    },
                                    yValue: 20,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.two",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "1f5e9289-709e-7d7d-ed29-0e21dc3f4e9e"]
                                    },
                                    yValue: -20,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-36-n-16",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".error-text.black",
                                        selectorGuids: ["b423d210-d791-0430-a322-80706556c0db", "6bbfcd29-09ea-c296-45c8-251880faa830"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "deg",
                                    yUnit: "deg",
                                    zUnit: "DEG"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x1999e823bf0
                    },
                    "a-40": {
                        id: "a-40",
                        title: "Mini Image Slider",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-40-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".image-holder.one",
                                        selectorGuids: ["c9df6a18-8c14-99c5-254f-fd418d918751", "202de714-9c0a-6e1c-aafd-5526c66d1723"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".image-holder.two",
                                        selectorGuids: ["c9df6a18-8c14-99c5-254f-fd418d918751", "0694546c-978c-0c51-7f56-c86ff6bb2f1a"]
                                    },
                                    xValue: 0,
                                    xUnit: "px",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-40-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 15e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".image-holder.one",
                                        selectorGuids: ["c9df6a18-8c14-99c5-254f-fd418d918751", "202de714-9c0a-6e1c-aafd-5526c66d1723"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 15e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".image-holder.two",
                                        selectorGuids: ["c9df6a18-8c14-99c5-254f-fd418d918751", "0694546c-978c-0c51-7f56-c86ff6bb2f1a"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-40-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".image-holder.one",
                                        selectorGuids: ["c9df6a18-8c14-99c5-254f-fd418d918751", "202de714-9c0a-6e1c-aafd-5526c66d1723"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-40-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".image-holder.two",
                                        selectorGuids: ["c9df6a18-8c14-99c5-254f-fd418d918751", "0694546c-978c-0c51-7f56-c86ff6bb2f1a"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x199af5f6e1f
                    },
                    "a-42": {
                        id: "a-42",
                        title: "Service Scrolling Animation",
                        continuousParameterGroups: [{
                            id: "a-42-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 25,
                                actionItems: [{
                                    id: "a-42-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".services-animated-text-wrap",
                                            selectorGuids: ["efff5cc2-8802-5a71-90f4-87a9bc19589f"]
                                        },
                                        yValue: 30,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.one",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "b7564a03-51c3-7b57-88fb-3ab105a1adeb"]
                                        },
                                        xValue: 0,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.one",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "b7564a03-51c3-7b57-88fb-3ab105a1adeb"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-42-n-16",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.two",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "61e46ff9-3bae-62d3-5d36-db369f052da4"]
                                        },
                                        zValue: -15,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-42-n-17",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.three",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "4be29b8a-72d4-d7b8-b892-00ab00e32d2e"]
                                        },
                                        zValue: 15,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-42-n-19",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.one",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "1903d155-05d8-aa41-739f-b2859629af39"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "7e29",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-42-n-20",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.two",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "00767429-361c-2239-c5c8-275355f10e67"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "8334",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-42-n-21",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.three",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "ee4c9d44-e209-c5fc-1c9f-7230bb74b985"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "ec18",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }, {
                                keyframe: 45,
                                actionItems: [{
                                    id: "a-42-n-5",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".services-animated-text-wrap",
                                            selectorGuids: ["efff5cc2-8802-5a71-90f4-87a9bc19589f"]
                                        },
                                        yValue: 1,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.one",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "b7564a03-51c3-7b57-88fb-3ab105a1adeb"]
                                        },
                                        xValue: 100,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-8",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.one",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "b7564a03-51c3-7b57-88fb-3ab105a1adeb"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-42-n-22",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {},
                                        filters: [{
                                            type: "blur",
                                            filterId: "72ee",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-42-n-23",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.one",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "1903d155-05d8-aa41-739f-b2859629af39"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "7e29",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-42-n-25",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.two",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "00767429-361c-2239-c5c8-275355f10e67"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "ec18",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-42-n-9",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".services-animated-text-wrap",
                                            selectorGuids: ["efff5cc2-8802-5a71-90f4-87a9bc19589f"]
                                        },
                                        yValue: 1,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.two",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "61e46ff9-3bae-62d3-5d36-db369f052da4"]
                                        },
                                        xValue: 0,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.two",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "61e46ff9-3bae-62d3-5d36-db369f052da4"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-42-n-15",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.two",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "61e46ff9-3bae-62d3-5d36-db369f052da4"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-42-n-26",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.three",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "ee4c9d44-e209-c5fc-1c9f-7230bb74b985"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "ec18",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }, {
                                keyframe: 82,
                                actionItems: [{
                                    id: "a-42-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".services-animated-text-wrap",
                                            selectorGuids: ["efff5cc2-8802-5a71-90f4-87a9bc19589f"]
                                        },
                                        yValue: -44,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-13",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.two",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "61e46ff9-3bae-62d3-5d36-db369f052da4"]
                                        },
                                        xValue: 100,
                                        yValue: null,
                                        xUnit: "%",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-42-n-14",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.two",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "61e46ff9-3bae-62d3-5d36-db369f052da4"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-42-n-18",
                                    actionTypeId: "TRANSFORM_ROTATE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".cover-image-wrap.home-services.three",
                                            selectorGuids: ["510461d9-58f9-2d02-a5f7-82761ceacbe5", "fa41bc79-131b-7b0f-5222-c7fb10d627bb", "4be29b8a-72d4-d7b8-b892-00ab00e32d2e"]
                                        },
                                        zValue: 0,
                                        xUnit: "DEG",
                                        yUnit: "DEG",
                                        zUnit: "deg"
                                    }
                                }, {
                                    id: "a-42-n-27",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.three",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "ee4c9d44-e209-c5fc-1c9f-7230bb74b985"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "ec18",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }, {
                                    id: "a-42-n-28",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".image-text-wrap.two",
                                            selectorGuids: ["b3dea676-5513-2dd4-188c-b3c998ac2489", "00767429-361c-2239-c5c8-275355f10e67"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "ec18",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x199b2e2484a
                    },
                    "a-43": {
                        id: "a-43",
                        title: "Banner Image Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-43-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.one",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "ddf3ee6e-2384-725c-cd7e-8ee65ec42f54"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.two",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "0c196fb2-70a4-422d-4eba-fafca3f41562"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-3",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.three",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "12d496a2-8148-bbef-ad88-4a3fa1320158"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-43-n-4",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 25e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.one",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "ddf3ee6e-2384-725c-cd7e-8ee65ec42f54"]
                                    },
                                    xValue: -200,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-6",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 25e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.three",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "12d496a2-8148-bbef-ad88-4a3fa1320158"]
                                    },
                                    xValue: -200,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 25e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.two",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "0c196fb2-70a4-422d-4eba-fafca3f41562"]
                                    },
                                    xValue: -200,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-43-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.one",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "ddf3ee6e-2384-725c-cd7e-8ee65ec42f54"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.two",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "0c196fb2-70a4-422d-4eba-fafca3f41562"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-43-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".starix-bottom.three",
                                        selectorGuids: ["fe423a73-bb38-011b-f9fa-9c623fc1e8ef", "12d496a2-8148-bbef-ad88-4a3fa1320158"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x199b3d0df6e
                    },
                    "a-44": {
                        id: "a-44",
                        title: "Result Section Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-44-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".results-all-content",
                                        selectorGuids: ["74d6249a-189a-f8c5-8b2b-d3106dc9c034"]
                                    },
                                    yValue: null,
                                    xUnit: "PX",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x199b401a4cc
                    },
                    "a-45": {
                        id: "a-45",
                        title: "Result Animation",
                        continuousParameterGroups: [{
                            id: "a-45-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-45-n-6",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".results-all-content",
                                            selectorGuids: ["74d6249a-189a-f8c5-8b2b-d3106dc9c034"]
                                        },
                                        yValue: 80,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-45-n-11",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".result-text-wrap",
                                            selectorGuids: ["58d1f6fb-61d9-30b0-ae8f-9e8ce1024e21"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "0c4d",
                                            value: 0,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-45-n-12",
                                    actionTypeId: "STYLE_FILTER",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".result-text-wrap",
                                            selectorGuids: ["58d1f6fb-61d9-30b0-ae8f-9e8ce1024e21"]
                                        },
                                        filters: [{
                                            type: "blur",
                                            filterId: "6d1a",
                                            value: 12,
                                            unit: "px"
                                        }]
                                    }
                                }]
                            }, {
                                keyframe: 80,
                                actionItems: [{
                                    id: "a-45-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".results-all-content",
                                            selectorGuids: ["74d6249a-189a-f8c5-8b2b-d3106dc9c034"]
                                        },
                                        yValue: -50,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x199b42d82b2
                    },
                    "a-46": {
                        id: "a-46",
                        title: "About Banner Image Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-46-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white-line-two",
                                        selectorGuids: ["5f4f25f6-503c-6039-c700-71d481926a01"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-2",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white-line-one",
                                        selectorGuids: ["c263460d-ce76-8922-1190-3a202d6ebd64"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-3",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".banner-bg-image",
                                        selectorGuids: ["d4a0b7fc-6bd3-8081-1e9c-5f080453bb24"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-46-n-4",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image.brand-center-image",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91", "c3039c6b-0117-eeb1-1c40-3b170672cca6"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-46-n-5",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white-line-one",
                                        selectorGuids: ["c263460d-ce76-8922-1190-3a202d6ebd64"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-46-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image.brand-center-image",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91", "c3039c6b-0117-eeb1-1c40-3b170672cca6"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-46-n-8",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 200,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".banner-bg-image",
                                        selectorGuids: ["d4a0b7fc-6bd3-8081-1e9c-5f080453bb24"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-46-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 3e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white-line-two",
                                        selectorGuids: ["5f4f25f6-503c-6039-c700-71d481926a01"]
                                    },
                                    xValue: 0,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-46-n-9",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white-line-two",
                                        selectorGuids: ["5f4f25f6-503c-6039-c700-71d481926a01"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-46-n-12",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image.brand-center-image",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91", "c3039c6b-0117-eeb1-1c40-3b170672cca6"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-46-n-11",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".banner-bg-image",
                                        selectorGuids: ["d4a0b7fc-6bd3-8081-1e9c-5f080453bb24"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-46-n-10",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 0,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".white-line-one",
                                        selectorGuids: ["c263460d-ce76-8922-1190-3a202d6ebd64"]
                                    },
                                    xValue: -100,
                                    xUnit: "%",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x199b78937b4
                    },
                    "a-66": {
                        id: "a-66",
                        title: "Mini Icon Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-66-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f4326d|0a80c046-f26f-9f52-3da2-77a600eb4244"
                                    },
                                    xValue: .6,
                                    yValue: .6,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-66-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f4326d|0a80c046-f26f-9f52-3da2-77a600eb4244"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-66-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f4326d|0a80c046-f26f-9f52-3da2-77a600eb4244"
                                    },
                                    xValue: .6,
                                    yValue: .6,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a0645578c
                    },
                    "a-56": {
                        id: "a-56",
                        title: "Creation Layout Animation",
                        continuousParameterGroups: [{
                            id: "a-56-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-56-n",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".creation-details-box",
                                            selectorGuids: ["76081d7d-73fc-f4fe-cb60-f8d73556a3ee"]
                                        },
                                        xValue: .4,
                                        yValue: .4,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 52,
                                actionItems: [{
                                    id: "a-56-n-3",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".creation-details-box",
                                            selectorGuids: ["76081d7d-73fc-f4fe-cb60-f8d73556a3ee"]
                                        },
                                        xValue: 1.1,
                                        yValue: 1.1,
                                        locked: !0
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-56-n-2",
                                    actionTypeId: "TRANSFORM_SCALE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".creation-details-box",
                                            selectorGuids: ["76081d7d-73fc-f4fe-cb60-f8d73556a3ee"]
                                        },
                                        locked: !0
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x199bd39570c
                    },
                    "a-17": {
                        id: "a-17",
                        title: "Project Card Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-17-n-5",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-work-details-wrap",
                                        selectorGuids: ["ea90443c-033d-f30b-7c64-2974e29654c4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }, {
                                id: "a-17-n-7",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-work-details-wrap",
                                        selectorGuids: ["ea90443c-033d-f30b-7c64-2974e29654c4"]
                                    },
                                    xValue: 100,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-17-n-6",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-work-details-wrap",
                                        selectorGuids: ["ea90443c-033d-f30b-7c64-2974e29654c4"]
                                    },
                                    value: 1,
                                    unit: ""
                                }
                            }, {
                                id: "a-17-n-8",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-work-details-wrap",
                                        selectorGuids: ["ea90443c-033d-f30b-7c64-2974e29654c4"]
                                    },
                                    xValue: 0,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x199940e9f2b
                    },
                    "a-18": {
                        id: "a-18",
                        title: "Project Card Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-18-n",
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-work-details-wrap",
                                        selectorGuids: ["ea90443c-033d-f30b-7c64-2974e29654c4"]
                                    },
                                    xValue: 100,
                                    yValue: null,
                                    xUnit: "%",
                                    yUnit: "%",
                                    zUnit: "PX"
                                }
                            }, {
                                id: "a-18-n-2",
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".project-work-details-wrap",
                                        selectorGuids: ["ea90443c-033d-f30b-7c64-2974e29654c4"]
                                    },
                                    value: 0,
                                    unit: ""
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x199940e9f2b
                    },
                    "a-60": {
                        id: "a-60",
                        title: "Mini Heading Box Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-60-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".sub-overlay-box",
                                        selectorGuids: ["54c395a4-40ae-a78c-186c-c4897b98389e"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-60-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 2e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".sub-overlay-box",
                                        selectorGuids: ["54c395a4-40ae-a78c-186c-c4897b98389e"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a06410c0c
                    },
                    "a-61": {
                        id: "a-61",
                        title: "Mini Heading Box Anime",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-61-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".sub-overlay-box",
                                        selectorGuids: ["54c395a4-40ae-a78c-186c-c4897b98389e"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-61-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "ease",
                                    duration: 2e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".sub-overlay-box",
                                        selectorGuids: ["54c395a4-40ae-a78c-186c-c4897b98389e"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a06410c0c
                    },
                    "a-62": {
                        id: "a-62",
                        title: "Mini Icon Animation",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-62-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "0a80c046-f26f-9f52-3da2-77a600eb4244"
                                    },
                                    xValue: .6,
                                    yValue: .6,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-62-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "0a80c046-f26f-9f52-3da2-77a600eb4244"
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-62-n-3",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "0a80c046-f26f-9f52-3da2-77a600eb4244"
                                    },
                                    xValue: .6,
                                    yValue: .6,
                                    locked: !0
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a0645578c
                    },
                    "a-63": {
                        id: "a-63",
                        title: "Black Mini Heading Anime",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-63-n",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".black-overlay",
                                        selectorGuids: ["06a72f18-2127-8bb8-08c8-e87ea1caba02"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-63-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 2e3,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".black-overlay",
                                        selectorGuids: ["06a72f18-2127-8bb8-08c8-e87ea1caba02"]
                                    },
                                    widthValue: 0,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a064aa941
                    },
                    "a-67": {
                        id: "a-67",
                        title: "Brand Scrolling Animation",
                        continuousParameterGroups: [{
                            id: "a-67-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-67-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-left",
                                            selectorGuids: ["d9114123-102a-d29f-c49c-d1a1a86f8637"]
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-67-n-3",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-left",
                                            selectorGuids: ["d9114123-102a-d29f-c49c-d1a1a86f8637"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-67-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-right",
                                            selectorGuids: ["365b1eb5-80af-4a57-5355-dc8dbc5fad48"]
                                        },
                                        yValue: 100,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-67-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-right",
                                            selectorGuids: ["365b1eb5-80af-4a57-5355-dc8dbc5fad48"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 60,
                                actionItems: [{
                                    id: "a-67-n-14",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-left",
                                            selectorGuids: ["d9114123-102a-d29f-c49c-d1a1a86f8637"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-67-n-15",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-left",
                                            selectorGuids: ["d9114123-102a-d29f-c49c-d1a1a86f8637"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-67-n-16",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-right",
                                            selectorGuids: ["365b1eb5-80af-4a57-5355-dc8dbc5fad48"]
                                        },
                                        yValue: 0,
                                        xUnit: "PX",
                                        yUnit: "%",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-67-n-17",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".brand-right",
                                            selectorGuids: ["365b1eb5-80af-4a57-5355-dc8dbc5fad48"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a06ddaaeb
                    },
                    "a-68": {
                        id: "a-68",
                        title: "Purpose Scroll Animation",
                        continuousParameterGroups: [{
                            id: "a-68-p",
                            type: "SCROLL_PROGRESS",
                            parameterLabel: "Scroll",
                            continuousActionGroups: [{
                                keyframe: 20,
                                actionItems: [{
                                    id: "a-68-n",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.one",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "d0bd66e8-6ff6-30bf-a304-b946f71f32df"]
                                        },
                                        xValue: 100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-3",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.two",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "075ab832-2e34-b01c-e35b-c0f57988514e"]
                                        },
                                        xValue: 100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-4",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.three",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "915df0bc-e0bf-25da-d34f-d47ead4b4a65"]
                                        },
                                        xValue: 100,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-5",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.one",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "d0bd66e8-6ff6-30bf-a304-b946f71f32df"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-68-n-6",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.two",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "075ab832-2e34-b01c-e35b-c0f57988514e"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }, {
                                    id: "a-68-n-7",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.three",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "915df0bc-e0bf-25da-d34f-d47ead4b4a65"]
                                        },
                                        value: 0,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 30,
                                actionItems: [{
                                    id: "a-68-n-8",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.one",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "d0bd66e8-6ff6-30bf-a304-b946f71f32df"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-9",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.one",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "d0bd66e8-6ff6-30bf-a304-b946f71f32df"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 48,
                                actionItems: [{
                                    id: "a-68-n-10",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.two",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "075ab832-2e34-b01c-e35b-c0f57988514e"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-11",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.two",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "075ab832-2e34-b01c-e35b-c0f57988514e"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 68,
                                actionItems: [{
                                    id: "a-68-n-12",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.three",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "915df0bc-e0bf-25da-d34f-d47ead4b4a65"]
                                        },
                                        xValue: 0,
                                        xUnit: "%",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }, {
                                    id: "a-68-n-13",
                                    actionTypeId: "STYLE_OPACITY",
                                    config: {
                                        delay: 0,
                                        easing: "ease",
                                        duration: 500,
                                        target: {
                                            useEventTarget: "CHILDREN",
                                            selector: ".purpose-right-info-wrap.three",
                                            selectorGuids: ["12083c35-4785-85d2-97e2-716679b87cff", "915df0bc-e0bf-25da-d34f-d47ead4b4a65"]
                                        },
                                        value: 1,
                                        unit: ""
                                    }
                                }]
                            }, {
                                keyframe: 100,
                                actionItems: [{
                                    id: "a-68-n-2",
                                    actionTypeId: "TRANSFORM_MOVE",
                                    config: {
                                        delay: 0,
                                        easing: "",
                                        duration: 500,
                                        target: {
                                            useEventTarget: !0,
                                            id: "697a729c6780635254f432a4|d21e93a7-40bd-2d93-dd96-d1c665b71592"
                                        },
                                        xUnit: "PX",
                                        yUnit: "PX",
                                        zUnit: "PX"
                                    }
                                }]
                            }]
                        }],
                        createdOn: 0x19a06ec4d38
                    },
                    "a-73": {
                        id: "a-73",
                        title: "Button Black Hover In 4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-73-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32"
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-73-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-white.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "abe5e755-83a4-3af4-13cb-881b054112e7", "5740fdba-51e3-53bd-09f6-1118439590b9"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-73-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-73-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-73-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-73-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-73-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-73-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-white.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "abe5e755-83a4-3af4-13cb-881b054112e7", "5740fdba-51e3-53bd-09f6-1118439590b9"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19965cba328
                    },
                    "a-74": {
                        id: "a-74",
                        title: "Button Black Hover Out 4",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-74-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432db|2d8ee2d7-8b55-3c98-0190-ebf89ef6bb32"
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-74-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-white.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "abe5e755-83a4-3af4-13cb-881b054112e7", "5740fdba-51e3-53bd-09f6-1118439590b9"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-74-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-74-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.white",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "671829a8-da71-010e-4eda-db83cdad6136"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19965cba328
                    },
                    "a-77": {
                        id: "a-77",
                        title: "White Button Hover In 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-77-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-77-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-black.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "d3c28f31-52d4-c2b7-35a1-46388b2b078f", "dce374ab-c702-4f3e-b633-4763e22b4a85"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-77-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-77-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-77-n-5",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d"
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-77-n-6",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    zValue: 45,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }, {
                                id: "a-77-n-7",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-77-n-8",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-black.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "d3c28f31-52d4-c2b7-35a1-46388b2b078f", "dce374ab-c702-4f3e-b633-4763e22b4a85"]
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19966c2d9fc
                    },
                    "a-78": {
                        id: "a-78",
                        title: "White Button Hover Out 2",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-78-n",
                                actionTypeId: "STYLE_BACKGROUND_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: !0,
                                        id: "697a729c6780635254f432d2|c45a3d2d-cea1-0a49-8bff-95f2e753386d"
                                    },
                                    globalSwatchId: "--white",
                                    rValue: 255,
                                    bValue: 255,
                                    gValue: 255,
                                    aValue: 1
                                }
                            }, {
                                id: "a-78-n-2",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-text.text-black.no-wrap",
                                        selectorGuids: ["6458b077-026b-3237-365e-46be25658008", "d3c28f31-52d4-c2b7-35a1-46388b2b078f", "dce374ab-c702-4f3e-b633-4763e22b4a85"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-78-n-3",
                                actionTypeId: "STYLE_TEXT_COLOR",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    globalSwatchId: "--black",
                                    rValue: 0,
                                    bValue: 0,
                                    gValue: 0,
                                    aValue: 1
                                }
                            }, {
                                id: "a-78-n-4",
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 300,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".button-arrow.black",
                                        selectorGuids: ["995a9327-3c41-6490-d61c-f7896b1ff411", "050c1f82-93af-1be5-5fc3-c0eefc032191"]
                                    },
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "deg"
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19966c2d9fc
                    },
                    "a-82": {
                        id: "a-82",
                        title: "Team Box Hover In",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-82-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image.team",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91", "ef7aface-f8ac-6f00-2185-9aff0f78b300"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-82-n-3",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".team-info-box",
                                        selectorGuids: ["37ba2168-d6e2-8f4d-afc3-08ce6e17ea9c"]
                                    },
                                    widthValue: 80,
                                    widthUnit: "%",
                                    heightUnit: "vh",
                                    locked: !1
                                }
                            }]
                        }, {
                            actionItems: [{
                                id: "a-82-n-2",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image.team",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91", "ef7aface-f8ac-6f00-2185-9aff0f78b300"]
                                    },
                                    xValue: 1.2,
                                    yValue: 1.2,
                                    locked: !0
                                }
                            }, {
                                id: "a-82-n-4",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".team-info-box",
                                        selectorGuids: ["37ba2168-d6e2-8f4d-afc3-08ce6e17ea9c"]
                                    },
                                    widthValue: 100,
                                    widthUnit: "%",
                                    heightUnit: "vh",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !0,
                        createdOn: 0x19a0c73afc4
                    },
                    "a-83": {
                        id: "a-83",
                        title: "Team Box Hover Out",
                        actionItemGroups: [{
                            actionItems: [{
                                id: "a-83-n",
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".cover-image.team",
                                        selectorGuids: ["222a2ba8-807e-2dd3-b389-55606863fa91", "ef7aface-f8ac-6f00-2185-9aff0f78b300"]
                                    },
                                    xValue: 1,
                                    yValue: 1,
                                    locked: !0
                                }
                            }, {
                                id: "a-83-n-2",
                                actionTypeId: "STYLE_SIZE",
                                config: {
                                    delay: 0,
                                    easing: "",
                                    duration: 500,
                                    target: {
                                        useEventTarget: "CHILDREN",
                                        selector: ".team-info-box",
                                        selectorGuids: ["37ba2168-d6e2-8f4d-afc3-08ce6e17ea9c"]
                                    },
                                    widthValue: 85,
                                    widthUnit: "%",
                                    heightUnit: "PX",
                                    locked: !1
                                }
                            }]
                        }],
                        useFirstGroupAsInitialState: !1,
                        createdOn: 0x19a0c73afc4
                    },
                    growIn: {
                        id: "growIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: .7500000000000001,
                                    yValue: .7500000000000001
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 1,
                                    yValue: 1
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    fadeIn: {
                        id: "fadeIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    slideInBottom: {
                        id: "slideInBottom",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    shrinkIn: {
                        id: "shrinkIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 1.25,
                                    yValue: 1.25
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 1,
                                    yValue: 1
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    growBigIn: {
                        id: "growBigIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 1,
                                    yValue: 1
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    slideInTop: {
                        id: "slideInTop",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: -100,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }, {
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    },
                    slideInLeft: {
                        id: "slideInLeft",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: -100,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }, {
                                actionTypeId: "TRANSFORM_MOVE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    xUnit: "PX",
                                    yUnit: "PX",
                                    zUnit: "PX"
                                }
                            }]
                        }]
                    },
                    flipInLeft: {
                        id: "flipInLeft",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    duration: 0,
                                    delay: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: -90,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_ROTATE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 0,
                                    yValue: 0,
                                    zValue: 0,
                                    xUnit: "DEG",
                                    yUnit: "DEG",
                                    zUnit: "DEG"
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    },
                    shrinkBigIn: {
                        id: "shrinkBigIn",
                        useFirstGroupAsInitialState: !0,
                        actionItemGroups: [{
                            actionItems: [{
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    duration: 0,
                                    delay: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 0
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    duration: 0,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 4,
                                    yValue: 4
                                }
                            }]
                        }, {
                            actionItems: [{
                                actionTypeId: "TRANSFORM_SCALE",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    xValue: 1,
                                    yValue: 1
                                }
                            }, {
                                actionTypeId: "STYLE_OPACITY",
                                config: {
                                    delay: 0,
                                    easing: "outQuart",
                                    duration: 1e3,
                                    target: {
                                        id: "N/A",
                                        appliesTo: "TRIGGER_ELEMENT",
                                        useEventTarget: !0
                                    },
                                    value: 1
                                }
                            }]
                        }]
                    }
                },
                site: {
                    mediaQueries: [{
                        key: "main",
                        min: 992,
                        max: 1e4
                    }, {
                        key: "medium",
                        min: 768,
                        max: 991
                    }, {
                        key: "small",
                        min: 480,
                        max: 767
                    }, {
                        key: "tiny",
                        min: 0,
                        max: 479
                    }]
                }
            }), Webflow.require("commerce") && Webflow.require("commerce").init({
                siteId: "697a72996780635254f431ca",
                apiUrl: "https://render.webflow.com"
            })
        }
    }
]);