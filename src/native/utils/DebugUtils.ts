import {ValidationStatus, validationStatusFrom} from "../../debug/validate/ValidationStatus";
import {HttpRequest} from "../../network/HttpRequest";
import {HttpResponse} from "../../network/HttpResponse";
import {tryCast} from "../../utils/TryCast";
import {HttpMethod, httpMethodFrom} from "../../network/HttpMethod";

export class DebugUtils {
    static getValidationStatus(data: any): ValidationStatus {
        return validationStatusFrom(data as string || "") || ValidationStatus.UNKNOWN_ERROR;
    }

    static parseResponse(data: any): HttpResponse {
        const json = tryCast<Record<string, any>>(data) || {};
        const resCode = json["code"] as number || 0;
        const resMessage = json["message"] || "";
        const resBody = json["body"];

        return new HttpResponse({
            code: resCode,
            message: resMessage,
            body: resBody
        });
    }

    static parseRequest(data: any): HttpRequest {
        const json = tryCast<Record<string, any>>(data) || {};
        const reqUrl = json["url"] || "";
        const reqMethod = json["method"] || "";
        const reqBody = json["body"];
        const reqHeaders = tryCast<Record<string, string>>(json["headers"]) || {};

        return new HttpRequest({
            url: reqUrl,
            method: httpMethodFrom(reqMethod) || HttpMethod.POST,
            headers: reqHeaders,
            body: reqBody
        });
    }

    static parseRequestResponse(data: any): [HttpRequest, HttpResponse] {
        const json = tryCast<Record<string, any>>(data) || {};

        const req = json["request"];
        const request = this.parseRequest(req);

        const res = json["response"];
        const response = this.parseResponse(res);

        return [request, response];
    }
}
