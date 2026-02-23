import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCardComponent implements OnChanges {
  @Output() remove = new EventEmitter<number>();
  @Input({ required: true }) product!: Product;

  selectedImage = '';

  ngOnChanges(): void {
    this.selectedImage = this.product.image || this.product.images?.[0] || '';
  }

  setImage(url: string): void {
    this.selectedImage = url;
  }

  starFilled(index: number): boolean {
    return this.product.rating >= index + 1;
  }

  openKaspi(): void {
    window.open(this.product.link, '_blank', 'noopener,noreferrer');
  }

  shareWhatsApp(): void {
    const text = `Check out this product: ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  shareTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  toggleLike(): void {
    this.product.likes += 1;
  }

  deleteProduct(): void {
    this.remove.emit(this.product.id);
    alert(`Product "${this.product.name}" deleted!`);
  }
}