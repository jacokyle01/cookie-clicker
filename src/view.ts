import { VNode, h } from "snabbdom";
import CookieCtrl from "./ctrl";
import renderClock, { Clock } from "./clock";

const clock = new Clock();

const cookieCount = (ctrl: CookieCtrl): VNode => {
	return h("div#cookie_count", "Cookies: " + ctrl.cookieCount);
};

const cps = (ctrl: CookieCtrl): VNode => {
	return h("div#cps", "Cookies per second " + ctrl.cookiesPerSecond());
};

const clicker = (ctrl: CookieCtrl): VNode => {
	return h(
		"div#counter",
		{ on: { click: () => ctrl.clickCookie() } },
		"Click me!"
	);
};

const buyResources = (ctrl: CookieCtrl): VNode => {
	return h(
		"div#shop",
		Object.entries(ctrl.resources).map(([rsc, inv]) => {
			return h(
				"div#" + rsc,
				{ on: { click: () => ctrl.buyResource(rsc) } },
				(ctrl.canAfford(rsc) ? "" : "X ") + rsc + " " + inv.count + " costs " + inv.price
			);
		})
	);
};

const countUp = (clock: Clock) => {
	return renderClock(clock);
}

const view = (ctrl: CookieCtrl): VNode => {
	return h("div#game", [
		cookieCount(ctrl),
		cps(ctrl),
		clicker(ctrl),
		countUp(clock),
		buyResources(ctrl),
	]);
};

export default view;
