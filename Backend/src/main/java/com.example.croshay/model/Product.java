package com.example.croshay.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "products")
public class Product {
    @Id
    private String id;
    private String name;
    private double price;
    private String description;
    // Add more fields as needed (e.g., image URL, category)

    // Constructors, getters, and setters
}
