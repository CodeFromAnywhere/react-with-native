/**
 * ---
 * runEveryPeriod: midnight
 * ---
 *
 *
 * All temporary assets that were created more than 24 hours ago and are still there, will be removed by this function.
 *
 * This allows us to easily delete assets without concequences and also if the user closes a form without submitting it, these assets uploaded will go away.
 *
 * This function should be executed using a daily CRON
 */
export declare const removeOldTemporaryAssets: () => Promise<{
    removedAmount: number;
}>;
//# sourceMappingURL=removeOldTemporaryAssets.d.ts.map