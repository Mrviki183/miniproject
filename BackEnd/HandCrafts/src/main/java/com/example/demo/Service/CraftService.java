package com.example.demo.Service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.demo.Entity.Craft;
import com.example.demo.Repository.CraftRepo;
@Service
public class CraftService {
	@Autowired
	private CraftRepo stu;
	public Craft savedata(Craft s) {
		return stu.save(s);
	}
	public List<Craft> findall(){
		return stu.findAll();
	}
	public void deleteDepartmentById(int id) {
		stu.deleteById(id); 
	}
	public Craft updatedata(Craft s) {
		return stu.saveAndFlush(s);
    }
	//pagination
	public List<Craft>showValues(){
		Pageable p=PageRequest.of(0, 1);
		Page<Craft>c=stu.findAll(p);
		return c.toList();
	}
}