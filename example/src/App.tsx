import * as React from 'react';

import { Alert } from 'react-native';
import { Affise, AffiseConfig, AffiseModules } from 'affise-attribution-lib';
import { useEffect } from 'react';
import { MainView } from './ui/MainView';
import { appSettings } from './settings/AppSettings';

async function initializeAffise(setDeeplink: (deeplink: string) => void) {
  await appSettings.load();
  const settings = appSettings.toState();

  // Initialize https://github.com/affise/affise-mmp-sdk-react#initialize
  Affise.settings({
    affiseAppId: settings.affiseAppId, //Change to your app id
    secretKey: settings.secretKey, //Change to your secretId
  })
    .setConfigValue(AffiseConfig.FB_APP_ID, settings.fbAppId)
    .setProduction(settings.isProduction) //To enable debug methods set Production to false
    .setDomain(settings.domain)
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

  // Debug: network request/response
  Affise.debug.network((request, response) => {
    const currentSettings = appSettings.toState();

    if (currentSettings.debugRequest) {
      console.log(`Affise: ${request}`);
    }
    if (currentSettings.debugResponse) {
      console.log(`Affise: ${response}`);
    }
  });

  // Deeplinks https://github.com/affise/affise-mmp-sdk-react#deeplinks
  Affise.registerDeeplinkCallback((value) => {
    console.log(`Deeplink: ${value}`);
    setDeeplink(`Deeplink: ${value}`);
    const parameters = Object.entries(value.parameters)
      .map(([k, v]) => `${k}=[${v.join(', ')}]`)
      .join('; ');
    Alert.alert(
      'Deeplink',
      `${value.deeplink}\n\n` +
        `scheme: "${value.scheme}"\n` +
        `host: "${value.host}"\n` +
        `path: "${value.path}"\n` +
        `parameters: [${parameters}]`,
      [{ text: 'OK', onPress: () => {} }]
    );
  });

  // SDK to SDK integrations https://github.com/affise/affise-mmp-sdk-react#sdk-to-sdk-integrations
  // new AffiseAdRevenue(AffiseAdSource.ADMOB)
  //     .setRevenue(2.5, "USD")
  //     .setNetwork("network")
  //     .setUnit("unit")
  //     .setPlacement("placement")
  //     .send();
}

export default function App() {
  const [deeplink, setDeeplink] = React.useState('');

  useEffect(() => {
    void initializeAffise(setDeeplink);
  }, []);

  return <MainView deeplink={deeplink} />;
}
