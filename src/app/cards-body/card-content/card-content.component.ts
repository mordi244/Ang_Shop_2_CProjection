import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';
import { CartService } from '../../cart.service';
import { UserService } from '../../user.service';
import { AdminService } from 'src/app/admin.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  idRoute:number ;
  logged:boolean;
  isAdmin:boolean;
  editClick:boolean = false;
  //@Input() showProd:Product;
  showProd:Product;
   @Output() backUpPage = new EventEmitter<string>();
  @Output() backUp = new EventEmitter<string>();
  exists:string;
  @Output() cartNum = new EventEmitter<number>(); 
  newProduct: Product;
  dataService: any;
  constructor(private route:ActivatedRoute,private cartService:CartService , private userService:UserService,private adminService:AdminService) {
    this.logged = this.userService.isLogged('user'); // hardcoded
    this.isAdmin = this.adminService.admins[0].logged;
   // console.log(" is admin : "+this.isAdmin);
    this.exists = this.existsInCart();
   
    
  }

  // ngAfterContentInit() {
  //   console.log("*************************ngAfterContentInit");
  //   const prodRouteid = this.route.snapshot.params['id'];
  //   console.log("the id in the route : "+prodRouteid);
  //   console.log("my product after getting it with id : ");
  //   this.showProd = this.dataService.getProduct(prodRouteid);
  //   console.log(this.showProd);
  // }
  ngOnInit() {
    this.route.params.subscribe(
      (params:Params) => {
        this.idRoute = params['id'];
        this.showProd = this.dataService.getProduct(this.idRoute);
      }
    );
    
    console.log("my show prod in new func subscribe : ");
    console.log(this.showProd);

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
