import { Component, OnInit } from '@angular/core';
import { dashboardLink } from '../../data/links';

import { Store } from '@ngrx/store';
import { selectUserData } from '../../store/selectors/auth.selector';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links: any[] = dashboardLink;
  user: any;

  constructor(private readonly store: Store) {
    this.store
      .select<any>(selectUserData)
      .subscribe((data) => (this.user = data));
  }

  ngOnInit(): void {}
}
