import { Observable } from "rxjs/Observable";
import { ITeam } from "./team";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class TeamService {
  private _url: string = "/assets/data/team.json";
  constructor(private httpClient: HttpClient) {}
  getTeam(): Observable<ITeam[]> {
    return this.httpClient.get<ITeam[]>(this._url);
  }
}
