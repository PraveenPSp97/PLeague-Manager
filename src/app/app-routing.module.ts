import { UpcomingComponent } from "./upcoming/upcoming.component";
import { LiveComponent } from "./live/live.component";
import { ResultComponent } from "./result/result.component";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { from } from "rxjs";

const routes: Routes = [
  { path: "details", component: DetailsComponent },
  { path: "", component: HomeComponent },
  { path: "result", component: ResultComponent },
  { path: "live", component: LiveComponent },
  { path: "upcoming", component: UpcomingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
