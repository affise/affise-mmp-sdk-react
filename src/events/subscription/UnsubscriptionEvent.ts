import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class UnsubscriptionEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_UNSUBSCRIPTION,
            SubscriptionParameters.AFFISE_SUB_UNSUBSCRIPTION,
            data,
            userData,
        );
    }
}
