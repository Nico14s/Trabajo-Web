import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  constructor() { }

  getItems() {
    return this.cartItems;
  }

  addItem(item: any) {
    this.cartItems.push(item);
  }

  removeItem(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }
}
