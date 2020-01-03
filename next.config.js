const withCss = require("@zeit/next-css");
const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const withAll = pipe(withCss, withSass, withFonts);

const config = {};

module.exports = withAll(config);
