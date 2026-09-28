import {AdRevenueEvent} from "../events/predefined/AdRevenueEvent";
import type {AffiseAdSource} from "./AffiseAdSource";
import {PredefinedString} from "../events/parameters/PredefinedString";
import {PredefinedFloat} from "../events/parameters/PredefinedFloat";

export class AffiseAdRevenue {
    event: AdRevenueEvent = new AdRevenueEvent();

    constructor(source: AffiseAdSource) {
        this.event.addPredefinedString(PredefinedString.SOURCE, source);
    }

    setRevenue(revenue: number, currency: string): AffiseAdRevenue {
        this.event.addPredefinedFloat(PredefinedFloat.REVENUE, revenue);
        this.event.addPredefinedString(PredefinedString.CURRENCY, currency);
        return this;
    }

    setNetwork(network: string | null): AffiseAdRevenue {
        if (network == null) return this;
        this.event.addPredefinedString(PredefinedString.NETWORK, network);
        return this;
    }

    setUnit(unit: string | null): AffiseAdRevenue {
        if (unit == null) return this;
        this.event.addPredefinedString(PredefinedString.UNIT, unit);
        return this;
    }

    setPlacement(placement: string | null): AffiseAdRevenue {
        if (placement == null) return this;
        this.event.addPredefinedString(PredefinedString.PLACEMENT, placement);
        return this;
    }

    send() {
        this.event.send();
    }
}
