<?php 

require_once 'mandrill-api-php/src/Mandrill.php'; //Not required with Composer
$mandrill = new Mandrill('0D_HVux4tEXJNA5Xw3d49A');

$firstname = $_POST ['firstname'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "alexander.tomlins@alexandertomlins.co.uk";
$subject = "New Message from " . $firstname . " " .  $surname;

if (!eregi("^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$", $email)){ 
echo "<center>Invalid email</center>";
}else{
echo "<center>Valid Email</center>";
}


mail ($to, $email, $subject, $message, "From: "  );
if (mail($to, $subject, $message, $email)) {
echo "Mail Sent. Thank you " . $firstname . ", I will contact you shortly.";
} else {
	echo "There is an error with the server, please try again later.";
}
?>

