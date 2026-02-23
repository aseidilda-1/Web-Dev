import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card';
import { Product } from '../../models/product.model';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../app.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardComponent],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  searchTerm = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  get filteredProducts(): Product[] {
    const q = this.searchTerm.trim().toLowerCase();
    if (!q) return this.products;

    return this.products.filter(p =>
      p.name.toLowerCase().includes(q)
    );
  }

  trackById(_: number, p: Product): number {
    return p.id;
  }

  clearSearch(): void {
    this.searchTerm = '';
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter(p => p.id !== id);
  }

  selectedCategory = '';

  onCategoryChange(): void {
    if (!this.selectedCategory) {
      this.products = this.productService.getProducts();
    } else {
      this.products = this.productService.getProductsByCategory(
        Number(this.selectedCategory)
      );
    }
  }
}