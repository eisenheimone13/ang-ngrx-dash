import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import { selectUserData } from '../../store/selectors/auth.selector';

@Component({
  selector: 'app-welcome-user',
  templateUrl: './welcome-user.component.html',
  styleUrls: ['./welcome-user.component.scss']
})
export class WelcomeUserComponent implements OnInit {
  user: any;
  
  constructor(private readonly store: Store) {
    this.store
      .select<any>(selectUserData)
      .subscribe((data) => (this.user = data));
  }

  ngOnInit(): void {
  }

}
