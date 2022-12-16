import {BaseSubscriptionEvent} from "./BaseSubscriptionEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class ConvertedOfferEvent extends BaseSubscriptionEvent {
    constructor(data: Record<string, unknown>, userData?: string) {
        super(
            SubscriptionParameters.AFFISE_SUBSCRIPTION_FIRST_CONVERSION,
            SubscriptionParameters.AFFISE_SUB_CONVERTED_OFFER,
            data,
            userData,
        );
    }
}
