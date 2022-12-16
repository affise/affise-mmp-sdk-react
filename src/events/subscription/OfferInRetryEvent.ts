import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class OfferInRetryEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_ENTERED_BILLING_RETRY,
            SubscriptionParameters.AFFISE_SUB_OFFER_IN_RETRY,
            data,
            userData,
        );
    }
}
