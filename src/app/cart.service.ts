import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  constructor(private http: HttpClient) {}

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

  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }

  // カートから削除する、とかいらんのか？
}
