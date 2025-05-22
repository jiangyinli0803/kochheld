package org.example.backend.controller;

import org.example.backend.model.Category;
import org.example.backend.model.Recipe;
import org.example.backend.model.dto.RecipeDto;
import org.example.backend.service.RecipeService;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(RecipeController.class)
@AutoConfigureMockMvc(addFilters = false)
@Import(RecipeControllerWebTest.MockConfig.class)
class RecipeControllerWebTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private RecipeService recipeService;

    @TestConfiguration
    static class MockConfig {
        @Bean
        public RecipeService recipeService() {
            return Mockito.mock(RecipeService.class);
        }
    }

    @Test
    void updateRecipeControllerTest() throws Exception {
        String id = "1";

        String requestRecipe = """
                {
                    "name": "Name",
                    "image": "image",
                    "ingredients": ["ingredients1", "ingredients2"],
                    "instruction": "instruction",
                    "description": "description",
                    "duration": 10,
                    "category": "BREAKFAST"
                }
                """;

        Recipe update = new Recipe(id, "Name", "image", List.of("ingredients1", "ingredients2"), "instruction", "description", 10, Category.BREAKFAST);

        when(recipeService.updateRecipe(eq(id), any(RecipeDto.class))).thenReturn(update);

        mockMvc.perform(put("/api/recipes/" + id)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(requestRecipe))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(id))
                .andExpect(jsonPath("$.name").value("Name"))
                .andExpect(jsonPath("$.category").value("BREAKFAST"));
    }
}
