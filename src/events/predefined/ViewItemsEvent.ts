import {NativeEvent} from "../base/NativeEvent";

export class ViewItemsEvent extends NativeEvent {

    constructor(items: Array<Record<string, unknown>>, userData: string) {
        super('ViewItems');

        this.userData = userData;
        this.serialize = {
            affise_event_view_items: items,
        };
    }
}
