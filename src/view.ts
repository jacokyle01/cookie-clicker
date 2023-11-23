import { VNode, h } from "snabbdom";
import CookieCtrl from "./ctrl";
import { baker, cursor, factory, svgs} from "./svg";

const cookieCount = (ctrl: CookieCtrl): VNode => {
	return h("div#cookie_count", "Cookies: " + ctrl.cookieCount);
};

const cps = (ctrl: CookieCtrl): VNode => {
	return h("div#cps", "Cookies per second " + ctrl.cookiesPerSecond());
};

const clicker = (ctrl: CookieCtrl): VNode => {
	return h(
		"div#clicker",
		{ on: { click: () => ctrl.clickCookie() } },
		[
			svgs["Cookie"]
		]
	);
};

//TODO refactor mapping resources? remove duplicate code

const buyResources = (ctrl: CookieCtrl): VNode => {
	return h("div#shop.panel", [
		h("h3#shop_title", "Shop"),
		...Object.entries(ctrl.resources).map(([rsc, inv]) => {
			return h(
				"div.shop_item",
				{ on: { click: () => ctrl.buyResource(rsc) } },
				[
					svgs[rsc],
					h(
						"div#" + rsc,
						(ctrl.canAfford(rsc) ? "" : "X ") + rsc + " $" + inv.price
					),
				]
			);
		}),
	]);
};

const buyPowerups = (ctrl: CookieCtrl): VNode => {
	return h("div#powerups.panel", [
		h("h3#powerup_title", "Powerups"),
		...Object.entries(ctrl.resources).map(([rsc, inv]) => {
			const pwrup = inv.powerup;
			return h(
				"div#" + rsc + "_powerup",
				{ on: { click: () => ctrl.buyPowerup(rsc) } },
				(ctrl.canAffordPowerup(rsc) ? "" : "X ") +
					" " +
					pwrup.status +
					(pwrup.status == "Idle"
						? ""
						: " for " + pwrup.duration + " seconds") +
					" " +
					rsc +
					" powerup $" +
					pwrup.price
			);
		}),
	]);
};

//TODO don't pass clock as argument
const countUp = (ctrl: CookieCtrl) => {
	return h("div#clock", ctrl.seconds() + " seconds passed");
};

const inventory = (ctrl: CookieCtrl): VNode => {
	return h(
		"div#inventory.panel",
		Object.entries(ctrl.resources).map(([rsc, inv]) => {
			return h("div#" + rsc + "_inventory ", rsc + " " + inv.count);
		})
	);
};

const view = (ctrl: CookieCtrl): VNode => {
	return h("div#game", [
		h("div#top", [
			buyPowerups(ctrl),
			h("div#cookie-wrap.panel", [
				countUp(ctrl),
				clicker(ctrl),
				cookieCount(ctrl),
				cps(ctrl),
			]),
			buyResources(ctrl),
		]),
		inventory(ctrl),
	]);
};

const image = (): VNode => {
	return h("img", {
		attrs: {
			src: "/factory.svg",
		},
	});
};

export default view;
