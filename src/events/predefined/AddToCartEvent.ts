import {NativeEvent} from "../base/NativeEvent";

export class AddToCartEvent extends NativeEvent {

    constructor(addToCartObject: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('AddToCart');

        this.userData = userData;
        this.serialize = {
            affise_event_add_to_cart: addToCartObject,
            affise_event_add_to_cart_timestamp: timeStampMillis.toString()
        };
    }
}
