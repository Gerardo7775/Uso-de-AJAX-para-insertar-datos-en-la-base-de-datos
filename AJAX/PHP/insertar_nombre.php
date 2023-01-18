<?php
include('conDB.php');
if(isset($_POST['apellidoM'])){
    $nombre = $_POST['nombre'];
    $apellidoP = $_POST['apellidoP'];
    $apellidoM = $_POST['apellidoM'];
    $insertar = "INSERT INTO datos( Nombre, ApellidoP, ApellidoM) VALUES ('$nombre','$apellidoP','$apellidoM')";
    $consulta = mysqli_query($conex, $insertar);
    if($consulta){ ?>
        <div class="alert alert-primary alert-dismissible fade show" style="display: flex; justify-content: space-around;" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                <span class="sr-only">Close</span>
            </button>
            <strong style="padding: 20px">Nombre: <?php echo $_POST['nombre'] ?> <br><br> Apellido Paterno: <?php echo $_POST['apellidoP'] ?> <br><br> Apellido Materno: <?php echo $_POST['apellidoM'] ?> </strong> Estos datos han sido registrados con exito
        </div>
    <?php }
}
?>
