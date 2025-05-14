package org.example.backend.exeption;

public class RecipeNotFoundException  extends RuntimeException{

    public RecipeNotFoundException(String message){
        super(message);
    }
}
