import { State, Action, StateContext } from '@ngxs/store';
import { UiState } from './ui.state'; // TODO: do a more smart import
import { AuthenticationState } from './authentication.state';

export class AppStateModel {
}

@State<AppStateModel> ({
    name: 'app',
    defaults: {
    },
    children: [
        UiState,
        AuthenticationState
    ]
})
export class AppState {
}
