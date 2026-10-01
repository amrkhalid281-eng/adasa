import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../../post';
import { DataServices } from '../../../data-service/data-services';

@Component({
  selector: 'app-latest-articles',
  imports: [RouterLink],
  templateUrl: './latest-articles.html',
  styleUrl: './latest-articles.css',
})
export class LatestArticles {
  private readonly homeData = inject(DataServices);
  latestPosts: Post[] = [];

  constructor() {
    this.latestPosts = this.getRandomPosts(this.homeData.articlePosts.posts, 3);
  }

  private getRandomPosts(posts: Post[], count: number): Post[] {
    const shuffled = [...posts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  }
}