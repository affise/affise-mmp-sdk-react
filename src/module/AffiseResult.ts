export class AffiseResult<T> {

    static Success<T>(value: T): AffiseResult<T> {
        return new AffiseSuccess<T>(value);
    }

    static Failure<T>(error: string): AffiseResult<T> {
        return new AffiseFailure<T>(error);
    }

    public get asSuccess(): T {
        return (this as unknown as AffiseSuccess<T>).value;
    }

    public get asFailure(): string {
        return (this as unknown as AffiseFailure<T>).error;
    }

    public get isSuccess(): boolean {
        return this instanceof AffiseSuccess<T>;
    }

    public get isFailure(): boolean {
        return !this.isSuccess;
    }
}


class AffiseSuccess<T> extends AffiseResult<T> {
    public value: T;

    constructor(value: T) {
        super();
        this.value = value;
    }
}

class AffiseFailure<T> extends AffiseResult<T> {
    public error: string;

    constructor(error: string) {
        super();
        this.error = error;
    }
}
