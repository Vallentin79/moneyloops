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
    modalContent: ModalContent[],
    videoTitle: string,
    videoSrc: string
}

export interface ModalContent{
    classname: string,
    text: string
}

export enum Terms {
    short = 1,
    long = 2
}

export interface Questions{
    Investment: number,
    Goals: number,
    Interact: number,    
}