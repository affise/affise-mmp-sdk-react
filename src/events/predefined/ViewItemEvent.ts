import {NativeEvent} from "../base/NativeEvent";

export class ViewItemEvent extends NativeEvent {

    constructor(item: Record<string, unknown>, userData: string) {
        super('ViewItem');

        this.userData = userData;
        this.serialize = {
            affise_event_view_item: item,
        };
    }
}
