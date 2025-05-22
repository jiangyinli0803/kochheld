package org.example.backend.controller;

import org.example.backend.model.dto.RecipeDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import org.example.backend.model.Recipe;
import org.example.backend.service.RecipeService;

import java.util.List;


@RestController
@RequestMapping("/api")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("/recipes")
    public List<Recipe> getRecipes() {
        return recipeService.findRecipes();
    }

    @GetMapping("/recipes/{category}")
    public List<Recipe> getRecipesByCategory(@PathVariable String category) {
        return recipeService.findRecipesByCategory(category);
    }

    @GetMapping("/recipe/{id}")
    public Recipe getRecipeByID(@PathVariable String id) {
        return recipeService.findRecipeByID(id);
    }


    @PostMapping("/add")
    public Recipe addRecipe(@RequestBody RecipeDto recipeDto) {
        return recipeService.addRecipe(recipeDto);
    }

    @PutMapping("/recipes/{id}")
    public Recipe updateRecipe(@PathVariable String id, @RequestBody RecipeDto recipeDto) {
        return recipeService.updateRecipe(id, recipeDto);
    }
//
//    @DeleteMapping("/{id}")
//    public Recipe deleteCharacter(@PathVariable String id) {
//        return recipeService.deleteRecipeById(id);
//    }
//
//    @GetMapping("/{id}")
//    public Recipe findById(@PathVariable String id) {
//        return recipeService.findById(id);
//    }
}