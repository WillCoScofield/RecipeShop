import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { RecipeBookComponent } from "./recipe-book/recipe-book.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeListFeatureComponent } from "./recipe-book/recipe-list-feature/recipe-list-feature.component";
import { RecipeItemFeatureComponent } from "./recipe-book/recipe-item-feature/recipe-item-feature.component";
import { RecipeDetailFeatureComponent } from "./recipe-book/recipe-detail-feature/recipe-detail-feature.component";
import { ShoppingListFeatureComponent } from "./shopping-list/shopping-list-feature/shopping-list-feature.component";
import { ShoppingListEditComponent } from "./shopping-list/shopping-list-edit/shopping-list-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    HeaderComponent,
    RecipeListFeatureComponent,
    RecipeItemFeatureComponent,
    RecipeDetailFeatureComponent,
    ShoppingListFeatureComponent,
    ShoppingListEditComponent
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
