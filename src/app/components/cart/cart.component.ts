import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartItem } from '../../models/cart-item.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
  }

  updateQuantity(itemId: number, quantity: number): void {
    this.cartService.updateQuantity(itemId, quantity);
    this.cartItems = this.cartService.getCart();
  }

  removeFromCart(itemId: number): void {
    this.cartService.removeFromCart(itemId);
    this.cartItems = this.cartService.getCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartService.getTotal();
  }

  getTotalQuantity(): number {
    return this.cartService.getTotalQuantity();
  }
}
