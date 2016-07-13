<?php
    require_once('vendor/phpmailer/phpmailer/PHPMailerAutoload.php');
    define('GUSER', 'compotoolmailer@gmail.com'); // GMail username
    define('GPWD', 'lxosdqpyejxsefpw'); // GMail password

	$data = file_get_contents("php://input");
    $data = json_decode($data, true);
    $toAddress = $data["toAddress"];
    $subject = $data["subject"];
    $message = $data["message"];
    $fromEmail = "compotoolmailer@gmail.com";
    $fromName = "Compotool Web App";



    function smtpmailer($to, $from, $from_name, $subject, $body) { 
        global $error;
        $mail = new PHPMailer();  // create a new object
        $mail->IsSMTP(); // enable SMTP
        $mail->SMTPDebug = 0;  // debugging: 1 = errors and messages, 2 = messages only
        $mail->SMTPAuth = true;  // authentication enabled
        $mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for GMail
        $mail->Host = 'smtp.gmail.com';
        $mail->Port = 465; 
        $mail->Username = GUSER;  
        $mail->Password = GPWD;           
        $mail->SetFrom($from, $from_name);
        $mail->Subject = $subject;
        $mail->Body = $body;
        $mail->AddAddress($to);
        if(!$mail->Send()) {
            $error = 'Mail error: '.$mail->ErrorInfo; 
            return false;
        } else {
            $error = 'Message sent!';
            return true;
        }
    }

    smtpmailer($toAddress, $fromEmail, $fromName, $subject, $message)
?>

