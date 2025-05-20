package org.example.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;


@Document("recipes")
public record Recipe(
        String id,
        String name,
        String image,
        List<String> ingredients,
        String instruction,
        String description,
        int duration,
        Category category
  ) {}
