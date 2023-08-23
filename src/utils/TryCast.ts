export function tryCast<T>(any: any): T | null {
    const castAny = (any as T);
    if (castAny) {
        return castAny;
    }
    return null;
}
