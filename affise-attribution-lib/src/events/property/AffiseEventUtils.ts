const PROPERTY_PREFIX: string = "affise_event";

export function toAffiseEventProperty(name: string | null, property: string): string {
    if (name == null) return `${PROPERTY_PREFIX}_${property}`;

    if (property.length > 0) {
        return `${PROPERTY_PREFIX}_${name}_${property}`;
    }
    return `${PROPERTY_PREFIX}_${name}`;
}
