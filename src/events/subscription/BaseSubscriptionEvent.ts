import {NativeEvent} from "../base/NativeEvent";
import {SubscriptionParameters} from "./SubscriptionParameters";

export class BaseSubscriptionEvent extends NativeEvent {

    protected subtype: string;
    protected data: Record<string, unknown>;

    constructor(
        type: string,
        subtype: string,
        data: Record<string, unknown>,
        userData?: string,
    ) {
        super(type, userData);
        this.subtype = subtype;
        this.data = data;

        const serialize = this.serializeBuilder()
            .addRaw(SubscriptionParameters.AFFISE_SUBSCRIPTION_EVENT_TYPE_KEY, subtype);

        for (const dataKey in data) {
            serialize.addRaw(dataKey, data[dataKey]);
        }

        this.serialize = serialize
            .build();
    }
}
