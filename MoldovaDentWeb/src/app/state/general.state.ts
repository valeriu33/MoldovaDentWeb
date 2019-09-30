import { State, Action, StateContext } from '@ngxs/store';
import {ExpandMenu, MinifyMenu } from '../actions/general.actions';

export class GeneralStateModel {
    isMenuExpanded: boolean;
}

@State<GeneralStateModel> ({
    name: 'general',
    defaults: {
        isMenuExpanded: true
    }
})
export class GeneralState {

    @Action(ExpandMenu)
    expandMenu(context: StateContext<GeneralStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isMenuExpanded: true
        });
    }

    @Action(MinifyMenu)
    minifyMenu(context: StateContext<GeneralStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isMenuExpanded: false
        });
    }
}
