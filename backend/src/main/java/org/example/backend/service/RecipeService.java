package org.example.backend.service;

import org.example.backend.repository.RecipeRepository;
import org.springframework.stereotype.Service;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepo;

    private final IdService idService;

    public RecipeService(RecipeRepository recipeRepo, IdService idService) {
        this.recipeRepo = recipeRepo;
        this.idService = idService;
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
//    public List<Recipe> findAllRecipe (){
//        return recipeRepo.findAll();
//    }
}
