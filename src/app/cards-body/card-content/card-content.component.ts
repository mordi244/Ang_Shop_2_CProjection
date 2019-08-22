import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../../cart.service';
@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
 
  constructor(private cartService:CartService) {
  }
  @Input() showProd:Product;
   @Output() backUpPage = new EventEmitter<string>();
  @Output() backUp = new EventEmitter<string>();
  exists:string;
  @Output() cartNum = new EventEmitter<number>();
  ngOnInit() {
    this.exists = this.existsInCart();
  }
  // clickBack() {
  //   console.log("in click back");
  //   this.backUp.emit('N');
  //    this.backUpPage.emit('N');
  // }
  mybackUpPage(event) {
    this.backUp.emit(event);
  }
  addToCart(productToAdd) {
    this.cartService.addToCart(productToAdd);
    this.exists = 'Y'
    this.cartNum.emit(this.cartService.cart.length);
  }
  existsInCart():string{
    if (this.cartService.existsInCart(this.showProd) > -1) {
      return 'Y';  
    }
    else return '';  
  }
}
