<?php

    $message= $_POST['message'];
    $headers= 'FROM: site@local.dev';
    mail('github@gmail.com', 'formulaire de contact',$message, $headers);
  
?>