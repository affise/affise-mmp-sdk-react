import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";
import type {AffiseSubscriptionEventProps} from "./AffiseSubscriptionEventProps";

export class UnsubscriptionEvent extends BaseSubscriptionEvent {
    constructor(props?: AffiseSubscriptionEventProps) {
        super({
            ...props,
            type: SubscriptionEventName.AFFISE_UNSUBSCRIPTION,
            subtype: SubscriptionSubType.AFFISE_SUB_UNSUBSCRIPTION,
        });
    }
}
