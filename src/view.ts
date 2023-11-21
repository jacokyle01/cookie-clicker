import { VNode, h } from 'snabbdom';
import CookieCtrl from './ctrl';

const cookieCount = (ctrl: CookieCtrl): VNode => {
    return h('div#cookie_count', 'Cookies: ' + ctrl.cookieCount)
}

const clicker = (ctrl: CookieCtrl): VNode => {
	return h(
		"div#counter",
		{ on: { click: () => ctrl.clickCookie() } },
		'Click me!'
	);
}

const view = (ctrl: CookieCtrl): VNode => {
    return h('div#game', [cookieCount(ctrl), clicker(ctrl)])
} 

export default view;