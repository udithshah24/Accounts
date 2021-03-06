package com.accounts.udit.database;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.accounts.udit.pojo.Category;
import com.accounts.udit.pojo.Transactions;

public class ManageCategory {
	private static SessionFactory factory;
		
	public ManageCategory(){
		
	}
	
	public List<Category> getAllCategories(){
		
		try{
			factory=new Configuration().configure().buildSessionFactory();
		}catch(Throwable ex){
			System.err.println("Failed to create sessionFactory object."+ex);
			throw new ExceptionInInitializerError(ex);
		}
		List<Category> categories=null;
		
		Session session=factory.openSession();
		try{
			categories= session.createQuery("from Category").list();
			
		}catch(HibernateException exception){
			exception.printStackTrace();
		}finally{
			
			session.close();
			factory.close();
		}
		
		return categories;
	}
	
}
