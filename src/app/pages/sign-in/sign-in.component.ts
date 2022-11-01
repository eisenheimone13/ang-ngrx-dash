import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  // user: User = new User();
  constructor(private store: Store<AuthState>) {}

  ngOnInit() {}

  form = new FormGroup(
    {
      email: new FormControl<string>('', [
        Validators.required,
        Validators.email,
      ]),
      password: new FormControl<string>('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    },
    { updateOn: 'submit' }
  );

  get email() {
    return this.form.controls.email as FormControl;
  }

  get password() {
    return this.form.controls.password as FormControl;
  }

  onSubmit() {
    if (this.form.valid) {
      const email = this.form.value.email!;
      const password = this.form.value.password!;

      this.store.dispatch(login({ email, password }));
    }
  }
}
