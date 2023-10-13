import type {HttpRequest} from "../../network/HttpRequest";
import type {HttpResponse} from "../../network/HttpResponse";

export type DebugOnNetworkCallback = (request: HttpRequest, response: HttpResponse) => void;
