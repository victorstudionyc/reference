import {g as d, r as b, a as e, j as h, S as $, c as F} from "./style-403a1701.js";
/*!
 * DrawSVGPlugin 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var H, S, Z, R, X, P, E, q, W = function() {
    return typeof window < "u"
}, Y = function() {
    return H || W() && (H = window.gsap) && H.registerPlugin && H
}, z = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi, L = {
    rect: ["width", "height"],
    circle: ["r", "r"],
    ellipse: ["rx", "ry"],
    line: ["x2", "y2"]
}, k = function(a) {
    return Math.round(a * 1e4) / 1e4
}, V = function(a) {
    return parseFloat(a) || 0
}, A = function(a, t) {
    var n = V(a);
    return ~a.indexOf("%") ? n / 100 * t : n
}, M = function(a, t) {
    return V(a.getAttribute(t))
}, N = Math.sqrt, T = function(a, t, n, s, r, i) {
    return N(Math.pow((V(n) - V(a)) * r, 2) + Math.pow((V(s) - V(t)) * i, 2))
}, B = function(a) {
    return console.warn(a)
}, j = function(a) {
    return a.getAttribute("vector-effect") === "non-scaling-stroke"
}, J = 1, K = function(a, t, n) {
    var s = a.indexOf(" "), r, i;
    return s < 0 ? (r = n !== void 0 ? n + "" : a,
    i = a) : (r = a.substr(0, s),
    i = a.substr(s + 1)),
    r = A(r, t),
    i = A(i, t),
    r > i ? [i, r] : [r, i]
}, w = function(a) {
    if (a = S(a)[0],
    !a)
        return 0;
    var t = a.tagName.toLowerCase(), n = a.style, s = 1, r = 1, i, o, c, m, p, v, C;
    j(a) && (r = a.getScreenCTM(),
    s = N(r.a * r.a + r.b * r.b),
    r = N(r.d * r.d + r.c * r.c));
    try {
        o = a.getBBox()
    } catch {
        B("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
    }
    var x = o || {
        x: 0,
        y: 0,
        width: 0,
        height: 0
    }
      , y = x.x
      , _ = x.y
      , u = x.width
      , g = x.height;
    if ((!o || !u && !g) && L[t] && (u = M(a, L[t][0]),
    g = M(a, L[t][1]),
    t !== "rect" && t !== "line" && (u *= 2,
    g *= 2),
    t === "line" && (y = M(a, "x1"),
    _ = M(a, "y1"),
    u = Math.abs(u - y),
    g = Math.abs(g - _))),
    t === "path")
        m = n.strokeDasharray,
        n.strokeDasharray = "none",
        i = a.getTotalLength() || 0,
        k(s) !== k(r) && !P && (P = 1) && B("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."),
        i *= (s + r) / 2,
        n.strokeDasharray = m;
    else if (t === "rect")
        i = u * 2 * s + g * 2 * r;
    else if (t === "line")
        i = T(y, _, y + u, _ + g, s, r);
    else if (t === "polyline" || t === "polygon")
        for (c = a.getAttribute("points").match(z) || [],
        t === "polygon" && c.push(c[0], c[1]),
        i = 0,
        p = 2; p < c.length; p += 2)
            i += T(c[p - 2], c[p - 1], c[p], c[p + 1], s, r) || 0;
    else
        (t === "circle" || t === "ellipse") && (v = u / 2 * s,
        C = g / 2 * r,
        i = Math.PI * (3 * (v + C) - N((3 * v + C) * (v + 3 * C))));
    return i || 0
}, D = function(a, t) {
    if (a = S(a)[0],
    !a)
        return [0, 0];
    t || (t = w(a) + 1);
    var n = Z.getComputedStyle(a)
      , s = n.strokeDasharray || ""
      , r = V(n.strokeDashoffset)
      , i = s.indexOf(",");
    return i < 0 && (i = s.indexOf(" ")),
    s = i < 0 ? t : V(s.substr(0, i)),
    s > t && (s = t),
    [-r || 0, s - r || 0]
}, G = function() {
    W() && (Z = window,
    X = H = Y(),
    S = H.utils.toArray,
    E = H.core.getStyleSaver,
    q = H.core.reverting || function() {}
    ,
    R = ((Z.navigator || {}).userAgent || "").indexOf("Edge") !== -1)
}, O = {
    version: "3.11.4",
    name: "drawSVG",
    register: function(a) {
        H = a,
        G()
    },
    init: function(a, t, n, s, r) {
        if (!a.getBBox)
            return !1;
        X || G();
        var i = w(a), o, c, m;
        return this.styles = E && E(a, "strokeDashoffset,strokeDasharray,strokeMiterlimit"),
        this.tween = n,
        this._style = a.style,
        this._target = a,
        t + "" == "true" ? t = "0 100%" : t ? (t + "").indexOf(" ") === -1 && (t = "0 " + t) : t = "0 0",
        o = D(a, i),
        c = K(t, i, o[0]),
        this._length = k(i),
        this._dash = k(o[1] - o[0]),
        this._offset = k(-o[0]),
        this._dashPT = this.add(this, "_dash", this._dash, k(c[1] - c[0]), 0, 0, 0, 0, 0, 1),
        this._offsetPT = this.add(this, "_offset", this._offset, k(-c[0]), 0, 0, 0, 0, 0, 1),
        R && (m = Z.getComputedStyle(a),
        m.strokeLinecap !== m.strokeLinejoin && (c = V(m.strokeMiterlimit),
        this.add(a.style, "strokeMiterlimit", c, c + .01))),
        this._live = j(a) || ~(t + "").indexOf("live"),
        this._nowrap = ~(t + "").indexOf("nowrap"),
        this._props.push("drawSVG"),
        J
    },
    render: function(a, t) {
        if (t.tween._time || !q()) {
            var n = t._pt, s = t._style, r, i, o, c;
            if (n) {
                for (t._live && (r = w(t._target),
                r !== t._length && (i = r / t._length,
                t._length = r,
                t._offsetPT && (t._offsetPT.s *= i,
                t._offsetPT.c *= i),
                t._dashPT ? (t._dashPT.s *= i,
                t._dashPT.c *= i) : t._dash *= i)); n; )
                    n.r(a, n.d),
                    n = n._next;
                o = t._dash || a && a !== 1 && 1e-4 || 0,
                r = t._length - o + .1,
                c = t._offset,
                o && c && o + Math.abs(c % t._length) > t._length - .2 && (c += c < 0 ? .1 : -.1) && (r += .1),
                s.strokeDashoffset = o ? c : c + .001,
                s.strokeDasharray = r < .2 ? "none" : o ? o + "px," + (t._nowrap ? 999999 : r) + "px" : "0px, 999999px"
            }
        } else
            t.styles.revert()
    },
    getLength: w,
    getPosition: D
};
Y() && H.registerPlugin(O);
const Q = "_background_1i2u2_218"
  , U = {
    background: Q
};
d.registerPlugin(O);
function h1({animated: l=!1}) {
    const a = b.useRef([])
      , t = b.useRef([])
      , n = b.useRef(null);
    function s(r) {
        const i = r.clientX - window.innerWidth / 2
          , o = r.clientY - window.innerHeight / 2;
        n != null && n.current && d.to(n.current, {
            duration: 1,
            x: -i * .01,
            y: -o * .01,
            rotation: -i * .001,
            transformOrigin: "center",
            ease: "power1.out"
        }),
        t != null && t.current && d.to(t.current[0], {
            duration: 1,
            x: i * .02,
            y: o * .02,
            transformOrigin: "center",
            ease: "power1.out"
        })
    }
    return b.useEffect(()=>{
        if (l)
            return a != null && a.current && d.from(a.current, {
                duration: 2,
                transformOrigin: "center",
                stagger: .1,
                drawSVG: "live",
                ease: "power1.out"
            }),
            t != null && t.current && d.from(t.current, {
                duration: 2,
                stagger: .5,
                rotate: 90,
                scale: 2,
                transformOrigin: "center",
                drawSVG: "live",
                ease: "power1.out"
            }),
            document.addEventListener("mousemove", s),
            ()=>{
                document.removeEventListener("mousemove", s)
            }
    }
    , []),
    e("div", {
        className: U.background,
        children: h("svg", {
            viewBox: "0 0 1440 1440",
            preserveAspectRatio: "xMinYMin slice",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [h("g", {
                ref: n,
                strokeWidth: "1",
                children: [e("line", {
                    ref: r=>a.current[0] = r,
                    x1: "720.5",
                    y1: "720.5",
                    x2: "720.5",
                    y2: "0",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    ref: r=>a.current[1] = r,
                    x1: "720.5",
                    y1: "720.5",
                    x2: "720.5",
                    y2: "1440.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    ref: r=>a.current[2] = r,
                    x1: "720.5",
                    y1: "720.5",
                    x2: "0",
                    y2: "720.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    ref: r=>a.current[3] = r,
                    x1: "720.5",
                    y1: "720.5",
                    x2: "0",
                    y2: "1440.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    ref: r=>a.current[4] = r,
                    x1: "720.5",
                    y1: "720.5",
                    x2: "1440.5",
                    y2: "0",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    ref: r=>a.current[5] = r,
                    x1: "720.5",
                    y1: "720.5",
                    x2: "1440.5",
                    y2: "720.5",
                    vectorEffect: "non-scaling-stroke"
                })]
            }), e("circle", {
                ref: r=>t.current[0] = r,
                cx: "720",
                cy: "720",
                r: "420",
                transform: "rotate(90, 720, 720)",
                vectorEffect: "non-scaling-stroke"
            })]
        })
    })
}
const e1 = "_barCode_1lme7_218"
  , a1 = {
    barCode: e1
};
function b1({animated: l=!1}) {
    const a = b.useRef(null);
    return b.useEffect(()=>{
        if (l) {
            const t = a.current.querySelectorAll("path.bar");
            d.set(t, {
                scaleY: 0,
                transformOrigin: "bottom",
                ease: "power2.out"
            }),
            d.to(t, {
                scaleY: 1,
                stagger: {
                    grid: "auto",
                    from: "center",
                    amount: .5
                }
            })
        }
    }
    , []),
    h("svg", {
        className: a1.barCode,
        viewBox: "0 0 194 36",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ref: a,
        children: [e("path", {
            d: "M52.9912 0.660032V7.53519H53.906V4.59832H56.1399C56.3646 4.59832 56.5443 4.63363 56.6791 4.70424C56.814 4.76843 56.9231 4.8583 57.0065 4.97385C57.09 5.08298 57.151 5.21458 57.1895 5.36865C57.228 5.51629 57.2601 5.67357 57.2858 5.84047C57.3179 6.00737 57.3371 6.17749 57.3435 6.35081C57.35 6.52413 57.3564 6.68783 57.3628 6.84189C57.3692 6.98954 57.3821 7.12434 57.4013 7.24631C57.427 7.36828 57.4719 7.46457 57.5361 7.53519H58.5568C58.4605 7.41964 58.3867 7.28804 58.3353 7.14039C58.2904 6.98633 58.2551 6.82584 58.2294 6.65894C58.2037 6.49204 58.1877 6.32192 58.1813 6.1486C58.1749 5.97528 58.1652 5.80516 58.1524 5.63826C58.1331 5.47136 58.1042 5.31087 58.0657 5.15681C58.0336 5.00274 57.9791 4.86472 57.902 4.74276C57.8314 4.61437 57.7319 4.50524 57.6035 4.41537C57.4816 4.3255 57.3211 4.2613 57.1221 4.22279V4.20353C57.5393 4.08798 57.8411 3.87293 58.0272 3.55838C58.2198 3.24383 58.3161 2.87793 58.3161 2.46067C58.3161 1.90218 58.1299 1.46245 57.7576 1.14149C57.3917 0.820516 56.8814 0.660032 56.2266 0.660032H52.9912ZM55.8125 3.82799H53.906V1.43036H56.1784C56.6085 1.43036 56.9199 1.53949 57.1125 1.75775C57.305 1.976 57.4013 2.25846 57.4013 2.6051C57.4013 2.85546 57.3564 3.06088 57.2665 3.22136C57.1831 3.37543 57.0675 3.50061 56.9199 3.5969C56.7786 3.68677 56.6117 3.74775 56.4192 3.77985C56.2266 3.81195 56.0244 3.82799 55.8125 3.82799Z",
            fill: "black"
        }), e("path", {
            d: "M59.583 0.660032V7.53519H64.359V6.76486H60.4977V4.38648H64.0701V3.61616H60.4977V1.43036H64.3301V0.660032H59.583Z",
            fill: "black"
        }), e("path", {
            d: "M65.4695 0.660032V7.53519H66.3843V4.38648H69.5426V3.61616H66.3843V1.43036H69.9855V0.660032H65.4695Z",
            fill: "black"
        }), e("path", {
            d: "M70.9987 0.660032V7.53519H71.9135V4.59832H74.1474C74.3721 4.59832 74.5518 4.63363 74.6866 4.70424C74.8214 4.76843 74.9306 4.8583 75.014 4.97385C75.0975 5.08298 75.1585 5.21458 75.197 5.36865C75.2355 5.51629 75.2676 5.67357 75.2933 5.84047C75.3254 6.00737 75.3446 6.17749 75.351 6.35081C75.3574 6.52413 75.3639 6.68783 75.3703 6.84189C75.3767 6.98954 75.3895 7.12434 75.4088 7.24631C75.4345 7.36828 75.4794 7.46457 75.5436 7.53519H76.5643C76.468 7.41964 76.3942 7.28804 76.3428 7.14039C76.2979 6.98633 76.2626 6.82584 76.2369 6.65894C76.2112 6.49204 76.1952 6.32192 76.1888 6.1486C76.1823 5.97528 76.1727 5.80516 76.1599 5.63826C76.1406 5.47136 76.1117 5.31087 76.0732 5.15681C76.0411 5.00274 75.9865 4.86472 75.9095 4.74276C75.8389 4.61437 75.7394 4.50524 75.611 4.41537C75.489 4.3255 75.3286 4.2613 75.1296 4.22279V4.20353C75.5468 4.08798 75.8485 3.87293 76.0347 3.55838C76.2273 3.24383 76.3236 2.87793 76.3236 2.46067C76.3236 1.90218 76.1374 1.46245 75.7651 1.14149C75.3992 0.820516 74.8888 0.660032 74.2341 0.660032H70.9987ZM73.82 3.82799H71.9135V1.43036H74.1859C74.616 1.43036 74.9274 1.53949 75.1199 1.75775C75.3125 1.976 75.4088 2.25846 75.4088 2.6051C75.4088 2.85546 75.3639 3.06088 75.274 3.22136C75.1905 3.37543 75.075 3.50061 74.9274 3.5969C74.7861 3.68677 74.6192 3.74775 74.4266 3.77985C74.2341 3.81195 74.0318 3.82799 73.82 3.82799Z",
            fill: "black"
        }), e("path", {
            d: "M78.7748 4.69461L79.94 1.48813H79.9592L81.1051 4.69461H78.7748ZM79.4585 0.660032L76.7816 7.53519H77.7156L78.486 5.46494H81.3939L82.145 7.53519H83.1561L80.4696 0.660032H79.4585Z",
            fill: "black"
        }), e("path", {
            d: "M83.8536 0.660032V7.53519H84.7202V1.81552H84.7394L86.8867 7.53519H87.6667L89.814 1.81552H89.8332V7.53519H90.6998V0.660032H89.4481L87.2719 6.43747L85.1054 0.660032H83.8536Z",
            fill: "black"
        }), e("path", {
            d: "M92.2221 0.660032V7.53519H96.9981V6.76486H93.1369V4.38648H96.7093V3.61616H93.1369V1.43036H96.9693V0.660032H92.2221Z",
            fill: "black"
        }), e("path", {
            d: "M99.0234 6.76486V1.43036H100.564C100.988 1.43036 101.344 1.49134 101.633 1.61331C101.922 1.72886 102.156 1.90218 102.336 2.13328C102.522 2.35796 102.654 2.63399 102.731 2.96138C102.814 3.28235 102.856 3.64825 102.856 4.05909C102.856 4.48277 102.811 4.84547 102.721 5.14718C102.638 5.44247 102.528 5.68961 102.394 5.88862C102.259 6.08762 102.105 6.24489 101.931 6.36044C101.764 6.47599 101.594 6.56586 101.421 6.63005C101.248 6.68783 101.084 6.72634 100.93 6.7456C100.776 6.75844 100.648 6.76486 100.545 6.76486H99.0234ZM98.1087 0.660032V7.53519H100.468C101.039 7.53519 101.533 7.45494 101.951 7.29446C102.368 7.13397 102.711 6.90288 102.981 6.60117C103.251 6.29304 103.45 5.9175 103.578 5.47457C103.706 5.02521 103.771 4.51166 103.771 3.93391C103.771 2.82978 103.485 2.0081 102.914 1.46887C102.342 0.929645 101.527 0.660032 100.468 0.660032H98.1087Z",
            fill: "black"
        }), e("path", {
            d: "M104.937 6.46636V7.53519H106.005V6.46636H104.937Z",
            fill: "black"
        }), e("path", {
            d: "M108.098 4.09761C108.098 3.75096 108.143 3.41074 108.233 3.07693C108.323 2.7367 108.464 2.43178 108.657 2.16217C108.849 1.89255 109.096 1.6775 109.398 1.51702C109.7 1.35012 110.059 1.26666 110.476 1.26666C110.894 1.26666 111.253 1.35012 111.555 1.51702C111.857 1.6775 112.104 1.89255 112.296 2.16217C112.489 2.43178 112.63 2.7367 112.72 3.07693C112.81 3.41074 112.855 3.75096 112.855 4.09761C112.855 4.44426 112.81 4.78769 112.72 5.12792C112.63 5.46173 112.489 5.76344 112.296 6.03305C112.104 6.30266 111.857 6.52092 111.555 6.68783C111.253 6.84831 110.894 6.92855 110.476 6.92855C110.059 6.92855 109.7 6.84831 109.398 6.68783C109.096 6.52092 108.849 6.30266 108.657 6.03305C108.464 5.76344 108.323 5.46173 108.233 5.12792C108.143 4.78769 108.098 4.44426 108.098 4.09761ZM107.183 4.09761C107.183 4.56622 107.251 5.01879 107.386 5.45531C107.527 5.88541 107.735 6.26736 108.011 6.60117C108.287 6.93497 108.631 7.20138 109.042 7.40038C109.453 7.59296 109.931 7.68925 110.476 7.68925C111.022 7.68925 111.5 7.59296 111.911 7.40038C112.322 7.20138 112.665 6.93497 112.941 6.60117C113.218 6.26736 113.423 5.88541 113.558 5.45531C113.699 5.01879 113.77 4.56622 113.77 4.09761C113.77 3.62899 113.699 3.17964 113.558 2.74954C113.423 2.31302 113.218 1.92786 112.941 1.59405C112.665 1.26024 112.322 0.993839 111.911 0.794839C111.5 0.595838 111.022 0.496338 110.476 0.496338C109.931 0.496338 109.453 0.595838 109.042 0.794839C108.631 0.993839 108.287 1.26024 108.011 1.59405C107.735 1.92786 107.527 2.31302 107.386 2.74954C107.251 3.17964 107.183 3.62899 107.183 4.09761Z",
            fill: "black"
        }), e("path", {
            d: "M114.875 0.660032V7.53519H115.741V2.01773H115.761L119.352 7.53519H120.354V0.660032H119.487V6.23526H119.468L115.847 0.660032H114.875Z",
            fill: "black"
        }), e("path", {
            d: "M121.833 0.660032V7.53519H126.388V6.76486H122.748V0.660032H121.833Z",
            fill: "black"
        }), e("path", {
            d: "M127.222 0.660032V7.53519H128.137V0.660032H127.222Z",
            fill: "black"
        }), e("path", {
            d: "M129.666 0.660032V7.53519H130.533V2.01773H130.552L134.144 7.53519H135.145V0.660032H134.279V6.23526H134.259L130.639 0.660032H129.666Z",
            fill: "black"
        }), e("path", {
            d: "M136.625 0.660032V7.53519H141.401V6.76486H137.54V4.38648H141.112V3.61616H137.54V1.43036H141.372V0.660032H136.625Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M2.2071 0.550903H0.373047V35.5342H2.2071V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M4.04114 0.550903H3.12402V35.5342H4.04114V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M6.79211 0.550903H5.875V35.5342H6.79211V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M14.1282 0.550903H10.46V35.5342H14.1282V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M15.963 0.550903H15.0459V35.5342H15.963V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M19.631 0.550903H16.8799V35.5342H19.631V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M22.3819 0.550903H20.5479V35.5342H22.3819V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M26.0499 0.550903H25.1328V35.5342H26.0499V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M29.7189 0.550903H26.9678V35.5342H29.7189V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M31.5519 0.550903H30.6348V35.5342H31.5519V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M36.1378 0.550903H34.3037V35.5342H36.1378V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M37.9718 0.550903H37.0547V35.5342H37.9718V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M41.6388 0.550903H40.7217V35.5342H41.6388V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M46.2276 0.550903H44.3936V35.5342H46.2276V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M49.8937 0.550903H48.9766V35.5342H49.8937V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M52.6446 10.8165H50.8105V35.5311H52.6446V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M56.3136 10.8165H55.3965V35.5313H56.3136V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M59.9816 10.8165H57.2305V35.5313H59.9816V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M61.8156 10.8165H60.8984V35.5313H61.8156V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M63.6476 10.8165H62.7305V35.5313H63.6476V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M68.2344 10.8165H66.4004V35.5313H68.2344V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M71.9034 10.8165H70.9863V35.5313H71.9034V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M75.5715 10.8165H72.8203V35.5313H75.5715V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M78.3243 10.8165H76.4902V35.5313H78.3243V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M81.9894 10.8165H81.0723V35.5313H81.9894V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M86.5762 10.8165H84.7422V35.5313H86.5762V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M88.4093 10.8165H87.4922V35.5313H88.4093V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M92.0773 10.8165H91.1602V35.5313H92.0773V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M94.8301 10.8165H92.9961V35.5313H94.8301V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M98.4972 10.8165H97.5801V35.5313H98.4972V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M102.165 10.8165H101.248V35.5313H102.165V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M105.834 10.8165H104V35.5313H105.834V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M110.421 10.8165H107.67V35.5313H110.421V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M112.251 10.8165H111.334V35.5313H112.251V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M117.757 10.8165H115.006V35.5313H117.757V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M120.508 10.8165H118.674V35.5313H120.508V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M122.341 10.8165H121.424V35.5313H122.341V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M126.009 10.8165H123.258V35.5313H126.009V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M130.594 10.8165H128.76V35.5313H130.594V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M132.431 10.8165H131.514V35.5313H132.431V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M137.014 10.8165H135.18V35.5313H137.014V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M140.683 10.8165H137.932V35.5313H140.683V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M143.434 10.8165H141.6V35.5313H143.434V10.8165Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M147.103 0.550903H146.186V35.5342H147.103V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M150.77 0.550903H149.853V35.5342H150.77V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M152.605 0.550903H151.688V35.5342H152.605V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M156.274 0.550903H153.522V35.5342H156.274V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M160.857 0.550903H159.023V35.5342H160.857V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M162.692 0.550903H161.774V35.5342H162.692V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M167.276 0.550903H165.442V35.5342H167.276V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M169.112 0.550903H168.195V35.5342H169.112V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M174.613 0.550903H171.862V35.5342H174.613V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M177.363 0.550903H175.529V35.5342H177.363V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M180.115 0.550903H179.198V35.5342H180.115V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M183.783 0.550903H181.949V35.5342H183.783V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M189.286 0.550903H186.535V35.5342H189.286V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M191.121 0.550903H190.204V35.5342H191.121V0.550903Z",
            fill: "black"
        }), e("path", {
            className: "bar",
            d: "M193.87 0.550903H192.036V35.5342H193.87V0.550903Z",
            fill: "black"
        })]
    })
}
function I() {
    return e("svg", {
        className: "u-icon u-icon--arrow-top-right",
        viewBox: "0 0 9 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: e("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 0H0V9H9V0ZM5.67586 3.52351V5.40395L6.15586 5.40396V3.1839L6.15609 2.7039H3.45609V3.1839H5.33665L2.39421 6.12633L2.73362 6.46574L5.67586 3.52351Z"
        })
    })
}
const t1 = "_navigation_17nxo_218"
  , r1 = "_navigationLink_17nxo_236"
  , n1 = "_linkInfo_17nxo_246"
  , s1 = "_navigationLabel_17nxo_250"
  , i1 = "_navigationLabelText_17nxo_256"
  , l1 = "_navigationLabelOverlay_17nxo_261"
  , f = {
    navigation: t1,
    navigationLink: r1,
    linkInfo: n1,
    navigationLabel: s1,
    navigationLabelText: i1,
    navigationLabelOverlay: l1
};
d.registerPlugin($);
function H1({onMouseEnterHandler: l, onMouseLeaveHandler: a, animated: t=!1}) {
    const n = b.useRef([])
      , s = b.useRef([]);
    return b.useEffect(()=>{
        t ? (d.set(n.current, {
            opacity: 0
        }),
        d.set(s.current, {
            opacity: 0,
            scaleX: 0
        }),
        d.timeline().add("start").to(s.current, {
            scaleX: 1,
            transformOrigin: "left",
            duration: .5,
            ease: "power4.out",
            stagger: .15
        }).to(s.current, {
            opacity: 1,
            ease: "none",
            yoyo: !0,
            repeat: 40,
            duration: .01
        }, "start").add("scaleOut").to(s.current, {
            scaleX: 0,
            transformOrigin: "right",
            duration: .5,
            ease: "power4.out",
            stagger: .15
        }).to(n.current, {
            opacity: 1,
            duration: .01
        }, "scaleOut")) : d.set(s.current, {
            opacity: 0,
            scaleX: 0
        })
    }
    , []),
    h("nav", {
        className: F(f.navigation, "u-b0", "u-uppercase"),
        children: [e("div", {
            children: e("a", {
                className: f.navigationLink,
                href: "/examples/",
                onMouseEnter: ()=>{
                    l("demosHover")
                }
                ,
                onMouseLeave: ()=>{
                    a("demosHover")
                }
                ,
                children: h("div", {
                    className: f.navigationLabel,
                    children: [e("span", {
                        className: f.navigationLabelText,
                        ref: r=>n.current[0] = r,
                        children: "Examples"
                    }), e("span", {
                        className: f.navigationLabelOverlay,
                        ref: r=>s.current[0] = r
                    })]
                })
            })
        }), e("div", {
            className: "u-text-right",
            children: e("a", {
                className: f.navigationLink,
                href: "/about/",
                onMouseEnter: ()=>{
                    l("aboutHover")
                }
                ,
                onMouseLeave: ()=>{
                    a("aboutHover")
                }
                ,
                children: h("div", {
                    className: f.navigationLabel,
                    children: [e("span", {
                        className: f.navigationLabelText,
                        ref: r=>n.current[1] = r,
                        children: "About"
                    }), e("span", {
                        className: f.navigationLabelOverlay,
                        ref: r=>s.current[1] = r
                    })]
                })
            })
        }), e("div", {
            children: e("a", {
                className: f.navigationLink,
                href: "https://savee.it/reframed/",
                target: "_blank",
                onMouseEnter: ()=>{
                    l("saveeHover")
                }
                ,
                onMouseLeave: ()=>{
                    a("saveeHover")
                }
                ,
                children: h("div", {
                    className: f.navigationLabel,
                    children: [h("span", {
                        className: f.navigationLabelText,
                        ref: r=>n.current[2] = r,
                        children: ["SAVEE", e(I, {})]
                    }), e("span", {
                        className: f.navigationLabelOverlay,
                        ref: r=>s.current[2] = r
                    })]
                })
            })
        }), e("div", {
            className: "u-text-right",
            children: e("a", {
                className: f.navigationLink,
                href: "https://www.instagram.com/reframed.online/",
                target: "_blank",
                onMouseEnter: ()=>{
                    l("instagramHover")
                }
                ,
                onMouseLeave: ()=>{
                    a("instagramHover")
                }
                ,
                children: h("div", {
                    className: f.navigationLabel,
                    children: [h("span", {
                        className: f.navigationLabelText,
                        ref: r=>n.current[3] = r,
                        children: ["Instagram", e(I, {})]
                    }), e("span", {
                        className: f.navigationLabelOverlay,
                        ref: r=>s.current[3] = r
                    })]
                })
            })
        })]
    })
}
const c1 = "_stars_iqa1f_218"
  , o1 = {
    stars: c1
};
d.registerPlugin(O);
function V1({animated: l=!1}) {
    const a = b.useRef([]);
    function t(n) {
        const s = n.clientX - window.innerWidth / 2;
        a != null && a.current && d.to(a.current, {
            duration: 1,
            rotation: s * .01,
            transformOrigin: "center",
            ease: "power1.out"
        })
    }
    return b.useEffect(()=>{
        if (l)
            return a.current.forEach(n=>{
                d.from(n.querySelectorAll("line"), {
                    duration: 1,
                    drawSVG: "live",
                    transformOrigin: "center",
                    stagger: .1,
                    ease: "expo.out",
                    delay: 2
                }),
                d.from(n.querySelectorAll("rect"), {
                    duration: 1,
                    stagger: .5,
                    transformOrigin: "center",
                    drawSVG: "live",
                    delay: 2
                })
            }
            ),
            document.addEventListener("mousemove", t),
            ()=>{
                document.removeEventListener("mousemove", t)
            }
    }
    , []),
    h("div", {
        className: o1.stars,
        children: [e("div", {
            ref: n=>a.current[0] = n,
            children: h("svg", {
                width: "50",
                height: "50",
                viewBox: "0 0 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n=>a.current[0] = n,
                children: [e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "24.5",
                    y2: "0",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "35.5",
                    y2: "13.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "50",
                    y2: "24.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    y2: "24.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "24.5",
                    y2: "50",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "13.5",
                    y2: "13.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "35.5",
                    y2: "35.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "13.5",
                    y2: "35.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("rect", {
                    x: "16.5",
                    y: "16.5",
                    width: "16",
                    height: "16",
                    vectorEffect: "non-scaling-stroke"
                })]
            })
        }), e("div", {
            ref: n=>a.current[1] = n,
            children: h("svg", {
                width: "50",
                height: "50",
                viewBox: "0 0 50 50",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                ref: n=>a.current[1] = n,
                children: [e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "24.5",
                    y2: "0",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "35.5",
                    y2: "13.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "50",
                    y2: "24.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    y2: "24.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "24.5",
                    y2: "50",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "13.5",
                    y2: "13.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "35.5",
                    y2: "35.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("line", {
                    x1: "24.5",
                    y1: "24.5",
                    x2: "13.5",
                    y2: "35.5",
                    vectorEffect: "non-scaling-stroke"
                }), e("rect", {
                    x: "16.5",
                    y: "16.5",
                    width: "16",
                    height: "16",
                    vectorEffect: "non-scaling-stroke"
                })]
            })
        })]
    })
}
export {h1 as B, I as E, H1 as N, V1 as S, b1 as a};
