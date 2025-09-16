import { Platform } from "react-native";
import type { AffiseNative } from "../../native/AffiseNative";
import { isModuleInit } from "../AffiseHasModule";
import { AffiseModules } from "../AffiseModules";
import type { AffiseModuleAdvertisingApi } from "./AffiseModuleAdvertisingApi";

export class AffiseAdvertising implements AffiseModuleAdvertisingApi {
    private readonly native: AffiseNative

    constructor(native: AffiseNative) {
        this.native = native
    }

    /**
     * iOS only
     * Start Advertising module
     */
    startModule() {
        if (Platform.OS !== 'ios') return;
        this.native.advertisingStartModule()
    }

    hasModule(): Promise<boolean> {
        return isModuleInit(this.native, AffiseModules.ADVERTISING)
    }
}
