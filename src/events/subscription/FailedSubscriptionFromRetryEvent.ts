import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class FailedSubscriptionFromRetryEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_CANCELLATION,
            SubscriptionParameters.AFFISE_SUB_FAILED_SUBSCRIPTION_FROM_RETRY,
            data,
            userData,
        );
    }
}
