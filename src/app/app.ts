import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { Home } from './page/home/home';
import { Footer } from './footer/footer';
import { About } from './page/about/about';
import { Blog } from './page/blog/blog';
import { Privacy } from './page/privacy/privacy';
import { Terms } from './page/terms/terms';
import { Card } from './card/card';
import { GridCard } from './shared/components/grid-card/grid-card';
import { ListCard } from './shared/components/list-card/list-card';
import { NewsLetter } from './page/home/news-letter/news-letter';
import { LatestArticles } from './page/home/latest-articles/latest-articles';
import { CategoryArtical } from './page/home/category-artical/category-artical';
import { ArticleDetails } from './page/article-details/article-details';
import { NotFound } from './shared/components/not-found/not-found';
import { SpecialArticle } from './page/home/special-article/special-article';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Navbar,Home,About,Blog,Privacy,Terms,Card,Footer,
    GridCard,ListCard,NewsLetter,LatestArticles,CategoryArtical,
    ArticleDetails,SpecialArticle,NotFound
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('adasa');
}
