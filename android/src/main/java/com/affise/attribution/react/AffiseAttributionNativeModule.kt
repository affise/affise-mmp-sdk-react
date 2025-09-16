package com.affise.attribution.react

import android.app.Application
import com.affise.attribution.internal.AffiseApiMethod
import com.affise.attribution.internal.AffiseApiWrapper
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableMap
import com.facebook.react.bridge.WritableMap
import com.facebook.react.modules.core.DeviceEventManagerModule


class AffiseAttributionNativeModule(
    private val reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    private var apiWrapper: AffiseApiWrapper? = null

    init {
        (reactContext.applicationContext as? Application)?.let { app ->
            apiWrapper = AffiseApiWrapper(app)
            updateActivity()
            apiWrapper?.react()
            apiWrapper?.setCallback { name, map ->
                val data = Arguments.createMap().apply {
                    putString(API, name)
                    putMap(DATA, Arguments.makeNativeMap(map))
                }
                sendEvent(data)
            }
        }
    }

    private fun sendEvent(params: WritableMap?) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(CALLBACK, params)
    }

    override fun getName(): String {
        return NAME
    }

    private fun updateActivity() {
        apiWrapper?.let {
            if (it.activity == null) {
                it.activity = reactContext.currentActivity
            }
        }
    }

    @ReactMethod
    fun invokeMethod(apiName: String, data: ReadableMap, result: Promise) {
        updateActivity()
        apiWrapper?.call(AffiseApiMethod.from(apiName), data.toHashMap(), ResultWrapper(result))
    }

    @ReactMethod
    fun nativeHandleDeeplink(uri: String) {
        apiWrapper?.handleDeeplink(uri)
    }

    @ReactMethod
    fun addListener(eventName: String) {
        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        // Remove upstream listeners, stop unnecessary background tasks
    }

    companion object {
        const val NAME = "AffiseAttributionNative"
        private const val CALLBACK = "native_callback"
        private const val API = "api"
        private const val DATA = "data"
    }
}
