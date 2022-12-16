import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class RenewedSubscriptionFromRetryEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_RENEWAL_FROM_BILLING_RETRY,
            SubscriptionParameters.AFFISE_SUB_RENEWED_SUBSCRIPTION_FROM_RETRY,
            data,
            userData,
        );
    }
}
