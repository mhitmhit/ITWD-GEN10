
console.log("inside  js file ");
function validateForm(){
	
	
	/** variable declarations:
	**/
	var name = document.forms["contactUs"]["inputName"].value;
	var email = document.forms["contactUs"]["inputEmail"].value;
	var phone = document.forms["contactUs"]["inputPhone"].value;
	var info= document.forms["contactUs"]["additionalInformation"].value;
	
	/** verifiying if form entries are correct:
	**/
	if (name==""){
		alert("Please enter your Name.\n and re-submit");
		document.forms["contactUs"]["inputName"].focus();
	}else if (email==""){
		alert("Please enter your Email.\n an re-submit");
		document.forms["contactUs"]["inputEmail"].focus();
	}else if (phone=="" || isNaN(phone)){
		alert("Please enter your phone. \n In the following Format \n ex:/ 8888888888");
		document.forms["contactUs"]["inputPhone"].focus();
	}else if (info==""){
		alert("Please enter additional info. \n If no additional information available, Please enter: N/A");
		document.forms["contactUs"]["additionalInformatio"].focus();
	} else {
	/** submital alert and page reload
	if all is verified
	**/
	alert("Thank you " + name + " for contacting Mixed Nuts, \n Someone from our team will be in touch with you shortly ...");
	window.location.reload();
	}
}
