import type { AffiseHasModule } from "../AffiseHasModule";

export interface AffiseModuleAdvertisingApi extends AffiseHasModule {
    /**
     * iOS only
     * Start Advertising module
     */
    startModule(): void;
}
