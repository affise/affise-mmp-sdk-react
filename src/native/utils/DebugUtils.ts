import {ValidationStatus, validationStatusFrom} from "../../debug/validate/ValidationStatus";
import {HttpRequest} from "../../network/HttpRequest";
import {HttpResponse} from "../../network/HttpResponse";
import {tryCast} from "../../utils/TryCast";
import {HttpMethod, httpMethodFrom} from "../../network/HttpMethod";

export class DebugUtils {
    static getValidationStatus(data: any): ValidationStatus {
        return validationStatusFrom(data as string || "") || ValidationStatus.UNKNOWN_ERROR;
    }

    static parseRequestResponse(data: any): [HttpRequest, HttpResponse] {
        const json = tryCast<Record<string, any>>(data) || {};

        const req = json["request"];
        const reqUrl = req["url"] || "";
        const reqMethod = req["method"] || "";
        const reqBody = req["body"];
        const reqHeaders = tryCast<Record<string, string>>(req["headers"]) || {};

        const res = json["response"];
        const resCode = res["code"] as number || 0;
        const resMessage = res["message"] || "";
        const resBody = res["body"];

        return [new HttpRequest({
            url: reqUrl,
            method: httpMethodFrom(reqMethod) || HttpMethod.POST,
            headers: reqHeaders,
            body: reqBody
        }), new HttpResponse({
            code: resCode,
            message: resMessage,
            body: resBody
        })];
    }
}
