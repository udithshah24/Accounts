package com.accounts.udit.database;

import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.accounts.udit.pojo.TransactionType;

public class ManageTransactionType {

	private static SessionFactory factory;
	
	public ManageTransactionType(){
		
	}
	
	public List<TransactionType> getAllTransactionTypes(){
		List<TransactionType> transactionTypes=null;
		
		try{
			factory=new Configuration().configure().buildSessionFactory();
		}catch(Throwable ex){
			System.err.println("Failed to create sessionFactory object."+ex);
			throw new ExceptionInInitializerError(ex);
		}
		
		Session session=factory.openSession();
				
		try{
			
			transactionTypes= session.createQuery("from TransactionType").list();
			
		}catch(HibernateException exception){
			exception.printStackTrace();
		}finally{
			
			session.close();
			factory.close();
		}
		
		return transactionTypes;
	}
	
	
	
	
}
