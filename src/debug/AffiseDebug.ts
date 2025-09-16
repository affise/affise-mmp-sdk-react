import type { AffiseNative } from "../native/AffiseNative";
import type { DebugOnValidateCallback } from "./validate/DebugOnValidateCallback";
import type { DebugOnNetworkCallback } from "./network/DebugOnNetworkCallback";
import type { AffiseDebugApi } from "./AffiseDebugApi";


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
        return "1.6.41";
    }

    /**
     * Debug get version of native library Android/iOS
     */
    versionNative(): Promise<string> {
        return this.native.versionNative();
    }
}