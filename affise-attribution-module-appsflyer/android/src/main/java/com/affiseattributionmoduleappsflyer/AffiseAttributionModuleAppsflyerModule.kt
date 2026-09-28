package com.affiseattributionmoduleappsflyer

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule

class AffiseAttributionModuleAppsflyerModule(reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String {
    return NAME
  }

  companion object {
    const val NAME = "AffiseAttributionModuleAppsflyer"
  }
}
