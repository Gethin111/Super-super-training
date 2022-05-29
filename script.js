function validateform(){  
  var aname=document.myform.aname.value;  
  var Email=document.myform.Email.value;  
  var message=document.myform.message.value;  
  var phone=document.myform.phone.value;   
  if (aname==null || aname==""||Email==null || Email==""||message==null || message==""||phone==null || phone=="")
  {  
    alert("Information cannot be empty");  
    return false;  
  }
  else if(phone.length!==6){
    alert("please enter 6 digits");
    return false;
  }
}
//Gethin(Wu Guoxiang)The main function of this function is to let the user to enter text and numbers, when there is no input or text and number input error display: the information can not be empty. When the input is correct, it will show the login success, which is the function of this script, widely used in the login interface of the input.


function choose(){
var value = document.getElementById("who").value
if(value=="student"){
  location.replace("course details.html")
  return true
}
else if(value=="parent"){
  location.replace("index.html")
  return true
}
else{
  alert("Please enter student or parent")
}
}
