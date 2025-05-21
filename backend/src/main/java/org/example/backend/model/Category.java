package org.example.backend.model;

import lombok.Getter;

@Getter
public enum Category {
    BREAKFAST("Frühstück"),
    LUNCH("Mittagessen"),
    DINNER("Abendessen"),
    SNACK("Imbiss");

    private final String value;

    Category(String value) {
        this.value = value;
    }

}
