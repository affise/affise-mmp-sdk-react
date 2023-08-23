export function toSnakeCase(text: string): string {
    return text.replace(/(?<=.)([A-Z]|\d+)/g, letter => `_${letter.toLowerCase()}`);
}
