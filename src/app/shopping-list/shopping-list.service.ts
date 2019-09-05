import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] =[
        new Ingredient('Apples', 5),
        new Ingredient('Pears', 10)
      ];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredients: Ingredient){
        this.ingredients.push(ingredients);
        this.ingredientsChanged.next(this.ingredients.slice());
      }
    
    addIngredients(ingredients: Ingredient[]){
      this.ingredients.push(...ingredients);
      this.ingredientsChanged.next(this.ingredients.slice());
      }
    
}