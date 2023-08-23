import {CoarseValue} from "./CoarseValue";

export class SKAdNetwork {
    static get CoarseConversionValue(): SKAdNetwork {
        return new SKAdNetwork();
    }

    get high(): CoarseValue {
        return new CoarseValue("high");
    }

    get low(): CoarseValue {
        return new CoarseValue("low");
    }

    get medium(): CoarseValue {
        return new CoarseValue("medium");
    }

    raw(value: string): CoarseValue {
        return new CoarseValue(value);
    }
}
