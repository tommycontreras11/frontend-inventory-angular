import { Routes } from '@angular/router';
import { ArticleComponent } from './articles/article.component';
import { HomeComponent } from './home/home.component';
import { UpdateArticleComponent } from './articles/edit/update-article.component';
import { CreateArticleComponent } from './articles/create/create-article.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'articles', component: ArticleComponent },  
  { path: 'articles/create', component: CreateArticleComponent },
  { path: 'articles/edit/:id', component: UpdateArticleComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];
