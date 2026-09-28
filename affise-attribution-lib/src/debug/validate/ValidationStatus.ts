import {getEnumFromString} from "../../utils/EnumUtils";

export enum ValidationStatus {
    VALID = "valid",
    INVALID_APP_ID = "invalid_app_id",
    INVALID_SECRET_KEY = "invalid_secret_key",
    PACKAGE_NAME_NOT_FOUND = "package_name_not_found",
    NOT_WORKING_ON_PRODUCTION = "not_working_on_production",
    NETWORK_ERROR = "network_error",
    UNKNOWN_ERROR = "unknown_error",
}

export function validationStatusFrom(name: string | null): ValidationStatus | null {
    if (name == null) return null;
    return getEnumFromString(ValidationStatus, name);
}
