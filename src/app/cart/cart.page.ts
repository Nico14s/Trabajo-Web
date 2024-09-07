import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: any[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit() {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  removeFromCart(index: number) {
    this.cartService.removeItem(index);
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotal();
  }

  goToProducts() {
    this.router.navigate(['/products']);
  }
}
