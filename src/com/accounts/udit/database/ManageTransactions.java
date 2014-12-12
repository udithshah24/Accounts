package com.accounts.udit.database;



import java.util.Date;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import com.accounts.udit.pojo.Transactions;

public class ManageTransactions {
	private static SessionFactory factory;
	
	@SuppressWarnings("deprecation")
	public ManageTransactions(){
		try{
			factory=new Configuration().configure().buildSessionFactory();
		}catch(Throwable ex){
			System.err.println("Failed to create sessionFactory object."+ex);
			throw new ExceptionInInitializerError(ex);
		}
	}
	
	public Integer addTransaction(int userid,Date date_of_transaction,String transaction_to, int categoryid,int transactiontypeid,double amount,boolean billavailable,String remark){
		Session session=factory.openSession();
		Transaction tx=null;
		Integer transactionId = null;
		try{
			tx=session.beginTransaction();
			Transactions transactions=new Transactions(userid,date_of_transaction,transaction_to,categoryid,transactiontypeid,amount,billavailable,remark);
			transactionId= (Integer) session.save(transactions);
			System.out.println("Transaction Id is "+transactionId);
			tx.commit();
		}catch(HibernateException exception){
			if(tx!=null)tx.rollback();
			exception.printStackTrace();
		}finally{
			session.close();
		}
		return transactionId;
	}
	
	public List<Transactions> getAllTransactionsOfAUser(int userid){
		List<Transactions> transactions=null;
		Session session=factory.openSession();
		try{
			transactions=session.createQuery("From Transactions where userid= :userid").setParameter("userid", userid).list();			
						
		}catch(HibernateException exception){
			exception.printStackTrace();
		}finally{
			session.close();
		}
		
		return transactions;
	}
}
