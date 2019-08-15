import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'back-button',
    templateUrl: './back.component.html',
    styleUrls: ['./back.component.css']
    
})
export class BackComponent {

  constructor() { }
  @Output() backUpPage = new EventEmitter<string>();
  ngOnInit() {
  }

  /* emit data to parent element when clicking the back btn*/
  /* emit the string 'N' -> display allproducts and not speciefic product*/
  clickBack() {
    console.log("in click back");
    this.backUpPage.emit('N');
  }
  
 
}
