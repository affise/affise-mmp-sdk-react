import type {AffiseApiMethod} from "./AffiseApiMethod";
import {NativeBasePlatform} from "./NativeBasePlatform";
import {Uuid} from "../utils/Uuid";
import {apiFromString} from "./AffiseApiMethod";


export class NativeBase extends NativeBasePlatform {
    protected UUID: string = "callback_uuid";

    protected callbacks: Map<string, unknown> = new Map<string, unknown>();

    protected nativeResult<T>(api: AffiseApiMethod, data: any | null = null): Promise<T> {
        const apiData: Record<string, any> = {};
        apiData[api.toString()] = data;
        return this.apiCallResult<T>(api.toString(), apiData);
    }

    protected native(api: AffiseApiMethod, data: any | null = null) {
        const apiData: Record<string, any> = {};
        apiData[api.toString()]= data;
        this.apiCall(api.toString(), apiData);
    }

    protected nativeCallback(api: AffiseApiMethod, callback: unknown, data: any | null = null) {
        const uuid = Uuid.generate();
        const apiData: Record<string, any> = {};
        apiData[api.toString()] = data;
        apiData[this.UUID] = uuid;
        this.callbacks.set(uuid, callback);
        this.apiCall(api.toString(), apiData);
    }

    protected apiCallback(apiName: string, apiData: any) {
        const api = apiFromString(apiName);
        if (api == null) return;
        const dataRecord = apiData as Record<string, any>;
        const uuid = dataRecord[this.UUID] as string;
        if (uuid == null || uuid.length == 0) return;
        const data = dataRecord[apiName];
        const callback = this.callbacks.get(uuid);
        if (callback !== undefined) {
            this.handleCallback(api, callback, data);
        }
        this.callbacks.delete(uuid);
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected handleCallback(_api: AffiseApiMethod, _callback: unknown, _data: any) {

    }
}
