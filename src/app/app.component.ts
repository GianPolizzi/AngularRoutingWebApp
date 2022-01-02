import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'routing-app';

  show : boolean = false;

  toggleCategory(){
    this.show = !this.show;
  }

  closeAllSubmenu(){
    this.show = false;
  }
}


