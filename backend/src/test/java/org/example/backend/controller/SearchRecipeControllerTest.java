package org.example.backend.controller;

import org.example.backend.model.Category;
import org.example.backend.model.Recipe;
import org.example.backend.repository.SearchRecipeRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest
@AutoConfigureMockMvc
class SearchRecipeControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private SearchRecipeRepository repo;

    @Test
    void getFilteredRecipesTest_shouldReturnListOfRecipes_whenCalled() throws Exception {
        //given

        Recipe recipe = new Recipe("123", "potato", "http://122", List.of("potato","Tomaten","Zwiebel"), "kkd",
        "todddmaten",20, Category.DINNER);

        repo.save(recipe);

        //When
        mockMvc.perform(MockMvcRequestBuilders.get("/api/allrecipes").param("searchText", "potato"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().json(
                        """
                 [{    "id": "123",
                      "name": "potato",
                       "image": "http://122",
                       "ingredients": ["potato","Tomaten","Zwiebel"],
                        "instruction": "kkd",
                      "description": "todddmaten",
                      "duration": 20,
                      "category": "DINNER"
                 }]
              """
                ));
    }
}