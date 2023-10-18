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
            <View  style={{width: '100%'}}>
                <View style={{ marginLeft: 8, marginRight: 8}}>
                    <TextInput value={this.state.value} style={styles.input} />
                </View>

                <ScrollView style={{width: '100%', padding: 8, marginBottom: 48}}>

                    <Button
                        title='Debug: Validate credentials'
                        onPress={() => {
                            // Debug: Validate credentials https://github.com/affise/sdk-react#validate-credentials
                            Affise.debug.validate((status) => {
                                console.log(`Validate: ${status}`);
                                this.setCallback(`Validate: ${status}`);
                            });
                        }}
                    />
                    <View style={{margin: 4}}/>

                    <Button
                        title='register Deeplink Callback'
                        onPress={() => {
                            // Deeplinks https://github.com/affise/sdk-react#deeplinks
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
                            // Get referrer parameter https://github.com/affise/sdk-react#get-referrer-value
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
                            // Get referrer https://github.com/affise/sdk-react#get-referrer
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
                            // Get module state https://github.com/affise/sdk-react#get-module-state
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
                            // StoreKit Ad Network https://github.com/affise/sdk-react#storekit-ad-network
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
                            // StoreKit Ad Network https://github.com/affise/sdk-react#storekit-ad-network
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
                            // Offline mode https://github.com/affise/sdk-react#offline-mode
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
                                // Offline mode https://github.com/affise/sdk-react#offline-mode
                                Affise.setOfflineModeEnabled(!value);
                                this.setCallback(`setOfflineModeEnabled: ${!value}`);
                            });
                        }}
                    />
                    <View style={{margin: 4}}/>

                    <Button
                        title='get Providers'
                        onPress={() => {
                            // Get providers https://github.com/affise/sdk-react#get-providers
                            Affise.getProviders().then( (providers) => {
                                const key = ProviderType.AFFISE_APP_TOKEN;
                                this.setCallback(`getProviders: ${key} = ${providers[key]}`);
                            });
                        }}
                    />
                    <View style={{margin: 4}}/>

                    <Button
                        title='get random user Id'
                        onPress={() => {
                            // Get random user Id https://github.com/affise/sdk-react#get-random-user-id
                            Affise.getRandomUserId().then( (value) => {
                                this.setCallback(`getRandomUserId: ${value}`);
                            });
                        }}
                    />
                    <View style={{margin: 4}}/>

                    <Button
                        title='get random device Id'
                        onPress={() => {
                            // Get random device Id https://github.com/affise/sdk-react#get-random-device-id
                            Affise.getRandomDeviceId().then( (value) => {
                                this.setCallback(`getRandomDeviceId: ${value}`);
                            });
                        }}
                    />
                    <View style={{margin: 4}}/>

                </ScrollView>
            </View>
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
