import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class SubscriptionInRetryEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_SUBSCRIPTION_ENTERED_BILLING_RETRY,
            SubscriptionSubType.AFFISE_SUB_SUBSCRIPTION_IN_RETRY,
            data,
            userData,
        );
    }
}
