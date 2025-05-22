package org.example.backend.controller;

import org.example.backend.model.Category;
import org.example.backend.model.Recipe;
import org.example.backend.repository.RecipeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@AutoConfigureMockMvc
@DirtiesContext(classMode = DirtiesContext.ClassMode.BEFORE_EACH_TEST_METHOD)
class RecipeControllerTest {
    final List<String> ingredients = new ArrayList<String>();
    Recipe recipe;
    @BeforeEach
    void setUp() {
        ingredients.add("Test_1");
        ingredients.add("Test_2");
        ingredients.add("Test_3");
        recipe = new Recipe(
                "123",
                "Test Recipe",
                "Test Image",
                ingredients,
                "Test instruction",
                "Test Description",
                120,
                Category.LUNCH
        );
    }

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private RecipeRepository recipeRepo;

    @Test
    void getRecipes_shouldReturnListOfRecipes_whenIsCalled() throws Exception {
        //GIVEN
        recipeRepo.save(recipe);
        //THEN
        mockMvc.perform(get("/api/recipes"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                """
                            [
                                {
                                    "id": "123",
                                    "name": "Test Recipe",
                                    "image": "Test Image",
                                    "ingredients": [
                                      "Test_1",
                                      "Test_2",
                                      "Test_3"
                                    ],
                                    "instruction": "Test instruction",
                                    "description": "Test Description",
                                    "duration": 120,
                                    "category": "LUNCH"
                                }
                            ]
                        """
                ));
    }

    @Test
    void getRecipesByCategory_shouldReturnListOfCategory_whenIsCalled() throws Exception {
        //GIVEN
        recipeRepo.save(recipe);
        //THEN
        mockMvc.perform(get("/api/recipes/LUNCH"))
                .andExpect(status().isOk())
                .andExpect(content().json(
                        """
                                    [
                                        {
                                            "id": "123",
                                            "name": "Test Recipe",
                                            "image": "Test Image",
                                            "ingredients": [
                                              "Test_1",
                                              "Test_2",
                                              "Test_3"
                                            ],
                                            "instruction": "Test instruction",
                                            "description": "Test Description",
                                            "duration": 120,
                                            "category": "LUNCH"
                                        }
                                    ]
                                """
                ));
    }

    @Test
    void getRecipesByCategory_shouldThrowException_whenIsCalledWithInvalidCategory() throws Exception {
        //GIVEN
        recipeRepo.save(recipe);
        //THEN
        mockMvc.perform(get("/api/recipes/TEATIME"))
                .andExpect(status().isNotFound())
                .andExpect(result -> assertInstanceOf(RuntimeException.class, result.getResolvedException()))
                .andExpect(result -> assertEquals("Could not find any recipe with category TEATIME", result.getResolvedException().getMessage()));
    }
    @Test
    void addRecipeControllerTest() throws Exception {

        String requestRecipe = """
                {
                "name": "Name",
                "image": "image",
                "ingredients": ["ingredients1", "ingredients2"],
                "instruction": "instruction",
                "description":"description",
                "duration": 10,
                "category": "BREAKFAST"
                }
                """;
        mockMvc.perform(post("/api/add")
                .contentType("application/json")
                .content(requestRecipe))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").isNotEmpty())
                .andExpect(jsonPath("$.name").value("Name"))
                .andExpect(jsonPath("$.category").value("BREAKFAST"));
    }
}