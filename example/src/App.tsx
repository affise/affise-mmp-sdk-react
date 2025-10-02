import * as React from 'react';

import {Alert, Button, SafeAreaView, StyleSheet} from 'react-native';
import {
    Affise,
    AffiseConfig,
    AffiseModules,
} from 'affise-attribution-lib';
import {AffiseWidget} from "./affise/AffiseWidget";
import {AffiseApiWidget} from "./affise/AffiseApiWidget";
import {useEffect} from "react";
import {AffiseStore} from "./affise/store/AffiseStore";
import {AffiseIndexContainer} from "./affise/components/AffiseIndexContainer";
import {AffiseButtonGroup} from "./affise/components/AffiseButtonGroup";


export default function App() {

    const [deeplink, setDeeplink] = React.useState("");
    const [tabIndex, setTabIndex] = React.useState(0);

    useEffect(() => {
        // Initialize https://github.com/affise/affise-mmp-sdk-react#initialize
        Affise
            .settings({
                affiseAppId: '129', //Change to your app id
                secretKey: '93a40b54-6f12-443f-a250-ebf67c5ee4d2', //Change to your secretId
            })
            .setConfigValue(AffiseConfig.FB_APP_ID, "1111111111111111")
            .setProduction(false) //To enable debug methods set Production to false
            .setDisableModules([
                AffiseModules.ADVERTISING,
                AffiseModules.PERSISTENT,
            ])
            .setOnInitSuccess(() => { 
                // Called if library initialization succeeded
                console.log(`Affise: init success`);
            })
            .setOnInitError((error) => { 
                // Called if library initialization failed
                console.log(`Affise: init error ${error}`);
            })
            .start(); // Start Affise SDK

        // Deeplinks https://github.com/affise/affise-mmp-sdk-react#deeplinks
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

        // SDK to SDK integrations https://github.com/affise/affise-mmp-sdk-react#sdk-to-sdk-integrations
        // new AffiseAdRevenue(AffiseAdSource.ADMOB)
        //     .setRevenue(2.5, "USD")
        //     .setNetwork("network")
        //     .setUnit("unit")
        //     .setPlacement("placement")
        //     .send();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <AffiseButtonGroup style={styles.buttonGroup}>
                <Button
                    title='API'
                    onPress={() => setTabIndex(0) }
                />
                <Button
                    title='Events'
                    onPress={() => setTabIndex(1) }
                />
                <Button
                    title='Store'
                    onPress={() => setTabIndex(2) }
                />
            </AffiseButtonGroup>

            <AffiseIndexContainer index={tabIndex} style={styles.flexWidth}>
                <AffiseApiWidget value={deeplink}/>
                <AffiseWidget/>
                <AffiseStore/>
            </AffiseIndexContainer>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonGroup: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignContent: "stretch",
        width: '100%',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 4,
        paddingRight: 4
    },
    flexWidth: {
        width: '100%',
        flex: 1
    }
});
