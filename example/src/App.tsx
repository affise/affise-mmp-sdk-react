import * as React from 'react';

import {Alert, Button, SafeAreaView, StyleSheet, View} from 'react-native';
import {
    Affise
} from 'affise-attribution-lib';
import {AffiseWidget} from "./affise/AffiseWidget";
import {AffiseApiWidget} from "./affise/AffiseApiWidget";
import {useEffect} from "react";


export default function App() {

    const [deeplink, setDeeplink] = React.useState("");
    const [hide, setHide] = React.useState(true);

    useEffect(() => {
        // Initialize https://github.com/affise/sdk-react#initialize
        Affise
            .settings({
                affiseAppId: '129', //Change to your app id
                secretKey: '93a40b54-6f12-443f-a250-ebf67c5ee4d2', //Change to your secretId
            })
            .setProduction(false) //To enable debug methods set Production to false
            .start(); // Start Affise SDK

        // Deeplinks https://github.com/affise/sdk-react#deeplinks
        Affise.registerDeeplinkCallback((value) => {
            console.log(`Deeplink: ${value}`);
            setDeeplink(`Deeplink: ${value}`);
            const parameters = Object.entries(value.parameters).map(([k, v]) => `${k}=[${v.join(", ")}]`).join("; ");
            Alert.alert("Deeplink", `${value.deeplink}\n\n` +
                `scheme: "${value.scheme}"\n` +
                `host: "${value.host}"\n` +
                `path: "${value.path}"\n` +
                `parameters: [${parameters}]`, [
                {text: 'OK', onPress: () => {}},
            ]);
        });

        // Debug: network request/response
        Affise.debug.network((_request, response) =>
        {
            // console.log(`Affise: ${request}`);
            console.log(`Affise: ${response}`);
        });

        // SDK to SDK integrations https://github.com/affise/sdk-react#sdk-to-sdk-integrations
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

            <View style={{width: '100%', flex: 1}}>
                {!hide ? <AffiseWidget/> : <AffiseApiWidget value={deeplink}  /> }
            </View>
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
