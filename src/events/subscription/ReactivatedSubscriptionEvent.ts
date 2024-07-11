import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";
import type {AffiseSubscriptionEventProps} from "./AffiseSubscriptionEventProps";

export class ReactivatedSubscriptionEvent extends BaseSubscriptionEvent {
    constructor(props?: AffiseSubscriptionEventProps) {
        super({
            ...props,
            type: SubscriptionEventName.AFFISE_SUBSCRIPTION_REACTIVATION,
            subtype: SubscriptionSubType.AFFISE_SUB_REACTIVATED_SUBSCRIPTION,
        });
    }
}
