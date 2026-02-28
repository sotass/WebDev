import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { products } from './data/products';
import { categories } from './data/categories';
import { Product } from './models/product.model';
import { ProductListComponent } from './product-list/product-list';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  categories = categories;
  allProducts: Product[] = products;

  selectedCategoryId: number | null = null;
  visibleProducts: Product[] = [];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.visibleProducts = this.allProducts.filter(
      p => p.categoryId === id
    );
  }
}