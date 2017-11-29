import { Component, Input } from '@angular/core';
import { Member } from '../interfaces/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent {

  @Input() members: Member[];

}
