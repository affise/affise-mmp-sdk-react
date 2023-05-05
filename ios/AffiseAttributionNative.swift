import AffiseAttributionLib
import AffiseSKAdNetwork
import React


@objc(AffiseAttributionNative)
class AffiseAttributionNative: RCTEventEmitter {

    static private let DEEPLINK_CALLBACK_EVENT = "affiseDeeplinkEvent"
    static private let DEEPLINK_CALLBACK_URI_PARAMETER = "uri"

    static private let FLUTTER_SKAD_REGISTER_ERROR = "skadRegisterError"
    static private let FLUTTER_SKAD_POSTBACK_ERROR = "skadPostbackError"
    static private let FLUTTER_SKAD_ERROR_PARAMETER  = "error"

    // android
    static private let GET_REFERRER_VALUE_CALLBACK_EVENT = "getReferrerValueEvent";

    var app: UIApplication? = nil
    var launchOptions: [UIApplication.LaunchOptionsKey: Any]?

    private let evensFactory: AffiseEvensFactory = AffiseEvensFactory()

    @objc
    override static func requiresMainQueueSetup() -> Bool{
        return true;
    }

    @objc
    override func constantsToExport() -> [AnyHashable: Any]!{
        return [:];
    }

    override func supportedEvents() -> [String]! {
        return [
            AffiseAttributionNative.DEEPLINK_CALLBACK_EVENT,
            AffiseAttributionNative.FLUTTER_SKAD_REGISTER_ERROR,
            AffiseAttributionNative.FLUTTER_SKAD_POSTBACK_ERROR,
            AffiseAttributionNative.GET_REFERRER_VALUE_CALLBACK_EVENT
        ];
    }

    @objc(nativeInit:)
    public func nativeInit(initProperties: NSDictionary) -> Void {
        app = UIApplication.shared
        launchOptions = bridge.launchOptions as? [UIApplication.LaunchOptionsKey: Any]
        if app == nil {
            RCTLogWarn("Affise init UIApplication not found")
            return
        }
        if let properties = (initProperties as? [String: Any?])?.toAffiseInitProperties {
            Affise._crossPlatform.react()
            Affise.shared.load(app: app!, initProperties: properties, launchOptions: launchOptions)
        } else {
            RCTLogWarn("Affise init properties parse \(initProperties)")
        }
    }

    @objc(nativeSendEvent:)
    public func nativeSendEvent(event: NSDictionary) -> Void {
       if let event = evensFactory.event(event as? [String: Any?]) {
           Affise.shared.sendEvent(event: event)
       } else {

       }
    }

    @objc
    public func nativeSendEvents() -> Void {
        Affise.shared.sendEvents()
    }

    @objc(nativeAddPushToken:)
    public func nativeAddPushToken(pushToken: NSString) -> Void {
        Affise.shared.addPushToken(pushToken: pushToken as String)
    }

    @objc
    public func nativeRegisterWebView() -> Void {
        // Affise.shared.registerWebView(webView)
        RCTLogInfo("NotImplemented")
    }

    @objc
    public func nativeUnregisterWebView() -> Void {
        // Affise.shared.unregisterWebView()
        RCTLogInfo("NotImplemented")
    }

    @objc
    public func nativeRegisterDeeplinkCallback() -> Void {
        registerCallback()
    }

    @objc(nativeSetSecretId:)
    public func nativeSetSecretId(secretId: NSString) -> Void {
        Affise.shared.setSecretId(secretId: secretId as String)
    }

    @objc(nativeSetAutoCatchingTypes:)
    public func nativeSetAutoCatchingTypes(types: NSArray) -> Void {
        RCTLogInfo("NotImplemented")
    }

    @objc(nativeSetOfflineModeEnabled:)
    public func nativeSetOfflineModeEnabled(enabled: Bool) -> Void {
        Affise.shared.setOfflineModeEnabled(enabled: enabled)
    }

    @objc(nativeIsOfflineModeEnabled:withRejecter:)
    public func nativeIsOfflineModeEnabled(resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        resolve(Affise.shared.isOfflineModeEnabled())
    }

    @objc(nativeSetBackgroundTrackingEnabled:)
    public func nativeSetBackgroundTrackingEnabled(enabled: Bool) -> Void {
        Affise.shared.setBackgroundTrackingEnabled(enabled: enabled)
    }

    @objc(nativeIsBackgroundTrackingEnabled:withRejecter:)
    public func nativeIsBackgroundTrackingEnabled(resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        resolve(Affise.shared.isBackgroundTrackingEnabled())
    }

