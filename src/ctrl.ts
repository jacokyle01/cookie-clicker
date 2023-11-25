import { Redraw, resourceNames, Inventory, Powerup } from "./interfaces";

export default class CookieCtrl {
	cookieCount = 1000;
	tps = 10;
	elapsedTicks = 0;
	resources: { [key: string]: Inventory } = {};

	constructor(readonly redraw: Redraw) {
		//TODO: move this to initialization / config class?
		resourceNames.forEach((resourceName: string, index: number) => {
			let pwrup: Powerup = {
				price: Math.pow(index + 1, 3) * 100,
				status: "Idle",
				duration: 0,
			};

			let inventory = {
				count: 0,
				price: index * index * index * 15 + 10,
				cps: index * index * 15 + 10,
				powerup: pwrup,
			};
			this.resources[resourceName] = inventory;
		});
	}

	clickCookie = (): void => {
		this.cookieCount++;
		this.redraw();
	};

	canAfford = (resource: string): boolean => {
		return this.resources[resource].price < this.cookieCount;
	};

	canAffordPowerup = (resource: string): boolean => {
		return this.resources[resource].powerup.price < this.cookieCount;
	};

	raisePrice = (resource: string): void => {
		let price = this.resources[resource].price;
		price *= 1.15;
		this.resources[resource].price = Math.floor(price);
	};

	buyResource = (resource: string): void => {
		if (!this.canAfford(resource)) return;
		this.cookieCount -= this.resources[resource].price;
		this.resources[resource].count++;
		this.raisePrice(resource);
		this.redraw();
	};

	buyPowerup = (resource: string): void => {
		const powerup = this.resources[resource].powerup;
		if (!this.canAffordPowerup(resource) || powerup.status != "Idle") return;
		this.cookieCount -= this.resources[resource].powerup.price;
		this.activatePowerup(resource);
		this.redraw();
	};

	activatePowerup = (resource: string): void => {
		const powerup = this.resources[resource].powerup;
		powerup.status = "Active";
		powerup.duration = 15;
	};

	cooldownPowerup = (resource: string): void => {
		const powerup = this.resources[resource].powerup;
		powerup.status = "Cooldown";
		powerup.duration = 45;
	};

	cookiesPerSecond = (): number => {
		let total = 0;
		for (const key in this.resources) {
			const entry = this.resources[key];
			const powerup = entry.powerup;
			const multiplier = powerup.status == "Active" ? 2 : 1;
			total += entry.count * entry.cps * multiplier;
		}
		return total;
		
	};

	seconds = (): number => {
		return Math.round(this.elapsedTicks / this.tps);
	};

	getFormattedTime = (): string => {
		const hours: number = Math.floor(this.seconds() / 3600);
		const minutes = Math.floor((this.seconds() % 3600) / 60);
		const remainingSeconds = this.seconds() % 60;
		const formattedTime = `${String(hours).padStart(2, "0")}:${String(
			minutes
		).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`;
		return formattedTime;
	};

	//TODO refactor powerup state change, less condition / move into separate function
	tick = (): void => {
		this.elapsedTicks++;
		//a second has passed
		if (this.elapsedTicks % this.tps == 0) {
			for (const key in this.resources) {
				const entry = this.resources[key];
				const powerup = entry.powerup;
				if (powerup.status != "Idle") {
					powerup.duration--;
					if (powerup.duration == 0) {
						powerup.status == "Active"
							? this.cooldownPowerup(key)
							: (powerup.status = "Idle");
					}
				}
			}
		}
		this.cookieCount += this.cookiesPerSecond() / this.tps;
		this.redraw();
		setTimeout(this.tick, 1000 / this.tps);
	};
}
