#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(AffiseAttributionNative, RCTEventEmitter)

RCT_EXTERN_METHOD(
  invokeMethod: (NSString)invokeMethod
  data: (NSDictionary)data
  resolve:  (RCTPromiseResolveBlock)resolve
  reject: (RCTPromiseRejectBlock)reject
)

RCT_EXTERN_METHOD(
  nativeHandleDeeplink: (NSString)uri
)

@end
