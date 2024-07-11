import type {AffiseSubscriptionEventProps} from "./AffiseSubscriptionEventProps";

export interface AffiseCustomSubscriptionEventProps extends AffiseSubscriptionEventProps{
    type: string,
    subtype: string,
}
