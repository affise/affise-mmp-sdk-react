package com.affise.attribution.react

import android.app.Application
import android.net.Uri
import com.affise.attribution.Affise
import com.affise.attribution.react.ext.toAffiseInitProperties
import com.affise.attribution.react.ext.toAutoCatchingType
import com.affise.attribution.react.factories.AffiseEvensFactory
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule


class AffiseAttributionNativeModule(
    val reactContext: ReactApplicationContext
) : ReactContextBaseJavaModule(reactContext) {

    private var evensFactory: AffiseEvensFactory = AffiseEvensFactory()

    private fun sendEvent(reactContext: ReactContext, eventName: String, params: WritableMap?) {
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, params)
    }

    private fun sendDeeplinkEvent(uri: String) {
        sendEvent(reactContext, DEEPLINK_CALLBACK_EVENT, Arguments.createMap().apply {
            putString(DEEPLINK_CALLBACK_URI_PARAMETER, uri)
        })
    }

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun nativeInit(initProperties: ReadableMap) {
        (reactContext.applicationContext as? Application)?.let { application ->
            Affise._crossPlatform.react()
            Affise.init(application, initProperties.toHashMap().toAffiseInitProperties())
            Affise._crossPlatform.start()
        }
    }

    @ReactMethod
    fun nativeSendEvents() {
        Affise.sendEvents()
    }

    @ReactMethod
    fun nativeSendEvent(event: ReadableMap) {
        evensFactory.event(event.toHashMap())?.let {
            Affise.sendEvent(it)
        }
    }

    @ReactMethod
    fun nativeAddPushToken(pushToken: String) {
        Affise.addPushToken(pushToken)
    }


    @ReactMethod
    fun nativeRegisterDeeplinkCallback() {
        registerCallback()
    }

    @ReactMethod
    fun addListener(eventName: String) {
        // Set up any upstream listeners or background tasks as necessary
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        // Remove upstream listeners, stop unnecessary background tasks
    }

    @ReactMethod
    fun nativeSetSecretId(secretId: String) {
        Affise.setSecretId(secretId)
    }

    @ReactMethod
    fun nativeSetAutoCatchingTypes(types: ReadableArray) {
        val autoCatchingTypes = types.toArrayList().mapNotNull {
            it.toString().toAutoCatchingType()
        }
        Affise.setAutoCatchingTypes(autoCatchingTypes)
    }

    @ReactMethod
    fun nativeSetOfflineModeEnabled(enabled: Boolean) {
        Affise.setOfflineModeEnabled(enabled)
    }

    @ReactMethod
    fun nativeIsOfflineModeEnabled(result: Promise) {
        result.resolve(Affise.isOfflineModeEnabled())
    }

    @ReactMethod
    fun nativeSetBackgroundTrackingEnabled(enabled: Boolean) {
        Affise.setBackgroundTrackingEnabled(enabled)
    }

    @ReactMethod
    fun nativeIsBackgroundTrackingEnabled(result: Promise) {
        result.resolve(Affise.isBackgroundTrackingEnabled())
    }

    @ReactMethod
    fun nativeSetTrackingEnabled(enabled: Boolean) {
        Affise.setTrackingEnabled(enabled)
    }

    @ReactMethod
    fun nativeIsTrackingEnabled(result: Promise) {
        result.resolve(Affise.isTrackingEnabled())
    }

    @ReactMethod
    fun nativeForget(userData: String) {
        Affise.forget(userData)
    }

    @ReactMethod
    fun nativeSetEnabledMetrics(enabled: Boolean) {
        Affise.setEnabledMetrics(enabled)
    }

    @ReactMethod
    fun nativeCrashApplication() {
        Affise.crashApplication()
    }

    @ReactMethod
    fun nativeGetReferrer(result: Promise) {
        result.resolve(Affise.getReferrer())
    }

    @ReactMethod
    fun nativeHandleDeeplink(uri: String) {
        Affise._crossPlatform.handleDeeplink(uri)
        sendDeeplinkEvent(uri)
    }

    private fun registerCallback() {
        Affise.registerDeeplinkCallback {
            true
        }
    }

    companion object {
        const val NAME = "AffiseAttributionNative"

        private const val DEEPLINK_CALLBACK_EVENT = "affiseDeeplinkEvent"
        private const val DEEPLINK_CALLBACK_URI_PARAMETER = "uri"
    }
}
