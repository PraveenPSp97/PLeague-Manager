import { TeamService } from "./../team.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-upcoming",
  templateUrl: "./upcoming.component.html",
  styleUrls: ["./upcoming.component.css"]
})
export class UpcomingComponent implements OnInit {
  public teams = [];

  constructor(private _teamService: TeamService) {}

  ngOnInit() {
    this._teamService.getTeam().subscribe(data => (this.teams = data));
  }
}
