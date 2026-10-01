import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { RouterLink } from '@angular/router';
import { GridCard } from '../shared/components/grid-card/grid-card';
import { ListCard } from '../shared/components/list-card/list-card';

@Component({
  selector: 'app-card',
  imports: [RouterLink, GridCard, ListCard],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() cardData!:Post;
  @Input() viewMode: 'grid' | 'list' = 'grid';
}
