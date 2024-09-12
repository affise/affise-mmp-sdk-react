import React, {Component} from "react";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import {AffiseButton} from "./components/AffiseButton";
import {api, ApiFactory} from "./factories/ApiFactory";

interface Props {
    value?: string;
}

interface State {
    value?: string;
}

export class AffiseApiWidget extends Component<Props, State> {

    apiFactory: ApiFactory;
    apis: api[];

    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };

        this.apiFactory = new ApiFactory(this.output);
        this.apis = this.apiFactory.create();
    }

    output = (value: string) => {
        this.setState({
            value: value
        });
    };

    render() {
        return (
            <View style={{width: '100%'}}>
                <View style={{marginLeft: 8, marginRight: 8}}>
                    <TextInput value={this.state.value} style={styles.input} />
                </View>

                <FlatList
                    style={{width: '100%', padding: 8}}
                    ItemSeparatorComponent={() => <View style={{height: 8}}/>}
                    data={this.apis}
                    renderItem={({item}) => (
                        <AffiseButton
                            color={"#2196F3"}
                            title={item.title}
                            onPress={item.call}
                        />
                    )}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#2196F3',
        padding: 8,
    },
});
