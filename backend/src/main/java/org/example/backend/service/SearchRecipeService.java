package org.example.backend.service;

import org.example.backend.exception.RecipeNotFoundException;
import org.example.backend.model.Recipe;
import org.example.backend.repository.RecipeRepository;
import org.example.backend.repository.SearchRecipeRepository;
import org.springframework.core.annotation.MergedAnnotations;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SearchRecipeService {

    private final SearchRecipeRepository searchRecipeRepository;


    public SearchRecipeService(SearchRecipeRepository searchRecipeRepository) {
        this.searchRecipeRepository = searchRecipeRepository;
    }

    public List<Recipe> getFilteredRecipes(@RequestParam String searchText) throws RecipeNotFoundException {
        String keyword = searchText.trim().toLowerCase();
        List<Recipe> recipes = searchRecipeRepository.findAll();
        List<Recipe> filteredRecipes = recipes.stream().filter(r -> r.name().toLowerCase().contains(keyword)
                                || r.ingredients().stream().anyMatch(ing -> ing.toLowerCase().contains(keyword))
                                ).toList();
        return filteredRecipes;

    }
}


