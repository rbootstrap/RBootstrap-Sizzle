<?php
$errorMSG = "";

// NAME
if (empty($_POST["name"])) {
    $errorMSG = "Please enter your Name.";
} else {
    $name = $_POST["name"];
}

// EMAIL
if (empty($_POST["email"])) {
    $errorMSG .= "Please enter your Email Address.";
} else {
    $email = $_POST["email"];
}

// Phone
if (empty($_POST["phone"])) {
    $errorMSG = "Please enter your Phone Number.";
} else {
    $phone = $_POST["phone"];
}

// Address
if (empty($_POST["address"])) {
    $errorMSG .= "Please enter your Address.";
} else {
    $address = $_POST["address"];
}
// Date
if (empty($_POST["date"])) {
    $errorMSG = "Please enter the Date.";
} else {
    $date = $_POST["date"];
}

// Time
if (empty($_POST["time"])) {
    $errorMSG .= "Please enter the Time.";
} else {
    $time = $_POST["time"];
}

// Number of people
if (empty($_POST["number"])) {
    $errorMSG = "Enter the Number of People.";
} else {
    $number = $_POST["number"];
}

$booking_type = $_POST["booking_type"];

// MESSAGE
if (empty($_POST["message"])) {
    $errorMSG .= "Please enter your Message";
} else {
    $message = $_POST["message"];
}

//Set the Receiver Email ID and the Subject Here
$EmailTo = "receiver@gmail.com";
$Subject = "Book A Table";

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $name;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $phone;
$Body .= "\n";
$Body .= "Address: ";
$Body .= $address;
$Body .= "\n";
$Body .= "Date: ";
$Body .= $date;
$Body .= "\n";
$Body .= "Time: ";
$Body .= $time;
$Body .= "\n";
$Body .= "Number of People: ";
$Body .= $number;
$Body .= "\n";
$Body .= "Booking Type: ";
$Body .= $booking_type;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

//Set the From Email Address
// send email
$success = mail($EmailTo, $Subject, $Body, "From:contact@yourdomain.com");

// redirect to success page
if ($success && $errorMSG == ""){
   echo "success";
}else{
    if($errorMSG == ""){
		echo "Could not send mail!";
    } else {
		echo $errorMSG;
    }
}

?>