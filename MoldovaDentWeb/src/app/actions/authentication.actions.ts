export enum AuthenticationActions {
    LOGIN = '[Authentication] Login',
    LOGOUT = '[Authentication] Logout'
}

export class Login {
    static readonly type = AuthenticationActions.LOGIN;
    constructor(public payload: string) {
    }
}

export class Logout {
    static readonly type = AuthenticationActions.LOGOUT;
}
