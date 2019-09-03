import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {Recipe} from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is just a test', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2591001_qfssh_0129.jpg?itok=hgMNu3Ss'),
    new Recipe('Another Test Recipe', 'This is just a test', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2591001_qfssh_0129.jpg?itok=hgMNu3Ss'),
    new Recipe('A Different Test Recipe', 'This is just a test', 'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2591001_qfssh_0129.jpg?itok=hgMNu3Ss')
  ];

  constructor() { }

  ngOnInit() {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
