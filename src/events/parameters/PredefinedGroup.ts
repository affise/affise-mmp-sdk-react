import {ToValue} from "./Predefined";
import type {PredefinedFloat} from "./PredefinedFloat";
import type {PredefinedLong} from "./PredefinedLong";
import type {PredefinedString} from "./PredefinedString";

export class PredefinedGroup {

    static NAME: string = ToValue("list_group");

    protected predefinedParameters: Record<string, unknown> = {};

    /**
     * Add predefined [parameter] with [value] of float to event
     */
    addPredefinedFloat(parameter: PredefinedFloat, value: number): PredefinedGroup {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of BigInteger
     */
    addPredefinedLong(parameter: PredefinedLong, value: bigint): PredefinedGroup {
        this.predefinedParameters[ToValue(parameter)] = Number(value);
        return this;
    }

    /**
     * Add predefined [parameter] with [value] of string
     */
    addPredefinedString(parameter: PredefinedString, value: string): PredefinedGroup {
        this.predefinedParameters[ToValue(parameter)] = value;
        return this;
    }

    /**
     * Get predefined parameter
     */
    getPredefinedParameters(): Record<string, unknown> {
        return this.predefinedParameters;
    }
}
