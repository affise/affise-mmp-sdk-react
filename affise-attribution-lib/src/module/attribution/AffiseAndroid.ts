import { Platform } from "react-native";
import type { AffiseNative } from "../../native/AffiseNative";
import type { AffiseAndroidApi } from "./AffiseAndroidApi";

export class AffiseAndroid implements AffiseAndroidApi { 

    private native: AffiseNative

    constructor(native: AffiseNative) {
        this.native = native
    }
    
    /**
     * Erases all user data from mobile and sends [GDPREvent]
     */
    forget(userData: string) {
        if (Platform.OS !== 'android') return;
        this.native.forget(userData);
    }

    crashApplication() {
        if (Platform.OS !== 'android') return;
        this.native.crashApplication();
    }
}