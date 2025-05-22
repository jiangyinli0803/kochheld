package org.example.backend.model.dto;

import org.example.backend.model.Category;

import java.util.List;

public record RecipeDto (
        String name,
        String image,
        List<String> ingredients,
        String instruction,
        String description,
        int duration,
        Category category)

{ }
