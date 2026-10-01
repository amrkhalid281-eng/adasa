import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataServices } from '../../../data-service/data-services';
import { Post } from '../../../post';

@Component({
  selector: 'app-special-article',
  imports: [RouterLink],
  templateUrl: './special-article.html',
  styleUrl: './special-article.css',
})
export class SpecialArticle {
  private readonly data=inject(DataServices)
  dataArticle:Post[]=[]

  constructor(){
    this.dataArticle=this.data.articlePosts.posts
  }
}
