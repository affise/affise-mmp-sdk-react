import React, {Component} from "react";
import {StyleSheet, View, ViewProps} from "react-native";


interface Props extends ViewProps {
    index?: number;
}

interface State {
    index?: number;
}

export class AffiseButtonGroup extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <View style={this.props.style}>
                {React.Children.map(this.props.children, child =>
                    <View style={styles.button}>
                        {child}
                    </View>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        marginStart: 4,
        marginEnd: 4,
    },
});
