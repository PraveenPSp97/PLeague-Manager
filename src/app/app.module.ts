import { TeamService } from "./team.service";

import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DetailsComponent } from "./details/details.component";
import { HomeComponent } from "./home/home.component";
import { HttpClientModule } from "@angular/common/http";
import { ResultComponent } from './result/result.component';
import { LiveComponent } from './live/live.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
@NgModule({
  declarations: [AppComponent, DetailsComponent, HomeComponent, ResultComponent, LiveComponent, UpcomingComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TeamService],
  bootstrap: [AppComponent]
})
export class AppModule {}
