<?php
    $destinatario = "fede.amico98@gmail.com"    ;

    $name = $_POST['name'];
    $asunto = $_POST['asunto'];
    $mensaje = $_POST['message'];
    $email = $_POST['email'];

    $header = "Enviado desde la pagina de Federico Amico";
    $mensajeCompleto = $mensaje . "\nAtentamente: " . $name;

    $mail = @mail($destinatario, $email, $asunto, $mensajeCompleto, $header);
    echo "<script>alert('Correo enviado exitosamente')</script>";
    echo "<script> setTimeout(\"location.href='index.html'\", 1000) </script>";
?> 