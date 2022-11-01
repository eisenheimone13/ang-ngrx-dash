import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/actions/auth.actions';
import { AuthState } from '../../store/state/auth.state';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private store: Store<AuthState>
  ) { }

  ngOnInit(): void {
  }

  logOut() {
    this.store.dispatch(logout())
  }

}
