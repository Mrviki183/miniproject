package com.example.demo.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Crafts")
public class Craft {
	@Id
	@Column(name = "Sno")
	private int Sno;
	@Column(name = "name")
	private String name;
	@Column(name = "Price")
	private int Price;

	
	
	public Craft(int Sno, String name, int Price) {
		super();
		this.Sno = Sno;
		this.name = name;
		this.Price = Price;
	}



	public int getSno() {
		return Sno;
	}



	public void setSno(int Sno) {
		this.Sno = Sno;
	}



	public String getName() {
		return name;
	}



	public void setName(String name) {
		this.name = name;
	}



	public int getPrice() {
		return Price;
	}



	public void setPrice(int Price) {
		this.Price = Price;
	}



	public Craft() {}
}