# Affise Attribution React Native Library

[Change Log](CHANGELOG.md)

| Package                  |                                                                 Version                                                                  |
|--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------:|
| `affise-attribution-lib` | [![attribution](https://img.shields.io/npm/v/affise-attribution-lib?label=latest)](https://www.npmjs.com/package/affise-attribution-lib) |

- [Affise Attribution React Native Library](#affise-attribution-react-native-library)
- [Description](#description)
  - [Quick start](#quick-start)
  - [Integration](#integration)
    - [Integrate npm package](#integrate-npm-package)
    - [Modules](#modules)
      - [Android](#android)
      - [iOS](#ios)
      - [Module Advertising](#module-advertising)
      - [Module Link](#module-link)
      - [Module Status](#module-status)
      - [Module Subscription](#module-subscription)
          - [AffiseProductType](#affiseproducttype)
    - [Initialize](#initialize)
      - [Before application is published](#before-application-is-published)
      - [Domain](#domain)
    - [Requirements](#requirements)
      - [Android](#android-1)
      - [iOS](#ios-1)
- [Features](#features)
  - [ProviderType identifiers collection](#providertype-identifiers-collection)
    - [Attribution](#attribution)
    - [Advertising](#advertising)
    - [Network](#network)
    - [Phone](#phone)
  - [Event send control](#event-send-control)
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
    - [iOS](#ios-2)
  - [AppLinks](#applinks)
    - [Android](#android-3)
    - [iOS](#ios-3)
  - [Offline mode](#offline-mode)
  - [Disable tracking](#disable-tracking)
  - [Disable background tracking](#disable-background-tracking)
  - [Get random user Id](#get-random-user-id)
  - [Get random device Id](#get-random-device-id)
  - [Get providers](#get-providers)
  - [Is first run](#is-first-run)
  - [Get referrer](#get-referrer)
  - [Get referrer value](#get-referrer-value)
  - [Get referrer on server](#get-referrer-on-server)
  - [Get referrer on server parameter](#get-referrer-on-server-parameter)
  - [Referrer keys](#referrer-keys)
  - [Get module state](#get-module-state)
  - [Platform specific](#platform-specific)
    - [GDPR right to be forgotten](#gdpr-right-to-be-forgotten)
    - [StoreKit Ad Network](#storekit-ad-network)
- [SDK to SDK integrations](#sdk-to-sdk-integrations)
- [Debug](#debug)
  - [Validate credentials](#validate-credentials)
- [Troubleshoots](#troubleshoots)
  - [iOS](#ios-4)

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

### Modules

If module start type is `manual`, then call:

```typescript
Affise.module.moduleStart(AffiseModules.ADVERTISING)
```

Get list of installed modules:

```typescript
Affise.module.getModulesInstalled().then((modules) => {
    console.log(`Modules: ${modules}`);
});
```

#### Android

Add modules to Android project

| Module         | Version                                                                                                                                                                      | Start  |
|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------|
| `ADVERTISING`  | [![module-advertising](https://img.shields.io/maven-central/v/com.affise/module-advertising?label=latest)](https://mvnrepository.com/artifact/com.affise/module-advertising) | `Auto` |
| `ANDROIDID`    | [![module-androidid](https://img.shields.io/maven-central/v/com.affise/module-androidid?label=latest)](https://mvnrepository.com/artifact/com.affise/module-androidid)       | `Auto` |
| `LINK`         | [![module-link](https://img.shields.io/maven-central/v/com.affise/module-link?label=latest)](https://mvnrepository.com/artifact/com.affise/module-link)                      | `Auto` |
| `NETWORK`      | [![module-network](https://img.shields.io/maven-central/v/com.affise/module-network?label=latest)](https://mvnrepository.com/artifact/com.affise/module-network)             | `Auto` |
| `PHONE`        | [![module-phone](https://img.shields.io/maven-central/v/com.affise/module-phone?label=latest)](https://mvnrepository.com/artifact/com.affise/module-phone)                   | `Auto` |
| `STATUS`       | [![module-status](https://img.shields.io/maven-central/v/com.affise/module-status?label=latest)](https://mvnrepository.com/artifact/com.affise/module-status)                | `Auto` |
| `SUBSCRIPTION` | [![module-status](https://img.shields.io/maven-central/v/com.affise/module-subscription?label=latest)](https://mvnrepository.com/artifact/com.affise/module-subscription)    | `Auto` |

Example [`example/android/app/build.gradle`](example/android/app/build.gradle)

```gradle
final affise_version = '1.6.44'

dependencies {
    // Affise modules
    implementation "com.affise:module-advertising:$affise_version"
    implementation "com.affise:module-androidid:$affise_version"
    implementation "com.affise:module-link:$affise_version"
    implementation "com.affise:module-network:$affise_version"
    implementation "com.affise:module-phone:$affise_version"
    implementation "com.affise:module-status:$affise_version"
    implementation 'com.affise:module-subscription:1.6.44'
}
```

#### iOS

Add modules to iOS project

| Module         |                                       Version                                        | Start    |
|----------------|:------------------------------------------------------------------------------------:|----------|
| `ADVERTISING`  | [`1.6.40`](https://github.com/CocoaPods/Specs/tree/master/Specs/0/3/d/AffiseModule/) | `Manual` |
| `LINK`         | [`1.6.40`](https://github.com/CocoaPods/Specs/tree/master/Specs/0/3/d/AffiseModule/) | `Auto`   |
| `STATUS`       | [`1.6.40`](https://github.com/CocoaPods/Specs/tree/master/Specs/0/3/d/AffiseModule/) | `Auto`   |
| `SUBSCRIPTION` | [`1.6.40`](https://github.com/CocoaPods/Specs/tree/master/Specs/0/3/d/AffiseModule/) | `Auto`   |

Example [example/ios/Podfile](example/ios/Podfile)

```ruby
target 'YourAppProject' do
  # ...

  # Affise Modules
  pod 'AffiseModule/Advertising', `1.6.40`
  pod 'AffiseModule/Link', `1.6.40`
  pod 'AffiseModule/Status', `1.6.40`
  pod 'AffiseModule/Subscription', `1.6.40`
end
```

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> Module Advertising requires `NSUserTrackingUsageDescription` key in `info.plist`
>
> Application **will crash** if key not present
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

Open `info.plist` and add key `NSUserTrackingUsageDescription` with string value. For more information [read requirements](#requirements)

#### Module Advertising

`iOS`

This module required to Use [`IDFA`](https://developer.apple.com/documentation/adsupport/asidentifiermanager/advertisingidentifier) (Identifier for advertisers)

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> Module Advertising requires `NSUserTrackingUsageDescription` key in `info.plist`
>
> Application **will crash** if key not present
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

Open `info.plist` and add key `NSUserTrackingUsageDescription` with string value. For more information [read requirements](#requirements)

#### Module Link

Return last url in chan of redirection

🟥Support MAX 10 redirections🟥

```typescript
Affise.module.linkResolve("SITE_WITH_REDIRECTION", (redirectUrl) => {
    // handle redirect url
});
```

#### Module Status

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> If `getStatus` return an error or working more than 2 minutes
>
> Please see section [validation credentials](#validate-credentials)
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

```typescript
Affise.module.getStatus(AffiseModules.STATUS, (response) => {
    // handle status response
});
```

#### Module Subscription

Get products by ids:

```typescript
const ids = ["exampple.product.id_1", "exampple.product.id_2"];

Affise.module.fetchProducts(ids, (result) => {
    if (result.isSuccess) {
        const value = result.asSuccess;
        const products: AffiseProduct[] = value.products;
        const invalidIds: string[] = value.invalidIds;
    } else {
        const error: string = result.asFailure;
    }
});
```

Purchase product:

```typescript
// Specify product type for correct affise event
Affise.module.purchase(product, AffiseProductType.CONSUMABLE, (result) => {
    if (result.isSuccess) {
        const purchasedInfo: AffisePurchasedInfo = result.asSuccess;
    } else {
        const error: string = result.asFailure;
    }
});
```

##### AffiseProductType

- `CONSUMABLE`
- `NON_CONSUMABLE`
- `RENEWABLE_SUBSCRIPTION`
- `NON_RENEWABLE_SUBSCRIPTION`

### Initialize

After dependency is added, and project is sync with `npm install` and initialize.

> Demo app [App.tsx](example/src/App.tsx)

```typescript jsx
import {
  Affise,
  AffiseInitProperties
} from 'affise-attribution-lib';


export default function App() {

    React.useEffect(() => {
        Affise
            .settings({
                affiseAppId: 'Your appId', //Change to your app id
                secretKey: 'Your SDK secretKey', //Change to your SDK secretKey
            })
            .start(); // Start Affise SDK
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

#### Before application is published

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> Please make sure your credentials are valid
>
> Visit section [validation credentials](#validate-credentials)
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

#### Domain

Set SDK server domain:

```typescript
Affise
    .settings({
        affiseAppId: 'Your appId',
        secretKey: 'Your SDK secretKey',
    })
    .setDomain("https://YoureCustomDomain/") // Set custom domain
    .start(); // Start Affise SDK
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

#### iOS

Affise Advertising module uses `AppTrackingTransparency` framework to get `advertisingIdentifier`
For working functionality your app needs to declare [`NSUserTrackingUsageDescription` permission](https://developer.apple.com/documentation/bundleresources/information_property_list/nsusertrackingusagedescription):

Open XCode project `info.plist` and add key `NSUserTrackingUsageDescription` with string value

Example [`info.plist`](example/ios/AffiseAttributionLibExample/Info.plist):

```xml
<plist version="1.0">
<dict>
    ...
	<key>NSUserTrackingUsageDescription</key>
	<string>Youre permission text</string>
</dict>
```

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

## Event send control

There are two ways to send events

1. Cache event to later scheduled send in batch

```typescript
AddToCartEvent()
    .send();
```

2. Send event right now

```typescript
AddToCartEvent()
    .sendNow(() => {
        // handle event send success
    }, (status) => {
        // handle event send failed
        // 🟥Warning🟥: event is NOT cached for later send
    });
```

## Events tracking

> Demo app [DefaultEventsFactory.ts](example/src/affise/factories/DefaultEventsFactory.ts)

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

If above event functionality still limits your usecase, you can use `UserCustomEvent`

```typescript
new UserCustomEvent({eventName: "MyCustomEvent"})
    .send();
```

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

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> Deeplinks support only **CUSTOM** scheme **NOT** `http` or `https`
>
> For `http` or `https` read how to setup [AppLinks](#applinks)
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

To integrate deeplink support you need:

- Follow how to set up deeplinks for [Android](#android-2) or [iOS](#ios-2)

- Register deeplink callback right after `Affise.settings({affiseAppId, secretKey}).start()`

```typescript
Affise.registerDeeplinkCallback((value) => {
    // full uri "scheme://host/path?parameters"
    const deeplink = value.deeplink;

    // separated for convenience
    const scheme = value.scheme;
    const host = value.host;
    const path = value.path;
    const queryParametersMap = value.parameters;

    if((queryParametersMap["<your_uri_key>"] || []).includes("<your_uri_key_value>")) {
        // handle value
    }
});
```

Test Android DeepLink via terminal command:

```terminal
adb shell am start -a android.intent.action.VIEW -d "YOUR_SCHEME://YOUR_DOMAIN/somepath?param=1\&list=some\&list=other\&list="
```

Test iOS DeepLink via terminal command:

```terminal
xcrun simctl openurl booted "YOUR_SCHEME://YOUR_DOMAIN/somepath?param=1&list=some&list=other&list=1"
```

### Android

To integrate deeplink support in android you need:

- Add intent filter to one of your activities [`AndroidManifest.xml example`](example/android/app/src/main/AndroidManifest.xml)

- Add **custom** scheme (**NOT** `http` or `https`) and host to filter

Example: `YOUR_SCHEME://YOUR_DOMAIN`

Example: `myapp://mydomain.com`

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data
        android:host="YOUR_DOMAIN"
        android:scheme="YOUR_SCHEME" />
</intent-filter>
```

### iOS

To integrate deeplink support in iOS you need:

- Add deeplink handler [React Docs](https://reactnavigation.org/docs/deep-linking/#set-up-with-bare-react-native-projects). [`example AppDelegate.mm`](example/ios/AffiseAttributionLibExample/AppDelegate.mm)

```objective-c
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url
  sourceApplication:(NSString *)sourceApplication annotation:(id)annotation
{
  return [RCTLinkingManager application:application openURL:url
                      sourceApplication:sourceApplication annotation:annotation];
}
```

- Add key `CFBundleURLTypes` to `Info.plist` [`example Info.plist`](example/ios/AffiseAttributionLibExample/Info.plist)

Example: `YOUR_SCHEME://YOUR_DOMAIN`

Example: `myapp://mydomain.com`

```xml
<key>CFBundleURLTypes</key>
<array>
    <dict>
        <key>CFBundleTypeRole</key>
        <string>Editor</string>
        <key>CFBundleURLName</key>
        <string>YOUR_DOMAIN</string>
        <key>CFBundleURLSchemes</key>
        <array>
            <string>react</string>
        </array>
    </dict>
</array>
```

## AppLinks

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> You must owne website domain.
>
> And has ability to add file `https://yoursite/.well-known/apple-app-site-association` for iOS support
>
> And has ability to add file `https://yoursite/.well-known/assetlinks.json` for Android support
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

- Follow how to set up AppLinks for [Android](#android-3) or [iOS](#ios-3)

### Android

To integrate applink support in android you need:

- Add intent filter to one of your activities [`AndroidManifest.xml example`](example/android/app/src/main/AndroidManifest.xml)

- Add `https` or `http` scheme and host to filter

Example: `https://YOUR_DOMAIN`

Example: `https://mydomain.com`

```xml
<intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />

    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />

    <data
        android:host="YOUR_DOMAIN"
        android:scheme="https" />
</intent-filter>
```

- Associate your app with your website. [Read Google instructions](https://developer.android.com/studio/write/app-link-indexing#associatesite) <details>
  <summary>How To Associate your app with your website</summary>

  ---

  After setting up URL support for your app, the App Links Assistant generates a Digital Assets Links file you can use to [associate your website with your app](https://developer.android.com/training/app-links/verify-android-applinks#web-assoc).

  As an alternative to using the Digital Asset Links file, you can [associate your site and app in Search Console](https://support.google.com/webmasters/answer/6212023).

  If you're using [Play App Signing](https://support.google.com/googleplay/android-developer/answer/9842756) for your app, then the certificate fingerprint produced by the App Links Assistant usually doesn't match the one on users' devices. In this case, you can find the correct Digital Asset Links JSON snippet for your app in your [Play Console](https://play.google.com/console/) developer account under **Release** > **Setup** > **App signing**.

  To associate your app and your website using the App Links Assistant, click **Open Digital Asset Links File Generator** from the App Links Assistant and follow these steps:

  ![app-links-assistant-dal-file-generator_2x](https://developer.android.com/static/studio/images/write/app-links-assistant-dal-file-generator_2x.png)
  **Figure 2**. Enter details about your site and app to generate a Digital Asset Links file.

    1. Enter your **Site domain** and your [**Application ID**](https://developer.android.com/studio/build/configure-app-module#set-application-id).

    2. To include support in your Digital Asset Links file for [One Tap sign-in](https://developers.google.com/identity/one-tap/android/overview), select **Support sharing credentials between the app and the website** and enter your site's sign-in URL.This adds the following string to your Digital Asset Links file declaring that your app and website share sign-in credentials: `delegate_permission/common.get_login_creds`.

    3. Specify the [signing config](https://developer.android.com/studio/publish/app-signing#sign-auto) or select a [keystore file](https://developer.android.com/studio/publish/app-signing#certificates-keystores).

  Make sure you select the right release config or keystore file for the release build or the debug config or keystore file for the debug build of your app. If you want to set up your production build, use the release config. If you want to test your build, use the debug config.

    4. Click **Generate Digital Asset Links file**.
    5. Once Android Studio generates the file, click **Save file** to download it.
    6. Upload the `assetlinks.json` file to your site, with read access for everyone, at `https://yoursite/.well-known/assetlinks.json`.

  > **Important**
  >
  > The system verifies the Digital Asset Links file via the encrypted HTTPS protocol. Make sure that the **assetlinks.json** file is accessible over an HTTPS connection, regardless of whether your app's intent filter includes **https**.

    7. Click **Link and Verify** to confirm that you've uploaded the correct Digital Asset Links file to the correct location.

  Learn more about associating your website with your app through the Digital Asset Links file in Declare website associations.

  ---

</details>

### iOS

To integrate deeplink support in iOS you need:

- Follow how to set up applink in the [official documentation](https://developer.apple.com/documentation/xcode/supporting-universal-links-in-your-app).

- Associate your app with your website. [Supporting associated domains](https://developer.apple.com/documentation/xcode/supporting-associated-domains)

- [Configuring an associated domain](https://developer.apple.com/documentation/xcode/configuring-an-associated-domain/)

- Add key `com.apple.developer.associated-domains` to `Info.plist`

Example: `https://YOUR_DOMAIN`

Example: `https://mydomain.com`

```xml
<key>com.apple.developer.associated-domains</key>
<array>
    <string>applinks:YOUR_DOMAIN</string>
</array>
```

## Offline mode

In some scenarios you would want to limit Affise network usage, to pause that activity call anywhere in your application following code after Affise start:

```typescript
Affise.settings({affiseAppId, secretKey}).start(); // Start Affise SDK
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

To disable any tracking activity, storing events and gathering device identifiers and metrics call anywhere in your application following code after Affise start:

```typescript
Affise.settings({affiseAppId, secretKey}).start(); // Start Affise SDK
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

To disable any background tracking activity, storing events and gathering device identifiers and metrics call anywhere in your application following code after Affise start:

```typescript
Affise.settings({affiseAppId, secretKey}).start(); // Start Affise SDK
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

## Is first run

```typescript
Affise.isFirstRun().then((isFirstRun) => {
  // handle
});
```

## Get referrer

Use the next public method of SDK

```typescript
Affise.getReferrerUrl().then((referrer) => {
  // handle referrer
});
```

## Get referrer value

Use the next public method of SDK to get referrer value by

```typescript
Affise.getReferrerUrlValue(ReferrerKey.CLICK_ID, (value) => {
  // handle referrer
})
```

## Get referrer on server

> `iOS Only`

> **Note**
>
> Requires [Affise Status Module](#modules) for [ios](#ios)

Use the next public method of SDK

```typescript
Affise.ios.getReferrerOnServer().then((referrer) => {
    // handle referrer
});
```

## Get referrer on server parameter

> `iOS Only`

> **Note**
>
> Requires [Affise Status Module](#modules) for [ios](#ios)

Use the next public method of SDK to get referrer parameter by

```typescript
Affise.ios.getReferrerOnServerValue(ReferrerKey.CLICK_ID, (value) => {
    // handle referrer
})
```

## Referrer keys

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
- `AFFISE_SUB_1`
- `AFFISE_SUB_2`
- `AFFISE_SUB_3`
- `AFFISE_SUB_4`
- `AFFISE_SUB_5`
- `AFFC`
- `PID`
- `SUB_1`
- `SUB_2`
- `SUB_3`
- `SUB_4`
- `SUB_5`

## Get module state

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> If `getStatus` return an error or working more than 2 minutes
>
> Please see section [validation credentials](#validate-credentials)
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

```typescript
Affise.module.getStatus(AffiseModules.STATUS, (response) => {
    // handle status response
});
```

## Platform specific

### GDPR right to be forgotten

> `Android Only`

Under the EU's General Data Protection Regulation (GDPR): An individual has the right to have their personal data erased.
To provide this functionality to user, as the app developer, you can call

```typescript
Affise.settings({affiseAppId, secretKey}).start(); // Start Affise SDK
Affise.android.forget(); // to forget users data
```

After processing such request our backend servers will delete all user's data.
To prevent library from generating new events, disable tracking just before calling Affise.forget:

```typescript
Affise.settings({affiseAppId, secretKey}).start(); // Start Affise SDK
Affise.setTrackingEnabled(false);
Affise.android.forget(); // to forget users data
```

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
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> Debug methods WON'T work on Production
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

Validate your credentials by receiving `ValidationStatus` values:

- `VALID` - your credentials are valid
- `INVALID_APP_ID` - your app id is not valid
- `INVALID_SECRET_KEY` - your SDK secretKey is not valid
- `PACKAGE_NAME_NOT_FOUND` - your application package name not found
- `NOT_WORKING_ON_PRODUCTION` - you using debug method on production
- `NETWORK_ERROR` - network or server not available (for example `Airoplane mode` is active)

```typescript
Affise
    .settings({
        affiseAppId: 'Your appId',
        secretKey: 'Your SDK secretKey',
    })
    .setProduction(false) //To enable debug methods set Production to false
    .start(); // Start Affise SDK

Affise.debug.validate((status) =>
{
    // Handle validation status
});
```

# Troubleshoots

## iOS

> **Warning**
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥
>
> This app has crashed because Affise Advertising Module is attempted to access privacy-sensitive data without a usage description.
>
> The app's `Info.plist` must contain an `NSUserTrackingUsageDescription` key with a string value explaining
>
> to the user how the app uses this data.
>
> 🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥

Open `info.plist` and add key `NSUserTrackingUsageDescription` with string value. For more information [read requirements](#requirements)
