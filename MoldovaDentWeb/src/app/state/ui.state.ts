import { State, Action, StateContext } from '@ngxs/store';
import { ExpandMenu, MinifyMenu, ExpandNav, MinifyNav, SmallScreen, BigScreen } from '../actions/ui.actions'; // TODO: do a more smart import

export class UiStateModel {
    isNavExpanded: boolean;
    isMenuExpanded: boolean;
    IsScreenBig: boolean;
}

@State<UiStateModel> ({
    name: 'ui',
    defaults: {
        isNavExpanded: true,
        isMenuExpanded: false,
        IsScreenBig: false
    }
})
export class UiState {

    @Action(ExpandNav)
    expandNav(context: StateContext<UiStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isNavExpanded: true
        });
    }

    @Action(MinifyNav)
    minifyNav(context: StateContext<UiStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isNavExpanded: false
        });
    }

    @Action(ExpandMenu)
    expandMenu(context: StateContext<UiStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isMenuExpanded: true
        });
    }

    @Action(MinifyMenu)
    minifyMenu(context: StateContext<UiStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isMenuExpanded: false
        });
    }

    @Action(SmallScreen)
    smallScreen(context: StateContext<UiStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            IsScreenBig: false
        });
    }

    @Action(BigScreen)
    bigScreen(context: StateContext<UiStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            IsScreenBig: true
        });
    }
}
