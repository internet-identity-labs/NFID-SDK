"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([[851],{83851:(e,t,a)=>{a.r(t),a.d(t,{default:()=>V});var n=a(64279),r=a(87273),i=a(8439),l=a(21882),s=a(13791),o=a(54915),c=a(96349),u=a(94480),d=a(7863),p=a(75557),m=a(43185),v=a(95569),f=a(8708),g=a(69491),h=a(94244),I=a(36516),b=a(25390);const T=async e=>{let{to:t,amount:a,delegationIdentity:n,transformAmount:r,canisterId:i}=e;return i?await(0,f.re)({canisterId:i,amount:r(a),to:t,sourceIdentity:n}):await(0,d.re)(r(a),t,n)},N=e=>{let{domain:t,accountId:a,tokenCanisterId:n,transformAmount:i}=e;const{profile:l}=(0,g.Un)(),{data:s,isValidating:o}=(c=null===l||void 0===l?void 0:l.anchor,u=t,d=a,console.debug("useWalletDelegation",{userNumber:c}),(0,h.ZP)(c?[c,u,d]:null,(e=>{let[t,a,n]=e;return(0,b.p)(t,a,n)}),{dedupingInterval:I.CP/2,focusThrottleInterval:I.CP/2}));var c,u,d;const p=r.useRef(null);r.useEffect((()=>{var e,n,r;(null===(e=p.current)||void 0===e?void 0:e.domain)===t&&(null===(n=p.current)||void 0===n?void 0:n.accountId)===a||((null===(r=p.current)||void 0===r?void 0:r.rejectTransfer)&&p.current.rejectTransfer("domain or accountId has been changed"),p.current=null)}),[t,a]),r.useEffect((()=>{if(p.current){const{amount:e,to:n,executeTransfer:r,domain:i,accountId:l}=p.current;s&&r&&i===t&&l===a&&(r(s,n,e),p.current=null)}}),[a,t,s]);const m=r.useCallback((async(e,r)=>{if(p.current)throw new Error("there is a pending transfer");return new Promise(((l,o)=>{if(s)return T({amount:r,to:e,delegationIdentity:s,canisterId:n,transformAmount:i}).then((e=>l(e))).catch((e=>o(e)));p.current={to:e,amount:r,domain:t,accountId:a,rejectTransfer:o,executeTransfer:(e,t,a)=>{T({amount:a,to:t,delegationIdentity:e,canisterId:n,transformAmount:i}).then((e=>l(e))).catch((e=>o(e)))}}}))}),[a,t,n,i,s]);return console.debug("useTransfer",{isValidatingWalletDelegation:o}),{isValidatingWalletDelegation:o,transfer:m}};var y=a(51921),x=a(18414),w=a(55137),P=a(33693);const C=e=>{let{applicationName:t,applicationLogo:a,amountICP:n,amountUSD:r,walletOptions:i,selectedWallets:s,setSelectedWallets:o,onReject:c,onApprove:u,isLoading:p=!1,destinationAddress:m,successTimer:v,isInsufficientFunds:f}=e;return(0,P.jsxs)(l.D1,{applicationName:t,applicationLogo:a,onReject:c,onApprove:f?()=>{}:u,isLoading:p,successTimer:v,children:[(0,P.jsx)(l.s0,{isLoading:p,isSuccess:-1!==v,children:(0,P.jsxs)("div",{className:"flex items-center justify-between w-full",children:[(0,P.jsx)("p",{className:"text-sm font-semibold",children:"Transfer"}),(0,P.jsxs)("p",{className:"text-sm",children:[n," ICP ",(0,P.jsxs)("span",{className:"text-xs text-secondary",children:["\u2248 ",r," "]})]})]})}),(0,P.jsx)("p",{className:"mb-1 text-sm",children:"From"}),(0,P.jsx)(l.TV,{disabled:p||-1!==v,isSearch:!0,isMultiselect:!1,options:i,selectedValues:s,setSelectedValues:o,firstSelected:!0,errorText:f?"Insufficient funds":void 0}),(0,P.jsx)("p",{className:"mt-2 mb-1 text-sm",children:"To"}),(0,P.jsxs)("div",{className:(0,x.Z)("h-10 text-secondary bg-gray-100 rounded-md","flex items-center justify-between px-2.5 space-x-2"),id:"account-id",children:[(0,P.jsx)("p",{className:"overflow-hidden text-sm text-ellipsis whitespace-nowrap",children:m}),(0,P.jsx)(w.C,{className:"w-[18px] h-[18px] flex-shrink-0",value:m})]}),(0,P.jsxs)("div",{className:"text-xs text-secondary mt-2.5",children:["Transfer fee: ",d.X_," ICP"]})]})};var A=a(27221);const F=e=>{let{amountICP:t,applicationLogo:a,applicationName:n,onSuccess:i,to:l}=e;const[f,g]=(0,r.useState)([]),[h,I]=(0,r.useState)(!1),{counter:b,setCounter:T}=(0,A.J)({defaultCounter:-1}),{wallets:x}=(0,v.w)(),{exchangeRate:w}=(0,m.G)(),F=(0,r.useMemo)((()=>null===x||void 0===x?void 0:x.find((e=>e.principal.toString()===f[0]))),[f,x]),{transfer:S}=N({accountId:null===F||void 0===F?void 0:F.accountId,domain:null===F||void 0===F?void 0:F.domain,transformAmount:y.Q}),q=(0,r.useMemo)((()=>{var e;return null===x||void 0===x||null===(e=x.filter((e=>!e.isVaultWallet)))||void 0===e?void 0:e.map((e=>{var a,n,r;return{label:null!==(a=e.label)&&void 0!==a?a:"",value:null!==(n=null===(r=e.principal)||void 0===r?void 0:r.toText())&&void 0!==n?n:"",afterLabel:(0,d.T9)(e.balance.ICP),disabled:Number(e.balance)<=Number(t)}})).sort(((e,t)=>Number(null===e||void 0===e?void 0:e.disabled)-Number(null===t||void 0===t?void 0:t.disabled)))}),[t,x]),R=(0,r.useMemo)((()=>w?(0,p.tF)(t,w):"0"),[t,w]),E=(0,r.useMemo)((()=>!(null===q||void 0===q||!q.length)&&!(null!==q&&void 0!==q&&q.filter((e=>!0!==e.disabled)).length)),[q]);return(0,P.jsx)(C,{amountICP:t,amountUSD:R,walletOptions:null!==q&&void 0!==q?q:[],selectedWallets:f,setSelectedWallets:g,onReject:()=>window.close(),onApprove:async()=>{let e=(0,u.v)(l)?l:(0,o.PZ)(s.Principal.fromText(l));try{I(!0);const a=await S(e,String(t));T(5),setTimeout((()=>i(a)),5e3)}catch(a){"InsufficientFunds"===a.message?c.Am.error("You don't have enough ICP for this transaction",{toastId:"insufficientFundsError"}):c.Am.error("Unexpected error: The transaction has been cancelled",{toastId:"unexpectedTransferError"})}finally{I(!1)}},isLoading:h,applicationLogo:null!==a&&void 0!==a?a:"",applicationName:null!==n&&void 0!==n?n:"",destinationAddress:l,successTimer:b,isInsufficientFunds:E})};var S=a(62233),q=a(53844),R=a(84732),E=a(20663),k=a(99473);let j=null;const L=(0,q.C)({context:{},tsTypes:{},schema:{events:{}},id:"RequestTransferProvider",initial:"Ready",states:{Ready:{invoke:{src:"registerRequestTransferHandler",id:"registerRequestTransferHandler",onDone:{target:"Authenticate",actions:"assignRequestTransferRequest"}}},Authenticate:{invoke:{src:"AuthenticationMachine",id:"AuthenticationMachine",onDone:[{target:"RequestTransfer",actions:"assignAuthSession"}],data:e=>({appMeta:e.appMeta})}},RequestTransfer:{on:{CONFIRM:{target:"Confirm",actions:"assignBlockHeight"}}},Confirm:{onEntry:"setBlockHeight"},End:{type:"final"}}},{actions:{assignAuthSession:(0,R.f0)(((e,t)=>({authSession:t.data}))),assignRequestTransferRequest:(0,R.f0)({requestTransfer:(e,t)=>t.data}),setBlockHeight:e=>{let{blockHeight:t}=e;j=Number(t)},assignBlockHeight:(0,R.f0)({blockHeight:(e,t)=>t.blockHeight})},services:{async registerRequestTransferHandler(){const e=await(0,E.registerRequestTransferHandler)((()=>new Promise((e=>{setInterval((()=>{j&&e({status:"SUCCESS",height:j})}),1e3)}))));return console.debug("registerRequestTransferHandler",{params:e}),e},AuthenticationMachine:k.Z},guards:{}});var M=a(93302);function V(e){var t,a,s,o,c,u,d,p;let{machine:m}=e;const[v]=(0,i.lr)(),f=v.get("applicationName"),g=v.get("applicationLogo"),[h,I]=(0,n.e)(m||L.withConfig({},{appMeta:{name:f||"",logo:g||""}}));switch((0,r.useEffect)((()=>{console.debug("RequestTransferCoordinator",{state:h.value})}),[h]),!0){case h.matches("Ready"):return(0,P.jsx)(M.B,{isLoading:!0,loadingMessage:`Connecting to ${null!==(t=null===(a=h.context.appMeta)||void 0===a?void 0:a.name)&&void 0!==t?t:"the application"}`});case h.matches("Authenticate"):return(0,P.jsx)(l.$$,{children:(0,P.jsx)(S.Z,{actor:h.children.AuthenticationMachine})});case h.matches("RequestTransfer"):return(0,P.jsx)(F,{applicationName:null!==(s=v.get("applicationName"))&&void 0!==s?s:"",applicationLogo:null!==(o=v.get("applicationLogo"))&&void 0!==o?o:"",to:null!==(c=null===(u=h.context.requestTransfer)||void 0===u?void 0:u.to)&&void 0!==c?c:"",amountICP:null!==(d=null===(p=h.context.requestTransfer)||void 0===p?void 0:p.amount)&&void 0!==d?d:0,onSuccess:e=>{I({type:"CONFIRM",blockHeight:e})}});default:return console.debug(`PhoneCredentialCoordinator rendering loader, unknown state: ${JSON.stringify(h.value)}`),(0,P.jsx)(M.B,{isLoading:!0})}}},19864:(e,t,a)=>{a.d(t,{i:()=>i});var n=a(94244),r=a(8708);const i=()=>{const{data:e,isValidating:t}=(0,n.ZP)("dip20AllToken",r.o4,{dedupingInterval:36e5,focusThrottleInterval:36e5});return console.debug("useAllDip20Token",{token:e}),{token:e,isValidating:t}}},94159:(e,t,a)=>{a.d(t,{A1:()=>o,J4:()=>s,SP:()=>c});var n=a(13791),r=a(54915),i=a(21325),l=a(8708);async function s(e){let{principals:t,dip20Token:a}=e;return await Promise.all(t.map((async e=>{let{principal:t,account:n}=e;const s=await Promise.all([...["ICP"].map((async e=>({[e]:await(0,i.sb)((0,r.PZ)(t))}))),...a.map((async e=>{let{symbol:a,canisterId:n}=e;return{[a]:await(0,l.li)({canisterId:n,principalId:t.toText()})}}))]);return{principal:t,principalId:t.toText(),account:n,balance:s.reduce(((e,t)=>({...e,...t})),{})}})))}async function o(e){return await Promise.all(e.map((async e=>{var t;const a=n.Principal.fromText(VAULT_CANISTER_ID),l=(0,r.PZ)(a,(0,r.Wu)(e.uid)),s=await(0,i.sb)(l);return{principal:a,account:{domain:"nfid.vaults",label:null!==(t=e.name)&&void 0!==t?t:"",accountId:e.uid},principalId:a.toText(),address:l,balance:{ICP:s},vaultId:null===e||void 0===e?void 0:e.vaultId,vaultName:null===e||void 0===e?void 0:e.vaultName}})))}async function c(e){return await Promise.all(e.map((async e=>{const t=n.Principal.fromText(VAULT_CANISTER_ID),a=await(0,i.sb)((0,r.PZ)(t,(0,r.Wu)(e.uid)));return{...e,address:(0,r.PZ)(t,(0,r.Wu)(e.uid)),balance:{ICP:a}}})))}},43185:(e,t,a)=>{a.d(t,{G:()=>i});var n=a(94244),r=a(76510);const i=()=>{const{data:e,...t}=(0,n.ZP)("walletExchangeRate",r.f,{dedupingInterval:36e5,focusThrottleInterval:36e5,refreshInterval:36e5});return{exchangeRate:e,...t}}},14868:(e,t,a)=>{a.d(t,{j:()=>s});var n=a(94244),r=a(94159),i=a(65794),l=a(19864);const s=()=>{const{principals:e}=(0,i.J)(),{token:t}=(0,l.i)(),{data:a,isValidating:s,mutate:o}=(0,n.ZP)(t&&e?[e,t,"AllBalanceRaw"]:null,(async e=>{let[t,a]=e;return console.debug("AllBalanceRaw",{principals:t,dip20Token:a}),await(0,r.J4)({principals:t,dip20Token:a})}),{dedupingInterval:3e4,refreshInterval:6e4});return{balances:a,isLoading:s,refreshBalances:o}}},33492:(e,t,a)=>{a.d(t,{I:()=>s});var n=a(94244),r=a(36516),i=a(21325),l=a(67959);const s=()=>(0,n.ZP)("vaultDelegation",(()=>(0,l.a)()),{refreshInterval:r.EW,onSuccess:async e=>(e&&await(0,i.Ru)(i.UT,e),e)})},67959:(e,t,a)=>{a.d(t,{a:()=>s});var n=a(52259),r=a(21325),i=a(25390),l=a(23439);const s=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nfid.one",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];const s=await(0,l.In)();return"-1"!==t&&s.wallet===r.TD.II?await(0,i.p)(s.anchor,e,t):await(0,n.iu)(r.fD.get().delegationIdentity,n.qo.IC,r.KH.concat(a))}},25390:(e,t,a)=>{a.d(t,{p:()=>l});var n=a(52259),r=a(36516),i=a(21325);a(30365);async function l(e,t,a){arguments.length>3&&void 0!==arguments[3]||n.qo.IC;const l="undefined"===typeof t||"nfid.one"===t?r.Zp:(0,i.bR)(t,a);return i.YL.getDelegation(e,l,BigInt((0,i.Mz)(r.CP,"NFID_WALLET_DELEGATION_TTL_NS")))}},65794:(e,t,a)=>{a.d(t,{J:()=>s});var n=a(87273),r=a(72422),i=a(21325),l=a(69491);const s=()=>{const{profile:e}=(0,l.Un)(),{accounts:t}=(0,l.xe)(),{applicationsMeta:a}=(0,l.pq)(),s=n.useMemo((()=>(0,i.XZ)(t,a)),[t,a]),{data:o}=(0,r.Z)(null!==e&&void 0!==e&&e.anchor&&s?[BigInt(e.anchor),s,e.wallet===i.TD.NFID]:null,(e=>{let[t,a,n]=e;return(0,i.bt)(t,a,n)}),{dedupingInterval:6e4,refreshInterval:6e4});return console.debug("useAllPrincipals",{principals:o}),{principals:o}}},95569:(e,t,a)=>{a.d(t,{w:()=>p});var n=a(54915),r=a(87273),i=a(21325),l=a(14868),s=a(94244),o=a(94159),c=a(33492);var u=a(69491),d=a(93441);const p=()=>{const{balances:e,isLoading:t}=(0,l.j)(),{balances:a,isLoading:p}=(()=>{const{data:e}=(0,c.I)(),{data:t,isLoading:a}=(0,s.ZP)(e?"allVaultsWallets":null,(async()=>{const e=await(0,i._w)(),t=null===e||void 0===e?void 0:e.map((async e=>(await(0,i.MX)(e.id)).map((t=>({...t,vaultId:e.id,vaultName:e.name})))));return(await Promise.all(t)).flat(1).filter((e=>e.state!==i.Q$.ARCHIVED))})),{data:n,isValidating:r}=(0,s.ZP)(t?[t,"allVaultsWalletsBalances"]:null,(async e=>{let[t]=e;return console.debug("allVaultsWalletsBalances",{allVaultsWallets:t}),await(0,o.A1)(t)}),{dedupingInterval:3e4,refreshInterval:6e4});return{balances:n,isLoading:a||r}})(),m=(0,u.pq)();return{wallets:r.useMemo((()=>{var t;if(!e||!a)return[];const r=null===e||void 0===e?void 0:e.map((e=>{var t;let{principal:a,account:r,...l}=e;return{label:(0,i.w)(null!==(t=m.applicationsMeta)&&void 0!==t?t:[],r.domain,r.accountId),accountId:r.accountId,domain:r.domain,principal:a,address:(0,n.PZ)(a),...l}})).sort((0,d.E)((e=>{let{label:t}=e;return null!==t&&void 0!==t?t:""}))).concat(null!==(t=null===a||void 0===a?void 0:a.map((e=>{let{principal:t,account:a,address:n,...r}=e;return{label:a.label,accountId:a.accountId,domain:a.domain,principal:t,address:null!==n&&void 0!==n?n:a.accountId,isVaultWallet:!0,...r}})))&&void 0!==t?t:[]);return(0,d.h)((e=>{let{label:t}=e;return null!==t&&void 0!==t?t:""}),["NFID","NNS"])(r||[])}),[m.applicationsMeta,e,a]),isLoading:t||p}}},55137:(e,t,a)=>{a.d(t,{C:()=>c});var n=a(18414),r=a(87273),i=a(21882);const l=a.p+"static/media/copied.7db236d4ed9a8d82463d41f442395067.svg";const s=a.p+"static/media/copy.fa74bb78f3023163889b69dafbaee228.svg";var o=a(33693);const c=e=>{let{value:t,className:a}=e;const[c,u]=r.useState(!1),d=r.useCallback((()=>{u(!0),navigator.clipboard.writeText(t),setTimeout((()=>{u(!1)}),2e3)}),[t]);return(0,o.jsx)("div",{className:(0,n.Z)(!c&&"hover:opacity-50 cursor-pointer transition-opacity",a),children:(0,o.jsx)(i.u,{tip:"Copy",children:(0,o.jsx)("img",{className:"w-full",onClick:d,src:c?l:s,alt:"copy"})})})}},93441:(e,t,a)=>{a.d(t,{E:()=>n,h:()=>r});const n=e=>(t,a)=>e(t).localeCompare(e(a),"en",{sensitivity:"base"}),r=(e,t)=>a=>{const n=t.map((t=>a.find((a=>e(a).includes(t))))).filter((e=>Boolean(e)));return[...n,...a.filter((t=>!n.find((a=>e(a)===e(t)))))]}},27221:(e,t,a)=>{a.d(t,{J:()=>r});var n=a(87273);const r=e=>{let{defaultCounter:t,loop:a,frequency:r=1e3,onElapsed:i}=e;const[l,s]=n.useState(t),o=n.useRef(),[c,u]=n.useState(!1),d=n.useCallback((()=>{l>0&&s(l-1),0===l&&(u(!0),i&&i(),clearInterval(Number(o.current))),0===l&&a&&(s(t),o.current=setInterval(d,r),u(!1))}),[l,t,r,a,i]);return n.useEffect((()=>(o.current=setInterval(d,r),()=>clearInterval(Number(o.current)))),[r,d]),{elapsed:c,setCounter:s,counter:l}}},8708:(e,t,a)=>{a.d(t,{Gv:()=>m,o4:()=>u,li:()=>d,sd:()=>o,re:()=>p});var n=a(13791),r=(a(7863),a(96992)),i=a(42938);const l=(e,t)=>(0,i.$K)(e,m,t?{agent:new r.HttpAgent({...i.V6,identity:t})}:void 0);var s=a(66325);async function o(e){return l(e).getMetadata().then((t=>({canisterId:e,...t}))).catch((e=>{throw new Error(`getMetadata: ${e.message}`)}))}const c=e=>{let{decimals:t,...a}=e;return{decimals:t,toPresentation:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:BigInt(0);return Number(e)/Number(BigInt(10**t))},transformAmount:e=>Number(parseFloat(e)*10**t),...a}};async function u(){return await Promise.all(s.X.map(o)).then((e=>e.map(c)))}const d=async e=>{let{canisterId:t,principalId:a}=e;return l(t).balanceOf(n.Principal.fromText(a)).catch((e=>{throw new Error(`getBalance: ${e.message}`)}))};async function p(e){let{canisterId:t,to:a,amount:r,sourceIdentity:i}=e;console.debug("transfer",{canisterId:t,to:a,amount:r});const s=l(t,i),o=await s.transfer(n.Principal.fromText(a),BigInt(r)).catch((e=>{throw Error(`transfer failed: ${e}`)}));if("Err"in o){if("Other"in o.Err)throw Error(o.Err.Other);throw Error(Object.keys(o.Err)[0])}return console.debug("transfer",{response:o}),o.Ok}const m=e=>{let{IDL:t}=e;const a=t.Variant({InsufficientAllowance:t.Null,InsufficientBalance:t.Null,ErrorOperationStyle:t.Null,Unauthorized:t.Null,LedgerTrap:t.Null,ErrorTo:t.Null,Other:t.Text,BlockUsed:t.Null,AmountTooSmall:t.Null}),n=t.Variant({Ok:t.Nat,Err:a}),r=t.Record({fee:t.Nat,decimals:t.Nat8,owner:t.Principal,logo:t.Text,name:t.Text,totalSupply:t.Nat,symbol:t.Text}),i=t.Record({holderNumber:t.Nat64,deployTime:t.Nat64,metadata:r,historySize:t.Nat64,cycles:t.Nat64,feeTo:t.Principal});return t.Service({allowance:t.Func([t.Principal,t.Principal],[t.Nat],["query"]),approve:t.Func([t.Principal,t.Nat],[n],[]),balanceOf:t.Func([t.Principal],[t.Nat],["query"]),burn:t.Func([t.Nat],[n],[]),decimals:t.Func([],[t.Nat8],["query"]),getAllowanceSize:t.Func([],[t.Nat64],["query"]),getHolders:t.Func([t.Nat64,t.Nat64],[t.Vec(t.Tuple(t.Principal,t.Nat))],["query"]),getMetadata:t.Func([],[r],["query"]),getTokenInfo:t.Func([],[i],["query"]),getUserApprovals:t.Func([t.Principal],[t.Vec(t.Tuple(t.Principal,t.Nat))],["query"]),historySize:t.Func([],[t.Nat64],["query"]),logo:t.Func([],[t.Text],["query"]),mint:t.Func([t.Principal,t.Nat],[n],[]),name:t.Func([],[t.Text],["query"]),owner:t.Func([],[t.Principal],["query"]),setFee:t.Func([t.Nat],[],[]),setFeeTo:t.Func([t.Principal],[],[]),setLogo:t.Func([t.Text],[],[]),setName:t.Func([t.Text],[],[]),setOwner:t.Func([t.Principal],[],[]),symbol:t.Func([],[t.Text],["query"]),totalSupply:t.Func([],[t.Nat],["query"]),transfer:t.Func([t.Principal,t.Nat],[n],[]),transferFrom:t.Func([t.Principal,t.Principal,t.Nat],[n],[])})}},94480:(e,t,a)=>{a.d(t,{_:()=>n,v:()=>r});const n=e=>{let{min:t,max:a,toLowError:n="value is too small",toBigError:r="value is too big"}=e;return e=>void 0!==t&&Number(e)<t?n:!(void 0!==a&&Number(e)>a)||r},r=e=>/[0-9A-Fa-f]{6}/g.test(e)}}]);
//# sourceMappingURL=851.f4bb911b.chunk.js.map