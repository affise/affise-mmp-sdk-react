import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";
import type {AffiseSubscriptionEventProps} from "./AffiseSubscriptionEventProps";

export class SubscriptionInRetryEvent extends BaseSubscriptionEvent {
    constructor(props?: AffiseSubscriptionEventProps) {
        super({
            ...props,
            type: SubscriptionEventName.AFFISE_SUBSCRIPTION_ENTERED_BILLING_RETRY,
            subtype: SubscriptionSubType.AFFISE_SUB_SUBSCRIPTION_IN_RETRY,
        });
    }
}
