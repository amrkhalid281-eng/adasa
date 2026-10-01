import { DataServices } from './../../data-service/data-services';
import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Post } from '../../post';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  articleDataAbout: Post[];
  private readonly data=inject(DataServices)
  constructor(){
    this.articleDataAbout=this.data.articlePosts.posts
  }
}
