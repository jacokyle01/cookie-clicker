import { VNode, h } from "snabbdom";
import CookieCtrl from "./ctrl";
import { baker, cursor, factory, lab, lightning, svgs } from "./svg";

const cookieCount = (ctrl: CookieCtrl): VNode => {
	return h("div#cookie_tally", [h("div#cookie_count", Math.round(ctrl.cookieCount).toLocaleString())]);
};

const cps = (ctrl: CookieCtrl): VNode => {
	return h("h4#cps", ctrl.cookiesPerSecond() + " per second");
};

const clicker = (ctrl: CookieCtrl): VNode => {
	return h("div#clicker", { on: { click: () => ctrl.clickCookie() } }, [
		svgs["Cookie"],
	]);
};

//TODO refactor mapping resources? remove duplicate code

const buyResources = (ctrl: CookieCtrl): VNode => {
	return h("div#shop", [
		h("h2#shop_title.section_title", "SHOP"),
		h("div#shop-items.panel", [
			...Object.entries(ctrl.resources).map(([rsc, inv]) => {
				const pwrup = inv.powerup;
				return h(
					"div.shop_item",
					{
						class: {
							idle: pwrup.status == "Idle",
							active: pwrup.status == "Active",
							cooldown: pwrup.status == "Cooldown",
						},
					},
					[
						h(
							"div.buy-resource",
							{
								on: { click: () => ctrl.buyResource(rsc) },
								class: {
									unaffordable: !ctrl.canAfford(rsc),
									affordable: ctrl.canAfford(rsc),
								},
							},
							[
								h("div.shop_item_label", [
									h("h2.item-name", rsc),
									h("h3.item-cost", inv.price.toLocaleString()),
								]),
							]
						),
						h(
							"div.buy-powerup",
							{
								class: {
									unaffordable: !ctrl.canAffordPowerup(rsc),
									affordable: ctrl.canAffordPowerup(rsc),
									idle: pwrup.status == "Idle",
									active: pwrup.status == "Active",
									cooldown: pwrup.status == "Cooldown",
								},
								on: { click: () => ctrl.buyPowerup(rsc) },
							},
							[lightning(), h("h3.powerup-price", pwrup.price.toLocaleString())]
						),
					]
				);
			}),
		]),
	]);
};

const countUp = (ctrl: CookieCtrl) => {
	return h("div#clock", "Playtime " + ctrl.getFormattedTime());
};

const inventory = (ctrl: CookieCtrl): VNode => {
	return h("inventory", [
		h("h2.inventory_label.section_title", "INVENTORY"),
		h(
			"div#entries.panel",
			Object.entries(ctrl.resources).map(([rsc, inv]) => {
				return h("div.entry", [
					svgs[rsc],
					h("h2.item-name", rsc),
					h("h2.item-count", inv.count ? "x" + inv.count : inv.count),
				]);
			})
		),
	]);
};

const view = (ctrl: CookieCtrl): VNode => {
	return h("div#game", [
		h("div#top", [
			h("div#cookie-wrap", [
				h("h2.section_title", "COOKIES"),
				h("div.cookie-info.panel", [
					clicker(ctrl),
					cookieCount(ctrl),
					cps(ctrl),
					countUp(ctrl),
				]),
			]),
			buyResources(ctrl),
		]),
		inventory(ctrl),
	]);
};

export default view;
