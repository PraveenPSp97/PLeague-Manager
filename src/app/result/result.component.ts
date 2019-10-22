import { Component, OnInit } from "@angular/core";
import { TeamService } from "./../team.service";

@Component({
  selector: "app-result",
  templateUrl: "./result.component.html",
  styleUrls: ["./result.component.css"]
})
export class ResultComponent implements OnInit {
  public teams = [];
  public img1: string = "assets/img/liv.png";

  public url = "assets/img/liv.png";
  constructor(private _teamService: TeamService) {}

  ngOnInit() {
    this._teamService.getTeam().subscribe(data => (this.teams = data));
  }
}
