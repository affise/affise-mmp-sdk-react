package com.affise.attribution.react

import com.affise.attribution.internal.callback.AffiseResult
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise

class ResultWrapper(private val promise: Promise) : AffiseResult {
    override fun success(data: Any?) {
        promise.resolve(data?.asNativeData())
    }

    override fun error(error: String) {
        promise.reject("affise", error)
    }

    override fun notImplemented() {
        promise.reject("affise", "notImplemented")
    }

    @Suppress("UNCHECKED_CAST")
    private fun Any.asNativeData() : Any? = when (this) {
        is Map<*, *> -> Arguments.makeNativeMap(this as? Map<String, *>)

        is List<*> -> Arguments.makeNativeArray(this as? List<*>)
        else -> this
    }
}
