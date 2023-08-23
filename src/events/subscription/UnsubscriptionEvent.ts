import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class UnsubscriptionEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_UNSUBSCRIPTION,
            SubscriptionSubType.AFFISE_SUB_UNSUBSCRIPTION,
            data,
            userData,
        );
    }
}
