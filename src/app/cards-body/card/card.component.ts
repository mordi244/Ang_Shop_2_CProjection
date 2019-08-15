import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../model/product';
import { trigger, state, style, transition, animate, query, stagger, keyframes } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('addProduct', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),  // initial
        animate('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', 
          style({ transform: 'scale(1)', opacity: 1 }))  // final
      ])
    ])
  ]
  
})

export class CardComponent implements OnInit {
  @Input() product:Product;
  @Input() prodClicked:string;
  @Input() showProd:Product;
  @Output() prodToLoadDesc = new EventEmitter<Product>();
  constructor() { }

  /* emit data to parent component when clicking the product div (clickeble)*/
  clickDiv(produc) {
    console.log("click div");
    console.log(produc);
    this.prodToLoadDesc.emit(produc);
  }
  ngOnInit() {
  }

}
