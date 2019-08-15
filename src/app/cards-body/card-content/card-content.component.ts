import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/model/product';

@Component({
  selector: 'app-card-content',
  templateUrl: './card-content.component.html',
  styleUrls: ['./card-content.component.css']
})
export class CardContentComponent implements OnInit {

  constructor() { }
  @Input() showProd:Product;
   @Output() backUpPage = new EventEmitter<string>();
  @Output() backUp = new EventEmitter<string>();
  ngOnInit() {
  }
  // clickBack() {
  //   console.log("in click back");
  //   this.backUp.emit('N');
  //    this.backUpPage.emit('N');
  // }
  mybackUpPage(event) {
    console.log("emit from back btn EVENT: ");
    console.log(event);
    this.backUp.emit(event);

  }
}
