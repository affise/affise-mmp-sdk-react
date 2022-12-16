import {NativeEvent} from "../base/NativeEvent";

export class CompleteStreamEvent extends NativeEvent {

    constructor(stream: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('CompleteStream');

        this.userData = userData;
        this.serialize = {
            affise_event_complete_stream: stream,
            affise_event_complete_stream_timestamp: timeStampMillis.toString()
        };
    }
}
