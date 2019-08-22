import { Component, Output, EventEmitter } from '@angular/core';

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

  clickBack() {
    this.backUpPage.emit('N');
  }
  
 
}
