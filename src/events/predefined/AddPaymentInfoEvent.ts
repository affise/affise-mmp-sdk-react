import {NativeEvent} from "../base/NativeEvent";

export class AddPaymentInfoEvent extends NativeEvent {

    constructor(paymentInfo: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('AddPaymentInfo');

        this.userData = userData;
        this.serialize = {
            affise_event_add_payment_info: paymentInfo,
            affise_event_add_payment_info_timestamp: timeStampMillis.toString()
        };
    }
}
