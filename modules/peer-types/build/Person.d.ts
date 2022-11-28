import { Authorization } from "auth-types";
import { Credit, DefaultModelType, Slug } from "model-types";
import { BackendAsset } from "asset-type";
import { AuthenticationMethod, AuthenticationMethodMethod } from "./AuthenticationMethjod";
import { Device } from "./Device";
import { Group } from "./Group";
import { PersonInformationValue } from "./PersonInformationValue";
import { PersonSocialMedia } from "./PersonSocialMedia";
/**
 * Can be seen for every person, without authentication
 *
 * NB: I wish it were possible to ensure these keys exist on the person here, but we can't validate that while still keeping it a const I guess
 */
export declare const publicPersonKeys: readonly ["name", "slug", "id", "pictureImage", "interestSlugs", "media", "preferredContactMedium", "groupSlugs", "operationName", "projectRelativePath"];
export declare type PublicPersonKeys = typeof publicPersonKeys[number];
export declare type PublicPerson = Pick<Person, PublicPersonKeys>;
/**
 * Model to describe a human person. This model gathers and stores all persons around the world, except for yourself. Kind of a user-like model...
 *
 *
 * The data inside this model is coming from the `Person` itself but also from the owner of the OS server. It should be possible for the person to automatically push information into any of their instances on any server, but the OS owner can augment this.
 *
 * NB: This is a `DefaultModelType`, which means name and slug need not to be unique, but it is highly preferred.
 */
export interface Person extends DefaultModelType {
    name: string;
    slug: string;
    pictureImage?: BackendAsset;
    /**
     * slugs of interest categories that this person should be notified about.
     *
     * Since this is a hierarchical model, parent interests will ensure all children are also applied.
     */
    interestSlugs?: Slug[];
    /**
     * Media that is attached to this person.
     *
     * NB: not used to authenticate! Can be filled in by King OS, might be erroneous
     */
    media?: PersonSocialMedia[];
    preferredContactMedium?: Slug;
    dataEntries?: PersonInformationValue[];
    /**
     * Devices can be attached to a person by looking in the device model and finding the devices that refer to this person
     *
     * Among other things, this can be used to determine the `Person` location
     */
    devicesCalculated?: Device[];
    /**
     * Methods that can be used to identify yourself as being this user
     *
     * Should be set up by the user either when registering, or in settings, to provide more methods.
     *
     * NB: It's important to note that a `Person` should not be able to add credentials that are already added by another person. This means that, when adding such a method, all `Person`s need to be searched!
     */
    authenticationMethods: AuthenticationMethod[];
    /**
     * To which groups does this person belong?
     *
     * This determines additional authorizations
     *
     * Can be set on signup, but can always be edited by admin
     */
    groupSlugs?: Slug[];
    groups?: Group[];
    /**
     * Which custom authorizations does this `Person` have?
     */
    authorizations?: Authorization[];
    /**
     * By default, one is enough, but if this is defined, the user needs to use this amount of authentication methods before he/she is authenticated. Must be at least one
     */
    amountAuthenticationMethodsRequired?: number;
    /**
     * Optionally, the user can setup for themselves which authentication methods they require for themselves to authenticate on another device
     */
    requiredAuthenticationMethods?: AuthenticationMethodMethod[];
    /**
     * For now this can be a stripe token, stored for this "customer". Handy to connect the customer to the Person. Later this can become an array of multiple credentials, for example if you want to add multiple creditcards.
     */
    paymentAuthToken?: string;
    /**
     * Actions by the `Person` can create changes in the amount of credits
     *
     * The exact meaning of the number of credits is determined by the OS settings. Can for example be 1:1 to euro, 1:1 to bitcoin, or a custom credit system. Transferability is also customisable.
     *
     * Insufficient credit can limit the persons possibilities within the OS
     */
    credit?: Credit;
}
//# sourceMappingURL=Person.d.ts.map