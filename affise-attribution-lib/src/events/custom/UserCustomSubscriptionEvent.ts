import {BaseSubscriptionEvent} from "../subscription/BaseSubscriptionEvent";
import type {AffiseCustomSubscriptionEventProps} from "../subscription/AffiseCustomSubscriptionEventProps";

/**
 * UserCustomSubscriptionEvent
 *
 * @param type custom event type.
 * @param subtype custom event sub type.
 * @param data any custom object data.
 * @param userData any custom string data.
 */
export class UserCustomSubscriptionEvent extends BaseSubscriptionEvent {
    constructor(props: AffiseCustomSubscriptionEventProps) {
        super(props);
    }
}
