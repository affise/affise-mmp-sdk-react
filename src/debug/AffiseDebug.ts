import { AffiseNative } from "../native/AffiseNative";
import { DebugOnValidateCallback } from "./validate/DebugOnValidateCallback";
import { DebugOnNetworkCallback } from "./network/DebugOnNetworkCallback";
import { AffiseDebugApi } from "./AffiseDebugApi";


export class AffiseDebug implements AffiseDebugApi {
    private native: AffiseNative

    constructor(native: AffiseNative) { 
        this.native = native
    }

    /**
     * Won't work on Production
     *
     * Validate credentials
     */
    validate(callback: DebugOnValidateCallback) {
        this.native.validate(callback);
    }

    /**
     * Won't work on Production
     *
     * Show request/response data
     */
    network(callback: DebugOnNetworkCallback) {
        this.native.network(callback);
    }
    
    /**
     * Debug get version of flutter library
     */
    version(): string {
        return "1.6.35";
    }

    /**
     * Debug get version of native library Android/iOS
     */
    versionNative(): Promise<string> {
        return this.native.versionNative();
    }
}