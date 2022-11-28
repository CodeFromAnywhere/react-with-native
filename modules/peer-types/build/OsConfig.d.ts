import { Id } from "model-types";
/**
 * Configuration to be set by the OS owner
 *
 * Should be stored in `os.json` or something in the project-root.
 */
export declare type OsConfig = {
    /**
     * who are you?
     */
    me_personId?: Id;
    /**
     * NB: should have a custom input in the `SimplifiedSchemaForm`
     */
    stripeSecret?: string;
    twilioAccountSid?: string;
    twilioAuthToken?: string;
    /**
     * Provide the phone number you are using by default for sending SMS messages
     */
    twilioFromPhoneNumber?: string;
    sendgridApiKey?: string;
    sendgridFromEmail?: string;
};
//# sourceMappingURL=OsConfig.d.ts.map