export enum UiActions {
    EXPAND_MENU =   '[UI] ExpandMenu',
    MINIFY_MENU =   '[UI] MinifyMenu',
    EXPAND_NAV =    '[UI] ExpandNav',
    MINIFY_NAV =    '[UI] MinifyNav',
    SMALL_SCREEN =  '[UI] SmallScreen',
    BIG_SCREEN =    '[UI] BigScreen'
}

export class ExpandMenu {
    static readonly type = UiActions.EXPAND_MENU;
}

export class MinifyMenu {
    static readonly type = UiActions.MINIFY_MENU;
}

export class ExpandNav {
    static readonly type = UiActions.EXPAND_NAV;
}

export class MinifyNav {
    static readonly type = UiActions.MINIFY_NAV;
}

export class SmallScreen {
    static readonly type = UiActions.SMALL_SCREEN;
}

export class BigScreen {
    static readonly type = UiActions.BIG_SCREEN;
}