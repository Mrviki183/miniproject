package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.User;
import com.example.demo.Repository.UserRepo;
@Service
public class UserService {
	@Autowired
	private UserRepo stu;
	public User savedata(User s) {
		return stu.save(s);
	}
	public List<User> findall(){
		return stu.findAll();
	}
	public void deleteDepartmentById(int id) {
		stu.deleteById(id); 
	}
	public User updatedata(User s) {
		return stu.saveAndFlush(s);
    }
	//pagination
	public List<User>showValues(){
		Pageable p=PageRequest.of(0, 1);
		Page<User>c=stu.findAll(p);
		return c.toList();
	}
}