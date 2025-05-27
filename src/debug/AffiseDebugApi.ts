import type { DebugOnValidateCallback } from "./validate/DebugOnValidateCallback";
import type { DebugOnNetworkCallback } from "./network/DebugOnNetworkCallback";


export interface AffiseDebugApi {
    /**
     * Won't work on Production
     *
     * Validate credentials
     */
    validate(callback: DebugOnValidateCallback): void;

    /**
     * Won't work on Production
     *
     * Show request/response data
     */
    network(callback: DebugOnNetworkCallback): void;
    
    /**
     * Debug get version of flutter library
     */
    version(): string;

    /**
     * Debug get version of native library Android/iOS
     */
    versionNative(): Promise<string>;
}