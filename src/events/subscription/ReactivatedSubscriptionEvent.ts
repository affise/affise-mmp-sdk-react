import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class ReactivatedSubscriptionEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_REACTIVATION,
            SubscriptionParameters.AFFISE_SUB_REACTIVATED_SUBSCRIPTION,
            data,
            userData,
        );
    }
}
