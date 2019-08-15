import { Component } from '@angular/core';
import { trigger, state, style, transition, animate, query, group } from '@angular/animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],


})
export class AppComponent {
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
  }
  backUp() {
    console.log("in back up !!!!!!!!");
    this.onSelect('Products');
  }

}
