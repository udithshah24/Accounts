//http://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
;(function($) {
"use strict";
//Method to check if given field is empty. If empty return true else false and display alert message

$.fn.ForceNumericOnly =
	function()
	{
	    return this.each(function()
	    {
	    	
	        $(this).keydown(function(e)
	        {
	        	if(e.ctrlKey&&(e.keyCode==67||e.keyCode==86)){
	        		return true;
	        	}
	        	if(e.shiftKey && e.keyCode==9){
	        		var result=true;
	        	}
	        	if(e.shiftKey && !result ){
		        	return false;
		        }
	            var key = e.charCode || e.keyCode || 0;
	            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
	            return (
	                key == 8 || 
	                key == 9 ||
	                key == 46 ||
	                (key >= 37 && key <= 40) ||
	                (key >= 48 && key <= 57) ||
	                (key >= 96 && key <= 105));
	        });
	    });
	};
$.fn.ForceAlphabetsOnly =
		function()
		{
		    return this.each(function()
		    {
		    	
		        $(this).keydown(function(e)
		        {
		        	if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
			    		var result=true;
		        	if(e.shiftKey && !result ){
			        	return false;
			        }
		            var key = e.charCode || e.keyCode || 0;
		            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		            return (
		                key == 8 || 
		                key == 9 ||
		                key == 46 || 
		               (key >= 37 && key <= 40) ||
		               (key >= 65 && key <= 90));
		        });
		    });
		};
$.fn.ForceAlphabetsWithSpace =
			function()
			{
			    return this.each(function()
			    {
			    	
			        $(this).keydown(function(e)
			        {
			        if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
				    		var result=true;
			        	if(e.shiftKey && !result){
				        	return false;
				        }
			            var key = e.charCode || e.keyCode || 0;
			            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
			            return (
			                key == 8 || 
			                key == 9 ||
			                key == 46 ||
			                key == 32 ||
			                (key >= 37 && key <= 40) ||
			                (key >= 65 && key <= 90));
			        });
			    });
			};
$.fn.ForceAlphaNumericWithHyphen =
			function()
			{
			    return this.each(function()
			    {
			        $(this).keydown(function(e)
			        {	
			        	if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
				    		var result=true;
			        	if(e.shiftKey && !result ){
			        	return false;
			        }
			            var key = e.charCode || e.keyCode || 0;
			            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
			            return (
			            	
			                key == 8 || 
			                key == 9 ||
			                key == 46 ||
			                (key == 173|| key == 189) || 
			                key == 109 || //allows special character '-'
			               	(key >= 65 && key <= 90) ||
			                (key >= 37 && key <= 40) ||
			                (key >= 48 && key <= 57) ||
			                (key >= 96 && key <= 105));
			        });
			    });
			};
$.fn.ForceAlphaNumericOnly =
				function()
				{
				    return this.each(function()
				    {
				        $(this).keydown(function(e)
				        {	
				        if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
					    		var result=true;
				        	if(e.shiftKey && !result ){
				        	return false;
				        }
				            var key = e.charCode || e.keyCode || 0;
				            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
				            return (
				            	
				                key == 8 || 
				                key == 9 ||
				                key == 46 ||
				               	(key >= 65 && key <= 90) ||
				                (key >= 37 && key <= 40) ||
				                (key >= 48 && key <= 57) ||
				                (key >= 96 && key <= 105));
				        });
				    });
				};
$.fn.ForceAlphaNumericWithSpace =
					function()
					{
					    return this.each(function()
					    {
					        $(this).keydown(function(e)
					        {	
					        	if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
						    		var result=true;
					        	if(e.shiftKey && !result){
					        	return false;
					        }
					            var key = e.charCode || e.keyCode || 0;
					            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
					            return (
					            	
					                key == 8 || 
					                key == 9 ||
					                key == 46 ||
					                key == 32 ||
					               	(key >= 65 && key <= 90) ||
					                (key >= 37 && key <= 40) ||
					                (key >= 48 && key <= 57) ||
					                (key >= 96 && key <= 105));
					        });
					    });
					};
$.fn.ForceAlphaNumericWithSlash =
					function()
					{
					    return this.each(function()
					    {
					        $(this).keydown(function(e)
					        {	
					        	if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
					    		var result=true;
					        	if(e.shiftKey && !result){
					        	return false;
					        }
					            var key = e.charCode || e.keyCode || 0;
					            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
					            return (
					            	
					                key == 8 || 
					                key == 9 ||
					                key == 46 ||
					                key == 191||
					                key == 111 || //allows special character ' /'
					               	(key >= 65 && key <= 90) ||
					                (key >= 37 && key <= 40) ||
					                (key >= 48 && key <= 57) ||
					                (key >= 96 && key <= 105));
					        });
					    });
					};

$.fn.ForceAlphaNumericWithHyphenAndSlash =
					function()
					{
					    return this.each(function()
					    {
					        $(this).keydown(function(e)
					        {	
					        	if(e.keyCode >=65 && e.keyCode <=90 || e.keyCode==9)
						    		var result=true;
					        	if(e.shiftKey && !result){
					        	return false;
					        }
					            var key = e.charCode || e.keyCode || 0;
					            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
					            return (
					            	
					                key == 8 || 
					                key == 9 ||
					                key == 46 ||
					                key == 191|| //allows special character ' /' and  '- ' 
					                key == 173||key == 189|| //173 key code is for 
					                key == 111 ||
					                key == 109 ||
					               (key >= 65 && key <= 90) ||
					                (key >= 37 && key <= 40) ||
					                (key >= 48 && key <= 57) ||
					                (key >= 96 && key <= 105));
					        });
					    });
					};
/**
 * help for mobilecountrycodevalidation
 * It allows only one '+' character at the beginning
 */ 
$.fn.CountryCodeCheck=
    function()
    {
        return this.each(function()
        {
            $(this).keydown(function(e)
            {    
            	if(e.ctrlKey&&(e.keyCode==67||e.keyCode==86)){
	        		return true;
	        	}
            	if( e.keyCode==9){
	        		var result=true;
	        	}
            	if(e.shiftKey && !result )
                {
                	return false;
            	}  
                var key = e.charCode || e.keyCode || 0; 
                // allow backspace, tab, delete, arrows , numbers and +  
                return ( 
		                    key == 8 ||
		                    key == 9 ||
		                    key == 46 || 
		                    key == 107 || 
		                    (key >= 37 && key <= 40) ||
		                    (key >= 48 && key <= 57) ||
		                    (key >= 96 && key <= 105)
                    );
            });
        });
    };
 $.fn.PerformHostNameCheck =
	 function()
		{
		    return this.each(function()
		    {
		        $(this).keydown(function(e)
		        {	
		        	if((e.keyCode >=65 && e.keyCode <=90) || (e.keyCode == 173 || e.keyCode == 189||e.keyCode == 9))
			    		var result=true;
		        	if(e.shiftKey && !result ){
		        	return false;
		        }
		            var key = e.charCode || e.keyCode || 0;
		            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		            return (
		            	
		                key == 8 || 
		                key == 9 ||
		                key == 46 ||
		                key == 190 || // DOT (.)
		                key == 109 || 
		                (key == 173 || key == 189) ||
		               	(key >= 65 && key <= 90) ||
		                (key >= 37 && key <= 40) ||
		                (key >= 48 && key <= 57) ||
		                (key >= 96 && key <= 105)
		                );
		        });
		    });
		}; 
$.fn.LoginIdCheck =
	 function()
		{
		    return this.each(function()
		    {
		        $(this).keydown(function(e)
		        {	
		        if(e.shiftKey && (e.keyCode == 173 || e.keyCode == 189||e.keyCode == 9))
		        		return true;
		        	if((e.keyCode >=65 && e.keyCode <=90))
			    		var result=true;
		        	if(e.shiftKey && !result ){
		        	return false;
		        }
		            var key = e.charCode || e.keyCode || 0;
		            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
		            return (
		            	
		                key == 8 || 
		                key == 9 ||
		                key == 46 || 
		                key == 190||  
		               	(key >= 65 && key <= 90) ||
		                (key >= 37 && key <= 40) ||
		                (key >= 48 && key <= 57) ||
		                (key >= 96 && key <= 105)
		                );
		        });
		    });
		}; 
$.fn.ForceAlphabetsWithUnderscore =
	function()
	{
	    return this.each(function()
	    {
	    	
	        $(this).keydown(function(e)
	        {
	       if(e.shiftKey && (e.keyCode == 173 || e.keyCode == 189||e.keyCode == 9))
	        		return true;
	        	if((e.keyCode >=65 && e.keyCode <=90))
		    		var result=true;
	        	if(e.shiftKey && !result ){
		        	return false;
		        }
	            var key = e.charCode || e.keyCode || 0;
	            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
	            return (
	                key == 8 || 
	                key == 9 ||
	                key == 46 ||  
	               (key >= 37 && key <= 40) ||
	               (key >= 65 && key <= 90));
	        });
	    });
	};
})(jQuery); 
