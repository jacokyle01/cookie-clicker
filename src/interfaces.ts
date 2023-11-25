export type Redraw = () => void;

//TODO: refactor inventory: add Resource type? 
export const resourceNames = ["Cursor", "Baker", "Factory", "Lab", "Mine", "Shipment"]
export type Inventory = {
    count: number;
    price: number;
    cps: number 
    powerup: Powerup;
} 

export type Status = "Active" | "Idle" | "Cooldown";

export type Powerup = {
    price: number;
    status: Status;
    duration: number;
}
