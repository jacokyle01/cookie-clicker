import { Redraw, resourceNames, Inventory } from "./interfaces";

export default class CookieCtrl {
    cookieCount = 0;
    resources: {[key: string]: Inventory} = {};

    constructor(readonly redraw: Redraw) {
        //TODO: move this to initialization / config class?
        resourceNames.forEach((resourceName : string, index: number) => {
            let inventory = {
                count: 0,
                price: (index * index * index) * 15 + 10,
                cps: (index * index) * 15 + 10
            }
            this.resources[resourceName] = inventory;
        })
    }

    clickCookie = (): void => {
        this.cookieCount++;
        // console.log(Object.entries(this.resources).map(([key, value]) => `${key}${value.count}`));
        this.redraw();
    }

    canAfford = (resource: string): boolean => {
        return this.resources[resource].price < this.cookieCount;
    }

    raisePrice = (resource: string): void => {
        this.resources[resource].price *= 1.15;
    }

    buyResource = (resource: string): void => {
        if (!this.canAfford(resource)) return;
        this.cookieCount -= this.resources[resource].price;
        this.resources[resource].count++;
        this.raisePrice(resource);
        this.redraw(); 
    }

    cookiesPerSecond = (): number => {
        let total = 0;
        for (const key in this.resources) {
            const entry = this.resources[key];
            total += entry.count * entry.cps;
        }
        return total;

    }

}