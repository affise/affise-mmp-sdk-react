import React, { Component } from 'react';

import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SelectDialogue } from '../../components/SelectDialogue';
import type { PredefinedData, PredefinedType } from './PredefinedData';
import {
  predefinedTypes,
  predefinedValues,
  defaultPredefinedValue,
  defaultPredefinedType,
} from './PredefinedData';

type NewPredefinedState = {
  predefinedType: PredefinedType;
  predefined?: string;
  isPredefinedTypeOpen: boolean;
  isPredefinedValueOpen: boolean;
  inputValue: string;
  inputError: string;
};

type NewPredefinedProps = {
  onAdd: (predefinedData: PredefinedData) => void;
  selectedPredefinedData?: PredefinedData;
};

export class NewPredefined extends Component<
  NewPredefinedProps,
  NewPredefinedState
> {
  state: NewPredefinedState = {
    predefinedType: defaultPredefinedType,
    predefined: defaultPredefinedValue,
    isPredefinedTypeOpen: false,
    isPredefinedValueOpen: false,
    inputValue: '',
    inputError: '',
  };

  componentDidUpdate(previousProps: NewPredefinedProps) {
    const selectedPredefinedData = this.props.selectedPredefinedData;

    if (
      selectedPredefinedData == null ||
      selectedPredefinedData === previousProps.selectedPredefinedData
    ) {
      return;
    }

    this.setState({
      predefinedType: selectedPredefinedData.predefinedType,
      predefined: selectedPredefinedData.predefined,
      inputValue: String(selectedPredefinedData.data),
      inputError: '',
      isPredefinedTypeOpen: false,
      isPredefinedValueOpen: false,
    });
  }

  private togglePredefinedType = () => {
    this.setState(({ isPredefinedTypeOpen }) => ({
      isPredefinedTypeOpen: !isPredefinedTypeOpen,
    }));
  };

  private selectPredefinedType = (predefined: string) => {
    const predefinedType = predefined as PredefinedType;
    this.setState({
      predefinedType,
      predefined: predefinedValues[predefinedType][0],
      isPredefinedTypeOpen: false,
      isPredefinedValueOpen: false,
      inputError: '',
    });
  };

  private togglePredefinedValue = () => {
    this.setState(({ isPredefinedValueOpen }) => ({
      isPredefinedValueOpen: !isPredefinedValueOpen,
    }));
  };

  private selectPredefinedValue = (predefined: string) => {
    this.setState({
      predefined,
      isPredefinedValueOpen: false,
    });
  };

  private setInputValue = (inputValue: string) => {
    this.setState({ inputValue, inputError: '' });
  };

  private isDisabled = () => {
    return this.state.inputValue.trim().length === 0;
  };

  private isNumericInput = () => {
    return (
      this.state.predefinedType === 'PredefinedFloat' ||
      this.state.predefinedType === 'PredefinedLong'
    );
  };

  private toPredefinedDataValue = () => {
    if (this.state.predefinedType === 'PredefinedString') {
      return this.state.inputValue;
    }

    if (this.state.predefinedType === 'PredefinedLong') {
      return Math.trunc(Number(this.state.inputValue));
    }

    return Number(this.state.inputValue);
  };

  private hasValidDataType = () => {
    if (!this.isNumericInput()) {
      return true;
    }

    return !Number.isNaN(Number(this.state.inputValue.trim()));
  };

  private addPredefined = () => {
    if (this.isDisabled()) {
      return;
    }

    if (!this.state.predefined) return;

    if (!this.hasValidDataType()) {
      this.setState({
        inputError: 'Not a number',
        inputValue: '',
      });
      return;
    }

    this.props.onAdd({
      predefinedType: this.state.predefinedType,
      predefined: this.state.predefined,
      data: this.toPredefinedDataValue(),
    });

    this.setState({ inputValue: '' });
  };

  render() {
    return (
      <View style={styles.container}>
        <Pressable
          accessibilityRole="button"
          onPress={this.togglePredefinedType}
          style={styles.select}
        >
          <Text style={styles.selectText}>{this.state.predefinedType}</Text>
        </Pressable>

        <SelectDialogue
          items={predefinedTypes}
          uppercase={false}
          onClose={this.togglePredefinedType}
          onSelect={this.selectPredefinedType}
          visible={this.state.isPredefinedTypeOpen}
        />

        <Pressable
          accessibilityRole="button"
          onPress={this.togglePredefinedValue}
          style={styles.select}
        >
          <Text style={[styles.selectText, styles.allCaps]}>
            {this.state.predefined}
          </Text>
        </Pressable>

        <SelectDialogue
          items={predefinedValues[this.state.predefinedType]}
          uppercase={true}
          onClose={this.togglePredefinedValue}
          onSelect={this.selectPredefinedValue}
          visible={this.state.isPredefinedValueOpen}
        />

        <TextInput
          autoCapitalize="none"
          keyboardType={this.isNumericInput() ? 'numeric' : 'default'}
          onChangeText={this.setInputValue}
          placeholder={this.state.inputError || 'Data'}
          placeholderTextColor={this.state.inputError ? '#D32F2F' : undefined}
          style={[
            styles.input,
            this.state.inputError ? styles.inputError : null,
          ]}
          value={this.state.inputValue}
        />

        <View style={styles.button}>
          <Button
            disabled={this.isDisabled()}
            title="Add Predefined"
            onPress={this.addPredefined}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 12,
  },
  select: {
    width: '100%',
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginBottom: 12,
  },
  selectText: {
    color: '#212121',
    fontSize: 16,
  },
  allCaps: {
    textTransform: 'uppercase',
  },
  input: {
    width: '100%',
    minHeight: 44,
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
    color: '#212121',
    backgroundColor: '#ffffff',
  },
  inputError: {
    borderColor: '#D32F2F',
  },
  button: {
    marginTop: 12,
  },
});
