import { Component, Input } from '@angular/core';
import { TeamMember } from '../interfaces/team-member';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() teamMembers: TeamMember[];

}
