import {Linking, NativeEventEmitter, NativeModules, Platform} from "react-native";

const LINKING_ERROR =
    `The package 'affise-attribution-lib' doesn't seem to be linked. Make sure: \n\n` +
    Platform.select({ios: "- You have run 'pod install'\n", default: ''}) +
    '- You rebuilt the app after installing the package\n' +
    '- You are not using Expo Go\n';

const AffiseNative = NativeModules.AffiseAttributionNative
    ? NativeModules.AffiseAttributionNative
    : new Proxy(
        {},
        {
            get() {
                throw new Error(LINKING_ERROR);
            },
        }
    );

export abstract class NativeBasePlatform {

    private CALLBACK = "native_callback";
    private API = "api";
    private DATA = "data";

    constructor() {
        this.nativeEventEmitter();
    }

    private nativeHandleDeeplink(url: string) {
        AffiseNative.nativeHandleDeeplink(url);
    }

    protected apiCallResult<T>(apiName: string, data: Record<string, any>): Promise<T> {
        return AffiseNative.invokeMethod(apiName, data);
    }

    protected apiCall(apiName: string, data: Record<string, any>) {
        this.apiCallResult(apiName, data).catch((error: any) => {
            console.log(error);
        });
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected apiCallback(_apiName: string, _apiData: any) {

    }

    private nativeEventEmitter() {
        const eventEmitter = new NativeEventEmitter(AffiseNative);
        eventEmitter.addListener(this.CALLBACK, (event) => {
            this.apiCallback(event[this.API], event[this.DATA]);
        });
    }

    protected reactHandleDeeplink() {
        Linking.getInitialURL().then((url) => {
            this.reactDeeplinkCallback(url);
        });
        Linking.addEventListener('url', (evt) => this.reactDeeplinkCallback(evt.url));
    }

    private reactDeeplinkCallback(url: string | null) {
        if (url != null && url.trim().length > 0) {
            this.nativeHandleDeeplink(url);
        }
    }
}
