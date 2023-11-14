import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Biryani',
      'A super-tasty Biryani - just awesome!',
      'https://www.licious.in/blog/wp-content/uploads/2020/12/Hyderabadi-chicken-Biryani-750x750.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Chicken', 1)]
    ),
    new Recipe(
      'Chicken Burger',
      'What else you need to say?',
      'https://cdn.dotpe.in/longtail/store-items/7981160/v2tLvKg7.jpeg',
      [new Ingredient('Buns', 2), new Ingredient('Chicken', 1)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
