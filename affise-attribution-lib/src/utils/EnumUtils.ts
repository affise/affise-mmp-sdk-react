export function getEnumFromString<T>(obj: T, value: string): T[keyof T] | null {
    return Object.values(obj as any).includes(value as keyof T) ? value as unknown as T[keyof T] : null;
}

