import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IArticle } from '../api/article';
import { retrieveArticles } from '../services/article';
import { MainCardComponent } from './components/main-card/main-card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './../styles.css',
})
export class AppComponent {
  title = 'frontend-inventory-angular';
}
