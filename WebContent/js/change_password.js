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
	
	$('.error-msg').hide();
	
	/* Chanage password */	
	$("#current_pwd_fake").focus(function () {
		$("#current_pwd_fake").hide();
		$("#current-pwd").show();
		$("#current-pwd").focus();
	});
	$("#current-pwd").blur(function () {
		if ($.trim($(this).val()) == '') {
			$("#current_pwd_fake").show();
			$("#current-pwd").hide();
		}
	});
	$("#pwd_fake").focus(function () {
		$("#pwd_fake").hide();
		$("#pwd").show();
		$("#pwd").focus();
	});
	$("#pwd").blur(function () {
		if ($.trim($(this).val()) == '') {
			$("#pwd_fake").show();
			$("#pwd").hide();
		}
	});
	$("#reenter_pwd_fake").focus(function () {
		$("#reenter_pwd_fake").hide();
		$("#reenter-pwd").show();
		$("#reenter-pwd").focus();
	});
	$("#reenter-pwd").blur(function () {
		if ($.trim($(this).val()) == '') {
			$("#reenter_pwd_fake").show();
			$("#reenter-pwd").hide();
		}
	});
	$('#button_changepass').click(function(e) {
		e.preventDefault();
		$('.error-msg').hide();
		
		var b_submit = true;		
		var cp = $('#current-pwd').val();
		var np = $('#pwd').val();
		var rnp = $('#reenter-pwd').val();		
		if(cp == ''){
			$('#error_current-pwd').show();
			b_submit = false;
		}
		if(np == ''){
			$('#error_pwd').show();
			b_submit = false;
		}
		if(rnp == ''){
			$('#error_reenter-pwd').show();
			b_submit = false;
		}
		if(np != '' && rnp != '' && np != rnp) {
			$('#error_pwd_mismatch').show();
			b_submit = false;
		}
		
		if(b_submit)
		{
			$(".info-msg").show();
			$('#frm_changepass').submit();
		}
		else			
			return b_submit;
	});
});