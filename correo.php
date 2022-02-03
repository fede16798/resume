<?php
    $destinatario = "fede.amico98@gmail.com";

    $name = $_POST['name'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['message'];
    $email = $_POST['email'];

    $mensajeCompleto = "$mensaje \n\n\n";
    $mensajeCompleto .= "Reply-To: $email \n";
    $mensajeCompleto .= "Atte: $name";

    $mail = @mail($destinatario, $asunto, $mensajeCompleto);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000) </script>";
?> 
