import React, { Component } from 'react';
import { Pressable, View, StyleSheet, ViewProps } from 'react-native';

interface Props extends ViewProps {
  index?: number;
  onChange?: (index: number) => void;
}

interface State {
  index?: number;
}

export class Tabs extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      ...props,
    };
  }

  openTab = (index: number) => {
    this.props.onChange?.(index);
  };

  render() {
    return (
      <View style={[this.props.style, styles.defaultTabs]}>
        {React.Children.map(
          this.props.children,
          (child, index) => (
            <Pressable
              style={[
                styles.defaultTab,
                this.props.index === index ? styles.activeTab : null,
              ]}
              android_ripple={styles.defaultRiple}
              onPress={() => this.openTab(index) }
            >
              {child}
            </Pressable>
          )
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeTab: {
    borderBottomColor: '#a6d2f3',
  },
  defaultTab: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 3,
    borderBottomColor: '#a6d2f300',
    height: 52,
  },
  defaultRiple: {
    color: '#1769aa',
  },
  defaultTabs: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignContent: 'stretch',
    width: '100%',
  },
});
