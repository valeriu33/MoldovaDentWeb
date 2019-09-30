export enum GeneralActions {
    EXPAND_MENU = '[General] ExpandMenu',
    MINIFY_MENU = '[General] MinifyMenu'
}

export class ExpandMenu {
    static readonly type = GeneralActions.EXPAND_MENU;
}

export class MinifyMenu {
    static readonly type = GeneralActions.MINIFY_MENU;
}
