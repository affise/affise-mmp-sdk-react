import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class FailedTrialEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_CANCELLATION,
            SubscriptionParameters.AFFISE_SUB_FAILED_TRIAL,
            data,
            userData,
        );
    }
}
