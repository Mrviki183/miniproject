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
import com.example.demo.Entity.User;
import com.example.demo.Service.UserService;


@CrossOrigin(origins="*")
@RestController
public class Usercontroller {
		
 @Autowired
 private UserService us;
 
 @PostMapping("/savedata")
 public String savingstudent(@RequestBody User s) {
	  us.savedata(s);
	  return "saved";
 }
 
 @GetMapping("/findall")
public List<User> listing() {
	 return us.findall();
 }
 
 @DeleteMapping("/delete/{id}")
 public void deleteDepartmentById(@PathVariable("id") int id) {
	  us.deleteDepartmentById(id);
 }
 @PutMapping("/update")
 public Boolean updatestudent(@RequestBody User s) {
	 return us.updatedata(s)!=null;   
 }
}