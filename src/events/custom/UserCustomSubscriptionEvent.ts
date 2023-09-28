import {BaseSubscriptionEvent} from "../subscription/BaseSubscriptionEvent";

export class UserCustomSubscriptionEvent extends BaseSubscriptionEvent {
    constructor({type, subtype, data, userData}: { type: string, subtype: string, data: Record<string, unknown>, userData?: string }) {
        super(
            type,
            subtype,
            data,
            userData,
        );
    }
}
