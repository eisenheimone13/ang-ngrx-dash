import { Component, OnInit } from '@angular/core';

import { IMeeting } from '../../models/meeting';
import { ISocial } from '../../models/social';
import { MeetingService } from '../../services/meetings.service';

import { socialList } from "../../data/social"

@Component({
    selector: 'dashboard-component',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
    title = 'angular app'
    meetings: IMeeting[] = []
    socials: ISocial[] = socialList

    constructor(private meetingService: MeetingService) { }

    ngOnInit(): void {
        this.meetingService.getMeetingsList().subscribe((meeting: any) => {
            this.meetings = meeting['results'];
        })
    }
}