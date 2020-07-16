const CarCat = /ca[rt]/
const PopProp = /pr?op/
const Ferrs = /ferr(et|y|ari)/
const Ious = /\w+ious(\s|$)/
const WhiteSpace = / [\.\,\:\;]/
const LongerThanSix = /\w{7,}/
const NoE = /\b[^\seE]+\b/
const quoting = (text) => {
     return text.replace(/('(?=\s)|^'|(?<=\s)'|'$)/g, '"')
 }
const validJSNumber = (str) => {
     return /^(\+|\-)?((\d+)?\.\d+|\d+\.(\d+)?|\d+)(e(\-|\+)?\d+)?$/i.test(str)
 }

// 🚫 don't edit this export
module.exports = {
    CarCat,
    PopProp,
    Ferrs,
    Ious,
    WhiteSpace,
    LongerThanSix,
    NoE,
    quoting,
    validJSNumber,
}
