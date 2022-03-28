module.exports = Button = (styles) => ({
  ".btn": {
    "@apply text-center text-sm font-bold rounded-md outline-none focus:ring-2 focus:ring-offset-[3px] focus:ring-black-base first-letter:capitalize hover:no-underline transition duration-75 py-[14px] px-5":
      {},
  },
  ".btn-text": {
    "@apply hover:underline text-blue-base outline-none active:bg-gray-200 hover:bg-gray-100 font-normal mt-1 !p-[10px]":
      {},
  },
  ".btn-secondary": {
    "@apply bg-black-base text-white border-0 hover:shadow-black": {},
  },
  ".btn-stroke": {
    "@apply border border-black-base text-black-base active:bg-black-base active:text-white hover:text-white focus:text-white":
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
    "@apply flex items-center justify-center space-x-4": {},
  },
  ".btn-block": {
    "@apply w-full": {},
  },
  ".btn-error": {
    "@apply text-white bg-red-base hover:bg-red-hover active:bg-red-active hover:shadow-lg hover:shadow-red-base/40 disabled:bg-black-base":
      {},
  },
  ".btn-primary": {
    "@apply text-white bg-blue-base hover:bg-blue-hover active:bg-blue-activeDark disabled:bg-black-base hover:shadow-blueLight":
      {},
  },
});
