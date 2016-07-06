<?php
    require_once('vendor/phpmailer/phpmailer/class.phpmailer.php');
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

    if(smtpmailer($toAddress, $fromEmail, $fromName, $subject, $message)) {
        // It sent
    } else {
        // it failed
    }

    // $toAddress = "hamlim@outlook.com"; // Test email address
    // $subject = "Someone has requested a quote for Compotool Products";
    // $head = "Below is thier contact information and below that is their quoted materials";
    // $contact = $data["contact"]["name"] + "\n" +  $data["contact"]["email"] + "/n" + $data["contact"]["company_name"] + "\n" + $data["contact"]["phone_number"] + "\n" + $data["contact"]["address"] + "\n" + $data["contact"]["notes"];
    // $splitter = "\n\n\n ----------- DATA ---------- \n\n\n";
    // $inputData = "Units: " + $data["input"]["units"] + "\n" + "ct300 blockup volume: " + $data["input"]["ct300"]["buv"] + "\n" + "ct8504 blockup volume: " + $data["input"]["ct8504"]["buv"] + "\n" + "ct8502 blockup volume: " + $data["input"]["ct8502"]["buv"] + "\n" + "ct300 blockup weight: " + $data["input"]["ct300"]["buw"] + "\n" + "ct850 blockup weight: " + $data["input"]["ct850"]["buw"] + "\n" + "Total blockup weight: " + $data["input"]["total"]["buw"] + "\n" + "Number of ct300 Boards: " + $data["input"]["ct300"]["nob"] + "\n" + "Number of ct8504 Boards: " + $data["input"]["ct8504"]["nob"] + "\n" + "Number of ct8502 Boards: " + $data["input"]["ct8504"]["buw"] + "\n" + "Adhesive: " + "\n" + "Bonded Surface Area: " + $data["input"]["adhesive"]["surface_area"] + "\n" + "Volume of adheisve: " + $data["input"]["adheisve"]["volume"] + "\n" + "Sealer: " + "\n" + "Tool Surface Area: " + $data["input"]["sealer"]["surface_area"] + "\n" + "Volume of Stage 1: " + $data["input"]["sealer"]["stageOne"] + "\n" + "Volume of Stage 2: " + $data["input"]["sealer"]["stageTwo"] + "\n" + "Shipping Weight: " + "\n" + "ct300 Shipping Weight: " + $data["input"]["ship"]["ct300"] + "\n" + "ct850 Shipping Weight: " + $data["input"]["ship"]["ct850"] + "\n" + "Asdhesive Shipping Weight: " + $data["input"]["ship"]["adhesive"] + "\n" + "Sealer stage 1 Shipping Weight: " + $data["input"]["ship"]["sealerStageOne"] + "\n" + "Sealer stage 2 Shipping Weight: " + $data["input"]["ship"]["sealerStageTwo"] + "\n" + "Other Shipping Weight: " + $data["input"]["ship"]["other"] + "\n" + "Total Shipping Weight: " + $data["input"]["ship"]["total"] + "\n";

    // $foot = "This was sent at: " + date('l jS \of F Y h:i:s A');   
    // $message = $head + $contact + $splitter + $inputData + $foot;
    // $message = wordwrap($message, 80, "\r\n");
    // mail($toAddress, $subject, $message);

?>

