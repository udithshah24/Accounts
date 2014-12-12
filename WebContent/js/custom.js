//Sign in Page Validation
var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
function valid() {
    var user = document.login.inputEmail.value;
    //var email=document.login.inputEmail.value;
    var user = user.trim();
    var pass = document.login.inputPassword.value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (user == '') {
        document.login.inputEmail.focus();
        document.getElementById('error_User').style.display = "block";
        return false;
    } else {
        document.getElementById('error_User').style.display = "none";
        //return true;
    }
    if (pass == '') {
        document.login.inputPassword.focus();
        document.getElementById('error_PWD').style.display = "block";
        return false;
    } else {
        document.getElementById('error_PWD').style.display = "none";
        //return false;
    }
}

//

function printpage()
{
    window.print()
}

// Note box toggle Start
function cancelBubleEv(e)
{
    e = e || event;
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;

}

// Doctor note
$(document).ready(function() {
    // Hide box when body load
    $('#shw_dctNt, #shw_rmndNt, #shw_allergies, #shw_LastRx, #shw_drugInstruction').hide();

    $(".close_NtBox").click(function() {
        // Hide box on mouse over
        $('#shw_dctNt, #shw_rmndNt, #shw_allergies, #shw_LastRx, #shw_drugInstruction').fadeOut(500);
    });

    $("#slct_dctNt_toggle").click(function(e) {
        $('#shw_rmndNt, #shw_allergies, #shw_LastRx, #shw_drugInstruction').fadeOut(500);
        $("#shw_dctNt").fadeIn(500);
        $("#shw_dctNt").find("p").focus();
    });


    // Reminder note
    // Hide box when body load

    $("#slct_rmndNt_toggle").click(function(e) {

        $('#shw_dctNt, #shw_allergies, #shw_LastRx, #shw_drugInstruction').fadeOut(500);
        $("#shw_rmndNt").fadeIn(500);
        $("#shw_rmndNt").find("[name = Immunization]").focus();
    });

    // Last Rx note
    // Hide box when body load

    $("#slct_lstxNt_toggle").click(function(e) {

        $('#shw_dctNt, #shw_allergies, #shw_rmndNt, #shw_drugInstruction').fadeOut(500);
        $("#shw_LastRx").fadeIn(500);
        $("#shw_LastRx").find("p").focus();
    });

    //Allergies
    $("#slct_alrg_toggle").click(function(e) {
        $('#shw_dctNt, #shw_LastRx, #shw_rmndNt, #shw_drugInstruction').fadeOut(500);
        $("#shw_allergies").fadeIn(500);
        $("#shw_allergies").find("p").focus();
    });

    //Drug Instruction
    $(".instruction_toogle").click(function(e) {
        $("#shw_dctNt").fadeOut(500);
        $("#shw_dctNt").fadeOut(500);
        $("#shw_rmndNt").fadeOut(500);
        $("#shw_LastRx").fadeOut(500);
        $("#shw_allergies").fadeOut(500);
        $("#shw_drugInstruction").fadeIn(500);

        drugInstruction = $(this).find("input").prop('id');
        $drugInstructionVal = $("#" + drugInstruction);
        $("#shw_drugInstruction").find("p").html($drugInstructionVal.val());
        $("#shw_drugInstruction").find("p").focus();
        $("#dgugInstructiondialog").data("druginsid", drugInstruction);
    });
});

// Note box toggle End

// Custom Checkbox and radio Start
jQuery.fn.customInput = function() {
    $(this).each(function(i) {
        if ($(this).is('[type=checkbox],[type=radio]')) {
            var input = $(this);

            // get the associated label using the input's id
            var label = $('label[for=' + input.attr('id') + ']');

            //get type, for classname suffix 
            var inputType = (input.is('[type=checkbox]')) ? 'checkbox' : 'radio';

            // wrap the input + label in a div 
            $('<div class="custom-' + inputType + '"></div>').insertBefore(input).append(input, label);

            // find all inputs in this set using the shared name attribute
            var allInputs = $('input[name=' + input.attr('name') + ']');

            // necessary for browsers that don't support the :hover pseudo class on labels
            label.hover(
                    function() {
                        $(this).addClass('hover');
                        if (inputType == 'checkbox' && input.is(':checked')) {
                            $(this).addClass('checkedHover');
                        }
                    },
                    function() {
                        $(this).removeClass('hover checkedHover');
                    }
            );

            //bind custom event, trigger it, bind click,focus,blur events					
            input.bind('updateState', function() {
                if (input.is(':checked')) {
                    if (input.is(':radio')) {
                        allInputs.each(function() {
                            $('label[for=' + $(this).attr('id') + ']').removeClass('checked');
                        });
                    }
                    ;
                    label.addClass('checked');
                }
                else {
                    label.removeClass('checked checkedHover checkedFocus');
                }

            })
                    .trigger('updateState')
                    .click(function() {
                        $(this).trigger('updateState');
                    })
                    .focus(function() {
                        label.addClass('focus');
                        if (inputType == 'checkbox' && input.is(':checked')) {
                            $(this).addClass('checkedFocus');
                        }
                    })
                    .blur(function() {
                        label.removeClass('focus checkedFocus');
                    });
        }
    });
};

