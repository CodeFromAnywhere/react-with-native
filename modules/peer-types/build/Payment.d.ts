/**

*/
import { RunEveryPeriodEnum } from "code-types";
import { DefaultModelType, Id, MarkdownModelType, Price, Slug, Credit } from "model-types";
/**
 * An actual payment that is being initiated, processed or happened
 */
export interface PaymentEvent extends DefaultModelType {
    personId?: Id;
    price: Price;
    status: unknown;
}
export interface PaymentSubscription extends DefaultModelType {
    personId?: Id;
    paymentPlanSlug: Slug;
    paymentPlan?: PaymentPlan;
}
/**
 * Model for one-time coupons with invalidation
 *
 * Can be filled in for any `PaymentPlan` with initial cost.
 *
 * Will not pay for the subscription cost.
 *
 * Later, this can be extended
 */
export interface PaymentCoupon extends DefaultModelType {
    /**
     * Unique code that is sent to a `Person`
     */
    couponCode: string;
    /**
     * Maximum price for the credit
     *
     * If filled in at a paymentPlan with a higher price, this will be the maximum discount.
     *
     * If filled in at a paymentPlan with a lower price, the whole coupon will still be removed
     */
    maximumPrice: Price;
    /**
     * After this date the coupon will not be valid anymore and should be removed
     */
    validUntilAt: number;
}
/**
 *
 */
export interface PaymentPlan extends MarkdownModelType {
    /**
     * If there's a one-time price, it should be filled in here.
     */
    oneTimePrice?: Price;
    intervalPrice?: Price;
    /**
     * When does the payment occur?
     *
     * Leave undefined for one-time payments
     */
    paymentInterval?: RunEveryPeriodEnum;
    /**
     * How many credit are received?
     */
    credit?: Credit;
    /**
     * Description of the plan
     */
    markdown: string;
}
//# sourceMappingURL=Payment.d.ts.map