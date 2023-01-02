import { EmpCardObject, LoopCardObject, Terms } from '../data/data.interfaces';
import * as empCardData from '../data/EmpCards.json';
import * as ShortTermData from '../data/ShortTermData.json';
import * as LongTermData from '../data/LongTermData.json';


let path: number[] = [];
let data: any = {};

export class Helper {
    constructor() { }

    static hasGroup(group: number[], id: number) {
        return group.includes(id);
    }

    static getEmpCardData() {
        const data = empCardData as any as Array<EmpCardObject>;
        return Array.from(data);
    }

    static getShortTermData(level: number): LoopCardObject[] {
        const data = ShortTermData as any; // as Array<LoopCardObject>;
        switch (level) {
            case 1:
                return Array.from(data.level1) as LoopCardObject[];
                break;
            case 2:
                return Array.from(data.level2) as LoopCardObject[];
                break;
            case 3:
                return Array.from(data.level3) as LoopCardObject[];
                break;
            case 4:
                return Array.from(data.level4) as LoopCardObject[];
                break;
            default:
                return Array.from(data);
                break;
        }
    }

    static getLongTermData(level: number): LoopCardObject[] {
        const data = LongTermData as any; // as Array<LoopCardObject>;
        switch (level) {
            case 1:
                return Array.from(data.level1) as LoopCardObject[];
                break;
            case 2:
                return Array.from(data.level2) as LoopCardObject[];
                break;
            case 3:
                return Array.from(data.level3) as LoopCardObject[];
                break;
            case 4:
                return Array.from(data.level4) as LoopCardObject[];
                break;
            case 5:
                return Array.from(data.level5) as LoopCardObject[];
                break;
            case 6:
                return Array.from(data.level6) as LoopCardObject[];
                break;
            default:
                return Array.from(data);
                break;
        }
    }

    static navigator(id: number, level: number) {
        const length = level - path.length;
        if (length < 0) {
            path = path.slice(0, length)
        }
        console.log("path", path.toString());
        if (path[level - 1]) {
            path[level - 1] = id;
        } else {
            path.push(id);
        }
    }

    static get path() {
        return Array.from(path);
    }

    static resetPath() {
        path = [];
    }

    static getParentChildren(level: number, term: Terms) {
        const parentId = path[level - 2];
        const data = term === Terms.short ? this.getShortTermData(level - 1) : this.getLongTermData(level - 1);
        const parent = data.find(x => x.id === parentId);
        return parent ? parent.children : [];
    }

    static hasChildren(level: number, term: Terms) {
        const clone = Object.assign([], path) as number[];
        const id = clone.pop();
        const data = term === Terms.short ? this.getShortTermData(level) : this.getLongTermData(level);
        const card = data.find(x => x.id === id);
        return card ? card.children.length > 0 ? true : false : false;
    }
}

