import {getEnumFromString} from "../../utils/EnumUtils";

export enum TimeUnitType {
    DAY = "day",
    WEEK = "week",
    MONTH = "month",
    YEAR = "year",
}

export function timeUnitTypeFrom(name: string | null): TimeUnitType | null {
    if (name == null) return null;
    return getEnumFromString(TimeUnitType, name);
}
