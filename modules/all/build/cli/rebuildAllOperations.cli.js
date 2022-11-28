#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var rebuildAllOperations_1=require("../rebuildAllOperations"),_a=process.argv.slice(2),debug=_a[0],force=_a[1];(0,rebuildAllOperations_1.rebuildAllOperations)(!!debug&&Boolean(debug),!!force&&Boolean(force));
//# sourceMappingURL=rebuildAllOperations.cli.js.map