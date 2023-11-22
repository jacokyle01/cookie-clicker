import { Redraw, resourceNames, Inventory } from "./interfaces";

export default class CookieCtrl {
    cookieCount = 0;
    resources: {[key: string]: Inventory} = {};

    constructor(readonly redraw: Redraw) {
        //TODO: move this to initialization / config class?
        resourceNames.forEach((resourceName : string, index: number) => {
            let inventory = {
                count: 0,
                price: (index * index) * 15 + 10
            }
            this.resources[resourceName] = inventory;
        })
    }

    clickCookie = (): void => {
        this.cookieCount++;
        console.log(this.resources);
        this.redraw();
    }

}