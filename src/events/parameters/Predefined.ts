import type {PredefinedListObject} from "./PredefinedListObject";
import type {PredefinedFloat} from "./PredefinedFloat";
import type {PredefinedListString} from "./PredefinedListString";
import type {PredefinedLong} from "./PredefinedLong";
import type {PredefinedObject} from "./PredefinedObject";
import type {PredefinedString} from "./PredefinedString";

class Predefined {
    static PREFIX: string = "affise_p_";
}

type PredefinedType = string | PredefinedFloat | PredefinedListObject | PredefinedListString | PredefinedLong | PredefinedObject | PredefinedString;

export function ToValue(predefined: PredefinedType): string {
    return `${Predefined.PREFIX}${predefined}`;
}
