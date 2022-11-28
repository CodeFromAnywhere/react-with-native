/**
 * Status of an offer to do some todolist
 *
 * - `offered`: offer placed, has not been accepted yet. freelancer can still edit offer or remove it
 * - `rejected`: offer can be rejected by admin (before accepting)
 * - `canceled`: freelancer and admin can cancel an previously accepted offer
 * - `accepted`: offer is accepted by admin
 * - `todo`: freelancer has said it still needs to be done
 * - `doing` freelancer has said it's in progress
 * - `done` freelancer said it's done
 * - `approved` approved by admin, offer should become archived
 */
export declare type TodoOfferStatus = "offered" | "rejected" | "accepted" | "todo" | "doing" | "done" | "approved";
//# sourceMappingURL=TodoOfferStatus.d.ts.map