import {NativeEvent} from "../base/NativeEvent";

export class CompleteTutorialEvent extends NativeEvent {

    constructor(tutorial: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('CompleteTutorial');

        this.userData = userData;
        this.serialize = {
            affise_event_complete_tutorial: tutorial,
            affise_event_complete_tutorial_timestamp: timeStampMillis.toString()
        };
    }
}