// Run the script on DOM ready:
$(function() {
    $('input').customInput();
});

// Custom Checkbox and radio End



//

function submitFrm()
{
    if (!fnValidateChangePassword())
    {
        return false;
    }

    return true;
}




$(function() {

    var availableTags = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
    var medicineForms = [ "Alulet","Bottle","Capsule","Cleanserlet","Cream","Drops","Drops / Ointment","Earplug","Elixir","Gel","Inf.","Inhaler","Inhlet","Inj.","Injlet","Iv","Kit","Liquid","Lotion","Needle","Ointment","Other","Rinse","Sachet","Shampoo","Soap","Sollet","Solution","Spray","Strip","Supplement","Suspension","Syringe","Syrup","Tablet","Tape","Toothpaste","Vaccine","Vial","Wash"];
    
    $('.nDtablets').autocomplete({source: medicineForms});
    $('.nMedicine').autocomplete({source: availableTags});
    var availablePatients = ["Abdul", "Anand", "Ananthi", "Anil", "Baskar", "Bhavana", "Chitra", "Christoper", "Charlie", "Fahim", "Fathima", "Fazil", "Gayathri", "Gagan", "Hitesh", "Haniska", "Jayasree", "Jayapal", "Karthik", "Kazeeb", "Kanitkar", "Sandeep", "Santhosh", "Savithri"];

    $("#inputFor").autocomplete({source: availablePatients});

//        scroller = $('.box-wrap').antiscroll().data('antiscroll');

    $("#addRow").click(function() {
        $('.box-wrap tr:last').clone().appendTo('.box-wrap table');
        $("#rows b").text($(".box-wrap tr").length);
        scroller.refresh();
    });

    $("#removeRow").click(function() {
        $('.box-wrap tr:last').remove();
        $("#rows b").text($(".box-wrap tr").length);
        scroller.refresh();
    });

    $("#addCol").click(function() {
        $('.box-wrap tr').each(function(index, tr) {
            $('td:last', tr).clone().appendTo(tr);
        });
        $("#cols b").text($(".box-wrap tr:last td").length);
        scroller.refresh();
    });

    $("#removeCol").click(function() {
        $('.box-wrap tr').find('td:last').remove();
        $("#cols b").text($(".box-wrap tr:last td").length);
        scroller.refresh();
    });

    $("#rows b").text($(".box-wrap tr").length);
    $("#cols b").text($(".box-wrap tr:last td").length);
});

/* ePrescription Validation Script */
function isEmailIdValid(email)
{
    var reg = /(^([A-Za-z0-9_\\.\])+\@([A-Za-z0-9_\\.])+\.([A-Za-z]{2,4})$)/;
    if (reg.test(email) == false)
    {
        return false;
    }
    return true;
}

function isMobileNoValid(value)
{

    var reg = /(^(\+)?\d{10}$)/;
    return reg.test(value);
}

function fnSendPrescription()
{
    $(".alert-error").hide();
    if (!ePrescriptionvalidateRequired())
    {
        return false;
    }

    return true;
}
var medicineDummy = '';
var lastMedicineContent = '';
$(function() {
    medicineDummy = $("#medicineContent").html();
    lastMedicineContent = $(".noteDetails:last").html();

});

function fnResetScreen()
{
    $("#medicineContent").html(medicineDummy);

    $("[rel=tooltip]").tooltip({placement: 'top'});
    $noteDetailHtml.find("div.alert-error").hide();
    $noteDetailHtml.addClass("customMedicine");

    $('.clear_field').on('click', function() {

        $parentDiv = $(this).parent().parent().parent().parent().parent();
        $parentDiv.remove();

    });

    //Drug Instruction
    $(".instruction_toogle").click(function(e) {
        $("#shw_dctNt").fadeOut(500);
        $("#shw_dctNt").fadeOut(500);
        $("#shw_rmndNt").fadeOut(500);
        $("#shw_LastRx").fadeOut(500);
        $("#shw_allergies").fadeOut(500);
        $("#shw_drugInstruction").fadeIn(500);

        drugInstruction = $(this).find("input").prop('id');
        $drugInstructionVal = $("#" + drugInstruction);
        $("#shw_drugInstruction").find("p").html($drugInstructionVal.val());
        $("#shw_drugInstruction").find("p").focus();
        $("#dgugInstructiondialog").data("druginsid", drugInstruction);
    });
}

