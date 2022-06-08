import { GridEvents, ICol, ICoords, IRendererConfig, GridSystemEvents } from "../types";
declare type mouseEvents = GridEvents.cellClick | GridEvents.cellMouseOver | GridEvents.cellMouseDown | GridEvents.cellDblClick | GridEvents.cellRightClick;
declare type touchEvents = GridSystemEvents.cellTouchEnd | GridSystemEvents.cellTouchMove;
declare function handleMouse(rowStart: number, colStart: number, conf: IRendererConfig, type: mouseEvents & touchEvents, e: any): void;
export declare function getHandlers(row: number, column: number, conf: IRendererConfig): {
    onclick: (number | IRendererConfig | GridEvents | typeof handleMouse)[];
    onmouseover: (number | IRendererConfig | GridEvents | typeof handleMouse)[];
    onmousedown: (number | IRendererConfig | GridEvents | typeof handleMouse)[];
    ondblclick: (number | IRendererConfig | GridEvents | typeof handleMouse)[];
    oncontextmenu: (number | IRendererConfig | GridEvents | typeof handleMouse)[];
    ontouchstart: (number | IRendererConfig | GridEvents | typeof handleMouse)[];
    ontouchmove: (number | IRendererConfig | GridSystemEvents | typeof handleMouse)[];
    ontouchend: (number | IRendererConfig | GridSystemEvents | typeof handleMouse)[];
};
export declare function getTreeCell(content: any, row: any, col: ICol, conf: IRendererConfig): any;
export declare function getCells(conf: IRendererConfig): any[];
export declare function getSpans(config: IRendererConfig, frozen?: boolean): any[];
export declare function getShifts(conf: IRendererConfig): ICoords;
export {};
