import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class RenewedSubscriptionEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_RENEWAL,
            SubscriptionParameters.AFFISE_SUB_RENEWED_SUBSCRIPTION,
            data,
            userData,
        );
    }
}
