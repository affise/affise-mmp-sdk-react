import {Affise, AffiseModules, ProviderType, ReferrerKey, SKAdNetwork} from "affise-attribution-lib";
import {Alert} from "react-native";

export interface api {
    title: string,
    call: (() => void),
}

export class ApiFactory {
    private readonly output?: ((text: string) => void);

    constructor(output: (value: string) => void) {
        this.output = output;
    }

    callOutput(text: string) {
        console.log(text);
        if (this.output) {
            this.output(text);
        }
    }

    callAlert(title: string, message: string) {
        Alert.alert(title, message, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }

    create(): api[] {
        return [
            {
                title: "Debug: Validate credentials",
                call: () => {
                    // Debug: Validate credentials https://github.com/affise/sdk-react#validate-credentials
                    Affise.debug.validate((status) => {
                        this.callOutput(`Validate: ${status}`);
                    });
                }
            },
            {
                title: "register Deeplink Callback",
                call: () => {
                    // Deeplinks https://github.com/affise/sdk-react#deeplinks
                    Affise.registerDeeplinkCallback((value) => {
                        this.callOutput(`Deeplink: ${value}`);
                        const parameters = Object.entries(value.parameters).map(([k, v]) => `${k}=[${v.join(", ")}]`).join("; ");
                        this.callAlert("Deeplink", `${value.deeplink}\n\n` +
                            `scheme: "${value.scheme}"\n` +
                            `host: "${value.host}"\n` +
                            `path: "${value.path}"\n` +
                            `parameters: [${parameters}]`);
                    });
                }
            },
            {
                title: "get Referrer Value",
                call: () => {
                    // Get referrer parameter https://github.com/affise/sdk-react#get-referrer-value
                    Affise.getReferrerValue(ReferrerKey.CLICK_ID, (value) => {
                        this.callOutput(`ReferrerValue: ${value}`);
                    });
                }
            },
            {
                title: "get Referrer",
                call: () => {
                    // Get referrer https://github.com/affise/sdk-react#get-referrer
                    Affise.getReferrer((ref) => {
                        this.callOutput(`Referrer: ${ref}`);
                    });
                }
            },
            {
                title: "get Status",
                call: () => {
                    // Get module state https://github.com/affise/sdk-react#get-module-state
                    Affise.module.getStatus(AffiseModules.STATUS, (status) => {
                        this.callOutput(`Status: ${JSON.stringify(status)}`);
                    });
                }
            },
            {
                title: "get Modules Installed",
                call: () => {
                    // Get module state https://github.com/affise/sdk-react#modules
                    Affise.module.getModulesInstalled().then((modules) => {
                        this.callOutput(`Modules: [${modules.join(", ")}]`);
                    });
                }
            },
            {
                title: "SKAd register",
                call: () => {
                    // StoreKit Ad Network https://github.com/affise/sdk-react#storekit-ad-network
                    Affise.ios.registerAppForAdNetworkAttribution((error) => {
                        this.callOutput(`SKAd register app: ${error}`);
                    });
                }
            },
            {
                title: "SKAd update",
                call: () => {
                    // StoreKit Ad Network https://github.com/affise/sdk-react#storekit-ad-network
                    Affise.ios.updatePostbackConversionValue(1n, SKAdNetwork.CoarseConversionValue.medium, (error) => {
                        this.callOutput(`SKAd updatePostbackConversionValue: ${error}`);
                    });
                }
            },
            {
                title: "is Offline Mode Enabled",
                call: () => {
                    // Offline mode https://github.com/affise/sdk-react#offline-mode
                    Affise.isOfflineModeEnabled().then((value) => {
                        this.callOutput(`isOfflineModeEnabled: ${value}`);
                    });
                }
            },
            {
                title: "set Offline Mode Enabled",
                call: () => {
                    Affise.isOfflineModeEnabled().then((value) => {
                        // Offline mode https://github.com/affise/sdk-react#offline-mode
                        Affise.setOfflineModeEnabled(!value);
                        this.callOutput(`setOfflineModeEnabled: ${!value}`);
                    });
                }
            },
            {
                title: "get Providers",
                call: () => {
                    // Get providers https://github.com/affise/sdk-react#get-providers
                    Affise.getProviders().then((providers) => {
                        const key = ProviderType.AFFISE_APP_TOKEN;
                        this.callOutput(`getProviders: ${key} = ${providers[key]}`);
                    });
                }
            },
            {
                title: "get random user Id",
                call: () => {
                    // Get random user Id https://github.com/affise/sdk-react#get-random-user-id
                    Affise.getRandomUserId().then((value) => {
                        this.callOutput(`getRandomUserId: ${value}`);
                    });
                }
            },
            {
                title: "get random device Id",
                call: () => {
                    // Get random device Id https://github.com/affise/sdk-react#get-random-device-id
                    Affise.getRandomDeviceId().then((value) => {
                        this.callOutput(`getRandomDeviceId: ${value}`);
                    });
                }
            },
        ];
    }
}
