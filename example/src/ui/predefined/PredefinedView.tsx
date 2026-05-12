import React, { Component } from 'react';
import { FlatList, StyleSheet, Switch, Text, View } from 'react-native';
import { appSettings } from '../../settings/AppSettings';
import { NewPredefined } from './NewPredefined';
import { PredefinedCard } from './PredefinedCard';
import type { PredefinedData } from './PredefinedData';

type PredefinedViewState = {
  useCustomPredefined: boolean;
  predefinedData: PredefinedData[];
  selectedPredefinedData?: PredefinedData;
};

type PredefinedViewProps = {
  onUseCustomPredefinedChange?: (useCustomPredefined: boolean) => void;
};

export class PredefinedView extends Component<
  PredefinedViewProps,
  PredefinedViewState
> {
  state: PredefinedViewState = {
    useCustomPredefined: appSettings.toState().useCustomPredefined,
    predefinedData: appSettings.toState().predefinedData,
    selectedPredefinedData: undefined,
  };

  async componentDidMount() {
    await appSettings.load();
    const settings = appSettings.toState();

    this.setState({
      useCustomPredefined: settings.useCustomPredefined,
      predefinedData: settings.predefinedData,
      selectedPredefinedData: undefined,
    });
  }

  private setUseCustomPredefined = (useCustomPredefined: boolean) => {
    this.setState({ useCustomPredefined });
    this.props.onUseCustomPredefinedChange?.(useCustomPredefined);
    void appSettings.setUseCustomPredefined(useCustomPredefined);
  };

  private addPredefined = (predefined: PredefinedData) => {
    const predefinedIndex = this.state.predefinedData.findIndex(
      (item) => item.predefined === predefined.predefined
    );

    const predefinedData =
      predefinedIndex === -1
        ? [...this.state.predefinedData, predefined]
        : this.state.predefinedData.map((item, index) =>
            index === predefinedIndex
              ? {
                  ...item,
                  data: predefined.data,
                }
              : item
          );

    this.setState({ predefinedData });
    void appSettings.setPredefinedData(predefinedData);
  };

  private removePredefined = (index: number) => {
    const predefinedData = this.state.predefinedData.filter(
      (_, itemIndex) => itemIndex !== index
    );

    this.setState({ predefinedData, selectedPredefinedData: undefined });
    void appSettings.setPredefinedData(predefinedData);
  };

  private selectPredefined = (predefinedData: PredefinedData) => {
    this.setState({ selectedPredefinedData: predefinedData });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topPanel}>
          <Text style={styles.label}>Use custom Predefined</Text>
          <Switch
            trackColor={{ true: '#266ba4', false: '#767577' }}
            thumbColor={this.state.useCustomPredefined ? '#4dabf5' : '#f4f3f4'}
            onValueChange={this.setUseCustomPredefined}
            value={this.state.useCustomPredefined}
          />
          <NewPredefined
            onAdd={this.addPredefined}
            selectedPredefinedData={this.state.selectedPredefinedData}
          />
        </View>

        <FlatList
          contentContainerStyle={styles.content}
          data={this.state.predefinedData}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          keyExtractor={(_, index) => `${index}`}
          renderItem={({ item, index }) => (
            <PredefinedCard
              onRemove={() => this.removePredefined(index)}
              onSelect={() => this.selectPredefined(item)}
              predefinedData={item}
            />
          )}
          style={styles.list}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
  },
  content: {
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 88,
  },
  topPanel: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2196f3',
    paddingHorizontal: 16,
    paddingVertical: 12,
    elevation: 6,
  },
  label: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    paddingRight: 16,
  },
  separator: {
    height: 8,
  },
  list: {
    width: '100%',
    flex: 1,
  },
});
