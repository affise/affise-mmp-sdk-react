import type {HttpResponse} from "../network/HttpResponse";

export type OnSendFailedCallback = (status: HttpResponse) => void;
