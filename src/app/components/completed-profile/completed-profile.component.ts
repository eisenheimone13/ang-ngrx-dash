import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { selectUserData } from '../../store/selectors/auth.selector';

@Component({
  selector: 'app-completed-profile',
  templateUrl: './completed-profile.component.html',
  styleUrls: ['./completed-profile.component.scss'],
})
export class CompletedProfileComponent implements OnInit {
  user: any;

  constructor(private readonly store: Store) {
    this.store.select<any>(selectUserData).subscribe(data => this.user = data)
  }

  ngOnInit(): void {}
}
