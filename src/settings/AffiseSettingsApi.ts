import {
    AffiseConfig
    // AutoCatchingType
} from "../index";

import type { OnInitErrorHandler } from "./OnInitErrorHandler";
import type { OnInitSuccessHandler } from "./OnInitSuccessHandler";

export interface AffiseSettingsApi { 

    /**
     * Set Affise SDK for SandBox / Production
     *
     * @param production
     */
    setProduction(production: boolean): AffiseSettingsApi

    /**
     * Set Affise SDK server domain
     * Trailing slash is irrelevant
     *
     * @param domain - server domain
     */
    setDomain(domain: string): AffiseSettingsApi

    /**
     * Only for specific use case
     *
     * @param partParamName
     */
    setPartParamName(partParamName: string): AffiseSettingsApi

    /**
     * Only for specific use case
     *
     * @param partParamNameToken
     */
    setPartParamNameToken(partParamNameToken: string): AffiseSettingsApi

    /**
     * Set appToken
     *
     * @param appToken
     */
    setAppToken(appToken: string): AffiseSettingsApi

    /**
     * Set list of AutoCatchingType
     *
     * @param autoCatchingClickEvents
     */
    // setAutoCatchingClickEvents(autoCatchingClickEvents: AutoCatchingType[]): AffiseSettingsApi

    /**
     * Set Metrics enable
     *
     * @param enable
     */
    // setEnabledMetrics(enable: boolean): AffiseSettingsApi

    /**
     * Set OnInitSuccessHandler
     */
    setOnInitSuccess(onInitSuccessHandler: OnInitSuccessHandler): AffiseSettingsApi

    /**
     * Set OnInitErrorHandler
     */
    setOnInitError(onInitErrorHandler: OnInitErrorHandler): AffiseSettingsApi
    /**
     * Set configValue
     */
    setConfigValue(key: AffiseConfig, value: any): AffiseSettingsApi

    /**
     * Set configValue
     */
    setConfigValues(values: Record<AffiseConfig, any>): AffiseSettingsApi

    /**
     * Starts Affise SDK
     */
    start(): void;
}