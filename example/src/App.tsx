import * as React from 'react';

import {Button, SafeAreaView, StyleSheet} from 'react-native';
import {AddToCartEvent, Affise, AffiseInitProperties, PredefinedParameters} from 'affise-attribution-lib';


export default function App() {

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
    });

    return (
        <SafeAreaView style={styles.container}>
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
