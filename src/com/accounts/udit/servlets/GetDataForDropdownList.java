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
import com.accounts.udit.pojo.Category;
import com.accounts.udit.pojo.TransactionType;

/**
 * Servlet implementation class GetDataForDropdownList
 */
@WebServlet("/GetDataForDropdownList")
public class GetDataForDropdownList extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public GetDataForDropdownList() {
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
		String action=request.getParameter("Data");
		String responseString="";
		PrintWriter out=response.getWriter();
		
		if(action.equalsIgnoreCase("Category")){
			ManageCategory manageCategory=new ManageCategory();
			List<Category> categories=manageCategory.getAllCategories();
			
			for(Category category:categories){
				responseString+="<option value="+category.getCategoryid()+">"+category.getCategoryname()+"</option>";
			}
//			responseString="<option value="+1+">Food House</option>";
//			responseString+="<option value="+2+">Bills</option>";
//			responseString+="<option value="+3+">Household</option>";
			
			
		}else if(action.equalsIgnoreCase("Transaction Type")){
			ManageTransactionType manageTransactionType=new ManageTransactionType();
			List<TransactionType> transactionTypes=manageTransactionType.getAllTransactionTypes();
			
			for(TransactionType transactionType:transactionTypes){
				responseString+="<option value="+transactionType.getTransactiontypeid()+">"+transactionType.getTransactiontypeaname()+"</option>";
			}
			
//			responseString="<option value="+1+">Cash</option>";
//			responseString+="<option value="+2+">Cheque</option>";
//			responseString+="<option value="+3+">Credit Card</option>";
//			responseString+="<option value="+4+">Debit Card</option>";
			
		}
		out.write(responseString);
		out.close();
	
		
	}

}
