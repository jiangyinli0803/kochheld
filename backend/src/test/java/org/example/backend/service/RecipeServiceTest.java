package org.example.backend.service;

import static org.junit.jupiter.api.Assertions.*;

import org.example.backend.exception.ResourceNotFoundException;
import org.example.backend.model.dto.RecipeDto;
import org.junit.jupiter.api.Test;
import static org.mockito.Mockito.*;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

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
    void findRecipes_shouldReturnListOfRecipes_whenIsCalled() {
        // GIVEN
        List<Recipe> expected = List.of(recipe);
        when(mockRepo.findAll()).thenReturn(expected);
        // WHEN
        List<Recipe> actual = recipeService.findRecipes();
        // THEN
        assertEquals(expected, actual);
    }

    @Test
    void findRecipes_shouldReturnEmptyList_whenIsCalled() {
        // GIVEN
        List<Recipe> expected = Collections.emptyList();
        Mockito.when(mockRepo.findAll()).thenReturn(expected);
        // WHEN
        List<Recipe> actual = recipeService.findRecipes();
        // THEN
        assertEquals(expected, actual);
    }

    @Test
    void findRecipesByCategory_shouldReturnListOfCategory_whenIsCalled() {
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
        // WHEN
        try {
            recipeService.findRecipesByCategory("TEATIME");
        } catch (ResourceNotFoundException e) {
            // THEN
            assertTrue(true);
        }
    }

    @Test
    void addRecipe() {
        List<String> ingredients = List.of("Eggs", "Milk");
        RecipeDto inputDto = new RecipeDto(
                "Omelette", "image-url.jpg", ingredients, "Mix and fry",
                "Simple and fast breakfast", 10, Category.BREAKFAST
        );

        IdService mockedIdService = mock(IdService.class);
        RecipeRepository mockedRecipeRepo = mock(RecipeRepository.class);
        RecipeService recipeService = new RecipeService(mockedRecipeRepo, mockedIdService);

        String generatedId = "generated-id-123";
        when(mockedIdService.createId()).thenReturn(generatedId);

        Recipe expectedRecipe = new Recipe(
                generatedId,
                inputDto.name(),
                inputDto.image(),
                inputDto.ingredients(),
                inputDto.instruction(),
                inputDto.description(),
                inputDto.duration(),
                inputDto.category()
        );

        when(mockedRecipeRepo.save(any(Recipe.class))).thenReturn(expectedRecipe);
        Recipe result = recipeService.addRecipe(inputDto);
        verify(mockedRecipeRepo).save(any(Recipe.class));
        assertEquals(expectedRecipe, result);
    }

    @Test
    void shouldUpdateExistingRecipe() {
        RecipeRepository mockRepo = mock(RecipeRepository.class);
        IdService mockId = mock(IdService.class);
        RecipeService recipeService = new RecipeService(mockRepo, mockId);

        List<String> ingredients = List.of("Eggs", "Milk");
        Recipe oldData = new Recipe("1", "Name", "img", ingredients,
                "instruction", "description", 120, Category.BREAKFAST
        );

        List<String> updatedIngredients = List.of("Apple", "Mango");
        RecipeDto updatedData = new RecipeDto("New Name", "new-img",
                updatedIngredients, "new instruction", "new description", 90, Category.DINNER
        );

        when(mockRepo.findById("1")).thenReturn(Optional.of(oldData));
        when(mockRepo.save(any(Recipe.class))).thenReturn(new Recipe("1", "New Name",
                "new-img", updatedIngredients, "new instruction", "new description", 90, Category.DINNER
        ));

        Recipe result = recipeService.updateRecipe("1", updatedData);
        assertNotNull(result);
        assertEquals("New Name", result.name());
        assertEquals("new-img", result.image());
        assertEquals("new instruction", result.instruction());
        assertEquals(updatedIngredients, result.ingredients());
        assertEquals("new description", result.description());
        assertEquals(90, result.duration());
        assertEquals(Category.DINNER, result.category());
        verify(mockRepo).save(any(Recipe.class));
    }
}