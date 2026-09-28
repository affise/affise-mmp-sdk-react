export class DeeplinkValue {
    public readonly deeplink: string;
    public readonly scheme?: string;
    public readonly host?: string;
    public readonly path?: string;
    public readonly parameters: Record<string, string[]> = {};

    constructor(
        deeplink: string,
        scheme?: string,
        host?: string,
        path?: string,
        parameters?: Record<string, string[]>
    ) {
        this.deeplink = deeplink;
        this.scheme = scheme;
        this.host = host;
        this.path = path;
        this.parameters = parameters || {};
    }

    toString(): string {
        const parameters = Object.entries(this.parameters).map(([key, value]) => `${key}=[${value.join(", ")}]`).join("; ");
        return `DeeplinkValue(scheme=${this.scheme}, host=${this.host}, path={${this.path}}, parameters=[${parameters}])`;
    }
}
