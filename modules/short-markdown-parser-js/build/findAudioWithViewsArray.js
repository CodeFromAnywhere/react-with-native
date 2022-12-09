"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.findAudioWithViewsArray=void 0;var fs_util_js_1=require("fs-util-js"),js_util_1=require("js-util"),marked_util_1=require("marked-util"),findAudioWithViewsArray=function(e,i,t){var u=(0,marked_util_1.findEmbeds)(e).filter((function(e){return(0,fs_util_js_1.isPathRelative)(e.src)})).filter((function(e){return"other"!==e.type&&"text"!==e.type})),r=[{audioPath:null,viewEmbeds:[t?{title:t,audioKey:"audio".concat(i,".0")}:void 0].filter(js_util_1.notEmpty),audioKey:"audio".concat(i,".0")}];return u.reduce((function(e,t,u){
// Create a new item in the AudioWithViews for a new audio
if("audio"===t.type)return e.push({audioPath:t.src,viewEmbeds:[],audioKey:"audio".concat(i,".").concat(u)}),e;
// If a view is encountered, add it to the viewEmbeds array
if("image"===t.type||"video"===t.type){var r="&quot;",a=t.alt.startsWith(r)&&t.alt.endsWith(r);if(a){
// add new one because this has a spokentext.
var o=a?t.alt.substring(r.length,t.alt.length-r.length):void 0,d="audio".concat(i,".").concat(u);e.push({audioPath:null,viewEmbeds:[{viewPath:t.src,audioKey:d,spokenText:o}],audioKey:d})}else
// attach to the lastone
e[e.length-1].viewEmbeds.push({viewPath:t.src,audioKey:e[e.length-1].audioKey,spokenText:void 0})}
// Do nothing for other types
return e}),r)};exports.findAudioWithViewsArray=findAudioWithViewsArray;
//# sourceMappingURL=findAudioWithViewsArray.js.map