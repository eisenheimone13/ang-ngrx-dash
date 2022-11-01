import { createReducer, on } from "@ngrx/store";
import { /* removeToken, setToken, */ setUser, logout } from "../actions/auth.actions";
import { AuthState, initialState } from "../state/auth.state";

export const authReducer = createReducer(
    initialState,
    // on(setToken, (state, { token }): AuthState => ({ ...state, token })),
    // on(removeToken, (state): AuthState => ({ ...state, token: "" })),
    on(setUser, (state, { user }): AuthState => ({ ...state, user })),
)
