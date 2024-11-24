import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { createTransaction, ITransaction } from '../../../api/transaction';
import { retrieveTransactionTypes } from '../../../services/transaction-type';
import { ITransactionType } from '../../../api/transaction-type';
import { IArticle } from '../../../api/article';
import { retrieveArticles } from '../../../services/article';
import { IState } from '../../../api/state';
import { retrieveStates } from '../../../services/state';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './../../../styles.css',
})
export class CreateTransactionComponent implements OnInit {
  title = 'frontend-inventory-angular';

  transactionForm!: FormGroup;

  transactionTypes: ITransactionType[] = [];
  states: IState[] = [];
  articles : IArticle[] = [];


  constructor(
    private fb: FormBuilder
  ) {
    this.transactionForm = this.fb.group({
      description: [''],
      documentDate: [''],
      transactionTypeId: [0],
      stateId: [0],
      articleId: [0],
      quantity: [0],
      total: [0]
    });
  }
  ngOnInit(): void {
    this.loadTransactionTypeData();
    this.loadStateData();
    this.loadArticlesData();
  }

  loadStateData(): void {
    retrieveStates().then(
      (states: IState[]) => {
        this.states = states;
      },
      error => {
        console.error('Error fetching states:', error);
      }
    );
  }

  loadArticlesData(): void {
    retrieveArticles().then(
      (articles: IArticle[]) => {
        this.articles = articles;
      },
      error => {
        console.error('Error fetching articles:', error);
      }
    );
  }

  loadTransactionTypeData(): void {
    retrieveTransactionTypes().then(
      (transactionType: ITransactionType[]) => {
        this.transactionTypes = transactionType;
      },
      error => {
        console.error('Error fetching transaction types:', error);
      }
    );
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const createTransactionObject: ITransaction = {
        ...this.transactionForm.value,
      };

      createTransaction(createTransactionObject).then(
        response => {
          console.log('Transaction created successfully:', response);
        },
        error => {
          console.error('Error creating article:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
