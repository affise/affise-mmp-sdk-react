import type {AutoCatchingType} from "./events/AutoCatchingType";

export type AffiseInitPropertiesType = {
    /// AffiseAppId
    affiseAppId: string,
    /// SDK secretKey
    secretKey: string,
    /// SandBox / Production
    isProduction?: boolean,
    /// Only for specific use case
    partParamName?: string | null,
    /// Only for specific use case
    partParamNameToken?: string | null,
    /// appToken
    appToken?: string | null,
    /// Metrics enable
    enabledMetrics?: boolean,
    /// list of AutoCatchingType
    autoCatchingClickEvents?: AutoCatchingType[],
    /// SDK server domain
    domain?: string | null,
};

export class AffiseInitProperties {
    affiseAppId: string;
    secretKey: string;
    isProduction: boolean = true;
    partParamName?: string | null = null;
    partParamNameToken?: string | null = null;
    appToken?: string | null = null;
    enabledMetrics: boolean = false;
    autoCatchingClickEvents?: AutoCatchingType[] = [];
    domain?: string | null = null;

    constructor(
        {
            affiseAppId,
            secretKey,
            isProduction,
            partParamName,
            partParamNameToken,
            appToken,
            enabledMetrics,
            autoCatchingClickEvents,
            domain
        }: AffiseInitPropertiesType
    ) {
        this.affiseAppId = affiseAppId;
        this.secretKey = secretKey;

        this.partParamName = partParamName || null;
        this.partParamNameToken = partParamNameToken || null;
        this.appToken = appToken || null;
        this.autoCatchingClickEvents = autoCatchingClickEvents || [];
        this.domain = domain || null;

        if (isProduction != null) {
            this.isProduction = isProduction;
        }
        if (enabledMetrics != null) {
            this.enabledMetrics = enabledMetrics;
        }
    }
}

export function isAffiseInitPropertiesType(obj: any): obj is AffiseInitPropertiesType {
    if (obj as AffiseInitPropertiesType) {
        return true;
    }
    return false;
}
