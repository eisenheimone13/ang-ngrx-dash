import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User } from '../models/user';

@Injectable()
export class AuthService {
    constructor(
        private http: HttpClient,
    ) { }

    login(email: string, password: string) {
        console.log(email, password) // to auth server ?
        const url = `https://fakestoreapi.com/users/2`;
        return this.http.get<User>(url)
    }

    getCurrentUser() {
        // need check if token current & get user from db
        const url = `https://fakestoreapi.com/users/2`;
        return this.http.get<User>(url)
    }
}