import React
import AffiseInternal

class ResultWrapper : InternalResult {

    private var resolve: RCTPromiseResolveBlock
    private var reject: RCTPromiseRejectBlock

    public init(_ resolve: @escaping RCTPromiseResolveBlock, _ reject: @escaping RCTPromiseRejectBlock) {
        self.resolve = resolve
        self.reject = reject
    }

    func success(_ result: Any?) {
        resolve(result)
    }

    public func error(_ error: String) {
        reject("affise", error, nil)
    }

    public func notImplemented() {
        reject("affise", "notImplemented", nil)
    }
}
