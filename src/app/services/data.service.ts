import { Injectable } from '@angular/core';
import { artists } from '../data/artists';
import { executives } from '../data/executives';
import { teamMembers } from '../data/team-members';
import { members } from '../data/members';
import { advisors } from '../data/advisors';

@Injectable()
export class DataService {

  constructor() { }

  getArtist() {
    return artists;
  }

  getExecutives() {
    return executives;
  }

  getTeamMembers() {
    return teamMembers;
  }

  getMembers() {
    return members;
  }

  getAdvisors() {
    return advisors;
  }

}
