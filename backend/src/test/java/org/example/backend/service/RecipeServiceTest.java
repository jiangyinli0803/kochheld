package org.example.backend.service;

import static org.junit.jupiter.api.Assertions.*;

import org.example.backend.exception.ResourceNotFoundException;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import java.util.Collections;
import java.util.List;

import org.example.backend.model.Category;
import org.example.backend.model.Recipe;
import org.example.backend.repository.RecipeRepository;
import org.mockito.Mockito;


class RecipeServiceTest {
    RecipeRepository mockRepo = mock(RecipeRepository.class);
    IdService mockId = mock(IdService.class);
    RecipeService recipeService = new RecipeService(mockRepo, mockId);
    Recipe recipe = new Recipe(
            "123",
            "Test Recipe",
            "Test Image",
            List.of(new String[]{
                    "Test_1",
                    "Test_2",
                    "Test_3"
            }),
            "Test instruction",
            "Test Description",
            120,
            Category.LUNCH
    );

    @Test
    void findRecipes_shouldReturnListOfRecipes_whenIsCalled() throws Exception {
        // GIVEN
        List<Recipe> expected = List.of(recipe);
        when(mockRepo.findAll()).thenReturn(expected);
        // WHEN
        List<Recipe> actual = recipeService.findRecipes();
        // THEN
        assertEquals(expected, actual);
    }

    @Test
    void findRecipes_shouldReturnEmptyList_whenIsCalled() throws Exception {
        // GIVEN
        List<Recipe> expected = Collections.emptyList();
        Mockito.when(mockRepo.findAll()).thenReturn(expected);
        // WHEN
        List<Recipe> actual = recipeService.findRecipes();
        // THEN
        assertEquals(expected, actual);
    }

    @Test
    void findRecipesByCategory_shouldReturnListOfCategory_whenIsCalled() throws Exception {
        // GIVEN
        List<Recipe> expected = List.of(recipe);
        when(mockRepo.findByCategory(Category.LUNCH)).thenReturn(expected);
        // WHEN
        List<Recipe> actual = recipeService.findRecipesByCategory("LUNCH");
        // THEN
        assertEquals(expected, actual);
    }

    @Test
    void findRecipesByCategory_shouldThrowException_whenGetInvalidValue() {
        // GIVEN
        List<Recipe> expected = List.of(recipe);
        // WHEN
        try {
            recipeService.findRecipesByCategory("TEATIME");
        } catch (ResourceNotFoundException e) {
            // THEN
            assertTrue(true);
        }
    }
}