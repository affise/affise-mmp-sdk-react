import type { AffiseNative } from "../native/AffiseNative"
import { AffiseModules } from "./AffiseModules"

export interface AffiseHasModule {
    hasModule(): Promise<boolean>;
}

export function isModuleInit(native: AffiseNative, module: AffiseModules): Promise<boolean> {
    return new Promise((resolve, reject) => {
        native
            .getModulesInstalled()
            .then((modules) => {
                resolve(modules.includes(module))
            })
            .catch(reject);
    })
}
