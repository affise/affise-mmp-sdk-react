package com.affiseattributionmoduleadvertising

import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactApplicationContext

class AffiseAttributionModuleAdvertisingModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "AffiseAttributionModuleAdvertising"
  }
}
