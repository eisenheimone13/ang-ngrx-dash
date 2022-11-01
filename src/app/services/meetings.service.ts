import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http"
import { Observable } from "rxjs"

import { IMeeting } from "../models/meeting";

@Injectable({
    providedIn: 'root'
})

export class MeetingService {
    constructor(private http: HttpClient) { }

    getMeetingsList(): Observable<IMeeting[]> {
        return this.http.get<IMeeting[]>('https://randomuser.me/api/?noinfo', {
            params: new HttpParams({
                fromObject: {
                    gender: "female",
                    inc: "gender,name,picture,id",
                    results: 3,
                }
            })
        })

    }
}