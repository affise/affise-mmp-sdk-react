#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(AffiseAttributionNative, RCTEventEmitter)

RCT_EXTERN_METHOD(
  nativeInit: (NSDictionary)initProperties
)

RCT_EXTERN_METHOD(
  nativeSendEvent: (NSDictionary)event
)

RCT_EXTERN_METHOD(
  nativeSendEvents
)

RCT_EXTERN_METHOD(
  nativeAddPushToken: (NSString)pushToken
)

RCT_EXTERN_METHOD(
  nativeRegisterWebView
)

RCT_EXTERN_METHOD(
  nativeUnregisterWebView
)

RCT_EXTERN_METHOD(
  nativeRegisterDeeplinkCallback
)

RCT_EXTERN_METHOD(
  nativeSetSecretId: (NSString)secretId
)

RCT_EXTERN_METHOD(
  nativeSetAutoCatchingTypes: (NSArray)types
)

RCT_EXTERN_METHOD(
  nativeSetOfflineModeEnabled: (BOOL)enabled
)

RCT_EXTERN_METHOD(
  nativeIsOfflineModeEnabled:
  (RCTPromiseResolveBlock)resolve
  withRejecter: (RCTPromiseRejectBlock)reject
)

RCT_EXTERN_METHOD(
  nativeSetBackgroundTrackingEnabled: (BOOL)enabled
)

RCT_EXTERN_METHOD(
  nativeIsBackgroundTrackingEnabled:
  (RCTPromiseResolveBlock)resolve
  withRejecter: (RCTPromiseRejectBlock)reject
)

RCT_EXTERN_METHOD(
  nativeSetTrackingEnabled: (BOOL)enabled
)

RCT_EXTERN_METHOD(
  nativeIsTrackingEnabled:
  (RCTPromiseResolveBlock)resolve
  withRejecter: (RCTPromiseRejectBlock)reject
)

RCT_EXTERN_METHOD(
  nativeForget: (NSString)userData
)

RCT_EXTERN_METHOD(
  nativeSetEnabledMetrics: (BOOL)enabled
)

RCT_EXTERN_METHOD(
  nativeCrashApplication
)

RCT_EXTERN_METHOD(
  nativeGetReferrer:
  (RCTPromiseResolveBlock)resolve
  withRejecter: (RCTPromiseRejectBlock)reject
)

RCT_EXTERN_METHOD(
  nativeHandleDeeplink: (NSString)uri
)
@end
