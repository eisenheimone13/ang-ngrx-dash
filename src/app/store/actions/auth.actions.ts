import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export const setUser = createAction(
  "[Auth] Set user",
  props<{ user: User }>(),
);

export const setUserError = createAction(
  "[Auth] Login",
  props<{ message: string }>()
);


export const login = createAction(
  "[Auth] Login",
  props<{ email: string; password: string }>()
);

export const loginError = createAction(
  "[Auth] Login",
  props<{ message: string }>()
);

export const logout = createAction("[Auth] Log Out");