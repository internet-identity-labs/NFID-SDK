module.exports = (theme) => ({
  ".btn": {
    "@apply text-center text-sm font-bold rounded-md outline-none focus:ring-2 focus:ring-offset-[3px] focus:ring-black first-letter:capitalize hover:no-underline transition duration-75 py-[14px] px-5":
      {},
  },
  ".btn-text": {
    "@apply hover:underline text-blue-600 outline-none active:bg-gray-200 hover:bg-gray-100 font-normal mt-1 !p-[10px]":
      {},
  },
  ".btn-secondary": {
    "@apply bg-black text-white border-0 hover:shadow-black": {},
  },
  ".btn-stroke": {
    "@apply border border-black text-black active:bg-black active:text-white hover:text-white focus:text-white":
      {},
  },
  ".btn-large": {
    "@apply md:w-[230px] w-full": {},
  },
  ".btn-large-max": {
    "@apply sm:w-max w-full": {},
  },
  ".btn-disabled": {
    "@apply cursor-not-allowed opacity-20 pointer-events-none": {},
  },
  ".btn-icon": {
    "@apply hover:bg-blue-700 transition ring-transparent active:ring-blue-600/20 focus:ring-blue-600/20 ring-2 !ring-offset-0 !p-2 border border-transparent active:border-blue-600":
      {},
  },
  ".btn-icon-active": {
    "@apply !border-blue-600 bg-blue-700": {},
  },
  ".btn-block": {
    "@apply w-full": {},
  },
  ".btn-error": {
    "@apply text-white bg-red-600 hover:bg-red-400 active:bg-red-700 hover:shadow-lg hover:shadow-red-600/40 disabled:bg-black":
      {},
  },
  ".btn-primary": {
    "@apply text-white bg-blue-600 hover:bg-blue-400 active:bg-blue-700 disabled:bg-black hover:shadow-blueLight":
      {},
  },
});
