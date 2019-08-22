import { Component } from '@angular/core';
import { CartService } from './cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
  cartSize:number;
  constructor(private cartService:CartService) {
    
  }
  ngOnInit() {
    console.log("app on init");
    this.cartSize = this.cartService.cart.length;
  }
  // @Output() pageSelected = new EventEmitter<string>();
  loadedPage = 'Home';
  currentState = 'open';
  onNavigate(page) {
    console.log("on nevagate");
    this.loadedPage = page;
  }

  onSelect(event: string) {
    console.log("the click event is : ");
    console.log(event);
    this.loadedPage = event;
    console.log('the load page' + this.loadedPage);
  }
  backUp() {
    console.log("in back up !!!!!!!!");
    this.onSelect('Products');
    this.cartSize = this.cartService.cart.length;
  }
  myCartSize(event) {
    console.log("my cart size ! ");
    console.log(event);
  }
  cartLength(event) {
    console.log("my cart length in app componebt ! ");
    console.log(event);
    this.cartSize = event;
  }
}
