import {HttpMethod} from "./HttpMethod";

export class HttpRequest {
    public url: string;
    public method: HttpMethod;
    public headers: Record<string, string>;
    public body?: string | null;

    constructor(
        {
            url, method, headers, body
        }: {
            url: string, method: HttpMethod, headers: Record<string, string>, body?: string | null
        } = {
            url: "", method: HttpMethod.POST, headers: {}, body: null
        }
    ) {
        this.url = url;
        this.method = method;
        this.headers = headers;
        this.body = body;
    }

    toString(): string {
        const headers = Object.entries(this.headers).map(([key, value]) => `${key}=${value}`).join("; ");
        return `HttpRequest(url=${this.url}, method=${this.method}, headers={${headers}}, body=${this.body || ""})`;
    }
}
