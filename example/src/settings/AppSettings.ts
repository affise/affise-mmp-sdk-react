import AsyncStorage from '@react-native-async-storage/async-storage';
import type { PredefinedData } from '../ui/predefined/PredefinedData';

export type AppSettingsState = {
  affiseAppId: string;
  secretKey: string;
  fbAppId: string;
  isProduction: boolean;
  domain: string;
  offlineMode: boolean;
  backgroundTracking: boolean;
  tracking: boolean;
  debugRequest: boolean;
  debugResponse: boolean;
  useCustomPredefined: boolean;
  predefinedData: PredefinedData[];
};

const storageKeys = {
  affiseAppId: 'appSettings.affiseAppId',
  secretKey: 'appSettings.secretKey',
  fbAppId: 'appSettings.fbAppId',
  isProduction: 'appSettings.isProduction',
  domain: 'appSettings.domain',
  offlineMode: 'appSettings.offlineMode',
  backgroundTracking: 'appSettings.backgroundTracking',
  tracking: 'appSettings.tracking',
  debugRequest: 'appSettings.debugRequest',
  debugResponse: 'appSettings.debugResponse',
  useCustomPredefined: 'appSettings.useCustomPredefined',
  predefinedData: 'appSettings.predefinedData',
};

const parseBoolean = (value: string | null | undefined, fallback: boolean) =>
  value == null ? fallback : value === 'true';

const parsePredefinedData = (
  value: string | null | undefined,
  fallback: PredefinedData[]
) => {
  if (value == null) {
    return fallback;
  }

  try {
    const data = JSON.parse(value);
    return Array.isArray(data) ? data : fallback;
  } catch {
    return fallback;
  }
};

export class AppSettings {
  private state: AppSettingsState = {
    affiseAppId: '129',
    secretKey: '93a40b54-6f12-443f-a250-ebf67c5ee4d2',
    fbAppId: '1111111111111111',
    isProduction: false,
    domain: 'https://tracking.affattr.com',
    offlineMode: false,
    backgroundTracking: true,
    tracking: true,
    debugRequest: false,
    debugResponse: true,
    useCustomPredefined: false,
    predefinedData: [],
  };

  get isProduction(): boolean {
    return this.state.isProduction;
  }

  async load() {
    const values = new Map(
      await AsyncStorage.multiGet(Object.values(storageKeys))
    );

    const isProduction = values.get(storageKeys.isProduction);
    const offlineMode = values.get(storageKeys.offlineMode);
    const backgroundTracking = values.get(storageKeys.backgroundTracking);
    const tracking = values.get(storageKeys.tracking);
    const debugRequest = values.get(storageKeys.debugRequest);
    const debugResponse = values.get(storageKeys.debugResponse);
    const useCustomPredefined = values.get(storageKeys.useCustomPredefined);
    const predefinedData = values.get(storageKeys.predefinedData);

    this.state = {
      ...this.state,
      affiseAppId:
        values.get(storageKeys.affiseAppId) ?? this.state.affiseAppId,
      secretKey: values.get(storageKeys.secretKey) ?? this.state.secretKey,
      fbAppId: values.get(storageKeys.fbAppId) ?? this.state.fbAppId,
      isProduction: parseBoolean(isProduction, this.state.isProduction),
      domain: values.get(storageKeys.domain) ?? this.state.domain,
      offlineMode: parseBoolean(offlineMode, this.state.offlineMode),
      backgroundTracking: parseBoolean(
        backgroundTracking,
        this.state.backgroundTracking
      ),
      tracking: parseBoolean(tracking, this.state.tracking),
      debugRequest: parseBoolean(debugRequest, this.state.debugRequest),
      debugResponse: parseBoolean(debugResponse, this.state.debugResponse),
      useCustomPredefined: parseBoolean(
        useCustomPredefined,
        this.state.useCustomPredefined
      ),
      predefinedData: parsePredefinedData(
        predefinedData,
        this.state.predefinedData
      ),
    };
  }

  async setIsProduction(isProduction: boolean) {
    this.state = {
      ...this.state,
      isProduction,
    };

    await AsyncStorage.setItem(storageKeys.isProduction, `${isProduction}`);
  }

  async setDomain(domain: string) {
    this.state = {
      ...this.state,
      domain,
    };

    await AsyncStorage.setItem(storageKeys.domain, domain);
  }

  async setOfflineMode(offlineMode: boolean) {
    this.state = {
      ...this.state,
      offlineMode,
    };

    await AsyncStorage.setItem(storageKeys.offlineMode, `${offlineMode}`);
  }

  async setBackgroundTracking(backgroundTracking: boolean) {
    this.state = {
      ...this.state,
      backgroundTracking,
    };

    await AsyncStorage.setItem(
      storageKeys.backgroundTracking,
      `${backgroundTracking}`
    );
  }

  async setTracking(tracking: boolean) {
    this.state = {
      ...this.state,
      tracking,
    };

    await AsyncStorage.setItem(storageKeys.tracking, `${tracking}`);
  }

  async setDebugRequest(debugRequest: boolean) {
    this.state = {
      ...this.state,
      debugRequest,
    };

    await AsyncStorage.setItem(storageKeys.debugRequest, `${debugRequest}`);
  }

  async setDebugResponse(debugResponse: boolean) {
    this.state = {
      ...this.state,
      debugResponse,
    };

    await AsyncStorage.setItem(storageKeys.debugResponse, `${debugResponse}`);
  }

  async setAffiseAppId(affiseAppId: string) {
    this.state = {
      ...this.state,
      affiseAppId,
    };

    await AsyncStorage.setItem(storageKeys.affiseAppId, affiseAppId);
  }

  async setSecretKey(secretKey: string) {
    this.state = {
      ...this.state,
      secretKey,
    };

    await AsyncStorage.setItem(storageKeys.secretKey, secretKey);
  }

  async setUseCustomPredefined(useCustomPredefined: boolean) {
    this.state = {
      ...this.state,
      useCustomPredefined,
    };

    await AsyncStorage.setItem(
      storageKeys.useCustomPredefined,
      `${useCustomPredefined}`
    );
  }

  async setPredefinedData(predefinedData: PredefinedData[]) {
    this.state = {
      ...this.state,
      predefinedData,
    };

    await AsyncStorage.setItem(
      storageKeys.predefinedData,
      JSON.stringify(predefinedData)
    );
  }

  toState(): AppSettingsState {
    return {
      ...this.state,
    };
  }
}

export const appSettings = new AppSettings();
