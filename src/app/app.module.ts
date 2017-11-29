import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { TeamComponent } from './team/team.component';
import { MembersComponent } from './members/members.component';
import { AdvisorsComponent } from './advisors/advisors.component';
import { ArtistsComponent } from './artists/artists.component';
import { ContentComponent } from './content/content.component';
import { InfoTextComponent } from './info-text/info-text.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';

import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    TeamComponent,
    MembersComponent,
    AdvisorsComponent,
    ArtistsComponent,
    ContentComponent,
    InfoTextComponent,
    ScrollTopComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
