export class AffiseKeyValue {
    public key: string;
    public value: string;

    constructor(key: string, value: string) {
        this.key = key;
        this.value = value;
    }
}

export function toAffiseKeyValueList(data: any[]): AffiseKeyValue[] {
    const result: AffiseKeyValue[] = [];
    for (const item of data) {
        const cast: Record<string, string> = item as Record<string, string>;
        const key = cast['key'];
        const value = cast["value"];

        if (!(key && value)) continue;

        result.push(new AffiseKeyValue(key, value));
    }

    return result;
}
