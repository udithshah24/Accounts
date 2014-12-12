$(document).ready(function() {
	if(!Modernizr.input.placeholder){
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	}

	$('#updateDoctor').hide();
	$("#divClinicInfo input, #divClinicInfo textarea").bind('focus', function() {
		$("#divClinicInfo, #divDoctorInfo").removeClass("activeform-section");
		$("#divClinicInfo").addClass("activeform-section");
	}).blur(function() {
		$("#divClinicInfo, #divDoctorInfo").removeClass("activeform-section");
	});
	$("#divDoctorInfo input, #divDoctorInfo textarea").bind('focus', function() {
		$("#divClinicInfo, #divDoctorInfo").removeClass("activeform-section");
		$("#divDoctorInfo").addClass("activeform-section");
	}).blur(function() {
		$("#divClinicInfo, #divDoctorInfo").removeClass("activeform-section");
	});

	$('body').on('click', 'li span.Ddel a', function() {
		var titleVal = $(this).attr('title');
		if(titleVal=='Restore') {
			titleVal='Delete';
			$(this).closest('li').removeClass('resote');
		} else {
			titleVal='Restore';
			$('div.del_res ul li.resote').remove();		
			$(this).closest('li').addClass('resote');
			if($('#pDoctor').val()==$('div.del_res ul li.resote span.Dname a').attr('id')) {
				$('#check-clinic').prop("disabled", false);
				$('#pDoctor').val(0);
			}
			$('div.del_res ul li.resote span.Dname a').addClass('link_disable').attr("disableclick","true");
		}
		//alert($(this).html());
		$(this).attr('title',titleVal);
		$(this).children('i').toggleClass('nicon-restore nicon-delete');
		$(this).children('span').text(titleVal);
	});
	
	$('body').on('click', 'li span.Dname a', function() {
		if($(this).attr('disableclick')==true)
			return;
		var drI = $(this).attr('id');
		tempIndex=drI;
		$('#addDoctor').hide();
		$('#updateDoctor').show();
		$('#inputDFname').val($('#inputDFname\\['+drI+'\\]').val());
		$('#inputDMname').val($('#inputDMname\\['+drI+'\\]').val());
		$('#inputDLname').val($('#inputDLname\\['+drI+'\\]').val());
		$('#inputDGP').val($('#inputDGP\\['+drI+'\\]').val());
		$('#inputDMCI').val($('#inputDMCI\\['+drI+'\\]').val());
		$('#inputDEmail').val($('#inputDEmail\\['+drI+'\\]').val());
		$('#inputDPhone').val($('#inputDPhone\\['+drI+'\\]').val());
		//alert($('#pDoctor').val());
		if($('#pDoctor').val()==drI) {
			$('#check-clinic').prop("disabled", false);
			$('#check-clinic').prop('checked',true);
		} else if($('#pDoctor').val()==0) {
			$('#check-clinic').prop("disabled", false);
			$('#check-clinic').prop('checked',false);
		} else {
			$('#check-clinic').prop('checked',false);
			$('#check-clinic').prop("disabled", true);
		}
	});

	$("#addDoctor,#updateDoctor").click(function(e){
                e.preventDefault();
		var b_submit = true;
		$('#error_inputDFname, #error_inputDGP_inputDMCI, #error_inputDEmail, #error_inputDPhone').hide();
		$('#addDoctor').show();
		$('#updateDoctor').hide();
		var inputDFname = $('#inputDFname').val();
		var inputDMname = $('#inputDMname').val();
		var inputDLname = $('#inputDLname').val();
		var inputDGP = $('#inputDGP').val();
		var inputDMCI = $('#inputDMCI').val();
		var inputDEmail = $('#inputDEmail').val();
		var inputDPhone = $('#inputDPhone').val();
			
		if(inputDFname == '' || inputDLname == ''){
			$('#error_inputDFname').show();
			b_submit = false;
		}
		if(inputDGP == ''|| inputDMCI == ''){
			$('#error_inputDGP_inputDMCI').show();
			b_submit = false;
		}
		if(inputDEmail == ''){
			$('#error_inputDEmail').show();
			b_submit = false;
		}
		if(inputDPhone == ''){
			$('#error_inputDPhone').show();
			b_submit = false;
		}
		
		if(IsEmail(inputDEmail)==false){
			$('#error_inputDEmail').show();
			b_submit = false;
		}

		if(b_submit == false)
			return false;
			
		var drName = 'Dr. ' + inputDFname + ' ' + inputDLname;		
		if(tempIndex==0) {
			tempIndex=drIndex++;
		}
		
		if($('#check-clinic').prop('checked')==true) {
			$('#pDoctor').val(tempIndex);
		} else if ($('#check-clinic').prop('checked')==false && $('#pDoctor').val() == tempIndex) {
			$('#pDoctor').val(0);
		}
		
		if($('#pDoctor').val() > 0) {
			$('#check-clinic').prop("disabled", true);
		}
		
		var dAddedBlock='dBlock_'+tempIndex;
		
		//$("div.del_res ul").append('');
		var docInfo = '<li id="'+dAddedBlock+'"><span class="Dname pull-left"><a id="'+tempIndex+'" title="'+drName+'" href="javascript:void(0);"><strong>'+drName+'</strong></a>';
		docInfo += '<input type="hidden" name="inputDFname['+tempIndex+']" id="inputDFname['+tempIndex+']" value="'+inputDFname+'" />';
		docInfo += '<input type="hidden" name="inputDMname['+tempIndex+']" id="inputDMname['+tempIndex+']" value="'+inputDMname+'" />';
		docInfo += '<input type="hidden" name="inputDLname['+tempIndex+']" id="inputDLname['+tempIndex+']" value="'+inputDLname+'" />';
		docInfo += '<input type="hidden" name="inputDGP['+tempIndex+']" id="inputDGP['+tempIndex+']" value="'+inputDGP+'" />';
		docInfo += '<input type="hidden" name="inputDMCI['+tempIndex+']" id="inputDMCI['+tempIndex+']" value="'+inputDMCI+'" />';
		docInfo += '<input type="hidden" name="inputDEmail['+tempIndex+']" id="inputDEmail['+tempIndex+']" value="'+inputDEmail+'" />';
		docInfo += '<input type="hidden" name="inputDPhone['+tempIndex+']" id="inputDPhone['+tempIndex+']" value="'+inputDPhone+'" />';
		docInfo += '</span> <span class="Ddel pull-left"><a title="Delete" href="javascript:void(0);"> <i class="nicon-delete"></i> <span>Delete</span></a></span><div class="clearfix"></div></li>';
		
		if ($('#'+dAddedBlock).length) {
			$('#'+dAddedBlock).replaceWith(docInfo);
		} else {
			$("div.del_res ul").append(docInfo);
		}		
		$('#inputDFname, #inputDMname, #inputDLname, #inputDGP, #inputDMCI, #inputDEmail, #inputDPhone').val('');
		$('#check-clinic').prop('checked',false);
		tempIndex=0;
	});
	
	//This has been replaced by ForceNumericInput function.
//	$("#inputCCPhone, #inputDPhone").mask("9999999999",{placeholder:""});
	

	
	// Validate when the submit button is clicked
	$('#buttonSubmit').click(function(e) {
		e.preventDefault();
		var b_submit = true;
		$('.alert-error').hide();
		
		var inputInvitationCode = $("#inputInvitationCode").val();
		var inputClinic = $('#inputClinic').val();
		var inputCity = $('#inputCity').val();
		var inputAddress1 = $('#inputAddress1').val();
		var inputCCPhone = $('#inputCCPhone').val();
		var inputCLPhone = $('#inputCLPhone').val();
		var inputAdminFName = $('#inputAdminFName').val();
		var inputAdminLName = $('#inputAdminLName').val();
		var inputAdminEmail = $('#inputAdminEmail').val();
		var inputDFname = $('#inputDFname').val();
		var inputDGP = $('#inputDGP').val();
		var inputDMCI = $('#inputDMCI').val();
		var inputDEmail = $('#inputDEmail').val();
		var inputDPhone = $('#inputDPhone').val();
		
		if($.trim(inputInvitationCode) == ''){
			
			$("#error_inputInvitationcode").show();
			b_submit = false;
		}
		
		if(inputClinic == ''){
			$('#error_inputClinic').show();
			b_submit = false;
		}
		if(inputCity == ''){
			$('#error_inputCity').show();
			b_submit = false;
		}
		if(inputAddress1 == ''){
			$('#error_inputAddress1').show();
			b_submit = false;
		}
		if(inputCCPhone == ''){
			$('#error_inputCCPhone').show();
			b_submit = false;
		}
		else if(inputCCPhone.length != 10)
		{
			$('#error_inputCCPhone').show();
			b_submit = false;
		}
		else
		{
			numberValue = Number(inputCCPhone);
			if (Math.floor(numberValue) != numberValue)
			{
				$('#error_inputCCPhone').show();
				b_submit = false;
			}
		}
		
		if(inputAdminFName == ''){
			$('#error_inputAdminFName').show();
			b_submit = false;
		}
                if(inputAdminLName == ''){
			$('#error_inputAdminLName').show();
			b_submit = false;
		}
		if(inputAdminEmail == ''){
			$('#error_inputAdminEmail').show();
			b_submit = false;
		}		
		
		if($('ul#docBlock li').length==0) {
			if(inputDFname == ''){
				$('#error_inputDFname').show();
				b_submit = false;
			}
			if(inputDGP == '' || inputDMCI == ''){
				$('#error_inputDGP_inputDMCI').show();
				b_submit = false;
			}
			if(inputDEmail == ''){
				$('#error_inputDEmail').show();
				b_submit = false;
			}
			if(inputDPhone == ''){
				$('#error_inputDPhone').show();
				b_submit = false;
			}
			
			if(IsEmail(inputAdminEmail)==false){
				$('#error_inputAdminEmail').show();
				b_submit = false;
			}
			
			if(IsEmail(inputDEmail)==false){
				$('#error_inputDEmail').show();
				b_submit = false;
			}
			
			b_submit = false;
			alert('Please add doctor before submitting');
		}		

		if(b_submit == false)
			return false;
		
		$('#frmRegistration').submit();
	});
	
	$("#inputCCPhone").ForceNumericOnly();
});

function IsEmail(email) {
	var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	if(!regex.test(email)) {
		return false;
	}else{
		return true;
	}
}