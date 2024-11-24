import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IArticle } from '../../../api/article';
import { IState } from '../../../api/state';
import { getTransactionById, ITransaction, updateTransaction } from '../../../api/transaction';
import { ITransactionType } from '../../../api/transaction-type';
import { retrieveArticles } from '../../../services/article';
import { retrieveStates } from '../../../services/state';
import { retrieveTransactionTypes } from '../../../services/transaction-type';

@Component({
  selector: 'app-update-transaction',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-transaction.component.html',
  styleUrl: './../../../styles.css',
})
export class UpdateTransactionComponent implements OnInit {
  title = 'frontend-inventory-angular';

  transactionForm!: FormGroup;
  id: number = 0;

  transactionTypes: ITransactionType[] = [];
  states: IState[] = [];
  articles : IArticle[] = [];

  constructor(
    private route: ActivatedRoute,
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
    this.route.params.subscribe((params) => {
      this.id = +params['id']; 
      this.loadTransactionData(this.id);
    });
    this.loadTransactionTypeData();
    this.loadStateData();
    this.loadArticlesData();
  }

  loadTransactionData(id: number): void {
    getTransactionById(id).then(
      (transaction: ITransaction) => {
        this.transactionForm.patchValue({
          description: transaction.description,
          transactionTypeId: transaction.transactionTypeId,
          stateId: transaction.stateId,
          articleId: transaction.articleId,
          documentDate: this.formatDate(transaction.documentDate),
          quantity: transaction.quantity,
          total: transaction.total,
        });
      },
      error => {
        console.error('Error fetching transaction:', error);
      }
    );
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

  formatDate(date: string | undefined): string {
    return date ? new Date(date).toISOString().split('T')[0] : '';
  }

  onSubmit(): void {
    if (this.transactionForm.valid) {
      const updatedTransaction: ITransaction = {
        id: this.id,
        ...this.transactionForm.value,
      };

      updateTransaction(this.id, updatedTransaction).then(
        response => {
          console.log('Transaction updated successfully:', response);
        },
        error => {
          console.error('Error updating transaction:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
