import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { deleteTransaction, ITransaction } from '../../api/transaction';
import { retrieveTransactions } from '../../services/transaction';
import { MainCardComponent } from '../components/main-card/main-card.component';
import { UpdateTransactionComponent } from './edit/update-transaction.component';

@Component({
  selector: 'app-transaction',
  standalone: true,
  imports: [CommonModule, MainCardComponent, UpdateTransactionComponent],
  templateUrl: './transaction.component.html',
  styleUrl: './../../styles.css',
})
export class TransactionComponent implements OnInit {
  title = 'frontend-inventory-angular';

  transactions: ITransaction[] = [];

  ngOnInit(): void {
    this.fetchTransactions();
  }

  async fetchTransactions(): Promise<void> {
    try {
      this.transactions = await retrieveTransactions();
    } catch (error) {
      console.error('Error retrieving transactions:', error);
    }
  }

  handleDelete(id: number) {
    deleteTransaction(id).then(() => this.fetchTransactions());
    this.transactions.filter((article) => article.id !== id);
  }
}
