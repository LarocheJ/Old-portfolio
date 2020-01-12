<?php 
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $from = 'jimmy@jimmylaroche.com';
    $subject = 'New message from '.$_POST['name'].' on jimmylaroche.com';
    $body = "User Name: $name.\n".
    "User Email: $email.\n".
    "User Message: $message.\n";

    $to = 'jimmy@jimmylaroche.com';
    $headers = "From: $from \r\n";
    $headers .= "Reply-To: $email \r\n";

    if(mail($to, $subject, $body, $headers)){
        header('Location: index.html?message=success');
    } else {
        header('Location: index.html?message=error');
    } 
?>