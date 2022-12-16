import {NativeEvent} from "../base/NativeEvent";

export class InitiateStreamEvent extends NativeEvent {

    constructor(stream: Record<string, unknown>, timeStampMillis: number, userData: string) {
        super('InitiateStream');

        this.userData = userData;
        this.serialize = {
            affise_event_initiate_stream: stream,
            affise_event_initiate_stream_timestamp: timeStampMillis.toString()
        };
    }
}
