package org.example.backend.repository;

import org.example.backend.model.Category;
import org.example.backend.model.Recipe;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RecipeRepository extends MongoRepository<Recipe, String>{
    List<Recipe> findByCategory(Category category);
}
