package com.affise.attribution.react

import com.affise.attribution.internal.callback.AffiseResult
import com.facebook.react.bridge.Promise

class ResultWrapper(private val promise: Promise): AffiseResult {
    override fun success(data: Any?) {
        promise.resolve(data)
    }

    override fun error(error: String) {
        promise.reject("affise", error)
    }

    override fun notImplemented() {
        promise.reject("affise", "notImplemented")
    }
}
