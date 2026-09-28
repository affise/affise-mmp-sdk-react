import {getEnumFromString} from "../../utils/EnumUtils";

export enum AffiseProductType {
    CONSUMABLE = "consumable",
    NON_CONSUMABLE = "non_consumable",
    RENEWABLE_SUBSCRIPTION = "renewable_subscription",
    NON_RENEWABLE_SUBSCRIPTION = "non_renewable_subscription",
}

export function affiseProductTypeFrom(name: string | null): AffiseProductType | null {
    if (name == null) return null;
    return getEnumFromString(AffiseProductType, name);
}
