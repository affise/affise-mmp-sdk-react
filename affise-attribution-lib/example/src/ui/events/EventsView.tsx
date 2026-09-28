import React, { Component } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import {
  AffiseEvent,
  BaseSubscriptionEvent,
  PredefinedFloat,
  PredefinedLong,
  PredefinedString,
} from 'affise-attribution-lib';
import { DefaultEventsFactory } from '../../factories/DefaultEventsFactory';
import { AffiseButton } from '../../components/AffiseButton';
import { SimpleEventsFactory } from '../../factories/SimpleEventsFactory';
import { appSettings } from '../../settings/AppSettings';

export class EventsView extends Component {
  events: AffiseEvent[];

  constructor(props: { events: AffiseEvent[] }) {
    super(props);
    this.events = this.getEvents();
  }

  async componentDidMount() {
    await appSettings.load();
    this.events = this.getEvents();
    this.forceUpdate();
  }

  private getEvents(): AffiseEvent[] {
    return (
      appSettings.toState().useCustomPredefined
        ? new SimpleEventsFactory()
        : new DefaultEventsFactory()
    ).createEvents();
  }

  private applyCustomPredefines(item: AffiseEvent) {
    const settings = appSettings.toState();

    if (!settings.useCustomPredefined) {
      return;
    }

    settings.predefinedData.forEach((predefinedData) => {
      switch (predefinedData.predefinedType) {
        case 'PredefinedFloat':
          item.addPredefinedFloat(
            predefinedData.predefined as PredefinedFloat,
            Number(predefinedData.data)
          );
          break;
        case 'PredefinedLong':
          item.addPredefinedLong(
            predefinedData.predefined as PredefinedLong,
            BigInt(Math.trunc(Number(predefinedData.data)))
          );
          break;
        case 'PredefinedString':
          item.addPredefinedString(
            predefinedData.predefined as PredefinedString,
            String(predefinedData.data)
          );
          break;
      }
    });
  }

  render() {
    return (
      <FlatList
        style={styles.defaultList}
        contentContainerStyle={styles.defaultListContent}
        ItemSeparatorComponent={() => (
          <View style={styles.defaultListSeparator} />
        )}
        data={this.events}
        renderItem={({ item }) => (
          <AffiseButton
            color={
              item instanceof BaseSubscriptionEvent ? '#F44336' : '#2196f3'
            }
            title={toName(item.constructor.name)}
            onPress={() => {
              this.applyCustomPredefines(item);
              // Events tracking https://github.com/affise/affise-mmp-sdk-react#events-tracking
              // Send event
              item.send();
              // or
              // Affise.sendEvent(item);
              // or
              // item.sendNow(() => {
              //     console.log(`success: ${item.constructor.name}`);
              // }, (status) => {
              //     console.log(`failed: ${item.constructor.name} status: ${status}`);
              // });
            }}
          />
        )}
      />
    );
  }
}

function toName(text: string): string {
  return text
    .replace('Event', '')
    .replace(/(?<=.)([A-Z]|\d+)/g, (letter) => ` ${letter}`);
}

const styles = StyleSheet.create({
  defaultList: {
    width: '100%',
  },
  defaultListContent: {
    padding: 8,
  },
  defaultListSeparator: {
    height: 8,
  },
});
