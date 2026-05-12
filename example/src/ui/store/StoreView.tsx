import React, {Component} from "react";
import {Alert, FlatList, View, StyleSheet} from "react-native";
import type {AffiseProduct} from 'affise-attribution-lib';
import {Affise, AffiseProductType, AffisePurchasedInfo} from "affise-attribution-lib";
import {AffiseButton} from "../../components/AffiseButton";
import {AffiseProductView} from "../../components/AffiseProductView";


const storeData: Record<string, AffiseProductType> = {
    "com.test.invalid": AffiseProductType.CONSUMABLE,
    "com.test.prod_1": AffiseProductType.CONSUMABLE,
    "com.test.prod_2": AffiseProductType.CONSUMABLE,
    "com.test.prod_3": AffiseProductType.NON_CONSUMABLE,
    "com.test.sub_1": AffiseProductType.NON_RENEWABLE_SUBSCRIPTION,
    "com.test.sub_2": AffiseProductType.RENEWABLE_SUBSCRIPTION,
    "com.test.sub_3": AffiseProductType.RENEWABLE_SUBSCRIPTION,
};

interface Props {
    products?: AffiseProduct[];
}

interface State {
    products?: AffiseProduct[];
}

export class StoreView extends Component<Props, State> {

    constructor(props: Props = {products: []}) {
        super(props);
        this.state = {
            ...props
        };
        this.fetchProducts();
    }

    updateProducts = (prevState: AffiseProduct[]) => {
        this.setState({products: prevState});
    };

    render() {
        return (
            <View  style={styles.defaultView}>
                <AffiseButton
                    color="#2196F3"
                    title="Fetch"
                    onPress={() => {
                        this.fetchProducts(false);
                    }}
                />
                <FlatList
                    style={styles.defaultList}
                    ItemSeparatorComponent={() => <View style={styles.defaultListSeparator}/>}
                    data={this.state.products}
                    renderItem={({item}) => (
                        <AffiseProductView product={item} onBuy={(product) => {
                            this.purchase(product, storeData[product.productId] || AffiseProductType.CONSUMABLE);
                        }}/>
                    )}
                />
            </View>
        );
    }

    fetchProducts( skipCheck:boolean = true) {
        Affise.module.subscription.fetchProducts(Object.keys(storeData), (result) => {
            if (result.isSuccess) {
                const value = result.asSuccess;
                this.updateProducts(value.products);
                const invalidIds: string[] = value.invalidIds;
                if (!skipCheck && invalidIds.length > 0 ) {
                    this.callAlert("Invalid Ids", invalidIds.join("\n"));
                }
            } else {
                const error: string = result.asFailure;
                this.callAlert("Error", error);
            }
        });
    }


    purchase( product: AffiseProduct, type: AffiseProductType) {
        Affise.module.subscription.purchase(product, type, (result) => {
            if (result.isSuccess) {
                const purchasedInfo: AffisePurchasedInfo = result.asSuccess;
                this.callAlert("Purchased", purchasedInfo.product?.title || purchasedInfo.purchase || `${product}`);
            } else {
                const error: string = result.asFailure;
                this.callAlert("Error", error);
            }
        });
    }

    callAlert(title: string, message: string) {
        Alert.alert(title, message, [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
    }
}

const styles = StyleSheet.create({
    defaultView: {
        width: '100%',
        flex: 1,
        padding: 8,
    },
    defaultList: {
        marginTop: 8,
    },
    defaultListContent: {
        padding: 8,
    },
    defaultListSeparator: {
        height: 8
    },
});