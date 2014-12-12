package com.accounts.udit.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.accounts.udit.database.ManageCategory;
import com.accounts.udit.database.ManageTransactionType;
import com.accounts.udit.database.ManageTransactions;
import com.accounts.udit.pojo.Category;
import com.accounts.udit.pojo.TransactionType;
import com.accounts.udit.pojo.Transactions;

/**
 * Servlet implementation class ViewTransactions
 */
@WebServlet("/ViewTransactions")
public class ViewTransactions extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ViewTransactions() {
        super();
        
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out=response.getWriter();
		
		String result="";
		int userid=Integer.parseInt(request.getParameter("userid"));
		
		List<Transactions> transactions=null;
		List<Category> categories=null;
		List<TransactionType> transactionTypes=null;
		
		ManageTransactions manageTransactions=new ManageTransactions();
		transactions=manageTransactions.getAllTransactionsOfAUser(userid);
		
		ManageCategory manageCategory=new ManageCategory();
		categories=manageCategory.getAllCategories();
		
		ManageTransactionType manageTransactionType=new ManageTransactionType();
		transactionTypes=manageTransactionType.getAllTransactionTypes();
		for(Transactions transaction:transactions){
		result+="<div class=\"item  col-xs-4 col-lg-4 list-group-item\">\r\n" + 
				"            <div class=\"col-xs-2\">\r\n" + 
				"            	<span id=\"date_of_transaction\">"+transaction.getDate_of_transaction()+"</span>\r\n" + 
				"            </div>\r\n" + 
				"            <div class=\"col-xs-1\">\r\n" + 
				"            	<span id=\"payment_to\">"+transaction.getTransaction_to()+"</span>\r\n" + 
				"            </div>\r\n" + 
				"            <div class=\"col-xs-2\">\r\n" + 
				"            	<span id=\"category\">"+getCategoryName(transaction.getCategoryid(),categories)+"</span>\r\n" + 
				"            </div>\r\n" + 
				"            <div class=\"col-xs-2\">\r\n" + 
				"            	<span id=\"transactiontype\">"+getTransactionTypeName(transaction.getTransactionid(), transactionTypes)+"</span>\r\n" + 
				"            </div>\r\n" + 
				"            <div class=\"col-xs-1\">\r\n" + 
				"            	<span id=\"amount\">"+transaction.getAmount()+"</span>\r\n" + 
				"            </div>\r\n" + 
				"            <div class=\"col-xs-3\">\r\n" + 
				"            	<span id=\"remark\">"+transaction.getRemark()+"</span>\r\n" + 
				"            </div>\r\n" + 
				"        </div>";
		}
		
		out.print(result);
				
	}
	
	public String getCategoryName(int id,List<Category> categories){
		String categoryname="";
		for(Category category:categories){
			if(category.getCategoryid()==id){
				categoryname=category.getCategoryname();
				break;
			}
		}
		return categoryname;
	}
	
	public String getTransactionTypeName(int id,List<TransactionType> transactionTypes){
		String transactionTypeName="";
		for(TransactionType transactionType:transactionTypes){
			if(transactionType.getTransactiontypeid()==id){
				transactionTypeName=transactionType.getTransactiontypeaname();
				break;
			}
		}
		
		return transactionTypeName;
	}

}
