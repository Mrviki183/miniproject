package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PutMapping;
import com.example.demo.Entity.Craft;
import com.example.demo.Service.CraftService;


@CrossOrigin(origins="*")
@RestController
public class Craftcontroller {
		
 @Autowired
 private CraftService ss;
 
 @PostMapping("/savecraft")
 public String savingstudent(@RequestBody Craft s) {
	  ss.savedata(s);
	  return "saved";
 }
 
 @GetMapping("/findallcrafts")
public List<Craft> listing() {
	 return ss.findall();
 }
 
 @DeleteMapping("/deletecraftsById/{id}")
 public void deleteDepartmentById(@PathVariable("id") int id) {
	  ss.deleteDepartmentById(id);
 }
 @PutMapping("/updatecrafts")
 public Boolean updatestudent(@RequestBody Craft s) {
	 return ss.updatedata(s)!=null;   
 }
}