import { TeamService } from './../team.service';

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-details",
  templateUrl: "./details.component.html",
  styleUrls: ["./details.component.css"]
})
export class DetailsComponent implements OnInit {
  public teams = [];

  public url="assets/img/liv.png"
  constructor(private _teamService: TeamService) {}

  ngOnInit() {
    this._teamService.getTeam().subscribe(data => (this.teams = data));
  }
}
