import { Component, OnInit } from "@angular/core";
import { RecipeModel } from "../recipe-model/recipe-model.model";

@Component({
  selector: "app-recipe-list-feature",
  templateUrl: "./recipe-list-feature.component.html",
  styleUrls: ["./recipe-list-feature.component.css"]
})
export class RecipeListFeatureComponent implements OnInit {
  recipes: RecipeModel[] = [
    new RecipeModel(
      "Test Recipe",
      "Simply a test recipe we're using",
      "https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg"
    ),
    new RecipeModel(
      "AnothaOne!",
      "Anotha test recipe description",
      "imagePath"
    ),
    new RecipeModel(
      "Test Recipe",
      "Simply a test recipe we're using",
      "https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg"
    ),
    new RecipeModel(
      "Test Recipe",
      "Simply a test recipe we're using",
      "https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg"
    ),
    new RecipeModel(
      "Test Recipe",
      "Simply a test recipe we're using",
      "https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg"
    ),
    new RecipeModel(
      "Test Recipe",
      "Simply a test recipe we're using",
      "https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg"
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
