import { BackendAsset } from "asset-type";
import { DefaultModelType, Id, Markdown, Price } from "model-types";
import { TodoOfferStatus } from "./TodoOfferStatus";
/**
 * Freelancers can offer their services for a todofile
 */
export interface TodoOffer extends DefaultModelType {
    /**
     * price the freelancer offers to do this todo
     *
     * NB: once offer is accepted, freelancer nor admin can edit the `offerPrice`
     */
    offerPrice: Price;
    personId: Id;
    todoFileId: Id;
    /**
     * mark offer as paid
     */
    isPaid?: boolean;
    status: TodoOfferStatus;
    /**
     * Any assets that are related to this offer can be placed and removed both by freelancer and admin
     */
    assets: BackendAsset[];
    /**
     * markdown of the `TodoFile` when the offer was placed or offerPrice edited
     *
     * after offer was accepted, should not be edited
     */
    offeredTodoFileMarkdown: Markdown;
    /**
     * freelancer and admin can both edit the `offeredMarkdown` freely after accepting
     *
     * since there's also still a link to the `TodoFile`, admin can also opt to edit that one because it may be applied to all offers. freelancer can't edit the original todo.
     */
    editableTodoFileMarkdown: Markdown;
}
//# sourceMappingURL=TodoOffer.d.ts.map