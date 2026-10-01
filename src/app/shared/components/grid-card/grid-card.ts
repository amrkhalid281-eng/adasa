import { Component, Input } from '@angular/core';
import { Post } from '../../../post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-grid-card',
  imports: [RouterLink],
  templateUrl: './grid-card.html',
  styleUrl: './grid-card.css',
})
export class GridCard {
  @Input() gridCardData!:Post
}
