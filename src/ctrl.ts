import { Redraw } from "./interfaces";

export default class CookieCtrl {
    cookieCount = 0;
    
    constructor(readonly redraw: Redraw) {

    }

    clickCookie = (): void => {
        this.cookieCount++;
        this.redraw();
    }

}