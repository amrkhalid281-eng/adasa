import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataServices } from '../../data-service/data-services';
import { Post } from '../../post';

interface ContentSection {
  id: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-article-details',
  imports: [RouterLink],
  templateUrl: './article-details.html',
  styleUrl: './article-details.css',
})
export class ArticleDetails {
  private readonly data = inject(DataServices);
  private readonly route = inject(ActivatedRoute);

  dataArticle: Post[] = [];
  relatedPosts: Post[] = [];
  articleId!: number;

  intro = '';
  sections: ContentSection[] = [];

  private readonly arabicMonths = [
    'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو',
    'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر',
  ];

  private readonly arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

  formatArabicDate(dateStr: string): string {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = this.arabicMonths[date.getMonth()];

    const arabicDay = String(day)
      .split('')
      .map((digit) => this.arabicDigits[Number(digit)])
      .join('');

    return `${arabicDay} ${month}`;
  }

  constructor() {
    this.dataArticle = this.data.articlePosts.posts;

    const id = this.route.snapshot.paramMap.get('id');
    this.articleId = Number(id);

    const article = this.dataArticle.find((item) => item.id === this.articleId);

    if (article) {
    const parsed = this.parseContent(article.content);
    this.intro = parsed.intro;
    this.sections = parsed.sections;

    this.relatedPosts = this.dataArticle
      .filter((item) => item.category === article.category && item.id !== article.id)
      .slice(0, 3);
    }
  }

  private parseContent(content: string): { intro: string; sections: ContentSection[] } {
    const rawParts = content.split(/\n\n##\s+/);
    const intro = rawParts[0].trim();

    const sections: ContentSection[] = rawParts.slice(1).map((raw, index) => {
      const [title, ...rest] = raw.split('\n\n');
      return {
        id: `section-${index}`,
        title: title.trim(),
        text: rest.join('\n\n').trim(),
      };
    });

    return { intro, sections };
  }
}