import React, {Component} from "react";
import {View, ViewProps} from "react-native";


interface Props extends ViewProps {
    index?: number;
}

interface State {
    index?: number;
}

export class AffiseIndexContainer extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <View style={this.props.style}>
                { (() => {
                    if (this.props.index == null) return null;
                    return React.Children.toArray(this.props.children)[this.props.index];
                })() }
            </View>
        );
    }
}
