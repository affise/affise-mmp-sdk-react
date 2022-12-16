import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class InitialTrialEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_ACTIVATION,
            SubscriptionParameters.AFFISE_SUB_INITIAL_TRIAL,
            data,
            userData,
        );
    }
}
