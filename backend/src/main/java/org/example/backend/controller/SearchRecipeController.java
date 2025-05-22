package org.example.backend.controller;

import org.example.backend.exception.RecipeNotFoundException;
import org.example.backend.model.Recipe;
import org.example.backend.service.SearchRecipeService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/allrecipes")
public class SearchRecipeController {
    private final SearchRecipeService searchRecipeService;


    public SearchRecipeController(SearchRecipeService searchRecipeService) {
        this.searchRecipeService = searchRecipeService;
    }


    @GetMapping
    public List<Recipe> getFilteredRecipes(@RequestParam String searchText) throws RecipeNotFoundException {
        return searchRecipeService.getFilteredRecipes(searchText);
    }
}
