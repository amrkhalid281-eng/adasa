import { Component, Input } from '@angular/core';
import { Post } from '../../../post';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-card',
  imports: [RouterLink],
  templateUrl: './list-card.html',
  styleUrl: './list-card.css',
})
export class ListCard {
  @Input() listCardData!:Post
}
