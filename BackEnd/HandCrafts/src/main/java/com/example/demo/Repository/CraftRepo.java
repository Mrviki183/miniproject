package com.example.demo.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.Entity.Craft;
public interface CraftRepo extends JpaRepository<Craft, Integer>
{
	
}