$("#contactForm").validator().on("submit", function (event) {
	if (event.isDefaultPrevented()) {
		// handle the invalid form...
		formError();
		submitMSG(false, "Form Working is disabled here. It will work on your PHP enabled server!");
	} else {
		// everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
	// Initiate Variables With Form Content
	var name = $("#name").val();
	var email = $("#email").val();
	var phone = $("#phone").val();
	var address = $("#address").val();
	var date = $("#date").val();
	var time = $("#time").val();
	var number = $("#number").val();
	var booking_type = $("#booking_type").val();
	var message = $("#message").val();

	$.ajax({
		type: "POST",
		//Set the Path to Your PHP File here
		url: "/form-process.php",
		data: "name=" + name + "&email=" + email + "&phone=" + phone + "&address=" + address + "&date=" + date + "&time=" + time + "&number=" + number + "&booking_type=" + booking_type + "&message=" + message,
        success : function(text){
			if (text == "success"){
				formSuccess();
				$("#contact_form_fields").slideUp(); //hide form after success
            } else {
                formError();
                submitMSG(false,text);
            }
		}
	});
}


function formSuccess(){
	$("#contactForm")[0].reset();
	submitMSG(true, "Thank you for your message! We will get back to you shortly!")
}

function formError(){
	$(this).removeClass();
}

function submitMSG(valid, msg){
	if(valid){
		var msgClasses = "h3 text-center text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
	$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}