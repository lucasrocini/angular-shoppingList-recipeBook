import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable({
    providedIn: 'root'
  })

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Chicken Medallion',
            'Chicken Medallion - with bacon!', 
            'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20)
            ]
        ),
        new Recipe(
            'Chop Suey',
            'Chop Suey - not from SOAD!', 
            'http://tudomesmo.com.br/receitas/wp-content/uploads/2013/10/receita-de-chop-suey-de-frango.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
            ]
        )
    ];

    constructor(private slService: ShoppingListService) {}

    getRecipes() {
        //clice to return a new array, as an exact copy of the one in 
        //this service file
        return this.recipes.slice(); 
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }
    
}