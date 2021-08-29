import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'This is a sample test', 
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg'
    ),
    new Recipe(
      'A test Recipe 2',
      'This is a sample test 2', 
      'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg'
    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
