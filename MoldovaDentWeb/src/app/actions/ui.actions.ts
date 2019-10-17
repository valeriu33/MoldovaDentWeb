export enum UiActions {
    EXPAND_MENU = '[UI] ExpandMenu',
    MINIFY_MENU = '[UI] MinifyMenu'
}

export class ExpandMenu {
    static readonly type = UiActions.EXPAND_MENU;
}

export class MinifyMenu {
    static readonly type = UiActions.MINIFY_MENU;
}
