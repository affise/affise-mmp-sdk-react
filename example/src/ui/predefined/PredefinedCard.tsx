import React, { Component } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import type { PredefinedData } from './PredefinedData';

type PredefinedCardProps = {
  predefinedData: PredefinedData;
  onRemove: () => void;
  onSelect: () => void;
};

export class PredefinedCard extends Component<PredefinedCardProps> {
  render() {
    return (
      <Pressable
        android_ripple={styles.contentRipple}
        onPress={this.props.onSelect}
        style={styles.container}
      >
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <Text style={[styles.text, styles.secondaryText]} numberOfLines={1}>
              {String(this.props.predefinedData.predefinedType)}.
            </Text>
            <Text style={[styles.text, styles.allCaps]} numberOfLines={1}>
              {String(this.props.predefinedData.predefined)}
            </Text>
          </View>
          <Text style={styles.text}>
            {String(this.props.predefinedData.data)}
          </Text>
        </View>
        <Pressable
          accessibilityLabel="Remove"
          android_ripple={{ ...styles.ripple, foreground: true }}
          onPress={this.props.onRemove}
          style={styles.removeButton}
        >
          <Image
            source={require('../../components/icons/trash.png')}
            style={styles.removeIcon}
          />
        </Pressable>
      </Pressable>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#BDBDBD',
    borderRadius: 4,
    padding: 4,
    backgroundColor: '#f9f9f9',
    elevation: 4,
    overflow: 'hidden',
  },
  content: {
    flex: 1,
    paddingHorizontal: 4,
    paddingVertical: 2,
  },
  text: {
    color: '#212121',
    fontSize: 14,
    marginVertical: 1,
  },
  titleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  allCaps: {
    textTransform: 'uppercase',
  },
  secondaryText: {
    color: '#ababab',
  },
  removeButton: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginRight: 4,
  },
  removeIcon: {
    width: 22,
    height: 22,
    tintColor: '#757575',
  },
  ripple: {
    color: '#E0E0E0',
  },
  contentRipple: {
    color: '#EEEEEE',
  },
});
