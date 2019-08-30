import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../../cart.service';
import { UserService } from '../../user.service';
import { AdminService } from 'src/app/admin.service';
@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {
  logged:boolean;
  isAdmin:boolean;
  editClick:boolean = false;
  @Input() showProd:Product;
   @Output() backUpPage = new EventEmitter<string>();
  @Output() backUp = new EventEmitter<string>();
  exists:string;
  @Output() cartNum = new EventEmitter<number>();
  constructor(private cartService:CartService , private userService:UserService,private adminService:AdminService) {
    this.logged = this.userService.isLogged('user'); // hardcoded
    this.isAdmin = this.adminService.admins[0].logged;
    console.log(" is admin : "+this.isAdmin);
  }
  
  
  ngOnInit() {
    console.log("cart-contend user logged : "+this.logged);
    this.exists = this.existsInCart();
  }
  // clickBack() {
  //   console.log("in click back");
  //   this.backUp.emit('N');
  //    this.backUpPage.emit('N');
  // }
  mybackUpPage(event) {
    this.editClick = false;
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
  onClickEdit() {
    this.editClick = true;
    console.log("edit clicked !! "+this.editClick);
  }
}
