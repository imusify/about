import { Component, OnInit, Input } from '@angular/core';
import { Artist } from '../interfaces/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent {
  @Input() artists: Artist[];
  @Input() title: string;
}
