import {NativeEvent} from "../base/NativeEvent";

export class ContentItemsViewEvent extends NativeEvent {

    constructor(objects: Array<Record<string, unknown>>, userData: string) {
        super('ContentItemsView');

        this.userData = userData;
        this.serialize = {
            affise_event_content_items_view: objects,
        };
    }
}
