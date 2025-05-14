package org.example.backend.model;

import java.util.List;

public record Recipe(
        String id,
        String name,
        String imageUrl,
        List<String> ingredients,
        String description
  ) { }
