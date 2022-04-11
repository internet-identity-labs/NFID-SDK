const supportsTouchRule = "@supports (-webkit-touch-callout: none)";
const webkitFillAvailable = "-webkit-fill-available";

module.exports = {
  ".min-h-screen-ios": {
    [supportsTouchRule]: {
      minHeight: webkitFillAvailable,
    },
  },
  ".h-screen-ios": {
    [supportsTouchRule]: {
      height: webkitFillAvailable,
    },
  },
};
