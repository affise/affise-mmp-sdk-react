import type {PredefinedParameters} from "../PredefinedParameters";

/**
 * Base event
 */
export class AffiseEvent {

    /**
     * Name of event
     */
    protected name: string;

    /**
     * Category of event
     */
    protected category: string;

    /**
     * User data
     */
    protected userData?: string;

    /**
     * Is first for user, default false
     */
    protected firstForUser: boolean;

    /**
     * Serialize event
     */
    protected serialize: Record<string, unknown>;

    /**
     * Event predefined parameters
     */
    protected predefinedParameters: Record<string, string>;

    constructor(name: string) {
        this.name = name;
        this.category = "";
        this.userData = "";
        this.firstForUser = false;
        this.serialize = {};
        this.predefinedParameters = {};
    }

    /**
     * Add predefined [parameter] with [value] to event
     */
    addPredefinedParameter(parameter: PredefinedParameters, value: string) {
        this.predefinedParameters[parameter] = value;
    }

    /**
     * Get predefined parameter
     */
    getPredefinedParameter(): Record<string, unknown> {
        return this.predefinedParameters;
    }
}
