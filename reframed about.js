import { R as _, r as O, g as V, S as Z, j as D, a as P, c as $e, F as Re, B as Fe, b as He } from "./style-403a1701.js";
import { B as je, S as We, a as Xe, N as Ye } from "./Stars-55eb5a44.js";
import { B as qe, G as Ke } from "./Glass-01dc6a2a.js";
const Ue = "_about_2llef_218"
    , Ze = "_wrapper_2llef_263"
    , Je = "_close_2llef_285"
    , Qe = "_content_2llef_342"
    , et = "_actions_2llef_361"
    , tt = "_slideInner_2llef_403"
    , k = {
        about: Ue,
        wrapper: Ze,
        close: Je,
        content: Qe,
        actions: et,
        slideInner: tt
    };
function ge(e) {
    return e !== null && typeof e == "object" && "constructor" in e && e.constructor === Object
}
function he(e = {}, t = {}) {
    Object.keys(t).forEach(i => {
        typeof e[i] > "u" ? e[i] = t[i] : ge(t[i]) && ge(e[i]) && Object.keys(t[i]).length > 0 && he(e[i], t[i])
    }
    )
}
const Ce = {
    body: {},
    addEventListener() { },
    removeEventListener() { },
    activeElement: {
        blur() { },
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() { }
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() { },
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};
function W() {
    const e = typeof document < "u" ? document : {};
    return he(e, Ce),
        e
}
const it = {
    document: Ce,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() { },
        pushState() { },
        go() { },
        back() { }
    },
    CustomEvent: function () {
        return this
    },
    addEventListener() { },
    removeEventListener() { },
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() { },
    Date() { },
    screen: {},
    setTimeout() { },
    clearTimeout() { },
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > "u" ? (e(),
            null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > "u" || clearTimeout(e)
    }
};
function N() {
    const e = typeof window < "u" ? window : {};
    return he(e, it),
        e
}
function st(e) {
    const t = e;
    Object.keys(t).forEach(i => {
        try {
            t[i] = null
        } catch { }
        try {
            delete t[i]
        } catch { }
    }
    )
}
function ce(e, t = 0) {
    return setTimeout(e, t)
}
function te() {
    return Date.now()
}
function nt(e) {
    const t = N();
    let i;
    return t.getComputedStyle && (i = t.getComputedStyle(e, null)),
        !i && e.currentStyle && (i = e.currentStyle),
        i || (i = e.style),
        i
}
function rt(e, t = "x") {
    const i = N();
    let s, r, n;
    const l = nt(e);
    return i.WebKitCSSMatrix ? (r = l.transform || l.webkitTransform,
        r.split(",").length > 6 && (r = r.split(", ").map(o => o.replace(",", ".")).join(", ")),
        n = new i.WebKitCSSMatrix(r === "none" ? "" : r)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
            s = n.toString().split(",")),
        t === "x" && (i.WebKitCSSMatrix ? r = n.m41 : s.length === 16 ? r = parseFloat(s[12]) : r = parseFloat(s[4])),
        t === "y" && (i.WebKitCSSMatrix ? r = n.m42 : s.length === 16 ? r = parseFloat(s[13]) : r = parseFloat(s[5])),
        r || 0
}
function J(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function at(e) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? e instanceof HTMLElement : e && (e.nodeType === 1 || e.nodeType === 11)
}
function G(...e) {
    const t = Object(e[0])
        , i = ["__proto__", "constructor", "prototype"];
    for (let s = 1; s < e.length; s += 1) {
        const r = e[s];
        if (r != null && !at(r)) {
            const n = Object.keys(Object(r)).filter(l => i.indexOf(l) < 0);
            for (let l = 0, o = n.length; l < o; l += 1) {
                const a = n[l]
                    , d = Object.getOwnPropertyDescriptor(r, a);
                d !== void 0 && d.enumerable && (J(t[a]) && J(r[a]) ? r[a].__swiper__ ? t[a] = r[a] : G(t[a], r[a]) : !J(t[a]) && J(r[a]) ? (t[a] = {},
                    r[a].__swiper__ ? t[a] = r[a] : G(t[a], r[a])) : t[a] = r[a])
            }
        }
    }
    return t
}
function Q(e, t, i) {
    e.style.setProperty(t, i)
}
function Me({ swiper: e, targetPosition: t, side: i }) {
    const s = N()
        , r = -e.translate;
    let n = null, l;
    const o = e.params.speed;
    e.wrapperEl.style.scrollSnapType = "none",
        s.cancelAnimationFrame(e.cssModeFrameID);
    const a = t > r ? "next" : "prev"
        , d = (c, p) => a === "next" && c >= p || a === "prev" && c <= p
        , f = () => {
            l = new Date().getTime(),
                n === null && (n = l);
            const c = Math.max(Math.min((l - n) / o, 1), 0)
                , p = .5 - Math.cos(c * Math.PI) / 2;
            let u = r + p * (t - r);
            if (d(u, t) && (u = t),
                e.wrapperEl.scrollTo({
                    [i]: u
                }),
                d(u, t)) {
                e.wrapperEl.style.overflow = "hidden",
                    e.wrapperEl.style.scrollSnapType = "",
                    setTimeout(() => {
                        e.wrapperEl.style.overflow = "",
                            e.wrapperEl.scrollTo({
                                [i]: u
                            })
                    }
                    ),
                    s.cancelAnimationFrame(e.cssModeFrameID);
                return
            }
            e.cssModeFrameID = s.requestAnimationFrame(f)
        }
        ;
    f()
}
function R(e, t = "") {
    return [...e.children].filter(i => i.matches(t))
}
function lt(e, t = []) {
    const i = document.createElement(e);
    return i.classList.add(...Array.isArray(t) ? t : [t]),
        i
}
function ot(e, t) {
    const i = [];
    for (; e.previousElementSibling;) {
        const s = e.previousElementSibling;
        t ? s.matches(t) && i.push(s) : i.push(s),
            e = s
    }
    return i
}
function dt(e, t) {
    const i = [];
    for (; e.nextElementSibling;) {
        const s = e.nextElementSibling;
        t ? s.matches(t) && i.push(s) : i.push(s),
            e = s
    }
    return i
}
function F(e, t) {
    return N().getComputedStyle(e, null).getPropertyValue(t)
}
function ve(e) {
    let t = e, i;
    if (t) {
        for (i = 0; (t = t.previousSibling) !== null;)
            t.nodeType === 1 && (i += 1);
        return i
    }
}
function ct(e, t) {
    const i = [];
    let s = e.parentElement;
    for (; s;)
        t ? s.matches(t) && i.push(s) : i.push(s),
            s = s.parentElement;
    return i
}
function we(e, t, i) {
    const s = N();
    return i ? e[t === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")) : e.offsetWidth
}
let re;
function ut() {
    const e = N()
        , t = W();
    return {
        smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
        touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
    }
}
function Pe() {
    return re || (re = ut()),
        re
}
let ae;
function ft({ userAgent: e } = {}) {
    const t = Pe()
        , i = N()
        , s = i.navigator.platform
        , r = e || i.navigator.userAgent
        , n = {
            ios: !1,
            android: !1
        }
        , l = i.screen.width
        , o = i.screen.height
        , a = r.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = r.match(/(iPad).*OS\s([\d_]+)/);
    const f = r.match(/(iPod)(.*OS\s([\d_]+))?/)
        , c = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/)
        , p = s === "Win32";
    let u = s === "MacIntel";
    const g = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && u && t.touch && g.indexOf(`${l}x ${o}`) >= 0 && (d = r.match(/(Version)\/([\d.]+)/),
        d || (d = [0, 1, "13_0_0"]),
        u = !1),
        a && !p && (n.os = "android",
            n.android = !0),
        (d || c || f) && (n.os = "ios",
            n.ios = !0),
        n
}
function pt(e = {}) {
    return ae || (ae = ft(e)),
        ae
}
let le;
function ht() {
    const e = N();
    let t = !1;
    function i() {
        const s = e.navigator.userAgent.toLowerCase();
        return s.indexOf("safari") >= 0 && s.indexOf("chrome") < 0 && s.indexOf("android") < 0
    }
    if (i()) {
        const s = String(e.navigator.userAgent);
        if (s.includes("Version/")) {
            const [r, n] = s.split("Version/")[1].split(" ")[0].split(".").map(l => Number(l));
            t = r < 16 || r === 16 && n < 2
        }
    }
    return {
        isSafari: t || i(),
        needPerspectiveFix: t,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
    }
}
function mt() {
    return le || (le = ht()),
        le
}
function gt({ swiper: e, on: t, emit: i }) {
    const s = N();
    let r = null
        , n = null;
    const l = () => {
        !e || e.destroyed || !e.initialized || (i("beforeResize"),
            i("resize"))
    }
        , o = () => {
            !e || e.destroyed || !e.initialized || (r = new ResizeObserver(f => {
                n = s.requestAnimationFrame(() => {
                    const { width: c, height: p } = e;
                    let u = c
                        , g = p;
                    f.forEach(({ contentBoxSize: m, contentRect: w, target: h }) => {
                        h && h !== e.el || (u = w ? w.width : (m[0] || m).inlineSize,
                            g = w ? w.height : (m[0] || m).blockSize)
                    }
                    ),
                        (u !== c || g !== p) && l()
                }
                )
            }
            ),
                r.observe(e.el))
        }
        , a = () => {
            n && s.cancelAnimationFrame(n),
                r && r.unobserve && e.el && (r.unobserve(e.el),
                    r = null)
        }
        , d = () => {
            !e || e.destroyed || !e.initialized || i("orientationchange")
        }
        ;
    t("init", () => {
        if (e.params.resizeObserver && typeof s.ResizeObserver < "u") {
            o();
            return
        }
        s.addEventListener("resize", l),
            s.addEventListener("orientationchange", d)
    }
    ),
        t("destroy", () => {
            a(),
                s.removeEventListener("resize", l),
                s.removeEventListener("orientationchange", d)
        }
        )
}
function vt({ swiper: e, extendParams: t, on: i, emit: s }) {
    const r = []
        , n = N()
        , l = (d, f = {}) => {
            const c = n.MutationObserver || n.WebkitMutationObserver
                , p = new c(u => {
                    if (e.__preventObserver__)
                        return;
                    if (u.length === 1) {
                        s("observerUpdate", u[0]);
                        return
                    }
                    const g = function () {
                        s("observerUpdate", u[0])
                    };
                    n.requestAnimationFrame ? n.requestAnimationFrame(g) : n.setTimeout(g, 0)
                }
                );
            p.observe(d, {
                attributes: typeof f.attributes > "u" ? !0 : f.attributes,
                childList: typeof f.childList > "u" ? !0 : f.childList,
                characterData: typeof f.characterData > "u" ? !0 : f.characterData
            }),
                r.push(p)
        }
        , o = () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    const d = ct(e.el);
                    for (let f = 0; f < d.length; f += 1)
                        l(d[f])
                }
                l(e.el, {
                    childList: e.params.observeSlideChildren
                }),
                    l(e.wrapperEl, {
                        attributes: !1
                    })
            }
        }
        , a = () => {
            r.forEach(d => {
                d.disconnect()
            }
            ),
                r.splice(0, r.length)
        }
        ;
    t({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }),
        i("init", o),
        i("destroy", a)
}
const wt = {
    on(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function")
            return s;
        const r = i ? "unshift" : "push";
        return e.split(" ").forEach(n => {
            s.eventsListeners[n] || (s.eventsListeners[n] = []),
                s.eventsListeners[n][r](t)
        }
        ),
            s
    },
    once(e, t, i) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function")
            return s;
        function r(...n) {
            s.off(e, r),
                r.__emitterProxy && delete r.__emitterProxy,
                t.apply(s, n)
        }
        return r.__emitterProxy = t,
            s.on(e, r, i)
    },
    onAny(e, t) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function")
            return i;
        const s = t ? "unshift" : "push";
        return i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e),
            i
    },
    offAny(e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners)
            return t;
        const i = t.eventsAnyListeners.indexOf(e);
        return i >= 0 && t.eventsAnyListeners.splice(i, 1),
            t
    },
    off(e, t) {
        const i = this;
        return !i.eventsListeners || i.destroyed || !i.eventsListeners || e.split(" ").forEach(s => {
            typeof t > "u" ? i.eventsListeners[s] = [] : i.eventsListeners[s] && i.eventsListeners[s].forEach((r, n) => {
                (r === t || r.__emitterProxy && r.__emitterProxy === t) && i.eventsListeners[s].splice(n, 1)
            }
            )
        }
        ),
            i
    },
    emit(...e) {
        const t = this;
        if (!t.eventsListeners || t.destroyed || !t.eventsListeners)
            return t;
        let i, s, r;
        return typeof e[0] == "string" || Array.isArray(e[0]) ? (i = e[0],
            s = e.slice(1, e.length),
            r = t) : (i = e[0].events,
                s = e[0].data,
                r = e[0].context || t),
            s.unshift(r),
            (Array.isArray(i) ? i : i.split(" ")).forEach(l => {
                t.eventsAnyListeners && t.eventsAnyListeners.length && t.eventsAnyListeners.forEach(o => {
                    o.apply(r, [l, ...s])
                }
                ),
                    t.eventsListeners && t.eventsListeners[l] && t.eventsListeners[l].forEach(o => {
                        o.apply(r, s)
                    }
                    )
            }
            ),
            t
    }
};
function St() {
    const e = this;
    let t, i;
    const s = e.el;
    typeof e.params.width < "u" && e.params.width !== null ? t = e.params.width : t = s.clientWidth,
        typeof e.params.height < "u" && e.params.height !== null ? i = e.params.height : i = s.clientHeight,
        !(t === 0 && e.isHorizontal() || i === 0 && e.isVertical()) && (t = t - parseInt(F(s, "padding-left") || 0, 10) - parseInt(F(s, "padding-right") || 0, 10),
            i = i - parseInt(F(s, "padding-top") || 0, 10) - parseInt(F(s, "padding-bottom") || 0, 10),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(i) && (i = 0),
            Object.assign(e, {
                width: t,
                height: i,
                size: e.isHorizontal() ? t : i
            }))
}
function bt() {
    const e = this;
    function t(v) {
        return e.isHorizontal() ? v : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[v]
    }
    function i(v, x) {
        return parseFloat(v.getPropertyValue(t(x)) || 0)
    }
    const s = e.params
        , { wrapperEl: r, slidesEl: n, size: l, rtlTranslate: o, wrongRTL: a } = e
        , d = e.virtual && s.virtual.enabled
        , f = d ? e.virtual.slides.length : e.slides.length
        , c = R(n, `.${e.params.slideClass}, swiper-slide`)
        , p = d ? e.virtual.slides.length : c.length;
    let u = [];
    const g = []
        , m = [];
    let w = s.slidesOffsetBefore;
    typeof w == "function" && (w = s.slidesOffsetBefore.call(e));
    let h = s.slidesOffsetAfter;
    typeof h == "function" && (h = s.slidesOffsetAfter.call(e));
    const C = e.snapGrid.length
        , S = e.slidesGrid.length;
    let E = s.spaceBetween
        , y = -w
        , b = 0
        , L = 0;
    if (typeof l > "u")
        return;
    typeof E == "string" && E.indexOf("%") >= 0 && (E = parseFloat(E.replace("%", "")) / 100 * l),
        e.virtualSize = -E,
        c.forEach(v => {
            o ? v.style.marginLeft = "" : v.style.marginRight = "",
                v.style.marginBottom = "",
                v.style.marginTop = ""
        }
        ),
        s.centeredSlides && s.cssMode && (Q(r, "--swiper-centered-offset-before", ""),
            Q(r, "--swiper-centered-offset-after", ""));
    const T = s.grid && s.grid.rows > 1 && e.grid;
    T && e.grid.initSlides(p);
    let I;
    const ie = s.slidesPerView === "auto" && s.breakpoints && Object.keys(s.breakpoints).filter(v => typeof s.breakpoints[v].slidesPerView < "u").length > 0;
    for (let v = 0; v < p; v += 1) {
        I = 0;
        let x;
        if (c[v] && (x = c[v]),
            T && e.grid.updateSlide(v, x, p, t),
            !(c[v] && F(x, "display") === "none")) {
            if (s.slidesPerView === "auto") {
                ie && (c[v].style[t("width")] = "");
                const M = getComputedStyle(x)
                    , A = x.style.transform
                    , X = x.style.webkitTransform;
                if (A && (x.style.transform = "none"),
                    X && (x.style.webkitTransform = "none"),
                    s.roundLengths)
                    I = e.isHorizontal() ? we(x, "width", !0) : we(x, "height", !0);
                else {
                    const U = i(M, "width")
                        , se = i(M, "padding-left")
                        , ne = i(M, "padding-right")
                        , z = i(M, "margin-left")
                        , B = i(M, "margin-right")
                        , me = M.getPropertyValue("box-sizing");
                    if (me && me === "border-box")
                        I = U + z + B;
                    else {
                        const { clientWidth: Ve, offsetWidth: De } = x;
                        I = U + se + ne + z + B + (De - Ve)
                    }
                }
                A && (x.style.transform = A),
                    X && (x.style.webkitTransform = X),
                    s.roundLengths && (I = Math.floor(I))
            } else
                I = (l - (s.slidesPerView - 1) * E) / s.slidesPerView,
                    s.roundLengths && (I = Math.floor(I)),
                    c[v] && (c[v].style[t("width")] = `${I}px`);
            c[v] && (c[v].swiperSlideSize = I),
                m.push(I),
                s.centeredSlides ? (y = y + I / 2 + b / 2 + E,
                    b === 0 && v !== 0 && (y = y - l / 2 - E),
                    v === 0 && (y = y - l / 2 - E),
                    Math.abs(y) < 1 / 1e3 && (y = 0),
                    s.roundLengths && (y = Math.floor(y)),
                    L % s.slidesPerGroup === 0 && u.push(y),
                    g.push(y)) : (s.roundLengths && (y = Math.floor(y)),
                        (L - Math.min(e.params.slidesPerGroupSkip, L)) % e.params.slidesPerGroup === 0 && u.push(y),
                        g.push(y),
                        y = y + I + E),
                e.virtualSize += I + E,
                b = I,
                L += 1
        }
    }
    if (e.virtualSize = Math.max(e.virtualSize, l) + h,
        o && a && (s.effect === "slide" || s.effect === "coverflow") && (r.style.width = `${e.virtualSize + s.spaceBetween}px`),
        s.setWrapperSize && (r.style[t("width")] = `${e.virtualSize + s.spaceBetween}px`),
        T && e.grid.updateWrapperSize(I, u, t),
        !s.centeredSlides) {
        const v = [];
        for (let x = 0; x < u.length; x += 1) {
            let M = u[x];
            s.roundLengths && (M = Math.floor(M)),
                u[x] <= e.virtualSize - l && v.push(M)
        }
        u = v,
            Math.floor(e.virtualSize - l) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - l)
    }
    if (d && s.loop) {
        const v = m[0] + E;
        if (s.slidesPerGroup > 1) {
            const x = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / s.slidesPerGroup)
                , M = v * s.slidesPerGroup;
            for (let A = 0; A < x; A += 1)
                u.push(u[u.length - 1] + M)
        }
        for (let x = 0; x < e.virtual.slidesBefore + e.virtual.slidesAfter; x += 1)
            s.slidesPerGroup === 1 && u.push(u[u.length - 1] + v),
                g.push(g[g.length - 1] + v),
                e.virtualSize += v
    }
    if (u.length === 0 && (u = [0]),
        s.spaceBetween !== 0) {
        const v = e.isHorizontal() && o ? "marginLeft" : t("marginRight");
        c.filter((x, M) => !s.cssMode || s.loop ? !0 : M !== c.length - 1).forEach(x => {
            x.style[v] = `${E}px`
        }
        )
    }
    if (s.centeredSlides && s.centeredSlidesBounds) {
        let v = 0;
        m.forEach(M => {
            v += M + (s.spaceBetween ? s.spaceBetween : 0)
        }
        ),
            v -= s.spaceBetween;
        const x = v - l;
        u = u.map(M => M < 0 ? -w : M > x ? x + h : M)
    }
    if (s.centerInsufficientSlides) {
        let v = 0;
        if (m.forEach(x => {
            v += x + (s.spaceBetween ? s.spaceBetween : 0)
        }
        ),
            v -= s.spaceBetween,
            v < l) {
            const x = (l - v) / 2;
            u.forEach((M, A) => {
                u[A] = M - x
            }
            ),
                g.forEach((M, A) => {
                    g[A] = M + x
                }
                )
        }
    }
    if (Object.assign(e, {
        slides: c,
        snapGrid: u,
        slidesGrid: g,
        slidesSizesGrid: m
    }),
        s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
        Q(r, "--swiper-centered-offset-before", `${-u[0]}px`),
            Q(r, "--swiper-centered-offset-after", `${e.size / 2 - m[m.length - 1] / 2}px`);
        const v = -e.snapGrid[0]
            , x = -e.slidesGrid[0];
        e.snapGrid = e.snapGrid.map(M => M + v),
            e.slidesGrid = e.slidesGrid.map(M => M + x)
    }
    if (p !== f && e.emit("slidesLengthChange"),
        u.length !== C && (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
        g.length !== S && e.emit("slidesGridLengthChange"),
        s.watchSlidesProgress && e.updateSlidesOffset(),
        !d && !s.cssMode && (s.effect === "slide" || s.effect === "fade")) {
        const v = `${s.containerModifierClass}backface-hidden`
            , x = e.el.classList.contains(v);
        p <= s.maxBackfaceHiddenSlides ? x || e.el.classList.add(v) : x && e.el.classList.remove(v)
    }
}
function Tt(e) {
    const t = this
        , i = []
        , s = t.virtual && t.params.virtual.enabled;
    let r = 0, n;
    typeof e == "number" ? t.setTransition(e) : e === !0 && t.setTransition(t.params.speed);
    const l = o => s ? t.getSlideIndexByData(o) : t.slides[o];
    if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach(o => {
                i.push(o)
            }
            );
        else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const o = t.activeIndex + n;
                if (o > t.slides.length && !s)
                    break;
                i.push(l(o))
            }
    else
        i.push(l(t.activeIndex));
    for (n = 0; n < i.length; n += 1)
        if (typeof i[n] < "u") {
            const o = i[n].offsetHeight;
            r = o > r ? o : r
        }
    (r || r === 0) && (t.wrapperEl.style.height = `${r}px`)
}
function xt() {
    const e = this
        , t = e.slides
        , i = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
    for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) - i - e.cssOverflowAdjustment()
}
function Et(e = this && this.translate || 0) {
    const t = this
        , i = t.params
        , { slides: s, rtlTranslate: r, snapGrid: n } = t;
    if (s.length === 0)
        return;
    typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
    let l = -e;
    r && (l = e),
        s.forEach(o => {
            o.classList.remove(i.slideVisibleClass)
        }
        ),
        t.visibleSlidesIndexes = [],
        t.visibleSlides = [];
    for (let o = 0; o < s.length; o += 1) {
        const a = s[o];
        let d = a.swiperSlideOffset;
        i.cssMode && i.centeredSlides && (d -= s[0].swiperSlideOffset);
        const f = (l + (i.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + i.spaceBetween)
            , c = (l - n[0] + (i.centeredSlides ? t.minTranslate() : 0) - d) / (a.swiperSlideSize + i.spaceBetween)
            , p = -(l - d)
            , u = p + t.slidesSizesGrid[o];
        (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(a),
            t.visibleSlidesIndexes.push(o),
            s[o].classList.add(i.slideVisibleClass)),
            a.progress = r ? -f : f,
            a.originalProgress = r ? -c : c
    }
}
function yt(e) {
    const t = this;
    if (typeof e > "u") {
        const f = t.rtlTranslate ? -1 : 1;
        e = t && t.translate && t.translate * f || 0
    }
    const i = t.params
        , s = t.maxTranslate() - t.minTranslate();
    let { progress: r, isBeginning: n, isEnd: l, progressLoop: o } = t;
    const a = n
        , d = l;
    if (s === 0)
        r = 0,
            n = !0,
            l = !0;
    else {
        r = (e - t.minTranslate()) / s;
        const f = Math.abs(e - t.minTranslate()) < 1
            , c = Math.abs(e - t.maxTranslate()) < 1;
        n = f || r <= 0,
            l = c || r >= 1,
            f && (r = 0),
            c && (r = 1)
    }
    if (i.loop) {
        const f = t.getSlideIndexByData(0)
            , c = t.getSlideIndexByData(t.slides.length - 1)
            , p = t.slidesGrid[f]
            , u = t.slidesGrid[c]
            , g = t.slidesGrid[t.slidesGrid.length - 1]
            , m = Math.abs(e);
        m >= p ? o = (m - p) / g : o = (m + g - u) / g,
            o > 1 && (o -= 1)
    }
    Object.assign(t, {
        progress: r,
        progressLoop: o,
        isBeginning: n,
        isEnd: l
    }),
        (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && t.updateSlidesProgress(e),
        n && !a && t.emit("reachBeginning toEdge"),
        l && !d && t.emit("reachEnd toEdge"),
        (a && !n || d && !l) && t.emit("fromEdge"),
        t.emit("progress", r)
}
function Ct() {
    const e = this
        , { slides: t, params: i, slidesEl: s, activeIndex: r } = e
        , n = e.virtual && i.virtual.enabled
        , l = a => R(s, `.${i.slideClass}${a}, swiper-slide ${a}`)[0];
    t.forEach(a => {
        a.classList.remove(i.slideActiveClass, i.slideNextClass, i.slidePrevClass)
    }
    );
    let o;
    if (n)
        if (i.loop) {
            let a = r - e.virtual.slidesBefore;
            a < 0 && (a = e.virtual.slides.length + a),
                a >= e.virtual.slides.length && (a -= e.virtual.slides.length),
                o = l(`[data-swiper-slide-index="${a}"]`)
        } else
            o = l(`[data-swiper-slide-index="${r}"]`);
    else
        o = t[r];
    if (o) {
        o.classList.add(i.slideActiveClass);
        let a = dt(o, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && !a && (a = t[0]),
            a && a.classList.add(i.slideNextClass);
        let d = ot(o, `.${i.slideClass}, swiper-slide`)[0];
        i.loop && !d === 0 && (d = t[t.length - 1]),
            d && d.classList.add(i.slidePrevClass)
    }
    e.emitSlidesClasses()
}
const ee = (e, t) => {
    if (!e || e.destroyed || !e.params)
        return;
    const i = () => e.isElement ? "swiper-slide" : `.${e.params.slideClass}`
        , s = t.closest(i());
    if (s) {
        const r = s.querySelector(`.${e.params.lazyPreloaderClass}`);
        r && r.remove()
    }
}
    , Se = (e, t) => {
        if (!e.slides[t])
            return;
        const i = e.slides[t].querySelector('[loading="lazy"]');
        i && i.removeAttribute("loading")
    }
    , ue = e => {
        if (!e || e.destroyed || !e.params)
            return;
        let t = e.params.lazyPreloadPrevNext;
        const i = e.slides.length;
        if (!i || !t || t < 0)
            return;
        t = Math.min(t, i);
        const s = e.params.slidesPerView === "auto" ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView)
            , r = e.activeIndex
            , n = r + s - 1;
        if (e.params.rewind)
            for (let l = r - t; l <= n + t; l += 1) {
                const o = (l % i + i) % i;
                o !== r && o > n && Se(e, o)
            }
        else
            for (let l = Math.max(n - t, 0); l <= Math.min(n + t, i - 1); l += 1)
                l !== r && l > n && Se(e, l)
    }
    ;
function Mt(e) {
    const { slidesGrid: t, params: i } = e
        , s = e.rtlTranslate ? e.translate : -e.translate;
    let r;
    for (let n = 0; n < t.length; n += 1)
        typeof t[n + 1] < "u" ? s >= t[n] && s < t[n + 1] - (t[n + 1] - t[n]) / 2 ? r = n : s >= t[n] && s < t[n + 1] && (r = n + 1) : s >= t[n] && (r = n);
    return i.normalizeSlideIndex && (r < 0 || typeof r > "u") && (r = 0),
        r
}
function Pt(e) {
    const t = this
        , i = t.rtlTranslate ? t.translate : -t.translate
        , { snapGrid: s, params: r, activeIndex: n, realIndex: l, snapIndex: o } = t;
    let a = e, d;
    const f = p => {
        let u = p - t.virtual.slidesBefore;
        return u < 0 && (u = t.virtual.slides.length + u),
            u >= t.virtual.slides.length && (u -= t.virtual.slides.length),
            u
    }
        ;
    if (typeof a > "u" && (a = Mt(t)),
        s.indexOf(i) >= 0)
        d = s.indexOf(i);
    else {
        const p = Math.min(r.slidesPerGroupSkip, a);
        d = p + Math.floor((a - p) / r.slidesPerGroup)
    }
    if (d >= s.length && (d = s.length - 1),
        a === n) {
        d !== o && (t.snapIndex = d,
            t.emit("snapIndexChange")),
            t.params.loop && t.virtual && t.params.virtual.enabled && (t.realIndex = f(a));
        return
    }
    let c;
    t.virtual && r.virtual.enabled && r.loop ? c = f(a) : t.slides[a] ? c = parseInt(t.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : c = a,
        Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: d,
            previousRealIndex: l,
            realIndex: c,
            previousIndex: n,
            activeIndex: a
        }),
        t.initialized && ue(t),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        l !== c && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
}
function Ot(e) {
    const t = this
        , i = t.params
        , s = e.closest(`.${i.slideClass}, swiper-slide`);
    let r = !1, n;
    if (s) {
        for (let l = 0; l < t.slides.length; l += 1)
            if (t.slides[l] === s) {
                r = !0,
                    n = l;
                break
            }
    }
    if (s && r)
        t.clickedSlide = s,
            t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(s.getAttribute("data-swiper-slide-index"), 10) : t.clickedIndex = n;
    else {
        t.clickedSlide = void 0,
            t.clickedIndex = void 0;
        return
    }
    i.slideToClickedSlide && t.clickedIndex !== void 0 && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
}
const It = {
    updateSize: St,
    updateSlides: bt,
    updateAutoHeight: Tt,
    updateSlidesOffset: xt,
    updateSlidesProgress: Et,
    updateProgress: yt,
    updateSlidesClasses: Ct,
    updateActiveIndex: Pt,
    updateClickedSlide: Ot
};
function Lt(e = this.isHorizontal() ? "x" : "y") {
    const t = this
        , { params: i, rtlTranslate: s, translate: r, wrapperEl: n } = t;
    if (i.virtualTranslate)
        return s ? -r : r;
    if (i.cssMode)
        return r;
    let l = rt(n, e);
    return l += t.cssOverflowAdjustment(),
        s && (l = -l),
        l || 0
}
function _t(e, t) {
    const i = this
        , { rtlTranslate: s, params: r, wrapperEl: n, progress: l } = i;
    let o = 0
        , a = 0;
    const d = 0;
    i.isHorizontal() ? o = s ? -e : e : a = e,
        r.roundLengths && (o = Math.floor(o),
            a = Math.floor(a)),
        i.previousTranslate = i.translate,
        i.translate = i.isHorizontal() ? o : a,
        r.cssMode ? n[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -o : -a : r.virtualTranslate || (i.isHorizontal() ? o -= i.cssOverflowAdjustment() : a -= i.cssOverflowAdjustment(),
            n.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`);
    let f;
    const c = i.maxTranslate() - i.minTranslate();
    c === 0 ? f = 0 : f = (e - i.minTranslate()) / c,
        f !== l && i.updateProgress(e),
        i.emit("setTranslate", i.translate, t)
}
function zt() {
    return -this.snapGrid[0]
}
function At() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function Gt(e = 0, t = this.params.speed, i = !0, s = !0, r) {
    const n = this
        , { params: l, wrapperEl: o } = n;
    if (n.animating && l.preventInteractionOnTransition)
        return !1;
    const a = n.minTranslate()
        , d = n.maxTranslate();
    let f;
    if (s && e > a ? f = a : s && e < d ? f = d : f = e,
        n.updateProgress(f),
        l.cssMode) {
        const c = n.isHorizontal();
        if (t === 0)
            o[c ? "scrollLeft" : "scrollTop"] = -f;
        else {
            if (!n.support.smoothScroll)
                return Me({
                    swiper: n,
                    targetPosition: -f,
                    side: c ? "left" : "top"
                }),
                    !0;
            o.scrollTo({
                [c ? "left" : "top"]: -f,
                behavior: "smooth"
            })
        }
        return !0
    }
    return t === 0 ? (n.setTransition(0),
        n.setTranslate(f),
        i && (n.emit("beforeTransitionStart", t, r),
            n.emit("transitionEnd"))) : (n.setTransition(t),
                n.setTranslate(f),
                i && (n.emit("beforeTransitionStart", t, r),
                    n.emit("transitionStart")),
                n.animating || (n.animating = !0,
                    n.onTranslateToWrapperTransitionEnd || (n.onTranslateToWrapperTransitionEnd = function (p) {
                        !n || n.destroyed || p.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onTranslateToWrapperTransitionEnd),
                            n.onTranslateToWrapperTransitionEnd = null,
                            delete n.onTranslateToWrapperTransitionEnd,
                            i && n.emit("transitionEnd"))
                    }
                    ),
                    n.wrapperEl.addEventListener("transitionend", n.onTranslateToWrapperTransitionEnd))),
        !0
}
const Nt = {
    getTranslate: Lt,
    setTranslate: _t,
    minTranslate: zt,
    maxTranslate: At,
    translateTo: Gt
};
function kt(e, t) {
    const i = this;
    i.params.cssMode || (i.wrapperEl.style.transitionDuration = `${e}ms`),
        i.emit("setTransition", e, t)
}
function Oe({ swiper: e, runCallbacks: t, direction: i, step: s }) {
    const { activeIndex: r, previousIndex: n } = e;
    let l = i;
    if (l || (r > n ? l = "next" : r < n ? l = "prev" : l = "reset"),
        e.emit(`transition ${s}`),
        t && r !== n) {
        if (l === "reset") {
            e.emit(`slideResetTransition ${s}`);
            return
        }
        e.emit(`slideChangeTransition ${s}`),
            l === "next" ? e.emit(`slideNextTransition ${s}`) : e.emit(`slidePrevTransition ${s}`)
    }
}
function Bt(e = !0, t) {
    const i = this
        , { params: s } = i;
    s.cssMode || (s.autoHeight && i.updateAutoHeight(),
        Oe({
            swiper: i,
            runCallbacks: e,
            direction: t,
            step: "Start"
        }))
}
function Vt(e = !0, t) {
    const i = this
        , { params: s } = i;
    i.animating = !1,
        !s.cssMode && (i.setTransition(0),
            Oe({
                swiper: i,
                runCallbacks: e,
                direction: t,
                step: "End"
            }))
}
const Dt = {
    setTransition: kt,
    transitionStart: Bt,
    transitionEnd: Vt
};
function $t(e = 0, t = this.params.speed, i = !0, s, r) {
    typeof e == "string" && (e = parseInt(e, 10));
    const n = this;
    let l = e;
    l < 0 && (l = 0);
    const { params: o, snapGrid: a, slidesGrid: d, previousIndex: f, activeIndex: c, rtlTranslate: p, wrapperEl: u, enabled: g } = n;
    if (n.animating && o.preventInteractionOnTransition || !g && !s && !r)
        return !1;
    const m = Math.min(n.params.slidesPerGroupSkip, l);
    let w = m + Math.floor((l - m) / n.params.slidesPerGroup);
    w >= a.length && (w = a.length - 1);
    const h = -a[w];
    if (o.normalizeSlideIndex)
        for (let S = 0; S < d.length; S += 1) {
            const E = -Math.floor(h * 100)
                , y = Math.floor(d[S] * 100)
                , b = Math.floor(d[S + 1] * 100);
            typeof d[S + 1] < "u" ? E >= y && E < b - (b - y) / 2 ? l = S : E >= y && E < b && (l = S + 1) : E >= y && (l = S)
        }
    if (n.initialized && l !== c && (!n.allowSlideNext && h < n.translate && h < n.minTranslate() || !n.allowSlidePrev && h > n.translate && h > n.maxTranslate() && (c || 0) !== l))
        return !1;
    l !== (f || 0) && i && n.emit("beforeSlideChangeStart"),
        n.updateProgress(h);
    let C;
    if (l > c ? C = "next" : l < c ? C = "prev" : C = "reset",
        p && -h === n.translate || !p && h === n.translate)
        return n.updateActiveIndex(l),
            o.autoHeight && n.updateAutoHeight(),
            n.updateSlidesClasses(),
            o.effect !== "slide" && n.setTranslate(h),
            C !== "reset" && (n.transitionStart(i, C),
                n.transitionEnd(i, C)),
            !1;
    if (o.cssMode) {
        const S = n.isHorizontal()
            , E = p ? h : -h;
        if (t === 0) {
            const y = n.virtual && n.params.virtual.enabled;
            y && (n.wrapperEl.style.scrollSnapType = "none",
                n._immediateVirtual = !0),
                y && !n._cssModeVirtualInitialSet && n.params.initialSlide > 0 ? (n._cssModeVirtualInitialSet = !0,
                    requestAnimationFrame(() => {
                        u[S ? "scrollLeft" : "scrollTop"] = E
                    }
                    )) : u[S ? "scrollLeft" : "scrollTop"] = E,
                y && requestAnimationFrame(() => {
                    n.wrapperEl.style.scrollSnapType = "",
                        n._immediateVirtual = !1
                }
                )
        } else {
            if (!n.support.smoothScroll)
                return Me({
                    swiper: n,
                    targetPosition: E,
                    side: S ? "left" : "top"
                }),
                    !0;
            u.scrollTo({
                [S ? "left" : "top"]: E,
                behavior: "smooth"
            })
        }
        return !0
    }
    return n.setTransition(t),
        n.setTranslate(h),
        n.updateActiveIndex(l),
        n.updateSlidesClasses(),
        n.emit("beforeTransitionStart", t, s),
        n.transitionStart(i, C),
        t === 0 ? n.transitionEnd(i, C) : n.animating || (n.animating = !0,
            n.onSlideToWrapperTransitionEnd || (n.onSlideToWrapperTransitionEnd = function (E) {
                !n || n.destroyed || E.target === this && (n.wrapperEl.removeEventListener("transitionend", n.onSlideToWrapperTransitionEnd),
                    n.onSlideToWrapperTransitionEnd = null,
                    delete n.onSlideToWrapperTransitionEnd,
                    n.transitionEnd(i, C))
            }
            ),
            n.wrapperEl.addEventListener("transitionend", n.onSlideToWrapperTransitionEnd)),
        !0
}
function Rt(e = 0, t = this.params.speed, i = !0, s) {
    typeof e == "string" && (e = parseInt(e, 10));
    const r = this;
    let n = e;
    return r.params.loop && (r.virtual && r.params.virtual.enabled ? n = n + r.virtual.slidesBefore : n = r.getSlideIndexByData(n)),
        r.slideTo(n, t, i, s)
}
function Ft(e = this.params.speed, t = !0, i) {
    const s = this
        , { enabled: r, params: n, animating: l } = s;
    if (!r)
        return s;
    let o = n.slidesPerGroup;
    n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
    const a = s.activeIndex < n.slidesPerGroupSkip ? 1 : o
        , d = s.virtual && n.virtual.enabled;
    if (n.loop) {
        if (l && !d && n.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "next"
        }),
            s._clientLeft = s.wrapperEl.clientLeft
    }
    return n.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + a, e, t, i)
}
function Ht(e = this.params.speed, t = !0, i) {
    const s = this
        , { params: r, snapGrid: n, slidesGrid: l, rtlTranslate: o, enabled: a, animating: d } = s;
    if (!a)
        return s;
    const f = s.virtual && r.virtual.enabled;
    if (r.loop) {
        if (d && !f && r.loopPreventsSliding)
            return !1;
        s.loopFix({
            direction: "prev"
        }),
            s._clientLeft = s.wrapperEl.clientLeft
    }
    const c = o ? s.translate : -s.translate;
    function p(h) {
        return h < 0 ? -Math.floor(Math.abs(h)) : Math.floor(h)
    }
    const u = p(c)
        , g = n.map(h => p(h));
    let m = n[g.indexOf(u) - 1];
    if (typeof m > "u" && r.cssMode) {
        let h;
        n.forEach((C, S) => {
            u >= C && (h = S)
        }
        ),
            typeof h < "u" && (m = n[h > 0 ? h - 1 : h])
    }
    let w = 0;
    if (typeof m < "u" && (w = l.indexOf(m),
        w < 0 && (w = s.activeIndex - 1),
        r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (w = w - s.slidesPerViewDynamic("previous", !0) + 1,
            w = Math.max(w, 0))),
        r.rewind && s.isBeginning) {
        const h = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
        return s.slideTo(h, e, t, i)
    }
    return s.slideTo(w, e, t, i)
}
function jt(e = this.params.speed, t = !0, i) {
    const s = this;
    return s.slideTo(s.activeIndex, e, t, i)
}
function Wt(e = this.params.speed, t = !0, i, s = .5) {
    const r = this;
    let n = r.activeIndex;
    const l = Math.min(r.params.slidesPerGroupSkip, n)
        , o = l + Math.floor((n - l) / r.params.slidesPerGroup)
        , a = r.rtlTranslate ? r.translate : -r.translate;
    if (a >= r.snapGrid[o]) {
        const d = r.snapGrid[o]
            , f = r.snapGrid[o + 1];
        a - d > (f - d) * s && (n += r.params.slidesPerGroup)
    } else {
        const d = r.snapGrid[o - 1]
            , f = r.snapGrid[o];
        a - d <= (f - d) * s && (n -= r.params.slidesPerGroup)
    }
    return n = Math.max(n, 0),
        n = Math.min(n, r.slidesGrid.length - 1),
        r.slideTo(n, e, t, i)
}
function Xt() {
    const e = this
        , { params: t, slidesEl: i } = e
        , s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
    let r = e.clickedIndex, n;
    const l = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
    if (t.loop) {
        if (e.animating)
            return;
        n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10),
            t.centeredSlides ? r < e.loopedSlides - s / 2 || r > e.slides.length - e.loopedSlides + s / 2 ? (e.loopFix(),
                r = e.getSlideIndex(R(i, `${l}[data-swiper-slide-index="${n}"]`)[0]),
                ce(() => {
                    e.slideTo(r)
                }
                )) : e.slideTo(r) : r > e.slides.length - s ? (e.loopFix(),
                    r = e.getSlideIndex(R(i, `${l}[data-swiper-slide-index="${n}"]`)[0]),
                    ce(() => {
                        e.slideTo(r)
                    }
                    )) : e.slideTo(r)
    } else
        e.slideTo(r)
}
const Yt = {
    slideTo: $t,
    slideToLoop: Rt,
    slideNext: Ft,
    slidePrev: Ht,
    slideReset: jt,
    slideToClosest: Wt,
    slideToClickedSlide: Xt
};
function qt(e) {
    const t = this
        , { params: i, slidesEl: s } = t;
    if (!i.loop || t.virtual && t.params.virtual.enabled)
        return;
    R(s, `.${i.slideClass}, swiper-slide`).forEach((n, l) => {
        n.setAttribute("data-swiper-slide-index", l)
    }
    ),
        t.loopFix({
            slideRealIndex: e,
            direction: i.centeredSlides ? void 0 : "next"
        })
}
function Kt({ slideRealIndex: e, slideTo: t = !0, direction: i, setTranslate: s, activeSlideIndex: r, byController: n, byMousewheel: l } = {}) {
    const o = this;
    if (!o.params.loop)
        return;
    o.emit("beforeLoopFix");
    const { slides: a, allowSlidePrev: d, allowSlideNext: f, slidesEl: c, params: p } = o;
    if (o.allowSlidePrev = !0,
        o.allowSlideNext = !0,
        o.virtual && p.virtual.enabled) {
        t && (!p.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : p.centeredSlides && o.snapIndex < p.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)),
            o.allowSlidePrev = d,
            o.allowSlideNext = f,
            o.emit("loopFix");
        return
    }
    const u = p.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(p.slidesPerView, 10));
    let g = p.loopedSlides || u;
    g % p.slidesPerGroup !== 0 && (g += p.slidesPerGroup - g % p.slidesPerGroup),
        o.loopedSlides = g;
    const m = []
        , w = [];
    let h = o.activeIndex;
    typeof r > "u" ? r = o.getSlideIndex(o.slides.filter(b => b.classList.contains(p.slideActiveClass))[0]) : h = r;
    const C = i === "next" || !i
        , S = i === "prev" || !i;
    let E = 0
        , y = 0;
    if (r < g) {
        E = Math.max(g - r, p.slidesPerGroup);
        for (let b = 0; b < g - r; b += 1) {
            const L = b - Math.floor(b / a.length) * a.length;
            m.push(a.length - L - 1)
        }
    } else if (r > o.slides.length - g * 2) {
        y = Math.max(r - (o.slides.length - g * 2), p.slidesPerGroup);
        for (let b = 0; b < y; b += 1) {
            const L = b - Math.floor(b / a.length) * a.length;
            w.push(L)
        }
    }
    if (S && m.forEach(b => {
        c.prepend(o.slides[b])
    }
    ),
        C && w.forEach(b => {
            c.append(o.slides[b])
        }
        ),
        o.recalcSlides(),
        p.watchSlidesProgress && o.updateSlidesOffset(),
        t) {
        if (m.length > 0 && S)
            if (typeof e > "u") {
                const b = o.slidesGrid[h]
                    , T = o.slidesGrid[h + E] - b;
                l ? o.setTranslate(o.translate - T) : (o.slideTo(h + E, 0, !1, !0),
                    s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += T))
            } else
                s && o.slideToLoop(e, 0, !1, !0);
        else if (w.length > 0 && C)
            if (typeof e > "u") {
                const b = o.slidesGrid[h]
                    , T = o.slidesGrid[h - y] - b;
                l ? o.setTranslate(o.translate - T) : (o.slideTo(h - y, 0, !1, !0),
                    s && (o.touches[o.isHorizontal() ? "startX" : "startY"] += T))
            } else
                o.slideToLoop(e, 0, !1, !0)
    }
    if (o.allowSlidePrev = d,
        o.allowSlideNext = f,
        o.controller && o.controller.control && !n) {
        const b = {
            slideRealIndex: e,
            slideTo: !1,
            direction: i,
            setTranslate: s,
            activeSlideIndex: r,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(L => {
            !L.destroyed && L.params.loop && L.loopFix(b)
        }
        ) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(b)
    }
    o.emit("loopFix")
}
function Ut() {
    const e = this
        , { params: t, slidesEl: i } = e;
    if (!t.loop || e.virtual && e.params.virtual.enabled)
        return;
    e.recalcSlides();
    const s = [];
    e.slides.forEach(r => {
        const n = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        s[n] = r
    }
    ),
        e.slides.forEach(r => {
            r.removeAttribute("data-swiper-slide-index")
        }
        ),
        s.forEach(r => {
            i.append(r)
        }
        ),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0)
}
const Zt = {
    loopCreate: qt,
    loopFix: Kt,
    loopDestroy: Ut
};
function Jt(e) {
    const t = this;
    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode)
        return;
    const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
    t.isElement && (t.__preventObserver__ = !0),
        i.style.cursor = "move",
        i.style.cursor = e ? "grabbing" : "grab",
        t.isElement && requestAnimationFrame(() => {
            t.__preventObserver__ = !1
        }
        )
}
function Qt() {
    const e = this;
    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0),
        e[e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "",
        e.isElement && requestAnimationFrame(() => {
            e.__preventObserver__ = !1
        }
        ))
}
const ei = {
    setGrabCursor: Jt,
    unsetGrabCursor: Qt
};
function ti(e, t = this) {
    function i(s) {
        if (!s || s === W() || s === N())
            return null;
        s.assignedSlot && (s = s.assignedSlot);
        const r = s.closest(e);
        return !r && !s.getRootNode ? null : r || i(s.getRootNode().host)
    }
    return i(t)
}
function ii(e) {
    const t = this
        , i = W()
        , s = N()
        , r = t.touchEventsData;
    r.evCache.push(e);
    const { params: n, touches: l, enabled: o } = t;
    if (!o || !n.simulateTouch && e.pointerType === "mouse" || t.animating && n.preventInteractionOnTransition)
        return;
    !t.animating && n.cssMode && n.loop && t.loopFix();
    let a = e;
    a.originalEvent && (a = a.originalEvent);
    let d = a.target;
    if (n.touchEventsTarget === "wrapper" && !t.wrapperEl.contains(d) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || r.isTouched && r.isMoved)
        return;
    const f = !!n.noSwipingClass && n.noSwipingClass !== ""
        , c = e.composedPath ? e.composedPath() : e.path;
    f && a.target && a.target.shadowRoot && c && (d = c[0]);
    const p = n.noSwipingSelector ? n.noSwipingSelector : `.${n.noSwipingClass}`
        , u = !!(a.target && a.target.shadowRoot);
    if (n.noSwiping && (u ? ti(p, d) : d.closest(p))) {
        t.allowClick = !0;
        return
    }
    if (n.swipeHandler && !d.closest(n.swipeHandler))
        return;
    l.currentX = a.pageX,
        l.currentY = a.pageY;
    const g = l.currentX
        , m = l.currentY
        , w = n.edgeSwipeDetection || n.iOSEdgeSwipeDetection
        , h = n.edgeSwipeThreshold || n.iOSEdgeSwipeThreshold;
    if (w && (g <= h || g >= s.innerWidth - h))
        if (w === "prevent")
            e.preventDefault();
        else
            return;
    Object.assign(r, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }),
        l.startX = g,
        l.startY = m,
        r.touchStartTime = te(),
        t.allowClick = !0,
        t.updateSize(),
        t.swipeDirection = void 0,
        n.threshold > 0 && (r.allowThresholdMove = !1);
    let C = !0;
    d.matches(r.focusableElements) && (C = !1,
        d.nodeName === "SELECT" && (r.isTouched = !1)),
        i.activeElement && i.activeElement.matches(r.focusableElements) && i.activeElement !== d && i.activeElement.blur();
    const S = C && t.allowTouchMove && n.touchStartPreventDefault;
    (n.touchStartForcePreventDefault || S) && !d.isContentEditable && a.preventDefault(),
        t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !n.cssMode && t.freeMode.onTouchStart(),
        t.emit("touchStart", a)
}
function si(e) {
    const t = W()
        , i = this
        , s = i.touchEventsData
        , { params: r, touches: n, rtlTranslate: l, enabled: o } = i;
    if (!o || !r.simulateTouch && e.pointerType === "mouse")
        return;
    let a = e;
    if (a.originalEvent && (a = a.originalEvent),
        !s.isTouched) {
        s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", a);
        return
    }
    const d = s.evCache.findIndex(b => b.pointerId === a.pointerId);
    d >= 0 && (s.evCache[d] = a);
    const f = s.evCache.length > 1 ? s.evCache[0] : a
        , c = f.pageX
        , p = f.pageY;
    if (a.preventedByNestedSwiper) {
        n.startX = c,
            n.startY = p;
        return
    }
    if (!i.allowTouchMove) {
        a.target.matches(s.focusableElements) || (i.allowClick = !1),
            s.isTouched && (Object.assign(n, {
                startX: c,
                startY: p,
                prevX: i.touches.currentX,
                prevY: i.touches.currentY,
                currentX: c,
                currentY: p
            }),
                s.touchStartTime = te());
        return
    }
    if (r.touchReleaseOnEdges && !r.loop) {
        if (i.isVertical()) {
            if (p < n.startY && i.translate <= i.maxTranslate() || p > n.startY && i.translate >= i.minTranslate()) {
                s.isTouched = !1,
                    s.isMoved = !1;
                return
            }
        } else if (c < n.startX && i.translate <= i.maxTranslate() || c > n.startX && i.translate >= i.minTranslate())
            return
    }
    if (t.activeElement && a.target === t.activeElement && a.target.matches(s.focusableElements)) {
        s.isMoved = !0,
            i.allowClick = !1;
        return
    }
    if (s.allowTouchCallbacks && i.emit("touchMove", a),
        a.targetTouches && a.targetTouches.length > 1)
        return;
    n.currentX = c,
        n.currentY = p;
    const u = n.currentX - n.startX
        , g = n.currentY - n.startY;
    if (i.params.threshold && Math.sqrt(u ** 2 + g ** 2) < i.params.threshold)
        return;
    if (typeof s.isScrolling > "u") {
        let b;
        i.isHorizontal() && n.currentY === n.startY || i.isVertical() && n.currentX === n.startX ? s.isScrolling = !1 : u * u + g * g >= 25 && (b = Math.atan2(Math.abs(g), Math.abs(u)) * 180 / Math.PI,
            s.isScrolling = i.isHorizontal() ? b > r.touchAngle : 90 - b > r.touchAngle)
    }
    if (s.isScrolling && i.emit("touchMoveOpposite", a),
        typeof s.startMoving > "u" && (n.currentX !== n.startX || n.currentY !== n.startY) && (s.startMoving = !0),
        s.isScrolling || i.zoom && i.params.zoom && i.params.zoom.enabled && s.evCache.length > 1) {
        s.isTouched = !1;
        return
    }
    if (!s.startMoving)
        return;
    i.allowClick = !1,
        !r.cssMode && a.cancelable && a.preventDefault(),
        r.touchMoveStopPropagation && !r.nested && a.stopPropagation();
    let m = i.isHorizontal() ? u : g
        , w = i.isHorizontal() ? n.currentX - n.previousX : n.currentY - n.previousY;
    r.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1),
        w = Math.abs(w) * (l ? 1 : -1)),
        n.diff = m,
        m *= r.touchRatio,
        l && (m = -m,
            w = -w);
    const h = i.touchesDirection;
    i.swipeDirection = m > 0 ? "prev" : "next",
        i.touchesDirection = w > 0 ? "prev" : "next";
    const C = i.params.loop && !r.cssMode;
    if (!s.isMoved) {
        if (C && i.loopFix({
            direction: i.swipeDirection
        }),
            s.startTranslate = i.getTranslate(),
            i.setTransition(0),
            i.animating) {
            const b = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            i.wrapperEl.dispatchEvent(b)
        }
        s.allowMomentumBounce = !1,
            r.grabCursor && (i.allowSlideNext === !0 || i.allowSlidePrev === !0) && i.setGrabCursor(!0),
            i.emit("sliderFirstMove", a)
    }
    let S;
    s.isMoved && h !== i.touchesDirection && C && Math.abs(m) >= 1 && (i.loopFix({
        direction: i.swipeDirection,
        setTranslate: !0
    }),
        S = !0),
        i.emit("sliderMove", a),
        s.isMoved = !0,
        s.currentTranslate = m + s.startTranslate;
    let E = !0
        , y = r.resistanceRatio;
    if (r.touchReleaseOnEdges && (y = 0),
        m > 0 ? (C && !S && s.currentTranslate > (r.centeredSlides ? i.minTranslate() - i.size / 2 : i.minTranslate()) && i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }),
            s.currentTranslate > i.minTranslate() && (E = !1,
                r.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + m) ** y))) : m < 0 && (C && !S && s.currentTranslate < (r.centeredSlides ? i.maxTranslate() + i.size / 2 : i.maxTranslate()) && i.loopFix({
                    direction: "next",
                    setTranslate: !0,
                    activeSlideIndex: i.slides.length - (r.slidesPerView === "auto" ? i.slidesPerViewDynamic() : Math.ceil(parseFloat(r.slidesPerView, 10)))
                }),
                    s.currentTranslate < i.maxTranslate() && (E = !1,
                        r.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - m) ** y))),
        E && (a.preventedByNestedSwiper = !0),
        !i.allowSlideNext && i.swipeDirection === "next" && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev && i.swipeDirection === "prev" && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate),
        !i.allowSlidePrev && !i.allowSlideNext && (s.currentTranslate = s.startTranslate),
        r.threshold > 0)
        if (Math.abs(m) > r.threshold || s.allowThresholdMove) {
            if (!s.allowThresholdMove) {
                s.allowThresholdMove = !0,
                    n.startX = n.currentX,
                    n.startY = n.currentY,
                    s.currentTranslate = s.startTranslate,
                    n.diff = i.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY;
                return
            }
        } else {
            s.currentTranslate = s.startTranslate;
            return
        }
    !r.followFinger || r.cssMode || ((r.freeMode && r.freeMode.enabled && i.freeMode || r.watchSlidesProgress) && (i.updateActiveIndex(),
        i.updateSlidesClasses()),
        i.params.freeMode && r.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
        i.updateProgress(s.currentTranslate),
        i.setTranslate(s.currentTranslate))
}
function ni(e) {
    const t = this
        , i = t.touchEventsData
        , s = i.evCache.findIndex(S => S.pointerId === e.pointerId);
    if (s >= 0 && i.evCache.splice(s, 1),
        ["pointercancel", "pointerout", "pointerleave"].includes(e.type) && !(e.type === "pointercancel" && (t.browser.isSafari || t.browser.isWebView)))
        return;
    const { params: r, touches: n, rtlTranslate: l, slidesGrid: o, enabled: a } = t;
    if (!a || !r.simulateTouch && e.pointerType === "mouse")
        return;
    let d = e;
    if (d.originalEvent && (d = d.originalEvent),
        i.allowTouchCallbacks && t.emit("touchEnd", d),
        i.allowTouchCallbacks = !1,
        !i.isTouched) {
        i.isMoved && r.grabCursor && t.setGrabCursor(!1),
            i.isMoved = !1,
            i.startMoving = !1;
        return
    }
    r.grabCursor && i.isMoved && i.isTouched && (t.allowSlideNext === !0 || t.allowSlidePrev === !0) && t.setGrabCursor(!1);
    const f = te()
        , c = f - i.touchStartTime;
    if (t.allowClick) {
        const S = d.path || d.composedPath && d.composedPath();
        t.updateClickedSlide(S && S[0] || d.target),
            t.emit("tap click", d),
            c < 300 && f - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)
    }
    if (i.lastClickTime = te(),
        ce(() => {
            t.destroyed || (t.allowClick = !0)
        }
        ),
        !i.isTouched || !i.isMoved || !t.swipeDirection || n.diff === 0 || i.currentTranslate === i.startTranslate) {
        i.isTouched = !1,
            i.isMoved = !1,
            i.startMoving = !1;
        return
    }
    i.isTouched = !1,
        i.isMoved = !1,
        i.startMoving = !1;
    let p;
    if (r.followFinger ? p = l ? t.translate : -t.translate : p = -i.currentTranslate,
        r.cssMode)
        return;
    if (t.params.freeMode && r.freeMode.enabled) {
        t.freeMode.onTouchEnd({
            currentPos: p
        });
        return
    }
    let u = 0
        , g = t.slidesSizesGrid[0];
    for (let S = 0; S < o.length; S += S < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup) {
        const E = S < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
        typeof o[S + E] < "u" ? p >= o[S] && p < o[S + E] && (u = S,
            g = o[S + E] - o[S]) : p >= o[S] && (u = S,
                g = o[o.length - 1] - o[o.length - 2])
    }
    let m = null
        , w = null;
    r.rewind && (t.isBeginning ? w = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (m = 0));
    const h = (p - o[u]) / g
        , C = u < r.slidesPerGroupSkip - 1 ? 1 : r.slidesPerGroup;
    if (c > r.longSwipesMs) {
        if (!r.longSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.swipeDirection === "next" && (h >= r.longSwipesRatio ? t.slideTo(r.rewind && t.isEnd ? m : u + C) : t.slideTo(u)),
            t.swipeDirection === "prev" && (h > 1 - r.longSwipesRatio ? t.slideTo(u + C) : w !== null && h < 0 && Math.abs(h) > r.longSwipesRatio ? t.slideTo(w) : t.slideTo(u))
    } else {
        if (!r.shortSwipes) {
            t.slideTo(t.activeIndex);
            return
        }
        t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(u + C) : t.slideTo(u) : (t.swipeDirection === "next" && t.slideTo(m !== null ? m : u + C),
            t.swipeDirection === "prev" && t.slideTo(w !== null ? w : u))
    }
}
function be() {
    const e = this
        , { params: t, el: i } = e;
    if (i && i.offsetWidth === 0)
        return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: s, allowSlidePrev: r, snapGrid: n } = e
        , l = e.virtual && e.params.virtual.enabled;
    e.allowSlideNext = !0,
        e.allowSlidePrev = !0,
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses();
    const o = l && t.loop;
    (t.slidesPerView === "auto" || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides && !o ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout),
            e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
            }
                , 500)),
        e.allowSlidePrev = r,
        e.allowSlideNext = s,
        e.params.watchOverflow && n !== e.snapGrid && e.checkOverflow()
}
function ri(e) {
    const t = this;
    t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation && t.animating && (e.stopPropagation(),
            e.stopImmediatePropagation())))
}
function ai() {
    const e = this
        , { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
    if (!s)
        return;
    e.previousTranslate = e.translate,
        e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop,
        e.translate === 0 && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
    let r;
    const n = e.maxTranslate() - e.minTranslate();
    n === 0 ? r = 0 : r = (e.translate - e.minTranslate()) / n,
        r !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1)
}
function li(e) {
    const t = this;
    ee(t, e.target),
        t.update()
}
let Te = !1;
function oi() { }
const Ie = (e, t) => {
    const i = W()
        , { params: s, el: r, wrapperEl: n, device: l } = e
        , o = !!s.nested
        , a = t === "on" ? "addEventListener" : "removeEventListener"
        , d = t;
    r[a]("pointerdown", e.onTouchStart, {
        passive: !1
    }),
        i[a]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: o
        }),
        i[a]("pointerup", e.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointercancel", e.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointerout", e.onTouchEnd, {
            passive: !0
        }),
        i[a]("pointerleave", e.onTouchEnd, {
            passive: !0
        }),
        (s.preventClicks || s.preventClicksPropagation) && r[a]("click", e.onClick, !0),
        s.cssMode && n[a]("scroll", e.onScroll),
        s.updateOnWindowResize ? e[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", be, !0) : e[d]("observerUpdate", be, !0),
        r[a]("load", e.onLoad, {
            capture: !0
        })
}
    ;
function di() {
    const e = this
        , t = W()
        , { params: i } = e;
    e.onTouchStart = ii.bind(e),
        e.onTouchMove = si.bind(e),
        e.onTouchEnd = ni.bind(e),
        i.cssMode && (e.onScroll = ai.bind(e)),
        e.onClick = ri.bind(e),
        e.onLoad = li.bind(e),
        Te || (t.addEventListener("touchstart", oi),
            Te = !0),
        Ie(e, "on")
}
function ci() {
    Ie(this, "off")
}
const ui = {
    attachEvents: di,
    detachEvents: ci
}
    , xe = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function fi() {
    const e = this
        , { realIndex: t, initialized: i, params: s, el: r } = e
        , n = s.breakpoints;
    if (!n || n && Object.keys(n).length === 0)
        return;
    const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
    if (!l || e.currentBreakpoint === l)
        return;
    const a = (l in n ? n[l] : void 0) || e.originalParams
        , d = xe(e, s)
        , f = xe(e, a)
        , c = s.enabled;
    d && !f ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`),
        e.emitContainerClasses()) : !d && f && (r.classList.add(`${s.containerModifierClass}grid`),
            (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && s.grid.fill === "column") && r.classList.add(`${s.containerModifierClass}grid-column`),
            e.emitContainerClasses()),
        ["navigation", "pagination", "scrollbar"].forEach(m => {
            const w = s[m] && s[m].enabled
                , h = a[m] && a[m].enabled;
            w && !h && e[m].disable(),
                !w && h && e[m].enable()
        }
        );
    const p = a.direction && a.direction !== s.direction
        , u = s.loop && (a.slidesPerView !== s.slidesPerView || p);
    p && i && e.changeDirection(),
        G(e.params, a);
    const g = e.params.enabled;
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev
    }),
        c && !g ? e.disable() : !c && g && e.enable(),
        e.currentBreakpoint = l,
        e.emit("_beforeBreakpoint", a),
        u && i && (e.loopDestroy(),
            e.loopCreate(t),
            e.updateSlides()),
        e.emit("breakpoint", a)
}
function pi(e, t = "window", i) {
    if (!e || t === "container" && !i)
        return;
    let s = !1;
    const r = N()
        , n = t === "window" ? r.innerHeight : i.clientHeight
        , l = Object.keys(e).map(o => {
            if (typeof o == "string" && o.indexOf("@") === 0) {
                const a = parseFloat(o.substr(1));
                return {
                    value: n * a,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        }
        );
    l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
        const { point: a, value: d } = l[o];
        t === "window" ? r.matchMedia(`(min-width: ${d}px)`).matches && (s = a) : d <= i.clientWidth && (s = a)
    }
    return s || "max"
}
const hi = {
    setBreakpoint: fi,
    getBreakpoint: pi
};
function mi(e, t) {
    const i = [];
    return e.forEach(s => {
        typeof s == "object" ? Object.keys(s).forEach(r => {
            s[r] && i.push(t + r)
        }
        ) : typeof s == "string" && i.push(t + s)
    }
    ),
        i
}
function gi() {
    const e = this
        , { classNames: t, params: i, rtl: s, el: r, device: n } = e
        , l = mi(["initialized", i.direction, {
            "free-mode": e.params.freeMode && i.freeMode.enabled
        }, {
                autoheight: i.autoHeight
            }, {
                rtl: s
            }, {
                grid: i.grid && i.grid.rows > 1
            }, {
                "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column"
            }, {
                android: n.android
            }, {
                ios: n.ios
            }, {
                "css-mode": i.cssMode
            }, {
                centered: i.cssMode && i.centeredSlides
            }, {
                "watch-progress": i.watchSlidesProgress
            }], i.containerModifierClass);
    t.push(...l),
        r.classList.add(...t),
        e.emitContainerClasses()
}
function vi() {
    const e = this
        , { el: t, classNames: i } = e;
    t.classList.remove(...i),
        e.emitContainerClasses()
}
const wi = {
    addClasses: gi,
    removeClasses: vi
};
function Si() {
    const e = this
        , { isLocked: t, params: i } = e
        , { slidesOffsetBefore: s } = i;
    if (s) {
        const r = e.slides.length - 1
            , n = e.slidesGrid[r] + e.slidesSizesGrid[r] + s * 2;
        e.isLocked = e.size > n
    } else
        e.isLocked = e.snapGrid.length === 1;
    i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
        i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
        t && t !== e.isLocked && (e.isEnd = !1),
        t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
}
const bi = {
    checkOverflow: Si
}
    , Ee = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
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
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
function Ti(e, t) {
    return function (s = {}) {
        const r = Object.keys(s)[0]
            , n = s[r];
        if (typeof n != "object" || n === null) {
            G(t, s);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(r) >= 0 && e[r] === !0 && (e[r] = {
            auto: !0
        }),
            !(r in e && "enabled" in n)) {
            G(t, s);
            return
        }
        e[r] === !0 && (e[r] = {
            enabled: !0
        }),
            typeof e[r] == "object" && !("enabled" in e[r]) && (e[r].enabled = !0),
            e[r] || (e[r] = {
                enabled: !1
            }),
            G(t, s)
    }
}
const oe = {
    eventsEmitter: wt,
    update: It,
    translate: Nt,
    transition: Dt,
    slide: Yt,
    loop: Zt,
    grabCursor: ei,
    events: ui,
    breakpoints: hi,
    checkOverflow: bi,
    classes: wi
}
    , de = {};
let K = class $ {
    constructor(...t) {
        let i, s;
        t.length === 1 && t[0].constructor && Object.prototype.toString.call(t[0]).slice(8, -1) === "Object" ? s = t[0] : [i, s] = t,
            s || (s = {}),
            s = G({}, s),
            i && !s.el && (s.el = i);
        const r = W();
        if (s.el && typeof s.el == "string" && r.querySelectorAll(s.el).length > 1) {
            const a = [];
            return r.querySelectorAll(s.el).forEach(d => {
                const f = G({}, s, {
                    el: d
                });
                a.push(new $(f))
            }
            ),
                a
        }
        const n = this;
        n.__swiper__ = !0,
            n.support = Pe(),
            n.device = pt({
                userAgent: s.userAgent
            }),
            n.browser = mt(),
            n.eventsListeners = {},
            n.eventsAnyListeners = [],
            n.modules = [...n.__modules__],
            s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
        const l = {};
        n.modules.forEach(a => {
            a({
                params: s,
                swiper: n,
                extendParams: Ti(s, l),
                on: n.on.bind(n),
                once: n.once.bind(n),
                off: n.off.bind(n),
                emit: n.emit.bind(n)
            })
        }
        );
        const o = G({}, Ee, l);
        return n.params = G({}, o, de, s),
            n.originalParams = G({}, n.params),
            n.passedParams = G({}, s),
            n.params && n.params.on && Object.keys(n.params.on).forEach(a => {
                n.on(a, n.params.on[a])
            }
            ),
            n.params && n.params.onAny && n.onAny(n.params.onAny),
            Object.assign(n, {
                enabled: n.params.enabled,
                el: i,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return n.params.direction === "horizontal"
                },
                isVertical() {
                    return n.params.direction === "vertical"
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: n.params.allowSlideNext,
                allowSlidePrev: n.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: n.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    evCache: []
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
            }),
            n.emit("_swiper"),
            n.params.init && n.init(),
            n
    }
    getSlideIndex(t) {
        const { slidesEl: i, params: s } = this
            , r = R(i, `.${s.slideClass}, swiper-slide`)
            , n = ve(r[0]);
        return ve(t) - n
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(this.slides.filter(i => i.getAttribute("data-swiper-slide-index") * 1 === t)[0])
    }
    recalcSlides() {
        const t = this
            , { slidesEl: i, params: s } = t;
        t.slides = R(i, `.${s.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this;
        t.enabled || (t.enabled = !0,
            t.params.grabCursor && t.setGrabCursor(),
            t.emit("enable"))
    }
    disable() {
        const t = this;
        t.enabled && (t.enabled = !1,
            t.params.grabCursor && t.unsetGrabCursor(),
            t.emit("disable"))
    }
    setProgress(t, i) {
        const s = this;
        t = Math.min(Math.max(t, 0), 1);
        const r = s.minTranslate()
            , l = (s.maxTranslate() - r) * t + r;
        s.translateTo(l, typeof i > "u" ? 0 : i),
            s.updateActiveIndex(),
            s.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const i = t.el.className.split(" ").filter(s => s.indexOf("swiper") === 0 || s.indexOf(t.params.containerModifierClass) === 0);
        t.emit("_containerClasses", i.join(" "))
    }
    getSlideClasses(t) {
        const i = this;
        return i.destroyed ? "" : t.className.split(" ").filter(s => s.indexOf("swiper-slide") === 0 || s.indexOf(i.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const t = this;
        if (!t.params._emitClasses || !t.el)
            return;
        const i = [];
        t.slides.forEach(s => {
            const r = t.getSlideClasses(s);
            i.push({
                slideEl: s,
                classNames: r
            }),
                t.emit("_slideClass", s, r)
        }
        ),
            t.emit("_slideClasses", i)
    }
    slidesPerViewDynamic(t = "current", i = !1) {
        const s = this
            , { params: r, slides: n, slidesGrid: l, slidesSizesGrid: o, size: a, activeIndex: d } = s;
        let f = 1;
        if (r.centeredSlides) {
            let c = n[d].swiperSlideSize, p;
            for (let u = d + 1; u < n.length; u += 1)
                n[u] && !p && (c += n[u].swiperSlideSize,
                    f += 1,
                    c > a && (p = !0));
            for (let u = d - 1; u >= 0; u -= 1)
                n[u] && !p && (c += n[u].swiperSlideSize,
                    f += 1,
                    c > a && (p = !0))
        } else if (t === "current")
            for (let c = d + 1; c < n.length; c += 1)
                (i ? l[c] + o[c] - l[d] < a : l[c] - l[d] < a) && (f += 1);
        else
            for (let c = d - 1; c >= 0; c -= 1)
                l[d] - l[c] < a && (f += 1);
        return f
    }
    update() {
        const t = this;
        if (!t || t.destroyed)
            return;
        const { snapGrid: i, params: s } = t;
        s.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
                l.complete && ee(t, l)
            }
            ),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses();
        function r() {
            const l = t.rtlTranslate ? t.translate * -1 : t.translate
                , o = Math.min(Math.max(l, t.maxTranslate()), t.minTranslate());
            t.setTranslate(o),
                t.updateActiveIndex(),
                t.updateSlidesClasses()
        }
        let n;
        t.params.freeMode && t.params.freeMode.enabled ? (r(),
            t.params.autoHeight && t.updateAutoHeight()) : ((t.params.slidesPerView === "auto" || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? n = t.slideTo(t.slides.length - 1, 0, !1, !0) : n = t.slideTo(t.activeIndex, 0, !1, !0),
                n || r()),
            s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
            t.emit("update")
    }
    changeDirection(t, i = !0) {
        const s = this
            , r = s.params.direction;
        return t || (t = r === "horizontal" ? "vertical" : "horizontal"),
            t === r || t !== "horizontal" && t !== "vertical" || (s.el.classList.remove(`${s.params.containerModifierClass}${r}`),
                s.el.classList.add(`${s.params.containerModifierClass}${t}`),
                s.emitContainerClasses(),
                s.params.direction = t,
                s.slides.forEach(n => {
                    t === "vertical" ? n.style.width = "" : n.style.height = ""
                }
                ),
                s.emit("changeDirection"),
                i && s.update()),
            s
    }
    changeLanguageDirection(t) {
        const i = this;
        i.rtl && t === "rtl" || !i.rtl && t === "ltr" || (i.rtl = t === "rtl",
            i.rtlTranslate = i.params.direction === "horizontal" && i.rtl,
            i.rtl ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
                i.el.dir = "rtl") : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
                    i.el.dir = "ltr"),
            i.update())
    }
    mount(t) {
        const i = this;
        if (i.mounted)
            return !0;
        let s = t || i.params.el;
        if (typeof s == "string" && (s = document.querySelector(s)),
            !s)
            return !1;
        s.swiper = i,
            s.shadowEl && (i.isElement = !0);
        const r = () => `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let l = (() => s && s.shadowRoot && s.shadowRoot.querySelector ? s.shadowRoot.querySelector(r()) : R(s, r())[0])();
        return !l && i.params.createElements && (l = lt("div", i.params.wrapperClass),
            s.append(l),
            R(s, `.${i.params.slideClass}`).forEach(o => {
                l.append(o)
            }
            )),
            Object.assign(i, {
                el: s,
                wrapperEl: l,
                slidesEl: i.isElement ? s : l,
                mounted: !0,
                rtl: s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl",
                rtlTranslate: i.params.direction === "horizontal" && (s.dir.toLowerCase() === "rtl" || F(s, "direction") === "rtl"),
                wrongRTL: F(l, "display") === "-webkit-box"
            }),
            !0
    }
    init(t) {
        const i = this;
        return i.initialized || i.mount(t) === !1 || (i.emit("beforeInit"),
            i.params.breakpoints && i.setBreakpoint(),
            i.addClasses(),
            i.updateSize(),
            i.updateSlides(),
            i.params.watchOverflow && i.checkOverflow(),
            i.params.grabCursor && i.enabled && i.setGrabCursor(),
            i.params.loop && i.virtual && i.params.virtual.enabled ? i.slideTo(i.params.initialSlide + i.virtual.slidesBefore, 0, i.params.runCallbacksOnInit, !1, !0) : i.slideTo(i.params.initialSlide, 0, i.params.runCallbacksOnInit, !1, !0),
            i.params.loop && i.loopCreate(),
            i.attachEvents(),
            [...i.el.querySelectorAll('[loading="lazy"]')].forEach(r => {
                r.complete ? ee(i, r) : r.addEventListener("load", n => {
                    ee(i, n.target)
                }
                )
            }
            ),
            ue(i),
            i.initialized = !0,
            ue(i),
            i.emit("init"),
            i.emit("afterInit")),
            i
    }
    destroy(t = !0, i = !0) {
        const s = this
            , { params: r, el: n, wrapperEl: l, slides: o } = s;
        return typeof s.params > "u" || s.destroyed || (s.emit("beforeDestroy"),
            s.initialized = !1,
            s.detachEvents(),
            r.loop && s.loopDestroy(),
            i && (s.removeClasses(),
                n.removeAttribute("style"),
                l.removeAttribute("style"),
                o && o.length && o.forEach(a => {
                    a.classList.remove(r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass),
                        a.removeAttribute("style"),
                        a.removeAttribute("data-swiper-slide-index")
                }
                )),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach(a => {
                s.off(a)
            }
            ),
            t !== !1 && (s.el.swiper = null,
                st(s)),
            s.destroyed = !0),
            null
    }
    static extendDefaults(t) {
        G(de, t)
    }
    static get extendedDefaults() {
        return de
    }
    static get defaults() {
        return Ee
    }
    static installModule(t) {
        $.prototype.__modules__ || ($.prototype.__modules__ = []);
        const i = $.prototype.__modules__;
        typeof t == "function" && i.indexOf(t) < 0 && i.push(t)
    }
    static use(t) {
        return Array.isArray(t) ? (t.forEach(i => $.installModule(i)),
            $) : ($.installModule(t),
                $)
    }
}
    ;
Object.keys(oe).forEach(e => {
    Object.keys(oe[e]).forEach(t => {
        K.prototype[t] = oe[e][t]
    }
    )
}
);
K.use([gt, vt]);
function j(e) {
    return typeof e == "object" && e !== null && e.constructor && Object.prototype.toString.call(e).slice(8, -1) === "Object"
}
function H(e, t) {
    const i = ["__proto__", "constructor", "prototype"];
    Object.keys(t).filter(s => i.indexOf(s) < 0).forEach(s => {
        typeof e[s] > "u" ? e[s] = t[s] : j(t[s]) && j(e[s]) && Object.keys(t[s]).length > 0 ? t[s].__swiper__ ? e[s] = t[s] : H(e[s], t[s]) : e[s] = t[s]
    }
    )
}
function Le(e = {}) {
    return e.navigation && typeof e.navigation.nextEl > "u" && typeof e.navigation.prevEl > "u"
}
function _e(e = {}) {
    return e.pagination && typeof e.pagination.el > "u"
}
function ze(e = {}) {
    return e.scrollbar && typeof e.scrollbar.el > "u"
}
function Ae(e = "") {
    const t = e.split(" ").map(s => s.trim()).filter(s => !!s)
        , i = [];
    return t.forEach(s => {
        i.indexOf(s) < 0 && i.push(s)
    }
    ),
        i.join(" ")
}
function xi(e = "") {
    return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
}
const Ge = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopedSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideNextClass", "slidePrevClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];
function Ei(e = {}, t = !0) {
    const i = {
        on: {}
    }
        , s = {}
        , r = {};
    H(i, K.defaults),
        H(i, K.extendedDefaults),
        i._emitClasses = !0,
        i.init = !1;
    const n = {}
        , l = Ge.map(a => a.replace(/_/, ""))
        , o = Object.assign({}, e);
    return Object.keys(o).forEach(a => {
        typeof e[a] > "u" || (l.indexOf(a) >= 0 ? j(e[a]) ? (i[a] = {},
            r[a] = {},
            H(i[a], e[a]),
            H(r[a], e[a])) : (i[a] = e[a],
                r[a] = e[a]) : a.search(/on[A-Z]/) === 0 && typeof e[a] == "function" ? t ? s[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : i.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a] : n[a] = e[a])
    }
    ),
        ["navigation", "pagination", "scrollbar"].forEach(a => {
            i[a] === !0 && (i[a] = {}),
                i[a] === !1 && delete i[a]
        }
        ),
    {
        params: i,
        passedParams: r,
        rest: n,
        events: s
    }
}
function yi({ el: e, nextEl: t, prevEl: i, paginationEl: s, scrollbarEl: r, swiper: n }, l) {
    Le(l) && t && i && (n.params.navigation.nextEl = t,
        n.originalParams.navigation.nextEl = t,
        n.params.navigation.prevEl = i,
        n.originalParams.navigation.prevEl = i),
        _e(l) && s && (n.params.pagination.el = s,
            n.originalParams.pagination.el = s),
        ze(l) && r && (n.params.scrollbar.el = r,
            n.originalParams.scrollbar.el = r),
        n.init(e)
}
function Ci(e, t, i, s, r) {
    const n = [];
    if (!t)
        return n;
    const l = a => {
        n.indexOf(a) < 0 && n.push(a)
    }
        ;
    if (i && s) {
        const a = s.map(r)
            , d = i.map(r);
        a.join("") !== d.join("") && l("children"),
            s.length !== i.length && l("children")
    }
    return Ge.filter(a => a[0] === "_").map(a => a.replace(/_/, "")).forEach(a => {
        if (a in e && a in t)
            if (j(e[a]) && j(t[a])) {
                const d = Object.keys(e[a])
                    , f = Object.keys(t[a]);
                d.length !== f.length ? l(a) : (d.forEach(c => {
                    e[a][c] !== t[a][c] && l(a)
                }
                ),
                    f.forEach(c => {
                        e[a][c] !== t[a][c] && l(a)
                    }
                    ))
            } else
                e[a] !== t[a] && l(a)
    }
    ),
        n
}
function Ne(e) {
    return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
}
function ke(e) {
    const t = [];
    return _.Children.toArray(e).forEach(i => {
        Ne(i) ? t.push(i) : i.props && i.props.children && ke(i.props.children).forEach(s => t.push(s))
    }
    ),
        t
}
function Mi(e) {
    const t = []
        , i = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
        };
    return _.Children.toArray(e).forEach(s => {
        if (Ne(s))
            t.push(s);
        else if (s.props && s.props.slot && i[s.props.slot])
            i[s.props.slot].push(s);
        else if (s.props && s.props.children) {
            const r = ke(s.props.children);
            r.length > 0 ? r.forEach(n => t.push(n)) : i["container-end"].push(s)
        } else
            i["container-end"].push(s)
    }
    ),
    {
        slides: t,
        slots: i
    }
}
function Pi({ swiper: e, slides: t, passedParams: i, changedParams: s, nextEl: r, prevEl: n, scrollbarEl: l, paginationEl: o }) {
    const a = s.filter(T => T !== "children" && T !== "direction" && T !== "wrapperClass")
        , { params: d, pagination: f, navigation: c, scrollbar: p, virtual: u, thumbs: g } = e;
    let m, w, h, C, S, E, y, b;
    s.includes("thumbs") && i.thumbs && i.thumbs.swiper && d.thumbs && !d.thumbs.swiper && (m = !0),
        s.includes("controller") && i.controller && i.controller.control && d.controller && !d.controller.control && (w = !0),
        s.includes("pagination") && i.pagination && (i.pagination.el || o) && (d.pagination || d.pagination === !1) && f && !f.el && (h = !0),
        s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (d.scrollbar || d.scrollbar === !1) && p && !p.el && (C = !0),
        s.includes("navigation") && i.navigation && (i.navigation.prevEl || n) && (i.navigation.nextEl || r) && (d.navigation || d.navigation === !1) && c && !c.prevEl && !c.nextEl && (S = !0);
    const L = T => {
        e[T] && (e[T].destroy(),
            T === "navigation" ? (e.isElement && (e[T].prevEl.remove(),
                e[T].nextEl.remove()),
                d[T].prevEl = void 0,
                d[T].nextEl = void 0,
                e[T].prevEl = void 0,
                e[T].nextEl = void 0) : (e.isElement && e[T].el.remove(),
                    d[T].el = void 0,
                    e[T].el = void 0))
    }
        ;
    s.includes("loop") && e.isElement && (d.loop && !i.loop ? E = !0 : !d.loop && i.loop ? y = !0 : b = !0),
        a.forEach(T => {
            if (j(d[T]) && j(i[T]))
                H(d[T], i[T]);
            else {
                const I = i[T];
                (I === !0 || I === !1) && (T === "navigation" || T === "pagination" || T === "scrollbar") ? I === !1 && L(T) : d[T] = i[T]
            }
        }
        ),
        a.includes("controller") && !w && e.controller && e.controller.control && d.controller && d.controller.control && (e.controller.control = d.controller.control),
        s.includes("children") && t && u && d.virtual.enabled && (u.slides = t,
            u.update(!0)),
        s.includes("children") && t && d.loop && (b = !0),
        m && g.init() && g.update(!0),
        w && (e.controller.control = d.controller.control),
        h && (e.isElement && (!o || typeof o == "string") && (o = document.createElement("div"),
            o.classList.add("swiper-pagination"),
            e.el.shadowEl.appendChild(o)),
            o && (d.pagination.el = o),
            f.init(),
            f.render(),
            f.update()),
        C && (e.isElement && (!l || typeof l == "string") && (l = document.createElement("div"),
            l.classList.add("swiper-scrollbar"),
            e.el.shadowEl.appendChild(l)),
            l && (d.scrollbar.el = l),
            p.init(),
            p.updateSize(),
            p.setTranslate()),
        S && (e.isElement && ((!r || typeof r == "string") && (r = document.createElement("div"),
            r.classList.add("swiper-button-next"),
            e.el.shadowEl.appendChild(r)),
            (!n || typeof n == "string") && (n = document.createElement("div"),
                n.classList.add("swiper-button-prev"),
                e.el.shadowEl.appendChild(n))),
            r && (d.navigation.nextEl = r),
            n && (d.navigation.prevEl = n),
            c.init(),
            c.update()),
        s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext),
        s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev),
        s.includes("direction") && e.changeDirection(i.direction, !1),
        (E || b) && e.loopDestroy(),
        (y || b) && e.loopCreate(),
        e.update()
}
function Oi(e, t, i) {
    if (!i)
        return null;
    const s = f => {
        let c = f;
        return f < 0 ? c = t.length + f : c >= t.length && (c = c - t.length),
            c
    }
        , r = e.isHorizontal() ? {
            [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
        } : {
            top: `${i.offset}px`
        }
        , { from: n, to: l } = i
        , o = e.params.loop ? -t.length : 0
        , a = e.params.loop ? t.length * 2 : t.length
        , d = [];
    for (let f = o; f < a; f += 1)
        f >= n && f <= l && d.push(t[s(f)]);
    return d.map((f, c) => _.cloneElement(f, {
        swiper: e,
        style: r,
        key: `slide-${c}`
    }))
}
const Ii = e => {
    !e || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
}
    ;
function q(e, t) {
    return typeof window > "u" ? O.useEffect(e, t) : O.useLayoutEffect(e, t)
}
const ye = O.createContext(null)
    , Li = O.createContext(null);
function fe() {
    return fe = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    }
        ,
        fe.apply(this, arguments)
}
const Be = O.forwardRef(function (e, t) {
    let { className: i, tag: s = "div", wrapperTag: r = "div", children: n, onSwiper: l, ...o } = e === void 0 ? {} : e
        , a = !1;
    const [d, f] = O.useState("swiper")
        , [c, p] = O.useState(null)
        , [u, g] = O.useState(!1)
        , m = O.useRef(!1)
        , w = O.useRef(null)
        , h = O.useRef(null)
        , C = O.useRef(null)
        , S = O.useRef(null)
        , E = O.useRef(null)
        , y = O.useRef(null)
        , b = O.useRef(null)
        , L = O.useRef(null)
        , { params: T, passedParams: I, rest: ie, events: v } = Ei(o)
        , { slides: x, slots: M } = Mi(n)
        , A = () => {
            g(!u)
        }
        ;
    Object.assign(T.on, {
        _containerClasses(z, B) {
            f(B)
        }
    });
    const X = () => {
        Object.assign(T.on, v),
            a = !0;
        const z = {
            ...T
        };
        if (delete z.wrapperClass,
            h.current = new K(z),
            h.current.virtual && h.current.params.virtual.enabled) {
            h.current.virtual.slides = x;
            const B = {
                cache: !1,
                slides: x,
                renderExternal: p,
                renderExternalUpdate: !1
            };
            H(h.current.params.virtual, B),
                H(h.current.originalParams.virtual, B)
        }
    }
        ;
    w.current || X(),
        h.current && h.current.on("_beforeBreakpoint", A);
    const U = () => {
        a || !v || !h.current || Object.keys(v).forEach(z => {
            h.current.on(z, v[z])
        }
        )
    }
        , se = () => {
            !v || !h.current || Object.keys(v).forEach(z => {
                h.current.off(z, v[z])
            }
            )
        }
        ;
    O.useEffect(() => () => {
        h.current && h.current.off("_beforeBreakpoint", A)
    }
    ),
        O.useEffect(() => {
            !m.current && h.current && (h.current.emitSlidesClasses(),
                m.current = !0)
        }
        ),
        q(() => {
            if (t && (t.current = w.current),
                !!w.current)
                return h.current.destroyed && X(),
                    yi({
                        el: w.current,
                        nextEl: E.current,
                        prevEl: y.current,
                        paginationEl: b.current,
                        scrollbarEl: L.current,
                        swiper: h.current
                    }, T),
                    l && l(h.current),
                    () => {
                        h.current && !h.current.destroyed && h.current.destroy(!0, !1)
                    }
        }
            , []),
        q(() => {
            U();
            const z = Ci(I, C.current, x, S.current, B => B.key);
            return C.current = I,
                S.current = x,
                z.length && h.current && !h.current.destroyed && Pi({
                    swiper: h.current,
                    slides: x,
                    passedParams: I,
                    changedParams: z,
                    nextEl: E.current,
                    prevEl: y.current,
                    scrollbarEl: L.current,
                    paginationEl: b.current
                }),
                () => {
                    se()
                }
        }
        ),
        q(() => {
            Ii(h.current)
        }
            , [c]);
    function ne() {
        return T.virtual ? Oi(h.current, x, c) : x.map((z, B) => _.cloneElement(z, {
            swiper: h.current,
            swiperSlideIndex: B
        }))
    }
    return _.createElement(s, fe({
        ref: w,
        className: Ae(`${d}${i ? ` ${i}` : ""}`)
    }, ie), _.createElement(Li.Provider, {
        value: h.current
    }, M["container-start"], _.createElement(r, {
        className: xi(T.wrapperClass)
    }, M["wrapper-start"], ne(), M["wrapper-end"]), Le(T) && _.createElement(_.Fragment, null, _.createElement("div", {
        ref: y,
        className: "swiper-button-prev"
    }), _.createElement("div", {
        ref: E,
        className: "swiper-button-next"
    })), ze(T) && _.createElement("div", {
        ref: L,
        className: "swiper-scrollbar"
    }), _e(T) && _.createElement("div", {
        ref: b,
        className: "swiper-pagination"
    }), M["container-end"]))
});
Be.displayName = "Swiper";
function pe() {
    return pe = Object.assign ? Object.assign.bind() : function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var i = arguments[t];
            for (var s in i)
                Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
        }
        return e
    }
        ,
        pe.apply(this, arguments)
}
const Y = O.forwardRef(function (e, t) {
    let { tag: i = "div", children: s, className: r = "", swiper: n, zoom: l, lazy: o, virtualIndex: a, swiperSlideIndex: d, ...f } = e === void 0 ? {} : e;
    const c = O.useRef(null)
        , [p, u] = O.useState("swiper-slide")
        , [g, m] = O.useState(!1);
    function w(E, y, b) {
        y === c.current && u(b)
    }
    q(() => {
        if (typeof d < "u" && (c.current.swiperSlideIndex = d),
            t && (t.current = c.current),
            !(!c.current || !n)) {
            if (n.destroyed) {
                p !== "swiper-slide" && u("swiper-slide");
                return
            }
            return n.on("_slideClass", w),
                () => {
                    n && n.off("_slideClass", w)
                }
        }
    }
    ),
        q(() => {
            n && c.current && !n.destroyed && u(n.getSlideClasses(c.current))
        }
            , [n]);
    const h = {
        isActive: p.indexOf("swiper-slide-active") >= 0,
        isVisible: p.indexOf("swiper-slide-visible") >= 0,
        isPrev: p.indexOf("swiper-slide-prev") >= 0,
        isNext: p.indexOf("swiper-slide-next") >= 0
    }
        , C = () => typeof s == "function" ? s(h) : s
        , S = () => {
            m(!0)
        }
        ;
    return _.createElement(i, pe({
        ref: c,
        className: Ae(`${p}${r ? ` ${r}` : ""}`),
        "data-swiper-slide-index": a,
        onLoad: S
    }, f), l && _.createElement(ye.Provider, {
        value: h
    }, _.createElement("div", {
        className: "swiper-zoom-container",
        "data-swiper-zoom": typeof l == "number" ? l : void 0
    }, C(), o && !g && _.createElement("div", {
        className: "swiper-lazy-preloader"
    }))), !l && _.createElement(ye.Provider, {
        value: h
    }, C(), o && !g && _.createElement("div", {
        className: "swiper-lazy-preloader"
    })))
});
Y.displayName = "SwiperSlide";
V.config({
    nullTargetWarn: !1
});
function _i() {
    V.registerPlugin(Z);
    const e = O.useRef(null)
        , t = O.useRef(null);
    function i(n) {
        (n.keyCode || n.which) === 27 && (n.preventDefault(),
            window.location.pathname = "/")
    }
    O.useEffect(() => {
        s(0)
    }
        , []),
        O.useEffect(() => {
            V.set(t.current, {
                opacity: 0
            }),
                V.timeline({
                    delay: .8
                }).add("start").to(t.current, {
                    opacity: 1,
                    ease: "none",
                    yoyo: !0,
                    repeat: 40,
                    duration: .01
                })
        }
            , []),
        O.useEffect(() => (window.addEventListener("keydown", i),
            () => {
                window.removeEventListener("keydown", i)
            }
        ), []);
    const s = n => {
        const l = e.current.swiper.slides[n]
            , o = l.querySelectorAll("p")
            , a = l.querySelectorAll("button")
            , d = l.querySelectorAll("a.c-button")
            , f = new Z(o)
            , c = new Z(a)
            , p = new Z(d);
        f.chars.forEach(u => {
            V.set(u, {
                alpha: 0
            })
        }
        ),
            c.chars.forEach(u => {
                V.set(u, {
                    alpha: 0
                })
            }
            ),
            p.chars.forEach(u => {
                V.set(u, {
                    alpha: 0
                })
            }
            ),
            V.to(f.chars, {
                alpha: 1,
                stagger: .02,
                duration: .1,
                onComplete: () => {
                    V.to(c.chars, {
                        alpha: 1,
                        stagger: .02,
                        duration: .1,
                        onComplete: () => {
                            a.forEach(u => {
                                u.classList.add("is-blinking"),
                                    u.classList.remove("is-disabled")
                            }
                            )
                        }
                    }),
                        V.to(p.chars, {
                            alpha: 1,
                            stagger: .02,
                            duration: .1,
                            onComplete: () => {
                                d.forEach(u => {
                                    u.classList.add("is-blinking"),
                                        u.classList.remove("is-disabled")
                                }
                                )
                            }
                        })
                }
            })
    }
        , r = n => {
            e.current.swiper.slideTo(n),
                s(n)
        }
        ;
    return D("div", {
        className: k.about,
        children: [P("a", {
            className: k.close,
            href: "/",
            ref: t,
            children: P(qe, {})
        }), P("div", {
            className: k.wrapper,
            children: P("div", {
                className: $e(k.content, "u-b0", "u-uppercase", "u-text-center"),
                children: D(Be, {
                    ref: e,
                    slidesPerView: 1,
                    direction: "vertical",
                    autoHeight: !0,
                    allowTouchMove: !1,
                    speed: 0,
                    children: [P(Y, {
                        children: D("div", {
                            className: k.slideInner,
                            children: [D("p", {
                                className: "u-b0 u-uppercase u-text-center",
                                children: ["Hello there.", P("br", {}), "This is ", P("strong", {
                                    children: "Reframed"
                                }), "—a Digital Inspiration Lab"]
                            }), D("div", {
                                className: k.actions,
                                children: [P("button", {
                                    className: "c-button c-button--inverted is-animated is-disabled",
                                    onClick: () => {
                                        r(2)
                                    }
                                    ,
                                    children: "What is its purpose?"
                                }), P("button", {
                                    className: "c-button c-button--inverted is-animated is-disabled",
                                    onClick: () => {
                                        r(1)
                                    }
                                    ,
                                    children: "Whathever, not interested"
                                })]
                            })]
                        })
                    }), P(Y, {
                        children: D("div", {
                            className: k.slideInner,
                            children: [P("p", {
                                children: "So you’re more “show, don’t tell” type of person? Then you can check examples page, and see how inspiration influences design work."
                            }), P("div", {
                                className: k.actions,
                                children: P("a", {
                                    className: "c-button c-button--inverted is-animated is-disabled",
                                    href: "/examples/",
                                    children: "Got it"
                                })
                            })]
                        })
                    }), P(Y, {
                        children: D("div", {
                            className: k.slideInner,
                            children: [D("p", {
                                children: ["Reframed is internal ", P("a", {
                                    href: "https://www.bornfight.studio/",
                                    target: "_blank",
                                    children: "BORNFIGHT STUDIO®"
                                }), "project that analyses connection between inspiration and design output."]
                            }), P("p", {
                                children: "True originality is a myth. Everyone is influenced and inspired by something."
                            }), P("p", {
                                children: "Acting on that knowledge means creating new work that evokes a fresh perspective on existing inspiration."
                            }), P("div", {
                                className: k.actions,
                                children: P("button", {
                                    className: "c-button c-button--inverted is-animated is-disabled",
                                    onClick: () => {
                                        r(3)
                                    }
                                    ,
                                    children: "So, how do you show that “Fresh perspective”?"
                                })
                            })]
                        })
                    }), P(Y, {
                        children: D("div", {
                            className: k.slideInner,
                            children: [P("p", {
                                children: "We’ll show what influences us and how final result looks like. This is exercise to make this influence more conscious and use it as a tool for gaining new perspective in our references. We call this reframing."
                            }), P("div", {
                                className: k.actions,
                                children: P("a", {
                                    className: "c-button c-button--inverted is-animated is-disabled",
                                    href: "/examples/",
                                    children: "Got it, let’s see what you got. GO TO Examples."
                                })
                            })]
                        })
                    })]
                })
            })
        })]
    })
}
function zi() {
    return O.useEffect(() => {
        document.body.classList.add("is-dark")
    }
        , []),
        D(Re, {
            children: [P(je, {}), P(We, {}), P(Xe, {}), P(Ye, {
                onMouseEnterHandler: () => null,
                onMouseLeaveHandler: () => null
            }), P(_i, {}), P(Ke, {
                hasColor: !1
            }), P(Fe, {})]
        })
}
He.createRoot(document.getElementById("root")).render(P(zi, {}));
