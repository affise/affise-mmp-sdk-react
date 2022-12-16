import {NativeEvent} from "../base/NativeEvent";

export class DeepLinkedEvent extends NativeEvent {

    constructor(isLinked: boolean, userData: string) {
        super('DeepLinked');

        this.userData = userData;
        this.serialize = {
            affise_event_deep_linked: isLinked,
        };
    }
}
