package org.example.backend.repository;

import org.example.backend.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SearchRecipeRepository extends MongoRepository<Recipe, String> {
}
