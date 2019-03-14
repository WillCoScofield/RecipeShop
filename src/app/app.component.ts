import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loadThisFeature = "recipe";

  onRender(featureChosen: string) {
    console.log(featureChosen);
    this.loadThisFeature = featureChosen;
  }
}
