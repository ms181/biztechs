<?php
header("Access-Control-Allow-Origin: http://localhost:5173");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

if (isset($_POST["contact"])) {
  $from = "asad@biztechs.in";
  $to = "ms181181181@gmail.com";
  $subject = "New Contact Form Fillup from sulemanmohd.com";
  $message = "Name: " . $_REQUEST["name"] . "\n"
    . "Email: " . $_REQUEST["email"] . "\n"
    . "Project: " . $_REQUEST["phone"] . "\n"
    . "Budget: " . $_REQUEST["subject"] . "\n"
    . "Message: " . $_REQUEST["message"];

  $headers = "From: " . $from;
  if (mail($to, $subject, $message, $headers)) {
      echo "Message was successfully sent";
  } else {
      echo "Something went wrong! Try mailing me instead: =ms181181181@gmail.com";
  }
}
?>
