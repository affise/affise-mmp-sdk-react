import { AffiseNative } from "../native/AffiseNative";
import {
    AffiseInitProperties,
    AffiseConfig
    // AutoCatchingType
} from "../index";

import type { OnInitErrorHandler } from "./OnInitErrorHandler";
import type { OnInitSuccessHandler } from "./OnInitSuccessHandler";
import { AffiseSettingsApi } from "./AffiseSettingsApi";

export class AffiseSettings implements AffiseSettingsApi {
    private native: AffiseNative
    private readonly affiseAppId: string;
    private readonly secretKey: string;
    private isProduction: boolean = true;
    private partParamName?: string | null = null;
    private partParamNameToken?: string | null = null;
    private appToken?: string | null = null;
    // private enabledMetrics: boolean = false;
    // private autoCatchingClickEvents?: AutoCatchingType[] = [];
    private domain?: string | null = null;
    private onInitSuccessHandler?: OnInitSuccessHandler | null = null;
    private onInitErrorHandler?: OnInitErrorHandler | null = null;
    private configValues: Record<string, any> = {};

    /**
     * Affise SDK settings
     *
     * @param affiseAppId - your app id
     * @param secretKey - your SDK secretKey
     */
    constructor(native: AffiseNative, affiseAppId: string, secretKey: string) {
        this.native = native;
        this.affiseAppId = affiseAppId;
        this.secretKey = secretKey;
    }

    /**
     * Set Affise SDK for SandBox / Production
     *
     * @param production
     */
    setProduction(production: boolean): AffiseSettingsApi {
        this.isProduction = production;
        return this;
    }

    /**
     * Set Affise SDK server domain
     * Trailing slash is irrelevant
     *
     * @param domain - server domain
     */
    setDomain(domain: string): AffiseSettingsApi {
        this.domain = domain;
        return this;
    }

    /**
     * Only for specific use case
     *
     * @param partParamName
     */
    setPartParamName(partParamName: string): AffiseSettingsApi {
        this.partParamName = partParamName;
        return this;
    }

    /**
     * Only for specific use case
     *
     * @param partParamNameToken
     */
    setPartParamNameToken(partParamNameToken: string): AffiseSettingsApi {
        this.partParamNameToken = partParamNameToken;
        return this;
    }

    /**
     * Set appToken
     *
     * @param appToken
     */
    setAppToken(appToken: string): AffiseSettingsApi {
        this.appToken = appToken;
        return this;
    }

    /**
     * Set list of AutoCatchingType
     *
     * @param autoCatchingClickEvents
     */
    // setAutoCatchingClickEvents(autoCatchingClickEvents: AutoCatchingType[]): AffiseSettingsApi {
    //     this.autoCatchingClickEvents = autoCatchingClickEvents;
    //     return this;
    // }

    /**
     * Set Metrics enable
     *
     * @param enable
     */
    // setEnabledMetrics(enable: boolean): AffiseSettingsApi {
    //     this.enabledMetrics = enable;
    //     return this;
    // }

    /**
     * Set OnInitSuccessHandler
     */
    setOnInitSuccess(onInitSuccessHandler: OnInitSuccessHandler): AffiseSettingsApi {
        this.onInitSuccessHandler = onInitSuccessHandler;
        return this;
    }

    /**
     * Set OnInitErrorHandler
     */
    setOnInitError(onInitErrorHandler: OnInitErrorHandler): AffiseSettingsApi {
        this.onInitErrorHandler = onInitErrorHandler;
        return this;
    }
    /**
     * Set configValue
     */
    setConfigValue(key: AffiseConfig, value: any): AffiseSettingsApi {
        this.configValues[key] = value;
        return this;
    }

    /**
     * Set configValue
     */
    setConfigValues(values: Record<AffiseConfig, any>): AffiseSettingsApi {
        Object.entries(values).forEach(([key, value]) => { 
            this.configValues[key] = value;
        })
        return this;
    }

    private getInitProperties(): AffiseInitProperties {
        return new AffiseInitProperties({
            affiseAppId: this.affiseAppId,
            secretKey: this.secretKey,
            isProduction: this.isProduction,
            partParamName: this.partParamName,
            partParamNameToken: this.partParamNameToken,
            appToken: this.appToken,
            // enabledMetrics: this.enabledMetrics,
            // autoCatchingClickEvents: this.autoCatchingClickEvents,
            domain: this.domain,
            onInitSuccessHandler: this.onInitSuccessHandler,
            onInitErrorHandler: this.onInitErrorHandler,
            configStrings: this.configValues,
        });
    }

    /**
     * Starts Affise SDK
     */
    start() {
        this.native.init(this.getInitProperties());
    }
}