    @objc(nativeSetTrackingEnabled:)
    public func nativeSetTrackingEnabled(enabled: Bool) -> Void {
        Affise.shared.setTrackingEnabled(enabled: enabled)
    }

    @objc(nativeIsTrackingEnabled:withRejecter:)
    public func nativeIsTrackingEnabled(resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        resolve(Affise.shared.isTrackingEnabled())
    }

    @objc(nativeForget:)
    public func nativeForget(userData: NSString) -> Void {
        RCTLogInfo("NotImplemented")
    }

    @objc(nativeSetEnabledMetrics:)
    public func nativeSetEnabledMetrics(enabled: Bool) -> Void {
        RCTLogInfo("NotImplemented")
    }

    @objc
    public func nativeCrashApplication() -> Void {
        RCTLogInfo("NotImplemented")
    }

    @objc(nativeGetReferrer:withRejecter:)
    public func nativeGetReferrer(resolve:RCTPromiseResolveBlock, reject:RCTPromiseRejectBlock) -> Void {
        RCTLogInfo("NotImplemented")
    }

    @objc(nativeHandleDeeplink:)
    public func nativeHandleDeeplink(uri: NSString) -> Void {
        if !(uri as String).isEmpty {
            Affise._crossPlatform.handleDeeplink(uri: uri as String)
            sendDeeplinkEvent(uri as String)
        }
    }

    @objc
    public func nativeSkadRegister() -> Void {
        if #available(iOS 16.1, *) {
            AffiseSKAdNetwork.shared()?.updatePostbackConversionValue(0, coarseValue: "medium", completionHandler: { error in
                if let errorMessage = error?.localizedDescription {
                    self.sendSkadRegisterError(errorMessage)
                }
            })
        } else if #available(iOS 15.4, *) {
            AffiseSKAdNetwork.shared()?.updatePostbackConversionValue(0, completionHandler: { error in
                if let errorMessage = error?.localizedDescription {
                    self.sendSkadRegisterError(errorMessage)
                }
            })
        } else if #available(iOS 14.0, *) {
            AffiseSKAdNetwork.shared()?.registerAppForAdNetworkAttribution(completionHandler: { error in
                if let errorMessage = error?.localizedDescription {
                    self.sendSkadRegisterError(errorMessage)
                }
            })
        } else {
            RCTLogInfo("NotImplemented")
        }
    }

    @objc(nativeSkadPostback:coarseValue:)
    public func nativeSkadPostback(fineValue:Int, coarseValue:NSString) -> Void {
        if #available(iOS 16.1, *) {
            AffiseSKAdNetwork.shared()?.updatePostbackConversionValue(fineValue, coarseValue: coarseValue as String, completionHandler: { error in
                if let errorMessage = error?.localizedDescription {
                    self.sendSkadPostbackError(errorMessage)
                }
            })
        } else if #available(iOS 15.4, *) {
            AffiseSKAdNetwork.shared()?.updatePostbackConversionValue(fineValue, completionHandler: { error in
                if let errorMessage = error?.localizedDescription {
                    self.sendSkadPostbackError(errorMessage)
                }
            })
        } else if #available(iOS 14.0, *) {
            AffiseSKAdNetwork.shared()?.updateConversionValue(fineValue, completionHandler: { error in
                if let errorMessage = error?.localizedDescription {
                    self.sendSkadPostbackError(errorMessage)
                }
            })
        } else {
            RCTLogInfo("NotImplemented")
        }
    }

    private func registerCallback() {
        Affise.shared.registerDeeplinkCallback {url in
        }
    }

    private func sendDeeplinkEvent(_ uri: String) {
        sendEvent(
            withName: AffiseAttributionNative.DEEPLINK_CALLBACK_EVENT,
            body: [AffiseAttributionNative.DEEPLINK_CALLBACK_URI_PARAMETER: uri]
        )
    }

    private func sendSkadRegisterError(_ error: String?) {
        sendEvent(
            withName: AffiseAttributionNative.FLUTTER_SKAD_REGISTER_ERROR,
            body: [AffiseAttributionNative.FLUTTER_SKAD_ERROR_PARAMETER: error]
        )
    }

    private func sendSkadPostbackError(_ error: String?) {
        sendEvent(
            withName: AffiseAttributionNative.FLUTTER_SKAD_POSTBACK_ERROR,
            body: [AffiseAttributionNative.FLUTTER_SKAD_ERROR_PARAMETER: error]
        )
    }
}
