import { Product } from '../model/product';
import { Category } from '../model/category';

export class CartService {

    cart:Product[] = []; //this is my cart array

    //this function add product to cart list
    addToCart(productToAdd:Product) {   
        this.cart.push(productToAdd);
        console.log("product "+productToAdd.name +" added succesfully to cart.");
        console.log("my cart products : ");
        console.log(this.cart);
    }

    //this function remove product fromcart  list
    removeFromCart(productToRemove) {
        if (this.existsInCart(productToRemove) > -1) {
            this.cart.splice(this.existsInCart(productToRemove),1);
            console.log("product "+productToRemove.name +" has removed successfully from cart");
        }

    }
    existsInCart(product):number {
        const index = this.cart.indexOf(product);
        if (index > -1) {
            return index;
        }
        return -1;
    }

}