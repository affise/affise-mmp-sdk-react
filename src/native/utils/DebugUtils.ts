import {ValidationStatus, validationStatusFrom} from "../../debug/validate/ValidationStatus";
import {HttpRequest} from "../../network/HttpRequest";
import {HttpResponse} from "../../network/HttpResponse";
import {tryCast} from "../../utils/TryCast";
import {HttpMethod, httpMethodFrom} from "../../network/HttpMethod";

export class DebugUtils {

    static getValidationStatus(data: any): ValidationStatus {
        return validationStatusFrom(data as string || "") || ValidationStatus.UNKNOWN_ERROR;
    }

    static toResponse(from: any): HttpResponse {
        const json = tryCast<Record<string, any>>(from) || {};
        const resCode = json["code"] as number || 0;
        const resMessage = json["message"] || "";
        const resBody = json["body"];

        return new HttpResponse({
            code: resCode,
            message: resMessage,
            body: resBody
        });
    }

    static toRequest(from: any): HttpRequest {
        const json = tryCast<Record<string, any>>(from) || {};
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

    static toResponseWithKey(from: any, key: string): HttpResponse {
        const json = tryCast<Record<string, any>>(from) || {};
        const response = json[key];
        return this.toResponse(response);
    }

    static toRequestWithKey(from: any, key: string): HttpRequest {
        const json = tryCast<Record<string, any>>(from) || {};
        const request = json[key];
        return this.toRequest(request);
    }
}
