import React
import AffiseInternal


@objc(AffiseAttributionNative)
class AffiseAttributionNative: RCTEventEmitter {
    
    private let CALLBACK: String = "native_callback"
    private let API: String = "api"
    private let DATA: String = "data"

    private var apiWrapper: AffiseApiWrapper? = nil
    private var app: UIApplication? = nil
    private var launchOptions: [UIApplication.LaunchOptionsKey: Any]? = nil

    @objc
    override static func requiresMainQueueSetup() -> Bool{
        return false;
    }
    
    override var bridge: RCTBridge! {
        set(bridge) {
            super.bridge = bridge

            launchOptions = bridge?.launchOptions as? [UIApplication.LaunchOptionsKey: Any] ?? nil
            app = UIApplication.shared
            
            apiInit()
        }
        get {
            return super.bridge
        }
    }

    @objc
    override func constantsToExport() -> [AnyHashable: Any]!{
        return [:];
    }

    override func supportedEvents() -> [String]! {
        return [self.CALLBACK];
    }

    private func sendEvent(_ params: NSDictionary) {
         sendEvent(
            withName: self.CALLBACK,
            body: params
        )
    }

    private func apiInit() {
        guard let app = app else { return }
        apiWrapper = AffiseApiWrapper(app, launchOptions: launchOptions)
        apiWrapper?.react()
               
        apiWrapper?.setCallback { (apiName: String, data: [String: Any?]) in
            let apiData: NSDictionary = [
                self.API : apiName,
                self.DATA : data
            ]
            self.sendEvent(apiData)
        }
    }

    @objc(invokeMethod:data:resolve:reject:)
    public func invokeMethod(apiName: String, data: NSDictionary, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) -> Void {
        
        guard let api = AffiseApiMethod.from(apiName) else {
            debugPrint("error: [\(apiName)] AffiseApiMethod not found")
            return
        }
        guard let data = data as? [String: Any?] else {
            debugPrint("error: [\(apiName)] AffiseApiMethod no data found")
            return
        }
        
        apiWrapper?.call(api, map: data, result: ResultWrapper(resolve, reject))
    }

    @objc(nativeHandleDeeplink:)
    public func nativeHandleDeeplink(uri: String) {
        if uri.isEmpty { return }
        apiWrapper?.handleDeeplink(uri)
    }
}
