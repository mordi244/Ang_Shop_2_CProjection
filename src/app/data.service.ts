import { Category } from '../model/category';
import { Product } from '../model/product';
import * as data from './data.json';
import { v1 as uuid } from 'uuid';
export class DataService {
    fullCategoryArr: Category[] = []; //full data about categoty - include products. 
    productsArr: Product[] = [];//all products
    categoriesNames: string[] = [];
    loadProductsCatsFile = () => {
      this.categoriesNames = [];
      this.fullCategoryArr = [];
      this.productsArr = [];
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
}
