import { Component, Input } from '@angular/core';
import { ISocial } from 'src/app/models/social';

@Component({
  selector: 'social-item',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})

export class SocialComponent {
  @Input() social: ISocial;
}