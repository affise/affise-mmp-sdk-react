import React, { Component } from 'react';
import { Affise } from 'affise-attribution-lib';
import {
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';
import { appSettings, type AppSettingsState } from '../../settings/AppSettings';

type SettingsViewState = AppSettingsState;

export class SettingsView extends Component<
  Record<string, never>,
  SettingsViewState
> {
  state: SettingsViewState = appSettings.toState();

  async componentDidMount() {
    await appSettings.load();

    const [offlineMode, backgroundTracking, tracking] = await Promise.all([
      Affise.isOfflineModeEnabled(),
      Affise.isBackgroundTrackingEnabled(),
      Affise.isTrackingEnabled(),
    ]);

    this.setState({
      ...appSettings.toState(),
      offlineMode,
      backgroundTracking,
      tracking,
    });

    void appSettings.setOfflineMode(offlineMode);
    void appSettings.setBackgroundTracking(backgroundTracking);
    void appSettings.setTracking(tracking);
  }

  private setDomain = (domain: string) => {
    this.setState({ domain });
    void appSettings.setDomain(domain);
  };

  private setProductionMode = (isProduction: boolean) => {
    this.setState({ isProduction });
    void appSettings.setIsProduction(isProduction);
  };

  private setOfflineMode = (offlineMode: boolean) => {
    this.setState({ offlineMode });
    Affise.setOfflineModeEnabled(offlineMode);
    void appSettings.setOfflineMode(offlineMode);
  };

  private setBackgroundTracking = (backgroundTracking: boolean) => {
    this.setState({ backgroundTracking });
    Affise.setBackgroundTrackingEnabled(backgroundTracking);
    void appSettings.setBackgroundTracking(backgroundTracking);
  };

  private setTracking = (tracking: boolean) => {
    this.setState({ tracking });
    Affise.setTrackingEnabled(tracking);
    void appSettings.setTracking(tracking);
  };

  private setDebugRequest = (debugRequest: boolean) => {
    this.setState({ debugRequest });
    void appSettings.setDebugRequest(debugRequest);
  };

  private setDebugResponse = (debugResponse: boolean) => {
    this.setState({ debugResponse });
    void appSettings.setDebugResponse(debugResponse);
  };

  private setAppId = (affiseAppId: string) => {
    this.setState({ affiseAppId });
    void appSettings.setAffiseAppId(affiseAppId);
  };

  private setSecretKey = (secretKey: string) => {
    this.setState({ secretKey });
    void appSettings.setSecretKey(secretKey);
  };

  render() {
    return (
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        style={styles.container}
      >
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.setDomain}
          placeholder="Domain"
          style={styles.input}
          value={this.state.domain}
        />

        <View style={styles.row}>
          <Text style={styles.label}>Production mode</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.isProduction ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setProductionMode}
            value={this.state.isProduction}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Offline Mode</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.offlineMode ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setOfflineMode}
            value={this.state.offlineMode}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Background Tracking</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.backgroundTracking ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setBackgroundTracking}
            value={this.state.backgroundTracking}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Tracking</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.tracking ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setTracking}
            value={this.state.tracking}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Debug Request</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.debugRequest ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setDebugRequest}
            value={this.state.debugRequest}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Debug Response</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.debugResponse ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setDebugResponse}
            value={this.state.debugResponse}
          />
        </View>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.setAppId}
          placeholder="App ID"
          style={styles.input}
          value={this.state.affiseAppId}
        />

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={this.setSecretKey}
          placeholder="Secret Key"
          style={styles.input}
          value={this.state.secretKey}
        />

        <Text style={styles.version}>version {Affise.debug.version()}</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  content: {
    padding: 16,
    paddingBottom: 72,
  },
  input: {
    width: '100%',
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    paddingHorizontal: 12,
    color: '#212121',
    marginBottom: 12,
    backgroundColor: '#ffffff',
  },
  row: {
    width: '100%',
    minHeight: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  label: {
    flex: 1,
    color: '#212121',
    fontSize: 16,
    paddingRight: 16,
  },
  version: {
    width: '100%',
    color: '#757575',
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  },
});
