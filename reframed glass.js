import {a as o, r as l, c} from "./style-403a1701.js";
function _() {
    return o("svg", {
        className: "u-icon u-icon--arrow-left",
        viewBox: "0 0 9 9",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: o("path", {
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M9 0H0V9H9V0ZM2.73829 4.26017L4.06813 2.93033L3.72872 2.59092L1.81953 4.50011L3.72872 6.4093L4.06813 6.06989L2.73841 4.74017H6.89961V4.26017H2.73829Z"
        })
    })
}
const n = "_glass_3fpva_218"
  , u = "_color_3fpva_223"
  , i = "_blur_3fpva_227"
  , s = {
    glass: n,
    color: u,
    blur: i
};
function d({hasColor: r=!0, hasBlur: t=!0}) {
    const [e,f] = l.useState(r)
      , [a,p] = l.useState(t);
    return o("div", {
        className: c(s.glass, {
            [s.blur]: a,
            [s.color]: e
        })
    })
}
export {_ as B, d as G};
