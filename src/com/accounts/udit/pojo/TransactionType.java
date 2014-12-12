package com.accounts.udit.pojo;

public class TransactionType {

	private int transactiontypeid;
	private String transactiontypeaname;
	
	public TransactionType(){}
	
	public TransactionType(int transactiontypeid, String transactiontypeaname) {
		super();
		this.transactiontypeid = transactiontypeid;
		this.transactiontypeaname = transactiontypeaname;
	}
	
	public int getTransactiontypeid() {
		return transactiontypeid;
	}
	public void setTransactiontypeid(int transactiontypeid) {
		this.transactiontypeid = transactiontypeid;
	}
	public String getTransactiontypeaname() {
		return transactiontypeaname;
	}
	public void setTransactiontypeaname(String transactiontypeaname) {
		this.transactiontypeaname = transactiontypeaname;
	}
	
	
}
