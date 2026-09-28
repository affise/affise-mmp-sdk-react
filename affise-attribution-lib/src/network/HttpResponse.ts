export class HttpResponse {
    public code: number;
    public message: string;
    public body?: string | null;

    constructor(
        {
            code, message, body
        }: {
            code: number, message: string, body?: string | null
        } = {
            code: 0, message: "", body: null
        }
    ) {
        this.code = code;
        this.message = message;
        this.body = body;
    }

    toString(): string {
        return `HttpResponse(code=${this.code}, message=${this.message}, body=${this.body || ""})`;
    }
}
