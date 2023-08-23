import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class ReactivatedSubscriptionEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_SUBSCRIPTION_REACTIVATION,
            SubscriptionSubType.AFFISE_SUB_REACTIVATED_SUBSCRIPTION,
            data,
            userData,
        );
    }
}
