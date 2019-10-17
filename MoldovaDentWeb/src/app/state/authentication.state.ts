import { State, Action, StateContext } from '@ngxs/store';
import {Login, Logout } from '../actions/authentication.actions';

export class AuthenticationStateModel {
        email: string;
        isLoggedIn: boolean;
}

@State<AuthenticationStateModel> ({
    name: 'authentication',
    defaults: {
        isLoggedIn: false, email: null
    }
})
export class AuthenticationState {

    @Action(Login)
    login(context: StateContext<AuthenticationStateModel>, action: Login) {
        const state = context.getState();
        context.setState({
            ...state,
            isLoggedIn: true,
            email: action.payload
        });
    }

    @Action(Logout)
    logout(context: StateContext<AuthenticationStateModel>) {
        const state = context.getState();
        context.setState({
            ...state,
            isLoggedIn: false,
            email: null
        });
    }
}
