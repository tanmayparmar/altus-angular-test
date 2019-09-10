import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name: string = "23 Cannon Place";
  math = Math;
  rentAbleArea: number = 305000;
  tenantName: string = "Ashridge Fine Foods";
  tenantArea: number = 63500;

  constructor() {
  }
}
