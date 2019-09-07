import { Component } from '@angular/core';
import { CartService } from './cart.service';
import { UserService } from './user.service';
import { DataService } from './data.service';
import { LocalService } from './local.service';
import { AdminService } from './admin.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  myMenu:string[] = [
    'Home','About','Products'
  ];
  menu:any[] = [];
  cartSize: number;
  logged:string = '';
  logMode:string = 'Login';
  lng:string = 'eng';
  constructor(private cartService: CartService,private userService:UserService
    ,dataService:DataService ,private localService:LocalService , private adminService:AdminService ) {
      dataService.loadProductsCatsFile();
  }
  ngOnInit() {
    console.log("app on init");
    this.cartSize = this.cartService.cart.length;
    //this.menu = this.localService.translate(this.lng) ;
    console.log("my menu : ");
    console.log(this.menu);
  }
  // @Output() pageSelected = new EventEmitter<string>();
  loadedPage = 'Home';
  currentState = 'open';
  onNavigate(page) {
    this.loadedPage = page;
  }

  onSelect(event: string) {
    this.loadedPage = event;
    console.log(this.loadedPage);
    if (event === 'Logout') {
      this.logMode = 'Login';
      this.logged = '';
      this.userService.logOutUser('user');
      this.adminService.logOutUser('admin');
    }
  }
  backUp() {
    this.onSelect('Products');
    this.cartSize = this.cartService.cart.length;
  }
 
  cartLength(event) {

    this.cartSize = event;
  }
  isLogged(event) {
    if (event !== '') {
      this.logged = event;
      this.logMode = 'Logout';
    }
    this.loadedPage = 'Home';
    console.log("logged function in app com : "+event);
  }
  changeLng(event) {
    this.lng = event;
    this.localService.changeLng(event);
    console.log("lng : "+this.lng);
  }
  clickMyButton() {
    console.log("testing btn");
    console.log("logged is : "+this.logged);
  }
  userLogged():string {
    if (this.userService.checkLogged() !== '') {
      this.logged = this.userService.checkLogged();
      this.logMode = 'Logout';
    }
    else if (this.adminService.checkLogged() !== '') {
      this.logged = this.adminService.checkLogged();
      this.logMode = 'Logout';
    }
    else this.logged = '';   
    return this.logged;
  }

}
