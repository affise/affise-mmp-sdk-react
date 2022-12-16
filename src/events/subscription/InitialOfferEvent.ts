import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class InitialOfferEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_ACTIVATION,
            SubscriptionParameters.AFFISE_SUB_INITIAL_OFFER,
            data,
            userData,
        );
    }
}
