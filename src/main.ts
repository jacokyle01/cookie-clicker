import CookieCtrl from './ctrl'
import view from './view';

import {
    init,
    eventListenersModule,
    h,
    propsModule,
    attributesModule,
    classModule
  } from "snabbdom";
  
  const patch = init([
    eventListenersModule,
    propsModule,
    attributesModule,
    classModule
  ]);



const ctrl = new CookieCtrl(redraw);
const element = document.getElementById("main");
element.innerHTML = "";
const inner = document.createElement("div");
element.appendChild(inner);
let vnode = patch(inner, view(ctrl));

function redraw() {
    vnode = patch(vnode, view(ctrl));
}
ctrl.tick();
