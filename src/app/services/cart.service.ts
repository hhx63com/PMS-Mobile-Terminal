import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item.model';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: CartItem[] = [];
  private readonly STORAGE_KEY = 'art_gallery_cart';

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored) {
      this.cart = JSON.parse(stored);
    }
  }

  private saveToStorage(): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.cart));
  }

  getCart(): CartItem[] {
    return this.cart;
  }

  addToCart(item: Item, quantity: number = 1): void {
    const existingItem = this.cart.find(cartItem => cartItem.item.item_id === item.item_id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.cart.push({ item, quantity });
    }
    this.saveToStorage();
  }

  removeFromCart(itemId: number): void {
    this.cart = this.cart.filter(cartItem => cartItem.item.item_id !== itemId);
    this.saveToStorage();
  }

  updateQuantity(itemId: number, quantity: number): void {
    const cartItem = this.cart.find(item => item.item.item_id === itemId);
    if (cartItem) {
      cartItem.quantity = quantity;
      this.saveToStorage();
    }
  }

  clearCart(): void {
    this.cart = [];
    this.saveToStorage();
  }

  getTotal(): number {
    return this.cart.reduce((total, cartItem) => total + (cartItem.item.price * cartItem.quantity), 0);
  }

  getTotalQuantity(): number {
    return this.cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
  }
}