$(document).ready(function() {
    $('#btn1').click(function() {
        if (($(".form-control-name").val().trim().length < 1) || ($(".form-control-surnameP").val().trim().length < 1) || ($(".form-control-surnameM").val().trim().length < 1)) {
            $('.error-vacio').append("Ingrese los datos solicitados");
            $('#e4').removeClass('error-vacio');
            return false;
        } else {
            $('#e4').addClass('error-vacio');
            $('.error-vacio').empty();
            var parametros = {
                "nombre": $('.form-control-name').val(),
                "apellidoP": $('.form-control-surnameP').val(),
                "apellidoM": $('.form-control-surnameM').val()
            };
            $.ajax({
                data: parametros,
                type: 'POST',
                url: '../PHP/insertar_nombre.php',
                success: function(data) {
                    $('#datos').html(data);
                    $('.form-control-surnameM').val('');
                    $('.form-control-surnameP').val('');
                    $('.form-control-name').val('');
                }
            });
            return true;
        }
    });
    $('.form-control-name').keydown(function(tecla) {
        if (tecla.keyCode >= 65 && tecla.keyCode <= 90 || tecla.keyCode === 32 || tecla.keyCode === 08 | tecla.keyCode === 13 || $(".form-control-name").val().trim().length < 1) {
            $('.form-control-name').css('box-shadow', '0 0 0 0.2rem rgb(0 123 255 / 25%)');
            $('.form-control-name').css('border-color', '#80bdff');
            $('#e1').addClass('error-numero');
            $('.error-numero').empty();
        } else {
            $('.form-control-name').css('box-shadow', '0 0 0 0.2rem rgb(225 2 2)');
            $('.form-control-name').css('border', 'red 1px solid');
            $('.error-numero').append("Caracter no valido");
            $('#e1').removeClass('error-numero');
            return false;
        }
    });
    $('.form-control-surnameP').keydown(function(tecla) {
        if (tecla.keyCode >= 65 && tecla.keyCode <= 90 || tecla.keyCode === 32 || tecla.keyCode === 13 || tecla.keyCode === 08 || $(".form-control-surnameP").val().trim().length < 1) {
            $('.form-control-surnameP').css('box-shadow', '0 0 0 0.2rem rgb(0 123 255 / 25%)');
            $('.form-control-surnameP').css('border-color', '#80bdff');
            $('#e2').addClass('error-numero-2');
            $('.error-numero-2').empty();
        } else {
            $('.form-control-surnameP').css('box-shadow', '0 0 0 0.2rem rgb(225 2 2)');
            $('.form-control-surnameP').css('border-color', 'red');
            $('.error-numero-2').append("Caracter no valido");
            $('#e2').removeClass('error-numero-2');
            return false;
        }
    });
    $('.form-control-surnameM').keydown(function(tecla) {
        if (tecla.keyCode >= 65 && tecla.keyCode <= 90 || tecla.keyCode === 32 || tecla.keyCode === 13 || tecla.keyCode === 08 || $(".form-control-surnameM").val().trim().length < 1) {
            $('.form-control-surnameM').css('box-shadow', '0 0 0 0.2rem rgb(0 123 255 / 25%)');
            $('.form-control-surnameM').css('border-color', '#80bdff');
            $('#e3').addClass('error-numero-3');
            $('.error-numero-3').empty();
        } else {
            $('.form-control-surnameM').css('box-shadow', '0 0 0 0.2rem rgb(225 2 2)');
            $('.form-control-surnameM').css('border-color', 'red');
            $('.error-numero-3').append("Caracter no valido");
            $('#e3').removeClass('error-numero-3');
            return false;
        }
    });
});