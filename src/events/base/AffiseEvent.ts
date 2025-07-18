import {ToValue} from "../parameters/Predefined";
import type {PredefinedParameter} from "../parameters/PredefinedParameter";
import type {PredefinedListObject} from "../parameters/PredefinedListObject";
import type {PredefinedFloat} from "../parameters/PredefinedFloat";
import type {PredefinedListString} from "../parameters/PredefinedListString";
import type {PredefinedLong} from "../parameters/PredefinedLong";
import type {PredefinedObject} from "../parameters/PredefinedObject";
import type {PredefinedString} from "../parameters/PredefinedString";
// import {PredefinedGroup} from "../parameters/PredefinedGroup";
import {Parameters} from "../Parameters";
import {timestamp} from "../../utils/Timestamp";
import { Affise } from "../../index";
import type {OnSendSuccessCallback} from "../OnSendSuccessCallback";
import type {OnSendFailedCallback} from "../OnSendFailedCallback";

/**
 * Base event
 */
export class AffiseEvent implements PredefinedParameter {

    /**
     * Name of event
     */
    protected name: string;

    /**
     * Category of event
     */
    protected category: string;

    /**
     * User data
     */
    protected userData?: string;

    /**
     * Is first for user, default false
     */
    protected firstForUser: boolean;

    /**
     * Serialize event
     */
    protected serialize: Record<string, unknown>;

    /**
     * Event predefined parameters
     */
    protected predefinedParameters: Record<string, unknown>;

    constructor(name: string, userData?: string | null) {
        this.name = name;
        this.category = "";
        this.userData = userData || undefined;
        this.firstForUser = false;
        this.serialize = {};
        this.predefinedParameters = {};
    }

    /**
     * Add predefined [parameter] with [value] of number to event
     */
    addPredefinedFloat(parameter: PredefinedFloat, value: number): AffiseEvent {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of Array<Record<string, unknown>> to event
     */
    addPredefinedListObject(parameter: PredefinedListObject, value: Record<string, unknown>[]): AffiseEvent {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of Array<string> to event
     */
    addPredefinedListString(parameter: PredefinedListString, value: string[]): AffiseEvent {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of BigInteger to event
     */
    addPredefinedLong(parameter: PredefinedLong, value: bigint): AffiseEvent {
        this.predefinedParameters[ToValue(parameter)] = Number(value);
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of Record<string, unknown> to event
     */
    addPredefinedObject(parameter: PredefinedObject, value: Record<string, unknown>): AffiseEvent {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of string to event
     */
    addPredefinedString(parameter: PredefinedString, value: string): AffiseEvent {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of Array<PredefinedGroup> to event
     */
    // PredefinedGroup
    // addPredefinedListGroup(groups: Array<PredefinedGroup>): AffiseEvent {
    //     if (!this.predefinedParameters[PredefinedGroup.NAME]) {
    //         this.predefinedParameters[PredefinedGroup.NAME] = [];
    //     }
    //     const data = this.predefinedParameters[PredefinedGroup.NAME] as Array<Record<string, unknown>>;
    //     for (const group of groups) {
    //         data.push(group.getPredefinedParameters());
    //     }
    //     return this;
    // }

    /**
     * Store and send this event
     */
    send() {
        Affise.sendEvent(this);
    }

    /**
     * Send this event now
     */
    sendNow(success: OnSendSuccessCallback, failed: OnSendFailedCallback) {
        Affise.sendEventNow(this, success, failed);
    }

    /**
     * Get predefined parameter
     */
    getPredefinedParameters(): Record<string, unknown> {
        return this.predefinedParameters;
    }

    toRecord(): Record<string, any> {
        return {
            [Parameters.AFFISE_EVENT_NAME]: this.name,
            [Parameters.AFFISE_EVENT_CATEGORY]: this.category,
            [Parameters.AFFISE_EVENT_TIMESTAMP]: timestamp(),
            [Parameters.AFFISE_EVENT_FIRST_FOR_USER]: this.firstForUser,
            [Parameters.AFFISE_EVENT_USER_DATA]: this.userData,
            [Parameters.AFFISE_EVENT_DATA]: this.serialize,
            [Parameters.AFFISE_PARAMETERS]: this.getPredefinedParameters(),
        };
    }
}
