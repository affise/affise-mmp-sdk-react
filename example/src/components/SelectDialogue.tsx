import React, { Component } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text } from 'react-native';

type SelectDialogueProps<T extends string> = {
  visible: boolean;
  uppercase?: boolean;
  items: T[];
  onClose: () => void;
  onSelect: (item: T) => void;
};

export class SelectDialogue<T extends string> extends Component<
  SelectDialogueProps<T>
> {
  private renderItem = ({ item }: { item: T }) => (
    <Pressable
      accessibilityRole="button"
      android_ripple={styles.ripple}
      onPress={() => this.props.onSelect(item)}
      style={styles.item}
    >
      <Text style={[styles.itemText, this.props.uppercase ? styles.allCaps : null]}>{item}</Text>
    </Pressable>
  );

  render() {
    return (
      <Modal
        animationType="fade"
        onRequestClose={this.props.onClose}
        transparent
        visible={this.props.visible}
      >
        <Pressable
          onPress={this.props.onClose}
          style={styles.backdrop}
        >
          <Pressable style={styles.dialog}>
            <FlatList
              data={this.props.items}
              keyExtractor={(item) => item}
              renderItem={this.renderItem}
            />
          </Pressable>
        </Pressable>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#00000066',
  },
  dialog: {
    width: '100%',
    maxHeight: '70%',
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    overflow: 'hidden',
    elevation: 12,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  item: {
    minHeight: 44,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EEEEEE',
  },
  itemText: {
    color: '#212121',
    fontSize: 16,
  },
  ripple: {
    color: '#E0E0E0',
  },
  allCaps: {
    textTransform: 'uppercase',
  },
});
