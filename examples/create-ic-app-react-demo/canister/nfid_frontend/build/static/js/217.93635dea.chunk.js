"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[217],{85217:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var n=t(88250),o=t(87273),i=t(58240),l=t(71290),s=t(21325);var r=t(12952),u=t(73971),d=t(33693);const v=e=>{var a,t,v,m,c,f;let{appMeta:p,rpcMessage:h,rpcMessageDecoded:b,populatedTransaction:g,disableConfirmButton:F,onConfirm:k,onReject:N}=e;const{rates:x}=(0,r.h)(),{symbol:w,currency:I,chainName:y}=n.v.getSymbolAndChainName(h.options.chainId),B=x[I],U=(0,o.useMemo)((()=>function(e,a){var t;if(!e||!a||!a[0])return{feeUsd:"0",fee:"0",maxFeeUsd:"0",maxFee:"0",isInsufficientFundsError:!1,isNetworkIsBusyWarning:!1};const[n,o]=a,r=n.gasPrice;delete n.gasPrice;const u=l.BigNumber.from(null===n||void 0===n?void 0:n.gasLimit),d=l.BigNumber.from(null!==r&&void 0!==r?r:null===n||void 0===n?void 0:n.maxFeePerGas),v=l.BigNumber.from(null!==(t=null===n||void 0===n?void 0:n.maxFeePerGas)&&void 0!==t?t:r),m=u.mul(d).div(125).mul(100),c=parseFloat(i.formatEther(m))*e,f=u.mul(v),p=parseFloat(i.formatEther(f))*e;return{feeUsd:c.toFixed(2),fee:i.formatEther(m),maxFeeUsd:p.toFixed(2),maxFee:i.formatEther(f),isInsufficientFundsError:null!==o&&void 0!==o?o:s.kb.INSUFICIENT_FUNDS===o,isNetworkIsBusyWarning:null!==o&&void 0!==o?o:s.kb.NETWORK_BUSY===o}}(B,g)),[B,g]),E=(0,o.useMemo)((()=>{var e,a,t,n,o,i;if(!U)return[];let l=[];return null!==b&&void 0!==b&&null!==(e=b.data)&&void 0!==e&&null!==(a=e.meta)&&void 0!==a&&a.content[0].url||null!==b&&void 0!==b&&null!==(t=b.data)&&void 0!==t&&null!==(n=t.meta)&&void 0!==n&&n.name||null===b||void 0===b||null===(o=b.data)||void 0===o||null===(i=o.collectionData)||void 0===i||!i.name||l.push({title:"Preview unavailable",subtitle:"Unable to estimate asset changes. Please make sure you trust this dapp."}),U.isNetworkIsBusyWarning&&l.push({title:"Network is busy",subtitle:(0,d.jsxs)(d.Fragment,{children:["Gas prices are high and estimates are less accurate.",(0,d.jsx)("span",{className:"text-blue-600",children:" Adjust the network fee."})]})}),l}),[U,null===b||void 0===b||null===(a=b.data)||void 0===a||null===(t=a.collectionData)||void 0===t?void 0:t.name,null===b||void 0===b||null===(v=b.data)||void 0===v||null===(m=v.meta)||void 0===m?void 0:m.content,null===b||void 0===b||null===(c=b.data)||void 0===c||null===(f=c.meta)||void 0===f?void 0:f.name]);return(0,d.jsx)(u.i,{title:"Deploy collection",applicationMeta:p,fromAddress:null===h||void 0===h?void 0:h.params[0].from,toAddress:null===h||void 0===h?void 0:h.params[0].to,networkFee:U.fee,totalUSD:U.feeUsd,totalToken:U.fee,network:y,currency:w,onApprove:k,disableApproveButton:F,isInsufficientBalance:!!U.isInsufficientFundsError,warnings:E,onCancel:N})}}}]);
//# sourceMappingURL=217.93635dea.chunk.js.map