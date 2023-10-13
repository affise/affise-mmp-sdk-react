import type {PredefinedListObject} from "./PredefinedListObject";
import type {PredefinedFloat} from "./PredefinedFloat";
import type {PredefinedListString} from "./PredefinedListString";
import type {PredefinedLong} from "./PredefinedLong";
import type {PredefinedObject} from "./PredefinedObject";
import type {PredefinedString} from "./PredefinedString";
// import type {PredefinedGroup} from "./PredefinedGroup";

export interface PredefinedParameter {
    /**
     * Add predefined [parameter] with [value] of number
     */
    addPredefinedFloat(parameter: PredefinedFloat, value: number): PredefinedParameter;

    /**
     * Add predefined [parameter] with [value] of Array<Record<string, unknown>>
     */
    addPredefinedListObject(parameter: PredefinedListObject, value: Record<string, unknown>[]): PredefinedParameter;

    /**
     * Add predefined [parameter] with [value] of Array<string>
     */
    addPredefinedListString(parameter: PredefinedListString, value: string[]): PredefinedParameter;

    /**
     * Add predefined [parameter] with [value] of BigInteger
     */
    addPredefinedLong(parameter: PredefinedLong, value: bigint): PredefinedParameter;

    /**
     * Add predefined [parameter] with [value] of Record<string, unknown>
     */
    addPredefinedObject(parameter: PredefinedObject, value: Record<string, unknown>): PredefinedParameter;


    /**
     * Add predefined [parameter] with [value] of string
     */
    addPredefinedString(parameter: PredefinedString, value: string): PredefinedParameter;

    /**
     * Add predefined [parameter] with [value] of Array<PredefinedGroup>
     */
    // PredefinedGroup
    // addPredefinedListGroup(groups: Array<PredefinedGroup>): PredefinedParameter;
}
