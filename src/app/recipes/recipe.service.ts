import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()

export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
    new Recipe('Fish Tacos', 
    'Quck and East Fish Tacos', 
    'https://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/2591001_qfssh_0129.jpg?itok=hgMNu3Ss',
    [
        new Ingredient('Fish',1),
        new Ingredient('Tortillas', 12),
        new Ingredient('Avocado', 3)
    ]),
    new Recipe('Cheese Burger', 
    'Delicious Cheese Burger', 
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn6_Ca5Dc20i9A13veq72A3qxDGTiWD2bQahHrcvzvQOk6YQIccw',
    [
        new Ingredient('Burger Patty', 6),
        new Ingredient('Buns', 6),
        new Ingredient('Cheese Slices', 6)

    ])
    ];
    constructor(private slService: ShoppingListService){

    }
    getRecipies(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);

    }
}