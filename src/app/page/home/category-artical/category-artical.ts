import { Category } from './../../../post';
import { Component, inject } from '@angular/core';
import { DataServices } from '../../../data-service/data-services';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category-artical',
  imports: [RouterLink],
  templateUrl: './category-artical.html',
  styleUrl: './category-artical.css',
})
export class CategoryArtical {
  private readonly categoryData=inject(DataServices)
  Categorys:Category[]=[]

  constructor() {
    this.Categorys=this.categoryData.articlePosts.categories
  }
}
