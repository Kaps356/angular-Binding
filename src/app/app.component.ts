import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  mydata = "abcd";
  myname = "";
  valUser = false;

  hello() {
    this.mydata = this.myname;
  }

  formHello(data) {
    this.valUser = true;
    console.log(data.txtusername + " " + data.txtpassword);
  }
}
