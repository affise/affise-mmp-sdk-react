import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";
import type {AffiseSubscriptionEventProps} from "./AffiseSubscriptionEventProps";

export class ConvertedTrialFromRetryEvent extends BaseSubscriptionEvent {
    constructor(props?: AffiseSubscriptionEventProps) {
        super({
            ...props,
            type: SubscriptionEventName.AFFISE_SUBSCRIPTION_RENEWAL_FROM_BILLING_RETRY,
            subtype: SubscriptionSubType.AFFISE_SUB_CONVERTED_TRIAL_FROM_RETRY,
        });
    }
}
