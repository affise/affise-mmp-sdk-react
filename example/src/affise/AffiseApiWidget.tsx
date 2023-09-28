import React, {Component} from "react";
import {Button, ScrollView, StyleSheet, TextInput, View} from "react-native";
import {Affise, AffiseModules, ProviderType, ReferrerKey, SKAdNetwork} from 'affise-attribution-lib';

interface Props {
    value?: string;
}

interface State {
    value?: string;
}

export class AffiseApiWidget extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };
    }

    setCallback = (callback: string) => {
        this.setState({
            value: callback
        });
    };

    render() {
        return (
            <ScrollView style={{width: '100%', padding: 8}}>
                <View style={{ marginBottom: 8}}>
                    <TextInput value={this.state.value} style={styles.input} />
                </View>

                <Button
                    title='register Deeplink Callback'
                    onPress={() => {
                        Affise.registerDeeplinkCallback((url) => {
                            console.log(`Deeplink: ${url}`);
                            this.setCallback(`Deeplink: ${url}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='get Referrer Value'
                    onPress={() => {
                        Affise.android.getReferrerValue(ReferrerKey.CLICK_ID, (value) => {
                            console.log(`ReferrerValue: ${value}`);
                            this.setCallback(`ReferrerValue: ${value}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='get Referrer'
                    onPress={() => {
                        Affise.android.getReferrer((ref) => {
                            console.log(`Referrer: ${ref}`);
                            this.setCallback(`Referrer: ${ref}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='get Status'
                    onPress={() => {
                        Affise.getStatus(AffiseModules.STATUS, (status) => {
                            console.log(`Status: ${JSON.stringify(status)}`);
                            this.setCallback(`Status: ${JSON.stringify(status)}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='SKAd register'
                    onPress={() => {
                        Affise.ios.registerAppForAdNetworkAttribution((error) => {
                            console.log(`SKAd register app: ${error}`);
                            this.setCallback(`SKAd register app: ${error}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='SKAd update'
                    onPress={() => {
                        Affise.ios.updatePostbackConversionValue(1n, SKAdNetwork.CoarseConversionValue.medium, (error) => {
                            console.log(`SKAd updatePostbackConversionValue: ${error}`);
                            this.setCallback(`SKAd updatePostbackConversionValue: ${error}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='is Offline Mode Enabled'
                    onPress={() => {
                        Affise.isOfflineModeEnabled().then( (value) => {
                            this.setCallback(`isOfflineModeEnabled: ${value}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='set Offline Mode Enabled'
                    onPress={() => {
                        Affise.isOfflineModeEnabled().then( (value) => {
                            Affise.setOfflineModeEnabled(!value);
                            this.setCallback(`setOfflineModeEnabled: ${!value}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

                <Button
                    title='get Providers'
                    onPress={() => {
                        Affise.getProviders().then( (providers) => {
                            const key = ProviderType.AFFISE_APP_TOKEN;
                            this.setCallback(`getProviders: ${key} = ${providers[key]}`);
                        });
                    }}
                />
                <View style={{margin: 4}}/>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#2196F3',
        padding: 8,
    },
});
