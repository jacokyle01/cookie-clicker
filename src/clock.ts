import { h } from "snabbdom";

let refreshInterval

export class Clock {
    initialMillis = 0;

    getNow = (): number => performance.now();
    millis = (): number => this.getNow() - this.initialMillis;
    seconds = (): number => Math.floor(this.millis() / 1000);
    formattedTime = (): string => this.seconds().toString();


}

export default function renderClock(clock: Clock) {
    return h('div#clock', {
        hook: {
            insert(node) {
                const el = node.elm as HTMLDivElement;
                el.innerText = clock.formattedTime();
                refreshInterval = setInterval(() => el.innerText = clock.formattedTime(), 100);
            }
        }
    })
}