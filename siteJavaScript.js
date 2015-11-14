
//hideMessage - This piece of JavaScript is used to hide the text found by the ID "hideMessage", which is found in the HTML. This is used to hide some form of text on the webpage, so when the user click on that piece of text, the JavaScript will respond by hiding it.

function hideText()
{
    document.getElementById("hideMessage").style.display = "none";
}

//browserType - This is used to show the user what Browser they are using. This is done by creating a button within the HTML and then linking the ID with the JavaScript, so the button will then be functional. When the user clicks the button, it will display underneath the button, what type of JavaScript they are using function.

function browserType()
{
                document.getElementById("browserName").innerHTML = navigator.appName + " type of browser"
                document.getElementById("browserDetail").innerHTML = navigator.userAgent
}

//emailaddress - This piece of script is used to check whether the email address entered by the user is valid or not. This is done by setting two variables, where '@' and '.' need to be present otherwise the Email entered will not be valid. If the user does not enter any of these characters, an alert message will pop up saying: "The Email Address you have entered has not been recognised, please try again!"
function validEmail()
{
     var emailString = document.getElementById("checkEmail").value;

     var isThereAnAtSymbol = emailString.indexOf("@");
     var isThereAFullStop = emailString.indexOf(".");

     if (isThereAnAtSymbol == -1 || isThereAFullStop ==-1)
     {
           alert("The Email Address you have entered has not been recognised, please try again!");
     }

}

//uppercase - This is used to automatically make the users text into capitals, when they are entering there postcode. This is only done by a variable, where the variable will convert any of the text to uppercase where it only identifies "upperCasePostCode". This ID is linked to the input found in the HTML, which will appear as a postcode to the viewer. 


{
     var myStringToConvertToUpperCase = document.getElementById("upperCasePostCode").value;
     myStringToConvertToUpperCase = myStringToConvertToUpperCase.toUpperCase();
     document.getElementById("upperCasePostCode").value = myStringToConvertToUpperCase;
}

//radiobuttons - The Radiobuttons are the buttons found in the Contact page. The Javascript is used so the user can only select one of the few buttons found in the contact page. The user will then choose the radio button relevant to them, where they will then send the email and the reciever will be able to understand what the problem is.
function getEmailType()

{

     var allSelections = document.getElementsByName("Message");

 

     for (var i = 0; i< allSelections.length; i++)

     {

           if (allSelections[i].checked)

                {

                     alert(allSelections[i].value);

                }         

    }

}


	 
//SendEmail - This function is linked to a button within the HTML. This button is used to send the email to the recipient where an alert will be displayed saying: "Your email has been sent and we will get back to you shortly regarding to your". However, this isn't all of the message as I have also added two IDs called 'nameToUse' and  'allSeclection[i].value'. The nametouse is used to display the name entered in the 'Name' textbox and the other ID is linked to the radio button, which will display the text in the radio button. So the full text should appear like: 'Hello (name), Your email has been sent and we will get back to you shortly regarding to your (radiobutton text)'.   If the user has made an error from above, for example not choosing a radiobutton, the email will not be sent.

function sendEmail()
{
     var allSelections = document.getElementsByName("Message");
     for (var i = 0; i< allSelections.length; i++) 
     {
           if (allSelections[i].checked) 
                {
                     var nameToUse = document.getElementById("Name").value;
                     alert(" Hello " + nameToUse + ", Your email has been sent and we will get back to you shortly, regarding your " + allSelections[i].value );
                }          
    }
}





 