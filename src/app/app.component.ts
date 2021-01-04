import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  mydata = "abcd";
  myname = "";

  hello() {
    this.mydata = this.myname;
  }
}
