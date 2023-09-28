import * as React from 'react';

import {Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {
    Affise,
} from 'affise-attribution-lib';
import {AffiseWidget} from "./affise/AffiseWidget";
import {AffiseApiWidget} from "./affise/AffiseApiWidget";
import {useEffect} from "react";


export default function App() {

    const [deeplink, setDeeplink] = React.useState("");
    const [hide, setHide] = React.useState(true);

    useEffect(() => {
        Affise.init({
            affiseAppId: '129', //Change to your app id
            secretKey: '93a40b54-6f12-443f-a250-ebf67c5ee4d2', //Change to your secretId
        });

        Affise.registerDeeplinkCallback((url) => {
            console.log(`Deeplink: ${url}`);
            setDeeplink(`Deeplink: ${url}`);
        });

        // new AffiseAdRevenue(AffiseAdSource.ADMOB)
        //     .setRevenue(2.5, "USD")
        //     .setNetwork("network")
        //     .setUnit("unit")
        //     .setPlacement("placement")
        //     .send();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={{width: '100%', paddingTop: 8, paddingLeft:8, paddingRight: 8}}>
                <Button
                    title='API / Events'
                    onPress={() => {
                        setHide(!hide);
                    }}
                />
            </View>


            {!hide ? <AffiseWidget/> : <AffiseApiWidget value={deeplink}  /> }
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
