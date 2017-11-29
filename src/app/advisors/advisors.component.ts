import { Component, Input } from '@angular/core';
import { Advisor } from '../interfaces/advisor';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent {

  @Input() advisors: Advisor[];

}
