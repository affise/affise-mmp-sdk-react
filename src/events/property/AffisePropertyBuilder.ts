import {toSnakeCase} from "../../utils/ToSnakeCase";
import type {AffiseProperty} from "./AffiseProperty";
import {toAffiseEventProperty} from "./AffiseEventUtils";

export class AffisePropertyBuilder {

    private data: Record<string, unknown> = {};
    private name: string | null = null;

    init(name: string): AffisePropertyBuilder {
        this.name = toSnakeCase(name);
        return this;
    }

    add(property: AffiseProperty, value: unknown): AffisePropertyBuilder {
        this.addByString(property.toString(), value);
        return this;
    }

    addByString(key: string, value: unknown): AffisePropertyBuilder {
        this.addRaw(this.eventProperty(key), value);
        return this;
    }

    addRaw(key: string, value: unknown): AffisePropertyBuilder {
        this.data[key.toLowerCase()] = value;
        return this;
    }

    build(): Record<string, unknown> {
        return this.data;
    }

    private eventProperty(key: string): string {
        return toAffiseEventProperty(this.name, key);
    }
}
