import {NativeEvent} from "../base/NativeEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class BaseSubscriptionEvent extends NativeEvent {

    protected subtype: string;
    protected data: Record<string, unknown>;

    /**
     * BaseSubscriptionEvent
     * @param type of event
     * @param subtype of event
     * @param data
     * @param userData
     */
    constructor(
        type: string,
        subtype: string,
        data: Record<string, unknown>,
        userData?: string,
    ) {
        super(type);

        this.name = type;
        this.subtype = subtype;
        this.userData = userData;
        this.data = data;

        this.serialize = data;
        this.serialize[SubscriptionParameters.AFFISE_SUBSCRIPTION_EVENT_TYPE_KEY] = subtype;
    }
}
