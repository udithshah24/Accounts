package com.accounts.udit.pojo;

import java.util.Date;



public class Transactions {

	private int transactionid;
	private int userid;
	private Date date_of_transaction;
	private String transaction_to;
	private int categoryid;
	private int transactiontypeid;
	private double amount;
	private boolean billavailable;
	private String remark;
	
	public Transactions(){}
	
	public Transactions(int userid,
			Date date_of_transaction, String transaction_to, int categoryid,
			int transactiontypeid, double amount, boolean billavailable,
			String remark) {
		super();
		this.userid = userid;
		this.date_of_transaction = date_of_transaction;
		this.transaction_to = transaction_to;
		this.categoryid = categoryid;
		this.transactiontypeid = transactiontypeid;
		this.amount = amount;
		this.billavailable = billavailable;
		this.remark = remark;
	}
	public boolean isBillavailable() {
		return billavailable;
	}

	public void setBillavailable(boolean billavailable) {
		this.billavailable = billavailable;
	}

	public int getTransactionid() {
		return transactionid;
	}
	public void setTransactionid(int transactionid) {
		this.transactionid = transactionid;
	}
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public Date getDate_of_transaction() {
		return date_of_transaction;
	}
	public void setDate_of_transaction(Date date_of_transaction) {
		this.date_of_transaction = date_of_transaction;
	}
	public String getTransaction_to() {
		return transaction_to;
	}
	public void setTransaction_to(String transaction_to) {
		this.transaction_to = transaction_to;
	}
	public int getCategoryid() {
		return categoryid;
	}
	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}
	public int getTransactiontypeid() {
		return transactiontypeid;
	}
	public void setTransactiontypeid(int transactiontypeid) {
		this.transactiontypeid = transactiontypeid;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public String getRemark() {
		return remark;
	}
	public void setRemark(String remark) {
		this.remark = remark;
	}
	
	
	
}
