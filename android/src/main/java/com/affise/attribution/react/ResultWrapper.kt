package com.affise.attribution.react

import com.affise.attribution.internal.callback.InternalResult
import com.facebook.react.bridge.Promise

class ResultWrapper(private val promise: Promise) : InternalResult {
    override fun success(data: Any?) {
        promise.resolve(data?.asNativeData())
    }

    override fun error(error: String) {
        promise.reject("affise", error)
    }

    override fun notImplemented() {
        promise.reject("affise", "notImplemented")
    }

    private fun Any.asNativeData() : Any? = when (this) {
        is Map<*, *> -> this.toWritableNativeMap()

        is List<*> -> this.toWritableNativeArray()
        else -> this.toNativeBridgeData()
    }
}
