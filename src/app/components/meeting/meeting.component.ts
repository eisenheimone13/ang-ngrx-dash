import { Component, Input } from '@angular/core';
import { IMeeting } from 'src/app/models/meeting';

@Component({
  selector: 'meeting-item',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.scss']
})

export class MeetingComponent {
  @Input() meeting: IMeeting;
}
