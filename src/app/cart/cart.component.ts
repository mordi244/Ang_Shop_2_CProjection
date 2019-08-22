import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  @Output() cartSize = new EventEmitter<number>();
  cart: Product[] = [];//all products in my cart
  constructor(private cartService:CartService) {
    this.cart = this.cartService.cart;
    console.log("cart in cart component : ");
    console.log(this.cart);
  }

  cartLength(event) {
    console.log("removed from cart compoment");
    console.log(event);
    this.cartSize.emit(event);
  }
  ngOnInit() {
  }

}
