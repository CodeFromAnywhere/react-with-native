import { MessageInstance, MessageListInstanceCreateOptions } from "twilio/lib/rest/api/v2010/account/message";
/**
 * Send sms
 *
 * Requires OS Config to have Twilio sid and auth token.
 *
 * Reqruired options: `to` and `body`
 *
 * `to` is not required, but will overwrite the one you specified in your `OsConfig`
 */
export declare const sendSms: (options: MessageListInstanceCreateOptions) => Promise<MessageInstance | undefined>;
//# sourceMappingURL=sendSms.d.ts.map