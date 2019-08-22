import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() product:Product;
  @Output() cartSize = new EventEmitter<number>();
  constructor(private cartService:CartService) {
  }

  ngOnInit() {
  }

  removeFromCart(productToRemove) {
    console.log("remove from cart !! ");
    console.log(productToRemove);
    this.cartService.removeFromCart(productToRemove);
    this.cartSize.emit(this.cartService.cart.length);
  }
}
