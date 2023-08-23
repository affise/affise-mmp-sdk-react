import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class InitialSubscriptionEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_SUBSCRIPTION_ACTIVATION,
            SubscriptionSubType.AFFISE_SUB_INITIAL_SUBSCRIPTION,
            data,
            userData,
        );
    }
}
