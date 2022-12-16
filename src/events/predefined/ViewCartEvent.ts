import {NativeEvent} from "../base/NativeEvent";

export class ViewCartEvent extends NativeEvent {

    constructor(objects: Record<string, unknown>, userData: string) {
        super('ViewCart');

        this.userData = userData;
        this.serialize = {
            affise_event_view_cart: objects,
        };
    }
}
