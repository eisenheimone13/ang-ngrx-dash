import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor(
  ) { }

  set(user: any) {
    localStorage.setItem('user', JSON.stringify(user))
  }

  remove() {
    localStorage.clear()
  }
}
