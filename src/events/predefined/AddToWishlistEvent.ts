import {NativeEvent} from "../base/NativeEvent";

export class AddToWishlistEvent extends NativeEvent {

    constructor(wishList: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('AddToWishlist');

        this.userData = userData;
        this.serialize = {
            affise_event_add_to_wishlist: wishList,
            affise_event_add_to_wishlist_timestamp: timeStampMillis.toString()
        };
    }
}
