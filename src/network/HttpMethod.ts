import {getEnumFromString} from "../utils/EnumUtils";

export enum HttpMethod {
    GET = "GET",
    POST = "POST",
}

export function httpMethodFrom(name: string): HttpMethod | null {
    return getEnumFromString(HttpMethod, name);
}


