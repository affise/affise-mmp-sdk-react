import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class RenewedSubscriptionEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_SUBSCRIPTION_RENEWAL,
            SubscriptionSubType.AFFISE_SUB_RENEWED_SUBSCRIPTION,
            data,
            userData,
        );
    }
}
