import { Component, OnInit } from "@angular/core";
import { IngredientModel } from "./ingredient-model/ingredient-model.model";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: IngredientModel[] = [
    new IngredientModel("Cinnamon Buns", 2),
    new IngredientModel("Honey Thistle", 5)
  ];
  constructor() {}

  ngOnInit() {}
}
