package com.victor.ecommerce.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.victor.ecommerce.models.Category;
import com.victor.ecommerce.repositories.CategoryRepository;

@Service
public class CategoryService {
	
	@Autowired
	CategoryRepository rep;
	
	public List<Category> list(){
		return rep.findAll();
	}
	
	public Category create(Category obj) {
		obj.setId(null);
		return rep.save(obj);
	}
	
	
	
}
