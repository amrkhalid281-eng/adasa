import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NewsLetter } from './news-letter/news-letter';
import { LatestArticles } from './latest-articles/latest-articles';
import { CategoryArtical } from './category-artical/category-artical';
import { SpecialArticle } from './special-article/special-article';

@Component({
  selector: 'app-home',
  imports: [RouterLink, NewsLetter, LatestArticles, CategoryArtical, SpecialArticle],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
