import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { User } from '../../models/user';
import { login } from 'src/app/store/actions/auth.actions';
import { AuthState } from '../../store/state/auth.state';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})

export class SignInComponent implements OnInit {
  user: User = new User();

  constructor(
    private store: Store<AuthState>
  ) { }

  ngOnInit() { }

  onSubmit() {
    const email = this.user.email!
    const password = this.user.password!

    this.store.dispatch(login({ email, password }));
  }

}
