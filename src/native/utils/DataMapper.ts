import {AffiseKeyValue} from "../../module/AffiseKeyValue";
import {tryCast} from "../../utils/TryCast";
import {DeeplinkValue} from "../../deeplink/DeeplinkValue";

export class DataMapper {
    static toNonNullString(from: any): string {
        return from as string || "";
    }

    static toAffiseKeyValueList(from: any): AffiseKeyValue[] {
        const data = tryCast<Array<any>>(from) || [];
        const result: AffiseKeyValue[] = [];
        for (const item of data) {
            const cast: Record<string, string> = item as Record<string, string>;
            const key = cast["key"];
            const value = cast["value"];

            if (!(key && value)) continue;

            result.push(new AffiseKeyValue(key, value));
        }

        return result;
    }

    static toDeeplinkValue(from: any): DeeplinkValue {
        const data = tryCast<Record<string, any>>(from) || {};
        const parameters = tryCast<Record<string, string[]>>(data["parameters"]) || {};
        return new DeeplinkValue(
            data["deeplink"],
            data["scheme"],
            data["host"],
            data["path"],
            parameters
        );
    }
}