$(function() {
    $(document).on('keyup','input.nDosage:text',function(event){
        dosageValue = $(this).val();
        if (dosageValue.length < 5)
        {
            lastDosageVal = dosageValue[(dosageValue.length - 1)];

            if (/^\d+$/.test(lastDosageVal))
            {
                $(this).val(dosageValue + '-');
            }
        }
        else
        {
            if (dosageValue.length >= 5)
                var finalDosage = dosageValue.substr(0, 5);

            $(this).val(finalDosage);
        }
    });
});

function ePrescriptionvalidateRequired()
{
    isValid = true;
    if ($.trim($("#inputFor").val()) == '') {
        $("#inputFor_Error").show();
        isValid = false;
    }
    if ($.trim($("#inputMobile").val()) == '') {
        $("#inputMobile_Error").show();
        isValid = false;
    }
    else if (!isMobileNoValid($("#inputMobile").val()))
    {
        $("#inputMobile_Error").show();
        isValid = false;
    }

    if ($.trim($("#inputEmail").val()) == '') {
        $("#inputEmail_Error").show();
        isValid = false;
    }
    else if (!isEmailIdValid($("#inputEmail").val()))
    {
        $("#inputEmail_Error").show();
        isValid = false;
    }
    if ($(".noteDetails").length <= 0)
    {
        alert("add at least one medicide");
        return false;
    }
    var fillCount = 0;
    $(".noteDetails").each(function() {

        isValid_Row_Data = false;
        $nDtabletsData = $(this).find(".nDtablets");
        $nMedicineData = $(this).find(".nMedicine");
        $nDosage = $(this).find(".nDosage");
        $nDays = $(this).find(".nDays");
        $nPotency = $(this).find(".nPotency");

        var isPrescription = true;
        var isValueInsterd = false;
        var alertDtabletsBlock;
        var alertnMedicineBlock;
        var alertnDosageBlock;
        var alertnDaysBlock;

        if ($.trim($nDtabletsData.val()) == '')
        {
            alertDtabletsBlock = $nDtabletsData.parent().children("div.alert-error");
            isValid = false;
            isPrescription = false;
        }
        else
        {
            isValueInsterd = true;
        }

        if ($.trim($nMedicineData.val()) == '')
        {
            alertnMedicineBlock = $nMedicineData.parent().children("div.alert-error");
            isValid = false;
            isPrescription = false;
        }
        else
        {
            isValueInsterd = true;
        }


        if ($.trim($nDosage.val()) == '')
        {
            alertnDosageBlock = $nDosage.parent().children("div.alert-error");
            isValid = false;
            isPrescription = false;
        }
        else
        {
            isValueInsterd = true;
        }

        if ($.trim($nDays.val()) == '')
        {
            alertnDaysBlock = $nDays.parent().children("div.alert-error");
            isValid = false;
            isPrescription = false;
        }
        else
        {
            isValueInsterd = true;
        }

        if (isValueInsterd)
        {
            fillCount++;
        }

        if (!isPrescription && isValueInsterd)
        {
            if ($.trim($nDtabletsData.val()) == '')
            {
                alertDtabletsBlock.show();
            }

            if ($.trim($nMedicineData.val()) == '')
            {

                alertnMedicineBlock.show();
            }

            if ($.trim($nDosage.val()) == '')
            {

                alertnDosageBlock.show();
            }

            if ($.trim($nDays.val()) == '')
            {
                alertnDaysBlock.show();
            }
        }
    });

    if (fillCount <= 0)
    {
        $(".noteDetails :first").each(function() {

            $(this).find(".nDtablets").parent().siblings("div.alert-error").show();
            $(this).find(".nMedicine").parent().siblings("div.alert-error").show();
            $(this).find(".nDosage").parent().siblings("div.alert-error").show();
            $(this).find(".nDays").parent().siblings("div.alert-error").show();
        });
    }

    return isValid;
}

function fnSubmitDialogAndClose()
{
    //Make call to reminder here	
    fncloseDialog();
}

function fncloseDialog()
{
    $(".dctrNt_box").fadeOut(500);
}

