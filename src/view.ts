import { VNode, h } from "snabbdom";
import CookieCtrl from "./ctrl";

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
				(ctrl.canAfford(rsc) ? "" : "X ") +
					rsc +
					" " +
					inv.count +
					" costs " +
					inv.price
			);
		})
	);
};

//TODO don't pass clock as argument
const countUp = (ctrl: CookieCtrl) => {
	return h("div", ctrl.seconds() + " seconds passed");
};

const view = (ctrl: CookieCtrl): VNode => {
	return h("div#game", [
		cookieCount(ctrl),
		cps(ctrl),
		clicker(ctrl),
		countUp(ctrl),
		buyResources(ctrl),
	]);
};

export default view;
