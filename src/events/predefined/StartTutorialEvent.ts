import {NativeEvent} from "../base/NativeEvent";

export class StartTutorialEvent extends NativeEvent {

    constructor(tutorial: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('StartTutorial');

        this.userData = userData;
        this.serialize = {
            affise_event_start_tutorial: tutorial,
            affise_event_start_tutorial_timestamp: timeStampMillis.toString()
        };
    }
}
