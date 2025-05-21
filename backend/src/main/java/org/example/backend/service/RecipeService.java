package org.example.backend.service;

import org.example.backend.exception.ResourceNotFoundException;
import org.example.backend.model.Category;
import org.springframework.stereotype.Service;
import java.util.List;

import org.example.backend.model.Recipe;
import org.example.backend.repository.RecipeRepository;


@Service
public class RecipeService {

    private final RecipeRepository recipeRepo;

    private final IdService idService;

    public RecipeService(RecipeRepository recipeRepo, IdService idService) {
        this.recipeRepo = recipeRepo;
        this.idService = idService;
    }

    public List<Recipe> findRecipes() {
        return recipeRepo.findAll();
    }

    public List<Recipe> findRecipesByCategory(String category) {
        return switch (category) {
            case "BREAKFAST" -> recipeRepo.findByCategory(Category.BREAKFAST);
            case "LUNCH" -> recipeRepo.findByCategory(Category.LUNCH);
            case "DINNER" -> recipeRepo.findByCategory(Category.DINNER);
            case "SNACK" -> recipeRepo.findByCategory(Category.SNACK);
            default -> throw new ResourceNotFoundException("Could not find any recipe with category " + category);
        };
    }

    public Recipe findRecipeByID(String id) {
        return recipeRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Task with id '" + id + "' could not been found."));
    }

//    public Recipe createRecipe( RecipeDto recipeDto) {
//        String id = idService.createId();
//
//        Recipe recipe = new Recipe(
//                id,
//                recipeDto.name(),
//                recipeDto.imageUrl(),
//                recipeDto.ingredients(),
//                recipeDto.description()
//        );
//
//        return  recipeRepo.save(recipe);
//    }
//
//    public Recipe updateRecipe (String id, RecipeDto recipeDto){
//
//        Recipe oldData = recipeRepo.findById(id)
//                .orElseThrow(() -> new RecipeNotFoundException("Recipe is not found"));
//
//        Recipe recipe = new Recipe(
//                oldData.id(),
//                recipeDto.name(),
//                recipeDto.imageUrl(),
//                recipeDto.ingredients(),
//                recipeDto.description()
//        );
//        return recipeRepo.save(recipe);
//    }
//
//    public Recipe deleteRecipeById (String id){
//        Recipe recipe = recipeRepo.findById(id)
//                .orElseThrow(() -> new RecipeNotFoundException("Recipe id = " + id + "is not found"));
//        recipeRepo.delete(recipe);
//        return recipe;
//    }
//
//    public Recipe findById (String id){
//        return recipeRepo.findById(id)
//                .orElseThrow(() -> new RecipeNotFoundException("Recipe id = " + id + "is not found"));
//    }
//
}
