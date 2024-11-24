import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { getArticleById, IArticle, updateArticle } from '../../../api/article';

@Component({
  selector: 'app-update-article',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-article.component.html',
  styleUrl: './../../../styles.css',
})
export class UpdateArticleComponent implements OnInit {
  title = 'frontend-inventory-angular';

  articleForm!: FormGroup;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      description: [''],
      entryDate: [''],
      expiryDate: [''],
      quantity: [0],
      cost: [0]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = +params['id']; 
      this.loadArticleData(this.id);
    });
  }

  loadArticleData(id: number): void {
    getArticleById(id).then(
      (article: IArticle) => {
        this.articleForm.patchValue({
          description: article.description,
          entryDate: this.formatDate(article.entryDate),
          expiryDate: this.formatDate(article.expiryDate),
          quantity: article.quantity,
          cost: article.cost,
        });
      },
      error => {
        console.error('Error fetching article:', error);
      }
    );
  }

  formatDate(date: string | undefined): string {
    return date ? new Date(date).toISOString().split('T')[0] : '';
  }

  onSubmit(): void {
    if (this.articleForm.valid) {
      const updatedArticle: IArticle = {
        id: this.id,
        ...this.articleForm.value,
      };

      updateArticle(this.id, updatedArticle).then(
        response => {
          console.log('Article updated successfully:', response);
        },
        error => {
          console.error('Error updating article:', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }
}
