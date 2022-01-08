import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor() {}

  // 製品をカートに追加
  addToCart(product: Product) {
    this.items.push(product);
  }

  // 商品リストを返す
  getItems() {
    return this.items;
  }

  // カートを空にする
  clearCart() {
    this.items = [];
    return this.items;
  }

  // カートから削除する、とかいらんのか？
}
