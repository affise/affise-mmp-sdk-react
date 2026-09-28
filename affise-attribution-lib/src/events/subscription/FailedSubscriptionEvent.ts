import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";
import type {AffiseSubscriptionEventProps} from "./AffiseSubscriptionEventProps";

export class FailedSubscriptionEvent extends BaseSubscriptionEvent {
    constructor(props?: AffiseSubscriptionEventProps) {
        super({
            ...props,
            type: SubscriptionEventName.AFFISE_SUBSCRIPTION_CANCELLATION,
            subtype: SubscriptionSubType.AFFISE_SUB_FAILED_SUBSCRIPTION,
        });
    }
}