$(function() {

    $(".addMed").click(function(event) {
        event.preventDefault();
    });
});
function fnAddNewMedicine()
{
    totalNotedetail = $(".noteDetails").length;
    totalNotedetail = (totalNotedetail + 1);
    noteDetailHtml = lastMedicineContent;
    $("#medicineContent").append('<div class="noteDetails" id="medicine_' + totalNotedetail + '" data-table="' + totalNotedetail + '">' + noteDetailHtml + '</div>');
    $noteDetailHtml = $(".noteDetails:last");


    $noteDetailHtml.find(".nDtablets").parent().prop("for", "inputTablet" + totalNotedetail);
    $noteDetailHtml.find(".nDtablets").prop("id", "nDtablets" + totalNotedetail);
    $noteDetailHtml.find(".nDtablets").prop("name", "nDtablets" + totalNotedetail);

    $noteDetailHtml.find(".nMedicine").parent().prop("for", "inputMedicine" + totalNotedetail);
    $noteDetailHtml.find(".nMedicine").prop("id", "inputMedicine" + totalNotedetail);
    $noteDetailHtml.find(".nMedicine").prop("name", "inputMedicine" + totalNotedetail);

    $noteDetailHtml.find(".nDosage").parent().prop("for", "inputDays" + totalNotedetail);
    $noteDetailHtml.find(".nDosage").prop("id", "inputDosage" + totalNotedetail);
    $noteDetailHtml.find(".nDosage").prop("name", "inputDosage" + totalNotedetail);

    $noteDetailHtml.find(".nPotency").parent().prop("for", "inputTablet" + totalNotedetail);
    $noteDetailHtml.find(".nPotency").prop("id", "inputPotency" + totalNotedetail);
    $noteDetailHtml.find(".nPotency").prop("name", "inputPotency" + totalNotedetail);

    $noteDetailHtml.find(".nDays").parent().prop("for", "inputPotency" + totalNotedetail);
    $noteDetailHtml.find(".nDays").prop("id", "inputDays" + totalNotedetail);
    $noteDetailHtml.find(".nDays").prop("name", "inputDays" + totalNotedetail);

    $noteDetailHtml.find(".druginstruction").prop("id", "druginstruction" + totalNotedetail);
    $noteDetailHtml.find(".druginstruction").prop("name", "druginstruction" + totalNotedetail);

    $("[rel=tooltip]").tooltip({placement: 'top'});
    $noteDetailHtml.find("div.alert-error").hide();
    $noteDetailHtml.addClass("customMedicine");

    $('.clear_field').on('click', function() {

        $parentDiv = $(this).parent().parent().parent().parent().parent();
        $parentDiv.remove();

    });

    $('.nDtablets').autocomplete({source: availableTags});
    $('.nMedicine').autocomplete({source: availableTags});


    //Drug Instruction
    $(".instruction_toogle").click(function(e) {
        $("#shw_dctNt").fadeOut(500);
        $("#shw_dctNt").fadeOut(500);
        $("#shw_rmndNt").fadeOut(500);
        $("#shw_LastRx").fadeOut(500);
        $("#shw_allergies").fadeOut(500);
        $("#shw_drugInstruction").fadeIn(500);

        drugInstruction = $(this).find("input").prop('id');
        $drugInstructionVal = $("#" + drugInstruction);
        $("#shw_drugInstruction").find("p").html($drugInstructionVal.val());
        $("#shw_drugInstruction").find("p").focus();
        $("#dgugInstructiondialog").data("druginsid", drugInstruction);
    });

}

function validForgetPassword()
{
    $(".alert-error").hide();
    emailAddress = $("#inputEmail").val();
    if ($.trim(emailAddress) == '')
    {
        $(".alert-error").show();
        return false;
    }
    else if (!isEmailIdValid(emailAddress))
    {
        $(".alert-error").show();
        return false;
    }
    return true;
}
function fnValidateChangePassword()
{
    currentPassword = $("#current-pwd").val();
    newPassword = $("#pwd").val();
    newConfirmPassword = $("#reenter-pwd").val();

    $("#oldPawErrorMSG").hide();
    $("#newPawErrorMSG").hide();
    $("#newConfirmPawErrorMSG").hide();
    $(".info-msg").hide();
    isValid = true;
    if ($.trim(currentPassword) == '')
    {
        $("#oldPawErrorMSG").show();
        isValid = false;
    }
    if ($.trim(newPassword) == '')
    {
        $("#newPawErrorMSG").show();
        isValid = false;
    }
    if ($.trim(newConfirmPassword) == '')
    {
        $("#newConfirmPawErrorMSG").show();
        isValid = false;
    }
    if (isValid)
    {
        $(".info-msg").show();
    }

    return isValid;
}

$('.clear_field').on('click', function(event) {

    event.preventDefault();
    $parentDiv = $(this).parent().parent().parent().parent().parent();
    $parentDiv.remove();

});


$(function() {

    $(".addMed").click(function(event) {
        event.preventDefault();
    });
});

function fnSubmitDrugInstAndClose()
{
    instrctionId = $("#dgugInstructiondialog").data("druginsid");
    dialogText = $("#shw_drugInstruction").find("p").html();
    $instructionId = $("#" + instrctionId);

    $instructionId.val(dialogText);
    fncloseDialog();
}

$(document).ready(function() {
    $('#list').click(function(event){event.preventDefault();$('#products .item').addClass('list-group-item');});
    $('#grid').click(function(event){event.preventDefault();$('#products .item').removeClass('list-group-item');$('#products .item').addClass('grid-group-item');});
});