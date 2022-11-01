import { Component, Input } from '@angular/core';
import { ITarget } from '../../models/target';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.scss']
})

export class TargetComponent {
  @Input() target: ITarget;
}
