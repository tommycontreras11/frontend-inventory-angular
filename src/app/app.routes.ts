import { Routes } from '@angular/router';
import { ArticleComponent } from './articles/article.component';
import { CreateArticleComponent } from './articles/create/create-article.component';
import { UpdateArticleComponent } from './articles/edit/update-article.component';
import { HomeComponent } from './home/home.component';
import { UpdateTransactionComponent } from './transactions/edit/update-transaction.component';
import { TransactionComponent } from './transactions/transaction.component';
import { CreateTransactionComponent } from './transactions/create/create-transaction.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  
  { path: 'home', component: HomeComponent },  
  { path: 'articles', component: ArticleComponent },  
  { path: 'articles/create', component: CreateArticleComponent },
  { path: 'articles/edit/:id', component: UpdateArticleComponent },
  { path: 'transactions', component: TransactionComponent },  
  { path: 'transactions/edit/:id', component: UpdateTransactionComponent },
  { path: 'transactions/create', component: CreateTransactionComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }  
];
