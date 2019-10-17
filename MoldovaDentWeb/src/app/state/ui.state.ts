import { State, Action, StateContext } from '@ngxs/store';
import {ExpandMenu, MinifyMenu } from '../actions/ui.actions'; // TODO: do a more smart import

export class UiStateModel {
    isMenuExpanded: boolean;
}

@State<UiStateModel> ({
    name: 'ui',
    defaults: {
        isMenuExpanded: true
    }
})
export class UiState {

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
}
