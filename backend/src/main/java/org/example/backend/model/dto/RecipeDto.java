package org.example.backend.model.dto;

import java.util.List;

public record RecipeDto (
        String name,
        String imageUrl,
        List<String> ingredients,
        String description ) {
}
