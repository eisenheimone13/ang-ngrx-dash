import { Component } from '@angular/core';

import { ITarget } from 'src/app/models/target';
import { target_list } from 'src/app/data/target';

@Component({
  selector: 'app-target-content',
  templateUrl: './target-content.component.html',
  styleUrls: ['./target-content.component.scss']
})

export class TargetContentComponent {
  targets: ITarget[] = target_list;
}
