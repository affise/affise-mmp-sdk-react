import React, {Component} from "react";
import {Button, StyleSheet, Text, View, ViewProps} from "react-native";
import type {AffiseProduct} from "../../../../src/module/subscription/AffiseProduct";


interface Props extends ViewProps {
    product: AffiseProduct
    onBuy?: ((product: AffiseProduct) => void)
}

interface State {
    product: AffiseProduct
}

export class AffiseProductView extends Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <View style={[styles.view, this.props.style]}>

                <View style={styles.info}>
                    <Text style={styles.title}>{this.props.product.title}</Text>
                    <Text style={styles.description}>{this.props.product.description}</Text>
                    {(()=> {
                        const sub = this.props.product.subscription;
                        if (sub == null) return null;
                        return <Text>{sub.numberOfUnits} {sub.timeUnit}</Text>;
                    })()}
                </View>

                <Text style={styles.price}>{this.props.product.price?.formattedPrice}</Text>

                <Button
                    title="Buy"
                    onPress={() => {
                        this.props.onBuy?.(this.props.product);
                    }}
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 8,
        backgroundColor: "#1b1b1b22",
        borderRadius: 8
    },
    info: {
        flexDirection: "column",
        flex: 1,
    },
    description: {
        color: "gray"
    },
    title: {

    },
    price: {
        marginStart: 8,
        marginEnd: 8,
    },
});
