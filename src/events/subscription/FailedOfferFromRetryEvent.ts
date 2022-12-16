import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class FailedOfferFromRetryEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_CANCELLATION,
            SubscriptionParameters.AFFISE_SUB_FAILED_OFFER_FROM_RETRY,
            data,
            userData,
        );
    }
}
