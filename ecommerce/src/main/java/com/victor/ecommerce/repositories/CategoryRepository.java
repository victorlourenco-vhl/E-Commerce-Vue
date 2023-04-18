package com.victor.ecommerce.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.victor.ecommerce.models.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
