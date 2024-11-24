import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { createArticle, IArticle } from '../../../api/article';

@Component({
  selector: 'app-create-article',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-article.component.html',
  styleUrl: './../../../styles.css',
})
export class CreateArticleComponent {
  title = 'frontend-inventory-angular';

  articleForm!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.articleForm = this.fb.group({
      description: [''],
      entryDate: [''],
      expiryDate: [''],
      quantity: [0],
      cost: [0, Validators.pattern(/^\d+$/)]
    });
  }

  onSubmit(): void {
    if (this.articleForm.valid) {
      const createArticleObject: IArticle = {
        ...this.articleForm.value,
      };

      createArticle(createArticleObject).then(
        response => {
          console.log('Article created successfully:', response);
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
