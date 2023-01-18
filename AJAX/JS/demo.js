$(document).ready(function() {
    $('.btn1').click(function() {
        var name = $('.name-1').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n2').empty();
                $('#n2').removeClass('n2');
                $('.n3').empty();
                $('#n3').removeClass('n3');
                $('.n4').empty();
                $('#n4').removeClass('n4');
                $('.n5').empty();
                $('#n5').removeClass('n5');
                $('.n6').empty();
                $('#n6').removeClass('n6');
                $('.n7').empty();
                $('#n7').removeClass('n7');
                $('#n1').addClass('n1');
                $('.n1').append(data);
            }
        });
    });
    $('.btn2').click(function() {
        var name = $('.name-2').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n1').empty();
                $('#n1').removeClass('n1');
                $('.n3').empty();
                $('#n3').removeClass('n3');
                $('.n4').empty();
                $('#n4').removeClass('n4');
                $('.n5').empty();
                $('#n5').removeClass('n5');
                $('.n6').empty();
                $('#n6').removeClass('n6');
                $('.n7').empty();
                $('#n7').removeClass('n7');
                $('#n2').addClass('n2');
                $('.n2').append(data);
            }
        });
    });
    $('.btn3').click(function() {
        var name = $('.name-3').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n1').empty();
                $('#n1').removeClass('n1');
                $('.n2').empty();
                $('#n2').removeClass('n2');
                $('.n4').empty();
                $('#n4').removeClass('n4');
                $('.n5').empty();
                $('#n5').removeClass('n5');
                $('.n6').empty();
                $('#n6').removeClass('n6');
                $('.n7').empty();
                $('#n7').removeClass('n7');
                $('#n3').addClass('n3');
                $('.n3').append(data);
            }
        });
    });
    $('.btn4').click(function() {
        var name = $('.name-4').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n1').empty();
                $('#n1').removeClass('n1');
                $('.n2').empty();
                $('#n2').removeClass('n2');
                $('.n3').empty();
                $('#n3').removeClass('n3');
                $('.n5').empty();
                $('#n5').removeClass('n5');
                $('.n6').empty();
                $('#n6').removeClass('n6');
                $('.n7').empty();
                $('#n7').removeClass('n7');
                $('#n4').addClass('n4');
                $('.n4').append(data);
            }
        });
    });
    $('.btn5').click(function() {
        var name = $('.name-5').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n1').empty();
                $('#n1').removeClass('n1');
                $('.n2').empty();
                $('#n2').removeClass('n2');
                $('.n3').empty();
                $('#n3').removeClass('n3');
                $('.n4').empty();
                $('#n4').removeClass('n4');
                $('.n6').empty();
                $('#n6').removeClass('n6');
                $('.n7').empty();
                $('#n7').removeClass('n7');
                $('#n5').addClass('n5');
                $('.n5').append(data);
            }
        });
    });
    $('.btn6').click(function() {
        var name = $('.name-6').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n1').empty();
                $('#n1').removeClass('n1');
                $('.n2').empty();
                $('#n2').removeClass('n2');
                $('#n3').removeClass('n3');
                $('.n4').empty();
                $('#n4').removeClass('n4');
                $('.n5').empty();
                $('#n5').removeClass('n5');
                $('.n7').empty();
                $('#n7').removeClass('n7');
                $('#n6').addClass('n6');
                $('.n6').append(data);
            }
        });
    });
    $('.btn7').click(function() {
        var name = $('.name-7').text();
        console.log(name);
        var parametros = {
            "nombre": name
        };
        $.ajax({
            data: parametros,
            type: 'POST',
            url: '../PHP/mostrar.php',
            success: function(data) {
                $('.n1').empty();
                $('#n1').removeClass('n1');
                $('.n2').empty();
                $('#n2').removeClass('n2');
                $('.n3').empty();
                $('#n3').removeClass('n3');
                $('.n4').empty();
                $('#n4').removeClass('n4');
                $('.n5').empty();
                $('#n5').removeClass('n5');
                $('.n6').empty();
                $('#n6').removeClass('n6');
                $('#n7').addClass('n7');
                $('.n7').append(data);
            }
        });
    });
});