"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[554],{61249:(e,s,i)=>{i.r(s),i.d(s,{default:()=>w});var t=i(40751),n=i(87273),a=i(71287),o=i(45277),d=i(21882);const r=i.p+"static/media/security-key.79e712af2f1b5ff9f64d.png",c=i.p+"static/media/webauthn.76e99ef0342e1fd5ddd0.png";var l=i(33693);const u=e=>{let{isWebAuthN:s,onSkip:i,onTrust:t,isLoading:n=!1}=e;return(0,l.jsxs)(d.B$,{isLoading:n,className:"p-0",children:[(0,l.jsx)("p",{className:"mb-4 text-xl font-bold",children:s?"Trust this device":"Register security key"}),(0,l.jsx)("p",{className:"text-sm",children:s?"Add a passkey for this browser on this device to sign in to NFID faster with a look, touch, or PIN.":"Add a passkey on your security key to sign in to NFID faster next time."}),(0,l.jsx)("img",{className:"max-h-[200px] mx-auto mt-6 mb-7",src:s?c:r,alt:"webauthn"}),(0,l.jsxs)("div",{className:"flex justify-between gap-5",children:[(0,l.jsx)(d.zx,{type:"stroke",className:"w-full",onClick:i,children:"Skip for now"}),(0,l.jsx)(d.zx,{type:"primary",className:"w-full",onClick:t,children:"Add passkey"})]})]})};function w(){const[e,s]=(0,n.useState)(void 0);(0,n.useEffect)((()=>{window.postMessage({ready:!0})}),[]),(0,n.useEffect)((()=>{const i=t=>{"devices"in(null===t||void 0===t?void 0:t.data)&&!e&&(s(t.data.devices),window.removeEventListener("message",i))};return window.addEventListener("message",i),()=>window.removeEventListener("message",i)}),[e]);const i=(0,n.useMemo)((()=>(0,a.AL)()),[]),d=(0,n.useCallback)((async()=>{try{const s=await t.bP.create({publicKey:(0,o.c3)(e)});window.postMessage({isDeviceTrusted:!0,identity:JSON.stringify(s.toJSON()),isWebAuthN:i},window.opener.origin)}catch{window.postMessage({isDeviceTrusted:!0},window.opener.origin)}finally{window.close()}}),[i,e]),r=(0,n.useCallback)((()=>{window.postMessage({isDeviceTrusted:!1},window.opener.origin),window.close()}),[]);return(0,l.jsx)(u,{isLoading:!e,isWebAuthN:i,onSkip:r,onTrust:d})}}}]);
//# sourceMappingURL=554.5c8e0af4.chunk.js.map