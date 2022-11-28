import { TsComment } from "code-types";
import { Creation } from "model-types";
import { Expression, Statement, VariableDeclaration } from "ts-morph";
/**
 * gets all leading comments and trailing comments raw text, put together, separated with newlines
 */
export declare const getAllComments: (tsMorphNode: VariableDeclaration | Statement | Expression, fileContent: string, operationRelativeTypescriptFilePath: string) => Creation<TsComment>[];
//# sourceMappingURL=getAllComments.d.ts.map