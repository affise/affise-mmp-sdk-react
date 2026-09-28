package com.affise.attribution.react

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.WritableArray
import com.facebook.react.bridge.WritableMap

@Suppress("UNCHECKED_CAST")
internal fun Map<*, *>.toWritableNativeMap(): WritableMap =
    Arguments.makeNativeMap(sanitizeNativeBridgeData(this) as Map<String, *>)

@Suppress("UNCHECKED_CAST")
internal fun List<*>.toWritableNativeArray(): WritableArray =
    Arguments.makeNativeArray(sanitizeNativeBridgeData(this) as List<*>)

internal fun Any?.toNativeBridgeData(): Any? = sanitizeNativeBridgeData(this)

private fun sanitizeNativeBridgeData(value: Any?): Any? = when (value) {
    is Map<*, *> -> value.entries.mapNotNull { entry ->
        val key = entry.key ?: return@mapNotNull null
        key.toString() to sanitizeNativeBridgeData(entry.value)
    }.toMap()

    is List<*> -> value.map(::sanitizeNativeBridgeData)
    else -> value
}
