const supportsTouchRule = "@supports (-webkit-touch-callout: none)";
const webkitFillAvailable = "-webkit-fill-available";

export const iosUtilities = {
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
