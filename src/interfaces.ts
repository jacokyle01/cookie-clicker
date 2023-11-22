export type Redraw = () => void;

//TODO: refactor inventory: add Resource type? 
export const resourceNames = ["Cursor", "Baker", "Factory"]
export type Inventory = {
    count: number;
    price: number;
    cps: number 
} 
