package com.accounts.udit.pojo;

public class Category {
private int categoryid;
private String categoryname;
private String categorytype;

public Category(){}

public Category(int categoryid, String categoryname, String categorytype) {
	super();
	this.categoryid = categoryid;
	this.categoryname = categoryname;
	this.categorytype = categorytype;
}

public int getCategoryid() {
	return categoryid;
}
public void setCategoryid(int categoryid) {
	this.categoryid = categoryid;
}
public String getCategoryname() {
	return categoryname;
}
public void setCategoryname(String categoryname) {
	this.categoryname = categoryname;
}
public String getCategorytype() {
	return categorytype;
}
public void setCategorytype(String categorytype) {
	this.categorytype = categorytype;
}


}
