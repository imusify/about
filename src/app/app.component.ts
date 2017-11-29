import { Component, OnInit } from '@angular/core';
import { Advisor } from './interfaces/advisor';
import { Artist } from './interfaces/artist';
import { Executive } from './interfaces/executive';
import { Member } from './interfaces/member';
import { TeamMember } from './interfaces/team-member';

import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public advisors: Advisor[];
  public artists: Artist[];
  public executives: Executive[];
  public members: Member[];
  public teamMembers: TeamMember[];
  public content: any;

  constructor(private _data: DataService) {
    this.content = {
      memberGroup: '70',
      songUpload: '4.678.232',
      members: '5.672',
    };
   }

  ngOnInit() {
    this.artists = this._data.getArtist();
    this.executives = this._data.getExecutives();
    this.teamMembers = this._data.getTeamMembers();
    this.members = this._data.getMembers();
    this.members = this._data.getMembers();
    this.advisors = this._data.getAdvisors();
  }

  }
