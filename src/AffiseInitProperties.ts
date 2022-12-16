import type {AutoCatchingType} from "./events/AutoCatchingType";

export class AffiseInitProperties {
  affiseAppId: string;
  isProduction: boolean;
  partParamName: string;
  partParamNameToken: string;
  appToken: string;
  secretId: string;
  enabledMetrics: boolean;
  autoCatchingClickEvents?: AutoCatchingType[];

  constructor(
    affiseAppId: string,
    isProduction: boolean = true,
    partParamName: string,
    partParamNameToken: string,
    appToken: string,
    secretId: string,
    enabledMetrics: boolean = false,
    autoCatchingClickEvents: AutoCatchingType[] = []
  ) {
    this.affiseAppId = affiseAppId;
    this.isProduction = isProduction;
    this.partParamName = partParamName;
    this.partParamNameToken = partParamNameToken;
    this.appToken = appToken;
    this.secretId = secretId;
    this.enabledMetrics = enabledMetrics;
    this.autoCatchingClickEvents = autoCatchingClickEvents;
  }
}
