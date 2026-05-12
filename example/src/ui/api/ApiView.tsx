import React, {Component} from "react";
import {FlatList, StyleSheet, TextInput, View} from "react-native";
import {AffiseButton} from "../../components/AffiseButton";
import {api, ApiFactory} from "../../factories/ApiFactory";

interface Props {
    value?: string;
}

interface State {
    value?: string;
}

export class ApiView extends Component<Props, State> {

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
            <View style={styles.defaultView}>
                <View style={{marginLeft: 8, marginRight: 8, marginTop: 8}}>
                    <TextInput value={this.state.value} style={styles.input} />
                </View>

                <FlatList
                    style={styles.defaultList}
                    contentContainerStyle={styles.defaultListContent}
                    ItemSeparatorComponent={() => <View style={styles.defaultListSeparator}/>}
                    data={this.apis}
                    renderItem={({item}) => (
                        <AffiseButton
                            color={"#2196f3"}
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
    defaultView: {
        width: '100%',
        flex: 1,
    },
    defaultList: {
        width: '100%',
    },
    defaultListContent: {
        padding: 8,
    },
    defaultListSeparator: {
        height: 8
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: '#2196F3',
        backgroundColor: '#ffffff',
        padding: 8,
    },
});
