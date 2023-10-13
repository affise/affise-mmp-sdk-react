# Affise Attribution React Native Library

| Package                  |                                                                 Version                                                                  |
|--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------:|
| `affise-attribution-lib` | [![attribution](https://img.shields.io/npm/v/affise-attribution-lib?label=latest)](https://www.npmjs.com/package/affise-attribution-lib) |

- [Affise Attribution React Native Library](#affise-attribution-react-native-library)
- [Description](#description)
  - [Quick start](#quick-start)
  - [Integration](#integration)
    - [Integrate npm package](#integrate-npm-package)
    - [Add platform modules](#add-platform-modules)
      - [Android](#android)
      - [iOS](#ios)
    - [Initialize](#initialize)
    - [Requirements](#requirements)
      - [Android](#android-1)
- [Features](#features)
  - [ProviderType identifiers collection](#providertype-identifiers-collection)
      - [Attribution](#attribution)
      - [Advertising](#advertising)
      - [Network](#network)
      - [Phone](#phone)
  - [Events tracking](#events-tracking)
  - [Custom events tracking](#custom-events-tracking)
  - [Predefined event parameters](#predefined-event-parameters)
    - [PredefinedString](#predefinedstring)
    - [PredefinedLong](#predefinedlong)
    - [PredefinedFloat](#predefinedfloat)
    - [PredefinedObject](#predefinedobject)
    - [PredefinedListObject](#predefinedlistobject)
    - [PredefinedListString](#predefinedliststring)
  - [Events buffering](#events-buffering)
  - [Advertising Identifier (google) tracking](#advertising-identifier-google-tracking)
  - [Open Advertising Identifier (huawei) tracking](#open-advertising-identifier-huawei-tracking)
  - [Install referrer tracking](#install-referrer-tracking)
  - [Push token tracking](#push-token-tracking)
  - [Reinstall Uninstall tracking](#reinstall-uninstall-tracking)
  - [APK preinstall tracking](#apk-preinstall-tracking)
  - [Deeplinks](#deeplinks)
    - [Android](#android-2)
    - [iOS](#ios-1)
  - [Offline mode](#offline-mode)
  - [Disable tracking](#disable-tracking)
  - [Disable background tracking](#disable-background-tracking)
  - [Get random user Id](#get-random-user-id)
  - [Get random device Id](#get-random-device-id)
  - [Get providers](#get-providers)
  - [Get module state](#get-module-state)
  - [Platform specific](#platform-specific)
    - [GDPR right to be forgotten](#gdpr-right-to-be-forgotten)
    - [Get referrer](#get-referrer)
    - [Get referrer value](#get-referrer-value)
      - [Referrer keys](#referrer-keys)
    - [StoreKit Ad Network](#storekit-ad-network)
- [SDK to SDK integrations](#sdk-to-sdk-integrations)
- [Debug](#debug)
    - [Validate credentials](#validate-credentials)

# Description

Affise SDK is a software you can use to collect app usage statistics, device identifiers, deeplink usage, track install
referrer.

## Quick start

## Integration

### Integrate npm package

This is a [Node.js](https://nodejs.org/en/) module available through the [npm registry](https://www.npmjs.com/).

Installation using npm

```console
npm install affise-attribution-lib
```

Installation using yarn

```console
yarn add affise-attribution-lib
```

### Add platform modules

#### Android

Add modules to Android project

| Module               | Version                                                                                                                                                                      |
|----------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `module-advertising` | [![module-advertising](https://img.shields.io/maven-central/v/com.affise/module-advertising?label=latest)](https://mvnrepository.com/artifact/com.affise/module-advertising) |
| `module-network`     | [![module-network](https://img.shields.io/maven-central/v/com.affise/module-network?label=latest)](https://mvnrepository.com/artifact/com.affise/module-network)             |
| `module-phone`       | [![module-phone](https://img.shields.io/maven-central/v/com.affise/module-phone?label=latest)](https://mvnrepository.com/artifact/com.affise/module-phone)                   |
| `module-status`      | [![module-status](https://img.shields.io/maven-central/v/com.affise/module-status?label=latest)](https://mvnrepository.com/artifact/com.affise/module-status)                |

Example [`example/android/app/build.gradle`](example/android/app/build.gradle)

```gradle
dependencies {
    // Affise modules
    implementation 'com.affise:module-advertising:1.6.+'
    implementation 'com.affise:module-network:1.6.+'
    implementation 'com.affise:module-phone:1.6.+'
    implementation 'com.affise:module-status:1.6.+'
}
```

#### iOS

Add modules to iOS project

| Module                |                                       Version                                        |
|-----------------------|:------------------------------------------------------------------------------------:|
| `AffiseModule/Status` | [`1.6.13`](https://github.com/CocoaPods/Specs/tree/master/Specs/0/3/d/AffiseModule/) |

Example [example/ios/Podfile](example/ios/Podfile)

```ruby
target 'YourAppProject' do
  # ...

  # Affise Modules
  pod 'AffiseModule/Status', `1.6.13`
end
```

### Initialize

After dependency is added, and project is sync with `npm install` and initialize.

> Demo app [App.tsx](example/src/App.tsx)

```typescript
import {
  Affise,
  AffiseInitProperties
} from 'affise-attribution-lib';


export default function App() {

    React.useEffect(() => {
        Affise.init({
            affiseAppId: 'Your appId', //Change to your app id
            secretKey: 'Your SDK secretKey', //Change to your SDK secretKey
        });
    });

    return (
        <SafeAreaView>
        </SafeAreaView>
    );
}
```

Check if library is initialized

```typescript
Affise.isInitialized();
```

### Requirements

#### Android

Minimal Android SDK version is 21

For a minimal working functionality your app needs to declare internet permission:

```xml
<manifest>
    <uses-permission android:name="android.permission.INTERNET"/>
</manifest>
```

OAID certificate in your project (Optional)
[`example/android/app/src/main/assets/oaid.cert.pem`](example/android/app/src/main/assets/oaid.cert.pem)

# Features

## ProviderType identifiers collection

To match users with events and data library is sending, these `ProviderType` identifiers are collected:

### Attribution

- `AFFISE_APP_ID`
- `AFFISE_PKG_APP_NAME`
- `AFF_APP_NAME_DASHBOARD`
- `APP_VERSION`
- `APP_VERSION_RAW`
- `STORE`
- `TRACKER_TOKEN`
- `TRACKER_NAME`
- `FIRST_TRACKER_TOKEN`
- `FIRST_TRACKER_NAME`
- `LAST_TRACKER_TOKEN`
- `LAST_TRACKER_NAME`
- `OUTDATED_TRACKER_TOKEN`
- `INSTALLED_TIME`
- `FIRST_OPEN_TIME`
- `INSTALLED_HOUR`
- `FIRST_OPEN_HOUR`
- `INSTALL_FIRST_EVENT`
- `INSTALL_BEGIN_TIME`
- `INSTALL_FINISH_TIME`
- `REFERRER_INSTALL_VERSION`
- `REFERRAL_TIME`
- `REFERRER_CLICK_TIME`
- `REFERRER_CLICK_TIME_SERVER`
- `REFERRER_GOOGLE_PLAY_INSTANT`
- `CREATED_TIME`
- `CREATED_TIME_MILLI`
- `CREATED_TIME_HOUR`
- `UNINSTALL_TIME`
- `REINSTALL_TIME`
- `LAST_SESSION_TIME`
- `CPU_TYPE`
- `HARDWARE_NAME`
- `DEVICE_MANUFACTURER`
- `DEEPLINK_CLICK`
- `DEVICE_ATLAS_ID`
- `AFFISE_DEVICE_ID`
- `AFFISE_ALT_DEVICE_ID`
- `ANDROID_ID`
- `ANDROID_ID_MD5`
- `REFTOKEN`
- `REFTOKENS`
- `REFERRER`
- `USER_AGENT`
- `MCCODE`
- `MNCODE`
- `REGION`
- `COUNTRY`
- `LANGUAGE`
- `DEVICE_NAME`
- `DEVICE_TYPE`
- `OS_NAME`
- `PLATFORM`
- `SDK_PLATFORM`
- `API_LEVEL_OS`
- `AFFISE_SDK_VERSION`
- `OS_VERSION`
- `RANDOM_USER_ID`
- `AFFISE_SDK_POS`
- `TIMEZONE_DEV`
- `AFFISE_EVENT_NAME`
- `AFFISE_EVENT_TOKEN`
- `LAST_TIME_SESSION`
- `TIME_SESSION`
- `AFFISE_SESSION_COUNT`
- `LIFETIME_SESSION_COUNT`
- `AFFISE_DEEPLINK`
- `AFFISE_PART_PARAM_NAME`
- `AFFISE_PART_PARAM_NAME_TOKEN`
- `AFFISE_APP_TOKEN`
- `LABEL`
- `AFFISE_SDK_SECRET_ID`
- `UUID`
- `AFFISE_APP_OPENED`
- `PUSHTOKEN`
- `AFFISE_EVENTS_COUNT`
- `AFFISE_SDK_EVENTS_COUNT`
- `AFFISE_METRICS_EVENTS_COUNT`
- `AFFISE_INTERNAL_EVENTS_COUNT`
- `IS_ROOTED`
- `IS_EMULATOR`

### Advertising

- `GAID_ADID`
- `GAID_ADID_MD5`
- `OAID`
- `OAID_MD5`
- `ADID`
- `ALTSTR_ADID`
- `FIREOS_ADID`
- `COLOROS_ADID`

### Network

- `MAC_SHA1`
- `MAC_MD5`
- `CONNECTION_TYPE`
- `PROXY_IP_ADDRESS`

### Phone

- `NETWORK_TYPE`
- `ISP`

## Events tracking

> Demo app [DefaultEventsFactory.ts](example/src/affise/DefaultEventsFactory.ts)

For example, we want to track what items usually user adds to shopping cart. To send event first create it with
following code

```typescript
import { Affise, AddToCartEvent } from 'affise-attribution-lib';

class Presenter {
  onUserAddsItemsToCart(item: string) {
    const items = {
      items: 'cookies, potato, milk',
    };

    new AddToCartEvent({
        userData: item,
        timeStampMillis: Date.now()
    })
        .addPredefinedString(PredefinedString.DESCRIPTION, 'groceries')
        .addPredefinedObject(PredefinedObject.CONTENT, items)
        .send();
  }
}
```

With above example you can implement other events:

- `AchieveLevel`
- `AddPaymentInfo`
- `AddToCart`
- `AddToWishlist`
- `AdRevenue`
- `ClickAdv`
- `CompleteRegistration`
- `CompleteStream`
- `CompleteTrial`
- `CompleteTutorial`
- `Contact`
- `ContentItemsView`
- `CustomizeProduct`
- `DeepLinked`
- `Donate`
- `FindLocation`
- `InitiateCheckout`
- `InitiatePurchase`
- `InitiateStream`
- `Invite`
- `LastAttributedTouch`
- `Lead`
- `ListView`
- `Login`
- `OpenedFromPushNotification`
- `Order`
- `OrderItemAdded`
- `OrderItemRemove`
- `OrderCancel`
- `OrderReturnRequest`
- `OrderReturnRequestCancel`
- `Purchase`
- `Rate`
- `ReEngage`
- `Reserve`
- `Sales`
- `Schedule`
- `Search`
- `Share`
- `SpendCredits`
- `StartRegistration`
- `StartTrial`
- `StartTutorial`
- `SubmitApplication`
- `Subscribe`
- `TravelBooking`
- `UnlockAchievement`
- `Unsubscribe`
- `Update`
- `ViewAdv`
- `ViewCart`
- `ViewContent`
- `ViewItem`
- `ViewItems`
- `InitialSubscription`
- `InitialTrial`
- `InitialOffer`
- `ConvertedTrial`
- `ConvertedOffer`
- `TrialInRetry`
- `OfferInRetry`
- `SubscriptionInRetry`
- `RenewedSubscription`
- `FailedSubscriptionFromRetry`
- `FailedOfferFromRetry`
- `FailedTrialFromRetry`
- `FailedSubscription`
- `FailedOfferise`
- `FailedTrial`
- `ReactivatedSubscription`
- `RenewedSubscriptionFromRetry`
- `ConvertedOfferFromRetry`
- `ConvertedTrialFromRetry`
- `Unsubscription`

## Custom events tracking

Use any of custom events if default doesn't fit your scenario:

- `CustomId01`
- `CustomId02`
- `CustomId03`
- `CustomId04`
- `CustomId05`
- `CustomId06`
- `CustomId07`
- `CustomId08`
- `CustomId09`
- `CustomId10`

## Predefined event parameters

To enrich your event with another dimension, you can use predefined parameters for most common cases.
Add it to any event:

```typescript
import {
  Affise,
  AddToCartEvent,
  PredefinedString,
  PredefinedObject,
} from 'affise-attribution-lib';

class Presenter {
  onUserAddsItemsToCart(item: string) {
    const items = {
      items: 'cookies, potato, milk',
    };

    new AddToCartEvent({
        userData: item,
    })
        .addPredefinedString(PredefinedString.DESCRIPTION, 'best before 2029')
        .addPredefinedObject(PredefinedObject.CONTENT, items)
        .send();
  }
}
```

In examples above `PredefinedString.DESCRIPTION` and `PredefinedObject.CONTENT` is used, but many others is available:

| PredefinedParameter                           | Type                                       |
|-----------------------------------------------|--------------------------------------------|
| [PredefinedString](#predefinedstring)         | string                                     |
| [PredefinedLong](#predefinedlong)             | bigint                                     |
| [PredefinedFloat](#predefinedfloat)           | number                                     |
| [PredefinedObject](#predefinedobject)         | Record&lt;string, unknown&gt;              |
| [PredefinedListObject](#predefinedlistobject) | Array&lt;Record&lt;string, unknown&gt;&gt; |
| [PredefinedListString](#predefinedliststring) | Array&lt;string&gt;                        |

### PredefinedString

- `ACHIEVEMENT_ID`
- `ADREV_AD_TYPE`
- `BRAND`
- `BRICK`
- `CAMPAIGN_ID`
- `CATALOGUE_ID`
- `CHANNEL_TYPE`
- `CITY`
- `CLASS`
- `CLICK_ID`
- `CONTENT_ID`
- `CONTENT_NAME`
- `CONTENT_TYPE`
- `CONVERSION_ID`
- `COUNTRY`
- `COUPON_CODE`
- `CURRENCY`
- `CUSTOMER_SEGMENT`
- `CUSTOMER_TYPE`
- `CUSTOMER_USER_ID`
- `DEEP_LINK`
- `DESCRIPTION`
- `DESTINATION_A`
- `DESTINATION_B`
- `DESTINATION_LIST`
- `EVENT_NAME`
- `NEW_VERSION`
- `NETWORK`
- `OLD_VERSION`
- `ORDER_ID`
- `PARAM_01`
- `PARAM_02`
- `PARAM_03`
- `PARAM_04`
- `PARAM_05`
- `PARAM_06`
- `PARAM_07`
- `PARAM_08`
- `PARAM_09`
- `PARAM_10`
- `PAYMENT_INFO_AVAILABLE`
- `PID`
- `PLACEMENT`
- `PREFERRED_NEIGHBORHOODS`
- `PRODUCT_ID`
- `PRODUCT_NAME`
- `PURCHASE_CURRENCY`
- `RECEIPT_ID`
- `REGION`
- `REGISTRATION_METHOD`
- `REVIEW_TEXT`
- `SEARCH_STRING`
- `SEGMENT`
- `SOURCE`
- `STATUS`
- `SUBSCRIPTION_ID`
- `SUCCESS`
- `SUGGESTED_DESTINATIONS`
- `SUGGESTED_HOTELS`
- `TUTORIAL_ID`
- `UNIT`
- `UTM_CAMPAIGN`
- `UTM_MEDIUM`
- `UTM_SOURCE`
- `VALIDATED`
- `VERTICAL`
- `VIRTUAL_CURRENCY_NAME`
- `VOUCHER_CODE`

### PredefinedLong

- `AMOUNT`
- `DATE_A`
- `DATE_B`
- `DEPARTING_ARRIVAL_DATE`
- `DEPARTING_DEPARTURE_DATE`
- `HOTEL_SCORE`
- `LEVEL`
- `MAX_RATING_VALUE`
- `NUM_ADULTS`
- `NUM_CHILDREN`
- `NUM_INFANTS`
- `PREFERRED_NUM_STOPS`
- `PREFERRED_STAR_RATINGS`
- `QUANTITY`
- `RATING_VALUE`
- `RETURNING_ARRIVAL_DATE`
- `RETURNING_DEPARTURE_DATE`
- `SCORE`
- `TRAVEL_START`
- `TRAVEL_END`
- `USER_SCORE`
- `EVENT_START`
- `EVENT_END`

### PredefinedFloat

- `PREFERRED_PRICE_RANGE`
- `PRICE`
- `REVENUE`
- `LAT`
- `LONG`

### PredefinedObject

- `CONTENT`

### PredefinedListObject

- `CONTENT_LIST`

### PredefinedListString

- `CONTENT_IDS`

## Events buffering

Affise library will send any pending events with first opportunity,
but if there is no network connection or device is disabled, events are kept locally for 7 days before deletion.

## Advertising Identifier (google) tracking

Advertising Identifier (google) tracking is supported automatically, no actions needed

## Open Advertising Identifier (huawei) tracking

Open Advertising Identifier is supported automatically, no actions needed

## Install referrer tracking

Install referrer tracking is supported automatically, no actions needed

## Push token tracking

To let affise track push token you need to receive it from your push service provider, and pass to Affise library.
First add firebase integration to your app completing these steps: [Firebase Docs](https://firebase.google.com/docs/cloud-messaging/android/client)

After you have done with firebase integration, add to your cloud messaging service `onNewToken` method `Affise.addPushToken(token)`

```typescript
import { Affise } from 'affise-attribution-lib';
import messaging from '@react-native-firebase/messaging';

const getToken = async () => {
  const token = await messaging().getToken();
  if (token) {
    Affise.addPushToken(token);
  }
};
```

## Reinstall Uninstall tracking

Affise automatically track reinstall events by using silent-push technology, to make this feature work, pass push token when it is recreated by user and on you application starts up

```typescript
Affise.addPushToken(token);
```

## APK preinstall tracking

SDK is also supports scenario when APK is installed not from one of application markets, such as google play, huawei appgallery or amazon appstore
To use this feature, create file with name `partner_key` in your app assets directory, and write unique identifier inside, this key will be passed to our backend so you can track events by partner later in your Affise console.

## Deeplinks

Register deeplink callback right after Affise.init(..)

```typescript
Affise.registerDeeplinkCallback((uri) => {
    // Handle deeplink
});
```

### Android

To integrate deeplink support in android you need:

Add intent filter to `AndroidManifest.xml` as in [`example/android/app/src/main/AndroidManifest.xml`](example/android/app/src/main/AndroidManifest.xml),

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data
        android:host="YOUR_AFFISE_APP_ID.affattr.com"
        android:scheme="react" />
</intent-filter>
```

### iOS

To integrate deeplink support in iOS you need:

Add deeplink handler to `AppDelegate.mm` as in [`example/ios/AffiseAttributionLibExample/AppDelegate.mm`](example/ios/AffiseAttributionLibExample/AppDelegate.mm)

- [React Docs](https://reactnavigation.org/docs/deep-linking/#set-up-with-bare-react-native-projects)

```objective-c
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
```

Add key `CFBundleURLTypes` to `Info.plist`

Example: [`example/ios/AffiseAttributionLibExample/Info.plist`](example/ios/AffiseAttributionLibExample/Info.plist)

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLName</key>
        <string>YOUR_AFFISE_APP_ID.affattr.com</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>react</string>
        </array>
    </dict>
</array>
```

## Offline mode

In some scenarios you would want to limit Affise network usage, to pause that activity call anywhere in your application following code after Affise init:

```typescript
Affise.init(..);
Affise.setOfflineModeEnabled(true); // to enable offline mode
Affise.setOfflineModeEnabled(false); // to disable offline mode
```

While offline mode is enabled, your metrics and other events are kept locally, and will be delivered once offline mode is disabled.
Offline mode is persistent as Application lifecycle, and will be disabled with process termination automatically.
To check current offline mode status call:

```typescript
Affise.isOfflineModeEnabled().then((enabled) => {
    // returns true or false describing current offline Mode state
});
```

## Disable tracking

To disable any tracking activity, storing events and gathering device identifiers and metrics call anywhere in your application following code after Affise init:

```typescript
Affise.init(..);
Affise.setTrackingEnabled(true); // to enable tracking
Affise.setTrackingEnabled(false); // to disable tracking
```

By default, tracking is enabled.

While tracking mode is disabled, metrics and other identifiers is not generated locally.
Keep in mind that this flag is persistent until app reinstall, and don't forget to reactivate tracking when needed.
To check current status of tracking call:

```typescript
Affise.isTrackingEnabled().then((enabled) => {
  // returns true or false describing current tracking state
});
```

## Disable background tracking

To disable any background tracking activity, storing events and gathering device identifiers and metrics call anywhere in your application following code after Affise init:

```typescript
Affise.init(..);
Affise.setBackgroundTrackingEnabled(true); // to enable background tracking
Affise.setBackgroundTrackingEnabled(false); // to disable background tracking
```

By default, background tracking is enabled.

While background tracking mode is disabled, metrics and other identifiers is not generated locally.
Background tracking mode is persistent as Application lifecycle, and will be re-enabled with process termination automatically.
To check current status of background tracking call:

```typescript
Affise.isBackgroundTrackingEnabled().then((enabled) => {
  // returns true or false describing current background tracking state
});
```

## Get random user Id

```typescript
Affise.getRandomUserId();
```

## Get random device Id

```typescript
Affise.getRandomDeviceId();
```

## Get providers

Returns providers map with [ProviderType](#providertype-identifiers-collection) as key

As `Promise`:

```typescript
Affise.getProviders().then((providers) => {
    const key = ProviderType.AFFISE_APP_TOKEN;
    const value = providers[key];
    // handle provider value
});
```

As `async / await`:

```typescript
const fetchData = async () => {
    const providers = await Affise.getProviders();
    const key = ProviderType.AFFISE_APP_TOKEN;
    const value = providers[key];
    // handle provider value
};

fetchData()
    .catch(console.error);
```
## Get module state

```typescript
Affise.getStatus(AffiseModules.STATUS, (response) => {
    // handle status response
});
```

## Platform specific

### GDPR right to be forgotten

> `Android Only`

Under the EU's General Data Protection Regulation (GDPR): An individual has the right to have their personal data erased.
To provide this functionality to user, as the app developer, you can call

```typescript
Affise.init(..);
Affise.android.forget(); // to forget users data
```

After processing such request our backend servers will delete all user's data.
To prevent library from generating new events, disable tracking just before calling Affise.forget:

```typescript
Affise.init(..);
Affise.setTrackingEnabled(false);
Affise.android.forget(); // to forget users data
```

### Get referrer

> `Android Only`

Use the next public method of SDK

```typescript
Affise.android.getReferrer().then((referrer) => {
  // Handle referrer
});
```

### Get referrer value

> `Android Only`

Use the next public method of SDK to get referrer value by

```typescript
Affise.android.getReferrerValue(ReferrerKey.CLICK_ID, (value) => {
  // Handle referrer
})
```

#### Referrer keys

In examples above `ReferrerKey.CLICK_ID` is used, but many others is available:

- `AD_ID`
- `CAMPAIGN_ID`
- `CLICK_ID`
- `AFFISE_AD`
- `AFFISE_AD_ID`
- `AFFISE_AD_TYPE`
- `AFFISE_ADSET`
- `AFFISE_ADSET_ID`
- `AFFISE_AFFC_ID`
- `AFFISE_CHANNEL`
- `AFFISE_CLICK_LOOK_BACK`
- `AFFISE_COST_CURRENCY`
- `AFFISE_COST_MODEL`
- `AFFISE_COST_VALUE`
- `AFFISE_DEEPLINK`
- `AFFISE_KEYWORDS`
- `AFFISE_MEDIA_TYPE`
- `AFFISE_MODEL`
- `AFFISE_OS`
- `AFFISE_PARTNER`
- `AFFISE_REF`
- `AFFISE_SITE_ID`
- `AFFISE_SUB_SITE_ID`
- `AFFC`
- `PID`
- `SUB_1`
- `SUB_2`
- `SUB_3`
- `SUB_4`
- `SUB_5`

### StoreKit Ad Network

> `iOS Only`

For ios prior `16.1` first call

```typescript
Affise.ios.registerAppForAdNetworkAttribution((error) => {
  // Handle error
});
```

Updates the fine and coarse conversion values, and calls a completion handler if the update fails.
Second argument coarseValue is available in iOS 16.1+

```typescript
Affise.ios.updatePostbackConversionValue(1n, SKAdNetwork.CoarseConversionValue.medium, (error) => {
  // Handle error
});
```

Configure your app to send postback copies to Affise:

Add key `NSAdvertisingAttributionReportEndpoint` to `Info.plist`
Set key value to `https://affise-skadnetwork.com/`

Example: [`example/ios/AffiseAttributionLibExample/Info.plist`](example/ios/AffiseAttributionLibExample/Info.plist)

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
      <key>NSAdvertisingAttributionReportEndpoint</key>
      <string>https://affise-skadnetwork.com/</string>
    </dict>
</array>
```

# SDK to SDK integrations

```typescript
// Send AdRevenue info
new AffiseAdRevenue(AffiseAdSource.ADMOB)
        .setRevenue(2.5, "ImpressionData_Currency")
        .setNetwork("ImpressionData_Network")
        .setUnit("ImpressionData_Unit")
        .setPlacement("ImpressionData_Placement")
        .send();
```

# Debug

## Validate credentials

> **Warning**
> Debug methods WON'T work on Production

Validate your credentials by receiving `ValidationStatus` values:

- `VALID` - your credentials are valid
- `INVALID_APP_ID` - your app id is not valid
- `INVALID_SECRET_KEY` - your SDK secretKey is not valid
- `PACKAGE_NAME_NOT_FOUND` - your application package name not found
- `NOT_WORKING_ON_PRODUCTION` - you using debug method on production
- `NETWORK_ERROR` - network or server not available (for example `Airoplane mode` is active)

```typescript
Affise.init({
    affiseAppId: 'Your appId', //Change to your app id
    secretKey: 'Your SDK secretKey', //Change to your SDK secretKey
    isProduction: false, //To enable debug methods set Production to false
});

Affise.debug.validate((status) =>
{
    // Handle validation status
});
```
