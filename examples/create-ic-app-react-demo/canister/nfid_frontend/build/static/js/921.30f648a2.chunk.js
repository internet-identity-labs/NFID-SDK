"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[921],{34921:(e,l,t)=>{t.r(l),t.d(l,{default:()=>d});var i=t(88250),n=t(87273),o=t(44236),a=t(75557),u=t(12952),r=t(73971),s=t(33693);const d=e=>{var l;let{appMeta:t,rpcMessage:d,rpcMessageDecoded:v,populatedTransaction:c,disableConfirmButton:m,onConfirm:p,onReject:b}=e;const{rates:h}=(0,u.h)(),{symbol:f,currency:g,chainName:k}=i.v.getSymbolAndChainName(d.options.chainId),w=h[g],M=(0,n.useMemo)((()=>(0,o.l)(w,c)),[w,c]),N=(0,n.useMemo)((()=>{if(!M)return[];let e=[];return M.isNetworkIsBusyWarning&&e.push({title:"Network is busy",subtitle:(0,s.jsxs)(s.Fragment,{children:["Gas prices are high and estimates are less accurate.",(0,s.jsx)("span",{className:"text-blue-600",children:" Adjust the network fee."})]})}),e}),[M]),y=(0,n.useMemo)((()=>{var e,l;return null===v||void 0===v||null===(e=v.data)||void 0===e||null===(l=e.items)||void 0===l?void 0:l.map((e=>{var l,t,i,n,o,u,r,s,d,v;return{icon:null===e||void 0===e||null===(l=e.item)||void 0===l||null===(t=l.data)||void 0===t||null===(i=t.meta)||void 0===i||null===(n=i.content[0])||void 0===n?void 0:n.url,title:null===e||void 0===e||null===(o=e.item)||void 0===o||null===(u=o.data)||void 0===u||null===(r=u.meta)||void 0===r?void 0:r.name,subtitle:null===e||void 0===e||null===(s=e.item)||void 0===s||null===(d=s.data)||void 0===d||null===(v=d.collectionData)||void 0===v?void 0:v.name,innerTitle:Number(null===e||void 0===e?void 0:e.amount)/10**18+" ETH",innerSubtitle:(0,a.tF)(Number(null===e||void 0===e?void 0:e.amount)/10**18,h.ETH)}}))}),[h,null===v||void 0===v||null===(l=v.data)||void 0===l?void 0:l.items]),T=(0,n.useMemo)((()=>{var e;if(c)return String(Number(null===(e=c[0])||void 0===e?void 0:e.value)/10**18)}),[c]);return(0,s.jsx)(r.i,{title:"Buy multiple collectibles",applicationMeta:t,fromAddress:null===d||void 0===d?void 0:d.params[0].from,toAddress:null===d||void 0===d?void 0:d.params[0].to,network:k,currency:f,networkFee:M.fee,totalUSD:M.totalUsd,totalToken:M.total,price:T,onApprove:p,disableApproveButton:m,isInsufficientBalance:M.isInsufficientFundsError,warnings:N,onCancel:b,assets:y})}}}]);
//# sourceMappingURL=921.30f648a2.chunk.js.map