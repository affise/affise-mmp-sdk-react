import type {AffiseApiMethod} from "./AffiseApiMethod";
import {NativeBasePlatform} from "./NativeBasePlatform";
import {Uuid} from "../utils/Uuid";
import {apiMethodFrom} from "./AffiseApiMethod";


export class NativeBase extends NativeBasePlatform {
    protected UUID: string = "callback_uuid";

    protected callbacksOnce: Map<string, unknown> = new Map<string, unknown>();
    protected callbacks: Map<AffiseApiMethod, unknown> = new Map<AffiseApiMethod, unknown>();

    protected nativeResult<T>(api: AffiseApiMethod, data: any | null = null): Promise<T> {
        const apiData: Record<string, any> = {
            [api.toString()]: data,
        };
        return this.apiCallResult<T>(api.toString(), apiData);
    }

    protected native(api: AffiseApiMethod, data: any | null = null) {
        const apiData: Record<string, any> = {
            [api.toString()]: data,
        };
        this.apiCall(api.toString(), apiData);
    }

    protected nativeCallbackOnce(api: AffiseApiMethod, callback: unknown, data: any | null = null) {
        const uuid = Uuid.generate();
        const apiData: Record<string, any> = {
            [api.toString()]: data,
            [this.UUID]: uuid,
        };
        this.callbacksOnce.set(uuid, callback);
        this.apiCall(api.toString(), apiData);
    }

    protected nativeCallback(api: AffiseApiMethod, callback: unknown, data: any | null = null) {
        const apiData: Record<string, any> = {
            [api.toString()]: data,
        };
        this.callbacks.set(api, callback);
        this.apiCall(api.toString(), apiData);
    }

    protected apiCallback(apiName: string, apiData: any) {
        const api: AffiseApiMethod | null = apiMethodFrom(apiName);
        if (api == null) return;
        const dataRecord = apiData as Record<string, any>;
        const uuid = dataRecord[this.UUID] as string;
        const data = dataRecord[apiName];
        if (uuid == null || uuid.length == 0) {
            const callback = this.callbacks.get(api);
            if (callback !== undefined) {
                this.handleCallback(api, callback, data);
            }
        } else {
            const callback = this.callbacksOnce.get(uuid);
            if (callback !== undefined) {
                this.handleCallback(api, callback, data);
            }
            this.callbacksOnce.delete(uuid);
        }
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    protected handleCallback(_api: AffiseApiMethod, _callback: unknown, _data: any) {

    }
}
