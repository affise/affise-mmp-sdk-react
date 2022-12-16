import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class TrialInRetryEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_ENTERED_BILLING_RETRY,
            SubscriptionParameters.AFFISE_SUB_TRIAL_IN_RETRY,
            data,
            userData,
        );
    }
}
