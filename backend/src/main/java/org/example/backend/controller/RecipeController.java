package org.example.backend.controller;

import org.example.backend.service.RecipeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/recipe")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

//    @GetMapping
//    public List<Recipe> getAll() {
//        return recipeService.findAllRecipe();
//    }
//
//    @PostMapping("/add")
//    public Recipe createRecipe(@RequestBody RecipeDto recipeDto) {
//        return recipeService.createRecipe(recipeDto);
//    }
//
//    @PutMapping("/{id}")
//    public Recipe updateRecipe(@PathVariable String id, @RequestBody RecipeDto recipeDto) {
//        return recipeService.updateRecipe(id, recipeDto);
//    }
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