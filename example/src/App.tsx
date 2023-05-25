import * as React from 'react';

import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import {
    Affise,
    AffiseInitProperties,
    PredefinedParameters,
    AddToCartEvent,
    ReferrerKey
} from 'affise-attribution-lib';


export default function App() {

    const [referrerValue, setReferrerValue] = React.useState("");
    const [referrer, setReferrer] = React.useState("");

    React.useEffect(() => {
        Affise.init(
            new AffiseInitProperties(
                'Your appId', //Change to your app id
                true, //Add your custom rule to determine if this is a production build
                null, //Change to your partParamName
                null, //Change to your partParamNameToken
                null, //Change to your appToken
                'Your secretId' //Change to your secretId
            )
        );

        Affise.registerDeeplinkCallback((url) => {
            console.log(`Deeplink: ${url}`);
        });

        Affise.android.getReferrerValue(ReferrerKey.CLICK_ID, (value) => {
            console.log(`ReferrerValue: ${value}`);
            setReferrerValue(`ReferrerValue: ${value}`);
        });

        Affise.ios.registerAppForAdNetworkAttribution((error) => {
            console.log(`SKAd register app: ${error}`);
        });

        Affise.ios.updatePostbackConversionValue(1, "medium", (error) => {
            console.log(`SKAd updatePostbackConversionValue: ${error}`);
        });

        Affise.getReferrer().then(ref => {
            setReferrer(ref);
        });
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Text>
                {referrer}
            </Text>
            <Text>
                {referrerValue}
            </Text>
            <Button
                title='Add To Cart'
                onPress={() => {
                    const event = new AddToCartEvent(
                        {items: 'vegetables'},
                        Date.now(),
                        "cart"
                    );
                    event.addPredefinedParameter(
                        PredefinedParameters.DESCRIPTION,
                        "best before 2029",
                    );
                    Affise.sendEvent(event);
                }}
            >
            </Button>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
