"use strict";var __awaiter=this&&this.__awaiter||function(t,e,n,i){return new(n||(n=Promise))((function(o,a){function r(t){try{c(i.next(t))}catch(t){a(t)}}function s(t){try{c(i.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,s)}c((i=i.apply(t,e||[])).next())}))};Object.defineProperty(exports,"__esModule",{value:!0}),exports.test=void 0;const make_test_1=require("make-test");
// this file contains the actual models to test if creating the db objects works as expected.
// import { execSync } from "child_process";
// const logLength = (obj: { [key: string]: any[] }) => {
//   console.log(Object.keys(obj).map((key) => `${key}: ${obj[key].length}`));
// };
exports.test=(0,make_test_1.makeTest)((()=>__awaiter(void 0,void 0,void 0,(function*(){
// const tokiArray = await get("Toki");
// const allExports = await get("Export");
// const operationExports = await get("Export", {
//   operation: "index-typescript",
// });
// const operationFileExports = await get("Export", {
//   operation: "index-typescript",
//   operationIndexFiles: ["testFile.json"],
// });
// logLength({ allExports, operationExports, operationFileExports });
// tokiArray.forEach((line, index) => {
//   const nlVoice = Math.floor(index / 3) % 2 === 0 ? "Ellen" : "Xander";
//   const enVoice = Math.floor(index / 3) % 2 === 0 ? "Tessa" : "Alex";
//   if (index % 5 === 4) {
//     execSync(`say -v ${nlVoice} 'Lekker bezig Bruna, ga zo door.'`);
//   }
//   execSync(
//     `say -v ${enVoice} "${
//       index === 0 ? "How to say this" : "And what about this"
//     } Bruna?.... ${
//       line.en
//     }." && say -v Rishi "In toki pona you can say..... ${line.tok}, ${
//       line.tok
//     }, ${line.tok}" && sleep 4 && say -v ${nlVoice} -r 120 "het is: ${
//       line.nl
//     }, ${line.nl} ${line.nl}...." && say -v ${nlVoice} "nu jij!" && sleep 4`
//   );
// });
// await db.push("Comment", {
//   filePath: "test",
//   firstLine: 0,
//   lastLine: 100,
//   markdown: "wow",
//   type: "idea",
// });
// const jsonAfter = await db.get("Comment");
// console.log({ jsonAfter });
}))));
//# sourceMappingURL=test.js.map