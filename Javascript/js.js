function alert1(){
	if(confirm('Clicking "ok" will bring you to Amazon.com. Are you sure?')){
		window.open("http://www.amazon.com/Bandai-Hobby-Unicorn-Gundam-Model/dp/B00O3RUFQ0/ref=sr_1_1?ie=UTF8&qid=1465119562&sr=8-1&keywords=unicorn+gundam+PG");
	}
}

function alert2(){
	if(confirm('Clicking "ok" will bring you to Amazon.com. Are you sure?')){
		window.open("http://www.amazon.com/Good-Smile-One-Punch-Man-Nendoroid/dp/B017LEIUHC/ref=sr_1_1?ie=UTF8&qid=1465132288&sr=8-1&keywords=one+punch+man+figure");
	}
}

function alert3(){
	if(confirm('Clicking "ok" will bring you to Amazon.com. Are you sure?')){
		window.open("http://www.amazon.com/Premia-Kaneki-Halloween-Cosplay-Leather/dp/B01C718U7O/ref=sr_1_1?ie=UTF8&qid=1465132280&sr=8-1-spons&keywords=tokyo+ghoul+cosplay+mask&psc=1");
	}
}

function login()
{
	var uname1 = localStorage.getItem('username');
	var passw1 = localStorage.getItem('passw');
	if(email.value == uname1 && pwd.value == passw1)
	{
		window.open("Home.html")
		window.close()
	}
	else
	{
		alert("Incorrect username or password.")
		window.open("Login.html")
		window.close()
	}
}

function password()
{
	if(passw.value == cpassw.value){
		var uname = document.getElementById("username").value;
		var pname = document.getElementById("passw").value;
		localStorage.setItem('username', uname);
		localStorage.setItem('passw', pname);
		alert("Welcome!!!! Thanks for joining us, click 'ok' to login now!")
		window.location ="login.html"
	}
	else{
		alert("Password and confirm password are not matched.")
		window.open("Signup.html")
		window.close()
	}
}

function popup(){
	alert("Thanks for the message. Your feedback has sent to us successfully. Click 'ok' to continue.")
	window.open("Home.html")
	window.close()
}

function alert5(){
	alert("We will send an e-mail to your e-mail address. Please kindly check your inbox.")
	window.open("Home.html")
	window.close()
}