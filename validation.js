function validate()
{
	var nam=document.f1.uname.value;
	if(nam=="")
	{
		alert("Please enter  name");
		document.f1.uname.focus;
		return false;
	}
	var pwd=document.f1.pass.value;
	if(pwd=="")
	{
		alert("Please enter  password");
		document.f1.pass.focus;
		return false;
	}
	var email=document.f1.email.value;
	if(email=="")
	{
		alert("Please enter ur emai id");
		document.f1.email.focus;
		return false;
	}
	var phno=document.f1.phone.value;
	len=phno.length
	if(phno=="" || len!=10)
	{
		alert("Please enter  10 digits phone number");
		document.f1.phone.focus;
		return false;
	}
}
