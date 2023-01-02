export interface EmpCardObject {
    id: number;
    icon: string;
    iconsize: number;
    header: string;
    text: string;
}

export interface LoopCardObject {
    id: number;
    children: number[];
    parents: number[];    
    header: string;
    text: string;
    icon?: string;
    iconsize?: number;
    imageSrc?: string;
    imageWidth?: number;
    level: number;
}

export enum Terms {
    short = 1,
    long = 2
}