"use strict";var __awaiter=this&&this.__awaiter||function(e,t,o,s){return new(o||(o=Promise))((function(n,r){function a(e){try{u(s.next(e))}catch(e){r(e)}}function i(e){try{u(s.throw(e))}catch(e){r(e)}}function u(e){var t;e.done?n(e.value):(t=e.value,t instanceof o?t:new o((function(e){e(t)}))).then(a,i)}u((s=s.apply(e,t||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createDb=void 0;
// monorepo
const log_1=require("log"),get_path_1=require("get-path"),setFromValue_1=require("./setFromValue"),makeGet_1=require("./makeGet"),createDb=e=>{const t=(0,makeGet_1.makeGet)(e),o=(t,o)=>__awaiter(void 0,void 0,void 0,(function*(){const s=(0,get_path_1.getRootPath)("information");if(!s){const e="fs-orm:information path could not be found";return(0,log_1.log)(e,{type:"error"}),{success:!1,message:e}}const n=null==e?void 0:e.defaultDbStorageMethods[t];if(!n){const e="no default db storage method found";return(0,log_1.log)(e,{type:"error"}),{success:!1,message:e}}const r=yield(0,setFromValue_1.setFromValue)({id:null==o?void 0:o.id,model:t,getJson:e=>{const t=e;return t.push(o),t},informationPath:s,defaultDbStorageMethod:n});return r||{success:!1,message:"Unimplemented defaultDbStorageMethod"}})),s=(t,o)=>__awaiter(void 0,void 0,void 0,(function*(){const s=(0,get_path_1.getRootPath)("information");if(!s){const e="fs-orm:information path could not be found";return(0,log_1.log)(e,{type:"error"}),{success:!1,message:e}}const n=null==e?void 0:e.defaultDbStorageMethods[t],r=yield(0,setFromValue_1.setFromValue)({defaultDbStorageMethod:n,informationPath:s,model:t,id:void 0,getJson:()=>o});return r||{success:!1,message:"Something went wrong"}}));return{get:t,set:s,push:o,remove:(e,o,n)=>__awaiter(void 0,void 0,void 0,(function*(){const r=yield t(e,n),a=r.filter((e=>!o(e))),i=r.length-a.length;if(0===i)return{success:!1,message:"Nothing removed",amountRemoved:i};const{success:u,message:d}=yield s(e,a);return{amountRemoved:i,success:u,message:d}})),update:(e,o,n,r)=>__awaiter(void 0,void 0,void 0,(function*(){const a=yield t(e,r);let i=0;const u=a.map((e=>{const t=o(e);return t&&i++,t?n(e):e})),{success:d,message:c}=yield s(e,u);return{rowsUpdated:i,data:u,message:c,success:d}})),upsert:(e,n,r,a)=>__awaiter(void 0,void 0,void 0,(function*(){const i=yield t(e,a);let u=0;const d=i.map((e=>{const t=n(e);return t&&u++,t?r(e):e}));let c,l;if(0===u){l="insert";
// NB: If nothing has been updated
const t=r(void 0);c=yield o(e,t),d.push(t)}else l="update",c=yield s(e,d);return Object.assign(Object.assign({rowsUpdated:u,data:d},c),{action:l})}))}};exports.createDb=createDb;
//# sourceMappingURL=orm.js.map