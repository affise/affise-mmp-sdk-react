import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionEventName} from "./SubscriptionEventName";
import {SubscriptionSubType} from "./SubscriptionSubType";

export class FailedTrialFromRetryEvent extends BaseSubscriptionEvent {
    constructor({data, userData}: { data: Record<string, unknown>, userData?: string }) {
        super(
            SubscriptionEventName.AFFISE_SUBSCRIPTION_CANCELLATION,
            SubscriptionSubType.AFFISE_SUB_FAILED_TRIAL_FROM_RETRY,
            data,
            userData,
        );
    }
}
