import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate ,query, stagger, keyframes} from '@angular/animations';
import { v1 as uuid } from 'uuid';
import { Category } from '../../model/category';
import { Product } from '../../model/product';
import * as data from '../data.json';



@Component({
  selector: 'app-cards-body',
  templateUrl: './cards-body.component.html',
  styleUrls: ['./cards-body.component.css'],
  animations: [
    trigger('addProduct', [
      // state('in', style({ opacity: 1 })),
      // transition(':enter', [style({ opacity: 0 }), animate(600)])
      transition('* => *', [
        query(':enter',style({ opacity:0}) , {optional:true}) ,
        query(':enter',stagger('200ms',[
          animate('1s ease-in',keyframes([
            style({opacity:0 , transform: 'translateX(-75px)' , offset:0}),
            style({opacity:.5 , transform: 'translateX(35px)' , offset:0.3}),
            style({opacity:1 , transform: 'translateX(0)' , offset:1}),
          ]))
        ]))
      ])
    ]),
  ]
})
export class CardsBodyComponent implements OnInit {
  @Output() backUp = new EventEmitter<string>();
  fullCategoryArr: Category[] = []; //full data about categoty - include products. 
  productsArr: Product[] = [];//all products
  showProducts: Product[] = []; //products to show at the template
  categoriesNames: string[] = [];
  currentCategory: string = 'All'; //current category - default is All
  showProd: Product = null; //product that was clicked
  prodClicked: string = 'Y';  //flag that responsible for show product details/ products list.
  state = 'normal';

  constructor() {
 
  }

  ngOnInit() {
    this.loadProductsCatsFile();
    this.createShowProducts('All');
  }
  //load data from json file
  loadProductsCatsFile = () => {
    this.categoriesNames.push('All');
    data.categories.forEach((cat: Category) => { //loop over the categories
      cat.id = uuid(); //set id to category
      this.fullCategoryArr.push(cat); //add category ti categories array
      this.categoriesNames.push(cat.name); //add category name to categories name array (for combo box)
      cat.products.forEach((prod: Product) => { //loop over the products of category
        prod.id = uuid(); //set id to product
        prod.categoryId = cat.id; //set the foreign key of product's categoryId to id of category
        this.productsArr.push(prod); //add product to products array
      });
    });
  }


  clickCategory(cat) {
    this.createShowProducts(cat);
  }
  /* this function get a category and filtered the products.*/
  createShowProducts(category) {
    this.showProducts = [];
    if (category === 'All') {
      this.showProducts = [...this.productsArr];
    }
    else {
      this.productsArr.forEach((product) => {
        if (product.categoryId === category.id)
          this.showProducts.push(product);
      });
    }
  }


  getProduc(productToShow) {
    this.showProd = productToShow;
    this.prodClicked = 'N';
  }

  /* back btn - emit the page of the response to parent. */
  backUpPage() {
    this.prodClicked = 'Y';
    this.showProd = null;
    this.backUp.emit('Products')
  }
}


