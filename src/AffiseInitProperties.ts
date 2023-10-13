import type {AutoCatchingType} from "./events/AutoCatchingType";

export type AffiseInitPropertiesType = {
    affiseAppId: string,
    secretKey: string,
    isProduction?: boolean,
    partParamName?: string | null,
    partParamNameToken?: string | null,
    appToken?: string | null,
    enabledMetrics?: boolean,
    autoCatchingClickEvents?: AutoCatchingType[],
};

export class AffiseInitProperties {
    affiseAppId: string;
    secretId: string;
    isProduction: boolean = true;
    partParamName?: string | null = null;
    partParamNameToken?: string | null = null;
    appToken?: string | null = null;
    enabledMetrics: boolean = false;
    autoCatchingClickEvents?: AutoCatchingType[] = [];

    constructor(
        {
            affiseAppId,
            secretKey,
            isProduction,
            partParamName,
            partParamNameToken,
            appToken,
            enabledMetrics,
            autoCatchingClickEvents
        }: AffiseInitPropertiesType
    ) {
        this.affiseAppId = affiseAppId;
        this.secretId = secretKey;

        this.partParamName = partParamName || null;
        this.partParamNameToken = partParamNameToken || null;
        this.appToken = appToken || null;
        this.autoCatchingClickEvents = autoCatchingClickEvents || [];

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
