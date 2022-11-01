import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { Actions, createEffect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { CookieService } from '../../services/cookie.service';
import { AuthService } from '../../services/auth.service';
import { login, logout, setUser, loginError, setUserError } from '../actions/auth.actions';


@Injectable()
export class AuthEffects {

    constructor(
        private readonly actions$: Actions,
        private readonly authService: AuthService,
        private readonly router: Router,
        private readonly cookieService: CookieService
    ) { }

    login$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(login),
            mergeMap(({ email, password }) => {
                return this.authService.login(email, password).pipe(
                    map((user) => setUser({ user })),
                    tap((user) => {
                        this.router.navigateByUrl('/dashboard')
                        this.cookieService.set(user) // or set data introduction from user
                    }),
                    catchError(() => of(loginError({ message: "Login failed" })))
                );
            })
        );
    });

    logout$ = createEffect(
        () => {
            return this.actions$.pipe(
                ofType(logout),
                tap(() => {
                    this.cookieService.remove();
                    this.router.navigateByUrl("/sign-in");
                })
            );
        },
        { dispatch: false }
    );

    // can be used as an interceptor ??
    init$ = createEffect((): any => {
        return this.actions$.pipe(
            ofType(ROOT_EFFECTS_INIT),
            mergeMap(() => {
                return this.authService.getCurrentUser().pipe(
                    map((user) => setUser({ user })),
                    catchError(() => of(setUserError({ message: "Error" })))
                );
            })
        );
    });

}