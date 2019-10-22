import { TeamService } from "./../team.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-live",
  templateUrl: "./live.component.html",
  styleUrls: ["./live.component.css"]
})
export class LiveComponent implements OnInit {
  public teams = [];

  constructor(private _teamService: TeamService) {}

  ngOnInit() {
    this._teamService.getTeam().subscribe(data => (this.teams = data));
  }
}
