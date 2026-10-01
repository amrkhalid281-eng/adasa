import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Card } from '../../card/card';
import { DataServices } from '../../data-service/data-services';
import { Category, Post } from '../../post';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog',
  imports: [Card, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css',
})

export class Blog implements OnInit {
  private readonly data=inject(DataServices)
  private readonly route=inject(ActivatedRoute)
  private readonly router = inject(Router);

  articleData:Post[]= this.data.articlePosts.posts
  categoryData:Category[]=this.data.articlePosts.categories
  filteredPosts: Post[] = this.articleData;
  viewMode:'grid' | 'list' = 'grid';

  currentPage:number = 1;
  pageSize:number = 6;

  searchTerm = '';
  activeCategory: string = 'جميع المقالات';

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      const category = params.get('category');
      this.activeCategory = category ?? 'جميع المقالات';
      this.applyFilters();
    });
  }

  // pagination slid cards
  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.pageSize);
  }

  get visiblePosts(): Post[] {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    return this.filteredPosts.slice(start, end);
  }

  get pages(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages) return;
    this.currentPage = page;
  }

  nextPage(): void {
    this.goToPage(this.currentPage + 1);
  }

  prevPage(): void {
    this.goToPage(this.currentPage - 1);
  }

  // Input Search
  applyFilters(): void {
    let result = this.articleData;

    if (this.activeCategory !== 'جميع المقالات') {
      result = result.filter((post) => post.category === this.activeCategory);
    }

    const term = this.searchTerm.trim().toLowerCase();
    if (term) {
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(term) ||
          post.excerpt.toLowerCase().includes(term) ||
          post.category.toLowerCase().includes(term) ||
          post.tags.some((tag) => tag.toLowerCase().includes(term)),
      );
    }

    this.filteredPosts = result;
    this.currentPage = 1;
  }

  filterByCategory(category: string): void {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { category: category === 'جميع المقالات' ? null : category },
      queryParamsHandling: 'merge',
    });
  }

  onSearch(): void {
    this.applyFilters();
  }

  // Button mode 
  setViewMode(mode: 'grid' | 'list'): void {
    this.viewMode=mode
  }


}
