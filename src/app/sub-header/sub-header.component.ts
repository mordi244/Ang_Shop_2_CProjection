import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {
  @Input() cartSize:number;
  @Input() user:string;
  @Output() cartClick = new EventEmitter<string>();
  cartnum:number = 0;
  logged:string = '';
  name:string = '';



  constructor(private userService:UserService , private cartService:CartService) {
   this.name = this.userService.getUserName();
   this.cartnum = this.cartService.cart.length;
   if (this.userService.isLogged) {
    this.logged = 'user';
   }
  }
  clickOnCart() {
    this.cartClick.emit('Cart');
    console.log("click on cart icon. cart items : "+this.cartnum);
  }  

  ngOnInit() {
  }

}
