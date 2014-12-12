package com.accounts.udit.servlets;

import java.io.IOException;
import java.io.PrintWriter;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.accounts.udit.database.ManageTransactions;

/**
 * Servlet implementation class NewEntry
 */
@WebServlet("/NewEntry")
public class NewEntry extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public NewEntry() {
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
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		ManageTransactions manageTransactions=new ManageTransactions();
		int userid=Integer.parseInt(request.getParameter("userid"));
		DateFormat format=new SimpleDateFormat("yyyy-MM-dd");
		Date transactionDate = new Date();
		try {
			transactionDate = format.parse(request.getParameter("txt_dateofpayment"));
		} catch (ParseException e) {
			e.printStackTrace();
		}
		String paymentTo=request.getParameter("txt_paymentto");
		int categoryId=Integer.parseInt(request.getParameter("category"));
		int transactiontypeid=Integer.parseInt(request.getParameter("transactiontype"));
		double amount=Double.parseDouble(request.getParameter("txt_amount"));
		String remark=request.getParameter("txt_remark");
		String billavailabestr=request.getParameter("bill_available");
		boolean billavailable=false;
		
		if(billavailabestr.equals("Yes")){
			billavailable=true;
		}else{
			billavailable=false;
		}
				
		int transactionid=manageTransactions.addTransaction(userid, transactionDate,paymentTo, categoryId, transactiontypeid, amount, billavailable, remark);
		System.out.println("Transactionid: "+transactionid);
		
		response.sendRedirect("index.html?status=success");
		out.close();
	}

}
