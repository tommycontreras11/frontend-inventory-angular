import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArticle } from '../../api/article';
import { retrieveArticles } from '../../services/article';
import { MainCardComponent } from './../components/main-card/main-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MainCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './../../styles.css',
})
export class HomeComponent implements OnInit {
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
}
