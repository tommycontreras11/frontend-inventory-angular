import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { deleteArticle, IArticle } from '../../api/article';
import { retrieveArticles } from '../../services/article';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { UpdateArticleComponent } from './edit/update-article.component';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [CommonModule, MainCardComponent, UpdateArticleComponent],
  templateUrl: './article.component.html',
  styleUrl: './../../styles.css',
})
export class ArticleComponent implements OnInit {
  title = 'frontend-inventory-angular';

  articles: IArticle[] = [];

  ngOnInit(): void {
    this.fetchArticles();
  }

  async fetchArticles(): Promise<void> {
    try {
      this.articles = await retrieveArticles();
    } catch (error) {
      console.error('Error retrieving articles:', error);
    }
  }

  handleDelete(id: number) {
    deleteArticle(id).then(() => this.fetchArticles());
    this.articles.filter((article) => article.id !== id);
  }
}
