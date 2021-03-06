import { Layout } from "../../../ts-layout";
import { Popup } from "../../../ts-popup";
import { IEventSystem } from "../../../ts-common/events";
import { Label } from "./helper/label";
import { IRadioGroupConfig, IRadioGroupEventHandlersMap, ItemEvent, IRadioGroup, ICheckboxGroupProps, ICheckboxGroupItemProps } from "../types";
export declare class RadioGroup extends Label implements IRadioGroup {
    config: IRadioGroupConfig;
    layout: Layout;
    events: IEventSystem<ItemEvent, IRadioGroupEventHandlersMap>;
    protected _handlers: any;
    protected _helper: Popup;
    private _buttons;
    private _isValid;
    private _propsItem;
    private _props;
    constructor(container: any, config: IRadioGroupConfig);
    destructor(): void;
    setProperties(arg?: string | ICheckboxGroupProps, props?: ICheckboxGroupItemProps): void;
    getProperties(id?: string): ICheckboxGroupProps | ICheckboxGroupItemProps;
    getValue(): string;
    setValue(value: string): void;
    focus(id?: string): void;
    blur(): void;
    show(): void;
    hide(init?: boolean): void;
    isVisible(): boolean;
    disable(): void;
    enable(): void;
    isDisabled(): boolean;
    clear(): void;
    validate(silent?: boolean): boolean;
    clearValidate(): void;
    protected _initView(config: IRadioGroupConfig): void;
    protected _initHandlers(): void;
    protected _draw(): any;
    private _setValue;
}
