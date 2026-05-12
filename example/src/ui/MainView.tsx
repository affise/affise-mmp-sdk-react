import * as React from 'react';

import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { EventsView } from './events/EventsView';
import { ApiView } from './api/ApiView';
import { StoreView } from './store/StoreView';
import { SettingsView } from './settings/SettingsView';
import { PredefinedView } from './predefined/PredefinedView';
import { TabsViewPager } from '../components/TabsViewPager';
import { Tabs } from '../components/Tabs';
import { appSettings } from '../settings/AppSettings';

type MainViewProps = {
  deeplink: string;
};

const tabs = [
  {
    title: 'API',
    icon: require('../components/icons/arrow-right-arrow-left.png'),
  },
  {
    title: 'Events',
    icon: require('../components/icons/upload.png'),
  },
  {
    title: 'Store',
    icon: require('../components/icons/shop.png'),
  },
];

export function MainView({ deeplink }: MainViewProps) {
  const [tabIndex, setTabIndex] = React.useState(0);
  const [lastTabIndex, setLastTabIndex] = React.useState(0);
  const [useCustomPredefined, setUseCustomPredefined] = React.useState(
    appSettings.toState().useCustomPredefined
  );

  React.useEffect(() => {
    const loadSettings = async () => {
      await appSettings.load();
      setUseCustomPredefined(appSettings.toState().useCustomPredefined);
    };

    void loadSettings();
  }, []);

  const openTab = (index: number) => {
    setLastTabIndex(index);
    setTabIndex(index);
  };

  const toggleSettings = () => {
    setTabIndex(tabIndex === 3 ? lastTabIndex : 3);
  };

  const togglePredefined = () => {
    setTabIndex(tabIndex === 4 ? 1 : 4);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#1769aa" barStyle="light-content" />
      {tabIndex !== 3 && tabIndex !== 4 ? (
        <Tabs index={tabIndex} onChange={openTab} style={styles.tabsPanel}>
          {tabs.map((tab) => (
            <View key={tab.title} style={styles.tabContent}>
              <Image source={tab.icon} style={styles.tabIcon} />
              <Text style={styles.tabText}>{tab.title}</Text>
            </View>
          ))}
        </Tabs>
      ) : null}

      <TabsViewPager
        index={tabIndex}
        style={[styles.flexWidth, styles.tabsViewPager]}
      >
        <ApiView value={deeplink} />
        <EventsView />
        <StoreView />
        <SettingsView />
        <PredefinedView onUseCustomPredefinedChange={setUseCustomPredefined} />
      </TabsViewPager>

      {tabIndex !== 4 ? (
        <Pressable
          accessibilityLabel="Settings"
          style={styles.fab}
          onPress={toggleSettings}
        >
          <Image
            source={
              tabIndex === 3
                ? require('../components/icons/check.png')
                : require('../components/icons/gear.png')
            }
            style={styles.fabIcon}
          />
        </Pressable>
      ) : null}

      {tabIndex === 1 || tabIndex === 4 ? (
        <Pressable
          accessibilityLabel="Edit"
          style={[
            styles.fab,
            tabIndex === 1 ? styles.editFab : null,
            useCustomPredefined ? styles.customPredefinedFab : null,
          ]}
          onPress={togglePredefined}
        >
          <Image
            source={
              tabIndex === 4
                ? require('../components/icons/check.png')
                : require('../components/icons/pencil.png')
            }
            style={styles.fabIcon}
          />
        </Pressable>
      ) : null}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f6f8',
  },
  tabsPanel: {
    backgroundColor: '#2196f3',
    paddingHorizontal: 8,
    paddingBottom: 4,
    elevation: 6,
  },
  tabIcon: {
    width: 24,
    height: 24,
    tintColor: '#ffffff',
    marginRight: 8,
  },
  tabText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 4,
  },
  tabsViewPager: {},
  flexWidth: {
    width: '100%',
    flex: 1,
  },
  fab: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#266ba4',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 6,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  fabIcon: {
    width: 24,
    height: 24,
    tintColor: '#FFFFFF',
  },
  editFab: {
    bottom: 88,
  },
  customPredefinedFab: {
    backgroundColor: '#d32f2f',
  },
});
