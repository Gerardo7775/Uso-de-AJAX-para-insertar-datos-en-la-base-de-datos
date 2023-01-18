<?php

include('conDB.php');
$name = $_POST['nombre'];
$consulta = "SELECT * FROM datos WHERE Nombre ='$name'";
$resultado = mysqli_query($conex, $consulta);
while($datos = mysqli_fetch_assoc($resultado)){?>
    <span class="badge badge-primary">Nombre(s): <?php echo $datos['Nombre']; ?></span>
    <span class="badge badge-primary">Apellido P: <?php echo $datos['ApellidoP']; ?></span>
    <span class="badge badge-primary">Apellido M: <?php echo $datos['ApellidoM']; ?></span>
<?php }

?>